import { _backgroundColor } from '#tailwind-config/theme';
<template>
  <main class="bg-secondary h-screen flex flex-col">
    <Header />
    <div class="h-full flex pr-20">
      <Sidebar />
      <div
        class="flex flex-col gap-4 flex-grow h-full w-full text-textDefault p-6"
      >
        <slot />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
