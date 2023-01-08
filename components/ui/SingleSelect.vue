<template>
  <div class="single-select" :class="{ 'mb-4': !noMargin }">
    <div class="lable-info d-flex-between">
      <div class="input-head">
        <label class="font-weight-bold">{{ label }}</label>
        <span v-if="required" class="error--text">*</span>
      </div>
      <v-tooltip v-if="info" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="grey lighten-1">
              mdi-message-question-outline
            </v-icon>
          </v-btn>
        </template>
        <span>{{ info }}</span>
      </v-tooltip>
    </div>
    <v-select
      v-model="selectedValue"
      :items="content"
      :item-text="itemText"
      :item-value="(c) => c"
      :label="placeholder"
      :return-object="object"
      :rules="[rules.required]"
      :clearable="clearable"
      solo
      flat
      dense
      loading="false"
      class="m-input-border"
      color="white"
      :menu-props="menuOptions"
      @input="updateValue"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'SingleSelect',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: [Object, Array, Number, String],
      default: () => null,
    },
    content: {
      type: [Object, Array, Number, String],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'اختر',
    },
    itemText: {
      type: String,
      default: 'name',
    },
    info: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    object: {
      type: Boolean,
      default: false,
    },
    menuProps: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selectedValue: this.value,
      rules: {
        required: (value) => {
          if (this.required) {
            return !!value || 'Required.';
          }
          return true;
        },
      },
    };
  },
  watch: {
    value(item) {
      this.selectedValue = item;
    },
  },
  computed: {
    menuOptions() {
      let options = { bottom: true, offsetY: true };

      if (this.menuProps) {
        options = { ...options, ...this.menuProps };
      }

      return options;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
