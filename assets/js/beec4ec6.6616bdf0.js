"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2465],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=i(t),p=r,v=d["".concat(c,".").concat(p)]||d[p]||s[p]||l;return t?a.createElement(v,u(u({ref:n},m),{},{components:t})):a.createElement(v,u({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var i=2;i<l;i++)u[i]=t[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3237:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),u=["components"],o={},c="\u5de5\u5177\u6761",i={unversionedId:"tutorial-select/XM19",id:"tutorial-select/XM19",title:"\u5de5\u5177\u6761",description:"\u9ed8\u8ba4\u5de5\u5177\u6761",source:"@site/docs/tutorial-select/XM19.md",sourceDirName:"tutorial-select",slug:"/tutorial-select/XM19",permalink:"/docs/tutorial-select/XM19",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u9009\u4e0a\u9650",permalink:"/docs/tutorial-select/XM18"},next:{title:"\u9009\u9879\u663e\u793a\u6570\u91cf",permalink:"/docs/tutorial-select/XM20"}},m={},s=[{value:"\u9ed8\u8ba4\u5de5\u5177\u6761",id:"\u9ed8\u8ba4\u5de5\u5177\u6761",level:2},{value:"\u9690\u85cf\u56fe\u6807",id:"\u9690\u85cf\u56fe\u6807",level:2},{value:"\u81ea\u5b9a\u4e49\u5de5\u5177\u6761",id:"\u81ea\u5b9a\u4e49\u5de5\u5177\u6761",level:2},{value:"\u5168\u90e8\u5de5\u5177\u6761",id:"\u5168\u90e8\u5de5\u5177\u6761",level:2}],d={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5de5\u5177\u6761"},"\u5de5\u5177\u6761"),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u5de5\u5177\u6761"},"\u9ed8\u8ba4\u5de5\u5177\u6761"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    toolbar: {\n        show: true,\n    },\n    filterable: true,\n    paging: true,\n    pageSize: 3,\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2, selected: true},\n        {name: '\u738b\u4e94', value: 3},\n        {name: '\u8d75\u516d', value: 4},\n        {name: '\u82f9\u679c', value: 5},\n        {name: '\u9999\u8549', value: 6},\n        {name: '\u51e4\u68a8', value: 7},\n        {name: '\u8461\u8404', value: 8},\n        {name: '\u6a31\u6843', value: 9},\n        {name: '\u8f66\u5398\u5b50', value: 10},\n        {name: '\u706b\u9f99\u679c', value: 11},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u9690\u85cf\u56fe\u6807"},"\u9690\u85cf\u56fe\u6807"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    toolbar: {\n        show: true,\n        showIcon: false,\n    },\n    filterable: true,\n    paging: true,\n    pageSize: 3,\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2, selected: true},\n        {name: '\u738b\u4e94', value: 3},\n        {name: '\u8d75\u516d', value: 4},\n        {name: '\u82f9\u679c', value: 5},\n        {name: '\u9999\u8549', value: 6},\n        {name: '\u51e4\u68a8', value: 7},\n        {name: '\u8461\u8404', value: 8},\n        {name: '\u6a31\u6843', value: 9},\n        {name: '\u8f66\u5398\u5b50', value: 10},\n        {name: '\u706b\u9f99\u679c', value: 11},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5de5\u5177\u6761"},"\u81ea\u5b9a\u4e49\u5de5\u5177\u6761"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo3\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    toolbar: {\n        show: true,\n        list: ['ALL', {\n            name: '\u81ea\u5b9a\u4e49',\n            icon: 'el-icon-star-off',\n            method(data){\n                alert('\u6211\u662f\u81ea\u5b9a\u4e49\u7684');\n            }\n        }]\n    },\n    filterable: true,\n    paging: true,\n    pageSize: 3,\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2, selected: true},\n        {name: '\u738b\u4e94', value: 3},\n        {name: '\u8d75\u516d', value: 4},\n        {name: '\u82f9\u679c', value: 5},\n        {name: '\u9999\u8549', value: 6},\n        {name: '\u51e4\u68a8', value: 7},\n        {name: '\u8461\u8404', value: 8},\n        {name: '\u6a31\u6843', value: 9},\n        {name: '\u8f66\u5398\u5b50', value: 10},\n        {name: '\u706b\u9f99\u679c', value: 11},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u5168\u90e8\u5de5\u5177\u6761"},"\u5168\u90e8\u5de5\u5177\u6761"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u5168\u9009, \u6e05\u7a7a, \u53cd\u9009\nxmSelect.render({\n    toolbar: {\n        show: true,\n        list: [ 'ALL', 'CLEAR', 'REVERSE' ]\n    },\n})\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo4\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo4 = xmSelect.render({\n    el: '#demo4', \n    toolbar: {\n        show: true,\n        list: [ 'ALL', 'CLEAR', 'REVERSE' ]\n    },\n    filterable: true,\n    paging: true,\n    pageSize: 3,\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2, selected: true},\n        {name: '\u738b\u4e94', value: 3},\n        {name: '\u8d75\u516d', value: 4},\n        {name: '\u82f9\u679c', value: 5},\n        {name: '\u9999\u8549', value: 6},\n        {name: '\u51e4\u68a8', value: 7},\n        {name: '\u8461\u8404', value: 8},\n        {name: '\u6a31\u6843', value: 9},\n        {name: '\u8f66\u5398\u5b50', value: 10},\n        {name: '\u706b\u9f99\u679c', value: 11},\n    ]\n})\n<\/script>\n")))}p.isMDXComponent=!0}}]);