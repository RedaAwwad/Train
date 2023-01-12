<template>
    <v-navigation-drawer tag="aside" fixed :dark="$isDark()"
      v-model="isVisible" dir="rtl">
      <div class="d-flex align-center gap px-4 py-3">
        <nuxt-link to="/">
          <img width="185px" :src="`${$isDark() ? '/imgs/logo-light.svg' : '/imgs/logo.svg'}`" />
        </nuxt-link>
        <v-btn icon link text to="#">
            <v-icon size="16px" :color="`${$isDark() ? 'white' : 'dark-gray'}`">
              mdi-open-in-new
            </v-icon>
        </v-btn>
      </div>
  
      <!-- :color="`${$isDark() ? '' : 'primary'}`" -->
      <v-divider class="mb-2"></v-divider>
      <div class="d-flex align-center gap py-2 px-4 mb-4">
        <v-avatar class="cursor-pointer">
          <img
            src="/imgs/user-logo.svg"
            alt="user"
          />
        </v-avatar>
        <span>User Name</span>
      </div>

      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="(link,i) in links"
          :key="i"
        >
          <v-expansion-panel-header>
            {{ link.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
  
      <!-- <v-list class="main-sidebar__links">
        <div v-for="(link, i) in links" :key="i">
          <v-list-group v-if="link.children && link.children.length"
          no-action :value="link.to && hasRoute(link.to)"
          :class="{'expanded-active-list': link.to && hasRoute(link.to)}" :prepend-icon="link.icon">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item v-for="(child, k) in link.children" :key="k" :to="child.to" router exact>
              <v-list-item-content>
                <v-list-item-title v-text="child.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :to="link.to" router exact
          :class="{'v-list-item--active' : isIndexDashboard && link.to === '/'}">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="link.title" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list> -->
    </v-navigation-drawer>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'AppMenu',
    data() {
      return {
        isVisible: false,
        links: [
            {
                url: 'https://google.com',
                title: 'الاحصائيات العامة',
                children: [
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    },
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    },
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    }
                ]
            },
            {
                url: 'https://google.com',
                title: 'جميع الجنسيات',
                children: [
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    },
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    },
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    }
                ]
            },
            {
                url: 'https://google.com',
                title: 'جميع الاوقات',
                children: [
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    },
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    },
                    {
                        url: 'https://google.com',
                        title: 'رابط افتراضي',
                    }
                ]
            }
        ]
      }
    },
    watch: {
      isSidebar(value) {
        this.isVisible = value;
      },
      isVisible(status) {
        if(!status) {
          this.$store.commit('ui/TOGGLE_SIDEBAR', false);
        }
      }
    },
    computed: {
      ...mapGetters({
        isSidebar: 'ui/isSidebar'
      }),
      isIndexDashboard() {
        return this.$route.matched.find(route => route.path === '' || route.path === '/en');
      }
    },
    methods: {
      hasRoute(url) {
        return this.$route.path.includes(url) && !this.$route.path.includes(`${url}-`);
      }
    },
    mounted() {
      // Fix sidebar responsiveness
      if(window.innerWidth < 1264) {
        this.isVisible = false;
        this.$store.commit('ui/TOGGLE_SIDEBAR', false);
      }
    }
  }
  </script>
  