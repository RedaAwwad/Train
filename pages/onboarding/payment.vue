<template>
  <div class="mh-screen__adjust-padding">
    <div class="py-6">
      <v-card width="500" max-width="100%" outlined rounded class="mx-auto pa-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <h1>{{ $t('checkout') }}</h1>
        </div>
        <v-card-title class="justify-center text-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          <div style="max-width: 425px;">
            {{ $t('checkoutSubheading') }}
          </div>
        </v-card-title>
        <v-form
          @submit.prevent="submitForm"
          ref="loginForm"
          lazy-validation
        >
          <v-card flat>
            <div class="comman-input mb-4">
              <div class="lable-info">
                <div>
                  <label class="font-weight-bold">{{ $t('cardNumber') }}</label>
                  <span class="error--text">*</span>
                </div>
              </div>
              <div dir="ltr">
                <v-text-field
                  v-model="cardNumber"
                  type="number"
                  class="m-input-border mb-0"
                  :background-color="`${$isDark() ? '' : 'white'}`"
                  :rules="[requiredRule]"
                  required
                  prepend-icon="mdi-credit-card-outline"
                ></v-text-field>
              </div>
            </div>
            <div class="d-flex align-center mb-4" dir="ltr">
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    v-model="cvv"
                    type="number"
                    class="m-input-border px-4"
                    :background-color="`${$isDark() ? '' : 'white'}`"
                    :rules="[requiredRule]"
                    required
                    label="CVV"
                  ></v-text-field>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="monthYear"
                    type="number"
                    class="m-input-border px-4"
                    :background-color="`${$isDark() ? '' : 'white'}`"
                    :rules="[requiredRule]"
                    required
                    label="MM/YY"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div class="mb-10">
              <v-checkbox 
                class="input-no-margin"
                v-model="saveCreditCard"
                :label="$t('saveCreditCardData')"
              >
              </v-checkbox>
            </div>
          </v-card>
          <v-card-actions class="mb-4 pt-6 px-sm-4 justify-center">
            <v-btn :loading="submitting"
            type="submit" color="primary" class="btn-primary py-3 px-12">
            {{ $t('paymentTemplate', { amount: '199' }) }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentPage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('checkout')}`
    }
  },
  data() {
    return {
      submitting: false,
      cardNumber: null,
      cvv: null,
      monthYear: null,
      saveCreditCard: false,
      requiredRule: (value) => !!value || 'Required!',
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
