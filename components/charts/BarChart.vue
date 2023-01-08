<template>
    <div class="pa-1">
      <client-only>
        <highchart
          :options="chartOptions" 
          :update="['options.title', 'options.series']" 
        />
      </client-only>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BarChart',
    props: {
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
            credits: {
                enabled: false
            },
            title: false,
            chart: {
                type: 'bar'
                // width: this.width,
                // height: this.height,
                
            },
            tooltip: {
                valueSuffix: ' خطوة'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['الهدف 1', 'الهدف 2', 'الهدف 1', 'الهدف 2', 'الهدف 1', 'الهدف 2'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: false,
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    colorByPoint: true,
                    colors: ['#00778B', '#22DEDE'],
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: this.data
        }
      }
    }
  }
  </script>
  


