<!-- 
  Add profile avatar for personal profile dropdown

 -->
<template>
  <header class="ui-gray h-20 bg-gray-100 dark:bg-gray-800 text-textDefault bg-theme-gray ">
    <nav class="flex flex-row h-full w-full p-2 pr-5 items-center">
      <div class="flex h-full w-full items-center p-7">
        <ColorModeBtn />
      </div>
      <div class="flex items-center justify-end w-full gap-6">
      <NuxtLink to="/"><span>Home</span></NuxtLink>
      <NuxtLink to="/space-image-search"><span>Image Search</span></NuxtLink>
      <NuxtLink to="/profile"
        ><UAvatar
          class="flex align-middle"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
      /></NuxtLink>
    </div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
