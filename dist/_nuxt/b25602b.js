(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{579:function(t,o,e){var r,n,a;a=function(a){function t(a,t,o,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}t(a=a?a._modules:{},"Core/Axis/SolidGaugeAxis.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],(function(a,t){var o,e=a.parse,r=t.extend,n=t.merge;return function(a){var b={initDataClasses:function(a){var t,o=this.chart,p=0,g=this.options;this.dataClasses=t=[],a.dataClasses.forEach((function(b,r){b=n(b),t.push(b),b.color||("category"===g.dataClassColor?(r=o.options.colors,b.color=r[p++],p===r.length&&(p=0)):b.color=e(g.minColor).tweenTo(e(g.maxColor),r/(a.dataClasses.length-1)))}))},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(a){a.color=e(a[1])}))},toColor:function(a,t){var g,b=this.stops,o=this.dataClasses;if(o)for(g=o.length;g--;){var e=o[g],r=e.from;if(b=e.to,(void 0===r||a>=r)&&(void 0===b||a<=b)){var n=e.color;t&&(t.dataClass=g);break}}else{for(this.logarithmic&&(a=this.val2lin(a)),a=1-(this.max-a)/(this.max-this.min),g=b.length;g--&&!(a>b[g][0]););r=b[g]||b[g+1],a=1-((b=b[g+1]||r)[0]-a)/(b[0]-r[0]||1),n=r.color.tweenTo(b.color,a)}return n}};a.init=function(a){r(a,b)}}(o||(o={})),o})),t(a,"Series/SolidGauge/SolidGaugeComposition.js",[a["Core/Renderer/SVG/SVGRenderer.js"]],(function(a){var t=(a=a.prototype).symbols.arc;a.symbols.arc=function(a,o,e,r,b){return a=t(a,o,e,r,b),b&&b.rounded&&(e=((b.r||e)-(b.innerR||0))/2,o=a[0],b=a[2],"M"===o[0]&&"L"===b[0]&&(o=["A",e,e,0,1,1,o[1],o[2]],a[2]=["A",e,e,0,1,1,b[1],b[2]],a[4]=o)),a}})),t(a,"Series/SolidGauge/SolidGaugeSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Axis/SolidGaugeAxis.js"],a["Core/Utilities.js"]],(function(a,t,o,e){var r=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function o(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),n=t.seriesTypes,b=n.gauge,l=n.pie.prototype,p=e.clamp,u=e.extend,d=e.isNumber,c=e.merge,g=e.pick,h=e.pInt,f={colorByPoint:!0,dataLabels:{y:0}};return e=function(a){function t(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.points=void 0,b.options=void 0,b.axis=void 0,b.yAxis=void 0,b.startAngleRad=void 0,b.thresholdAngleRad=void 0,b}return r(t,a),t.prototype.translate=function(){var a=this.yAxis;o.init(a),!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options),a.initStops(a.options),b.prototype.translate.call(this)},t.prototype.drawPoints=function(){var t,a=this,b=a.yAxis,o=b.center,e=a.options,r=a.chart.renderer,n=e.overshoot,l=d(n)?n/180*Math.PI:0;d(e.threshold)&&(t=b.startAngleRad+b.translate(e.threshold,void 0,void 0,void 0,!0)),this.thresholdAngleRad=g(t,b.startAngleRad),a.points.forEach((function(t){if(!t.isNull){var n=t.graphic,d=b.startAngleRad+b.translate(t.y,void 0,void 0,void 0,!0),c=h(g(t.options.radius,e.radius,100))*o[2]/200,q=h(g(t.options.innerRadius,e.innerRadius,60))*o[2]/200,f=b.toColor(t.y,t),v=Math.min(b.startAngleRad,b.endAngleRad),y=Math.max(b.startAngleRad,b.endAngleRad);"none"===f&&(f=t.color||a.color||"none"),"none"!==f&&(t.color=f),d=p(d,v-l,y+l),!1===e.wrap&&(d=p(d,v,y)),v=Math.min(d,a.thresholdAngleRad),(d=Math.max(d,a.thresholdAngleRad))-v>2*Math.PI&&(d=v+2*Math.PI),t.shapeArgs=q={x:o[0],y:o[1],r:c,innerR:q,start:v,end:d,rounded:e.rounded},t.startR=c,n?(c=q.d,n.animate(u({fill:f},q)),c&&(q.d=c)):t.graphic=n=r.arc(q).attr({fill:f,"sweep-flag":0}).add(a.group),a.chart.styledMode||("square"!==e.linecap&&n.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),n.attr({stroke:e.borderColor||"none","stroke-width":e.borderWidth||0})),n&&n.addClass(t.getClassName(),!0)}}))},t.prototype.animate=function(a){a||(this.startAngleRad=this.thresholdAngleRad,l.animate.call(this,a))},t.defaultOptions=c(b.defaultOptions,f),t}(b),u(e.prototype,{drawLegendSymbol:a.drawRectangle}),t.registerSeriesType("solidgauge",e),e})),t(a,"masters/modules/solid-gauge.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(r=[e(222),e(653)],void 0===(n=function(t){return a(t),a.Highcharts=t,a}.apply(o,r))||(t.exports=n))}}]);