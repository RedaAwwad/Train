<template>
  <modal
    max-width="450"
    :title="$t('createAddition')"
    :is-open="isModalOpen"
    @on-close="isModalOpen = true"
  >
    <template slot="controller">
      <v-btn
        depressed
        exact
        color="primary"
        class="btn-primary py-3 px-6 text-subtitle-2"
      >
        {{ $t('createAddition') }}
      </v-btn>
    </template>
      <v-form
        @submit.prevent="submitForm"
        ref="supliersForm"
        lazy-validation
      >
      <m-input v-model="form.name" :label="$t('name')" 
      required info="معلومات"/>

      <reference-number-generator v-model="form.referenceNumber" :label="$t('referenceNumber')" info="معلومات"/>
    </v-form>
   
    <template slot="footer">
      <v-spacer></v-spacer>
      <v-btn color="primary" class="px-8 py-2 text-subtitle-1" outlined 
      @click="isModalOpen = false">
        {{ $t('cancel') }}
      </v-btn>
      <v-btn @click="submitForm" color="primary" 
      :loading="submitting" :disabled="submitting" 
      class="px-8 py-2 text-subtitle-1">
        {{ $t('apply') }}
      </v-btn>
    </template>
  </modal>
</template>

<script>
export default {
  name: 'AddAddition',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      form: {
        name: null,
        referenceNumber: null,
      },
      isValidPhoneNumber: true
    }
  },
  methods: {
    validateForm() {
      return this.$refs.supliersForm.validate();
    },
    resetForm() {
      this.$refs.supliersForm.reset();
    },
    submitForm() {
      if(this.validateForm()) {
        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.$emit('added')
        }, 1000);

      }
    }
  }
}
</script>
