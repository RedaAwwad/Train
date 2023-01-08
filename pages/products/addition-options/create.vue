<template>
  <div>
    <v-card elevation="0" rounded="0" class="pt-4 mb-4 mb-sm-6">
      <v-container class="pb-8 pb-sm-16">
        <div
          class="d-flex flex-column flex-sm-row align-sm-center justify-sm-space-between"
        >
          <h1 class="font-weight-bold mb-4 mb-sm-0">
            {{ $t('addNewOption') }}
          </h1>
        </div>
      </v-container>
    </v-card>
    <v-container>
      <v-card flat class="pa-4 pa-sm-6">
        <v-form @submit.prevent="submitForm" ref="loginForm" lazy-validation>
          <v-card flat>
            <v-row class="mb-6">
              <v-col cols="12" sm="6">
                <m-input
                  v-model="form.name"
                  :label="$t('name')"
                  info="الاسم"
                  required
                  no-margin
                />
              </v-col>
              <v-col cols="12" sm="6">
                <reference-number-generator v-model="form.code" :label="$t('code')" required info="معلومات"/>
              </v-col>
              <v-col cols="12" sm="6">
                <single-select
                  v-model="form.addition"
                  required
                  no-margin
                  :content="[{ name: 'addition 1' }, { name: 'addition 2' }]"
                  :label="$t('theAddition')"
                  info="addition"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <single-select
                  v-model="form.taxGroup"
                  required
                  no-margin
                  :content="[{ name: 'taxGroup 1' }, { name: 'taxGroup 2' }]"
                  :label="$t('taxGroup')"
                  info="taxGroup"
                />
              </v-col>
              <v-col cols="12" sm="6" class="d-flex align-center">
                <div class="haveOrder pt-3">
                  <label class="mb-1 font-weight-bold">
                    {{ $t('costCalculationMethod') }}
                  </label>
                  <v-radio-group v-model="form.costCalculationMethod" row>
                    <v-radio :label="$t('fixedPrice')" class="ms-0 ps-0" value="fixed" />
                    <v-radio :label="$t('fromComponents')" value="from_compoents" />
                  </v-radio-group>
                </div>
              </v-col>
              
              <v-col cols="12" sm="6">
                <m-input
                  v-model="form.cost"
                  :label="$t('cost')"
                  info="cost"
                  required
                  no-margin
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card-actions class="justify-end mb-4">
            <v-btn
              :loading="submitting"
              type="submit"
              color="primary"
              class="btn-primary py-3"
            >
              {{ $t('saveAndApply') }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'CreateAdditionOption',
  layout: 'dashboard',
  data() {
    return {
      submitting: false,
      form: {
        name: null,
        code: null,
        addition: null,
        taxGroup: null,
        costCalculationMethod: null,
        cost: null,
      }
    };
  },
  methods: {
    validateForm() {
      return this.$refs.loginForm.validate();
    },
    resetForm() {
      this.$refs.loginForm.reset();
    },
    submitForm() {
      if (this.validateForm()) {
        this.submitting = true;

        setTimeout(() => {
          this.$router.push(this.localePath('/vendor'));
        }, 500);
      }
    },
  },
};
</script>

