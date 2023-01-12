(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{533:function(t,e,o){var r,n,b;b=function(b){function q(b,t,e,p){b.hasOwnProperty(t)||(b[t]=p.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:b[t]}})))}q(b=b?b._modules:{},"Core/Axis/Color/ColorAxisComposition.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],(function(b,t){var e,u=b.parse,p=t.addEvent,o=t.extend,r=t.merge,n=t.pick,l=t.splat;return function(t){function b(){var a=this,t=this.options;this.colorAxis=[],t.colorAxis&&(t.colorAxis=l(t.colorAxis),t.colorAxis.forEach((function(t,e){t.index=e,new x(a,t)})))}function e(a){var t,e,o=this,r=function(t){-1!==(t=a.allItems.indexOf(t))&&(o.destroyItem(a.allItems[t]),a.allItems.splice(t,1))},n=[];for((this.chart.colorAxis||[]).forEach((function(a){(t=a.options)&&t.showInLegend&&(t.dataClasses&&t.visible?n=n.concat(a.getDataClassLegendSymbols()):t.visible&&n.push(a),a.series.forEach((function(a){a.options.showInLegend&&!t.dataClasses||("point"===a.options.legendType?a.points.forEach((function(a){r(a)})):r(a))})))})),e=n.length;e--;)a.allItems.unshift(n[e])}function h(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}function c(){var a=this.chart.colorAxis;a&&a.forEach((function(a,t,e){a.update({},e)}))}function d(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function f(){var a=this.axisTypes;a?-1===a.indexOf("colorAxis")&&a.push("colorAxis"):this.axisTypes=["colorAxis"]}function y(a){var t=this,e=a?"show":"hide";t.visible=t.options.visible=!!a,["graphic","dataLabel"].forEach((function(a){t[a]&&t[a][e]()})),this.series.buildKDTree()}function g(){var a=this,t=this.options.nullColor,e=this.colorAxis,o=this.colorKey;(this.data.length?this.data:this.points).forEach((function(r){var n=r.getNestedProperty(o);(n=r.options.color||(r.isNull||null===r.value?t:e&&void 0!==n?e.toColor(n,r):r.color||a.color))&&r.color!==n&&(r.color=n,"point"===a.options.legendType&&r.legendItem&&a.chart.legend.colorizeItem(r,r.visible))}))}function m(){this.elem.attr("fill",u(this.start).tweenTo(u(this.end),this.pos),void 0,!0)}function a(){this.elem.attr("stroke",u(this.start).tweenTo(u(this.end),this.pos),void 0,!0)}var x,v=[];t.compose=function(t,l,C,A,w){x||(x=t),-1===v.indexOf(l)&&(v.push(l),(t=l.prototype).collectionsWithUpdate.push("colorAxis"),t.collectionsWithInit.colorAxis=[t.addColorAxis],p(l,"afterGetAxes",b),function(a){var t=a.prototype.createAxis;a.prototype.createAxis=function(a,e){if("colorAxis"!==a)return t.apply(this,arguments);var o=new x(this,r(e.axis,{index:this[a].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(a){a.series=[]})),this.series.forEach((function(a){a.bindAxes(),a.isDirtyData=!0})),n(e.redraw,!0)&&this.redraw(e.animation),o}}(l)),-1===v.indexOf(C)&&(v.push(C),(l=C.prototype).fillSetter=m,l.strokeSetter=a),-1===v.indexOf(A)&&(v.push(A),p(A,"afterGetAllItems",e),p(A,"afterColorizeItem",h),p(A,"afterUpdate",c)),-1===v.indexOf(w)&&(v.push(w),o(w.prototype,{optionalAxis:"colorAxis",translateColors:g}),o(w.prototype.pointClass.prototype,{setVisible:y}),p(w,"afterTranslate",d),p(w,"bindAxes",f))},t.pointSetVisible=y}(e||(e={})),e})),q(b,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),q(b,"Core/Axis/Color/ColorAxis.js",[b["Core/Axis/Axis.js"],b["Core/Color/Color.js"],b["Core/Axis/Color/ColorAxisComposition.js"],b["Core/Axis/Color/ColorAxisDefaults.js"],b["Core/Globals.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t,q,p,e,o,r,n){var l=this&&this.__extends||function(){var t=function(g,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)a.hasOwnProperty(e)&&(t[e]=a[e])})(g,e)};return function(g,e){function o(){this.constructor=g}t(g,e),g.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),h=t.parse,c=e.noop,u=r.series,d=n.extend,f=n.isNumber,y=n.merge,m=n.pick;return t=function(b){function g(t,e){var a=b.call(this,t,e)||this;return a.beforePadding=!1,a.chart=void 0,a.coll="colorAxis",a.dataClasses=void 0,a.legendItem=void 0,a.legendItems=void 0,a.name="",a.options=void 0,a.stops=void 0,a.visible=!0,a.init(t,e),a}return l(g,b),g.compose=function(t,e,a,o){q.compose(g,t,e,a,o)},g.prototype.init=function(t,e){var a=t.options.legend||{},o=e.layout?"vertical"!==e.layout:"vertical"!==a.layout,r=e.visible;a=y(g.defaultColorAxisOptions,e,{showEmpty:!1,title:null,visible:a.enabled&&!1!==r}),this.coll="colorAxis",this.side=e.side||o?2:1,this.reversed=e.reversed||!o,this.opposite=!o,b.prototype.init.call(this,t,a),this.userOptions.visible=r,e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=o,this.zoomEnabled=!1},g.prototype.initDataClasses=function(t){var e,o=this.chart,a=this.options,r=t.dataClasses.length,b=0,n=o.options.chart.colorCount;this.dataClasses=e=[],this.legendItems=[],(t.dataClasses||[]).forEach((function(t,g){t=y(t),e.push(t),!o.styledMode&&t.color||("category"===a.dataClassColor?(o.styledMode||(g=o.options.colors,n=g.length,t.color=g[b]),t.colorIndex=b,++b===n&&(b=0)):t.color=h(a.minColor).tweenTo(h(a.maxColor),2>r?.5:g/(r-1)))}))},g.prototype.hasData=function(){return!!(this.tickPositions||[]).length},g.prototype.setTickPositions=function(){if(!this.dataClasses)return b.prototype.setTickPositions.call(this)},g.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(t){t.color=h(t[1])}))},g.prototype.setOptions=function(t){b.prototype.setOptions.call(this,t),this.options.crosshair=this.options.marker},g.prototype.setAxisSize=function(){var t,e,o=this.legendSymbol,r=this.chart,a=r.options.legend||{};o?(this.left=a=o.attr("x"),this.top=t=o.attr("y"),this.width=e=o.attr("width"),this.height=o=o.attr("height"),this.right=r.chartWidth-a-e,this.bottom=r.chartHeight-t-o,this.len=this.horiz?e:o,this.pos=this.horiz?a:t):this.len=(this.horiz?a.symbolWidth:a.symbolHeight)||g.defaultLegendLength},g.prototype.normalizedValue=function(t){return this.logarithmic&&(t=this.logarithmic.log2lin(t)),1-(this.max-t)/(this.max-this.min||1)},g.prototype.toColor=function(t,e){var o,a=this.dataClasses,r=this.stops;if(a)for(o=a.length;o--;){var b=a[o],n=b.from;if(r=b.to,(void 0===n||t>=n)&&(void 0===r||t<=r)){var g=b.color;e&&(e.dataClass=o,e.colorIndex=b.colorIndex);break}}else{for(t=this.normalizedValue(t),o=r.length;o--&&!(t>r[o][0]););n=r[o]||r[o+1],t=1-((r=r[o+1]||n)[0]-t)/(r[0]-n[0]||1),g=n.color.tweenTo(r.color,t)}return g},g.prototype.getOffset=function(){var t=this.legendGroup,e=this.chart.axisOffset[this.side];if(t){this.axisParent=t,b.prototype.getOffset.call(this);var a=this.chart.legend;a.allItems.forEach((function(t){t instanceof g&&t.drawLegendSymbol(a,t)})),a.render(),this.chart.getMargins(!0),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=e}},g.prototype.setLegendColor=function(){var t=this.reversed,e=t?1:0;t=t?0:1,e=this.horiz?[e,0,t,0]:[0,t,0,e],this.legendColor={linearGradient:{x1:e[0],y1:e[1],x2:e[2],y2:e[3]},stops:this.stops}},g.prototype.drawLegendSymbol=function(t,e){var a=t.padding,o=t.options,r=this.horiz,n=m(o.symbolWidth,r?g.defaultLegendLength:12),b=m(o.symbolHeight,r?12:g.defaultLegendLength),l=m(o.labelPadding,r?16:30);o=m(o.itemDistance,10),this.setLegendColor(),e.legendSymbol||(e.legendSymbol=this.chart.renderer.rect(0,t.baseline-11,n,b).attr({zIndex:1}).add(e.legendGroup)),this.legendItemWidth=n+a+(r?o:this.options.labels.x+this.maxLabelLength),this.legendItemHeight=b+a+(r?l:0)},g.prototype.setState=function(t){this.series.forEach((function(e){e.setState(t)}))},g.prototype.setVisible=function(){},g.prototype.getSeriesExtremes=function(){var a,t=this.series,e=t.length;for(this.dataMin=1/0,this.dataMax=-1/0;e--;){var o=t[e],r=o.colorKey=m(o.options.colorKey,o.colorKey,o.pointValKey,o.zoneAxis,"y"),n=o.pointArrayMap,b=o[r+"Min"]&&o[r+"Max"];if(o[r+"Data"])var g=o[r+"Data"];else if(n){g=[],n=n.indexOf(r);var l=o.yData;if(0<=n&&l)for(a=0;a<l.length;a++)g.push(m(l[a][n],l[a]))}else g=o.yData;b?(o.minColorValue=o[r+"Min"],o.maxColorValue=o[r+"Max"]):(g=u.prototype.getExtremes.call(o,g),o.minColorValue=g.dataMin,o.maxColorValue=g.dataMax),void 0!==o.minColorValue&&(this.dataMin=Math.min(this.dataMin,o.minColorValue),this.dataMax=Math.max(this.dataMax,o.maxColorValue)),b||u.prototype.applyExtremes.call(o)}},g.prototype.drawCrosshair=function(t,e){var a=e&&e.plotX,o=e&&e.plotY,r=this.pos,g=this.len;if(e){var n=this.toPixels(e.getNestedProperty(e.series.colorKey));n<r?n=r-2:n>r+g&&(n=r+g+2),e.plotX=n,e.plotY=this.len-n,b.prototype.drawCrosshair.call(this,t,e),e.plotX=a,e.plotY=o,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color}))}},g.prototype.getPlotLinePath=function(t){var e=this.left,a=t.translatedValue,o=this.top;return f(a)?this.horiz?[["M",a-4,o-6],["L",a+4,o-6],["L",a,o],["Z"]]:[["M",e,a],["L",e-6,a+6],["L",e-6,a-6],["Z"]]:b.prototype.getPlotLinePath.call(this,t)},g.prototype.update=function(t,e){var a=this.chart.legend;this.series.forEach((function(a){a.isDirtyData=!0})),(t.dataClasses&&a.allItems||this.dataClasses)&&this.destroyItems(),b.prototype.update.call(this,t,e),this.legendItem&&(this.setLegendColor(),a.colorizeItem(this,!0))},g.prototype.destroyItems=function(){var t=this.chart;this.legendItem?t.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach((function(e){t.legend.destroyItem(e)})),t.isDirtyLegend=!0},g.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),b.prototype.destroy.apply(this,[].slice.call(arguments))},g.prototype.remove=function(t){this.destroyItems(),b.prototype.remove.call(this,t)},g.prototype.getDataClassLegendSymbols=function(){var g,t=this,e=t.chart,a=t.legendItems,r=e.options.legend,n=r.valueDecimals,b=r.valueSuffix||"";return a.length||t.dataClasses.forEach((function(r,l){var h=r.from,f=r.to,y=e.numberFormatter,m=!0;g="",void 0===h?g="< ":void 0===f&&(g="> "),void 0!==h&&(g+=y(h,n)+b),void 0!==h&&void 0!==f&&(g+=" - "),void 0!==f&&(g+=y(f,n)+b),a.push(d({chart:e,name:g,options:{},drawLegendSymbol:o.drawRectangle,visible:!0,setState:c,isDataClass:!0,setVisible:function(){this.visible=m=t.visible=!m,t.series.forEach((function(a){a.points.forEach((function(a){a.dataClass===l&&a.setVisible(m)}))})),e.legend.colorizeItem(this,m)}},r))})),a},g.defaultColorAxisOptions=p,g.defaultLegendLength=200,g.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],g}(b),Array.prototype.push.apply(b.keepProps,t.keepProps),t})),q(b,"Series/ColorMapComposition.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t){var e,u=b.seriesTypes.column.prototype,p=t.addEvent,q=t.defined;return function(b){function t(t){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:t&&"hover"===t.state?1:0})}var e=[];b.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&1/0!==this.value&&-1/0!==this.value&&(void 0===this.value||!isNaN(this.value))}},b.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(t){var b={};return!q(t.color)||t.state&&"normal"!==t.state||(b[this.colorProp||"fill"]=t.color),b},pointAttribs:u.pointAttribs},b.compose=function(o){var b=o.prototype.pointClass;return-1===e.indexOf(b)&&(e.push(b),p(b,"afterSetState",t)),o}}(e||(e={})),e})),q(b,"Series/Heatmap/HeatmapPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t){var u=this&&this.__extends||function(){var b=function(t,e){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,t){b.__proto__=t}||function(b,t){for(var e in t)t.hasOwnProperty(e)&&(b[e]=t[e])},b(t,e)};return function(t,e){function o(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),p=t.clamp,q=t.defined,e=t.extend,o=t.pick;return b=function(b){function t(){var t=null!==b&&b.apply(this,arguments)||this;return t.options=void 0,t.series=void 0,t.value=void 0,t.x=void 0,t.y=void 0,t}return u(t,b),t.prototype.applyOptions=function(t,e){return(t=b.prototype.applyOptions.call(this,t,e)).formatPrefix=t.isNull||null===t.value?"null":"point",t},t.prototype.getCellAttributes=function(){var b=this.series,t=b.options,u=(t.colsize||1)/2,e=(t.rowsize||1)/2,r=b.xAxis,n=b.yAxis,l=this.options.marker||b.options.marker;b=b.pointPlacementToXValue();var h=o(this.pointPadding,t.pointPadding,0),g={x1:p(Math.round(r.len-r.translate(this.x-u,!1,!0,!1,!0,-b)),-r.len,2*r.len),x2:p(Math.round(r.len-r.translate(this.x+u,!1,!0,!1,!0,-b)),-r.len,2*r.len),y1:p(Math.round(n.translate(this.y-e,!1,!0,!1,!0)),-n.len,2*n.len),y2:p(Math.round(n.translate(this.y+e,!1,!0,!1,!0)),-n.len,2*n.len)};return[["width","x"],["height","y"]].forEach((function(b){var t=b[0],a=(b=b[1])+"1",e=b+"2",o=Math.abs(g[a]-g[e]),r=l&&l.lineWidth||0,n=Math.abs(g[a]+g[e])/2;t=l&&l[t],q(t)&&t<o&&(t=t/2+r/2,g[a]=n-t,g[e]=n+t),h&&("y"===b&&(a=e,e=b+"1"),g[a]+=h,g[e]-=h)})),g},t.prototype.haloPath=function(b){if(!b)return[];var t=this.shapeArgs;return["M",t.x-b,t.y-b,"L",t.x-b,t.y+t.height+b,t.x+t.width+b,t.y+t.height+b,t.x+t.width+b,t.y-b,"Z"]},t.prototype.isValid=function(){return 1/0!==this.value&&-1/0!==this.value},t}(b.seriesTypes.scatter.prototype.pointClass),e(b.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1}),b})),q(b,"Series/Heatmap/HeatmapSeries.js",[b["Core/Color/Color.js"],b["Series/ColorMapComposition.js"],b["Series/Heatmap/HeatmapPoint.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Renderer/SVG/SVGRenderer.js"],b["Core/Utilities.js"]],(function(b,t,q,p,e,o,r){var u=this&&this.__extends||function(){var b=function(t,a){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},b(t,a)};return function(t,a){function e(){this.constructor=t}b(t,a),t.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}}(),n=e.series,l=e.seriesTypes,h=l.column,c=l.scatter,d=o.prototype.symbols,f=r.extend,y=r.fireEvent,m=r.isNumber,x=r.merge,g=r.pick;return o=function(t){function e(){var a=null!==t&&t.apply(this,arguments)||this;return a.colorAxis=void 0,a.data=void 0,a.options=void 0,a.points=void 0,a.valueMax=NaN,a.valueMin=NaN,a}return u(e,t),e.prototype.drawPoints=function(){var a=this;((this.options.marker||{}).enabled||this._hasPointMarkers)&&(n.prototype.drawPoints.call(this),this.points.forEach((function(t){t.graphic&&(t.graphic[a.chart.styledMode?"css":"animate"](a.colorAttribs(t)),null===t.value&&t.graphic.addClass("highcharts-null-point"))})))},e.prototype.getExtremes=function(){var a=n.prototype.getExtremes.call(this,this.valueData),t=a.dataMin;return a=a.dataMax,m(t)&&(this.valueMin=t),m(a)&&(this.valueMax=a),n.prototype.getExtremes.call(this)},e.prototype.getValidPoints=function(a,t){return n.prototype.getValidPoints.call(this,a,t,!0)},e.prototype.hasData=function(){return!!this.processedXData.length},e.prototype.init=function(){n.prototype.init.apply(this,arguments);var a=this.options;a.pointRange=g(a.pointRange,a.colsize||1),this.yAxis.axisPointRange=a.rowsize||1,d.ellipse=d.circle,a.marker&&(a.marker.r=a.borderRadius)},e.prototype.markerAttribs=function(a,t){var b=a.marker||{},e=this.options.marker||{},o=a.shapeArgs||{},r={};if(a.hasImage)return{x:a.plotX,y:a.plotY};if(t){var g=e.states[t]||{},n=b.states&&b.states[t]||{};[["width","x"],["height","y"]].forEach((function(a){r[a[0]]=(n[a[0]]||g[a[0]]||o[a[0]])+(n[a[0]+"Plus"]||g[a[0]+"Plus"]||0),r[a[1]]=o[a[1]]+(o[a[0]]-r[a[0]])/2}))}return t?r:o},e.prototype.pointAttribs=function(a,t){var e=n.prototype.pointAttribs.call(this,a,t),o=this.options||{},r=this.chart.options.plotOptions||{},g=r.series||{},l=r.heatmap||{};return r=a&&a.options.borderColor||o.borderColor||l.borderColor||g.borderColor,g=a&&a.options.borderWidth||o.borderWidth||l.borderWidth||g.borderWidth||e["stroke-width"],e.stroke=a&&a.marker&&a.marker.lineColor||o.marker&&o.marker.lineColor||r||this.color,e["stroke-width"]=g,t&&(t=(a=x(o.states[t],o.marker&&o.marker.states[t],a&&a.options.states&&a.options.states[t]||{})).brightness,e.fill=a.color||b.parse(e.fill).brighten(t||0).get(),e.stroke=a.lineColor),e},e.prototype.setClip=function(a){var b=this.chart;n.prototype.setClip.apply(this,arguments),(!1!==this.options.clip||a)&&this.markerGroup.clip((a||this.clipBox)&&this.sharedClipKey?b.sharedClips[this.sharedClipKey]:b.clipRect)},e.prototype.translate=function(){var a=this.options,b=a.marker&&a.marker.symbol||"rect",t=d[b]?b:"rect",e=-1!==["circle","square"].indexOf(t);this.generatePoints(),this.points.forEach((function(o){var r=o.getCellAttributes(),g={};g.x=Math.min(r.x1,r.x2),g.y=Math.min(r.y1,r.y2),g.width=Math.max(Math.abs(r.x2-r.x1),0),g.height=Math.max(Math.abs(r.y2-r.y1),0);var n=o.hasImage=0===(o.marker&&o.marker.symbol||b||"").indexOf("url");if(e){var l=Math.abs(g.width-g.height);g.x=Math.min(r.x1,r.x2)+(g.width<g.height?0:l/2),g.y=Math.min(r.y1,r.y2)+(g.width<g.height?l/2:0),g.width=g.height=Math.min(g.width,g.height)}l={plotX:(r.x1+r.x2)/2,plotY:(r.y1+r.y2)/2,clientX:(r.x1+r.x2)/2,shapeType:"path",shapeArgs:x(!0,g,{d:d[t](g.x,g.y,g.width,g.height,{r:a.borderRadius})})},n&&(o.marker={width:g.width,height:g.height}),f(o,l)})),y(this,"afterTranslate")},e.defaultOptions=x(c.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){var a=this.series.chart.numberFormatter,b=this.point.value;return m(b)?a(b,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}}),e}(c),f(o.prototype,{axisTypes:t.seriesMembers.axisTypes,colorKey:t.seriesMembers.colorKey,directTouch:!0,getExtremesFromAll:!0,parallelArrays:t.seriesMembers.parallelArrays,pointArrayMap:["y","value"],pointClass:q,trackerGroups:t.seriesMembers.trackerGroups,alignDataLabel:h.prototype.alignDataLabel,colorAttribs:t.seriesMembers.colorAttribs,drawLegendSymbol:p.drawRectangle,getSymbol:n.prototype.getSymbol}),t.compose(o),e.registerSeriesType("heatmap",o),o})),q(b,"masters/modules/heatmap.src.js",[b["Core/Globals.js"],b["Core/Axis/Color/ColorAxis.js"]],(function(b,t){b.ColorAxis=t,t.compose(b.Chart,b.Fx,b.Legend,b.Series)}))},t.exports?(b.default=b,t.exports=b):(r=[o(222)],void 0===(n=function(q){return b(q),b.Highcharts=q,b}.apply(e,r))||(t.exports=n))}}]);