"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[710],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(a),h=n,v=m["".concat(p,".").concat(h)]||m[h]||s[h]||l;return a?r.createElement(v,o(o({ref:e},u),{},{components:a})):r.createElement(v,o({ref:e},u))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8415:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={},p=void 0,c={unversionedId:"laravel/contributions",id:"laravel/contributions",title:"contributions",description:"\u9519\u8bef\u53cd\u9988",source:"@site/docs/laravel/contributions.md",sourceDirName:"laravel",slug:"/laravel/contributions",permalink:"/docs/laravel/contributions",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"contributing",permalink:"/docs/laravel/contributing"},next:{title:"controllers",permalink:"/docs/laravel/controllers"}},u={},s=[{value:"\u9519\u8bef\u53cd\u9988",id:"\u9519\u8bef\u53cd\u9988",level:2},{value:"\u6838\u5fc3\u5f00\u53d1\u8ba8\u8bba",id:"\u6838\u5fc3\u5f00\u53d1\u8ba8\u8bba",level:2},{value:"\u9009\u62e9\u5206\u652f\uff1f",id:"\u9009\u62e9\u5206\u652f",level:2},{value:"\u5b89\u5168\u6f0f\u6d1e",id:"\u5b89\u5168\u6f0f\u6d1e",level:2},{value:"\u7f16\u7801\u98ce\u683c",id:"\u7f16\u7801\u98ce\u683c",level:2},{value:"PHPDoc",id:"phpdoc",level:3},{value:"StyleCI",id:"styleci",level:3},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],m={toc:s};function h(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"laravel-\u6e90\u4ee3\u7801\u8d21\u732e\u6307\u5357"},"Laravel \u6e90\u4ee3\u7801\u8d21\u732e\u6307\u5357"),(0,l.kt)("h2",{id:"\u9519\u8bef\u53cd\u9988"},"\u9519\u8bef\u53cd\u9988"),(0,l.kt)("p",null,"\u4e3a\u4e86\u9f13\u52b1\u79ef\u6781\u534f\u4f5c\uff0cLaravel \u5f3a\u70c8\u5730\u9f13\u52b1\u4f7f\u7528 Pull Request \u6307\u51fa\u4fee\u6539\u7684\u5185\u5bb9\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u662f\u53cd\u9988\u9519\u8bef\u3002\u300c\u9519\u8bef\u53cd\u9988\u300d\u4e5f\u53ef\u4ee5\u7528 PR \u6765\u63d0\u4ea4\u5931\u8d25\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8981\u63d0\u4ea4\u9519\u8bef\u53cd\u9988\uff0c\u4f60\u7684\u95ee\u9898\u5e94\u8be5\u5305\u542b\u6807\u9898\u548c\u660e\u786e\u7684\u95ee\u9898\u63cf\u8ff0\uff0c\u5e76\u5c3d\u53ef\u80fd\u591a\u7684\u63d0\u4f9b\u76f8\u5173\u7684\u4fe1\u606f\u548c\u6f14\u793a\u8be5\u95ee\u9898\u7684\u4ee3\u7801\u793a\u4f8b\u3002\u9519\u8bef\u53cd\u9988\u7684\u76ee\u7684\u662f\u8ba9\u4f60\u548c\u5176\u4ed6\u4eba\u53ef\u4ee5\u8f7b\u677e\u5730\u91cd\u73b0\u5e76\u4fee\u590d\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u9519\u8bef\u53cd\u9988\u7684\u521d\u8877\u662f\u8ba9\u5176\u5b83\u6709\u76f8\u540c\u95ee\u9898\u7684\u4eba\u80fd\u591f\u548c\u4f60\u534f\u4f5c\u89e3\u51b3\u95ee\u9898\u3002\u4e0d\u8981\u6307\u671b\u53cd\u9988\u9519\u8bef\u540e\u4f1a\u5f88\u5feb\u6709\u4eba\u4fee\u590d\u5b83\u3002\u521b\u5efa\u9519\u8bef\u53cd\u9988\u662f\u80fd\u5e2e\u52a9\u4f60\u548c\u5176\u4ed6\u4eba\u5f00\u59cb\u7740\u624b\u4fee\u590d\u95ee\u9898\u7684\u9014\u5f84\u3002"),(0,l.kt)("p",null,"Laravel \u6e90\u4ee3\u7801\u6258\u7ba1\u5728 GitHub \u4e0a\u9762\uff0c\u5e76\u4e14\u6bcf\u4e2a Laravel \u7684\u9879\u76ee\u90fd\u6709\u81ea\u5df1\u7684\u4ee3\u7801\u4ed3\u5e93\uff1a"),(0,l.kt)("div",{class:"content-list",markdown:"1"},"- [Laravel \u5e94\u7528](https://github.com/laravel/laravel) - [Laravel Art](https://github.com/laravel/art) - [Laravel \u6587\u6863](https://github.com/laravel/docs) - [Laravel Cashier](https://github.com/laravel/cashier) - [Braintree \u7248 Laravel Cashier](https://github.com/laravel/cashier-braintree) - [Laravel Envoy](https://github.com/laravel/envoy) - [Laravel \u6846\u67b6](https://github.com/laravel/framework) - [Laravel Homestead](https://github.com/laravel/homestead) - [Laravel Homestead \u6784\u5efa\u811a\u672c](https://github.com/laravel/settler) - [Laravel Passport](https://github.com/laravel/passport) - [Laravel \u641c\u7d22\u7cfb\u7edf](https://github.com/laravel/scout) - [Laravel Socialite](https://github.com/laravel/socialite) - [Laravel \u7f51\u7ad9](https://github.com/laravel/laravel.com)"),(0,l.kt)("h2",{id:"\u6838\u5fc3\u5f00\u53d1\u8ba8\u8bba"},"\u6838\u5fc3\u5f00\u53d1\u8ba8\u8bba"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u63d0\u51fa\u73b0\u6709\u7684 Laravel \u7684\u529f\u80fd\u5efa\u8bae\u6216\u8005\u6539\u8fdb\uff0c\u8bf7\u5230 Laravel Internals \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/laravel/internals/issues"},"\u53cd\u9988\u680f")," \u8ba8\u8bba\u3002\u5982\u679c\u4f60\u63d0\u51fa\u65b0\u529f\u80fd\uff0c\u5982\u679c\u613f\u610f\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u8bf7\u4f60\u81f3\u5c11\u5b9e\u73b0\u4e00\u4e9b\u5b8c\u6210\u8be5\u529f\u80fd\u6240\u9700\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u9519\u8bef\u3001\u65b0\u529f\u80fd\u548c\u73b0\u6709\u529f\u80fd\u7684\u5b9e\u73b0\u7684\u975e\u6b63\u5f0f\u8ba8\u8bba\u4f1a\u5728 ",(0,l.kt)("a",{parentName:"p",href:"http://larachat.co"},"LaraChat")," Slack \u56e2\u961f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"#internals")," \u9891\u9053\u4e2d\u8fdb\u884c\u3002Laravel \u7684\u7ef4\u62a4\u8005 Taylor Otwell \u901a\u5e38\u90fd\u4f1a\u5728\u5de5\u4f5c\u65e5\u7684\u65e9\u4e0a 8 \u70b9 \u5230\u4e0b\u5348 5\u70b9\uff08 UTC-06:00 \u6216 America/Chicago \uff09\u51fa\u73b0\u5728\u9891\u9053\u4e0a\uff0c\u5176\u5b83\u65f6\u95f4\u5076\u5c14\u4e5f\u4f1a\u51fa\u73b0\u3002"),(0,l.kt)("h2",{id:"\u9009\u62e9\u5206\u652f"},"\u9009\u62e9\u5206\u652f\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u9519\u8bef\u4fee\u590d\u90fd\u5e94\u8be5\u53d1\u9001\u5230\u6700\u65b0\u7684\u7a33\u5b9a\u5206\u652f\u6216\u5f53\u524d\u7684 LTS \u5206\u652f\uff085.5\uff09\u4e0a\u3002\u9519\u8bef\u4fee\u590d",(0,l.kt)("strong",{parentName:"p"},"\u4e0d"),"\u5e94\u8be5\u53d1\u9001\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u652f\uff0c\u9664\u975e\u5b83\u4eec\u4fee\u590d\u4ec5\u5728\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u5b58\u5728\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4e0e\u5f53\u524d Laravel \u7248\u672c",(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u5411\u540e\u517c\u5bb9"),"\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6b21\u8981"),"\u529f\u80fd\u53ef\u80fd\u4f1a\u53d1\u9001\u5230\u6700\u65b0\u7684\u7a33\u5b9a\u5206\u652f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u7684")," \u65b0\u529f\u80fd\u90fd\u5e94\u8be5\u53d1\u9001\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u5206\u652f\uff0c\u5b83\u5305\u542b\u5373\u5c06\u53d1\u5e03\u7684 Laravel \u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u786e\u5b9a\u4f60\u7684\u529f\u80fd\u662f\u4e3b\u8981\u7684\u8fd8\u662f\u6b21\u8981\u7684\uff0c\u8bf7\u54a8\u8be2 ",(0,l.kt)("a",{parentName:"p",href:"http://larachat.co"},"LaraChat")," Slack \u56e2\u961f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"#internals")," \u9891\u9053\u4e0a\u7684 Taylor Otwell\u3002"),(0,l.kt)("h2",{id:"\u5b89\u5168\u6f0f\u6d1e"},"\u5b89\u5168\u6f0f\u6d1e"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53d1\u73b0 Laravel \u5b58\u5728\u5b89\u5168\u6f0f\u6d1e\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u7ed9Taylor Otwell\uff1a ",(0,l.kt)("a",{href:"mailto:taylor@laravel.com"},(0,l.kt)("a",{parentName:"p",href:"mailto:taylor@laravel.com"},"taylor@laravel.com"),"\u3002\u4ed6\u4f1a\u53ca\u65f6\u89e3\u51b3\u6240\u6709\u5b89\u5168\u6f0f\u6d1e\u3002")),(0,l.kt)("h2",{id:"\u7f16\u7801\u98ce\u683c"},"\u7f16\u7801\u98ce\u683c"),(0,l.kt)("p",null,"Laravel \u9075\u5faa ",(0,l.kt)("a",{parentName:"p",href:"https://phphub.org/topics/2079"},"PSR-2")," \u7f16\u7801\u89c4\u8303\u548c ",(0,l.kt)("a",{parentName:"p",href:"https://phphub.org/topics/2081"},"PSR-4")," \u81ea\u52a8\u52a0\u8f7d\u89c4\u8303\u3002"),(0,l.kt)("h3",{id:"phpdoc"},"PHPDoc"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b63\u786e\u7684 Laravel \u6ce8\u91ca\u7684\u793a\u4f8b\u3002\u8bf7\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@param")," \u5c5e\u6027\u540e\u8ddf\u4e24\u4e2a\u7a7a\u683c\u3001\u53c2\u6570\u7c7b\u578b\u3001\u4e24\u4e2a\u7a7a\u683c\uff0c\u6700\u540e\u662f\u53d8\u91cf\u540d\u79f0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6ce8\u518c\u4e00\u4e2a\u7ed1\u5b9a\u5230\u5bb9\u5668\u3002\n *\n * @param  string|array  $abstract\n * @param  \\Closure|string|null  $concrete\n * @param  bool  $shared\n * @return void\n */\npublic function bind($abstract, $concrete = null, $shared = false)\n{\n    //\n}\n")),(0,l.kt)("h3",{id:"styleci"},"StyleCI"),(0,l.kt)("p",null,"\u522b\u62c5\u5fc3\u4f60\u7684\u7f16\u7801\u98ce\u683c\u4e0d\u591f\u6f02\u4eae\uff01\u5728\u5408\u5e76 PR \u540e ",(0,l.kt)("a",{parentName:"p",href:"https://styleci.io"},"StyleCI")," \u4f1a\u81ea\u52a8\u4fee\u6b63\u6837\u5f0f\u540e\u518d\u5408\u5e76\u5230 Laravel \u4ed3\u5e93\u4e2d\u3002\u8fd9\u6837\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u8d21\u732e\u5185\u5bb9\u672c\u8eab\u800c\u4e0d\u662f\u7f16\u7801\u98ce\u683c\u3002"),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/medz"},"Seven Du")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://avatars3.githubusercontent.com/u/5564821?s=300"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e Laravel \u7684\u793e\u4ea4\u5f00\u6e90\u7cfb\u7edf ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/slimkit/thinksns-plus"},"ThinkSNS+")," \u6b22\u8fce Star\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/5350"},"@JokerLinly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/5350_1481857380.jpg"})),(0,l.kt)("td",{parentName:"tr",align:null},"Review"),(0,l.kt)("td",{parentName:"tr",align:null},"Stay Hungry. Stay Foolish.")))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}h.isMDXComponent=!0}}]);