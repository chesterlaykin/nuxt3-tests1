import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false, //false = no need to prefix component names with name of nested folder
    },
  ],
//   css: [`~/assets/scss/test/test.scss`],
});
