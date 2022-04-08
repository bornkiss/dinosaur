"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3145],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,f=m["".concat(o,".").concat(p)]||m[p]||s[p]||l;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<l;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2493:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),c=["components"],i={},o=void 0,u={unversionedId:"select/example/XM16",id:"select/example/XM16",title:"XM16",description:"\u5b9e\u65f6\u76d1\u542c",source:"@site/docs/select/example/XM16.md",sourceDirName:"select/example",slug:"/select/example/XM16",permalink:"/docs/select/example/XM16",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XM15",permalink:"/docs/select/example/XM15"},next:{title:"XM17",permalink:"/docs/select/example/XM17"}},d={},s=[{value:"\u5b9e\u65f6\u76d1\u542c",id:"\u5b9e\u65f6\u76d1\u542c",level:2},{value:"\u76d1\u542c+\u52a8\u6001\u8d4b\u503c",id:"\u76d1\u542c\u52a8\u6001\u8d4b\u503c",level:2},{value:"\u76d1\u542c+\u52a8\u6001\u4fee\u6539",id:"\u76d1\u542c\u52a8\u6001\u4fee\u6539",level:2}],m={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u76d1\u542c\u9009\u62e9"},"\u76d1\u542c\u9009\u62e9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"xmSelect.render({\n    on: function(data){\n        //arr:  \u5f53\u524d\u591a\u9009\u5df2\u9009\u4e2d\u7684\u6570\u636e\n        var arr = data.arr;\n        //change, \u6b64\u6b21\u9009\u62e9\u53d8\u5316\u7684\u6570\u636e,\u6570\u7ec4\n        var change = data.change;\n        //isAdd, \u6b64\u6b21\u64cd\u4f5c\u662f\u65b0\u589e\u8fd8\u662f\u5220\u9664\n        var isAdd = data.isAdd;\n        \n        //\u53ef\u4ee5return\u4e00\u4e2a\u6570\u7ec4, \u4ee3\u8868\u60f3\u9009\u4e2d\u7684\u6570\u636e\n        //return []\n    },\n})\n")),(0,l.kt)("h2",{id:"\u5b9e\u65f6\u76d1\u542c"},"\u5b9e\u65f6\u76d1\u542c"),(0,l.kt)("p",null,"\u5b9e\u65f6\u76d1\u542c\u591a\u9009\u7684\u9009\u4e2d\u72b6\u6001\u53d8\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<br/><br/>\n<button class=\"btn\" id=\"setValue1\">\u76d1\u542csetValue(['zhangsan'], null, true)</button>\n<button class=\"btn\" id=\"setValue2\">\u4e0d\u76d1\u542csetValue(['zhangsan'])</button>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    on: function(data){\n        //arr:  \u5f53\u524d\u591a\u9009\u5df2\u9009\u4e2d\u7684\u6570\u636e\n        var arr = data.arr;\n        //change, \u6b64\u6b21\u9009\u62e9\u53d8\u5316\u7684\u6570\u636e,\u6570\u7ec4\n        var change = data.change;\n        //isAdd, \u6b64\u6b21\u64cd\u4f5c\u662f\u65b0\u589e\u8fd8\u662f\u5220\u9664\n        var isAdd = data.isAdd;\n        \n        alert('\u5df2\u6709: '+arr.length+' \u53d8\u5316: '+change.length+', \u72b6\u6001: ' + isAdd)\n    },\n    data: [\n        {name: '\u5f20\u4e09', value: 'zhangsan', selected: true},\n        {name: '\u674e\u56db', value: 'lisi', selected: true},\n        {name: '\u738b\u4e94', value: 'wangwu'},\n    ]\n})\n\ndocument.getElementById('setValue1').onclick = function(){\n    demo1.setValue(['zhangsan'], null, true);\n}\n\ndocument.getElementById('setValue2').onclick = function(){\n    demo1.setValue(['zhangsan']);\n}\n<\/script>\n")),(0,l.kt)("h2",{id:"\u76d1\u542c\u52a8\u6001\u8d4b\u503c"},"\u76d1\u542c+\u52a8\u6001\u8d4b\u503c"),(0,l.kt)("p",null,"\u9009\u4e2d\u5317\u4eac\u540e, \u4e0d\u80fd\u9009\u4e2d\u4e0a\u6d77, \u4e8c\u8005\u4e92\u65a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    toolbar: {\n        show: true\n    },\n    on: function(data){\n        //arr:  \u5f53\u524d\u591a\u9009\u5df2\u9009\u4e2d\u7684\u6570\u636e\n        var arr = data.arr;\n        //change, \u6b64\u6b21\u9009\u62e9\u53d8\u5316\u7684\u6570\u636e,\u6570\u7ec4\n        var change = data.change;\n        //isAdd, \u6b64\u6b21\u64cd\u4f5c\u662f\u65b0\u589e\u8fd8\u662f\u5220\u9664\n        var isAdd = data.isAdd;\n        \n        console.log(arr);\n        \n        if(isAdd){\n            var item = change[0];\n            var index = arr.findIndex(i => i.mutex == item.mutex && i.value != item.value);\n            if(index != -1){\n                arr.splice(index, 1);\n            }\n        }\n    },\n    data: [\n        {name: '\u5317\u4eac', value: 1, mutex: 1, selected: true},\n        {name: '\u4e0a\u6d77', value: 2, mutex: 1},\n        {name: '\u5e7f\u5dde', value: 3},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u76d1\u542c\u52a8\u6001\u4fee\u6539"},"\u76d1\u542c+\u52a8\u6001\u4fee\u6539"),(0,l.kt)("p",null,"\u6709\u65f6\u5168\u9009\u4e5f\u662f\u4e00\u79cd\u72b6\u6001, \u5217\u8868\u4e2d\u6709\u5168\u9009, \u4e0e\u5176\u4ed6\u9009\u9879\u4e92\u65a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo3\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    on: function(data){\n        //\u53ef\u4ee5return\u4e00\u4e2a\u6570\u7ec4, \u4ee3\u8868\u60f3\u9009\u4e2d\u7684\u6570\u636e\n        \n        //arr:  \u5f53\u524d\u591a\u9009\u5df2\u9009\u4e2d\u7684\u6570\u636e\n        var arr = data.arr;\n        //change, \u6b64\u6b21\u9009\u62e9\u53d8\u5316\u7684\u6570\u636e,\u6570\u7ec4\n        var change = data.change;\n        //isAdd, \u6b64\u6b21\u64cd\u4f5c\u662f\u65b0\u589e\u8fd8\u662f\u5220\u9664\n        var isAdd = data.isAdd;\n        \n        if(isAdd){\n            var allItem = change.find(function(item){\n                return item.value === 0;\n            })\n            if(allItem){\n                return [allItem];\n            }\n            allItem = arr.find(function(item){\n                return item.value === 0;\n            })\n            if(allItem){\n                return change;\n            }\n        }\n        \n    },\n    data: [\n        {name: '\u5168\u9009', value: 0},\n        {name: '\u5317\u4eac', value: 1},\n        {name: '\u4e0a\u6d77', value: 2},\n        {name: '\u5e7f\u5dde', value: 3},\n        {name: '\u6df1\u5733', value: 4},\n    ]\n})\n<\/script>\n")))}p.isMDXComponent=!0}}]);