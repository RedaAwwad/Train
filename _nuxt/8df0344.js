/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{602:function(t,o,e){var r,n,l;l=function(t){"use strict";var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}e(o,"Series/OnSeriesComposition.js",[o["Series/Column/ColumnSeries.js"],o["Core/Series/Series.js"],o["Core/Utilities.js"]],(function(t,o,e){var r,n=t.prototype,l=o.prototype,c=e.defined,h=e.stableSort;return function(t){var o=[];function e(){return l.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)}function r(){n.translate.apply(this);var t,o,e,r,l,f,d,y=this,v=y.options,x=y.chart,m=y.points,S=v.onSeries,w=S&&x.get(S),O=w&&w.options.step,L=w&&w.points,_=x.inverted,j=y.xAxis,C=y.yAxis,cursor=m.length-1,A=v.onKey||"y",i=L&&L.length,P=0;if(w&&w.visible&&i)for(P=(w.pointXOffset||0)+(w.barW||0)/2,f=w.currentDataGrouping,r=L[i-1].x+(f?f.totalRange:0),h(m,(function(a,b){return a.x-b.x})),A="plot"+A[0].toUpperCase()+A.substr(1);i--&&m[cursor]&&(e=L[i],(t=m[cursor]).y=e.y,!(e.x<=t.x&&void 0!==e[A]&&(t.x<=r&&(t.plotY=e[A],e.x<t.x&&!O&&(l=L[i+1])&&void 0!==l[A]&&(d=(t.x-e.x)/(l.x-e.x),t.plotY+=d*(l[A]-e[A]),t.y+=d*(l.y-e.y))),i++,--cursor<0))););m.forEach((function(t,i){var e;t.plotX+=P,(void 0===t.plotY||_)&&(t.plotX>=0&&t.plotX<=j.len?_?(t.plotY=j.translate(t.x,0,1,0,1),t.plotX=c(t.y)?C.translate(t.y,0,0,0,1):0):t.plotY=(j.opposite?0:y.yAxis.len)+j.offset:t.shapeArgs={}),(o=m[i-1])&&o.plotX===t.plotX&&(void 0===o.stackIndex&&(o.stackIndex=0),e=o.stackIndex+1),t.stackIndex=e})),this.onSeries=w}t.compose=function(t){if(-1===o.indexOf(t)){o.push(t);var n=t.prototype;n.getPlotBox=e,n.translate=r}return t},t.getPlotBox=e,t.translate=r}(r||(r={})),r})),e(o,"Series/Windbarb/WindbarbPoint.js",[o["Core/Utilities.js"],o["Series/Column/ColumnSeries.js"]],(function(t,o){var e,r=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function o(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=t.isNumber,l=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.beaufort=void 0,o.beaufortLevel=void 0,o.direction=void 0,o.options=void 0,o.series=void 0,o}return r(o,t),o.prototype.isValid=function(){return n(this.value)&&this.value>=0},o}(o.prototype.pointClass);return l})),e(o,"Series/Windbarb/WindbarbSeries.js",[o["Core/Animation/AnimationUtilities.js"],o["Core/Globals.js"],o["Series/OnSeriesComposition.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"],o["Series/Windbarb/WindbarbPoint.js"]],(function(t,o,e,r,n,l){var c,h=this&&this.__extends||(c=function(t,b){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},c(t,b)},function(t,b){function o(){this.constructor=t}c(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),f=t.animObject,d=o.noop,y=r.series,v=r.seriesTypes.column,x=n.extend,m=n.merge,S=n.pick,w=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.points=void 0,o}return h(e,t),e.registerApproximation=function(){o.approximations&&!o.approximations.windbarb&&(o.approximations.windbarb=function(t,e){var i,r=0,n=0,l=t.length;for(i=0;i<l;i++)r+=t[i]*Math.cos(e[i]*o.deg2rad),n+=t[i]*Math.sin(e[i]*o.deg2rad);return[t.reduce((function(t,o){return t+o}),0)/t.length,Math.atan2(n,r)/o.deg2rad]})},e.prototype.init=function(t,o){e.registerApproximation(),y.prototype.init.call(this,t,o)},e.prototype.pointAttribs=function(t,o){var e=this.options,r=t.color||this.color,n=this.options.lineWidth;return o&&(r=e.states[o].color||r,n=(e.states[o].lineWidth||n)+(e.states[o].lineWidthPlus||0)),{stroke:r,"stroke-width":n}},e.prototype.windArrow=function(t){var path,o,e=1.943844*t.value,r=t.beaufortLevel,u=this.options.vectorLength/20,n=-10;if(t.isNull)return[];if(0===r)return this.chart.renderer.symbols.circle(-10*u,-10*u,20*u,20*u);if(path=[["M",0,7*u],["L",-1.5*u,7*u],["L",0,10*u],["L",1.5*u,7*u],["L",0,7*u],["L",0,-10*u]],(o=(e-e%50)/50)>0)for(;o--;)path.push(-10===n?["L",0,n*u]:["M",0,n*u],["L",5*u,n*u+2],["L",0,n*u+4]),e-=50,n+=7;if((o=(e-e%10)/10)>0)for(;o--;)path.push(-10===n?["L",0,n*u]:["M",0,n*u],["L",7*u,n*u]),e-=10,n+=3;if((o=(e-e%5)/5)>0)for(;o--;)path.push(-10===n?["L",0,n*u]:["M",0,n*u],["L",4*u,n*u]),e-=5,n+=3;return path},e.prototype.drawPoints=function(){var t=this.chart,o=this.yAxis,e=t.inverted,r=this.options.vectorLength/2;this.points.forEach((function(n){var l=n.plotX,c=n.plotY;!1===this.options.clip||t.isInsidePlot(l,0)?(n.graphic||(n.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+S(n.colorIndex,n.series.colorIndex))),n.graphic.attr({d:this.windArrow(n),translateX:l+this.options.xOffset,translateY:c+this.options.yOffset,rotation:n.direction}),this.chart.styledMode||n.graphic.attr(this.pointAttribs(n))):n.graphic&&(n.graphic=n.graphic.destroy()),n.tooltipPos=[l+this.options.xOffset+(e&&!this.onSeries?r:0),c+this.options.yOffset-(e?0:r+o.pos-t.plotTop)]}),this)},e.prototype.animate=function(t){t?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},f(this.options.animation))},e.prototype.markerAttribs=function(t,o){return{}},e.prototype.getExtremes=function(){return{}},e.prototype.shouldShowTooltip=function(o,e,r){return void 0===r&&(r={}),r.ignoreX=this.chart.inverted,r.ignoreY=!r.ignoreX,t.prototype.shouldShowTooltip.call(this,o,e,r)},e.defaultOptions=m(v.defaultOptions,{dataGrouping:{enabled:!0,approximation:"windbarb",groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0}),e}(v);return e.compose(w),x(w.prototype,{beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],beaufortName:["Calm","Light air","Light breeze","Gentle breeze","Moderate breeze","Fresh breeze","Strong breeze","Near gale","Gale","Strong gale","Storm","Violent storm","Hurricane"],parallelArrays:["x","value","direction"],pointArrayMap:["value","direction"],pointClass:l,trackerGroups:["markerGroup"],invertGroups:d,translate:function(){var t=this.beaufortFloor,o=this.beaufortName;e.translate.call(this),this.points.forEach((function(e){for(var r=0;r<t.length&&!(t[r]>e.value);r++);e.beaufortLevel=r-1,e.beaufort=o[r-1]}))}}),w.registerApproximation(),r.registerSeriesType("windbarb",w),w})),e(o,"masters/modules/windbarb.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(r=[e(217)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);