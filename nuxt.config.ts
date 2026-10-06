export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Mohab Mohamed — Frontend Engineer',
      link: [
        { rel: 'preload', href: '/fonts/anybody-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/atkinson-regular-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Mohab Mohamed is a frontend engineer building complex production applications, enterprise dashboards, bilingual workflows, and multi-tenant products.' },
        { name: 'theme-color', content: '#171a18' },
        { property: 'og:title', content: 'Mohab Mohamed — Frontend Engineer' },
        { property: 'og:description', content: 'Frontend engineering for complex production applications.' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    resendApiKey: '',
    contactEmail: 'mohabmohamedd772@gmail.com',
    contactFrom: '',
  },
  // Vercel auto-detection retains server/api; a static preset would discard it.
  nitro: {},
})
