import autoLoadComponents from './config/auto-load-components';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    let pageDirection = 'rtl';

    if (i18nHead.htmlAttrs && i18nHead.htmlAttrs.lang) {
      pageDirection = i18nHead.htmlAttrs.lang == 'ar' ? 'rtl' : 'ltr';
    }

    return {
      titleTemplate: '%s',
      title: 'القطار',
      htmlAttrs: {
        dir: pageDirection,
        ...i18nHead.htmlAttrs,
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
    { src: '~/plugins/rtl-ltr' },
    { src: '~/plugins/vue-notification', mode: 'client' },
    { src: '~/plugins/is-dark-theme' },
    { src: '~/plugins/vue2-editor', ssr: false },
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
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-highcharts',
    'vue2-editor/nuxt',
  ],
  // https://i18n.nuxtjs.org/
  i18n: {
    strategy: 'prefix_except_default',
    seo: true,
    defaultLocale: 'ar',
    defaultDirection: 'rtl',
    fallbackLocale: 'ar',
    detectBrowserLanguage: false,
    locales: [
      { code: 'ar', name: 'العربية', iso: 'ar', dir: 'rtl' },
      { code: 'en', name: 'English', iso: 'en', dir: 'ltr' },
    ],
    vueI18n: {
      fallbackLocale: 'ar',
      messages: {
        ar: require('./locales/ar.json'),
        en: require('./locales/en.json'),
      },
    },
    // sync vuetify with i18n
    onBeforeLanguageSwitch: (oldLocale, newLocale, isInitialSetup, context) => {
      const locale = context.i18n.locales.find(
        (lang) => lang.iso === newLocale,
      ) || { langCode: 'ar', dir: 'rtl' };
      const isRTL = locale.dir === 'rtl';
      if (isInitialSetup) {
        context.app.vuetify.preset.rtl = isRTL;
      }
      context.app.vuetify.framework.lang.current = locale.langCode;
      context.app.vuetify.framework.rtl = isRTL;
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    retries: 3,
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
          autoFetch: true
        },
        endpoints: {
          user: { url: '/profile', method: 'get' },
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'delete' },
        }
      }
    }
  },
  router: {
    // middleware: ['auth']
  },
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
  },
  build: {
    extend: {
      transpile: [/^vue2-google-maps($|\/)/],
    },
  },
};
