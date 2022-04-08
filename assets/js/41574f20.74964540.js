"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9641],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7798:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={},i=void 0,u={unversionedId:"select/development-center/ZP04",id:"select/development-center/ZP04",title:"ZP04",description:"layui\u6298\u53e0\u9762\u677f",source:"@site/docs/select/development-center/ZP04.md",sourceDirName:"select/development-center",slug:"/select/development-center/ZP04",permalink:"/docs/select/development-center/ZP04",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ZP03",permalink:"/docs/select/development-center/ZP03"},next:{title:"ZP05",permalink:"/docs/select/development-center/ZP05"}},s={},p=[{value:"layui\u6298\u53e0\u9762\u677f",id:"layui\u6298\u53e0\u9762\u677f",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0b\u62c9\u6298\u53e0\u9762\u677f"},"\u4e0b\u62c9\u6298\u53e0\u9762\u677f"),(0,a.kt)("h2",{id:"layui\u6298\u53e0\u9762\u677f"},"layui\u6298\u53e0\u9762\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sass"},"//css\u8c03\u6574\u90e8\u5206\nxm-select .scroll-body{\n    margin-top: -5px;\n}\nxm-select .xm-body{\n    padding: 0;\n    border: none;\n    background-color: usnet;\n    box-shadow: none;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<div id=\"demo1\" style=\"width: 500px;\"></div>\n\n<script>\n\nvar list = [\n    { name: '\u675c\u752b', selected: true, content: '\u675c\u752b\u7684\u601d\u60f3\u6838\u5fc3\u662f\u5112\u5bb6\u7684\u4ec1\u653f\u601d\u60f3\uff0c\u4ed6\u6709\u201c\u81f4\u541b\u5c27\u821c\u4e0a\uff0c\u518d\u4f7f\u98ce\u4fd7\u6df3\u201d\u7684\u5b8f\u4f1f\u62b1\u8d1f\u3002\u675c\u752b\u867d\u7136\u5728\u4e16\u65f6\u540d\u58f0\u5e76\u4e0d\u663e\u8d6b\uff0c\u4f46\u540e\u6765\u58f0\u540d\u8fdc\u64ad\uff0c\u5bf9\u4e2d\u56fd\u6587\u5b66\u548c\u65e5\u672c\u6587\u5b66\u90fd\u4ea7\u751f\u4e86\u6df1\u8fdc\u7684\u5f71\u54cd\u3002\u675c\u752b\u5171\u6709\u7ea61500\u9996\u8bd7\u6b4c\u88ab\u4fdd\u7559\u4e86\u4e0b\u6765\uff0c\u5927\u591a\u96c6\u4e8e\u300a\u675c\u5de5\u90e8\u96c6\u300b\u3002' },\n    { name: '\u674e\u6e05\u7167', content: '\u674e\u6e05\u7167\u51fa\u751f\u4e8e\u4e66\u9999\u95e8\u7b2c\uff0c\u65e9\u671f\u751f\u6d3b\u4f18\u88d5\uff0c\u5176\u7236\u674e\u683c\u975e\u85cf\u4e66\u751a\u5bcc\uff0c\u5979\u5c0f\u65f6\u5019\u5c31\u5728\u826f\u597d\u7684\u5bb6\u5ead\u73af\u5883\u4e2d\u6253\u4e0b\u6587\u5b66\u57fa\u7840\u3002\u51fa\u5ac1\u540e\u4e0e\u592b\u8d75\u660e\u8bda\u5171\u540c\u81f4\u529b\u4e8e\u4e66\u753b\u91d1\u77f3\u7684\u641c\u96c6\u6574\u7406\u3002\u91d1\u5175\u5165\u636e\u4e2d\u539f\u65f6\uff0c\u6d41\u5bd3\u5357\u65b9\uff0c\u5883\u9047\u5b64\u82e6\u3002\u6240\u4f5c\u8bcd\uff0c\u524d\u671f\u591a\u5199\u5176\u60a0\u95f2\u751f\u6d3b\uff0c\u540e\u671f\u591a\u60b2\u53f9\u8eab\u4e16\uff0c\u60c5\u8c03\u611f\u4f24\u3002\u5f62\u5f0f\u4e0a\u5584\u7528\u767d\u63cf\u624b\u6cd5\uff0c\u81ea\u8f9f\u9014\u5f84\uff0c\u8bed\u8a00\u6e05\u4e3d\u3002' },\n    { name: '\u9c81\u8fc5', content: '\u9c81\u8fc5\u4e00\u751f\u5728\u6587\u5b66\u521b\u4f5c\u3001\u6587\u5b66\u6279\u8bc4\u3001\u601d\u60f3\u7814\u7a76\u3001\u6587\u5b66\u53f2\u7814\u7a76\u3001\u7ffb\u8bd1\u3001\u7f8e\u672f\u7406\u8bba\u5f15\u8fdb\u3001\u57fa\u7840\u79d1\u5b66\u4ecb\u7ecd\u548c\u53e4\u7c4d\u6821\u52d8\u4e0e\u7814\u7a76\u7b49\u591a\u4e2a\u9886\u57df\u5177\u6709\u91cd\u5927\u8d21\u732e\u3002\u4ed6\u5bf9\u4e8e\u4e94\u56db\u8fd0\u52a8\u4ee5\u540e\u7684\u4e2d\u56fd\u793e\u4f1a\u601d\u60f3\u6587\u5316\u53d1\u5c55\u5177\u6709\u91cd\u5927\u5f71\u54cd\uff0c\u871a\u58f0\u4e16\u754c\u6587\u575b\uff0c\u5c24\u5176\u5728\u97e9\u56fd\u3001\u65e5\u672c\u601d\u60f3\u6587\u5316\u9886\u57df\u6709\u6781\u5176\u91cd\u8981\u7684\u5730\u4f4d\u548c\u5f71\u54cd\uff0c\u88ab\u8a89\u4e3a\u201c\u4e8c\u5341\u4e16\u7eaa\u4e1c\u4e9a\u6587\u5316\u5730\u56fe\u4e0a\u5360\u6700\u5927\u9886\u571f\u7684\u4f5c\u5bb6\u201d\u3002' },\n]\n\nvar html = list.map(function(item){\n    return `\n        <div class=\"layui-colla-item\">\n            <h2 class=\"layui-colla-title\" value=\"${item.name}\">${ item.name }</h2>\n            <div class=\"layui-colla-content ${ item.selected && 'layui-show' }\">${ item.content }</div>\n        </div>\n    `\n}).join('');\n\nvar demo1 = xmSelect.render({\n    el: '#demo1', \n    content: `\n        <div class=\"layui-collapse\" lay-filter=\"collapse\">\n            ${ html }\n        </div>\n    `,\n    height: 'auto',\n    autoRow: true,\n    data: list,\n    prop: { value: 'name' },\n    on: function(data){\n        if(!data.isAdd){\n            var item = data.change[0];\n            document.querySelector(`#demo1 .layui-collapse .layui-colla-title[value=\"${item.name}\"]`).nextElementSibling.classList.remove('layui-show')\n        }\n    }\n})\n\nlayui.element.init()\n\nlayui.element.on('collapse(collapse)', function(data){\n    let value = data.title.attr('value');\n    if(data.show){\n        demo1.append([ value ])\n    }else{\n        demo1.delete([ value ])\n    }\n});\n\n//\u8fd9\u91cc\u4ec5\u4ec5\u63d0\u4f9b\u4e00\u4e2a\u6f14\u793a, \u66f4\u591a\u7684\u60f3\u6cd5\u7531\u4f60\u81ea\u5df1\u6765\u521b\u9020\n\n<\/script>\n")))}m.isMDXComponent=!0}}]);