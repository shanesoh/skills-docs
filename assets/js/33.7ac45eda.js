(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{413:function(t,e,a){"use strict";a.r(e);var n=a(43),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("When using Password Auth Mode, the dashboard can also support OAuth2 based authentication.\nCurrently, OAuth2 is only supported for Google and GitHub user accounts.  Google and/or GitHub login buttons get automatically added to the Login page when configured.  To configure, you will need a client ID and client Secret credentials.  These credentials can be created and managed through the providers OAuth management pages found here: "),a("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Once the client ID and secret are setup, they are enabled by adding the following properties:")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.google.client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<Google client id here>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.google.client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<Google client secret here>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.google.redirectUriTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'http://<SkillTree Dashboard Host>/{action}/oauth2/code/{registrationId}'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.google.iconClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("fab fa-google")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.github.client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<GitHub client id here>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.github.client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<GitHub client secret here>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.github.redirectUriTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("'http://<SkillTree Dashboard Host>/{action}/oauth2/code/{registrationId}'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("security.oauth2.client.registration.github.iconClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("fab fa-github")]),t._v("\n")])])]),a("p",[t._v("Excluding either one of the Google or GitHub configuration sections will prevent the respective OAuth login button from being added to the Login page.")])])}),[],!1,null,null,null);e.default=s.exports}}]);