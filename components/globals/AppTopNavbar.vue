<template>
  <v-app-bar
    fixed
    app
    :height="74"
    :color="`${$isDark() ? '' : 'white'}`"
    class="top-navbar border-bottom"
    elevation="0"
  >
    <!-- <v-btn icon @click.stop="toggleSidebar">
      <v-icon>mdi-menu</v-icon>
    </v-btn> -->
    <nuxt-link to="/">
      <v-img :max-width="`${screenWidth < 580 ? '180px' : '220px'}`" :src="`/imgs/logo${$isDark() ? '-light' : ''}.svg`" alt="القطار"></v-img>
    </nuxt-link>
    <div class="d-none d-sm-block ms-4">
        <v-img max-width="110" :src="`/imgs/alyamama${$isDark() ? '-light' : ''}.svg`" class="reverse-color" alt="alyamama"></v-img>
    </div>

    <v-divider vertical class="d-none d-lg-inline-block mx-4"></v-divider>
    <!-- <app-search-form class="mx-1 d-none d-sm-block" /> -->

    <div class="d-none d-lg-flex align-center px-4">
      <v-menu
        elevation="0"
        transition="slide-y-transition"
        :close-on-content-click="false"
        :nudge-width="120"
        :right="false"
        left
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="menu-control px-2 font-weight-regular text-button">
            <span class="mx-1" :class="`${$isDark() ? 'white--text' : 'dark-gray--text'}`">
              الاحصائيات العامة
            </span>
            <v-icon size="20px" color="dark-gray" class="mx-1">mdi-chevron-down</v-icon>
          </v-btn>
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
      <v-menu
        transition="slide-y-transition"
        :close-on-content-click="false"
        :nudge-width="120"
        :right="false"
        left
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="menu-control px-2 font-weight-regular text-button">
            <span class="mx-1" :class="`${$isDark() ? 'white--text' : 'dark-gray--text'}`">
              جميع الجنسيات
            </span>
            <v-icon size="20px" color="dark-gray" class="mx-1">mdi-chevron-down</v-icon>
          </v-btn>
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
      <v-menu
        transition="slide-y-transition"
        :close-on-content-click="false"
        :nudge-width="120"
        :right="false"
        left
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="menu-control px-2 font-weight-regular text-button">
            <span class="mx-1" :class="`${$isDark() ? 'white--text' : 'dark-gray--text'}`">
              جميع الاوقات
            </span>
            <v-icon size="20px" color="dark-gray" class="mx-1">mdi-chevron-down</v-icon>
          </v-btn>
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
    </div>

    <v-spacer></v-spacer>
    <v-divider vertical class="d-inline-block d-lg-none me-4"></v-divider>

    <div class="d-none d-sm-block">
      <app-dark-switcher />
    </div>

    <v-divider vertical class="d-none d-lg-block ms-4"></v-divider>
    <div class="user__avatar d-flex align-center">
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
        :right="false"
        left
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
      <v-btn @click="toggleSidebar" icon :x-small="screenWidth < 960"
      class="d-inline-block d-lg-none mx-3 font-weight-regular text-button">
        <v-icon :size="`${screenWidth < 960 ? '16px' : '20px'}`" :color="`${$isDark() ? 'white' : 'dark-gray'}`" class="mx-1">
          mdi-dots-vertical
        </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppTopNavbar',
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters({
      isSidebar: 'ui/isSidebar',
    }),
    avatarLinks() {
      return [
        {
          title: 'اعدادات الحساب',
          url: `#`,
        },
        {
          title: 'الأمان والخصوصية',
          url: `#`,
        },
        {
          title: 'تسجيل الخروج',
          url: `#`,
        },
      ];
    },
    screenWidth() {
      if(!process.client) return 280;

      return window.innerWidth;
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('ui/TOGGLE_SIDEBAR', !this.isSidebar);
    },
  },
};
</script>
