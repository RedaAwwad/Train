<template>
  <div class="pa-sm-1">
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
  name: 'PieChart',
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
        title: false,
        chart: {
          type: 'pie',
          width: this.width,
          height: this.height,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: ['#00778B', '#22DEDE'],
              size: '100%',
              borderWidth: 0,
              dataLabels: {
                enabled: false,
              },
          },
        },
        series: [{
          minPointSize: 100,
          innerSize: '50%',
          data: this.data
        }]
      }
    }
  }
}
</script>
