/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28,72],{474:function(e,t,n){var o,r,a;a=function(a){function e(a,b,u,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,u),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}e(a=a?a._modules:{},"Core/Chart/ChartNavigationComposition.js",[],(function(){var a;return function(a){a.compose=function(a){return a.navigation||(a.navigation=new b(a)),a};var b=function(){function a(a){this.updates=[],this.chart=a}return a.prototype.addUpdate=function(a){this.chart.navigation.updates.push(a)},a.prototype.update=function(a,e){var b=this;this.updates.forEach((function(t){t.call(b.chart,a,e)}))},a}();a.Additions=b}(a||(a={})),a})),e(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],(function(a){return a=a.isTouchDevice,{exporting:{type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen&&this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid ".concat("#999999"),background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:a?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"}}}})),e(a,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var a;return function(a){function b(a,b,e,t){return[["M",a,b+2.5],["L",a+e,b+2.5],["M",a,b+t/2+.5],["L",a+e,b+t/2+.5],["M",a,b+t-1.5],["L",a+e,b+t-1.5]]}function e(a,b,e,t){return a=t/3-2,(t=[]).concat(this.circle(e-a,b,a,a),this.circle(e-a,b+a+4,a,a),this.circle(e-a,b+2*(a+4),a,a))}var t=[];a.compose=function(a){-1===t.indexOf(a)&&(t.push(a),(a=a.prototype.symbols).menu=b,a.menuball=e.bind(a))}}(a||(a={})),a})),e(a,"Extensions/Exporting/Fullscreen.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],(function(a,b){function e(){this.fullscreen=new r(this)}var t=b.addEvent,n=b.fireEvent,o=[],r=function(){function b(a){this.chart=a,this.isOpen=!1,a=a.renderTo,this.browserProps||("function"==typeof a.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:a.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:a.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:a.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return b.compose=function(a){-1===o.indexOf(a)&&(o.push(a),t(a,"beforeRender",e))},b.prototype.close=function(){var a=this,b=a.chart,e=b.options.chart;n(b,"fullscreenClose",null,(function(){a.isOpen&&a.browserProps&&b.container.ownerDocument instanceof Document&&b.container.ownerDocument[a.browserProps.exitFullscreen](),a.unbindFullscreenEvent&&(a.unbindFullscreenEvent=a.unbindFullscreenEvent()),b.setSize(a.origWidth,a.origHeight,!1),a.origWidth=void 0,a.origHeight=void 0,e.width=a.origWidthOption,e.height=a.origHeightOption,a.origWidthOption=void 0,a.origHeightOption=void 0,a.isOpen=!1,a.setButtonText()}))},b.prototype.open=function(){var a=this,b=a.chart,e=b.options.chart;n(b,"fullscreenOpen",null,(function(){if(e&&(a.origWidthOption=e.width,a.origHeightOption=e.height),a.origWidth=b.chartWidth,a.origHeight=b.chartHeight,a.browserProps){var n=t(b.container.ownerDocument,a.browserProps.fullscreenChange,(function(){a.isOpen?(a.isOpen=!1,a.close()):(b.setSize(null,null,!1),a.isOpen=!0,a.setButtonText())})),o=t(b,"destroy",n);a.unbindFullscreenEvent=function(){n(),o()};var r=b.renderTo[a.browserProps.requestFullscreen]();r&&r.catch((function(){alert("Full screen is not supported inside a frame.")}))}}))},b.prototype.setButtonText=function(){var b=this.chart,e=b.exportDivElements,t=b.options.exporting,n=t&&t.buttons&&t.buttons.contextButton.menuItems;b=b.options.lang,t&&t.menuItemDefinitions&&b&&b.exitFullscreen&&b.viewFullscreen&&n&&e&&(e=e[n.indexOf("viewFullscreen")])&&a.setElementHTML(e,this.isOpen?b.exitFullscreen:t.menuItemDefinitions.viewFullscreen.text||b.viewFullscreen)},b.prototype.toggle=function(){this.isOpen?this.close():this.open()},b}();return r})),e(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,b){var e=a.doc,t=b.createElement,n=b.discardElement,o=b.merge,r=b.objectEach,l={ajax:function(a){var b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},e=new XMLHttpRequest;if(!a.url)return!1;e.open((a.type||"get").toUpperCase(),a.url,!0),a.headers&&a.headers["Content-Type"]||e.setRequestHeader("Content-Type",b[a.dataType||"json"]||b.text),r(a.headers,(function(a,b){e.setRequestHeader(b,a)})),a.responseType&&(e.responseType=a.responseType),e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){if("blob"!==a.responseType){var b=e.responseText;if("json"===a.dataType)try{b=JSON.parse(b)}catch(t){if(t instanceof Error)return void(a.error&&a.error(e,t))}}return a.success&&a.success(b,e)}a.error&&a.error(e,e.responseText)}},a.data&&"string"!=typeof a.data&&(a.data=JSON.stringify(a.data)),e.send(a.data)},getJSON:function(a,b){l.ajax({url:a,success:b,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,b,l){var c=t("form",o({method:"post",action:a,enctype:"multipart/form-data"},l),{display:"none"},e.body);r(b,(function(a,b){t("input",{type:"hidden",name:b,value:a},void 0,c)})),c.submit(),n(c)}};return l})),e(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Chart/ChartNavigationComposition.js"],a["Core/DefaultOptions.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Extensions/Exporting/Fullscreen.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],(function(a,b,e,t,n,o,r,l,c,h){b=t.defaultOptions;var d,f=l.doc,m=l.SVG_NS,x=l.win,v=h.addEvent,y=h.css,u=h.createElement,w=h.discardElement,E=h.extend,C=h.find,S=h.fireEvent,T=h.isObject,p=h.merge,D=h.objectEach,q=h.pick,O=h.removeEvent,k=h.uniqueKey;return function(b){function t(a){var e=this,b=e.renderer,g=p(e.options.navigation.buttonOptions,a),t=g.onclick,n=g.menuItems,o=g.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==g.enabled&&g.theme){var r,l=g.theme;e.styledMode||(l.fill=q(l.fill,"#ffffff"),l.stroke=q(l.stroke,"none")),t?r=function(a){a&&a.stopPropagation(),t.call(e,a)}:n&&(r=function(a){a&&a.stopPropagation(),e.contextMenu(c.menuClassName,n,c.translateX,c.translateY,c.width,c.height,c),c.setState(2)}),g.text&&g.symbol?l.paddingLeft=q(l.paddingLeft,30):g.text||E(l,{width:g.width,height:g.height,padding:0}),e.styledMode||(l["stroke-linecap"]="round",l.fill=q(l.fill,"#ffffff"),l.stroke=q(l.stroke,"none"));var c=b.button(g.text,0,0,r,l).addClass(a.className).attr({title:q(e.options.lang[g._titleKey||g.titleKey],"")});if(c.menuClassName=a.menuClassName||"highcharts-menu-"+e.btnCount++,g.symbol){var h=b.symbol(g.symbol,g.symbolX-o/2,g.symbolY-o/2,o,o,{width:o,height:o}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(c);e.styledMode||h.attr({stroke:g.symbolStroke,fill:g.symbolFill,"stroke-width":g.symbolStrokeWidth||1})}c.add(e.exportingGroup).align(E(g,{width:c.width,x:q(g.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(c.width+g.buttonSpacing)*("right"===g.align?-1:1),e.exportSVGElements.push(c,h)}}function n(){if(this.printReverseInfo){var a=this.printReverseInfo,b=a.childNodes,e=a.origDisplay;a=a.resetParams,this.moveContainers(this.renderTo),[].forEach.call(b,(function(a,t){1===a.nodeType&&(a.style.display=e[t]||"")})),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,J=void 0,S(this,"afterPrint")}}function d(){var a=f.body,b=this.options.exporting.printMaxWidth,e={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),S(this,"beforePrint"),b&&this.chartWidth>b&&(e.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,void 0,!1)),[].forEach.call(e.childNodes,(function(a,t){1===a.nodeType&&(e.origDisplay[t]=a.style.display,a.style.display="none")})),this.moveContainers(a),this.printReverseInfo=e}function N(a){a.renderExporting(),v(a,"redraw",a.renderExporting),v(a,"destroy",a.destroyExport)}function M(e,b,t,g,n,o,r){var l=this,c=l.options.navigation,d=l.chartWidth,m=l.chartHeight,w="cache-"+e,C=Math.max(n,o),D=l[w];if(!D){l.exportContextMenu=l[w]=D=u("div",{className:e},{position:"absolute",zIndex:1e3,padding:C+"px",pointerEvents:"auto"},l.fixedDiv||l.container);var p=u("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},D);l.styledMode||y(p,E({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},c.menuStyle)),D.hideMenu=function(){y(D,{display:"none"}),r&&r.setState(0),l.openMenu=!1,y(l.renderTo,{overflow:"hidden"}),y(l.container,{overflow:"hidden"}),h.clearTimeout(D.hideTimer),S(l,"exportMenuHidden")},l.exportEvents.push(v(D,"mouseleave",(function(){D.hideTimer=x.setTimeout(D.hideMenu,500)})),v(D,"mouseenter",(function(){h.clearTimeout(D.hideTimer)})),v(f,"mouseup",(function(a){l.pointer.inClass(a.target,e)||D.hideMenu()})),v(D,"click",(function(){l.openMenu&&D.hideMenu()}))),b.forEach((function(e){if("string"==typeof e&&(e=l.options.exporting.menuItemDefinitions[e]),T(e,!0)){var b=void 0;e.separator?b=u("hr",void 0,void 0,p):("viewData"===e.textKey&&l.isDataTableVisible&&(e.textKey="hideData"),b=u("li",{className:"highcharts-menu-item",onclick:function(a){a&&a.stopPropagation(),D.hideMenu(),e.onclick&&e.onclick.apply(l,arguments)}},void 0,p),a.setElementHTML(b,e.text||l.options.lang[e.textKey]),l.styledMode||(b.onmouseover=function(){y(this,c.menuItemHoverStyle)},b.onmouseout=function(){y(this,c.menuItemStyle)},y(b,E({cursor:"pointer"},c.menuItemStyle||{})))),l.exportDivElements.push(b)}})),l.exportDivElements.push(p,D),l.exportMenuWidth=D.offsetWidth,l.exportMenuHeight=D.offsetHeight}b={display:"block"},t+l.exportMenuWidth>d?b.right=d-t-n-C+"px":b.left=t-C+"px",g+o+l.exportMenuHeight>m&&"top"!==r.alignOptions.verticalAlign?b.bottom=m-g-C+"px":b.top=g+o-C+"px",y(D,b),y(l.renderTo,{overflow:""}),y(l.container,{overflow:""}),l.openMenu=!0,S(l,"exportMenuShown")}function F(a){var e,t=a?a.target:this,b=t.exportSVGElements,g=t.exportDivElements;a=t.exportEvents,b&&(b.forEach((function(a,n){a&&(a.onclick=a.ontouchstart=null,e="cache-"+a.menuClassName,t[e]&&delete t[e],b[n]=a.destroy())})),b.length=0),t.exportingGroup&&(t.exportingGroup.destroy(),delete t.exportingGroup),g&&(g.forEach((function(a,e){a&&(h.clearTimeout(a.hideTimer),O(a,"mouseleave"),g[e]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,w(a))})),g.length=0),a&&(a.forEach((function(a){a()})),a.length=0)}function j(a,b){b=this.getSVGForExport(a,b),a=p(this.options.exporting,a),c.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)}function H(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function L(){var a=this.userOptions.title&&this.userOptions.title.text,b=this.options.exporting.filename;return b?b.replace(/\//g,"-"):("string"==typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!b||5>b.length)&&(b="chart"),b)}function P(a){var b,e=p(this.options,a);e.plotOptions=p(this.userOptions.plotOptions,a&&a.plotOptions),e.time=p(this.userOptions.time,a&&a.time);var g=u("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},f.body),t=this.renderTo.style.width,n=this.renderTo.style.height;t=e.exporting.sourceWidth||e.chart.width||/px$/.test(t)&&parseInt(t,10)||(e.isGantt?800:600),n=e.exporting.sourceHeight||e.chart.height||/px$/.test(n)&&parseInt(n,10)||400,E(e.chart,{animation:!1,renderTo:g,forExport:!0,renderer:"SVGRenderer",width:t,height:n}),e.exporting.enabled=!1,delete e.data,e.series=[],this.series.forEach((function(a){(b=p(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible})).isInternal||e.series.push(b)}));var o={};this.axes.forEach((function(a){a.userOptions.internalKey||(a.userOptions.internalKey=k()),a.options.isInternal||(o[a.coll]||(o[a.coll]=!0,e[a.coll]=[]),e[a.coll].push(p(a.userOptions,{visible:a.visible})))}));var r=new this.constructor(e,this.callback);return a&&["xAxis","yAxis","series"].forEach((function(b){var e={};a[b]&&(e[b]=a[b],r.update(e))})),this.axes.forEach((function(a){var b=C(r.axes,(function(b){return b.options.internalKey===a.userOptions.internalKey})),e=a.getExtremes(),t=e.userMin;e=e.userMax,b&&(void 0!==t&&t!==b.min||void 0!==e&&e!==b.max)&&b.setExtremes(t,e,!0,!1)})),n=r.getChartHTML(),S(this,"getSVG",{chartCopy:r}),n=this.sanitizeSVG(n,e),e=null,r.destroy(),w(g),n}function A(a,b){var e=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))}function R(a){return a.replace(/([A-Z])/g,(function(a,b){return"-"+b.toLowerCase()}))}function G(){var e,t=z,n=b.inlineWhitelist,g={},o=f.createElement("iframe");y(o,{width:"1px",height:"1px",visibility:"hidden"}),f.body.appendChild(o);var r=o.contentWindow&&o.contentWindow.document;r&&r.body.appendChild(r.createElementNS(m,"svg")),function a(b){var o,c,h={};if(r&&1===b.nodeType&&-1===X.indexOf(b.nodeName)){var d=x.getComputedStyle(b,null),f="svg"===b.nodeName?{}:x.getComputedStyle(b.parentNode,null);if(!g[b.nodeName]){e=r.getElementsByTagName("svg")[0];var m=r.createElementNS(b.namespaceURI,b.nodeName);e.appendChild(m),g[b.nodeName]=p(x.getComputedStyle(m,null)),"text"===b.nodeName&&delete g.text.fill,e.removeChild(m)}for(var v in d)if(l.isFirefox||l.isMS||l.isSafari||Object.hasOwnProperty.call(d,v)){var u=d[v],q=v;if(m=o=!1,n.length){for(c=n.length;c--&&!o;)o=n[c].test(q);m=!o}for("transform"===q&&"none"===u&&(m=!0),c=t.length;c--&&!m;)m=t[c].test(q)||"function"==typeof u;m||f[q]===u&&"svg"!==b.nodeName||g[b.nodeName][q]===u||($&&-1===$.indexOf(q)?"parentRule"!==q&&(h[q]=u):u&&b.setAttribute(R(q),u))}y(b,h),"svg"===b.nodeName&&b.setAttribute("stroke-width","1px"),"text"!==b.nodeName&&[].forEach.call(b.children||b.childNodes,a)}}(this.container.querySelector("svg")),e.parentNode.removeChild(e),o.parentNode.removeChild(o)}function V(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(b){a.appendChild(b)}))}function I(){var a=this;a.exporting={update:function(b,e){a.isDirtyExporting=!0,p(!0,a.options.exporting,b),q(e,!0)&&a.redraw()}},e.compose(a).navigation.addUpdate((function(b,e){a.isDirtyExporting=!0,p(!0,a.options.navigation,b),q(e,!0)&&a.redraw()}))}function W(){var a=this;a.isPrinting||(J=a,l.isSafari||a.beforePrint(),setTimeout((function(){x.focus(),x.print(),l.isSafari||setTimeout((function(){a.afterPrint()}),1e3)}),1))}function B(){var a=this,b=a.options.exporting,e=b.buttons,g=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0,a.isDirtyExporting&&a.destroyExport(),g&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),D(e,(function(b){a.addButton(b)})),a.isDirtyExporting=!1)}function U(a,b){var e=a.indexOf("</svg>")+6,t=a.substr(e);return a=a.substr(0,e),b&&b.exporting&&b.exporting.allowHTML&&t&&(t='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+t.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",t+"</svg>")),a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a)),a}var K=[],z=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],$="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");b.inlineWhitelist=[];var J,X=["clipPath","defs","desc"];b.compose=function(a,b){o.compose(b),r.compose(a),-1===K.indexOf(a)&&(K.push(a),(b=a.prototype).afterPrint=n,b.exportChart=j,b.inlineStyles=G,b.print=W,b.sanitizeSVG=U,b.getChartHTML=H,b.getSVG=P,b.getSVGForExport=A,b.getFilename=L,b.moveContainers=V,b.beforePrint=d,b.contextMenu=M,b.addButton=t,b.destroyExport=F,b.renderExporting=B,b.callbacks.push(N),v(a,"init",I),l.isSafari&&l.win.matchMedia("print").addListener((function(a){J&&(a.matches?J.beforePrint():J.afterPrint())})))}}(d||(d={})),b.exporting=p(n.exporting,b.exporting),b.lang=p(n.lang,b.lang),b.navigation=p(n.navigation,b.navigation),d})),e(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],(function(a,b,e){a.HttpUtilities=e,a.ajax=e.ajax,a.getJSON=e.getJSON,a.post=e.post,b.compose(a.Chart,a.Renderer)}))},e.exports?(a.default=a,e.exports=a):(o=[n(222)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))},522:function(e,t,n){var o,r,l;l=function(e){"use strict";var t=e?e._modules:{};function n(e,path,t,n){e.hasOwnProperty(path)||(e[path]=n.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:e[path]}})))}n(t,"Extensions/ExportData/ExportDataDefaults.js",[],(function(){return{exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:"\n"},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},viewData:"View data table",hideData:"Hide data table"}}})),n(t,"Extensions/DownloadURL.js",[t["Core/Globals.js"]],(function(e){var t=e.isSafari,n=e.win,o=n.document,r=n.URL||n.webkitURL||n,l=e.dataURLtoBlob=function(e){var t=e.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/);if(t&&t.length>3&&n.atob&&n.ArrayBuffer&&n.Uint8Array&&n.Blob&&r.createObjectURL){for(var o=n.atob(t[3]),l=new n.ArrayBuffer(o.length),c=new n.Uint8Array(l),i=0;i<c.length;++i)c[i]=o.charCodeAt(i);var h=new n.Blob([c],{type:t[1]});return r.createObjectURL(h)}},c=e.downloadURL=function(e,r){var nav=n.navigator,a=o.createElement("a");if("string"==typeof e||e instanceof String||!nav.msSaveOrOpenBlob){e="".concat(e);var c=/Edge\/\d+/.test(nav.userAgent);if((t&&"string"==typeof e&&0===e.indexOf("data:application/pdf")||c||e.length>2e6)&&!(e=l(e)||""))throw new Error("Failed to convert to blob");if(void 0!==a.download)a.href=e,a.download=r,o.body.appendChild(a),a.click(),o.body.removeChild(a);else try{var h=n.open(e,"chart");if(null==h)throw new Error("Failed to open window")}catch(t){n.location.href=e}}else nav.msSaveOrOpenBlob(e,r)};return{dataURLtoBlob:l,downloadURL:c}})),n(t,"Extensions/ExportData/ExportData.js",[t["Core/Renderer/HTML/AST.js"],t["Extensions/ExportData/ExportDataDefaults.js"],t["Core/Globals.js"],t["Core/DefaultOptions.js"],t["Extensions/DownloadURL.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],(function(e,t,n,o,r,l,c){var h=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,i=0,r=t.length;i<r;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))},d=n.doc,f=n.win,m=o.getOptions,x=o.setOptions,v=r.downloadURL,y=l.series,w=l.seriesTypes,E=w.arearange,C=w.gantt,S=w.map,T=w.mapbubble,D=w.treemap,O=c.addEvent,k=c.defined,N=c.extend,M=c.find,F=c.fireEvent,j=c.isNumber,H=c.pick,L=[];function P(){var e=this.getCSV(!0);v(K(e,"text/csv")||"data:text/csv,\ufeff"+encodeURIComponent(e),this.getFilename()+".csv")}function A(){var s,template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+this.getTable(!0)+"</body></html>";v(K(template,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+(s=template,f.btoa(unescape(encodeURIComponent(s)))),this.getFilename()+".xls")}function R(e){var t="",n=this.getDataRows(),o=this.options.exporting.csv,r=H(o.decimalPoint,","!==o.itemDelimiter&&e?1.1.toLocaleString()[1]:"."),l=H(o.itemDelimiter,","===r?";":","),c=o.lineDelimiter;return n.forEach((function(e,i){for(var o="",h=e.length;h--;)"string"==typeof(o=e[h])&&(o='"'+o+'"'),"number"==typeof o&&"."!==r&&(o=o.toString().replace(".",r)),e[h]=o;e.length=n.length?n[0].length:0,t+=e.join(l),i<n.length-1&&(t+=c)})),t}function G(e){var t,n,o,r,l,c,h,d=this.hasParallelCoordinates,time=this.time,f=this.options.exporting&&this.options.exporting.csv||{},m=this.xAxis,x={},v=[],w=[],E=[],C=this.options.lang.exportData,S=C.categoryHeader,T=C.categoryDatetimeHeader,D=function(t,n,o){if(f.columnHeaderFormatter){var s=f.columnHeaderFormatter(t,n,o);if(!1!==s)return s}return t?t instanceof y?e?{columnTitle:o>1?n:t.name,topLevelColumnTitle:t.name}:t.name+(o>1?" ("+n+")":""):t.options.title&&t.options.title.text||(t.dateTime?T:S):S},O=function(e,t,n){var o={},r={};return t.forEach((function(t){var l=(e.keyToAxis&&e.keyToAxis[t]||t)+"Axis",c=j(n)?e.chart[l][n]:e[l];o[t]=c&&c.categories||[],r[t]=c&&c.dateTime})),{categoryMap:o,dateTimeValueAxisMap:r}},N=[],i=0;for(r in this.series.forEach((function(t){var n,r,l=t.options.keys,c=t.xAxis,h=l||function(e,t){return e.data.filter((function(e){return void 0!==e.y&&e.name})).length&&t&&!t.categories&&!e.keyToAxis?e.pointArrayMap&&e.pointArrayMap.filter((function(p){return"x"===p})).length?(e.pointArrayMap.unshift("x"),e.pointArrayMap):["x","y"]:e.pointArrayMap||["y"]}(t,c),v=h.length,y=!t.requireSorting&&{},C=m.indexOf(c),S=O(t,h);if(!1!==t.options.includeInDataExport&&!t.options.isInternal&&!1!==t.visible){for(M(N,(function(e){return e[0]===C}))||N.push([C,i]),r=0;r<v;)o=D(t,h[r],h.length),E.push(o.columnTitle||o),e&&w.push(o.topLevelColumnTitle||o),r++;n={chart:t.chart,autoIncrement:t.autoIncrement,options:t.options,pointArrayMap:t.pointArrayMap},t.options.data.forEach((function(e,o){var l,m,w,E={series:n};d&&(S=O(t,h,o)),t.pointClass.prototype.applyOptions.apply(E,[e]),l=E.x;var T=t.data[o]&&t.data[o].name;for(r=0,(!c||"name"===t.exportKey||!d&&c&&c.hasNames&&T)&&(l=T),y&&(y[l]&&(l+="|"+o),y[l]=!0),x[l]||(x[l]=[],x[l].xValues=[]),x[l].x=E.x,x[l].name=T,x[l].xValues[C]=E.x;r<v;)w=E[m=h[r]],x[l][i+r]=H(S.categoryMap[m][w],S.dateTimeValueAxisMap[m]?time.dateFormat(f.dateFormat,w):null,w),r++})),i+=r}})),x)Object.hasOwnProperty.call(x,r)&&v.push(x[r]);for(n=e?[w,E]:[E],i=N.length;i--;)c=N[i][0],h=N[i][1],t=m[c],v.sort((function(a,b){return a.xValues[c]-b.xValues[c]})),l=D(t),n[0].splice(h,0,l),e&&n[1]&&n[1].splice(h,0,l),v.forEach((function(e){var n=e.name;t&&!k(n)&&(t.dateTime?(e.x instanceof Date&&(e.x=e.x.getTime()),n=time.dateFormat(f.dateFormat,e.x)):n=t.categories?H(t.names[e.x],t.categories[e.x],e.x):e.x),e.splice(h,0,n)}));return n=n.concat(v),F(this,"exportData",{dataRows:n}),n}function V(e){var t=function(e){if(!e.tagName||"#text"===e.tagName)return e.textContent||"";var n=e.attributes,html="<".concat(e.tagName);return n&&Object.keys(n).forEach((function(e){var t=n[e];html+=" ".concat(e,'="').concat(t,'"')})),html+=">",html+=e.textContent||"",(e.children||[]).forEach((function(e){html+=t(e)})),html+="</".concat(e.tagName,">")},n=this.getTableAST(e);return t(n)}function I(e){var t=0,n=[],o=this.options,r=e?1.1.toLocaleString()[1]:".",l=H(o.exporting.useMultiLevelHeaders,!0),c=this.getDataRows(l),h=l?c.shift():null,d=c.shift(),f=function(e,t,n,o){var l=H(o,""),c="highcharts-text"+(t?" "+t:"");return"number"==typeof l?(l=l.toString(),","===r&&(l=l.replace(".",r)),c="highcharts-number"):o||(c="highcharts-empty"),{tagName:e,attributes:n=N({class:c},n),textContent:l}};!1!==o.exporting.tableCaption&&n.push({tagName:"caption",attributes:{class:"highcharts-table-caption"},textContent:H(o.exporting.tableCaption,o.title.text?o.title.text:"Chart")});for(var i=0,m=c.length;i<m;++i)c[i].length>t&&(t=c[i].length);n.push(function(e,t,n){var r,c,h=[],i=0,d=n||t&&t.length,m=0;if(l&&e&&t&&!function(e,t){var i=e.length;if(t.length!==i)return!1;for(;i--;)if(e[i]!==t[i])return!1;return!0}(e,t)){for(var x=[];i<d;++i)if((r=e[i])===e[i+1])++m;else if(m)x.push(f("th","highcharts-table-topheading",{scope:"col",colspan:m+1},r)),m=0;else{r===t[i]?o.exporting.useRowspanHeaders?(c=2,delete t[i]):(c=1,t[i]=""):c=1;var v=f("th","highcharts-table-topheading",{scope:"col"},r);c>1&&v.attributes&&(v.attributes.valign="top",v.attributes.rowspan=c),x.push(v)}h.push({tagName:"tr",children:x})}if(t){for(x=[],i=0,d=t.length;i<d;++i)void 0!==t[i]&&x.push(f("th",null,{scope:"col"},t[i]));h.push({tagName:"tr",children:x})}return{tagName:"thead",children:h}}(h,d,Math.max(t,d.length)));var x=[];c.forEach((function(e){for(var n=[],o=0;o<t;o++)n.push(f(o?"td":"th",null,o?{}:{scope:"row"},e[o]));x.push({tagName:"tr",children:n})})),n.push({tagName:"tbody",children:x});var v={tree:{tagName:"table",id:"highcharts-data-table-".concat(this.index),children:n}};return F(this,"aftergetTableAST",v),v.tree}function W(){this.toggleDataTable(!1)}function B(t){(t=H(t,!this.isDataTableVisible))&&!this.dataTableDiv&&(this.dataTableDiv=d.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling)),this.dataTableDiv&&(this.dataTableDiv.style.display=t?"block":"none",t&&(this.dataTableDiv.innerHTML=e.emptyHTML,new e([this.getTableAST()]).addToDOM(this.dataTableDiv),F(this,"afterViewData",this.dataTableDiv))),this.isDataTableVisible=t;var n=this.exportDivElements,o=this.options.exporting,r=o&&o.buttons&&o.buttons.contextButton.menuItems,l=this.options.lang;if(o&&o.menuItemDefinitions&&l&&l.viewData&&l.hideData&&r&&n){var c=n[r.indexOf("viewData")];c&&e.setElementHTML(c,this.isDataTableVisible?l.hideData:l.viewData)}}function U(){this.toggleDataTable(!0)}function K(content,e){var nav=f.navigator,t=nav.userAgent.indexOf("WebKit")>-1&&nav.userAgent.indexOf("Chrome")<0,n=f.URL||f.webkitURL||f;try{if(nav.msSaveOrOpenBlob&&f.MSBlobBuilder){var o=new f.MSBlobBuilder;return o.append(content),o.getBlob("image/svg+xml")}if(!t)return n.createObjectURL(new f.Blob(["\ufeff"+content],{type:e}))}catch(e){}}function z(){var e=this,t=e.dataTableDiv,n=document.querySelectorAll("thead")[0].querySelectorAll("tr")[0],o=function(tr,e){return tr.children[e].textContent};t&&n.childNodes.forEach((function(th){var table=th.closest("table");th.addEventListener("click",(function(){var n,r,l=h([],t.querySelectorAll("tr:not(thead tr)"),!0),c=h([],th.parentNode.children,!0);l.sort((n=c.indexOf(th),r=e.ascendingOrderInTable=!e.ascendingOrderInTable,function(a,b){var e,t;return e=o(r?a:b,n),t=o(r?b:a,n),""===e||""===t||isNaN(e)||isNaN(t)?e.toString().localeCompare(t):e-t})).forEach((function(tr){table.appendChild(tr)})),c.forEach((function(th){["highcharts-sort-ascending","highcharts-sort-descending"].forEach((function(e){th.classList.contains(e)&&th.classList.remove(e)}))})),th.classList.add(e.ascendingOrderInTable?"highcharts-sort-ascending":"highcharts-sort-descending")}))}))}function $(){this.options&&this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&this.viewData()}return{compose:function(e){if(-1===L.indexOf(e)){L.push(e),O(e,"afterViewData",z),O(e,"render",$);var n=e.prototype;n.downloadCSV=P,n.downloadXLS=A,n.getCSV=R,n.getDataRows=G,n.getTable=V,n.getTableAST=I,n.hideData=W,n.toggleDataTable=B,n.viewData=U}if(-1===L.indexOf(x)){L.push(x);var o=m().exporting;o&&(N(o.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},viewData:{textKey:"viewData",onclick:function(){this.toggleDataTable()}}}),o.buttons&&o.buttons.contextButton.menuItems&&o.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData")),x(t)}E&&-1===L.indexOf(E)&&(L.push(E),E.prototype.keyToAxis={low:"y",high:"y"}),C&&-1===L.indexOf(C)&&(L.push(C),C.prototype.keyToAxis={start:"x",end:"x"}),S&&-1===L.indexOf(S)&&(L.push(S),S.prototype.exportKey="name"),T&&-1===L.indexOf(T)&&(L.push(T),T.prototype.exportKey="name"),D&&-1===L.indexOf(D)&&(L.push(D),D.prototype.exportKey="name")}}})),n(t,"masters/modules/export-data.src.js",[t["Core/Globals.js"],t["Extensions/ExportData/ExportData.js"]],(function(e,t){var n=e;t.compose(n.Chart)}))},e.exports?(l.default=l,e.exports=l):(o=[n(222),n(474)],void 0===(r=function(e){return l(e),l.Highcharts=e,l}.apply(t,o))||(e.exports=r))}}]);