<script setup lang="ts">
const { nasa_id } = useRoute().params;
console.log(nasa_id);

// To pass data add a store like Pinia
// Request needed from Nasa (for large img etc): https://images-api.nasa.gov/asset/

const nasaImgsStore = useFetchedImgsStore();
const selectedImg = nasaImgsStore.selectedImg(nasa_id);

const imgDetailsStore = useImgDetailsStore();
imgDetailsStore.getImgDetails(nasa_id);
console.log(imgDetailsStore.imgArr);

// const url = 'https://images-api.nasa.gov/asset/'

// const { pending, data: betterImages }: any = await useFetch(
//     `${url}${nasa_id}`,
//   );

//   const imgArr = betterImages ? betterImages?._rawValue?.collection?.items : [];
//   console.log(imgArr)

//   console.log(betterImages)

</script>

<template>
  <div>
    <h1>Nasa ID: {{ nasa_id }}</h1>
    <p>Img Tite: {{ selectedImg?.title }}</p>
    <div v-if="!imgDetailsStore.isFetching && imgDetailsStore.imgArr">
      <img :src="imgDetailsStore.imgArr[0]?.href" alt="" />
    </div>
    <div
      v-else-if="imgDetailsStore.isFetching && !imgDetailsStore.imgArr"
    >
    <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
  </div>
  </div>
</template>

<style scoped></style>
