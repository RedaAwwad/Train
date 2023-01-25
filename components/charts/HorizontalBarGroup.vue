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
    name: 'HorizontalBarGroup',
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
        type: [Array, Object]
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
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="padding:0"><b>{point.y} : </b></td><td style="padding:0">{series.name}</td>' +
                    '</tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
              //   formatter: function(context) {
              //   console.log(context);
              //   return `${this.y}:${this.series.name}`;
              //   // 'The value for <b>' + this.x + '</b> is <b>' +  + '</b>, in series '+ ;
              // }
            },
            // legend: {
            //     enabled: false
            // },
            xAxis: this.data.xAxis,
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
            series: this.data.series
        }
      }
    }
  }
  </script>
  


