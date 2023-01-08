<template>
  <div>
   <v-card elevation="0" rounded="0" class="pt-4">
     <v-container class="pb-10 pb-sm-16">
       <div
         class="d-flex flex-column flex-sm-row align-sm-center justify-sm-space-between"
       >
         <h1 class="font-weight-bold mb-4 mb-sm-0">
           {{ $t('additionsOptions') }}
         </h1>
         <div class="d-flex align-center gap-2">
            <btn-export-menu :links="exportLinks" />
            <v-btn
              nuxt
              depressed
              :to="localePath('/products/addition-options/create')"
              color="primary"
              class="btn-primary py-3 px-6 text-subtitle-2"
            >
              {{ $t('addNewOption') }}
            </v-btn>
         </div>
       </div>
     </v-container>
   </v-card>

   <!-- filter -->
   <v-container class="px-sm-4">
     <div class="d-flex align-sm-center justify-end justify-sm-space-between flex-wrap flex-sm-nowrap mt-4 mb-4">
       <v-tabs show-arrows class="mb-4 mb-sm-0">
          <v-tab>{{ $t('All') }}</v-tab>
          <v-tab>{{ $t('activeItem') }}</v-tab>
          <v-tab>{{ $t('notActiveItem') }}</v-tab>
          <v-tab>{{ $t('deleted') }}</v-tab>
       </v-tabs>
       <div class="d-flex align-center gap-sm">
         <v-btn :color="`${$isDark() ? '' : 'white'}`" class="py-2 px-3"
         style="min-width: 10px !important;">
           <v-icon> mdi-reload </v-icon>
         </v-btn>
         
         <addition-options-filter @update="filter"/>
       </div>
     </div>
   </v-container>

   <!-- table -->
   <v-container class="pt-0 pb-12">
     <v-card elevation="0" rounded="0" class="px-sm-4">
       <div class="py-3">
         <additions-options-table :data="additionOptions" :is-loading="isDataLoading"/>
       </div>         
     </v-card>
   </v-container>
 </div>
</template>

<script>
export default {
 name: 'AdditionOptionsPage',
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
     additionOptions: [
       {
        name: 'الاسم',
        code: 'Sk-0001',
        addition: 'اسم الإضافة',
        price: 14,
        tax_group: '-',
        active: 'no',
        actions: '',
       },
       {
        name: 'الاسم',
        code: 'Sk-0002',
        addition: 'اسم الإضافة',
        price: 60,
        tax_group: 2,
        active: 'yes',
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
