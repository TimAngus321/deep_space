<template>
  <main class="bg-black h-screen flex flex-col pr-10">
    <Header />
    <div class="h-full flex">
      <Sidebar />
      <slot class="flex-grow"/>
    </div>
    <Footer />
  </main>
</template>

<style scoped></style>
