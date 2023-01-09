<template>
  <div class="dark-mode-switcher d-flex align-center">
    <!-- <v-btn block text v-if="text" @click="toggleDarkMode">Dark Mode</v-btn> -->
    <!-- <v-switch v-else v-model="darkMode"
      @change="toggleDarkMode"
    ></v-switch> -->
    <v-btn @click="toggleDarkMode" icon color="dark-gray" class="btn-dark-switcher">
      <v-icon size="20px" :color="`${$isDark() ? 'white' : 'dark-gray'}`">mdi-brightness-{{$isDark() ? '3':'2'}}</v-icon>
    </v-btn>
    <!-- <v-btn icon class="mx-3 font-weight-regular text-button">
      <v-icon size="20px" color="dark-gray" class="mx-1">mdi-open-in-new</v-icon>
    </v-btn> -->
  </div>
</template>

<script>
export default {
  
  name: 'AppDarkModeSwitcher',
  props: {
    text: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      darkMode: true,
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('ui/TOGGLE_SIDEBAR', !this.isSidebar);
    },
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("app_dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("app_dark_theme");
    if (theme) {
        if (theme === "true") {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
          this.darkMode = false;
        }
    } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;
      this.darkMode = true;
      localStorage.setItem("app_dark_theme", 'true');
    }
  }
}
</script>
