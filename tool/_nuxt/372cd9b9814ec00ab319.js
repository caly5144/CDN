(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1487:function(t,o,e){"use strict";var r=e(423);e.n(r).a},1488:function(t,o,e){(t.exports=e(3)(!1)).push([t.i,".rich_text_editor .ql-editor{min-height:18.75rem;max-height:37.5rem;background-color:var(--t2)}.rich_text_editor .ql-toolbar{border-color:var(--t1);background-color:var(--t2)}.rich_text_editor .ql-toolbar .ql-formats .ql-fill{fill:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-stroke{stroke:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-picker{color:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-active{color:var(--theme)}.rich_text_editor .ql-toolbar .ql-formats .ql-active .ql-fill{fill:var(--theme)}.rich_text_editor .ql-toolbar .ql-formats .ql-active .ql-stroke{stroke:var(--theme)}.rich_text_editor .ql-container.ql-snow{border-color:var(--t1)}.rich_text_editor .nya-btn{margin:.9375rem 0}.rich_text_editor .quill-code{width:100%;border:none;height:auto}.rich_text_editor .quill-code>code{box-sizing:border-box;display:block;width:100%;margin:0;padding:1rem;border:.0625rem solid var(--t1);border-radius:0;min-height:10rem;overflow-y:auto;resize:vertical}",""])},1558:function(t,o,e){"use strict";e.r(o);e(1477),e(1479),e(1481);var r=e(409),l=e.n(r),n=(e(1483),{name:"RichTextEditor",head:function(){return this.$store.state.currentTool.head},components:{quillEditor:e(1485).quillEditor},data:function(){return{showCode:!1,content:'<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>',editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]],syntax:{highlight:function(text){return l.a.highlightAuto(text).value}}}}}},computed:{editor:function(){return this.$refs.myTextEditor.quill},contentCode:function(){return l.a.highlightAuto(this.content).value}},mounted:function(){this.content="<h2>MikuTools - 一个轻量的工具集合</h2>"},methods:{}}),c=(e(1487),e(2)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"rich_text_editor"},[e("client-only",[e("quill-editor",{ref:"myTextEditor",attrs:{options:t.editorOption},model:{value:t.content,callback:function(o){t.content=o},expression:"content"}}),t._v(" "),e("button",{staticClass:"nya-btn",on:{click:function(o){t.showCode=!t.showCode}}},[t._v("\n            "+t._s(t.showCode?"隐藏":"显示")+" HTML 代码\n        ")]),t._v(" "),t.showCode?e("div",{staticClass:"quill-code"},[e("code",{staticClass:"hljs xml",domProps:{innerHTML:t._s(t.contentCode)}})]):t._e()],1)],1)}),[],!1,null,null,null);o.default=component.exports},423:function(t,o,e){var content=e(1488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("24386302",content,!0,{sourceMap:!1})}}]);