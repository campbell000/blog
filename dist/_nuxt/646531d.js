(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{182:function(t,e,o){var content=o(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("7388ab72",content,!0,{sourceMap:!1})},184:function(t,e,o){var content=o(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("56b15182",content,!0,{sourceMap:!1})},219:function(t,e,o){"use strict";var n={data:function(){return{title:"Blog Title Goes Here"}}},r=(o(261),o(72)),l=o(99),c=o.n(l),d=o(321),h=o(323),f=o(324),x=o(322),v=o(215),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-app-bar",{attrs:{color:"#fffefb",app:""}},[e("div",{staticClass:"titleContentContainer"},[e("NuxtLink",{staticClass:"mainTitleClass",class:"/"==this.$nuxt.$route.path?"selected":"unselected",staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[e("v-toolbar-title",{domProps:{textContent:this._s(this.title)}})],1),this._v(" "),e("NuxtLink",{staticClass:"secondaryMenuClass",class:"/posts"==this.$nuxt.$route.path?"selected":"unselected",staticStyle:{cursor:"pointer"},attrs:{to:"/posts",tag:"span"}},[e("v-toolbar-title",{domProps:{textContent:this._s("All Posts")}})],1),this._v(" "),e("NuxtLink",{staticClass:"secondaryMenuClass",class:"/about"==this.$nuxt.$route.path?"selected":"unselected",staticStyle:{cursor:"pointer"},attrs:{to:"/about",tag:"span"}},[e("v-toolbar-title",{domProps:{textContent:this._s("About")}})],1)],1)]),this._v(" "),e("v-main",[e("v-container",[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:h.a,VContainer:f.a,VMain:x.a,VToolbarTitle:v.a})},229:function(t,e,o){o(230),t.exports=o(231)},253:function(t,e,o){"use strict";o(182)},254:function(t,e,o){(e=o(29)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},261:function(t,e,o){"use strict";o(184)},262:function(t,e,o){(e=o(29)(!1)).push([t.i,".titleContentContainer{width:100%;margin-left:auto;margin-right:auto;max-width:1000px;display:inherit}.container:not(.ignoreMaxWidth){max-width:900px}.mainTitleClass{font-weight:700;color:#4a8183}.mainTitleClass:hover,.selected.mainTitleClass{border-bottom:2px solid #4a8183}.unselected{border-bottom:2px solid transparent}.secondaryMenuClass:hover,.selected.secondaryMenuClass{border-bottom:2px solid #523a47}.secondaryMenuClass{margin-left:30px;color:#523a47}.v-application code{background-color:#daf7ea;color:#437274}",""]),t.exports=e},64:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(253),o(72)),l=o(99),c=o.n(l),d=o(321),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[229,12,2,13]]]);