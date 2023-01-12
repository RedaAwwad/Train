/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{533:function(t,e,n){var o,r,h;h=function(t){"use strict";var e=t?t._modules:{};function n(t,path,e,n){t.hasOwnProperty(path)||(t[path]=n.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}n(e,"Series/HeikinAshi/HeikinAshiPoint.js",[e["Core/Series/SeriesRegistry.js"]],(function(t){var e,n=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function n(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e}(t.seriesTypes.candlestick.prototype.pointClass);return o})),n(e,"Series/HeikinAshi/HeikinAshiSeriesDefaults.js",[],(function(){return{dataGrouping:{groupAll:!0}}})),n(e,"Series/HeikinAshi/HeikinAshiSeries.js",[e["Series/HeikinAshi/HeikinAshiPoint.js"],e["Series/HeikinAshi/HeikinAshiSeriesDefaults.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,n,o){var r,h=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=n.seriesTypes.candlestick,f=o.addEvent,l=o.merge,d=[];function y(){this.series.forEach((function(t){if(t.is("heikinashi")){var e=t;e.heikiashiData.length=0,e.getHeikinashiData()}}))}function k(){var t=this,e=t.points,n=t.heikiashiData,o=t.cropStart||0;t.processedYData.length=0;for(var i=0;i<e.length;i++){var r=e[i],h=n[i+o];r.open=h[0],r.high=h[1],r.low=h[2],r.close=h[3],t.processedYData.push([r.open,r.high,r.low,r.close])}}function v(){this.heikiashiData.length&&(this.heikiashiData.length=0)}var D=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.heikiashiData=[],e.options=void 0,e.points=void 0,e.yData=void 0,e.processedYData=void 0,e}return h(n,t),n.compose=function(t,e){for(var o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];c.compose(t),-1===d.indexOf(e)&&(d.push(e),f(e,"postProcessData",y)),-1===d.indexOf(n)&&(d.push(n),f(n,"afterTranslate",k),f(n,"updatedData",v))},n.prototype.getHeikinashiData=function(){var t=this,e=t.allGroupedData||t.yData,n=t.heikiashiData;if(!n.length&&e&&e.length){var o=e[0];this.modifyFirstPointValue(o);for(var i=1;i<e.length;i++){var r=e[i],h=n[i-1];this.modifyDataPoint(r,h)}}t.heikiashiData=n},n.prototype.init=function(){t.prototype.init.apply(this,arguments),this.heikiashiData=[]},n.prototype.modifyFirstPointValue=function(t){var e=(t[0]+t[1]+t[2]+t[3])/4,n=(t[0]+t[3])/2;this.heikiashiData.push([e,t[1],t[2],n])},n.prototype.modifyDataPoint=function(t,e){var n=(e[0]+e[3])/2,o=(t[0]+t[1]+t[2]+t[3])/4,r=Math.max(t[1],o,n),h=Math.min(t[2],o,n);this.heikiashiData.push([n,r,h,o])},n.defaultOptions=l(c.defaultOptions,e),n}(c);return D.prototype.pointClass=t,n.registerSeriesType("heikinashi",D),D})),n(e,"masters/modules/heikinashi.src.js",[e["Core/Globals.js"],e["Series/HeikinAshi/HeikinAshiSeries.js"]],(function(t,e){var n=t;e.compose(n.Series,n.Axis)}))},t.exports?(h.default=h,t.exports=h):(o=[n(219),n(469)],void 0===(r=function(t){return h(t),h.Highcharts=t,h}.apply(e,o))||(t.exports=r))}}]);