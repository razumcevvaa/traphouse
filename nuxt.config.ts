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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Для PNG/SVG (опционально):
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Для Apple устройств:
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
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