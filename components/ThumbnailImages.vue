<script setup lang="ts">
const props = defineProps(["thumbnailInfo"]);
console.log("thumbInfo:", props);
//   <NuxtLink :to="`/products/${thumbnailInfo.nasa_id}`">
//       <p class="btn my-4">View Details</p>
//     </NuxtLink>
</script>

<template>
  <div v-if="thumbnailInfo && thumbnailInfo?.length" class="grid grid-cols-4 gap-5 grid-masonary">
    <img
      class="card text-center"
      v-for="thumbData in thumbnailInfo"
      :key="thumbData?.nasa_id"
      :src="thumbData?.thumbnail"
      alt="Thumbnail"
    />
  </div>
</template>

<style scoped></style>
