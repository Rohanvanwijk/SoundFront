// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'SoundFront | Frontroh',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'og:title', content: 'SoundFront | Frontroh'},
        { name: 'description', content: 'Live sets uploads from Frontroh (DJ)' },
        { name: 'og:description', content: 'Live sets uploads from Frontroh (DJ)' },
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    apiUrl: process.env.API_URL,
  },
})
