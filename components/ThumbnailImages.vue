<script setup lang="ts">
const props = defineProps(["thumbnailInfo"]);
</script>

<template>
  <!-- Add grid-masonry to grid when it's more natively supported -->
  <div
    v-if="thumbnailInfo && thumbnailInfo?.length"
    class="grid grid-cols-4 gap-5"
  >
    <figure v-for="thumbData in thumbnailInfo">
      <NuxtLink :to="`imageDetails/${thumbData?.nasa_id}`">
        <img
          :key="thumbData?.nasa_id"
          :src="thumbData?.thumbnail"
          alt="Thumbnail"
        />
      </NuxtLink>
    </figure>
  </div>
</template>

<style scoped></style>
