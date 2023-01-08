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
    <multiple-select v-model="form.additions" :label="$t('theAdditions')"
    :menu-props="{maxHeight: 200}"
    :content="[{name: 'addition 1'}, {name: 'addition 2'}, {name: 'addition 3'}]" info="معلومات" />
    <m-input v-model="form.referenceNumber" :label="$t('referenceNumber')" info="معلومات"/>

    <div class="haveOrder mb-4">
      <label class="font-weight-bold">
        {{ $t('deleted') }}
      </label>
      <v-radio-group class="mt-0" v-model="form.deleted" row>
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
  name: 'AdditionOptionsFilter',
  data() {
    return {
      isModalOpen: true,
      form: {
        name: null,
        additions: [],
        referenceNumber: null,
        deleted: false,
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
    additions: [],
    referenceNumber: null,
    deleted: false,
    creationDate: null,
  }
  },
  apply() {
    this.$emit('update', this.form);
  }
 }
}
</script>
