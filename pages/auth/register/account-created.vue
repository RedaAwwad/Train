<template>
  <div class="mh-screen__adjust-padding pb-6">
    <v-flex>
      <v-col>
        <app-lang-switcher btn/>
      </v-col>
    </v-flex>
    <div class="pt-3">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto py-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center text-center">
          <h1>{{ $t('accountCreatedInfo') }}</h1>
        </div>
        <v-card-title class="justify-center text-center pt-0 mb-10 text-capitalize grey--text lighten-2">
          <div style="max-width: 425px;">
            {{ $t('accountCreatedSubheading') }}
          </div>
        </v-card-title>
        <v-card-actions class="mb-4 px-sm-4 justify-center">
          <v-btn nuxt outlined depressed :to="localePath('/')" color="primary" class="btn-primary py-3 px-12">
            {{ $t('blog') }}
          </v-btn>
          <v-btn nuxt :to="localePath('/auth/login')"
          color="primary" class="btn-primary py-3 px-8">
            {{ $t('login') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountCreatedPage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('accountCreatedInfo')}`
    }
  },
  data() {
    return {
      submitting: false,
      commercialNumber: null,
      licenseNumber: null,
      taxNumber: null,
    }
  },
  methods: {
  }
}
</script>
