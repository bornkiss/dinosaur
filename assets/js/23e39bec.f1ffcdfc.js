"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7395],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(t),k=r,c=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return t?a.createElement(c,p(p({ref:n},d),{},{components:t})):a.createElement(c,p({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7112:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),p=["components"],i={},o=void 0,u={unversionedId:"laravel/artisan",id:"laravel/artisan",title:"artisan",description:"\u7b80\u4ecb",source:"@site/docs/laravel/artisan.md",sourceDirName:"laravel",slug:"/laravel/artisan",permalink:"/docs/laravel/artisan",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"about",permalink:"/docs/laravel/about"},next:{title:"authentication",permalink:"/docs/laravel/authentication"}},d={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Laravel REPL",id:"laravel-repl",level:4},{value:"\u7f16\u5199\u547d\u4ee4",id:"\u7f16\u5199\u547d\u4ee4",level:2},{value:"\u751f\u6210\u547d\u4ee4",id:"\u751f\u6210\u547d\u4ee4",level:3},{value:"\u547d\u4ee4\u7ed3\u6784",id:"\u547d\u4ee4\u7ed3\u6784",level:3},{value:"\u95ed\u5305\u547d\u4ee4",id:"\u95ed\u5305\u547d\u4ee4",level:3},{value:"\u7c7b\u578b\u63d0\u793a\u4f9d\u8d56",id:"\u7c7b\u578b\u63d0\u793a\u4f9d\u8d56",level:4},{value:"\u95ed\u5305\u547d\u4ee4\u63cf\u8ff0",id:"\u95ed\u5305\u547d\u4ee4\u63cf\u8ff0",level:4},{value:"\u5b9a\u4e49\u8f93\u5165\u671f\u671b",id:"\u5b9a\u4e49\u8f93\u5165\u671f\u671b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u9009\u9879",id:"\u9009\u9879",level:3},{value:"\u5e26\u503c\u7684\u9009\u9879",id:"\u5e26\u503c\u7684\u9009\u9879",level:4},{value:"\u9009\u9879\u7b80\u5199",id:"\u9009\u9879\u7b80\u5199",level:4},{value:"\u8f93\u5165\u6570\u7ec4",id:"\u8f93\u5165\u6570\u7ec4",level:3},{value:"\u8f93\u5165\u8bf4\u660e",id:"\u8f93\u5165\u8bf4\u660e",level:3},{value:"I/O \u547d\u4ee4",id:"io-\u547d\u4ee4",level:2},{value:"\u68c0\u7d22\u8f93\u5165",id:"\u68c0\u7d22\u8f93\u5165",level:3},{value:"\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3},{value:"\u8bf7\u6c42\u786e\u8ba4",id:"\u8bf7\u6c42\u786e\u8ba4",level:4},{value:"\u81ea\u52a8\u8865\u5168",id:"\u81ea\u52a8\u8865\u5168",level:4},{value:"\u591a\u91cd\u9009\u62e9",id:"\u591a\u91cd\u9009\u62e9",level:4},{value:"\u7f16\u5199\u8f93\u51fa",id:"\u7f16\u5199\u8f93\u51fa",level:3},{value:"\u8868\u5e03\u5c40",id:"\u8868\u5e03\u5c40",level:4},{value:"\u8fdb\u5ea6\u6761",id:"\u8fdb\u5ea6\u6761",level:4},{value:"\u6ce8\u518c\u547d\u4ee4",id:"\u6ce8\u518c\u547d\u4ee4",level:2},{value:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6267\u884c\u547d\u4ee4",id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6267\u884c\u547d\u4ee4",level:2},{value:"\u4ece\u5176\u4ed6\u547d\u4ee4\u8c03\u7528\u547d\u4ee4",id:"\u4ece\u5176\u4ed6\u547d\u4ee4\u8c03\u7528\u547d\u4ee4",level:3},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],m={toc:s};function k(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"artisan-\u547d\u4ee4\u884c\u5de5\u5177"},"Artisan \u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Artisan \u662f Laravel \u81ea\u5e26\u7684\u547d\u4ee4\u884c\u63a5\u53e3\uff0c\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u5b9e\u7528\u7684\u547d\u4ee4\u6765\u5e2e\u52a9\u4f60\u6784\u5efa Laravel \u5e94\u7528\u3002\u8981\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684 Artisan \u547d\u4ee4\u7684\u5217\u8868\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan list\n")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u547d\u4ee4\u5305\u542b\u4e86\u300c\u5e2e\u52a9\u300d\u754c\u9762\uff0c\u5b83\u4f1a\u663e\u793a\u5e76\u6982\u8ff0\u547d\u4ee4\u7684\u53ef\u7528\u53c2\u6570\u53ca\u9009\u9879\u3002\u53ea\u9700\u8981\u5728\u547d\u4ee4\u524d\u9762\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," \u5373\u53ef\u67e5\u770b\u547d\u4ee4\u5e2e\u52a9\u754c\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan help migrate\n")),(0,l.kt)("h4",{id:"laravel-repl"},"Laravel REPL"),(0,l.kt)("p",null,"\u6240\u6709 Laravel \u5e94\u7528\u90fd\u5305\u542b\u4e86 Tinker\uff0c\u4e00\u4e2a\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bobthecow/psysh"},"PsySH")," \u5305\u63d0\u4f9b\u652f\u6301\u7684 REPL\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"Tinker")," \u8ba9\u4f60\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u4e0e\u4f60\u6574\u4e2a\u7684 Laravel \u5e94\u7528\u8fdb\u884c\u4ea4\u4e92\uff0c\u5305\u62ec Eloquent ORM\u3001\u4efb\u52a1\u3001\u4e8b\u4ef6\u7b49\u7b49\u3002\u8fd0\u884c Artisan \u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"tinker")," \u8fdb\u5165 Tinker \u73af\u5883\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan tinker\n")),(0,l.kt)("h2",{id:"\u7f16\u5199\u547d\u4ee4"},"\u7f16\u5199\u547d\u4ee4"),(0,l.kt)("p",null,"\u9664 Artisan \u63d0\u4f9b\u7684\u547d\u4ee4\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u6784\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u547d\u4ee4\u3002\u547d\u4ee4\u9ed8\u8ba4\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Console/Commands")," \u76ee\u5f55\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"composer.json")," \u6587\u4ef6\u6765\u6307\u5b9a\u4f60\u60f3\u8981\u5b58\u653e\u7684\u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"\u751f\u6210\u547d\u4ee4"},"\u751f\u6210\u547d\u4ee4"),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u4f7f\u7528 Artisan \u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"make:command"),"\u3002\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Console/Commands")," \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u547d\u4ee4\u7c7b\u3002 \u4e0d\u5fc5\u62c5\u5fc3\u5e94\u7528\u4e2d\u4e0d\u5b58\u5728\u8fd9\u4e2a\u76ee\u5f55\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5728\u4f60\u7b2c\u4e00\u6b21\u8fd0\u884c Artisan \u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"make:command")," \u65f6\u521b\u5efa\u3002\u751f\u6210\u7684\u547d\u4ee4\u4f1a\u5305\u62ec\u6240\u6709\u547d\u4ee4\u4e2d\u9ed8\u8ba4\u5b58\u5728\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan make:command SendEmails\n")),(0,l.kt)("h3",{id:"\u547d\u4ee4\u7ed3\u6784"},"\u547d\u4ee4\u7ed3\u6784"),(0,l.kt)("p",null,"\u547d\u4ee4\u751f\u6210\u540e\uff0c\u5e94\u5148\u586b\u5199\u7c7b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"signature")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"description")," \u5c5e\u6027\uff0c\u8fd9\u4f1a\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u547d\u4ee4\u7684\u65f6\u5019\u663e\u793a\u51fa\u6765\u3002\u6267\u884c\u547d\u4ee4\u65f6\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"handle")," \u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u653e\u7f6e\u547d\u4ee4\u903b\u8f91\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{tip} \u4e3a\u4e86\u66f4\u597d\u7684\u4ee3\u7801\u590d\u7528\uff0c\u6700\u597d\u4fdd\u6301\u4f60\u7684\u63a7\u5236\u53f0\u4ee3\u7801\u8f7b\u91cf\u5e76\u8ba9\u5b83\u4eec\u5ef6\u8fdf\u5230\u5e94\u7528\u670d\u52a1\u4e2d\u5b8c\u6210\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u6ce8\u5165\u4e86\u4e00\u4e2a\u670d\u52a1\u7c7b\u6765\u5b8c\u6210\u53d1\u9001\u90ae\u4ef6\u7684\u300c\u91cd\u4efb\u300d\u3002")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002\u6ce8\u610f\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Command \u7684\u6784\u9020\u51fd\u6570\u4e2d\u6ce8\u5165\u6211\u4eec\u9700\u8981\u7684\u4efb\u4f55\u4f9d\u8d56\u9879\u3002Laravel ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/container"},"\u670d\u52a1\u5bb9\u5668")," \u5c06\u4f1a\u81ea\u52a8\u6ce8\u5165\u6240\u6709\u5728\u6784\u9020\u51fd\u6570\u4e2d\u7684\u5e26\u7c7b\u578b\u7ea6\u675f\u7684\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Console\\Commands;\n\nuse App\\User;\nuse App\\DripEmailer;\nuse Illuminate\\Console\\Command;\n\nclass SendEmails extends Command\n{\n    /**\n     * \u63a7\u5236\u53f0\u547d\u4ee4 signature \u7684\u540d\u79f0\u3002\n     *\n     * @var string\n     */\n    protected $signature = 'email:send {user}';\n\n    /**\n     * \u63a7\u5236\u53f0\u547d\u4ee4\u8bf4\u660e\u3002\n     *\n     * @var string\n     */\n    protected $description = 'Send drip e-mails to a user';\n\n    /**\n     * \u90ae\u4ef6\u670d\u52a1\u7684 drip \u5c5e\u6027\u3002\n     *\n     * @var DripEmailer\n     */\n    protected $drip;\n\n    /**\n     * \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u547d\u4ee4\u5b9e\u4f8b\u3002\n     *\n     * @param  DripEmailer  $drip\n     * @return void\n     */\n    public function __construct(DripEmailer $drip)\n    {\n        parent::__construct();\n\n        $this->drip = $drip;\n    }\n\n    /**\n     * \u6267\u884c\u63a7\u5236\u53f0\u547d\u4ee4\u3002\n     *\n     * @return mixed\n     */\n    public function handle()\n    {\n        $this->drip->send(User::find($this->argument('user')));\n    }\n}\n")),(0,l.kt)("h3",{id:"\u95ed\u5305\u547d\u4ee4"},"\u95ed\u5305\u547d\u4ee4"),(0,l.kt)("p",null,"\u57fa\u4e8e\u95ed\u5305\u7684\u547d\u4ee4\u63d0\u4f9b\u4e00\u4e2a\u7528\u7c7b\u66ff\u4ee3\u5b9a\u4e49\u63a7\u5236\u53f0\u547d\u4ee4\u7684\u65b9\u6cd5\u3002\u540c\u6837\u7684\uff0c\u8def\u7531\u95ed\u5305\u662f\u63a7\u5236\u5668\u7684\u4e00\u79cd\u66ff\u4ee3\u65b9\u6cd5\uff0c\u800c\u547d\u4ee4\u95ed\u5305\u53ef\u4ee5\u89c6\u4e3a\u547d\u4ee4\u7c7b\u7684\u66ff\u4ee3\u65b9\u6cd5\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Console/Kernel.php")," \u6587\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"commands")," \u65b9\u6cd5\u4e2d\uff0c Laravel \u52a0\u8f7d\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"routes/console.php")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6ce8\u518c\u5e94\u7528\u7684\u57fa\u4e8e\u95ed\u5305\u7684\u547d\u4ee4\u3002\n *\n * @return void\n */\nprotected function commands()\n{\n    require base_path('routes/console.php');\n}\n")),(0,l.kt)("p",null,"\u867d\u7136\u8fd9\u4e2a\u6587\u4ef6\u6ca1\u6709\u5b9a\u4e49 HTTP \u8def\u7531\uff0c\u5b83\u4e5f\u5c06\u57fa\u4e8e\u63a7\u5236\u53f0\u7684\u5165\u53e3\u70b9\uff08\u8def\u7531\uff09\u5b9a\u4e49\u5230\u5e94\u7528\u4e2d\u3002\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Artisan::command")," \u65b9\u6cd5\u5b9a\u4e49\u6240\u6709\u57fa\u4e8e\u95ed\u5305\u7684\u8def\u7531\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"command")," \u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("a",{parentName:"p",href:"#defining-input-expectations"},"\u547d\u4ee4\u7b7e\u540d")," \u548c\u4e00\u4e2a\u63a5\u6536\u547d\u4ee4\u53c2\u6570\u548c\u9009\u9879\u7684\u95ed\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Artisan::command('build {project}', function ($project) {\n    $this->info(\"Building {$project}!\");\n});\n")),(0,l.kt)("p",null,"\u95ed\u5305\u7ed1\u5b9a\u5e95\u5c42\u7684\u547d\u4ee4\u5b9e\u4f8b\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5b8c\u5168\u8bbf\u95ee\u901a\u5e38\u53ef\u4ee5\u5728\u5b8c\u6574\u547d\u4ee4\u7c7b\u4e2d\u8bbf\u95ee\u7684\u6240\u6709\u8f85\u52a9\u65b9\u6cd5\u3002"),(0,l.kt)("h4",{id:"\u7c7b\u578b\u63d0\u793a\u4f9d\u8d56"},"\u7c7b\u578b\u63d0\u793a\u4f9d\u8d56"),(0,l.kt)("p",null,"\u9664\u4e86\u63a5\u6536\u547d\u4ee4\u7684\u53c2\u6570\u548c\u9009\u9879\u5916\uff0c\u547d\u4ee4\u95ed\u5305\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u63d0\u793a\u4ece ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/container"},"\u670d\u52a1\u5bb9\u5668")," \u4e2d\u89e3\u6790\u4f60\u60f3\u8981\u7684\u5176\u4ed6\u4f9d\u8d56\u5173\u7cfb\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"use App\\User;\nuse App\\DripEmailer;\n\nArtisan::command('email:send {user}', function (DripEmailer $drip, $user) {\n    $drip->send(User::find($user));\n});\n")),(0,l.kt)("h4",{id:"\u95ed\u5305\u547d\u4ee4\u63cf\u8ff0"},"\u95ed\u5305\u547d\u4ee4\u63cf\u8ff0"),(0,l.kt)("p",null,"\u5f53\u5b9a\u4e49\u4e00\u4e2a\u57fa\u4e8e\u95ed\u5305\u7684\u547d\u4ee4\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"describe")," \u65b9\u6cd5\u6765\u4e3a\u547d\u4ee4\u6dfb\u52a0\u63cf\u8ff0\u3002\u8fd9\u4e2a\u63cf\u8ff0\u4f1a\u5728\u4f60\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"php artisan list")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"php artisan help")," \u547d\u4ee4\u65f6\u663e\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Artisan::command('build {project}', function ($project) {\n    $this->info(\"Building {$project}!\");\n})->describe('Build the project');\n")),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u8f93\u5165\u671f\u671b"},"\u5b9a\u4e49\u8f93\u5165\u671f\u671b"),(0,l.kt)("p",null,"\u5728\u7f16\u5199\u63a7\u5236\u53f0\u547d\u4ee4\u65f6\uff0c\u901a\u5e38\u662f\u901a\u8fc7\u53c2\u6570\u548c\u9009\u9879\u6765\u6536\u96c6\u7528\u6237\u8f93\u5165\u3002Laravel \u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5728\u4f60\u7684\u547d\u4ee4\u91cc\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"signature")," \u5c5e\u6027\u6765\u5b9a\u4e49\u4f60\u671f\u671b\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"signature")," \u5c5e\u6027\u5141\u8bb8\u4f60\u4f7f\u7528\u5355\u4e00\u4e14\u53ef\u8bfb\u6027\u975e\u5e38\u9ad8\u7684\u3001\u7c7b\u4f3c\u8def\u7531\u7684\u8bed\u6cd5\u5b9a\u4e49\u547d\u4ee4\u7684\u540d\u79f0\u3001\u53c2\u6570\u548c\u9009\u9879\u3002"),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("p",null,"\u6240\u6709\u7528\u6237\u63d0\u4f9b\u7684\u53c2\u6570\u53ca\u9009\u9879\u90fd\u88ab\u5305\u542b\u5728\u82b1\u62ec\u53f7\u4e2d\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u7684\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u63a7\u5236\u53f0\u547d\u4ee4 signature \u7684\u540d\u79f0\u3002\n *\n * @var string\n */\nprotected $signature = 'email:send {user}';\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u53ef\u9009\u53c2\u6570\uff0c\u5e76\u5b9a\u4e49\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u53ef\u9009\u53c2\u6570...\nemail:send {user?}\n\n// \u5e26\u6709\u9ed8\u8ba4\u503c\u7684\u53ef\u9009\u53c2\u6570...\nemail:send {user=foo}\n")),(0,l.kt)("h3",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("p",null,"\u9009\u9879\uff0c\u5982\u53c2\u6570\uff0c\u662f\u7528\u6237\u8f93\u5165\u7684\u53e6\u4e00\u79cd\u683c\u5f0f\u3002\u5f53\u547d\u4ee4\u884c\u6307\u5b9a\u9009\u9879\u65f6\uff0c\u5b83\u4eec\u4ee5\u4e24\u4e2a\u8fde\u5b57\u7b26 (",(0,l.kt)("inlineCode",{parentName:"p"},"--"),") \u4f5c\u4e3a\u524d\u7f00\u3002\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u9009\u9879\uff1a\u63a5\u6536\u503c\u548c\u4e0d\u63a5\u53d7\u503c\u3002\u4e0d\u63a5\u6536\u503c\u7684\u9009\u9879\u4f5c\u4e3a\u5e03\u5c14\u503c\u7684 \u300c\u5f00\u5173\u300d\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u8fd9\u79cd\u7c7b\u578b\u7684\u9009\u9879\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u63a7\u5236\u53f0\u547d\u4ee4 signature \u7684\u540d\u79f0\u3002\n *\n * @var string\n */\nprotected $signature = 'email:send {user} {--queue}';\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u53ef\u4ee5\u5728\u8c03\u7528Artisan\u547d\u4ee4\u65f6\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"--queue")," \u5f00\u5173\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"--queue")," \u5f00\u5173\u88ab\u4f20\u9012\uff0c\u8be5\u9009\u9879\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \uff0c\u5426\u5219\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan email:send 1 --queue\n")),(0,l.kt)("h4",{id:"\u5e26\u503c\u7684\u9009\u9879"},"\u5e26\u503c\u7684\u9009\u9879"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5e26\u503c\u7684\u9009\u9879\u3002\u5982\u679c\u7528\u6237\u5fc5\u987b\u4e3a\u9009\u9879\u6307\u5b9a\u4e00\u4e2a\u503c\uff0c\u9700\u8981\u7528\u4e00\u4e2a\u7b49\u53f7 ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," \u4f5c\u4e3a\u9009\u9879\u540d\u79f0\u7684\u540e\u7f00\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u63a7\u5236\u53f0\u547d\u4ee4 signature \u7684\u540d\u79f0\u3002\n *\n * @var string\n */\nprotected $signature = 'email:send {user} {--queue=}';\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c \u7528\u6237\u53ef\u4ee5\u4f20\u9012\u8be5\u9009\u9879\u7684\u503c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan email:send 1 --queue=default\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u9009\u9879\u540d\u79f0\u540e\u9762\u6307\u5b9a\u9ed8\u8ba4\u503c\u6765\u8bbe\u5b9a\u9009\u9879\u7684\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u7528\u6237\u6ca1\u6709\u4f20\u9012\u9009\u9879\u503c\uff0c\u5c06\u4f7f\u7528\u8bbe\u5b9a\u7684\u9ed8\u8ba4\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"email:send {user} {--queue=default}\n")),(0,l.kt)("h4",{id:"\u9009\u9879\u7b80\u5199"},"\u9009\u9879\u7b80\u5199"),(0,l.kt)("p",null,"\u8981\u5728\u5b9a\u4e49\u9009\u9879\u65f6\u6307\u5b9a\u7b80\u5199\uff0c\u4f60\u53ef\u4ee5\u5728\u9009\u9879\u540d\u79f0\u524d\u6307\u5b9a\u5b83\uff0c\u5e76\u4e14\u4f7f\u7528  ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," \u5206\u9694\u7b26\u5c06\u7b80\u5199\u4e0e\u5b8c\u6574\u9009\u9879\u540d\u79f0\u5206\u9694\u5f00\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"email:send {user} {--Q|queue}\n")),(0,l.kt)("h3",{id:"\u8f93\u5165\u6570\u7ec4"},"\u8f93\u5165\u6570\u7ec4"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5b9a\u4e49\u53c2\u6570\u6216\u9009\u9879\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," \u7b26\u53f7\u6765\u671f\u671b\u8f93\u5165\u6570\u7ec4\u3002\u9996\u5148\uff0c\u6211\u4eec\u5148\u770b\u4e00\u4e2a\u6307\u5b9a\u6570\u7ec4\u53c2\u6570\u7684\u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"email:send {user*}\n")),(0,l.kt)("p",null,"\u8c03\u7528\u6b64\u65b9\u6cd5\u65f6\uff0c\u53ef\u4ee5\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u53c2\u6570\u7ed9\u547d\u4ee4\u884c\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u4f1a\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"['foo', 'bar']")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan email:send foo bar\n")),(0,l.kt)("p",null,"\u5728\u5b9a\u4e49\u671f\u671b\u6570\u7ec4\u8f93\u5165\u7684\u9009\u9879\u65f6\uff0c\u4f20\u9012\u7ed9\u547d\u4ee4\u7684\u6bcf\u4e2a\u9009\u9879\u503c\u90fd\u5e94\u4ee5\u9009\u9879\u540d\u79f0\u4e3a\u524d\u7f00\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"email:send {user} {--id=*}\n\nphp artisan email:send --id=1 --id=2\n")),(0,l.kt)("h3",{id:"\u8f93\u5165\u8bf4\u660e"},"\u8f93\u5165\u8bf4\u660e"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5192\u53f7\u4e3a\u8f93\u5165\u53c2\u6570\u548c\u9009\u9879\u5206\u914d\u8bf4\u660e\u6587\u5b57\u3002\u5982\u679c\u4f60\u9700\u8981\u4e00\u70b9\u989d\u5916\u7684\u7a7a\u95f4\u6765\u5b9a\u4e49\u4f60\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u968f\u610f\u5c06\u591a\u4e2a\u884c\u5206\u5f00\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u8bbe\u7f6e\u63a7\u5236\u53f0\u547d\u4ee4\u7684 signature \u5c5e\u6027\u3002\n *\n * @var string\n */\nprotected $signature = 'email:send\n                        {user : The ID of the user}\n                        {--queue= : Whether the job should be queued}';\n")),(0,l.kt)("h2",{id:"io-\u547d\u4ee4"},"I/O \u547d\u4ee4"),(0,l.kt)("h3",{id:"\u68c0\u7d22\u8f93\u5165"},"\u68c0\u7d22\u8f93\u5165"),(0,l.kt)("p",null,"\u5728\u547d\u4ee4\u6267\u884c\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"argument")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"option")," \u65b9\u6cd5\u83b7\u53d6\u547d\u4ee4\u7684\u53c2\u6570\u548c\u9009\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6267\u884c\u63a7\u5236\u53f0\u547d\u4ee4\u3002\n *\n * @return mixed\n */\npublic function handle()\n{\n    $userId = $this->argument('user');\n\n    //\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5c06\u6240\u6709\u53c2\u6570\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," \u68c0\u7d22\uff0c\u5c31\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"arguments")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$arguments = $this->arguments();\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"option")," \u65b9\u6cd5\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"arguments")," \u4e00\u6837\u5bb9\u6613\u5730\u68c0\u7d22\u9009\u9879\u3002\u8981\u5c06\u6240\u6709\u9009\u9879\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," \u68c0\u7d22\uff0c\u8bf7\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u68c0\u7d22\u7279\u5b9a\u9009\u9879...\n$queueName = $this->option('queue');\n\n// \u68c0\u7d22\u6240\u6709\u9009\u9879...\n$options = $this->options();\n")),(0,l.kt)("p",null,"\u5982\u679c\u53c2\u6570\u6216\u9009\u9879\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u3002"),(0,l.kt)("h3",{id:"\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,l.kt)("p",null,"\u9664\u4e86\u663e\u793a\u8f93\u51fa\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8981\u6c42\u7528\u6237\u5728\u6267\u884c\u547d\u4ee4\u65f6\u63d0\u4f9b\u8f93\u5165\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"ask")," \u65b9\u6cd5\u5c06\u63d0\u793a\u7528\u6237\u7ed9\u5b9a\u95ee\u9898\uff0c\u63a5\u6536\u4ed6\u4eec\u7684\u8f93\u5165\uff0c\u7136\u540e\u5c06\u7528\u6237\u7684\u8f93\u5165\u8fd4\u56de\u5230\u4f60\u7684\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6267\u884c\u63a7\u5236\u53f0\u547d\u4ee4\u3002\n *\n * @return mixed\n */\npublic function handle()\n{\n    $name = $this->ask('What is your name?');\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"secret")," \u65b9\u6cd5\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ask")," \u65b9\u6cd5\u7c7b\u4f3c\uff0c\u5373\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u5728\u4ed6\u4eec\u8f93\u5165\u63a7\u5236\u53f0\u65f6\u662f\u4e0d\u53ef\u89c1\u7684\u3002\u8fd9\u4e2a\u65b9\u6cd5\u9002\u7528\u4e8e\u9700\u8981\u7528\u6237\u8f93\u5165\u50cf\u5bc6\u7801\u8fd9\u6837\u7684\u654f\u611f\u4fe1\u606f\u7684\u60c5\u51b5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$password = $this->secret('What is the password?');\n")),(0,l.kt)("h4",{id:"\u8bf7\u6c42\u786e\u8ba4"},"\u8bf7\u6c42\u786e\u8ba4"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8981\u7528\u6237\u63d0\u4f9b\u4e00\u4e9b\u7b80\u5355\u7684\u786e\u8ba4\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"confirm")," \u65b9\u6cd5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u65b9\u6cd5\u5c06\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u4f46\u662f\uff0c\u5982\u679c\u7528\u6237\u6839\u636e\u63d0\u793a\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"yes")," \u5219\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"if ($this->confirm('Do you wish to continue?')) {\n    //\n}\n")),(0,l.kt)("h4",{id:"\u81ea\u52a8\u8865\u5168"},"\u81ea\u52a8\u8865\u5168"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"anticipate")," \u65b9\u6cd5\u53ef\u7528\u4e8e\u4e3a\u53ef\u80fd\u7684\u9009\u62e9\u63d0\u4f9b\u81ea\u52a8\u8865\u5168\u529f\u80fd\u3002\u4e0d\u7ba1\u63d0\u793a\u7684\u5185\u5bb9\u662f\u4ec0\u4e48\uff0c\u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u9009\u62e9\u4efb\u4f55\u56de\u7b54\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$name = $this->anticipate('What is your name?', ['Taylor', 'Dayle']);\n")),(0,l.kt)("h4",{id:"\u591a\u91cd\u9009\u62e9"},"\u591a\u91cd\u9009\u62e9"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8981\u7ed9\u7528\u6237\u63d0\u4f9b\u9884\u5b9a\u4e49\u7684\u4e00\u7ec4\u9009\u62e9\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"choice")," \u65b9\u6cd5\u3002\u5982\u679c\u7528\u6237\u672a\u9009\u62e9\u4efb\u4f55\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u8fd4\u56de\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$name = $this->choice('What is your name?', ['Taylor', 'Dayle'], $default);\n")),(0,l.kt)("h3",{id:"\u7f16\u5199\u8f93\u51fa"},"\u7f16\u5199\u8f93\u51fa"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"line")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"info")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"comment")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"question")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," \u65b9\u6cd5\u6765\u5c06\u8f93\u51fa\u53d1\u9001\u5230\u7ec8\u7aef\u3002\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u6709\u9002\u5f53\u7684 ANSI \u989c\u8272\u6765\u4f5c\u4e3a\u8868\u660e\u5176\u76ee\u7684\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u8981\u5411\u7528\u6237\u5c55\u793a\u666e\u901a\u4fe1\u606f\uff0c\u901a\u5e38\u6765\u8bf4\uff0c\u6700\u597d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," \u65b9\u6cd5\uff0c\u5b83\u4f1a\u5728\u63a7\u5236\u53f0\u5c06\u8f93\u51fa\u7684\u5185\u5bb9\u663e\u793a\u4e3a\u7eff\u8272\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6267\u884c\u63a7\u5236\u53f0\u547d\u4ee4\u3002\n *\n * @return mixed\n */\npublic function handle()\n{\n    $this->info('Display this on the screen');\n}\n")),(0,l.kt)("p",null,"\u663e\u793a\u9519\u8bef\u4fe1\u606f\uff0c \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," \u65b9\u6cd5\u3002 \u9519\u8bef\u4fe1\u606f\u901a\u5e38\u663e\u793a\u4e3a\u7ea2\u8272\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$this->error('Something went wrong!');\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u63a7\u5236\u53f0\u663e\u793a\u65e0\u8272\u7684\u8f93\u51fa\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"line")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$this->line('Display this on the screen');\n")),(0,l.kt)("h4",{id:"\u8868\u5e03\u5c40"},"\u8868\u5e03\u5c40"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"table")," \u65b9\u6cd5\u53ef\u4ee5\u65b9\u4fbf\u5730\u683c\u5f0f\u5316\u591a\u884c/\u5217\u7684\u6570\u636e\u3002\u53ea\u9700\u8981\u5c06\u6807\u9898\u548c\u884c\u4f20\u9012\u7ed9\u8fd9\u4e2a\u65b9\u6cd5\u3002\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u5c06\u57fa\u4e8e\u7ed9\u5b9a\u6570\u636e\u52a8\u6001\u8ba1\u7b97\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$headers = ['Name', 'Email'];\n\n$users = App\\User::all(['name', 'email'])->toArray();\n\n$this->table($headers, $users);\n")),(0,l.kt)("h4",{id:"\u8fdb\u5ea6\u6761"},"\u8fdb\u5ea6\u6761"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u663e\u793a\u8fdb\u5ea6\u6307\u793a\u7b26\u53ef\u80fd\u4f1a\u5f88\u6709\u7528\u3002\u4f7f\u7528\u8f93\u51fa\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u542f\u52a8\u3001\u63a8\u8fdb\u548c\u505c\u6b62\u8fdb\u5ea6\u6761\u3002\u9996\u5148\uff0c\u5b9a\u4e49\u8fdb\u7a0b\u5c06\u904d\u5386\u7684\u6b65\u9aa4\u603b\u6570\u3002\u7136\u540e\uff0c\u5728\u5904\u7406\u6bcf\u4e2a\u9879\u76ee\u540e\u63a8\u8fdb\u8fdb\u5ea6\u680f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$users = App\\User::all();\n\n$bar = $this->output->createProgressBar(count($users));\n\nforeach ($users as $user) {\n    $this->performTask($user);\n\n    $bar->advance();\n}\n\n$bar->finish();\n")),(0,l.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://symfony.com/doc/2.7/components/console/helpers/progressbar.html"},"Symfony \u8fdb\u5ea6\u6761\u7ec4\u4ef6\u6587\u6863")," \u3002"),(0,l.kt)("h2",{id:"\u6ce8\u518c\u547d\u4ee4"},"\u6ce8\u518c\u547d\u4ee4"),(0,l.kt)("p",null,"\u7531\u4e8e\u5728\u63a7\u5236\u53f0\u5185\u6838\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"commands")," \u65b9\u6cd5\u4e2d\u8c03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"load")," \u65b9\u6cd5\uff0c\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Console/Commands")," \u76ee\u5f55\u4e0b\u7684\u6240\u6709\u547d\u4ee4\u90fd\u5c06\u81ea\u52a8\u6ce8\u518c\u5230 Artisan\u3002 \u5b9e\u9645\u4e0a\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"load")," \u65b9\u6cd5\u6765\u626b\u63cf Artisan \u547d\u4ee4\u7684\u5176\u4ed6\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6ce8\u518c\u5e94\u7528\u7a0b\u5e8f\u7684\u547d\u4ee4\u3002\n *\n * @return void\n */\nprotected function commands()\n{\n    $this->load(__DIR__.'/Commands');\n    $this->load(__DIR__.'/MoreCommands');\n\n    // ...\n}\n")),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5c06\u5176\u7c7b\u540d\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Console/Kernel.php")," \u6587\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"$command")," \u5c5e\u6027\u6765\u624b\u52a8\u6ce8\u518c\u547d\u4ee4\u3002\u5f53 Artisan \u542f\u52a8\u65f6\uff0c\u8be5\u5c5e\u6027\u4e2d\u5217\u51fa\u7684\u6240\u6709\u547d\u4ee4\u5c06\u7531 ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/container"},"\u670d\u52a1\u5bb9\u5668")," \u89e3\u6790\u5e76\u5728 Artisan \u6ce8\u518c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"protected $commands = [\n    Commands\\SendEmails::class\n];\n")),(0,l.kt)("h2",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6267\u884c\u547d\u4ee4"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6267\u884c\u547d\u4ee4"),(0,l.kt)("p",null,"\u6709\u65f6\u4f60\u53ef\u80fd\u5e0c\u671b\u5728 CLI \u4e4b\u5916\u6267\u884c Artisan \u547d\u4ee4\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u4ece\u8def\u7531\u6216\u63a7\u5236\u5668\u89e6\u53d1 Artisan \u547d\u4ee4\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Artisan")," facade \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u65b9\u6cd5\u6765\u5b8c\u6210\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u65b9\u6cd5\u63a5\u53d7\u547d\u4ee4\u7684\u540d\u79f0\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u547d\u4ee4\u53c2\u6570\u7684\u6570\u7ec4\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002\u7ed3\u675f\u7801\u4f1a\u88ab\u8fd4\u56de\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::get('/foo', function () {\n    $exitCode = Artisan::call('email:send', [\n        'user' => 1, '--queue' => 'default'\n    ]);\n\n    //\n});\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Artisan")," facade \u4e0a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"queue")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5c06 Artisan \u547d\u4ee4\u4ea4\u7531 ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/queues"},"\u961f\u5217\u5de5\u4f5c\u8fdb\u7a0b")," \u5728\u540e\u53f0\u8fdb\u884c\u5904\u7406\u3002\u5728\u4f7f\u7528\u6b64\u65b9\u6cd5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u914d\u7f6e\u961f\u5217\u5e76\u8fd0\u884c\u4e86\u961f\u5217\u76d1\u542c\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::get('/foo', function () {\n    Artisan::queue('email:send', [\n        'user' => 1, '--queue' => 'default'\n    ]);\n\n    //\n});\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u6307\u5b9a\u4e0d\u63a5\u53d7\u5b57\u7b26\u4e32\u503c\u7684\u9009\u9879\u7684\u503c\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"migrate\uff1arefresh")," \u547d\u4ee4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," \u6807\u5fd7\uff0c\u5219\u53ef\u4ee5\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$exitCode = Artisan::call('migrate:refresh', [\n    '--force' => true,\n]);\n")),(0,l.kt)("h3",{id:"\u4ece\u5176\u4ed6\u547d\u4ee4\u8c03\u7528\u547d\u4ee4"},"\u4ece\u5176\u4ed6\u547d\u4ee4\u8c03\u7528\u547d\u4ee4"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u4ece\u73b0\u6709\u7684 Artisan \u547d\u4ee4\u4e2d\u8c03\u7528\u5176\u5b83\u547d\u4ee4\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u65b9\u6cd5\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u65b9\u6cd5\u63a5\u53d7\u547d\u4ee4\u540d\u79f0\u548c\u547d\u4ee4\u53c2\u6570\u7684\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6267\u884c\u63a7\u5236\u53f0\u547d\u4ee4\u3002\n *\n * @return mixed\n */\npublic function handle()\n{\n    $this->call('email:send', [\n        'user' => 1, '--queue' => 'default'\n    ]);\n\n    //\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u8981\u8c03\u7528\u53e6\u4e00\u4e2a\u63a7\u5236\u53f0\u547d\u4ee4\u5e76\u963b\u6b62\u5176\u6240\u6709\u8f93\u51fa\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"callSilent")," \u65b9\u6cd5\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"callSilent")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u65b9\u6cd5\u7528\u6cd5\u4e00\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$this->callSilent('email:send', [\n    'user' => 1, '--queue' => 'default'\n]);\n")),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/18113"},"@laravelleon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/18113_1503316311.png?imageView2/1/w/100/h/100"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},"You may delay , but the time will not . ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/leonzai/"},"@Leonzai")," at Github")))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}k.isMDXComponent=!0}}]);