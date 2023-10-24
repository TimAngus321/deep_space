<template>
  <main>
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
    </section>
  </main>
</template>

<script setup lang="ts">
  await useFetch('')
</script>

<style lang="scss" scoped></style>
