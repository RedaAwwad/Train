<template>
  <modal
    max-width="450"
    :title="$t('selectBranches')"
    :is-open="isModalOpen"
    @on-close="closeModal"
  >
    <template slot="controller">
      <v-btn
        depressed
        color="primary"
        class="px-6 text-subtitle-2"
      >
        {{ $t('selectBranches') }}
      </v-btn>
    </template>
    <v-form @submit.prevent="submitForm" ref="selectBranches" lazy-validation>
      <multiple-select
        v-model="selectedBranches"
        :label="$t('branches')"
        :menu-props="{ maxHeight: 200 }"
        :content="branches"
        info="معلومات"
        required
      />
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
  name: 'InactiveProduct',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      selectedBranches: [],
      branches: [
        { id: 1, name: 'branch 1' },
        { id: 2, name: 'branch 2' },
        { id: 3, name: 'branch 3' },
        { id: 4, name: 'branch 4' },
        { id: 5, name: 'branch 52' },
        { id: 6, name: 'branch 03' },
        { id: 7, name: 'branch 155' },
        { id: 8, name: 'branch 02' },
        { id: 9, name: 'branch 003' },
      ]
    }
  },
  methods: {
    closeModal() {
      this.resetform();
      this.isModalOpen = true;
    },
    resetform() {
      this.$refs.selectBranches.reset();
    },
    submitForm() {
      if(this.$refs.selectBranches.validate()) {

      }
    }
  }
}
</script>
