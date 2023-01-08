<template>
  <modal
    max-width="450"
    :title="$t('addTheAdditions')"
    :is-open="isModalOpen"
    @on-close="isModalOpen = true"
  >
    <template slot="controller">
      <v-btn
        depressed
        color="primary"
        class="px-6 text-subtitle-2"
      >
        {{ $t('addTheAdditions') }}
      </v-btn>
    </template>
    <v-form @submit.prevent="submitForm" ref="addAdditions" lazy-validation>
      <multiple-select
        v-model="selectedAdditions"
        :label="$t('theAdditions')"
        :menu-props="{ maxHeight: 200 }"
        :content="additions"
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
  name: 'AddProductAdditions',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      selectedAdditions: [],
      additions: [
        { id: 1, name: 'addition 1' },
        { id: 2, name: 'addition 2' },
        { id: 3, name: 'addition 3' },
        { id: 4, name: 'addition 4' },
        { id: 5, name: 'addition 52' },
        { id: 6, name: 'addition 03' },
        { id: 7, name: 'addition 155' },
        { id: 8, name: 'addition 02' },
        { id: 9, name: 'addition 003' },
      ]
    }
  },
  methods: {
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
