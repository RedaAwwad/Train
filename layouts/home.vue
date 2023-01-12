<template>
  <v-app>
    <app-navbar />

    <v-main class="pt-0 overflow-hidden">
      <v-scroll-x-transition>
        <Nuxt />
      </v-scroll-x-transition>
    </v-main>

    <div class="d-sm-none">
      <app-sm-menu />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',
  data() {
    return {};
  },
};
</script>
