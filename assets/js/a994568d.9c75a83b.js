"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3889],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],i={},u="\u6027\u80fd\u6d4b\u8bd5",l={unversionedId:"tutorial-select/XM17",id:"tutorial-select/XM17",title:"\u6027\u80fd\u6d4b\u8bd5",description:"\u6570\u636e\u6e32\u67d3\u8017\u65f6\u6d4b\u8bd5",source:"@site/docs/tutorial-select/XM17.md",sourceDirName:"tutorial-select",slug:"/tutorial-select/XM17",permalink:"/docs/tutorial-select/XM17",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u542c\u9009\u62e9",permalink:"/docs/tutorial-select/XM16"},next:{title:"\u591a\u9009\u4e0a\u9650",permalink:"/docs/tutorial-select/XM18"}},s={},p=[{value:"\u6570\u636e\u6e32\u67d3\u8017\u65f6\u6d4b\u8bd5",id:"\u6570\u636e\u6e32\u67d3\u8017\u65f6\u6d4b\u8bd5",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u6027\u80fd\u6d4b\u8bd5"},"\u6027\u80fd\u6d4b\u8bd5"),(0,c.kt)("h2",{id:"\u6570\u636e\u6e32\u67d3\u8017\u65f6\u6d4b\u8bd5"},"\u6570\u636e\u6e32\u67d3\u8017\u65f6\u6d4b\u8bd5"),(0,c.kt)("p",null,"\u4e8b\u5b9e\u8bc1\u660e\u5206\u9875\u662f\u597d\u4f7f\u7684 ^_^"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<div id="demo1" class="xm-select-demo"></div>\n<button class="btn" id="demo1-test1">\u6d4b\u8bd51000\u6761</button>\n<button class="btn" id="demo1-test2">\u6d4b\u8bd510000\u6761</button>\n<button class="btn" id="demo1-test3">\u6d4b\u8bd510000\u6761+\u5206\u9875</button>\n<pre id="demo1-result"></pre>\n\n<script>\nfunction run(count, paging){\n    //\u751f\u6210\u6570\u636e\n    var data = [];\n    for(var i = 0; i < count; i++){\n        data.push({\n            name: \'\u6d4b\u8bd5\u6570\u636e\' + i,\n            value: i,\n        })\n    }\n    \n    //\u8bb0\u5f55\u5f00\u59cb\u6e32\u67d3\u65f6\u95f4\n    var startTime = Date.now();\n    \n    var demo1 = xmSelect.render({\n        el: \'#demo1\', \n        paging,\n        data\n    })\n    \n    //\u8bb0\u5f55\u7ed3\u675f\u65f6\u95f4\n    var endTime = Date.now();\n    \n    document.getElementById(\'demo1-result\').innerText = `\u6e32\u67d3\u8017\u65f6: ${endTime - startTime} ms`\n}\n\ndocument.getElementById(\'demo1-test1\').onclick = function(){\n    run(1000, false)\n};\n\ndocument.getElementById(\'demo1-test2\').onclick = function(){\n    run(10000, false)\n};\n\ndocument.getElementById(\'demo1-test3\').onclick = function(){\n    run(10000, true)\n};\n\nrun(1000, false);\n\n<\/script>\n')))}m.isMDXComponent=!0}}]);