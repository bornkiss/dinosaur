"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8531],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,s=m["".concat(o,".").concat(k)]||m[k]||d[k]||p;return n?r.createElement(s,l(l({ref:t},c),{},{components:n})):r.createElement(s,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],i={},o=void 0,u={unversionedId:"xv6/AppendixA",id:"xv6/AppendixA",title:"AppendixA",description:"\u6b64\u6587\u6863\u7531\u8f6c\u8f7d\u81f3ranxian\uff0c\u611f\u8c22\u4f5c\u8005\u3002",source:"@site/docs/xv6/AppendixA.md",sourceDirName:"xv6",slug:"/xv6/AppendixA",permalink:"/docs/xv6/AppendixA",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"preface",permalink:"/docs/xv6/preface"},next:{title:"AppendixB",permalink:"/docs/xv6/AppendixB"}},c={},d=[{value:"PC \u786c\u4ef6",id:"pc-\u786c\u4ef6",level:2},{value:"\u5904\u7406\u5668\u548c\u5185\u5b58",id:"\u5904\u7406\u5668\u548c\u5185\u5b58",level:2},{value:"I/O",id:"io",level:2}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u9644\u5f55-a"},"\u9644\u5f55 A"),(0,p.kt)("p",null,"\u6b64\u6587\u6863\u7531\u8f6c\u8f7d\u81f3",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ranxian/xv6-chinese"},"ranxian"),"\uff0c\u611f\u8c22\u4f5c\u8005\u3002"),(0,p.kt)("h2",{id:"pc-\u786c\u4ef6"},"PC \u786c\u4ef6"),(0,p.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f9b x86 \u8fd0\u884c\u7684\u4e2a\u4eba\u8ba1\u7b97\u673a(PC)\u786c\u4ef6\u5e73\u53f0\u3002"),(0,p.kt)("p",null,"PC \u662f\u6307\u9075\u5b88\u4e00\u5b9a\u5de5\u4e1a\u6807\u51c6\u7684\u8ba1\u7b97\u673a\uff0c\u5b83\u7684\u76ee\u6807\u662f\u4f7f\u5f97\u4e0d\u540c\u5382\u5bb6\u751f\u4ea7\u7684\u673a\u5668\u90fd\u80fd\u591f\u8fd0\u884c\u4e00\u5b9a\u8303\u56f4\u5185\u7684\u8f6f\u4ef6\u3002\u8fd9\u4e9b\u6807\u51c6\u968f\u65f6\u65f6\u95f4\u8fc1\u79fb\u4e0d\u65ad\u53d8\u5316\uff0c\u56e0\u6b6490\u5e74\u4ee3\u7684 PC \u4e0e\u4eca\u65e5\u7684 PC \u770b\u8d77\u6765\u5df2\u662f\u5927\u4e0d\u76f8\u540c\u3002"),(0,p.kt)("p",null,"\u4ece\u5916\u89c2\u6765\u770b\uff0cPC \u662f\u4e00\u4e2a\u914d\u7f6e\u6709\u952e\u76d8\u3001\u5c4f\u5e55\u548c\u5404\u79cd\u8bbe\u5907\u7684\u201c\u76d2\u5b50\u201d\u3002\u76d2\u5b50\u5185\u90e8\u5219\u662f\u4e00\u5757\u96c6\u6210\u7535\u8def\u2014\u2014",(0,p.kt)("em",{parentName:"p"},"\u4e3b\u677f"),"\uff0c\u4e0a\u9762\u6709 CPU \u82af\u7247\uff0c\u5185\u5b58\u82af\u7247\uff0c\u663e\u5361\u82af\u7247\uff0cI/O \u63a7\u5236\u5668\u82af\u7247\uff0c\u4ee5\u53ca\u8d1f\u8d23\u82af\u7247\u95f4\u901a\u4fe1\u7684\u603b\u7ebf\u3002\u603b\u7ebf\u4f1a\u9075\u5b88\u67d0\u79cd\u6807\u51c6\uff08\u5982 PCI \u6216 USB\uff09\uff0c\u4ece\u800c\u80fd\u591f\u517c\u5bb9\u4e0d\u540c\u5382\u5bb6\u7684\u8bbe\u5907\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a PC \u62bd\u8c61\u4e3a\u4e09\u90e8\u5206\uff1aCPU\u3001\u5185\u5b58\u548c I/O \u8bbe\u5907\u3002CPU \u8d1f\u8d23\u8ba1\u7b97\uff0c\u5185\u5b58\u7528\u4e8e\u4fdd\u5b58\u8ba1\u7b97\u7528\u7684\u6307\u4ee4\u548c\u6570\u636e\uff0c\u5176\u4ed6\u8bbe\u5907\u7528\u4e8e\u5b9e\u73b0\u5b58\u50a8\u3001\u901a\u8baf\u7b49\u5176\u4ed6\u529f\u80fd\u3002"),(0,p.kt)("p",null,'\u4f60\u53ef\u4ee5\u60f3\u8c61\u4e3b\u5b58\u4ee5\u4e00\u7ec4\u5bfc\u7ebf\u4e0e CPU \u76f8\u8fde\u63a5\uff0c\u5176\u4e2d\u4e00\u4e9b\u662f\u5730\u5740\u7ebf\uff0c\u4e00\u4e9b\u662f\u6570\u636e\u7ebf\uff0c\u8fd8\u6709\u4e00\u4e9b\u5219\u662f\u63a7\u5236\u7ebf\u3002CPU \u8981\u4ece\u4e3b\u5b58\u8bfb\u51fa\u4e00\u4e2a\u503c\uff0c\u9700\u8981\u5411\u5730\u5740\u7ebf\u4e0a\u8f93\u51fa\u4e00\u7cfb\u5217\u8868\u793a0\u548c1\u7684\u7535\u538b\uff0c\u5e76\u5728\u89c4\u5b9a\u7684\u65f6\u95f4\u5185\u5728 \u201c\u8bfb\u201d \u7ebf\u4e0a\u53d1\u51fa\u4fe1\u53f71\uff0c\u63a5\u4e0b\u6765\u518d\u4ece\u6570\u636e\u7ebf\u4e0a\u7684\u9ad8\u4f4e\u7535\u538b\u4e2d\u83b7\u53d6\u6570\u636e\u3002CPU \u82e5\u8981\u5411\u5185\u5b58\u4e2d\u5199\u5165\u4e00\u4e2a\u503c\uff0c\u5219\u5411\u6570\u636e\u7ebf\u548c\u5730\u5740\u7ebf\u4e0a\u5199\u5165\u5408\u9002\u7684\u503c\uff0c\u5e76\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u5728 "\u5199" \u4f4d\u4e0a\u53d1\u51fa\u4fe1\u53f71.\u771f\u5b9e\u7684\u5185\u5b58\u63a5\u53e3\u6bd4\u8fd9\u590d\u6742\u7684\u591a\uff0c\u4f46\u9664\u975e\u4f60\u662f\u5728\u8ffd\u6c42\u9ad8\u6027\u80fd\uff0c\u5426\u5219\u4f60\u4e0d\u5fc5\u8003\u8651\u8fd9\u4e48\u591a\u7684\u7ec6\u8282\u3002'),(0,p.kt)("h2",{id:"\u5904\u7406\u5668\u548c\u5185\u5b58"},"\u5904\u7406\u5668\u548c\u5185\u5b58"),(0,p.kt)("p",null,"CPU\uff08\u4e2d\u592e\u5904\u7406\u5355\u5143\uff0c\u6216\u5904\u7406\u5668\uff09\u5176\u5b9e\u53ea\u662f\u5728\u6267\u884c\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u5faa\u73af\uff1a\u4ece\u4e00\u4e2a\u88ab\u79f0\u4e3a\u300e\u7a0b\u5e8f\u8ba1\u6570\u5668\u300f\u7684\u5bc4\u5b58\u5668\u4e2d\u83b7\u53d6\u4e00\u4e2a\u5185\u5b58\u5730\u5740\uff0c\u4ece\u8fd9\u4e2a\u5730\u5740\u8bfb\u51fa\u673a\u5668\u6307\u4ee4\uff0c\u589e\u52a0\u7a0b\u5e8f\u8ba1\u6570\u5668\u7684\u503c\uff0c\u6267\u884c\u673a\u5668\u6307\u4ee4\uff0c\u4e0d\u65ad\u53cd\u590d\u3002\u67d0\u4e9b\u673a\u5668\u6307\u4ee4\u5982\u5206\u652f\u548c\u51fd\u6570\u8c03\u7528\u4f1a\u6539\u53d8\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0c\u5982\u679c\u6267\u884c\u673a\u5668\u6307\u4ee4\u6ca1\u6709\u6539\u53d8\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0c\u8fd9\u4e2a\u5faa\u73af\u5c31\u4f1a\u4ece\u7a0b\u5e8f\u8ba1\u6570\u5668\u5f00\u59cb\u4e00\u6761\u4e00\u6761\u5730\u6267\u884c\u6307\u4ee4\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4e0d\u80fd\u4fdd\u5b58\u548c\u4fee\u6539\u7a0b\u5e8f\u6570\u636e\uff0c\u90a3\u4e48\u6267\u884c\u6307\u4ee4\u5c31\u662f\u6beb\u65e0\u610f\u4e49\u7684\u3002\u901f\u5ea6\u6700\u5feb\u7684\u6570\u636e\u5b58\u50a8\u5668\u662f\u5904\u7406\u5668\u7684\u5bc4\u5b58\u5668\u7ec4\u3002\u4e00\u4e2a\u5bc4\u5b58\u5668\u662f\u5904\u7406\u5668\u5185\u7684\u4e00\u4e2a\u5b58\u50a8\u5355\u5143\uff0c\u80fd\u591f\u4fdd\u5b58\u4e00\u4e2a\u5b57\u5927\u5c0f\u7684\u503c\uff08\u6309\u7167\u673a\u5668\u4e0d\u540c\uff0c\u4e00\u4e2a\u5b57\u901a\u5e38\u4f1a\u662f16\uff0c32\u6216\u800564\u4f4d\uff09\u3002\u5bc4\u5b58\u5668\u5185\u7684\u503c\u80fd\u5728\u4e00\u4e2a CPU \u5468\u671f\u5185\u88ab\u5feb\u901f\u5730\u8bfb\u5199\u3002"),(0,p.kt)("p",null,"PC \u5904\u7406\u5668\u5b9e\u73b0\u4e86 x86 \u6307\u4ee4\u96c6\uff0c\u8be5\u6307\u4ee4\u96c6\u7531 Intel \u53d1\u5e03\u5e76\u6210\u4e3a\u4e86\u4e00\u79cd\u6807\u51c6\uff0c\u4e00\u4e9b\u4ea7\u5546\u751f\u4ea7\u5b9e\u73b0\u4e86\u8be5\u6307\u4ee4\u96c6\u7684\u5904\u7406\u5668\u3002\u548c\u5176\u4ed6\u7684 PC \u6807\u51c6\u4e00\u6837\uff0c\u8fd9\u4e2a\u6807\u51c6\u4e5f\u5728\u4e0d\u65ad\u66f4\u65b0\uff0c\u4f46\u662f\u65b0\u7684\u6807\u51c6\u662f\u5411\u524d\u517c\u5bb9\u7684\u3002\u7531\u4e8e PC \u5904\u7406\u5668\u542f\u52a8\u65f6\u90fd\u662f\u6a21\u62df1981\u5e74 IBM PC \u4e0a\u4f7f\u7528\u7684\u82af\u7247 Intel 8088\uff0c\u6240\u4ee5 boot loader \u9700\u8981\u4f5c\u51fa\u6539\u53d8\u4ee5\u5e94\u5bf9\u6807\u51c6\u7684\u66f4\u65b0\u3002\u4f46\u662f\uff0c\u5bf9\u4e8e xv6 \u7684\u7edd\u5927\u90e8\u5206\u5185\u5bb9\uff0c\u4f60\u53ea\u9700\u8981\u5173\u5fc3\u73b0\u4ee3 x86 \u6307\u4ee4\u96c6\u3002"),(0,p.kt)("p",null,"\u73b0\u4ee3 x86 \u63d0\u4f9b\u4e868\u4e2a32\u4f4d\u901a\u7528\u5bc4\u5b58\u5668--",(0,p.kt)("inlineCode",{parentName:"p"},"%eax, %ebx, %ecx, %edx, %edi, %esi, %ebp, %esp")," \u548c\u4e00\u4e2a\u7a0b\u5e8f\u8ba1\u6570\u5668 ",(0,p.kt)("inlineCode",{parentName:"p"},"%eip"),"\uff08",(0,p.kt)("em",{parentName:"p"},"instruction pointer"),"\uff09\u3002\u524d\u7f00",(0,p.kt)("em",{parentName:"p"},"e"),"\u662f\u6307",(0,p.kt)("em",{parentName:"p"},"\u6269\u5c55\u7684"),"\uff08",(0,p.kt)("em",{parentName:"p"},"extended"),"\uff09\uff0c\u8868\u793a\u5b83\u4eec\u662f16\u4f4d\u5bc4\u5b58\u5668",(0,p.kt)("inlineCode",{parentName:"p"},"%ax, %bx, %cx, %dx, %di, %si, %bp, %sp")," \u768432\u4f4d\u6269\u5c55\u3002\u8fd9\u4e24\u5957\u5bc4\u5b58\u5668\u5176\u5b9e\u662f\u76f8\u4e92\u7684\u522b\u540d\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"%ax")," \u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"%eax")," \u7684\u4f4e\u4f4d\uff1a\u6211\u4eec\u5728\u5199 ",(0,p.kt)("inlineCode",{parentName:"p"},"%ax")," \u7684\u65f6\u5019\u4e5f\u4f1a\u6539\u53d8 ",(0,p.kt)("inlineCode",{parentName:"p"},"%eax"),"\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u524d\u56db\u4e2a\u5bc4\u5b58\u5668\u7684\u4e24\u4e2a\u4f4e8\u4f4d\u8fd8\u6709\u81ea\u5df1\u7684\u540d\u5b57\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"%al, %ah")," \u5206\u522b\u8868\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"%ax")," \u7684\u4f4e8\u4f4d\u548c\u9ad88\u4f4d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"%bl, %bh, %cl, %ch, %dl, %dh"),"\u540c\u7406\u3002\u53e6\u5916\uff0cx86 \u8fd8\u67098\u4e2a80\u4f4d\u7684\u6d6e\u70b9\u5bc4\u5b58\u5668\uff0c\u4ee5\u53ca\u4e00\u7cfb\u5217\u7279\u6b8a\u7528\u9014\u7684\u5bc4\u5b58\u5668\u5982",(0,p.kt)("em",{parentName:"p"},"\u63a7\u5236\u5bc4\u5b58\u5668")," ",(0,p.kt)("inlineCode",{parentName:"p"},"%cr0, %cr2, %cr3, %cr4"),"\uff0c",(0,p.kt)("em",{parentName:"p"},"\u8c03\u8bd5\u5bc4\u5b58\u5668")," ",(0,p.kt)("inlineCode",{parentName:"p"},"%dr0, %dr1, %dr2, %dr3"),"\uff1b\u6bb5\u5bc4\u5b58\u5668 ",(0,p.kt)("inlineCode",{parentName:"p"},"%cs, %ds, %es, %fs, %gs, %ss"),"\uff1b\u8fd8\u6709\u5168\u5c40\u548c\u5c40\u90e8\u63cf\u8ff0\u7b26\u8868\u7684\u4f2a\u5bc4\u5b58\u5668",(0,p.kt)("inlineCode",{parentName:"p"},"%gdtr, %ldtr"),"\u3002\u63a7\u5236\u5bc4\u5b58\u5668\u548c\u6bb5\u5bc4\u5b58\u5668\u5bf9\u4e8e\u4efb\u4f55\u64cd\u4f5c\u7cfb\u7edf\u90fd\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u6d6e\u70b9\u5bc4\u5b58\u5668\u548c\u8c03\u8bd5\u5bc4\u5b58\u5668\u5219\u6ca1\u90a3\u4e48\u6709\u610f\u601d\uff0c\u5e76\u4e14\u4e5f\u6ca1\u6709\u5728 xv6 \u4e2d\u4f7f\u7528\u3002"),(0,p.kt)("p",null,"\u5bc4\u5b58\u5668\u975e\u5e38\u5feb\u4f46\u662f\u4e5f\u975e\u5e38\u6602\u8d35\u3002\u5927\u591a\u6570\u5904\u7406\u5668\u90fd\u4f1a\u63d0\u4f9b\u81f3\u591a\u6570\u5341\u4e2a\u901a\u7528\u5bc4\u5b58\u5668\u3002\u4e0b\u4e00\u4e2a\u5c42\u6b21\u7684\u5b58\u50a8\u5668\u662f\u968f\u673a\u5b58\u50a8\u5668\uff08RAM\uff09\u3002\u4e3b\u5b58\u7684\u901f\u5ea6\u5927\u6982\u6bd4\u5bc4\u5b58\u5668\u616210\u5230100\u500d\uff0c\u4f46\u8981\u4fbf\u5b9c\u5f97\u591a\uff0c\u6240\u4ee5\u5bb9\u91cf\u53ef\u4ee5\u66f4\u5927\u3002\u4e3b\u5b58\u8f83\u6162\u7684\u4e00\u4e2a\u539f\u56e0\u662f\u5b83\u4e0d\u5728\u5904\u7406\u5668\u82af\u7247\u4e0a\u3002\u4e00\u4e2a x86 \u5904\u7406\u5668\u53ea\u6709\u5341\u591a\u4e2a\u5bc4\u5b58\u5668\uff0c\u4f46\u4eca\u5929\u7684 PC \u901a\u5e38\u6709 GB \u7ea7\u7684\u4e3b\u5b58\u3002\u7531\u4e8e\u5bc4\u5b58\u5668\u548c\u4e3b\u5b58\u5728\u8bfb\u5199\u901f\u5ea6\u548c\u5927\u5c0f\u4e0a\u7684\u5de8\u5927\u5dee\u5f02\uff0c\u5927\u591a\u6570\u5904\u7406\u5668\uff0c\u5305\u62ec x86\uff0c\u90fd\u5728\u82af\u7247\u4e0a\u7684\u7f13\u5b58\u4e2d\u4fdd\u5b58\u4e86\u6700\u8fd1\u4f7f\u7528\u7684\u4e3b\u5b58\u6570\u636e\u3002\u7f13\u5b58\u662f\u4e3b\u5b58\u548c\u5bc4\u5b58\u5668\u5728\u901f\u5ea6\u548c\u5927\u5c0f\u4e0a\u7684\u6298\u8877\u3002\u73b0\u5728\u7684 x86 \u5904\u7406\u5668\u901a\u5e38\u6709\u4e8c\u7ea7\u7f13\u5b58\uff0c\u7b2c\u4e00\u7ea7\u8f83\u5c0f\uff0c\u8bfb\u5199\u901f\u7387\u63a5\u8fd1\u5904\u7406\u5668\u7684\u65f6\u949f\u5468\u671f\uff0c\u7b2c\u4e8c\u7ea7\u8f83\u5927\uff0c\u8bfb\u5199\u901f\u7387\u5728\u7b2c\u4e00\u7ea7\u7f13\u5b58\u548c\u4e3b\u5b58\u4e4b\u95f4\u3002\u4e0b\u8868\u663e\u793a\u4e86 Intel Core 2 Duo \u7cfb\u7edf\u7684\u5b9e\u9645\u6570\u636e\uff1a"),(0,p.kt)("p",null,"Intel Core 2 Duo E7200 at 2.53 GHz\n",(0,p.kt)("em",{parentName:"p"},"\u5907\u5fd8\uff1a\u6362\u4e0a\u771f\u5b9e\u6570\u5b57\uff01")),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u5b58\u50a8\u5668"),(0,p.kt)("th",{parentName:"tr",align:null},"\u8bfb\u5199\u65f6\u95f4"),(0,p.kt)("th",{parentName:"tr",align:null},"\u5927\u5c0f"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"\u5bc4\u5b58\u5668"),(0,p.kt)("td",{parentName:"tr",align:null},"0.6ns"),(0,p.kt)("td",{parentName:"tr",align:null},"64 \u5b57\u8282")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"L1\u7f13\u5b58"),(0,p.kt)("td",{parentName:"tr",align:null},"0.5ns"),(0,p.kt)("td",{parentName:"tr",align:null},"64K \u5b57\u8282")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"L2\u7f13\u5b58"),(0,p.kt)("td",{parentName:"tr",align:null},"10ns"),(0,p.kt)("td",{parentName:"tr",align:null},"4M \u5b57\u8282")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"\u4e3b\u5b58"),(0,p.kt)("td",{parentName:"tr",align:null},"100ns"),(0,p.kt)("td",{parentName:"tr",align:null},"4G \u5b57\u8282")))),(0,p.kt)("p",null,"\u901a\u5e38 x86 \u5bf9\u64cd\u4f5c\u7cfb\u7edf\u9690\u85cf\u4e86\u7f13\u5b58\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u9700\u8981\u8003\u8651\u5bc4\u5b58\u5668\u548c\u4e3b\u5b58\u4e24\u79cd\u5b58\u50a8\u5668\uff0c\u4e0d\u7528\u62c5\u5fc3\u4e3b\u5b58\u7684\u5c42\u6b21\u7ed3\u6784\u5f15\u53d1\u7684\u5dee\u5f02\u3002"),(0,p.kt)("h2",{id:"io"},"I/O"),(0,p.kt)("p",null,"\u5904\u7406\u5668\u5fc5\u987b\u50cf\u548c\u4e3b\u5b58\u4ea4\u4e92\u4e00\u6837\u540c\u8bbe\u5907\u4ea4\u4e92\u3002x86 \u5904\u7406\u63d0\u4f9b\u4e86\u7279\u6b8a\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"in, out")," \u6307\u4ee4\u6765\u5728\u8bbe\u5907\u5730\u5740\uff08\u79f0\u4e3a'I/O \u7aef\u53e3'\uff09 \u4e0a\u8bfb\u5199\u3002\u8fd9\u4e24\u4e2a\u6307\u4ee4\u7684\u786c\u4ef6\u5b9e\u73b0\u672c\u8d28\u4e0a\u548c\u8bfb\u5199\u5185\u5b58\u662f\u76f8\u540c\u7684\u3002\u65e9\u671f\u7684 x86 \u5904\u7406\u5668\u6709\u4e00\u6761\u9644\u52a0\u7684\u5730\u5740\u7ebf\uff1a0\u8868\u793a\u4ece I/O \u7aef\u53e3\u8bfb\u5199\uff0c1\u5219\u8868\u793a\u4ece\u4e3b\u5b58\u8bfb\u5199\u3002\u6bcf\u4e2a\u786c\u4ef6\u8bbe\u5907\u4f1a\u5904\u7406\u5b83\u6240\u5728 I/O \u7aef\u53e3\u6240\u63a5\u6536\u5230\u7684\u8bfb\u5199\u64cd\u4f5c\u3002\u8bbe\u5907\u7684\u7aef\u53e3\u4f7f\u5f97\u8f6f\u4ef6\u53ef\u4ee5\u914d\u7f6e\u8bbe\u5907\uff0c\u68c0\u67e5\u72b6\u6001\uff0c\u4f7f\u7528\u8bbe\u5907\uff1b\u4f8b\u5982\uff0c\u8f6f\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5bf9 I/O \u7aef\u53e3\u7684\u8bfb\u5199\uff0c\u4f7f\u78c1\u76d8\u63a5\u53e3\u786c\u4ef6\u5bf9\u78c1\u76d8\u6247\u533a\u8fdb\u884c\u8bfb\u5199\u3002"),(0,p.kt)("p",null,"\u5f88\u591a\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784\u90fd\u6ca1\u6709\u5355\u72ec\u7684\u8bbe\u5907\u8bbf\u95ee\u6307\u4ee4\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u8ba9\u8bbe\u5907\u62e5\u6709\u56fa\u5b9a\u7684\u5185\u5b58\u5730\u5740\uff0c\u7136\u540e\u901a\u8fc7\u5185\u5b58\u8bfb\u5199\u5b9e\u73b0\u8bbe\u5907\u8bfb\u5199\u3002\u5b9e\u9645\u4e0a\u73b0\u4ee3 x86 \u4f53\u7cfb\u7ed3\u6784\u5c31\u5728\u5927\u591a\u6570\u9ad8\u901f\u8bbe\u5907\u4e0a\uff08\u5982\u7f51\u7edc\u3001\u78c1\u76d8\u3001\u663e\u5361\u63a7\u5236\u5668\uff09\u4f7f\u7528\u4e86\u8be5\u6280\u672f\uff0c\u53eb\u505a ",(0,p.kt)("em",{parentName:"p"},"\u5185\u5b58\u6620\u5c04 I/O"),"\u3002\u4f46\u7531\u4e8e\u5411\u524d\u517c\u5bb9\u7684\u539f\u56e0\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"in, out")," \u6307\u4ee4\u4ecd\u80fd\u4f7f\u7528\uff0c\u800c\u6bd4\u8f83\u8001\u7684\u8bbe\u5907\u5982 xv6 \u4e2d\u4f7f\u7528\u7684 IDE \u78c1\u76d8\u63a7\u5236\u5668\u4ecd\u4f7f\u7528\u4e24\u4e2a\u6307\u4ee4\u3002"))}k.isMDXComponent=!0}}]);