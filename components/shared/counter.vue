<template>
  <v-card
    outlined
    rounded="0"
    class="number-units d-flex align-center gap-1 border-light siz-3 font-weight-bold overflow-hidden"
    height="30"
  >
    <v-btn
      @click="plus()"
      class="transparent pa-0 text--primary siz-3"
      min-width="40"
      :disabled="disabled"
      outlined
      >+</v-btn
    >
    {{ value }}
    <v-btn
      @click="minus()"
      class="transparent pa-0 text--primary siz-3"
      min-width="40"
      :disabled="disabled"
      outlined
      >-</v-btn
    >
  </v-card>
</template>

<script>
export default {
  name: 'Counter',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    allowZero: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      quantity: this.value,
    };
  },
  watch: {
    value(q) {
      this.quantity = q;
    }
  },
  methods: {
    plus() {
      this.quantity++;
      this.$emit('input', this.quantity);
      this.$emit('update', 'plus');
    },
    minus() {
      if((this.allowZero && this.quantity > 0) || (!this.allowZero && this.quantity > 1)) {
        this.quantity--;
        this.$emit('input', this.quantity);
        this.$emit('update', 'minus');
      }

    },
  },
};
</script>
