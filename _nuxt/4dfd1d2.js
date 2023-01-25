/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32,129],{465:function(t,o,e){var n,r,b;b=function(b){function p(b,t,o,e){b.hasOwnProperty(t)||(b[t]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:b[t]}})))}p(b=b?b._modules:{},"Series/NodesComposition.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t){var a,o=(b=b.series).prototype,e=b.prototype.pointClass.prototype,n=t.defined,r=t.extend,l=t.find,d=t.merge,h=t.pick;return function(a){function t(){return this.data=[].concat(this.points||[],this.nodes),o.destroy.apply(this,arguments)}function b(){this.nodes&&(this.nodes.forEach((function(a){a.destroy()})),this.nodes.length=0),o.setData.apply(this,arguments)}function c(a){var t=arguments,o=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==a&&o.forEach((function(a){a&&a.series&&(e.setState.apply(a,t),a.isNode||(a.fromNode.graphic&&e.setState.apply(a.fromNode,t),a.toNode&&a.toNode.graphic&&e.setState.apply(a.toNode,t)))})),e.setState.apply(this,t)}function f(a,t,b,o){var g=this,n=this.series.options.nodes,r=this.series.options.data,l=r&&r.length||0,q=r&&r[this.index];e.update.call(this,a,!this.isNode&&t,b,o),this.isNode&&(a=(n||[]).reduce((function(a,t,o){return g.id===t.id?o:a}),-1),o=d(n&&n[a]||{},r&&r[this.index]||{}),r&&(q?r[this.index]=q:r.length=l),n?0<=a?n[a]=o:n.push(o):this.series.options.nodes=[o],h(t,!0)&&this.series.chart.redraw(b))}var m=[];a.compose=function(a,o){return-1===m.indexOf(a)&&(m.push(a),(a=a.prototype).setNodeState=c,a.setState=c,a.update=f),-1===m.indexOf(o)&&(m.push(o),(a=o.prototype).destroy=t,a.setData=b),o},a.createNode=function(a){var t=this.pointClass,o=function(g,a){return l(g,(function(g){return g.id===a}))},e=o(this.nodes,a);if(!e){o=this.options.nodes&&o(this.options.nodes,a);var g=(new t).init(this,r({className:"highcharts-node",isNode:!0,id:a,y:1},o));g.linksTo=[],g.linksFrom=[],g.getSum=function(){var a=0,t=0;return g.linksTo.forEach((function(g){a+=g.weight||0})),g.linksFrom.forEach((function(g){t+=g.weight||0})),Math.max(a,t)},g.offset=function(a,t){for(var o=0,e=0;e<g[t].length;e++){if(g[t][e]===a)return o;o+=g[t][e].weight}},g.hasShape=function(){var a=0;return g.linksTo.forEach((function(g){g.outgoing&&a++})),!g.linksTo.length||a!==g.linksTo.length},g.index=this.nodes.push(g)-1,e=g}return e.formatPrefix="node",e.name=e.name||e.options.id||"",e.mass=h(e.options.mass,e.options.marker&&e.options.marker.radius,this.options.marker&&this.options.marker.radius,4),e},a.destroy=t,a.generatePoints=function(){var a=this,t=this.chart,e={};o.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(a){a.linksFrom.length=0,a.linksTo.length=0,a.level=a.options.level})),this.points.forEach((function(o){n(o.from)&&(e[o.from]||(e[o.from]=a.createNode(o.from)),e[o.from].linksFrom.push(o),o.fromNode=e[o.from],t.styledMode?o.colorIndex=h(o.options.colorIndex,e[o.from].colorIndex):o.color=o.options.color||e[o.from].color),n(o.to)&&(e[o.to]||(e[o.to]=a.createNode(o.to)),e[o.to].linksTo.push(o),o.toNode=e[o.to]),o.name=o.name||o.id}),this),this.nodeLookup=e},a.setNodeState=c,a.updateNode=f}(a||(a={})),a})),p(b,"Series/Sankey/SankeyPoint.js",[b["Core/Series/Point.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t,o){var e=this&&this.__extends||function(){var b=function(t,o){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])},b(t,o)};return function(t,o){function e(){this.constructor=t}b(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),n=o.defined;return function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.className=void 0,o.fromNode=void 0,o.level=void 0,o.linkBase=void 0,o.linksFrom=void 0,o.linksTo=void 0,o.mass=void 0,o.nodeX=void 0,o.nodeY=void 0,o.options=void 0,o.series=void 0,o.toNode=void 0,o}return e(o,t),o.prototype.applyOptions=function(t,o){return b.prototype.applyOptions.call(this,t,o),n(this.options.level)&&(this.options.column=this.column=this.options.level),this},o.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+b.prototype.getClassName.call(this)},o.prototype.getFromNode=function(){for(var t,o=-1,a=0;a<this.linksTo.length;a++){var e=this.linksTo[a];e.fromNode.column>o&&e.fromNode!==this&&(o=(t=e.fromNode).column)}return{fromNode:t,fromColumn:o}},o.prototype.setNodeColumn=function(){n(this.options.column)||(this.column=0===this.linksTo.length?0:this.getFromNode().fromColumn+1)},o.prototype.isValid=function(){return this.isNode||"number"==typeof this.weight},o}(t.seriesTypes.column.prototype.pointClass)})),p(b,"Series/Sankey/SankeySeriesDefaults.js",[],(function(){return{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,opacity:1,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}})),p(b,"Series/Sankey/SankeyColumnComposition.js",[b["Core/Utilities.js"]],(function(b){var t,o=b.defined,e=b.relativeLength;return function(b){b.compose=function(b,o){return b.sankeyColumn=new t(b,o),b};var t=function(){function b(t,b){this.points=t,this.series=b}return b.prototype.getTranslationFactor=function(t){for(var o,b=this.points,a=b.slice(),e=t.options.minLinkWidth||0,n=0,r=(t.chart.plotSizeY||0)-(t.options.borderWidth||0)-(b.length-1)*t.nodePadding;b.length;){for(n=r/b.sankeyColumn.sum(),t=!1,o=b.length;o--;)b[o].getSum()*n<e&&(b.splice(o,1),r-=e,t=!0);if(!t)break}return b.length=0,a.forEach((function(a){b.push(a)})),n},b.prototype.top=function(b){var t=this.series,a=t.nodePadding,o=this.points.reduce((function(o,e){return 0<o&&(o+=a),o+(e=Math.max(e.getSum()*b,t.options.minLinkWidth||0))}),0);return((t.chart.plotSizeY||0)-o)/2},b.prototype.left=function(b){var t=this.series,a=t.chart,o=t.options.equalNodes,e=a.inverted?a.plotHeight:a.plotWidth,n=t.nodePadding,r=this.points.reduce((function(a,r){return 0<a&&(a+=n),a+(r=o?e/r.series.nodes.length-n:Math.max(r.getSum()*b,t.options.minLinkWidth||0))}),0);return((a.plotSizeX||0)-Math.round(r))/2},b.prototype.sum=function(){return this.points.reduce((function(b,t){return b+t.getSum()}),0)},b.prototype.offset=function(b,t){var a=this.points,n=this.series,r=n.nodePadding,l=0;if(n.is("organization")&&b.hangsFrom)return{absoluteTop:b.hangsFrom.nodeY};for(var d=0;d<a.length;d++){var h=a[d].getSum(),c=Math.max(h*t,n.options.minLinkWidth||0),q=b.options[n.chart.inverted?"offsetHorizontal":"offsetVertical"],f=b.options.offset||0;if(h=h?c+r:0,a[d]===b)return{relativeTop:l+(o(q)?e(q,c):e(f,h))};l+=h}},b}();b.SankeyColumnAdditions=t}(t||(t={})),t})),p(b,"Series/TreeUtilities.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],(function(b,t){var o=t.extend,p=t.isArray,e=t.isNumber,n=t.isObject,r=t.merge,l=t.pick;return{getColor:function(a,t){var g,o=t.index,e=t.mapOptionsToLevel,n=t.parentColor,r=t.parentColorIndex,d=t.series,q=t.colors,h=t.siblings,u=d.points,c=d.chart.options.chart;if(a){if(u=u[a.i],a=e[a.level]||{},e=u&&a.colorByPoint)var f=u.index%(q?q.length:c.colorCount),m=q&&q[f];d.chart.styledMode||(q=u&&u.options.color,c=a&&a.color,(g=n)&&(g=(g=a&&a.colorVariation)&&"brightness"===g.key&&o&&h?b.parse(n).brighten(o/h*g.to).get():n),g=l(q,c,m,g,d.color));var y=l(u&&u.options.colorIndex,a&&a.colorIndex,f,r,t.colorIndex)}return{color:g,colorIndex:y}},getLevelOptions:function(a){var b={};if(n(a)){var t=e(a.from)?a.from:1,o=a.levels,d={},h=n(a.defaults)?a.defaults:{};for(p(o)&&(d=o.reduce((function(a,b){if(n(b)&&e(b.level)){var o=r({},b),d=l(o.levelIsConstant,h.levelIsConstant);delete o.levelIsConstant,delete o.level,b=b.level+(d?0:t-1),n(a[b])?r(!0,a[b],o):a[b]=o}return a}),{})),o=e(a.to)?a.to:1,a=0;a<=o;a++)b[a]=r({},h,n(d[a])?d[a]:{})}return b},setTreeValues:function t(a,b){var e=b.before,n=b.idRoot,r=b.mapIdToNode[n],d=b.points[a.i],h=d&&d.options||{},q=[],c=0;return a.levelDynamic=a.level-(!1!==b.levelIsConstant?0:r.level),a.name=l(d&&d.name,""),a.visible=n===a.id||!0===b.visible,"function"==typeof e&&(a=e(a,b)),a.children.forEach((function(e,n){var g=o({},b);o(g,{index:n,siblings:a.children.length,visible:a.visible}),e=t(e,g),q.push(e),e.visible&&(c+=e.val)})),e=l(h.value,c),a.visible=0<=e&&(0<c||a.visible),a.children=q,a.childrenTotal=c,a.isLeaf=a.visible&&!c,a.val=e,a},updateRootId:function(a){if(n(a)){var b=n(a.options)?a.options:{};b=l(a.rootNode,b.rootId,""),n(a.userOptions)&&(a.userOptions.rootId=b),a.rootNode=b}return b}}})),p(b,"Series/Sankey/SankeySeries.js",[b["Core/Color/Color.js"],b["Core/Globals.js"],b["Series/NodesComposition.js"],b["Series/Sankey/SankeyPoint.js"],b["Series/Sankey/SankeySeriesDefaults.js"],b["Core/Series/SeriesRegistry.js"],b["Series/Sankey/SankeyColumnComposition.js"],b["Series/TreeUtilities.js"],b["Core/Utilities.js"]],(function(b,t,o,e,p,n,r,l,d){var a=this&&this.__extends||function(){var a=function(b,g){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,g){a.__proto__=g}||function(a,g){for(var b in g)g.hasOwnProperty(b)&&(a[b]=g[b])},a(b,g)};return function(b,g){function t(){this.constructor=b}a(b,g),b.prototype=null===g?Object.create(g):(t.prototype=g.prototype,new t)}}(),h=n.series,c=n.seriesTypes.column,f=l.getLevelOptions;l=d.extend;var m=d.isObject,y=d.merge,v=d.pick,q=d.relativeLength,k=d.stableSort;return d=function(t){function e(){var a=null!==t&&t.apply(this,arguments)||this;return a.colDistance=void 0,a.data=void 0,a.group=void 0,a.nodeLookup=void 0,a.nodePadding=void 0,a.nodes=void 0,a.nodeWidth=void 0,a.options=void 0,a.points=void 0,a.translationFactor=void 0,a}return a(e,t),e.getDLOptions=function(a){var b=m(a.optionsPoint)?a.optionsPoint.dataLabels:{};return a=m(a.level)?a.level.dataLabels:{},y({style:{}},a,b)},e.prototype.createNodeColumns=function(){var a=[];this.nodes.forEach((function(b){b.setNodeColumn(),a[b.column]||(a[b.column]=r.compose([],this)),a[b.column].push(b)}),this);for(var b=0;b<a.length;b++)void 0===a[b]&&(a[b]=r.compose([],this));return a},e.prototype.order=function(a,b){var g=this;void 0===a.level&&(a.level=b,a.linksFrom.forEach((function(a){a.toNode&&g.order(a.toNode,b+1)})))},e.prototype.generatePoints=function(){o.generatePoints.apply(this,arguments);var a=this;this.orderNodes&&(this.nodes.filter((function(a){return 0===a.linksTo.length})).forEach((function(b){a.order(b,0)})),k(this.nodes,(function(a,b){return a.level-b.level})))},e.prototype.getNodePadding=function(){var a=this.options.nodePadding||0;if(this.nodeColumns){var b=this.nodeColumns.reduce((function(a,b){return Math.max(a,b.length)}),0);b*a>this.chart.plotSizeY&&(a=this.chart.plotSizeY/b)}return a},e.prototype.hasData=function(){return!!this.processedXData.length},e.prototype.pointAttribs=function(a,t){if(!a)return{};var g=this,o=g.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},e=a.options,n=o.states&&o.states[t||""]||{};t=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce((function(a,b){return a[b]=v(n[b],e[b],o[b],g.options[b]),a}),{});var r=v(n.color,e.color,t.colorByPoint?a.color:o.color);return a.isNode?{fill:r,stroke:t.borderColor,"stroke-width":t.borderWidth,opacity:t.opacity}:{fill:b.parse(r).setOpacity(t.linkOpacity).get()}},e.prototype.drawTracker=function(){c.prototype.drawTracker.call(this,this.points),c.prototype.drawTracker.call(this,this.nodes)},e.prototype.drawPoints=function(){c.prototype.drawPoints.call(this,this.points),c.prototype.drawPoints.call(this,this.nodes)},e.prototype.drawDataLabels=function(){c.prototype.drawDataLabels.call(this,this.points),c.prototype.drawDataLabels.call(this,this.nodes)},e.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns(),this.nodeWidth=q(this.options.nodeWidth,this.chart.plotSizeX);var a=this,b=this.chart,t=this.options,o=this.nodeWidth,e=this.nodeColumns;this.nodePadding=this.getNodePadding(),this.translationFactor=e.reduce((function(b,t){return Math.min(b,t.sankeyColumn.getTranslationFactor(a))}),1/0),this.colDistance=(b.plotSizeX-o-t.borderWidth)/Math.max(1,e.length-1),a.mapOptionsToLevel=f({from:1,levels:t.levels,to:e.length-1,defaults:{borderColor:t.borderColor,borderRadius:t.borderRadius,borderWidth:t.borderWidth,color:a.color,colorByPoint:t.colorByPoint,levelIsConstant:!0,linkColor:t.linkColor,linkLineWidth:t.linkLineWidth,linkOpacity:t.linkOpacity,states:t.states}}),e.forEach((function(b){b.forEach((function(t){a.translateNode(t,b)}))}),this),this.nodes.forEach((function(b){b.linksFrom.forEach((function(b){(b.weight||b.isNull)&&b.to&&(a.translateLink(b),b.allowShadow=!1)}))}))},e.prototype.translateLink=function(a){var b=function(b,t){return t=b.offset(a,t)*e,Math.min(b.nodeY+t,b.nodeY+(b.shapeArgs&&b.shapeArgs.height||0)-n)},t=a.fromNode,o=a.toNode,g=this.chart,e=this.translationFactor,n=Math.max(a.weight*e,this.options.minLinkWidth),r=(g.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,l=b(t,"linksFrom");b=b(o,"linksTo");var d=t.nodeX,h=this.nodeWidth;o=o.nodeX;var q=a.outgoing,c=o>d+h;if(g.inverted&&(l=g.plotSizeY-l,b=(g.plotSizeY||0)-b,h=-h,n=-n,c=d>o),a.shapeType="path",a.linkBase=[l,l+n,b,b+n],c&&"number"==typeof b)a.shapeArgs={d:[["M",d+h,l],["C",d+h+r,l,o-r,b,o,b],["L",o+(q?h:0),b+n/2],["L",o,b+n],["C",o-r,b+n,d+h+r,l+n,d+h,l+n],["Z"]]};else if("number"==typeof b){r=o-20-n,q=o-20;var p=(c=d+h)+20,f=p+n,m=l,y=l+n,v=y+20,k=v+(g.plotHeight-l-n),u=k+20,S=u+n,C=b,x=C+n,N=x+20,L=u+.7*n,w=o-.7*n,O=c+.7*n;a.shapeArgs={d:[["M",c,m],["C",O,m,f,y-.7*n,f,v],["L",f,k],["C",f,L,O,S,c,S],["L",o,S],["C",w,S,r,L,r,k],["L",r,N],["C",r,x-.7*n,w,C,o,C],["L",o,x],["C",q,x,q,x,q,N],["L",q,k],["C",q,u,q,u,o,u],["L",c,u],["C",p,u,p,u,p,k],["L",p,v],["C",p,y,p,y,c,y],["Z"]]}}a.dlBox={x:d+(o-d+h)/2,y:l+(b-l)/2,height:n,width:0},a.tooltipPos=g.inverted?[g.plotSizeY-a.dlBox.y-n/2,g.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+n/2],a.y=a.plotY=1,a.x=a.plotX=1,a.color||(a.color=t.color)},e.prototype.translateNode=function(a,b){var t=this.translationFactor,o=this.chart,g=this.options,n=a.getSum(),r=Math.max(Math.round(n*t),this.options.minLinkWidth),l=Math.round(this.nodeWidth),d=Math.round(g.borderWidth)%2/2,h=b.sankeyColumn.offset(a,t);if(b=Math.floor(v(h.absoluteTop,b.sankeyColumn.top(t)+h.relativeTop))+d,d=Math.floor(this.colDistance*a.column+g.borderWidth/2)+q(a.options.offsetHorizontal||0,l)+d,d=o.inverted?o.plotSizeX-d:d,a.sum=n){a.shapeType="rect",a.nodeX=d,a.nodeY=b,n=d,t=b,h=a.options.width||g.width||l;var p=a.options.height||g.height||r;o.inverted&&(n=d-l,t=o.plotSizeY-b-r,h=a.options.height||g.height||l,p=a.options.width||g.width||r),a.dlOptions=e.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotX=1,a.plotY=1,a.tooltipPos=o.inverted?[o.plotSizeY-t-p/2,o.plotSizeX-n-h/2]:[n+h/2,t+p/2],a.shapeArgs={x:n,y:t,width:h,height:p,display:a.hasShape()?"":"none"}}else a.dlOptions={enabled:!1}},e.defaultOptions=y(c.defaultOptions,p),e}(c),o.compose(e,d),l(d.prototype,{animate:h.prototype.animate,createNode:o.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:e,searchPoint:t.noop}),n.registerSeriesType("sankey",d),d})),p(b,"masters/modules/sankey.src.js",[],(function(){}))},t.exports?(b.default=b,t.exports=b):(n=[e(219)],void 0===(r=function(p){return b(p),b.Highcharts=p,b}.apply(o,n))||(t.exports=r))},481:function(t,o,e){var n,r,l;l=function(t){"use strict";var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}e(o,"Series/ArcDiagram/ArcDiagramPoint.js",[o["Series/NodesComposition.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o,e){var n,r=this&&this.__extends||(n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},n(t,b)},function(t,b){function o(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),l=o.seriesTypes.sankey.prototype.pointClass,d=e.extend,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.fromNode=void 0,o.index=void 0,o.linksFrom=void 0,o.linksTo=void 0,o.options=void 0,o.series=void 0,o.scale=void 0,o.shapeArgs=void 0,o.toNode=void 0,o}return r(o,t),o.prototype.isValid=function(){return!0},o}(l);return d(h.prototype,{setState:t.setNodeState}),h})),e(o,"Series/ArcDiagram/ArcDiagramSeries.js",[o["Series/ArcDiagram/ArcDiagramPoint.js"],o["Series/Sankey/SankeyColumnComposition.js"],o["Core/Series/Series.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Renderer/SVG/SVGRenderer.js"],o["Core/Utilities.js"]],(function(t,o,e,n,r,l){var d,h=this&&this.__extends||(d=function(t,b){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},d(t,b)},function(t,b){function o(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),c=this&&this.__rest||function(s,t){var o={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&t.indexOf(p)<0&&(o[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)t.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(o[p[i]]=s[p[i]])}return o},f=r.prototype.symbols,m=n.seriesTypes,y=m.column,v=m.sankey,k=l.extend,S=l.merge,C=l.pick,x=l.relativeLength,N=function(t){function n(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.nodeColumns=void 0,o.nodes=void 0,o.points=void 0,o}return h(n,t),n.prototype.createNodeColumns=function(){var t=this,e=this,n=e.chart,r=o.compose([],e);return r.sankeyColumn.maxLength=n.inverted?n.plotHeight:n.plotWidth,r.sankeyColumn.getTranslationFactor=function(o){for(var e,i,l,d=r.slice(),h=t.options.minLinkWidth||0,c=0,f=0,m=1,y=0,v=(n.plotSizeX||0)-(o.options.marker&&o.options.marker.lineWidth||0)-(r.length-1)*o.nodePadding;r.length;){for(c=v/r.sankeyColumn.sum(),e=!1,i=r.length;i--;){l=r[i].getSum()*c*m;var k=Math.min(n.plotHeight,n.plotWidth);l>k?m=Math.min(k/l,m):l<h&&(r.splice(i,1),v-=h,l=h,e=!0),y+=l*(1-m)/2,f=Math.max(f,l)}if(!e)break}return r.length=0,d.forEach((function(t){t.scale=m,r.push(t)})),r.sankeyColumn.maxRadius=f,r.sankeyColumn.scale=m,r.sankeyColumn.additionalSpace=y,c},r.sankeyColumn.offset=function(t,o){for(var l,d=t.series.options.equalNodes,h=r.sankeyColumn.additionalSpace||0,c=e.nodePadding,f=Math.min(n.plotWidth,n.plotHeight,(r.sankeyColumn.maxLength||0)/e.nodes.length-c),i=0;i<r.length;i++){var m=r[i].getSum()*(r.sankeyColumn.scale||0),y=d?f:Math.max(m*o,e.options.minLinkWidth||0);if(l=m?y+c:0,r[i]===t)return{relativeLeft:h+x(t.options.offset||0,l)};h+=l}},e.nodes.forEach((function(t){t.column=0,r.push(t)})),[r]},n.prototype.translateLink=function(t){var o,e,n=this,r=t.fromNode,l=t.toNode,d=this.chart,h=n.translationFactor,c=t.options,f=n.options,m=C(c.linkWeight,f.linkWeight,Math.max((t.weight||0)*h*r.scale,n.options.minLinkWidth||0)),y=t.series.options.centeredLinks,v=r.nodeY,k=function(o,e){var n=(o.offset(t,e)||0)*h;return Math.min(o.nodeX+n,o.nodeX+(o.shapeArgs&&o.shapeArgs.height||0)-m)},S=y?r.nodeX+((r.shapeArgs.height||0)-m)/2:k(r,"linksFrom"),x=y?l.nodeX+((l.shapeArgs.height||0)-m)/2:k(l,"linksTo"),N=v,L=m;S>x&&(S=(o=[x,S])[0],x=o[1]),f.reversed&&(S=(e=[x,S])[0],x=e[1],N=(d.plotSizeY||0)-N,L=-L),t.shapeType="path",t.linkBase=[S,S+m,x,x+m];var w=(x+m-S)/Math.abs(x+m-S)*C(f.linkRadius,Math.min(Math.abs(x+m-S)/2,r.nodeY-Math.abs(m)));t.shapeArgs={d:[["M",S,N],["A",(x+m-S)/2,w,0,0,1,x+m,N],["L",x,N],["A",(x-S-m)/2,w-m,0,0,0,S+m,N],["Z"]]},t.dlBox={x:S+(x-S)/2,y:N-w,height:m,width:0},t.tooltipPos=d.inverted?[(d.plotSizeY||0)-t.dlBox.y-m/2,(d.plotSizeX||0)-t.dlBox.x]:[t.dlBox.x,t.dlBox.y+m/2],t.y=t.plotY=1,t.x=t.plotX=1,t.color||(t.color=r.color)},n.prototype.translateNode=function(t,o){var e=this,n=e.translationFactor,r=e.chart,l=r.inverted?r.plotWidth:r.plotHeight,d=e.options,h=Math.min(r.plotWidth,r.plotHeight,l/t.series.nodes.length-this.nodePadding),c=t.getSum()*(o.sankeyColumn.scale||0),m=d.equalNodes?h:Math.max(c*n,this.options.minLinkWidth||0),y=Math.round(d.marker&&d.marker.lineWidth||0)%2/2,k=o.sankeyColumn.offset(t,n),x=Math.floor(C(k&&k.absoluteLeft,(o.sankeyColumn.left(n)||0)+(k&&k.relativeLeft||0)))+y,N=S(d.marker,t.options.marker),symbol=N.symbol,L=N.radius,w=parseInt(d.offset,10)*((r.inverted?r.plotWidth:r.plotHeight)-(Math.floor(this.colDistance*(t.column||0)+(N.lineWidth||0)/2)+y+(o.sankeyColumn.scale||0)*(o.sankeyColumn.maxRadius||0)/2))/100;if(t.sum=c,c){t.nodeX=x,t.nodeY=w;var O=x,P=t.options.width||d.width||m,j=t.options.height||d.height||m,T=w;d.reversed&&(T=(r.plotSizeY||0)-w,r.inverted&&(T=(r.plotSizeY||0)-w)),this.mapOptionsToLevel&&(t.dlOptions=v.getDLOptions({level:this.mapOptionsToLevel[t.level],optionsPoint:t.options})),t.plotX=1,t.plotY=1,t.tooltipPos=r.inverted?[(r.plotSizeY||0)-T-j/2,(r.plotSizeX||0)-O-P/2]:[O+P/2,T+j/2],t.shapeType="path",t.shapeArgs={d:f[symbol||"circle"](O,T-(L||j)/2,L||P,L||j),width:L||P,height:L||j},t.dlBox={x:O+P/2,y:T,height:0,width:0}}else t.dlOptions={enabled:!1}},n.prototype.drawDataLabels=function(){if(this.options.dataLabels){var t=this.options.dataLabels.textPath;y.prototype.drawDataLabels.call(this,this.nodes),this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath,y.prototype.drawDataLabels.call(this,this.data),this.options.dataLabels.textPath=t}},n.prototype.pointAttribs=function(o,n){if(o&&o.isNode){var r=e.prototype.pointAttribs.apply(this,arguments),l=(r.opacity,c(r,["opacity"]));return l}return t.prototype.pointAttribs.apply(this,arguments)},n.prototype.markerAttribs=function(o){return o.isNode?t.prototype.markerAttribs.apply(this,arguments):{}},n.defaultOptions=S(v.defaultOptions,{centeredLinks:!1,offset:"100%",equalNodes:!1,reversed:!1,dataLabels:{linkTextPath:{attributes:{startOffset:"25%"}}},marker:{symbol:"circle",fillOpacity:1,lineWidth:0,states:{}}}),n}(v);return k(N.prototype,{orderNodes:!1}),N.prototype.pointClass=t,n.registerSeriesType("arcdiagram",N),N})),e(o,"masters/modules/arc-diagram.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(n=[e(219),e(465)],void 0===(r=function(t){return l(t),l.Highcharts=t,l}.apply(o,n))||(t.exports=r))}}]);