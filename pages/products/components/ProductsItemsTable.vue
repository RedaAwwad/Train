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
    @click:row="(item) => navigateToProductDetails(item.id)"
    @page-count="pageCount = $event"
    :item-class="
      (i) => {
        if (i.is_active) {
          return 'status cursor-pointer green-status';
        } else {
          return 'status cursor-pointer red-status';
        }
      }
    ">
      <template v-slot:item.is_active="{ item }">
        <div class="w-100 d-flex justify-center">
          <v-badge dot inline :color="`${item.is_active ? 'green' : 'red'}`"></v-badge>
        </div>
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
  name: 'ProductsItemsTable',
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
        { text: this.$t('category'), align: 'center', value: 'category' },
        { text: this.$t('price'), align: 'center', value: 'price' },
        { text: this.$t('taxGroup'), align: 'center', value: 'tax_group' },
        { text: this.$t('active'), align: 'center', value: 'is_active' },
        { text: '', align: 'end', value: 'actions', sortable: false },
      ],
    }
  },
  methods: {
    navigateToProductDetails(id) {
      this.$router.push(this.localePath(`/products/items/${id}`));
    }
  }
}
</script>
