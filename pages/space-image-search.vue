<template>
  <main class="flex flex-col gap-6">
    <header class="flex justify-center">
      <h1 class="p-2">Search Deep Space</h1>
    </header>
    <section>
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        name="input"
        placeholder="Search..."
      />
      <div class="grid grid-cols-4 gap-5"></div>

    </section>
  </main>
</template>

<script setup lang="ts">

  const config = useRuntimeConfig()
  const apiKey: string | unknown = config.public.apiKey;
  const url: string = "https://images-api.nasa.gov/search?q="
  const searchQuery: string = "pillars"

  const {data: images}: any =  await useFetch(`${url}${searchQuery}`)
  console.log('images ', images)

</script>

<style lang="scss" scoped></style>
