(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{662:function(t,e,r){"use strict";r(9),r(13),r(14),r(15);var l=r(2),n=(r(3),r(28),r(10),r(30),r(65),r(636),r(42),r(637),r(638),r(639),r(640),r(641),r(642),r(643),r(644),r(645),r(646),r(647),r(648),r(649),r(48),r(40),r(7),r(69),r(315),r(1)),c=r(93),o=r(0);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],f=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=m.reduce((function(t,e){return t["offset"+Object(o.u)(e)]={type:[String,Number],default:null},t}),{}),_=m.reduce((function(t,e){return t["order"+Object(o.u)(e)]={type:[String,Number],default:null},t}),{}),C={col:Object.keys(f),offset:Object.keys(h),order:Object.keys(_)};function y(t,e,r){var l=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");l+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(l+="-".concat(r)).toLowerCase():l.toLowerCase()}}var x=new Map;e.a=n.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,o=(e.parent,"");for(var v in r)o+=String(r[v]);var d=x.get(o);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var l=r[t],n=y(e,t,l);n&&d.push(n)}));var n=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!n||!r.cols},Object(l.a)(t,"col-".concat(r.cols),r.cols),Object(l.a)(t,"offset-".concat(r.offset),r.offset),Object(l.a)(t,"order-".concat(r.order),r.order),Object(l.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(o,d)}(),t(r.tag,Object(c.a)(data,{class:d}),n)}})},676:function(t,e,r){"use strict";r.r(e);var l=r(477),n=r(635),c=r(662),o=r(625),v=r(205),d=r(177),m=r(671),f={name:"VendorHomePage",layout:"home"},h=r(37),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{},[e("client-only",[e("video-background",{staticClass:"main-header py-8 mb-10",attrs:{src:"/video/hero.mp4",poster:"/imgs/hero.png"}},[e("div",{staticClass:"main-header__content"},[e("h1",{staticClass:"hero-heading mb-4 pa-4 white--text"},[t._v("\n             التقديم للوظائف الموسمية إلدارة الحشود بقطار المشاعر المقدسة لموسم حج 1444\n         ")]),t._v(" "),e(l.a,{staticClass:"py-3 px-6",attrs:{nuxt:"",to:"/",depressed:"",color:"white"}},[e("div",{staticClass:"d-flex align-center gap-sm font-weight-bold primary--text"},[e("span",[t._v("التقديم الآن")]),t._v(" "),e(v.a,[t._v("mdi-arrow-left-thin")])],1)])],1)])],1),t._v(" "),e("section",{staticClass:"about-section mb-8 overflow-hidden"},[e(o.a,{staticClass:"main-page-container"},[e("img",{staticClass:"bg-wave-shape",attrs:{src:"/imgs/wave-shape.png",alt:"shape wave"}}),t._v(" "),e(m.a,[e(c.a,{staticClass:"order-2 order-md-1",attrs:{cols:"12",md:"6",lg:"5"}},[e("div",{staticClass:"about__img"},[e("img",{staticClass:"about-shape reveal",attrs:{src:"/imgs/shape.png",alt:"shape"}}),t._v(" "),e(d.a,{staticClass:"about-section__img reveal",attrs:{width:"400px","max-width":"100%",src:"/imgs/about.png"}})],1)]),t._v(" "),e(c.a,{staticClass:"d-flex flex-column align-center align-sm-start order-1 order-md-2 pt-md-10",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"heading-badge d-inline-flex align-center gap mb-4 py-2 px-4 reveal"},[e("img",{attrs:{src:"/imgs/stars.svg",alt:"stars icon"}}),t._v(" "),e("span",{staticClass:"font-weight-bold primary--text"},[t._v("قطار المشاعر المقدسة")])]),t._v(" "),e("h2",{staticClass:"section-heading mb-4 font-weight-bold text-center text-sm-start reveal"},[t._v("عن مشروع تشغيل ادارة الحشود لقطار المشاعر المقدسة")]),t._v(" "),e("p",{staticClass:"section-text text-center text-sm-start reveal"},[t._v("بناء على إسناد مهمة تنفيذ مرشوع تشغيل إدارة الحشود لقطار المشاعر المقدسة لموسم حج 1444 هـ عىل رشكة اليمامة بموجب عقدها المربم مع رشكة الخطوط الحديدية السعودية (سار) ، عليه ولما كان تشغيل المرشوع الموسمي بحاجة لتوظيف وتشغيل موظفني موسميني، تنتهي مهامهم بانتهاء موسم حج 1444 هـ.")])]),t._v(" "),e(c.a,{attrs:{cols:"12",lg:"1"}})],1)],1)],1),t._v(" "),e("section",{staticClass:"work-stats py-8 my-4"},[e(o.a,{staticClass:"main-page-container"},[e("div",{staticClass:"d-flex flex-column align-center mb-10 text-center"},[e("h2",{staticClass:"section-heading font-weight-bold reveal"},[t._v("\n           احصائيات عن العمل\n         ")]),t._v(" "),e("h3",{staticClass:"section-subheading reveal"},[t._v("\n           نحن جد فخورين بمشاركة هذه الإحصائيات حول المشروع\n         ")])]),t._v(" "),e(m.a,{staticClass:"justify-md-center"},[e(c.a,{staticClass:"d-flex reveal",attrs:{cols:"12",md:"6",lg:"3"}},[e(n.a,{staticClass:"features-card pa-6",attrs:{elevation:"0",color:"primary-2"}},[e(d.a,{attrs:{width:"65",src:"/imgs/case.svg"}}),t._v(" "),e("h3",{staticClass:"py-4 text-h4 white--text"},[t._v("7,000 موظف")]),t._v(" "),e("p",{staticClass:"secondary--text"},[t._v("\n               موظفني بعدة مسميات وظيفية يعملون في خدمة ضيوف الرحمن ضمن وظائف متعددة من ادارة المحطات.\n             ")])],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex reveal",attrs:{cols:"12",md:"6",lg:"3"}},[e(n.a,{staticClass:"features-card pa-6",attrs:{elevation:"0",color:"primary-2"}},[e(d.a,{attrs:{width:"65",src:"/imgs/chart.svg"}}),t._v(" "),e("h3",{staticClass:"py-4 text-h4 white--text"},[t._v("%90 سعودين")]),t._v(" "),e("p",{staticClass:"secondary--text"},[t._v("\n               زيادة نسبة توطني الوظائف وزيادة فرص العمل لمواطين المملكة.\n             ")])],1)],1),t._v(" "),e(c.a,{staticClass:"d-flex reveal",attrs:{cols:"12",md:"6",lg:"3"}},[e(n.a,{staticClass:"features-card pa-6",attrs:{elevation:"0",color:"primary-2"}},[e(d.a,{attrs:{width:"70",src:"/imgs/translate.svg"}}),t._v(" "),e("h3",{staticClass:"py-4 text-h4 white--text"},[t._v("4 لغات")]),t._v(" "),e("p",{staticClass:"secondary--text"},[t._v("\n               نتوفر على عدة موظفين يتحدثون\n4 لغات وأكثر.\n             ")])],1)],1)],1)],1)],1),t._v(" "),e("section",{staticClass:"train-about py-10"},[e(o.a,{staticClass:"main-page-container"},[e("div",{staticClass:"mb-16"},[e("div",{staticClass:"d-flex flex-column align-center mb-4 text-center"},[e("h2",{staticClass:"section-heading font-weight-bold",staticStyle:{"max-width":"600px"}},[e("img",{staticClass:"train-about-shape",attrs:{src:"/imgs/shape.png",alt:"shape"}}),t._v(" "),e("span",{staticClass:"reveal"},[t._v("\n               كل ما تود معرفته عن قطار المشاعر المقدسة\n             ")])]),t._v(" "),e("h3",{staticClass:"section-subheading reveal",staticStyle:{"max-width":"600px"}},[t._v("\n             قطار المشاعر المقدسة هو خط سكة حديدية يربط مكة المكرمة بالمشاعر المقدسة وهي\n           ")])]),t._v(" "),e("p",{staticClass:"section-text mx-auto text-center reveal",staticStyle:{"max-width":"700px"}},[t._v(" منى، وعرفات، ومزدلفة. ويتكون المرشوع من 17 قطاًرا، تضم 204 عربة، وتستوعب كل عربة منهم 300 راكب، وهناك عربتان أمامية وخلفية للقيادة. ويبلغ طول المسار نحو 1.18 كم، ويرتفع بنحو 8-10 أمتار عن سطح الأرض، ويصل إلى 45 م ًرتا عند منشأة الجمرات، وتبلغ طاقته الاستيعابية 72,000 شخص في الساعة الواحدة. ويحتوي المرشوع على تسعة محطات، بطول 300 مرت لكل محطة، تبدأ من مكة المكرمة، ثم يمر القطار بثالث محطات في مشعر عرفات، وثالثة في مشعر مزدلفة، ثم محطة في بداية مشعر منى، وأخرى وسطه، وتكون المحطة الأخرية عند الدور الرابع بجرس الجمرات.")])]),t._v(" "),e(m.a,{staticClass:"gallery-imgs",attrs:{justify:"center"}},[e(c.a,{staticClass:"reveal",attrs:{cols:"12",sm:"5",md:"3"}},[e(d.a,{staticClass:"gallery-img",attrs:{height:"425",src:"/imgs/img1.png"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"7",lg:"6"}},[e(m.a,[e(c.a,{staticClass:"reveal",attrs:{cols:"12"}},[e(d.a,{staticClass:"gallery-img",attrs:{height:"200",src:"/imgs/img2.png"}})],1),t._v(" "),e(c.a,{staticClass:"reveal",attrs:{cols:"12",md:"6",lg:"7"}},[e(d.a,{staticClass:"gallery-img",attrs:{height:"200",src:"/imgs/img3.png"}})],1),t._v(" "),e(c.a,{staticClass:"reveal",attrs:{cols:"12",md:"6",lg:"5"}},[e("div",{staticClass:"gallery-img__more"},[e("a",{staticClass:"gallery-img__overlay",attrs:{href:"#"}},[e("span",[t._v("+12")])]),t._v(" "),e(d.a,{staticClass:"gallery-img",attrs:{height:"200",src:"/imgs/img4.png"}})],1)])],1)],1)],1)],1)],1),t._v(" "),e("section",{staticClass:"apply-now py-16"},[e(o.a,{staticClass:"main-page-container apply-now__content py-10"},[e("img",{staticClass:"shape d-none d-sm-inline-block",attrs:{src:"/imgs/shape.png",alt:"shape"}}),t._v(" "),e("div",{staticClass:"d-flex flex-column align-center mb-4"},[e("h2",{staticClass:"section-heading font-weight-bold reveal",staticStyle:{"max-width":"600px"}},[t._v("\n           قدم الآن لوظيفتك ماذا تنتظر؟\n         ")]),t._v(" "),e("p",{staticClass:"section-text mb-6 text-center reveal",staticStyle:{"max-width":"600px"}},[t._v("\n           التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم حج 1444 ه كل ما عليك فعله هو ملئ استمارة التسجيل عبر الضغط على زر التقديم الآن بالسفل\n         ")]),t._v(" "),e(l.a,{staticClass:"py-3 px-6 reveal",attrs:{nuxt:"",to:"/",depressed:"",color:"accent"}},[e("div",{staticClass:"d-flex align-center gap-sm font-weight-bold white--text"},[e("span",[t._v("ابدأ التقديم")]),t._v(" "),e(v.a,[t._v("mdi-arrow-left-thin")])],1)])],1)])],1),t._v(" "),e("footer",[e(o.a,{staticClass:"main-page-container"},[e("div",{staticClass:"d-flex align-center justify-center gap mb-3"},[e(d.a,{attrs:{"max-width":"125",src:"/imgs/logo1.svg"}}),t._v(" "),e(d.a,{attrs:{"max-width":"100",src:"/imgs/al-yamama-logo.svg"}})],1),t._v(" "),e("p",{staticClass:"py-4 text-center"},[t._v("جميع الحقوق محفوظة © 2023 ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);