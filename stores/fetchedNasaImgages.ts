interface ThumbnailInfo {
  thumbnail: string;
  nasa_id: string;
  title: string;
  date_created: string;
  description: string;
  keywords: string;
}

// Rememer this for ease of use:
// ref()s become state properties
// computed()s become getters
// function()s become actions

export const useFetchedImagesStore = defineStore("fetchedImages", () => {
  const thumbnailInfoList: ThumbnailInfo[]  = reactive<ThumbnailInfo[]>([]);

  const url: string = "https://images-api.nasa.gov/search?q=";
  const extraParams: string = "&media_type=image";
  let imageData: any;

  const useNasaImgSearch = computed(() => async (searchQuery: any) => {
    const { data: images }: any = await useFetch(
      `${url}${searchQuery}${extraParams}`,
      {
        lazy: true,
        server: false,
      }
    );

    imageData = await images?._rawValue?.collection?.items;
    console.log(imageData);

    for (const item of imageData) {
      const dataItems = item.data;
      const links = item.links;

      for (const dataItem of dataItems) {
        if (dataItem.hasOwnProperty("nasa_id") && dataItem.nasa_id) {
          for (const link of links) {
            if (link.rel === "preview" && link.render === "image") {
              thumbnailInfoList.push({
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
   
  });
  console.log("thumbnail info ", thumbnailInfoList);
  return { thumbnailInfoList, useNasaImgSearch};
  
});
