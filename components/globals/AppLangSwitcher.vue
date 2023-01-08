<template>
  <v-btn v-if="btn" outlined link depressed
  :to="switchLocalePath(locale.code)" class="btn-primary">
    <v-icon right class="mx-1">
      mdi-web
    </v-icon>
    <span class="mx-1">
      {{ locale.name }}
    </span>
  </v-btn>
  <v-btn v-else-if="!btn && text" block text link
  :to="switchLocalePath(locale.code)" class="text-uppercase text-start">
    {{ locale.name }}
  </v-btn>
  <nuxt-link v-else :to="switchLocalePath(locale.code)" class="link mx-3 pa-3 text-uppercase white---text">
    {{ locale.code }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppLangSwitcher',
  props: {
    btn: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    locale() {
      return this.$i18n.locales.find(i => i.code !== this.$i18n.locale);
    },
  }
}
</script>
