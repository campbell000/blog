(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(t,e,o){var content=o(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("7388ab72",content,!0,{sourceMap:!1})},213:function(t,e,o){var content=o(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("56b15182",content,!0,{sourceMap:!1})},249:function(t,e,o){"use strict";var r={data:function(){return{title:"Never Meant",isDark:this.$vuetify.theme.dark,drawer:!1,items:[{title:"Home",to:"/"},{title:"All Posts",to:"/posts"},{title:"About",to:"/about"}]}},methods:{darkMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},isMobile:function(){return this.$vuetify.breakpoint.xsOnly}}},n=(o(291),o(70)),l=o(87),c=o.n(l),d=o(374),v=o(381),m=o(375),f=o(251),h=o(376),x=o(382),_=o(377),w=o(171),k=o(172),C=o(115),V=o(173),y=o(39),D=o(378),M=o(380),A=o(141),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{attrs:{clipped:!0,"disable-resize-watcher":!0,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.items,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{dense:"",app:""}},[t.isMobile()?o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),o("div",{staticClass:"titleContentContainer"},[o("NuxtLink",{staticClass:"mainTitleClass",class:["/"==this.$nuxt.$route.path?"selected":"unselected",this.$vuetify.theme.dark?"isDark":""],staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[o("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),t.isMobile()?t._e():o("NuxtLink",{staticClass:"secondaryMenuClass",class:["/posts"==this.$nuxt.$route.path?"selected":"unselected",this.$vuetify.theme.dark?"isDark":""],staticStyle:{cursor:"pointer"},attrs:{to:"/posts",tag:"span"}},[o("v-toolbar-title",{domProps:{textContent:t._s("All Posts")}})],1),t._v(" "),t.isMobile()?t._e():o("NuxtLink",{staticClass:"secondaryMenuClass",class:["/about"==this.$nuxt.$route.path?"selected":"unselected",this.$vuetify.theme.dark?"isDark":""],staticStyle:{cursor:"pointer"},attrs:{to:"/about",tag:"span"}},[o("v-toolbar-title",{domProps:{textContent:t._s("About")}})],1),t._v(" "),o("v-btn",{staticClass:"titleIcon",attrs:{text:"",icon:""},on:{click:function(e){return t.darkMode()}}},[o("v-icon",[t._v("mdi-brightness-4")])],1)],1)],1),t._v(" "),o("v-main",[o("v-container",[o("nuxt")],1),t._v(" "),o("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[o("v-col",{attrs:{cols:"12"}},[o("a",{attrs:{href:"https://www.buymeacoffee.com/acsimpledex"}},[o("img",{attrs:{src:"https://img.buymeacoffee.com/button-api/?text=Support this site&emoji=💻&slug=acsimpledex&button_colour=FF5F5F&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"}})]),t._v(" "),o("br"),t._v("\n    Questions or Comments? "),o("a",{attrs:{href:"mailto:ac.simpledex@gmail.com"}},[t._v("Let me know")])])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:f.a,VCol:h.a,VContainer:x.a,VFooter:_.a,VIcon:w.a,VList:k.a,VListItem:C.a,VListItemAction:V.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:D.a,VNavigationDrawer:M.a,VToolbarTitle:A.a})},250:function(t,e,o){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-chart-bubble",title:"About",to:"/author"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},n=o(70),l=o(87),c=o.n(l),d=o(374),v=o(381),m=o(375),f=o(251),h=o(382),x=o(377),_=o(171),w=o(172),k=o(115),C=o(173),V=o(39),y=o(378),D=o(380),M=o(379),A=o(141),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.items,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[o("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[o("v-icon",[t._v("mdi-application")])],1),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[o("v-icon",[t._v("mdi-minus")])],1),t._v(" "),o("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[o("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),o("v-main",[o("v-container",[o("nuxt")],1)],1),t._v(" "),o("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[o("v-list",[o("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[o("v-list-item-action",[o("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),o("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),o("v-footer",{attrs:{absolute:!t.fixed,app:""}},[o("span",[t._v("© Alex Campbell "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:h.a,VFooter:x.a,VIcon:_.a,VList:w.a,VListItem:k.a,VListItemAction:C.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:y.a,VNavigationDrawer:D.a,VSpacer:M.a,VToolbarTitle:A.a})},259:function(t,e,o){o(260),t.exports=o(261)},283:function(t,e,o){"use strict";o(211)},284:function(t,e,o){(e=o(16)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},291:function(t,e,o){"use strict";o(213)},292:function(t,e,o){(e=o(16)(!1)).push([t.i,".titleContentContainer{width:100%;margin-left:auto;margin-right:auto;display:inherit}.container:not(.ignoreMaxWidth),.titleContentContainer{max-width:700px;overflow-x:hidden}.mainTitleClass{font-weight:700;color:#4a8183}.mainTitleClass:hover,.selected.mainTitleClass{border-bottom:2px solid #4a8183}.mainTitleClass.isDark{color:#7fc3b0}.mainTitleClass.isDark:hover,.selected.mainTitleClass.isDark{box-sizing:border-box;border-bottom:2px solid #7fc3b0}.unselected{box-sizing:border-box;border-bottom:2px solid transparent}.secondaryMenuClass:hover,.selected.secondaryMenuClass{box-sizing:border-box;border-bottom:2px solid #523a47}.secondaryMenuClass{margin-left:30px;color:#523a47}.secondaryMenuClass.isDark:hover,.selected.secondaryMenuClass.isDark{border-bottom:2px solid #997e8c}.secondaryMenuClass.isDark{color:#997e8c}.titleIcon{height:24px!important;margin-top:4px;margin-left:15px}:not(pre)>.v-application code,pre.language-text.line-numbers{background-color:#daf7ea;color:#437274}html{overflow-x:hidden;width:100%}pre>code{padding-left:0!important}",""]),t.exports=e},78:function(t,e,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(283),o(70)),l=o(87),c=o.n(l),d=o(374),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[259,11,1,12]]]);