<template>
  <main class="flex flex-col gap-6">
    <header class="flex justify-center">
      <h1
        class="p-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        Search Deep Space
      </h1>
    </header>

    <UContainer padding="0" class="flex flex-row w-full h-full items-center">
      <section class="w-full h-full">
        <div class="flex flex-row flex-shrink gap-6 w-full">
          <UInput
            class="flex-grow-3 w-full"
            color="gray"
            variant="outline"
            v-model="q"
            name="q"
            placeholder="Search deep space..."
            icon="i-heroicons-magnifying-glass-20-solid"
            :ui="{ icon: { trailing: { pointer: '' } } }"
            @keyup.enter="searchNasaLibrary(q)"
          >
            <template #trailing>
              <UButton
                v-show="q !== ''"
                color="gray"
                variant="link"
                icon="i-heroicons-x-mark-20-solid"
                :padded="false"
                @click="q = ''"
              />
            </template>
          </UInput>
          <UButton
            @click="searchNasaLibrary(q)"
            class="flex-grow-1"
            label="Search"
          />
        </div>
        <div class="grid grid-cols-4 gap-5 w-full h-full"></div>
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
const q: any = ref("");
const url: string = "https://images-api.nasa.gov/search?q=";
let searchResult: string;

const searchNasaLibrary = async (searchQuery: any) => {
  const { data: images }: any = await useFetch(`${url}${searchQuery}`);
  searchResult = images?._rawValue?.collection?.items[0];
  console.log("image ", images);
  console.log("searchResult ", searchResult);
};

// <NuxtPicture
//             format="avif,webp,jpg"
//             :src="searchResult"
//             sizes="100vw"
//             height="400px"
//           />
</script>

<style lang="scss" scoped></style>
