(window.webpackJsonp=window.webpackJsonp||[]).push([[71,24],{671:function(t,e,n){"use strict";n.r(e);var l=n(505),r=n(198),o=n(831),c=n(840),d=n(679),m=(n(31),n(79),n(157)),v={name:"MInput",model:{prop:"value",event:"input"},props:{options:{type:Object},type:{type:String,default:"text"},value:{type:[String,Number]},label:{type:String,default:null},info:{type:String,default:null},required:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},appendIcon:{type:String,default:null}},data:function(){var t=this;return{rules:{required:function(e){return t.required?"email"===t.type?Object(m.b)(e)||"Enter a valid E-mail!":!!e||"Required!":!e||"email"!==t.type||(Object(m.b)(e)||"E-mail must be valid")}}}},methods:{updateValue:function(t){this.$emit("input",t?t.trim():t)}}},f=n(39),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comman-input",class:{"mb-4":!t.noMargin}},[e("div",{staticClass:"lable-info d-flex-between"},[e("div",{staticClass:"input-head"},[t.label?e("label",{staticClass:"font-weight-bold"},[t._v(t._s(t.label))]):t._e(),t._v(" "),t.required?e("span",{staticClass:"error--text"},[t._v("*")]):t._e()]),t._v(" "),t.info?e(d.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(l.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),o),[e(r.a,{attrs:{color:"grey lighten-1"}},[t._v("\n            mdi-message-question-outline\n          ")])],1)]}}],null,!1,1547850545)},[t._v(" "),e("span",[t._v(t._s(t.info))])]):t._e()],1),t._v(" "),e("div",{class:[t.$isDark()?"":"white"]},["textarea"===t.type?e(c.a,t._b({staticClass:"m-input-border px-3 pt-2 mb-0",attrs:{"full-width":"",flat:"","single-line":"",value:t.value,rules:[t.rules.required],required:t.required,loading:t.isLoading,"append-icon":t.appendIcon},on:{input:t.updateValue}},"v-textarea",t.options,!1)):e(o.a,t._b({staticClass:"m-input-border mb-0",attrs:{type:t.type,value:t.value,"background-color":"".concat(t.$isDark()?"":"white"),rules:[t.rules.required],required:t.required,loading:t.isLoading,"append-icon":t.appendIcon},on:{input:t.updateValue}},"v-text-field",t.options,!1))],1)])}),[],!1,null,null,null);e.default=component.exports},834:function(t,e,n){"use strict";n.r(e);var l=n(505),r=n(198),o=(n(28),n(68),n(3),{name:"AppLangSwitcher",props:{btn:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},computed:{locale:function(){var t=this;return this.$i18n.locales.find((function(i){return i.code!==t.$i18n.locale}))}}}),c=n(39),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.btn?e(l.a,{staticClass:"btn-primary",attrs:{outlined:"",link:"",depressed:"",to:t.switchLocalePath(t.locale.code)}},[e(r.a,{staticClass:"mx-1",attrs:{right:""}},[t._v("\n    mdi-web\n  ")]),t._v(" "),e("span",{staticClass:"mx-1"},[t._v("\n    "+t._s(t.locale.name)+"\n  ")])],1):!t.btn&&t.text?e(l.a,{staticClass:"text-uppercase text-start",attrs:{block:"",text:"",link:"",to:t.switchLocalePath(t.locale.code)}},[t._v("\n  "+t._s(t.locale.name)+"\n")]):e("nuxt-link",{staticClass:"link mx-3 pa-3 text-uppercase white---text",attrs:{to:t.switchLocalePath(t.locale.code)}},[t._v("\n  "+t._s(t.locale.code)+"\n")])}),[],!1,null,null,null);e.default=component.exports},981:function(t,e,n){"use strict";n.r(e);var l=n(505),r=n(663),o=n(661),c=n(825),d=n(885),m=n(822),v=(n(25),n(64),{name:"ForgotPasswordPage",head:function(){return{title:"".concat(this.$t("appName")," | ").concat(this.$t("resetPassword"))}},data:function(){return{submitting:!1,accountNumber:null,email:null}},methods:{validateForm:function(){return this.$refs.loginForm.validate()},resetForm:function(){this.$refs.loginForm.reset()},submitForm:function(){var t=this;this.validateForm()&&(console.log("Inputs is valid"),this.submitting=!0,setTimeout((function(){t.$router.push(t.localePath("/auth/email-sent?email=".concat(t.email)))}),2e3))}}}),f=n(39),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mh-screen__adjust-padding"},[e(d.a,[e(c.a,[e("app-lang-switcher",{attrs:{btn:""}})],1)],1),t._v(" "),e("div",{staticClass:"pt-3 pb-6"},[e(r.a,{staticClass:"mx-auto py-4 pb-6 pa-sm-6",attrs:{width:"500","max-width":"100%",outlined:"",rounded:""}},[e("div",{staticClass:"pa-4 d-flex justify-center"},[e("img",{attrs:{width:"160",src:"/logo-dark.svg",alt:t.$t("appName")}})]),t._v(" "),e(o.c,{staticClass:"justify-center pt-0 mb-4 text-capitalize grey--text lighten-2"},[t._v("\n        "+t._s(t.$t("resetYourPassword"))+"\n      ")]),t._v(" "),e(m.a,{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(r.a,{attrs:{flat:""}},[e("m-input",{attrs:{type:"number",label:t.$t("accountNumber"),info:"رقم الحساب الخاص بك",required:""},model:{value:t.accountNumber,callback:function(e){t.accountNumber=t._n(e)},expression:"accountNumber"}}),t._v(" "),e("m-input",{attrs:{type:"email",label:t.$t("emailAddress"),info:" البريد الإلكتروني الخاص بك",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e(o.a,{staticClass:"mb-4 px-sm-6"},[e(l.a,{staticClass:"btn-primary py-4",attrs:{loading:t.submitting,block:"",type:"su bmit",color:"primary"}},[t._v("\n            "+t._s(t.$t("resetPassword"))+"\n          ")])],1)],1),t._v(" "),e("div",{staticClass:"d-flex flex-column align-center"},[e("div",{staticClass:"d-flex align-center gap-sm mb-3 font-weight-bold"},[e("span",[t._v(t._s(t.$t("haveYourPassword")))]),t._v(" "),e("nuxt-link",{staticClass:"link-hover text-blue",attrs:{to:t.localePath("/auth/login")}},[t._v("\n            "+t._s(t.$t("loginNow"))+"\n          ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-center gap-sm mb-3 font-weight-bold"},[e("span",[t._v(t._s(t.$t("haveNoAccountInNqde")))]),t._v(" "),e("nuxt-link",{staticClass:"link-hover text-blue",attrs:{to:t.localePath("/auth/register")}},[t._v("\n            "+t._s(t.$t("registerNowForFree"))+"\n          ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-center gap-sm font-weight-bold"},[e("span",[t._v(t._s(t.$t("tryAnotherWay")))]),t._v(" "),e("nuxt-link",{staticClass:"link-hover text-blue",attrs:{to:"/"}},[t._v("\n            "+t._s(t.$t("phoneNumber"))+"\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLangSwitcher:n(834).default,MInput:n(671).default})}}]);