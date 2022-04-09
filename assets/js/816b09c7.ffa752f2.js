"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4126],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||u;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<u;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(7294),u=t(2389),o=t(5979),l=t(6010),c="tabItem_LplD";function i(e){var n,t,u,i=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(u=v[0])?void 0:u.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),w=g.tabGroupChoices,k=g.setTabGroupChoices,E=(0,a.useState)(h),N=E[0],O=E[1],T=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=w[d];null!=x&&x!==N&&b.some((function(e){return e.value===x}))&&O(x)}var V=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==N&&(j(n),O(r),null!=d&&k(d,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var n=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:V,onClick:V},u,{className:(0,l.Z)("tabs__item",c,null==u?void 0:u.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function s(e){var n=(0,u.Z)();return a.createElement(i,(0,r.Z)({key:String(n)},e))}},1007:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7294),a="browserWindow_my1Q",u="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",c="dot_giz1",i="browserWindowMenuIcon_Vhuh",s="bar_rrRL",p="browserWindowBody_Idgs";function m(e){var n=e.children,t=e.minHeight,m=e.url,d=void 0===m?"http://localhost:3000":m;return r.createElement("div",{className:a,style:{minHeight:t}},r.createElement("div",{className:u},r.createElement("div",{className:o},r.createElement("span",{className:c,style:{background:"#f25f58"}}),r.createElement("span",{className:c,style:{background:"#fbbe3c"}}),r.createElement("span",{className:c,style:{background:"#58cb42"}})),r.createElement("div",{className:l},d),r.createElement("div",{className:i},r.createElement("div",null,r.createElement("span",{className:s}),r.createElement("span",{className:s}),r.createElement("span",{className:s})))),r.createElement("div",{className:p},n))}},4373:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return f}});var r=t(7462),a=t(3366),u=(t(7294),t(3905)),o=t(1007),l=t(9877),c=t(8215),i=(t(941),["components"]),s={},p="Vue",m={unversionedId:"vue/vue",id:"vue/vue",title:"Vue",description:"the different of start between Vue2 and Vue3",source:"@site/docs/vue/vue.md",sourceDirName:"vue",slug:"/vue/",permalink:"/docs/vue/",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"change",permalink:"/docs/git/ssh/change"},next:{title:"\u7ec4\u4ef6\u5e93",permalink:"/docs/vue/library"}},d={},f=[],v={toc:f};function b(e){var n=e.components,t=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"vue"},"Vue"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("em",{parentName:"strong"},"the different of start between Vue2 and Vue3")))),(0,u.kt)(o.Z,{mdxType:"BrowserWindow"},(0,u.kt)(l.Z,{mdxType:"Tabs"},(0,u.kt)(c.Z,{value:"Vue2",label:"Vue2",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const app = new Vue({\n  el: '#app',\n  data: {\n    name: 'Leedom'\n  }\n})\n"))),(0,u.kt)(c.Z,{value:"Vue3",label:"Vue3",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const app = {\n  data() {\n    return {\n      name: 'Leedom'\n    }\n  }\n}\n\nVue.createApp(app).mount('#app')\n"))))))}b.isMDXComponent=!0},941:function(){}}]);