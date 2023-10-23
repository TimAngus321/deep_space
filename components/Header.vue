<!-- 
  Add profile avatar for personal profile dropdown

 -->
<template>
  <header class="h-20 text-textDefault bg-cool flex justify-end">
    <nav class="flex flex-row gap-6 p-2 pr-5 items-center">
      <NuxtLink to="/"><span>Home</span></NuxtLink>
      <NuxtLink to="/space-image-search"><span>Image Search</span></NuxtLink>
      <NuxtLink to="/profile"
        ><UAvatar
          class="flex align-middle"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
      /></NuxtLink>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
