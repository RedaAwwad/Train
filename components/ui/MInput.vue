<template>
  <div class="comman-input" :class="{ 'mb-4': !noMargin }">
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
    <div :class="[$isDark() ? '' : 'white']">
      <v-textarea
        v-if="type === 'textarea'"
        full-width
        flat
        single-line
        v-bind="options"
        @input="updateValue"
        :value="value"
        class="m-input-border px-3 pt-2 mb-0"
        :rules="[rules.required]"
        :required="required"
        :loading="isLoading"
        :append-icon="appendIcon"
      ></v-textarea>
      <v-text-field
        v-else
        :type="type"
        v-bind="options"
        @input="updateValue"
        :value="value"
        class="m-input-border mb-0"
        :background-color="`${$isDark() ? '' : 'white'}`"
        :rules="[rules.required]"
        :required="required"
        :loading="isLoading"
        :append-icon="appendIcon"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '~/utils';

export default {
  name: 'MInput',
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
    type: {
      type: String,
      default: 'text',
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
    appendIcon: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      rules: {
        required: (value) => {
          if (this.required) {
            if(this.type === 'email')
              return validateEmail(value) || 'Enter a valid E-mail!';

            else return !!value || 'Required!';
          }

          if(value && this.type === 'email') {
            return validateEmail(value) || 'E-mail must be valid';
          }

          return true;
        },
        // min: (v) => v.length >= 8 || 'Min 8 characters',
      },
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value ? value.trim() : value);
    },
  },
};
</script>
