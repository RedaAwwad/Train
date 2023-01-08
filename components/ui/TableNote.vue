<template>
  <div class="mt-10 text-h5">
    {{ note }}
  </div>
</template>

<script>
export default {
  name: 'TableNote',
  props: {
    note: {
      type: String,
    },
  },
};
</script>

<style></style>
