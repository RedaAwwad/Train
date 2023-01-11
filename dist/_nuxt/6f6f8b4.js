(window.webpackJsonp=window.webpackJsonp||[]).push([[118,164],{511:function(e,t,n){var o,r,a;a=function(a){function e(a,b,u,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,u),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}e(a=a?a._modules:{},"Core/Chart/ChartNavigationComposition.js",[],(function(){var a;return function(a){a.compose=function(a){return a.navigation||(a.navigation=new b(a)),a};var b=function(){function a(a){this.updates=[],this.chart=a}return a.prototype.addUpdate=function(a){this.chart.navigation.updates.push(a)},a.prototype.update=function(a,e){var b=this;this.updates.forEach((function(t){t.call(b.chart,a,e)}))},a}();a.Additions=b}(a||(a={})),a})),e(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],(function(a){return a=a.isTouchDevice,{exporting:{type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen&&this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid ".concat("#999999"),background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:a?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"}}}})),e(a,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var a;return function(a){function b(a,b,e,t){return[["M",a,b+2.5],["L",a+e,b+2.5],["M",a,b+t/2+.5],["L",a+e,b+t/2+.5],["M",a,b+t-1.5],["L",a+e,b+t-1.5]]}function e(a,b,e,t){return a=t/3-2,(t=[]).concat(this.circle(e-a,b,a,a),this.circle(e-a,b+a+4,a,a),this.circle(e-a,b+2*(a+4),a,a))}var t=[];a.compose=function(a){-1===t.indexOf(a)&&(t.push(a),(a=a.prototype.symbols).menu=b,a.menuball=e.bind(a))}}(a||(a={})),a})),e(a,"Extensions/Exporting/Fullscreen.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],(function(a,b){function e(){this.fullscreen=new r(this)}var t=b.addEvent,n=b.fireEvent,o=[],r=function(){function b(a){this.chart=a,this.isOpen=!1,a=a.renderTo,this.browserProps||("function"==typeof a.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:a.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:a.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:a.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return b.compose=function(a){-1===o.indexOf(a)&&(o.push(a),t(a,"beforeRender",e))},b.prototype.close=function(){var a=this,b=a.chart,e=b.options.chart;n(b,"fullscreenClose",null,(function(){a.isOpen&&a.browserProps&&b.container.ownerDocument instanceof Document&&b.container.ownerDocument[a.browserProps.exitFullscreen](),a.unbindFullscreenEvent&&(a.unbindFullscreenEvent=a.unbindFullscreenEvent()),b.setSize(a.origWidth,a.origHeight,!1),a.origWidth=void 0,a.origHeight=void 0,e.width=a.origWidthOption,e.height=a.origHeightOption,a.origWidthOption=void 0,a.origHeightOption=void 0,a.isOpen=!1,a.setButtonText()}))},b.prototype.open=function(){var a=this,b=a.chart,e=b.options.chart;n(b,"fullscreenOpen",null,(function(){if(e&&(a.origWidthOption=e.width,a.origHeightOption=e.height),a.origWidth=b.chartWidth,a.origHeight=b.chartHeight,a.browserProps){var n=t(b.container.ownerDocument,a.browserProps.fullscreenChange,(function(){a.isOpen?(a.isOpen=!1,a.close()):(b.setSize(null,null,!1),a.isOpen=!0,a.setButtonText())})),o=t(b,"destroy",n);a.unbindFullscreenEvent=function(){n(),o()};var r=b.renderTo[a.browserProps.requestFullscreen]();r&&r.catch((function(){alert("Full screen is not supported inside a frame.")}))}}))},b.prototype.setButtonText=function(){var b=this.chart,e=b.exportDivElements,t=b.options.exporting,n=t&&t.buttons&&t.buttons.contextButton.menuItems;b=b.options.lang,t&&t.menuItemDefinitions&&b&&b.exitFullscreen&&b.viewFullscreen&&n&&e&&(e=e[n.indexOf("viewFullscreen")])&&a.setElementHTML(e,this.isOpen?b.exitFullscreen:t.menuItemDefinitions.viewFullscreen.text||b.viewFullscreen)},b.prototype.toggle=function(){this.isOpen?this.close():this.open()},b}();return r})),e(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,b){var e=a.doc,t=b.createElement,n=b.discardElement,o=b.merge,r=b.objectEach,l={ajax:function(a){var b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},e=new XMLHttpRequest;if(!a.url)return!1;e.open((a.type||"get").toUpperCase(),a.url,!0),a.headers&&a.headers["Content-Type"]||e.setRequestHeader("Content-Type",b[a.dataType||"json"]||b.text),r(a.headers,(function(a,b){e.setRequestHeader(b,a)})),a.responseType&&(e.responseType=a.responseType),e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){if("blob"!==a.responseType){var b=e.responseText;if("json"===a.dataType)try{b=JSON.parse(b)}catch(t){if(t instanceof Error)return void(a.error&&a.error(e,t))}}return a.success&&a.success(b,e)}a.error&&a.error(e,e.responseText)}},a.data&&"string"!=typeof a.data&&(a.data=JSON.stringify(a.data)),e.send(a.data)},getJSON:function(a,b){l.ajax({url:a,success:b,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,b,l){var c=t("form",o({method:"post",action:a,enctype:"multipart/form-data"},l),{display:"none"},e.body);r(b,(function(a,b){t("input",{type:"hidden",name:b,value:a},void 0,c)})),c.submit(),n(c)}};return l})),e(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Chart/ChartNavigationComposition.js"],a["Core/DefaultOptions.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Extensions/Exporting/Fullscreen.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],(function(a,b,e,t,n,o,r,l,c,h){b=t.defaultOptions;var d,f=l.doc,m=l.SVG_NS,x=l.win,v=h.addEvent,y=h.css,u=h.createElement,w=h.discardElement,E=h.extend,C=h.find,S=h.fireEvent,T=h.isObject,p=h.merge,D=h.objectEach,q=h.pick,O=h.removeEvent,k=h.uniqueKey;return function(b){function t(a){var e=this,b=e.renderer,g=p(e.options.navigation.buttonOptions,a),t=g.onclick,n=g.menuItems,o=g.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==g.enabled&&g.theme){var r,l=g.theme;e.styledMode||(l.fill=q(l.fill,"#ffffff"),l.stroke=q(l.stroke,"none")),t?r=function(a){a&&a.stopPropagation(),t.call(e,a)}:n&&(r=function(a){a&&a.stopPropagation(),e.contextMenu(c.menuClassName,n,c.translateX,c.translateY,c.width,c.height,c),c.setState(2)}),g.text&&g.symbol?l.paddingLeft=q(l.paddingLeft,30):g.text||E(l,{width:g.width,height:g.height,padding:0}),e.styledMode||(l["stroke-linecap"]="round",l.fill=q(l.fill,"#ffffff"),l.stroke=q(l.stroke,"none"));var c=b.button(g.text,0,0,r,l).addClass(a.className).attr({title:q(e.options.lang[g._titleKey||g.titleKey],"")});if(c.menuClassName=a.menuClassName||"highcharts-menu-"+e.btnCount++,g.symbol){var h=b.symbol(g.symbol,g.symbolX-o/2,g.symbolY-o/2,o,o,{width:o,height:o}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(c);e.styledMode||h.attr({stroke:g.symbolStroke,fill:g.symbolFill,"stroke-width":g.symbolStrokeWidth||1})}c.add(e.exportingGroup).align(E(g,{width:c.width,x:q(g.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(c.width+g.buttonSpacing)*("right"===g.align?-1:1),e.exportSVGElements.push(c,h)}}function n(){if(this.printReverseInfo){var a=this.printReverseInfo,b=a.childNodes,e=a.origDisplay;a=a.resetParams,this.moveContainers(this.renderTo),[].forEach.call(b,(function(a,t){1===a.nodeType&&(a.style.display=e[t]||"")})),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,J=void 0,S(this,"afterPrint")}}function d(){var a=f.body,b=this.options.exporting.printMaxWidth,e={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),S(this,"beforePrint"),b&&this.chartWidth>b&&(e.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,void 0,!1)),[].forEach.call(e.childNodes,(function(a,t){1===a.nodeType&&(e.origDisplay[t]=a.style.display,a.style.display="none")})),this.moveContainers(a),this.printReverseInfo=e}function N(a){a.renderExporting(),v(a,"redraw",a.renderExporting),v(a,"destroy",a.destroyExport)}function M(e,b,t,g,n,o,r){var l=this,c=l.options.navigation,d=l.chartWidth,m=l.chartHeight,w="cache-"+e,C=Math.max(n,o),D=l[w];if(!D){l.exportContextMenu=l[w]=D=u("div",{className:e},{position:"absolute",zIndex:1e3,padding:C+"px",pointerEvents:"auto"},l.fixedDiv||l.container);var p=u("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},D);l.styledMode||y(p,E({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},c.menuStyle)),D.hideMenu=function(){y(D,{display:"none"}),r&&r.setState(0),l.openMenu=!1,y(l.renderTo,{overflow:"hidden"}),y(l.container,{overflow:"hidden"}),h.clearTimeout(D.hideTimer),S(l,"exportMenuHidden")},l.exportEvents.push(v(D,"mouseleave",(function(){D.hideTimer=x.setTimeout(D.hideMenu,500)})),v(D,"mouseenter",(function(){h.clearTimeout(D.hideTimer)})),v(f,"mouseup",(function(a){l.pointer.inClass(a.target,e)||D.hideMenu()})),v(D,"click",(function(){l.openMenu&&D.hideMenu()}))),b.forEach((function(e){if("string"==typeof e&&(e=l.options.exporting.menuItemDefinitions[e]),T(e,!0)){var b=void 0;e.separator?b=u("hr",void 0,void 0,p):("viewData"===e.textKey&&l.isDataTableVisible&&(e.textKey="hideData"),b=u("li",{className:"highcharts-menu-item",onclick:function(a){a&&a.stopPropagation(),D.hideMenu(),e.onclick&&e.onclick.apply(l,arguments)}},void 0,p),a.setElementHTML(b,e.text||l.options.lang[e.textKey]),l.styledMode||(b.onmouseover=function(){y(this,c.menuItemHoverStyle)},b.onmouseout=function(){y(this,c.menuItemStyle)},y(b,E({cursor:"pointer"},c.menuItemStyle||{})))),l.exportDivElements.push(b)}})),l.exportDivElements.push(p,D),l.exportMenuWidth=D.offsetWidth,l.exportMenuHeight=D.offsetHeight}b={display:"block"},t+l.exportMenuWidth>d?b.right=d-t-n-C+"px":b.left=t-C+"px",g+o+l.exportMenuHeight>m&&"top"!==r.alignOptions.verticalAlign?b.bottom=m-g-C+"px":b.top=g+o-C+"px",y(D,b),y(l.renderTo,{overflow:""}),y(l.container,{overflow:""}),l.openMenu=!0,S(l,"exportMenuShown")}function F(a){var e,t=a?a.target:this,b=t.exportSVGElements,g=t.exportDivElements;a=t.exportEvents,b&&(b.forEach((function(a,n){a&&(a.onclick=a.ontouchstart=null,e="cache-"+a.menuClassName,t[e]&&delete t[e],b[n]=a.destroy())})),b.length=0),t.exportingGroup&&(t.exportingGroup.destroy(),delete t.exportingGroup),g&&(g.forEach((function(a,e){a&&(h.clearTimeout(a.hideTimer),O(a,"mouseleave"),g[e]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,w(a))})),g.length=0),a&&(a.forEach((function(a){a()})),a.length=0)}function j(a,b){b=this.getSVGForExport(a,b),a=p(this.options.exporting,a),c.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)}function H(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function L(){var a=this.userOptions.title&&this.userOptions.title.text,b=this.options.exporting.filename;return b?b.replace(/\//g,"-"):("string"==typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!b||5>b.length)&&(b="chart"),b)}function P(a){var b,e=p(this.options,a);e.plotOptions=p(this.userOptions.plotOptions,a&&a.plotOptions),e.time=p(this.userOptions.time,a&&a.time);var g=u("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},f.body),t=this.renderTo.style.width,n=this.renderTo.style.height;t=e.exporting.sourceWidth||e.chart.width||/px$/.test(t)&&parseInt(t,10)||(e.isGantt?800:600),n=e.exporting.sourceHeight||e.chart.height||/px$/.test(n)&&parseInt(n,10)||400,E(e.chart,{animation:!1,renderTo:g,forExport:!0,renderer:"SVGRenderer",width:t,height:n}),e.exporting.enabled=!1,delete e.data,e.series=[],this.series.forEach((function(a){(b=p(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible})).isInternal||e.series.push(b)}));var o={};this.axes.forEach((function(a){a.userOptions.internalKey||(a.userOptions.internalKey=k()),a.options.isInternal||(o[a.coll]||(o[a.coll]=!0,e[a.coll]=[]),e[a.coll].push(p(a.userOptions,{visible:a.visible})))}));var r=new this.constructor(e,this.callback);return a&&["xAxis","yAxis","series"].forEach((function(b){var e={};a[b]&&(e[b]=a[b],r.update(e))})),this.axes.forEach((function(a){var b=C(r.axes,(function(b){return b.options.internalKey===a.userOptions.internalKey})),e=a.getExtremes(),t=e.userMin;e=e.userMax,b&&(void 0!==t&&t!==b.min||void 0!==e&&e!==b.max)&&b.setExtremes(t,e,!0,!1)})),n=r.getChartHTML(),S(this,"getSVG",{chartCopy:r}),n=this.sanitizeSVG(n,e),e=null,r.destroy(),w(g),n}function A(a,b){var e=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))}function R(a){return a.replace(/([A-Z])/g,(function(a,b){return"-"+b.toLowerCase()}))}function G(){var e,t=z,n=b.inlineWhitelist,g={},o=f.createElement("iframe");y(o,{width:"1px",height:"1px",visibility:"hidden"}),f.body.appendChild(o);var r=o.contentWindow&&o.contentWindow.document;r&&r.body.appendChild(r.createElementNS(m,"svg")),function a(b){var o,c,h={};if(r&&1===b.nodeType&&-1===X.indexOf(b.nodeName)){var d=x.getComputedStyle(b,null),f="svg"===b.nodeName?{}:x.getComputedStyle(b.parentNode,null);if(!g[b.nodeName]){e=r.getElementsByTagName("svg")[0];var m=r.createElementNS(b.namespaceURI,b.nodeName);e.appendChild(m),g[b.nodeName]=p(x.getComputedStyle(m,null)),"text"===b.nodeName&&delete g.text.fill,e.removeChild(m)}for(var v in d)if(l.isFirefox||l.isMS||l.isSafari||Object.hasOwnProperty.call(d,v)){var u=d[v],q=v;if(m=o=!1,n.length){for(c=n.length;c--&&!o;)o=n[c].test(q);m=!o}for("transform"===q&&"none"===u&&(m=!0),c=t.length;c--&&!m;)m=t[c].test(q)||"function"==typeof u;m||f[q]===u&&"svg"!==b.nodeName||g[b.nodeName][q]===u||($&&-1===$.indexOf(q)?"parentRule"!==q&&(h[q]=u):u&&b.setAttribute(R(q),u))}y(b,h),"svg"===b.nodeName&&b.setAttribute("stroke-width","1px"),"text"!==b.nodeName&&[].forEach.call(b.children||b.childNodes,a)}}(this.container.querySelector("svg")),e.parentNode.removeChild(e),o.parentNode.removeChild(o)}function V(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(b){a.appendChild(b)}))}function I(){var a=this;a.exporting={update:function(b,e){a.isDirtyExporting=!0,p(!0,a.options.exporting,b),q(e,!0)&&a.redraw()}},e.compose(a).navigation.addUpdate((function(b,e){a.isDirtyExporting=!0,p(!0,a.options.navigation,b),q(e,!0)&&a.redraw()}))}function W(){var a=this;a.isPrinting||(J=a,l.isSafari||a.beforePrint(),setTimeout((function(){x.focus(),x.print(),l.isSafari||setTimeout((function(){a.afterPrint()}),1e3)}),1))}function B(){var a=this,b=a.options.exporting,e=b.buttons,g=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0,a.isDirtyExporting&&a.destroyExport(),g&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),D(e,(function(b){a.addButton(b)})),a.isDirtyExporting=!1)}function U(a,b){var e=a.indexOf("</svg>")+6,t=a.substr(e);return a=a.substr(0,e),b&&b.exporting&&b.exporting.allowHTML&&t&&(t='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+t.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",t+"</svg>")),a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a)),a}var K=[],z=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],$="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");b.inlineWhitelist=[];var J,X=["clipPath","defs","desc"];b.compose=function(a,b){o.compose(b),r.compose(a),-1===K.indexOf(a)&&(K.push(a),(b=a.prototype).afterPrint=n,b.exportChart=j,b.inlineStyles=G,b.print=W,b.sanitizeSVG=U,b.getChartHTML=H,b.getSVG=P,b.getSVGForExport=A,b.getFilename=L,b.moveContainers=V,b.beforePrint=d,b.contextMenu=M,b.addButton=t,b.destroyExport=F,b.renderExporting=B,b.callbacks.push(N),v(a,"init",I),l.isSafari&&l.win.matchMedia("print").addListener((function(a){J&&(a.matches?J.beforePrint():J.afterPrint())})))}}(d||(d={})),b.exporting=p(n.exporting,b.exporting),b.lang=p(n.lang,b.lang),b.navigation=p(n.navigation,b.navigation),d})),e(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],(function(a,b,e){a.HttpUtilities=e,a.ajax=e.ajax,a.getJSON=e.getJSON,a.post=e.post,b.compose(a.Chart,a.Renderer)}))},e.exports?(a.default=a,e.exports=a):(o=[n(242)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))},558:function(e,t,n){var o,r,a;a=function(a){function e(a,e,t,n){a.hasOwnProperty(e)||(a[e]=n.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}e(a=a?a._modules:{},"Extensions/ExportData/ExportDataDefaults.js",[],(function(){return{exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:"\n"},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},viewData:"View data table",hideData:"Hide data table"}}})),e(a,"Extensions/DownloadURL.js",[a["Core/Globals.js"]],(function(a){var e=a.isSafari,t=a.win,n=t.document,o=t.URL||t.webkitURL||t,r=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&t.Blob&&o.createObjectURL){var p=t.atob(a[3]),q=new t.ArrayBuffer(p.length);q=new t.Uint8Array(q);for(var e=0;e<q.length;++e)q[e]=p.charCodeAt(e);return a=new t.Blob([q],{type:a[1]}),o.createObjectURL(a)}};return a=a.downloadURL=function(a,o){var q=t.navigator,l=n.createElement("a");if("string"==typeof a||a instanceof String||!q.msSaveOrOpenBlob){if(a="".concat(a),q=/Edge\/\d+/.test(q.userAgent),(e&&"string"==typeof a&&0===a.indexOf("data:application/pdf")||q||2e6<a.length)&&!(a=r(a)||""))throw Error("Failed to convert to blob");if(void 0!==l.download)l.href=a,l.download=o,n.body.appendChild(l),l.click(),n.body.removeChild(l);else try{var p=t.open(a,"chart");if(null==p)throw Error("Failed to open window")}catch(e){t.location.href=a}}else q.msSaveOrOpenBlob(a,o)},{dataURLtoBlob:r,downloadURL:a}})),e(a,"Extensions/ExportData/ExportData.js",[a["Core/Renderer/HTML/AST.js"],a["Extensions/ExportData/ExportDataDefaults.js"],a["Core/Globals.js"],a["Core/DefaultOptions.js"],a["Extensions/DownloadURL.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,e,t,n,o,r,p){function l(){var b=this.getCSV(!0);k(y(b,"text/csv")||"data:text/csv,\ufeff"+encodeURIComponent(b),this.getFilename()+".csv")}function q(){var b='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+this.getTable(!0)+"</body></html>";k(y(b,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+T.btoa(unescape(encodeURIComponent(b))),this.getFilename()+".xls")}function c(b){var a="",e=this.getDataRows(),t=this.options.exporting.csv,n=W(t.decimalPoint,","!==t.itemDelimiter&&b?1.1.toLocaleString()[1]:"."),g=W(t.itemDelimiter,","===n?";":","),o=t.lineDelimiter;return e.forEach((function(b,t){for(var r,l=b.length;l--;)"string"==typeof(r=b[l])&&(r='"'+r+'"'),"number"==typeof r&&"."!==n&&(r=r.toString().replace(".",n)),b[l]=r;b.length=e.length?e[0].length:0,a+=b.join(g),t<e.length-1&&(a+=o)})),a}function h(b){var e,a=this.hasParallelCoordinates,t=this.time,n=this.options.exporting&&this.options.exporting.csv||{},o=this.xAxis,g={},u=[],r=[],l=[],c=this.options.lang.exportData,h=c.categoryHeader,p=c.categoryDatetimeHeader,q=function(a,e,g){if(n.columnHeaderFormatter){var t=n.columnHeaderFormatter(a,e,g);if(!1!==t)return t}return a?a instanceof N?b?{columnTitle:1<g?e:a.name,topLevelColumnTitle:a.name}:a.name+(1<g?" ("+e+")":""):a.options.title&&a.options.title.text||(a.dateTime?p:h):h},d=function(a,b,e){var t={},g={};return b.forEach((function(b){var n=(a.keyToAxis&&a.keyToAxis[b]||b)+"Axis";n=I(e)?a.chart[n][e]:a[n],t[b]=n&&n.categories||[],g[b]=n&&n.dateTime})),{categoryMap:t,dateTimeValueAxisMap:g}},f=[],m=0;for(w in this.series.forEach((function(c){var h,x=c.xAxis,v=c.options.keys||function(a,b){return a.data.filter((function(a){return void 0!==a.y&&a.name})).length&&b&&!b.categories&&!a.keyToAxis?a.pointArrayMap&&a.pointArrayMap.filter((function(a){return"x"===a})).length?(a.pointArrayMap.unshift("x"),a.pointArrayMap):["x","y"]:a.pointArrayMap||["y"]}(c,x),y=v.length,w=!c.requireSorting&&{},u=o.indexOf(x),E=d(c,v);if(!1!==c.options.includeInDataExport&&!c.options.isInternal&&!1!==c.visible){for(G(f,(function(a){return a[0]===u}))||f.push([u,m]),h=0;h<y;)e=q(c,v[h],v.length),l.push(e.columnTitle||e),b&&r.push(e.topLevelColumnTitle||e),h++;var p={chart:c.chart,autoIncrement:c.autoIncrement,options:c.options,pointArrayMap:c.pointArrayMap};c.options.data.forEach((function(b,e){var o={series:p};a&&(E=d(c,v,e)),c.pointClass.prototype.applyOptions.apply(o,[b]),b=o.x;var r=c.data[e]&&c.data[e].name;for(h=0,(!x||"name"===c.exportKey||!a&&x&&x.hasNames&&r)&&(b=r),w&&(w[b]&&(b+="|"+e),w[b]=!0),g[b]||(g[b]=[],g[b].xValues=[]),g[b].x=o.x,g[b].name=r,g[b].xValues[u]=o.x;h<y;)r=o[e=v[h]],g[b][m+h]=W(E.categoryMap[e][r],E.dateTimeValueAxisMap[e]?t.dateFormat(n.dateFormat,r):null,r),h++})),m+=h}})),g)Object.hasOwnProperty.call(g,w)&&u.push(g[w]);for(c=b?[r,l]:[l],m=f.length;m--;){var x=f[m][0],v=f[m][1],y=o[x];u.sort((function(a,b){return a.xValues[x]-b.xValues[x]}));var w=q(y);c[0].splice(v,0,w),b&&c[1]&&c[1].splice(v,0,w),u.forEach((function(a){var b=a.name;y&&!A(b)&&(y.dateTime?(a.x instanceof Date&&(a.x=a.x.getTime()),b=t.dateFormat(n.dateFormat,a.x)):b=y.categories?W(y.names[a.x],y.categories[a.x],a.x):a.x),a.splice(v,0,b)}))}return c=c.concat(u),V(this,"exportData",{dataRows:c}),c}function d(a){var b=function(a){if(!a.tagName||"#text"===a.tagName)return a.textContent||"";var e=a.attributes,t="<".concat(a.tagName);return e&&Object.keys(e).forEach((function(a){var b=e[a];t+=" ".concat(a,'="').concat(b,'"')})),t+=">",t+=a.textContent||"",(a.children||[]).forEach((function(a){t+=b(a)})),t+="</".concat(a.tagName,">")};return a=this.getTableAST(a),b(a)}function f(a){var b=0,e=[],t=this.options,n=a?1.1.toLocaleString()[1]:".",g=W(t.exporting.useMultiLevelHeaders,!0);a=this.getDataRows(g);var o=g?a.shift():null,r=a.shift(),l=function(a,b,e,t){var g=W(t,"");return b="highcharts-text"+(b?" "+b:""),"number"==typeof g?(g=g.toString(),","===n&&(g=g.replace(".",n)),b="highcharts-number"):t||(b="highcharts-empty"),{tagName:a,attributes:e=R({class:b},e),textContent:g}};!1!==t.exporting.tableCaption&&e.push({tagName:"caption",attributes:{class:"highcharts-table-caption"},textContent:W(t.exporting.tableCaption,t.title.text?t.title.text:"Chart")});for(var c=0,p=a.length;c<p;++c)a[c].length>b&&(b=a[c].length);e.push(function(a,b,e){var n=[],o=0;e=e||b&&b.length;var r,c=0;if(r=g&&a&&b){e:if(r=a.length,b.length===r){for(;r--;)if(a[r]!==b[r]){r=!1;break e}r=!0}else r=!1;r=!r}if(r){for(r=[];o<e;++o){var h=a[o],d=a[o+1];h===d?++c:c?(r.push(l("th","highcharts-table-topheading",{scope:"col",colspan:c+1},h)),c=0):(h===b[o]?t.exporting.useRowspanHeaders?(d=2,delete b[o]):(d=1,b[o]=""):d=1,h=l("th","highcharts-table-topheading",{scope:"col"},h),1<d&&h.attributes&&(h.attributes.valign="top",h.attributes.rowspan=d),r.push(h))}n.push({tagName:"tr",children:r})}if(b){for(r=[],o=0,e=b.length;o<e;++o)void 0!==b[o]&&r.push(l("th",null,{scope:"col"},b[o]));n.push({tagName:"tr",children:r})}return{tagName:"thead",children:n}}(o,r,Math.max(b,r.length)));var q=[];return a.forEach((function(a){for(var e=[],t=0;t<b;t++)e.push(l(t?"td":"th",null,t?{}:{scope:"row"},a[t]));q.push({tagName:"tr",children:e})})),e.push({tagName:"tbody",children:q}),e={tree:{tagName:"table",id:"highcharts-data-table-".concat(this.index),children:e}},V(this,"aftergetTableAST",e),e.tree}function m(){this.toggleDataTable(!1)}function x(b){(b=W(b,!this.isDataTableVisible))&&!this.dataTableDiv&&(this.dataTableDiv=S.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling)),this.dataTableDiv&&(this.dataTableDiv.style.display=b?"block":"none",b&&(this.dataTableDiv.innerHTML=a.emptyHTML,new a([this.getTableAST()]).addToDOM(this.dataTableDiv),V(this,"afterViewData",this.dataTableDiv))),this.isDataTableVisible=b;var e=this.exportDivElements,t=this.options.exporting,n=t&&t.buttons&&t.buttons.contextButton.menuItems;b=this.options.lang,t&&t.menuItemDefinitions&&b&&b.viewData&&b.hideData&&n&&e&&(e=e[n.indexOf("viewData")])&&a.setElementHTML(e,this.isDataTableVisible?b.hideData:b.viewData)}function v(){this.toggleDataTable(!0)}function y(a,e){var b=T.navigator,t=-1<b.userAgent.indexOf("WebKit")&&0>b.userAgent.indexOf("Chrome"),n=T.URL||T.webkitURL||T;try{if(b.msSaveOrOpenBlob&&T.MSBlobBuilder){var g=new T.MSBlobBuilder;return g.append(a),g.getBlob("image/svg+xml")}if(!t)return n.createObjectURL(new T.Blob(["\ufeff"+a],{type:e}))}catch(e){}}function w(){var a=this,e=a.dataTableDiv,t=document.querySelectorAll("thead")[0].querySelectorAll("tr")[0];e&&t.childNodes.forEach((function(b){var t=b.closest("table");b.addEventListener("click",(function(){var n=C([],e.querySelectorAll("tr:not(thead tr)"),!0),g=C([],b.parentNode.children,!0);n.sort(function(a,b){return function(e,t){var n=(b?e:t).children[a].textContent;return e=(b?t:e).children[a].textContent,""===n||""===e||isNaN(n)||isNaN(e)?n.toString().localeCompare(e):n-e}}(g.indexOf(b),a.ascendingOrderInTable=!a.ascendingOrderInTable)).forEach((function(a){t.appendChild(a)})),g.forEach((function(a){["highcharts-sort-ascending","highcharts-sort-descending"].forEach((function(b){a.classList.contains(b)&&a.classList.remove(b)}))})),b.classList.add(a.ascendingOrderInTable?"highcharts-sort-ascending":"highcharts-sort-descending")}))}))}function E(){this.options&&this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&this.viewData()}var C=this&&this.__spreadArray||function(a,e,t){if(t||2===arguments.length)for(var g,b=0,n=e.length;b<n;b++)!g&&b in e||(g||(g=Array.prototype.slice.call(e,0,b)),g[b]=e[b]);return a.concat(g||Array.prototype.slice.call(e))},S=t.doc,T=t.win,D=n.getOptions,O=n.setOptions,k=o.downloadURL,N=r.series,M=(t=r.seriesTypes).arearange,F=t.gantt,j=t.map,H=t.mapbubble,L=t.treemap,P=p.addEvent,A=p.defined,R=p.extend,G=p.find,V=p.fireEvent,I=p.isNumber,W=p.pick,B=[];return{compose:function(a){-1===B.indexOf(a)&&(B.push(a),P(a,"afterViewData",w),P(a,"render",E),(a=a.prototype).downloadCSV=l,a.downloadXLS=q,a.getCSV=c,a.getDataRows=h,a.getTable=d,a.getTableAST=f,a.hideData=m,a.toggleDataTable=x,a.viewData=v),-1===B.indexOf(O)&&(B.push(O),(a=D().exporting)&&(R(a.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},viewData:{textKey:"viewData",onclick:function(){this.toggleDataTable()}}}),a.buttons&&a.buttons.contextButton.menuItems&&a.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData")),O(e)),M&&-1===B.indexOf(M)&&(B.push(M),M.prototype.keyToAxis={low:"y",high:"y"}),F&&-1===B.indexOf(F)&&(B.push(F),F.prototype.keyToAxis={start:"x",end:"x"}),j&&-1===B.indexOf(j)&&(B.push(j),j.prototype.exportKey="name"),H&&-1===B.indexOf(H)&&(B.push(H),H.prototype.exportKey="name"),L&&-1===B.indexOf(L)&&(B.push(L),L.prototype.exportKey="name")}}})),e(a,"masters/modules/export-data.src.js",[a["Core/Globals.js"],a["Extensions/ExportData/ExportData.js"]],(function(a,e){e.compose(a.Chart)}))},e.exports?(a.default=a,e.exports=a):(o=[n(242),n(511)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))}}]);