// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Montserrat: [400, 700],
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts'],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
})
