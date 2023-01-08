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
    <div>
      <v-text-field
        class="m-input-border mb-0"
        readonly
        v-model="reference_number"
        :value="value"
        :background-color="`${$isDark() ? '' : 'white'}`"
        :rules="[rules.required]"
        :required="required"
        :loading="isLoading"
        :validate-on-blur="false"
        >
        <v-btn @click="generate" slot="append" 
        color="primary" x-small class="px-3 pt-4 pb-5 text-subtitle-1">
          {{ $t('autoGenerate') }}
        </v-btn>
        </v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferenceNumberGenerator',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
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
    reset: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      submitting: false,
      reference_number: this.value,
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
    value(reference_number) {
      this.reference_number = reference_number;
    }
  },
  methods: {
    generate() {
      this.submitting = true;
      const generatedReferenceNumber = null;
      this.$emit('input', generatedReferenceNumber);
    },
  }
};
</script>
