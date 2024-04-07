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
        <NuxtPicture
          :key="thumbnailInfo?.nasa_id"
          :src="thumbnailInfo?.thumbnail"
          alt="Thumbnail"
          loading="lazy"
        />
      </NuxtLink>
</template>

<style scoped></style>
