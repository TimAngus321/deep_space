<script setup lang="ts">
const props = defineProps({
  thumbnailInfo: {
    type: Object,
    required: true,
  },
});

const { thumbnailInfo } = props;

</script>

<template>
      <NuxtLink :to="`imageDetails/${thumbnailInfo?.nasa_id}`">
        <img
          :key="thumbnailInfo?.nasa_id"
          :src="thumbnailInfo?.thumbnail"
          alt="Thumbnail"
        />
      </NuxtLink>
</template>

<style scoped></style>
