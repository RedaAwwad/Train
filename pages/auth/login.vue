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
          <img width="160" src="/logo-dark.svg" :alt="$t('appName')">
        </div>
        <v-card-title class="justify-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          {{ $t('loginToYourAccount') }}
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card flat>
            <m-input v-model.number="accountNumber" type="number" :label="$t('accountNumber')" info="رقم الحساب الخاص بك"
            required />
            <m-input v-model="email" type="email" :label="$t('emailAddress')" info=" البريد الإلكتروني الخاص بك"
            required/>
            <password-input v-model="password" :label="$t('password')" info=" كلمة المرور الخاص بك"
            required />
            <div class="d-flex justify-end py-3">
              <nuxt-link :to="localePath('/auth/forgot-password')" class="link-hover font-weight-bold text-blue">
                {{ $t('forgotPassword') }}
              </nuxt-link>
            </div>
          </v-card>
          <v-card-actions class="mb-4 px-sm-6">
            <v-btn :loading="submitting"
            block type="submit" color="primary" class="btn-primary py-4">
              {{ $t('login') }}
            </v-btn>
          </v-card-actions>
        </v-form>
        <div class="d-flex flex-column align-center">
          <div class="d-flex align-center gap-sm mb-3 font-weight-bold">
            <span>{{ $t('haveNoInformation') }}</span>
            <nuxt-link to="/" class="link-hover text-blue">
              {{ $t('contactWithUs') }}
            </nuxt-link>
          </div>
          <div class="d-flex align-center gap-sm font-weight-bold">
            <span>{{ $t('haveNoAccountInNqde') }}</span>
            <nuxt-link :to="localePath('/auth/register')" class="link-hover text-blue">
              {{ $t('registerNowForFree') }}
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
      title: `${this.$t('appName')} | ${this.$t('login')}`
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
      title: this.$t('login'),
      text: 'You are in the login page man!'
    });
  }
}
</script>
