<script setup lang="ts">
const { nasa_id } = useRoute().params;
console.log(nasa_id)

// To pass data add a store Pinia 
// Request needed from Nasa (for large img etc): https://images-api.nasa.gov/asset/


// const uri = 'https://fakestoreapi.com/products/' + id

</script>

<template>
  <div>
    <h1>{{ nasa_id }}</h1>

  </div>
</template>

<style scoped></style>
