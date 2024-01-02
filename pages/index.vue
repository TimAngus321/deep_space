<template>
  <main class="flex flex-col h-full gap-6">
    <header class="flex justify-center">
      <h1
        class="p-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        Nasa Image Search App
      </h1>
    </header>

    <div
      class="flex flex-row h-full justify-between gap-20 w-full p-4"
    >
      <div class="flex flex-col flex-wrap p-2 gap-2 w-6/12 self-center">
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          About App
        </h3>
        <p class="p-2">
          This app allows you to search for incredible images of deep space using Nasa's APIs
          and create a profile where you can save your favorite finds. This app can also be extended
          to use other APIs to search for comets or get updates for various space projects.
        </p>
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          Technology focus of this app:
        </h3>
        <p class="p-2">
          This app uses Nuxt, Vue, Tailwind, GraphQL, Docker and MongoDB Atlas as a tech stack and will
          be hosted on Vercel. 
        </p>
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          Ideas to add:
        </h3>
        <p class="p-2">
          Use Pinia for state management and allow use more Nasa APIs for space info!
        </p>
      </div>
      <div class="flex w-6/12">
        <div v-if="isImg" class="flex flex-wrap w-full object-contain content-center">
          <NuxtPicture
            fit="cover"
            format="avif,webp,jpg"
            :src="dailyImageVideo"
            class="w-full flex justify-center"
          />
        </div>
        <div v-else class="flex flex-wrap w-full object-contain content-center">
          <iframe
            :src="dailyImageVideo"
            frameborder="0"
            allowfullscreen
            class="w-full h-full flex justify-center"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Also use SSR to ensure it's just run once server side
// use state & date to ensure that request it only sent once a day.
// If date is not the same as new Date or dailyImageVideo has no value run a new request

const config = useRuntimeConfig();
const apiKey: string = config.public.apiKey;
const url: string = `https://api.nasa.gov/planetary/apod?api_key=`;
let isImg: boolean = true;

const { data: images }: any = await useFetch(`${url}${apiKey}`);

let dailyImageVideo: string = "";

if (images._rawValue?.hdurl > 0) {
  dailyImageVideo = images?._rawValue?.hdurl;
} else {
  dailyImageVideo = images?._rawValue?.url;
}

if (images?._rawValue?.media_type === "video") {
  isImg = false;
}

</script>

<style lang="scss" scoped></style>
