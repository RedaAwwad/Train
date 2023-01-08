

<template>
  <v-menu
    rounded
    offset-y
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="py-3 px-1 text-subtitle-2 primary--text"
        outlined
        v-bind="attrs"
        v-on="on"
      >
        <span class="mx-3 mx-sm-4">
          {{ label || $t('export') }}
        </span>
        <v-icon
          class="mx-3 mx-sm-4"
          right
        >
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item
        v-for="(item, i) in links" :key="i"
        link
        download="file_name"
        :href="item.url"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.label"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>

export default {
  name: 'BtnExportMenu',
  props: {
    label: {
      type: String,
    },
    links: {
      type: Array,
      default: () => []
    }
  },
}
</script>
