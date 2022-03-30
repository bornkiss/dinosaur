"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6076],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(t),p=a,f=s["".concat(i,".").concat(p)]||s[p]||d[p]||o;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7801:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],c={},i="\u8b66\u544a",u={unversionedId:"select/example/XM25",id:"select/example/XM25",title:"\u8b66\u544a",description:"\u8b66\u544a\u63d0\u793a",source:"@site/docs/select/example/XM25.md",sourceDirName:"select/example",slug:"/select/example/XM25",permalink:"/docs/select/example/XM25",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c3a\u5bf8",permalink:"/docs/select/example/XM24"},next:{title:"\u7981\u7528",permalink:"/docs/select/example/XM26"}},m={},d=[{value:"\u8b66\u544a\u63d0\u793a",id:"\u8b66\u544a\u63d0\u793a",level:2},{value:"\u81ea\u5b9a\u4e49\u95ea\u70c1\u989c\u8272",id:"\u81ea\u5b9a\u4e49\u95ea\u70c1\u989c\u8272",level:2},{value:"\u6301\u7eed\u663e\u793a",id:"\u6301\u7eed\u663e\u793a",level:2}],s={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8b66\u544a"},"\u8b66\u544a"),(0,o.kt)("h2",{id:"\u8b66\u544a\u63d0\u793a"},"\u8b66\u544a\u63d0\u793a"),(0,o.kt)("p",null,"\u653e\u4e0b\u5979, \u8ba9\u6211\u6765!!!  \u9ed8\u8ba4\u989c\u8272",(0,o.kt)("inlineCode",{parentName:"p"},"#e54d42"),", \u591a\u9009\u4e0a\u9650\u7684\u6837\u8272"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/*\n *  COLOR: \u81ea\u5b9a\u4e49\u989c\u8272, \u9ed8\u8ba4\u662f options.theme.maxColor\u7684\u989c\u8272\n *  SUSTAIN: \u662f\u5426\u6301\u7eed\u663e\u793a, \u9ed8\u8ba4\u4e3afalse\n */\nxmSelectObj.warning(COLOR, SUSTAIN);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n<button class=\"btn\" id=\"demo1-warning\">\u8b66\u544a</button>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n\ndocument.getElementById('demo1-warning').onclick = function(){\n    demo1.warning();\n}\n<\/script>\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u95ea\u70c1\u989c\u8272"},"\u81ea\u5b9a\u4e49\u95ea\u70c1\u989c\u8272"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n<button class=\"btn\" id=\"demo2-warning\">\u8b66\u544a</button>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n\ndocument.getElementById('demo2-warning').onclick = function(){\n    demo2.warning('#6739b6');\n}\n<\/script>\n")),(0,o.kt)("h2",{id:"\u6301\u7eed\u663e\u793a"},"\u6301\u7eed\u663e\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo3\" class=\"xm-select-demo\"></div>\n<button class=\"btn\" id=\"demo3-warning\">\u8b66\u544a</button>\n\n<script>\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    data: [\n        {name: '\u5f20\u4e09', value: 1, selected: true},\n        {name: '\u674e\u56db', value: 2},\n        {name: '\u738b\u4e94', value: 3, disabled: true},\n    ]\n})\n\ndocument.getElementById('demo3-warning').onclick = function(){\n    demo3.warning('#6739b6', true);\n}\n<\/script>\n")))}p.isMDXComponent=!0}}]);