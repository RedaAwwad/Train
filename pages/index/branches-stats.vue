<template>
  <div>
    <vendor-top-panel />
    <v-container fluid>
      <div class="d-flex justify-end py-4">
        <div class="d-flex align-center gap-sm">
          <v-btn :color="`${$isDark() ? '' : 'white'}`" class="py-2 px-3"
          style="min-width: 10px !important;">
            <v-icon> mdi-reload </v-icon>
          </v-btn>
          <modal
            :title="$t('compare')"
            :is-open="isCompareModalOpen"
            @on-close="isCompareModalOpen = true"
          >
            <template slot="controller">
              <v-btn outlined class="py-2 px-6 text-subtitle-1 primary--text">
                {{ $t('compare') }}
              </v-btn>
            </template>
            
            <branches-tags-selector
            v-model="compareSelectedItems"
            @update-type="comapreType = $event" 
            :branches="branchesItems"
            :tags="tagsItems"/>
  
            <template slot="footer">
              <v-btn @click="reset('compare')"
              elevation="0" class="px-6 py-2 text-subtitle-1">
                {{ $t('reset') }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="px-8 py-2 text-subtitle-1" outlined 
              @click="isCompareModalOpen = false">
                {{ $t('cancel') }}
              </v-btn>
              <v-btn color="primary" class="px-8 py-2 text-subtitle-1">
                {{ $t('apply') }}
              </v-btn>
            </template>
          </modal>
          <modal
            max-width="500"
            :title="$t('filter')"
            :is-open="isModalOpen"
            @on-close="isModalOpen = true"
          >
            <template slot="controller">
              <v-btn color="primary" class="py-2 text-subtitle-1">
                <v-icon class="pe-1"> mdi-filter </v-icon>
                <span>{{ $t('filter') }}</span>
              </v-btn>
            </template>
            
            <branches-tags-selector
            v-model="filterSelectedItems"
            @update-type="filterType = $event"
            :branches="branchesItems" 
            :tags="tagsItems" />
  
            <template slot="footer">
              <v-btn @click="reset('filter')" 
              elevation="0" class="px-6 py-2 text-subtitle-1">
                {{ $t('reset') }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="px-8 py-2 text-subtitle-1" outlined 
              @click="isModalOpen = false">
                {{ $t('cancel') }}
              </v-btn>
              <v-btn color="primary" class="px-8 py-2 text-subtitle-1">
                {{ $t('apply') }}
              </v-btn>
            </template>
          </modal>
        </div>
      </div>
    </v-container>
    <v-container fluid class="pt-0 pb-10">
      <v-row class="mb-6">
        <v-col sm="6" lg="3">
          <statistics-card sm title="عدد الطلبات النشطة" content="10">
            <!-- <template slot="content">
              <span>500</span>
              <span>$</span>
            </template> -->
          </statistics-card>
        </v-col>
        <v-col sm="6" lg="3">
          <statistics-card sm title="قيمة الطلبات النشطة">
            <template slot="content">
              <span>15</span>
              <span>ر.س</span>
            </template>
          </statistics-card>
        </v-col>
        <v-col sm="6" lg="3">
          <statistics-card sm title="الطاولات المشغولة" content="10">
            <!-- <template slot="content">
              <span>500</span>
              <span>$</span>
            </template> -->
          </statistics-card>
        </v-col>
        <v-col sm="6" lg="3">
          <statistics-card sm title="اجهزة الفرع المتصله" content="10">
            <!-- <template slot="content">
              <span>500</span>
              <span>$</span>
            </template> -->
          </statistics-card>
        </v-col>
      </v-row>
      <!-- branch statistics -->
      <v-card color="transparent" elevation="0" class="mb-6">
        <h3 class="text-h6 font-weight-bold mb-1">
          احصائيات الفرع
        </h3>
        <div class="py-6">
          <div :class="{ white: !$isDark() }">
            <!--
              ---- EVENTS to use ----
              - @update:page
            -->

            <v-data-table
              :headers="branchesTable.headers"
              :items="branchesTable.data"
              :page.sync="branchesTable.page"
              :mobile-breakpoint="0"
              hide-default-footer
              :loading="branchesTable.isDataLoading"
              @page-count="branchesTable.pageCount = $event"
            >
            </v-data-table>
            <v-divider></v-divider>
            <div class="py-4">
              <v-pagination 
                v-model="branchesTable.page" 
                :length="15"
                :total-visible="5">
              </v-pagination>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BranchesFilterPage',
  data() {
    return {
      isDataLoading: false,
      isModalOpen: true,
      isCompareModalOpen: true,
      compareSelectedItems: [],
      filterSelectedItems: [],
      comapreType: 'branches',
      filterType: 'branches',
      branchesTable: {
        page: 1,
        pageCount: 0,
        headers: [
          { text: 'الفرع', align: 'start', value: 'branch' },
          { text: 'الطلبات النشطه', align: 'center', value: 'active_orders' },
          { text: 'قيمة الطلبات النشطه', align: 'center', value: 'active_orders_price' },
          { text: 'الطاولات المشغوله', align: 'center', value: 'active_tables' },
          { text: 'اجهزة الكاشير المتصله', align: 'center', value: 'cashier_devices' },
          { text: 'العهدات المفتوحه', align: 'center', value: 'open_custody' },
          { text: 'اخر مزامنة', align: 'center', value: 'last_sync' },
          { text: 'اخر طلب', align: 'center', value: 'last_order' },
        ],
        data: [
          {
            branch: 'اسم الفرع',
            active_orders: 'N/A',
            active_orders_price: 6,
            active_tables: 24,
            cashier_devices: 4,
            open_custody: 3,
            last_sync: '25/08/2022',
            last_order: '3/10/2022',
          },
          {
            branch: 'اسم الفرع',
            active_orders: 'N/A',
            active_orders_price: 6,
            active_tables: 24,
            cashier_devices: 4,
            open_custody: 3,
            last_sync: '25/08/2022',
            last_order: '3/10/2022',
          },
          {
            branch: 'اسم الفرع',
            active_orders: 'N/A',
            active_orders_price: 6,
            active_tables: 24,
            cashier_devices: 4,
            open_custody: 3,
            last_sync: '25/08/2022',
            last_order: '3/10/2022',
          },
          
        ],
      },
      branchesItems: [
        {
          id: 1,
          name: 'الفرع الأول'
        },
        {
          id: 2,
          name: 'الفرع الثاني'
        },
        {
          id: 3,
          name: 'الفرع الثالث'
        },
        {
          id: 4,
          name: 'الفرع الرابع'
        }
      ],
      tagsItems: [
        {
          id: 1,
          name: 'الوسم الأول'
        },
        {
          id: 2,
          name: 'الوسم الثاني'
        },
        {
          id: 3,
          name: 'الوسم الثالث'
        },
        {
          id: 4,
          name: 'الوسم الرابع'
        },
        {
          id: 5,
          name: 'الوسم الرابع'
        },
        {
          id: 6,
          name: 'الوسم الرابع'
        },
        {
          id: 7,
          name: 'الوسم الرابع'
        }
      ]
    }
  },
  methods: {
    reset(type) {
      this[`${type}SelectedItems`] = [];
    }
  }
}
</script>
