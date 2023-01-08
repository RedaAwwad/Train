<template>
  <div>
   <v-card elevation="0" rounded="0" class="pt-4">
     <v-container class="pb-10 pb-sm-16">
       <div
         class="d-flex flex-column flex-sm-row align-sm-center justify-sm-space-between"
       >
         <h1 class="font-weight-bold mb-4 mb-sm-0">
           {{ $t('categories') }}
         </h1>
         <div class="d-flex align-center gap-2">
            <v-btn
              class="py-3 px-4 text-subtitle-2 primary--text"
              outlined
              nuxt
              :to="localePath('/products/order-categories')"
            >
              {{ $t('sortCategories') }}
            </v-btn>
           <btn-export-menu :links="exportLinks" />
           <new-category @added="getItems" />
         </div>
       </div>
     </v-container>
   </v-card>

   <!-- filter -->
   <v-container class="px-sm-4">
     <div class="d-flex align-sm-center justify-end justify-sm-space-between flex-wrap flex-sm-nowrap mt-4 mb-4">
       <v-tabs show-arrows class="mb-4 mb-sm-0">
         <v-tab>{{ $t('All') }}</v-tab>
         <v-tab>{{ $t('deleted') }}</v-tab>
       </v-tabs>
       <div class="d-flex align-center gap-sm">
         <v-btn :color="`${$isDark() ? '' : 'white'}`" class="py-2 px-3"
         style="min-width: 10px !important;">
           <v-icon> mdi-reload </v-icon>
         </v-btn>
         
         <categories-filter @update="filter"/>
       </div>
     </div>
   </v-container>

   <!-- table -->
   <v-container class="pt-0 pb-12">
     <v-card elevation="0" rounded="0" class="px-sm-4">
       <div class="py-3">
         <categories-table :data="productCategories" :is-loading="isDataLoading"/>
       </div>         
     </v-card>
   </v-container>
 </div>
</template>

<script>
export default {
 name: 'ProductsPage',
 layout: 'dashboard',
 data() {
   return {
     isDataLoading: false,
     exportLinks: [
       {
         label: 'تصدير بيانات 1',
         url: '/'
       },
       {
         label: 'تصدير بيانات 2',
         url: '/'
       },
       {
         label: 'تصدير بيانات 3',
         url: '/'
       }
     ],
     productCategories: [
       {
        name: 'الاسم',
        reference_number: 'Sk-0001',
        products: 14,
        collecting: 5,
        gift_cards: '-',
        creation_date: '03/11/2022',
        actions: '',
       },
       {
        name: 'الاسم',
        reference_number: 'Sk-0002',
        products: 60,
        collecting: 8,
        gift_cards: 2,
        creation_date: '03/11/2022',
        actions: '',
       },
     ]
   }
 },
 methods: {
   getItems() {},
   filter() {},
 }
}
</script>
