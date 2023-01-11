/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{539:function(t,e,r){var n,o,c;c=function(t){"use strict";var e=t?t._modules:{};function r(t,path,e,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(e,"Series/Cylinder/CylinderPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),o=t.seriesTypes.column.prototype.pointClass,c=e.extend,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.options=void 0,e.series=void 0,e}return n(e,t),e}(o);return c(l.prototype,{shapeType:"cylinder"}),l})),r(e,"Series/Cylinder/CylinderComposition.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Math3D.js"],e["Core/Renderer/RendererRegistry.js"],e["Core/Utilities.js"]],(function(t,e,r,n,o){var c=t.parse,l=e.charts,y=e.deg2rad,h=r.perspective,d=o.merge,f=o.pick,C=n.getRendererType().prototype,v=C.cuboidPath,x=function(path){return!path.some((function(t){return"C"===t[0]}))},_=d(C.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(t){return this.singleSetterForParts("fill",null,{front:t,back:t,top:c(t).brighten(.1).get(),bottom:c(t).brighten(-.1).get()}),this.color=this.fill=t,this}});C.elements3d.cylinder=_,C.cylinder=function(t){return this.element3d("cylinder",t)},C.cylinderPath=function(t){var e=this,r=l[e.chartIndex],n=v.call(e,t),o=!n.isTop,c=!n.isFront,y=e.getCylinderEnd(r,t),h=e.getCylinderEnd(r,t,!0);return{front:e.getCylinderFront(y,h),back:e.getCylinderBack(y,h),top:y,bottom:h,zIndexes:{top:o?3:0,bottom:o?0:3,front:c?2:1,back:c?1:2,group:n.zIndexes.group}}},C.getCylinderFront=function(t,e){var path=t.slice(0,3);if(x(e))"M"===(r=e[0])[0]&&(path.push(e[2]),path.push(e[1]),path.push(["L",r[1],r[2]]));else{var r=e[0],n=e[1],o=e[2];"M"===r[0]&&"C"===n[0]&&"C"===o[0]&&(path.push(["L",o[5],o[6]]),path.push(["C",o[3],o[4],o[1],o[2],n[5],n[6]]),path.push(["C",n[3],n[4],n[1],n[2],r[1],r[2]]))}return path.push(["Z"]),path},C.getCylinderBack=function(t,e){var path=[];if(x(t)){var r=t[0],n=t[2];"M"===r[0]&&"L"===n[0]&&(path.push(["M",n[1],n[2]]),path.push(t[3]),path.push(["L",r[1],r[2]]))}else"C"===t[2][0]&&path.push(["M",t[2][5],t[2][6]]),path.push(t[3],t[4]);if(x(e))"M"===(r=e[0])[0]&&(path.push(["L",r[1],r[2]]),path.push(e[3]),path.push(e[2]));else{var o=e[2],c=e[3],l=e[4];"C"===o[0]&&"C"===c[0]&&"C"===l[0]&&(path.push(["L",l[5],l[6]]),path.push(["C",l[3],l[4],l[1],l[2],c[5],c[6]]),path.push(["C",c[3],c[4],c[1],c[2],o[5],o[6]]))}return path.push(["Z"]),path},C.getCylinderEnd=function(t,e,r){var n,o,c,l=e.width,d=void 0===l?0:l,C=e.height,v=void 0===C?0:C,x=e.alphaCorrection,_=void 0===x?0:x,m=f(e.depth,d,0),j=Math.min(d,m)/2,z=y*(t.options.chart.options3d.beta-90+_),w=(e.y||0)+(r?v:0),M=.5519*j,P=d/2+(e.x||0),S=m/2+(e.z||0),O=[{x:0,y:w,z:j},{x:M,y:w,z:j},{x:j,y:w,z:M},{x:j,y:w,z:0},{x:j,y:w,z:-M},{x:M,y:w,z:-j},{x:0,y:w,z:-j},{x:-M,y:w,z:-j},{x:-j,y:w,z:-M},{x:-j,y:w,z:0},{x:-j,y:w,z:M},{x:-M,y:w,z:j},{x:0,y:w,z:j}],k=Math.cos(z),L=Math.sin(z);return O.forEach((function(t,i){o=t.x,c=t.z,O[i].x=o*k-c*L+P,O[i].z=c*k+o*L+S})),n=h(O,t,!0),Math.abs(n[3].y-n[9].y)<2.5&&Math.abs(n[0].y-n[6].y)<2.5?this.toLinePath([n[0],n[3],n[6],n[9]],!0):this.getCurvedPath(n)},C.getCurvedPath=function(t){var i,path=[["M",t[0].x,t[0].y]],e=t.length-2;for(i=1;i<e;i+=3)path.push(["C",t[i].x,t[i].y,t[i+1].x,t[i+1].y,t[i+2].x,t[i+2].y]);return path}})),r(e,"Series/Cylinder/CylinderSeries.js",[e["Series/Cylinder/CylinderPoint.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,r){var n,o=this&&this.__extends||(n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},n(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=e.seriesTypes.column,l=r.extend,y=r.merge,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.options=void 0,e.points=void 0,e}return o(e,t),e.defaultOptions=y(c.defaultOptions),e}(c);return l(h.prototype,{pointClass:t}),e.registerSeriesType("cylinder",h),h})),r(e,"masters/modules/cylinder.src.js",[],(function(){}))},t.exports?(c.default=c,t.exports=c):(n=[r(242),r(833)],void 0===(o=function(t){return c(t),c.Highcharts=t,c}.apply(e,n))||(t.exports=o))}}]);