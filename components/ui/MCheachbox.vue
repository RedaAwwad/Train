<template>
  <v-checkbox v-model="cheaked" :label="label"></v-checkbox>
</template>

<script>
export default {
  name: 'MCheckbox',
  props: {
     label: {
      type: String,
      default: null,
    },
    cheaked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style></style>
