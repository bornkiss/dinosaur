"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8747],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),s=a,f=m["".concat(i,".").concat(s)]||m[s]||d[s]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4196:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],c={},i="\u4e0b\u62c9\u65b9\u5411",u={unversionedId:"tutorial-select/example/XM06",id:"tutorial-select/example/XM06",title:"\u4e0b\u62c9\u65b9\u5411",description:"\u81ea\u52a8auto",source:"@site/docs/tutorial-select/example/XM06.md",sourceDirName:"tutorial-select/example",slug:"/tutorial-select/example/XM06",permalink:"/docs/tutorial-select/example/XM06",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u641c\u7d22\u6a21\u5f0f",permalink:"/docs/tutorial-select/example/XM05"},next:{title:"\u81ea\u5b9a\u4e49\u6837\u5f0f",permalink:"/docs/tutorial-select/example/XM07"}},p={},d=[{value:"\u81ea\u52a8<code>auto</code>",id:"\u81ea\u52a8auto",level:2},{value:"\u6253\u5361\u5411\u4e0a<code>up</code>",id:"\u6253\u5361\u5411\u4e0aup",level:2},{value:"\u6253\u5f00\u5411\u4e0b<code>down</code>",id:"\u6253\u5f00\u5411\u4e0bdown",level:2}],m={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e0b\u62c9\u65b9\u5411"},"\u4e0b\u62c9\u65b9\u5411"),(0,o.kt)("h2",{id:"\u81ea\u52a8auto"},"\u81ea\u52a8",(0,o.kt)("inlineCode",{parentName:"h2"},"auto")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div style=\"height: 500px\">\u5360\u4f4ddiv, \u6f14\u793a\u6548\u679c\u4f7f\u7528, \u5e95\u90e8\u7a7a\u95f4\u4e0d\u8db3\u65f6\u4f1a\u81ea\u52a8\u5411\u4e0a\u5c55\u5f00</div>\n\n<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    direction: 'auto',\n    data: [\n        {name: '\u6c34\u679c', value: 1},\n        {name: '\u852c\u83dc', value: 2},\n        {name: '\u684c\u5b50', value: 3},\n        {name: '\u5317\u4eac', value: 4},\n    ]\n})\n<\/script>\n")),(0,o.kt)("h2",{id:"\u6253\u5361\u5411\u4e0aup"},"\u6253\u5361\u5411\u4e0a",(0,o.kt)("inlineCode",{parentName:"h2"},"up")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    direction: 'up',\n    data: [\n        {name: '\u6c34\u679c', value: 1},\n        {name: '\u852c\u83dc', value: 2},\n        {name: '\u684c\u5b50', value: 3},\n        {name: '\u5317\u4eac', value: 4},\n    ]\n})\n<\/script>\n")),(0,o.kt)("h2",{id:"\u6253\u5f00\u5411\u4e0bdown"},"\u6253\u5f00\u5411\u4e0b",(0,o.kt)("inlineCode",{parentName:"h2"},"down")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo3\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo3 = xmSelect.render({\n    el: '#demo3', \n    direction: 'down',\n    data: [\n        {name: '\u6c34\u679c', value: 1},\n        {name: '\u852c\u83dc', value: 2},\n        {name: '\u684c\u5b50', value: 3},\n        {name: '\u5317\u4eac', value: 4},\n    ]\n})\n<\/script>\n")))}s.isMDXComponent=!0}}]);