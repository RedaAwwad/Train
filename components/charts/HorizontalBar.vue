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
    name: 'HorizontalBar',
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
            chart: {
                animation: {
                    duration: 500
                },
                    marginRight: 50
                },
                title: {
                    text: 'World population by country',
                    align: 'left'
                },
                subtitle: {
                    useHTML: true,
                    text: getSubtitle(),
                    floating: true,
                    align: 'right',
                    verticalAlign: 'middle',
                    y: -20,
                    x: -100
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    type: 'category'
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
                        dataSorting: {
                            enabled: true,
                            matchByName: true
                        },
                        type: 'bar',
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        name: startYear,
                        data: getData(startYear)[1]
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
  


