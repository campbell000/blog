import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  static: {
    prefix: true
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Never Meant',
    title: 'Never Meant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Never Meant. Contains blog posts, reviews, technical guides, and other short-form essays.' },
      { hid: 'author', name: 'author', content: 'Alex Campbell' },
      { 'http-equiv': 'Content-Security-Policy', content: "default-src * data: mediastream: blob: filesystem: about: ws: wss: 'unsafe-eval' 'wasm-unsafe-eval' 'unsafe-inline'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; script-src-elem * data: blob: 'unsafe-inline' 'unsafe-eval';connect-src * data: blob: 'unsafe-inline';img-src * data: blob: 'unsafe-inline'; media-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'font-src * data: blob: 'unsafe-inline';frame-ancestors * data: blob:;"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "apple-touch-icon",
        sizes: "259x259",
        href: "/apple-touch-icon.png?v=GvmpJqoA5j"
      },
    ],
    script: [
      {
        src: "https://unpkg.com/commentbox.io/dist/commentBox.min.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuetify.js', ssr: false },
    { src: '~/plugins/floating-vue.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla|Roboto&display=swap' }
      ]
    },
    theme: {
      dark: false,
      options: {
        customProperties: true
      },
      themes: {
        options: {
          customProperties: true
        },
        dark: {
          background: "#262626",
          textColor: '#ddd',
          headerColor: "#fff",
          primary: "#7fc3b0",
          accent: colors.grey.darken3,
          secondary: "#ac8d9d",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          infoboxBackground: "#282828",
          success: colors.green.accent3,
          infoBoxText: "#ddd",
          infoBoxBorder: "#7fc3b0",
          tooltipBackgroundColor: "#333",
          tooltipTextHoverBackground: "#383838",
          morePostsHoverBackground: "#333"
        },
        light: {
          background: "#FFF",
          headerColor: "#000",
          primary: '#46797b',
          textColor: '#262626',
          secondary: '#523a47',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          infoboxBackground: "#f4f4f4",
          infoBoxBorder: "#548e91",
          infoBoxText: "#262626",
          tooltipBackgroundColor: "#FFF",
          tooltipTextHoverBackground: "#EEE",
          morePostsHoverBackground: "#333"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
