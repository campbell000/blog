(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{333:function(t,e,n){"use strict";var r=n(337),o=n(338);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},337:function(t,e,n){"use strict";var r=n(4),o=n(7),c=n(100),l=n(41),f=n(222),d=n(221),v=n(220),y=n(20),h=n(5),O=n(148),j=n(101),w=n(151);t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),S=m?"set":"add",k=o[t],C=k&&k.prototype,P=k,E={},z=function(t){var e=C[t];l(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!y(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!y(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!y(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof k||!(x||C.forEach&&!h((function(){(new k).entries().next()})))))P=n.getConstructor(e,t,m,S),f.REQUIRED=!0;else if(c(t,!0)){var D=new P,N=D[S](x?{}:-0,1)!=D,_=h((function(){D.has(1)})),B=O((function(t){new k(t)})),F=!x&&h((function(){for(var t=new k,e=5;e--;)t[S](e,e);return!t.has(-0)}));B||((P=e((function(e,n){v(e,P,t);var r=w(new k,e,P);return null!=n&&d(n,r[S],r,m),r}))).prototype=C,C.constructor=P),(_||F)&&(z("delete"),z("has"),m&&z("get")),(F||N)&&z(S),x&&C.clear&&delete C.clear}return E[t]=P,r({global:!0,forced:P!=k},E),j(P,t),x||n.setStrong(P,t,m),P}},338:function(t,e,n){"use strict";var r=n(33).f,o=n(81),c=n(224),l=n(82),f=n(220),d=n(221),v=n(149),y=n(150),h=n(24),O=n(222).fastKey,j=n(75),w=j.set,m=j.getterFor;t.exports={getConstructor:function(t,e,n,v){var y=t((function(t,r){f(t,y,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=r&&d(r,t[v],t,n)})),j=m(e),x=function(t,e,n){var r,o,c=j(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=O(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),h?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=j(t),o=O(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y.prototype,{clear:function(){for(var t=j(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=j(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),h?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=j(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(y.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),h&&r(y.prototype,"size",{get:function(){return j(this).size}}),y},setStrong:function(t,e,n){var r=e+" Iterator",o=m(e),c=m(r);v(t,e,(function(t,e){w(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),y(e)}}},366:function(t,e,n){"use strict";n.r(e);var r=n(72),o=n(99),c=n.n(o),l=(n(13),n(17),n(14),n(74),n(98),n(119),n(333),n(59),n(31),n(32),n(18),n(6),n(26),n(50),n(58),n(55),n(19),n(51),n(3)),f=(n(223),n(0)),d=n(111),v=n(2);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],j=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=O.reduce((function(t,e){return t["offset"+Object(v.m)(e)]={type:[String,Number],default:null},t}),{}),m=O.reduce((function(t,e){return t["order"+Object(v.m)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(j),offset:Object.keys(w),order:Object.keys(m)};function S(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map,C=f.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var f=k.get(o);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(l.a)(t,"col-".concat(n.cols),n.cols),Object(l.a)(t,"offset-".concat(n.offset),n.offset),Object(l.a)(t,"order-".concat(n.order),n.order),Object(l.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(o,f)}(),t(n.tag,Object(d.a)(data,{class:f}),r)}});n(38),n(80);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=["sm","md","lg","xl"],D=["start","end","center"];function N(t,e){return z.reduce((function(n,r){return n[t+Object(v.m)(r)]=e(),n}),{})}var _=function(t){return[].concat(D,["baseline","stretch"]).includes(t)},B=N("align",(function(){return{type:String,default:null,validator:_}})),F=function(t){return[].concat(D,["space-between","space-around"]).includes(t)},J=N("justify",(function(){return{type:String,default:null,validator:F}})),M=function(t){return[].concat(D,["space-between","space-around","stretch"]).includes(t)},L=N("alignContent",(function(){return{type:String,default:null,validator:M}})),R={align:Object.keys(B),justify:Object.keys(J),alignContent:Object.keys(L)},V={align:"align",justify:"justify",alignContent:"align-content"};function G(t,e,n){var r=V[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var I=new Map,W=f.a.extend({name:"v-row",functional:!0,props:E(E(E({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},B),{},{justify:{type:String,default:null,validator:F}},J),{},{alignContent:{type:String,default:null,validator:M}},L),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var f=I.get(o);return f||function(){var t,e;for(e in f=[],R)R[e].forEach((function(t){var r=n[t],o=G(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(l.a)(t,"align-".concat(n.align),n.align),Object(l.a)(t,"justify-".concat(n.justify),n.justify),Object(l.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),I.set(o,f)}(),t(n.tag,Object(d.a)(data,{staticClass:"row",class:f}),r)}}),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),this._v(" "),e("blockquote",{staticClass:"blockquote"},[this._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[this._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:C,VRow:W})}}]);