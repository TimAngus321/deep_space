<template>
  <aside dir="rtl" class="h-full lg:flex basis-20 text-textDefault dark:bg-gray-800 hidden lg:visible">
    <div class="flex flex-col-reverse gap-8 p-7 fixed -bottom-0">
      <NuxtLink
        to="https://www.linkedin.com/in/timothy-angus-b94969113/"
        target="_blank"
      >
        <Icon
          class="hover:text-primary"
          name="uil:linkedin"
          color="text-textDefault"
          size="2rem"
          alt="Linkedin"
        />
      </NuxtLink>
      <NuxtLink to="https://github.com/TimAngus321" target="_blank">
        <Icon
          class="hover:text-primary"
          name="uil:github"
          color="text-textDefault"
          size="2rem"
          alt="Github"
        />
      </NuxtLink>
      <NuxtLink href="https://www.tim-angus.com/" target="_blank">
        <Icon
          class="hover:text-primary"
          name="mdi:world-wide-web"
          color="text-textDefault"
          size="2rem"
          alt="Personal Portfolio"
        />
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>
