(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{911:function(t,e,n){"use strict";n.r(e);n(31);var o={name:"PieChart",props:{width:{type:Number,default:150},height:{type:Number,default:150},data:{type:Array}},data:function(){return{chartOptions:{title:!1,chart:{},tooltip:{headerFormat:"",pointFormat:"{point.name}: <b>{point.percentage:.1f}%</b>"},legend:{enabled:!1},xAxis:{type:"category"},yAxis:{opposite:!0,tickPixelInterval:150,title:{text:null}},plotOptions:{series:{animation:!1,groupPadding:0,pointPadding:.1,borderWidth:0,colorByPoint:!0,colors:["#00778B","#22DEDE"],dataSorting:{enabled:!0,matchByName:!0},type:"bar",dataLabels:{enabled:!0}}},series:[{type:"bar",name:"ssss",data:this.data}],responsive:{rules:[{condition:{maxWidth:550},chartOptions:{xAxis:{visible:!1},subtitle:{x:0},plotOptions:{series:{dataLabels:[{enabled:!0,y:8},{enabled:!0,format:"{point.name}",y:-8,style:{fontWeight:"normal",opacity:.7}}]}}}}]}}}}},r=n(39),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"pa-1"},[t("client-only",[t("highchart",{attrs:{options:this.chartOptions,update:["options.title","options.series"]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);