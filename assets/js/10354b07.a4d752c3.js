"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1993],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,f=m["".concat(i,".").concat(p)]||m[p]||s[p]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8451:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],c={},i=void 0,d={unversionedId:"select/example/XM26",id:"select/example/XM26",title:"XM26",description:"\u6e32\u67d3\u7981\u7528",source:"@site/docs/select/example/XM26.md",sourceDirName:"select/example",slug:"/select/example/XM26",permalink:"/docs/select/example/XM26",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XM25",permalink:"/docs/select/example/XM25"},next:{title:"XM27",permalink:"/docs/select/example/XM27"}},u={},s=[{value:"\u6e32\u67d3\u7981\u7528",id:"\u6e32\u67d3\u7981\u7528",level:2},{value:"\u52a8\u6001\u542f\u7528\u7981\u7528",id:"\u52a8\u6001\u542f\u7528\u7981\u7528",level:2},{value:"\u9009\u5b8c<code>\u5f20\u4e09</code>\u540e\u7981\u7528",id:"\u9009\u5b8c\u5f20\u4e09\u540e\u7981\u7528",level:2}],m={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7981\u7528"},"\u7981\u7528"),(0,o.kt)("h2",{id:"\u6e32\u67d3\u7981\u7528"},"\u6e32\u67d3\u7981\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"xmSelect.render({\n    //...\n    disabled: true\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    disabled: true,\n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n<\/script>\n")),(0,o.kt)("h2",{id:"\u52a8\u6001\u542f\u7528\u7981\u7528"},"\u52a8\u6001\u542f\u7528\u7981\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n<button class=\"btn\" id=\"demo21\">\u7981\u7528</button>\n<button class=\"btn\" id=\"demo22\">\u542f\u7528</button>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n\ndocument.getElementById('demo21').onclick = function(){\n    demo2.update({ disabled: true });\n}\ndocument.getElementById('demo22').onclick = function(){\n    demo2.update({ disabled: false });\n}\n<\/script>\n")),(0,o.kt)("h2",{id:"\u9009\u5b8c\u5f20\u4e09\u540e\u7981\u7528"},"\u9009\u5b8c",(0,o.kt)("inlineCode",{parentName:"h2"},"\u5f20\u4e09"),"\u540e\u7981\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo3\" class=\"xm-select-demo\"></div>\n<button class=\"btn\" id=\"demo3-disabled\">\u542f\u7528</button>\n\n<script>\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    data: [\n        {name: '\u5f20\u4e09', value: 1},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3},\n    ],\n    on({ arr, change, isAdd }){\n        var hasZS = change.find(item => item.name === '\u5f20\u4e09');\n        if(isAdd && hasZS){\n            demo3.update({ disabled: true });\n        }\n    }\n})\n\n//\u6ca1\u6709\u505a\u4e0d\u5230, \u53ea\u6709\u60f3\u4e0d\u5230, \u628a\u591a\u9009\u73a9\u51fa\u82b1\u6765\u5427\ndocument.getElementById('demo3-disabled').onclick = function(){\n    demo3.update({ disabled: false });\n}\n<\/script>\n")))}p.isMDXComponent=!0}}]);