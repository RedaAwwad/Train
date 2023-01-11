/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{611:function(o,t,e){var n,r,l;l=function(o){"use strict";var t=o?o._modules:{};function e(o,path,t,e){o.hasOwnProperty(path)||(o[path]=e.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:o[path]}})))}e(t,"Series/NodesComposition.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(o,t){var e,n=o.series,r=n.prototype,l=n.prototype.pointClass.prototype,d=t.defined,h=t.extend,c=t.find,f=t.merge,m=t.pick;return function(o){var t=[];function e(){return this.data=[].concat(this.points||[],this.nodes),r.destroy.apply(this,arguments)}function n(){this.nodes&&(this.nodes.forEach((function(o){o.destroy()})),this.nodes.length=0),r.setData.apply(this,arguments)}function v(o){var t=arguments,e=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==o&&e.forEach((function(o){o&&o.series&&(l.setState.apply(o,t),o.isNode||(o.fromNode.graphic&&l.setState.apply(o.fromNode,t),o.toNode&&o.toNode.graphic&&l.setState.apply(o.toNode,t)))})),l.setState.apply(this,t)}function y(o,t,e,n){var r=this,d=this.series.options.nodes,data=this.series.options.data,h=data&&data.length||0,c=data&&data[this.index];if(l.update.call(this,o,!this.isNode&&t,e,n),this.isNode){var v=(d||[]).reduce((function(o,t,e){return r.id===t.id?e:o}),-1),y=f(d&&d[v]||{},data&&data[this.index]||{});data&&(c?data[this.index]=c:data.length=h),d?v>=0?d[v]=y:d.push(y):this.series.options.nodes=[y],m(t,!0)&&this.series.chart.redraw(e)}}o.compose=function(o,r){if(-1===t.indexOf(o)){t.push(o);var l=o.prototype;l.setNodeState=v,l.setState=v,l.update=y}if(-1===t.indexOf(r)){t.push(r);var d=r.prototype;d.destroy=e,d.setData=n}return r},o.createNode=function(o){var t,e=this.pointClass,n=function(o,t){return c(o,(function(o){return o.id===t}))},r=n(this.nodes,o);if(!r){t=this.options.nodes&&n(this.options.nodes,o);var l=(new e).init(this,h({className:"highcharts-node",isNode:!0,id:o,y:1},t));l.linksTo=[],l.linksFrom=[],l.getSum=function(){var o=0,t=0;return l.linksTo.forEach((function(link){o+=link.weight||0})),l.linksFrom.forEach((function(link){t+=link.weight||0})),Math.max(o,t)},l.offset=function(o,t){for(var e=0,i=0;i<l[t].length;i++){if(l[t][i]===o)return e;e+=l[t][i].weight}},l.hasShape=function(){var o=0;return l.linksTo.forEach((function(link){link.outgoing&&o++})),!l.linksTo.length||o!==l.linksTo.length},l.index=this.nodes.push(l)-1,r=l}return r.formatPrefix="node",r.name=r.name||r.options.id||"",r.mass=m(r.options.mass,r.options.marker&&r.options.marker.radius,this.options.marker&&this.options.marker.radius,4),r},o.destroy=e,o.generatePoints=function(){var o=this,t=this.chart,e={};r.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(o){o.linksFrom.length=0,o.linksTo.length=0,o.level=o.options.level})),this.points.forEach((function(n){d(n.from)&&(e[n.from]||(e[n.from]=o.createNode(n.from)),e[n.from].linksFrom.push(n),n.fromNode=e[n.from],t.styledMode?n.colorIndex=m(n.options.colorIndex,e[n.from].colorIndex):n.color=n.options.color||e[n.from].color),d(n.to)&&(e[n.to]||(e[n.to]=o.createNode(n.to)),e[n.to].linksTo.push(n),n.toNode=e[n.to]),n.name=n.name||n.id}),this),this.nodeLookup=e},o.setNodeState=v,o.updateNode=y}(e||(e={})),e})),e(t,"Series/Sankey/SankeyPoint.js",[t["Core/Series/Point.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(o,t,e){var n,r=this&&this.__extends||(n=function(o,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,b){o.__proto__=b}||function(o,b){for(var p in b)b.hasOwnProperty(p)&&(o[p]=b[p])},n(o,b)},function(o,b){function t(){this.constructor=o}n(o,b),o.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),l=t.seriesTypes.column,d=e.defined,h=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.className=void 0,o.fromNode=void 0,o.level=void 0,o.linkBase=void 0,o.linksFrom=void 0,o.linksTo=void 0,o.mass=void 0,o.nodeX=void 0,o.nodeY=void 0,o.options=void 0,o.series=void 0,o.toNode=void 0,o}return r(e,t),e.prototype.applyOptions=function(t,e){return o.prototype.applyOptions.call(this,t,e),d(this.options.level)&&(this.options.column=this.column=this.options.level),this},e.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+o.prototype.getClassName.call(this)},e.prototype.getFromNode=function(){for(var o,t=this,e=-1,i=0;i<t.linksTo.length;i++){var n=t.linksTo[i];n.fromNode.column>e&&n.fromNode!==t&&(e=(o=n.fromNode).column)}return{fromNode:o,fromColumn:e}},e.prototype.setNodeColumn=function(){var o=this;d(o.options.column)||(0===o.linksTo.length?o.column=0:o.column=o.getFromNode().fromColumn+1)},e.prototype.isValid=function(){return this.isNode||"number"==typeof this.weight},e}(l.prototype.pointClass);return h})),e(t,"Series/Sankey/SankeyColumnComposition.js",[t["Core/Utilities.js"]],(function(o){var t,e=o.defined,n=o.relativeLength;return function(o){o.compose=function(o,e){var n=o;return n.sankeyColumn=new t(n,e),n};var t=function(){function o(o,t){this.points=o,this.series=t}return o.prototype.getTranslationFactor=function(o){for(var t,i,e=this.points,n=e.slice(),r=o.chart,l=o.options.minLinkWidth||0,d=0,h=(r.plotSizeY||0)-(o.options.borderWidth||0)-(e.length-1)*o.nodePadding;e.length;){for(d=h/e.sankeyColumn.sum(),t=!1,i=e.length;i--;)e[i].getSum()*d<l&&(e.splice(i,1),h-=l,t=!0);if(!t)break}return e.length=0,n.forEach((function(o){e.push(o)})),d},o.prototype.top=function(o){var t=this.series,e=t.nodePadding,n=this.points.reduce((function(n,r){return n>0&&(n+=e),n+=Math.max(r.getSum()*o,t.options.minLinkWidth||0)}),0);return((t.chart.plotSizeY||0)-n)/2},o.prototype.left=function(o){var t=this.series,e=t.chart,n=t.options.equalNodes,r=e.inverted?e.plotHeight:e.plotWidth,l=t.nodePadding,d=this.points.reduce((function(e,d){return e>0&&(e+=l),e+=n?r/d.series.nodes.length-l:Math.max(d.getSum()*o,t.options.minLinkWidth||0)}),0);return((e.plotSizeX||0)-Math.round(d))/2},o.prototype.sum=function(){return this.points.reduce((function(o,t){return o+t.getSum()}),0)},o.prototype.offset=function(o,t){var r,l=this.points,d=this.series,h=d.nodePadding,c=0;if(d.is("organization")&&o.hangsFrom)return{absoluteTop:o.hangsFrom.nodeY};for(var i=0;i<l.length;i++){var f=l[i].getSum(),m=Math.max(f*t,d.options.minLinkWidth||0),v=o.options[d.chart.inverted?"offsetHorizontal":"offsetVertical"],y=o.options.offset||0;if(r=f?m+h:0,l[i]===o)return{relativeTop:c+(e(v)?n(v,m):n(y,r))};c+=r}},o}();o.SankeyColumnAdditions=t}(t||(t={})),t})),e(t,"Series/TreeUtilities.js",[t["Core/Color/Color.js"],t["Core/Utilities.js"]],(function(o,t){var e=t.extend,n=t.isArray,r=t.isNumber,l=t.isObject,d=t.merge,h=t.pick,c={getColor:function(t,e){var n,r,l,d,c,f,m=e.index,v=e.mapOptionsToLevel,y=e.parentColor,k=e.parentColorIndex,C=e.series,N=e.colors,S=e.siblings,x=C.points,L=C.chart.options.chart;return t&&(n=x[t.i],r=v[t.level]||{},n&&r.colorByPoint&&(d=n.index%(N?N.length:L.colorCount),l=N&&N[d]),C.chart.styledMode||(c=h(n&&n.options.color,r&&r.color,l,y&&function(t){var e=r&&r.colorVariation;return e&&"brightness"===e.key&&m&&S?o.parse(t).brighten(e.to*(m/S)).get():t}(y),C.color)),f=h(n&&n.options.colorIndex,r&&r.colorIndex,d,k,e.colorIndex)),{color:c,colorIndex:f}},getLevelOptions:function(o){var t,e,i,c,f,m,v=null;if(l(o))for(v={},c=r(o.from)?o.from:1,m=o.levels,e={},t=l(o.defaults)?o.defaults:{},n(m)&&(e=m.reduce((function(o,e){var n,f,m;return l(e)&&r(e.level)&&(m=d({},e),f=h(m.levelIsConstant,t.levelIsConstant),delete m.levelIsConstant,delete m.level,n=e.level+(f?0:c-1),l(o[n])?d(!0,o[n],m):o[n]=m),o}),{})),f=r(o.to)?o.to:1,i=0;i<=f;i++)v[i]=d({},t,l(e[i])?e[i]:{});return v},setTreeValues:function o(t,n){var r=n.before,l=n.idRoot,d=n.mapIdToNode[l],c=!1!==n.levelIsConstant,f=n.points[t.i],m=f&&f.options||{},v=[],y=0;t.levelDynamic=t.level-(c?0:d.level),t.name=h(f&&f.name,""),t.visible=l===t.id||!0===n.visible,"function"==typeof r&&(t=r(t,n)),t.children.forEach((function(r,i){var l=e({},n);e(l,{index:i,siblings:t.children.length,visible:t.visible}),r=o(r,l),v.push(r),r.visible&&(y+=r.val)}));var k=h(m.value,y);return t.visible=k>=0&&(y>0||t.visible),t.children=v,t.childrenTotal=y,t.isLeaf=t.visible&&!y,t.val=k,t},updateRootId:function(o){var t,e;return l(o)&&(e=l(o.options)?o.options:{},t=h(o.rootNode,e.rootId,""),l(o.userOptions)&&(o.userOptions.rootId=t),o.rootNode=t),t}};return c})),e(t,"Series/Sankey/SankeySeries.js",[t["Core/Color/Color.js"],t["Core/Globals.js"],t["Series/NodesComposition.js"],t["Series/Sankey/SankeyPoint.js"],t["Core/Series/SeriesRegistry.js"],t["Series/Sankey/SankeyColumnComposition.js"],t["Series/TreeUtilities.js"],t["Core/Utilities.js"]],(function(o,t,e,n,r,l,d,h){var c,f=this&&this.__extends||(c=function(o,b){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,b){o.__proto__=b}||function(o,b){for(var p in b)b.hasOwnProperty(p)&&(o[p]=b[p])},c(o,b)},function(o,b){function t(){this.constructor=o}c(o,b),o.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),m=r.series,v=r.seriesTypes.column,y=d.getLevelOptions,k=(h.defined,h.extend),C=h.isObject,N=h.merge,S=h.pick,x=h.relativeLength,L=h.stableSort,O=function(t){function n(){var o=null!==t&&t.apply(this,arguments)||this;return o.colDistance=void 0,o.data=void 0,o.group=void 0,o.nodeLookup=void 0,o.nodePadding=void 0,o.nodes=void 0,o.nodeWidth=void 0,o.options=void 0,o.points=void 0,o.translationFactor=void 0,o}return f(n,t),n.getDLOptions=function(o){var t=C(o.optionsPoint)?o.optionsPoint.dataLabels:{},e=C(o.level)?o.level.dataLabels:{};return N({style:{}},e,t)},n.prototype.createNodeColumns=function(){var o=[];this.nodes.forEach((function(t){t.setNodeColumn(),o[t.column]||(o[t.column]=l.compose([],this)),o[t.column].push(t)}),this);for(var i=0;i<o.length;i++)void 0===o[i]&&(o[i]=l.compose([],this));return o},n.prototype.generatePoints=function(){function o(t,e){void 0===t.level&&(t.level=e,t.linksFrom.forEach((function(link){link.toNode&&o(link.toNode,e+1)})))}e.generatePoints.apply(this,arguments),this.orderNodes&&(this.nodes.filter((function(o){return 0===o.linksTo.length})).forEach((function(t){o(t,0)})),L(this.nodes,(function(a,b){return a.level-b.level})))},n.prototype.getNodePadding=function(){var o=this.options.nodePadding||0;if(this.nodeColumns){var t=this.nodeColumns.reduce((function(o,col){return Math.max(o,col.length)}),0);t*o>this.chart.plotSizeY&&(o=this.chart.plotSizeY/t)}return o},n.prototype.hasData=function(){return!!this.processedXData.length},n.prototype.pointAttribs=function(t,e){if(!t)return{};var n=this,r=t.isNode?t.level:t.fromNode.level,l=n.mapOptionsToLevel[r||0]||{},d=t.options,h=l.states&&l.states[e||""]||{},c=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce((function(o,t){return o[t]=S(h[t],d[t],l[t],n.options[t]),o}),{}),f=S(h.color,d.color,c.colorByPoint?t.color:l.color);return t.isNode?{fill:f,stroke:c.borderColor,"stroke-width":c.borderWidth,opacity:c.opacity}:{fill:o.parse(f).setOpacity(c.linkOpacity).get()}},n.prototype.render=function(){var o=this.points;this.points=this.points.concat(this.nodes||[]),v.prototype.render.call(this),this.points=o},n.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns(),this.nodeWidth=x(this.options.nodeWidth,this.chart.plotSizeX);var o=this,t=this.chart,e=this.options,n=this.nodeWidth,r=this.nodeColumns;this.nodePadding=this.getNodePadding(),this.translationFactor=r.reduce((function(t,e){return Math.min(t,e.sankeyColumn.getTranslationFactor(o))}),1/0),this.colDistance=(t.plotSizeX-n-e.borderWidth)/Math.max(1,r.length-1),o.mapOptionsToLevel=y({from:1,levels:e.levels,to:r.length-1,defaults:{borderColor:e.borderColor,borderRadius:e.borderRadius,borderWidth:e.borderWidth,color:o.color,colorByPoint:e.colorByPoint,levelIsConstant:!0,linkColor:e.linkColor,linkLineWidth:e.linkLineWidth,linkOpacity:e.linkOpacity,states:e.states}}),r.forEach((function(t){t.forEach((function(e){o.translateNode(e,t)}))}),this),this.nodes.forEach((function(t){t.linksFrom.forEach((function(t){(t.weight||t.isNull)&&t.to&&(o.translateLink(t),t.allowShadow=!1)}))}))},n.prototype.translateLink=function(o){var t=function(t,e){var n=t.offset(o,e)*l;return Math.min(t.nodeY+n,t.nodeY+(t.shapeArgs&&t.shapeArgs.height||0)-d)},e=o.fromNode,n=o.toNode,r=this.chart,l=this.translationFactor,d=Math.max(o.weight*l,this.options.minLinkWidth),h=this.options,c=(r.inverted?-this.colDistance:this.colDistance)*h.curveFactor,f=t(e,"linksFrom"),m=t(n,"linksTo"),v=e.nodeX,y=this.nodeWidth,k=n.nodeX,C=o.outgoing,N=k>v+y;if(r.inverted&&(f=r.plotSizeY-f,m=(r.plotSizeY||0)-m,y=-y,d=-d,N=v>k),o.shapeType="path",o.linkBase=[f,f+d,m,m+d],N&&"number"==typeof m)o.shapeArgs={d:[["M",v+y,f],["C",v+y+c,f,k-c,m,k,m],["L",k+(C?y:0),m+d/2],["L",k,m+d],["C",k-c,m+d,v+y+c,f+d,v+y,f+d],["Z"]]};else if("number"==typeof m){var S=20,x=r.plotHeight-f-d,L=k-S-d,O=k-S,P=k,w=v+y,T=w+S,j=T+d,F=f,W=f+d,M=W+S,_=M+x,z=_+S,E=z+d,I=m,Y=I+d,D=Y+S,X=W-.7*d,B=z+.7*d,A=Y-.7*d,R=P-.7*d,U=w+.7*d;o.shapeArgs={d:[["M",w,F],["C",U,F,j,X,j,M],["L",j,_],["C",j,B,U,E,w,E],["L",P,E],["C",R,E,L,B,L,_],["L",L,D],["C",L,A,R,I,P,I],["L",P,Y],["C",O,Y,O,Y,O,D],["L",O,_],["C",O,z,O,z,P,z],["L",w,z],["C",T,z,T,z,T,_],["L",T,M],["C",T,W,T,W,w,W],["Z"]]}}o.dlBox={x:v+(k-v+y)/2,y:f+(m-f)/2,height:d,width:0},o.tooltipPos=r.inverted?[r.plotSizeY-o.dlBox.y-d/2,r.plotSizeX-o.dlBox.x]:[o.dlBox.x,o.dlBox.y+d/2],o.y=o.plotY=1,o.x=o.plotX=1,o.color||(o.color=e.color)},n.prototype.translateNode=function(o,t){var e=this.translationFactor,r=this.chart,l=this.options,d=o.getSum(),h=Math.max(Math.round(d*e),this.options.minLinkWidth),c=Math.round(this.nodeWidth),f=Math.round(l.borderWidth)%2/2,m=t.sankeyColumn.offset(o,e),v=Math.floor(S(m.absoluteTop,t.sankeyColumn.top(e)+m.relativeTop))+f,y=Math.floor(this.colDistance*o.column+l.borderWidth/2)+x(o.options.offsetHorizontal||0,c)+f,k=r.inverted?r.plotSizeX-y:y;if(o.sum=d,d){o.shapeType="rect",o.nodeX=k,o.nodeY=v;var C=k,N=v,L=o.options.width||l.width||c,O=o.options.height||l.height||h;r.inverted&&(C=k-c,N=r.plotSizeY-v-h,L=o.options.height||l.height||c,O=o.options.width||l.width||h),o.dlOptions=n.getDLOptions({level:this.mapOptionsToLevel[o.level],optionsPoint:o.options}),o.plotX=1,o.plotY=1,o.tooltipPos=r.inverted?[r.plotSizeY-N-O/2,r.plotSizeX-C-L/2]:[C+L/2,N+O/2],o.shapeArgs={x:C,y:N,width:L,height:O,display:o.hasShape()?"":"none"}}else o.dlOptions={enabled:!1}},n.defaultOptions=N(v.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,opacity:1,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}),n}(v);return e.compose(n,O),k(O.prototype,{animate:m.prototype.animate,createNode:e.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:n,searchPoint:t.noop}),r.registerSeriesType("sankey",O),O})),e(t,"masters/modules/sankey.src.js",[],(function(){}))},o.exports?(l.default=l,o.exports=l):(n=[e(242)],void 0===(r=function(o){return l(o),l.Highcharts=o,l}.apply(t,n))||(o.exports=r))}}]);