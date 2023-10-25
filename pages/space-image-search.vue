<template>
  <main class="flex flex-col gap-6">
    <header class="flex justify-center">
      <h1 class="p-2">Search Deep Space</h1>
    </header>

    <UContainer padding="0" class="flex flex-row w-full h-full items-center">
      <section>
        <div>
          <UInput
            v-model="q"
            name="q"
            placeholder="Search..."
            icon="i-heroicons-magnifying-glass-20-solid"
            :ui="{ icon: { trailing: { pointer: '' } } }"
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
        </div>
        <div class="grid grid-cols-4 gap-5"></div>
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
const q = ref('')
// const url: string = "https://images-api.nasa.gov/search?q="
// const searchQuery: string = "pillars"

// const {data: images}: any =  await useFetch(`${url}${searchQuery}`)
// console.log('images ', images)
</script>

<style lang="scss" scoped></style>
