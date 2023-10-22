<template>
  <main class="bg-secondary h-screen flex flex-col">
    <Header />
    <div class="h-full flex">
      <Sidebar />
      <slot class="flex-grow"/>
    </div>
  </main>
</template>

<style scoped></style>
