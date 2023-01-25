<template>
  <div class="mh-screen__adjust-padding">
    <v-flex>
      <v-col>
        <app-lang-switcher btn/>
      </v-col>
    </v-flex>
    <div class="pt-3 pb-6">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto py-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <img width="160" src="/logo-dark.svg" >
        </div>
        <v-card-title class="justify-center text-center pt-0 px-md-12 mb-4 text-capitalize grey--text lighten-2">
          sfsfs
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card flat>
            <password-input v-model="password" label="new Password" info=" كلمة المرور الخاص بك"
            required />
            <password-input v-model="confirmedPassword" label="enterConfirmedPassword" info=" كلمة المرور الخاص بك"
            required />
          </v-card>
          <v-card-actions class="mb-2 px-sm-6">
            <v-btn :loading="submitting"
            block type="submit" color="primary" class="btn-primary py-4">
              login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPasswordPage',
  head() {
    return {
      title: `app`
    }
  },
  data() {
    return {
      submitting: false,
      password: null,
      confirmedPassword: null,
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
