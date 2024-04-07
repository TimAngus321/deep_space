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
  <div class="flex flex-row h-full justify-between gap-20 w-full p-4">
    <div v-if="!imgDetailsStore.isFetching && imgDetailsStore.imgArr">
      <NuxtPicture
        :src="imgDetailsStore.imgArr[0]?.href"
        :alt="selectedImg?.title"
        loading="lazy"
        height="100%"
        width="100%"
      />
    </div>
    <div v-else-if="imgDetailsStore.isFetching && !imgDetailsStore.imgArr">
      <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
    </div>
    <div>
      <h1>Nasa ID: {{ nasa_id }}</h1>
      <p>Img Tite: {{ selectedImg?.title }}</p>
    </div>
  </div>
</template>

<style scoped></style>
