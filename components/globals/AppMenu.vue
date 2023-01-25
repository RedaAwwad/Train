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

      <v-expansion-panels accordion flat>
        <v-expansion-panel
          v-for="(filter,i) in filters"
          :key="i"
        >
          <v-expansion-panel-header>
            {{ filter.currentName }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list dense>
              <v-list-item
                v-for="(link, i) in filter.list"
                :key="i"
                link
                href="javascript:;"
                exact
                :disabled="link.isCurrent || isLoading"
                @click="filterCharts(filter.key, link.value)"
              >
                <v-list-item-content>
                  <v-list-item-title tag="span" v-text="link.label"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </template>
  
  <script>
  import { mapGetters, mapState } from 'vuex';
  
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
      ...mapState(['isLoading', 'filters']),
      ...mapGetters({
        isSidebar: 'ui/isSidebar'
      }),
      isIndexDashboard() {
        return this.$route.matched.find(route => route.path === '' || route.path === '/en');
      }
    },
    methods: {
      filterCharts(key, value) {
        const args = this.formateQuery(key, value);
        this.$store.dispatch('fetchDashboardData', args);
      },
      formateQuery(key, value) {
        if (this.filters?.length) {
          const query = {};
          
          this.filters.forEach(filter => {
            if(filter.key === key) {
              query[filter.key] = value;
            } else {
              filter.list.forEach(item => {
                if(item.isCurrent) {
                  query[filter.key] = item.value;
                }
              });
            }
          });

          return query;
        }

        return {};
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
  