<template>
  <div class="comman-input" :class="{'mb-4' : !noMargin}">
    <div class="lable-info d-flex-between">
      <div class="input-head">
        <label v-if="label" class="font-weight-bold">{{ label }}</label>
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
    <v-text-field
      v-bind="options"
      @input="updateValue"
      :value="value"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      :background-color="`${$isDark() ? '' : 'white'}`"
      class="m-input-border"
      :loading="isLoading"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    // options: to bind all other
    // native html element attributes
    options: {
      type: Object,
    },
    value: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: null,
    },
    info: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
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
      showPassword: false,
      rules: {
        required: (value) => {
          if (this.required) {
            return !!value || 'Required.';
          }

          return true;
        },
        min: (v) => (v && v.length >= 8) || 'Min 8 characters',
      },
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
