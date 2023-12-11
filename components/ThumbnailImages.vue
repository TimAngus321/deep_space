<script setup lang="ts">
const { thumbInfo } = defineProps(["thumbInfo"]);
console.log(thumbInfo);
//   <NuxtLink :to="`/products/${thumbnailInfo.nasa_id}`">
//       <p class="btn my-4">View Details</p>
//     </NuxtLink>
</script>

<template>
  <div class="card text-center">
    <img :src="thumbInfo.thumbnail" alt="Thumbnail" />
  </div>
</template>



<style scoped></style>
