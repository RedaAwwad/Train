<template>
  <div class="mh-screen__adjust-padding">
    <div class="py-6">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto pa-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <h1>{{ $t('securityInfo') }}</h1>
        </div>
        <v-card-title class="justify-center text-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          <div style="max-width: 425px;">
            {{ $t('securityInfoSubheading') }}
          </div>
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card flat>
            <m-input v-model="email" type="email" :label="$t('emailAddress')" info=" البريد الإلكتروني الخاص بك"
            required/>
            <password-input v-model="password" :label="$t('password')" info=" كلمة المرور الخاص بك"
            required />
          </v-card>
          <v-card-actions class="mb-4 pt-6 px-sm-4 justify-center">
            <v-btn link outlined depressed exact :to="localePath('/auth/register/legal-info')" color="primary" class="btn-primary py-3 px-12">
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
  name: 'SecurityInfoPage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('securityInfo')}`
    }
  },
  data() {
    return {
      submitting: false,
      email: null,
      password: null,
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
        console.log('Inputs is valid');
        this.submitting = true;


      }
    }
  }
}
</script>
