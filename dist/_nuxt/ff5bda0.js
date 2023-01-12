(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{503:function(e,t,r){var o,n,a;a=function(a){function e(a,e,t,r){a.hasOwnProperty(e)||(a[e]=r.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}e(a=a?a._modules:{},"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,e){var t=a.doc,r=e.createElement,o=e.discardElement,u=e.merge,n=e.objectEach,l={ajax:function(a){var e={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},t=new XMLHttpRequest;if(!a.url)return!1;t.open((a.type||"get").toUpperCase(),a.url,!0),a.headers&&a.headers["Content-Type"]||t.setRequestHeader("Content-Type",e[a.dataType||"json"]||e.text),n(a.headers,(function(a,e){t.setRequestHeader(e,a)})),a.responseType&&(t.responseType=a.responseType),t.onreadystatechange=function(){if(4===t.readyState){if(200===t.status){if("blob"!==a.responseType){var e=t.responseText;if("json"===a.dataType)try{e=JSON.parse(e)}catch(e){if(e instanceof Error)return void(a.error&&a.error(t,e))}}return a.success&&a.success(e,t)}a.error&&a.error(t,t.responseText)}},a.data&&"string"!=typeof a.data&&(a.data=JSON.stringify(a.data)),t.send(a.data)},getJSON:function(a,e){l.ajax({url:a,success:e,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,e,l){var d=r("form",u({method:"post",action:a,enctype:"multipart/form-data"},l),{display:"none"},t.body);n(e,(function(a,e){r("input",{type:"hidden",name:e,value:a},void 0,d)})),d.submit(),o(d)}};return l})),e(a,"Extensions/Data.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Core/DefaultOptions.js"]],(function(a,e,t,r,o,u,n){function l(a){return!(!a||!(a.rowsURL||a.csvURL||a.columnsURL))}var d=e.doc,h=t.ajax,c=o.seriesTypes,m=n.getOptions;e=u.addEvent;var f=u.defined,v=u.extend,y=u.fireEvent,C=u.isNumber,x=u.merge,T=u.objectEach,R=u.pick,N=u.splat,Y=function(){function a(b,g,e){void 0===g&&(g={}),this.rowsToColumns=a.rowsToColumns,this.dateFormats={"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(b){return b?Date.UTC(+b[1],b[2]-1,+b[3]):NaN}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(b){return b?Date.UTC(+b[3],b[2]-1,+b[1]):NaN},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(b){return b?Date.UTC(+b[3],b[1]-1,+b[2]):NaN}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(b){if(!b)return NaN;var e=+b[3];return e=e>(new Date).getFullYear()-2e3?e+1900:e+2e3,Date.UTC(e,b[2]-1,+b[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(b){return b?Date.UTC(+b[3]+2e3,b[1]-1,+b[2]):NaN}}},this.chart=e,this.chartOptions=g,this.options=b,this.rawColumns=[],this.init(b,g,e)}return a.data=function(b,g,e){return void 0===g&&(g={}),new a(b,g,e)},a.rowsToColumns=function(b){var g,e;if(b){var a=[],t=b.length;for(g=0;g<t;g++){var r=b[g].length;for(e=0;e<r;e++)a[e]||(a[e]=[]),a[e][g]=b[g][e]}}return a},a.prototype.init=function(b,g,a){var e=b.decimalPoint;if(g&&(this.chartOptions=g),a&&(this.chart=a),"."!==e&&","!==e&&(e=void 0),this.options=b,this.columns=b.columns||this.rowsToColumns(b.rows)||[],this.firstRowAsNames=R(b.firstRowAsNames,this.firstRowAsNames,!0),this.decimalRegex=e&&new RegExp("^(-?[0-9]+)"+e+"([0-9]+)$"),void 0!==this.liveDataTimeout&&clearTimeout(this.liveDataTimeout),this.rawColumns=[],this.columns.length){this.dataFound();var t=!l(b)}t||(t=this.fetchLiveData()),t||(t=!!this.parseCSV().length),t||(t=!!this.parseTable().length),t||(t=this.parseGoogleSpreadsheet()),!t&&b.afterComplete&&b.afterComplete()},a.prototype.getColumnDistribution=function(){var b=this.chartOptions,g=this.options,a=[],e=function(b){return(c[b||"line"].prototype.pointArrayMap||[0]).length},t=b&&b.chart&&b.chart.type,r=[],o=[];g=g&&g.seriesMapping||b&&b.series&&b.series.map((function(){return{x:0}}))||[];var p,n=0;(b&&b.series||[]).forEach((function(b){r.push(e(b.type||t))})),g.forEach((function(b){a.push(b.x||0)})),0===a.length&&a.push(0),g.forEach((function(g){var a=new w,l=r[n]||e(t),d=(b&&b.series||[])[n]||{},h=c[d.type||t||"line"].prototype.pointArrayMap,m=h||["y"];for((f(g.x)||d.isCartesian||!h)&&a.addColumnReader(g.x,"x"),T(g,(function(b,g){"x"!==g&&a.addColumnReader(b,g)})),p=0;p<l;p++)a.hasReader(m[p])||a.addColumnReader(void 0,m[p]);o.push(a),n++})),void 0===(g=c[t||"line"].prototype.pointArrayMap)&&(g=["y"]),this.valueCount={global:e(t),xColumns:a,individual:r,seriesBuilders:o,globalPointArrayMap:g}},a.prototype.dataFound=function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns)),this.getColumnDistribution(),this.parseTypes(),!1!==this.parsed()&&this.complete()},a.prototype.parseCSV=function(b){function g(b,g,a,e){function r(g){m=b[g],f=b[g-1],v=b[g+1]}function l(b){n.length<C+1&&n.push([b]),n[C][n[C].length-1]!==b&&n[C].push(b)}function d(){o>y||y>p?(++y,q=""):(!isNaN(parseFloat(q))&&isFinite(q)?(q=parseFloat(q),l("number")):isNaN(Date.parse(q))?l("string"):(q=q.replace(/\//g,"-"),l("date")),t.length<C+1&&t.push([]),a||(t[C][g]=q),q="",++C,++y)}var h=0,m="",f="",v="",q="",y=0,C=0;if(b.trim().length&&"#"!==b.trim()[0]){for(;h<b.length;h++)if(r(h),'"'===m)for(r(++h);h<b.length&&('"'!==m||'"'===f||'"'===v);)('"'!==m||'"'===m&&'"'!==f)&&(q+=m),r(++h);else e&&e[m]?e[m](m,q)&&d():m===c?d():q+=m;d()}}var e=this,t=this.columns=[],r=b||this.options,o=void 0!==r.startColumn&&r.startColumn?r.startColumn:0,p=r.endColumn||Number.MAX_VALUE,n=[],l={",":0,";":0,"\t":0},d=r.csv;b=void 0!==r.startRow&&r.startRow?r.startRow:0;var h=r.endRow||Number.MAX_VALUE,q=0;if(d&&r.beforeParse&&(d=r.beforeParse.call(this,d)),d){if(d=d.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(r.lineDelimiter||"\n"),(!b||0>b)&&(b=0),(!h||h>=d.length)&&(h=d.length-1),r.itemDelimiter)var c=r.itemDelimiter;else c=null,c=function(b){var t,g=0,a=0;return b.some((function(b,e){var t=!1,r="";if(13<e)return!0;for(var o=0;o<b.length;o++){e=b[o];var n=b[o+1],d=b[o-1];if("#"===e)break;if('"'===e)if(t){if('"'!==d&&'"'!==n){for(;" "===n&&o<b.length;)n=b[++o];void 0!==l[n]&&l[n]++,t=!1}}else t=!0;else void 0!==l[e]?(r=r.trim(),isNaN(Date.parse(r))&&!isNaN(r)&&isFinite(r)||l[e]++,r=""):r+=e;","===e&&a++,"."===e&&g++}})),t=l[";"]>l[","]?";":",",r.decimalPoint||(r.decimalPoint=g>a?".":",",e.decimalRegex=new RegExp("^(-?[0-9]+)"+r.decimalPoint+"([0-9]+)$")),t}(d);var m=0;for(q=b;q<=h;q++)"#"===d[q][0]?m++:g(d[q],q-b-m);r.columnTypes&&0!==r.columnTypes.length||!n.length||!n[0].length||"date"!==n[0][1]||r.dateFormat||(r.dateFormat=function(b,g){var t,a=[],o=[],n=[],l=0,d=!1;for((!g||g>b.length)&&(g=b.length);l<g;l++)if(void 0!==b[l]&&b[l]&&b[l].length){var h=b[l].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" ");for(n=["","",""],t=0;t<h.length;t++)t<n.length&&(h[t]=parseInt(h[t],10),h[t]&&(o[t]=!o[t]||o[t]<h[t]?h[t]:o[t],void 0!==a[t]?a[t]!==h[t]&&(a[t]=!1):a[t]=h[t],31<h[t]?n[t]=100>h[t]?"YY":"YYYY":12<h[t]&&31>=h[t]?(n[t]="dd",d=!0):n[t].length||(n[t]="mm")))}if(d){for(t=0;t<a.length;t++)!1!==a[t]?12<o[t]&&"YY"!==n[t]&&"YYYY"!==n[t]&&(n[t]="YY"):12<o[t]&&"mm"===n[t]&&(n[t]="dd");return 3===n.length&&"dd"===n[1]&&"dd"===n[2]&&(n[2]="YY"),b=n.join("/"),(r.dateFormats||e.dateFormats)[b]?b:(y("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}(t[0])),this.dataFound()}return t},a.prototype.parseTable=function(){var b=this.options,g=this.columns||[],a=b.startRow||0,e=b.endRow||Number.MAX_VALUE,t=b.startColumn||0,r=b.endColumn||Number.MAX_VALUE;return b.table&&("string"==typeof(b=b.table)&&(b=d.getElementById(b)),[].forEach.call(b.getElementsByTagName("tr"),(function(b,o){o>=a&&o<=e&&[].forEach.call(b.children,(function(b,e){var n=g[e-t],l=1;if(("TD"===b.tagName||"TH"===b.tagName)&&e>=t&&e<=r)for(g[e-t]||(g[e-t]=[]),g[e-t][o-a]=b.innerHTML;o-a>=l&&void 0===n[o-a-l];)n[o-a-l]=null,l++}))})),this.dataFound()),g},a.prototype.fetchLiveData=function(){var a=this,e=this.chart,t=this.options,r=t.enablePolling,o=x(t),n=0,d=1e3*(t.dataRefreshRate||2);return!!l(t)&&(1e3>d&&(d=1e3),delete t.csvURL,delete t.rowsURL,delete t.columnsURL,function b(g){function l(o,l,c){function m(){r&&e.liveDataURL===o&&(a.liveDataTimeout=setTimeout(b,d))}return o&&/^(http|\/|\.\/|\.\.\/)/.test(o)?(g&&(clearTimeout(a.liveDataTimeout),e.liveDataURL=o),h({url:o,dataType:c||"json",success:function(b){e&&e.series&&l(b),m()},error:function(b,a){return 3>++n&&m(),t.error&&t.error(a,b)}}),!0):(o&&t.error&&t.error("Invalid URL"),!1)}l(o.csvURL,(function(b){e.update({data:{csv:b}})}),"text")||l(o.rowsURL,(function(b){e.update({data:{rows:b}})}))||l(o.columnsURL,(function(b){e.update({data:{columns:b}})}))}(!0),l(t))},a.prototype.parseGoogleSpreadsheet=function(){var a=this,e=this.options,t=e.googleSpreadsheetKey,r=this.chart,o=Math.max(1e3*(e.dataRefreshRate||2),4e3),n=function(){if(e.googleSpreadsheetRange)return e.googleSpreadsheetRange;var b=("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(e.startColumn||0)||"A")+((e.startRow||0)+1),a="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(R(e.endColumn,-1))||"ZZ";return f(e.endRow)&&(a+=e.endRow+1),""+b+":".concat(a)};return t&&(delete e.googleSpreadsheetKey,function b(g){var r=["https://sheets.googleapis.com/v4/spreadsheets",t,"values",n(),"?alt=json&majorDimension=COLUMNS&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&key="+e.googleAPIKey].join("/");h({url:r,dataType:"json",success:function(t){g(t),e.enablePolling&&(a.liveDataTimeout=setTimeout((function(){b(g)}),o))},error:function(b,a){return e.error&&e.error(a,b)}})}((function(b){if(!(b=b.values)||0===b.length)return!1;var g=b.reduce((function(b,a){return Math.max(b,a.length)}),0);b.forEach((function(b){for(var a=0;a<g;a++)void 0===b[a]&&(b[a]=null)})),r&&r.series?r.update({data:{columns:b}}):(a.columns=b,a.dataFound())}))),!1},a.prototype.trim=function(b,a){return"string"==typeof b&&(b=b.replace(/^\s+|\s+$/g,""),a&&/^[0-9\s]+$/.test(b)&&(b=b.replace(/\s/g,"")),this.decimalRegex&&(b=b.replace(this.decimalRegex,"$1.$2"))),b},a.prototype.parseTypes=function(){for(var b=this.columns||[],a=b.length;a--;)this.parseColumn(b[a],a)},a.prototype.parseColumn=function(b,a){var e=this.rawColumns,t=this.columns,r=this.firstRowAsNames,g=-1!==this.valueCount.xColumns.indexOf(a),o=[],n=this.chartOptions,p=(this.options.columnTypes||[])[a];n=g&&(n&&n.xAxis&&"category"===N(n.xAxis)[0].type||"string"===p);var l,d,h=f(b.name),c=b.length;for(e[a]||(e[a]=[]);c--;){var q=o[c]||b[c],m=this.trim(q),u=this.trim(q,!0),v=parseFloat(u);void 0===e[a][c]&&(e[a][c]=m),n||0===c&&r&&!h?b[c]=""+m:+u===v?(b[c]=v,31536e6<v&&"float"!==p?b.isDatetime=!0:b.isNumeric=!0,void 0!==b[c+1]&&(d=v>b[c+1])):(m&&m.length&&(l=this.parseDate(q)),g&&C(l)&&"float"!==p?(o[c]=q,b[c]=l,b.isDatetime=!0,void 0!==b[c+1]&&((q=l>b[c+1])!==d&&void 0!==d&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,c=b.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):b.unsorted=!0),d=q)):(b[c]=""===m?null:m,0!==c&&(b.isDatetime||b.isNumeric)&&(b.mixed=!0)))}if(g&&b.mixed&&(t[a]=e[a]),g&&d&&this.options.sort)for(a=0;a<t.length;a++)t[a].reverse(),r&&t[a].unshift(t[a].pop())},a.prototype.parseDate=function(b){var e,t,a=this.options.parseDate,r=this.options.dateFormat||this.dateFormat;if(a)var o=a(b);else if("string"==typeof b){if(r)(a=this.dateFormats[r])||(a=this.dateFormats["YYYY/mm/dd"]),(t=b.match(a.regex))&&(o=a.parser(t));else for(e in this.dateFormats)if(a=this.dateFormats[e],t=b.match(a.regex)){this.dateFormat=e,this.alternativeFormat=a.alternative,o=a.parser(t);break}t||(b.match(/:.+(GMT|UTC|[Z+-])/)&&(b=b.replace(/\s*(?:GMT|UTC)?([+-])(\d\d)(\d\d)$/,"$1$2:$3").replace(/(?:\s+|GMT|UTC)([+-])/,"$1").replace(/(\d)\s*(?:GMT|UTC|Z)$/,"$1+00:00")),"object"==typeof(t=Date.parse(b))&&null!==t&&t.getTime?o=t.getTime()-6e4*t.getTimezoneOffset():C(t)&&(o=t-6e4*new Date(t).getTimezoneOffset()))}return o},a.prototype.getData=function(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)},a.prototype.parsed=function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)},a.prototype.complete=function(){var e,t,r,b=this.columns,a=this.options,o=[];if(a.complete||a.afterComplete){if(this.firstRowAsNames)for(t=0;t<b.length;t++){var n=b[t];f(n.name)||(n.name=R(n.shift(),"").toString())}n=[];var l=b.length,p=this.valueCount.seriesBuilders;t=[];var d=[];for(r=0;r<l;r+=1)t.push(!0);for(l=0;l<p.length;l+=1){var h=p[l].getReferencedColumnIndexes();for(r=0;r<h.length;r+=1)t[h[r]]=!1}for(r=0;r<t.length;r+=1)t[r]&&d.push(r);for(t=0;t<this.valueCount.seriesBuilders.length;t++)(p=this.valueCount.seriesBuilders[t]).populateColumns(d)&&o.push(p);for(;0<d.length;){for((p=new w).addColumnReader(0,"x"),-1!==(t=d.indexOf(0))&&d.splice(t,1),t=0;t<this.valueCount.global;t++)p.addColumnReader(void 0,this.valueCount.globalPointArrayMap[t]);p.populateColumns(d)&&o.push(p)}if(0<o.length&&0<o[0].readers.length&&void 0!==(d=b[o[0].readers[0].columnIndex])&&(d.isDatetime?e="datetime":d.isNumeric||(e="category")),"category"===e)for(t=0;t<o.length;t++)for(p=o[t],d=0;d<p.readers.length;d++)"x"===p.readers[d].configName&&(p.readers[d].configName="name");for(t=0;t<o.length;t++){for(p=o[t],d=[],r=0;r<b[0].length;r++)d[r]=p.read(b,r);n[t]={data:d},p.name&&(n[t].name=p.name),"category"===e&&(n[t].turboThreshold=0)}b={series:n},e&&(b.xAxis={type:e},"category"===e&&(b.xAxis.uniqueNames=!1)),a.complete&&a.complete(b),a.afterComplete&&a.afterComplete(b)}},a.prototype.update=function(b,a){var e=this.chart,t=e.options;b&&(b.afterComplete=function(b){b&&(b.xAxis&&e.xAxis[0]&&b.xAxis.type===e.xAxis[0].options.type&&delete b.xAxis,e.update(b,a,!0))},x(!0,t.data,b),t.data&&t.data.googleSpreadsheetKey&&!b.columns&&delete t.data.columns,this.init(t.data))},a}();e(a,"init",(function(a){var b=this,e=a.args[1],t=m().data,r=a.args[0]||{};(t||r&&r.data)&&!b.hasDataDef&&(b.hasDataDef=!0,t=x(t,r.data),b.data=new Y(v(t,{afterComplete:function(a){var t;if(Object.hasOwnProperty.call(r,"series"))if("object"==typeof r.series)for(t=Math.max(r.series.length,a&&a.series?a.series.length:0);t--;){var o=r.series[t]||{};r.series[t]=x(o,a&&a.series?a.series[t]:{})}else delete r.series;r=x(a,r),b.init(r,e)}}),r,b),a.preventDefault())}));var w=function(){function a(){this.readers=[],this.pointIsArray=!0}return a.prototype.populateColumns=function(b){var a=!0;return this.readers.forEach((function(a){void 0===a.columnIndex&&(a.columnIndex=b.shift())})),this.readers.forEach((function(b){void 0===b.columnIndex&&(a=!1)})),a},a.prototype.read=function(b,a){var e=this.pointIsArray,t=e?[]:{};if(this.readers.forEach((function(o){var n=b[o.columnIndex][a];e?t.push(n):0<o.configName.indexOf(".")?r.prototype.setNestedProperty(t,n,o.configName):t[o.configName]=n})),void 0===this.name&&2<=this.readers.length){var o=this.getReferencedColumnIndexes();2<=o.length&&(o.shift(),o.sort((function(b,a){return b-a})),this.name=b[o.shift()].name)}return t},a.prototype.addColumnReader=function(b,a){this.readers.push({columnIndex:b,configName:a}),"x"!==a&&"y"!==a&&void 0!==a&&(this.pointIsArray=!1)},a.prototype.getReferencedColumnIndexes=function(){var a,b=[];for(a=0;a<this.readers.length;a+=1){var e=this.readers[a];void 0!==e.columnIndex&&b.push(e.columnIndex)}return b},a.prototype.hasReader=function(b){var a;for(a=0;a<this.readers.length;a+=1)if(this.readers[a].configName===b)return!0},a}();return Y})),e(a,"masters/modules/data.src.js",[a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Extensions/Data.js"]],(function(a,e,t){a.ajax=e.ajax,a.data=t.data,a.getJSON=e.getJSON,a.post=e.post,a.Data=t,a.HttpUtilities=e}))},e.exports?(a.default=a,e.exports=a):(o=[r(222)],void 0===(n=function(e){return a(e),a.Highcharts=e,a}.apply(t,o))||(e.exports=n))}}]);