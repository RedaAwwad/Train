<template>
  <v-app>
    <app-notify />
    <!-- <app-sidebar :links="sidebarLinks" /> -->
    <app-top-navbar />
    <v-main :dark="$isDark()" :class="{ light: !$isDark() }">
      <v-scroll-x-transition>
        <v-container class="main-page-container py-8">
          <Nuxt />
        </v-container>
      </v-scroll-x-transition>
    </v-main>

    <div class="d-lg-none">
      <app-sm-menu />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DasdboardLayout',
  data() {
    return {};
  },
  computed: {
    sidebarLinks() {
      return [
        {
          icon: 'mdi-widgets',
          title: 'الرئيسية',
          to: '/',
          children: [],
        },
      ];
    },
  },
};
</script>
