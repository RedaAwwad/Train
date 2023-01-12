/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{536:function(t,e,o){var n,r,h;h=function(t){"use strict";var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}o(e,"Series/HeikinAshi/HeikinAshiPoint.js",[e["Core/Series/SeriesRegistry.js"]],(function(t){var e,o=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function o(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.series=void 0,e}return o(e,t),e}(t.seriesTypes.candlestick.prototype.pointClass);return n})),o(e,"Series/HeikinAshi/HeikinAshiSeries.js",[e["Series/HeikinAshi/HeikinAshiPoint.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"],e["Core/Axis/Axis.js"]],(function(t,e,o,n){var r,h=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=e.seriesTypes.candlestick,f=o.addEvent,l=o.merge,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.heikiashiData=[],e.options=void 0,e.points=void 0,e.yData=void 0,e.processedYData=void 0,e}return h(e,t),e.prototype.getHeikinashiData=function(){var t=this,e=t.allGroupedData||t.yData,o=t.heikiashiData;if(!o.length&&e&&e.length){var n=e[0];this.modifyFirstPointValue(n);for(var i=1;i<e.length;i++){var r=e[i],h=o[i-1];this.modifyDataPoint(r,h)}}t.heikiashiData=o},e.prototype.init=function(){t.prototype.init.apply(this,arguments),this.heikiashiData=[]},e.prototype.modifyFirstPointValue=function(t){var e=(t[0]+t[1]+t[2]+t[3])/4,o=(t[0]+t[3])/2;this.heikiashiData.push([e,t[1],t[2],o])},e.prototype.modifyDataPoint=function(t,e){var o=(e[0]+e[3])/2,n=(t[0]+t[1]+t[2]+t[3])/4,r=Math.max(t[1],n,o),h=Math.min(t[2],n,o);this.heikiashiData.push([o,r,h,n])},e.defaultOptions=l(c.defaultOptions,{dataGrouping:{groupAll:!0}}),e}(c);return f(d,"afterTranslate",(function(){var t=this,e=t.points,o=t.heikiashiData,n=t.cropStart||0;t.processedYData.length=0;for(var i=0;i<e.length;i++){var r=e[i],h=o[i+n];r.open=h[0],r.high=h[1],r.low=h[2],r.close=h[3],t.processedYData.push([r.open,r.high,r.low,r.close])}})),f(d,"updatedData",(function(){this.heikiashiData.length&&(this.heikiashiData.length=0)})),f(n,"postProcessData",(function(){this.series.forEach((function(t){if(t.is("heikinashi")){var e=t;e.heikiashiData.length=0,e.getHeikinashiData()}}))})),d.prototype.pointClass=t,e.registerSeriesType("heikinashi",d),d})),o(e,"masters/modules/heikinashi.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(n=[o(222),o(473)],void 0===(r=function(t){return h(t),h.Highcharts=t,h}.apply(e,n))||(t.exports=r))}}]);