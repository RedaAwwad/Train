/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{549:function(t,e,o){var r,n,d;d=function(t){"use strict";var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}o(e,"Series/DotPlot/DotPlotSeries.js",[e["Series/Column/ColumnSeries.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,o){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=o.extend,c=o.merge,h=o.objectEach,l=o.pick,y=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return n(o,e),o.prototype.drawPoints=function(){var t=this,e=t.chart.renderer,o=this.options.marker,r=this.yAxis.transA*t.options.itemPadding,n=this.borderWidth%2?.5:1;this.points.forEach((function(c){var y,f,m,v,w,A,_,k,x,P=c.marker||{},symbol=P.symbol||o.symbol,j=l(P.radius,o.radius),M="rect"!==symbol;if(c.graphics=m=c.graphics||{},delete(w=c.pointAttr?c.pointAttr[c.selected?"selected":""]||t.pointAttr[""]:t.pointAttribs(c,c.selected&&"select")).r,t.chart.styledMode&&(delete w.stroke,delete w["stroke-width"]),null!==c.y)for(c.graphic||(c.graphic=e.g("point").add(t.group)),v=c.y,_=l(c.stackY,c.y),A=Math.min(c.pointWidth,t.yAxis.transA-r),y=_;y>_-c.y;y--)k=c.barX+(M?c.pointWidth/2-A/2:0),x=t.yAxis.toPixels(y,!0)+r/2,t.options.crisp&&(k=Math.round(k)-n,x=Math.round(x)+n),f={x:k,y:x,width:Math.round(M?A:c.pointWidth),height:Math.round(A),r:j},m[v]?m[v].animate(f):m[v]=e.symbol(symbol).attr(d(f,w)).add(c.graphic),m[v].isActive=!0,v--;h(m,(function(t,e){t.isActive?t.isActive=!1:(t.destroy(),delete t[e])}))}))},o.defaultOptions=c(t.defaultOptions,{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}}),o}(t);return d(y.prototype,{markerAttribs:void 0}),e.registerSeriesType("dotplot",y),y})),o(e,"masters/modules/dotplot.src.js",[],(function(){}))},t.exports?(d.default=d,t.exports=d):(r=[o(242)],void 0===(n=function(t){return d(t),d.Highcharts=t,d}.apply(e,r))||(t.exports=n))}}]);