<template>
  <main class="flex flex-col gap-6">
    <header class="flex justify-center">
      <h1
        class="p-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        Nasa Image Search
      </h1>
    </header>

    <UContainer padding="0" class="flex flex-row w-full h-full items-center">
      <section class="w-full h-full">
        <div class="flex flex-row flex-shrink gap-1 lg:gap-6 w-full">
          <UInput
            class="flex-grow-3 w-full"
            color="gray"
            variant="outline"
            v-model="q"
            name="q"
            placeholder="Search deep space..."
            icon="i-heroicons-magnifying-glass-20-solid"
            :ui="{ icon: { trailing: { pointer: '' } } }"
            @keyup.enter="nasaImgsStore.nasaImgSearch(q)"
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
            @click="nasaImgsStore.nasaImgSearch(q)"
            class="flex-grow-1"
            label="Search"
          />
        </div>
        <!-- 
          
        * Use https://esahubble.org/images/search/ to add categories to keywords to create a more
        specific search for glaxy/nebula etc only THIS PROBABLY WILL RESTRICT RESULTS TOO MUCH
        JUST ADD SUGGESTIONS TO SEARCH 

        Keywords to suggest: bubble nebula, andromeda galaxy, orion nebula, supernova, pillars

        * Check out scroll pagination for getting more images

        * use grid masonary layout for different scale images and no weird gaps. Just use this: https://www.npmjs.com/package/@yeger/vue-masonry-wall

        * Move isFetching to here for a loading state and render the loading skeleton before showing images https://ui.nuxt.com/layout/skeleton
      
      -->
        <div
          v-if="nasaImgsStore.isFetching"
          class="py-10 grid grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-5"
        >
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
          <USkeleton class="w-[275px] h-[275px] dark:bg-gray-700" />
        </div>
        <!-- Add grid-masonry to grid when it's more natively supported -->
        <div v-else-if="nasaImgsStore.hasFetchIssues" class="flex justify-center py-10">
          <h3>{{ nasaImgsStore.fetchIssues }}</h3>
          </div>
          <div v-else class="py-10 grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
            <figure v-for="thumbData in nasaImgsStore.nasaImgs">
              <ThumbnailImages :thumbnailInfo="thumbData" />
            </figure>
          </div>
      </section>
    </UContainer>
  </main>
</template>
<script setup lang="ts">

const q: Ref<string> = ref("");
const nasaImgsStore = useFetchedImgsStore();

</script>

<style lang="scss" scoped></style>
