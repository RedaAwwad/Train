<template>
  <v-card elevation="0">
    <h3 v-if="title" class="px-2 pt-4 text-h6 font-weight-bold text-center">
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
  name: 'LineChart',
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    data: {
      type: []
    },
    xData: {
      type: []
    }
  },
  data() {
    return {
      chartOptions: {
        title: false,
        credits: {
          enabled: false
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          useHTML: true,
          borderColor: '#ffffff',
          // borderRadius: '4',
          // borderWidth: '1',
          // backgroundColor: this.$isDark() ? '#000000' : '#042F4D',
          style: {
            color: '#042F4D'
          }
          // valueSuffix: ' $',
          // formatter: function() {
          //   return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series '+ this.series.name;
          // }
        },
        chart: {
          type: 'spline',
          width: this.width,
          height: this.height,
          style: {
            direction: this.$dir()
          },
        },
        xAxis: {
          title: false,
          // type: 'logarithmic',
          // tickInterval: 1,
          categories: this.xData,
          // reversed: this.$dir() === 'rtl'
        },

        yAxis: {
          title: false,
          // type: 'logarithmic',
          minorTickInterval: 0.1,
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          spline: {
            lineWidth: 3,
            states: {
              hover: {
                lineWidth: 4
              }
            },
            marker: {
              enabled: false
            },
            colorByPoint: true,
            colors: ['#00778B', '#22DEDE'],
          }
        },
        series: [{
          name: this.name || this.title,
          data: this.data
        }]
      }
    }
  },
}
</script>

<style>
.v-application.theme--dark .highcharts-grid-line {
  stroke: #0e0e0e;
}
</style>
