<template>
  <!-- :color="`${$isDark() ? '' : 'primary'}`" -->
  <v-app-bar
    fixed
    app
    :height="74"
    :color="`${$isDark() ? '' : 'white'}`"
    class="top-navbar"
    elevation="0"
  >
    <!-- <v-btn icon @click.stop="toggleSidebar">
      <v-icon>mdi-menu</v-icon>
    </v-btn> -->
    <a href="#">
      <v-img :src="`${$isDark() ? '/imgs/logo-light.svg' : '/imgs/logo.svg'}`" alt="القطار"></v-img>
    </a>
    <div class="ms-4">
      <v-img src="/imgs/alyamama.svg" class="reverse-color" alt="alyamama"></v-img>
    </div>
    <v-divider vertical class="mx-4"></v-divider>
    <!-- <app-search-form class="mx-1 d-none d-sm-block" /> -->

    <div class="d-flex align-center px-4">
      <v-menu
        elevation="0"
        transition="slide-y-transition"
        :close-on-content-click="false"
        :nudge-width="120"
        :right="$dir() === 'ltr'"
        :left="$dir() === 'rtl'"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="menu-control px-2 font-weight-regular text-button">
            <span class="mx-1 dark-gray--text">الاحصائيات العامة</span>
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
        :right="$dir() === 'ltr'"
        :left="$dir() === 'rtl'"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="menu-control px-2 font-weight-regular text-button">
            <span class="mx-1 dark-gray--text">جميع الجنسيات</span>
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
        :right="$dir() === 'ltr'"
        :left="$dir() === 'rtl'"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="menu-control px-2 font-weight-regular text-button">
            <span class="mx-1 dark-gray--text">جميع الاوقات</span>
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
    <div class="d-none d-md-flex">
      <!-- <app-lang-switcher /> -->

      <app-dark-switcher />
    </div>

    <!-- <app-notifications link-only /> -->
    <v-divider vertical class="ms-4"></v-divider>
    <div class="user__avatar d-flex align-center">
      <v-btn link text to="#" class="mx-3 font-weight-regular text-button">
        <v-icon size="20px" color="dark-gray" class="mx-1">mdi-open-in-new</v-icon>
        <span class="mx-1 dark-gray--text">الذهاب إلى لوحة التحكم</span>
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
          <v-avatar v-bind="attrs" v-on="on" class="cursor-pointer">
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
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('ui/TOGGLE_SIDEBAR', !this.isSidebar);
    },
  },
};
</script>
