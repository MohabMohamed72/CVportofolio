export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Mohab Mohamed | Frontend Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Junior Frontend Developer skilled in Vue.js, React.js, Angular, Nuxt.js, TypeScript & AI-powered development.",
        },
        {
          name: "keywords",
          content:
            "frontend developer, vue.js, react.js, angular, nuxt.js, typescript, portfolio, mohab mohamed",
        },
        { property: "og:title", content: "Mohab Mohamed | Frontend Developer" },
        {
          property: "og:description",
          content:
            "Junior Frontend Developer Portfolio - Vue.js, React.js, Angular, Nuxt.js",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  nitro: {
    preset: "netlify-static",
  },
});
