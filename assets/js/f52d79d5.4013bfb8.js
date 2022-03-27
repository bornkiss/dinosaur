"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9666],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},c="\u9ed8\u8ba4\u9009\u4e2d",u={unversionedId:"tutorial-select/XM03",id:"tutorial-select/XM03",title:"\u9ed8\u8ba4\u9009\u4e2d",description:"\u4f7f\u7528selected\u5c5e\u6027",source:"@site/docs/tutorial-select/XM03.md",sourceDirName:"tutorial-select",slug:"/tutorial-select/XM03",permalink:"/docs/tutorial-select/XM03",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56fd\u9645\u5316",permalink:"/docs/tutorial-select/XM02"},next:{title:"\u4fee\u6539\u63d0\u793a",permalink:"/docs/tutorial-select/XM04"}},s={},d=[{value:"\u4f7f\u7528<code>selected</code>\u5c5e\u6027",id:"\u4f7f\u7528selected\u5c5e\u6027",level:2},{value:"\u4f7f\u7528initValue\u8fdb\u884c\u521d\u59cb\u5316",id:"\u4f7f\u7528initvalue\u8fdb\u884c\u521d\u59cb\u5316",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9ed8\u8ba4\u9009\u4e2d"},"\u9ed8\u8ba4\u9009\u4e2d"),(0,l.kt)("h2",{id:"\u4f7f\u7528selected\u5c5e\u6027"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h2"},"selected"),"\u5c5e\u6027"),(0,l.kt)("p",null,"\u5f53\u7136",(0,l.kt)("inlineCode",{parentName:"p"},"selected"),"\u662f\u9009\u4e2d, ",(0,l.kt)("inlineCode",{parentName:"p"},"disabled"),"\u662f\u7981\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo2\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo2 = xmSelect.render({\n    el: '#demo2', \n    data: [\n        {name: '\u6c34\u679c', value: 1, selected: true, disabled: true},\n        {name: '\u852c\u83dc', value: 2, selected: true},\n        {name: '\u684c\u5b50', value: 3, disabled: true},\n        {name: '\u5317\u4eac', value: 4},\n    ]\n})\n<\/script>\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528initvalue\u8fdb\u884c\u521d\u59cb\u5316"},"\u4f7f\u7528initValue\u8fdb\u884c\u521d\u59cb\u5316"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"initValue"),"\u7684\u4f18\u5148\u7ea7\u5927\u4e8e\u9009\u9879\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"selected")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\" class=\"xm-select-demo\"></div>\n\n<script>\nvar demo5 = xmSelect.render({\n    el: '#demo1', \n    initValue: [4],\n    data: [\n        {name: '\u6c34\u679c', value: 1, selected: true, disabled: true},\n        {name: '\u852c\u83dc', value: 2, selected: true},\n        {name: '\u684c\u5b50', value: 3, disabled: true},\n        {name: '\u5317\u4eac', value: 4},\n    ]\n})\n<\/script>\n")))}m.isMDXComponent=!0}}]);