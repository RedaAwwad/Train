(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{675:function(t,e,o){"use strict";o.r(e);o(30);var n={name:"HorizontalBarGroup",props:{width:{type:Number,default:150},height:{type:Number,default:150},data:{type:[Array,Object]}},data:function(){return{chartOptions:{credits:{enabled:!1},title:!1,chart:{type:"column",colors:["#00778B","#22DEDE"]},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="padding:0"><b>{point.y} : </b></td><td style="padding:0">{series.name}</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},yAxis:{title:!1,labels:{overflow:"justify"}},xAxis:this.data.xAxis,plotOptions:{column:{pointPadding:0,borderWidth:0,color:"#00778B",pointWidth:8}},series:this.data.series}}}},r=o(31),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"pa-sm-1"},[t("client-only",[t("highchart",{attrs:{options:this.chartOptions,update:["options.title","options.series"]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);