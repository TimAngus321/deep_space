<!-- 
  Add profile avatar for personal profile dropdown

 -->
<template>
  <header
    class="ui-gray h-20 bg-gray-100 dark:bg-gray-800 text-textDefault bg-theme-gray"
  >
    <nav class="flex flex-row h-full w-full p-7 pr-10 items-center">
      <div class="flex h-full w-full items-center ">
        <ColorModeBtn />
      </div>
      <div class="flex items-center justify-end w-full gap-8">
        <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/space-image-search" class="hover:text-primary"
          >Image Search</NuxtLink
        >
        <NuxtLink to="/profile" class="hover:text-primary"
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
