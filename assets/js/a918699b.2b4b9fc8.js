"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7661],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3970:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},u="\u8fdc\u7a0b\u641c\u7d22",l={unversionedId:"tutorial-select/ZM04",id:"tutorial-select/ZM04",title:"\u8fdc\u7a0b\u641c\u7d22",description:"",source:"@site/docs/tutorial-select/ZM04.md",sourceDirName:"tutorial-select",slug:"/tutorial-select/ZM04",permalink:"/docs/tutorial-select/ZM04",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8868\u683c\u4e2d\u591a\u9009",permalink:"/docs/tutorial-select/ZM03"},next:{title:"\u52a8\u6001\u6570\u636e",permalink:"/docs/tutorial-select/ZM05"}},s={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fdc\u7a0b\u641c\u7d22"},"\u8fdc\u7a0b\u641c\u7d22"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div id=\"demo1\"></div>\n\n<script>\n    var demo1 = xmSelect.render({\n        el: '#demo1', \n        autoRow: true,\n        toolbar: { show: true },\n        filterable: true,\n        remoteSearch: true,\n        remoteMethod: function(val, cb, show){\n            //\u8fd9\u91cc\u5982\u679cval\u4e3a\u7a7a, \u5219\u4e0d\u89e6\u53d1\u641c\u7d22\n            if(!val){\n                return cb([]);\n            }\n            //\u8fd9\u91cc\u5f15\u5165\u4e86\u4e00\u4e2a\u7b2c\u4e09\u65b9\u63d2\u4ef6axios, \u76f8\u5f53\u4e8e$.ajax\n            axios({\n                method: 'get',\n                url: 'https://www.fastmock.site/mock/98228b1f16b7e5112d6c0c87921eabc1/xmSelect/search',\n                params: {\n                    keyword: val,\n                }\n            }).then(response => {\n                var res = response.data;\n                cb(res.data)\n            }).catch(err => {\n                cb([]);\n            });\n        },\n    })\n<\/script>\n")))}m.isMDXComponent=!0}}]);