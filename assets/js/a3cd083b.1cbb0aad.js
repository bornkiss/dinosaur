"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2830],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],p={},i=void 0,u={unversionedId:"laravel/eloquent-serialization",id:"laravel/eloquent-serialization",title:"eloquent-serialization",description:"\u7b80\u4ecb",source:"@site/docs/laravel/eloquent-serialization.md",sourceDirName:"laravel",slug:"/laravel/eloquent-serialization",permalink:"/docs/laravel/eloquent-serialization",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eloquent-resources",permalink:"/docs/laravel/eloquent-resources"},next:{title:"eloquent",permalink:"/docs/laravel/eloquent"}},s={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5e8f\u5217\u5316\u6a21\u578b &amp; \u96c6\u5408",id:"\u5e8f\u5217\u5316\u6a21\u578b--\u96c6\u5408",level:2},{value:"\u5e8f\u5217\u5316\u6210\u6570\u7ec4",id:"\u5e8f\u5217\u5316\u6210\u6570\u7ec4",level:3},{value:"\u5e8f\u5217\u5316\u6210 JSON",id:"\u5e8f\u5217\u5316\u6210-json",level:3},{value:"\u9690\u85cf\u6765\u81ea JSON \u7684\u5c5e\u6027",id:"\u9690\u85cf\u6765\u81ea-json-\u7684\u5c5e\u6027",level:2},{value:"\u4e34\u65f6\u4fee\u6539\u5c5e\u6027\u7684\u53ef\u89c1\u5ea6",id:"\u4e34\u65f6\u4fee\u6539\u5c5e\u6027\u7684\u53ef\u89c1\u5ea6",level:4},{value:"\u6dfb\u52a0\u53c2\u6570\u5230 JSON \u4e2d",id:"\u6dfb\u52a0\u53c2\u6570\u5230-json-\u4e2d",level:2},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"eloquent-\u5e8f\u5217\u5316"},"Eloquent: \u5e8f\u5217\u5316"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u5f53\u4f60\u5728\u521b\u5efa JSON API \u7684\u65f6\u5019\uff0c\u7ecf\u5e38\u4f1a\u9700\u8981\u5c06\u6a21\u578b\u548c\u5173\u8054\u8f6c\u6362\u6210\u6570\u7ec4\u6216 JSON\u3002Eloquent \u63d0\u4f9b\u4e86\u4e00\u4e9b\u4fbf\u6377\u7684\u65b9\u6cd5\u6765\u8ba9\u6211\u4eec\u53ef\u4ee5\u5b8c\u6210\u8fd9\u4e9b\u8f6c\u6362\uff0c\u4ee5\u53ca\u63a7\u5236\u54ea\u4e9b\u5c5e\u6027\u9700\u8981\u88ab\u5305\u62ec\u5728\u5e8f\u5217\u5316\u4e2d\u3002"),(0,l.kt)("h2",{id:"\u5e8f\u5217\u5316\u6a21\u578b--\u96c6\u5408"},"\u5e8f\u5217\u5316\u6a21\u578b & \u96c6\u5408"),(0,l.kt)("h3",{id:"\u5e8f\u5217\u5316\u6210\u6570\u7ec4"},"\u5e8f\u5217\u5316\u6210\u6570\u7ec4"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5c06\u6a21\u578b\u8fd8\u6709\u5176\u52a0\u8f7d\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/eloquent-relationships"},"\u5173\u8054"),"\u8f6c\u6362\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 toArray \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u662f\u9012\u5f52\u7684\uff0c\u56e0\u6b64\uff0c\u6240\u6709\u5c5e\u6027\u548c\u5173\u8054\uff08\u5305\u542b\u5173\u8054\u4e2d\u7684\u5173\u8054\uff09\u90fd\u4f1a\u88ab\u8f6c\u6362\u6210\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$user = App\\User::with('roles')->first();\n\nreturn $user->toArray();\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u6574\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/eloquent-collections"},"\u96c6\u5408"),"\u8f6c\u6362\u6210\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$users = App\\User::all();\n\nreturn $users->toArray();\n")),(0,l.kt)("h3",{id:"\u5e8f\u5217\u5316\u6210-json"},"\u5e8f\u5217\u5316\u6210 JSON"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5c06\u6a21\u578b\u8f6c\u6362\u6210 JSON\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"toJson")," \u65b9\u6cd5\u3002\u5982\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"toArray"),"\u65b9\u6cd5\u4e00\u6837\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"toJson"),"  \u65b9\u6cd5\u4e5f\u662f\u9012\u5f52\u7684\u3002\u56e0\u6b64\uff0c\u6240\u6709\u7684\u5c5e\u6027\u4ee5\u53ca\u5173\u8054\u90fd\u4f1a\u88ab\u8f6c\u6362\u6210 JSON\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$user = App\\User::find(1);\n\nreturn $user->toJson();\n")),(0,l.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5f3a\u5236\u628a\u4e00\u4e2a\u6a21\u578b\u6216\u96c6\u5408\u8f6c\u578b\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5b83\u5c06\u4f1a\u81ea\u52a8\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"toJson")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$user = App\\User::find(1);\n\nreturn (string) $user;\n")),(0,l.kt)("p",null,"\u5f53\u6a21\u578b\u6216\u96c6\u5408\u88ab\u8f6c\u578b\u6210\u5b57\u7b26\u4e32\u65f6\uff0c\u6a21\u578b\u6216\u96c6\u5408\u4fbf\u4f1a\u88ab\u8f6c\u6362\u6210 JSON \u683c\u5f0f\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece\u5e94\u7528\u7a0b\u5e8f\u7684\u8def\u7531\u6216\u8005\u63a7\u5236\u5668\u4e2d\u8fd4\u56de Eloquent \u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::get('users', function () {\n    return App\\User::all();\n});\n")),(0,l.kt)("h2",{id:"\u9690\u85cf\u6765\u81ea-json-\u7684\u5c5e\u6027"},"\u9690\u85cf\u6765\u81ea JSON \u7684\u5c5e\u6027"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u4f1a\u60f3\u8981\u9650\u5236\u5305\u542b\u5728\u6a21\u578b\u6570\u7ec4\u6216 JSON \u8868\u793a\u4e2d\u7684\u5c5e\u6027\uff0c\u6bd4\u5982\u8bf4\u5bc6\u7801\u3002\u5219\u53ef\u4ee5\u901a\u8fc7\u5728\u6a21\u578b\u4e2d\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"$hidden")," \u5c5e\u6027\u5b9a\u4e49\u6765\u5b9e\u73b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * The attributes that should be hidden for arrays.\n     *\n     * @var array\n     */\n    protected $hidden = ['password'];\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u5f53\u4f60\u8981\u5bf9\u5173\u8054\u8fdb\u884c\u9690\u85cf\u65f6\uff0c\u9700\u4f7f\u7528\u5173\u8054\u7684 \u65b9\u6cd5 \u540d\u79f0\uff0c\u800c\u4e0d\u662f\u5b83\u7684\u52a8\u6001\u5c5e\u6027\u540d\u79f0\u3002")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"visible")," \u5c5e\u6027\u6765\u5b9a\u4e49\u5e94\u8be5\u5305\u542b\u5728\u4f60\u7684\u6a21\u578b\u6570\u7ec4\u548c JSON \u8868\u793a\u4e2d\u7684\u5c5e\u6027\u767d\u540d\u5355\u3002\u767d\u540d\u5355\u5916\u7684\u5176\u4ed6\u5c5e\u6027\u5c06\u9690\u85cf\uff0c\u4e0d\u4f1a\u51fa\u73b0\u5728\u8f6c\u6362\u540e\u7684\u6570\u7ec4\u6216 JSON \u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * The attributes that should be visible in arrays.\n     *\n     * @var array\n     */\n    protected $visible = ['first_name', 'last_name'];\n}\n")),(0,l.kt)("h4",{id:"\u4e34\u65f6\u4fee\u6539\u5c5e\u6027\u7684\u53ef\u89c1\u5ea6"},"\u4e34\u65f6\u4fee\u6539\u5c5e\u6027\u7684\u53ef\u89c1\u5ea6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u6a21\u578b\u5b9e\u4f8b\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeVisible")," \u65b9\u6cd5\u6765\u663e\u793a\u901a\u5e38\u9690\u85cf\u7684\u5c5e\u6027\uff0c\u4e14\u4e3a\u4e86\u4fbf\u4e8e\u4f7f\u7528\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"makeVisible")," \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6a21\u578b\u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"return $user->makeVisible('attribute')->toArray();\n")),(0,l.kt)("p",null,"\u76f8\u5e94\u7684\uff0c\u4f60\u53ef\u4ee5\u5728\u6a21\u578b\u5b9e\u4f8b\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeHidden")," \u65b9\u6cd5\u6765\u9690\u85cf\u901a\u5e38\u663e\u793a\u7684\u5c5e\u6027\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"return $user->makeHidden('attribute')->toArray();\n")),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u53c2\u6570\u5230-json-\u4e2d"},"\u6dfb\u52a0\u53c2\u6570\u5230 JSON \u4e2d"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u5728\u8f6c\u6362\u6a21\u578b\u5230 \u6570\u7ec4 \u6216 JSON \u65f6\uff0c\u4f60\u5e0c\u671b\u6dfb\u52a0\u4e00\u4e2a\u5728\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u5bf9\u5e94\u5b57\u6bb5\u7684\u5c5e\u6027\u3002\u9996\u5148\u4f60\u9700\u8981\u4e3a\u8fd9\u4e2a\u503c\u5b9a\u4e49\u4e00\u4e2a  ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/eloquent-mutators"},"\u8bbf\u95ee\u5668"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * Get the administrator flag for the user.\n     *\n     * @return bool\n     */\n    public function getIsAdminAttribute()\n    {\n        return $this->attributes['admin'] == 'yes';\n    }\n}\n")),(0,l.kt)("p",null,"\u8bbf\u95ee\u5668\u521b\u5efa\u6210\u529f\u540e\uff0c\u53ea\u9700\u6dfb\u52a0\u8be5\u5c5e\u6027\u5230\u8be5\u6a21\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"appends")," \u5c5e\u6027\u4e2d\u3002\u6ce8\u610f\uff0c\u5c5e\u6027\u540d\u79f0\u901a\u5e38\u9075\u5faa \u300cSnake Case\u300d, \u7684\u547d\u540d\u65b9\u5f0f\uff0c\u5373\u662f\u8bbf\u95ee\u5668\u7684\u540d\u79f0\u662f\u57fa\u4e8e \u300cCamel Case\u300d \u7684\u547d\u540d\u65b9\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    /**\n     * The accessors to append to the model's array form.\n     *\n     * @var array\n     */\n    protected $appends = ['is_admin'];\n}\n")),(0,l.kt)("p",null,"\u4e00\u65e6\u5c5e\u6027\u88ab\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"appends")," \u6e05\u5355\uff0c\u4fbf\u4f1a\u5c06\u6a21\u578b\u4e2d\u7684\u6570\u7ec4\u548c JSON \u8fd9\u4e24\u79cd\u5f62\u5f0f\u90fd\u5305\u542b\u8fdb\u53bb\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"appends"),"  \u6570\u7ec4\u4e2d\u7684\u5c5e\u6027\u4e5f\u9075\u5faa\u6a21\u578b\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"visible")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"hidden")," \u8bbe\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/GanymedeNil"},"@GanymedeNil")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/6859_1487055454.jpg?imageView2/1/w/100/h/100"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e89\u505a\u4e00\u4e2a Full Stack Developer  ",(0,l.kt)("a",{parentName:"td",href:"http://weibo.com/jinhongyang"},"@GanymedeNil"))))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}m.isMDXComponent=!0}}]);