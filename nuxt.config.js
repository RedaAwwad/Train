import autoLoadComponents from './config/auto-load-components';

export default {
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      titleTemplate: '%s',
      title: 'القطار',
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
    };
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@mdi/font/css/materialdesignicons.css', '~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/services/api' },
    { src: '~/plugins/vue-notification', mode: 'client' },
    { src: '~/plugins/is-dark-theme' },
    { src: '~/plugins/vue-video-background.js', mode: 'client' },
    { src: '~/plugins/reveal-animation.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: { dirs: autoLoadComponents },
  // Loading: https://nuxtjs.org/docs/directory-structure/nuxt-config#loading
  loading: {
    color: 'rgba(255, 255, 255, 0.3)',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'nuxt-highcharts',
  ],
  // auth: {
  //   strategies: {
  //     local: {},
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/',
  //     callback: '/login',
  //     home: '/'
  //   }
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    retries: 3,
  },
  router: {
    // base: '/train/'
  },
  serverMiddleware: [
    { path: "/api/dashboard", handler: "~/server-middleware/rest.js" },
  ],
  highcharts: {
    modules: ['node_modules/highcharts/modules/variable-pie.js'],
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: '~/config/vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  env: {
    BASE_URL: process.env.BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    API_URL: process.env.API_URL,
    TOKEN: process.env.TOKEN
  },
  build: {},
};
