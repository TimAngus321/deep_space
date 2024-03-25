<script setup lang="ts">
const { nasa_id } = useRoute().params;
console.log(nasa_id)

// To pass data add a store like Pinia 
// Request needed from Nasa (for large img etc): https://images-api.nasa.gov/asset/

const nasaImgsStore = useFetchedImgsStore();
const selectedImg = nasaImgsStore.selectedImg(nasa_id);


const url = 'https://images-api.nasa.gov/asset/'

const { pending, data: details }: any = await useFetch(
    `${url}${nasa_id}`,
    {
      lazy: true,
      server: true,
    }
  );

  console.log(details)

</script>

<template>
  <div>
    <h1>Nasa ID: {{ nasa_id }}</h1>
    <p>Img Tite: {{ selectedImg?.title }}</p>

  </div>
</template>

<style scoped></style>
