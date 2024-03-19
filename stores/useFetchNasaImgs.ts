interface ThumbnailInfo {
  thumbnail: string;
  nasa_id?: string;
  title: string;
  date_created: string;
  description: string;
  keywords: string[];
}

export const useFetchedImgsStore = defineStore("fetchedImages", {
  state: () => ({
    nasaImgs: [],
    fetchIssues: "",
    hasFetchIssues: false,
    isFetching: false,
  }),
  getters: {
    selectedImg(state) {
      return (nasaID: ThumbnailInfo["nasa_id"]) => {
        return state.nasaImgs.find((exImg) => exImg?.nasa_id === nasaID);
      };
    },
  },
  actions: {
    async nasaImgSearch(q: string) {
      this.isFetching = true;
      const url: string = "https://images-api.nasa.gov/search?q=";
      const extraParams: string = "&media_type=image";

      try {
        const { data: images }: any = await useFetch(
          `${url}${q}${extraParams}`,
          {
            lazy: true,
            server: false,
          }
        );

        const imageData = images?._rawValue?.collection?.items;
        this.nasaImgs.splice(0);

        for (const item of imageData) {
          const dataItems = item.data;
          const links = item.links;

          for (const dataItem of dataItems) {
            if (dataItem.hasOwnProperty("nasa_id") && dataItem.nasa_id) {
              for (const link of links) {
                if (link.rel === "preview" && link.render === "image") {
                  this.nasaImgs.push({
                    thumbnail: link.href,
                    nasa_id: dataItem.nasa_id,
                    title: dataItem.title,
                    date_created: dataItem.date_created,
                    description: dataItem.description,
                    keywords: dataItem.keywords,
                  });
                }
              }
            }
          }
        }
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
