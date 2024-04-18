<template >
  <main class="dark:bg-gray-800 h-screen flex flex-col">
    <Header />
    <div class="h-full flex lg:pr-10 dark:bg-gray-800 overflow-y-scroll">
      <Sidebar />
      <div class="flex flex-col flex-grow h-full w-full text-textDefault p-2 lg:p-6 dark:bg-gray-800">
        <slot />
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
</style>
