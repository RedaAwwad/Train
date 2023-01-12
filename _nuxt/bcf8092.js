/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28,74],{470:function(e,t,n){var o,r,a;a=function(a){function e(a,e,t,n){a.hasOwnProperty(e)||(a[e]=n.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}e(a=a?a._modules:{},"Core/Chart/ChartNavigationComposition.js",[],(function(){var a;return function(a){a.compose=function(a){return a.navigation||(a.navigation=new e(a)),a};var e=function(){function a(a){this.updates=[],this.chart=a}return a.prototype.addUpdate=function(a){this.chart.navigation.updates.push(a)},a.prototype.update=function(a,e){var t=this;this.updates.forEach((function(b){b.call(t.chart,a,e)}))},a}();a.Additions=e}(a||(a={})),a})),e(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],(function(a){return a=a.isTouchDevice,{exporting:{type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen&&this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid ".concat("#999999"),background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:a?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"}}}})),e(a,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var a;return function(a){function e(a,e,b,g){return[["M",a,e+2.5],["L",a+b,e+2.5],["M",a,e+g/2+.5],["L",a+b,e+g/2+.5],["M",a,e+g-1.5],["L",a+b,e+g-1.5]]}function t(a,e,b,g){return a=g/3-2,(g=[]).concat(this.circle(b-a,e,a,a),this.circle(b-a,e+a+4,a,a),this.circle(b-a,e+2*(a+4),a,a))}var q=[];a.compose=function(a){-1===q.indexOf(a)&&(q.push(a),(a=a.prototype.symbols).menu=e,a.menuball=t.bind(a))}}(a||(a={})),a})),e(a,"Extensions/Exporting/Fullscreen.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],(function(a,e){function t(){this.fullscreen=new r(this)}var n=e.addEvent,q=e.fireEvent,o=[],r=function(){function b(a){this.chart=a,this.isOpen=!1,a=a.renderTo,this.browserProps||("function"==typeof a.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:a.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:a.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:a.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return b.compose=function(a){-1===o.indexOf(a)&&(o.push(a),n(a,"beforeRender",t))},b.prototype.close=function(){var a=this,e=a.chart,t=e.options.chart;q(e,"fullscreenClose",null,(function(){a.isOpen&&a.browserProps&&e.container.ownerDocument instanceof Document&&e.container.ownerDocument[a.browserProps.exitFullscreen](),a.unbindFullscreenEvent&&(a.unbindFullscreenEvent=a.unbindFullscreenEvent()),e.setSize(a.origWidth,a.origHeight,!1),a.origWidth=void 0,a.origHeight=void 0,t.width=a.origWidthOption,t.height=a.origHeightOption,a.origWidthOption=void 0,a.origHeightOption=void 0,a.isOpen=!1,a.setButtonText()}))},b.prototype.open=function(){var a=this,e=a.chart,t=e.options.chart;q(e,"fullscreenOpen",null,(function(){if(t&&(a.origWidthOption=t.width,a.origHeightOption=t.height),a.origWidth=e.chartWidth,a.origHeight=e.chartHeight,a.browserProps){var g=n(e.container.ownerDocument,a.browserProps.fullscreenChange,(function(){a.isOpen?(a.isOpen=!1,a.close()):(e.setSize(null,null,!1),a.isOpen=!0,a.setButtonText())})),o=n(e,"destroy",g);a.unbindFullscreenEvent=function(){g(),o()};var b=e.renderTo[a.browserProps.requestFullscreen]();b&&b.catch((function(){alert("Full screen is not supported inside a frame.")}))}}))},b.prototype.setButtonText=function(){var g=this.chart,e=g.exportDivElements,t=g.options.exporting,b=t&&t.buttons&&t.buttons.contextButton.menuItems;g=g.options.lang,t&&t.menuItemDefinitions&&g&&g.exitFullscreen&&g.viewFullscreen&&b&&e&&(e=e[b.indexOf("viewFullscreen")])&&a.setElementHTML(e,this.isOpen?g.exitFullscreen:t.menuItemDefinitions.viewFullscreen.text||g.viewFullscreen)},b.prototype.toggle=function(){this.isOpen?this.close():this.open()},b}();return r})),e(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,e){var t=a.doc,n=e.createElement,q=e.discardElement,o=e.merge,r=e.objectEach,b={ajax:function(a){var e={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},b=new XMLHttpRequest;if(!a.url)return!1;b.open((a.type||"get").toUpperCase(),a.url,!0),a.headers&&a.headers["Content-Type"]||b.setRequestHeader("Content-Type",e[a.dataType||"json"]||e.text),r(a.headers,(function(a,e){b.setRequestHeader(e,a)})),a.responseType&&(b.responseType=a.responseType),b.onreadystatechange=function(){if(4===b.readyState){if(200===b.status){if("blob"!==a.responseType){var e=b.responseText;if("json"===a.dataType)try{e=JSON.parse(e)}catch(e){if(e instanceof Error)return void(a.error&&a.error(b,e))}}return a.success&&a.success(e,b)}a.error&&a.error(b,b.responseText)}},a.data&&"string"!=typeof a.data&&(a.data=JSON.stringify(a.data)),b.send(a.data)},getJSON:function(a,e){b.ajax({url:a,success:e,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,b,e){var l=n("form",o({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},t.body);r(b,(function(a,b){n("input",{type:"hidden",name:b,value:a},void 0,l)})),l.submit(),q(l)}};return b})),e(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Chart/ChartNavigationComposition.js"],a["Core/Defaults.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Extensions/Exporting/Fullscreen.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],(function(a,e,t,n,q,o,r,b,g,l){var c,d=n.defaultOptions,h=n.setOptions,f=b.doc,m=b.SVG_NS,x=b.win,v=l.addEvent,y=l.css,w=l.createElement,E=l.discardElement,C=l.extend,S=l.find,T=l.fireEvent,D=l.isObject,O=l.merge,k=l.objectEach,M=l.pick,N=l.removeEvent,F=l.uniqueKey;return function(e){function n(a){var e=this,t=e.renderer,n=O(e.options.navigation.buttonOptions,a),b=n.onclick,o=n.menuItems,r=n.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==n.enabled&&n.theme){var l,c=n.theme;e.styledMode||(c.fill=M(c.fill,"#ffffff"),c.stroke=M(c.stroke,"none")),b?l=function(a){a&&a.stopPropagation(),b.call(e,a)}:o&&(l=function(a){a&&a.stopPropagation(),e.contextMenu(u.menuClassName,o,u.translateX,u.translateY,u.width,u.height,u),u.setState(2)}),n.text&&n.symbol?c.paddingLeft=M(c.paddingLeft,30):n.text||C(c,{width:n.width,height:n.height,padding:0}),e.styledMode||(c["stroke-linecap"]="round",c.fill=M(c.fill,"#ffffff"),c.stroke=M(c.stroke,"none"));var u=t.button(n.text,0,0,l,c,void 0,void 0,void 0,void 0,n.useHTML).addClass(a.className).attr({title:M(e.options.lang[n._titleKey||n.titleKey],"")});if(u.menuClassName=a.menuClassName||"highcharts-menu-"+e.btnCount++,n.symbol){var g=t.symbol(n.symbol,n.symbolX-r/2,n.symbolY-r/2,r,r,{width:r,height:r}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(u);e.styledMode||g.attr({stroke:n.symbolStroke,fill:n.symbolFill,"stroke-width":n.symbolStrokeWidth||1})}u.add(e.exportingGroup).align(C(n,{width:u.width,x:M(n.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(u.width+n.buttonSpacing)*("right"===n.align?-1:1),e.exportSVGElements.push(u,g)}}function c(){if(this.printReverseInfo){var a=this.printReverseInfo,e=a.childNodes,b=a.origDisplay;a=a.resetParams,this.moveContainers(this.renderTo),[].forEach.call(e,(function(a,e){1===a.nodeType&&(a.style.display=b[e]||"")})),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,Z=void 0,T(this,"afterPrint")}}function j(){var a=f.body,e=this.options.exporting.printMaxWidth,b={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),T(this,"beforePrint"),e&&this.chartWidth>e&&(b.resetParams=[this.options.chart.width,void 0,!1],this.setSize(e,void 0,!1)),[].forEach.call(b.childNodes,(function(a,e){1===a.nodeType&&(b.origDisplay[e]=a.style.display,a.style.display="none")})),this.moveContainers(a),this.printReverseInfo=b}function H(a){a.renderExporting(),v(a,"redraw",a.renderExporting),v(a,"destroy",a.destroyExport)}function L(e,t,b,n,o,r,g){var c=this,d=c.options.navigation,u=c.chartWidth,h=c.chartHeight,m="cache-"+e,E=Math.max(o,r),p=c[m];if(!p){c.exportContextMenu=c[m]=p=w("div",{className:e},{position:"absolute",zIndex:1e3,padding:E+"px",pointerEvents:"auto"},c.fixedDiv||c.container);var S=w("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},p);c.styledMode||y(S,C({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},d.menuStyle)),p.hideMenu=function(){y(p,{display:"none"}),g&&g.setState(0),c.openMenu=!1,y(c.renderTo,{overflow:"hidden"}),y(c.container,{overflow:"hidden"}),l.clearTimeout(p.hideTimer),T(c,"exportMenuHidden")},c.exportEvents.push(v(p,"mouseleave",(function(){p.hideTimer=x.setTimeout(p.hideMenu,500)})),v(p,"mouseenter",(function(){l.clearTimeout(p.hideTimer)})),v(f,"mouseup",(function(a){c.pointer.inClass(a.target,e)||p.hideMenu()})),v(p,"click",(function(){c.openMenu&&p.hideMenu()}))),t.forEach((function(e){if("string"==typeof e&&(e=c.options.exporting.menuItemDefinitions[e]),D(e,!0)){var t=void 0;e.separator?t=w("hr",void 0,void 0,S):("viewData"===e.textKey&&c.isDataTableVisible&&(e.textKey="hideData"),t=w("li",{className:"highcharts-menu-item",onclick:function(a){a&&a.stopPropagation(),p.hideMenu(),e.onclick&&e.onclick.apply(c,arguments)}},void 0,S),a.setElementHTML(t,e.text||c.options.lang[e.textKey]),c.styledMode||(t.onmouseover=function(){y(this,d.menuItemHoverStyle)},t.onmouseout=function(){y(this,d.menuItemStyle)},y(t,C({cursor:"pointer"},d.menuItemStyle||{})))),c.exportDivElements.push(t)}})),c.exportDivElements.push(S,p),c.exportMenuWidth=p.offsetWidth,c.exportMenuHeight=p.offsetHeight}t={display:"block"},b+c.exportMenuWidth>u?t.right=u-b-o-E+"px":t.left=b-E+"px",n+r+c.exportMenuHeight>h&&"top"!==g.alignOptions.verticalAlign?t.bottom=h-n-E+"px":t.top=n+r-E+"px",y(p,t),y(c.renderTo,{overflow:""}),y(c.container,{overflow:""}),c.openMenu=!0,T(c,"exportMenuShown")}function A(a){var e,t=a?a.target:this,b=t.exportSVGElements,n=t.exportDivElements;a=t.exportEvents,b&&(b.forEach((function(a,n){a&&(a.onclick=a.ontouchstart=null,e="cache-"+a.menuClassName,t[e]&&delete t[e],b[n]=a.destroy())})),b.length=0),t.exportingGroup&&(t.exportingGroup.destroy(),delete t.exportingGroup),n&&(n.forEach((function(a,e){a&&(l.clearTimeout(a.hideTimer),N(a,"mouseleave"),n[e]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,E(a))})),n.length=0),a&&(a.forEach((function(a){a()})),a.length=0)}function P(a,e){e=this.getSVGForExport(a,e),a=O(this.options.exporting,a),g.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:e},a.formAttributes)}function R(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function I(){var a=this.userOptions.title&&this.userOptions.title.text,e=this.options.exporting.filename;return e?e.replace(/\//g,"-"):("string"==typeof a&&(e=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!e||5>e.length)&&(e="chart"),e)}function G(a){var e,b=O(this.options,a);b.plotOptions=O(this.userOptions.plotOptions,a&&a.plotOptions),b.time=O(this.userOptions.time,a&&a.time);var t=w("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},f.body),n=this.renderTo.style.width,g=this.renderTo.style.height;n=b.exporting.sourceWidth||b.chart.width||/px$/.test(n)&&parseInt(n,10)||(b.isGantt?800:600),g=b.exporting.sourceHeight||b.chart.height||/px$/.test(g)&&parseInt(g,10)||400,C(b.chart,{animation:!1,renderTo:t,forExport:!0,renderer:"SVGRenderer",width:n,height:g}),b.exporting.enabled=!1,delete b.data,b.series=[],this.series.forEach((function(a){(e=O(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible})).isInternal||b.series.push(e)}));var o={};this.axes.forEach((function(a){a.userOptions.internalKey||(a.userOptions.internalKey=F()),a.options.isInternal||(o[a.coll]||(o[a.coll]=!0,b[a.coll]=[]),b[a.coll].push(O(a.userOptions,{visible:a.visible})))}));var r=new this.constructor(b,this.callback);return a&&["xAxis","yAxis","series"].forEach((function(e){var b={};a[e]&&(b[e]=a[e],r.update(b))})),this.axes.forEach((function(a){var e=S(r.axes,(function(e){return e.options.internalKey===a.userOptions.internalKey})),b=a.getExtremes(),t=b.userMin;b=b.userMax,e&&(void 0!==t&&t!==e.min||void 0!==b&&b!==e.max)&&e.setExtremes(t,b,!0,!1)})),g=r.getChartHTML(),T(this,"getSVG",{chartCopy:r}),g=this.sanitizeSVG(g,b),b=null,r.destroy(),E(t),g}function V(a,b){var e=this.options.exporting;return this.getSVG(O({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))}function W(a){return a.replace(/([A-Z])/g,(function(a,e){return"-"+e.toLowerCase()}))}function B(){var g,t=_,n=e.inlineAllowlist,o={},r=f.createElement("iframe");y(r,{width:"1px",height:"1px",visibility:"hidden"}),f.body.appendChild(r);var l=r.contentWindow&&r.contentWindow.document;l&&l.body.appendChild(l.createElementNS(m,"svg")),function a(e){var r={};if(l&&1===e.nodeType&&-1===Q.indexOf(e.nodeName)){var c=x.getComputedStyle(e,null),d="svg"===e.nodeName?{}:x.getComputedStyle(e.parentNode,null);if(!o[e.nodeName]){g=l.getElementsByTagName("svg")[0];var h=l.createElementNS(e.namespaceURI,e.nodeName);g.appendChild(h);var f=x.getComputedStyle(h,null),p={};for(var m in f)"string"!=typeof f[m]||/^[0-9]+$/.test(m)||(p[m]=f[m]);o[e.nodeName]=p,"text"===e.nodeName&&delete o.text.fill,g.removeChild(h)}for(var v in c)if(b.isFirefox||b.isMS||b.isSafari||Object.hasOwnProperty.call(c,v)){m=c[v];var q=v;if(h=f=!1,n.length){for(p=n.length;p--&&!f;)f=n[p].test(q);h=!f}for("transform"===q&&"none"===m&&(h=!0),p=t.length;p--&&!h;)h=t[p].test(q)||"function"==typeof m;h||d[q]===m&&"svg"!==e.nodeName||o[e.nodeName][q]===m||(Y&&-1===Y.indexOf(q)?r[q]=m:m&&e.setAttribute(W(q),m))}y(e,r),"svg"===e.nodeName&&e.setAttribute("stroke-width","1px"),"text"!==e.nodeName&&[].forEach.call(e.children||e.childNodes,a)}}(this.container.querySelector("svg")),g.parentNode.removeChild(g),r.parentNode.removeChild(r)}function U(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(e){a.appendChild(e)}))}function K(){var a=this;a.exporting={update:function(e,b){a.isDirtyExporting=!0,O(!0,a.options.exporting,e),M(b,!0)&&a.redraw()}},t.compose(a).navigation.addUpdate((function(e,b){a.isDirtyExporting=!0,O(!0,a.options.navigation,e),M(b,!0)&&a.redraw()}))}function z(){var a=this;a.isPrinting||(Z=a,b.isSafari||a.beforePrint(),setTimeout((function(){x.focus(),x.print(),b.isSafari||setTimeout((function(){a.afterPrint()}),1e3)}),1))}function $(){var a=this,b=a.options.exporting,e=b.buttons,t=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0,a.isDirtyExporting&&a.destroyExport(),t&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),k(e,(function(e){a.addButton(e)})),a.isDirtyExporting=!1)}function J(a,b){var e=a.indexOf("</svg>")+6,t=a.substr(e);return a=a.substr(0,e),b&&b.exporting&&b.exporting.allowHTML&&t&&(t='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+t.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",t+"</svg>")),a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a)),a}var X=[],_=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/^parentRule$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/,/^[0-9]+$/],Y="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");e.inlineAllowlist=[];var Z,Q=["clipPath","defs","desc"];e.compose=function(a,e){o.compose(e),r.compose(a),-1===X.indexOf(a)&&(X.push(a),(e=a.prototype).afterPrint=c,e.exportChart=P,e.inlineStyles=B,e.print=z,e.sanitizeSVG=J,e.getChartHTML=R,e.getSVG=G,e.getSVGForExport=V,e.getFilename=I,e.moveContainers=U,e.beforePrint=j,e.contextMenu=L,e.addButton=n,e.destroyExport=A,e.renderExporting=$,e.callbacks.push(H),v(a,"init",K),b.isSafari&&b.win.matchMedia("print").addListener((function(a){Z&&(a.matches?Z.beforePrint():Z.afterPrint())}))),-1===X.indexOf(h)&&(X.push(h),d.exporting=O(q.exporting,d.exporting),d.lang=O(q.lang,d.lang),d.navigation=O(q.navigation,d.navigation))}}(c||(c={})),c})),e(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],(function(a,e,t){a.HttpUtilities=t,a.ajax=t.ajax,a.getJSON=t.getJSON,a.post=t.post,e.compose(a.Chart,a.Renderer)}))},e.exports?(a.default=a,e.exports=a):(o=[n(219)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))},519:function(e,t,n){var o,r,l;l=function(e){"use strict";var t=e?e._modules:{};function n(e,path,t,n){e.hasOwnProperty(path)||(e[path]=n.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:e[path]}})))}n(t,"Extensions/ExportData/ExportDataDefaults.js",[],(function(){return{exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:"\n"},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},viewData:"View data table",hideData:"Hide data table"}}})),n(t,"Extensions/DownloadURL.js",[t["Core/Globals.js"]],(function(e){var t=e.isSafari,n=e.win,o=n.document,r=n.URL||n.webkitURL||n,l=e.dataURLtoBlob=function(e){var t=e.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/);if(t&&t.length>3&&n.atob&&n.ArrayBuffer&&n.Uint8Array&&n.Blob&&r.createObjectURL){for(var o=n.atob(t[3]),l=new n.ArrayBuffer(o.length),c=new n.Uint8Array(l),i=0;i<c.length;++i)c[i]=o.charCodeAt(i);var d=new n.Blob([c],{type:t[1]});return r.createObjectURL(d)}},c=e.downloadURL=function(e,r){var nav=n.navigator,a=o.createElement("a");if("string"==typeof e||e instanceof String||!nav.msSaveOrOpenBlob){e="".concat(e);var c=/Edge\/\d+/.test(nav.userAgent);if((t&&"string"==typeof e&&0===e.indexOf("data:application/pdf")||c||e.length>2e6)&&!(e=l(e)||""))throw new Error("Failed to convert to blob");if(void 0!==a.download)a.href=e,a.download=r,o.body.appendChild(a),a.click(),o.body.removeChild(a);else try{var d=n.open(e,"chart");if(null==d)throw new Error("Failed to open window")}catch(t){n.location.href=e}}else nav.msSaveOrOpenBlob(e,r)};return{dataURLtoBlob:l,downloadURL:c}})),n(t,"Extensions/ExportData/ExportData.js",[t["Core/Renderer/HTML/AST.js"],t["Extensions/ExportData/ExportDataDefaults.js"],t["Core/Globals.js"],t["Core/Defaults.js"],t["Extensions/DownloadURL.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(e,t,n,o,r,l,c){var d=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,i=0,r=t.length;i<r;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))},h=n.doc,f=n.win,m=o.getOptions,x=o.setOptions,v=r.downloadURL,y=l.series,w=l.seriesTypes,E=w.arearange,C=w.gantt,S=w.map,T=w.mapbubble,D=w.treemap,O=c.addEvent,k=c.defined,M=c.extend,N=c.find,F=c.fireEvent,j=c.isNumber,H=c.pick,L=[];function A(){var e=this.getCSV(!0);v(K(e,"text/csv")||"data:text/csv,\ufeff"+encodeURIComponent(e),this.getFilename()+".csv")}function P(){var s,template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+this.getTable(!0)+"</body></html>";v(K(template,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+(s=template,f.btoa(unescape(encodeURIComponent(s)))),this.getFilename()+".xls")}function R(e){var t="",n=this.getDataRows(),o=this.options.exporting.csv,r=H(o.decimalPoint,","!==o.itemDelimiter&&e?1.1.toLocaleString()[1]:"."),l=H(o.itemDelimiter,","===r?";":","),c=o.lineDelimiter;return n.forEach((function(e,i){for(var o="",d=e.length;d--;)"string"==typeof(o=e[d])&&(o='"'+o+'"'),"number"==typeof o&&"."!==r&&(o=o.toString().replace(".",r)),e[d]=o;e.length=n.length?n[0].length:0,t+=e.join(l),i<n.length-1&&(t+=c)})),t}function I(e){var t,n,o,r,l,c,h,f=this.hasParallelCoordinates,time=this.time,m=this.options.exporting&&this.options.exporting.csv||{},x=this.xAxis,v={},w=[],E=[],C=[],S=this.options.lang.exportData,T=S.categoryHeader,D=S.categoryDatetimeHeader,O=function(t,n,o){if(m.columnHeaderFormatter){var s=m.columnHeaderFormatter(t,n,o);if(!1!==s)return s}return t?t instanceof y?e?{columnTitle:o>1?n:t.name,topLevelColumnTitle:t.name}:t.name+(o>1?" ("+n+")":""):t.options.title&&t.options.title.text||(t.dateTime?D:T):T},M=function(e,t,n){var o={},r={};return t.forEach((function(t){var l=(e.keyToAxis&&e.keyToAxis[t]||t)+"Axis",c=j(n)?e.chart[l][n]:e[l];o[t]=c&&c.categories||[],r[t]=c&&c.dateTime})),{categoryMap:o,dateTimeValueAxisMap:r}},L=[],i=0;for(r in this.series.forEach((function(t){var n,r,l=t.options.keys,c=t.xAxis,h=l||function(e,t){return e.data.filter((function(e){return void 0!==e.y&&e.name})).length&&t&&!t.categories&&!e.keyToAxis?e.pointArrayMap&&e.pointArrayMap.filter((function(p){return"x"===p})).length?(e.pointArrayMap.unshift("x"),e.pointArrayMap):["x","y"]:e.pointArrayMap||["y"]}(t,c),y=h.length,w=!t.requireSorting&&{},S=x.indexOf(c),T=M(t,h);if(!1!==t.options.includeInDataExport&&!t.options.isInternal&&!1!==t.visible){for(N(L,(function(e){return e[0]===S}))||L.push([S,i]),r=0;r<y;)o=O(t,h[r],h.length),C.push(o.columnTitle||o),e&&E.push(o.topLevelColumnTitle||o),r++;n={chart:t.chart,autoIncrement:t.autoIncrement,options:t.options,pointArrayMap:t.pointArrayMap,index:t.index},t.options.data.forEach((function(e,o){var l,x,E,C={series:n};if(f&&(T=M(t,h,o)),t.pointClass.prototype.applyOptions.apply(C,[e]),k(v[l=C.x])&&v[l].seriesIndices.includes(n.index)){var D=Object.keys(v).filter((function(i){return v[i].seriesIndices.includes(n.index)&&l})),O=D.filter((function(e){return 0===e.indexOf(String(l))}));l=l.toString()+","+O.length}var N=t.data[o]&&t.data[o].name;for(r=0,(!c||"name"===t.exportKey||!f&&c&&c.hasNames&&N)&&(l=N),w&&(w[l]&&(l+="|"+o),w[l]=!0),v[l]||(v[l]=[],v[l].xValues=[]),v[l].x=C.x,v[l].name=N,v[l].xValues[S]=C.x,k(v[l].seriesIndices)||(v[l].seriesIndices=[]),v[l].seriesIndices=d(d([],v[l].seriesIndices,!0),[n.index],!1);r<y;)E=C[x=h[r]],v[l][i+r]=H(T.categoryMap[x][E],T.dateTimeValueAxisMap[x]?time.dateFormat(m.dateFormat,E):null,E),r++})),i+=r}})),v)Object.hasOwnProperty.call(v,r)&&w.push(v[r]);for(n=e?[E,C]:[C],i=L.length;i--;)c=L[i][0],h=L[i][1],t=x[c],w.sort((function(a,b){return a.xValues[c]-b.xValues[c]})),l=O(t),n[0].splice(h,0,l),e&&n[1]&&n[1].splice(h,0,l),w.forEach((function(e){var n=e.name;t&&!k(n)&&(t.dateTime?(e.x instanceof Date&&(e.x=e.x.getTime()),n=time.dateFormat(m.dateFormat,e.x)):n=t.categories?H(t.names[e.x],t.categories[e.x],e.x):e.x),e.splice(h,0,n)}));return n=n.concat(w),F(this,"exportData",{dataRows:n}),n}function G(e){var t=function(e){if(!e.tagName||"#text"===e.tagName)return e.textContent||"";var n=e.attributes,html="<".concat(e.tagName);return n&&Object.keys(n).forEach((function(e){var t=n[e];html+=" ".concat(e,'="').concat(t,'"')})),html+=">",html+=e.textContent||"",(e.children||[]).forEach((function(e){html+=t(e)})),html+="</".concat(e.tagName,">")},n=this.getTableAST(e);return t(n)}function V(e){var t=0,n=[],o=this.options,r=e?1.1.toLocaleString()[1]:".",l=H(o.exporting.useMultiLevelHeaders,!0),c=this.getDataRows(l),d=l?c.shift():null,h=c.shift(),f=function(e,t,n,o){var l=H(o,""),c="highcharts-text"+(t?" "+t:"");return"number"==typeof l?(l=l.toString(),","===r&&(l=l.replace(".",r)),c="highcharts-number"):o||(c="highcharts-empty"),{tagName:e,attributes:n=M({class:c},n),textContent:l}};!1!==o.exporting.tableCaption&&n.push({tagName:"caption",attributes:{class:"highcharts-table-caption"},textContent:H(o.exporting.tableCaption,o.title.text?o.title.text:"Chart")});for(var i=0,m=c.length;i<m;++i)c[i].length>t&&(t=c[i].length);n.push(function(e,t,n){var r,c,d=[],i=0,h=n||t&&t.length,m=0;if(l&&e&&t&&!function(e,t){var i=e.length;if(t.length!==i)return!1;for(;i--;)if(e[i]!==t[i])return!1;return!0}(e,t)){for(var x=[];i<h;++i)if((r=e[i])===e[i+1])++m;else if(m)x.push(f("th","highcharts-table-topheading",{scope:"col",colspan:m+1},r)),m=0;else{r===t[i]?o.exporting.useRowspanHeaders?(c=2,delete t[i]):(c=1,t[i]=""):c=1;var v=f("th","highcharts-table-topheading",{scope:"col"},r);c>1&&v.attributes&&(v.attributes.valign="top",v.attributes.rowspan=c),x.push(v)}d.push({tagName:"tr",children:x})}if(t){for(x=[],i=0,h=t.length;i<h;++i)void 0!==t[i]&&x.push(f("th",null,{scope:"col"},t[i]));d.push({tagName:"tr",children:x})}return{tagName:"thead",children:d}}(d,h,Math.max(t,h.length)));var x=[];c.forEach((function(e){for(var n=[],o=0;o<t;o++)n.push(f(o?"td":"th",null,o?{}:{scope:"row"},e[o]));x.push({tagName:"tr",children:n})})),n.push({tagName:"tbody",children:x});var v={tree:{tagName:"table",id:"highcharts-data-table-".concat(this.index),children:n}};return F(this,"aftergetTableAST",v),v.tree}function W(){this.toggleDataTable(!1)}function B(t){var n=(t=H(t,!this.isDataTableVisible))&&!this.dataTableDiv;if(n&&(this.dataTableDiv=h.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling)),this.dataTableDiv){var style=this.dataTableDiv.style,o=style.display;style.display=t?"block":"none",t&&(this.dataTableDiv.innerHTML=e.emptyHTML,new e([this.getTableAST()]).addToDOM(this.dataTableDiv),F(this,"afterViewData",{element:this.dataTableDiv,wasHidden:n||o!==style.display}))}this.isDataTableVisible=t;var r=this.exportDivElements,l=this.options.exporting,c=l&&l.buttons&&l.buttons.contextButton.menuItems,d=this.options.lang;if(l&&l.menuItemDefinitions&&d&&d.viewData&&d.hideData&&c&&r){var f=r[c.indexOf("viewData")];f&&e.setElementHTML(f,this.isDataTableVisible?d.hideData:d.viewData)}}function U(){this.toggleDataTable(!0)}function K(content,e){var nav=f.navigator,t=nav.userAgent.indexOf("WebKit")>-1&&nav.userAgent.indexOf("Chrome")<0,n=f.URL||f.webkitURL||f;try{if(nav.msSaveOrOpenBlob&&f.MSBlobBuilder){var o=new f.MSBlobBuilder;return o.append(content),o.getBlob("image/svg+xml")}if(!t)return n.createObjectURL(new f.Blob(["\ufeff"+content],{type:e}))}catch(e){}}function z(){var e=this,t=e.dataTableDiv,n=document.querySelectorAll("thead")[0].querySelectorAll("tr")[0],o=function(tr,e){return tr.children[e].textContent};t&&n.childNodes.forEach((function(th){var table=th.closest("table");th.addEventListener("click",(function(){var n,r,l=d([],t.querySelectorAll("tr:not(thead tr)"),!0),c=d([],th.parentNode.children,!0);l.sort((n=c.indexOf(th),r=e.ascendingOrderInTable=!e.ascendingOrderInTable,function(a,b){var e,t;return e=o(r?a:b,n),t=o(r?b:a,n),""===e||""===t||isNaN(e)||isNaN(t)?e.toString().localeCompare(t):e-t})).forEach((function(tr){table.appendChild(tr)})),c.forEach((function(th){["highcharts-sort-ascending","highcharts-sort-descending"].forEach((function(e){th.classList.contains(e)&&th.classList.remove(e)}))})),th.classList.add(e.ascendingOrderInTable?"highcharts-sort-ascending":"highcharts-sort-descending")}))}))}function $(){this.options&&this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&this.viewData()}return{compose:function(e){if(-1===L.indexOf(e)){L.push(e),O(e,"afterViewData",z),O(e,"render",$);var n=e.prototype;n.downloadCSV=A,n.downloadXLS=P,n.getCSV=R,n.getDataRows=I,n.getTable=G,n.getTableAST=V,n.hideData=W,n.toggleDataTable=B,n.viewData=U}if(-1===L.indexOf(x)){L.push(x);var o=m().exporting;o&&(M(o.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},viewData:{textKey:"viewData",onclick:function(){this.toggleDataTable()}}}),o.buttons&&o.buttons.contextButton.menuItems&&o.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData")),x(t)}E&&-1===L.indexOf(E)&&(L.push(E),E.prototype.keyToAxis={low:"y",high:"y"}),C&&-1===L.indexOf(C)&&(L.push(C),C.prototype.keyToAxis={start:"x",end:"x"}),S&&-1===L.indexOf(S)&&(L.push(S),S.prototype.exportKey="name"),T&&-1===L.indexOf(T)&&(L.push(T),T.prototype.exportKey="name"),D&&-1===L.indexOf(D)&&(L.push(D),D.prototype.exportKey="name")}}})),n(t,"masters/modules/export-data.src.js",[t["Core/Globals.js"],t["Extensions/ExportData/ExportData.js"]],(function(e,t){var n=e;t.compose(n.Chart)}))},e.exports?(l.default=l,e.exports=l):(o=[n(219),n(470)],void 0===(r=function(e){return l(e),l.Highcharts=e,l}.apply(t,o))||(e.exports=r))}}]);