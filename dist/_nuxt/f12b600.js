/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{607:function(t,e,r){var n,o,c;c=function(t){"use strict";var e=t?t._modules:{};function r(t,path,e,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(e,"Core/Geometry/GeometryUtilities.js",[],(function(){var t;return function(t){t.getCenterOfPoints=function(t){var e=t.reduce((function(t,e){return t.x+=e.x,t.y+=e.y,t}),{x:0,y:0});return{x:e.x/t.length,y:e.y/t.length}},t.getDistanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},t.getAngleBetweenPoints=function(t,e){return Math.atan2(e.x-t.x,e.y-t.y)}}(t||(t={})),t})),r(e,"Core/Geometry/CircleUtilities.js",[e["Core/Geometry/GeometryUtilities.js"]],(function(t){var e,r=t.getAngleBetweenPoints,n=t.getCenterOfPoints,o=t.getDistanceBetweenPoints;return function(t){function e(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}function c(t){if(t<=0)throw new Error("radius of circle must be a positive number.");return Math.PI*t*t}function l(t,e){return t*t*Math.acos(1-e/t)-(t-e)*Math.sqrt(e*(2*t-e))}function f(t,r){var n=o(t,r),c=t.r,l=r.r,f=[];if(n<c+l&&n>Math.abs(c-l)){var h=c*c,d=(h-l*l+n*n)/(2*n),y=Math.sqrt(h-d*d),v=t.x,x=r.x,m=t.y,C=r.y,O=v+d*(x-v)/n,w=m+d*(C-m)/n,A=y/n*-(C-m),P=y/n*-(x-v);f=[{x:e(O+A,14),y:e(w-P,14)},{x:e(O-A,14),y:e(w+P,14)}]}return f}function h(t){return t.reduce((function(t,e,i,r){var n=r.slice(i+1).reduce((function(t,r,n,o){var c=[i,n+i+1];return t.concat(f(e,r).map((function(p){return p.indexes=c,p})))}),[]);return t.concat(n)}),[])}function d(t,circle){return o(t,circle)<=circle.r+1e-10}function y(t,e){return!e.some((function(circle){return!d(t,circle)}))}function v(t){return h(t).filter((function(p){return y(p,t)}))}t.round=e,t.getAreaOfCircle=c,t.getCircularSegmentArea=l,t.getOverlapBetweenCircles=function(t,r,n){var o=0;if(n<t+r){if(n<=Math.abs(r-t))o=c(t<r?t:r);else{var f=(t*t-r*r+n*n)/(2*n),h=n-f;o=l(t,t-f)+l(r,r-h)}o=e(o,14)}return o},t.getCircleCircleIntersection=f,t.getCirclesIntersectionPoints=h,t.isCircle1CompletelyOverlappingCircle2=function(t,e){return o(t,e)+e.r<t.r+1e-10},t.isPointInsideCircle=d,t.isPointInsideAllCircles=y,t.isPointOutsideAllCircles=function(t,e){return!e.some((function(circle){return d(t,circle)}))},t.getCirclesIntersectionPolygon=v,t.getAreaOfIntersectionBetweenCircles=function(t){var e,c=v(t);if(c.length>1){var l=n(c),f=(c=c.map((function(p){return p.angle=r(l,p),p})).sort((function(a,b){return b.angle-a.angle})))[c.length-1],h=c.reduce((function(data,e){var c=data.startPoint,l=n([c,e]),f=e.indexes.filter((function(t){return c.indexes.indexOf(t)>-1})).reduce((function(n,f){var circle=t[f],h=r(circle,e),d=r(circle,c),y=d-(d-h+(d<h?2*Math.PI:0))/2,v=o(l,{x:circle.x+circle.r*Math.sin(y),y:circle.y+circle.r*Math.cos(y)}),x=circle.r;return v>2*x&&(v=2*x),(!n||n.width>v)&&(n={r:x,largeArc:v>x?1:0,width:v,x:e.x,y:e.y}),n}),null);if(f){var h=f.r;data.arcs.push(["A",h,h,0,f.largeArc,1,f.x,f.y]),data.startPoint=e}return data}),{startPoint:f,arcs:[]}).arcs;0===h.length||1===h.length||(h.unshift(["M",f.x,f.y]),e={center:l,d:h})}return e}}(e||(e={})),e})),r(e,"Series/DrawPointUtilities.js",[e["Core/Utilities.js"]],(function(t){var e=t.isNumber;function r(t){return"treemap"===(t.series&&t.series.type)?e(t.plotY)&&null!==t.y:!t.isNull}return{draw:function(t,e){var n=e.animatableAttribs,o=e.onComplete,c=e.css,l=e.renderer,f=t.series&&t.series.chart.hasRendered?void 0:t.series&&t.series.options.animation,h=t.graphic;if(e.attribs=e.attribs||{},e.attribs.class=t.getClassName(),r(t))h||(t.graphic=h="text"===e.shapeType?l.text():l[e.shapeType](e.shapeArgs||{}),h.add(e.group)),c&&h.css(c),h.attr(e.attribs).animate(n,!e.isNew&&f,o);else if(h){var d=function(){t.graphic=h=h&&h.destroy(),"function"==typeof o&&o()};Object.keys(n).length?h.animate(n,void 0,(function(){return d()})):d()}},shouldDraw:r}})),r(e,"Series/Venn/VennPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),o=t.seriesTypes.scatter.prototype.pointClass,c=(e.extend,e.isNumber),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.options=void 0,e.series=void 0,e}return n(e,t),e.prototype.isValid=function(){return c(this.value)},e.prototype.shouldDraw=function(){return!!this.shapeArgs},e}(o);return l})),r(e,"Series/Venn/VennUtils.js",[e["Core/Geometry/CircleUtilities.js"],e["Core/Geometry/GeometryUtilities.js"],e["Core/Utilities.js"]],(function(t,e,r){var n=t.getAreaOfCircle,o=t.getCircleCircleIntersection,c=t.getOverlapBetweenCircles,l=t.isPointInsideAllCircles,f=t.isPointInsideCircle,h=t.isPointOutsideAllCircles,d=e.getDistanceBetweenPoints,y=r.extend,v=r.isArray,x=r.isNumber,m=r.isObject,C=r.isString;function O(t){var e=t.filter((function(t){return 2===t.sets.length})).reduce((function(map,t){return t.sets.forEach((function(e,i,r){m(map[e])||(map[e]={overlapping:{},totalOverlap:0}),map[e].totalOverlap+=t.value,map[e].overlapping[r[1-i]]=t.value})),map}),{});return t.filter(j).forEach((function(t){var r=e[t.sets[0]];y(t,r)})),t}function w(t,a,b,e,r){var n,o,c=t(a),l=t(b),f=r||100,h=e||1e-10,d=b-a,y=1;if(a>=b)throw new Error("a must be smaller than b.");if(c*l>0)throw new Error("f(a) and f(b) must have opposite signs.");if(0===c)n=a;else if(0===l)n=b;else for(;y++<=f&&0!==o&&d>h;)c*(o=t(n=a+(d=(b-a)/2)))>0?a=n:b=n;return n}function A(t){for(var e=t.slice(0,-1),r=e.length,n=[],o=function(data,t){return data.sum+=t[data.i],data},i=0;i<r;i++)n[i]=e.reduce(o,{sum:0,i:i}).sum/r;return n}function P(t,e,r){var o=t+e;return r<=0?o:n(t<e?t:e)<=r?0:w((function(n){var o=c(t,e,n);return r-o}),0,o)}function j(t){return v(t.sets)&&1===t.sets.length}function M(t){var map={};return m(t)&&x(t.value)&&t.value>-1&&v(t.sets)&&t.sets.length>0&&!t.sets.some((function(t){var e=!1;return!map[t]&&C(t)?map[t]=!0:e=!0,e}))}function E(t,e){var r=1e11;return e.reduce((function(e,n){var o=0;if(n.sets.length>1){var l=n.value-function(t){var e=0;if(2===t.length){var r=t[0],n=t[1];e=c(r.r,n.r,d(r,n))}return e}(n.sets.map((function(e){return t[e]})));o=Math.round(l*l*r)/r}return e+o}),0)}function S(a,b){return b.totalOverlap-a.totalOverlap}return{geometry:e,geometryCircles:t,addOverlapToSets:O,getCentroid:A,getDistanceBetweenCirclesByOverlap:P,getLabelWidth:function(t,e,r){var n=e.reduce((function(t,circle){return Math.min(circle.r,t)}),1/0),o=r.filter((function(circle){return!f(t,circle)})),c=function(r,n){return w((function(c){var f={x:t.x+n*c,y:t.y},d=l(f,e)&&h(f,o);return-(r-c)+(d?0:Number.MAX_VALUE)}),0,r)};return 2*Math.min(c(n,-1),c(n,1))},getMarginFromCircles:function(t,e,r){var n=e.reduce((function(e,circle){var r=circle.r-d(t,circle);return r<=e?r:e}),Number.MAX_VALUE);return n=r.reduce((function(e,circle){var r=d(t,circle)-circle.r;return r<=e?r:e}),n)},isSet:j,layoutGreedyVenn:function(t){var e=[],r={};t.filter((function(t){return 1===t.sets.length})).forEach((function(t){r[t.sets[0]]=t.circle={x:Number.MAX_VALUE,y:Number.MAX_VALUE,r:Math.sqrt(t.value/Math.PI)}}));var n=function(t,r){var circle=t.circle;circle.x=r.x,circle.y=r.y,e.push(t)};O(t);var c=t.filter(j).sort(S);n(c.shift(),{x:0,y:0});var l=t.filter((function(t){return 2===t.sets.length}));return c.forEach((function(t){var circle=t.circle,c=circle.r,f=t.overlapping,h=e.reduce((function(t,n,i){var h=n.circle,d=f[n.sets[0]],y=P(c,h.r,d),v=[{x:h.x+y,y:h.y},{x:h.x-y,y:h.y},{x:h.x,y:h.y+y},{x:h.x,y:h.y-y}];return e.slice(i+1).forEach((function(t){var e=t.circle,r=f[t.sets[0]],n=P(c,e.r,r);v=v.concat(o({x:h.x,y:h.y,r:y},{x:e.x,y:e.y,r:n}))})),v.forEach((function(e){circle.x=e.x,circle.y=e.y;var n=E(r,l);n<t.loss&&(t.loss=n,t.coordinates=e)})),t}),{loss:Number.MAX_VALUE,coordinates:void 0});n(t,h.coordinates)})),r},loss:E,nelderMead:function(t,e){for(var r=function(a,b){return a.fx-b.fx},n=function(t,e,r,n){return e.map((function(e,i){return t*e+r*n[i]}))},o=function(e,r){return r.fx=t(r),e[e.length-1]=r,e},c=function(e){var r=e[0];return e.map((function(e){var p=n(.5,r,.5,e);return p.fx=t(p),p}))},l=function(e,r,a,b){var o=n(a,e,b,r);return o.fx=t(o),o},f=function(e){var r=e.length,n=new Array(r+1);n[0]=e,n[0].fx=t(e);for(var i=0;i<r;++i){var o=e.slice();o[i]=o[i]?1.05*o[i]:.001,o.fx=t(o),n[i+1]=o}return n}(e),i=0;i<100;i++){f.sort(r);var h=f[f.length-1],d=A(f),y=l(d,h,2,-1);if(y.fx<f[0].fx){var v=l(d,h,3,-2);f=o(f,v.fx<y.fx?v:y)}else if(y.fx>=f[f.length-2].fx){var x=void 0;f=y.fx>h.fx?(x=l(d,h,.5,.5)).fx<h.fx?o(f,x):c(f):(x=l(d,h,1.5,-.5)).fx<y.fx?o(f,x):c(f)}else f=o(f,y)}return f[0]},processVennData:function(data){var t=v(data)?data:[],e=t.reduce((function(t,e){return function(t){return M(t)&&j(t)&&t.value>0}(e)&&-1===t.indexOf(e.sets[0])&&t.push(e.sets[0]),t}),[]).sort(),r=t.reduce((function(t,r){return M(r)&&!r.sets.some((function(t){return-1===e.indexOf(t)}))&&(t[r.sets.sort().join()]=r),t}),{});return e.reduce((function(t,e,i,r){return r.slice(i+1).forEach((function(r){t.push(e+","+r)})),t}),[]).forEach((function(t){if(!r[t]){var e={sets:t.split(","),value:0};r[t]=e}})),Object.keys(r).map((function(t){return r[t]}))},sortByTotalOverlap:S}})),r(e,"Series/Venn/VennSeries.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Color/Color.js"],e["Core/Geometry/CircleUtilities.js"],e["Series/DrawPointUtilities.js"],e["Core/Geometry/GeometryUtilities.js"],e["Core/Series/SeriesRegistry.js"],e["Series/Venn/VennPoint.js"],e["Series/Venn/VennUtils.js"],e["Core/Utilities.js"]],(function(t,e,r,n,o,c,l,f,h){var d,y=this&&this.__extends||(d=function(t,b){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},d(t,b)},function(t,b){function e(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),v=t.animObject,x=e.parse,m=r.getAreaOfIntersectionBetweenCircles,C=r.getCirclesIntersectionPolygon,O=r.isCircle1CompletelyOverlappingCircle2,w=r.isPointInsideAllCircles,A=r.isPointOutsideAllCircles,P=o.getCenterOfPoints,j=c.seriesTypes.scatter,M=h.addEvent,E=h.extend,S=h.isArray,_=h.isNumber,V=h.isObject,I=(h.isString,h.merge),U=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.mapOfIdToRelation=void 0,e.options=void 0,e.points=void 0,e}return y(e,t),e.getLabelPosition=function(t,e){var r=t.reduce((function(r,circle){var n=circle.r/2;return[{x:circle.x,y:circle.y},{x:circle.x+n,y:circle.y},{x:circle.x-n,y:circle.y},{x:circle.x,y:circle.y+n},{x:circle.x,y:circle.y-n}].reduce((function(r,n){var o=f.getMarginFromCircles(n,t,e);return r.margin<o&&(r.point=n,r.margin=o),r}),r)}),{point:void 0,margin:-Number.MAX_VALUE}).point,n=f.nelderMead((function(p){return-f.getMarginFromCircles({x:p[0],y:p[1]},t,e)}),[r.x,r.y]);return r={x:n[0],y:n[1]},w(r,t)&&A(r,e)||(r=t.length>1?P(C(t)):{x:t[0].x,y:t[0].y}),r},e.getLabelValues=function(t,r){var n=t.sets,data=r.reduce((function(data,t){return data[n.indexOf(t.sets[0])>-1?"internal":"external"].push(t.circle),data}),{internal:[],external:[]});data.external=data.external.filter((function(t){return data.internal.some((function(e){return!O(t,e)}))}));var o=e.getLabelPosition(data.internal,data.external);return{position:o,width:f.getLabelWidth(o,data.internal,data.external)}},e.layout=function(t){var r={},n={};if(t.length>0){var o=f.layoutGreedyVenn(t),c=t.filter(f.isSet);t.forEach((function(t){var l=t.sets,h=l.join(),d=f.isSet(t)?o[h]:m(l.map((function(t){return o[t]})));d&&(r[h]=d,n[h]=e.getLabelValues(t,c))}))}return{mapOfIdToShape:r,mapOfIdToLabelValues:n}},e.getScale=function(t,e,r){var n=r.bottom-r.top,o=r.right-r.left,c=o>0?1/o*t:1,l=n>0?1/n*e:1,f=(r.right+r.left)/2,h=(r.top+r.bottom)/2,d=Math.min(c,l);return{scale:d,centerX:t/2-f*d,centerY:e/2-h*d}},e.updateFieldBoundaries=function(t,circle){var e=circle.x-circle.r,r=circle.x+circle.r,n=circle.y+circle.r,o=circle.y-circle.r;return(!_(t.left)||t.left>e)&&(t.left=e),(!_(t.right)||t.right<r)&&(t.right=r),(!_(t.top)||t.top>o)&&(t.top=o),(!_(t.bottom)||t.bottom<n)&&(t.bottom=n),t},e.prototype.animate=function(t){if(!t){var e=this,r=v(e.options.animation);e.points.forEach((function(t){var e=t.shapeArgs;if(t.graphic&&e){var n={},animate={};e.d?n.opacity=.001:(n.r=0,animate.r=e.r),t.graphic.attr(n).animate(animate,r),e.d&&setTimeout((function(){t&&t.graphic&&t.graphic.animate({opacity:1})}),r.duration)}}),e)}},e.prototype.drawPoints=function(){var t=this,e=t.chart,r=t.group,o=t.points||[],c=e.renderer;o.forEach((function(o){var l={zIndex:S(o.sets)?o.sets.length:0},f=o.shapeArgs;e.styledMode||E(l,t.pointAttribs(o,o.state)),n.draw(o,{isNew:!o.graphic,animatableAttribs:f,attribs:l,group:r,renderer:c,shapeType:f&&f.d?"path":"circle"})}))},e.prototype.init=function(){j.prototype.init.apply(this,arguments),delete this.opacity},e.prototype.pointAttribs=function(t,e){var r=this.options||{},n=t&&t.options||{},o=e&&r.states[e]||{},c=I(r,{color:t&&t.color},n,o);return{fill:x(c.color).brighten(c.brightness).get(),opacity:c.opacity,stroke:c.borderColor,"stroke-width":c.borderWidth,dashstyle:c.borderDashStyle}},e.prototype.translate=function(){var t=this.chart;this.processedXData=this.xData,this.generatePoints();var r=f.processVennData(this.options.data),n=e.layout(r),o=n.mapOfIdToShape,c=n.mapOfIdToLabelValues,l=Object.keys(o).filter((function(t){var e=o[t];return e&&_(e.r)})).reduce((function(t,r){return e.updateFieldBoundaries(t,o[r])}),{top:0,bottom:0,left:0,right:0}),h=e.getScale(t.plotWidth,t.plotHeight,l),d=h.scale,y=h.centerX,v=h.centerY;this.points.forEach((function(t){var e,r=S(t.sets)?t.sets:[],n=r.join(),l=o[n],f=c[n]||{},h=f.width,x=f.position,m=t.options&&t.options.dataLabels;if(l){if(l.r)e={x:y+l.x*d,y:v+l.y*d,r:l.r*d};else if(l.d){var C=l.d;C.forEach((function(t){"M"===t[0]?(t[1]=y+t[1]*d,t[2]=v+t[2]*d):"A"===t[0]&&(t[1]=t[1]*d,t[2]=t[2]*d,t[6]=y+t[6]*d,t[7]=v+t[7]*d)})),e={d:C}}x?(x.x=y+x.x*d,x.y=v+x.y*d):x={},_(h)&&(h=Math.round(h*d))}t.shapeArgs=e,x&&e&&(t.plotX=x.x,t.plotY=x.y),h&&e&&(t.dlOptions=I(!0,{style:{width:h}},V(m,!0)?m:void 0)),t.name=t.options.name||r.join("∩")}))},e.defaultOptions=I(j.defaultOptions,{borderColor:"#cccccc",borderDashStyle:"solid",borderWidth:1,brighten:0,clip:!1,colorByPoint:!0,dataLabels:{enabled:!0,verticalAlign:"middle",formatter:function(){return this.point.name}},inactiveOtherPoints:!0,marker:!1,opacity:.75,showInLegend:!1,states:{hover:{opacity:1,borderColor:"#333333"},select:{color:"#cccccc",borderColor:"#000000",animation:!1},inactive:{opacity:.075}},tooltip:{pointFormat:"{point.name}: {point.value}"}}),e}(j);return E(U.prototype,{axisTypes:[],directTouch:!0,isCartesian:!1,pointArrayMap:["value"],pointClass:l,utils:f}),c.registerSeriesType("venn",U),M(U,"afterSetOptions",(function(t){var e=t.options.states;this.is("venn")&&Object.keys(e).forEach((function(t){e[t].halo=!1}))})),U})),r(e,"masters/modules/venn.src.js",[],(function(){}))},t.exports?(c.default=c,t.exports=c):(n=[r(222)],void 0===(o=function(t){return c(t),c.Highcharts=t,c}.apply(e,n))||(t.exports=o))}}]);