(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{664:function(t,e,r){var content=r(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("e23b7040",content,!0,{sourceMap:!1})},665:function(t,e,r){var n=r(23)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},671:function(t,e,r){"use strict";r.r(e);var n=r(505),o=r(198),l=r(831),c=r(840),d=r(679),f=(r(31),r(79),r(157)),v={name:"MInput",model:{prop:"value",event:"input"},props:{options:{type:Object},type:{type:String,default:"text"},value:{type:[String,Number]},label:{type:String,default:null},info:{type:String,default:null},required:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},appendIcon:{type:String,default:null}},data:function(){var t=this;return{rules:{required:function(e){return t.required?"email"===t.type?Object(f.b)(e)||"Enter a valid E-mail!":!!e||"Required!":!e||"email"!==t.type||(Object(f.b)(e)||"E-mail must be valid")}}}},methods:{updateValue:function(t){this.$emit("input",t?t.trim():t)}}},m=r(39),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comman-input",class:{"mb-4":!t.noMargin}},[e("div",{staticClass:"lable-info d-flex-between"},[e("div",{staticClass:"input-head"},[t.label?e("label",{staticClass:"font-weight-bold"},[t._v(t._s(t.label))]):t._e(),t._v(" "),t.required?e("span",{staticClass:"error--text"},[t._v("*")]):t._e()]),t._v(" "),t.info?e(d.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,c=r.attrs;return[e(n.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[e(o.a,{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-message-question-outline\n          ")])],1)]}}],null,!1,1547850545)},[t._v(" "),e("span",[t._v(t._s(t.info))])]):t._e()],1),t._v(" "),e("div",{class:[t.$isDark()?"":"white"]},["textarea"===t.type?e(c.a,t._b({staticClass:"m-input-border px-3 pt-2 mb-0",attrs:{"full-width":"",flat:"","single-line":"",value:t.value,rules:[t.rules.required],required:t.required,loading:t.isLoading,"append-icon":t.appendIcon},on:{input:t.updateValue}},"v-textarea",t.options,!1)):e(l.a,t._b({staticClass:"m-input-border mb-0",attrs:{type:t.type,value:t.value,"background-color":"".concat(t.$isDark()?"":"white"),rules:[t.rules.required],required:t.required,loading:t.isLoading,"append-icon":t.appendIcon},on:{input:t.updateValue}},"v-text-field",t.options,!1))],1)])}),[],!1,null,null,null);e.default=component.exports},822:function(t,e,r){"use strict";var n=r(2),o=(r(35),r(45),r(246),r(10),r(3),r(7),r(64),r(68),r(8),r(9),r(16),r(17),r(14)),l=r(102),c=r(156);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},825:function(t,e,r){"use strict";r(9),r(10),r(16),r(17);var n=r(2),o=(r(3),r(31),r(8),r(27),r(70),r(329),r(40),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(44),r(35),r(7),r(75),r(343),r(1)),l=r(94),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),_=v.reduce((function(t,e){return t["order"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(_)};function O(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in r)c+=String(r[d]);var f=x.get(c);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var n=r[t],o=O(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(c,f)}(),t(r.tag,Object(l.a)(data,{class:f}),o)}})},829:function(t,e,r){"use strict";r.r(e);var n=r(505),o=r(198),l=r(865),c=r(679),d=(r(8),r(9),r(10),r(3),r(16),r(7),r(17),r(2));r(31);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"SingleSelect",model:{prop:"value",event:"input"},props:{value:{type:[Object,Array,Number,String],default:function(){return null}},content:{type:[Object,Array,Number,String],default:null},label:{type:String,default:null},placeholder:{type:String,default:"اختر"},itemText:{type:String,default:"name"},info:{type:String,default:null},required:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},noMargin:{type:Boolean,default:!1},object:{type:Boolean,default:!1},menuProps:{type:Object,default:function(){}}},data:function(){var t=this;return{selectedValue:this.value,rules:{required:function(e){return!t.required||(!!e||"Required.")}}}},watch:{value:function(t){this.selectedValue=t}},computed:{menuOptions:function(){var t={bottom:!0,offsetY:!0};return this.menuProps&&(t=v(v({},t),this.menuProps)),t}},methods:{updateValue:function(t){this.$emit("input",t)}}},h=r(39),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"single-select",class:{"mb-4":!t.noMargin}},[e("div",{staticClass:"lable-info d-flex-between"},[e("div",{staticClass:"input-head"},[e("label",{staticClass:"font-weight-bold"},[t._v(t._s(t.label))]),t._v(" "),t.required?e("span",{staticClass:"error--text"},[t._v("*")]):t._e()]),t._v(" "),t.info?e(c.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,c=r.attrs;return[e(n.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[e(o.a,{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-message-question-outline\n          ")])],1)]}}],null,!1,1547850545)},[t._v(" "),e("span",[t._v(t._s(t.info))])]):t._e()],1),t._v(" "),e(l.a,{staticClass:"m-input-border",attrs:{items:t.content,"item-text":t.itemText,"item-value":function(t){return t},label:t.placeholder,"return-object":t.object,rules:[t.rules.required],clearable:t.clearable,solo:"",flat:"",dense:"",loading:"false",color:"white","menu-props":t.menuOptions},on:{input:t.updateValue},model:{value:t.selectedValue,callback:function(e){t.selectedValue=e},expression:"selectedValue"}})],1)}),[],!1,null,null,null);e.default=component.exports},841:function(t,e,r){"use strict";r.r(e);var n=r(505),o=r(198),l=r(831),c=r(679),d=(r(31),{name:"ReferenceNumberGenerator",model:{prop:"value",event:"input"},props:{value:{type:[String,Number]},label:{type:String,default:null},info:{type:String,default:null},required:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},reset:{type:Boolean,default:!0}},data:function(){var t=this;return{submitting:!1,reference_number:this.value,rules:{required:function(e){return!t.required||(!!e||"Required.")}}}},watch:{value:function(t){this.reference_number=t}},methods:{generate:function(){this.submitting=!0;this.$emit("input",null)}}}),f=r(39),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comman-input",class:{"mb-4":!t.noMargin}},[e("div",{staticClass:"lable-info d-flex-between"},[e("div",{staticClass:"input-head"},[t.label?e("label",{staticClass:"font-weight-bold"},[t._v(t._s(t.label))]):t._e(),t._v(" "),t.required?e("span",{staticClass:"error--text"},[t._v("*")]):t._e()]),t._v(" "),t.info?e(c.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,c=r.attrs;return[e(n.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[e(o.a,{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-message-question-outline\n          ")])],1)]}}],null,!1,1547850545)},[t._v(" "),e("span",[t._v(t._s(t.info))])]):t._e()],1),t._v(" "),e("div",[e(l.a,{staticClass:"m-input-border mb-0",attrs:{readonly:"",value:t.value,"background-color":"".concat(t.$isDark()?"":"white"),rules:[t.rules.required],required:t.required,loading:t.isLoading,"validate-on-blur":!1},model:{value:t.reference_number,callback:function(e){t.reference_number=e},expression:"reference_number"}},[e(n.a,{staticClass:"px-3 pt-4 pb-5 text-subtitle-1",attrs:{slot:"append",color:"primary","x-small":""},on:{click:t.generate},slot:"append"},[t._v("\n        "+t._s(t.$t("autoGenerate"))+"\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},842:function(t,e,r){"use strict";r(9),r(10),r(16),r(17);var n=r(2),o=(r(3),r(35),r(45),r(25),r(8),r(27),r(70),r(329),r(40),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(44),r(7),r(343),r(1)),l=r(94),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return v.reduce((function(r,n){return r[t+Object(c.F)(n)]=e(),r}),{})}var _=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=h("align",(function(){return{type:String,default:null,validator:_}})),O=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},x=h("justify",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},w=h("alignContent",(function(){return{type:String,default:null,validator:j}})),C={align:Object.keys(y),justify:Object.keys(x),alignContent:Object.keys(w)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:O}},x),{},{alignContent:{type:String,default:null,validator:j}},w),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var d in r)c+=String(r[d]);var f=P.get(c);return f||function(){var t,e;for(e in f=[],C)C[e].forEach((function(t){var n=r[t],o=k(e,t,n);o&&f.push(o)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),P.set(c,f)}(),t(r.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},993:function(t,e,r){"use strict";r.r(e);var n=r(505),o=r(663),l=r(661),c=r(825),d=r(657),f=r(822),v=r(970),m=r(969),h=r(842),_=(r(28),r(64),{name:"EditAdditionOption",layout:"dashboard",data:function(){return{submitting:!1,form:{name:null,code:null,addition:null,taxGroup:null,costCalculationMethod:null,cost:null}}},computed:{additionID:function(){return this.$route.params.id}},methods:{validateForm:function(){return this.$refs.loginForm.validate()},resetForm:function(){this.$refs.loginForm.reset()},submitForm:function(){var t=this;this.validateForm()&&(this.submitting=!0,setTimeout((function(){t.$router.push(t.localePath("/vendor"))}),500))}}}),y=r(39),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,{staticClass:"pt-4 mb-4 mb-sm-6",attrs:{elevation:"0",rounded:"0"}},[e(d.a,{staticClass:"pb-8 pb-sm-16"},[e("div",{staticClass:"d-flex flex-column flex-sm-row align-sm-center justify-sm-space-between"},[e("h1",{staticClass:"font-weight-bold mb-4 mb-sm-0"},[t._v("\n          "+t._s(t.$t("editOption"))+"\n        ")])])])],1),t._v(" "),e(d.a,[e(o.a,{staticClass:"pa-4 pa-sm-6",attrs:{flat:""}},[e(f.a,{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(o.a,{attrs:{flat:""}},[e(h.a,{staticClass:"mb-6"},[e(c.a,{attrs:{cols:"12",sm:"6"}},[e("m-input",{attrs:{label:t.$t("name"),info:"الاسم",required:"","no-margin":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6"}},[e("reference-number-generator",{attrs:{label:t.$t("code"),required:"",info:"معلومات"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6"}},[e("single-select",{attrs:{required:"","no-margin":"",content:[{name:"addition 1"},{name:"addition 2"}],label:t.$t("theAddition"),info:"addition"},model:{value:t.form.addition,callback:function(e){t.$set(t.form,"addition",e)},expression:"form.addition"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6"}},[e("single-select",{attrs:{required:"","no-margin":"",content:[{name:"taxGroup 1"},{name:"taxGroup 2"}],label:t.$t("taxGroup"),info:"taxGroup"},model:{value:t.form.taxGroup,callback:function(e){t.$set(t.form,"taxGroup",e)},expression:"form.taxGroup"}})],1),t._v(" "),e(c.a,{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"haveOrder pt-3"},[e("label",{staticClass:"mb-1 font-weight-bold"},[t._v("\n                  "+t._s(t.$t("costCalculationMethod"))+"\n                ")]),t._v(" "),e(m.a,{attrs:{row:""},model:{value:t.form.costCalculationMethod,callback:function(e){t.$set(t.form,"costCalculationMethod",e)},expression:"form.costCalculationMethod"}},[e(v.a,{staticClass:"ms-0 ps-0",attrs:{label:t.$t("fixedPrice"),value:"fixed"}}),t._v(" "),e(v.a,{attrs:{label:t.$t("fromComponents"),value:"from_compoents"}})],1)],1)]),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6"}},[e("m-input",{attrs:{label:t.$t("cost"),info:"cost",required:"","no-margin":""},model:{value:t.form.cost,callback:function(e){t.$set(t.form,"cost",e)},expression:"form.cost"}})],1)],1)],1),t._v(" "),e(l.a,{staticClass:"justify-end mb-4"},[e(n.a,{staticClass:"btn-primary py-3",attrs:{loading:t.submitting,type:"submit",color:"primary"}},[t._v("\n            "+t._s(t.$t("saveAndApply"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MInput:r(671).default,ReferenceNumberGenerator:r(841).default,SingleSelect:r(829).default})}}]);