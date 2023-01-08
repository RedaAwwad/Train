<template>
  <v-checkbox 
    :rules="[validation]" 
    class="input-no-margin"
    v-model="checked" :success="success"
    :label="label"
    @change="updateValue"
  >
    <template v-if="!label" v-slot:label>
      <slot />
    </template>
  </v-checkbox>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Boolean,
    },
    label: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: false,
      validation: (value) => {
        if(this.required) {
          return !!value || 'Required.'
        }

        return true;
      },
    }
  },
  computed: {
    success() {
      if(this.required) {
        return this.checked;
      }

      return false;
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
}
</script>
