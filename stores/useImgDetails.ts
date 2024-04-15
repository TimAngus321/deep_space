export const useImgDetailsStore = defineStore("imgDetails", {
  state: () => ({
    imgArr: [],
    imgDetails: [],
    fetchIssues: "",
    hasFetchIssues: false,
    isFetching: false,
  }),
  actions: {
    async getImgArr(nasa_id: string) {
      this.isFetching = true;
      const config = useRuntimeConfig();
      const apiKey: string = config.public.apiKey;
      const url = "https://images-api.nasa.gov/asset/";
      try {
        const { pending, data: details }: any = await useFetch(
          `${url}${nasa_id}`
        );

        // As far as I can tell all the array data has jpg as backups. There's not enough
        // info to be sure but this should filter out any weird file formats for the "orig" file
        const filteredImgArr = details?._rawValue?.collection?.items.filter((img) =>
        img?.href.includes(".jpg"));

        // For each image href create a new array changing http to https. I know they exist just 
        // need to mod the img src
        const httpsImgArr = filteredImgArr?.map(item => {
          return {
              href: item.href.replace("http", 'https')
          };
      });

        console.log(httpsImgArr)
        this.imgArr = httpsImgArr;


      } catch (error) {
        this.isFetching = false;
        this.hasFetchIssues = true;
        (this.fetchIssues = "Error fetching NASA images:"), error;
        console.error("Error fetching NASA images:", error);
      } finally {
        this.isFetching = false;
      }
    },
    async getImgDetailsAgain(nasa_id: string) {
      const searchImgDataUrl = "https://images-api.nasa.gov/search?q=";
      try {
        const { pending, data: fetchedImgDetails }: any = await useFetch(
          `${searchImgDataUrl}${nasa_id}`
        );
        this.imgDetails = fetchedImgDetails._rawValue?.collection?.items[0]?.data[0];
      } catch (error) {
        console.error("Error fetching NASA images:", error);
      } finally {
        console.log("imgDetails fetched again successfully");
      }
    },
  },
});
