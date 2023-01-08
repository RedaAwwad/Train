<template>
  <div class="single-select" :class="{ 'mb-4': !noMargin }">
    <div class="d-flex align-items justify-space-between py-2">
      <label class="font-weight-bold">{{ selectedLabel }}</label>
      <a
        @click="changeItems(`${label === 'stockMaterials' ? 'tags' : 'stockMaterials'}`)"
        href="javascript:;"
        class="text-blue underline-none font-weight-bold"
      >
        {{
          $t('determineBy', {
            name: `${label === 'stockMaterials' ? $t('tags') : $t('stockMaterials')}`,
          })
        }}
      </a>
    </div>
    <v-select
      v-model="selectedItems"
      :items="items"
      item-text="name"
      :item-value="(i) => i"
      :label="placeholder"
      :clearable="clearable"
      text
      :loading="isLoading"
      class="select-input m-input-border"
      color="white"
      multiple
      chips
      dense
      @input="updateValue"
      :menu-props="{ bottom: true, offsetY: true }"
    >
    <!-- <template v-slot.selection="{ item }">
      {{ item }}
    </template> -->
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'stockMaterialsTagsSelector',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    placeholder: {
      type: String,
      default: null,
    },
    stockMaterials: {
      type: Array,
      default: [],
    },
    tags: {
      type: Array,
      default: [],
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      label: 'stockMaterials',
      items: this.stockMaterials || [],
      selectedItems: [],
    };
  },
  watch: {
    'value.length'(length) {
      if(!length) this.selectedItems = [];
    }
  },
  computed: {
    selectedLabel() {
      return this.$t(this.label);
    },
    clear() {
      return !this.value?.length;
    }
  },
  methods: {
    changeItems(type) {
      this.selectedItems = [];
      this.label = type;
      this.items = this[type];
      this.$emit('update-type', type);
    },
    updateValue(value) {
      this.$emit('input', value);
      this.$emit('update-stock-materials', this.label);
    }
  },
};
</script>

<style></style>
