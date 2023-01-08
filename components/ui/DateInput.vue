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
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
          v-model="date"
          v-bind="attrs"
          :value="value"
          v-on="on"
          class="m-input-border mb-0"
          :background-color="`${$isDark() ? '' : 'white'}`"
          :rules="[rules.required]"
          :required="required"
          :loading="isLoading"
          prepend-icon="mdi-calendar"
          >
          <v-btn v-if="reset" @click="clear" slot="append" 
          depressed class="p-1" rounded>
            <v-icon
              color="primary"
            >
              mdi-cached
            </v-icon>
          </v-btn>
          </v-text-field>
        </template>
        
        <v-date-picker
          v-model="date"
          :value="value"
          scrollable
          @change="updateValue"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            {{ $t('cancel') }}
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
          {{ $t('ok') }}
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
const todayDate = moment(new Date()).format('YYYY-MM-DD');

export default {
  name: 'DateInput',
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
      date: this.value,
      modal: false,
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
    value(date) {
      this.date = date;
    }
  },
  methods: {
    clear() {
      this.date = null;
      this.$emit('input', null);
    },
    updateValue(value) {
      this.$emit('input', value);
    },
  }
};
</script>
