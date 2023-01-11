(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{631:function(t,e,o){var n,r,a;a=function(a){function t(a,t,p,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,p),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}t(a=a?a._modules:{},"Series/Timeline/TimelinePoint.js",[a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,p){var e=this&&this.__extends||function(){var a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var e in a)a.hasOwnProperty(e)&&(t[e]=a[e])},a(t,e)};return function(t,e){function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),o=t.seriesTypes.pie.prototype.pointClass,n=p.defined,r=p.isNumber,l=p.merge,h=p.objectEach,q=p.pick;return function(t){function c(){var a=null!==t&&t.apply(this,arguments)||this;return a.options=void 0,a.series=void 0,a}return e(c,t),c.prototype.alignConnector=function(){var a=this.series,t=this.connector,g=this.dataLabel,e=this.dataLabel.options=l(a.options.dataLabels,this.options.dataLabels),o=this.series.chart,b=t.getBBox(),r=b.x+g.translateX;b=b.y+g.translateY,o.inverted?b-=g.options.connectorWidth/2:r+=g.options.connectorWidth/2,t[(o=o.isInsidePlot(r,b))?"animate":"attr"]({d:this.getConnectorPath()}),a.chart.styledMode||t.attr({stroke:e.connectorColor||this.color,"stroke-width":e.connectorWidth,opacity:g[n(g.newOpacity)?"newOpacity":"opacity"]})},c.prototype.drawConnector=function(){var a=this.series;this.connector||(this.connector=a.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel)),this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()},c.prototype.getConnectorPath=function(){var a=this.series.chart,t=this.series.xAxis.len,g=a.inverted,e=g?"x2":"y2",o=this.dataLabel,b=o.targetPosition,n={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:r(b.y)?b.y:o.y},l=(o.alignAttr||o)[e[0]]<this.series.yAxis.len/2;return g&&(n={x1:this.plotY,y1:t-this.plotX,x2:b.x||o.x,y2:t-this.plotX}),l&&(n[e]+=o[g?"width":"height"]),h(n,(function(b,a){n[a]-=(o.alignAttr||o)[a[0]]})),a.renderer.crispLine([["M",n.x1,n.y1],["L",n.x2,n.y2]],o.options.connectorWidth)},c.prototype.init=function(){var a=t.prototype.init.apply(this,arguments);return a.name=q(a.name,"Event"),a.y=1,a},c.prototype.isValid=function(){return null!==this.options.y},c.prototype.setState=function(){var a=t.prototype.setState;this.isNull||a.apply(this,arguments)},c.prototype.setVisible=function(a,t){var g=this.series;t=q(t,g.options.ignoreHiddenPoint),o.prototype.setVisible.call(this,a,!1),g.processData(),t&&g.chart.redraw()},c.prototype.applyOptions=function(e,o){return e=a.prototype.optionsToObject.call(this,e),this.userDLOptions=l(this.userDLOptions,e.dataLabels),t.prototype.applyOptions.call(this,e,o)},c}(t.series.prototype.pointClass)})),t(a,"Series/Timeline/TimelineSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Series/Timeline/TimelinePoint.js"],a["Core/Utilities.js"]],(function(a,t,e,o,n){var p=this&&this.__extends||function(){var a=function(t,b){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var t in a)a.hasOwnProperty(t)&&(b[t]=a[t])},a(t,b)};return function(t,b){function e(){this.constructor=t}a(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}}(),r=t.seriesTypes,l=r.column,h=r.line,q=n.addEvent,c=n.arrayMax,d=n.arrayMin,y=n.defined;r=n.extend;var f=n.merge,g=n.pick;return n=function(a){function t(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b.userOptions=void 0,b.visibilityMap=void 0,b}return p(t,a),t.prototype.alignDataLabel=function(b,t,e,o){var n=this.chart.inverted,u=this.visibilityMap.filter((function(a){return a})),g=this.visiblePointsCount,r=u.indexOf(b);u=this.options.dataLabels;var l=b.userDLOptions||{};r=u.alternate?r&&r!==g-1?2:1.5:1,g=Math.floor(this.xAxis.len/g);var h=t.padding;if(b.visible){var c=Math.abs(l.x||b.options.dataLabels.x);n=n?{width:(n=2*(c-h)-b.itemHeight/2)+"px",textOverflow:t.width/n*t.height/2>g*r?"ellipsis":"none"}:{width:(l.width||u.width||g*r-2*h)+"px"},t.css(n),this.chart.styledMode||t.shadow(u.shadow)}a.prototype.alignDataLabel.apply(this,arguments)},t.prototype.bindAxes=function(){var b=this;a.prototype.bindAxes.call(b),["xAxis","yAxis"].forEach((function(a){"xAxis"!==a||b[a].userOptions.type||(b[a].categories=b[a].hasNames=!0)}))},t.prototype.distributeDL=function(){var a=this,t=a.options.dataLabels,e=1;if(t){var o=t.distance||0;a.points.forEach((function(b){var n;b.options.dataLabels=f(((n={})[a.chart.inverted?"x":"y"]=t.alternate&&e%2?-o:o,n),b.userDLOptions),e++}))}},t.prototype.generatePoints=function(){var b=this;a.prototype.generatePoints.apply(b),b.points.forEach((function(a,t){a.applyOptions({x:b.xData[t]},b.xData[t])}))},t.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data).map((function(a){return!(!a||!1===a.visible||a.isNull)&&a}))},t.prototype.getXExtremes=function(a){var b=this;return a=a.filter((function(a,t){return b.points[t].isValid()&&b.points[t].visible})),{min:d(a),max:c(a)}},t.prototype.init=function(){var b=this;a.prototype.init.apply(b,arguments),b.eventsToUnbind.push(q(b,"afterTranslate",(function(){var a,t=Number.MAX_VALUE;b.points.forEach((function(b){b.isInside=b.isInside&&b.visible,b.visible&&!b.isNull&&(y(a)&&(t=Math.min(t,Math.abs(b.plotX-a))),a=b.plotX)})),b.closestPointRangePx=t}))),b.eventsToUnbind.push(q(b,"drawDataLabels",(function(){b.distributeDL()}))),b.eventsToUnbind.push(q(b,"afterDrawDataLabels",(function(){var a;b.points.forEach((function(b){if(a=b.dataLabel)return a.animate=function(a){return this.targetPosition&&(this.targetPosition=a),e.prototype.animate.apply(this,arguments)},a.targetPosition||(a.targetPosition={}),b.drawConnector()}))}))),b.eventsToUnbind.push(q(b.chart,"afterHideOverlappingLabel",(function(){b.points.forEach((function(a){a.connector&&a.dataLabel&&a.dataLabel.oldOpacity!==a.dataLabel.newOpacity&&a.alignConnector()}))})))},t.prototype.markerAttribs=function(b,t){var e=this.options.marker,o=b.marker||{},n=o.symbol||e.symbol,r=g(o.width,e.width,this.closestPointRangePx),l=g(o.height,e.height),h=0;return this.xAxis.dateTime?a.prototype.markerAttribs.call(this,b,t):(t&&(e=e.states[t]||{},t=o.states&&o.states[t]||{},h=g(t.radius,e.radius,h+(e.radiusPlus||0))),b.hasImage=n&&0===n.indexOf("url"),{x:Math.floor(b.plotX)-r/2-h/2,y:b.plotY-l/2-h/2,width:r+h,height:l+h})},t.prototype.processData=function(){var t,b=0;for(this.visibilityMap=this.getVisibilityMap(),this.visibilityMap.forEach((function(a){a&&b++})),this.visiblePointsCount=b,t=0;t<this.xData.length;t++)this.yData[t]=1;a.prototype.processData.call(this,arguments)},t.defaultOptions=f(h.defaultOptions,{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:100,formatter:function(){return(this.series.chart.styledMode?"<span>● </span>":'<span style="color:'+this.point.color+'">● </span>')+'<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x"}),t}(h),r(n.prototype,{drawLegendSymbol:a.drawRectangle,drawTracker:l.prototype.drawTracker,pointClass:o,trackerGroups:["markerGroup","dataLabelsGroup"]}),t.registerSeriesType("timeline",n),n})),t(a,"masters/modules/timeline.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[o(242)],void 0===(r=function(t){return a(t),a.Highcharts=t,a}.apply(e,n))||(t.exports=r))}}]);