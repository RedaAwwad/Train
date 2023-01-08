<template>
  <div class="comman-input" :class="{'mb-4' : !noMargin}">
    <div class="lable-info d-flex-between">
      <div class="input-head">
        <label v-if="label" class="font-weight-bold">{{ label }}</label>
        <label v-else class="font-weight-bold">{{ $t('phoneNumber') }}</label>
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
    <div dir="ltr" class="text-left">
      <client-only>
        <vue-tel-input
          :class="{ 'phone-not-valid' : !valid }"
          :defaultCountry="966"
          :autoDefaultCountry="false"
          :inputOptions="{ placeholder }"
          :dropdownOptions="{
            showDialCodeInSelection: true,
            showSearchBox: true,
            showFlags: true
          }"
          @input="updateValue"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

export default {
  name: 'PhoneInput',
  components: { VueTelInput },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
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
    valid: {
      type: Boolean,
      default: true,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    
  },
  methods: {
    updateValue(_, event) {
      if(event.valid) {
        this.$emit('input', event.number);
      }
      else {
        this.$emit('input', null);
      }
    }
  }
}
</script>
