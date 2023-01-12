/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{550:function(t,e,r){var n,o,l;l=function(t){"use strict";var e=t?t._modules:{};function r(t,path,e,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(e,"Extensions/Oldie/VMLAxis3D.js",[e["Core/Utilities.js"]],(function(t){var e=t.addEvent,r=function(t){this.axis=t};return function(){function t(){}return t.compose=function(r){r.keepProps.push("vml"),e(r,"destroy",t.onDestroy),e(r,"init",t.onInit),e(r,"render",t.onRender)},t.onDestroy=function(){var t,e=this.vml;e&&["backFrame","bottomFrame","sideFrame"].forEach((function(r){(t=e[r])&&(e[r]=t.destroy())}),this)},t.onInit=function(){var t=this;t.vml||(t.vml=new r(t))},t.onRender=function(){var t=this.vml;t.sideFrame&&(t.sideFrame.css({zIndex:0}),t.sideFrame.front.attr({fill:t.sideFrame.color})),t.bottomFrame&&(t.bottomFrame.css({zIndex:1}),t.bottomFrame.front.attr({fill:t.bottomFrame.color})),t.backFrame&&(t.backFrame.css({zIndex:0}),t.backFrame.front.attr({fill:t.backFrame.color}))},t}()})),r(e,"Extensions/Oldie/VMLRenderer3D.js",[e["Core/Axis/Axis.js"],e["Core/DefaultOptions.js"],e["Extensions/Oldie/VMLAxis3D.js"]],(function(t,e,r){var n=e.setOptions;return function(){function e(){}return e.compose=function(e,o){var l=o.prototype,c=e.prototype;n({animate:!1}),c.face3d=l.face3d,c.polyhedron=l.polyhedron,c.elements3d=l.elements3d,c.element3d=l.element3d,c.cuboid=l.cuboid,c.cuboidPath=l.cuboidPath,c.toLinePath=l.toLinePath,c.toLineSegments=l.toLineSegments,c.arc3d=function(t){var e=l.arc3d.call(this,t);return e.css({zIndex:e.zIndex}),e},c.arc3dPath=l.arc3dPath,r.compose(t)},e}()})),r(e,"Extensions/Oldie/Oldie.js",[e["Core/Chart/Chart.js"],e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/DefaultOptions.js"],e["Core/Pointer.js"],e["Core/Renderer/RendererRegistry.js"],e["Core/Renderer/SVG/SVGElement.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"],e["Extensions/Oldie/VMLRenderer3D.js"]],(function(t,e,r,n,o,l,c,h,d,f){var m,y,v=e.parse,x=r.deg2rad,M=r.doc,E=r.noop,svg=r.svg,C=r.win,S=n.getOptions,w=d.addEvent,L=d.createElement,j=d.css,V=d.defined,k=d.discardElement,A=d.erase,I=d.extend,R=d.extendClass,O=d.isArray,N=d.isNumber,G=d.isObject,P=d.pick,T=d.pInt,F=d.uniqueKey;if(S().global.VMLRadialGradientURL="http://code.highcharts.com/10.2.1/gfx/vml-radial-gradient.png",M&&!M.defaultView&&(r.getStyle=d.getStyle=function t(e,r){var n,o={width:"clientWidth",height:"clientHeight"}[r];return e.style[r]?T(e.style[r]):("opacity"===r&&(r="filter"),o?(e.style.zoom=1,Math.max(e[o]-2*t(e,"padding"),0)):(n=e.currentStyle[r.replace(/\-(\w)/g,(function(a,b){return b.toUpperCase()}))],"filter"===r&&(n=n.replace(/alpha\(opacity=([0-9]+)\)/,(function(a,b){return b/100}))),""===n?1:T(n)))}),!svg){w(c,"afterInit",(function(){"text"===this.element.nodeName&&this.css({position:"absolute"})})),o.prototype.normalize=function(t,e){return(t=t||C.event).target||(t.target=t.srcElement),e||(this.chartPosition=e=this.getChartPosition()),I(t,{chartX:Math.round(Math.max(t.x,t.clientX-e.left)),chartY:Math.round(t.y)})},t.prototype.ieSanitizeSVG=function(svg){return svg=svg.replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,(function(s){return s.toLowerCase()}))},t.prototype.isReadyToRender=function(){var t=this;return!(!svg&&C==C.top&&"complete"!==M.readyState&&(M.attachEvent("onreadystatechange",(function(){M.detachEvent("onreadystatechange",t.firstRender),"complete"===M.readyState&&t.firstRender()})),1))},M.createElementNS||(M.createElementNS=function(t,e){return M.createElement(e)}),r.addEventListenerPolyfill=function(t,e){var r=this;function n(t){t.target=t.srcElement||C,e.call(r,t)}r.attachEvent&&(r.hcEventsIE||(r.hcEventsIE={}),e.hcKey||(e.hcKey=F()),r.hcEventsIE[e.hcKey]=n,r.attachEvent("on"+t,n))},r.removeEventListenerPolyfill=function(t,e){this.detachEvent&&(e=this.hcEventsIE[e.hcKey],this.detachEvent("on"+t,e))},(y={docMode8:M&&8===M.documentMode,init:function(t,e){var r=["<",e,' filled="f" stroked="f"'],style=["position: ","absolute",";"],n="div"===e;("shape"===e||n)&&style.push("left:0;top:0;width:1px;height:1px;"),style.push("visibility: ",n?"hidden":"visible"),r.push(' style="',style.join(""),'"/>'),e&&(r=n||"span"===e||"img"===e?r.join(""):t.prepVML(r),this.element=L(r)),this.renderer=t},add:function(t){var e=this,r=e.renderer,element=e.element,n=r.box,o=t&&t.inverted,l=t?t.element||t:n;return t&&(this.parentGroup=t),o&&r.invertChild(element,l),l.appendChild(element),e.added=!0,e.alignOnAdd&&!e.deferUpdateTransform&&e.updateTransform(),e.onAdd&&e.onAdd(),this.className&&this.attr("class",this.className),e},updateTransform:c.prototype.htmlUpdateTransform,setSpanRotation:function(){var t=this.rotation,e=Math.cos(t*x),r=Math.sin(t*x);j(this.element,{filter:t?["progid:DXImageTransform.Microsoft.Matrix(M11=",e,", M12=",-r,", M21=",r,", M22=",e,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(t,e,r,n,o){var l,c=n?Math.cos(n*x):1,h=n?Math.sin(n*x):0,d=P(this.elemHeight,this.element.offsetHeight),f=o&&"left"!==o;this.xCorr=c<0&&-t,this.yCorr=h<0&&-d,l=c*h<0,this.xCorr+=h*e*(l?1-r:r),this.yCorr-=c*e*(n?l?r:1-r:1),f&&(this.xCorr-=t*r*(c<0?-1:1),n&&(this.yCorr-=d*r*(h<0?-1:1)),j(this.element,{textAlign:o}))},pathToVML:function(t){for(var i=t.length,path=[];i--;)N(t[i])?path[i]=Math.round(10*t[i])-5:"Z"===t[i]?path[i]="x":(path[i]=t[i],!t.isArc||"wa"!==t[i]&&"at"!==t[i]||(path[i+5]===path[i+7]&&(path[i+7]+=t[i+7]>t[i+5]?1:-1),path[i+6]===path[i+8]&&(path[i+8]+=t[i+8]>t[i+6]?1:-1)));return path.join(" ")||"x"},clip:function(t){var e,r,n=this;return t?(e=t.members,A(e,n),e.push(n),n.destroyClip=function(){A(e,n)},r=t.getCSS(n)):(n.destroyClip&&n.destroyClip(),r={clip:n.docMode8?"inherit":"rect(auto)"}),n.css(r)},css:c.prototype.htmlCss,safeRemoveChild:function(element){element.parentNode&&k(element)},destroy:function(){return this.destroyClip&&this.destroyClip(),c.prototype.destroy.apply(this)},on:function(t,e){return this.element["on"+t]=function(){var t=C.event;t.target=t.srcElement,e(t)},this},cutOffPath:function(path,t){var e;return 9!==(e=(path=path.split(/[ ,]/)).length)&&11!==e||(path[e-4]=path[e-2]=T(path[e-2])-10*t),path.join(" ")},shadow:function(t,e,r){var i,shadow,n,o,l,c,h,d=[],element=this.element,f=this.renderer,m=element.style,path=element.path;if(path&&"string"!=typeof path.value&&(path="x"),l=path,t){for(c=P(t.width,3),h=(t.opacity||.15)/c,i=1;i<=3;i++)o=2*c+1-2*i,r&&(l=this.cutOffPath(path.value,o+.5)),n=['<shape isShadow="true" strokeweight="',o,'" filled="false" path="',l,'" coordsize="10 10" style="',element.style.cssText,'" />'],shadow=L(f.prepVML(n),null,{left:T(m.left)+P(t.offsetX,1)+"px",top:T(m.top)+P(t.offsetY,1)+"px"}),r&&(shadow.cutOff=o+1),n=['<stroke color="',t.color||"#000000",'" opacity="',h*i,'"/>'],L(f.prepVML(n),null,null,shadow),e?e.element.appendChild(shadow):element.parentNode.insertBefore(shadow,element),d.push(shadow);this.shadows=d}return this},updateShadows:E,setAttr:function(t,e){this.docMode8?this.element[t]=e:this.element.setAttribute(t,e)},getAttr:function(t){return this.docMode8?this.element[t]:this.element.getAttribute(t)},classSetter:function(t){(this.added?this.element:this).className=t},dashstyleSetter:function(t,e,element){(element.getElementsByTagName("stroke")[0]||L(this.renderer.prepVML(["<stroke/>"]),null,null,element))[e]=t||"solid",this[e]=t},dSetter:function(t,e,element){var i,r=this.shadows;if(t=t||[],this.d=t.join&&t.join(" "),element.path=t=this.pathToVML(t),r)for(i=r.length;i--;)r[i].path=r[i].cutOff?this.cutOffPath(t,r[i].cutOff):t;this.setAttr(e,t)},fillSetter:function(t,e,element){var r=element.nodeName;"SPAN"===r?element.style.color=t:"IMG"!==r&&(element.filled="none"!==t,this.setAttr("fillcolor",this.renderer.color(t,element,e,this)))},"fill-opacitySetter":function(t,e,element){L(this.renderer.prepVML(["<",e.split("-")[0],' opacity="',t,'"/>']),null,null,element)},opacitySetter:E,rotationSetter:function(t,e,element){var style=element.style;this[e]=style[e]=t,style.left=-Math.round(Math.sin(t*x)+1)+"px",style.top=Math.round(Math.cos(t*x))+"px"},strokeSetter:function(t,e,element){this.setAttr("strokecolor",this.renderer.color(t,element,e,this))},"stroke-widthSetter":function(t,e,element){element.stroked=!!t,this[e]=t,N(t)&&(t+="px"),this.setAttr("strokeweight",t)},titleSetter:function(t,e){this.setAttr(e,t)},visibilitySetter:function(t,e,element){"inherit"===t&&(t="visible"),this.shadows&&this.shadows.forEach((function(shadow){shadow.style[e]=t})),"DIV"===element.nodeName&&(t="hidden"===t?"-999em":0,this.docMode8||(element.style[e]=t?"visible":"hidden"),e="top"),element.style[e]=t},xSetter:function(t,e,element){this[e]=t,"x"===e?e="left":"y"===e&&(e="top"),this.updateClipping?(this[e]=t,this.updateClipping()):element.style[e]=t},zIndexSetter:function(t,e,element){element.style[e]=t},fillGetter:function(){return this.getAttr("fillcolor")||""},strokeGetter:function(){return this.getAttr("strokecolor")||""},classGetter:function(){return this.getAttr("className")||""}})["stroke-opacitySetter"]=y["fill-opacitySetter"],r.VMLElement=y=R(c,y),y.prototype.ySetter=y.prototype.widthSetter=y.prototype.heightSetter=y.prototype.xSetter;var z={Element:y,isIE8:C.navigator.userAgent.indexOf("MSIE 8.0")>-1,init:function(t,e,r){var n,o,l,c=this;if(this.crispPolyLine=h.prototype.crispPolyLine,c.alignedObjects=[],o=(n=c.createElement("div").css({position:"relative"})).element,t.appendChild(n.element),c.isVML=!0,c.box=o,c.boxWrapper=n,c.gradients={},c.cache={},c.cacheKeys=[],c.imgCount=0,c.setSize(e,r,!1),!M.namespaces.hcv){M.namespaces.add("hcv","urn:schemas-microsoft-com:vml"),l="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";try{M.createStyleSheet().cssText=l}catch(t){M.styleSheets[0].cssText+=l}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(t,e,r,n){var o=this.createElement(),l=G(t);return I(o,{members:[],count:0,left:(l?t.x:t)+1,top:(l?t.y:e)+1,width:(l?t.width:r)-1,height:(l?t.height:n)-1,getCSS:function(t){var element=t.element,e=element.nodeName,r="shape"===e,n=t.inverted,rect=this,o=rect.top-(r?element.offsetTop:0),l=rect.left,c=l+rect.width,h=o+rect.height,d={clip:"rect("+Math.round(n?l:o)+"px,"+Math.round(n?h:c)+"px,"+Math.round(n?c:h)+"px,"+Math.round(n?o:l)+"px)"};return!n&&t.docMode8&&"DIV"===e&&I(d,{width:c+"px",height:h+"px"}),d},updateClipping:function(){o.members.forEach((function(t){t.element&&t.css(o.getCSS(t))}))}})},color:function(t,e,r,n){var o,l,c,h=this,d=/^rgba/,f="none";if(t&&t.linearGradient?c="gradient":t&&t.radialGradient&&(c="pattern"),c){var m,y,x,M,E,C,w,j,V=t.linearGradient||t.radialGradient,k=void 0,A=void 0,I=void 0,R=void 0,O="",N=t.stops,G=[],P=function(){l=['<fill colors="'+G.join(",")+'" opacity="',M,'" o:opacity2="',x,'" type="',c,'" ',O,'focus="100%" method="any" />'],L(h.prepVML(l),null,null,e)};if(w=N[0],j=N[N.length-1],w[0]>0&&N.unshift([0,w[1]]),j[0]<1&&N.push([1,j[1]]),N.forEach((function(t,i){d.test(t[1])?(o=v(t[1]),m=o.get("rgb"),y=o.get("a")):(m=t[1],y=1),G.push(100*t[0]+"% "+m),i?(M=y,E=m):(x=y,C=m)})),"fill"===r)if("gradient"===c)k=V.x1||V[0]||0,A=V.y1||V[1]||0,I=V.x2||V[2]||0,R=V.y2||V[3]||0,O='angle="'+(90-180*Math.atan((R-A)/(I-k))/Math.PI)+'"',P();else{var T,F=V.r,z=2*F,D=2*F,B=V.cx,U=V.cy,W=e.radialReference,$=function(){W&&(T=n.getBBox(),B+=(W[0]-T.x)/T.width-.5,U+=(W[1]-T.y)/T.height-.5,z*=W[2]/T.width,D*=W[2]/T.height),O='src="'+S().global.VMLRadialGradientURL+'" size="'+z+","+D+'" origin="0.5,0.5" position="'+B+","+U+'" color2="'+C+'" ',P()};n.added?$():n.onAdd=$,f=E}else f=m}else if(d.test(t)&&"IMG"!==e.tagName)o=v(t),n[r+"-opacitySetter"](o.get("a"),r,e),f=o.get("rgb");else{var H=e.getElementsByTagName(r);H.length&&(H[0].opacity=1,H[0].type="solid"),f=t}return f},prepVML:function(t){var e="display:inline-block;behavior:url(#default#VML);",r=this.isIE8;return t=t.join(""),t=r?-1===(t=t.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />')).indexOf('style="')?t.replace("/>",' style="'+e+'" />'):t.replace('style="','style="'+e):t.replace("<","<hcv:")},text:h.prototype.html,path:function(path){var t={coordsize:"10 10"};return O(path)?t.d=path:G(path)&&I(t,path),this.createElement("shape").attr(t)},circle:function(t,e,r){var circle=this.symbol("circle");return G(t)&&(r=t.r,e=t.y,t=t.x),circle.isCircle=!0,circle.r=r,circle.attr({x:t,y:e})},g:function(t){var e;return t&&(e={className:"highcharts-"+t,class:"highcharts-"+t}),this.createElement("div").attr(e)},image:function(t,e,r,n,o){var l=this.createElement("img").attr({src:t});return arguments.length>1&&l.attr({x:e,y:r,width:n,height:o}),l},createElement:function(t){return"rect"===t?this.symbol(t):h.prototype.createElement.call(this,t)},invertChild:function(element,t){var e=this,r=t.style,n="IMG"===element.tagName&&element.style;j(element,{flip:"x",left:T(r.width)-(n?T(n.top):1)+"px",top:T(r.height)-(n?T(n.left):1)+"px",rotation:-90}),[].forEach.call(element.childNodes,(function(t){e.invertChild(t,element)}))},symbols:{arc:function(t,e,r,n,o){var l,c=o.start,h=o.end,d=o.r||r||n,f=o.innerR,m=Math.cos(c),y=Math.sin(c),v=Math.cos(h),x=Math.sin(h);return h-c==0?["x"]:(l=["wa",t-d,e-d,t+d,e+d,t+d*m,e+d*y,t+d*v,e+d*x],o.open&&!f&&l.push("e","M",t,e),l.push("at",t-f,e-f,t+f,e+f,t+f*v,e+f*x,t+f*m,e+f*y,"x","e"),l.isArc=!0,l)},circle:function(t,e,r,n,o){return o&&V(o.r)&&(r=n=2*o.r),o&&o.isCircle&&(t-=r/2,e-=n/2),["wa",t,e,t+r,e+n,t+r,e+n/2,t+r,e+n/2,"e"]},rect:function(t,e,r,n,o){return h.prototype.symbols[V(o)&&o.r?"callout":"square"].call(0,t,e,r,n,o)}}};r.VMLRenderer=m=function(){this.init.apply(this,arguments)},I(m.prototype,h.prototype),I(m.prototype,z),l.registerRendererType("VMLRenderer",m,!0),f.compose(m,h)}h.prototype.getSpanWidth=function(t,tspan){var e=t.getBBox(!0).width;return!svg&&this.forExport&&(e=this.measureSpanWidth(tspan.firstChild.data,t.styles)),e},h.prototype.measureSpanWidth=function(text,t){var e,r=M.createElement("span"),n=M.createTextNode(text);return r.appendChild(n),j(r,t),this.box.appendChild(r),e=r.offsetWidth,k(r),e}})),r(e,"masters/modules/oldie.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(n=[r(217)],void 0===(o=function(t){return l(t),l.Highcharts=t,l}.apply(e,n))||(t.exports=o))}}]);