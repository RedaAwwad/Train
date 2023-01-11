/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{557:function(t,o,r){var e,n,l;l=function(t){"use strict";var o=t?t._modules:{};function r(t,path,o,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(o,"Series/AreaRange/AreaRangePoint.js",[o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o){var r,e=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function o(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=t.seriesTypes.area.prototype,l=n.pointClass,c=n.pointClass.prototype,h=o.defined,d=o.isNumber,y=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.high=void 0,o.low=void 0,o.options=void 0,o.plotHigh=void 0,o.plotLow=void 0,o.plotHighX=void 0,o.plotLowX=void 0,o.plotX=void 0,o.series=void 0,o}return e(o,t),o.prototype.setState=function(){var t=this.state,o=this.series,r=o.chart.polar;h(this.plotHigh)||(this.plotHigh=o.yAxis.toPixels(this.high,!0)),h(this.plotLow)||(this.plotLow=this.plotY=o.yAxis.toPixels(this.low,!0)),o.stateMarkerGraphic&&(o.lowerStateMarkerGraphic=o.stateMarkerGraphic,o.stateMarkerGraphic=o.upperStateMarkerGraphic),this.graphic=this.upperGraphic,this.plotY=this.plotHigh,r&&(this.plotX=this.plotHighX),c.setState.apply(this,arguments),this.state=t,this.plotY=this.plotLow,this.graphic=this.lowerGraphic,r&&(this.plotX=this.plotLowX),o.stateMarkerGraphic&&(o.upperStateMarkerGraphic=o.stateMarkerGraphic,o.stateMarkerGraphic=o.lowerStateMarkerGraphic,o.lowerStateMarkerGraphic=void 0),c.setState.apply(this,arguments)},o.prototype.haloPath=function(){var t=this.series.chart.polar,path=[];return this.plotY=this.plotLow,t&&(this.plotX=this.plotLowX),this.isInside&&(path=c.haloPath.apply(this,arguments)),this.plotY=this.plotHigh,t&&(this.plotX=this.plotHighX),this.isTopInside&&(path=path.concat(c.haloPath.apply(this,arguments))),path},o.prototype.isValid=function(){return d(this.low)&&d(this.high)},o}(l);return y})),r(o,"Series/Dumbbell/DumbbellPoint.js",[o["Series/AreaRange/AreaRangePoint.js"],o["Core/Utilities.js"]],(function(t,o){var r,e=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function o(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),n=o.extend,l=o.pick,c=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.series=void 0,o.options=void 0,o.connector=void 0,o.pointWidth=void 0,o}return e(o,t),o.prototype.setState=function(){var t,o,r=this,e=r.series,c=e.chart,h=e.options.lowColor,d=e.options.marker,y=r.options,f=y.lowColor,v=r.zone&&r.zone.color,w=l(f,h,y.color,v,r.color,e.color),C="attr";this.pointSetState.apply(this,arguments),r.state||(C="animate",r.lowerGraphic&&!c.styledMode&&(r.lowerGraphic.attr({fill:w}),r.upperGraphic&&(o={y:r.y,zone:r.zone},r.y=r.high,r.zone=r.zone?r.getZone():void 0,t=l(r.marker?r.marker.fillColor:void 0,d?d.fillColor:void 0,y.color,r.zone?r.zone.color:void 0,r.color),r.upperGraphic.attr({fill:t}),n(r,o)))),r.connector[C](e.getConnectorAttribs(r))},o.prototype.destroy=function(){return this.graphic||(this.graphic=this.connector,this.connector=void 0),t.prototype.destroy.call(this)},o}(t);return n(c.prototype,{pointSetState:t.prototype.setState}),c})),r(o,"Series/Dumbbell/DumbbellSeries.js",[o["Series/Column/ColumnSeries.js"],o["Series/Dumbbell/DumbbellPoint.js"],o["Core/Globals.js"],o["Core/Series/Series.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Renderer/SVG/SVGRenderer.js"],o["Core/Utilities.js"]],(function(t,o,r,e,n,l,c){var h,d=this&&this.__extends||(h=function(t,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},h(t,b)},function(t,b){function o(){this.constructor=t}h(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),y=t.prototype,f=r.noop,v=e.prototype,w=n.seriesTypes,C=w.arearange,m=w.columnrange.prototype,S=C.prototype,G=c.extend,_=c.merge,k=c.pick,P=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.points=void 0,o.columnMetrics=void 0,o}return d(o,t),o.prototype.getConnectorAttribs=function(t){var o,r,e=this,n=e.chart,c=t.options,h=e.options,d=e.xAxis,y=e.yAxis,f=k(c.connectorWidth,h.connectorWidth),v=k(c.connectorColor,h.connectorColor,c.color,t.zone?t.zone.color:void 0,t.color),w=k(h.states&&h.states.hover&&h.states.hover.connectorWidthPlus,1),C=k(c.dashStyle,h.dashStyle),m=k(t.plotLow,t.plotY),S=y.toPixels(h.threshold||0,!0),_=n.inverted?y.len-S:S,P=k(t.plotHigh,_);return t.state&&(f+=w),m<0?m=0:m>=y.len&&(m=y.len),P<0?P=0:P>=y.len&&(P=y.len),(t.plotX<0||t.plotX>d.len)&&(f=0),t.upperGraphic&&(r={y:t.y,zone:t.zone},t.y=t.high,t.zone=t.zone?t.getZone():void 0,v=k(c.connectorColor,h.connectorColor,c.color,t.zone?t.zone.color:void 0,t.color),G(t,r)),o={d:l.prototype.crispLine([["M",t.plotX,m],["L",t.plotX,P]],f,"ceil")},n.styledMode||(o.stroke=v,o["stroke-width"]=f,C&&(o.dashstyle=C)),o},o.prototype.drawConnector=function(t){var o=this,r=k(o.options.animationLimit,250),e=t.connector&&o.chart.pointCount<r?"animate":"attr";t.connector||(t.connector=o.chart.renderer.path().addClass("highcharts-lollipop-stem").attr({zIndex:-1}).add(o.markerGroup)),t.connector[e](this.getConnectorAttribs(t))},o.prototype.getColumnMetrics=function(){var t=y.getColumnMetrics.apply(this,arguments);return t.offset+=t.width/2,t},o.prototype.translate=function(){this.setShapeArgs.apply(this),this.translatePoint.apply(this,arguments),this.points.forEach((function(t){var o=t.shapeArgs,r=t.pointWidth;t.plotX=o.x,o.x=t.plotX-r/2,t.tooltipPos=null})),this.columnMetrics.offset-=this.columnMetrics.width/2},o.prototype.drawPoints=function(){var t,o,r,e=this,n=e.chart,l=e.points.length,c=e.lowColor=e.options.lowColor,i=0;for(this.seriesDrawPoints.apply(e,arguments);i<l;)o=e.points[i],e.drawConnector(o),o.upperGraphic&&(o.upperGraphic.element.point=o,o.upperGraphic.addClass("highcharts-lollipop-high")),o.connector.element.point=o,o.lowerGraphic&&(r=o.zone&&o.zone.color,t=k(o.options.lowColor,c,o.options.color,r,o.color,e.color),n.styledMode||o.lowerGraphic.attr({fill:t}),o.lowerGraphic.addClass("highcharts-lollipop-low")),i++},o.prototype.markerAttribs=function(){var t=S.markerAttribs.apply(this,arguments);return t.x=Math.floor(t.x||0),t.y=Math.floor(t.y||0),t},o.prototype.pointAttribs=function(t,o){var r;return r=v.pointAttribs.apply(this,arguments),"hover"===o&&delete r.fill,r},o.defaultOptions=_(C.defaultOptions,{trackByArea:!1,fillColor:"none",lineWidth:0,pointRange:1,connectorWidth:1,stickyTracking:!1,groupPadding:.2,crisp:!1,pointPadding:.1,lowColor:"#333333",states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}}}),o}(C);return G(P.prototype,{crispCol:y.crispCol,drawGraph:f,drawTracker:t.prototype.drawTracker,pointClass:o,setShapeArgs:m.translate,seriesDrawPoints:S.drawPoints,trackerGroups:["group","markerGroup","dataLabelsGroup"],translatePoint:S.translate}),n.registerSeriesType("dumbbell",P),P})),r(o,"masters/modules/dumbbell.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(e=[r(242)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,e))||(t.exports=n))}}]);