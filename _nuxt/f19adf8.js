(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{459:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("50b6315a",content,!0,{sourceMap:!1})},492:function(t,e,r){"use strict";r(459)},493:function(t,e,r){var n=r(15)(!1);n.push([t.i,"article[data-v-f21d626c]:after{margin-bottom:50px}.morePosts[data-v-f21d626c]{cursor:pointer;border:1px solid var(--v-anchor-base);padding:8px;width:100%}.morePosts[data-v-f21d626c]:hover{background-color:var(--v-anchor-base);opacity:.8}",""]),t.exports=n},532:function(t,e,r){"use strict";r.r(e);r(42),r(3),r(57),r(44),r(23),r(10),r(59),r(63),r(45);var n=r(2),o=r(82),c=r(27);r(99),r(30),r(54),r(29);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,f,d,v,m,article,y,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).sortBy("createdAt","desc").limit(6).fetch();case 3:f=e.sent,d={},v=l(f),e.prev=6,v.s();case 8:if((m=v.n()).done){e.next=17;break}return article=m.value,e.next=12,r("tags").only(["name","slug"]).fetch();case 12:y=e.sent,h=Object.assign.apply(Object,[{}].concat(Object(o.a)(y.map((function(s){return Object(n.a)({},s.name,s)}))))),d[article.slug]=h;case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(6),v.e(e.t0);case 22:return e.prev=22,v.f(),e.finish(22);case 25:return e.abrupt("return",{articles:f,articleTagMap:d});case 26:case"end":return e.stop()}}),e,null,[[6,19,22,25]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},v=(r(492),r(98)),m=r(129),y=r.n(m),h=r(525),w=r(526),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.articles,(function(article){return r("articlePreview",{attrs:{article:article}})})),t._v(" "),r("v-row",[r("v-col",{staticClass:"nextPrevLink next",attrs:{lg:12}},[r("NuxtLink",{staticClass:"morePosts",staticStyle:{cursor:"pointer"},attrs:{to:"/posts",tag:"button"}},[t._v("More Posts")])],1)],1)],2)}),[],!1,null,"f21d626c",null);e.default=component.exports;y()(component,{VCol:h.a,VRow:w.a})}}]);