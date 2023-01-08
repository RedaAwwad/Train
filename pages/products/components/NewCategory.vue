<template>
  <modal
    max-width="450"
    :title="$t('addCategory')"
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
        {{ $t('addCategory') }}
      </v-btn>
    </template>
      <v-form
        @submit.prevent="submitForm"
        ref="categoryForm"
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
  name: 'NewProductsCategory',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      form: {
        name: null,
        referenceNumber: null
      },
    }
  },
  methods: {
    validateForm() {
      return this.$refs.categoryForm.validate();
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
