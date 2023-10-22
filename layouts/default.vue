<template>
  <main class="bg-secondary h-screen flex flex-col">
    <Header />
    <div class="h-full flex pr-20">
      <Sidebar />
      <slot class="flex-grow"/>
    </div>
  </main>
</template>

<style scoped></style>
