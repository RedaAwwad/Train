(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1017:function(e,n,t){"use strict";t.r(n);var l=t(505),r=t(663),o=t(198),c=t(971),m=t(679),d=(t(3),t(7),{props:{mainPermessionLabel:{type:String,default:""},permessions:{type:Array,default:null}},data:function(){return{allPermession:null}},methods:{allPermessionchecked:function(){!0===this.allPermession?this.permessions.forEach((function(e){return e.checked=!0})):this.permessions.forEach((function(e){return e.checked=!1}))}}}),f=t(39),component=Object(f.a)(d,(function(){var e=this,n=e._self._c;return n(r.a,{staticClass:"roles-con border-light",attrs:{flat:"",tile:""}},[n("div",{staticClass:"main-permession"},[n(c.a,{attrs:{label:e.mainPermessionLabel},on:{click:e.allPermessionchecked},model:{value:e.allPermession,callback:function(n){e.allPermession=n},expression:"allPermession"}})],1),e._v(" "),e._l(e.permessions,(function(t,r){return n("div",{key:r,staticClass:"mt-1 d-flex align-center"},[n("div",{staticClass:"roles"},[n(c.a,{attrs:{label:t.PermessionTitle,"input-value":t.checked}})],1),e._v(" "),n(m.a,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[n(l.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),r),[n(o.a,{attrs:{color:"grey lighten-1",danse:""}},[e._v("\n            mdi-message-question-outline\n          ")])],1)]}}],null,!0)},[e._v(" "),n("span",[e._v(e._s(t.permessionInfo))])])],1)}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);