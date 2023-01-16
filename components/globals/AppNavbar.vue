<template>
    <v-app-bar
      tag="nav"
      fixed
      app
      :height="74"
      :color="`${scrollTop < 100 ? 'transparent' : 'white'}`"
      class="top-navbar border-bottom"
      :class="`${scrollTop < 100 ? '' : 'shadow'}`"
      elevation="0"
    >
      <v-container class="main-page-container d-flex align-center px-0">
        <nuxt-link to="/" class="d-flex">
            <img :style="`width: ${screenWidth < 580 ? '100px' : '250px'};`" :src="`/imgs/logo${$isDark() || scrollTop < 100 ? '-light' : ''}${screenWidth < 580 ? '-sm.svg' : '.svg'}`" alt="القطار" />
        </nuxt-link>
        <div class="d-flex ms-4">
            <img :style="`width: ${screenWidth < 580 ? '100px' : '130px'};`" :src="`/imgs/alyamama${$isDark() || scrollTop < 100 ? '-light' : ''}.svg`" class="reverse-color" alt="alyamama" />
        </div>
      
        <v-spacer></v-spacer>
        <div class="d-none d-sm-flex align-center gap-sm">
            <v-btn link href="https://google.com" text class="btn-navbar font-weight-bold" 
            :class="`${scrollTop < 100 ? 'white--text' : ''}`">
                تسجيل الدخول
            </v-btn>
            <v-btn link href="https://google.com" depressed color="primary"
            class="btn-navbar px-8 font-weight-bold">
                التقديم الآن
            </v-btn>
        </div>
        <v-btn @click="toggleSidebar" icon text class="d-sm-none pa-1">
          <v-icon :color="`${scrollTop < 100 ? 'white' : 'primary'}`">mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'AppHeader',
    data() {
      return {
        drawer: false,
        scrollTop: 0,
        avatarLinks: []
      };
    },
    computed: {
      ...mapGetters({
        isSidebar: 'ui/isSidebar',
      }),
      screenWidth() {
        if(!process.client) return 280;
  
        return window.innerWidth;
      },
    },
    methods: {
      toggleSidebar() {
        this.$store.commit('ui/TOGGLE_SIDEBAR', !this.isSidebar);
      },
      catchScrollTop() {
        this.scrollTop = window.scrollY;
      }
    },
    mounted() {
      this.catchScrollTop();
      document.addEventListener('scroll', () => this.catchScrollTop());
    },
  };
  </script>
  