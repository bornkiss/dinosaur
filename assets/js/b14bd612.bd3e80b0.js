"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9699],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=c,f=m["".concat(i,".").concat(p)]||m[p]||s[p]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function p(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(7462),c=t(3366),a=(t(7294),t(3905)),o=["components"],l={},i="\u6279\u91cf\u64cd\u4f5c",u={unversionedId:"select/advanced-example/ZM08",id:"select/advanced-example/ZM08",title:"\u6279\u91cf\u64cd\u4f5c",description:"\u6279\u91cf\u64cd\u4f5c\u5df2\u6e32\u67d3\u5b9e\u4f8b",source:"@site/docs/select/advanced-example/ZM08.md",sourceDirName:"select/advanced-example",slug:"/select/advanced-example/ZM08",permalink:"/docs/select/advanced-example/ZM08",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u5b9e\u4f8b\u5bf9\u8c61",permalink:"/docs/select/advanced-example/ZM07"},next:{title:"\u4e0b\u62c9\u81ea\u5b9a\u4e49",permalink:"/docs/select/development-center/ZP01"}},d={},s=[{value:"\u6279\u91cf\u64cd\u4f5c\u5df2\u6e32\u67d3\u5b9e\u4f8b",id:"\u6279\u91cf\u64cd\u4f5c\u5df2\u6e32\u67d3\u5b9e\u4f8b",level:2}],m={toc:s};function p(e){var n=e.components,t=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6279\u91cf\u64cd\u4f5c"},"\u6279\u91cf\u64cd\u4f5c"),(0,a.kt)("h2",{id:"\u6279\u91cf\u64cd\u4f5c\u5df2\u6e32\u67d3\u5b9e\u4f8b"},"\u6279\u91cf\u64cd\u4f5c\u5df2\u6e32\u67d3\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//filter, \u540cget\u65b9\u6cd5\n//method, \u9700\u8981\u6267\u884c\u7684\u65b9\u6cd5\n//args, \u6267\u884c\u65b9\u6cd5\u7684\u53c2\u6570\nxmSelect.batch(filter, method, ...args);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n<div id=\"demo2\" class=\"xm-select-demo\"></div>\n<div id=\"xm3\" class=\"xm-select-demo\"></div>\n\n<div><button class=\"btn\" id=\"btn1\">batch\u7981\u7528</button></div>\n<div><button class=\"btn\" id=\"btn2\">batch\u542f\u7528</button></div>\n<div><button class=\"btn\" id=\"btn3\">batch\u8b66\u544a</button></div>\n<div><button class=\"btn\" id=\"btn4\">batch\u83b7\u53d6\u5df2\u9009\u4e2d\u6570\u636e</button></div>\n\n<pre id=\"demo-value\"></pre>\n\n<script>\n\n['#demo1', '#demo2', '#xm3'].forEach((el, index) => {\n    xmSelect.render({\n        el, \n        data: [\n            {name: '\u5f20\u4e09', value: 1, selected: true},\n            {name: '\u674e\u56db', value: 2},\n            {name: '\u738b\u4e94', value: 3, disabled: true},\n        ]\n    });\n});\n\ndocument.getElementById('btn1').onclick = function(){\n    xmSelect.batch('', 'update', {\n        disabled: true\n    });\n}\n\ndocument.getElementById('btn2').onclick = function(){\n    xmSelect.batch('', 'update', {\n        disabled: false\n    });\n}\n\ndocument.getElementById('btn3').onclick = function(){\n    xmSelect.batch(/demo.*/, 'warning', '#F00', true);\n}\n\ndocument.getElementById('btn4').onclick = function(){\n    var selectArr = xmSelect.batch(null, 'getValue', 'name');\n    document.getElementById('demo-value').innerHTML = JSON.stringify(selectArr, null, 2);\n}\n<\/script>\n")))}p.isMDXComponent=!0}}]);