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
        <!-- 
          
        * Use https://esahubble.org/images/search/ to add categories to create
        search for glaxy/nebula etc only 

        * Check net ninja vue 3 fetching data for why this is buggy

        * use grid masonary layout for different scale images and no weird gaps

        * Sort out useState composable properly and use here so images render properly
      
      -->
        <div class="py-10">
            <ThumbnailImages :thumbnailInfo="thumbnailInfo?.value" />
        </div>
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">

const q: any = ref("");
let thumbnailInfo: any = reactive([])
console.log("line 69 thumbinfo space image search", thumbnailInfo)

const searchNasaLibrary: any = async () => {

  try {
    if (q?.value) {
    const result = await useNasaImgSearch(q?.value);
    thumbnailInfo.value = result?.thumbnailInfoList;
   console.log(thumbnailInfo?.value)
    }
  } catch (err) {
    console.log(err)
  }
  return {
    thumbnailInfo,
  }
};
</script>

<style lang="scss" scoped></style>
