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
        <v-card-title class="justify-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          afafaf
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card flat>
            <m-input v-model.number="accountNumber" type="number" label="account Number" info="رقم الحساب الخاص بك"
            required />
            <m-input v-model="email" type="email" label="Email Address" info=" البريد الإلكتروني الخاص بك"
            required/>
            <password-input v-model="password" label="password" info=" كلمة المرور الخاص بك"
            required />
            <div class="d-flex justify-end py-3">
              <nuxt-link to="/auth/forgot-password" class="link-hover font-weight-bold text-blue">
                afafafa
              </nuxt-link>
            </div>
          </v-card>
          <v-card-actions class="mb-4 px-sm-6">
            <v-btn :loading="submitting"
            block type="submit" color="primary" class="btn-primary py-4">
              login
            </v-btn>
          </v-card-actions>
        </v-form>
        <div class="d-flex flex-column align-center">
          <div class="d-flex align-center gap-sm mb-3 font-weight-bold">
            <span>afafafa</span>
            <nuxt-link to="/" class="link-hover text-blue">
              afafa
            </nuxt-link>
          </div>
          <div class="d-flex align-center gap-sm font-weight-bold">
            <span>afafaf</span>
            <nuxt-link to="/auth/register" class="link-hover text-blue">
              afafaf
            </nuxt-link>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: ['guest'],
  head() {
    return {
      title: `app`
    }
  },
  data() {
    return {
      submitting: false,
      accountNumber: null,
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
  },
  mounted() {
    this.$notify({
      group: 'notify',
      type: 'success',
      title: 'login',
      text: 'You are in the login page man!'
    });
  }
}
</script>
