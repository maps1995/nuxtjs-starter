const { GTM_CONTAINER_ID, SENTRY_DSN } = process.env

export default {
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + 'Awesome Nuxt.js',
    title: 'Awesome Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'theme-color', name: 'theme-color', content: '#1976d2' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js tutorial demo project.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/vuetify-module
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://nuxt-community.github.io/nuxt-i18n
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/sentry-module#setup
    '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    optionsPath: './vuetify.options.js',
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: false
    }
  },
  /*
   ** gtm module configuration
   ** https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    dev: false,
    id: GTM_CONTAINER_ID
  },
  /*
   ** webfontloader module configuration
   ** https://github.com/Developmint/nuxt-webfontloader#setup
   */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap']
    }
  },
  /*
   ** i18n module configuration
   ** https://nuxt-community.github.io/nuxt-i18n/options-reference.html
   */
  i18n: {
    locales: [
      { code: 'en', file: 'en-US.js', name: 'English' },
      { code: 'tr', file: 'tr-TR.js', name: 'Turkish' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      fallbackLocale: 'en'
    }
  },
  /*
   ** sentry module configuration
   ** https://github.com/nuxt-community/sentry-module#setup
   */
  sentry: {
    dsn: SENTRY_DSN,
    config: {}
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
