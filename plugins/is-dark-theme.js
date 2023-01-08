export default function ({ app }, inject) {
  const isDark = () => {
    return app.vuetify.framework.theme.isDark;
  }

  inject("isDark", isDark);
}
