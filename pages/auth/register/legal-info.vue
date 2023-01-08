<template>
  <div class="mh-screen__adjust-padding pb-6">
    <v-flex>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn outlined link depressed exact class="btn-primary"
        :to="localePath('/auth/register/security-info')">
          {{ $t('skip') }}
        </v-btn>
      </v-col>
    </v-flex>
    <div class="pt-3">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto py-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <h1>{{ $t('legalInfo') }}</h1>
        </div>
        <v-card-title class="justify-center text-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          <div style="max-width: 425px;">
            {{ $t('legalInfoSubheading') }}
          </div>
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card-text>
            <m-input v-model.number="commercialNumber" type="number" :label="$t('commercialRegistrationNumber')" :info="$t('commercialRegistrationNumber')"
           />
             <m-input v-model.number="licenseNumber" type="number" :label="$t('licenseNumber')" :info="$t('licenseNumber')"
           />
            <m-input v-model.number="taxNumber" type="number" :label="$t('taxNumber')" info="الرقم الضريبي"
            :options="{placeholder: $t('enterFieldCommericalNumber')}"
             />
          </v-card-text>
          <v-card-actions class="mb-4 px-sm-4 justify-center">
            <v-btn link outlined depressed exact :to="localePath('/auth/register')" color="primary" class="btn-primary py-3 px-12">
              {{ $t('back') }}
            </v-btn>
            <v-btn :loading="submitting"
            type="submit" color="primary" class="btn-primary py-3 px-12">
              {{ $t('next') }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegalInfoPage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('legalInfo')}`
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
    validateForm() {
      return this.$refs.loginForm.validate();
    },
    resetForm() {
      this.$refs.loginForm.reset();
    },
    submitForm() {
      if(this.validateForm()) {
        this.submitting = true;

        setTimeout(() => {
          this.$router.push(this.localePath('/auth/register/security-info'));
        }, 500);
      }
    }
  }
}
</script>
