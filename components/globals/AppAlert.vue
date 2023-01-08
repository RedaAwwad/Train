<template>
  <client-only>
    <v-alert
      :icon="icone"
      :type="Atype"
      :color="color"
      :value="alert"
      dense
      elevation="1"
      transition="scale-transition"
      min-width="400"
      style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        max-width: 400px;
      "
    >
      {{ content }}
    </v-alert>
  </client-only>
</template>

<script>
export default {
  watch: {
    alert: function (value) {
      if (value == true) {
        this.$emit('removeAlert', 'false');
      }
    },
  },
  props: {
    content: {
      type: [String, Number, Array, Object],
      default: '',
    },
    icone: {
      type: [String, Number, Array, Object],
    },
    Atype: {
      // type: String,
      default: 'success',
    },
    color: {
      type: [String, Number, Array, Object],
      default: 'green',
    },
    alert: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.v-alert {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
