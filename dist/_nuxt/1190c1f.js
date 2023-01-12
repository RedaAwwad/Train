/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22,117],{471:function(t,o,e){var n,r,l;l=function(t){function q(t,o,e,n){t.hasOwnProperty(o)||(t[o]=n.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}q(t=t?t._modules:{},"Series/NodesComposition.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(t,o){var a,e=(t=t.series).prototype,n=t.prototype.pointClass.prototype,r=o.defined,l=o.extend,g=o.find,d=o.merge,h=o.pick;return function(a){function t(){return this.data=[].concat(this.points||[],this.nodes),e.destroy.apply(this,arguments)}function o(){this.nodes&&(this.nodes.forEach((function(a){a.destroy()})),this.nodes.length=0),e.setData.apply(this,arguments)}function c(a){var t=arguments,o=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==a&&o.forEach((function(b){b&&b.series&&(n.setState.apply(b,t),b.isNode||(b.fromNode.graphic&&n.setState.apply(b.fromNode,t),b.toNode&&b.toNode.graphic&&n.setState.apply(b.toNode,t)))})),n.setState.apply(this,t)}function f(a,t,o,b){var e=this,r=this.series.options.nodes,l=this.series.options.data,c=l&&l.length||0,f=l&&l[this.index];n.update.call(this,a,!this.isNode&&t,o,b),this.isNode&&(a=(r||[]).reduce((function(b,a,t){return e.id===a.id?t:b}),-1),b=d(r&&r[a]||{},l&&l[this.index]||{}),l&&(f?l[this.index]=f:l.length=c),r?0<=a?r[a]=b:r.push(b):this.series.options.nodes=[b],h(t,!0)&&this.series.chart.redraw(o))}var p=[];a.compose=function(a,e){return-1===p.indexOf(a)&&(p.push(a),(a=a.prototype).setNodeState=c,a.setState=c,a.update=f),-1===p.indexOf(e)&&(p.push(e),(a=e.prototype).destroy=t,a.setData=o),e},a.createNode=function(a){var t=this.pointClass,o=function(b,a){return g(b,(function(b){return b.id===a}))},b=o(this.nodes,a);if(!b){o=this.options.nodes&&o(this.options.nodes,a);var e=(new t).init(this,l({className:"highcharts-node",isNode:!0,id:a,y:1},o));e.linksTo=[],e.linksFrom=[],e.getSum=function(){var b=0,a=0;return e.linksTo.forEach((function(a){b+=a.weight||0})),e.linksFrom.forEach((function(b){a+=b.weight||0})),Math.max(b,a)},e.offset=function(b,a){for(var t=0,o=0;o<e[a].length;o++){if(e[a][o]===b)return t;t+=e[a][o].weight}},e.hasShape=function(){var b=0;return e.linksTo.forEach((function(a){a.outgoing&&b++})),!e.linksTo.length||b!==e.linksTo.length},e.index=this.nodes.push(e)-1,b=e}return b.formatPrefix="node",b.name=b.name||b.options.id||"",b.mass=h(b.options.mass,b.options.marker&&b.options.marker.radius,this.options.marker&&this.options.marker.radius,4),b},a.destroy=t,a.generatePoints=function(){var a=this,t=this.chart,o={};e.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(b){b.linksFrom.length=0,b.linksTo.length=0,b.level=b.options.level})),this.points.forEach((function(b){r(b.from)&&(o[b.from]||(o[b.from]=a.createNode(b.from)),o[b.from].linksFrom.push(b),b.fromNode=o[b.from],t.styledMode?b.colorIndex=h(b.options.colorIndex,o[b.from].colorIndex):b.color=b.options.color||o[b.from].color),r(b.to)&&(o[b.to]||(o[b.to]=a.createNode(b.to)),o[b.to].linksTo.push(b),b.toNode=o[b.to]),b.name=b.name||b.id}),this),this.nodeLookup=o},a.setNodeState=c,a.updateNode=f}(a||(a={})),a})),q(t,"Series/Sankey/SankeyPoint.js",[t["Core/Series/Point.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(t,o,e){var n=this&&this.__extends||function(){var t=function(g,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])},t(g,o)};return function(g,o){function e(){this.constructor=g}t(g,o),g.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),r=e.defined;return function(o){function g(){var t=null!==o&&o.apply(this,arguments)||this;return t.className=void 0,t.fromNode=void 0,t.level=void 0,t.linkBase=void 0,t.linksFrom=void 0,t.linksTo=void 0,t.mass=void 0,t.nodeX=void 0,t.nodeY=void 0,t.options=void 0,t.series=void 0,t.toNode=void 0,t}return n(g,o),g.prototype.applyOptions=function(o,e){return t.prototype.applyOptions.call(this,o,e),r(this.options.level)&&(this.options.column=this.column=this.options.level),this},g.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+t.prototype.getClassName.call(this)},g.prototype.getFromNode=function(){for(var t,o=-1,a=0;a<this.linksTo.length;a++){var e=this.linksTo[a];e.fromNode.column>o&&e.fromNode!==this&&(o=(t=e.fromNode).column)}return{fromNode:t,fromColumn:o}},g.prototype.setNodeColumn=function(){r(this.options.column)||(this.column=0===this.linksTo.length?0:this.getFromNode().fromColumn+1)},g.prototype.isValid=function(){return this.isNode||"number"==typeof this.weight},g}(o.seriesTypes.column.prototype.pointClass)})),q(t,"Series/Sankey/SankeyColumnComposition.js",[t["Core/Utilities.js"]],(function(t){var o,e=t.defined,n=t.relativeLength;return function(t){t.compose=function(t,e){return t.sankeyColumn=new o(t,e),t};var o=function(){function t(t,o){this.points=t,this.series=o}return t.prototype.getTranslationFactor=function(t){for(var u,o=this.points,a=o.slice(),e=t.options.minLinkWidth||0,g=0,n=(t.chart.plotSizeY||0)-(t.options.borderWidth||0)-(o.length-1)*t.nodePadding;o.length;){for(g=n/o.sankeyColumn.sum(),t=!1,u=o.length;u--;)o[u].getSum()*g<e&&(o.splice(u,1),n-=e,t=!0);if(!t)break}return o.length=0,a.forEach((function(a){o.push(a)})),g},t.prototype.top=function(t){var o=this.series,a=o.nodePadding,e=this.points.reduce((function(e,g){return 0<e&&(e+=a),e+(g=Math.max(g.getSum()*t,o.options.minLinkWidth||0))}),0);return((o.chart.plotSizeY||0)-e)/2},t.prototype.left=function(t){var o=this.series,a=o.chart,e=o.options.equalNodes,g=a.inverted?a.plotHeight:a.plotWidth,n=o.nodePadding,r=this.points.reduce((function(a,p){return 0<a&&(a+=n),a+(p=e?g/p.series.nodes.length-n:Math.max(p.getSum()*t,o.options.minLinkWidth||0))}),0);return((a.plotSizeX||0)-Math.round(r))/2},t.prototype.sum=function(){return this.points.reduce((function(t,g){return t+g.getSum()}),0)},t.prototype.offset=function(t,g){var a=this.points,o=this.series,r=o.nodePadding,u=0;if(o.is("organization")&&t.hangsFrom)return{absoluteTop:t.hangsFrom.nodeY};for(var l=0;l<a.length;l++){var d=a[l].getSum(),p=Math.max(d*g,o.options.minLinkWidth||0),h=t.options[o.chart.inverted?"offsetHorizontal":"offsetVertical"],c=t.options.offset||0;if(d=d?p+r:0,a[l]===t)return{relativeTop:u+(e(h)?n(h,p):n(c,d))};u+=d}},t}();t.SankeyColumnAdditions=o}(o||(o={})),o})),q(t,"Series/TreeUtilities.js",[t["Core/Color/Color.js"],t["Core/Utilities.js"]],(function(t,o){var e=o.extend,n=o.isArray,q=o.isNumber,g=o.isObject,r=o.merge,l=o.pick;return{getColor:function(a,o){var e,g=o.index,n=o.mapOptionsToLevel,r=o.parentColor,d=o.parentColorIndex,p=o.series,h=o.colors,c=o.siblings,f=p.points,b=p.chart.options.chart;if(a){if(f=f[a.i],a=n[a.level]||{},n=f&&a.colorByPoint)var m=f.index%(h?h.length:b.colorCount),y=h&&h[m];p.chart.styledMode||(h=f&&f.options.color,b=a&&a.color,(e=r)&&(e=(e=a&&a.colorVariation)&&"brightness"===e.key&&g&&c?t.parse(r).brighten(g/c*e.to).get():r),e=l(h,b,y,e,p.color));var v=l(f&&f.options.colorIndex,a&&a.colorIndex,m,d,o.colorIndex)}return{color:e,colorIndex:v}},getLevelOptions:function(a){var t=null;if(g(a)){t={};var o=q(a.from)?a.from:1,e=a.levels,d={},h=g(a.defaults)?a.defaults:{};for(n(e)&&(d=e.reduce((function(a,t){if(g(t)&&q(t.level)){var e=r({},t),n=l(e.levelIsConstant,h.levelIsConstant);delete e.levelIsConstant,delete e.level,t=t.level+(n?0:o-1),g(a[t])?r(!0,a[t],e):a[t]=e}return a}),{})),e=q(a.to)?a.to:1,a=0;a<=e;a++)t[a]=r({},h,g(d[a])?d[a]:{})}return t},setTreeValues:function t(a,o){var n=o.before,r=o.idRoot,g=o.mapIdToNode[r],d=o.points[a.i],p=d&&d.options||{},h=[],c=0;return a.levelDynamic=a.level-(!1!==o.levelIsConstant?0:g.level),a.name=l(d&&d.name,""),a.visible=r===a.id||!0===o.visible,"function"==typeof n&&(a=n(a,o)),a.children.forEach((function(n,b){var r=e({},o);e(r,{index:b,siblings:a.children.length,visible:a.visible}),n=t(n,r),h.push(n),n.visible&&(c+=n.val)})),n=l(p.value,c),a.visible=0<=n&&(0<c||a.visible),a.children=h,a.childrenTotal=c,a.isLeaf=a.visible&&!c,a.val=n,a},updateRootId:function(a){if(g(a)){var t=g(a.options)?a.options:{};t=l(a.rootNode,t.rootId,""),g(a.userOptions)&&(a.userOptions.rootId=t),a.rootNode=t}return t}}})),q(t,"Series/Sankey/SankeySeries.js",[t["Core/Color/Color.js"],t["Core/Globals.js"],t["Series/NodesComposition.js"],t["Series/Sankey/SankeyPoint.js"],t["Core/Series/SeriesRegistry.js"],t["Series/Sankey/SankeyColumnComposition.js"],t["Series/TreeUtilities.js"],t["Core/Utilities.js"]],(function(t,o,e,n,q,r,g,l){var d=this&&this.__extends||function(){var a=function(t,b){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var t in a)a.hasOwnProperty(t)&&(b[t]=a[t])},a(t,b)};return function(t,b){function o(){this.constructor=t}a(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}}(),a=q.series,h=q.seriesTypes.column,c=g.getLevelOptions;g=l.extend;var u=l.isObject,f=l.merge,m=l.pick,p=l.relativeLength,y=l.stableSort;return l=function(a){function o(){var b=null!==a&&a.apply(this,arguments)||this;return b.colDistance=void 0,b.data=void 0,b.group=void 0,b.nodeLookup=void 0,b.nodePadding=void 0,b.nodes=void 0,b.nodeWidth=void 0,b.options=void 0,b.points=void 0,b.translationFactor=void 0,b}return d(o,a),o.getDLOptions=function(b){var a=u(b.optionsPoint)?b.optionsPoint.dataLabels:{};return b=u(b.level)?b.level.dataLabels:{},f({style:{}},b,a)},o.prototype.createNodeColumns=function(){var b=[];this.nodes.forEach((function(a){a.setNodeColumn(),b[a.column]||(b[a.column]=r.compose([],this)),b[a.column].push(a)}),this);for(var a=0;a<b.length;a++)void 0===b[a]&&(b[a]=r.compose([],this));return b},o.prototype.generatePoints=function(){function b(a,t){void 0===a.level&&(a.level=t,a.linksFrom.forEach((function(a){a.toNode&&b(a.toNode,t+1)})))}e.generatePoints.apply(this,arguments),this.orderNodes&&(this.nodes.filter((function(b){return 0===b.linksTo.length})).forEach((function(a){b(a,0)})),y(this.nodes,(function(b,a){return b.level-a.level})))},o.prototype.getNodePadding=function(){var b=this.options.nodePadding||0;if(this.nodeColumns){var a=this.nodeColumns.reduce((function(b,a){return Math.max(b,a.length)}),0);a*b>this.chart.plotSizeY&&(b=this.chart.plotSizeY/a)}return b},o.prototype.hasData=function(){return!!this.processedXData.length},o.prototype.pointAttribs=function(b,a){if(!b)return{};var o=this,e=o.mapOptionsToLevel[(b.isNode?b.level:b.fromNode.level)||0]||{},g=b.options,n=e.states&&e.states[a||""]||{};a=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce((function(a,b){return a[b]=m(n[b],g[b],e[b],o.options[b]),a}),{});var r=m(n.color,g.color,a.colorByPoint?b.color:e.color);return b.isNode?{fill:r,stroke:a.borderColor,"stroke-width":a.borderWidth,opacity:a.opacity}:{fill:t.parse(r).setOpacity(a.linkOpacity).get()}},o.prototype.render=function(){var a=this.points;this.points=this.points.concat(this.nodes||[]),h.prototype.render.call(this),this.points=a},o.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns(),this.nodeWidth=p(this.options.nodeWidth,this.chart.plotSizeX);var a=this,t=this.chart,o=this.options,g=this.nodeWidth,e=this.nodeColumns;this.nodePadding=this.getNodePadding(),this.translationFactor=e.reduce((function(b,t){return Math.min(b,t.sankeyColumn.getTranslationFactor(a))}),1/0),this.colDistance=(t.plotSizeX-g-o.borderWidth)/Math.max(1,e.length-1),a.mapOptionsToLevel=c({from:1,levels:o.levels,to:e.length-1,defaults:{borderColor:o.borderColor,borderRadius:o.borderRadius,borderWidth:o.borderWidth,color:a.color,colorByPoint:o.colorByPoint,levelIsConstant:!0,linkColor:o.linkColor,linkLineWidth:o.linkLineWidth,linkOpacity:o.linkOpacity,states:o.states}}),e.forEach((function(b){b.forEach((function(t){a.translateNode(t,b)}))}),this),this.nodes.forEach((function(b){b.linksFrom.forEach((function(b){(b.weight||b.isNull)&&b.to&&(a.translateLink(b),b.allowShadow=!1)}))}))},o.prototype.translateLink=function(a){var b=function(b,t){return t=b.offset(a,t)*g,Math.min(b.nodeY+t,b.nodeY+(b.shapeArgs&&b.shapeArgs.height||0)-n)},t=a.fromNode,o=a.toNode,e=this.chart,g=this.translationFactor,n=Math.max(a.weight*g,this.options.minLinkWidth),r=(e.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,l=b(t,"linksFrom");b=b(o,"linksTo");var p=t.nodeX,d=this.nodeWidth;o=o.nodeX;var q=a.outgoing,h=o>p+d;if(e.inverted&&(l=e.plotSizeY-l,b=(e.plotSizeY||0)-b,d=-d,n=-n,h=p>o),a.shapeType="path",a.linkBase=[l,l+n,b,b+n],h&&"number"==typeof b)a.shapeArgs={d:[["M",p+d,l],["C",p+d+r,l,o-r,b,o,b],["L",o+(q?d:0),b+n/2],["L",o,b+n],["C",o-r,b+n,p+d+r,l+n,p+d,l+n],["Z"]]};else if("number"==typeof b){r=o-20-n,q=o-20;var c=(h=p+d)+20,f=c+n,m=l,u=l+n,y=u+20,v=y+(e.plotHeight-l-n),k=v+20,C=k+n,S=b,x=S+n,N=x+20,L=k+.7*n,O=o-.7*n,P=h+.7*n;a.shapeArgs={d:[["M",h,m],["C",P,m,f,u-.7*n,f,y],["L",f,v],["C",f,L,P,C,h,C],["L",o,C],["C",O,C,r,L,r,v],["L",r,N],["C",r,x-.7*n,O,S,o,S],["L",o,x],["C",q,x,q,x,q,N],["L",q,v],["C",q,k,q,k,o,k],["L",h,k],["C",c,k,c,k,c,v],["L",c,y],["C",c,u,c,u,h,u],["Z"]]}}a.dlBox={x:p+(o-p+d)/2,y:l+(b-l)/2,height:n,width:0},a.tooltipPos=e.inverted?[e.plotSizeY-a.dlBox.y-n/2,e.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+n/2],a.y=a.plotY=1,a.x=a.plotX=1,a.color||(a.color=t.color)},o.prototype.translateNode=function(a,t){var b=this.translationFactor,e=this.chart,n=this.options,g=a.getSum(),r=Math.max(Math.round(g*b),this.options.minLinkWidth),l=Math.round(this.nodeWidth),d=Math.round(n.borderWidth)%2/2,h=t.sankeyColumn.offset(a,b);if(t=Math.floor(m(h.absoluteTop,t.sankeyColumn.top(b)+h.relativeTop))+d,d=Math.floor(this.colDistance*a.column+n.borderWidth/2)+p(a.options.offsetHorizontal||0,l)+d,d=e.inverted?e.plotSizeX-d:d,a.sum=g){a.shapeType="rect",a.nodeX=d,a.nodeY=t,g=d,b=t,h=a.options.width||n.width||l;var c=a.options.height||n.height||r;e.inverted&&(g=d-l,b=e.plotSizeY-t-r,h=a.options.height||n.height||l,c=a.options.width||n.width||r),a.dlOptions=o.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotX=1,a.plotY=1,a.tooltipPos=e.inverted?[e.plotSizeY-b-c/2,e.plotSizeX-g-h/2]:[g+h/2,b+c/2],a.shapeArgs={x:g,y:b,width:h,height:c,display:a.hasShape()?"":"none"}}else a.dlOptions={enabled:!1}},o.defaultOptions=f(h.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,opacity:1,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}),o}(h),e.compose(n,l),g(l.prototype,{animate:a.prototype.animate,createNode:e.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:n,searchPoint:o.noop}),q.registerSeriesType("sankey",l),l})),q(t,"masters/modules/sankey.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(n=[e(222)],void 0===(r=function(q){return l(q),l.Highcharts=q,l}.apply(o,n))||(t.exports=r))},487:function(t,o,e){var n,r,l;l=function(t){"use strict";var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}e(o,"Series/ArcDiagram/ArcDiagramPoint.js",[o["Series/NodesComposition.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o,e){var n,r=this&&this.__extends||(n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},n(t,b)},function(t,b){function o(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),l=o.seriesTypes.sankey.prototype.pointClass,d=e.extend,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.fromNode=void 0,o.index=void 0,o.linksFrom=void 0,o.linksTo=void 0,o.options=void 0,o.series=void 0,o.scale=void 0,o.shapeArgs=void 0,o.toNode=void 0,o}return r(o,t),o.prototype.isValid=function(){return!0},o}(l);return d(h.prototype,{setState:t.setNodeState}),h})),e(o,"Series/ArcDiagram/ArcDiagramSeries.js",[o["Series/ArcDiagram/ArcDiagramPoint.js"],o["Series/Sankey/SankeyColumnComposition.js"],o["Core/Series/Series.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Renderer/SVG/SVGRenderer.js"],o["Core/Utilities.js"]],(function(t,o,e,n,r,l){var d,h=this&&this.__extends||(d=function(t,b){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},d(t,b)},function(t,b){function o(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),c=this&&this.__rest||function(s,t){var o={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&t.indexOf(p)<0&&(o[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)t.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(o[p[i]]=s[p[i]])}return o},f=r.prototype.symbols,m=n.seriesTypes.sankey,y=l.extend,v=l.merge,k=l.pick,C=l.relativeLength,S=function(t){function n(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.nodeColumns=void 0,o.nodes=void 0,o.points=void 0,o}return h(n,t),n.prototype.createNodeColumns=function(){var t=this,e=this,n=e.chart,r=o.compose([],e);return r.sankeyColumn.maxLength=n.inverted?n.plotHeight:n.plotWidth,r.sankeyColumn.getTranslationFactor=function(o){for(var e,i,l,d=r.slice(),h=t.options.minLinkWidth||0,c=0,f=0,m=1,y=0,v=(n.plotSizeX||0)-(o.options.marker&&o.options.marker.lineWidth||0)-(r.length-1)*o.nodePadding;r.length;){for(c=v/r.sankeyColumn.sum(),e=!1,i=r.length;i--;){l=r[i].getSum()*c*m;var k=Math.min(n.plotHeight,n.plotWidth);l>k?m=Math.min(k/l,m):l<h&&(r.splice(i,1),v-=h,l=h,e=!0),y+=l*(1-m)/2,f=Math.max(f,l)}if(!e)break}return r.length=0,d.forEach((function(t){t.scale=m,r.push(t)})),r.sankeyColumn.maxRadius=f,r.sankeyColumn.scale=m,r.sankeyColumn.additionalSpace=y,c},r.sankeyColumn.offset=function(t,o){for(var l,d=t.series.options.equalNodes,h=r.sankeyColumn.additionalSpace||0,c=e.nodePadding,f=Math.min(n.plotWidth,n.plotHeight,(r.sankeyColumn.maxLength||0)/e.nodes.length-c),i=0;i<r.length;i++){var m=r[i].getSum()*(r.sankeyColumn.scale||0),y=d?f:Math.max(m*o,e.options.minLinkWidth||0);if(l=m?y+c:0,r[i]===t)return{relativeLeft:h+C(t.options.offset||0,l)};h+=l}},e.nodes.forEach((function(t){t.column=0,r.push(t)})),[r]},n.prototype.translateLink=function(t){var o,e,n=this,r=t.fromNode,l=t.toNode,d=this.chart,h=n.translationFactor,c=t.options,f=n.options,m=k(c.linkWeight,f.linkWeight,Math.max((t.weight||0)*h*r.scale,n.options.minLinkWidth||0)),y=t.series.options.centeredLinks,v=r.nodeY,C=function(o,e){var n=(o.offset(t,e)||0)*h;return Math.min(o.nodeX+n,o.nodeX+(o.shapeArgs&&o.shapeArgs.height||0)-m)},S=y?r.nodeX+((r.shapeArgs.height||0)-m)/2:C(r,"linksFrom"),x=y?l.nodeX+((l.shapeArgs.height||0)-m)/2:C(l,"linksTo"),N=v,L=m;S>x&&(S=(o=[x,S])[0],x=o[1]),f.reversed&&(S=(e=[x,S])[0],x=e[1],N=(d.plotSizeY||0)-N,L=-L),t.shapeType="path",t.linkBase=[S,S+m,x,x+m];var O=(x+m-S)/Math.abs(x+m-S)*k(f.linkRadius,Math.min(Math.abs(x+m-S)/2,r.nodeY-Math.abs(m)));t.shapeArgs={d:[["M",S,N],["A",(x+m-S)/2,O,0,0,1,x+m,N],["L",x,N],["A",(x-S-m)/2,O-m,0,0,0,S+m,N],["Z"]]},t.dlBox={x:S+(x-S)/2,y:N-O,height:m,width:0},t.tooltipPos=d.inverted?[(d.plotSizeY||0)-t.dlBox.y-m/2,(d.plotSizeX||0)-t.dlBox.x]:[t.dlBox.x,t.dlBox.y+m/2],t.y=t.plotY=1,t.x=t.plotX=1,t.color||(t.color=r.color)},n.prototype.translateNode=function(t,o){var e=this,n=e.translationFactor,r=e.chart,l=r.inverted?r.plotWidth:r.plotHeight,d=e.options,h=Math.min(r.plotWidth,r.plotHeight,l/t.series.nodes.length-this.nodePadding),c=t.getSum()*(o.sankeyColumn.scale||0),y=d.equalNodes?h:Math.max(c*n,this.options.minLinkWidth||0),C=Math.round(d.marker&&d.marker.lineWidth||0)%2/2,S=o.sankeyColumn.offset(t,n),x=Math.floor(k(S&&S.absoluteLeft,(o.sankeyColumn.left(n)||0)+(S&&S.relativeLeft||0)))+C,N=v(d.marker,t.options.marker),symbol=N.symbol,L=N.radius,O=parseInt(d.offset,10)*((r.inverted?r.plotWidth:r.plotHeight)-(Math.floor(this.colDistance*(t.column||0)+(N.lineWidth||0)/2)+C+(o.sankeyColumn.scale||0)*(o.sankeyColumn.maxRadius||0)/2))/100;if(t.sum=c,c){t.nodeX=x,t.nodeY=O;var P=x,w=t.options.width||d.width||y,j=t.options.height||d.height||y,T=O;d.reversed&&(T=(r.plotSizeY||0)-O,r.inverted&&(T=(r.plotSizeY||0)-O)),this.mapOptionsToLevel&&(t.dlOptions=m.getDLOptions({level:this.mapOptionsToLevel[t.level],optionsPoint:t.options})),t.plotX=1,t.plotY=1,t.tooltipPos=r.inverted?[(r.plotSizeY||0)-T-j/2,(r.plotSizeX||0)-P-w/2]:[P+w/2,T+j/2],t.shapeType="path",t.shapeArgs={d:f[symbol||"circle"](P,T-(L||j)/2,L||w,L||j),width:L||w,height:L||j},t.dlBox={x:P+w/2,y:T,height:0,width:0}}else t.dlOptions={enabled:!1}},n.prototype.drawDataLabels=function(){if(this.options.dataLabels){var o=this.options.dataLabels.textPath;m.prototype.drawDataLabels.apply(this,arguments),this.points=this.data,this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath,t.prototype.drawDataLabels.apply(this,arguments),this.points=this.points.concat(this.nodes||[]),this.options.dataLabels.textPath=o}},n.prototype.pointAttribs=function(o,n){if(o&&o.isNode){var r=e.prototype.pointAttribs.apply(this,arguments),l=(r.opacity,c(r,["opacity"]));return l}return t.prototype.pointAttribs.apply(this,arguments)},n.prototype.markerAttribs=function(o){return o.isNode?t.prototype.markerAttribs.apply(this,arguments):{}},n.defaultOptions=v(m.defaultOptions,{centeredLinks:!1,offset:"100%",equalNodes:!1,reversed:!1,dataLabels:{linkTextPath:{attributes:{startOffset:"25%"}}},marker:{symbol:"circle",fillOpacity:1,states:{}}}),n}(m);return y(S.prototype,{orderNodes:!1}),S.prototype.pointClass=t,n.registerSeriesType("arcdiagram",S),S})),e(o,"masters/modules/arc-diagram.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(n=[e(222),e(471)],void 0===(r=function(t){return l(t),l.Highcharts=t,l}.apply(o,n))||(t.exports=r))}}]);