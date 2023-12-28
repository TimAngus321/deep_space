<script setup lang="ts">
const props = defineProps(["thumbnailInfo"]);
console.log("thumbInfo:", props);
// Request needed from Nasa: https://images-api.nasa.gov/asset/
//   <NuxtLink :to="`/products/${thumbnailInfo.nasa_id}`">
//       <p class="btn my-4">View Details</p>
//     </NuxtLink>
</script>

<template>
  <figure
    v-if="thumbnailInfo && thumbnailInfo?.length"
    v-for="thumbData in thumbnailInfo"
    class="masonryLayout grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  >
    <img
      class="mb-5"
      :key="thumbData?.nasa_id"
      :src="thumbData?.thumbnail"
      alt="Thumbnail"
    />
  </figure>
</template>

<style scoped>
</style>
