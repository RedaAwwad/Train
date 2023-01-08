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
    <single-select v-model="form.group" :label="$t('group')"
    :menu-props="{maxHeight: 200}"
    :content="[{name: 'group 1'}, {name: 'group 2'}, {name: 'group 3'}]" info="معلومات" />
    <multiple-select v-model="form.additions" :label="$t('additions')"
    :menu-props="{maxHeight: 200}"
    :content="[{name: 'addition 1'}, {name: 'addition 2'}, {name: 'addition 3'}]" info="معلومات" />
    <multiple-select v-model="form.tags" :label="$t('tags')"
    :menu-props="{maxHeight: 200}"
    :content="[{name: 'وسم 1'}, {name: 'وسم 2'}, {name: 'وسم 3'}, {name: 'وسم 4'}, {name: 'وسم 52'}, {name: 'وسم 03'}, {name: 'وسم 155'}, {name: 'وسم 02'}, {name: 'وسم 003'}]" info="معلومات" />
    <multiple-select v-model="form.taxGroups" :label="$t('taxGroups')"
    :menu-props="{maxHeight: 200}"
    :content="[{name: 'group 1'}, {name: 'group 2'}, {name: 'group 3'}]" info="معلومات" />
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

    <div class="haveOrder mb-4">
      <label class="font-weight-bold">
        {{ $t('eligibleTosellAPart') }}
      </label>
      <v-radio-group class="mt-0" v-model="form.eligibleTosellAPart" row>
        <v-radio class="ms-0 ps-0" :label="$t('notSelected')" value="0" />
        <v-radio :label="$t('yes')" value="yes" />
        <v-radio :label="$t('no')" value="no" />
      </v-radio-group>
    </div>

    <div class="haveOrder mb-4">
      <label class="font-weight-bold">
        {{ $t('deleted') }}
      </label>
      <v-radio-group class="mt-0" v-model="form.deleted" row>
        <v-radio class="ms-0 ps-0" :label="$t('notSelected')" value="0" />
        <v-radio :label="$t('yes')" value="yes" />
        <v-radio :label="$t('no')" value="no" />
      </v-radio-group>
    </div>
    
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
  name: 'ProductsFilter',
  data() {
    return {
      isModalOpen: true,
      form: {
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
        creationDate: null,
      },
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
