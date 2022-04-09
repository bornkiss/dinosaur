"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3220],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5956:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],l={},u="\u5f39\u6846\u4e2d\u7684\u591a\u9009",i={unversionedId:"select/advanced-example/ZM06",id:"select/advanced-example/ZM06",title:"\u5f39\u6846\u4e2d\u7684\u591a\u9009",description:"layer\u5f39\u51fa\u6846",source:"@site/docs/select/advanced-example/ZM06.md",sourceDirName:"select/advanced-example",slug:"/select/advanced-example/ZM06",permalink:"/docs/select/advanced-example/ZM06",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u6570\u636e",permalink:"/docs/select/advanced-example/ZM05"},next:{title:"\u83b7\u53d6\u5b9e\u4f8b\u5bf9\u8c61",permalink:"/docs/select/advanced-example/ZM07"}},s={},p=[{value:"layer\u5f39\u51fa\u6846",id:"layer\u5f39\u51fa\u6846",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5f39\u6846\u4e2d\u7684\u591a\u9009"},"\u5f39\u6846\u4e2d\u7684\u591a\u9009"),(0,o.kt)("h2",{id:"layer\u5f39\u51fa\u6846"},"layer\u5f39\u51fa\u6846"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<button class=\"btn\" id=\"demo1-btn\">\u5f39\u51fa\u591a\u9009</button>\n\n<script>\ndocument.getElementById('demo1-btn').onclick = function(){\n    layer.open({\n        type: 1,\n        title: '\u591a\u9009',\n        content: '<div id=\"demo1\" class=\"xm-select-demo-alert\"></div>',\n        success: function(layero, index){\n            //\u8fd9\u91cc\u56e0\u4e3a\u5185\u5bb9\u8fc7\u5c11, \u4f1a\u88ab\u906e\u6321, \u6240\u4ee5\u7b80\u5355\u4fee\u6539\u4e86\u4e0b\u6837\u5f0f\n            document.getElementById('layui-layer' + index).getElementsByClassName('layui-layer-content')[0].style.overflow = 'unset';\n            //\u6e32\u67d3\u591a\u9009\n            var demo1 = xmSelect.render({\n                el: '#demo1', \n                data: [\n                    {name: '\u5f20\u4e09', value: 1, selected: true},\n                    {name: '\u674e\u56db', value: 2, disabled: true},\n                    {name: '\u738b\u4e94', value: 3},\n                ]\n            })\n        }\n    });\n}\n<\/script>\n")))}m.isMDXComponent=!0}}]);