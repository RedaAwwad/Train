<template>
  <div :class="{ white: !$isDark() }">
    <v-data-table
    v-model="selected"
    :headers="headers"
    :items="data"
    :page.sync="page"
    item-key="code"
    :mobile-breakpoint="0"
    show-select
    hide-default-footer
    :loading="isLoading"
    @page-count="pageCount = $event">
      <template v-slot:item.status="{ item }">
        {{ $t(item.status) }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small icon to="/">
          <v-icon small> mdi-eye </v-icon>
        </v-btn>
        <v-btn small icon class="mx-1">
          <v-icon small> mdi-information </v-icon>
        </v-btn>
        <v-menu
          :right="$dir() == 'rtl'"
          :left="$dir() == 'ltr'"
          offset-x
          :nudge-width="200"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn small icon v-bind="attrs" v-on="on">
              <v-icon small> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>

          <v-list dense>
            <v-list-item link>
              <v-list-item-title class="font-weight-bold">
                حذف
              </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-title class="font-weight-bold">
                Another Action
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <v-divider></v-divider>
    <div class="py-4">
      <v-pagination v-model="page" 
      :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductAdditionsTable',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: [],
      page: 1,
      pageCount: 0,
      headers: [
        { text: this.$t('name'), align: 'start', value: 'name' },
        { text: this.$t('referenceNumber'), align: 'center', value: 'reference_number' },
        { text: this.$t('additionOptions'), align: 'center', value: 'addition_options' },
        { text: this.$t('relatedProducts'), align: 'center', value: 'related_products' },
        { text: this.$t('creationDate'), align: 'center', value: 'creation_date' },
        { text: '', align: 'end', value: 'actions', sortable: false },
      ],
    }
  },
}
</script>
