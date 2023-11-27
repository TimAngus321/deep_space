// ToDo create useState for image fetch 
// Google how to set up useState equivalent for Nuxt/Vue and use here instead of in space-image-search


// export const use

// interface ThumbnailInfo {
//     thumbnail: string;
//     nasa_id: string;
//   }
  
  // let thumbnailInfoList: ThumbnailInfo[] = [];
  // Move this into composable? Trigger when click? 
//   let imageData: any;
//   let isFetching: boolean;
  
//   const searchNasaLibrary = async (searchQuery: any) => {
//     isFetching = true;
//     console.log(`${url}${searchQuery}${extraParams}`);
//     const { pending, data: images }: any = await useFetch(`${url}${searchQuery}${extraParams}`, {
//     lazy: true,
//     server: false
//   }
//     );
//     imageData = await images?._rawValue?.collection?.items;
//     console.log(imageData);
  
//     for (const item of imageData) {
//       const dataItems = item.data;
//       const links = item.links;
  
//       for (const dataItem of dataItems) {
//         if (dataItem.hasOwnProperty("nasa_id") && dataItem.nasa_id) {
//           for (const link of links) {
//             if (link.rel === "preview" && link.render === "image") {
//               thumbnailInfoList.push({
//                 thumbnail: link.href,
//                 nasa_id: dataItem.nasa_id,
//               });
//             }
//           }
//         }
//       }
//     }
//     console.log("thumbnail info ", thumbnailInfoList);
//     isFetching = false;
//   };