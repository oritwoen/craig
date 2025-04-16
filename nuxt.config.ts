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
    },

    scheduledTasks: {
      '* * * * *': ['main'],
    },
  },

  hub: {
    ai: true,
    blob: true,
    workers: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
