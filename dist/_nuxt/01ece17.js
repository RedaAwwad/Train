(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{583:function(t,e,r){var o,n,l;l=function(t){function e(t,e,r,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,r),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}e(t=t?t._modules:{},"Extensions/MarkerClusters.js",[t["Core/Animation/AnimationUtilities.js"],t["Core/Chart/Chart.js"],t["Core/DefaultOptions.js"],t["Core/Series/Point.js"],t["Core/Series/Series.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Renderer/SVG/SVGRenderer.js"],t["Core/Utilities.js"],t["Core/Axis/Axis.js"]],(function(t,e,r,o,n,l,d,h,c){function f(a){var t,b=a.length,e=0,r=0;for(t=0;t<b;t++)e+=a[t].x,r+=a[t].y;return{x:e/b,y:r/b}}function m(a,b){var t=[];return t.length=b,a.clusters.forEach((function(a){a.data.forEach((function(a){t[a.dataIndex]=a}))})),a.noise.forEach((function(a){t[a.data[0].dataIndex]=a.data[0]})),t}function x(a,b,t,e,r){a.point&&(e&&a.point.graphic&&(a.point.graphic.show(),a.point.graphic.attr({opacity:b}).animate({opacity:1},t)),r&&a.point.dataLabel&&(a.point.dataLabel.show(),a.point.dataLabel.attr({opacity:b}).animate({opacity:1},t)))}function y(a,b,t){a.point&&(b&&a.point.graphic&&a.point.graphic.hide(),t&&a.point.dataLabel&&a.point.dataLabel.hide())}function C(a,b,t,e){x(a,e,t,!0,!0),b.forEach((function(a){a.point&&a.point.destroy&&a.point.destroy()}))}var I=t.animObject;t=r.defaultOptions,l=l.seriesTypes;var k=d.prototype.symbols,M=h.addEvent,S=h.defined,v=h.error,A=h.isArray,X=h.isFunction,Y=h.isObject,L=h.isNumber,D=h.merge,w=h.objectEach,E=h.relativeLength,P=h.syncTimeout;d=l.scatter;var z=n.prototype.generatePoints,T=[],O=0,V={enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}};(t.plotOptions||{}).series=D((t.plotOptions||{}).series,{cluster:V,tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}});var j=function(a,b){var t=a.chart,e=a.xAxis;return a=a.yAxis,t.mapView?t.mapView.pixelsToProjectedUnits(b):{x:e?e.toValue(b.x):0,y:a?a.toValue(b.y):0}},G=function(a,b){var t=a.chart,e=a.xAxis;return a=a.yAxis,t.mapView?t.mapView.projectedUnitsToPixels(b):{x:e?e.toPixels(b.x):0,y:a?a.toPixels(b.y):0}};k.cluster=function(a,b,t,e){t/=2,e/=2;var r=k.arc(a+t,b+e,t-4,e-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),o=k.arc(a+t,b+e,t-3,e-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:t-2,open:!1});return k.arc(a+t,b+e,t-1,e-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:t,open:!1}).concat(o,r)},d.prototype.animateClusterPoint=function(a){var b=this.chart,t=b.mapView,e=I((this.options.cluster||{}).animation),r=e.duration||500,o=(this.markerClusterInfo||{}).pointsState,n=(o||{}).newState,l=(o||{}).oldState,d=[],p=o=0,q=0,h=!1,c=!1;if(l&&n){var g=n[a.stateId];if(o=G(this,g),p=o.x-(t?0:b.plotLeft),q=o.y-(t?0:b.plotTop),1===g.parentsId.length){a=(n||{})[a.stateId].parentsId[0];var f=l[a];g.point&&g.point.graphic&&f&&f.point&&f.point.plotX&&f.point.plotY&&f.point.plotX!==g.point.plotX&&f.point.plotY!==g.point.plotY&&(a=g.point.graphic.getBBox(),o=g.point.graphic&&g.point.graphic.isImg?0:a.width/2,g.point.graphic.attr({x:f.point.plotX-o,y:f.point.plotY-o}),g.point.graphic.animate({x:p-(g.point.graphic.radius||0),y:q-(g.point.graphic.radius||0)},e,(function(){c=!0,f.point&&f.point.destroy&&f.point.destroy()})),g.point.dataLabel&&g.point.dataLabel.alignAttr&&f.point.dataLabel&&f.point.dataLabel.alignAttr&&(g.point.dataLabel.attr({x:f.point.dataLabel.alignAttr.x,y:f.point.dataLabel.alignAttr.y}),g.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,y:g.point.dataLabel.alignAttr.y},e)))}else 0===g.parentsId.length?(y(g,!0,!0),P((function(){x(g,.1,e,!0,!0)}),r/2)):(y(g,!0,!0),g.parentsId.forEach((function(a){l&&l[a]&&(f=l[a],d.push(f),f.point&&f.point.graphic&&(h=!0,f.point.graphic.show(),f.point.graphic.animate({x:p-(f.point.graphic.radius||0),y:q-(f.point.graphic.radius||0),opacity:.4},e,(function(){c=!0,C(g,d,e,.7)})),f.point.dataLabel&&-9999!==f.point.dataLabel.y&&g.point&&g.point.dataLabel&&g.point.dataLabel.alignAttr&&(f.point.dataLabel.show(),f.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,y:g.point.dataLabel.alignAttr.y,opacity:.4},e))))})),P((function(){c||C(g,d,e,.85)}),r),h||P((function(){C(g,d,e,.1)}),r/2))}},d.prototype.getGridOffset=function(){var a=this.chart,b=this.xAxis,t=this.yAxis;return{plotLeft:b=b&&this.dataMinX&&this.dataMaxX?b.reversed?b.toPixels(this.dataMaxX):b.toPixels(this.dataMinX):a.plotLeft,plotTop:a=t&&this.dataMinY&&this.dataMaxY?t.reversed?t.toPixels(this.dataMinY):t.toPixels(this.dataMaxY):a.plotTop}},d.prototype.getScaledGridSize=function(a){var b=this.xAxis,t=this.chart.mapView;a=a.processedGridSize||V.layoutAlgorithm.gridSize;var e=!0,r=1,o=1;for(this.gridValueSize||(this.gridValueSize=t?a/t.getScale():Math.abs(b.toValue(a)-b.toValue(0))),b=+(a/(b=t?this.gridValueSize*t.getScale():b.toPixels(this.gridValueSize)-b.toPixels(0))).toFixed(14);e&&1!==b;)t=Math.pow(2,r),.75<b&&1.25>b?e=!1:b>=1/t&&b<1/t*2?(e=!1,o=t):b<=t&&b>t/2&&(e=!1,o=1/t),r++;return a/o/b},d.prototype.getRealExtremes=function(){var a=this.chart,b=a.mapView?0:a.plotLeft,t=j(this,{x:b,y:a.mapView?0:a.plotTop}),e=j(this,{x:b+a.plotWidth,y:b+a.plotHeight});return a=t.x,b=e.x,t=t.y,e=e.y,{minX:Math.min(a,b),maxX:Math.max(a,b),minY:Math.min(t,e),maxY:Math.max(t,e)}},d.prototype.onDrillToCluster=function(a){(a.point||a.target).firePointEvent("drillToCluster",a,(function(a){var b=a.point||a.target,t=b.series.xAxis,e=b.series.yAxis,r=b.series.chart,o=r.mapView;if((b.series.options.cluster||{}).drillToCluster&&b.clusteredData){var n=b.clusteredData.map((function(a){return a.x})).sort((function(a,b){return a-b}));b=b.clusteredData.map((function(a){return a.y})).sort((function(a,b){return a-b}));var l=n[0],p=n[n.length-1];n=b[0];var q=b[b.length-1],d=Math.abs(.1*(p-l)),h=Math.abs(.1*(q-n));b=Math.min(l,p)-d,l=Math.max(l,p)+d,p=Math.min(n,q)-h,n=Math.max(n,q)+h,o?o.fitToBounds({x1:b,x2:l,y1:p,y2:n}):t&&e&&(r.pointer.zoomX=!0,r.pointer.zoomY=!0,r.zoom({originalEvent:a,xAxis:[{axis:t,min:b,max:l}],yAxis:[{axis:e,min:p,max:n}]}))}}))},d.prototype.getClusterDistancesFromPoint=function(a,b,t){for(var e=[],r=0;r<a.length;r++){var o=G(this,{x:b,y:t}),n=G(this,{x:a[r].posX,y:a[r].posY});e.push({clusterIndex:r,distance:Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2))})}return e.sort((function(a,b){return a.distance-b.distance}))},d.prototype.getPointsState=function(a,b,t){b=b?m(b,t):[],t=m(a,t);var e,r={};for(T=[],a.clusters.forEach((function(a){r[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}})),a.noise.forEach((function(a){r[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}})),e=0;e<t.length;e++){a=t[e];var o=b[e];a&&o&&a.parentStateId&&o.parentStateId&&r[a.parentStateId]&&-1===r[a.parentStateId].parentsId.indexOf(o.parentStateId)&&(r[a.parentStateId].parentsId.push(o.parentStateId),-1===T.indexOf(o.parentStateId)&&T.push(o.parentStateId))}return r},d.prototype.markerClusterAlgorithms={grid:function(a,b,t,e){var r={},o=this.getGridOffset(),n=this.getScaledGridSize(e);for(e=0;e<a.length;e++){var l=G(this,{x:a[e],y:b[e]}),d=l.x-o.plotLeft;l=l.y-o.plotTop,d=Math.floor(d/n),r[d=(l=Math.floor(l/n))+"-"+d]||(r[d]=[]),r[d].push({dataIndex:t[e],x:a[e],y:b[e]})}return r},kmeans:function(a,b,t,e){var r,o=[],n=[],l={},d=e.processedDistance||V.layoutAlgorithm.distance,h=e.iterations,p=0,q=!0,c=0,m=0,g=[];for(r in e.processedGridSize=e.processedDistance,c=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,a,b,t,e):{})1<c[r].length&&(g=f(c[r]),o.push({posX:g.x,posY:g.y,oldX:0,oldY:0,startPointsLen:c[r].length,points:[]}));for(;q;){for(o.map((function(a){return a.points.length=0,a})),q=n.length=0;q<a.length;q++)c=a[q],m=b[q],(g=this.getClusterDistancesFromPoint(o,c,m)).length&&g[0].distance<d?o[g[0].clusterIndex].points.push({x:c,y:m,dataIndex:t[q]}):n.push({x:c,y:m,dataIndex:t[q]});for(r=0;r<o.length;r++)1===o[r].points.length&&(g=this.getClusterDistancesFromPoint(o,o[r].points[0].x,o[r].points[0].y))[1].distance<d&&(o[g[1].clusterIndex].points.push(o[r].points[0]),o[g[0].clusterIndex].points.length=0);for(q=!1,r=0;r<o.length;r++)g=f(o[r].points),o[r].oldX=o[r].posX,o[r].oldY=o[r].posY,o[r].posX=g.x,o[r].posY=g.y,(o[r].posX>o[r].oldX+1||o[r].posX<o[r].oldX-1||o[r].posY>o[r].oldY+1||o[r].posY<o[r].oldY-1)&&(q=!0);h&&(q=p<h-1),p++}return o.forEach((function(a,b){l["cluster"+b]=a.points})),n.forEach((function(a,b){l["noise"+b]=[a]})),l},optimizedKmeans:function(a,b,t,e){var q,r,o=this,n=e.processedDistance||V.layoutAlgorithm.gridSize,l={},d=o.getRealExtremes(),h=(o.options.cluster||{}).marker;return!o.markerClusterInfo||o.initMaxX&&o.initMaxX<d.maxX||o.initMinX&&o.initMinX>d.minX||o.initMaxY&&o.initMaxY<d.maxY||o.initMinY&&o.initMinY>d.minY?(o.initMaxX=d.maxX,o.initMinX=d.minX,o.initMaxY=d.maxY,o.initMinY=d.minY,l=o.markerClusterAlgorithms?o.markerClusterAlgorithms.kmeans.call(o,a,b,t,e):{},o.baseClusters=null):(o.baseClusters||(o.baseClusters={clusters:o.markerClusterInfo.clusters,noise:o.markerClusterInfo.noise}),o.baseClusters.clusters.forEach((function(a){a.pointsOutside=[],a.pointsInside=[],a.data.forEach((function(b){var t=G(o,b),e=G(o,a);q=Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)),r=a.clusterZone&&a.clusterZone.marker&&a.clusterZone.marker.radius?a.clusterZone.marker.radius:h&&h.radius?h.radius:V.marker.radius,q>r+(0<=n-r?n-r:r)&&S(a.pointsOutside)?a.pointsOutside.push(b):S(a.pointsInside)&&a.pointsInside.push(b)})),a.pointsInside.length&&(l[a.id]=a.pointsInside),a.pointsOutside.forEach((function(b,t){l[a.id+"_noise"+t]=[b]}))})),o.baseClusters.noise.forEach((function(a){l[a.id]=a.data}))),l}},d.prototype.preventClusterCollisions=function(a){var b=this,t=a.key.split("-").map(parseFloat),e=t[0],r=t[1],o=a.gridSize,n=a.groupedData,l=a.defaultRadius,d=a.clusterRadius,p=r*o,q=e*o,h=(t=G(b,a)).x,c=t.y;t=[];var m,x,y,C,I,k,M,g=0,v=0,A=(b.options.cluster||{}).marker,u=(b.options.cluster||{}).zones,X=b.getGridOffset();for(h-=X.plotLeft,c-=X.plotTop,y=1;5>y;y++){var Y=y%2?-1:1,L=3>y?-1:1;for(Y=Math.floor((h+Y*d)/o),Y=[(L=Math.floor((c+L*d)/o))+"-"+Y,L+"-"+r,e+"-"+Y],L=0;L<Y.length;L++)-1===t.indexOf(Y[L])&&Y[L]!==a.key&&t.push(Y[L])}return t.forEach((function(a){if(n[a]){n[a].posX||(k=f(n[a]),n[a].posX=k.x,n[a].posY=k.y);var t=G(b,{x:n[a].posX||0,y:n[a].posY||0});if(m=t.x-X.plotLeft,x=t.y-X.plotTop,t=a.split("-").map(parseFloat),I=t[0],C=t[1],u)for(g=n[a].length,y=0;y<u.length;y++)g>=u[y].from&&g<=u[y].to&&(v=S((u[y].marker||{}).radius)?u[y].marker.radius||0:A&&A.radius?A.radius:V.marker.radius);1<n[a].length&&0===v&&A&&A.radius?v=A.radius:1===n[a].length&&(v=l),M=d+v,v=0,C!==r&&Math.abs(h-m)<M&&(h=0>C-r?p+d:p+o-d),I!==e&&Math.abs(c-x)<M&&(c=0>I-e?q+d:q+o-d)}})),t=j(b,{x:h+X.plotLeft,y:c+X.plotTop}),n[a.key].posX=t.x,n[a.key].posY=t.y,t},d.prototype.isValidGroupedDataObject=function(a){var t,b=!1;return!!Y(a)&&(w(a,(function(a){if(b=!0,A(a)&&a.length){for(t=0;t<a.length;t++)if(!Y(a[t])||!a[t].x||!a[t].y){b=!1;break}}else b=!1})),b)},d.prototype.getClusteredData=function(a,b){var p,q,t=[],e=[],r=[],o=[],n=[],l=0,d=Math.max(2,b.minimumClusterSize||2);if(X(b.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(a))return v("Highcharts marker-clusters module: The custom algorithm result is not valid!",!1,this.chart),!1;for(q in a)if(a[q].length>=d){var h=a[q],c=Math.random().toString(36).substring(2,7)+"-"+O++,g=h.length;if(b.zones)for(p=0;p<b.zones.length;p++)if(g>=b.zones[p].from&&g<=b.zones[p].to){var m=b.zones[p];m.zoneIndex=p;var x=b.zones[p].marker,u=b.zones[p].className}var y=f(h);for("grid"!==b.layoutAlgorithm.type||b.allowOverlap?y={x:y.x,y:y.y}:(p=this.options.marker||{},y=this.preventClusterCollisions({x:y.x,y:y.y,key:q,groupedData:a,gridSize:this.getScaledGridSize(b.layoutAlgorithm),defaultRadius:p.radius||3+(p.lineWidth||0),clusterRadius:x&&x.radius?x.radius:(b.marker||{}).radius||V.marker.radius})),p=0;p<g;p++)h[p].parentStateId=c;if(r.push({x:y.x,y:y.y,id:q,stateId:c,index:l,data:h,clusterZone:m,clusterZoneClassName:u}),t.push(y.x),e.push(y.y),n.push({options:{formatPrefix:"cluster",dataLabels:b.dataLabels,marker:D(b.marker,{states:b.states},x||{})}}),this.options.data&&this.options.data.length)for(p=0;p<g;p++)Y(this.options.data[h[p].dataIndex])&&(h[p].options=this.options.data[h[p].dataIndex]);l++,x=null}else for(p=0;p<a[q].length;p++)h=a[q][p],c=Math.random().toString(36).substring(2,7)+"-"+O++,g=((this.options||{}).data||[])[h.dataIndex],t.push(h.x),e.push(h.y),h.parentStateId=c,o.push({x:h.x,y:h.y,id:q,stateId:c,index:l,data:a[q]}),c=g&&"object"==typeof g&&!A(g)?D(g,{x:h.x,y:h.y}):{userOptions:g,x:h.x,y:h.y},n.push({options:c}),l++;return{clusters:r,noise:o,groupedXData:t,groupedYData:e,groupMap:n}},d.prototype.destroyClusteredData=function(){(this.markerClusterSeriesData||[]).forEach((function(a){a&&a.destroy&&a.destroy()})),this.markerClusterSeriesData=null},d.prototype.hideClusteredData=function(){var a=this.markerClusterSeriesData,b=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},t=T.map((function(a){return(b[a].point||{}).id||""}));(a||[]).forEach((function(a){a&&-1!==t.indexOf(a.id)?(a.graphic&&a.graphic.hide(),a.dataLabel&&a.dataLabel.hide()):a&&a.destroy&&a.destroy()}))},d.prototype.generatePoints=function(){var q,t,e,a=this,b=a.chart,r=b.mapView,o=a.xData,n=a.yData,l=a.options.cluster,d=a.getRealExtremes(),h=[],c=[],p=[];if(r&&a.is("mappoint")&&o&&n&&(a.options.data||[]).forEach((function(b,t){(b=a.projectPoint(b))&&(o[t]=b.x,n[t]=b.y)})),l&&l.enabled&&o&&o.length&&n&&n.length&&!b.polar){var g=l.layoutAlgorithm.type;(r=l.layoutAlgorithm).processedGridSize=E(r.gridSize||V.layoutAlgorithm.gridSize,b.plotWidth),r.processedDistance=E(r.distance||V.layoutAlgorithm.distance,b.plotWidth),b=r.kmeansThreshold||V.layoutAlgorithm.kmeansThreshold;var f=r.processedGridSize/2,m=j(a,{x:0,y:0}),u=j(a,{x:f,y:f});for(f=Math.abs(m.x-u.x),m=Math.abs(m.y-u.y),u=0;u<o.length;u++){if(!a.dataMaxX)if(S(x)&&S(q)&&S(y)&&S(t))L(n[u])&&L(y)&&L(t)&&(x=Math.max(o[u],x),q=Math.min(o[u],q),y=Math.max(n[u]||y,y),t=Math.min(n[u]||t,t));else var x=q=o[u],y=t=n[u];o[u]>=d.minX-f&&o[u]<=d.maxX+f&&(n[u]||d.minY)>=d.minY-m&&(n[u]||d.maxY)<=d.maxY+m&&(h.push(o[u]),c.push(n[u]),p.push(u))}S(x)&&S(q)&&L(y)&&L(t)&&(a.dataMaxX=x,a.dataMinX=q,a.dataMaxY=y,a.dataMinY=t),d=(h=(d=X(g)?g:a.markerClusterAlgorithms?g&&a.markerClusterAlgorithms[g]?a.markerClusterAlgorithms[g]:h.length<b?a.markerClusterAlgorithms.kmeans:a.markerClusterAlgorithms.grid:function(){return!1}).call(this,h,c,p,r))?a.getClusteredData(h,l):h,l.animation&&a.markerClusterInfo&&a.markerClusterInfo.pointsState&&a.markerClusterInfo.pointsState.oldState?(function(a){a&&w(a,(function(a){a.point&&a.point.destroy&&a.point.destroy()}))}(a.markerClusterInfo.pointsState.oldState),h=a.markerClusterInfo.pointsState.newState):h={},c=o.length,p=a.markerClusterInfo,d&&(a.processedXData=d.groupedXData,a.processedYData=d.groupedYData,a.hasGroupedData=!0,a.markerClusterInfo=d,a.groupMap=d.groupMap),z.apply(this),d&&a.markerClusterInfo&&((a.markerClusterInfo.clusters||[]).forEach((function(b){(e=a.points[b.index]).isCluster=!0,e.clusteredData=b.data,e.clusterPointsAmount=b.data.length,b.point=e,M(e,"click",a.onDrillToCluster)})),(a.markerClusterInfo.noise||[]).forEach((function(b){b.point=a.points[b.index]})),l.animation&&a.markerClusterInfo&&(a.markerClusterInfo.pointsState={oldState:h,newState:a.getPointsState(d,p,c)}),l.animation?this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else z.apply(this)},M(e,"render",(function(){(this.series||[]).forEach((function(a){if(a.markerClusterInfo){var b=((a.markerClusterInfo||{}).pointsState||{}).oldState;(a.options.cluster||{}).animation&&a.markerClusterInfo&&0===a.chart.pointer.pinchDown.length&&"pan"!==((a.xAxis||{}).eventArgs||{}).trigger&&b&&Object.keys(b).length&&(a.markerClusterInfo.clusters.forEach((function(b){a.animateClusterPoint(b)})),a.markerClusterInfo.noise.forEach((function(b){a.animateClusterPoint(b)})))}}))})),M(o,"update",(function(){if(this.dataGroup)return v("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1})),M(n,"destroy",d.prototype.destroyClusteredData),M(n,"afterRender",(function(){var a=(this.options.cluster||{}).drillToCluster;this.markerClusterInfo&&this.markerClusterInfo.clusters&&this.markerClusterInfo.clusters.forEach((function(b){b.point&&b.point.graphic&&(b.point.graphic.addClass("highcharts-cluster-point"),a&&b.point&&(b.point.graphic.css({cursor:"pointer"}),b.point.dataLabel&&b.point.dataLabel.css({cursor:"pointer"})),S(b.clusterZone)&&b.point.graphic.addClass(b.clusterZoneClassName||"highcharts-cluster-zone-"+b.clusterZone.zoneIndex))}))})),M(o,"drillToCluster",(function(a){var b=(((a.point||a.target).series.options.cluster||{}).events||{}).drillToCluster;X(b)&&b.call(this,a)})),M(c,"setExtremes",(function(){var t,a=this.chart,b=0;a.series.forEach((function(a){a.markerClusterInfo&&(t=I((a.options.cluster||{}).animation),b=t.duration||0)})),P((function(){a.tooltip&&a.tooltip.destroy()}),b)}))})),e(t,"masters/modules/marker-clusters.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(o=[r(242)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(e,o))||(t.exports=n))}}]);