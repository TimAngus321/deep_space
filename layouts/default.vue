<template>
  <div class="bg-black h-screen w-screen flex flex-col">
    <Header class/>
    <Sidebar />
    <slot class="v-full h-full"/>
    <Footer />
  </div>
</template>

<style scoped></style>
