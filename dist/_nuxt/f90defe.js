/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{642:function(t,o,r){var e,n,c;c=function(t){"use strict";var o=t?t._modules:{};function r(t,path,o,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(o,"Series/Vector/VectorSeries.js",[o["Core/Animation/AnimationUtilities.js"],o["Core/Globals.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o,r,e){var n,c=this&&this.__extends||(n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},n(t,b)},function(t,b){function o(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),h=t.animObject,l=r.series,d=r.seriesTypes.scatter,y=e.arrayMax,f=e.extend,v=e.merge,m=e.pick,w=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.lengthMax=void 0,o.options=void 0,o.points=void 0,o}return c(o,t),o.prototype.animate=function(t){t?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},h(this.options.animation))},o.prototype.arrow=function(t){var u=t.length/this.lengthMax*this.options.vectorLength/20,o={start:10*u,center:0,end:-10*u}[this.options.rotationOrigin]||0;return[["M",0,7*u+o],["L",-1.5*u,7*u+o],["L",0,10*u+o],["L",1.5*u,7*u+o],["L",0,7*u+o],["L",0,-10*u+o]]},o.prototype.drawPoints=function(){var t=this.chart;this.points.forEach((function(o){var r=o.plotX,e=o.plotY;!1===this.options.clip||t.isInsidePlot(r,e,{inverted:t.inverted})?(o.graphic||(o.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+m(o.colorIndex,o.series.colorIndex))),o.graphic.attr({d:this.arrow(o),translateX:r,translateY:e,rotation:o.direction}),this.chart.styledMode||o.graphic.attr(this.pointAttribs(o))):o.graphic&&(o.graphic=o.graphic.destroy())}),this)},o.prototype.pointAttribs=function(t,o){var r=this.options,e=t.color||this.color,n=this.options.lineWidth;return o&&(e=r.states[o].color||e,n=(r.states[o].lineWidth||n)+(r.states[o].lineWidthPlus||0)),{stroke:e,"stroke-width":n}},o.prototype.translate=function(){l.prototype.translate.call(this),this.lengthMax=y(this.lengthData)},o.defaultOptions=v(d.defaultOptions,{lineWidth:2,rotationOrigin:"center",states:{hover:{lineWidthPlus:1}},tooltip:{pointFormat:"<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}°</b><br/>"},vectorLength:20},{marker:null}),o}(d);return f(w.prototype,{drawGraph:o.noop,getSymbol:o.noop,markerAttribs:o.noop,parallelArrays:["x","y","length","direction"],pointArrayMap:["y","length","direction"]}),r.registerSeriesType("vector",w),w})),r(o,"masters/modules/vector.src.js",[],(function(){}))},t.exports?(c.default=c,t.exports=c):(e=[r(242)],void 0===(n=function(t){return c(t),c.Highcharts=t,c}.apply(o,e))||(t.exports=n))}}]);