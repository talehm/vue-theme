(self["webpackChunkvue_theme"]=self["webpackChunkvue_theme"]||[]).push([[715],{5715:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var r=n(5474),i=n(2987),o=n(1075),u=n(3841),c=n(5937),a=function(){var t=this,e=t._self._c;return e(r.A,[e(c.A,{attrs:{label:"Search...",clearable:"",outlined:"",dense:"","prepend-inner-icon":"mdi-magnify"},on:{input:t.onSearch},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t.filteredResults.length?e(i.A,t._l(t.filteredResults,(function(n){return e(o.A,{key:n.id,attrs:{to:`/definition/${n.slug}`,link:""}},[e(u.pr,[e(u.UZ,{domProps:{innerHTML:t._s(t.highlightMatch(n.title))}})],1)],1)})),1):""!=t.query&&0===t.filteredResults.length?e("p",[t._v("No results found.")]):t._e()],1)},f=[],l=(n(1454),n(8221)),s=n.n(l),p={name:"SearchBar",data(){return{query:"",filteredResults:[],apiUrl:"https://trueandfiction.com/wp-json/wp/v2/definition"}},methods:{onSearch:s()((async function(){if(""!==this.query.trim())try{const t=await fetch(`${this.apiUrl}?search=${encodeURIComponent(this.query)}&per_page=10`),e=await t.json();this.filteredResults=e.map((t=>({id:t.id,title:t.title.rendered,slug:t.slug})))}catch(t){console.error("Error fetching data:",t)}else this.filteredResults=[]}),300),highlightMatch(t){const e=new RegExp(`(${this.query})`,"gi");return t.replace(e,'<span style="background-color: yellow;">$1</span>')}}},v=p,d=n(1656),h=(0,d.A)(v,a,f,!1,null,"0358c4c6",null),y=h.exports},1873:function(t,e,n){var r=n(9325),i=r.Symbol;t.exports=i},2552:function(t,e,n){var r=n(1873),i=n(659),o=n(9350),u="[object Null]",c="[object Undefined]",a=r?r.toStringTag:void 0;function f(t){return null==t?void 0===t?c:u:a&&a in Object(t)?i(t):o(t)}t.exports=f},4128:function(t,e,n){var r=n(1800),i=/^\s+/;function o(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=o},4840:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},659:function(t,e,n){var r=n(1873),i=Object.prototype,o=i.hasOwnProperty,u=i.toString,c=r?r.toStringTag:void 0;function a(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(a){}var i=u.call(t);return r&&(e?t[c]=n:delete t[c]),i}t.exports=a},9350:function(t){var e=Object.prototype,n=e.toString;function r(t){return n.call(t)}t.exports=r},9325:function(t,e,n){var r=n(4840),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},1800:function(t){var e=/\s/;function n(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=n},8221:function(t,e,n){var r=n(6186),i=n(124),o=n(9374),u="Expected a function",c=Math.max,a=Math.min;function f(t,e,n){var f,l,s,p,v,d,h=0,y=!1,g=!1,m=!0;if("function"!=typeof t)throw new TypeError(u);function b(e){var n=f,r=l;return f=l=void 0,h=e,p=t.apply(r,n),p}function x(t){return h=t,v=setTimeout(O,e),y?b(t):p}function j(t){var n=t-d,r=t-h,i=e-n;return g?a(i,s-r):i}function w(t){var n=t-d,r=t-h;return void 0===d||n>=e||n<0||g&&r>=s}function O(){var t=i();if(w(t))return S(t);v=setTimeout(O,j(t))}function S(t){return v=void 0,m&&f?b(t):(f=l=void 0,p)}function T(){void 0!==v&&clearTimeout(v),h=0,f=d=l=v=void 0}function _(){return void 0===v?p:S(i())}function k(){var t=i(),n=w(t);if(f=arguments,l=this,d=t,n){if(void 0===v)return x(d);if(g)return clearTimeout(v),v=setTimeout(O,e),b(d)}return void 0===v&&(v=setTimeout(O,e)),p}return e=o(e)||0,r(n)&&(y=!!n.leading,g="maxWait"in n,s=g?c(o(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m),k.cancel=T,k.flush=_,k}t.exports=f},6186:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},346:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},4394:function(t,e,n){var r=n(2552),i=n(346),o="[object Symbol]";function u(t){return"symbol"==typeof t||i(t)&&r(t)==o}t.exports=u},124:function(t,e,n){var r=n(9325),i=function(){return r.Date.now()};t.exports=i},9374:function(t,e,n){var r=n(4128),i=n(6186),o=n(4394),u=NaN,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt;function s(t){if("number"==typeof t)return t;if(o(t))return u;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=a.test(t);return n||f.test(t)?l(t.slice(2),n?2:8):c.test(t)?u:+t}t.exports=s}}]);
//# sourceMappingURL=715.a560e54d.js.map