<template>
  <div class="single-select" :class="{ 'mb-4': !noMargin }">
    <div class="d-flex align-items justify-space-between py-2">
      <label class="font-weight-bold">{{ selectedLabel }}</label>
      <a
        @click="changeItems(`${label === 'branches' ? 'tags' : 'branches'}`)"
        href="javascript:;"
        class="text-blue underline-none font-weight-bold"
      >
        {{
          $t('determineBy', {
            name: `${label === 'branches' ? tagsLabel || $t('tags') : branchesLabel || $t('branches')}`,
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
  name: 'BranchesTagsSelector',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      default: null,
    },
    branches: {
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
    branchesLabel: {
      type: String,
    },
    tagsLabel: {
      type: String,
    },
  },

  data() {
    return {
      label: 'branches',
      items: this.branches || [],
      selectedItems: [],
    };
  },
  watch: {
    'value.length'(length) {
      if (!length) this.selectedItems = [];
    },
  },
  computed: {
    selectedLabel() {
      if (this.branchesLabel && this.tagsLabel) {
        return this.label === 'branches' ? this.branchesLabel : this.tagsLabel;
      }
      return this.$t(this.label);
    },
    clear() {
      return !this.value?.length;
    },
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
      this.$emit('update-type', this.label);
    },
  },
};
</script>
