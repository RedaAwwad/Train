(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{548:function(t,e,o){var r,n,a;a=function(a){function t(a,t,b,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,b),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}t(a=a?a._modules:{},"Series/DotPlot/DotPlotSeries.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,b){var e=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var b in t)t.hasOwnProperty(b)&&(a[b]=t[b])},a(b,t)};return function(b,t){function e(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),q=b.extend,o=b.merge,r=b.objectEach,n=b.pick;return b=function(b){function t(){var a=null!==b&&b.apply(this,arguments)||this;return a.data=void 0,a.options=void 0,a.points=void 0,a}return e(t,b),t.prototype.drawPoints=function(){var a=this,b=a.chart.renderer,t=this.options.marker,e=this.yAxis.transA*a.options.itemPadding,o=this.borderWidth%2?.5:1;this.points.forEach((function(d){var c,g=d.marker||{},u=g.symbol||t.symbol,h=n(g.radius,t.radius),l="rect"!==u;d.graphics=c=d.graphics||{};var y=d.pointAttr?d.pointAttr[d.selected?"selected":""]||a.pointAttr[""]:a.pointAttribs(d,d.selected&&"select");if(delete y.r,a.chart.styledMode&&(delete y.stroke,delete y["stroke-width"]),null!==d.y){d.graphic||(d.graphic=b.g("point").add(a.group));var f=d.y,v=n(d.stackY,d.y),m=Math.min(d.pointWidth,a.yAxis.transA-e);for(g=v;g>v-d.y;g--){var w=d.barX+(l?d.pointWidth/2-m/2:0),p=a.yAxis.toPixels(g,!0)+e/2;a.options.crisp&&(w=Math.round(w)-o,p=Math.round(p)+o),w={x:w,y:p,width:Math.round(l?m:d.pointWidth),height:Math.round(m),r:h},c[f]?c[f].animate(w):c[f]=b.symbol(u).attr(q(w,y)).add(d.graphic),c[f].isActive=!0,f--}}r(c,(function(a,b){a.isActive?a.isActive=!1:(a.destroy(),delete a[b])}))}))},t.defaultOptions=o(a.defaultOptions,{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}}),t}(a),q(b.prototype,{markerAttribs:void 0}),t.registerSeriesType("dotplot",b),b})),t(a,"masters/modules/dotplot.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(r=[o(242)],void 0===(n=function(t){return a(t),a.Highcharts=t,a}.apply(e,r))||(t.exports=n))}}]);