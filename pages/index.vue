<template>
  <main class="flex flex-col h-full lg:gap-6 gap-2">
    <header class="flex justify-center p-2">
      <h1
        class="p-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        Nasa Image Search App
      </h1>
    </header>

    <div
      class="flex lg:flex-row flex-col-reverse lg:h-full max-h-max lg:w-full justify-between gap-5 lg:gap-20 w-full p-4"
    >
      <div class="flex flex-1 flex-col p-2 gap-2 w-full lg:w-6/12 self-center">
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          About App
        </h3>
        <p class="p-2">
          This app allows you to search for incredible images of deep space and
          other great images using Nasa's APIs. This app could also be extended
          to use other APIs to search for comets or get updates for various
          space projects.
        </p>
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          Technology focus of this app:
        </h3>
        <p class="p-2">
          This app uses Nuxt, Vue, Tailwind, Pinia as a tech stack and is hosted on Vercel.
        </p>
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          Ideas to add:
        </h3>
        <p class="p-2">
          Allow user to experience more Nasa APIs for space info! Perhaps setup if GraphQL, Apollo and MongoDB
          Atlas for saving favorite images but only add if there's more use cases than just this.
        </p>
      </div>
      <div class="flex lg:w-6/12 w-full max-h-max justify-center items-center">
        <div
          v-if="isImg"
          class="flex flex-1 flex-wrap w-full max-h-max justify-center content-center"
        >
          <NuxtPicture
            fit="contain"
            format="avif,webp,jpg"
            :src="dailyImageVideo"
            class="w-full max-h-max object-contain flex justify-center"
          />
        </div>
        <div
          v-else
          class="flex flex-1 flex-wrap w-full h-full object-contain content-center"
        >
          <iframe
            :src="dailyImageVideo"
            frameborder="0"
            allowfullscreen
            class="w-full max-h-max h-full flex justify-center"
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
