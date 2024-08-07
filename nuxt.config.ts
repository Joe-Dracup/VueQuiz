// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  devtools: { enabled: true },
  runtimeConfig: {
    database: {
      migrationsFolder: './db/migrations',
      url: '',
    },
  },
})
