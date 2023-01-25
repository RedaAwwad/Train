<template>
    <v-card elevation="0">
      <h3 v-if="title" class="px-2 pt-4 font-weight-bold text-center">
        {{ title }}
      </h3>
      <div class="pr-3 overflow-hidden">
        <client-only>
          <highchart
            :options="chartOptions" 
            :update="['options.title', 'options.series']" 
          />
        </client-only>
      </div>
    </v-card>
  </template>
  
  <script>
  
  export default {
    name: 'Pie',
    props: {
        title: {
            type: String,
        },
        name: {
            type: String,
        },
        width: {
            type: Number,
            default: 150
        },
        height: {
            type: Number,
            default: 150
        },
        data: {
            type: Array
        },
    },
    data() {
        return {
        chartOptions: {
            title: false,
            // chart: {
            //     plotBackgroundColor: null,
            //     plotBorderWidth: null,
            //     plotShadow: false,
            //     type: 'pie'
            // },
            chart: {
                type: 'pie',
                // width: this.width,
                // height: this.height,
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            tooltip: {
                // headerFormat: '',
                pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    cursor: 'pointer',
                    colors: ['#00778B', '#22DEDE'],
                    // size: '100%',
                    // borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                },
            },
            series: [{
                name: this.name,
                colorByPoint: true,
                data: this.data
            }]
        }
        }
    }
  }
  </script>
  
  <style>
  .v-application.theme--dark .highcharts-grid-line {
    stroke: #0e0e0e;
  }
  </style>
  