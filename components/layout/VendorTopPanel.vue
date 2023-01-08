<template>
  <v-card elevation="0" rounded="0" class="pt-4 px-4">
    <v-container fluid class="pb-0">
      <div
        class="d-flex flex-column flex-sm-row align-sm-center justify-sm-space-between mb-4"
      >
        <h1 class="mb-4 mb-sm-0 whitespace-nowrap">مرحبا، حلويات طاهر</h1>

        <div v-if="isGeneralFilter" class="d-flex">
          <v-tabs class="d-flex justify-end">
            <v-tab @change="updateTabs('day')" :disabled="isLoading">
              {{ $t('day') }}
            </v-tab>
            <v-tab @change="updateTabs('week')" :disabled="isLoading">
              {{ $t('week') }}
            </v-tab>
            <v-tab @change="updateTabs('month')" :disabled="isLoading">
              {{ $t('month') }}
            </v-tab>
          </v-tabs>
        </div>
      </div>
      <div
        class="d-flex flex-column-reverse flex-sm-row align-end justify-space-between"
      >
        <div class="pt-3">
          <v-tabs class="inline-tabs">
            <v-tab exact link :to="localePath('/')">
              {{ $t('general') }}
            </v-tab>
            <v-tab link :to="localePath('/branches-stats')">
              {{ $t('branches') }}
            </v-tab>
            <v-tab link :to="localePath('/stock-stats')">
              {{ $t('stock') }}
            </v-tab>
          </v-tabs>
        </div>
        <date-range-picker
          v-if="isGeneralFilter"
          @update-date-range="updateDateRange"
          class="pb-2"
        />
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'VendorTopPanel',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isGeneralFilter() {
      let matches = this.$route.matched.filter(
        (r) =>
          r.path === '' ||
          r.path === '/' ||
          r.path === '/en' ||
          r.path === '/en/',
      );
      return matches.length === 2;
    },
  },
  methods: {
    updateTabs(tab) {
      this.$emit('update-filter', tab);

    },
    updateDateRange(range) {
      this.$emit('update-date-range', range);
    },
  },
};
</script>
