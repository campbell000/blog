(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{350:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("22ee8468",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(350)},352:function(t,e,n){(e=n(20)(!1)).push([t.i,"div.tagContainer[data-v-1523fd50]{padding-top:7px;padding-bottom:15px}.pressedTag[data-v-1523fd50]{color:#fff!important}.postDate[data-v-1523fd50]{font-style:italic;color:#777}.articleListItem[data-v-1523fd50]{margin-bottom:30px}",""]),t.exports=e},354:function(t,e,n){"use strict";n.r(e);var r={props:{articles:{type:Array,default:function(){return null}},allTags:{type:Array,default:function(){return null}},selectedTag:{type:Object,default:function(){return null}}},methods:{formatDate:function(t){var e=new Date(t),n=e.getDate(),r=e.getMonth()+1;return e.getFullYear()+"-"+(r<=9?"0"+r:r)+"-"+(n<=9?"0"+n:n)}}},l=(n(351),n(77)),c=n(106),o=n.n(c),d=n(347),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tagContainer"},[t._v("\n    Tags: "),t._l(t.allTags,(function(e){return n("span",{key:e.name},[null!=t.selectedTag&&e.slug==t.selectedTag.slug?n("v-btn",{staticClass:"ma-2 pressedTag",attrs:{nuxt:"",to:"/posts/"+e.slug,depressed:"",small:"",color:"primary"}},[t._v(t._s(e.name))]):t._e(),t._v(" "),null==t.selectedTag||e.slug!=t.selectedTag.slug?n("v-btn",{staticClass:"ma-2",attrs:{nuxt:"",to:"/posts/"+e.slug,outlined:"",small:"",color:"primary"}},[t._v(t._s(e.name))]):t._e()],1)}))],2),t._v(" "),n("ul",{staticStyle:{"list-style":"none"}},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"articleListItem"},[n("div",[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("h2",[t._v(t._s(article.title))])]),t._v(" "),n("div",{staticClass:"postDate"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),n("div",{staticClass:"postSummary"},[t._v(t._s(article.summary))])],1)])})),0)])}),[],!1,null,"1523fd50",null);e.default=component.exports;o()(component,{VBtn:d.a})},379:function(t,e,n){"use strict";n.r(e);n(27),n(78);var r=n(16),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("tags").fetch();case 3:return l=e.sent,e.next=6,n("tags").where({slug:{$contains:r.tag}}).limit(1).fetch();case 6:return c=e.sent,o=c.length>0?c[0]:{},e.next=10,n("articles",r.slug).where({tags:{$contains:o.name}}).sortBy("createdAt","desc").fetch();case 10:return d=e.sent,e.abrupt("return",{articles:d,tag:o,tags:l});case 12:case"end":return e.stop()}}),e)})))()}},c=n(77),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("PostList",{attrs:{articles:this.articles,selectedTag:this.tag,allTags:this.tags}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostList:n(354).default})}}]);