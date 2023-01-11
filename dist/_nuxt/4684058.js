(window.webpackJsonp=window.webpackJsonp||[]).push([[120,164],{511:function(e,t,n){var o,r,a;a=function(a){function e(a,b,u,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,u),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}e(a=a?a._modules:{},"Core/Chart/ChartNavigationComposition.js",[],(function(){var a;return function(a){a.compose=function(a){return a.navigation||(a.navigation=new b(a)),a};var b=function(){function a(a){this.updates=[],this.chart=a}return a.prototype.addUpdate=function(a){this.chart.navigation.updates.push(a)},a.prototype.update=function(a,e){var b=this;this.updates.forEach((function(t){t.call(b.chart,a,e)}))},a}();a.Additions=b}(a||(a={})),a})),e(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],(function(a){return a=a.isTouchDevice,{exporting:{type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen&&this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid ".concat("#999999"),background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:a?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"}}}})),e(a,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var a;return function(a){function b(a,b,e,t){return[["M",a,b+2.5],["L",a+e,b+2.5],["M",a,b+t/2+.5],["L",a+e,b+t/2+.5],["M",a,b+t-1.5],["L",a+e,b+t-1.5]]}function e(a,b,e,t){return a=t/3-2,(t=[]).concat(this.circle(e-a,b,a,a),this.circle(e-a,b+a+4,a,a),this.circle(e-a,b+2*(a+4),a,a))}var t=[];a.compose=function(a){-1===t.indexOf(a)&&(t.push(a),(a=a.prototype.symbols).menu=b,a.menuball=e.bind(a))}}(a||(a={})),a})),e(a,"Extensions/Exporting/Fullscreen.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],(function(a,b){function e(){this.fullscreen=new r(this)}var t=b.addEvent,n=b.fireEvent,o=[],r=function(){function b(a){this.chart=a,this.isOpen=!1,a=a.renderTo,this.browserProps||("function"==typeof a.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:a.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:a.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:a.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return b.compose=function(a){-1===o.indexOf(a)&&(o.push(a),t(a,"beforeRender",e))},b.prototype.close=function(){var a=this,b=a.chart,e=b.options.chart;n(b,"fullscreenClose",null,(function(){a.isOpen&&a.browserProps&&b.container.ownerDocument instanceof Document&&b.container.ownerDocument[a.browserProps.exitFullscreen](),a.unbindFullscreenEvent&&(a.unbindFullscreenEvent=a.unbindFullscreenEvent()),b.setSize(a.origWidth,a.origHeight,!1),a.origWidth=void 0,a.origHeight=void 0,e.width=a.origWidthOption,e.height=a.origHeightOption,a.origWidthOption=void 0,a.origHeightOption=void 0,a.isOpen=!1,a.setButtonText()}))},b.prototype.open=function(){var a=this,b=a.chart,e=b.options.chart;n(b,"fullscreenOpen",null,(function(){if(e&&(a.origWidthOption=e.width,a.origHeightOption=e.height),a.origWidth=b.chartWidth,a.origHeight=b.chartHeight,a.browserProps){var n=t(b.container.ownerDocument,a.browserProps.fullscreenChange,(function(){a.isOpen?(a.isOpen=!1,a.close()):(b.setSize(null,null,!1),a.isOpen=!0,a.setButtonText())})),o=t(b,"destroy",n);a.unbindFullscreenEvent=function(){n(),o()};var r=b.renderTo[a.browserProps.requestFullscreen]();r&&r.catch((function(){alert("Full screen is not supported inside a frame.")}))}}))},b.prototype.setButtonText=function(){var b=this.chart,e=b.exportDivElements,t=b.options.exporting,n=t&&t.buttons&&t.buttons.contextButton.menuItems;b=b.options.lang,t&&t.menuItemDefinitions&&b&&b.exitFullscreen&&b.viewFullscreen&&n&&e&&(e=e[n.indexOf("viewFullscreen")])&&a.setElementHTML(e,this.isOpen?b.exitFullscreen:t.menuItemDefinitions.viewFullscreen.text||b.viewFullscreen)},b.prototype.toggle=function(){this.isOpen?this.close():this.open()},b}();return r})),e(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,b){var e=a.doc,t=b.createElement,n=b.discardElement,o=b.merge,r=b.objectEach,l={ajax:function(a){var b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},e=new XMLHttpRequest;if(!a.url)return!1;e.open((a.type||"get").toUpperCase(),a.url,!0),a.headers&&a.headers["Content-Type"]||e.setRequestHeader("Content-Type",b[a.dataType||"json"]||b.text),r(a.headers,(function(a,b){e.setRequestHeader(b,a)})),a.responseType&&(e.responseType=a.responseType),e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){if("blob"!==a.responseType){var b=e.responseText;if("json"===a.dataType)try{b=JSON.parse(b)}catch(t){if(t instanceof Error)return void(a.error&&a.error(e,t))}}return a.success&&a.success(b,e)}a.error&&a.error(e,e.responseText)}},a.data&&"string"!=typeof a.data&&(a.data=JSON.stringify(a.data)),e.send(a.data)},getJSON:function(a,b){l.ajax({url:a,success:b,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,b,l){var c=t("form",o({method:"post",action:a,enctype:"multipart/form-data"},l),{display:"none"},e.body);r(b,(function(a,b){t("input",{type:"hidden",name:b,value:a},void 0,c)})),c.submit(),n(c)}};return l})),e(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Chart/ChartNavigationComposition.js"],a["Core/DefaultOptions.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Extensions/Exporting/Fullscreen.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],(function(a,b,e,t,n,o,r,l,c,d){b=t.defaultOptions;var h,f=l.doc,m=l.SVG_NS,x=l.win,v=d.addEvent,y=d.css,u=d.createElement,w=d.discardElement,E=d.extend,C=d.find,S=d.fireEvent,O=d.isObject,p=d.merge,F=d.objectEach,q=d.pick,j=d.removeEvent,T=d.uniqueKey;return function(b){function t(a){var e=this,b=e.renderer,g=p(e.options.navigation.buttonOptions,a),t=g.onclick,n=g.menuItems,o=g.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==g.enabled&&g.theme){var r,l=g.theme;e.styledMode||(l.fill=q(l.fill,"#ffffff"),l.stroke=q(l.stroke,"none")),t?r=function(a){a&&a.stopPropagation(),t.call(e,a)}:n&&(r=function(a){a&&a.stopPropagation(),e.contextMenu(c.menuClassName,n,c.translateX,c.translateY,c.width,c.height,c),c.setState(2)}),g.text&&g.symbol?l.paddingLeft=q(l.paddingLeft,30):g.text||E(l,{width:g.width,height:g.height,padding:0}),e.styledMode||(l["stroke-linecap"]="round",l.fill=q(l.fill,"#ffffff"),l.stroke=q(l.stroke,"none"));var c=b.button(g.text,0,0,r,l).addClass(a.className).attr({title:q(e.options.lang[g._titleKey||g.titleKey],"")});if(c.menuClassName=a.menuClassName||"highcharts-menu-"+e.btnCount++,g.symbol){var d=b.symbol(g.symbol,g.symbolX-o/2,g.symbolY-o/2,o,o,{width:o,height:o}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(c);e.styledMode||d.attr({stroke:g.symbolStroke,fill:g.symbolFill,"stroke-width":g.symbolStrokeWidth||1})}c.add(e.exportingGroup).align(E(g,{width:c.width,x:q(g.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(c.width+g.buttonSpacing)*("right"===g.align?-1:1),e.exportSVGElements.push(c,d)}}function n(){if(this.printReverseInfo){var a=this.printReverseInfo,b=a.childNodes,e=a.origDisplay;a=a.resetParams,this.moveContainers(this.renderTo),[].forEach.call(b,(function(a,t){1===a.nodeType&&(a.style.display=e[t]||"")})),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,J=void 0,S(this,"afterPrint")}}function h(){var a=f.body,b=this.options.exporting.printMaxWidth,e={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),S(this,"beforePrint"),b&&this.chartWidth>b&&(e.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,void 0,!1)),[].forEach.call(e.childNodes,(function(a,t){1===a.nodeType&&(e.origDisplay[t]=a.style.display,a.style.display="none")})),this.moveContainers(a),this.printReverseInfo=e}function k(a){a.renderExporting(),v(a,"redraw",a.renderExporting),v(a,"destroy",a.destroyExport)}function G(e,b,t,g,n,o,r){var l=this,c=l.options.navigation,h=l.chartWidth,m=l.chartHeight,w="cache-"+e,C=Math.max(n,o),F=l[w];if(!F){l.exportContextMenu=l[w]=F=u("div",{className:e},{position:"absolute",zIndex:1e3,padding:C+"px",pointerEvents:"auto"},l.fixedDiv||l.container);var p=u("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},F);l.styledMode||y(p,E({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},c.menuStyle)),F.hideMenu=function(){y(F,{display:"none"}),r&&r.setState(0),l.openMenu=!1,y(l.renderTo,{overflow:"hidden"}),y(l.container,{overflow:"hidden"}),d.clearTimeout(F.hideTimer),S(l,"exportMenuHidden")},l.exportEvents.push(v(F,"mouseleave",(function(){F.hideTimer=x.setTimeout(F.hideMenu,500)})),v(F,"mouseenter",(function(){d.clearTimeout(F.hideTimer)})),v(f,"mouseup",(function(a){l.pointer.inClass(a.target,e)||F.hideMenu()})),v(F,"click",(function(){l.openMenu&&F.hideMenu()}))),b.forEach((function(e){if("string"==typeof e&&(e=l.options.exporting.menuItemDefinitions[e]),O(e,!0)){var b=void 0;e.separator?b=u("hr",void 0,void 0,p):("viewData"===e.textKey&&l.isDataTableVisible&&(e.textKey="hideData"),b=u("li",{className:"highcharts-menu-item",onclick:function(a){a&&a.stopPropagation(),F.hideMenu(),e.onclick&&e.onclick.apply(l,arguments)}},void 0,p),a.setElementHTML(b,e.text||l.options.lang[e.textKey]),l.styledMode||(b.onmouseover=function(){y(this,c.menuItemHoverStyle)},b.onmouseout=function(){y(this,c.menuItemStyle)},y(b,E({cursor:"pointer"},c.menuItemStyle||{})))),l.exportDivElements.push(b)}})),l.exportDivElements.push(p,F),l.exportMenuWidth=F.offsetWidth,l.exportMenuHeight=F.offsetHeight}b={display:"block"},t+l.exportMenuWidth>h?b.right=h-t-n-C+"px":b.left=t-C+"px",g+o+l.exportMenuHeight>m&&"top"!==r.alignOptions.verticalAlign?b.bottom=m-g-C+"px":b.top=g+o-C+"px",y(F,b),y(l.renderTo,{overflow:""}),y(l.container,{overflow:""}),l.openMenu=!0,S(l,"exportMenuShown")}function D(a){var e,t=a?a.target:this,b=t.exportSVGElements,g=t.exportDivElements;a=t.exportEvents,b&&(b.forEach((function(a,n){a&&(a.onclick=a.ontouchstart=null,e="cache-"+a.menuClassName,t[e]&&delete t[e],b[n]=a.destroy())})),b.length=0),t.exportingGroup&&(t.exportingGroup.destroy(),delete t.exportingGroup),g&&(g.forEach((function(a,e){a&&(d.clearTimeout(a.hideTimer),j(a,"mouseleave"),g[e]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,w(a))})),g.length=0),a&&(a.forEach((function(a){a()})),a.length=0)}function N(a,b){b=this.getSVGForExport(a,b),a=p(this.options.exporting,a),c.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)}function L(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function P(){var a=this.userOptions.title&&this.userOptions.title.text,b=this.options.exporting.filename;return b?b.replace(/\//g,"-"):("string"==typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!b||5>b.length)&&(b="chart"),b)}function M(a){var b,e=p(this.options,a);e.plotOptions=p(this.userOptions.plotOptions,a&&a.plotOptions),e.time=p(this.userOptions.time,a&&a.time);var g=u("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},f.body),t=this.renderTo.style.width,n=this.renderTo.style.height;t=e.exporting.sourceWidth||e.chart.width||/px$/.test(t)&&parseInt(t,10)||(e.isGantt?800:600),n=e.exporting.sourceHeight||e.chart.height||/px$/.test(n)&&parseInt(n,10)||400,E(e.chart,{animation:!1,renderTo:g,forExport:!0,renderer:"SVGRenderer",width:t,height:n}),e.exporting.enabled=!1,delete e.data,e.series=[],this.series.forEach((function(a){(b=p(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible})).isInternal||e.series.push(b)}));var o={};this.axes.forEach((function(a){a.userOptions.internalKey||(a.userOptions.internalKey=T()),a.options.isInternal||(o[a.coll]||(o[a.coll]=!0,e[a.coll]=[]),e[a.coll].push(p(a.userOptions,{visible:a.visible})))}));var r=new this.constructor(e,this.callback);return a&&["xAxis","yAxis","series"].forEach((function(b){var e={};a[b]&&(e[b]=a[b],r.update(e))})),this.axes.forEach((function(a){var b=C(r.axes,(function(b){return b.options.internalKey===a.userOptions.internalKey})),e=a.getExtremes(),t=e.userMin;e=e.userMax,b&&(void 0!==t&&t!==b.min||void 0!==e&&e!==b.max)&&b.setExtremes(t,e,!0,!1)})),n=r.getChartHTML(),S(this,"getSVG",{chartCopy:r}),n=this.sanitizeSVG(n,e),e=null,r.destroy(),w(g),n}function H(a,b){var e=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))}function R(a){return a.replace(/([A-Z])/g,(function(a,b){return"-"+b.toLowerCase()}))}function U(){var e,t=K,n=b.inlineWhitelist,g={},o=f.createElement("iframe");y(o,{width:"1px",height:"1px",visibility:"hidden"}),f.body.appendChild(o);var r=o.contentWindow&&o.contentWindow.document;r&&r.body.appendChild(r.createElementNS(m,"svg")),function a(b){var o,c,d={};if(r&&1===b.nodeType&&-1===_.indexOf(b.nodeName)){var h=x.getComputedStyle(b,null),f="svg"===b.nodeName?{}:x.getComputedStyle(b.parentNode,null);if(!g[b.nodeName]){e=r.getElementsByTagName("svg")[0];var m=r.createElementNS(b.namespaceURI,b.nodeName);e.appendChild(m),g[b.nodeName]=p(x.getComputedStyle(m,null)),"text"===b.nodeName&&delete g.text.fill,e.removeChild(m)}for(var v in h)if(l.isFirefox||l.isMS||l.isSafari||Object.hasOwnProperty.call(h,v)){var u=h[v],q=v;if(m=o=!1,n.length){for(c=n.length;c--&&!o;)o=n[c].test(q);m=!o}for("transform"===q&&"none"===u&&(m=!0),c=t.length;c--&&!m;)m=t[c].test(q)||"function"==typeof u;m||f[q]===u&&"svg"!==b.nodeName||g[b.nodeName][q]===u||($&&-1===$.indexOf(q)?"parentRule"!==q&&(d[q]=u):u&&b.setAttribute(R(q),u))}y(b,d),"svg"===b.nodeName&&b.setAttribute("stroke-width","1px"),"text"!==b.nodeName&&[].forEach.call(b.children||b.childNodes,a)}}(this.container.querySelector("svg")),e.parentNode.removeChild(e),o.parentNode.removeChild(o)}function A(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(b){a.appendChild(b)}))}function V(){var a=this;a.exporting={update:function(b,e){a.isDirtyExporting=!0,p(!0,a.options.exporting,b),q(e,!0)&&a.redraw()}},e.compose(a).navigation.addUpdate((function(b,e){a.isDirtyExporting=!0,p(!0,a.options.navigation,b),q(e,!0)&&a.redraw()}))}function B(){var a=this;a.isPrinting||(J=a,l.isSafari||a.beforePrint(),setTimeout((function(){x.focus(),x.print(),l.isSafari||setTimeout((function(){a.afterPrint()}),1e3)}),1))}function I(){var a=this,b=a.options.exporting,e=b.buttons,g=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0,a.isDirtyExporting&&a.destroyExport(),g&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),F(e,(function(b){a.addButton(b)})),a.isDirtyExporting=!1)}function W(a,b){var e=a.indexOf("</svg>")+6,t=a.substr(e);return a=a.substr(0,e),b&&b.exporting&&b.exporting.allowHTML&&t&&(t='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+t.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",t+"</svg>")),a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a)),a}var z=[],K=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],$="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");b.inlineWhitelist=[];var J,_=["clipPath","defs","desc"];b.compose=function(a,b){o.compose(b),r.compose(a),-1===z.indexOf(a)&&(z.push(a),(b=a.prototype).afterPrint=n,b.exportChart=N,b.inlineStyles=U,b.print=B,b.sanitizeSVG=W,b.getChartHTML=L,b.getSVG=M,b.getSVGForExport=H,b.getFilename=P,b.moveContainers=A,b.beforePrint=h,b.contextMenu=G,b.addButton=t,b.destroyExport=D,b.renderExporting=I,b.callbacks.push(k),v(a,"init",V),l.isSafari&&l.win.matchMedia("print").addListener((function(a){J&&(a.matches?J.beforePrint():J.afterPrint())})))}}(h||(h={})),b.exporting=p(n.exporting,b.exporting),b.lang=p(n.lang,b.lang),b.navigation=p(n.navigation,b.navigation),h})),e(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],(function(a,b,e){a.HttpUtilities=e,a.ajax=e.ajax,a.getJSON=e.getJSON,a.post=e.post,b.compose(a.Chart,a.Renderer)}))},e.exports?(a.default=a,e.exports=a):(o=[n(242)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))},589:function(e,t,n){var o,r,a;a=function(a){function e(a,e,b,t){a.hasOwnProperty(e)||(a[e]=t.apply(null,b),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}e(a=a?a._modules:{},"Extensions/DownloadURL.js",[a["Core/Globals.js"]],(function(a){var e=a.isSafari,b=a.win,t=b.document,n=b.URL||b.webkitURL||b,q=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&n.createObjectURL){var u=b.atob(a[3]),e=new b.ArrayBuffer(u.length);e=new b.Uint8Array(e);for(var t=0;t<e.length;++t)e[t]=u.charCodeAt(t);return a=new b.Blob([e],{type:a[1]}),n.createObjectURL(a)}};return a=a.downloadURL=function(a,n){var o=b.navigator,r=t.createElement("a");if("string"==typeof a||a instanceof String||!o.msSaveOrOpenBlob){if(a="".concat(a),o=/Edge\/\d+/.test(o.userAgent),(e&&"string"==typeof a&&0===a.indexOf("data:application/pdf")||o||2e6<a.length)&&!(a=q(a)||""))throw Error("Failed to convert to blob");if(void 0!==r.download)r.href=a,r.download=n,t.body.appendChild(r),r.click(),t.body.removeChild(r);else try{var l=b.open(a,"chart");if(null==l)throw Error("Failed to open window")}catch(e){b.location.href=a}}else o.msSaveOrOpenBlob(a,n)},{dataURLtoBlob:q,downloadURL:a}})),e(a,"Extensions/OfflineExporting/OfflineExportingDefaults.js",[],(function(){return{libURL:"https://code.highcharts.com/10.2.1/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}}})),e(a,"Extensions/OfflineExporting/OfflineExporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/DefaultOptions.js"],a["Extensions/DownloadURL.js"],a["Extensions/Exporting/Exporting.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Extensions/OfflineExporting/OfflineExportingDefaults.js"],a["Core/Utilities.js"]],(function(a,e,b,t,n,q,u,o,r){var l=b.defaultOptions,c=t.downloadURL,d=q.win,h=q.doc,f=u.ajax,m=r.addEvent,x=r.error,v=r.extend,y=r.fireEvent,w=r.merge;a.allowedAttributes.push("data-z-index","fill-opacity","rx","ry","stroke-dasharray","stroke-linejoin","text-anchor","transform","version","viewBox","visibility","xmlns","xmlns:xlink"),a.allowedTags.push("desc","clippath","g");var E,C=[];return function(b){function e(a,g){var e=this,t=w(e.options.exporting,a),o=function(a){!1===t.fallbackToExportServer?t.error?t.error(t,a):x(28,!0):e.exportChart(t)};a=function(){return[].some.call(e.container.getElementsByTagName("image"),(function(a){return""!==(a=a.getAttribute("href"))&&"string"==typeof a&&0!==a.indexOf("data:")}))},q.isMS&&e.styledMode&&!n.inlineWhitelist.length&&n.inlineWhitelist.push(/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/),q.isMS&&("application/pdf"===t.type||e.container.getElementsByTagName("image").length&&"image/svg+xml"!==t.type)||"application/pdf"===t.type&&a()?o(Error("Image type not supported for this chart/browser.")):e.getSVGForLocalExport(t,g||{},o,(function(a){-1<a.indexOf("<foreignObject")&&"image/svg+xml"!==t.type&&(q.isMS||"application/pdf"===t.type)?o(Error("Image type not supported for charts with embedded HTML")):b.downloadSVGLocal(a,v({filename:e.getFilename()},t),o,(function(){return y(e,"exportChartLocalSuccess")}))}))}function t(a,g){var e=h.getElementsByTagName("head")[0],t=h.createElement("script");t.type="text/javascript",t.src=a,t.onload=g,t.onerror=function(){x("Error loading script "+a)},e.appendChild(t)}function u(a,g,e,t){var n,o,p,r=this,l=function(){p&&f===h&&t(r.sanitizeSVG(n.innerHTML,o))},c=function(a,e,t){++f,t.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a),l()},d=null,h=0,f=0;r.unbindGetSVG=m(r,"getSVG",(function(a){o=a.chartCopy.options,p=(n=a.chartCopy.container.cloneNode(!0))&&n.getElementsByTagName("image")||[],h=p.length})),r.getSVGForExport(a,g);try{if(!p||!p.length)return void t(r.sanitizeSVG(n.innerHTML,o));for(g=0;g<p.length;g++){var x=p[g];(d=x.getAttributeNS("http://www.w3.org/1999/xlink","href"))?b.imageToDataUrl(d,"image/png",{imageElement:x},a.scale,c,e,e,e):(f++,x.parentNode.removeChild(x),g--,l())}}catch(t){e(t)}r.unbindGetSVG()}function r(a,g,e,t,n,o,r,l,c){var f=new d.Image,p=function(){setTimeout((function(){var b=h.createElement("canvas"),o=b.getContext&&b.getContext("2d");try{if(o){b.height=f.height*t,b.width=f.width*t,o.drawImage(f,0,0,b.width,b.height);try{var l=b.toDataURL(g);n(l,g,e,t)}catch(n){x(a,g,e,t)}}else r(a,g,e,t)}finally{c&&c(a,g,e,t)}}),b.loadEventDeferDelay)},m=function(){l(a,g,e,t),c&&c(a,g,e,t)},x=function(){f=new d.Image,x=o,f.crossOrigin="Anonymous",f.onload=p,f.onerror=m,f.src=a};f.onload=p,f.onerror=m,f.src=a}function E(a){var e=d.navigator.userAgent;e=-1<e.indexOf("WebKit")&&0>e.indexOf("Chrome");try{if(!e&&-1===a.indexOf("<foreignObject"))return b.domurl.createObjectURL(new d.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(e){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(a)}function S(a,b,e){var t=Number(a.getAttribute("width"))+2*b;b=Number(a.getAttribute("height"))+2*b;var g=new d.jspdf.jsPDF(b>t?"p":"l","pt",[t,b]);[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),(function(a){a.parentNode.removeChild(a)}));for(var n=a.querySelectorAll("linearGradient"),o=0;o<n.length;o++)for(var r=n[o].querySelectorAll("stop"),l=0;l<r.length&&"0"===r[l].getAttribute("offset")&&"0"===r[l+1].getAttribute("offset");)r[l].remove(),l++;[].forEach.call(a.querySelectorAll("tspan"),(function(a){"​"===a.textContent&&(a.textContent=" ",a.setAttribute("dx",-5))})),g.svg(a,{x:0,y:0,width:t,height:b,removeInvalid:!0}).then((function(){return e(g.output("datauristring"))}))}b.CanVGRenderer={},b.domurl=d.URL||d.webkitURL||d,b.loadEventDeferDelay=q.isMS?150:0,b.compose=function(a){if(-1===C.indexOf(a)){C.push(a);var b=a.prototype;b.getSVGForLocalExport=u,b.exportChartLocal=e,w(!0,l.exporting,o)}return a},b.downloadSVGLocal=function(e,g,n,o){var m=h.createElement("div"),q=g.type||"image/png",x=(g.filename||"chart")+"."+("image/svg+xml"===q?"svg":q.split("/")[1]),u=g.scale||1,v=g.libURL||l.exporting.libURL,y=!0,p=g.pdfFont;v="/"!==v.slice(-1)?v+"/":v;var w=function(){a.setElementHTML(m,e);var t,b=m.getElementsByTagName("text");[].forEach.call(b,(function(a){["font-family","font-size"].forEach((function(b){for(var e=a;e&&e!==m;){if(e.style[b]){a.style[b]=e.style[b];break}e=e.parentNode}})),a.style.fontFamily=p&&p.normal?"HighchartsFont":String(a.style.fontFamily&&a.style.fontFamily.split(" ").splice(-1)),t=a.getElementsByTagName("title"),[].forEach.call(t,(function(b){a.removeChild(b)}))}));var g=m.querySelector("svg");g&&function(a,b){var e=function(a,b){d.jspdf.jsPDF.API.events.push(["initialized",function(){this.addFileToVFS(a,b),this.addFont(a,"HighchartsFont",a),this.getFontList().HighchartsFont||this.setFont("HighchartsFont")}])};p&&!/[^\u0000-\u007F\u200B]+/.test(a.textContent||"")&&(p=void 0);var t,n=["normal","italic","bold","bolditalic"],o=function(){var a=n.shift();if(!a)return b();var g=p&&p[a];g?f({url:g,responseType:"blob",success:function(b,n){(b=new FileReader).onloadend=function(){if("string"==typeof this.result){var b=this.result.split(",")[1];e(a,b),"normal"===a&&(t=b)}o()},b.readAsDataURL(n.response)},error:o}):(t&&e(a,t),o())};o()}(g,(function(){S(g,0,(function(a){try{c(a,x),o&&o()}catch(e){n(e)}}))}))};if("image/svg+xml"===q)try{if(void 0!==d.navigator.msSaveOrOpenBlob){var C=new MSBlobBuilder;C.append(e);var O=C.getBlob("image/svg+xml")}else O=E(e);c(O,x),o&&o()}catch(e){n(e)}else if("application/pdf"===q)d.jspdf&&d.jspdf.jsPDF?w():(y=!0,t(v+"jspdf.js",(function(){t(v+"svg2pdf.js",w)})));else{O=E(e);var F=function(){try{b.domurl.revokeObjectURL(O)}catch(e){}};r(O,q,{},u,(function(a){try{c(a,x),o&&o()}catch(e){n(e)}}),(function(){var a=h.createElement("canvas"),b=a.getContext("2d"),g=e.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*u,p=e.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*u,r=function(){d.canvg.Canvg.fromString(b,e).start();try{c(d.navigator.msSaveOrOpenBlob?a.msToBlob():a.toDataURL(q),x),o&&o()}catch(e){n(e)}finally{F()}};a.width=g,a.height=p,d.canvg?r():(y=!0,t(v+"canvg.js",(function(){r()})))}),n,n,(function(){y&&F()}))}},b.getScript=t,b.imageToDataUrl=r,b.svgToDataUrl=E,b.svgToPdf=S}(E||(E={})),E})),e(a,"masters/modules/offline-exporting.src.js",[a["Core/Globals.js"],a["Extensions/OfflineExporting/OfflineExporting.js"]],(function(a,e){a.downloadSVGLocal=e.downloadSVGLocal,e.compose(a.Chart)}))},e.exports?(a.default=a,e.exports=a):(o=[n(242),n(511)],void 0===(r=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=r))}}]);