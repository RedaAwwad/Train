/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[115,146],{509:function(t,e,r){var n,o,a;a=function(a){function t(a,t,e,b){a.hasOwnProperty(t)||(a[t]=b.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}t(a=a?a._modules:{},"Series/Cylinder/CylinderPoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t){var e=this&&this.__extends||function(){var a=function(b,g){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])},a(b,g)};return function(b,g){function t(){this.constructor=b}a(b,g),b.prototype=null===g?Object.create(g):(t.prototype=g.prototype,new t)}}();return t=t.extend,a=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.options=void 0,b.series=void 0,b}return e(b,a),b}(a.seriesTypes.column.prototype.pointClass),t(a.prototype,{shapeType:"cylinder"}),a})),t(a,"Series/Cylinder/CylinderComposition.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Math3D.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],(function(a,t,e,b,r){var g=a.parse,n=t.charts,u=t.deg2rad,o=e.perspective;a=r.merge;var d=r.pick,l=(b=b.getRendererType().prototype).cuboidPath,p=function(t){return!t.some((function(t){return"C"===t[0]}))};r=a(b.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(t){return this.singleSetterForParts("fill",null,{front:t,back:t,top:g(t).brighten(.1).get(),bottom:g(t).brighten(-.1).get()}),this.color=this.fill=t,this}}),b.elements3d.cylinder=r,b.cylinder=function(t){return this.element3d("cylinder",t)},b.cylinderPath=function(t){var a=n[this.chartIndex],e=l.call(this,t),r=!e.isTop,b=!e.isFront,o=this.getCylinderEnd(a,t);return t=this.getCylinderEnd(a,t,!0),{front:this.getCylinderFront(o,t),back:this.getCylinderBack(o,t),top:o,bottom:t,zIndexes:{top:r?3:0,bottom:r?0:3,front:b?2:1,back:b?1:2,group:e.zIndexes.group}}},b.getCylinderFront=function(t,a){if(t=t.slice(0,3),p(a)){var e=a[0];"M"===e[0]&&(t.push(a[2]),t.push(a[1]),t.push(["L",e[1],e[2]]))}else{e=a[0];var r=a[1];a=a[2],"M"===e[0]&&"C"===r[0]&&"C"===a[0]&&(t.push(["L",a[5],a[6]]),t.push(["C",a[3],a[4],a[1],a[2],r[5],r[6]]),t.push(["C",r[3],r[4],r[1],r[2],e[1],e[2]]))}return t.push(["Z"]),t},b.getCylinderBack=function(t,a){var e=[];if(p(t)){var r=t[0],b=t[2];"M"===r[0]&&"L"===b[0]&&(e.push(["M",b[1],b[2]]),e.push(t[3]),e.push(["L",r[1],r[2]]))}else"C"===t[2][0]&&e.push(["M",t[2][5],t[2][6]]),e.push(t[3],t[4]);return p(a)?"M"===(r=a[0])[0]&&(e.push(["L",r[1],r[2]]),e.push(a[3]),e.push(a[2])):(t=a[2],r=a[3],a=a[4],"C"===t[0]&&"C"===r[0]&&"C"===a[0]&&(e.push(["L",a[5],a[6]]),e.push(["C",a[3],a[4],a[1],a[2],r[5],r[6]]),e.push(["C",r[3],r[4],r[1],r[2],t[5],t[6]]))),e.push(["Z"]),e},b.getCylinderEnd=function(a,b,t){var e=b.width;e=void 0===e?0:e;var r=b.height,g=void 0===r?0:r,n=void 0===(r=b.alphaCorrection)?0:r;r=d(b.depth,e,0);var l=Math.min(e,r)/2;n=u*(a.options.chart.options3d.beta-90+n),t=(b.y||0)+(t?g:0),g=.5519*l;var q,h,c=e/2+(b.x||0),p=r/2+(b.z||0),y=[{x:0,y:t,z:l},{x:g,y:t,z:l},{x:l,y:t,z:g},{x:l,y:t,z:0},{x:l,y:t,z:-g},{x:g,y:t,z:-l},{x:0,y:t,z:-l},{x:-g,y:t,z:-l},{x:-l,y:t,z:-g},{x:-l,y:t,z:0},{x:-l,y:t,z:g},{x:-g,y:t,z:l},{x:0,y:t,z:l}],f=Math.cos(n),x=Math.sin(n);return y.forEach((function(a,t){q=a.x,h=a.z,y[t].x=q*f-h*x+c,y[t].z=h*f+q*x+p})),a=o(y,a,!0),2.5>Math.abs(a[3].y-a[9].y)&&2.5>Math.abs(a[0].y-a[6].y)?this.toLinePath([a[0],a[3],a[6],a[9]],!0):this.getCurvedPath(a)},b.getCurvedPath=function(a){var t,e=[["M",a[0].x,a[0].y]],b=a.length-2;for(t=1;t<b;t+=3)e.push(["C",a[t].x,a[t].y,a[t+1].x,a[t+1].y,a[t+2].x,a[t+2].y]);return e}})),t(a,"Series/Cylinder/CylinderSeries.js",[a["Series/Cylinder/CylinderPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,e){var b=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function g(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(g.prototype=t.prototype,new g)}}(),r=t.seriesTypes.column,g=e.extend,n=e.merge;return e=function(a){function t(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b}return b(t,a),t.defaultOptions=n(r.defaultOptions),t}(r),g(e.prototype,{pointClass:a}),t.registerSeriesType("cylinder",e),e})),t(a,"masters/modules/cylinder.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[r(242),r(833)],void 0===(o=function(t){return a(t),a.Highcharts=t,a}.apply(e,n))||(t.exports=o))},565:function(t,e,r){var n,o,d;d=function(t){"use strict";var e=t?t._modules:{};function r(t,path,e,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(e,"Series/Funnel3D/Funnel3DComposition.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Renderer/SVG/SVGRenderer3D.js"],e["Core/Utilities.js"]],(function(t,e,r,n){var o,d=t.parse,l=e.charts,h=n.error,c=n.extend,y=n.merge;return function(t){t.compose=function(t){var n;r.compose(t),(n=t.prototype.elements3d).funnel3d=y(n.cuboid,{parts:["top","bottom","frontUpper","backUpper","frontLower","backLower","rightUpper","rightLower"],mainParts:["top","bottom"],sideGroups:["upperGroup","lowerGroup"],sideParts:{upperGroup:["frontUpper","backUpper","rightUpper"],lowerGroup:["frontLower","backLower","rightLower"]},pathType:"funnel3d",opacitySetter:function(t){var r=this,n=r.parts,o=e.charts[r.renderer.chartIndex],d="group-opacity-"+t+"-"+o.index;return r.parts=r.mainParts,r.singleSetterForParts("opacity",t),r.parts=n,o.renderer.filterId||(o.renderer.definition({tagName:"filter",attributes:{id:d},children:[{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"table",tableValues:"0 "+t}}]}]}),r.sideGroups.forEach((function(t){r[t].attr({filter:"url(#"+d+")"})})),r.renderer.styledMode&&(o.renderer.definition({tagName:"style",textContent:".highcharts-"+d+" {filter:url(#"+d+")}"}),r.sideGroups.forEach((function(t){t.addClass("highcharts-"+d)})))),r},fillSetter:function(t){var e=this,r=d(t),n=r.rgba[3],o={top:d(t).brighten(.1).get(),bottom:d(t).brighten(-.2).get()};return n<1?(r.rgba[3]=1,r=r.get("rgb"),e.attr({opacity:n})):r=t,r.linearGradient||r.radialGradient||!e.gradientForSides||(r={linearGradient:{x1:0,x2:1,y1:1,y2:1},stops:[[0,d(t).brighten(-.2).get()],[.5,t],[1,d(t).brighten(-.2).get()]]}),r.linearGradient?e.sideGroups.forEach((function(t){var n=e[t].gradientBox,d=r.linearGradient,l=y(r,{linearGradient:{x1:n.x+d.x1*n.width,y1:n.y+d.y1*n.height,x2:n.x+d.x2*n.width,y2:n.y+d.y2*n.height}});e.sideParts[t].forEach((function(t){o[t]=l}))})):(y(!0,o,{frontUpper:r,backUpper:r,rightUpper:r,frontLower:r,backLower:r,rightLower:r}),r.radialGradient&&e.sideGroups.forEach((function(t){var r=e[t].gradientBox,n=r.x+r.width/2,o=r.y+r.height/2,d=Math.min(r.width,r.height);e.sideParts[t].forEach((function(t){e[t].setRadialReference([n,o,d])}))}))),e.singleSetterForParts("fill",null,o),e.color=e.fill=t,r.linearGradient&&[e.frontLower,e.frontUpper].forEach((function(t){var r=t.element,n=r&&e.renderer.gradients[r.gradient];n&&"userSpaceOnUse"!==n.attr("gradientUnits")&&n.attr({gradientUnits:"userSpaceOnUse"})})),e},adjustForGradient:function(){var t,e=this;e.sideGroups.forEach((function(r){var n={x:Number.MAX_VALUE,y:Number.MAX_VALUE},o={x:-Number.MAX_VALUE,y:-Number.MAX_VALUE};e.sideParts[r].forEach((function(r){var d=e[r];t=d.getBBox(!0),n={x:Math.min(n.x,t.x),y:Math.min(n.y,t.y)},o={x:Math.max(o.x,t.x+t.width),y:Math.max(o.y,t.y+t.height)}})),e[r].gradientBox={x:n.x,width:o.x-n.x,y:n.y,height:o.y-n.y}}))},zIndexSetter:function(){return this.finishedOnAdd&&this.adjustForGradient(),this.renderer.Element.prototype.zIndexSetter.apply(this,arguments)},onAdd:function(){this.adjustForGradient(),this.finishedOnAdd=!0}}),function(t){var e=t.prototype;c(e,{funnel3d:function(t){var e=this,r=e.element3d("funnel3d",t),n=e.styledMode,o={"stroke-width":1,stroke:"none"};return r.upperGroup=e.g("funnel3d-upper-group").attr({zIndex:r.frontUpper.zIndex}).add(r),[r.frontUpper,r.backUpper,r.rightUpper].forEach((function(t){n||t.attr(o),t.add(r.upperGroup)})),r.lowerGroup=e.g("funnel3d-lower-group").attr({zIndex:r.frontLower.zIndex}).add(r),[r.frontLower,r.backLower,r.rightLower].forEach((function(t){n||t.attr(o),t.add(r.lowerGroup)})),r.gradientForSides=t.gradientForSides,r},funnel3dPath:function(t){this.getCylinderEnd||h("A required Highcharts module is missing: cylinder.js",!0,l[this.chartIndex]);var r,n,o=this,d=l[o.chartIndex],c=t.alphaCorrection=90-Math.abs(d.options.chart.options3d.alpha%180-90),f=e.cuboidPath.call(o,y(t,{depth:t.width,width:(t.width+t.bottom.width)/2})),x=f.isTop,w=!f.isFront,C=!!t.middle,m=o.getCylinderEnd(d,y(t,{x:t.x-t.width/2,z:t.z-t.width/2,alphaCorrection:c})),v=t.bottom.width,_=y(t,{width:v,x:t.x-v/2,z:t.z-v/2,alphaCorrection:c}),j=o.getCylinderEnd(d,_,!0),S=v,L=_,z=j,E=j;return C&&(S=t.middle.width,L=y(t,{y:t.y+t.middle.fraction*t.height,width:S,x:t.x-S/2,z:t.z-S/2}),z=o.getCylinderEnd(d,L,!1),E=o.getCylinderEnd(d,L,!1)),(r={top:m,bottom:j,frontUpper:o.getCylinderFront(m,z),zIndexes:{group:f.zIndexes.group,top:0!==x?0:3,bottom:1!==x?0:3,frontUpper:w?2:1,backUpper:w?1:2,rightUpper:w?2:1}}).backUpper=o.getCylinderBack(m,z),n=Math.min(S,t.width)/Math.max(S,t.width)!=1,r.rightUpper=o.getCylinderFront(o.getCylinderEnd(d,y(t,{x:t.x-t.width/2,z:t.z-t.width/2,alphaCorrection:n?-c:0}),!1),o.getCylinderEnd(d,y(L,{alphaCorrection:n?-c:0}),!C)),C&&(n=Math.min(S,v)/Math.max(S,v)!=1,y(!0,r,{frontLower:o.getCylinderFront(E,j),backLower:o.getCylinderBack(E,j),rightLower:o.getCylinderFront(o.getCylinderEnd(d,y(_,{alphaCorrection:n?-c:0}),!0),o.getCylinderEnd(d,y(L,{alphaCorrection:n?-c:0}),!1)),zIndexes:{frontLower:w?2:1,backLower:w?1:2,rightLower:w?1:2}})),r}})}(t)}}(o||(o={})),o})),r(e,"Series/Funnel3D/Funnel3DPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),o=t.seriesTypes.column,d=e.extend,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dlBoxRaw=void 0,e.options=void 0,e.series=void 0,e.y=void 0,e}return n(e,t),e}(o.prototype.pointClass);return d(l.prototype,{shapeType:"funnel3d"}),l})),r(e,"Series/Funnel3D/Funnel3DSeries.js",[e["Series/Funnel3D/Funnel3DComposition.js"],e["Series/Funnel3D/Funnel3DPoint.js"],e["Core/Globals.js"],e["Core/Math3D.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,r,n,o,d){var l,h=this&&this.__extends||(l=function(t,b){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},l(t,b)},function(t,b){function e(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=r.noop,y=n.perspective,f=o.series,x=o.seriesTypes.column,w=d.extend,C=d.merge,m=d.pick,v=d.relativeLength,_=function(e){function r(){var t=null!==e&&e.apply(this,arguments)||this;return t.center=void 0,t.data=void 0,t.options=void 0,t.points=void 0,t}return h(r,e),r.prototype.alignDataLabel=function(t,e,r){var n=this,o=t.dlBoxRaw,d=n.chart.inverted,l=t.plotY>m(n.translatedThreshold,n.yAxis.len),h=m(r.inside,!!n.options.stacking),c={x:o.x,y:o.y,height:0};r.align=m(r.align,!d||h?"center":l?"right":"left"),r.verticalAlign=m(r.verticalAlign,d||h?"middle":l?"top":"bottom"),"top"!==r.verticalAlign&&(c.y+=o.bottom/("bottom"===r.verticalAlign?1:2)),c.width=n.getWidthAt(c.y),n.options.reversed&&(c.width=o.fullWidth-c.width),h?c.x-=c.width/2:"left"===r.align?(r.align="right",c.x-=1.5*c.width):"right"===r.align?(r.align="left",c.x+=c.width/2):c.x-=c.width/2,t.dlBox=c,x.prototype.alignDataLabel.apply(n,arguments)},r.prototype.bindAxes=function(){f.prototype.bindAxes.apply(this,arguments),w(this.xAxis.options,{gridLineWidth:0,lineWidth:0,title:void 0,tickPositions:[]}),C(!0,this.yAxis.options,{gridLineWidth:0,title:void 0,labels:{enabled:!1}})},r.prototype.translate=function(){f.prototype.translate.apply(this,arguments);var t,e,r,n,o,d,l,h,c,x=0,C=this,_=C.chart,j=C.options,S=j.reversed,L=j.ignoreHiddenPoint,z=_.plotWidth,E=_.plotHeight,F=0,P=j.center,U=v(P[0],z),k=v(P[1],E),M=v(j.width,z),A=v(j.height,E),G=v(j.neckWidth,z),O=v(j.neckHeight,E),R=k-A/2+A-O,data=C.data;C.getWidthAt=e=function(t){return t>R||A===O?G:G+(M-G)*(1-(t-(k-A/2))/(A-O))},C.center=[U,k,A],C.centerX=U,data.forEach((function(t){L&&!1===t.visible||(x+=t.y)})),data.forEach((function(f){l=null,r=x?f.y/x:0,d=(o=k-A/2+F*A)+r*A,t=e(o),h=d-o,c={gradientForSides:m(f.options.gradientForSides,j.gradientForSides),x:U,y:o,height:h,width:t,z:1,top:{width:t}},t=e(d),c.bottom={fraction:r,width:t},o>=R?c.isCylinder=!0:d>R&&(l=d,t=e(R),d=R,c.bottom.width=t,c.middle={fraction:h?(R-o)/h:0,width:t}),S&&(c.y=o=k+A/2-(F+r)*A,c.middle&&(c.middle.fraction=1-(h?c.middle.fraction:0)),t=c.width,c.width=c.bottom.width,c.bottom.width=t),f.shapeArgs=w(f.shapeArgs,c),f.percentage=100*r,f.plotX=U,f.plotY=S?k+A/2-(F+r/2)*A:(o+(l||d))/2,n=y([{x:U,y:f.plotY,z:S?-(M-e(f.plotY))/2:-e(f.plotY)/2}],_,!0)[0],f.tooltipPos=[n.x,n.y],f.dlBoxRaw={x:U,width:e(f.plotY),y:o,bottom:c.height||0,fullWidth:M},L&&!1===f.visible||(F+=r)}))},r.compose=t.compose,r.defaultOptions=C(x.defaultOptions,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,gradientForSides:!0,animation:!1,edgeWidth:0,colorByPoint:!0,showInLegend:!1,dataLabels:{align:"right",crop:!1,inside:!1,overflow:"allow"}}),r}(x);return w(_.prototype,{pointClass:e,translate3dShapes:c}),o.registerSeriesType("funnel3d",_),_})),r(e,"masters/modules/funnel3d.src.js",[e["Core/Renderer/RendererRegistry.js"],e["Series/Funnel3D/Funnel3DSeries.js"]],(function(t,e){return e.compose(t.getRendererType()),e}))},t.exports?(d.default=d,t.exports=d):(n=[r(242),r(833),r(509)],void 0===(o=function(t){return d(t),d.Highcharts=t,d}.apply(e,n))||(t.exports=o))}}]);