(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{325:function(t,e,l){var content=l(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(30).default)("42d9506a",content,!0,{sourceMap:!1})},326:function(t,e,l){"use strict";l(325)},327:function(t,e,l){(e=l(29)(!1)).push([t.i,"div.tagContainer[data-v-28978ae3]{padding-top:7px;padding-bottom:15px}.pressedTag[data-v-28978ae3]{color:#fff!important}",""]),t.exports=e},329:function(t,e,l){"use strict";l.r(e);var n={props:{articles:{type:Array,default:function(){return null}},allTags:{type:Array,default:function(){return null}},selectedTag:{type:Object,default:function(){return null}}},methods:{formatDate:function(t){var e=new Date(t),l=e.getDate(),n=e.getMonth()+1;return e.getFullYear()+"-"+(n<=9?"0"+n:n)+"-"+(l<=9?"0"+l:l)}}},r=(l(326),l(72)),o=l(99),c=l.n(o),d=l(364),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"tagContainer"},[t._v("\n    Tags: "),t._l(t.allTags,(function(e){return l("span",{key:e.name},[null!=t.selectedTag&&e.slug==t.selectedTag.slug?l("v-btn",{staticClass:"ma-2 pressedTag",attrs:{nuxt:"",to:"/posts/"+e.slug,depressed:"",small:"",color:"#437274"}},[t._v(t._s(e.name))]):t._e(),t._v(" "),null==t.selectedTag||e.slug!=t.selectedTag.slug?l("v-btn",{staticClass:"ma-2",attrs:{nuxt:"",to:"/posts/"+e.slug,outlined:"",small:"",color:"#437274"}},[t._v(t._s(e.name))]):t._e()],1)}))],2),t._v(" "),l("ul",{staticStyle:{"list-style":"none"}},t._l(t.articles,(function(article){return l("li",{key:article.slug},[l("div",[l("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[l("h2",[t._v(t._s(article.title))])]),t._v(" "),l("p",[t._v(t._s(t.formatDate(article.createdAt))+" -- "+t._s(article.summary))])],1)])})),0)])}),[],!1,null,"28978ae3",null);e.default=component.exports;c()(component,{VBtn:d.a})}}]);