/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{549:function(t,e,o){var r,n,h;h=function(t){"use strict";var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}o(e,"Series/DragNodesComposition.js",[e["Core/Utilities.js"]],(function(t){var e=t.addEvent,o=[];function r(){var t,o,r,n=this;n.container&&(t=e(n.container,"mousedown",(function(t){var h=n.hoverPoint;h&&h.series&&h.series.hasDraggableNodes&&h.series.options.draggable&&(h.series.onMouseDown(h,t),o=e(n.container,"mousemove",(function(t){return h&&h.series&&h.series.onMouseMove(h,t)})),r=e(n.container.ownerDocument,"mouseup",(function(t){return o(),r(),h&&h.series&&h.series.onMouseUp(h,t)})))}))),e(n,"destroy",(function(){t()}))}return{compose:function(t){-1===o.indexOf(t)&&(o.push(t),e(t,"load",r))},onMouseDown:function(t,e){var o=this.chart.pointer.normalize(e);t.fixedPosition={chartX:o.chartX,chartY:o.chartY,plotX:t.plotX,plotY:t.plotY},t.inDragMode=!0},onMouseMove:function(t,e){if(t.fixedPosition&&t.inDragMode){var o=this.chart,r=o.pointer.normalize(e),n=t.fixedPosition.chartX-r.chartX,h=t.fixedPosition.chartY-r.chartY,d=o.graphLayoutsLookup,l=void 0,c=void 0;(Math.abs(n)>5||Math.abs(h)>5)&&(l=t.fixedPosition.plotX-n,c=t.fixedPosition.plotY-h,o.isInsidePlot(l,c)&&(t.plotX=l,t.plotY=c,t.hasDragged=!0,this.redrawHalo(t),d.forEach((function(t){t.restartSimulation()}))))}},onMouseUp:function(t,e){t.fixedPosition&&(t.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),t.inDragMode=t.hasDragged=!1,this.options.fixedDraggable||delete t.fixedPosition)},redrawHalo:function(t){t&&this.halo&&this.halo.attr({d:t.haloPath(this.options.states.hover.halo.size)})}}})),o(e,"Series/GraphLayoutComposition.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Utilities.js"]],(function(t,e){var o=t.setAnimation,r=e.addEvent,n=[];function h(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach((function(t){t.updateSimulation()})),this.redraw())}function d(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach((function(t){t.updateSimulation(!1)})),this.redraw())}function l(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach((function(t){t.stop()}))}function c(){var t,e=!1,r=function(o){o.maxIterations--&&isFinite(o.temperature)&&!o.isStable()&&!o.enableSimulation&&(o.beforeStep&&o.beforeStep(),o.step(),t=!1,e=!0)};if(this.graphLayoutsLookup){for(o(!1,this),this.graphLayoutsLookup.forEach((function(t){return t.start()}));!t;)t=!0,this.graphLayoutsLookup.forEach(r);e&&this.series.forEach((function(t){t&&t.layout&&t.render()}))}}return{compose:function(t){n.indexOf(t)&&(n.push(t),r(t,"afterPrint",h),r(t,"beforePrint",d),r(t,"predraw",l),r(t,"render",c))},integrations:{},layouts:{}}})),o(e,"Series/NodesComposition.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e){var o,r=t.series,n=r.prototype,h=r.prototype.pointClass.prototype,d=e.defined,l=e.extend,c=e.find,f=e.merge,m=e.pick;return function(t){var e=[];function o(){return this.data=[].concat(this.points||[],this.nodes),n.destroy.apply(this,arguments)}function r(){this.nodes&&(this.nodes.forEach((function(t){t.destroy()})),this.nodes.length=0),n.setData.apply(this,arguments)}function y(t){var e=arguments,o=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==t&&o.forEach((function(t){t&&t.series&&(h.setState.apply(t,e),t.isNode||(t.fromNode.graphic&&h.setState.apply(t.fromNode,e),t.toNode&&t.toNode.graphic&&h.setState.apply(t.toNode,e)))})),h.setState.apply(this,e)}function v(t,e,o,r){var n=this,d=this.series.options.nodes,data=this.series.options.data,l=data&&data.length||0,c=data&&data[this.index];if(h.update.call(this,t,!this.isNode&&e,o,r),this.isNode){var y=(d||[]).reduce((function(t,e,o){return n.id===e.id?o:t}),-1),v=f(d&&d[y]||{},data&&data[this.index]||{});data&&(c?data[this.index]=c:data.length=l),d?y>=0?d[y]=v:d.push(v):this.series.options.nodes=[v],m(e,!0)&&this.series.chart.redraw(o)}}t.compose=function(t,n){if(-1===e.indexOf(t)){e.push(t);var h=t.prototype;h.setNodeState=y,h.setState=y,h.update=v}if(-1===e.indexOf(n)){e.push(n);var d=n.prototype;d.destroy=o,d.setData=r}return n},t.createNode=function(t){var e,o=this.pointClass,r=function(t,e){return c(t,(function(t){return t.id===e}))},n=r(this.nodes,t);if(!n){e=this.options.nodes&&r(this.options.nodes,t);var h=(new o).init(this,l({className:"highcharts-node",isNode:!0,id:t,y:1},e));h.linksTo=[],h.linksFrom=[],h.getSum=function(){var t=0,e=0;return h.linksTo.forEach((function(link){t+=link.weight||0})),h.linksFrom.forEach((function(link){e+=link.weight||0})),Math.max(t,e)},h.offset=function(t,e){for(var o=0,i=0;i<h[e].length;i++){if(h[e][i]===t)return o;o+=h[e][i].weight}},h.hasShape=function(){var t=0;return h.linksTo.forEach((function(link){link.outgoing&&t++})),!h.linksTo.length||t!==h.linksTo.length},h.index=this.nodes.push(h)-1,n=h}return n.formatPrefix="node",n.name=n.name||n.options.id||"",n.mass=m(n.options.mass,n.options.marker&&n.options.marker.radius,this.options.marker&&this.options.marker.radius,4),n},t.destroy=o,t.generatePoints=function(){var t=this,e=this.chart,o={};n.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(t){t.linksFrom.length=0,t.linksTo.length=0,t.level=t.options.level})),this.points.forEach((function(r){d(r.from)&&(o[r.from]||(o[r.from]=t.createNode(r.from)),o[r.from].linksFrom.push(r),r.fromNode=o[r.from],e.styledMode?r.colorIndex=m(r.options.colorIndex,o[r.from].colorIndex):r.color=r.options.color||o[r.from].color),d(r.to)&&(o[r.to]||(o[r.to]=t.createNode(r.to)),o[r.to].linksTo.push(r),r.toNode=o[r.to]),r.name=r.name||r.id}),this),this.nodeLookup=o},t.setNodeState=y,t.updateNode=v}(o||(o={})),o})),o(e,"Series/Networkgraph/NetworkgraphPoint.js",[e["Series/NodesComposition.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,o){var r,n=this&&this.__extends||(r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),h=e.series,d=h.prototype,l=h.prototype.pointClass,c=o.addEvent,f=o.css,m=o.defined,y=o.extend,v=o.pick,x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.destroy=function(){return this.isNode&&this.linksFrom.concat(this.linksTo).forEach((function(link){link.destroyElements&&link.destroyElements()})),this.series.layout.removeElementFromCollection(this,this.series.layout[this.isNode?"nodes":"links"]),l.prototype.destroy.apply(this,arguments)},e.prototype.getDegree=function(){var t=this.isNode?this.linksFrom.length+this.linksTo.length:0;return 0===t?1:t},e.prototype.getLinkAttributes=function(){var t=this.series.options.link,e=this.options;return{"stroke-width":v(e.width,t.width),stroke:e.color||t.color,dashstyle:e.dashStyle||t.dashStyle,opacity:v(e.opacity,t.opacity,1)}},e.prototype.getLinkPath=function(){var t=this.fromNode,e=this.toNode;return t.plotX>e.plotX&&(t=this.toNode,e=this.fromNode),[["M",t.plotX||0,t.plotY||0],["L",e.plotX||0,e.plotY||0]]},e.prototype.getMass=function(){var t=this.fromNode.mass,e=this.toNode.mass,o=t+e;return{fromNode:1-t/o,toNode:1-e/o}},e.prototype.init=function(e,o,r){return t.prototype.init.call(this,e,o,r),this.series.options.draggable&&!this.series.chart.styledMode&&(c(this,"mouseOver",(function(){f(this.series.chart.container,{cursor:"move"})})),c(this,"mouseOut",(function(){f(this.series.chart.container,{cursor:"default"})}))),this},e.prototype.isValid=function(){return!this.isNode||m(this.id)},e.prototype.redrawLink=function(){var t,path=this.getLinkPath();if(this.graphic){this.shapeArgs={d:path},this.series.chart.styledMode||(t=this.series.pointAttribs(this),this.graphic.attr(t),(this.dataLabels||[]).forEach((function(label){label&&label.attr({opacity:t.opacity})}))),this.graphic.animate(this.shapeArgs);var e=path[0],o=path[1];"M"===e[0]&&"L"===o[0]&&(this.plotX=(e[1]+o[1])/2,this.plotY=(e[2]+o[2])/2)}},e.prototype.remove=function(t,e){var o,r=this,n=r.series,h=n.options.nodes||[],i=h.length;if(r.isNode){for(n.points=[],[].concat(r.linksFrom).concat(r.linksTo).forEach((function(t){(o=t.fromNode.linksFrom.indexOf(t))>-1&&t.fromNode.linksFrom.splice(o,1),(o=t.toNode.linksTo.indexOf(t))>-1&&t.toNode.linksTo.splice(o,1),d.removePoint.call(n,n.data.indexOf(t),!1,!1)})),n.points=n.data.slice(),n.nodes.splice(n.nodes.indexOf(r),1);i--;)if(h[i].id===r.options.id){n.options.nodes.splice(i,1);break}r&&r.destroy(),n.isDirty=!0,n.isDirtyData=!0,t&&n.chart.redraw(t)}else n.removePoint(n.data.indexOf(r),t,e)},e.prototype.renderLink=function(){var t;this.graphic||(this.graphic=this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(),!0).add(this.series.group),this.series.chart.styledMode||(t=this.series.pointAttribs(this),this.graphic.attr(t),(this.dataLabels||[]).forEach((function(label){label&&label.attr({opacity:t.opacity})}))))},e}(l);return y(x.prototype,{setState:t.setNodeState}),x})),o(e,"Series/Networkgraph/NetworkgraphSeriesDefaults.js",[],(function(){return{stickyTracking:!1,inactiveOtherPoints:!0,marker:{enabled:!0,states:{inactive:{opacity:.3,animation:{duration:50}}}},states:{inactive:{linkOpacity:.3,animation:{duration:50}}},dataLabels:{formatter:function(){return this.key},linkFormatter:function(){return this.point.fromNode.name+"<br>"+this.point.toNode.name},linkTextPath:{enabled:!0},textPath:{enabled:!1},style:{transition:"opacity 2000ms"}},link:{color:"rgba(100, 100, 100, 0.5)",width:1},draggable:!0,layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:1,enableSimulation:!1,theta:.5,maxSpeed:10,approximation:"none",type:"reingold-fruchterman",integration:"euler",maxIterations:1e3,gravitationalConstant:.0625,friction:-.981},showInLegend:!1}})),o(e,"Series/Networkgraph/EulerIntegration.js",[],(function(){return{attractive:function(link,t,e,o){var r=link.getMass(),n=e.x/o*t,h=e.y/o*t;link.fromNode.fixedPosition||(link.fromNode.dispX-=n*r.fromNode/link.fromNode.degree,link.fromNode.dispY-=h*r.fromNode/link.fromNode.degree),link.toNode.fixedPosition||(link.toNode.dispX+=n*r.toNode/link.toNode.degree,link.toNode.dispY+=h*r.toNode/link.toNode.degree)},attractiveForceFunction:function(t,e){return t*t/e},barycenter:function(){var t=this.options.gravitationalConstant,e=this.barycenter.xFactor,o=this.barycenter.yFactor;this.nodes.forEach((function(r){if(!r.fixedPosition){var n=r.getDegree(),h=n*(1+n/2);r.dispX+=(e-r.plotX)*t*h/r.degree,r.dispY+=(o-r.plotY)*t*h/r.degree}}))},getK:function(t){return Math.pow(t.box.width*t.box.height/t.nodes.length,.3)},integrate:function(t,e){var o;e.dispX+=e.dispX*t.options.friction,e.dispY+=e.dispY*t.options.friction,0!==(o=e.temperature=t.vectorLength({x:e.dispX,y:e.dispY}))&&(e.plotX+=e.dispX/o*Math.min(Math.abs(e.dispX),t.temperature),e.plotY+=e.dispY/o*Math.min(Math.abs(e.dispY),t.temperature))},repulsive:function(t,e,o,r){t.dispX+=o.x/r*e/t.degree,t.dispY+=o.y/r*e/t.degree},repulsiveForceFunction:function(t,e){return e*e/t}}})),o(e,"Series/Networkgraph/QuadTreeNode.js",[],(function(){return function(){function t(t){this.body=!1,this.isEmpty=!1,this.isInternal=!1,this.nodes=[],this.box=t,this.boxSize=Math.min(t.width,t.height)}return t.prototype.divideBox=function(){var e=this.box.width/2,o=this.box.height/2;this.nodes[0]=new t({left:this.box.left,top:this.box.top,width:e,height:o}),this.nodes[1]=new t({left:this.box.left+e,top:this.box.top,width:e,height:o}),this.nodes[2]=new t({left:this.box.left+e,top:this.box.top+o,width:e,height:o}),this.nodes[3]=new t({left:this.box.left,top:this.box.top+o,width:e,height:o})},t.prototype.getBoxPosition=function(t){var e=t.plotX<this.box.left+this.box.width/2,o=t.plotY<this.box.top+this.box.height/2;return e?o?0:3:o?1:2},t.prototype.insert=function(e,o){var r;this.isInternal?this.nodes[this.getBoxPosition(e)].insert(e,o-1):(this.isEmpty=!1,this.body?o?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,o-1),this.body=!0),this.nodes[this.getBoxPosition(e)].insert(e,o-1)):((r=new t({top:e.plotX||NaN,left:e.plotY||NaN,width:.1,height:.1})).body=e,r.isInternal=!1,this.nodes.push(r)):(this.isInternal=!1,this.body=e))},t.prototype.updateMassAndCenter=function(){var t=0,e=0,o=0;if(this.isInternal){for(var r=0,n=this.nodes;r<n.length;r++){var h=n[r];h.isEmpty||(t+=h.mass,e+=h.plotX*h.mass,o+=h.plotY*h.mass)}e/=t,o/=t}else this.body&&(t=this.body.mass,e=this.body.plotX,o=this.body.plotY);this.mass=t,this.plotX=e,this.plotY=o},t}()})),o(e,"Series/Networkgraph/QuadTree.js",[e["Series/Networkgraph/QuadTreeNode.js"]],(function(t){return function(){function e(e,o,r,n){this.box={left:e,top:o,width:r,height:n},this.maxDepth=25,this.root=new t(this.box),this.root.isInternal=!0,this.root.isRoot=!0,this.root.divideBox()}return e.prototype.calculateMassAndCenter=function(){this.visitNodeRecursive(null,null,(function(t){t.updateMassAndCenter()}))},e.prototype.insertNodes=function(t){for(var e=0,o=t;e<o.length;e++){var r=o[e];this.root.insert(r,this.maxDepth)}},e.prototype.visitNodeRecursive=function(t,e,o){var r;if(t||(t=this.root),t===this.root&&e&&(r=e(t)),!1!==r){for(var n=0,h=t.nodes;n<h.length;n++){var d=h[n];if(d.isInternal){if(e&&(r=e(d)),!1===r)continue;this.visitNodeRecursive(d,e,o)}else d.body&&e&&e(d.body);o&&o(d)}t===this.root&&o&&o(t)}},e}()})),o(e,"Series/Networkgraph/VerletIntegration.js",[],(function(){return{attractive:function(link,t,e){var o=link.getMass(),r=-e.x*t*this.diffTemperature,n=-e.y*t*this.diffTemperature;link.fromNode.fixedPosition||(link.fromNode.plotX-=r*o.fromNode/link.fromNode.degree,link.fromNode.plotY-=n*o.fromNode/link.fromNode.degree),link.toNode.fixedPosition||(link.toNode.plotX+=r*o.toNode/link.toNode.degree,link.toNode.plotY+=n*o.toNode/link.toNode.degree)},attractiveForceFunction:function(t,e){return(e-t)/t},barycenter:function(){var t=this.options.gravitationalConstant,e=this.barycenter.xFactor,o=this.barycenter.yFactor;e=(e-(this.box.left+this.box.width)/2)*t,o=(o-(this.box.top+this.box.height)/2)*t,this.nodes.forEach((function(t){t.fixedPosition||(t.plotX-=e/t.mass/t.degree,t.plotY-=o/t.mass/t.degree)}))},getK:function(t){return Math.pow(t.box.width*t.box.height/t.nodes.length,.5)},integrate:function(t,e){var o=-t.options.friction,r=t.options.maxSpeed,n=e.prevX,h=e.prevY,d=(e.plotX+e.dispX-n)*o,l=(e.plotY+e.dispY-h)*o,c=Math.abs,f=c(d)/(d||1),m=c(l)/(l||1);d=f*Math.min(r,Math.abs(d)),l=m*Math.min(r,Math.abs(l)),e.prevX=e.plotX+e.dispX,e.prevY=e.plotY+e.dispY,e.plotX+=d,e.plotY+=l,e.temperature=t.vectorLength({x:d,y:l})},repulsive:function(t,e,o){var r=e*this.diffTemperature/t.mass/t.degree;t.fixedPosition||(t.plotX+=o.x*r,t.plotY+=o.y*r)},repulsiveForceFunction:function(t,e){return(e-t)/t*(e>t?1:0)}}})),o(e,"Series/Networkgraph/ReingoldFruchtermanLayout.js",[e["Series/Networkgraph/EulerIntegration.js"],e["Core/Globals.js"],e["Series/GraphLayoutComposition.js"],e["Series/Networkgraph/QuadTree.js"],e["Core/Utilities.js"],e["Series/Networkgraph/VerletIntegration.js"]],(function(t,e,o,r,n,h){var d=e.win,l=n.clamp,c=n.defined,f=n.isFunction,m=n.pick,y=function(){function e(){this.attractiveForce=void 0,this.box={},this.currentStep=0,this.initialRendering=!0,this.integration=void 0,this.links=[],this.nodes=[],this.options=void 0,this.quadTree=void 0,this.repulsiveForce=void 0,this.series=[],this.simulation=!1}return e.compose=function(r){o.compose(r),o.integrations.euler=t,o.integrations.verlet=h,o.layouts["reingold-fruchterman"]=e},e.prototype.init=function(t){this.options=t,this.nodes=[],this.links=[],this.series=[],this.box={x:0,y:0,width:0,height:0},this.setInitialRendering(!0),this.integration=o.integrations[t.integration],this.enableSimulation=t.enableSimulation,this.attractiveForce=m(t.attractiveForce,this.integration.attractiveForceFunction),this.repulsiveForce=m(t.repulsiveForce,this.integration.repulsiveForceFunction),this.approximation=t.approximation},e.prototype.updateSimulation=function(t){this.enableSimulation=m(t,this.options.enableSimulation)},e.prototype.start=function(){var t=this,e=this.series,o=this.options;t.currentStep=0,t.forces=e[0]&&e[0].forces||[],t.chart=e[0]&&e[0].chart,t.initialRendering&&(t.initPositions(),e.forEach((function(s){s.finishedAnimating=!0,s.render()}))),t.setK(),t.resetSimulation(o),t.enableSimulation&&t.step()},e.prototype.step=function(){var t=this,e=this.series;this.currentStep++,"barnes-hut"===this.approximation&&(this.createQuadTree(),this.quadTree.calculateMassAndCenter());for(var o=0,r=this.forces||[];o<r.length;o++)this[r[o]+"Forces"](this.temperature);if(this.applyLimits(),this.temperature=this.coolDown(this.startTemperature,this.diffTemperature,this.currentStep),this.prevSystemTemperature=this.systemTemperature,this.systemTemperature=this.getSystemTemperature(),this.enableSimulation){for(var n=0,h=e;n<h.length;n++){var l=h[n];l.chart&&l.render()}this.maxIterations--&&isFinite(this.temperature)&&!this.isStable()?(this.simulation&&d.cancelAnimationFrame(this.simulation),this.simulation=d.requestAnimationFrame((function(){return t.step()}))):this.simulation=!1}},e.prototype.stop=function(){this.simulation&&d.cancelAnimationFrame(this.simulation)},e.prototype.setArea=function(t,e,o,r){this.box={left:t,top:e,width:o,height:r}},e.prototype.setK=function(){this.k=this.options.linkLength||this.integration.getK(this)},e.prototype.addElementsToCollection=function(t,e){for(var o=0,r=t;o<r.length;o++){var element=r[o];-1===e.indexOf(element)&&e.push(element)}},e.prototype.removeElementFromCollection=function(element,t){var e=t.indexOf(element);-1!==e&&t.splice(e,1)},e.prototype.clear=function(){this.nodes.length=0,this.links.length=0,this.series.length=0,this.resetSimulation()},e.prototype.resetSimulation=function(){this.forcedStop=!1,this.systemTemperature=0,this.setMaxIterations(),this.setTemperature(),this.setDiffTemperature()},e.prototype.restartSimulation=function(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))},e.prototype.setMaxIterations=function(t){this.maxIterations=m(t,this.options.maxIterations)},e.prototype.setTemperature=function(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)},e.prototype.setDiffTemperature=function(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)},e.prototype.setInitialRendering=function(t){this.initialRendering=t},e.prototype.createQuadTree=function(){this.quadTree=new r(this.box.left,this.box.top,this.box.width,this.box.height),this.quadTree.insertNodes(this.nodes)},e.prototype.initPositions=function(){var t=this.options.initialPositions;if(f(t)){t.call(this);for(var e=0,o=this.nodes;e<o.length;e++){var r=o[e];c(r.prevX)||(r.prevX=r.plotX),c(r.prevY)||(r.prevY=r.plotY),r.dispX=0,r.dispY=0}}else"circle"===t?this.setCircularPositions():this.setRandomPositions()},e.prototype.setCircularPositions=function(){for(var t,e=this.box,o=this.nodes,r=o.length+1,n=2*Math.PI/r,h=o.filter((function(t){return 0===t.linksTo.length})),d={},l=this.options.initialPositionRadius,c=function(t){for(var e=0,o=t.linksFrom||[];e<o.length;e++){var link=o[e];d[link.toNode.id]||(d[link.toNode.id]=!0,f.push(link.toNode),c(link.toNode))}},f=[],y=0,v=h;y<v.length;y++){var x=v[y];f.push(x),c(x)}if(f.length)for(var k=0,N=o;k<N.length;k++){var w=N[k];-1===f.indexOf(w)&&f.push(w)}else f=o;for(var i=0,S=f.length;i<S;++i)(t=f[i]).plotX=t.prevX=m(t.plotX,e.width/2+l*Math.cos(i*n)),t.plotY=t.prevY=m(t.plotY,e.height/2+l*Math.sin(i*n)),t.dispX=0,t.dispY=0},e.prototype.setRandomPositions=function(){for(var t,e=this.box,o=this.nodes,r=o.length+1,n=function(t){var e=t*t/Math.PI;return e-=Math.floor(e)},i=0,h=o.length;i<h;++i)(t=o[i]).plotX=t.prevX=m(t.plotX,e.width*n(i)),t.plotY=t.prevY=m(t.plotY,e.height*n(r+i)),t.dispX=0,t.dispY=0},e.prototype.force=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];this.integration[t].apply(this,e)},e.prototype.barycenterForces=function(){this.getBarycenter(),this.force("barycenter")},e.prototype.getBarycenter=function(){for(var t=0,e=0,o=0,r=0,n=this.nodes;r<n.length;r++){var h=n[r];e+=h.plotX*h.mass,o+=h.plotY*h.mass,t+=h.mass}return this.barycenter={x:e,y:o,xFactor:e/t,yFactor:o/t},this.barycenter},e.prototype.barnesHutApproximation=function(t,e){var o,r,n=this.getDistXY(t,e),h=this.vectorLength(n);return t!==e&&0!==h&&(e.isInternal?e.boxSize/h<this.options.theta&&0!==h?(r=this.repulsiveForce(h,this.k),this.force("repulsive",t,r*e.mass,n,h),o=!1):o=!0:(r=this.repulsiveForce(h,this.k),this.force("repulsive",t,r*e.mass,n,h))),o},e.prototype.repulsiveForces=function(){var t=this;if("barnes-hut"===this.approximation)for(var e=function(e){o.quadTree.visitNodeRecursive(null,(function(o){return t.barnesHutApproximation(e,o)}))},o=this,r=0,n=this.nodes;r<n.length;r++)e(m=n[r]);else for(var h=void 0,d=void 0,l=void 0,c=0,f=this.nodes;c<f.length;c++)for(var m=f[c],y=0,v=this.nodes;y<v.length;y++){var x=v[y];m===x||m.fixedPosition||(l=this.getDistXY(m,x),0!==(d=this.vectorLength(l))&&(h=this.repulsiveForce(d,this.k),this.force("repulsive",m,h*x.mass,l,d)))}},e.prototype.attractiveForces=function(){for(var t,e,o,r=0,n=this.links;r<n.length;r++){var link=n[r];link.fromNode&&link.toNode&&(t=this.getDistXY(link.fromNode,link.toNode),0!==(e=this.vectorLength(t))&&(o=this.attractiveForce(e,this.k),this.force("attractive",link,o,t,e)))}},e.prototype.applyLimits=function(){for(var t=0,e=this.nodes;t<e.length;t++){var o=e[t];if(o.fixedPosition)return;this.integration.integrate(this,o),this.applyLimitBox(o,this.box),o.dispX=0,o.dispY=0}},e.prototype.applyLimitBox=function(t,e){var o=t.radius;t.plotX=l(t.plotX,e.left+o,e.width-o),t.plotY=l(t.plotY,e.top+o,e.height-o)},e.prototype.coolDown=function(t,e,o){return t-e*o},e.prototype.isStable=function(){return Math.abs(this.systemTemperature-this.prevSystemTemperature)<1e-5||this.temperature<=0},e.prototype.getSystemTemperature=function(){for(var t=0,e=0,o=this.nodes;e<o.length;e++)t+=o[e].temperature;return t},e.prototype.vectorLength=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},e.prototype.getDistR=function(t,e){var o=this.getDistXY(t,e);return this.vectorLength(o)},e.prototype.getDistXY=function(t,e){var o=t.plotX-e.plotX,r=t.plotY-e.plotY;return{x:o,y:r,absX:Math.abs(o),absY:Math.abs(r)}},e}();return y})),o(e,"Series/Networkgraph/NetworkgraphSeries.js",[e["Series/DragNodesComposition.js"],e["Series/GraphLayoutComposition.js"],e["Core/Globals.js"],e["Series/Networkgraph/NetworkgraphPoint.js"],e["Series/Networkgraph/NetworkgraphSeriesDefaults.js"],e["Series/NodesComposition.js"],e["Series/Networkgraph/ReingoldFruchtermanLayout.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,o,r,n,h,d,l,c){var f,m=this&&this.__extends||(f=function(t,b){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},f(t,b)},function(t,b){function e(){this.constructor=t}f(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),y=o.noop,v=l.series,x=l.seriesTypes,k=x.column.prototype,N=x.line.prototype,w=c.addEvent,S=c.defined,L=c.extend,P=c.merge,X=c.pick,Y=function(o){function r(){var t=null!==o&&o.apply(this,arguments)||this;return t.data=void 0,t.nodes=void 0,t.options=void 0,t.points=void 0,t}return m(r,o),r.compose=function(e){t.compose(e),d.compose(e)},r.prototype.deferLayout=function(){var t,o=this.options.layoutAlgorithm,r=this.chart.graphLayoutsStorage,n=this.chart.graphLayoutsLookup,h=this.chart.options.chart;this.visible&&(r||(this.chart.graphLayoutsStorage=r={},this.chart.graphLayoutsLookup=n=[]),(t=r[o.type])||(o.enableSimulation=S(h.forExport)?!h.forExport:o.enableSimulation,r[o.type]=t=new e.layouts[o.type],t.init(o),n.splice(t.index,0,t)),this.layout=t,t.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight),t.addElementsToCollection([this],t.series),t.addElementsToCollection(this.nodes,t.nodes),t.addElementsToCollection(this.points,t.links))},r.prototype.destroy=function(){this.layout&&this.layout.removeElementFromCollection(this,this.layout.series),h.destroy.call(this)},r.prototype.drawDataLabels=function(){var t=this.options.dataLabels.textPath;v.prototype.drawDataLabels.apply(this,arguments),this.points=this.data,this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath,v.prototype.drawDataLabels.apply(this,arguments),this.points=this.nodes,this.options.dataLabels.textPath=t},r.prototype.generatePoints=function(){var t,i;for(h.generatePoints.apply(this,arguments),this.options.nodes&&this.options.nodes.forEach((function(t){this.nodeLookup[t.id]||(this.nodeLookup[t.id]=this.createNode(t.id))}),this),i=this.nodes.length-1;i>=0;i--)(t=this.nodes[i]).degree=t.getDegree(),t.radius=X(t.marker&&t.marker.radius,this.options.marker&&this.options.marker.radius,0),this.nodeLookup[t.id]||t.remove();this.data.forEach((function(link){link.formatPrefix="link"})),this.indexateNodes()},r.prototype.getPointsCollection=function(){return this.nodes||[]},r.prototype.indexateNodes=function(){this.nodes.forEach((function(t,e){t.index=e}))},r.prototype.init=function(t,e){var r=this;return o.prototype.init.call(this,t,e),w(this,"updatedData",(function(){r.layout&&r.layout.stop()})),w(this,"afterUpdate",(function(){r.nodes.forEach((function(t){t&&t.series&&t.resolveColor()}))})),this},r.prototype.markerAttribs=function(t,e){var o=v.prototype.markerAttribs.call(this,t,e);return S(t.plotY)||(o.y=0),o.x=(t.plotX||0)-(o.width||0)/2,o},r.prototype.pointAttribs=function(t,e){var o=e||t&&t.state||"normal",r=v.prototype.pointAttribs.call(this,t,o),n=this.options.states[o];return t&&!t.isNode&&(r=t.getLinkAttributes(),n&&(r={stroke:n.linkColor||r.stroke,dashstyle:n.linkDashStyle||r.dashstyle,opacity:X(n.linkOpacity,r.opacity),"stroke-width":n.linkColor||r["stroke-width"]})),r},r.prototype.render=function(){var t=this,e=t.points,o=t.chart.hoverPoint,r=[];t.points=t.nodes,N.render.call(this),t.points=e,e.forEach((function(t){t.fromNode&&t.toNode&&(t.renderLink(),t.redrawLink())})),o&&o.series===t&&t.redrawHalo(o),t.chart.hasRendered&&!t.options.dataLabels.allowOverlap&&(t.nodes.concat(t.points).forEach((function(t){t.dataLabel&&r.push(t.dataLabel)})),t.chart.hideOverlappingLabels(r))},r.prototype.setState=function(t,e){e?(this.points=this.nodes.concat(this.data),v.prototype.setState.apply(this,arguments),this.points=this.data):v.prototype.setState.apply(this,arguments),this.layout.simulation||t||this.render()},r.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints(),this.deferLayout(),this.nodes.forEach((function(t){t.isInside=!0,t.linksFrom.forEach((function(t){t.shapeType="path",t.y=1}))}))},r.defaultOptions=P(v.defaultOptions,n),r}(v);return L(Y.prototype,{pointClass:r,animate:void 0,directTouch:!0,drawGraph:void 0,forces:["barycenter","repulsive","attractive"],hasDraggableNodes:!0,isCartesian:!1,noSharedTooltip:!0,pointArrayMap:["from","to"],requireSorting:!1,trackerGroups:["group","markerGroup","dataLabelsGroup"],buildKDTree:y,createNode:h.createNode,drawTracker:k.drawTracker,onMouseDown:t.onMouseDown,onMouseMove:t.onMouseMove,onMouseUp:t.onMouseUp,redrawHalo:t.redrawHalo}),l.registerSeriesType("networkgraph",Y),Y})),o(e,"masters/modules/networkgraph.src.js",[e["Core/Globals.js"],e["Series/Networkgraph/NetworkgraphSeries.js"]],(function(t,e){var o=t;e.compose(o.Chart)}))},t.exports?(h.default=h,t.exports=h):(r=[o(222)],void 0===(n=function(t){return h(t),h.Highcharts=t,h}.apply(e,r))||(t.exports=n))}}]);