<template>
  <v-app>
    <app-notify />
    <v-main :dark="$isDark()"
    :class="{'bg-light' : $route.path.includes('package')}">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      
    }
  },
}
</script>
