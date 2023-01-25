(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11,12,15,17],{653:function(t,e,r){var content=r(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("533b4bdb",content,!0,{sourceMap:!1})},654:function(t,e,r){var content=r(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("058a0588",content,!0,{sourceMap:!1})},655:function(t,e,r){"use strict";r.r(e);r(30);var n={name:"PieChart",props:{width:{type:Number,default:150},height:{type:Number,default:150},data:{type:Array}},data:function(){return{chartOptions:{title:!1,chart:{type:"pie",width:this.width,height:this.height,plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},tooltip:{headerFormat:"",pointFormat:"{point.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",colors:["#00778B","#22DEDE"],size:"100%",borderWidth:0,dataLabels:{enabled:!1}}},series:[{minPointSize:100,innerSize:"50%",data:this.data}]}}}},o=r(31),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"pa-sm-1"},[t("client-only",[t("highchart",{attrs:{options:this.chartOptions,update:["options.title","options.series"]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,r){"use strict";r(653)},660:function(t,e,r){var n=r(19)(!1);n.push([t.i,".v-application.theme--dark .highcharts-grid-line{stroke:#0e0e0e}",""]),t.exports=n},661:function(t,e,r){"use strict";r(654)},662:function(t,e,r){var n=r(19)(!1);n.push([t.i,".v-application.theme--dark .highcharts-grid-line{stroke:#0e0e0e}",""]),t.exports=n},670:function(t,e,r){"use strict";r.r(e);var n=r(684),o=r(627),l=r(616),c=(r(30),r(3),r(309),{name:"StatisticsCard",props:{title:{type:String},content:{type:[String,Number],default:"0"},pieData:{type:Array,default:function(){return[]}}},methods:{getPercentage:function(t){return t?(t/this.pieData.reduce((function(t,e){return"number"==typeof e[0]?t+e[0]:"number"==typeof e[1]?t+e[1]:void 0}),0)*100).toFixed(1)+"%":"0%"}}}),d=r(31),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"pt-6 pt-sm-8 pb-0",attrs:{elevation:"0"}},[e("h3",{staticClass:"px-4 mb-3 text-h4 font-weight-bold text-center"},[t._t("content",(function(){return[t._v("\n      "+t._s(t.content)+"\n    ")]}))],2),t._v(" "),e("h3",{staticClass:"px-4 mb-6 font-weight-bold text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e(l.a),t._v(" "),e("div",{staticClass:"d-flex flex-column flex-md-row align-center justify-space-between gap py-2"},[e("div",{staticClass:"ps-md-6"},t._l(t.pieData,(function(r,i){return e("div",{key:i,staticClass:"d-flex align-center gap-lg"},[e(n.a,{staticClass:"mb-0",attrs:{color:"".concat(1===i?"secondary":"primary"),dot:""}}),t._v(" "),e("strong",{staticClass:"mb-md-1"},[t._v(t._s(t.getPercentage(r[1])))]),t._v(" "),e("span",{staticClass:"mb-md-2"},[t._v(t._s(r[0]))])],1)})),0),t._v(" "),e("div",{staticClass:"pe-md-2"},[e("pie-chart",{attrs:{data:t.pieData}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PieChart:r(655).default})},671:function(t,e,r){"use strict";r.r(e);var n=r(627),o=(r(30),r(38),{name:"Pie",props:{title:{type:String},name:{type:String},width:{type:Number,default:150},height:{type:Number,default:150},data:{type:Array}},data:function(){return{chartOptions:{title:!1,chart:{type:"pie",plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},tooltip:{pointFormat:"{point.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{cursor:"pointer",colors:["#00778B","#22DEDE"],dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:this.name,colorByPoint:!0,data:this.data}]}}}}),l=(r(659),r(31)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{elevation:"0"}},[t.title?e("h3",{staticClass:"px-2 pt-4 font-weight-bold text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"pr-3 overflow-hidden"},[e("client-only",[e("highchart",{attrs:{options:t.chartOptions,update:["options.title","options.series"]}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},672:function(t,e,r){"use strict";r.r(e);var n=r(627),o=(r(30),r(38),{name:"LineChart",props:{title:{type:String},name:{type:String},width:{type:Number,default:null},height:{type:Number,default:null},data:{type:[]},xData:{type:[]}},data:function(){return{chartOptions:{title:!1,credits:{enabled:!1},tooltip:{crosshairs:!0,shared:!0,useHTML:!0,borderColor:"#ffffff",style:{color:"#042F4D"}},chart:{type:"spline",width:this.width,height:this.height,style:{direction:"rtl"}},xAxis:{title:!1,categories:this.xData},yAxis:{title:!1,minorTickInterval:.1},legend:{enabled:!1},plotOptions:{spline:{lineWidth:3,states:{hover:{lineWidth:4}},marker:{enabled:!1},colorByPoint:!0,colors:["#00778B","#22DEDE"]}},series:[{name:this.name||this.title,data:this.data}]}}}}),l=(r(661),r(31)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{elevation:"0"}},[t.title?e("h3",{staticClass:"px-2 pt-4 font-weight-bold text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"pr-3 overflow-hidden"},[e("client-only",[e("highchart",{attrs:{options:t.chartOptions,update:["options.title","options.series"]}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},673:function(t,e,r){"use strict";r.r(e);r(30);var n={name:"HorizontalBarGroup",props:{width:{type:Number,default:150},height:{type:Number,default:150},data:{type:[Array,Object]}},data:function(){return{chartOptions:{credits:{enabled:!1},title:!1,chart:{type:"bar"},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="padding:0"><b>{point.y} : </b></td><td style="padding:0">{series.name}</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},xAxis:this.data.xAxis,yAxis:{min:0,title:!1,labels:{overflow:"justify"}},plotOptions:{bar:{colorByPoint:!0,colors:["#00778B","#22DEDE"],dataLabels:{enabled:!0}}},series:this.data.series}}}},o=r(31),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"pa-sm-1"},[t("client-only",[t("highchart",{attrs:{options:this.chartOptions,update:["options.title","options.series"]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},674:function(t,e,r){"use strict";r.r(e);r(30);var n={name:"HorizontalBar",props:{width:{type:Number,default:150},height:{type:Number,default:150},data:{type:[Array,Object]}},data:function(){return{chartOptions:{chart:{animation:{duration:500},marginRight:50},title:{text:"World population by country",align:"left"},subtitle:{useHTML:!0,text:getSubtitle(),floating:!0,align:"right",verticalAlign:"middle",y:-20,x:-100},legend:{enabled:!1},xAxis:{type:"category"},yAxis:{opposite:!0,tickPixelInterval:150,title:{text:null}},plotOptions:{series:{animation:!1,groupPadding:0,pointPadding:.1,borderWidth:0,colorByPoint:!0,dataSorting:{enabled:!0,matchByName:!0},type:"bar",dataLabels:{enabled:!0}}},series:[{type:"bar",name:startYear,data:getData(startYear)[1]}],responsive:{rules:[{condition:{maxWidth:550},chartOptions:{xAxis:{visible:!1},subtitle:{x:0},plotOptions:{series:{dataLabels:[{enabled:!0,y:8},{enabled:!0,format:"{point.name}",y:-8,style:{fontWeight:"normal",opacity:.7}}]}}}}]}}}}},o=r(31),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"pa-1"},[t("client-only",[t("highchart",{attrs:{options:this.chartOptions,update:["options.title","options.series"]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},675:function(t,e,r){"use strict";r.r(e);r(30);var n={name:"HorizontalBarGroup",props:{width:{type:Number,default:150},height:{type:Number,default:150},data:{type:[Array,Object]}},data:function(){return{chartOptions:{credits:{enabled:!1},title:!1,chart:{type:"column",colors:["#00778B","#22DEDE"]},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="padding:0"><b>{point.y} : </b></td><td style="padding:0">{series.name}</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},yAxis:{title:!1,labels:{overflow:"justify"}},xAxis:this.data.xAxis,plotOptions:{column:{pointPadding:0,borderWidth:0,color:"#00778B",pointWidth:8}},series:this.data.series}}}},o=r(31),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"pa-sm-1"},[t("client-only",[t("highchart",{attrs:{options:this.chartOptions,update:["options.title","options.series"]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,r){"use strict";r.r(e);var n=r(627),o=r(651),l=r(616),c=r(665),d=r(710),h=(r(41),r(46),r(38),r(8),r(10),r(11),r(3),r(13),r(7),r(14),r(2)),f=r(45);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"GeneralFilterPage",layout:"dashboard",data:function(){return{loading:!0,chartsFilter:"day",data:[5.2,5.7,8.7,13.9,18.2,21.4,25,26.4,22.8,17.5,12.1,7.6],areaData:[1,200,400,280,360,150,120,180,160,150,300,225,500,400,380,500,250,450,400,500,325,300,500,500],nationalitesData:[["سعودي",92],["أجنبي",119]],interviewsData:[["المقبولين",33],["المرفوضين",100]],contractData:[["وقعوا عقودهم",92],["لم يوقعوا بعد",30]],areaX:["01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00"]}},computed:m(m({},Object(f.c)(["isLoading","widgets"])),{},{xDataFilters:function(){if(["day","week","month"].includes(this.chartsFilter)){return{day:[],week:[],month:[]}[this.chartsFilter]}return[]}}),created:function(){this.$store.dispatch("fetchDashboardData")}},x=r(31),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{staticClass:"mb-6",attrs:{color:"transparent",elevation:"0"}},[t.isLoading?e(c.a,[t._l(3,(function(r){return e(o.a,{key:r+"1",attrs:{cols:"12",sm:"6",md:"4"}},[e(n.a,{staticClass:"pt-6 pt-sm-8 pb-0",attrs:{elevation:"0"}},[e("h3",{staticClass:"mb-3 d-flex justify-center"},[e(d.a,{attrs:{type:"heading",tile:"",width:400,height:15}})],1),t._v(" "),e("h3",{staticClass:"mb-6 d-flex justify-center"},[e(d.a,{attrs:{type:"heading",tile:"",width:400,height:15}})],1),t._v(" "),e(l.a),t._v(" "),e("div",{staticClass:"pa-4"},[e(d.a,{attrs:{type:"image",tile:""}})],1)],1)],1)})),t._v(" "),t._l(2,(function(r){return e(o.a,{key:r+"2",attrs:{cols:"12",sm:"6"}},[e(n.a,{staticClass:"pt-6 pt-sm-8 pb-0",attrs:{elevation:"0"}},[e("h3",{staticClass:"mb-6 px-6"},[e(d.a,{attrs:{type:"heading",tile:"",width:400,height:15}})],1),t._v(" "),e(l.a),t._v(" "),e("div",{staticClass:"pa-4"},[e(d.a,{attrs:{type:"image",tile:""}})],1)],1)],1)}))],2):e(c.a,t._l(t.widgets,(function(r,i){return e(o.a,{key:i,attrs:{cols:"12",sm:"6",md:r.size}},[r.type.includes("overview")?e("statistics-card",{attrs:{title:r.options.countAllName,content:r.options.countAll,pieData:r.data}}):"pie"===r.type?e("pie",{attrs:{title:r.name,data:r.data,width:400,height:400}}):"lineChart"===r.type?e("line-chart",{attrs:{title:r.name,height:200,data:t.data,"x-data":t.xDataFilters}}):"horizontalBarGroup"===r.type?e(n.a,{staticClass:"pa-4",attrs:{elevation:"0"}},[e("h3",{staticClass:"text-h6 font-weight-bold mb-4"},[t._v("\n            "+t._s(r.name)+"\n          ")]),t._v(" "),e("horizontal-bar-group",{attrs:{data:r.data}})],1):"horizontalBar"===r.type&&r.data?e(n.a,{staticClass:"pa-4",attrs:{elevation:"0"}},[e("h3",{staticClass:"text-h6 font-weight-bold mb-4"},[t._v("\n            "+t._s(r.name)+"\n          ")]),t._v(" "),e("horizontal-bar",{attrs:{data:r.data}})],1):"verticalBar"===r.type?e(n.a,{staticClass:"pa-4",attrs:{elevation:"0"}},[e("h3",{staticClass:"text-h6 font-weight-bold mb-4"},[t._v("\n            "+t._s(r.name)+"\n          ")]),t._v(" "),e("vertical-bar",{attrs:{data:r.data}})],1):t._e()],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{StatisticsCard:r(670).default,Pie:r(671).default,LineChart:r(672).default,HorizontalBarGroup:r(673).default,HorizontalBar:r(674).default,VerticalBar:r(675).default})}}]);