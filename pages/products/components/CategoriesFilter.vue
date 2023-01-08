<template>
  <modal
    max-width="450"
    :title="$t('filter')"
    :is-open="isModalOpen"
    @on-close="isModalOpen = true"
  >
    <template slot="controller">
      <v-btn color="primary" class="py-2">
        <v-icon class="pe-1"> mdi-filter </v-icon>
        <span>{{ $t('filter') }}</span>
      </v-btn>
    </template>
    
    <m-input v-model="form.name" :label="$t('name')" info="معلومات"/>
    <div class="haveOrder">
      <label class="font-weight-bold">
        {{ $t('deleted') }}
      </label>
      <v-radio-group class="mt-0" v-model="form.deleted" row>
        <v-radio class="ms-0 ps-0" :label="$t('yes')" value="yes"></v-radio>
        <v-radio :label="$t('no')" value="no"></v-radio>
      </v-radio-group>
    </div>
    
    <m-input v-model="form.referenceNumber" :label="$t('referenceNumber')" info="معلومات"/>

    <date-input v-model="form.creationDate" :label="$t('creationDate')" info="معلومات"/>

    <template slot="footer">
      <v-btn @click="resetForm" elevation="0" class="px-6 py-2 text-subtitle-1">
        {{ $t('reset') }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="px-8 py-2 text-subtitle-1" outlined 
      @click="isModalOpen = false">
        {{ $t('cancel') }}
      </v-btn>
      <v-btn @click="apply" color="primary" class="px-8 py-2 text-subtitle-1">
        {{ $t('apply') }}
      </v-btn>
    </template>
  </modal>
</template>

<script>
export default {
  name: 'ProductsCategoriesFilter',
  data() {
    return {
      isModalOpen: true,
      form: {
        name: null,
        deleted: 'no',
        referenceNumber: null,
        creationDate: null,
      },
    }
  },
  methods: {
  resetForm() {
  this.Form = {
    name: null,
    deleted: 'no',
    referenceNumber: null,
    creationDate: null,
  }
  },
  apply() {
    this.$emit('update', this.form);
  }
 }
}
</script>
