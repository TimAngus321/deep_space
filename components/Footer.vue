<!--
    Add github & linkedin logos with links
 -->
 <template>
    <footer dir="rtl" class="h-full flex basis-20 text-textDefault dark:bg-gray-800 lg:hidden items-center">
      <div class="flex flex-row gap-4 p-4 items-center fixed -bottom-0">
        <NuxtLink
          to="https://www.linkedin.com/in/timothy-angus-b94969113/"
          target="_blank"
        >
          <Icon
            class="hover:text-primary"
            name="uil:linkedin"
            color="text-textDefault"
            size="1.5rem"
            alt="Linkedin"
          />
        </NuxtLink>
        <NuxtLink to="https://github.com/TimAngus321" target="_blank">
          <Icon
            class="hover:text-primary"
            name="uil:github"
            color="text-textDefault"
            size="1.5rem"
            alt="Github"
          />
        </NuxtLink>
        <NuxtLink href="https://www.tim-angus.com/" target="_blank">
          <Icon
            class="hover:text-primary"
            name="mdi:world-wide-web"
            color="text-textDefault"
            size="1.5rem"
            alt="Personal Portfolio"
          />
        </NuxtLink>
      </div>
    </footer>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  