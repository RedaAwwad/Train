(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{647:function(t,e,o){var n,r,b;b=function(b){function t(b,g,t,e){b.hasOwnProperty(g)||(b[g]=e.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:b[g]}})))}t(b=b?b._modules:{},"Series/DrawPointUtilities.js",[b["Core/Utilities.js"]],(function(b){function g(b){return"treemap"===(b.series&&b.series.type)?t(b.plotY)&&null!==b.y:!b.isNull}var t=b.isNumber;return{draw:function(b,t){var e=t.animatableAttribs,o=t.onComplete,n=t.css,q=t.renderer,r=b.series&&b.series.chart.hasRendered?void 0:b.series&&b.series.options.animation,p=b.graphic;if(t.attribs=t.attribs||{},t.attribs.class=b.getClassName(),g(b))p||(b.graphic=p="text"===t.shapeType?q.text():q[t.shapeType](t.shapeArgs||{}),p.add(t.group)),n&&p.css(n),p.attr(t.attribs).animate(e,!t.isNew&&r,o);else if(p){var l=function(){b.graphic=p=p&&p.destroy(),"function"==typeof o&&o()};Object.keys(e).length?p.animate(e,void 0,(function(){return l()})):l()}},shouldDraw:g}})),t(b,"Series/Wordcloud/WordcloudPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,g){var t=this&&this.__extends||function(){var b=function(t,e){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,t){b.__proto__=t}||function(b,t){for(var e in t)t.hasOwnProperty(e)&&(b[e]=t[e])},b(t,e)};return function(t,e){function o(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();return g=g.extend,b=function(b){function e(){var t=null!==b&&b.apply(this,arguments)||this;return t.dimensions=void 0,t.options=void 0,t.polygon=void 0,t.rect=void 0,t.series=void 0,t}return t(e,b),e.prototype.isValid=function(){return!0},e}(b.seriesTypes.column.prototype.pointClass),g(b.prototype,{weight:1}),b})),t(b,"Series/Wordcloud/WordcloudUtils.js",[b["Core/Globals.js"],b["Core/Utilities.js"]],(function(b,g){function t(a,t){return!(t.left>a.right||t.right<a.left||t.top>a.bottom||t.bottom<a.top)}function e(a){var t=a.axes||[];if(!t.length){t=[];var e=e=a.concat([a[0]]);e.reduce((function(a,e){var b=function(a,t){var e=t[0]-a[0];return[[-(a=t[1]-a[1]),e],[a,-e]]}(a,e)[0];return y(t,(function(a){return a[0]===b[0]&&a[1]===b[1]}))||t.push(b),e})),a.axes=t}return t}function o(a,t){return a=a.map((function(a){return a[0]*t[0]+a[1]*t[1]})),{min:Math.min.apply(this,a),max:Math.max.apply(this,a)}}function n(a,t){var n=e(a),b=e(t);return n=n.concat(b),!y(n,(function(e){var b=o(a,e);return!!((e=o(t,e)).min>b.max||e.max<b.min)}))}function r(a,e){var o=!1,b=a.rect,r=a.polygon,l=a.lastCollidedWith,g=function(e){var o=t(b,e.rect);return o&&(a.rotation%90||e.rotation%90)&&(o=n(r,e.polygon)),o};return l&&((o=g(l))||delete a.lastCollidedWith),o||(o=!!y(e,(function(t){var e=g(t);return e&&(a.lastCollidedWith=t),e}))),o}function q(a,t){t=4*a;var e=Math.ceil((Math.sqrt(t)-1)/2),b=2*e+1,o=Math.pow(b,2),n=!1;return--b,1e4>=a&&("boolean"==typeof n&&t>=o-b&&(n={x:e-(o-t),y:-e}),o-=b,"boolean"==typeof n&&t>=o-b&&(n={x:-e,y:o-t-e}),o-=b,"boolean"==typeof n&&(n=t>=o-b?{x:o-t-e,y:e}:{x:e,y:e-(o-t-b)}),n.x*=5,n.y*=5),n}function l(a,t){var e=t.width/2,b=-t.height/2,o=t.height/2;return!(-t.width/2<a.left&&e>a.right&&b<a.top&&o>a.bottom)}function p(a,t,e){return e.map((function(e){return[e[0]+a,e[1]+t]}))}function c(a,t){return t=x(t)?t:14,t=Math.pow(10,t),Math.round(a*t)/t}function d(a,t){var e=a[0];a=a[1];var b=f*-t;return[c(e*(t=Math.cos(b))-a*(b=Math.sin(b))),c(e*b+a*t)]}function h(a,t,e){return[(a=d([a[0]-t[0],a[1]-t[1]],e))[0]+t[0],a[1]+t[1]]}var f=b.deg2rad,m=g.extend,y=g.find,x=g.isNumber,v=g.isObject,w=g.merge;return{archimedeanSpiral:function(a,t){var e=t.field;t=!1,e=e.width*e.width+e.height*e.height;var b=.8*a;return 1e4>=a&&(t={x:b*Math.cos(b),y:b*Math.sin(b)},Math.min(Math.abs(t.x),Math.abs(t.y))<e||(t=!1)),t},extendPlayingField:function(a,t){if(v(a)&&v(t)){var e=t.bottom-t.top,b=t.right-t.left;t=a.ratioX;var o=a.ratioY;e=b*t>e*o?b:e,a=w(a,{width:a.width+e*t*2,height:a.height+e*o*2})}return a},getBoundingBoxFromPolygon:function(a){return a.reduce((function(a,t){var e=t[0];return t=t[1],a.left=Math.min(e,a.left),a.right=Math.max(e,a.right),a.bottom=Math.max(t,a.bottom),a.top=Math.min(t,a.top),a}),{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPlayingField:function(a,t,e){e=e.reduce((function(a,t){t=t.dimensions;var b=Math.max(t.width,t.height);return a.maxHeight=Math.max(a.maxHeight,t.height),a.maxWidth=Math.max(a.maxWidth,t.width),a.area+=b*b,a}),{maxHeight:0,maxWidth:0,area:0});var b=a>t?a/t:1;return{width:(e=Math.max(e.maxHeight,e.maxWidth,.85*Math.sqrt(e.area)))*b,height:e*(a=t>a?t/a:1),ratioX:b,ratioY:a}},getPolygon:function(a,t,b,e,o){var n=[a,t],g=a-b/2;return a+=b/2,[[g,b=t-e/2],[a,b],[a,t+=e/2],[g,t]].map((function(a){return h(a,n,-o)}))},getRandomPosition:function(a){return Math.round(a*(Math.random()+.5)/2)},getRotation:function(a,t,b,e){var o=!1;return x(a)&&x(t)&&x(b)&&x(e)&&0<a&&-1<t&&e>b&&(o=b+t%a*((e-b)/(a-1||1))),o},getScale:function(a,t,b){var e=2*Math.max(Math.abs(b.top),Math.abs(b.bottom));return b=2*Math.max(Math.abs(b.left),Math.abs(b.right)),Math.min(0<b?1/b*a:1,0<e?1/e*t:1)},getSpiral:function(a,t){var b,e=[];for(b=1;1e4>b;b++)e.push(a(b,t));return function(a){return 1e4>=a&&e[a-1]}},intersectionTesting:function(a,b){var t=b.placed,e=b.field,o=b.rectangle,g=b.polygon,n=b.spiral,c=1,d={x:0,y:0},h=a.rect=m({},o);for(a.polygon=g,a.rotation=b.rotation;!1!==d&&(r(a,t)||l(h,e));)d=n(c),v(d)&&(h.left=o.left+d.x,h.right=o.right+d.x,h.top=o.top+d.y,h.bottom=o.bottom+d.y,a.polygon=p(d.x,d.y,g)),c++;return d},isPolygonsColliding:n,isRectanglesIntersecting:t,rectangularSpiral:function(a,b){return a=q(a,b),b=b.field,a&&(a.x*=b.ratioX,a.y*=b.ratioY),a},rotate2DToOrigin:d,rotate2DToPoint:h,squareSpiral:q,updateFieldBoundaries:function(a,b){return(!x(a.left)||a.left>b.left)&&(a.left=b.left),(!x(a.right)||a.right<b.right)&&(a.right=b.right),(!x(a.top)||a.top>b.top)&&(a.top=b.top),(!x(a.bottom)||a.bottom<b.bottom)&&(a.bottom=b.bottom),a}}})),t(b,"Series/Wordcloud/WordcloudSeries.js",[b["Series/DrawPointUtilities.js"],b["Core/Globals.js"],b["Core/Series/Series.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"],b["Series/Wordcloud/WordcloudPoint.js"],b["Series/Wordcloud/WordcloudUtils.js"]],(function(b,g,t,e,o,n,r){var l=this&&this.__extends||function(){var b=function(a,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var t in a)a.hasOwnProperty(t)&&(b[t]=a[t])},b(a,t)};return function(a,t){function e(){this.constructor=a}b(a,t),a.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),q=g.noop,c=e.seriesTypes.column,p=o.extend,d=o.isArray,h=o.isNumber,f=o.isObject,m=o.merge;o=r.archimedeanSpiral;var y=r.extendPlayingField,x=r.getBoundingBoxFromPolygon,v=r.getPlayingField,w=r.getPolygon,M=r.getRandomPosition,a=r.getRotation,S=r.getScale,P=r.getSpiral,A=r.intersectionTesting,_=r.isPolygonsColliding,j=r.rectangularSpiral,F=r.rotate2DToOrigin,C=r.rotate2DToPoint,W=r.squareSpiral,O=r.updateFieldBoundaries;return r=function(a){function e(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b}return l(e,a),e.prototype.bindAxes=function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]};t.prototype.bindAxes.call(this),p(this.yAxis.options,a),p(this.xAxis.options,a)},e.prototype.pointAttribs=function(a,b){return delete(a=g.seriesTypes.column.prototype.pointAttribs.call(this,a,b)).stroke,delete a["stroke-width"],a},e.prototype.deriveFontSize=function(a,b,t){return a=h(a)?a:0,b=h(b)?b:1,t=h(t)?t:1,Math.floor(Math.max(t,a*b))},e.prototype.drawPoints=function(){var a=this,t=a.hasRendered,e=a.xAxis,g=a.yAxis,o=a.group,n=a.options,r=n.animation,l=n.allowExtendPlayingField,q=a.chart.renderer,c=q.text().add(o),d=[],m=a.placementStrategy[n.placementStrategy],M=n.rotation,_=a.points.map((function(a){return a.weight})),j=Math.max.apply(null,_),F=a.points.concat().sort((function(a,b){return b.weight-a.weight}));a.group.attr({scaleX:1,scaleY:1}),F.forEach((function(b){var t=a.deriveFontSize(1/j*b.weight,n.maxFontSize,n.minFontSize);t=p({fontSize:t+"px"},n.style),c.css(t).attr({x:0,y:0,text:b.name}),t=c.getBBox(!0),b.dimensions={height:t.height,width:t.width}}));var u=v(e.len,g.len,F),C=P(a.spirals[n.spiral],{field:u});F.forEach((function(e){var c=a.deriveFontSize(1/j*e.weight,n.maxFontSize,n.minFontSize);c=p({fontSize:c+"px"},n.style);var v=m(e,{data:F,field:u,placed:d,rotation:M}),g=p(a.pointAttribs(e,e.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:v.x,y:v.y,text:e.name,rotation:h(v.rotation)?v.rotation:void 0}),S=w(v.x,v.y,e.dimensions.width,e.dimensions.height,v.rotation),P=x(S),_=A(e,{rectangle:P,polygon:S,field:u,placed:d,spiral:C,rotation:v.rotation});if(!_&&l&&(u=y(u,P),_=A(e,{rectangle:P,polygon:S,field:u,placed:d,spiral:C,rotation:v.rotation})),f(_)?(g.x=(g.x||0)+_.x,g.y=(g.y||0)+_.y,P.left+=_.x,P.right+=_.x,P.top+=_.y,P.bottom+=_.y,u=O(u,P),d.push(e),e.isNull=!1,e.isInside=!0):e.isNull=!0,r){var W={x:g.x,y:g.y};t?(delete g.x,delete g.y):(g.x=0,g.y=0)}b.draw(e,{animatableAttribs:W,attribs:g,css:c,group:o,renderer:q,shapeArgs:void 0,shapeType:"text"})})),c=c.destroy(),e=S(e.len,g.len,u),a.group.attr({scaleX:e,scaleY:e})},e.prototype.hasData=function(){return f(this)&&!0===this.visible&&d(this.points)&&0<this.points.length},e.prototype.getPlotBox=function(){var a=this.chart,b=a.inverted,t=this[b?"yAxis":"xAxis"];return b=this[b?"xAxis":"yAxis"],{translateX:(t?t.left:a.plotLeft)+(t?t.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}},e.defaultOptions=m(c.defaultOptions,{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,cropThreshold:1/0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.weight}</b><br/>'}}),e}(c),p(r.prototype,{animate:q,animateDrilldown:q,animateDrillupFrom:q,pointClass:n,setClip:q,placementStrategy:{random:function(b,t){var e=t.field;return t=t.rotation,{x:M(e.width)-e.width/2,y:M(e.height)-e.height/2,rotation:a(t.orientations,b.index,t.from,t.to)}},center:function(b,t){return t=t.rotation,{x:0,y:0,rotation:a(t.orientations,b.index,t.from,t.to)}}},pointArrayMap:["weight"],spirals:{archimedean:o,rectangular:j,square:W},utils:{extendPlayingField:y,getRotation:a,isPolygonsColliding:_,rotate2DToOrigin:F,rotate2DToPoint:C}}),e.registerSeriesType("wordcloud",r),r})),t(b,"masters/modules/wordcloud.src.js",[],(function(){}))},t.exports?(b.default=b,t.exports=b):(n=[o(242)],void 0===(r=function(t){return b(t),b.Highcharts=t,b}.apply(e,n))||(t.exports=r))}}]);