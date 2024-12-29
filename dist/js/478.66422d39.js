"use strict";(self["webpackChunkvue_theme"]=self["webpackChunkvue_theme"]||[]).push([[478],{9019:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=s(375),n=s(1689),r=s(1526),a=s(5474),o=s(2987),l=s(8412),h=s(5937),u=function(){var t=this,e=t._self._c;return e("div",[e(n.A,{attrs:{absolute:"",app:"",color:"primary",dark:"",flat:""}},[e(a.A,[e(l.A,{attrs:{align:"start"}},[e(r.A,{attrs:{cols:"12",md:"3"}},[e("h4",{staticClass:"text-h5 font-weight-bold"},[t._v(" Giraffe ")]),e("p",{staticClass:"text-body-1"},[t._v(" Read, Listen, Learn every day! ")])]),e(r.A,{attrs:{cols:"12",md:"3"}},[e(o.A,{attrs:{color:"transparent",flat:""}})],1),e(r.A,{attrs:{cols:"12",md:"3"}},[e(o.A,{attrs:{color:"transparent",flat:""}})],1),e(r.A,{attrs:{cols:"12",md:"3"}},[e("div",[e("h5",{staticClass:"text-h6 font-weight-bold"},[t._v(" Subscribe ")]),e("p",{staticClass:"text-body-1"},[t._v(" The latest Rocket news, articles, and resources, sent straight to your inbox every month. ")])]),e(l.A,[e(r.A,{attrs:{cols:"8"}},[e(h.A,{attrs:{"hide-details":"",label:"Filled",light:"",solo:""}})],1),e(r.A,{attrs:{cols:"4"}},[e(i.A,{attrs:{block:"",color:"secondary",large:""}},[t._v(" Subscribe ")])],1)],1)],1)],1),e("div",{staticClass:"text-center mt-6"},[t._v(" Copyright © "),e("a",{staticClass:"white--text",attrs:{href:"https://heroui.net",rel:"noopener noreferrer",target:"_blank"}},[t._v("trueandfiction.com")]),t._v(" "+t._s((new Date).getFullYear())+". All rights reserved. ")])],1)],1)],1)},d=[],c={name:"FooterView",data:()=>({heroui:[{text:"Github",href:"https://github.com/AGDholo"},{text:"Themes",href:"https://heroui.net/"}],shock:[{text:"Download",href:"https://github.com/AGDholo/giraffe"},{text:"Issues",href:"https://github.com/AGDholo/giraffe/issues"},{text:"LICENSE",href:"https://github.com/AGDholo/giraffe/blob/master/LICENSE"}]})},v=c,g=s(1656),p=(0,g.A)(v,u,d,!1,null,null,null),m=p.exports},375:function(t,e,s){s.d(e,{A:function(){return m}});var i=s(7495),n=s(2585),r=n.A,a=s(4387),o=s(9748),l=s(5083),h=s(9923),u=s(8010),d=s(1713),c=s(3507),v=s(5604),g=s(6960);const p=(0,c.A)(i.A,u.A,h.A,d.A,(0,a.P)("btnToggle"),(0,o.P)("inputValue"));var m=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...u.A.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return l.A.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,v.q4)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},(0,g.$c)(this))},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},(0,g.$c)(this,"loader")||[this.$createElement(r,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:n(this.color,i),e)}})},9456:function(t,e,s){s.d(e,{A:function(){return g}});s(4114),s(8992),s(2577);var i,n=s(4765),r=s(8767),a=s(1713),o=s(3661),l=s(6960),h=s(5471),u=s(3507);function d(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function c(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const v=(0,u.A)(n.A,r.A,a.A,o.A).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.g8)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.HP)(t).find((e=>t[e]));return e&&i[e]||(0,l.Dg)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],i=this.getDefaultData();let n="material-icons";const r=t.indexOf("-"),a=r<=-1;a?s.push(t):(n=t.slice(0,r),d(n)&&(n="")),i.class[n]=!0,i.class[t]=!a;const o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,s)},renderSvgIcon(t,e){const s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(s.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const s={class:{"v-icon__component":!0}},i=this.getSize();i&&(s.style={fontSize:i,height:i,width:i}),this.applyColors(s);const n=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,s)])}},render(t){const e=this.getIcon();return"string"===typeof e?c(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var g=h.Ay.extend({name:"v-icon",$_wrapperFor:v,functional:!0,render(t,{data:e,children:s}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(v,e,i?[i]:s)}})},2987:function(t,e,s){s.d(e,{A:function(){return r}});s(4114);var i=s(3858),n=s(6960),r=i.A.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.A.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$},on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),(0,n.$c)(this))}})},2585:function(t,e,s){s.d(e,{A:function(){return a}});var i=s(6965),n=s(8767),r=s(6960),a=n.A.extend({name:"v-progress-circular",directives:{intersect:i.A},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.Dg)(this.calculatedSize),width:(0,r.Dg)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},(0,r.$c)(this))},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},4387:function(t,e,s){s.d(e,{P:function(){return n}});var i=s(8652);function n(t,e,s){return(0,i.W)(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(t){this.disabled&&t?t.preventDefault():this.$emit("change")}}})}n("itemGroup")},8652:function(t,e,s){s.d(e,{W:function(){return a}});var i=s(5471),n=s(5604);function r(t,e){return()=>(0,n.OP)(`The ${t} component must be used inside a ${e}`)}function a(t,e,s){const n=e&&s?{register:r(e,s),unregister:r(e,s)}:null;return i.Ay.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}},1713:function(t,e,s){var i=s(5471);e.A=i.Ay.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9748:function(t,e,s){s.d(e,{P:function(){return n}});var i=s(5471);function n(t="value",e="input"){return i.Ay.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const r=n();e.A=r}}]);
//# sourceMappingURL=478.66422d39.js.map