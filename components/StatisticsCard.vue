<template>
    <v-card elevation="0" class="pt-6 pt-sm-8 pb-0">
      <h3 class="px-4 mb-3 text-h4 font-weight-bold text-center">
        <slot name="content">
          {{ content }}
        </slot>
      </h3>
      <h3 class="px-4 mb-6 font-weight-bold text-center">
        {{ title }}
      </h3>
      <v-divider></v-divider>
      <div class="d-flex flex-column flex-md-row align-center justify-space-between gap py-2">
        <div class="ps-md-6">
          <div v-for="(pie, i) in pieData" :key="i" class="d-flex align-center gap-lg">
            <v-badge :color="`${ i === 1 ? 'secondary' : 'primary'}`" dot class="mb-0"></v-badge>
            <strong class="mb-md-1">{{ getPercentage(pie[1]) }}</strong>
            <span class="mb-md-2">{{ pie[0] }}</span>
          </div>
        </div>
        <div class="pe-md-2">
          <pie-chart :data="pieData" /> 
        </div>
      </div>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'StatisticsCard',
    props: {
      title: {
        type: String
      },
      content: {
        type: [String, Number],
        default: '0'
      },
      pieData: {
        type: Array,
        default: () => []
      },
    },
    methods: {
      getPercentage(value) {
        if(!value) return '0%';

        let total = this.pieData.reduce((accumulator, current) => {
          if(typeof current[0] === 'number') return accumulator + current[0]
          if(typeof current[1] === 'number') return accumulator + current[1]
        }, 0);
        let percentage=((value/total)*100).toFixed(1); 
        return percentage+'%'; 
      }
    }
  }
  </script>