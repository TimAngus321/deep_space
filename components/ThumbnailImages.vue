<script setup lang="ts">
const props = defineProps(["thumbnailInfo"]);
console.log("thumbInfo:", props);
//   <NuxtLink :to="`/products/${thumbnailInfo.nasa_id}`">
//       <p class="btn my-4">View Details</p>
//     </NuxtLink>
</script>

<template>
  <div
    v-if="thumbnailInfo && thumbnailInfo?.length"
    class="masonry grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  >
    <img
      class="mb-5"
      v-for="thumbData in thumbnailInfo"
      :key="thumbData?.nasa_id"
      :src="thumbData?.thumbnail"
      alt="Thumbnail"
    />
  </div>
</template>

<style scoped>
.masonry {
  column-count: 1;
  column-gap: 1rem;

  @screen sm {
    column-count: 2;
  }

  @screen md {
    column-count: 3;
  }

  @screen lg {
    column-count: 4;
  }

  img {
    break-inside: avoid;
    width: 100%;
    margin-bottom: 0;
  }
}
</style>
