(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{383:function(t,e,n){var content=n(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("00494ae8",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n(383)},385:function(t,e,n){(e=n(16)(!1)).push([t.i,"div.tagContainer[data-v-240f2a2e]{padding-top:7px;padding-bottom:15px}.pressedTag[data-v-240f2a2e]{color:#fff!important}.postDate[data-v-240f2a2e]{font-style:italic;color:#777}.articleListItem[data-v-240f2a2e]{margin-bottom:30px}.listContainer[data-v-240f2a2e]{margin-bottom:130px}",""]),t.exports=e},387:function(t,e,n){"use strict";n.r(e);var r={props:{articles:{type:Array,default:function(){return null}},allTags:{type:Array,default:function(){return null}},selectedTag:{type:Object,default:function(){return null}}},methods:{formatDate:function(t){var e=new Date(t),n=e.getDate(),r=e.getMonth()+1;return e.getFullYear()+"-"+(r<=9?"0"+r:r)+"-"+(n<=9?"0"+n:n)}}},l=(n(384),n(70)),o=n(87),c=n.n(o),f=n(251),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tagContainer"},[t._v("\n    Tags: "),t._l(t.allTags,(function(e){return n("span",{key:e.name},[null!=t.selectedTag&&e.slug==t.selectedTag.slug?n("v-btn",{staticClass:"ma-2 pressedTag",attrs:{nuxt:"",to:"/posts/"+e.slug,depressed:"",small:"",color:"primary"}},[t._v(t._s(e.name))]):t._e(),t._v(" "),null==t.selectedTag||e.slug!=t.selectedTag.slug?n("v-btn",{staticClass:"ma-2",attrs:{nuxt:"",to:"/posts/"+e.slug,outlined:"",small:"",color:"primary"}},[t._v(t._s(e.name))]):t._e()],1)}))],2),t._v(" "),n("ul",{staticClass:"listContainer",staticStyle:{"list-style":"none"}},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"articleListItem"},[n("div",[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("h2",[t._v(t._s(article.title))])]),t._v(" "),n("div",{staticClass:"postDate"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),n("div",{staticClass:"postSummary"},[t._v(t._s(article.summary))])],1)])})),0)])}),[],!1,null,"240f2a2e",null);e.default=component.exports;c()(component,{VBtn:f.a})},410:function(t,e,n){"use strict";n.r(e);n(86);var r=n(22),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","summary","createdAt","slug"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.next=6,n("tags").fetch();case 6:return o=e.sent,e.abrupt("return",{articles:l,tags:o});case 8:case"end":return e.stop()}}),e)})))()}},o=n(70),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("PostList",{attrs:{articles:this.articles,allTags:this.tags}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostList:n(387).default})}}]);