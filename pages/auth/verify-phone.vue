<template>
  <div class="mh-screen__adjust-padding">
    <div class="py-6">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto pa-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <h1>{{ $t('aboutToFinish') }}</h1>
        </div>
        <v-card-title class="justify-center text-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          <p style="max-width: 425px;font-size: 1.1rem;">
            {{ $t('verifyPhoneSubheading') }}
          </p>
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card flat>
            <label class="font-weight-bold">
              {{ $t('verificationCode') }}
            </label>
            <div dir="ltr" class="mb-16 pt-3">
              <v-otp-input
                class="normal-height"
                v-model="code"
                :rules="[inputsRules.required, inputsRules.min]"
                :length="inputsLength"
                type="number"
                :disabled="submitting"
                @finish="submitForm"
              ></v-otp-input>
            </div>
          </v-card>
          <v-card-actions class="mb-4 px-sm-6 justify-center">
            <v-btn :loading="submitting" type="submit"
            color="primary" class="btn-primary py-3 px-16">
              {{ $t('verify') }}
            </v-btn>
          </v-card-actions>
        </v-form>
        <div class="d-flex flex-column align-center">
          <div class="d-flex align-center gap-sm mb-3 font-weight-bold">
            <span>{{ $t('didNotReceiveCode') }}</span>
            <a @click="resendCode" href="javascript:;" :disabled="submitting" class="link-hover text-blue">
              {{ $t('resendCode') }}
            </a>
          </div>
          <div class="d-flex align-center gap-sm font-weight-bold">
            <span>{{ $t('faceProblem') }}</span>
            <nuxt-link :to="localePath('/contact')" class="link-hover text-blue">
              {{ $t('contactUs') }}
            </nuxt-link>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerifyPhonePage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('verificationCode')}`
    }
  },
  data() {
    return {
      submitting: false,
      inputsLength: 6,
      code: '',
      inputsRules: {
        required: (value) => !!value || 'Required.',
        min: (v) => (v && v.length === this.inputsLength) || `Min ${this.inputsLength} numbers`,
      }
    }
  },
  computed: {
    phone() {
      return this.$route.query.phone || null;
    }
  },
  methods: {
    resendCode() {},
    validateForm() {
      return this.$refs.loginForm.validate();
    },
    resetForm() {
      this.$refs.loginForm.reset();
    },
    submitForm() {
      if(this.validateForm()) {
        console.log('Inputs is valid');
        this.submitting = true;

      }
    }
  }
}
</script>
