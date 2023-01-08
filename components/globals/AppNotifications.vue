<template>
  <v-btn v-if="linkOnly" depressed icon nuxt :to="localePath('/profile/my-notifications')">
    <v-badge dark v-model="isNewNotification"
    overlap left dot color="error">
      <v-icon color="white">mdi-bell</v-icon>
    </v-badge>
  </v-btn>
  <v-menu v-else
    transition="slide-y-transition"
    :close-on-content-click="false"
    :nudge-width="200"
    :right="$dir() === 'rtl'"
    :left="$dir() === 'ltr'"
    offset-y
    z-index="9999"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs"
      v-on="on">
        <v-badge dark v-model="isNewNotification"
        overlap left dot color="error">
          <v-icon color="white">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list >
      <v-list-item
        v-for="(item, i) in 5"
        :key="i"
      >
        <v-list-item-title>Notification title</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'AppNotifications',
  props: {
    linkOnly: {
      type: Boolean,
      default: false
    },
    notifications: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      isNewNotification: true,
    }
  }
}
</script>
