(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{398:function(e,t,s){"use strict";s.r(t);var r=s(43),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("In "),s("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html#passwordauth-mode"}},[e._v("Password Auth Installation")]),e._v(", the OAuth2 protocol is utilized, you will need to:")],1),e._v(" "),s("ol",[s("li",[e._v("retrieve user specific temporary client token\n"),s("ul",[s("li",[e._v("using project's "),s("code",[e._v("Client ID")]),e._v(" and "),s("code",[e._v("Client Secret")]),e._v(" (found in the dashboard under "),s("code",[e._v("Project -> Access -> 'Trusted Client Properties'")]),e._v(" ).")]),e._v(" "),s("li",[s("code",[e._v("user-to-proxy-for")]),e._v(" is provided in the request (this is the "),s("code",[e._v("user id")]),e._v(").")]),e._v(" "),s("li",[e._v("result token encapsulates the "),s("code",[e._v("user id")]),e._v(" so the service will know what user to perform this action for")])])]),e._v(" "),s("li",[e._v("call the endpoint and set the user token on the request.")])]),e._v(" "),s("p",[e._v("Here is a CURL based example: (please substitute your values of "),s("code",[e._v("client-id")]),e._v(", "),s("code",[e._v("client-secret")]),e._v(", "),s("code",[e._v("dashboard-url")]),e._v(" and "),s("code",[e._v("user-to-proxy-for")]),e._v("):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" client-id:client-secret@dashboard-url/oauth/token -d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"grant_type=client_credentials&proxy_user=user-to-proxy-for"')]),e._v("\n")])])]),s("p",[e._v("and then (please substitute your values of "),s("code",[e._v("access_token_from_first_call")]),e._v(", "),s("code",[e._v("dashboard-url")]),e._v("):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Bearer access_token_from_first_call"')]),e._v(" http://dashboard-url/api/projects/FirstProject/level\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);