(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{386:function(t,e,n){var content=n(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("41cd4948",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n(386)},389:function(t,e,n){(e=n(16)(!1)).push([t.i,".nextPrevLink.next[data-v-e6a45f38]{float:left}.nextPrevLink.previous[data-v-e6a45f38]{float:right}",""]),t.exports=e},391:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("25a03c53",content,!0,{sourceMap:!1})},392:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=(n(388),n(70)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"nextPrevLink previous",attrs:{to:{name:"slug",params:{slug:t.prev.slug}}}},[t._v("\n    Later Article: "+t._s(t.prev.title)+"\n  ")]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"nextPrevLink next",attrs:{to:{name:"slug",params:{slug:t.next.slug}}}},[t._v("\n    Earlier Article: "+t._s(t.next.title)+"\n  ")]):n("span",[t._v(" ")])],1)}),[],!1,null,"e6a45f38",null);e.default=component.exports},395:function(t,e,n){"use strict";n(391)},396:function(t,e,n){(e=n(16)(!1)).push([t.i,".titleBlock{margin-bottom:14px}.updatedAt,.writtenAt{font-style:italic;color:#888}.articleTitle{margin-bottom:0}.contentsContainer{margin-top:15px}.tags{font-style:italic;color:#888}.tag{padding-left:2px;padding-right:2px}.tagDivider{margin-left:1px;margin-right:1px}.metadata{color:#888}h1{font-weight:700;font-size:36px}.nuxt-content h2{margin-top:20px;font-weight:700;font-size:24px}.nuxt-content p{margin-bottom:20px}.imageContainer{padding-top:30px;padding-bottom:30px;width:100%;text-align:center}.imageContainer.titleImageContainer{padding-bottom:0}.tocInnerLink{list-style:circle;margin-left:20px}.imageContainer>img{width:100%;max-width:100%}.disclaimer{font-size:12px;font-style:italic;color:#888}.titleImageCaption{font-size:16px;font-style:italic;color:#888;display:block}.imageContainer>img.small,img.small{margin-left:auto;margin-right:auto;width:35%;max-width:35%}.imageContainer>img.medium,img.medium{margin-left:auto;margin-right:auto;width:55%;max-width:55%}.imageContainer.titleImageContainer>img.medium,img.medium{margin-left:auto;margin-right:auto;width:75%;max-width:75%}ul{margin-bottom:15px}article{padding-bottom:30px}",""]),t.exports=e},397:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2fbfe1b7",content,!0,{sourceMap:!1})},398:function(t,e,n){(e=n(16)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=e},409:function(t,e,n){"use strict";n.r(e);var r={props:{article:{type:Object,default:function(){return null}},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},tags:{type:Object,default:function(){return null}},inList:{type:Boolean,default:function(){return!1}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=(n(395),n(70)),o=n(87),c=n.n(o),d=(n(7),n(8),n(5),n(13),n(14),n(11),n(9),n(2));n(397);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n(35).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:m({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:m({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"titleBlock"},[n("h1",{staticClass:"articleTitle"},[t._v(t._s((t.inList,""))+t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"writtenAt"},[t._v("Written At: "+t._s(t.formatDate(t.article.createdAt)))]),t._v(" "),t.article.shouldShowUpdatedAt?n("div",{staticClass:"updatedAt"},[t._v("Last updated: "+t._s(t.formatDate(t.article.updatedAt)))]):t._e(),t._v(" "),n("div",{staticClass:"tags"},[t._v("Tags:\n      "),t._l(t.article.tags,(function(e,r){return n("span",{key:r},[null!=t.tags[e]?n("NuxtLink",{staticClass:"tag linkTag",attrs:{to:"/posts/"+t.tags[e].slug}},[t._v(t._s(t.tags[e].name))]):t._e(),t._v(" "),null==t.tags[e]?n("span",{staticClass:"tag",domProps:{textContent:t._s(e)}}):t._e(),t._v(" "),r<t.article.tags.length-1?n("span",{staticClass:"tagDivider"},[t._v(" | ")]):t._e()],1)}))],2)]),t._v(" "),n("div",{staticClass:"metadata"},[n("div",{staticClass:"summary"},[t._v(t._s(t.article.summary))])]),t._v(" "),null!=t.article.titleImage?n("div",{staticClass:"imageContainer titleImageContainer"},[n("img",{staticClass:"titleImage",class:t.article.isSmallTitleImage?"small":t.article.isMediumTitleImage?"medium":"",attrs:{src:t.article.titleImage,alt:t.article.titleImageAlt}}),t._v(" "),null!=t.article.titleImageCaption?n("span",{staticClass:"titleImageCaption",domProps:{textContent:t._s(t.article.titleImageCaption)}}):t._e()]):t._e(),t._v(" "),t.article.shouldShowTableOfContents?n("nav",{staticClass:"contentsContainer"},[n("h2",[t._v("Contents")]),t._v(" "),n("ul",t._l(t.article.toc,(function(link){return n("li",{key:link.id,class:2==link.depth?"tocLink":"tocInnerLink"},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)]):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("prev-next",{attrs:{prev:t.prev,next:t.next}}),t._v(" "),n("br"),t._v(" "),t.inList?n("v-divider"):t._e(),t._v(" "),n("br")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{PrevNext:n(392).default}),c()(component,{VDivider:f})}}]);