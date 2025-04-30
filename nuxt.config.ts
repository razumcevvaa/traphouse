// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: false },
  app: {
    baseURL: '/',
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // { name: 'favicon', content: '/logo.svg' }
      ],
      link: [
        // { rel: 'icon', href:'http://localhost:3000/web36NUXT/logo.svg' }
      ],
      titleTemplate: '%s - Site Title',
    }
  },
  css: [
    '~/assets/css/style.css', 
  ],
  nitro: {
    // plugins: ['plugins/extend-html.ts']
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },

  modules: ['@pinia/nuxt', '@nuxt/image']
})