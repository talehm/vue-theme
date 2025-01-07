"use strict";(self["webpackChunkvue_theme"]=self["webpackChunkvue_theme"]||[]).push([[468],{6468:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=s(375),n=s(9572),a=n.C.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return n.C.options.computed.classes.call(this)}},methods:{genData:n.C.options.methods.genData}}),r=s(8767),l=s(3507),o=(0,l.A)(a,r.A).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...a.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const t=this.setTextColor(this.color,{...a.options.methods.genData.call(this)});return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),u=s(1689),h=s(8834),d=s(1526),c=s(1906),p=s(8412),m=function(){var t=this,e=t._self._c;return e(u.A,{staticClass:"mx-auto mb-2"},[e(h.OQ,{staticClass:"pb-0"},[e("span",{staticClass:"green--text font-weight-medium text--darken-2"},[t._v(t._s(t.item.partOfSpeech))]),t._v(" "),e("span",{staticClass:"lighten-4 pa-1 text-caption"},[t._v(t._s(t.index)+" of "+t._s(t.length))]),e("p",{staticClass:"font-weight-medium text--primary text-h5",domProps:{innerHTML:t._s(t.item.definition)}}),t.item.examples?e("div",{staticClass:"font-italic"},t._l(t.item.examples,(function(s,i){return e("p",{key:"example"+i,domProps:{innerHTML:t._s("Example: "+s)}})})),0):t._e()]),e(h.SL,[e(o,{attrs:{vertical:"",model:t.expandedBtn,mandatory:"","active-class":"green--text"}},t._l(t.btns,(function(s,n){return e(i.A,{key:n,attrs:{small:""},on:{click:function(e){return t.showDetails(n)}}},[e("span",{staticClass:"text-caption text-lowercase"},[t._v(" "+t._s(s)+" ")])])})),1)],1),e(c.Qo,[e("div",[e(h.OQ,[e("div",[e(p.A,{staticClass:"pa-0",attrs:{"no-gutters":""}},t._l(t.item[t.expandedDetail],(function(s,i){return e(d.A,{key:i,attrs:{cols:"12",sm:"4",md:"3"}},[e("span",{staticClass:"green--text text--darken-3 font-weight-medium",domProps:{innerHTML:t._s(s)}})])})),1)],1)])],1)])],1)},g=[],v=(s(8992),s(4520),{name:"DefinitionDetail",data(){return{expandedBtn:1}},props:{item:Object,length:Number,index:Number},methods:{showDetails(t){console.log("DDD"),this.expandedBtn=t}},computed:{btns(){return Object.keys(this.item).filter((t=>"definition"!=t&&"partOfSpeech"!=t&&"examples"!=t))},expandedDetail(){return this.btns[this.expandedBtn]}}}),b=v,f=s(1656),x=(0,f.A)(b,m,g,!1,null,null,null),y=x.exports},375:function(t,e,s){s.d(e,{A:function(){return v}});var i=s(7495),n=s(2585),a=n.A,r=s(4387),l=s(9748),o=s(5083),u=s(9923),h=s(8010),d=s(1713),c=s(3507),p=s(5604),m=s(6960);const g=(0,c.A)(i.A,h.A,u.A,d.A,(0,r.P)("btnToggle"),(0,l.P)("inputValue"));var v=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...h.A.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return o.A.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.q4)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},(0,m.$c)(this))},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},(0,m.$c)(this,"loader")||[this.$createElement(a,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:n(this.color,i),e)}})},9572:function(t,e,s){s.d(e,{C:function(){return h}});s(4114),s(8992),s(4520),s(2577),s(3949),s(7550);var i=s(5471),n=s(6960),a=i.Ay.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.bD}}}),r=s(4464),l=s(3661),o=s(3507),u=s(5604);const h=(0,o.A)(a,r.A,l.A).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,u.OP)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==s)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find((t=>!t.disabled));if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),(0,n.$c)(this))}});h.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},2585:function(t,e,s){s.d(e,{A:function(){return r}});var i=s(6965),n=s(8767),a=s(6960),r=n.A.extend({name:"v-progress-circular",directives:{intersect:i.A},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,a.Dg)(this.calculatedSize),width:(0,a.Dg)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},(0,a.$c)(this))},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},4387:function(t,e,s){s.d(e,{P:function(){return n}});var i=s(8652);function n(t,e,s){return(0,i.W)(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(t){this.disabled&&t?t.preventDefault():this.$emit("change")}}})}n("itemGroup")},8652:function(t,e,s){s.d(e,{W:function(){return r}});var i=s(5471),n=s(5604);function a(t,e){return()=>(0,n.OP)(`The ${t} component must be used inside a ${e}`)}function r(t,e,s){const n=e&&s?{register:a(e,s),unregister:a(e,s)}:null;return i.Ay.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}},9748:function(t,e,s){s.d(e,{P:function(){return n}});var i=s(5471);function n(t="value",e="input"){return i.Ay.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const a=n();e.A=a}}]);
//# sourceMappingURL=468.3f669dca.js.map