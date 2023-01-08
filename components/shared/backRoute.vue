<template>
  <v-btn @click="backRouter()" class="border-0" text outlined>
    <v-icon class="rotate-180"> mdi-arrow-right </v-icon>
    <h3 class="ms-4">
      {{ $t('Goback') }}
    </h3>
  </v-btn>
</template>

<script>
export default {
  name: 'backRouter',
  methods: {
    backRouter() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
