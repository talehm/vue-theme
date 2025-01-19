(function(){"use strict";var e={5285:function(e,t,n){n(1454);var r=n(7538);t.A={fn:{addYoastMeta(e){(0,r.u)({title:e.yoast_head_json.title,meta:[{name:"description",content:e.yoast_head_json.og_description},{property:"og:title",content:e.yoast_head_json.og_title},{property:"og:description",content:e.yoast_head_json.og_description},{property:"og:url",content:e.yoast_head_json.og_url},{property:"og:locale",content:e.yoast_head_json.og_locale},{property:"og:type",content:e.yoast_head_json.og_type},{name:"robots",content:e.yoast_head_json.robots.index},{name:"twitter:card",content:e.yoast_head_json.twitter_card},{name:"twitter:title",content:e.yoast_head_json.og_title},{name:"twitter:description",content:e.yoast_head_json.og_description},{name:"twitter:image",content:e.yoast_head_json.twitter_image},{rel:"canonical",href:e.yoast_head_json.canonical}]})},toCamelCase(e){return e?.split(" ").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("")}}}},6825:function(e,t,n){n(8992),n(2577);var r=n(5285);t.A={props:{type:String,params:{type:Object,default:null}},data(){return{isReady:!1}},computed:{categories(){return this.$store.state.categories},data(){return this.$store.state?.[this.type]?.find((e=>e.params===this.params))},items(){return this.data?.items}},beforeRouteUpdate(e,t,n){switch(this.isReady=!1,this.$route.name){case"category":this.fetchCategories(e.params.slug).then((()=>n()));break;case"article":this.fetchItem(e.params.slug).then((()=>n()));break;default:break}},methods:{fetchItem(e){return new Promise(((t,n)=>{try{const n=this.$store.state.categories;n&&0!==n.length?this.$store.dispatch("getItemBySlug",{type:"posts",slug:e}).then((()=>t())):this.$store.dispatch("getItems",{type:"categories",params:null}).then((()=>this.$store.dispatch("getItemBySlug",{type:"posts",slug:e}))).then((()=>t()))}catch(r){console.error("Error fetching post:",r),n()}}))},fetchCategories(e){return new Promise(((t,n)=>{try{const n=this.$store.state.categories,o=e=>{const t=r.A.fn.toCamelCase(e.name);return this.$store.dispatch("getItems",{type:"posts",name:t,params:{per_page:10,page:1,categories:e?.id}})};if(n&&0!==n.length){const n=this.$store.state.categories.find((t=>t.slug===e));n?o(n).then((()=>t())):t()}else this.$store.dispatch("getItems",{type:"categories",params:null}).then((()=>{const n=this.$store.state.categories.find((t=>t.slug===e));n?o(n).then((()=>t())):t()}))}catch(o){console.error("Error fetching post:",o),n(!1)}}))},getCategoryName(e){const t=this.categories?.find((t=>t.id==e));return t?t.name:null},getImageById(e){this.$store.dispatch("getItemById",{type:"media",id:e})},formatDate(e){const t=new Date(e),n=t.toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"});return n},calculateReadTime(e){const t=e?.split(" ").length+1;let n=t/200;return Number.isInteger(n)||(n=Math.ceil(n)),`${n} min read`}}}},5856:function(e,t,n){var r=n(5471),o=n(8505),a=n(5474),s=function(){var e=this,t=e._self._c;return t(o.A,[t("AppBar"),t(a.A,{staticClass:"mt-16"},[t("router-view",{key:e.$route.params.slug})],1),t("Footer")],1)},i=[],c=n(6825),l={name:"App",mixins:[c.A],components:{AppBar:()=>Promise.all([n.e(841),n.e(34)]).then(n.bind(n,1690)),Footer:()=>Promise.all([n.e(937),n.e(478)]).then(n.bind(n,9019))},data:()=>({}),mounted(){}},u=l,p=n(1656),d=(0,p.A)(u,s,i,!1,null,null,null),m=d.exports,f=n(5453);r.Ay.use(f.A);var g=new f.A({}),h=(n(8992),n(7550),n(173)),y=n(1689),b=n(8834),w=n(1526),v=n(980),_=n(8412),I=function(){var e=this,t=e._self._c;return t("div",[t("div",[t(y.A,{attrs:{to:"detail"}},[t(v.A,{attrs:{"aspect-ratio":1.6,dark:"",gradient:"to top, rgba(25,32,72,.7), rgba(25,32,72,.0)",height:"70vh",src:n(8823)}},[t(b.OQ,{staticClass:"fill-height d-flex align-end"},[t(_.A,{staticClass:"flex-column"},[t(w.A,{attrs:{cols:"12",lg:"8",md:"10",xl:"7"}},[t("h2",{staticClass:"text-h3 py-3",staticStyle:{"line-height":"1.2"}},[e._v(" All you need to know! ")])])],1)],1)],1)],1)],1),t(_.A,[t(w.A,{attrs:{cols:"12",lg:"12",xl:"8"}},[t("div",[t("post-list",{attrs:{type:"posts",isGrid:"",title:"Recommended For You"}}),t("div",{staticClass:"pt-16"},[t("featured-list",{attrs:{type:"posts",view:"card"}})],1)],1)]),t(w.A,[t("div",{staticClass:"pt-16"},[t("siderbar")],1)])],1)],1)},A=[],j={name:"HomeView",components:{siderbar:()=>Promise.all([n.e(937),n.e(414)]).then(n.bind(n,4979)),postList:()=>n.e(315).then(n.bind(n,6315)),featuredList:()=>n.e(672).then(n.bind(n,2672))},computed:{posts(){return this.$store.state.posts}},methods:{getPosts(){if(!(this.$store.state.posts?.length>0))return this.$store.dispatch("getItems",{type:"posts",params:null})},getCategories(){return this.$store.dispatch("getItems",{type:"categories",params:null})}},mounted(){}},E=j,$=(0,p.A)(E,I,A,!1,null,null,null),k=$.exports,C=(n(4114),n(5353)),S=(n(4603),n(7566),n(8721),n(5285));const B=new Map,O=async(e,t)=>{if(B.has(e))return console.log(`Request already in progress for: ${e}`),B.get(e);try{const n=fetch(e,t).then((e=>{if(!e.ok)throw new Error(`Request failed with status: ${e.status}`);return e.json()})).finally((()=>{B.delete(e)}));return B.set(e,n),await n}catch(n){throw console.error(`Error fetching data from: ${e}`,n),n}};var x={fn:{getItem:async(e,t={},n=!1)=>{let r=`https://trueandfiction.com/wp-json/wp/v2/${e}`;if(t&&Object.keys(t).length>0){const e=new URLSearchParams(t).toString();r+=`?${e}`}const o=await fetch(r,t),a=await o.json();return n&&S.A.fn.addYoastMeta(a[0]),o.ok||console.log("Error"),a[0]},getMedia:async(e,t={})=>{const n=`https://trueandfiction.com/wp-json/wp/v2/${e}`;return O(n,t).then((e=>e))},getItems:async(e,t={})=>{let n=`https://trueandfiction.com/wp-json/wp/v2/${e}?`;if("posts"===e&&(n+="_fields=id,date,link,title,slug,excerpt,type,featured_media,meta,categories,modified"),t&&Object.keys(t).length>0){const e=new URLSearchParams(t).toString();n+=`&${e}`}return O(n,t).then((e=>e))},getRandomItem:async(e,t)=>{let n="https://trueandfiction.com/wp-json/custom/v1/random-post";const r={post_type:e,category:t};if(r&&Object.keys(r).length>0){const e=new URLSearchParams(r).toString();n+=`?${e}`}return O(n,r)}}};r.Ay.use(C.Ay);var P=new C.Ay.Store({state:{authData:null,media:[],posts:[],definitions:[],categories:[],requestTracker:new Map},mutations:{setPost(e,t){e.post=t},setItems(e,t){e[t.name??t.type]||(e[t.name??t.type]=[]),e[t.name??t.type].push({items:t.items,params:t.params})},setItem(e,t){e[t.name??t.type]=t.item},setMedia(e,t){e.media.push(t)},setDefinition(e,t){e.definition=t}},actions:{async getItemBySlug({commit:e},{type:t,name:n,slug:r}){try{const o=await x.fn.getItem(`${t}/?slug=${r}`);e("setItem",{type:t,name:n,item:o})}catch(o){console.error("Error fetching post:",o)}},async getDefinitionBySlug({commit:e},t){try{const n=await x.fn.getItem(`definition/?slug=${t}`);e("setDefinition",n)}catch(n){console.error("Error fetching post:",n)}},async getBriefDefinition({getters:e,commit:t},n){const r="definition",o=`definition-of-${n}`;if(!e.singleBySlug({type:"definition",slug:o})){const e={slug:o,_fields:["acf.brief","id","link","slug","title"]},n=await x.fn.getItem(r,e,!1);return t("setItem",{type:r,name:"definitions",item:n}),n}},async getItems({getters:e,commit:t},{type:n,name:r,params:o}){try{if(r&&e[r]&&e[r].length>0)return;if(!r&&e[n]&&e[n].length>0)return;const a=await x.fn.getItems(n,o);return t("setItems",{type:n,name:r,items:a,params:o}),a}catch(a){console.error("Error fetching post:",a)}},async getItemById({commit:e},{type:t,id:n}){try{if(0===n)return;switch(t){case"media":{const r=await x.fn.getMedia(`${t}/${n}`);r&&e("setMedia",r);break}default:break}}catch(r){console.error("Error fetching post:",r)}}},getters:{post(e){return e.post},items(e){return e.items},posts(e){return e.posts},categories(e){return e.categories},singleBySlug:e=>({type:t,slug:n})=>{for(let r in e[t])if(decodeURI(e[t][r].slug)===n)return e[t][r]}}});r.Ay.use(h.Ay);const L=e=>P.state.categories?.some((t=>t.params===e))?.items?.length>0,R=[{path:"/",name:"Home",component:k,beforeEnter:async(e,t,n)=>{const r=null;L(r)||await P.dispatch("getItems",{type:"categories",params:r}),n()}},{path:"/categories",name:"Categories",component:()=>n.e(821).then(n.bind(n,821)),beforeEnter:async(e,t,n)=>{try{const e=null;L(e)?n():await P.dispatch("getItems",{type:"categories",params:null}),n()}catch(r){console.error("Error fetching post:",r),n(!1)}}},{path:"/riddles",name:"Riddles",props:!0,component:()=>n.e(663).then(n.bind(n,663)),beforeEnter:async(e,t,n)=>{await P.dispatch("getItems",{type:"riddle",name:"riddles",params:{per_page:50,page:1}}),n()}},{path:"/definition/:slug",name:"Definition",props:!0,component:()=>n.e(402).then(n.bind(n,6402)),beforeEnter:async(e,t,n)=>{try{const t=null;L(t)||await P.dispatch("getItems",{type:"categories",params:t});const r=e.params.slug;await P.dispatch("getDefinitionBySlug",r),n()}catch(r){console.error("Error fetching post:",r),n(!1)}}},{path:"/category/:slug",name:"category",props:!0,component:()=>n.e(208).then(n.bind(n,1208))},{path:"/authors",name:"Authors",component:()=>n.e(693).then(n.bind(n,6693)),beforeEnter:async(e,t,n)=>{await P.dispatch("getItems",{type:"categories",params:null}),n()}},{path:"/page/:slug",name:"Page",props:!0,component:()=>n.e(173).then(n.bind(n,9173)),beforeEnter:async(e,t,n)=>{const r=e.params.slug;await P.dispatch("getItemBySlug",{type:"pages",slug:r}),n()}},{path:"/riddle/:slug",name:"riddle",component:()=>n.e(994).then(n.bind(n,2994)),beforeEnter:async(e,t,n)=>{try{const t=null;L(t)||await P.dispatch("getItems",{type:"categories",params:t});const r=e.params.slug;console.log(r),await P.dispatch("getItemBySlug",{type:"riddle",name:"post",slug:r}),n()}catch(r){console.error("Error fetching post:",r),n(!1)}}},{path:"/joke/:slug",name:"joke",component:()=>n.e(197).then(n.bind(n,4197)),beforeEnter:async(e,t,n)=>{try{const t=null;L(t)||await P.dispatch("getItems",{type:"categories",params:t});const r=e.params.slug;console.log(r),await P.dispatch("getItemBySlug",{type:"joke",name:"post",slug:r}),n()}catch(r){console.error("Error fetching post:",r),n(!1)}}},{path:"/:slug",name:"article",component:()=>n.e(833).then(n.bind(n,7833)),beforeEnter:async(e,t,n)=>{try{const t=null;L(t)||await P.dispatch("getItems",{type:"categories",params:t});const r=e.params.slug;await P.dispatch("getItemBySlug",{type:"posts",name:"post",slug:r}),n()}catch(r){console.error("Error fetching post:",r),n(!1)}}}],D=new h.Ay({mode:"history",routes:R,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var M=D,T=n(4367);const N=(0,T.c)();r.Ay.prototype.$api=x,r.Ay.config.productionTip=!1,new r.Ay({vuetify:g,router:M,head:N,store:P,render:e=>e(m)}).$mount("#app")},8823:function(e,t,n){e.exports=n.p+"img/main.a709e793.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{33:"dcdf3559",34:"bb7ba516",173:"73931799",176:"a5a49e1b",197:"f8e7b24e",208:"92441fc4",217:"ded3e11a",315:"3d05f283",360:"07d5475a",402:"5208227d",414:"65ac2f11",453:"0c44efb6",457:"81496929",478:"54d84e4b",553:"40da0982",663:"4a330beb",672:"d9e604b4",693:"cd749e85",696:"49cc4070",715:"a560e54d",795:"126ae1bf",805:"1a1b7038",821:"ddbb8dfa",833:"4cfd2b6e",838:"4e70211c",841:"d84fe119",937:"2953ec90",979:"8c0c420b",994:"ba41381c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{33:"627c3b3b",34:"7b08a244",176:"1ea902a5",197:"1f096495",208:"65b7268b",217:"c71ac9dd",315:"7948cf3e",360:"229f18c8",402:"bd2eb52a",414:"627c3b3b",453:"d21c5e8a",457:"63802fdd",478:"acfe0bc8",553:"2890542d",672:"efbf2a45",693:"efe84f82",696:"fde0df99",715:"ec2afb11",795:"618c13f7",805:"eab9c733",821:"7f92aaa5",833:"2078ac11",937:"1231ed2f",979:"6219c2e5",994:"efbf2a45"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-theme:";n.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){i=p;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/wp-content/themes/vue-theme/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var i=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=i,s.parentNode&&s.parentNode.removeChild(s),a(c)}};return s.onerror=s.onload=i,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return o();e(r,i,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={33:1,34:1,176:1,197:1,208:1,217:1,315:1,360:1,402:1,414:1,453:1,457:1,478:1,553:1,672:1,693:1,696:1,715:1,795:1,805:1,821:1,833:1,937:1,979:1,994:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(t&&t(r);l<s.length;l++)a=s[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkvue_theme"]=self["webpackChunkvue_theme"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5856)}));r=n.O(r)})();
//# sourceMappingURL=app.06db2a69.js.map