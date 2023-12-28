<script setup lang="ts">
const props = defineProps(["thumbnailInfo"]);
console.log("thumbInfo:", props);
// Request needed from Nasa (for large img etc): https://images-api.nasa.gov/asset/
// <NuxtLink :to="`/imageDetails/${thumbnailInfo.nasa_id}`">
//       <p class="btn my-4">View Details</p>
//     </NuxtLink>
</script>

<template>
  <!-- Add grid-masonry to grid when it's more natively supported -->
  <figure
    v-if="thumbnailInfo && thumbnailInfo?.length"
    class="grid grid-cols-4 gap-5"
  >
    <img
      v-for="thumbData in thumbnailInfo"
      class="mb-5"
      :key="thumbData?.nasa_id"
      :src="thumbData?.thumbnail"
      alt="Thumbnail"
    />
  </figure>
</template>

<style scoped></style>
