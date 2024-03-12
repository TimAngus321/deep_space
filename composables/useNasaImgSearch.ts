// ToDo create useState for image fetch
// Google how to set up useState equivalent for Nuxt/Vue and use here instead of in space-image-search

export const useNasaImgSearch = async (searchQuery: any) => {
  interface ThumbnailInfo {
    thumbnail: string;
    nasa_id: string;
  }

  const url: string = "https://images-api.nasa.gov/search?q=";
  const extraParams: string = "&media_type=image";
  let imageData: any;

  const thumbnailInfoList: any = reactive<ThumbnailInfo[]>([]);
  const { pending, data: images }: any = await useFetch(
    `${url}${searchQuery}${extraParams}`,
    {
      lazy: true,
      server: false,
    }
  );
  imageData = await images?._rawValue?.collection?.items;

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
  console.log("thumbnail info ", thumbnailInfoList);

  return { thumbnailInfoList };
};
