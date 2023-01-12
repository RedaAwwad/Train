(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{591:function(t,e,o){var n,r,a;a=function(a){function b(a,t,e,b){a.hasOwnProperty(t)||(a[t]=b.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}b(a=a?a._modules:{},"Series/Timeline/TimelinePoint.js",[a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,b){var e=this&&this.__extends||function(){var a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var e in t)t.hasOwnProperty(e)&&(a[e]=t[e])},a(t,e)};return function(t,e){function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),o=t.seriesTypes.pie.prototype.pointClass,n=b.defined,r=b.isNumber,l=b.merge,c=b.objectEach,p=b.pick;return function(b){function t(){var t=null!==b&&b.apply(this,arguments)||this;return t.options=void 0,t.series=void 0,t}return e(t,b),t.prototype.alignConnector=function(){var t=this.series,a=this.connector,b=this.dataLabel,e=this.dataLabel.options=l(t.options.dataLabels,this.options.dataLabels),o=this.series.chart,r=a.getBBox(),c=r.x+b.translateX;r=r.y+b.translateY,o.inverted?r-=b.options.connectorWidth/2:c+=b.options.connectorWidth/2,a[(o=o.isInsidePlot(c,r))?"animate":"attr"]({d:this.getConnectorPath()}),t.chart.styledMode||a.attr({stroke:e.connectorColor||this.color,"stroke-width":e.connectorWidth,opacity:b[n(b.newOpacity)?"newOpacity":"opacity"]})},t.prototype.drawConnector=function(){var a=this.series;this.connector||(this.connector=a.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel)),this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()},t.prototype.getConnectorPath=function(){var a=this.series.chart,b=this.series.xAxis.len,t=a.inverted,e=t?"x2":"y2",o=this.dataLabel,n=o.targetPosition,l={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:r(n.y)?n.y:o.y},g=(o.alignAttr||o)[e[0]]<this.series.yAxis.len/2;return t&&(l={x1:this.plotY,y1:b-this.plotX,x2:n.x||o.x,y2:b-this.plotX}),g&&(l[e]+=o[t?"width":"height"]),c(l,(function(g,a){l[a]-=(o.alignAttr||o)[a[0]]})),a.renderer.crispLine([["M",l.x1,l.y1],["L",l.x2,l.y2]],o.options.connectorWidth)},t.prototype.init=function(){var a=b.prototype.init.apply(this,arguments);return a.name=p(a.name,"Event"),a.y=1,a},t.prototype.isValid=function(){return null!==this.options.y},t.prototype.setState=function(){var a=b.prototype.setState;this.isNull||a.apply(this,arguments)},t.prototype.setVisible=function(a,b){var t=this.series;b=p(b,t.options.ignoreHiddenPoint),o.prototype.setVisible.call(this,a,!1),t.processData(),b&&t.chart.redraw()},t.prototype.applyOptions=function(t,e){return t=a.prototype.optionsToObject.call(this,t),this.userDLOptions=l(this.userDLOptions,t.dataLabels),b.prototype.applyOptions.call(this,t,e)},t}(t.series.prototype.pointClass)})),b(a,"Series/Timeline/TimelineSeriesDefaults.js",[],(function(){return{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:100,formatter:function(){return(this.series.chart.styledMode?"<span>● </span>":'<span style="color:'+this.point.color+'">● </span>')+'<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x"}})),b(a,"Series/Timeline/TimelineSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Series/Timeline/TimelinePoint.js"],a["Series/Timeline/TimelineSeriesDefaults.js"],a["Core/Utilities.js"]],(function(a,b,t,e,o,n){var r=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var g in a)a.hasOwnProperty(g)&&(t[g]=a[g])},a(b,t)};return function(b,t){function g(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(g.prototype=t.prototype,new g)}}(),l=b.seriesTypes,c=l.column,p=l.line,h=n.addEvent,d=n.arrayMax,y=n.arrayMin,f=n.defined;l=n.extend;var v=n.merge,u=n.pick;return n=function(a){function b(){var t=null!==a&&a.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t.userOptions=void 0,t.visibilityMap=void 0,t}return r(b,a),b.prototype.alignDataLabel=function(t,b,e,o){var g=this.chart.inverted,q=this.visibilityMap.filter((function(t){return t})),n=this.visiblePointsCount,r=q.indexOf(t);q=this.options.dataLabels;var l=t.userDLOptions||{};r=q.alternate?r&&r!==n-1?2:1.5:1,n=Math.floor(this.xAxis.len/n);var c=b.padding;if(t.visible){var h=Math.abs(l.x||t.options.dataLabels.x);g=g?{width:(g=2*(h-c)-t.itemHeight/2)+"px",textOverflow:b.width/g*b.height/2>n*r?"ellipsis":"none"}:{width:(l.width||q.width||n*r-2*c)+"px"},b.css(g),this.chart.styledMode||b.shadow(q.shadow)}a.prototype.alignDataLabel.apply(this,arguments)},b.prototype.bindAxes=function(){var t=this;a.prototype.bindAxes.call(t),["xAxis","yAxis"].forEach((function(a){"xAxis"!==a||t[a].userOptions.type||(t[a].categories=t[a].hasNames=!0)}))},b.prototype.distributeDL=function(){var a=this,b=a.options.dataLabels,t=1;if(b){var e=b.distance||0;a.points.forEach((function(o){var g;o.options.dataLabels=v(((g={})[a.chart.inverted?"x":"y"]=b.alternate&&t%2?-e:e,g),o.userDLOptions),t++}))}},b.prototype.generatePoints=function(){var t=this;a.prototype.generatePoints.apply(t),t.points.forEach((function(a,b){a.applyOptions({x:t.xData[b]},t.xData[b])}))},b.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data).map((function(a){return!(!a||!1===a.visible||a.isNull)&&a}))},b.prototype.getXExtremes=function(a){var t=this;return a=a.filter((function(a,b){return t.points[b].isValid()&&t.points[b].visible})),{min:y(a),max:d(a)}},b.prototype.init=function(){var e=this;a.prototype.init.apply(e,arguments),e.eventsToUnbind.push(h(e,"afterTranslate",(function(){var a,b=Number.MAX_VALUE;e.points.forEach((function(t){t.isInside=t.isInside&&t.visible,t.visible&&!t.isNull&&(f(a)&&(b=Math.min(b,Math.abs(t.plotX-a))),a=t.plotX)})),e.closestPointRangePx=b}))),e.eventsToUnbind.push(h(e,"drawDataLabels",(function(){e.distributeDL()}))),e.eventsToUnbind.push(h(e,"afterDrawDataLabels",(function(){var a;e.points.forEach((function(e){if(a=e.dataLabel)return a.animate=function(a){return this.targetPosition&&(this.targetPosition=a),t.prototype.animate.apply(this,arguments)},a.targetPosition||(a.targetPosition={}),e.drawConnector()}))}))),e.eventsToUnbind.push(h(e.chart,"afterHideOverlappingLabel",(function(){e.points.forEach((function(a){a.connector&&a.dataLabel&&a.dataLabel.oldOpacity!==a.dataLabel.newOpacity&&a.alignConnector()}))})))},b.prototype.markerAttribs=function(t,b){var e=this.options.marker,o=t.marker||{},g=o.symbol||e.symbol,n=u(o.width,e.width,this.closestPointRangePx),r=u(o.height,e.height),l=0;return this.xAxis.dateTime?a.prototype.markerAttribs.call(this,t,b):(b&&(e=e.states[b]||{},b=o.states&&o.states[b]||{},l=u(b.radius,e.radius,l+(e.radiusPlus||0))),t.hasImage=g&&0===g.indexOf("url"),{x:Math.floor(t.plotX)-n/2-l/2,y:t.plotY-r/2-l/2,width:n+l,height:r+l})},b.prototype.processData=function(){var b,t=0;for(this.visibilityMap=this.getVisibilityMap(),this.visibilityMap.forEach((function(a){a&&t++})),this.visiblePointsCount=t,b=0;b<this.xData.length;b++)this.yData[b]=1;a.prototype.processData.call(this,arguments)},b.defaultOptions=v(p.defaultOptions,o),b}(p),l(n.prototype,{drawLegendSymbol:a.drawRectangle,drawTracker:c.prototype.drawTracker,pointClass:e,trackerGroups:["markerGroup","dataLabelsGroup"]}),b.registerSeriesType("timeline",n),n})),b(a,"masters/modules/timeline.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[o(219)],void 0===(r=function(b){return a(b),a.Highcharts=b,a}.apply(e,n))||(t.exports=r))}}]);