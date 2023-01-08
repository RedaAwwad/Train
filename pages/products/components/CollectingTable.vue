<template>
  <div :class="{ white: !$isDark() }">
    <v-data-table
    class="table-has-status"
    v-model="selected"
    :headers="headers"
    :items="data"
    :page.sync="page"
    item-key="code"
    :mobile-breakpoint="0"
    show-select
    hide-default-footer
    :loading="isLoading"
    @page-count="pageCount = $event"
    :item-class="
      (i) => {
        if (i.active === 'no') {
          return 'status red-status';
        } else if (i.active === 'yes') {
          return 'status green-status';
        }
      }
    ">
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
  name: 'CollectingTable',
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
        { text: this.$t('code'), align: 'center', value: 'code' },
        { text: this.$t('price'), align: 'center', value: 'price' },
        { text: this.$t('taxGroup'), align: 'center', value: 'tax_group' },
        { text: this.$t('activeItem'), align: 'center', value: 'active' },
        { text: '', align: 'end', value: 'actions', sortable: false },
      ],
    }
  },
}
</script>
