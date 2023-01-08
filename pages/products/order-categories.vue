<template>
  <div>
    <v-card elevation="0" rounded="0" class="pt-4 mb-4 mb-sm-6">
      <v-container>
        <div class="d-flex flex-column flex-sm-row justify-sm-space-between">
          <div class="d-flex flex-column align-start">
            <back-route class="mb-6"/>
            <h1 class="mb-4 font-weight-bold">
              {{ $t('sortCategories') }}
            </h1>
          </div>
          <div>
            <btn-export-menu :links="exportLinks" />
          </div>
        </div>
      </v-container>
    </v-card>
    <v-container>
      <draggable v-model="categories" @end="onSortEnd" class="row">
        <v-col v-for="category in categories" :key="category.id" 
        :id="category.id" cols="6" sm="4" md="3" xl="2" class="sortable-column">
          <v-card flat class="pa-4">
            {{ category.title }}
          </v-card>
        </v-col>
      </draggable>
    </v-container>
  </div>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  name: 'OrderCategoriesPage',
  layout: 'dashboard',
  components: {
    draggable,
  },
  data() {
    return {
      submitting: false,
      categories: [],
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
    };
  },
  methods: {
    updateCategories(categories) {
      if(!categories) return;
      
      this.categories = categories.sort((a, b) => a.order - b.order);
    },
    onSortEnd(event) {
      const { newIndex, oldIndex } = event;
      // console.log(event);
    }
  },
  mounted() {
    const categories = [
      {
        id: 1,
        order: 1,
        title: 'التصنيف 1'
      },
      {
        id: 2,
        order: 3,
        title: 'التصنيف 2'
      },
      {
        id: 3,
        order: 5,
        title: 'التصنيف 3'
      },
      {
        id: 4,
        order: 6,
        title: 'التصنيف 4'
      },
      {
        id: 5,
        order: 2,
        title: 'التصنيف 5'
      },
      {
        id: 6,
        order: 4,
        title: 'التصنيف 6'
      },
      {
        id: 7,
        order: 7,
        title: 'التصنيف 7'
      }
    ]
    this.updateCategories(categories);
  }
};
</script>
