<template>
  <div class="mh-screen__adjust-padding">
    <v-container class="px-0">
      <v-row>
        <v-col cols="6">
          <app-lang-switcher btn/>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn outlined link depressed
          :to="localePath('/auth/login')" class="btn-primary">
            <v-icon right class="mx-1">
              mdi-login
            </v-icon>
            <span class="mx-1">
              {{ $t('login') }}
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="pt-3 pb-6">
      <v-card outlined rounded class="py-4 pb-6 pa-sm-6">
        <div class="pa-4 d-flex justify-center">
          <h1>{{ $t('personalInfo') }}</h1>
        </div>
        <v-card-title class="justify-center text-center pt-0 mb-4 text-capitalize grey--text lighten-2">
          <div style="max-width: 425px;">
            {{ $t('enterYourInfoToRegisterYourAccount') }}
          </div>
        </v-card-title>
        <v-row justify="center">
          <v-col md="11" lg="9">
            <v-form
              @submit.prevent="submitForm"
              ref="loginForm"
              lazy-validation
            >
              <v-card flat class="mb-4">
                <v-row>
                  <v-col cols="12" sm="6">
                    <m-input v-model="firstName" :label="$t('firstName')" info="الاسم الأول" required no-margin />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <m-input v-model="lastName" :label="$t('lastName')" info="اسم العائلة" required no-margin />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <m-input v-model="fieldName" :label="$t('fieldName')" info="اسم النشاط" required no-margin :options="{placeholder: $t('enterFieldName')}" />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <single-select v-model="currency" required no-margin :content="countriesCurrency" :label="$t('currency')"
                    :menu-props="{maxHeight: 250}"
                    info="العملة" :placeholder="$t('chooseCurrency')" />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <phone-input
                    v-model="phoneNumber"
                     :valid="isValidPhoneNumber"
                    required no-margin
                    info="رقم الجوال"/>
                  </v-col >
                  <v-col cols="12" sm="6">
                    <single-select v-model="fieldType" required :content="[{name: 'تجاري'}, {name: 'خاص'}]" :label="$t('fieldType')" info="نوع النشاط" :placeholder="$t('chooseFieldType')"/>
                  </v-col>
                </v-row>

                <checkbox v-model="termsAccepted" required>
                                <div class="d-flex flex-column flex-sm-row align-sm-center gap-sm py-3 font-weight-bold">
                    <span>{{ $t('iConfirmIAccept') }}</span>
                    <nuxt-link :to="localePath('/terms')" class="link-hover text-blue">
                      {{ $t('termsAndConditions') }}
                    </nuxt-link>
                  </div>
                </checkbox>
              </v-card>
              <v-card-actions class="justify-end mb-4">
                <v-btn :loading="submitting"
                type="submit" color="primary" class="btn-primary py-3">
                   {{ $t('next') }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterPage',
  head() {
    return {
      title: this.$t('register')
    }
  },
  data() {
    return {
      submitting: false,
      firstName: null,
      lastName: null,
      fieldName: null,
      country: null,
      city: null,
      fieldType: null,
      currency: null,
      phoneNumber: null,
      termsAccepted: false,
      isValidPhoneNumber: true,
      error: null
    }
  },
  computed: {
    countriesCurrency() {
      return [];
    }
  },
  watch: {
    phoneNumber(status) {
      this.isValidPhoneNumber = status ? true : false;
    }
  },
  methods: {
    updateCountryCity(data) {
      this.country = data.country ? data.country : null;
      this.city = data.city ? data.city : null;
    },
    validateForm() {
      return this.$refs.loginForm.validate();
    },
    resetForm() {
      this.$refs.loginForm.reset();
      this.isValidPhoneNumber = true;
    },
    submitForm() {
      if(this.validateForm() && this.phoneNumber) {
        this.submitting = true;
        this.isValidPhoneNumber = true;

        setTimeout(() => {
          this.$router.push(this.localePath('/auth/register/legal-info'));
        }, 500);

      } else if(!this.phoneNumber) {
        this.isValidPhoneNumber = false;
      }
    }
  },
  // mounted() {
  //   console.log(this.$auth.$storage.getCookies());
  // }
}
</script>
