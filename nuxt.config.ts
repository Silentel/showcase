// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/catalog': { swr: true },
    '/products/**': { ssr: true },
    '/contacts': { prerender: true }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@pinia/nuxt']
})