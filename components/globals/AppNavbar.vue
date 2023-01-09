<template>
    <v-app-bar
      tag="nav"
      fixed
      app
      :height="74"
      :color="`${scrollTop < 100 ? 'transparent' : 'white'}`"
      class="top-navbar"
      elevation="0"
    >
        <nuxt-link to="/">
            <v-img :max-width="`${screenWidth < 580 ? '180px' : '220px'}`" :src="`/imgs/logo${$isDark() || scrollTop < 100 ? '-light' : ''}.svg`" alt="القطار"></v-img>
        </nuxt-link>
        <div class="d-none d-sm-block ms-4">
            <v-img max-width="110" :src="`/imgs/alyamama${$isDark() || scrollTop < 100 ? '-light' : ''}.svg`" class="reverse-color" alt="alyamama"></v-img>
        </div>
    
        <v-spacer></v-spacer>
        <div class="d-flex align-center gap-sm">
            <v-btn nuxt to="/auth/login" text
            class="font-weight-bold" :class="`${scrollTop < 100 ? 'white--text' : ''}`">
                تسجيل الدخول
            </v-btn>
            <v-btn nuxt to="/auth/register" depressed color="primary"
            class="font-weight-bold">
                التقديم الآن
            </v-btn>
        </div>
  
      <!-- <div class="user__avatar d-flex align-center">
        <v-btn :icon="screenWidth < 960" :x-small="screenWidth < 960" link text to="#" class="mx-lg-3 font-weight-regular text-button">
          <v-icon :size="`${screenWidth < 960 ? '16px' : '20px'}`" :color="`${$isDark() ? 'white' : 'dark-gray'}`" class="mx-1">
            mdi-open-in-new
          </v-icon>
          <span class="d-none d-lg-inline-block mx-1" :class="`${$isDark() ? 'white--text' : 'dark-gray--text'}`">
            الذهاب إلى لوحة التحكم
          </span>
        </v-btn>
        <v-menu
          transition="slide-y-transition"
          :close-on-content-click="false"
          :nudge-width="120"
          :right="$dir() === 'rtl'"
          :left="$dir() === 'ltr'"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on" class="d-none d-lg-block cursor-pointer">
              <img
                src="/imgs/user-logo.svg"
                alt="user"
              />
            </v-avatar>
          </template>
  
          <v-list>
            <v-list-item
              v-for="(link, i) in avatarLinks"
              :key="i"
              :to="link.url"
              link
              nuxt
              exact
            >
              <v-list-item-content>
                <v-list-item-title tag="span" v-text="link.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div> -->
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
  