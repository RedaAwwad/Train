(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{849:function(e,t,l){"use strict";l.r(t);var n=l(865),c={name:"BranchesTagsSelector",model:{prop:"value",event:"input"},props:{value:{type:Array,default:[]},placeholder:{type:String,default:null},branches:{type:Array,default:[]},tags:{type:Array,default:[]},clearable:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},noMargin:{type:Boolean,default:!1},branchesLabel:{type:String},tagsLabel:{type:String}},data:function(){return{label:"branches",items:this.branches||[],selectedItems:[]}},watch:{"value.length":function(e){e||(this.selectedItems=[])}},computed:{selectedLabel:function(){return this.branchesLabel&&this.tagsLabel?"branches"===this.label?this.branchesLabel:this.tagsLabel:this.$t(this.label)},clear:function(){var e;return!(null!==(e=this.value)&&void 0!==e&&e.length)}},methods:{changeItems:function(e){this.selectedItems=[],this.label=e,this.items=this[e],this.$emit("update-type",e)},updateValue:function(e){this.$emit("input",e),this.$emit("update-type",this.label)}}},r=l(39),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"single-select",class:{"mb-4":!e.noMargin}},[t("div",{staticClass:"d-flex align-items justify-space-between py-2"},[t("label",{staticClass:"font-weight-bold"},[e._v(e._s(e.selectedLabel))]),e._v(" "),t("a",{staticClass:"text-blue underline-none font-weight-bold",attrs:{href:"javascript:;"},on:{click:function(t){return e.changeItems("".concat("branches"===e.label?"tags":"branches"))}}},[e._v("\n      "+e._s(e.$t("determineBy",{name:"".concat("branches"===e.label?e.tagsLabel||e.$t("tags"):e.branchesLabel||e.$t("branches"))}))+"\n    ")])]),e._v(" "),t(n.a,{staticClass:"select-input m-input-border",attrs:{items:e.items,"item-text":"name","item-value":function(i){return i},label:e.placeholder,clearable:e.clearable,text:"",loading:e.isLoading,color:"white",multiple:"",chips:"",dense:"","menu-props":{bottom:!0,offsetY:!0}},on:{input:e.updateValue},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);