// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content' , '@nuxt/ui'],

  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['heroicons', 'ic', 'ri', 'tabler'],   
  },
  ssr: false, 

  css: ["~/assets/css/main.css"],

})