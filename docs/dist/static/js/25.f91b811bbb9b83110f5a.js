webpackJsonp([25],{"faE+":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("go92"),n=a.n(e),i={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{single:!1}}},o={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("Radio",{model:{value:s.single,callback:function(t){s.single=t},expression:"single"}},[s._v("Radio")])]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(2)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-单独使用1"}},[this._v("单独使用")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("使用 v-model 可以双向绑定数据。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"vue-doc-element"},[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"single"')]),s._v(">")]),s._v("Radio"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),a("span",{staticClass:"hljs-attr"},[s._v("single")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n            }\n        }\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]};var l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{phone:"apple",animal:"爪哇犀牛"}}},c={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("RadioGroup",{model:{value:s.phone,callback:function(t){s.phone=t},expression:"phone"}},[a("Radio",{attrs:{label:"apple"}},[a("Icon",{attrs:{type:"logo-apple"}}),s._v(" "),a("span",[s._v("Apple")])],1),s._v(" "),a("Radio",{attrs:{label:"android"}},[a("Icon",{attrs:{type:"logo-android"}}),s._v(" "),a("span",[s._v("Android")])],1),s._v(" "),a("Radio",{attrs:{label:"windows"}},[a("Icon",{attrs:{type:"logo-windows"}}),s._v(" "),a("span",[s._v("Windows")])],1)],1),s._v(" "),a("RadioGroup",{model:{value:s.animal,callback:function(t){s.animal=t},expression:"animal"}},[a("Radio",{attrs:{label:"金斑蝶"}}),s._v(" "),a("Radio",{attrs:{label:"爪哇犀牛"}}),s._v(" "),a("Radio",{attrs:{label:"印度黑羚"}})],1)]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(3)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-组合使用1"}},[this._v("组合使用")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("设置按钮形状和图标。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-使用radiogroup实现一组互斥的选项组1"}},[this._v("使用RadioGroup实现一组互斥的选项组")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-content"},[t("p",{staticClass:"vue-doc-element"},[this._v("在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"vue-doc-element"},[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("RadioGroup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"phone"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"apple"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"logo-apple"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Icon")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("Apple"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"android"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"logo-android"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Icon")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("Android"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"windows"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"logo-windows"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Icon")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("Windows"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("RadioGroup")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("RadioGroup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"animal"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"金斑蝶"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"爪哇犀牛"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"印度黑羚"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Radio")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("RadioGroup")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),a("span",{staticClass:"hljs-attr"},[s._v("phone")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'apple'")]),s._v(",\n                "),a("span",{staticClass:"hljs-attr"},[s._v("animal")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'爪哇犀牛'")]),s._v("\n            }\n        }\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]};var v={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{demobasic:a("D8HT")(i,o,!1,function(s){a("jHQo")},null,null).exports,demoshapes:a("D8HT")(l,c,!1,function(s){a("gGXm")},null,null).exports}}]},_={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{staticClass:"vue-doc-components"},[a("demobasic"),s._v(" "),a("demoshapes")],1),s._v(" "),s._m(3),s._v(" "),s._m(4)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-submenu"},[t("ul",{staticClass:"vue-doc-submenu-list"},[t("li",[t("a",{attrs:{href:"#vue-doc-单独使用1"}},[this._v("单独使用")])]),t("li",[t("a",{attrs:{href:"#vue-doc-组合使用1"}},[this._v("组合使用")])])]),t("ul",{staticClass:"vue-doc-submenu-list-EN"},[t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),t("li",[t("a",{attrs:{href:"#vue-doc-使用RadioGroup实现一组互斥的选项组1"}},[this._v("使用RadioGroup实现一组互斥的选项组")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button按钮1"}},[this._v("Button 按钮")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("基础组件，触发业务逻辑时使用。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button1"}},[this._v("Button")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Basic component that is used to trigger bussiness logic.")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-content"},[a("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),a("table",{staticClass:"vue-doc-element"},[a("thead",[a("tr",[a("th",[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("String")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-content-EN"},[a("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),a("table",{staticClass:"vue-doc-element"},[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("Explanation")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Type")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("String")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])])])}]};var d=a("D8HT")(v,_,!1,function(s){a("z2FF")},null,null);t.default=d.exports},gGXm:function(s,t){},jHQo:function(s,t){},z2FF:function(s,t){}});
//# sourceMappingURL=25.f91b811bbb9b83110f5a.js.map