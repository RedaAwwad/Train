<template>
  <v-card elevation="0" class="area-chart">
    <h3 class="px-4 pt-4 text-h6 font-weight-bold text-center">{{ title }}</h3>
    <div class="pa-1">
      <client-only>
        <highchart :options="chartOptions" :update="['options.title', 'options.series']" />
      </client-only>
    </div>
  </v-card>
</template>

<script>
const hourInSeconds = 3600000;

export default {
  name: 'AreaChart',
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
          // valueSuffix: ' $',
          // formatter: function() {
          //   return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series '+ this.series.name;
          // }
        },
        chart: {
          type: 'area',
          width: this.width,
          height: this.height,
          // backgroundColor: {
          //   linearGradient: [0, 0, 500, 500],
          //   stops: [
          //     [0, 'rgb(255, 255, 255)'],
          //     [1, 'rgb(200, 200, 255)']
          //   ]
          // },
          style: {
            direction: this.$dir()
          },
        },
        colorAxis: {
          maxColor: '#003399',
          minColor: '#e6ebf5',
        },
        xAxis: {
          title: false,
          categories: this.xData,
          // reversed: this.$dir() === 'rtl'
        },

        yAxis: {
          title: false,
          // type: 'logarithmic',
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          // series: {
          //   lineColor: '#303030'
          // },
          area: {
            lineColor: '#042F4D',
            lineWidth: 3,
            states: {
              hover: {
                lineWidth: 4
              }
            },
            marker: {
              enabled: false
            },
            // pointInterval: hourInSeconds, // one hour
            // pointStart: Date.UTC(y, m, d, 0, 0, 0)
          }
        },
        series: [{
          name: this.name || this.title,
          data: this.data,
          color: {
            linearGradient: [0, 250, 0],
            stops: [
              [0, '#fff'],
              [1, '#01416F']
            ]
          },
        }]
      }
    }
  },
  computed: {
    getDate() {
      const date = new Date();
      let d = date.getDay();
      let m = date.getMonth();
      let y = date.getFullYear();
      const dateFormat = new Date(`${y}-${d}-${m}`);

      return dateFormat;
    }
  }
}
</script>
