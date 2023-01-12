(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{577:function(t,e,r){var o,n,a;a=function(a){function t(a,q,t,e){a.hasOwnProperty(q)||(a[q]=e.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:q,module:a[q]}})))}t(a=a?a._modules:{},"Extensions/SeriesLabel/SeriesLabelDefaults.js",[],(function(){return{enabled:!0,connectorAllowed:!1,connectorNeighbourDistance:24,format:void 0,formatter:void 0,minFontSize:null,maxFontSize:null,onArea:null,style:{fontWeight:"bold"},useHTML:!1,boxesToAvoid:[]}})),t(a,"Extensions/SeriesLabel/SeriesLabelUtilities.js",[],(function(){function a(a,t,q,e,r,u){return 0<(a=(u-t)*(q-a)-(e-t)*(r-a))||!(0>a)}function q(t,e,q,r,o,u,n,h){return a(t,e,o,u,n,h)!==a(q,r,o,u,n,h)&&a(t,e,q,r,o,u)!==a(t,e,q,r,n,h)}return{boxIntersectLine:function(a,t,e,r,o,u,n,h){return q(a,t,a+e,t,o,u,n,h)||q(a+e,t,a+e,t+r,o,u,n,h)||q(a,t+r,a+e,t+r,o,u,n,h)||q(a,t,a,t+r,o,u,n,h)},intersectRect:function(a,t){return!(t.left>a.right||t.right<a.left||t.top>a.bottom||t.bottom<a.top)}}})),t(a,"Extensions/SeriesLabel/SeriesLabel.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Chart/Chart.js"],a["Core/FormatUtilities.js"],a["Core/Defaults.js"],a["Extensions/SeriesLabel/SeriesLabelDefaults.js"],a["Extensions/SeriesLabel/SeriesLabelUtilities.js"],a["Core/Utilities.js"]],(function(a,q,t,e,r,o,n){function u(t,a,b,e,r){var o,n,h,l=t.chart,c=t.options.label||{},f=S(c.onArea,!!t.area),x=f||c.connectorAllowed,g=l.boxesToAvoid,m=Number.MAX_VALUE,q=Number.MAX_VALUE;for(h=0;g&&h<g.length;h+=1)if(v(g[h],{left:a,right:a+e.width,top:b,bottom:b+e.height}))return!1;for(h=0;h<l.series.length;h+=1){var w=l.series[h];if(g=w.interpolatedPoints&&d([],w.interpolatedPoints,!0),w.visible&&g){var X=l.plotHeight/10;for(n=l.plotTop;n<=l.plotTop+l.plotHeight;n+=X)g.unshift({chartX:l.plotLeft,chartY:n}),g.push({chartX:l.plotLeft+l.plotWidth,chartY:n});for(X=1;X<g.length;X+=1){if(g[X].chartX>=a-16&&g[X-1].chartX<=a+e.width+16){if(y(a,b,e.width,e.height,g[X-1].chartX,g[X-1].chartY,g[X].chartX,g[X].chartY))return!1;t===w&&!o&&r&&(o=y(a-16,b-16,e.width+32,e.height+32,g[X-1].chartX,g[X-1].chartY,g[X].chartX,g[X].chartY))}if((x||o)&&(t!==w||f)){n=a+e.width/2-g[X].chartX;var u=b+e.height/2-g[X].chartY;m=Math.min(m,n*n+u*u)}}if(!f&&x&&t===w&&(r&&!o||m<Math.pow(c.connectorNeighbourDistance||1,2))){for(X=1;X<g.length;X+=1)if((o=Math.min(Math.pow(a+e.width/2-g[X].chartX,2)+Math.pow(b+e.height/2-g[X].chartY,2),Math.pow(a-g[X].chartX,2)+Math.pow(b-g[X].chartY,2),Math.pow(a+e.width-g[X].chartX,2)+Math.pow(b-g[X].chartY,2),Math.pow(a+e.width-g[X].chartX,2)+Math.pow(b+e.height-g[X].chartY,2),Math.pow(a-g[X].chartX,2)+Math.pow(b+e.height-g[X].chartY,2)))<q){q=o;var p=g[X]}o=!0}}}return!(r&&!o)&&{x:a,y:b,weight:m-(p?q:0),connectorPoint:p}}function h(a){var t=a.labelSeries||[];a.boxesToAvoid=[],t.forEach((function(b){var t=b.options.label||{},e=a.boxesToAvoid;b.interpolatedPoints=function(a){function t(a){var b=Math.round((a.plotX||0)/8)+","+Math.round((a.plotY||0)/8);u[b]||(u[b]=1,e.push(a))}if(a.xAxis||a.yAxis){var b=a.points,e=[],r=a.graph||a.area,o=r&&r.element,n=a.chart.inverted,h=a.xAxis,l=a.yAxis,g=n?l.pos:h.pos;n=n?h.pos:l.pos,h=S((a.options.label||{}).onArea,!!a.area);var q=l.getThreshold(a.options.threshold),u={};if(a.getPointSpline&&o&&o.getPointAtLength&&!h&&b.length<(a.chart.plotSizeX||0)/16){for(h=r.toD&&r.attr("d"),r.toD&&r.attr({d:r.toD}),l=o.getTotalLength(),a=0;a<l;a+=16)t({chartX:g+(q=o.getPointAtLength(a)).x,chartY:n+q.y,plotX:q.x,plotY:q.y});h&&r.attr({d:h});var c=b[b.length-1];t({chartX:g+(c.plotX||0),chartY:n+(c.plotY||0)})}else for(l=b.length,r=void 0,a=0;a<l;a+=1){o=(c=b[a]).plotX;var d=c.plotY;if(M(o)&&M(d)){var f={plotX:o,plotY:d,chartX:g+o,chartY:n+d};if(h&&(f.chartCenterY=n+(d+S(c.yBottom,q))/2),r){c=Math.abs(f.chartX-r.chartX);var x=Math.abs(f.chartY-r.chartY);if(16<(c=Math.max(c,x)))for(c=Math.ceil(c/16),x=1;x<c;x+=1)t({chartX:r.chartX+x/c*(f.chartX-r.chartX),chartY:r.chartY+x/c*(f.chartY-r.chartY),chartCenterY:(r.chartCenterY||0)+x/c*((f.chartCenterY||0)-(r.chartCenterY||0)),plotX:(r.plotX||0)+x/c*(o-(r.plotX||0)),plotY:(r.plotY||0)+x/c*(d-(r.plotY||0))})}t(f),r=f}}return e}}(b),e&&e.push.apply(e,t.boxesToAvoid||[])})),a.series.forEach((function(b){function t(b,a,t){var e=Math.max(l,S(M,-1/0)),r=Math.min(l+d,S(A,1/0));return b>e&&b<=r-t.width&&a>=c&&a<=c+q-t.height}var e=b.options.label;if(e&&(b.xAxis||b.yAxis)){var p,r="highcharts-color-"+S(b.colorIndex,"none"),o=!b.labelBySeries,n=e.minFontSize,h=e.maxFontSize,g=a.inverted,l=g?b.yAxis.pos:b.xAxis.pos,c=g?b.xAxis.pos:b.yAxis.pos,d=a.inverted?b.yAxis.len:b.xAxis.len,q=a.inverted?b.xAxis.len:b.yAxis.len,m=b.interpolatedPoints,y=S(e.onArea,!!b.area),v=[],w=b.xData||[],Y=b.labelBySeries;if(y&&!g){g=[b.xAxis.toPixels(w[0]),b.xAxis.toPixels(w[w.length-1])];var M=Math.min.apply(Math,g),A=Math.max.apply(Math,g)}if(b.visible&&!b.boosted&&m){for(Y||(Y=b.name,"string"==typeof e.format?Y=x(e.format,b,a):e.formatter&&(Y=e.formatter.call(b)),b.labelBySeries=Y=a.renderer.label(Y,0,0,"connector",0,0,e.useHTML).addClass("highcharts-series-label highcharts-series-label-"+b.index+" "+(b.options.className||"")+" "+r),a.renderer.styledMode||(r="string"==typeof b.color?b.color:"#666666",Y.css(X({color:y?a.renderer.getContrast(r):r},e.style||{})),Y.attr({opacity:a.renderer.forExport?1:0,stroke:b.color,"stroke-width":1})),n&&h&&Y.css({fontSize:n+(b.sum||0)/(b.chart.labelSeriesMaxSum||0)*(h-n)+"px"}),Y.attr({padding:0,zIndex:3}).add()),(n=Y.getBBox()).width=Math.round(n.width),g=m.length-1;0<g;--g)y?t(h=m[g].chartX-n.width/2,r=(m[g].chartCenterY||0)-n.height/2,n)&&(p=u(b,h,r,n)):(t(h=m[g].chartX+3,r=m[g].chartY-n.height-3,n)&&(p=u(b,h,r,n,!0)),p&&v.push(p),t(h=m[g].chartX+3,r=m[g].chartY+3,n)&&(p=u(b,h,r,n,!0)),p&&v.push(p),t(h=m[g].chartX-n.width-3,r=m[g].chartY+3,n)&&(p=u(b,h,r,n,!0)),p&&v.push(p),t(h=m[g].chartX-n.width-3,r=m[g].chartY-n.height-3,n)&&(p=u(b,h,r,n,!0))),p&&v.push(p);if(e.connectorAllowed&&!v.length&&!y)for(h=l+d-n.width;h>=l;h-=16)for(r=c;r<c+q-n.height;r+=16)(p=u(b,h,r,n,!0))&&v.push(p);v.length?(v.sort((function(b,a){return a.weight-b.weight})),p=v[0],(a.boxesToAvoid||[]).push({left:p.x,right:p.x+n.width,top:p.y,bottom:p.y+n.height}),(m=Math.sqrt(Math.pow(Math.abs(p.x-(Y.x||0)),2)+Math.pow(Math.abs(p.y-(Y.y||0)),2)))&&b.labelBySeries&&(v={opacity:a.renderer.forExport?1:0,x:p.x,y:p.y},e={opacity:1},10>=m&&(e={x:v.x,y:v.y},v={}),m=void 0,o&&((m=f(b.options.animation)).duration*=.2),b.labelBySeries.attr(X(v,{anchorX:p.connectorPoint&&(p.connectorPoint.plotX||0)+l,anchorY:p.connectorPoint&&(p.connectorPoint.plotY||0)+c})).animate(e,m),b.options.kdNow=!0,b.buildKDTree(),b=b.searchPoint({chartX:p.x,chartY:p.y},!0))&&(Y.closest=[b,p.x-(b.plotX||0),p.y-(b.plotY||0)])):Y&&(b.labelBySeries=Y.destroy())}else Y&&(b.labelBySeries=Y.destroy())}})),Y(a,"afterDrawSeriesLabels")}function l(a){if(this.renderer){var t=this,b=f(t.renderer.globalAnimation).duration;t.labelSeries=[],t.labelSeriesMaxSum=0,t.seriesLabelTimer&&n.clearTimeout(t.seriesLabelTimer),t.series.forEach((function(e){var r=e.options.label||{},o=e.labelBySeries,n=o&&o.closest;r.enabled&&e.visible&&(e.graph||e.area)&&!e.boosted&&t.labelSeries&&(t.labelSeries.push(e),r.minFontSize&&r.maxFontSize&&e.yData&&(e.sum=e.yData.reduce((function(a,b){return(a||0)+(b||0)}),0),t.labelSeriesMaxSum=Math.max(t.labelSeriesMaxSum||0,e.sum||0)),"load"===a.type&&(b=Math.max(b,f(e.options.animation).duration)),n&&(void 0!==n[0].plotX?o.animate({x:n[0].plotX+n[1],y:n[0].plotY+n[2]}):o.attr({opacity:0})))})),t.seriesLabelTimer=A((function(){t.series&&t.labelSeries&&h(t)}),t.renderer.forExport||!b?0:b)}}function c(a,t,b,e,r){var o=r&&r.anchorX;r=r&&r.anchorY;var n=b/2;if(M(o)&&M(r)){var h=[["M",o,r]],l=t-r;0>l&&(l=-e-l),l<b&&(n=o<a+b/2?l:b-l),r>t+e?h.push(["L",a+n,t+e]):r<t?h.push(["L",a+n,t]):o<a?h.push(["L",a,t+e/2]):o>a+b&&h.push(["L",a+b,t+e/2])}return h||[]}var d=this&&this.__spreadArray||function(a,t,b){if(b||2===arguments.length)for(var e,r=0,o=t.length;r<o;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return a.concat(e||Array.prototype.slice.call(t))},f=a.animObject,x=t.format,m=e.setOptions,y=o.boxIntersectLine,v=o.intersectRect,w=n.addEvent,X=n.extend,Y=n.fireEvent,M=n.isNumber,S=n.pick,A=n.syncTimeout,L=[];return{compose:function(a,t){-1===L.indexOf(a)&&(L.push(a),w(q,"load",l),w(q,"redraw",l)),-1===L.indexOf(t)&&(L.push(t),t.prototype.symbols.connector=c),-1===L.indexOf(m)&&(L.push(m),m({plotOptions:{series:{label:r}}}))}}})),t(a,"masters/modules/series-label.src.js",[a["Core/Globals.js"],a["Extensions/SeriesLabel/SeriesLabel.js"]],(function(a,q){q.compose(a.Chart,a.SVGRenderer)}))},t.exports?(a.default=a,t.exports=a):(o=[r(224)],void 0===(n=function(t){return a(t),a.Highcharts=t,a}.apply(e,o))||(t.exports=n))}}]);