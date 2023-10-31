<!-- 
  Add profile avatar for personal profile dropdown

 -->
<template>
  <header
    class="ui-gray h-20 bg-gray-100 dark:bg-gray-800 text-textDefault bg-theme-gray sticky top-0 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60"
  >
    <nav class="flex flex-row h-full w-full p-7 pr-10 items-center">
      <div class="flex h-full w-full items-center">
        <ColorModeBtn />
      </div>
      <div class="flex items-center justify-end w-full gap-6">
        <NuxtLink to="/" class="hover:text-primary p-2">Home</NuxtLink>
        <NuxtLink to="/space-image-search" class="hover:text-primary p-2"
          >Image Search</NuxtLink
        >
        <NuxtLink to="/profile" class="hover:text-primary p-2"
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
