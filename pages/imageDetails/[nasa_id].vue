<script setup lang="ts">
const { nasa_id } = useRoute().params;
console.log(nasa_id)

// To pass data add a store like Pinia 
// Request needed from Nasa (for large img etc): https://images-api.nasa.gov/asset/

const nasaImgsStore = useFetchedImgsStore();
const selectedImg = nasaImgsStore.selectedImg(nasa_id);

// Remove and just call useFetch? 

// GO OVER USE FETCH VIDEO FROM NET NINJA

// const imgDetailsStore = useImgDetailsStore();
// const imgArr = await imgDetailsStore.getImgDetails(nasa_id)
// console.log(imgArr);
// const imgDetails: string[] = imgDetailsStore.getImgDetails(nasa_id)
// const imgArr: string[] = Promise.resolve(imgDetails)
// console.log(imgDetails)




// const url = 'https://images-api.nasa.gov/asset/'

// const { pending, data: details }: any = await useFetch(
//     `${url}${nasa_id}`,
//     {
//       lazy: true,
//       server: false,
//     }
//   );

//   const imgArr = details?._rawValue?.collection?.items;
//   console.log(imgArr)
  

//   console.log(details)


// <img :src="imgDetails[0]" />

</script>

<template>
  <div>
    <h1>Nasa ID: {{ nasa_id }}</h1>
    <p>Img Tite: {{ selectedImg?.title }}</p>
  </div>
</template>

<style scoped></style>
