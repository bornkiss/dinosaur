"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1382],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),o=n(5979),s=n(6010),i="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,a.useState)(k),E=w[0],O=w[1],T=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=g[m];null!=S&&S!==E&&b.some((function(e){return e.value===S}))&&O(S)}var _=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==E&&(x(t),O(r),null!=m&&N(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:_,onClick:_},l,{className:(0,s.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},1007:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),a="browserWindow_my1Q",l="browserWindowHeader_jXSR",o="buttons_uHc7",s="browserWindowAddressBar_Pd8y",i="dot_giz1",u="browserWindowMenuIcon_Vhuh",c="bar_rrRL",p="browserWindowBody_Idgs";function d(e){var t=e.children,n=e.minHeight,d=e.url,m=void 0===d?"http://localhost:3000":d;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:l},r.createElement("div",{className:o},r.createElement("span",{className:i,style:{background:"#f25f58"}}),r.createElement("span",{className:i,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i,style:{background:"#58cb42"}})),r.createElement("div",{className:s},m),r.createElement("div",{className:u},r.createElement("div",null,r.createElement("span",{className:c}),r.createElement("span",{className:c}),r.createElement("span",{className:c})))),r.createElement("div",{className:p},t))}},1230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(1007),s=n(9877),i=n(8215),u=(n(941),["components"]),c={sidebar_position:1},p=void 0,d={unversionedId:"git/ssh/sshkey",id:"git/ssh/sshkey",title:"sshkey",description:"\u751f\u6210\u516c\u94a5",source:"@site/docs/git/ssh/sshkey.md",sourceDirName:"git/ssh",slug:"/git/ssh/sshkey",permalink:"/docs/git/ssh/sshkey",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"change",permalink:"/docs/git/ssh/change"}},m={},f=[{value:"\u751f\u6210\u516c\u94a5",id:"\u751f\u6210\u516c\u94a5",level:2},{value:"\u6dfb\u52a0\u516c\u94a5",id:"\u6dfb\u52a0\u516c\u94a5",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ssh\u516c\u94a5"},"SSH\u516c\u94a5"),(0,l.kt)("h2",{id:"\u751f\u6210\u516c\u94a5"},"\u751f\u6210\u516c\u94a5"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210sshkey\uff1a"),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ed25519",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t ed25519 -C "ur_email@example.com"\n'))),(0,l.kt)(i.Z,{value:"rsa",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -b 4096 -C "ur_email@example.com"\n'))))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u4e0d\u652f\u6301 Ed25519 \u7b97\u6cd5\u7684\u65e7\u7cfb\u7edf\uff0c\u8bf7\u4f7f\u7528\u7b2c\u4e8c\u79cd ",(0,l.kt)("inlineCode",{parentName:"strong"},"rsa")," \u3002"),(0,l.kt)("br",{parentName:"p"}),"\n","\u8fd9\u91cc\u7684 ",(0,l.kt)("a",{parentName:"p",href:"mailto:ur_email@example.com"},"ur_email@example.com")," \u53ea\u662f\u751f\u6210\u7684 sshkey \u7684\u540d\u79f0\uff0c\u5e76\u4e0d\u7ea6\u675f\u6216\u8981\u6c42\u5177\u4f53\u547d\u540d\u4e3a\u67d0\u4e2a\u90ae\u7bb1\u3002"))),(0,l.kt)("p",null,"\u6309\u7167\u63d0\u793a\u5b8c\u6210\u4e09\u6b21\u56de\u8f66\uff0c\u5373\u53ef\u751f\u6210shh key\u3002\u901a\u8fc7\u67e5\u770b ~/.ssh/id_ed25519.pub \u6587\u4ef6\u5185\u5bb9\uff0c\u83b7\u53d6\u5230\u4f60\u7684 public key \u516c\u94a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_ed25519.pub\n# ssh-ed25519 AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....\n")),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u516c\u94a5"},"\u6dfb\u52a0\u516c\u94a5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4ee5Github\u4e3a\u4f8b"))),(0,l.kt)("p",null,"\u590d\u5236\u751f\u6210\u540e\u7684 ssh key\uff0c\u901a\u8fc7\u4e2a\u4eba\u4e2d\u5fc3 \u300csetting\u300d->\u300cSSH and GPG keys\u300d->\u300cNew SSH key\u300d\uff0c\u6dfb\u52a0\u751f\u6210\u7684 public key \u6dfb\u52a0\u5230SSH keys\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://fuckjs.gitee.io/cdn/docs-leedom-me/add-public-key.png",alt:"\u6dfb\u52a0\u516c\u94a5\u81f3github"})),(0,l.kt)("p",null,"\u6dfb\u52a0\u540e\uff0c\u5728\u7ec8\u7aef\uff08Terminal\uff09\u4e2d\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -T git@github.com\n# Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.\n")),(0,l.kt)("p",null,"\u9996\u6b21\u4f7f\u7528\u9700\u8981\u786e\u8ba4\u5e76\u6dfb\u52a0\u4e3b\u673a\u5230\u672c\u673aSSH\u53ef\u4fe1\u5217\u8868\u3002\u82e5\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.")," \u5185\u5bb9\uff0c\u5219\u8bc1\u660e\u6dfb\u52a0\u6210\u529f\ud83c\udf89\u3002\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528SSH\u534f\u8bae\u5bf9\u4ed3\u5e93\u8fdb\u884c\u64cd\u4f5c\u4e86\ud83d\ude09\u3002"))}b.isMDXComponent=!0},941:function(){}}]);