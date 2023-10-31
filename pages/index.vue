<template>
  <main class="flex flex-col h-full gap-6">
    <header class="flex justify-center">
      <h1 class="p-2 font-bold text-900">Nasa Image Search App</h1>
    </header>

    <UContainer padding="0" class="flex flex-row w-full h-full items-center">
      <div class="flex flex-col flex-grow-1 p-2 gap-6 justify-center">
        <h3>
          This app allows you to search for cool space images from Nasa's APIs.
        </h3>
        <p>Purpose of this app:</p>
        <p>ToDo:</p>
      </div>
      <div class="flex flex-grow-3">
      <div v-if="isImg">
        <NuxtPicture
          format="avif,webp,jpg"
          :src="dailyImageVideo"
          sizes="100vw"
          height="100%"
        />
      </div>
      <div v-else class="w-full">
        <iframe
          width="100%"
          height="100%"
          :src="dailyImageVideo"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const apiKey: string = config.public.apiKey;
const url: string = `https://api.nasa.gov/planetary/apod?api_key=`;
let isImg: boolean = true;

const { data: images }: any = await useFetch(`${url}${apiKey}`);
console.log("images ", images);

let dailyImageVideo: string = "";

if (images._rawValue?.hdurl > 0) {
  dailyImageVideo = images?._rawValue?.hdurl;
} else {
  dailyImageVideo = images?._rawValue?.url;
}

if (images?._rawValue?.media_type === "video") {
  isImg = false;
}

console.log("isImg ", isImg);

console.log("dailyImage ", dailyImageVideo);
</script>

<style lang="scss" scoped></style>
