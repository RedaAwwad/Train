/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{527:function(t,e,o){var r,n,l;l=function(t){"use strict";var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}o(e,"Core/Axis/Color/ColorAxisComposition.js",[e["Core/Color/Color.js"],e["Core/Utilities.js"]],(function(t,e){var o,r=t.parse,n=e.addEvent,l=e.extend,h=e.merge,c=e.pick,d=e.splat;return function(t){var e,o=[];function f(){var t=this,o=this.options;this.colorAxis=[],o.colorAxis&&(o.colorAxis=d(o.colorAxis),o.colorAxis.forEach((function(o,i){o.index=i,new e(t,o)})))}function y(t){var e,i,o=this,r=this.chart.colorAxis||[],n=function(e){var i=t.allItems.indexOf(e);-1!==i&&(o.destroyItem(t.allItems[i]),t.allItems.splice(i,1))},l=[];for(r.forEach((function(t){(e=t.options)&&e.showInLegend&&(e.dataClasses&&e.visible?l=l.concat(t.getDataClassLegendSymbols()):e.visible&&l.push(t),t.series.forEach((function(t){t.options.showInLegend&&!e.dataClasses||("point"===t.options.legendType?t.points.forEach((function(t){n(t)})):n(t))})))})),i=l.length;i--;)t.allItems.unshift(l[i])}function m(t){t.visible&&t.item.legendColor&&t.item.legendSymbol.attr({fill:t.item.legendColor})}function x(){var t=this.chart.colorAxis;t&&t.forEach((function(t){t.update({},arguments[2])}))}function v(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function C(){var t=this.axisTypes;t?-1===t.indexOf("colorAxis")&&t.push("colorAxis"):this.axisTypes=["colorAxis"]}function A(t){var e=this,o=t?"show":"hide";e.visible=e.options.visible=Boolean(t),["graphic","dataLabel"].forEach((function(t){e[t]&&e[t][o]()})),this.series.buildKDTree()}function w(){var t=this,e=this.data.length?this.data:this.points,o=this.options.nullColor,r=this.colorAxis,n=this.colorKey;e.forEach((function(e){var l=e.getNestedProperty(n),h=e.options.color||(e.isNull||null===e.value?o:r&&void 0!==l?r.toColor(l,e):e.color||t.color);h&&e.color!==h&&(e.color=h,"point"===t.options.legendType&&e.legendItem&&t.chart.legend.colorizeItem(e,e.visible))}))}function M(){this.elem.attr("fill",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}function k(){this.elem.attr("stroke",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}t.compose=function(t,r,d,L,S){if(e||(e=t),-1===o.indexOf(r)){o.push(r);var I=r.prototype;I.collectionsWithUpdate.push("colorAxis"),I.collectionsWithInit.colorAxis=[I.addColorAxis],n(r,"afterGetAxes",f),function(t){var o=t.prototype.createAxis;t.prototype.createAxis=function(t,r){if("colorAxis"!==t)return o.apply(this,arguments);var n=new e(this,h(r.axis,{index:this[t].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(t){t.series=[]})),this.series.forEach((function(t){t.bindAxes(),t.isDirtyData=!0})),c(r.redraw,!0)&&this.redraw(r.animation),n}}(r)}if(-1===o.indexOf(d)){o.push(d);var O=d.prototype;O.fillSetter=M,O.strokeSetter=k}-1===o.indexOf(L)&&(o.push(L),n(L,"afterGetAllItems",y),n(L,"afterColorizeItem",m),n(L,"afterUpdate",x)),-1===o.indexOf(S)&&(o.push(S),l(S.prototype,{optionalAxis:"colorAxis",translateColors:w}),l(S.prototype.pointClass.prototype,{setVisible:A}),n(S,"afterTranslate",v),n(S,"bindAxes",C))},t.pointSetVisible=A}(o||(o={})),o})),o(e,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),o(e,"Core/Axis/Color/ColorAxis.js",[e["Core/Axis/Axis.js"],e["Core/Color/Color.js"],e["Core/Axis/Color/ColorAxisComposition.js"],e["Core/Axis/Color/ColorAxisDefaults.js"],e["Core/Globals.js"],e["Core/Legend/LegendSymbol.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,o,r,n,l,h,c){var d,f=this&&this.__extends||(d=function(t,b){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},d(t,b)},function(t,b){function e(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),y=e.parse,m=n.noop,x=h.series,v=c.extend,C=c.isNumber,A=c.merge,w=c.pick,M=function(t){function e(e,o){var r=t.call(this,e,o)||this;return r.beforePadding=!1,r.chart=void 0,r.coll="colorAxis",r.dataClasses=void 0,r.legendItem=void 0,r.legendItems=void 0,r.name="",r.options=void 0,r.stops=void 0,r.visible=!0,r.init(e,o),r}return f(e,t),e.compose=function(t,r,n,l){o.compose(e,t,r,n,l)},e.prototype.init=function(o,r){var n=this,legend=o.options.legend||{},l=r.layout?"vertical"!==r.layout:"vertical"!==legend.layout,h=r.visible,c=A(e.defaultColorAxisOptions,r,{showEmpty:!1,title:null,visible:legend.enabled&&!1!==h});n.coll="colorAxis",n.side=r.side||l?2:1,n.reversed=r.reversed||!l,n.opposite=!l,t.prototype.init.call(this,o,c),n.userOptions.visible=h,r.dataClasses&&n.initDataClasses(r),n.initStops(),n.horiz=l,n.zoomEnabled=!1},e.prototype.initDataClasses=function(t){var e,o=this,r=o.chart,n=o.options,l=t.dataClasses.length,h=0,c=r.options.chart.colorCount;o.dataClasses=e=[],o.legendItems=[],(t.dataClasses||[]).forEach((function(t,i){var o;t=A(t),e.push(t),!r.styledMode&&t.color||("category"===n.dataClassColor?(r.styledMode||(o=r.options.colors,c=o.length,t.color=o[h]),t.colorIndex=h,++h===c&&(h=0)):t.color=y(n.minColor).tweenTo(y(n.maxColor),l<2?.5:i/(l-1)))}))},e.prototype.hasData=function(){return!!(this.tickPositions||[]).length},e.prototype.setTickPositions=function(){if(!this.dataClasses)return t.prototype.setTickPositions.call(this)},e.prototype.initStops=function(){var t=this;t.stops=t.options.stops||[[0,t.options.minColor],[1,t.options.maxColor]],t.stops.forEach((function(t){t.color=y(t[1])}))},e.prototype.setOptions=function(e){t.prototype.setOptions.call(this,e),this.options.crosshair=this.options.marker},e.prototype.setAxisSize=function(){var t,o,r,n,symbol=this.legendSymbol,l=this.chart,h=l.options.legend||{};symbol?(this.left=t=symbol.attr("x"),this.top=o=symbol.attr("y"),this.width=r=symbol.attr("width"),this.height=n=symbol.attr("height"),this.right=l.chartWidth-t-r,this.bottom=l.chartHeight-o-n,this.len=this.horiz?r:n,this.pos=this.horiz?t:o):this.len=(this.horiz?h.symbolWidth:h.symbolHeight)||e.defaultLegendLength},e.prototype.normalizedValue=function(t){var e=this;return e.logarithmic&&(t=e.logarithmic.log2lin(t)),1-(e.max-t)/(e.max-e.min||1)},e.prototype.toColor=function(t,e){var o,r,n,l,h,i,c=this,d=c.dataClasses,f=c.stops;if(d){for(i=d.length;i--;)if(r=(h=d[i]).from,n=h.to,(void 0===r||t>=r)&&(void 0===n||t<=n)){l=h.color,e&&(e.dataClass=i,e.colorIndex=h.colorIndex);break}}else{for(o=c.normalizedValue(t),i=f.length;i--&&!(o>f[i][0]););r=f[i]||f[i+1],o=1-((n=f[i+1]||r)[0]-o)/(n[0]-r[0]||1),l=r.color.tweenTo(n.color,o)}return l},e.prototype.getOffset=function(){var o=this,r=o.legendGroup,n=o.chart.axisOffset[o.side];if(r){o.axisParent=r,t.prototype.getOffset.call(this);var l=this.chart.legend;l.allItems.forEach((function(t){t instanceof e&&t.drawLegendSymbol(l,t)})),l.render(),this.chart.getMargins(!0),o.added||(o.added=!0,o.labelLeft=0,o.labelRight=o.width),o.chart.axisOffset[o.side]=n}},e.prototype.setLegendColor=function(){var t=this,e=t.horiz,o=t.reversed,r=o?1:0,n=o?0:1,l=e?[r,0,n,0]:[0,n,0,r];t.legendColor={linearGradient:{x1:l[0],y1:l[1],x2:l[2],y2:l[3]},stops:t.stops}},e.prototype.drawLegendSymbol=function(legend,t){var o=this,r=legend.padding,n=legend.options,l=o.horiz,h=w(n.symbolWidth,l?e.defaultLegendLength:12),c=w(n.symbolHeight,l?12:e.defaultLegendLength),d=w(n.labelPadding,l?16:30),f=w(n.itemDistance,10);this.setLegendColor(),t.legendSymbol||(t.legendSymbol=this.chart.renderer.rect(0,legend.baseline-11,h,c).attr({zIndex:1}).add(t.legendGroup)),o.legendItemWidth=h+r+(l?f:this.options.labels.x+this.maxLabelLength),o.legendItemHeight=c+r+(l?d:0)},e.prototype.setState=function(t){this.series.forEach((function(e){e.setState(t)}))},e.prototype.setVisible=function(){},e.prototype.getSeriesExtremes=function(){var t,e,o,r,n,l,h,c,d=this.series,i=d.length;for(this.dataMin=1/0,this.dataMax=-1/0;i--;){if(e=(l=d[i]).colorKey=w(l.options.colorKey,l.colorKey,l.pointValKey,l.zoneAxis,"y"),r=l.pointArrayMap,n=l[e+"Min"]&&l[e+"Max"],l[e+"Data"])t=l[e+"Data"];else if(r){if(t=[],o=r.indexOf(e),h=l.yData,o>=0&&h)for(c=0;c<h.length;c++)t.push(w(h[c][o],h[c]))}else t=l.yData;if(n)l.minColorValue=l[e+"Min"],l.maxColorValue=l[e+"Max"];else{var f=x.prototype.getExtremes.call(l,t);l.minColorValue=f.dataMin,l.maxColorValue=f.dataMax}void 0!==l.minColorValue&&(this.dataMin=Math.min(this.dataMin,l.minColorValue),this.dataMax=Math.max(this.dataMax,l.maxColorValue)),n||x.prototype.applyExtremes.call(l)}},e.prototype.drawCrosshair=function(e,o){var r,n=this,l=o&&o.plotX,h=o&&o.plotY,c=n.pos,d=n.len;o&&((r=n.toPixels(o.getNestedProperty(o.series.colorKey)))<c?r=c-2:r>c+d&&(r=c+d+2),o.plotX=r,o.plotY=n.len-r,t.prototype.drawCrosshair.call(this,e,o),o.plotX=l,o.plotY=h,n.cross&&!n.cross.addedToColorAxis&&n.legendGroup&&(n.cross.addClass("highcharts-coloraxis-marker").add(n.legendGroup),n.cross.addedToColorAxis=!0,n.chart.styledMode||"object"!=typeof n.crosshair||n.cross.attr({fill:n.crosshair.color})))},e.prototype.getPlotLinePath=function(e){var o=this,r=o.left,n=e.translatedValue,l=o.top;return C(n)?o.horiz?[["M",n-4,l-6],["L",n+4,l-6],["L",n,l],["Z"]]:[["M",r,n],["L",r-6,n+6],["L",r-6,n-6],["Z"]]:t.prototype.getPlotLinePath.call(this,e)},e.prototype.update=function(e,o){var r=this,legend=r.chart.legend;this.series.forEach((function(t){t.isDirtyData=!0})),(e.dataClasses&&legend.allItems||r.dataClasses)&&r.destroyItems(),t.prototype.update.call(this,e,o),r.legendItem&&(r.setLegendColor(),legend.colorizeItem(this,!0))},e.prototype.destroyItems=function(){var t=this,e=t.chart;t.legendItem?e.legend.destroyItem(t):t.legendItems&&t.legendItems.forEach((function(t){e.legend.destroyItem(t)})),e.isDirtyLegend=!0},e.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),t.prototype.destroy.apply(this,[].slice.call(arguments))},e.prototype.remove=function(e){this.destroyItems(),t.prototype.remove.call(this,e)},e.prototype.getDataClassLegendSymbols=function(){var t,e=this,o=e.chart,r=e.legendItems,n=o.options.legend,h=n.valueDecimals,c=n.valueSuffix||"";return r.length||e.dataClasses.forEach((function(n,i){var d=n.from,f=n.to,y=o.numberFormatter,x=!0;t="",void 0===d?t="< ":void 0===f&&(t="> "),void 0!==d&&(t+=y(d,h)+c),void 0!==d&&void 0!==f&&(t+=" - "),void 0!==f&&(t+=y(f,h)+c),r.push(v({chart:o,name:t,options:{},drawLegendSymbol:l.drawRectangle,visible:!0,setState:m,isDataClass:!0,setVisible:function(){this.visible=x=e.visible=!x,e.series.forEach((function(t){t.points.forEach((function(t){t.dataClass===i&&t.setVisible(x)}))})),o.legend.colorizeItem(this,x)}},n))})),r},e.defaultColorAxisOptions=r,e.defaultLegendLength=200,e.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],e}(t);return Array.prototype.push.apply(t.keepProps,M.keepProps),M})),o(e,"Series/ColorMapComposition.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e){var o,r=t.seriesTypes.column.prototype,n=e.addEvent,l=e.defined;return function(t){var e=[];function o(t){var e=this;e.moveToTopOnHover&&e.graphic&&e.graphic.attr({zIndex:t&&"hover"===t.state?1:0})}t.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&this.value!==1/0&&this.value!==-1/0&&(void 0===this.value||!isNaN(this.value))}},t.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(t){var e={};return!l(t.color)||t.state&&"normal"!==t.state||(e[this.colorProp||"fill"]=t.color),e},pointAttribs:r.pointAttribs},t.compose=function(t){var r=t.prototype.pointClass;return-1===e.indexOf(r)&&(e.push(r),n(r,"afterSetState",o)),t}}(o||(o={})),o})),o(e,"Series/Heatmap/HeatmapPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e){var o,r=this&&this.__extends||(o=function(t,b){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},o(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),n=t.seriesTypes.scatter.prototype.pointClass,l=e.clamp,h=e.defined,c=e.extend,d=e.pick,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.options=void 0,e.series=void 0,e.value=void 0,e.x=void 0,e.y=void 0,e}return r(e,t),e.prototype.applyOptions=function(e,o){var r=t.prototype.applyOptions.call(this,e,o);return r.formatPrefix=r.isNull||null===r.value?"null":"point",r},e.prototype.getCellAttributes=function(){var t=this,e=t.series,o=e.options,r=(o.colsize||1)/2,n=(o.rowsize||1)/2,c=e.xAxis,f=e.yAxis,y=t.options.marker||e.options.marker,m=e.pointPlacementToXValue(),x=d(t.pointPadding,o.pointPadding,0),v={x1:l(Math.round(c.len-c.translate(t.x-r,!1,!0,!1,!0,-m)),-c.len,2*c.len),x2:l(Math.round(c.len-c.translate(t.x+r,!1,!0,!1,!0,-m)),-c.len,2*c.len),y1:l(Math.round(f.translate(t.y-n,!1,!0,!1,!0)),-f.len,2*f.len),y2:l(Math.round(f.translate(t.y+n,!1,!0,!1,!0)),-f.len,2*f.len)};return[["width","x"],["height","y"]].forEach((function(t){var e=t[0],o=t[1],r=o+"1",n=o+"2",l=Math.abs(v[r]-v[n]),c=y&&y.lineWidth||0,d=Math.abs(v[r]+v[n])/2,f=y&&y[e];if(h(f)&&f<l){var m=f/2+c/2;v[r]=d-m,v[n]=d+m}x&&("y"===o&&(r=n,n=o+"1"),v[r]+=x,v[n]-=x)})),v},e.prototype.haloPath=function(t){if(!t)return[];var rect=this.shapeArgs;return["M",rect.x-t,rect.y-t,"L",rect.x-t,rect.y+rect.height+t,rect.x+rect.width+t,rect.y+rect.height+t,rect.x+rect.width+t,rect.y-t,"Z"]},e.prototype.isValid=function(){return this.value!==1/0&&this.value!==-1/0},e}(n);return c(f.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1}),f})),o(e,"Series/Heatmap/HeatmapSeries.js",[e["Core/Color/Color.js"],e["Series/ColorMapComposition.js"],e["Series/Heatmap/HeatmapPoint.js"],e["Core/Legend/LegendSymbol.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],(function(t,e,o,r,n,l,h){var c,d=this&&this.__extends||(c=function(t,b){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},c(t,b)},function(t,b){function e(){this.constructor=t}c(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=n.series,y=n.seriesTypes,m=y.column,x=y.scatter,v=l.prototype.symbols,C=h.extend,A=h.fireEvent,w=h.isNumber,M=h.merge,k=h.pick,L=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.colorAxis=void 0,t.data=void 0,t.options=void 0,t.points=void 0,t.valueMax=NaN,t.valueMin=NaN,t}return d(o,e),o.prototype.drawPoints=function(){var t=this;((this.options.marker||{}).enabled||this._hasPointMarkers)&&(f.prototype.drawPoints.call(this),this.points.forEach((function(e){e.graphic&&(e.graphic[t.chart.styledMode?"css":"animate"](t.colorAttribs(e)),null===e.value&&e.graphic.addClass("highcharts-null-point"))})))},o.prototype.getExtremes=function(){var t=f.prototype.getExtremes.call(this,this.valueData),e=t.dataMin,o=t.dataMax;return w(e)&&(this.valueMin=e),w(o)&&(this.valueMax=o),f.prototype.getExtremes.call(this)},o.prototype.getValidPoints=function(t,e){return f.prototype.getValidPoints.call(this,t,e,!0)},o.prototype.hasData=function(){return!!this.processedXData.length},o.prototype.init=function(){var t;f.prototype.init.apply(this,arguments),(t=this.options).pointRange=k(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1,v.ellipse=v.circle,t.marker&&(t.marker.r=t.borderRadius)},o.prototype.markerAttribs=function(t,e){var o,r,n=t.marker||{},l=this.options.marker||{},h=t.shapeArgs||{},c=t.hasImage,d={};return c?{x:t.plotX,y:t.plotY}:(e&&(o=l.states[e]||{},r=n.states&&n.states[e]||{},[["width","x"],["height","y"]].forEach((function(t){d[t[0]]=(r[t[0]]||o[t[0]]||h[t[0]])+(r[t[0]+"Plus"]||o[t[0]+"Plus"]||0),d[t[1]]=h[t[1]]+(h[t[0]]-d[t[0]])/2}))),e?d:h)},o.prototype.pointAttribs=function(e,o){var r,n,l=this,h=f.prototype.pointAttribs.call(l,e,o),c=l.options||{},d=l.chart.options.plotOptions||{},y=d.series||{},m=d.heatmap||{},x=e&&e.options.borderColor||c.borderColor||m.borderColor||y.borderColor,v=e&&e.options.borderWidth||c.borderWidth||m.borderWidth||y.borderWidth||h["stroke-width"];return h.stroke=e&&e.marker&&e.marker.lineColor||c.marker&&c.marker.lineColor||x||this.color,h["stroke-width"]=v,o&&(n=(r=M(c.states[o],c.marker&&c.marker.states[o],e&&e.options.states&&e.options.states[o]||{})).brightness,h.fill=r.color||t.parse(h.fill).brighten(n||0).get(),h.stroke=r.lineColor),h},o.prototype.setClip=function(t){var e=this,o=e.chart;f.prototype.setClip.apply(e,arguments),(!1!==e.options.clip||t)&&e.markerGroup.clip((t||e.clipBox)&&e.sharedClipKey?o.sharedClips[e.sharedClipKey]:o.clipRect)},o.prototype.translate=function(){var t=this,e=t.options,symbol=e.marker&&e.marker.symbol||"rect",o=v[symbol]?symbol:"rect",r=-1!==["circle","square"].indexOf(o);t.generatePoints(),t.points.forEach((function(t){var n,l,h,c=t.getCellAttributes(),d={};d.x=Math.min(c.x1,c.x2),d.y=Math.min(c.y1,c.y2),d.width=Math.max(Math.abs(c.x2-c.x1),0),d.height=Math.max(Math.abs(c.y2-c.y1),0),h=t.hasImage=0===(t.marker&&t.marker.symbol||symbol||"").indexOf("url"),r&&(l=Math.abs(d.width-d.height),d.x=Math.min(c.x1,c.x2)+(d.width<d.height?0:l/2),d.y=Math.min(c.y1,c.y2)+(d.width<d.height?l/2:0),d.width=d.height=Math.min(d.width,d.height)),n={plotX:(c.x1+c.x2)/2,plotY:(c.y1+c.y2)/2,clientX:(c.x1+c.x2)/2,shapeType:"path",shapeArgs:M(!0,d,{d:v[o](d.x,d.y,d.width,d.height,{r:e.borderRadius})})},h&&(t.marker={width:d.width,height:d.height}),C(t,n)})),A(t,"afterTranslate")},o.defaultOptions=M(x.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){var t=this.series.chart.numberFormatter,e=this.point.value;return w(e)?t(e,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}}),o}(x);return C(L.prototype,{axisTypes:e.seriesMembers.axisTypes,colorKey:e.seriesMembers.colorKey,directTouch:!0,getExtremesFromAll:!0,parallelArrays:e.seriesMembers.parallelArrays,pointArrayMap:["y","value"],pointClass:o,trackerGroups:e.seriesMembers.trackerGroups,alignDataLabel:m.prototype.alignDataLabel,colorAttribs:e.seriesMembers.colorAttribs,drawLegendSymbol:r.drawRectangle,getSymbol:f.prototype.getSymbol}),e.compose(L),n.registerSeriesType("heatmap",L),L})),o(e,"masters/modules/heatmap.src.js",[e["Core/Globals.js"],e["Core/Axis/Color/ColorAxis.js"]],(function(t,e){var o=t;o.ColorAxis=e,e.compose(o.Chart,o.Fx,o.Legend,o.Series)}))},t.exports?(l.default=l,t.exports=l):(r=[o(217)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(e,r))||(t.exports=n))}}]);