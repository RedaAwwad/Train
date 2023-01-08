<template>
  <modal
    max-width="450"
    :title="$t('filter')"
    :is-open="isModalOpen"
    @on-close="isModalOpen = true"
  >
    <template slot="controller">
      <v-btn color="primary" class="py-2">
        <v-icon class="pe-1"> mdi-filter </v-icon>
        <span>{{ $t('filter') }}</span>
      </v-btn>
    </template>
    
    <m-input v-model="form.name" :label="$t('name')" info="معلومات"/>
    <m-input v-model="form.code" :label="$t('code')" info="معلومات"/>
    <m-input v-model="form.barcode" :label="$t('barcode')" info="معلومات"/>
    <multiple-select v-model="form.categories" :label="$t('categories')"
    :menu-props="{maxHeight: 200}"
    :content="[{name: 'تصنيف 1'}, {name: 'تصنيف 2'}, {name: 'تصنيف 3'}]" info="معلومات" />

    <branches-tags-selector :branches="branchesItems" :tags="tagsItems" 
    v-model="form.compareSelectedItems" @update-type="comapreType = $event"/>
    
    <single-select v-model="form.costCalculationMethod" :content="[{name: 'حالة 1'}, {name: 'حالة 2'}]" :label="$t('costCalculationMethod')" info="معلومات"/>

    <div class="haveOrder mb-4">
      <label class="font-weight-bold">
        {{ $t('activeItem') }}
      </label>
      <v-radio-group class="mt-0" v-model="form.active" row>
        <v-radio class="ms-0 ps-0" :label="$t('notSelected')" value="0" />
        <v-radio :label="$t('yes')" value="yes" />
        <v-radio :label="$t('no')" value="no" />
      </v-radio-group>
    </div>

    <single-select v-model="form.creator" :content="[{name: 'creator 1'}, {name: 'creator 2'}]" :label="$t('creator')" info="معلومات"/>
    
    <date-input v-model="form.creationDate" :label="$t('creationDate')" info="معلومات"/>

    <template slot="footer">
      <v-btn @click="resetForm" elevation="0" class="px-6 py-2 text-subtitle-1">
        {{ $t('reset') }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="px-8 py-2 text-subtitle-1" outlined 
      @click="isModalOpen = false">
        {{ $t('cancel') }}
      </v-btn>
      <v-btn @click="apply" color="primary" class="px-8 py-2 text-subtitle-1">
        {{ $t('apply') }}
      </v-btn>
    </template>
  </modal>
</template>

<script>
export default {
  name: 'ProductAdditionsFilter',
  data() {
    return {
      isModalOpen: true,
      form: {
        name: null,
        code: null,
        barcode: null,
        categories: [],
        compareSelectedItems: [],
        costCalculationMethod: null,
        active: '0',
        creator: null,
        creationDate: null,
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
  resetForm() {
  this.Form = {
    name: null,
    code: null,
    barcode: null,
    categories: [],
    tags: [],
    group: null,
    additions: [],
    taxGroups: [],
    costCalculationMethod: null,
    active: '0',
    eligibleTosellAPart: '0',
    deleted: '0',
    creationDate: null
  }
  },
  apply() {
    this.$emit('update', this.form);
  }
 }
}
</script>
