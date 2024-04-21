<script setup lang="ts">
const { nasa_id } = useRoute().params;

const nasaImgsStore = useFetchedImgsStore();
let selectedImgDetails = nasaImgsStore.selectedImg(nasa_id);

const imgArrStore = useImgDetailsStore();
imgArrStore.getImgArr(nasa_id);
imgArrStore.getImgDetailsAgain(nasa_id);
</script>

<template>
  <div
    class="flex lg:flex-row flex-col justify-between gap-2 lg:gap-20 w-full h-auto pb-4"
  >
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
      <div class="flex flex-col py-2" v-if="selectedImgDetails">
        <h1
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          {{ selectedImgDetails?.title }}
        </h1>
        <p
          v-if="selectedImgDetails?.date_created"
          class="font-light text-gray-500"
        >
          {{
            new Date(selectedImgDetails?.date_created)?.toLocaleDateString(
              "en-GB"
            )
          }}
        </p>
        <div class="flex flex-col gap-2 py-2">
          <p
            v-if="selectedImgDetails?.description"
            v-html="selectedImgDetails?.description"
          ></p>
          <p v-if="selectedImgDetails?.keywords">
            Keywords:
            {{
              selectedImgDetails?.keywords
                ?.flat()
                ?.toString()
                ?.replace(/,/g, ", ")
            }}
          </p>
          <p v-if="selectedImgDetails?.center">Center: {{ selectedImgDetails?.center }}</p>
          <p v-if="selectedImgDetails?.secondary_creator">Secondary Creator: {{ selectedImgDetails?.secondary_creator }}</p>
          <p>Nasa ID: {{ nasa_id }}</p>
        </div>
      </div>
      <div class="flex flex-col py-2" v-else-if="imgArrStore?.imgDetails">
        <h1
          class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          {{ imgArrStore?.imgDetails?.title }}
        </h1>
        <p
          v-if="imgArrStore?.imgDetails?.date_created"
          class="font-light text-gray-500"
        >
          {{
            new Date(imgArrStore?.imgDetails?.date_created)?.toLocaleDateString(
              "en-GB"
            )
          }}
        </p>
        <div class="flex flex-col gap-2 py-2">
          <p
            v-if="imgArrStore?.imgDetails?.description"
            v-html="imgArrStore?.imgDetails?.description"
          ></p>
          <p v-if="selectedImgDetails?.keywords">
            Keywords:
            {{
              imgArrStore?.imgDetails?.keywords &&
              imgArrStore?.imgDetails?.keywords
                ?.flat()
                ?.toString()
                ?.replace(/,/g, ", ")
            }}
          </p>
          <p v-if="imgArrStore?.imgDetails?.center">Center: {{ imgArrStore?.imgDetails?.center }}</p>
          <p v-if="imgArrStore?.imgDetails?.secondary_creator">Secondary Creator: {{ imgArrStore?.imgDetails?.secondary_creator }}</p>

          <p>Nasa ID: {{ nasa_id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
