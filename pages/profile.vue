<script setup lang="ts">
const items = [
  {
    label: "Recently Searched",
    content: "Last 4 image/video search results",
  },
  {
    label: "Favorites",
    content: "All favorite images/videos",
  },
  {
    label: "Settings if any",
    content: "Profile settings",
  },
];
</script>

<template>
  <main class="flex flex-col gap-6">
    <h1 class="flex justify-center">Personal Profile</h1>
    <UTabs :items="items" />
  </main>
</template>
