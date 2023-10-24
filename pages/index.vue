<template>
  <main class="flex flex-col gap-6">
    <header class="flex justify-center">
      <h1 class="p-2">Nasa Image Search App</h1>
    </header>
    <div class="flex p-2 justify-center">
      <p>This is an app to find cool space images from Nasa's API</p>
    </div>
    <div>
        <NuxtPicture format="avif,webp,jpg" :src="dailyImage" sizes="100vw" />
    </div>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const apiKey: string | unknown = config.public.apiKey;
const url: string = `https://api.nasa.gov/planetary/apod?api_key=`;
console.log("apiKey ", apiKey);

const { data: images }: any = await useFetch(`${url}${apiKey}`);
console.log("images ", images);
const dailyImage: string = await images?._rawValue?.hdurl;
console.log("dailyImage ", dailyImage);

</script>

<style lang="scss" scoped></style>
