<template>
  <div>
    <v-app-bar
    flat fixed :height="74" 
    :color="`${$isDark() ? '' : 'white'}`"
    class="shadow-xl">
      <!-- fluid -->
      <v-container class="px-0 px-sm-4">
        <v-row>
          <v-col cols="4" class="d-none d-sm-flex">
            <v-btn outlined nuxt depressed :to="localePath('/help')" 
            class="btn-primary" color="primary">
              <v-icon right class="mx-1">
                mdi-information
              </v-icon>
              <span class="mx-1">
                {{ $t('INeedHelp') }}
              </span>
            </v-btn>
          </v-col>
          <v-col cols="6" sm="4" class="d-flex justify-sm-center">
            <div class="d-flex justify-center">
              <img width="120" height="100%" src="/logo-dark.svg" :alt="$t('appName')">
            </div>
          </v-col>
          <v-col cols="6" sm="4" class="d-flex justify-end">
            <button @click="selectFreeTrialPackage" class="text-blue font-weight-bold whitespace-no-wrap">
              {{ $t('freeTrialPackage') }}
            </button>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <div class="pt-16" style="height: 100vh;">
      <!-- fluid -->
      <v-container class="pt-sm-10 pb-4">
        <v-row class="d-sm-none mb-6">
          <v-col cols="12" class="d-flex justify-end">
            <v-btn outlined nuxt depressed :to="localePath('/help')" 
            class="btn-primary" color="primary">
              <v-icon right class="mx-1">
                mdi-information
              </v-icon>
              <span class="mx-1">
                {{ $t('INeedHelp') }}
              </span>
            </v-btn>
          </v-col>
        </v-row>

        <v-card elevation="0" outlined class="mb-6">
          <v-data-table
            class="packages-table striped"
            :height="tableHeight"
            hide-default-header
            fixed-header
            :items-per-page="-1"
            :headers="headers"
            :items="items"
            :mobile-breakpoint="0"
            hide-default-footer
            :loading="isDataLoading"
          >
          <!-- :item-class="(i) => {
              if(i.status === 'inprogress') {
                return 'status yellow-status';
              } else if (i.status === 'purchesed') {
                return 'status red-status';
              } else if (i.status === 'delivered') {
                return 'status green-status';
              }
            }" -->
            <template v-slot:header="{ props: { headers } }">
              <thead class="v-data-table-header">
                <tr>
                  <th v-for="(header, i) in headers" :key="i">
                    <div v-if="header.value === 'features'" class="d-flex align-end justify-start h-100 py-3">
                      <h1 class="mb-2">{{ header.text }}</h1>
                    </div>
                    <div v-else class="d-flex flex-column align-center py-3">
                      <h2 class="mb-2">{{ header.text }}</h2>
                      <div class="mb-1">
                        <span class="">ر.س 
                          100</span> / 
                        <span class="text-subtitle-2">
                            شهريا
                        </span>
                      </div>
                      <div class="mb-2">
                        <span class="">ر.س 
                          50
                          </span> / 
                        <span class="text-subtitle-2">
                          سنويا
                        </span>
                      </div>
                      <v-btn class="px-12" color="primary">
                        {{ $t('subscribe') }}
                      </v-btn>
                    </div>
                  </th>
                </tr>
              </thead>
            </template>

            <!-- features -->
            <template v-slot:item.features="{ item }">
              <h3>{{ item.features }}</h3>
            </template>

            <!-- starting_package -->
            <template v-slot:item.starting_package="{ item }">
              <div v-if="typeof item.starting_package === 'boolean'" class="">
                <v-icon v-if="item.starting_package" color="green">mdi-check-circle</v-icon>
                <v-icon v-else color="red">mdi-close-circle-outline</v-icon>
              </div>
              <span v-else>{{ item.starting_package }}</span>
            </template>

            <!-- main_package -->
            <template v-slot:item.main_package="{ item }">
              <div v-if="typeof item.main_package === 'boolean'" class="">
                <v-icon v-if="item.main_package" color="green">mdi-check-circle</v-icon>
                <v-icon v-else color="red">mdi-close-circle-outline</v-icon>
              </div>
              <span v-else>{{ item.main_package }}</span>
            </template>

            <!-- developed_package -->
            <template v-slot:item.developed_package="{ item }">
              <div v-if="typeof item.developed_package === 'boolean'" class="">
                <v-icon v-if="item.developed_package" color="green">mdi-check-circle</v-icon>
                <v-icon v-else color="red">mdi-close-circle-outline</v-icon>
              </div>
              <span v-else>{{ item.developed_package }}</span>
            </template>

            <!-- pro_package -->
            <template v-slot:item.pro_package="{ item }">
              <div v-if="typeof item.pro_package === 'boolean'" class="">
                <v-icon v-if="item.pro_package" color="green">mdi-check-circle</v-icon>
                <v-icon v-else color="red">mdi-close-circle-outline</v-icon>
              </div>
              <span v-else>{{ item.pro_package }}</span>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackagePage',
  head() {
    return {
      title: `${this.$t('appName')} | ${this.$t('packages')}`
    }
  },
  data() {
    return {
      isDataLoading: false,
      headers: [
        { text: 'مميزات الباقه', align: 'start', value: 'features', sortable: false },
        { text: 'باقة البداية', align: 'center', value: 'starting_package', sortable: false },
        { text: 'الباقة الأساسية', align: 'center', value: 'main_package', sortable: false },
        { text: 'الباقة المتطورة', align: 'center', value: 'developed_package', sortable: false },
        { text: 'الباقة الاحترافية', align: 'center', value: 'pro_package', sortable: false },
      ],
      items: [
        {
          features: 'تطبيق نقاط البيع',
          starting_package: true,
          main_package: true,
          developed_package: true,
          pro_package: true
        },
        {
          features: 'الفروع',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: '115 ر.س'
        },
        {
          features: 'مدير الحسابات',
          starting_package: false,
          main_package: true,
          developed_package: true,
          pro_package: true
        },
        {
          features: 'إدارة المنتجات',
          starting_package: true,
          main_package: true,
          developed_package: true,
          pro_package: true
        },
        {
          features: 'إدارة العملاء',
          starting_package: true,
          main_package: true,
          developed_package: true,
          pro_package: true
        },
        {
          features: 'لوحة المراقبة',
          starting_package: true,
          main_package: true,
          developed_package: true,
          pro_package: true
        },
        {
          features: 'التقارير',
          starting_package: '115 ر.س',
          main_package: true,
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'إدارة المخازن',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'الفعاليات',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'كوبون الخصم',
          starting_package: false,
          main_package: false,
          developed_package: true,
          pro_package: true
        },
        {
          features: 'مناطق التوصيل',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'الهدايا',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'العروض',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'نظام الولاء',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'رخص الأجهزة',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: ' كاشير الويب',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: ' خدمات التوصيل',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'إدارة المستودعات',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'إدارة المزايا',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'ادارة تجميع المنتجات',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'ادارة أنواع الطلبات',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'ادارة الرسوم',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'ادارة الحجوزات',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
        {
          features: 'طرق الدفع',
          starting_package: '115 ر.س',
          main_package: '70 ر.س',
          developed_package: '115 ر.س',
          pro_package: true
        },
      ]
    }
  },
  computed: {
    tableHeight() {
      if(process.client) {
        return `${window.innerHeight - (74 + 40 + 16)}px`;
      }

      return '90vh';
    }
  },
  methods: {
    selectFreeTrialPackage() {

    }
  }
}
</script>
