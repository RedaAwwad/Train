<template>
  <modal
    max-width="450"
    :title="$t('addTags')"
    :is-open="isModalOpen"
    @on-close="isModalOpen = true"
  >
    <template slot="controller">
      <v-btn
        depressed
        color="primary"
        class="px-6 text-subtitle-2"
      >
        {{ $t('addTags') }}
      </v-btn>
    </template>
    <v-form @submit.prevent="submitForm" ref="addTags" lazy-validation>
      <multiple-select
        v-model="selectedTags"
        :label="$t('tag')"
        :menu-props="{ maxHeight: 200 }"
        :content="tags"
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
  name: 'AddProductTags',
  data() {
    return {
      isModalOpen: true,
      submitting: false,
      selectedTags: [],
      tags: [
        { id: 1, name: 'وسم 1' },
        { id: 2, name: 'وسم 2' },
        { id: 3, name: 'وسم 3' },
        { id: 4, name: 'وسم 4' },
        { id: 5, name: 'وسم 52' },
        { id: 6, name: 'وسم 03' },
        { id: 7, name: 'وسم 155' },
        { id: 8, name: 'وسم 02' },
        { id: 9, name: 'وسم 003' },
      ]
    }
  },
  methods: {
    resetform() {
      this.$refs.addTags.reset();
    },
    submitForm() {
      if(this.$refs.addTags.validate()) {

      }
    }
  }
}
</script>
