export const useImgDetailsStore = defineStore("imgDetails", {
  state: () => ({
    imgArr: [],
    fetchIssues: "",
    hasFetchIssues: false,
    isFetching: false,
  }),
  actions: {
    async getImgDetails(nasa_id: string) {
      this.isFetching = true;
      const url = "https://images-api.nasa.gov/asset/";
      try {
        const { pending, data: details }: any = await useFetch(
          `${url}${nasa_id}`,
          {
            lazy: true,
            server: false,
          }
        );
        console.log(details)
        console.log('new img arr', details?._rawValue?.collection?.items)
    //    const getImgArr = details?._rawValue?.collection?.items;
    //    console.log(getImgArr)
       this.imgArr = details?._rawValue?.collection?.items;
    //    ?.items?.find((img: string) => img.includes("large"));
    //    for (const imgLinks of imgArr) {
    //     if (imgLinks.)
    //    }
    
    
      } catch (error) {
        this.isFetching = false;
        this.hasFetchIssues = true;
        (this.fetchIssues = "Error fetching NASA images:"), error;
        console.error("Error fetching NASA images:", error);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
