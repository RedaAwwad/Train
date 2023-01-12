/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{577:function(t,o,e){var r,n,l;l=function(t){"use strict";var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}e(o,"Core/Axis/SolidGaugeAxis.js",[o["Core/Color/Color.js"],o["Core/Utilities.js"]],(function(t,o){var e,r=t.parse,n=o.extend,l=o.merge;return function(t){var o={initDataClasses:function(t){var o,e=this.chart,n=0,d=this.options;this.dataClasses=o=[],t.dataClasses.forEach((function(h,i){var c;h=l(h),o.push(h),h.color||("category"===d.dataClassColor?(c=e.options.colors,h.color=c[n++],n===c.length&&(n=0)):h.color=r(d.minColor).tweenTo(r(d.maxColor),i/(t.dataClasses.length-1)))}))},initStops:function(t){this.stops=t.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(t){t.color=r(t[1])}))},toColor:function(t,o){var e,r,n,l,d,i,h=this.stops,c=this.dataClasses;if(c){for(i=c.length;i--;)if(r=(d=c[i]).from,n=d.to,(void 0===r||t>=r)&&(void 0===n||t<=n)){l=d.color,o&&(o.dataClass=i);break}}else{for(this.logarithmic&&(t=this.val2lin(t)),e=1-(this.max-t)/(this.max-this.min),i=h.length;i--&&!(e>h[i][0]););r=h[i]||h[i+1],e=1-((n=h[i+1]||r)[0]-e)/(n[0]-r[0]||1),l=r.color.tweenTo(n.color,e)}return l}};t.init=function(t){n(t,o)}}(e||(e={})),e})),e(o,"Series/SolidGauge/SolidGaugeSeriesDefaults.js",[],(function(){return{colorByPoint:!0,dataLabels:{y:0}}})),e(o,"Series/SolidGauge/SolidGaugeComposition.js",[o["Core/Renderer/SVG/SVGRenderer.js"]],(function(t){var o=t.prototype,e=o.symbols,r=o.symbols.arc;e.arc=function(t,o,e,n,l){var path=r(t,o,e,n,l);if(l&&l.rounded){var d=((l.r||e)-(l.innerR||0))/2,h=path[0],c=path[2];if("M"===h[0]&&"L"===c[0]){var f=["A",d,d,0,1,1,h[1],h[2]],v=["A",d,d,0,1,1,c[1],c[2]];path[2]=v,path[4]=f}}return path}})),e(o,"Series/SolidGauge/SolidGaugeSeries.js",[o["Core/Legend/LegendSymbol.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Axis/SolidGaugeAxis.js"],o["Series/SolidGauge/SolidGaugeSeriesDefaults.js"],o["Core/Utilities.js"]],(function(t,o,e,r,n){var l,d=this&&this.__extends||(l=function(t,b){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},l(t,b)},function(t,b){function o(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),h=o.seriesTypes,c=h.gauge,f=h.pie.prototype,v=n.clamp,y=n.extend,C=n.isNumber,m=n.merge,S=n.pick,A=n.pInt,R=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.points=void 0,o.options=void 0,o.axis=void 0,o.yAxis=void 0,o.startAngleRad=void 0,o.thresholdAngleRad=void 0,o}return d(o,t),o.prototype.translate=function(){var t=this.yAxis;e.init(t),!t.dataClasses&&t.options.dataClasses&&t.initDataClasses(t.options),t.initStops(t.options),c.prototype.translate.call(this)},o.prototype.drawPoints=function(){var t,o=this,e=o.yAxis,r=e.center,n=o.options,l=o.chart.renderer,d=n.overshoot,h=C(d)?d/180*Math.PI:0;C(n.threshold)&&(t=e.startAngleRad+e.translate(n.threshold,void 0,void 0,void 0,!0)),this.thresholdAngleRad=S(t,e.startAngleRad);for(var c=0,f=o.points;c<f.length;c++){var m=f[c];if(!m.isNull){var R,x=A(S(m.options.radius,n.radius,100))*r[2]/200,w=A(S(m.options.innerRadius,n.innerRadius,60))*r[2]/200,j=Math.min(e.startAngleRad,e.endAngleRad),G=Math.max(e.startAngleRad,e.endAngleRad),_=m.graphic,M=e.startAngleRad+e.translate(m.y,void 0,void 0,void 0,!0),k=void 0,P=void 0,O=e.toColor(m.y,m),L=void 0;"none"===O&&(O=m.color||o.color||"none"),"none"!==O&&(m.color=O),M=v(M,j-h,G+h),!1===n.wrap&&(M=v(M,j,G)),R=Math.min(M,o.thresholdAngleRad),(L=Math.max(M,o.thresholdAngleRad))-R>2*Math.PI&&(L=R+2*Math.PI),m.shapeArgs=k={x:r[0],y:r[1],r:x,innerR:w,start:R,end:L,rounded:n.rounded},m.startR=x,_?(P=k.d,_.animate(y({fill:O},k)),P&&(k.d=P)):m.graphic=_=l.arc(k).attr({fill:O,"sweep-flag":0}).add(o.group),o.chart.styledMode||("square"!==n.linecap&&_.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),_.attr({stroke:n.borderColor||"none","stroke-width":n.borderWidth||0})),_&&_.addClass(m.getClassName(),!0)}}},o.prototype.animate=function(t){t||(this.startAngleRad=this.thresholdAngleRad,f.animate.call(this,t))},o.defaultOptions=m(c.defaultOptions,r),o}(c);return y(R.prototype,{drawLegendSymbol:t.drawRectangle}),o.registerSeriesType("solidgauge",R),R})),e(o,"masters/modules/solid-gauge.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(r=[e(219),e(653)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);