(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{668:function(t,e,n){var content=n(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("dc0628f2",content,!0,{sourceMap:!1})},669:function(t,e,n){var o=n(23)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},679:function(t,e,n){"use strict";var o=n(2),r=(n(31),n(668),n(129)),c=n(43),l=n(155),h=n(154),d=n(194),f=n(0),v=n(12),m=n(14);e.a=Object(m.a)(c.a,l.a,h.a,d.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.t)(this,"activator",!0)&&Object(v.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===f.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},680:function(t,e,n){n(4)({target:"Object",stat:!0},{is:n(344)})},841:function(t,e,n){"use strict";n.r(e);var o=n(505),r=n(198),c=n(831),l=n(679),h=(n(31),{name:"ReferenceNumberGenerator",model:{prop:"value",event:"input"},props:{value:{type:[String,Number]},label:{type:String,default:null},info:{type:String,default:null},required:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},reset:{type:Boolean,default:!0}},data:function(){var t=this;return{submitting:!1,reference_number:this.value,rules:{required:function(e){return!t.required||(!!e||"Required.")}}}},watch:{value:function(t){this.reference_number=t}},methods:{generate:function(){this.submitting=!0;this.$emit("input",null)}}}),d=n(39),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comman-input",class:{"mb-4":!t.noMargin}},[e("div",{staticClass:"lable-info d-flex-between"},[e("div",{staticClass:"input-head"},[t.label?e("label",{staticClass:"font-weight-bold"},[t._v(t._s(t.label))]):t._e(),t._v(" "),t.required?e("span",{staticClass:"error--text"},[t._v("*")]):t._e()]),t._v(" "),t.info?e(l.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),c),[e(r.a,{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-message-question-outline\n          ")])],1)]}}],null,!1,1547850545)},[t._v(" "),e("span",[t._v(t._s(t.info))])]):t._e()],1),t._v(" "),e("div",[e(c.a,{staticClass:"m-input-border mb-0",attrs:{readonly:"",value:t.value,"background-color":"".concat(t.$isDark()?"":"white"),rules:[t.rules.required],required:t.required,loading:t.isLoading,"validate-on-blur":!1},model:{value:t.reference_number,callback:function(e){t.reference_number=e},expression:"reference_number"}},[e(o.a,{staticClass:"px-3 pt-4 pb-5 text-subtitle-1",attrs:{slot:"append",color:"primary","x-small":""},on:{click:t.generate},slot:"append"},[t._v("\n        "+t._s(t.$t("autoGenerate"))+"\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);