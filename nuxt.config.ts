export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-04-16',

  nitro: {
    experimental: {
      tasks: true,
      // websocket: true,
    },

    scheduledTasks: {
      '*/10 * * * *': ['main'],
    },
  },

  hub: {
    ai: true,
    blob: true,
    workers: true,
  },

  debug: true,

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
