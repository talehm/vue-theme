"use strict";(self["webpackChunkvue_theme"]=self["webpackChunkvue_theme"]||[]).push([[601],{8601:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var a=s(1689),r=s(8834),i=function(){var e=this,t=e._self._c;return e.page?t(a.A,{staticClass:"mx-auto ma-2"},[t(r.OQ,{},[t("header",{staticClass:"w-100"},[t("p",{staticClass:"text-h4 text-center",domProps:{innerHTML:e._s(e.page.title.rendered)}})]),t("div",{ref:"textToRead",staticClass:"paragraphs",domProps:{innerHTML:e._s(e.page.content.rendered)}}),t("div",{staticClass:"text-caption pt-4 d-flex justify-space-between"})])],1):e._e()},n=[],u={name:"PageView",props:{slug:{type:String,required:!0}},data(){return{request:{type:"pages",slug:this.slug,showLoading:!0}}},computed:{page(){return this.$store.getters.singleBySlug(this.request)}},methods:{getPage(){this.$store.dispatch("getSingleBySlug",this.request).then((()=>{this.page&&this.$store.dispatch("updateDocTitle",{parts:[this.page.title.rendered,this.$store.state.site.name]})}))}},created(){this.getPage()}},p=u,l=s(1656),d=(0,l.A)(p,i,n,!1,null,null,null),g=d.exports}}]);
//# sourceMappingURL=601.abae4d25.js.map