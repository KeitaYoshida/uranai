import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["nuxt-windicss"],
  router: {
    scrollBehavior: () => ({ x: 0, y: 0 }),
  },
});
