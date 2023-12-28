<script setup lang="ts">
const { nasa_id } = useRoute().params;
// const uri = 'https://fakestoreapi.com/products/' + id
</script>

<template>
  <div>
    <h1>{{ nasa_id }}</h1>
  </div>
</template>

<style scoped></style>
