<template>
  <modal
    max-width="450"
    :title="$t('addComponents')"
    :is-open="isModalOpen"
    @on-close="closeModal"
  >
    <template slot="controller">
      <v-btn
        depressed
        color="primary"
        class="px-6 text-subtitle-2"
      >
        {{ $t('addComponents') }}
      </v-btn>
    </template>
    <v-form @submit.prevent="submitForm" ref="addAdditions" lazy-validation>
      <branches-tags-selector :branches="stockStuff" :tags="tagsItems" 
      v-model="compareSelectedItems" required :branchesLabel="$t('stockStuff')"
      :tagsLabel="$t('tags')" @update-type="comapreType = $event"/>
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
  name: 'AddProductComponents',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      compareSelectedItems: [],
      comapreType: null,
      stockStuff: [
        {
          id: 1,
          name: 'مواد مخزون1'
        },
        {
          id: 2,
          name: 'مواد مخزون2'
        },
        {
          id: 3,
          name: 'مواد مخزون3'
        },
      ],
      tagsItems: [
        {
          id: 1,
          name: 'الوسم الأول'
        },
        {
          id: 2,
          name: 'الوسم الثاني'
        },
        {
          id: 3,
          name: 'الوسم الثالث'
        },
      ]
    }
  },
  methods: {
    closeModal() {
      this.resetform();
      this.isModalOpen = true;
    },
    resetform() {
      this.$refs.addAdditions.reset();
    },
    submitForm() {
      if(this.$refs.addAdditions.validate()) {

      }
    }
  }
}
</script>
