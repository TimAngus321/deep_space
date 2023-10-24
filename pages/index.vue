<template>
    <main>
    <header class="flex justify-center">
        <h1 class="p-2">Nasa Image Search App</h1>
    </header>
    <div class="flex p-2 justify-center">
        <p>This is an app to find cool space images from Nasa's API</p>
    </div>
</main>
</template>

<script setup>
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>

<style lang="scss" scoped>

</style>