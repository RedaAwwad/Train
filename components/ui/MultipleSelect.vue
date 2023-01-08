<template>
  <div class="single-select" :class="{ 'mb-4': !noMargin }">
    <div class="lable-info d-flex-between">
      <div>
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
      :label="placeholder"
      :rules="[rules.required]"
      :item-value="(c) => c"
      :clearable="clearable"
      solo
      flat
      loading="false"
      class="m-input-border"
      color="white"
      multiple
      chips
      dense
      :menu-props="menuOptions"
      @input="updateValue"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'MultipleSelect',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    content: {
      type: Array,
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
    menuProps: {
      type: Object,
      default: () => {}
    }
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
    value(items) {
      this.selectedValue = items;
    }
  },
  computed: {
    menuOptions() {
      let options = { bottom: true, offsetY: true };

      if(this.menuProps) {
        options = { ...options, ...this.menuProps }
      }
      
      return options;
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
