<template>
    <modal
      max-width="450"
      :title="$t('addSpecialPrice')"
      :is-open="isModalOpen"
      @on-close="isModalOpen = true"
    >
      <template slot="controller">
        <v-btn
        depressed
        color="primary"
        class="px-6 text-subtitle-2">
            {{ $t('addSpecialPrice') }}
        </v-btn>
      </template>
      <v-form @submit.prevent="submitForm" ref="specialPrice" lazy-validation>
        <m-input v-model="price" :label="$t('price')" 
        required info="معلومات"/>
      </v-form>
  
      <template slot="footer">
        <v-btn @click="resetform" elevation="0" class="px-6 py-2 text-subtitle-1">
          {{ $t('reset') }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          class="px-8 py-2 text-subtitle-1"
          outlined
          @click="isModalOpen = false"
        >
          {{ $t('cancel') }}
        </v-btn>
        <v-btn
          @click="submitForm"
          color="primary"
          :loading="submitting"
          :disabled="submitting"
          class="px-8 py-2 text-subtitle-1"
        >
          {{ $t('apply') }}
        </v-btn>
      </template>
    </modal>
  </template>
  
  <script>
  export default {
    name: 'AddSpecialPrice',
    data() {
      return {
        isModalOpen: true,
        submitting: false,
        price: null
      }
    },
    methods: {
      resetform() {
        this.$refs.specialPrice.reset();
      },
      submitForm() {
        if(this.$refs.specialPrice.validate()) {
  
        }
      }
    }
  }
  </script>
  