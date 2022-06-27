<script setup>
definePageMeta({
  layout: "uru",
});
useHead({
  title: "Top Page",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Personal Data." }],
});
</script>

<template>
  <NuxtLayout name="uru">
    <TheHero />
  </NuxtLayout>
</template>
