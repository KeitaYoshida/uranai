<script setup>
const siteName = useName();
const textColor = useTextColor();
</script>

<template>
  <footer class="text-gray-600 body-font">
    <div
      class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
    >
      <Logo />
      <a
        class="flex title-font font-medium items-center md:justify-start justify-center pt-2 md:pt-0"
        :class="textColor"
      >
        <span class="px-3 text-xl">{{ siteName }}</span>
      </a>
      <p
        class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
      >
        © 2022 game awesome —
        <a
          href="https://twitter.com/@gameAwesomeLG"
          class="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
          >@gameAwesome</a
        >
      </p>
      <span
        class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
      >
        <a class="text-gray-500">
          <SnsLogInstagram />
        </a>
        <a class="ml-3 text-gray-500">
          <SnsLogTwitter />
        </a>
        <a class="ml-3 text-gray-500">
          <SnsLogFacebook />
        </a>
      </span>
    </div>
  </footer>
</template>
