(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1005:function(t,e,n){"use strict";n.r(e);var r=n(505),o=n(906),l=n(514),c=n(198),h=n(229),v=n(145),d=n(29),f=n(515),m=n(860),x={name:"ProductAdditionsTable",props:{isLoading:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}}},data:function(){return{selected:[],page:1,pageCount:0,headers:[{text:this.$t("name"),align:"start",value:"name"},{text:this.$t("referenceNumber"),align:"center",value:"reference_number"},{text:this.$t("additionOptions"),align:"center",value:"addition_options"},{text:this.$t("relatedProducts"),align:"center",value:"related_products"},{text:this.$t("creationDate"),align:"center",value:"creation_date"},{text:"",align:"end",value:"actions",sortable:!1}]}}},_=n(39),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e("div",{class:{white:!t.$isDark()}},[e(o.a,{attrs:{headers:t.headers,items:t.data,page:t.page,"item-key":"code","mobile-breakpoint":0,"show-select":"","hide-default-footer":"",loading:t.isLoading},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.status",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.$t(n.status))+"\n    ")]}},{key:"item.actions",fn:function(n){n.item;return[e(r.a,{attrs:{small:"",icon:"",to:"/"}},[e(c.a,{attrs:{small:""}},[t._v(" mdi-eye ")])],1),t._v(" "),e(r.a,{staticClass:"mx-1",attrs:{small:"",icon:""}},[e(c.a,{attrs:{small:""}},[t._v(" mdi-information ")])],1),t._v(" "),e(f.a,{attrs:{right:"rtl"==t.$dir(),left:"ltr"==t.$dir(),"offset-x":"","nudge-width":200},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{small:"",icon:""}},"v-btn",l,!1),o),[e(c.a,{attrs:{small:""}},[t._v(" mdi-dots-vertical ")])],1)]}}],null,!0)},[t._v(" "),e(h.a,{attrs:{dense:""}},[e(v.a,{attrs:{link:""}},[e(d.b,{staticClass:"font-weight-bold"},[t._v("\n              حذف\n            ")])],1),t._v(" "),e(l.a),t._v(" "),e(v.a,{attrs:{link:""}},[e(d.b,{staticClass:"font-weight-bold"},[t._v("\n              Another Action\n            ")])],1)],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),e(l.a),t._v(" "),e("div",{staticClass:"py-4"},[e(m.a,{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},193:function(t,e,n){"use strict";var r=n(505);e.a=r.a},826:function(t,e,n){n(4)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},827:function(t,e,n){var content=n(828);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("7f6d4ad6",content,!0,{sourceMap:!1})},828:function(t,e,n){var r=n(23)(!1);r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=r},860:function(t,e,n){"use strict";n(8),n(9),n(10),n(16),n(7),n(17);var r=n(69),o=n(2),l=(n(31),n(826),n(25),n(64),n(3),n(71),n(59),n(827),n(93)),c=n(159),h=n(43),v=n(844),d=n(30),f=n(14);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(h.a,Object(v.a)({onVisible:["init"]}),d.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),l=this.length-o+1+n;if(this.value>o&&this.value<l){var c=this.length,h=this.value-o+2,v=this.value+o-2-n,d=v+1===c-1?v+1:"...";return[1,h-1==2?2:"..."].concat(Object(r.a)(this.range(h,v)),[d,this.length])}if(this.value===o){var f=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,f)),["...",this.length])}if(this.value===l){var m=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(m,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(l,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[t(l.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);