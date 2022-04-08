"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4558],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o=void 0,u={unversionedId:"laravel/testing",id:"laravel/testing",title:"testing",description:"\u7b80\u4ecb",source:"@site/docs/laravel/testing.md",sourceDirName:"laravel",slug:"/laravel/testing",permalink:"/docs/laravel/testing",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"structure",permalink:"/docs/laravel/structure"},next:{title:"upgrade",permalink:"/docs/laravel/upgrade"}},s={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"\u5b9a\u4e49\u5e76\u8fd0\u884c\u6d4b\u8bd5",id:"\u5b9a\u4e49\u5e76\u8fd0\u884c\u6d4b\u8bd5",level:2},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"laravel-\u6d4b\u8bd5-\u5165\u95e8\u6307\u5357"},"Laravel \u6d4b\u8bd5: \u5165\u95e8\u6307\u5357"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Laravel \u5929\u751f\u5c31\u5177\u6709\u6d4b\u8bd5\u7684\u57fa\u56e0\u3002\u4e8b\u5b9e\u4e0a\uff0cLaravel \u9ed8\u8ba4\u5c31\u652f\u6301\u7528 PHPUnit \u6765\u505a\u6d4b\u8bd5\uff0c\u5e76\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u597d\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," \u6587\u4ef6\u3002\u6846\u67b6\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u4fbf\u5229\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u8ba9\u4f60\u53ef\u4ee5\u66f4\u76f4\u89c2\u7684\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u5728\u4f60\u5e94\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"tests")," \u76ee\u5f55\u4e0b\u5305\u542b\u4e86\u4e24\u4e2a\u5b50\u76ee\u5f55\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"Feature")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Unit"),"\u3002\u5355\u5143\u6d4b\u8bd5\u662f\u9488\u5bf9\u4f60\u4ee3\u7801\u4e2d\u76f8\u5bf9\u72ec\u7acb\u800c\u4e14\u975e\u5e38\u5c11\u7684\u4e00\u90e8\u5206\u4ee3\u7801\u6765\u8fdb\u884c\u6d4b\u8bd5\u3002\u5b9e\u9645\u4e0a\uff0c\u5927\u591a\u6570\u5355\u5143\u6d4b\u8bd5\u53ef\u80fd\u90fd\u662f\u9488\u5bf9\u67d0\u4e00\u4e2a\u65b9\u6cd5\u6765\u8fdb\u884c\u7684\u3002\u529f\u80fd\u6d4b\u8bd5\u662f\u9488\u5bf9\u4f60\u4ee3\u7801\u4e2d\u5927\u90e8\u5206\u7684\u4ee3\u7801\u6765\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5305\u62ec\u51e0\u4e2a\u5bf9\u8c61\u7684\u76f8\u4e92\u4f5c\u7528\uff0c\u751a\u81f3\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 HTTP \u8bf7\u6c42 JSON \u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Feature")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Unit")," \u76ee\u5f55\u4e2d\u90fd\u6709\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ExampleTest.php")," \u7684\u793a\u4f8b\u6587\u4ef6\u3002\u5b89\u88c5\u65b0\u7684 Laravel \u5e94\u7528\u7a0b\u5e8f\u4e4b\u540e\uff0c\u53ea\u9700\u5728\u547d\u4ee4\u884c\u4e0a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"phpunit")," \u5c31\u53ef\u4ee5\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,l.kt)("p",null,"\u5728\u8fd0\u884c\u6d4b\u8bd5\u65f6\uff0cLaravel \u4f1a\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," \u6587\u4ef6\u4e2d\u8bbe\u5b9a\u597d\u7684\u73af\u5883\u53d8\u91cf\u81ea\u52a8\u5c06\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"testing"),"\uff0c\u5e76\u5c06 Session \u53ca\u7f13\u5b58\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," \u7684\u5f62\u5f0f\u5b58\u50a8\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u6d4b\u8bd5\u65f6\u4e0d\u4f1a\u6301\u4e45\u5316\u4efb\u4f55 Session \u6216\u7f13\u5b58\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u968f\u610f\u521b\u5efa\u5176\u5b83\u5fc5\u8981\u7684\u6d4b\u8bd5\u73af\u5883\u914d\u7f6e\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"testing")," \u73af\u5883\u7684\u53d8\u91cf\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," \u6587\u4ef6\u4e2d\u88ab\u4fee\u6539\uff0c\u4f46\u662f\u5728\u8fd0\u884c\u6d4b\u8bd5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"config:clear")," Artisan \u547d\u4ee4\u6765\u6e05\u9664\u914d\u7f6e\u4fe1\u606f\u7684\u7f13\u5b58\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u5e76\u8fd0\u884c\u6d4b\u8bd5"},"\u5b9a\u4e49\u5e76\u8fd0\u884c\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"make:test")," Artisan \u547d\u4ee4\uff0c\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u5728 Feature \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u7c7b...\nphp artisan make:test UserTest\n\n// \u5728 Unit \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u7c7b...\nphp artisan make:test UserTest --unit\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7c7b\u751f\u6210\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u50cf\u5e73\u5e38\u4f7f\u7528 PHPUnit \u4e00\u6837\u6765\u5b9a\u4e49\u6d4b\u8bd5\u65b9\u6cd5\u3002\u8981\u8fd0\u884c\u6d4b\u8bd5\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u4e0a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"phpunit")," \u547d\u4ee4\u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace Tests\\Unit;\n\nuse Tests\\TestCase;\nuse Illuminate\\Foundation\\Testing\\DatabaseMigrations;\nuse Illuminate\\Foundation\\Testing\\DatabaseTransactions;\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * \u57fa\u672c\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002\n     *\n     * @return void\n     */\n    public function testBasicTest()\n    {\n        $this->assertTrue(true);\n    }\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u5982\u679c\u8981\u5728\u4f60\u7684\u6d4b\u8bd5\u7c7b\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"setUp")," \u65b9\u6cd5\uff0c\u8bf7\u786e\u4fdd\u8c03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"parent::setUp()")," \u65b9\u6cd5\u3002")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/5435"},"@wqer1019")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://avatars3.githubusercontent.com/u/9254545?v=4&s=100"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},"laravel\u662f\u4e16\u754c\u4e0a\u6700\u4f18\u96c5\u7684\u6846\u67b6\uff0c",(0,l.kt)("a",{parentName:"td",href:"https://github.com/wqer1019"},"@wqer1019")," at Github")))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}d.isMDXComponent=!0}}]);