export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "MOHAB_OS — Mohab Mohamed, Frontend Developer",
      link: [
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        {
          rel: "preload",
          href: "/fonts/silkscreen-regular.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "/fonts/fira-code-latin.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Mohab Mohamed is a frontend engineer building complex production applications, enterprise dashboards, bilingual workflows, and multi-tenant products.",
        },
        { name: "theme-color", content: "#10120f" },
        {
          property: "og:title",
          content: "MOHAB_OS — Mohab Mohamed, Frontend Developer",
        },
        {
          property: "og:description",
          content: "Frontend engineering for complex production applications.",
        },
      ],
    },
    pageTransition: { name: "system-page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  runtimeConfig: {
    resendApiKey: "",
    contactEmail: "mohabmohamedd772@gmail.com",
    contactFrom: "",
  },
  // Vercel auto-detection retains server/api; a static preset would discard it.
  nitro: {},
});
