<template>
  <div :class="`search-form px-3 ${border ? 'with-border' : ''}`">
    <v-text-field
      :placeholder="$t('searchFormPlaceholder')"
      v-model="keyword"
      @change="updateValue"
    >
      <v-icon
        slot="append"
      >
        mdi-magnify
      </v-icon>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'AppSearchForm',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
    },
    border: {
      type: Boolean,
      default: false
    },
    
  },
  data() {
    return {
      isLoading: false,
      searchResults: [],
      keyword: '',
    }
  },
  watch: {
    keyword(val) {
      // Items have already been loaded
      if (this.searchResults.length > 0) return

      // this.isLoading = true

      // Lazily load input items
    // fetch('https://api.coingecko.com/api/v3/coins/list')
    //   .then(res => res.clone().json())
    //   .then(res => {
    //     this.searchResults = res
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    //   .finally(() => (this.isLoading = false))
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style>
  .v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
      transform: none;
  }
</style>
