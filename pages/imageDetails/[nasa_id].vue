<script setup lang="ts">
const { nasa_id } = useRoute().params;

const nasaImgsStore = useFetchedImgsStore();
let selectedImgDetails = nasaImgsStore.selectedImg(nasa_id);

const imgArrStore = useImgDetailsStore();
imgArrStore.getImgArr(nasa_id);
imgArrStore.getImgDetailsAgain(nasa_id);
</script>

<template>
  <div class="flex flex-row justify-between gap-20 w-full py-4">
    <div
      class="flex flex-1 w-full content-center object-contain"
      v-if="!imgArrStore.isFetching && imgArrStore.imgArr"
    >

    <!-- ToDo sort out how to handle images correctly. (don't strech the height)-->
      <NuxtPicture
        fit="contain"
        :src="imgArrStore.imgArr[0]?.href"
        :alt="selectedImgDetails?.title"
        loading="lazy"
        class="flex flex-1 w-full object-contain justify-center py-4"
        placeholder
      />
    </div>
    <div v-else-if="imgArrStore.isFetching">
      <USkeleton class="w-[full] h-[full] dark:bg-gray-700" />
    </div>
    <div v-else-if="!imgArrStore.imgArr">
      <p>Issue getting image</p>
    </div>
    <div class="flex flex-1 flex-col gap-10 py-4">
      <div class="flex flex-col gap-2" v-if="selectedImgDetails">
        <h1>{{ selectedImgDetails?.title }}</h1>
        <p v-html="selectedImgDetails?.description"></p>
        <p>Keywords: {{ selectedImgDetails?.keywords }}</p>
        <p>Nasa ID: {{ nasa_id }}</p>
      </div>
      <div class="flex flex-col gap-2" v-else-if="imgArrStore?.imgDetails">
        <h1>{{ imgArrStore?.imgDetails?.title }}</h1>
        <p v-html="imgArrStore?.imgDetails?.description"></p>
        <p>Keywords: {{ imgArrStore?.imgDetails?.keywords }}</p>
        <p>Nasa ID: {{ nasa_id }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
