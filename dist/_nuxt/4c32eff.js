(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1012:function(t,e,r){"use strict";r.r(e);var n=r(198),o=r(229),c=r(230),l=r(145),d=r(231),h=r(29),f=r(659),m=(r(8),r(9),r(10),r(16),r(7),r(17),r(2)),O=(r(68),r(3),r(35),r(45),r(73));function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"AppSidebar",props:{links:{type:Array,require:!0,default:[]}},data:function(){return{isVisible:!1}},watch:{isSidebar:function(t){this.isVisible=t},isVisible:function(t){t||this.$store.commit("ui/TOGGLE_SIDEBAR",!1)}},computed:y(y({},Object(O.b)({isSidebar:"ui/isSidebar"})),{},{isIndexDashboard:function(){return this.$route.matched.find((function(t){return""===t.path||"/en"===t.path}))}}),methods:{hasRoute:function(t){return this.$route.path.includes(t)&&!this.$route.path.includes("".concat(t,"-"))}},mounted:function(){window.innerWidth<1264&&(this.isVisible=!1,this.$store.commit("ui/TOGGLE_SIDEBAR",!1))}},w=r(39),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"main-sidebar",attrs:{tag:"aside",fixed:"",app:"",dark:t.$isDark(),dir:t.$dir(),right:"rtl"===t.$dir(),color:"".concat(t.$isDark()?"":"primary")},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[e("div",{staticClass:"mb-2 px-4 py-3 d-flex justify-center"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[e("img",{attrs:{width:"120",src:"/logo.svg",alt:t.$t("appName")}})])],1),t._v(" "),e(o.a,{staticClass:"main-sidebar__links",attrs:{color:"".concat(t.$isDark()?"":"primary")}},t._l(t.links,(function(link,i){return e("div",{key:i},[link.children&&link.children.length?e(c.a,{class:{"expanded-active-list":link.to&&t.hasRoute(link.to)},attrs:{"no-action":"",value:link.to&&t.hasRoute(link.to),"prepend-icon":link.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[e(h.a,[e(h.b,[t._v(t._s(link.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(link.children,(function(r,n){return e(l.a,{key:n,attrs:{to:r.to,router:"",exact:""}},[e(h.a,[e(h.b,{domProps:{textContent:t._s(r.title)}})],1)],1)}))],2):e(l.a,{class:{"v-list-item--active":t.isIndexDashboard&&link.to===t.localePath("/")},attrs:{to:link.to,router:"",exact:""}},[e(d.a,[e(n.a,[t._v(t._s(link.icon))])],1),t._v(" "),e(h.a,[e(h.b,{domProps:{textContent:t._s(link.title)}})],1)],1)],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);