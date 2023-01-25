(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{603:function(t,o,e){var r,n,a;a=function(a){function b(a,t,o,b){a.hasOwnProperty(t)||(a[t]=b.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}b(a=a?a._modules:{},"Extensions/DataGrouping/ApproximationRegistry.js",[],(function(){return{}})),b(a,"Series/OnSeriesComposition.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],(function(a,t,b){var q,o=a.prototype,e=t.prototype,r=b.defined,n=b.stableSort;return function(a){function b(a){return e.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this,a)}function q(){o.translate.apply(this);var t,a=this,e=a.options,l=a.chart,c=a.points,h=e.onSeries,f=(h=h&&l.get(h))&&h.options.step,d=h&&h.points,g=l.inverted,b=a.xAxis,q=a.yAxis;l=c.length-1,e=e.onKey||"y";var v,y=d&&d.length,x=0;if(h&&h.visible&&y){x=(h.pointXOffset||0)+(h.barW||0)/2;var m=h.currentDataGrouping,S=d[y-1].x+(m?m.totalRange:0);for(n(c,(function(t,o){return t.x-o.x})),e="plot"+e[0].toUpperCase()+e.substr(1);y--&&c[l];){var p=d[y];if((m=c[l]).y=p.y,p.x<=m.x&&void 0!==p[e]){if(m.x<=S&&(m.plotY=p[e],p.x<m.x&&!f&&(v=d[y+1])&&void 0!==v[e])){var u=(m.x-p.x)/(v.x-p.x);m.plotY+=u*(v[e]-p[e]),m.y+=u*(v.y-p.y)}if(y++,0>--l)break}}}c.forEach((function(o,e){if(o.plotX+=x,(void 0===o.plotY||g)&&(0<=o.plotX&&o.plotX<=b.len?g?(o.plotY=b.translate(o.x,0,1,0,1),o.plotX=r(o.y)?q.translate(o.y,0,0,0,1):0):o.plotY=(b.opposite?0:a.yAxis.len)+b.offset:o.shapeArgs={}),(t=c[e-1])&&t.plotX===o.plotX){void 0===t.stackIndex&&(t.stackIndex=0);var n=t.stackIndex+1}o.stackIndex=n})),this.onSeries=h}var t=[];a.compose=function(a){if(-1===t.indexOf(a)){t.push(a);var o=a.prototype;o.getPlotBox=b,o.translate=q}return a},a.getPlotBox=b,a.translate=q}(q||(q={})),q})),b(a,"Series/Windbarb/WindbarbPoint.js",[a["Core/Utilities.js"],a["Series/Column/ColumnSeries.js"]],(function(a,b){var t=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function o(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),o=a.isNumber;return function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.beaufort=void 0,b.beaufortLevel=void 0,b.direction=void 0,b.options=void 0,b.series=void 0,b}return t(b,a),b.prototype.isValid=function(){return o(this.value)&&0<=this.value},b}(b.prototype.pointClass)})),b(a,"Series/Windbarb/WindbarbSeries.js",[a["Core/Animation/AnimationUtilities.js"],a["Extensions/DataGrouping/ApproximationRegistry.js"],a["Core/Globals.js"],a["Series/OnSeriesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Series/Windbarb/WindbarbPoint.js"]],(function(a,b,t,u,o,e,r){var n=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o])},a(b,t)};return function(b,t){function o(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),l=a.animObject,c=o.series,h=o.seriesTypes.column;a=e.extend;var f=e.merge,d=e.pick;return e=function(a){function o(){var t=null!==a&&a.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return n(o,a),o.registerApproximation=function(){b.windbarb||(b.windbarb=function(a,o){var g,e=0,b=0,r=a.length;for(g=0;g<r;g++)e+=a[g]*Math.cos(o[g]*t.deg2rad),b+=a[g]*Math.sin(o[g]*t.deg2rad);return[a.reduce((function(a,t){return a+t}),0)/a.length,Math.atan2(b,e)/t.deg2rad]})},o.prototype.init=function(a,t){o.registerApproximation(),c.prototype.init.call(this,a,t)},o.prototype.pointAttribs=function(a,t){var b=this.options;a=a.color||this.color;var o=this.options.lineWidth;return t&&(a=b.states[t].color||a,o=(b.states[t].lineWidth||o)+(b.states[t].lineWidthPlus||0)),{stroke:a,"stroke-width":o}},o.prototype.windArrow=function(a){var t=1.943844*a.value,b=this.options.vectorLength/20,o=-10;if(a.isNull)return[];if(0===a.beaufortLevel)return this.chart.renderer.symbols.circle(-10*b,-10*b,20*b,20*b);a=[["M",0,7*b],["L",-1.5*b,7*b],["L",0,10*b],["L",1.5*b,7*b],["L",0,7*b],["L",0,-10*b]];var g=(t-t%50)/50;if(0<g)for(;g--;)a.push(-10===o?["L",0,o*b]:["M",0,o*b],["L",5*b,o*b+2],["L",0,o*b+4]),t-=50,o+=7;if(0<(g=(t-t%10)/10))for(;g--;)a.push(-10===o?["L",0,o*b]:["M",0,o*b],["L",7*b,o*b]),t-=10,o+=3;if(0<(g=(t-t%5)/5))for(;g--;)a.push(-10===o?["L",0,o*b]:["M",0,o*b],["L",4*b,o*b]),t-=5,o+=3;return a},o.prototype.drawPoints=function(){var a=this.chart,b=this.yAxis,t=a.inverted,o=this.options.vectorLength/2;this.points.forEach((function(e){var r=e.plotX,g=e.plotY;!1===this.options.clip||a.isInsidePlot(r,0)?(e.graphic||(e.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+d(e.colorIndex,e.series.colorIndex))),e.graphic.attr({d:this.windArrow(e),translateX:r+this.options.xOffset,translateY:g+this.options.yOffset,rotation:e.direction}),this.chart.styledMode||e.graphic.attr(this.pointAttribs(e))):e.graphic&&(e.graphic=e.graphic.destroy()),e.tooltipPos=[r+this.options.xOffset+(t&&!this.onSeries?o:0),g+this.options.yOffset-(t?0:o+b.pos-a.plotTop)]}),this)},o.prototype.animate=function(a){a?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},l(this.options.animation))},o.prototype.markerAttribs=function(a,b){return{}},o.prototype.getExtremes=function(){return{}},o.prototype.shouldShowTooltip=function(b,t,o){return void 0===o&&(o={}),o.ignoreX=this.chart.inverted,o.ignoreY=!o.ignoreX,a.prototype.shouldShowTooltip.call(this,b,t,o)},o.defaultOptions=f(h.defaultOptions,{dataGrouping:{enabled:!0,approximation:"windbarb",groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0}),o}(h),u.compose(e),a(e.prototype,{beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],beaufortName:"Calm;Light air;Light breeze;Gentle breeze;Moderate breeze;Fresh breeze;Strong breeze;Near gale;Gale;Strong gale;Storm;Violent storm;Hurricane".split(";"),invertible:!1,parallelArrays:["x","value","direction"],pointArrayMap:["value","direction"],pointClass:r,trackerGroups:["markerGroup"],translate:function(){var a=this.beaufortFloor,b=this.beaufortName;u.translate.call(this),this.points.forEach((function(t){for(var o=0;o<a.length&&!(a[o]>t.value);o++);t.beaufortLevel=o-1,t.beaufort=b[o-1]}))}}),e.registerApproximation(),o.registerSeriesType("windbarb",e),e})),b(a,"masters/modules/windbarb.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(r=[e(219)],void 0===(n=function(b){return a(b),a.Highcharts=b,a}.apply(o,r))||(t.exports=n))}}]);