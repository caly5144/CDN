(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1559:function(t,e,n){"use strict";n.r(e);var o={name:"SearchHelp",head:function(){return this.$store.state.currentTool.head},data:function(){return{keyword:"",results:"",type:"baidu",typeList:{google:"谷歌",baidu:"百度",pornhub:"Pornhub",github:"GitHub"},loading:!1}},computed:{url:function(){return"".concat("https://miku.tools","/o/search_help?s=").concat(this.type,"&k=").concat(encodeURIComponent(this.keyword))}},methods:{go:function(){if(this.loading)return!1;this.keyword?this.results=this.url:this.$swal({type:"error",title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search_help"},[n("nya-container",{attrs:{title:"帮你百度"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入要搜索的内容",placeholder:"MikuTools是什么？",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(e)}},model:{value:t.keyword,callback:function(e){t.keyword="string"==typeof e?e.trim():e},expression:"keyword"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.go}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),n("nya-select",{staticClass:"mt-15",attrs:{fullwidth:"",items:t.typeList,label:"选择搜索引擎"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),t.results?n("nya-container",{attrs:{title:"获取成功"}},[n("a",{attrs:{href:t.results,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.results)+"\n        ")])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("沙雕网友问的问题太简单，不想回答？这个时候就可以使用这个工具教他百度啦ww")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);