(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{531:function(t,e,r){var n,o,h;h=function(t){function e(t,p,e,r){t.hasOwnProperty(p)||(t[p]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:p,module:t[p]}})))}e(t=t?t._modules:{},"Core/Axis/GridAxis.js",[t["Core/Axis/Axis.js"],t["Core/Axis/AxisDefaults.js"],t["Core/Globals.js"],t["Core/Utilities.js"]],(function(t,p,e,r){function n(a,b){var t={width:0,height:0};return b.forEach((function(b){if(b=a[b],r.isObject(b,!0)){var e=r.isObject(b.label,!0)?b.label:{};b=e.getBBox?e.getBBox().height:0,e.textStr&&!T(e.textPxLength)&&(e.textPxLength=e.getBBox().width);var g=T(e.textPxLength)?Math.round(e.textPxLength):0;e.textStr&&(g=Math.round(e.getBBox().width)),t.height=Math.max(b,t.height),t.width=Math.max(g,t.width)}})),"treegrid"===this.options.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode&&(t.width+=this.options.labels.indentation*((this.treeGrid.mapOfPosToGridNode[-1].height||0)-1)),t}function o(){var a=this.grid;(a&&a.columns||[]).forEach((function(b){b.getOffset()}))}function h(a){if(!0===(this.options.grid||{}).enabled){var b=this.axisTitle,t=this.height,e=this.horiz,r=this.left,g=this.offset,n=this.opposite,q=this.options,o=this.top,h=this.width,d=this.tickSize(),l=b&&b.getBBox().width,c=q.title.x,f=q.title.y,x=D(q.title.margin,e?5:10);b=this.chart.renderer.fontMetrics(q.title.style.fontSize,b).f,d=(e?o+t:r)+(e?1:-1)*(n?-1:1)*(d?d[0]/2:0)+(this.side===u.bottom?b:0),a.titlePosition.x=e?r-(l||0)/2-x+c:d+(n?h:0)+g+c,a.titlePosition.y=e?d-(n?t:0)+(n?b:-b)/2+g+f:o-x+f}}function d(){var a=this.chart,b=this.options.grid;b=void 0===b?{}:b;var e=this.userOptions;if(b.enabled){var r=this.options;r.labels.align=D(r.labels.align,"center"),this.categories||(r.showLastLabel=!1),this.labelRotation=0,r.labels.rotation=0}if(b.columns){r=this.grid.columns=[];for(var n=this.grid.columnIndex=0;++n<b.columns.length;){var g=W(e,b.columns[b.columns.length-n-1],{linkedTo:0,type:"category",scrollbar:{enabled:!1}});delete g.grid.columns,(g=new t(this.chart,g)).grid.isColumn=!0,g.grid.columnIndex=n,z(a.axes,g),z(a[this.coll],g),r.push(g)}}}function l(){var a=this.grid,b=this.options;if(!0===(b.grid||{}).enabled){var t=this.min||0,e=this.max||0;if(this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){var r=b.lineWidth;if(r){var g=(r=this.getLinePath(r))[0],n=r[1],q=((this.tickSize("tick")||[1])[0]-1)*(this.side===u.top||this.side===u.left?-1:1);"M"===g[0]&&"L"===n[0]&&(this.horiz?(g[2]+=q,n[2]+=q):(g[1]+=q,n[1]+=q)),!this.horiz&&this.chart.marginRight&&(g=[g,["L",this.left,g[2]||0]],q=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(e+this.tickmarkOffset)],n=[["M",n[1]||0,this.toPixels(e+this.tickmarkOffset)],q],this.grid.upperBorder||0==t%1||(this.grid.upperBorder=this.grid.renderBorder(g)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:b.lineColor,"stroke-width":b.lineWidth}),this.grid.upperBorder.animate({d:g})),this.grid.lowerBorder||0==e%1||(this.grid.lowerBorder=this.grid.renderBorder(n)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:b.lineColor,"stroke-width":b.lineWidth}),this.grid.lowerBorder.animate({d:n}))),this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:b.lineColor,"stroke-width":b.lineWidth}),this.grid.axisLineExtra.animate({d:r})):this.grid.axisLineExtra=this.grid.renderBorder(r),this.axisLine[this.showAxis?"show":"hide"]()}}if((a&&a.columns||[]).forEach((function(b){return b.render()})),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)){for(a=this.tickmarkOffset,b=this.tickPositions[this.tickPositions.length-1],r=this.tickPositions[0],g=n=void 0;(n=this.hiddenLabels.pop())&&n.element;)n.show();for(;(g=this.hiddenMarks.pop())&&g.element;)g.show();(n=this.ticks[r].label)&&(t-r>a?this.hiddenLabels.push(n.hide()):n.show()),(n=this.ticks[b].label)&&(b-e>a?this.hiddenLabels.push(n.hide()):n.show()),(t=this.ticks[b].mark)&&b-e<a&&0<b-e&&this.ticks[b].isLast&&this.hiddenMarks.push(t.hide())}}}function c(){var a=this.tickPositions&&this.tickPositions.info,b=this.options,t=this.userOptions.labels||{};(b.grid||{}).enabled&&(this.horiz?(this.series.forEach((function(b){b.options.pointRange=0})),a&&b.dateTimeLabelFormats&&b.labels&&!A(t.align)&&(!1===b.dateTimeLabelFormats[a.unitName].range||1<a.count)&&(b.labels.align="left",A(t.x)||(b.labels.x=3))):"treegrid"!==this.options.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function f(a){var b=this.options;a=a.userOptions;var t=b&&r.isObject(b.grid,!0)?b.grid:{};if(!0===t.enabled){var e=W(!0,{className:"highcharts-grid-axis "+(a.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},a);"xAxis"===this.coll&&(A(a.linkedTo)&&!A(a.tickPixelInterval)&&(e.tickPixelInterval=350),A(a.tickPixelInterval)||!A(a.linkedTo)||A(a.tickPositioner)||A(a.tickInterval)||(e.tickPositioner=function(b,a){var t=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(t){for(var r=e.units||[],g=void 0,n=1,o="year",h=0;h<r.length;h++){var d=r[h];if(d&&d[0]===t.unitName){g=h;break}}return(r=T(g)&&r[g+1])?(o=r[0]||"year",n=(n=r[1])&&n[0]||1):"year"===t.unitName&&(n=10*t.count),t=I[o],this.tickInterval=t*n,this.chart.time.getTimeTicks({unitRange:t,count:n,unitName:o},b,a,this.options.startOfWeek)}})),W(!0,this.options,e),this.horiz&&(b.minPadding=D(a.minPadding,0),b.maxPadding=D(a.maxPadding,0)),T(b.grid.borderWidth)&&(b.tickWidth=b.lineWidth=t.borderWidth)}}function x(a){var b=(a=(a=a.userOptions)&&a.grid||{}).columns;a.enabled&&b&&W(!0,this.options,b[b.length-1])}function m(){(this.grid.columns||[]).forEach((function(a){return a.setScale()}))}function k(a){var b=p.defaultLeftAxisOptions,t=this.horiz,e=this.maxLabelDimensions,r=this.options.grid;(r=void 0===r?{}:r).enabled&&e&&(b=2*Math.abs(b.labels.x),t=t?r.cellHeight||b+e.height:b+e.width,E(a.tickSize)?a.tickSize[0]=t:a.tickSize=[t,0])}function v(){this.axes.forEach((function(a){(a.grid&&a.grid.columns||[]).forEach((function(b){b.setAxisSize(),b.setAxisTranslation()}))}))}function P(a){var b=this.grid;(b.columns||[]).forEach((function(b){return b.destroy(a.keepEvents)})),b.columns=void 0}function w(a){var b=(a=a.userOptions||{}).grid||{};b.enabled&&A(b.borderColor)&&(a.tickColor=a.lineColor=b.borderColor),this.grid||(this.grid=new N(this)),this.hiddenLabels=[],this.hiddenMarks=[]}function y(a){var b=this.label,t=this.axis,e=t.reversed,r=t.chart,g=t.options.grid||{},n=t.options.labels,o=n.align,h=u[t.side],d=a.tickmarkOffset,l=t.tickPositions,c=this.pos-d;l=T(l[a.index+1])?l[a.index+1]-d:(t.max||0)+d;var p=t.tickSize("tick");if(d=p?p[0]:0,p=p?p[1]/2:0,!0===g.enabled){if("top"===h)var f=(g=t.top+t.offset)-d;else"bottom"===h?g=(f=r.chartHeight-t.bottom+t.offset)+d:(g=t.top+t.len-(t.translate(e?l:c)||0),f=t.top+t.len-(t.translate(e?c:l)||0));"right"===h?e=(h=r.chartWidth-t.right+t.offset)+d:"left"===h?h=(e=t.left+t.offset)-d:(h=Math.round(t.left+(t.translate(e?l:c)||0))-p,e=Math.min(Math.round(t.left+(t.translate(e?c:l)||0))-p,t.left+t.len)),this.slotWidth=e-h,a.pos.x="left"===o?h:"right"===o?e:h+(e-h)/2,a.pos.y=f+(g-f)/2,r=r.renderer.fontMetrics(n.style.fontSize,b&&b.element),b=b?b.getBBox().height:0,n.useHTML?a.pos.y+=r.b+-b/2:(b=Math.round(b/r.h),a.pos.y+=(r.b-(r.h-r.f))/2+-(b-1)*r.h/2),a.pos.x+=t.horiz&&n.x||0}}function L(a){var b=a.axis,t=a.value;if(b.options.grid&&b.options.grid.enabled){var r=b.tickPositions,n=(b.linkedParent||b).series[0],g=t===r[0];r=t===r[r.length-1];var o=n&&C(n.options.data,(function(a){return a[b.isXAxis?"x":"y"]===t})),h=void 0;o&&n.is("gantt")&&(h=W(o),e.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(h)),a.isFirst=g,a.isLast=r,a.point=h}}function O(){var a=this.options,b=this.categories,t=this.tickPositions,e=t[0],r=t[t.length-1],g=this.linkedParent&&this.linkedParent.min||this.min,n=this.linkedParent&&this.linkedParent.max||this.max,o=this.tickInterval;!0!==(a.grid||{}).enabled||b||!this.horiz&&!this.isLinked||(e<g&&e+o>g&&!a.startOnTick&&(t[0]=g),r>n&&r-o<n&&!a.endOnTick&&(t[t.length-1]=n))}function B(a){var b=this.options.grid;return!0===(void 0===b?{}:b).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))}var u,a,M=e.dateFormats,S=r.addEvent,A=r.defined,z=r.erase,C=r.find,E=r.isArray,T=r.isNumber,W=r.merge,D=r.pick,I=r.timeUnits,G=r.wrap;(a=u||(u={}))[a.top=0]="top",a[a.right=1]="right",a[a.bottom=2]="bottom",a[a.left=3]="left";var j=[],N=function(){function a(b){this.axis=b}return a.prototype.isOuterAxis=function(){var b=this.axis,a=b.grid.columnIndex,t=b.linkedParent&&b.linkedParent.grid.columns||b.grid.columns,e=a?b.linkedParent:b,g=-1,r=0;return(b.chart[b.coll]||[]).forEach((function(a,t){a.side!==b.side||a.options.isInternal||(r=t,a===e&&(g=t))})),r===g&&(!T(a)||t.length===a)},a.prototype.renderBorder=function(a){var b=this.axis,t=b.chart.renderer,e=b.options;return a=t.path(a).addClass("highcharts-axis-line").add(b.axisBorder),t.styledMode||a.attr({stroke:e.lineColor,"stroke-width":e.lineWidth,zIndex:7}),a},a}();return M.E=function(a){return this.dateFormat("%a",a,!0).charAt(0)},M.W=function(a){var b=this,t=new this.Date(a);["Hours","Milliseconds","Minutes","Seconds"].forEach((function(a){b.set(a,t,0)}));var e=(this.get("Day",t)+6)%7;return a=new this.Date(t.valueOf()),this.set("Date",a,this.get("Date",t)-e+3),e=new this.Date(this.get("FullYear",a),0,1),4!==this.get("Day",e)&&(this.set("Month",t,0),this.set("Date",t,1+(11-this.get("Day",e))%7)),(1+Math.floor((a.valueOf()-e.valueOf())/6048e5)).toString()},{compose:function(a,b,t){return-1===j.indexOf(a)&&(j.push(a),a.keepProps.push("grid"),a.prototype.getMaxLabelDimensions=n,G(a.prototype,"unsquish",B),S(a,"init",w),S(a,"afterGetOffset",o),S(a,"afterGetTitlePosition",h),S(a,"afterInit",d),S(a,"afterRender",l),S(a,"afterSetAxisTranslation",c),S(a,"afterSetOptions",f),S(a,"afterSetOptions",x),S(a,"afterSetScale",m),S(a,"afterTickSize",k),S(a,"trimTicks",O),S(a,"destroy",P)),-1===j.indexOf(b)&&S(b,"afterSetChartSize",v),-1===j.indexOf(t)&&(S(t,"afterGetLabelPosition",y),S(t,"labelFormat",L)),a}}})),e(t,"masters/modules/grid-axis.src.js",[t["Core/Globals.js"],t["Core/Axis/GridAxis.js"]],(function(t,e){e.compose(t.Axis,t.Chart,t.Tick)}))},t.exports?(h.default=h,t.exports=h):(n=[r(222)],void 0===(o=function(t){return h(t),h.Highcharts=t,h}.apply(e,n))||(t.exports=o))}}]);