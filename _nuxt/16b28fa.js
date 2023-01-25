/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{514:function(t,o,e){var r,n,l;l=function(t){"use strict";var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}e(o,"Series/AreaRange/AreaRangePoint.js",[o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o){var e,r=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function o(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=t.seriesTypes.area.prototype,l=n.pointClass,h=n.pointClass.prototype,c=o.defined,d=o.isNumber,y=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.high=void 0,o.low=void 0,o.options=void 0,o.plotX=void 0,o.series=void 0,o}return r(o,t),o.prototype.setState=function(){var t=this.state,o=this.series,e=o.chart.polar;c(this.plotHigh)||(this.plotHigh=o.yAxis.toPixels(this.high,!0)),c(this.plotLow)||(this.plotLow=this.plotY=o.yAxis.toPixels(this.low,!0)),o.stateMarkerGraphic&&(o.lowerStateMarkerGraphic=o.stateMarkerGraphic,o.stateMarkerGraphic=o.upperStateMarkerGraphic),this.graphic=this.graphics&&this.graphics[1],this.plotY=this.plotHigh,e&&d(this.plotHighX)&&(this.plotX=this.plotHighX),h.setState.apply(this,arguments),this.state=t,this.plotY=this.plotLow,this.graphic=this.graphics&&this.graphics[0],e&&d(this.plotLowX)&&(this.plotX=this.plotLowX),o.stateMarkerGraphic&&(o.upperStateMarkerGraphic=o.stateMarkerGraphic,o.stateMarkerGraphic=o.lowerStateMarkerGraphic,o.lowerStateMarkerGraphic=void 0),h.setState.apply(this,arguments)},o.prototype.haloPath=function(){var t=this.series.chart.polar,path=[];return this.plotY=this.plotLow,t&&d(this.plotLowX)&&(this.plotX=this.plotLowX),this.isInside&&(path=h.haloPath.apply(this,arguments)),this.plotY=this.plotHigh,t&&d(this.plotHighX)&&(this.plotX=this.plotHighX),this.isTopInside&&(path=path.concat(h.haloPath.apply(this,arguments))),path},o.prototype.isValid=function(){return d(this.low)&&d(this.high)},o}(l);return y})),e(o,"Series/Dumbbell/DumbbellPoint.js",[o["Series/AreaRange/AreaRangePoint.js"],o["Core/Utilities.js"]],(function(t,o){var e,r=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function o(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=o.extend,l=o.pick,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.series=void 0,o.options=void 0,o.connector=void 0,o.pointWidth=void 0,o}return r(o,t),o.prototype.setState=function(){var t,o,e=this,r=e.series,h=r.chart,c=r.options.lowColor,d=r.options.marker,y=e.options,f=y.lowColor,v=e.zone&&e.zone.color,w=l(f,c,y.color,v,e.color,r.color),C="attr";if(this.pointSetState.apply(this,arguments),!e.state){C="animate";var m=e.graphics||[],S=m[0],_=m[1];S&&!h.styledMode&&(S.attr({fill:w}),_&&(o={y:e.y,zone:e.zone},e.y=e.high,e.zone=e.zone?e.getZone():void 0,t=l(e.marker?e.marker.fillColor:void 0,d?d.fillColor:void 0,y.color,e.zone?e.zone.color:void 0,e.color),_.attr({fill:t}),n(e,o)))}e.connector[C](r.getConnectorAttribs(e))},o.prototype.destroy=function(){return this.graphic||(this.graphic=this.connector,this.connector=void 0),t.prototype.destroy.call(this)},o}(t);return n(h.prototype,{pointSetState:t.prototype.setState}),h})),e(o,"Series/Dumbbell/DumbbellSeries.js",[o["Series/Column/ColumnSeries.js"],o["Series/Dumbbell/DumbbellPoint.js"],o["Core/Globals.js"],o["Core/Series/Series.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Renderer/SVG/SVGRenderer.js"],o["Core/Utilities.js"]],(function(t,o,e,r,n,l,h){var c,d=this&&this.__extends||(c=function(t,b){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},c(t,b)},function(t,b){function o(){this.constructor=t}c(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),y=t.prototype,f=e.noop,v=r.prototype,w=n.seriesTypes,C=w.arearange,m=w.columnrange.prototype,S=C.prototype,_=h.extend,k=h.merge,P=h.pick,x=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.points=void 0,o.columnMetrics=void 0,o}return d(o,t),o.prototype.getConnectorAttribs=function(t){var o,e,r=this,n=r.chart,h=t.options,c=r.options,d=r.xAxis,y=r.yAxis,f=P(h.connectorWidth,c.connectorWidth),v=P(h.connectorColor,c.connectorColor,h.color,t.zone?t.zone.color:void 0,t.color),w=P(c.states&&c.states.hover&&c.states.hover.connectorWidthPlus,1),C=P(h.dashStyle,c.dashStyle),m=P(t.plotLow,t.plotY),S=y.toPixels(c.threshold||0,!0),k=n.inverted?y.len-S:S,x=P(t.plotHigh,k);return"number"!=typeof m?{}:(t.state&&(f+=w),m<0?m=0:m>=y.len&&(m=y.len),x<0?x=0:x>=y.len&&(x=y.len),(t.plotX<0||t.plotX>d.len)&&(f=0),t.graphics&&t.graphics[1]&&(e={y:t.y,zone:t.zone},t.y=t.high,t.zone=t.zone?t.getZone():void 0,v=P(h.connectorColor,c.connectorColor,h.color,t.zone?t.zone.color:void 0,t.color),_(t,e)),o={d:l.prototype.crispLine([["M",t.plotX,m],["L",t.plotX,x]],f,"ceil")},n.styledMode||(o.stroke=v,o["stroke-width"]=f,C&&(o.dashstyle=C)),o)},o.prototype.drawConnector=function(t){var o=this,e=P(o.options.animationLimit,250),r=t.connector&&o.chart.pointCount<e?"animate":"attr";t.connector||(t.connector=o.chart.renderer.path().addClass("highcharts-lollipop-stem").attr({zIndex:-1}).add(o.group)),t.connector[r](this.getConnectorAttribs(t))},o.prototype.getColumnMetrics=function(){var t=y.getColumnMetrics.apply(this,arguments);return t.offset+=t.width/2,t},o.prototype.translate=function(){var t=this,o=this.chart.inverted;this.setShapeArgs.apply(this),this.translatePoint.apply(this,arguments),this.points.forEach((function(e){var r=e.pointWidth,n=e.shapeArgs,l=void 0===n?{}:n,h=e.tooltipPos;e.plotX=l.x||0,l.x=e.plotX-r/2,h&&(o?h[1]=t.xAxis.len-e.plotX:h[0]=e.plotX)})),this.columnMetrics.offset-=this.columnMetrics.width/2},o.prototype.drawPoints=function(){var t,o,e,r=this,n=r.chart,l=r.points.length,h=r.lowColor=r.options.lowColor,i=0;for(this.seriesDrawPoints.apply(r,arguments);i<l;){var c=(o=r.points[i]).graphics||[],d=c[0],y=c[1];r.drawConnector(o),y&&(y.element.point=o,y.addClass("highcharts-lollipop-high")),o.connector.element.point=o,d&&(e=o.zone&&o.zone.color,t=P(o.options.lowColor,h,o.options.color,e,o.color,r.color),n.styledMode||d.attr({fill:t}),d.addClass("highcharts-lollipop-low")),i++}},o.prototype.markerAttribs=function(){var t=S.markerAttribs.apply(this,arguments);return t.x=Math.floor(t.x||0),t.y=Math.floor(t.y||0),t},o.prototype.pointAttribs=function(t,o){var e;return e=v.pointAttribs.apply(this,arguments),"hover"===o&&delete e.fill,e},o.defaultOptions=k(C.defaultOptions,{trackByArea:!1,fillColor:"none",lineWidth:0,pointRange:1,connectorWidth:1,stickyTracking:!1,groupPadding:.2,crisp:!1,pointPadding:.1,lowColor:"#333333",states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}}}),o}(C);return _(x.prototype,{crispCol:y.crispCol,drawGraph:f,drawTracker:t.prototype.drawTracker,pointClass:o,setShapeArgs:m.translate,seriesDrawPoints:S.drawPoints,trackerGroups:["group","markerGroup","dataLabelsGroup"],translatePoint:S.translate}),n.registerSeriesType("dumbbell",x),x})),e(o,"masters/modules/dumbbell.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(r=[e(219)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);