<template>
  <modal
    max-width="450"
    :title="$t('addFeatures')"
    :is-open="isModalOpen"
    @on-close="isModalOpen = true"
  >
    <template slot="controller">
      <v-btn
        depressed
        color="primary"
        class="px-6 text-subtitle-2"
      >
        {{ $t('addFeatures') }}
      </v-btn>
    </template>
    <v-form @submit.prevent="submitForm" ref="features" lazy-validation>
      <multiple-select
        v-model="selectedFeatures"
        :label="$t('features')"
        :menu-props="{ maxHeight: 200 }"
        :content="features"
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
  name: 'ProductFeatures',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      selectedFeatures: [],
      features: [
        { id: 1, name: 'feature 1' },
        { id: 2, name: 'feature 2' },
        { id: 3, name: 'feature 3' },
        { id: 4, name: 'feature 4' },
        { id: 5, name: 'feature 52' },
      ]
    }
  },
  methods: {
    resetform() {
      this.$refs.features.reset();
    },
    submitForm() {
      if(this.$refs.features.validate()) {

      }
    }
  }
}
</script>
