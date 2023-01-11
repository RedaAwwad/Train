import colors from 'vuetify/es5/util/colors';

export default function ({ app }) {
  return {
    rtl: true,
    theme: {
      themes: {
        light: {
          primary: '#00778B',
          'primary-2': '#1A8597',
          accent: '#062F37',
          secondary: '#22DEDE',
          info: '#F89747',
          warning: '#D51C53',
          error: '#F20505',
          success: '#07A04A',
          light: '#F8F8F8',
          lighter: '#EFF1F9',
          'dark-gray': '#666666'
        },
        dark: {
          primary: '#00778B',
          accent: '#01416F',
          secondary: '#22DEDE',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    lang: {
      t: (key, ...params) => app.i18n.t(key, params)
    }
  }
}
