<template>
  <v-navigation-drawer tag="aside" fixed app :dark="$isDark()"
    v-model="isVisible" dir="rtl" :color="`${$isDark() ? '' : 'primary'}`" class="main-sidebar">
    <div class="mb-2 px-4 py-3 d-flex justify-center">
      <nuxt-link to="/">
        <img width="120" src="/logo.svg" />
      </nuxt-link>
    </div>

    <v-list class="main-sidebar__links" :color="`${$isDark() ? '' : 'primary'}`">
      <div v-for="(link, i) in links" :key="i">
        <!-- link with sublinks group -->
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
        <!-- link with no sublinks -->
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSidebar',
  props: {
    links: {
      type: Array,
      require: true,
      default: []
    }
  },
  data() {
    return {
      isVisible: false,
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
