"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2513],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,v=d["".concat(c,".").concat(p)]||d[p]||s[p]||l;return t?r.createElement(v,i(i({ref:n},m),{},{components:t})):r.createElement(v,i({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9893:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={},c=void 0,u={unversionedId:"select/example/XM24",id:"select/example/XM24",title:"XM24",description:"\u56db\u79cd\u5c3a\u5bf8\u53d8\u6362",source:"@site/docs/select/example/XM24.md",sourceDirName:"select/example",slug:"/select/example/XM24",permalink:"/docs/select/example/XM24",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XM23",permalink:"/docs/select/example/XM23"},next:{title:"XM25",permalink:"/docs/select/example/XM25"}},m={},s=[{value:"\u56db\u79cd\u5c3a\u5bf8\u53d8\u6362",id:"\u56db\u79cd\u5c3a\u5bf8\u53d8\u6362",level:2}],d={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5c3a\u5bf8"},"\u5c3a\u5bf8"),(0,l.kt)("h2",{id:"\u56db\u79cd\u5c3a\u5bf8\u53d8\u6362"},"\u56db\u79cd\u5c3a\u5bf8\u53d8\u6362"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"large"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"medium"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"small"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mini")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-size\"></div>\n<div id=\"demo2\" class=\"xm-select-size\"></div>\n<div id=\"demo3\" class=\"xm-select-size\"></div>\n<div id=\"demo4\" class=\"xm-select-size\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    size: 'large',\n    data: [\n        {name: 'large', value: 1, selected: true},\n        {name: '\u674e\u56db1', value: 2},\n        {name: '\u738b\u4e941', value: 3, disabled: true},\n        {name: '\u82f9\u679c2', value: 4},\n    ]\n})\n\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    size: 'medium',\n    data: [\n        {name: 'medium', value: 1, selected: true},\n        {name: '\u674e\u56db1', value: 2},\n        {name: '\u9ed8\u8ba4\u5c3a\u5bf8', value: 3, selected: true, disabled: true},\n        {name: '\u82f9\u679c2', value: 4},\n    ]\n})\n\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    size: 'small',\n    data: [\n        {name: 'small', value: 1, selected: true},\n        {name: '\u674e\u56db1', value: 2},\n        {name: '\u738b\u4e941', value: 3, disabled: true},\n        {name: '\u82f9\u679c2', value: 4},\n    ]\n})\n\nvar demo4 = xmSelect.render({\n    el: '#demo4', \n    size: 'mini',\n    data: [\n        {name: 'mini', value: 1, selected: true},\n        {name: '\u674e\u56db1', value: 2},\n        {name: '\u738b\u4e941', value: 3, disabled: true},\n        {name: '\u82f9\u679c2', value: 4},\n    ]\n})\n<\/script>\n")))}p.isMDXComponent=!0}}]);