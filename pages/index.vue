<!-- 
    ToDo: Put the img and info into a nice card from Nuxt UI
 -->

<template>
  <main class="flex flex-col gap-6">
    <header class="flex justify-center">
      <h1 class="p-2 font-bold text-900">Nasa Image Search App</h1>
    </header>

    <UContainer class="flex flex-row w-full h-full items-center">
      <div class="flex flex-col p-2 gap-6 justify-center">
        <h3>This is an app to find cool space images from Nasa's API</h3>
        <p>What this app does</p>
        <p>Purpose of this app:</p>
        <p>ToDo</p>
      </div>
      <div v-if="isImg">
        <NuxtPicture
          format="avif,webp,jpg"
          :src="dailyImageVideo"
          sizes="100vw"
          height="400px"
        />
      </div>
      <div v-else class="w-full">
        <iframe
          width="100%"
          height="400px"
          :src="dailyImageVideo"
          frameborder="0"
          allowfullscreen
        ></iframe>
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
