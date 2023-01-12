(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{505:function(t,o,e){var r,n,l;l=function(t){function o(t,o,g,e){t.hasOwnProperty(o)||(t[o]=e.apply(null,g),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}o(t=t?t._modules:{},"Extensions/DataGrouping.js",[t["Core/Axis/Axis.js"],t["Core/Axis/DateTimeAxis.js"],t["Core/FormatUtilities.js"],t["Core/Globals.js"],t["Core/Series/Point.js"],t["Core/Series/Series.js"],t["Core/Tooltip.js"],t["Core/DefaultOptions.js"],t["Core/Utilities.js"]],(function(t,o,g,e,r,n,l,h,d){var c=g.format,f=n.prototype;g=d.addEvent;var m=d.arrayMax,x=d.arrayMin,D=d.correctFloat,G=d.defined,v=d.error,y=d.extend,p=d.isNumber,M=d.merge,A=d.pick,P=e.approximations={sum:function(a){var b=a.length;if(!b&&a.hasNulls)var t=null;else if(b)for(t=0;b--;)t+=a[b];return t},average:function(a){var b=a.length;return a=P.sum(a),p(a)&&b&&(a=D(a/b)),a},averages:function(){var a=[];return[].forEach.call(arguments,(function(b){a.push(P.average(b))})),void 0===a[0]?void 0:a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?m(a):a.hasNulls?null:void 0},low:function(a){return a.length?x(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},hlc:function(a,b,t){if(a=P.high(a),b=P.low(b),t=P.close(t),p(a)||p(b)||p(t))return[a,b,t]},ohlc:function(a,b,t,o){if(a=P.open(a),b=P.high(b),t=P.low(t),o=P.close(o),p(a)||p(b)||p(t)||p(o))return[a,b,t,o]},range:function(a,b){return a=P.low(a),b=P.high(b),p(a)||p(b)?[a,b]:null===a&&null===b?null:void 0}};d=function(a,b,t,o){var e,r=this,n=r.data,l=r.options&&r.options.data,h=[],d=[],c=[],f=a.length,m=!!b,x=[],u=r.pointArrayMap,g=u&&u.length,D=["x"].concat(u||["y"]),v=this.options.dataGrouping&&this.options.dataGrouping.groupAll,y=0,A=0;o="function"==typeof o?o:P[o]?P[o]:P[r.getDGApproximation&&r.getDGApproximation()||"average"],g?u.forEach((function(){x.push([])})):x.push([]);var S=g||1;for(e=0;e<=f&&!(a[e]>=t[0]);e++);for(;e<=f;e++){for(;void 0!==t[y+1]&&a[e]>=t[y+1]||e===f;){var q=t[y];r.dataGroupInfo={start:v?A:r.cropStart+A,length:x[0].length};var W=o.apply(r,x);for(r.pointClass&&!G(r.dataGroupInfo.options)&&(r.dataGroupInfo.options=M(r.pointClass.prototype.optionsToObject.call({series:r},r.options.data[r.cropStart+A])),D.forEach((function(a){delete r.dataGroupInfo.options[a]}))),void 0!==W&&(h.push(q),d.push(W),c.push(r.dataGroupInfo)),A=e,q=0;q<S;q++)x[q].length=0,x[q].hasNulls=!1;if(y+=1,e===f)break}if(e===f)break;if(u){q=r.options.dataGrouping&&r.options.dataGrouping.groupAll?e:r.cropStart+e,W=n&&n[q]||r.pointClass.prototype.applyOptions.apply({series:r},[l[q]]);var k=void 0;for(q=0;q<g;q++)k=W[u[q]],p(k)?x[q].push(k):null===k&&(x[q].hasNulls=!0)}else q=m?b[e]:null,p(q)?x[0].push(q):null===q&&(x[0].hasNulls=!0)}return{groupedXData:h,groupedYData:d,groupMap:c}};var S={approximations:P,groupData:d},W=f.generatePoints,k={groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},w={line:{},spline:{},area:{},areaspline:{},arearange:{},column:{groupPixelWidth:10},columnrange:{groupPixelWidth:10},candlestick:{groupPixelWidth:10},ohlc:{groupPixelWidth:5},hlc:{groupPixelWidth:5},heikinashi:{groupPixelWidth:10}},C=e.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]];return f.getDGApproximation=function(){return this.is("arearange")?"range":this.is("ohlc")?"ohlc":this.is("hlc")?"hlc":this.is("column")?"sum":"average"},f.groupData=d,f.applyGrouping=function(a){var t,b=this.chart,e=this.options.dataGrouping,r=!1!==this.allowDG&&e&&A(e.enabled,b.options.isStock),n=this.visible||!b.options.chart.ignoreHiddenSeries,l=this.currentDataGrouping,h=!1;if(r&&!this.requireSorting&&(this.requireSorting=h=!0),a=0==!(this.isCartesian&&!this.isDirty&&!this.xAxis.isDirty&&!this.yAxis.isDirty&&!a)||!r,h&&(this.requireSorting=!1),!a){this.destroyGroupedData(),r=e.groupAll?this.xData:this.processedXData;var d=e.groupAll?this.yData:this.processedYData;a=b.plotSizeX;var g=(h=this.xAxis).options.ordinal,c=this.groupPixelWidth;if(c&&r&&r.length){this.isDirty=t=!0,this.points=null;var m=h.getExtremes(),x=m.min;m=m.max,g=g&&h.ordinal&&h.ordinal.getGroupIntervalFactor(x,m,this)||1,a=h.getTimeTicks(o.Additions.prototype.normalizeTimeTickInterval(c*(m-x)/a*g,e.units||C),Math.min(x,r[0]),Math.max(m,r[r.length-1]),h.options.startOfWeek,r,this.closestPointRange),r=(c=f.groupData.apply(this,[r,d,a,e.approximation])).groupedXData,d=c.groupedYData,g=0,e&&e.smoothed&&r.length&&(e.firstAnchor="firstPoint",e.anchor="middle",e.lastAnchor="lastPoint",v(32,!1,b,{"dataGrouping.smoothed":"use dataGrouping.anchor"})),b=r;var u=this.options.dataGrouping;if(x=this.currentDataGrouping&&this.currentDataGrouping.gapSize,u&&this.xData&&x&&this.groupMap){var D=b.length-1,y=u.anchor,M=A(u.firstAnchor,y);if(u=A(u.lastAnchor,y),y&&"start"!==y){var P=x*{middle:.5,end:1}[y];for(y=b.length-1;y--&&0<y;)b[y]+=P}if(M&&"start"!==M&&this.xData[0]>=b[0]){y=this.groupMap[0].start,P=this.groupMap[0].length;var S=void 0;p(y)&&p(P)&&(S=y+(P-1)),b[0]={middle:b[0]+.5*x,end:b[0]+x,firstPoint:this.xData[0],lastPoint:S&&this.xData[S]}[M]}u&&"start"!==u&&x&&b[D]>=m-x&&(m=this.groupMap[this.groupMap.length-1].start,b[D]={middle:b[D]+.5*x,end:b[D]+x,firstPoint:m&&this.xData[m],lastPoint:this.xData[this.xData.length-1]}[u])}for(m=1;m<a.length;m++)a.info.segmentStarts&&-1!==a.info.segmentStarts.indexOf(m)||(g=Math.max(a[m]-a[m-1],g));(m=a.info).gapSize=g,this.closestPointRange=a.info.totalRange,this.groupMap=c.groupMap,n&&(G((n=r)[0])&&p(h.min)&&p(h.dataMin)&&n[0]<h.min&&((!G(h.options.min)&&h.min<=h.dataMin||h.min===h.dataMin)&&(h.min=Math.min(n[0],h.min)),h.dataMin=Math.min(n[0],h.dataMin)),G(n[n.length-1])&&p(h.max)&&p(h.dataMax)&&n[n.length-1]>h.max&&((!G(h.options.max)&&p(h.dataMax)&&h.max>=h.dataMax||h.max===h.dataMax)&&(h.max=Math.max(n[n.length-1],h.max)),h.dataMax=Math.max(n[n.length-1],h.dataMax))),e.groupAll&&(this.allGroupedData=d,r=(e=this.cropData(r,d,h.min,h.max,1)).xData,d=e.yData,this.cropStart=e.start),this.processedXData=r,this.processedYData=d}else this.groupMap=null;this.hasGroupedData=t,this.currentDataGrouping=m,this.preventGraphAnimation=(l&&l.totalRange)!==(m&&m.totalRange)}},f.destroyGroupedData=function(){this.groupedData&&(this.groupedData.forEach((function(a,b){a&&(this.groupedData[b]=a.destroy?a.destroy():null)}),this),this.groupedData.length=0)},f.generatePoints=function(){W.apply(this),this.destroyGroupedData(),this.groupedData=this.hasGroupedData?this.points:null},t.prototype.applyGrouping=function(a){var b=this,t=b.series;t.forEach((function(a){a.groupPixelWidth=void 0})),t.forEach((function(t){t.groupPixelWidth=b.getGroupPixelWidth&&b.getGroupPixelWidth(),t.groupPixelWidth&&(t.hasProcessed=!0),t.applyGrouping(!!a.hasExtemesChanged)}))},t.prototype.getGroupPixelWidth=function(){var t,o,a=this.series,b=a.length,e=0,r=!1;for(t=b;t--;)(o=a[t].options.dataGrouping)&&(e=Math.max(e,A(o.groupPixelWidth,k.groupPixelWidth)));for(t=b;t--;)(o=a[t].options.dataGrouping)&&(b=(a[t].processedXData||a[t].data).length,(a[t].groupPixelWidth||b>this.chart.plotSizeX/e||b&&o.forced)&&(r=!0));return r?e:0},t.prototype.setDataGrouping=function(a,b){var o;if(b=A(b,!0),a||(a={forced:!1,units:null}),this instanceof t)for(o=this.series.length;o--;)this.series[o].update({dataGrouping:a},!1);else this.chart.options.series.forEach((function(b){b.dataGrouping="boolean"==typeof a?a:M(a,b.dataGrouping)}));this.ordinal&&(this.ordinal.slope=void 0),b&&this.chart.redraw()},g(t,"postProcessData",t.prototype.applyGrouping),g(r,"update",(function(){if(this.dataGroup)return v(24,!1,this.series.chart),!1})),g(l,"headerFormatter",(function(a){var b=this.chart,t=b.time,o=a.labelConfig,e=o.series,g=e.tooltipOptions,r=e.options.dataGrouping,n=g.xDateFormat,l=e.xAxis,h=g[a.isFooter?"footerFormat":"headerFormat"];if(l&&"datetime"===l.options.type&&r&&p(o.key)){var d=e.currentDataGrouping;if(r=r.dateTimeLabelFormats||k.dateTimeLabelFormats,d)if(g=r[d.unitName],1===d.count)n=g[0];else{n=g[1];var f=g[2]}else!n&&r&&l.dateTime&&(n=l.dateTime.getXDateFormat(o.x,g.dateTimeLabelFormats));n=t.dateFormat(n,o.key),f&&(n+=t.dateFormat(f,o.key+d.totalRange-1)),e.chart.styledMode&&(h=this.styledModeFormat(h)),a.text=c(h,{point:y(o.point,{key:n}),series:e},b),a.preventDefault()}})),g(n,"destroy",f.destroyGroupedData),g(n,"afterSetOptions",(function(a){a=a.options;var b=this.type,t=this.chart.options.plotOptions,o=h.defaultOptions.plotOptions[b].dataGrouping,e=this.useCommonDataGrouping&&k;if(t&&(w[b]||e)){o||(o=M(k,w[b]));var g=this.chart.rangeSelector;a.dataGrouping=M(e,o,t.series&&t.series.dataGrouping,t[b].dataGrouping,this.userOptions.dataGrouping,!a.isInternal&&g&&p(g.selected)&&g.buttonOptions[g.selected].dataGrouping)}})),g(t,"afterSetScale",(function(){this.series.forEach((function(a){a.hasProcessed=!1}))})),e.dataGrouping=S,S})),o(t,"masters/modules/datagrouping.src.js",[t["Extensions/DataGrouping.js"]],(function(t){return t}))},t.exports?(l.default=l,t.exports=l):(r=[e(222)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);