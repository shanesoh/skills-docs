(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{402:function(t,a,e){"use strict";e.r(a);var s={name:"FormAndPki",props:{pkiPath:{type:String,required:!0},formPath:{type:String,required:!0}},data:function(){return{tabItems:[]}},mounted:function(){this.tabItems=this.getNavItems()},methods:{getNavItems:function(){var t=[{name:"<b>PKI Auth</b> Install",path:this.pkiPath,icon:"fas fa-key",helpUrl:"/dashboard/install-guide/installModes.html#pki-auth-mode"},{name:"<b>Password Auth</b> Install",path:this.formPath,icon:"fab fa-wpforms",helpUrl:"/dashboard/install-guide/installModes.html#password-auth-mode"}];return"form"===this.$themeConfig.installType&&(t=t.reverse()),t}}},n=e(43),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-3"},[e("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.tabItems,(function(a){return e("b-tab",{key:a.name,scopedSlots:t._u([{key:"title",fn:function(){return[e("i",{staticClass:"mr-1",class:a.icon}),t._v(" "),e("span",{domProps:{innerHTML:t._s(a.name)}})]},proxy:!0}],null,!0)},[e("div",{staticClass:"text-right text-secondary",staticStyle:{"font-size":"0.8rem"}},[t._v("Visit to learn about this mode:\n                "),e("a",{attrs:{href:t.$withBase(a.helpUrl),target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(a.name)}}),t._v(" "),e("i",{staticClass:"fas fa-external-link-alt"})])]),t._v(" "),t._v(" "),e("import-content",{attrs:{path:a.path}})],1)})),1)],1)}),[],!1,null,"d40629f2",null);a.default=i.exports}}]);