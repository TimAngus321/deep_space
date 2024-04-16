<script setup lang="ts">
const { nasa_id } = useRoute().params;

const nasaImgsStore = useFetchedImgsStore();
let selectedImgDetails = nasaImgsStore.selectedImg(nasa_id);

const imgArrStore = useImgDetailsStore();
imgArrStore.getImgArr(nasa_id);
imgArrStore.getImgDetailsAgain(nasa_id);
</script>

<template>
  <div class="flex flex-row justify-between gap-20 w-full h-auto py-4">
    <div
      class="flex flex-1 w-full max-w-full h-full justify-center object-contain"
      v-if="!imgArrStore.isFetching && imgArrStore.imgArr"
    >
      <!-- ToDo sort out how to handle images correctly. (don't strech the height)-->
      <NuxtLink :to="imgArrStore.imgArr[0]?.href">
        <NuxtPicture
          fit="contain"
          :src="imgArrStore.imgArr[0]?.href"
          :alt="selectedImgDetails?.title"
          sizes="100vw sm:50vw md:400px"
          height="auto"
          width="100%"
          loading="lazy"
          class="flex flex-1 w-full h-fit object-contain justify-center py-4"
          placeholder
        />
      </NuxtLink>
    </div>
    <div v-else-if="imgArrStore.isFetching">
      <USkeleton class="w-[full] h-[full] dark:bg-gray-700" />
    </div>
    <div v-else-if="!imgArrStore.imgArr">
      <p>Issue getting image</p>
    </div>
    <div class="flex flex-1 flex-col gap-10 py-4">
      <div class="flex flex-col gap-2" v-if="selectedImgDetails">
        <h1
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          {{ selectedImgDetails?.title }}
        </h1>
        <p v-html="selectedImgDetails?.description"></p>
        <p>Keywords: {{ selectedImgDetails?.keywords }}</p>
        <p>Nasa ID: {{ nasa_id }}</p>
      </div>
      <div class="flex flex-col gap-2" v-else-if="imgArrStore?.imgDetails">
        <h1
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          {{ imgArrStore?.imgDetails?.title }}
        </h1>
        <p v-html="selectedImgDetails?.description"></p>
        <p>Keywords: {{ imgArrStore?.imgDetails?.keywords }}</p>
        <p>Nasa ID: {{ nasa_id }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
