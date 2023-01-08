<template>
  <div>
    <vendor-top-panel />
    <v-container fluid>
      <div class="d-flex justify-end py-4">
        <v-btn :color="`${$isDark() ? '' : 'white'}`" class="py-2 px-3"
        style="min-width: 10px !important;">
          <v-icon> mdi-reload </v-icon>
        </v-btn>
      </div>
    </v-container>
    <v-container fluid class="pt-0 pb-10">
      <v-card color="transparent" class="mb-6" elevation="0">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <line-chart title="طلبات الشراء"
            :height="200" :data="data" :x-data="xDataFilters"/>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <line-chart title="التحويلات المكتملة"
            :height="200" :data="data" :x-data="xDataFilters"/>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <line-chart title="الشراء"
            :height="200" :data="data" :x-data="xDataFilters"/>
          </v-col>
        </v-row>
      </v-card>
      <!-- purchase transactions -->
      <v-card color="transparent" elevation="0" class="mb-6">
        <h3 class="text-h6 font-weight-bold mb-1">
          عمليات الشراء
        </h3>
        <div class="py-6">
          <div :class="{ white: !$isDark() }">
            <!--
              ---- EVENTS to use ----
              - @update:page
            -->

            <v-data-table
              :headers="headers"
              :items="transaction"
              :page.sync="page"
              item-key="branch"
              :mobile-breakpoint="0"
              hide-default-footer
              :loading="isDataLoading"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.actions="{ item }">
                <nuxt-link to="/">عرض</nuxt-link>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <div class="py-4">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </div>
        </div>
      </v-card>
      <!-- limited unites -->
      <v-card color="transparent" elevation="0" class="mb-6">
        <h3 class="text-h6 font-weight-bold mb-1">
          الوحدات التي وصلت الحد الادنى
        </h3>
        <div class="py-6">
          <div :class="{ white: !$isDark() }">
            <!--
              ---- EVENTS to use ----
              - @update:page
            -->

            <v-data-table
              :headers="unitsHeaders"
              :items="units"
              :page.sync="page"
              item-key="unit_name"
              :mobile-breakpoint="0"
              hide-default-footer
              :loading="isDataLoading"
              @page-count="pageCount = $event"
            >
              <template v-slot:item.actions="{ item }">
                <nuxt-link to="/">عرض</nuxt-link>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <div class="py-4">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'StockFilterPage',
  data() {
    return {
      data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6],
      isDataLoading: false,
      page: 1,
      pageCount: 0,
      headers: [
        { text: 'الفرع', align: 'start', value: 'branch' },
        { text: 'مرجع الفرع', align: 'center', value: 'branch_reference' },
        { text: 'نوع الطلب', align: 'center', value: 'order_type' },
        { text: 'مرجع الطلب', align: 'center', value: 'order_reference' },
        { text: '', align: 'center', value: 'actions', sortable: false },
      ],
      unitsHeaders: [
        { text: 'اسم الوحدة', align: 'start', value: 'unit_name' },
        { text: 'الكمية', align: 'center', value: 'quantity' },
        { text: 'اسم الفرع /مستودع', align: 'center', value: 'branch_name' },
        { text: 'التاريخ', align: 'center', value: 'date' },
      ],
      transaction: [
        {
          branch: 'اسم الفرع',
          branch_reference: 'N/A',
          order_type: 'تحويل',
          active_tables: 24,
          order_reference: 'N/A',
          actions: '',
        },
      ],
      units: [
        {
          unit_name: 'اسم الوحدة',
          quantity: 5,
          branch_name: 'اسم الفرع',
          date: '3/10/2022',
        },
      ],
    }
  },
  computed: {
    xDataFilters() {
      return [this.$t('monthsText.jan'), this.$t('monthsText.feb'), this.$t('monthsText.mar'), this.$t('monthsText.apr'), this.$t('monthsText.may'), this.$t('monthsText.jun'), this.$t('monthsText.jul'), this.$t('monthsText.aug'), this.$t('monthsText.sep'), this.$t('monthsText.oct'), this.$t('monthsText.nov'), this.$t('monthsText.dec')]
    },
  },
}
</script>
