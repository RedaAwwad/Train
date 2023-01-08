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
                // type: 'pie',
                // width: this.width,
                // height: this.height,
                
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                type: "category"
            },
            yAxis: {
                opposite: true,
                tickPixelInterval: 150,
                title: {
                    text: null
                }
            },
            plotOptions: {
                series: {
                    animation: false,
                    groupPadding: 0,
                    pointPadding: 0.1,
                    borderWidth: 0,
                    colorByPoint: true,
                    colors: ['#00778B', '#22DEDE'],
                    dataSorting: {
                        enabled: true,
                        matchByName: true
                    },
                    type: "bar",
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    name: 'ssss',
                    data: this.data
                }
            ],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 550
                    },
                    chartOptions: {
                        xAxis: {
                            visible: false
                        },
                        subtitle: {
                            x: 0
                        },
                        plotOptions: {
                            series: {
                                dataLabels: [{
                                    enabled: true,
                                    y: 8
                                }, {
                                    enabled: true,
                                    format: '{point.name}',
                                    y: -8,
                                    style: {
                                        fontWeight: 'normal',
                                        opacity: 0.7
                                    }
                                }]
                            }
                        }
                    }
                }]
            }
        }
      }
    }
  }
  </script>
  


