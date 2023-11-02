<template>
  <main class="flex flex-col h-full gap-6">
    <header class="flex justify-center">
      <h1
        class="p-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        Nasa Image Search App
      </h1>
    </header>

    <UContainer
      padding="0"
      class="flex flex-row w-full h-full items-center gap-20 max-w-full"
    >
      <div class="flex flex-col flex-grow-1 p-2 gap-4 justify-start">
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          About App
        </h3>
        <p class="p-2">
          This app allows you to search for cool space images from Nasa's APIs
          and create a profile where you can save your favorite finds.
        </p>
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          Purpose of this app:
        </h3>
        <p class="p-2">
          To try out Nuxt, Vue, Tailwind, GraphQL, Docker and MongoDB Atlas hosted on
          Vercel. 
        </p>
        <h3
          class="p-2 text-1xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200"
        >
          ToDo:
        </h3>
        <p class="p-2">
            <ul class="list-disc p-2">
                <li>Create layout and structure of profile favs, recently searched and settings if any.</li>
                <li>If it makes sense set up MongoDB Atlas and GraphQL for database and fetching data from DB</li>
                <li>Set up docker for Nuxt</li>
                <li>Improve layout and tailwind setup</li>
                <li>Cleanup code</li>
            </ul>
        </p>
      </div>
      <div class="flex flex-grow-3 justify-start">
        <div v-if="isImg">
          <NuxtPicture
            format="avif,webp,jpg"
            :src="dailyImageVideo"
            sizes="100vw sm:50vw md:600px"
            width="800"
            height="400"
          />
        </div>
        <div v-else class="w-full">
          <iframe
            sizes="100vw sm:50vw md:600px"
            width="800"
            height="400"
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
