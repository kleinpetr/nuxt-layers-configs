// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        includeWorkspace: true,
      },
    devtools: true,
    app: {
      head: {
        link: [
          { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        ],
      },
    },
})
