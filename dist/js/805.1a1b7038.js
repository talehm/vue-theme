"use strict";(self["webpackChunkvue_theme"]=self["webpackChunkvue_theme"]||[]).push([[805],{7805:function(t,i,s){s.r(i),s.d(i,{default:function(){return h}});var e=s(8412),a=s(3858),l=function(){var t=this,i=t._self._c;return i("div",[i(e.A,{attrs:{justify:"center"}},[t.dialog?i("div",{staticClass:"outside",on:{click:function(i){return t.away()}}}):t._e(),i("div",{ref:"briefDefinition",staticClass:"brief-container"},[i(a.A,{attrs:{color:"white",elevation:"1","max-width":"400",outlined:"",rounded:""}},[t.dialog?i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"list list-dimension"},[t._l(t.definitions,(function(s,e){return i("div",{key:e,staticClass:"list-item"},[i("span",{staticClass:"list-item-queue"},[t._v(t._s(e+1)+". "+t._s(s))])])})),i("div",[i("div",{staticStyle:{display:"initial"}},[i("div",{staticClass:"footer"},[i("div",{staticStyle:{width:"100%"}},[i("div",{staticClass:"footer-action footer-action-align"},[i("div",{staticClass:"grammarly-icon-container"},[i("div",{staticClass:"_1HvyO",staticStyle:{"margin-right":"8px"}},[i("svg",{staticStyle:{fill:"blue"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z"}})]),i("a",{staticClass:"action-text",attrs:{href:t.item.content.link}},[t._v(" Learn more about the word "),i("span",[i("strong",[t._v(" "+t._s(t.item.word))])])])])]),i("div",{staticClass:"svg-icon"},[i("svg",{attrs:{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("mask",{attrs:{id:"path-1-inside-1",fill:"white"}},[i("path",{attrs:{d:"M11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z"}})]),i("path",{attrs:{d:"M6 5C6 4.72386 5.77614 4.5 5.5 4.5C5.22386 4.5 5 4.72386 5 5H6ZM5 8C5 8.27614 5.22386 8.5 5.5 8.5C5.77614 8.5 6 8.27614 6 8H5ZM6 2.99C6 2.71386 5.77614 2.49 5.5 2.49C5.22386 2.49 5 2.71386 5 2.99H6ZM5 3C5 3.27614 5.22386 3.5 5.5 3.5C5.77614 3.5 6 3.27614 6 3H5ZM5 5V8H6V5H5ZM5 2.99V3H6V2.99H5ZM10 5.5C10 7.98528 7.98528 10 5.5 10V12C9.08985 12 12 9.08985 12 5.5H10ZM5.5 10C3.01472 10 1 7.98528 1 5.5H-1C-1 9.08985 1.91015 12 5.5 12V10ZM1 5.5C1 3.01472 3.01472 1 5.5 1V-1C1.91015 -1 -1 1.91015 -1 5.5H1ZM5.5 1C7.98528 1 10 3.01472 10 5.5H12C12 1.91015 9.08985 -1 5.5 -1V1Z",fill:"#9FA6BF",mask:"url(#path-1-inside-1)"}})])])])])])])])],2)])]):t._e()])],1)])],1)},n=[],r={props:{item:{required:!0}},data(){return{dialog:!1}},created(){this.item&&(this.dialog=!0)},computed:{definitions(){return JSON.parse(this.item.content.acf.brief)}},beforeDestroy(){},methods:{away(){this.dialog=!1,this.$emit("show",!1)}},watch:{item:{handler(t){if(t){this.dialog=!0;const t=this.$refs.briefDefinition;t.style.left=this.item.coordinates.x+"px",t.style.top=this.item.coordinates.y+"px"}else this.dialog=!1}}}},o=r,c=s(1656),d=(0,c.A)(o,l,n,!1,null,null,null),h=d.exports}}]);
//# sourceMappingURL=805.1a1b7038.js.map