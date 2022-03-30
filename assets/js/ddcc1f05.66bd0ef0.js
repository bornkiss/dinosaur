"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[258],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(t),s=a,v=p["".concat(o,".").concat(s)]||p[s]||d[s]||l;return t?r.createElement(v,c(c({ref:n},m),{},{components:t})):r.createElement(v,c({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=p;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<l;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9150:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),c=["components"],i={},o="\u5206\u7ec4",u={unversionedId:"select/example/XM21",id:"select/example/XM21",title:"\u5206\u7ec4",description:"children\u6a21\u5f0f",source:"@site/docs/select/example/XM21.md",sourceDirName:"select/example",slug:"/select/example/XM21",permalink:"/docs/select/example/XM21",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9009\u9879\u663e\u793a\u6570\u91cf",permalink:"/docs/select/example/XM20"},next:{title:"\u81ea\u52a8\u6362\u884c",permalink:"/docs/select/example/XM22"}},m={},d=[{value:"children\u6a21\u5f0f",id:"children\u6a21\u5f0f",level:2},{value:"\u5206\u7ec4\u7684\u5355\u51fb\u4e8b\u4ef6",id:"\u5206\u7ec4\u7684\u5355\u51fb\u4e8b\u4ef6",level:2},{value:"\u5e26\u6709\u5206\u9875\u7684\u5206\u7ec4",id:"\u5e26\u6709\u5206\u9875\u7684\u5206\u7ec4",level:2}],p={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5206\u7ec4"},"\u5206\u7ec4"),(0,l.kt)("h2",{id:"children\u6a21\u5f0f"},"children\u6a21\u5f0f"),(0,l.kt)("p",null," \u9009\u9879\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"children"),"\u4e3a\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    toolbar:{\n        show: true,\n    },\n    filterable: true,\n    height: '500px',\n    data: [\n        {name: '\u9500\u552e\u5458', children: [\n            {name: '\u5f20\u4e091', value: 1, selected: true},\n            {name: '\u674e\u56db1', value: 2, selected: true},\n            {name: '\u738b\u4e941', value: 3, disabled: true},\n        ]},\n        {name: '\u5956\u54c1', children: [\n            {name: '\u82f9\u679c2', value: 4, selected: true, disabled: true, children: []},\n            {name: '\u9999\u85492', value: 5},\n            {name: '\u8461\u84042', value: 6},\n        ]},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u5206\u7ec4\u7684\u5355\u51fb\u4e8b\u4ef6"},"\u5206\u7ec4\u7684\u5355\u51fb\u4e8b\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo4\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo4 = xmSelect.render({\n    el: '#demo4', \n    toolbar:{\n        show: true,\n    },\n    height: '300px',\n    data: [\n        {name: '\u5f00\u59cb\u65e0\u5206\u7ec41', value: 11, children: []},\n        {name: '\u5f00\u59cb\u65e0\u5206\u7ec42', value: 12, children: []},\n        {name: '\u9009\u4e2d', optgroup: true, click: 'SELECT', children: [\n            {name: '\u5f20\u4e09', value: 1},\n            {name: '\u674e\u56db', value: 2, disabled: true},\n        ]},\n        {name: '\u6e05\u7a7a', optgroup: true, click: 'CLEAR', children: [\n            {name: '\u738b\u4e94', value: 3, disabled: true},\n            {name: '\u82f9\u679c', value: 4, selected: true},\n        ]},\n        {name: '\u81ea\u52a8', optgroup: true, click: 'AUTO', children: [\n            {name: '\u9999\u8549', value: 5},\n            {name: '\u8461\u8404', value: 6},\n        ]},\n        {name: '\u4e2d\u95f4\u65e0\u5206\u7ec41', value: 21, children: []},\n        {name: '\u4e2d\u95f4\u65e0\u5206\u7ec42', value: 22, children: []},\n        {name: '\u81ea\u5b9a\u4e49', optgroup: true, click: function(item){ alert('\u81ea\u5b9a\u4e49\u7684, \u60f3\u5e72\u561b\u5e72\u561b') }, children: [\n            {name: '\u5c0f\u7c73', value: 7},\n            {name: '\u534e\u4e3a', value: 8},\n        ]},\n        {name: '\u7ed3\u5c3e\u65e0\u5206\u7ec41', value: 31, children: []},\n        {name: '\u7ed3\u5c3e\u65e0\u5206\u7ec42', value: 32, children: []},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u5e26\u6709\u5206\u9875\u7684\u5206\u7ec4"},"\u5e26\u6709\u5206\u9875\u7684\u5206\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo5\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo5 = xmSelect.render({\n    el: '#demo5', \n    toolbar:{\n        show: true,\n    },\n    filterable: true,\n    height: '500px',\n    paging: true,\n    pageSize: 2,\n    data: [\n        {name: '\u9500\u552e\u5458', children: [\n            {name: '\u5f20\u4e091', value: 1},\n            {name: '\u674e\u56db1', value: 2},\n            {name: '\u738b\u4e9413', value: 3},\n        ]},\n        {name: '\u5956\u54c1', children: [\n            {name: '\u82f9\u679c23', value: 4},\n            {name: '\u9999\u85492', value: 5},\n            {name: '\u8461\u84042', value: 6},\n        ]},\n    ]\n})\n<\/script>\n")))}s.isMDXComponent=!0}}]);