"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5802],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return t?r.createElement(k,p(p({ref:n},d),{},{components:t})):r.createElement(k,p({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8927:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),p=["components"],i={},o="\u8def\u7531\u4e2d\u95f4\u4ef6",u={unversionedId:"laravel/middleware",id:"laravel/middleware",title:"\u8def\u7531\u4e2d\u95f4\u4ef6",description:"\u7b80\u4ecb",source:"@site/docs/laravel/middleware.md",sourceDirName:"laravel",slug:"/laravel/middleware",permalink:"/docs/laravel/middleware",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90ae\u4ef6\u53d1\u9001\u529f\u80fd",permalink:"/docs/laravel/mail"},next:{title:"\u6570\u636e\u5e93\u8fc1\u79fb Migrations",permalink:"/docs/laravel/migrations"}},d={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"\u5b9a\u4e49\u4e2d\u95f4\u4ef6",level:2},{value:"\u524d\u7f6e &amp; \u540e\u7f6e\u4e2d\u95f4\u4ef6",id:"\u524d\u7f6e--\u540e\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u6ce8\u518c\u4e2d\u95f4\u4ef6",id:"\u6ce8\u518c\u4e2d\u95f4\u4ef6",level:2},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:3},{value:"\u4e3a\u8def\u7531\u5206\u914d\u4e2d\u95f4\u4ef6",id:"\u4e3a\u8def\u7531\u5206\u914d\u4e2d\u95f4\u4ef6",level:3},{value:"\u4e2d\u95f4\u4ef6\u7ec4",id:"\u4e2d\u95f4\u4ef6\u7ec4",level:3},{value:"\u4e2d\u95f4\u4ef6\u53c2\u6570",id:"\u4e2d\u95f4\u4ef6\u53c2\u6570",level:2},{value:"Terminable \u4e2d\u95f4\u4ef6",id:"terminable-\u4e2d\u95f4\u4ef6",level:2},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],m={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Laravel \u4e2d\u95f4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u4fbf\u7684\u673a\u5236\u6765\u8fc7\u6ee4\u8fdb\u5165\u5e94\u7528\u7684 HTTP \u8bf7\u6c42\u3002\u4f8b\u5982\uff0cLaravel \u5185\u7f6e\u4e86\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u6765\u9a8c\u8bc1\u7528\u6237\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002\u5982\u679c\u7528\u6237\u6ca1\u6709\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\uff0c\u4e2d\u95f4\u4ef6\u4f1a\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u754c\u9762\u3002\u4f46\u662f\uff0c\u5982\u679c\u7528\u6237\u88ab\u8ba4\u8bc1\uff0c\u4e2d\u95f4\u4ef6\u5c06\u5141\u8bb8\u8be5\u8bf7\u6c42\u8fdb\u4e00\u6b65\u8fdb\u5165\u8be5\u5e94\u7528\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u9664\u4e86\u8eab\u4efd\u8ba4\u8bc1\u4ee5\u5916\uff0c\u8fd8\u53ef\u4ee5\u7f16\u5199\u53e6\u5916\u7684\u4e2d\u95f4\u4ef6\u6765\u6267\u884c\u5404\u79cd\u4efb\u52a1\u3002\u4f8b\u5982\uff1aCORS \u4e2d\u95f4\u4ef6\u53ef\u4ee5\u8d1f\u8d23\u4e3a\u6240\u6709\u79bb\u5f00\u5e94\u7528\u7684\u54cd\u5e94\u6dfb\u52a0\u5408\u9002\u7684\u5934\u90e8\u4fe1\u606f\uff1b\u65e5\u5fd7\u4e2d\u95f4\u4ef6\u53ef\u4ee5\u8bb0\u5f55\u6240\u6709\u4f20\u5165\u5e94\u7528\u7684\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,"Laravel \u81ea\u5e26\u4e86\u4e00\u4e9b\u4e2d\u95f4\u4ef6\uff0c\u5305\u62ec\u8eab\u4efd\u9a8c\u8bc1\u3001CSRF \u4fdd\u62a4\u7b49\u3002\u6240\u6709\u8fd9\u4e9b\u4e2d\u95f4\u4ef6\u90fd\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Http/Middleware")," \u76ee\u5f55\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u4e2d\u95f4\u4ef6"},"\u5b9a\u4e49\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u8fd0\u884cArtisan \u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"make:middleware")," \u521b\u5efa\u65b0\u7684\u4e2d\u95f4\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php artisan make:middleware CheckAge\n")),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u5c06\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Http/Middleware")," \u76ee\u5f55\u5185\u65b0\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"CheckAge")," \u7c7b\u3002\u5728\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u91cc\uff0c\u6211\u4eec\u4ec5\u5141\u8bb8\u63d0\u4f9b\u7684\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," \u5927\u4e8e 200 \u7684\u8bf7\u6c42\u8bbf\u95ee\u8be5\u8def\u7531\u3002\u5426\u5219\uff0c\u6211\u4eec\u4f1a\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"home")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\n\nclass CheckAge\n{\n    /**\n     * \u5904\u7406\u4f20\u5165\u7684\u8bf7\u6c42\n     *\n     * @param  \\Illuminate\\Http\\Request  $request\n     * @param  \\Closure  $next\n     * @return mixed\n     */\n    public function handle($request, Closure $next)\n    {\n        if ($request->age <= 200) {\n            return redirect('home');\n        }\n\n        return $next($request);\n    }\n\n}\n")),(0,l.kt)("p",null,"\u5982\u4f60\u6240\u89c1\uff0c\u82e5\u7ed9\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," \u5c0f\u4e8e\u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"200"),"\uff0c\u90a3\u4e2d\u95f4\u4ef6\u5c06\u8fd4\u56de\u4e00\u4e2a HTTP \u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\uff1b\u5426\u5219\uff0c\u8bf7\u6c42\u5c06\u8fdb\u4e00\u6b65\u4f20\u9012\u5230\u5e94\u7528\u4e2d\u3002\u8981\u8ba9\u8bf7\u6c42\u7ee7\u7eed\u4f20\u9012\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff08\u5373\u5141\u8bb8\u300c\u901a\u8fc7\u300d\u4e2d\u95f4\u4ef6\u9a8c\u8bc1\u7684\uff09\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"$request")," \u4f5c\u4e3a\u53c2\u6570\u53bb\u8c03\u7528\u56de\u8c03\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"$next")," \u3002"),(0,l.kt)("p",null,"\u6700\u597d\u5c06\u4e2d\u95f4\u4ef6\u60f3\u8c61\u4e3a\u4e00\u7cfb\u5217 HTTP \u8bf7\u6c42\u5fc5\u987b\u7ecf\u8fc7\u624d\u80fd\u89e6\u53d1\u4f60\u5e94\u7528\u7684\u300c\u5c42\u300d\u3002\u6bcf\u4e00\u5c42\u90fd\u4f1a\u68c0\u67e5\u8bf7\u6c42\uff08\u662f\u5426\u7b26\u5408\u67d0\u4e9b\u6761\u4ef6\uff09\uff0c\uff08\u5982\u679c\u4e0d\u7b26\u5408\uff09\u751a\u81f3\u53ef\u4ee5\uff08\u5728\u8bf7\u6c42\u8bbf\u95ee\u4f60\u7684\u5e94\u7528\u4e4b\u524d\uff09\u5b8c\u5168\u62d2\u7edd\u6389\u3002"),(0,l.kt)("h3",{id:"\u524d\u7f6e--\u540e\u7f6e\u4e2d\u95f4\u4ef6"},"\u524d\u7f6e & \u540e\u7f6e\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u4e2d\u95f4\u4ef6\u662f\u5728\u8bf7\u6c42\u4e4b\u524d\u6216\u4e4b\u540e\u8fd0\u884c\u53d6\u51b3\u4e8e\u4e2d\u95f4\u4ef6\u672c\u8eab\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u7684\u4e2d\u95f4\u4ef6\u4f1a\u5728\u5e94\u7528\u5904\u7406\u8bf7\u6c42 ",(0,l.kt)("strong",{parentName:"p"},"\u4e4b\u524d")," \u6267\u884c\u4e00\u4e9b\u4efb\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\n\nclass BeforeMiddleware\n{\n    public function handle($request, Closure $next)\n    {\n        // \u6267\u884c\u52a8\u4f5c\n\n        return $next($request);\n    }\n}\n")),(0,l.kt)("p",null,"\u800c\u4e0b\u9762\uff08\u8fd9\u79cd\u5199\u6cd5\u7684\uff09\u4e2d\u95f4\u4ef6\u4f1a\u5728\u5e94\u7528\u5904\u7406\u8bf7\u6c42 ",(0,l.kt)("strong",{parentName:"p"},"\u4e4b\u540e")," \u6267\u884c\u5176\u4efb\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\n\nclass AfterMiddleware\n{\n    public function handle($request, Closure $next)\n    {\n        $response = $next($request);\n\n        // \u6267\u884c\u52a8\u4f5c\n\n        return $response;\n    }\n}\n")),(0,l.kt)("h2",{id:"\u6ce8\u518c\u4e2d\u95f4\u4ef6"},"\u6ce8\u518c\u4e2d\u95f4\u4ef6"),(0,l.kt)("h3",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8ba9\u4e2d\u95f4\u4ef6\u5728\u4f60\u5e94\u7528\u7684\u6bcf\u4e2a HTTP \u8bf7\u6c42\u671f\u95f4\u8fd0\u884c\uff0c\u53ea\u9700\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Http/Kernel.php")," \u7c7b\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"$middleware")," \u5c5e\u6027\u91cc\u5217\u51fa\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u7c7b \u3002"),(0,l.kt)("h3",{id:"\u4e3a\u8def\u7531\u5206\u914d\u4e2d\u95f4\u4ef6"},"\u4e3a\u8def\u7531\u5206\u914d\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4e3a\u7279\u5b9a\u7684\u8def\u7531\u5206\u914d\u4e2d\u95f4\u4ef6\uff0c"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u4e3a\u7279\u6b8a\u7684\u8def\u7531\u6307\u5b9a\u4e2d\u95f4\u4ef6\uff0c\u9996\u5148\u5e94\u8be5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Http/Kernel.php")," \u6587\u4ef6\u5185\u4e3a\u8be5\u4e2d\u95f4\u4ef6\u6307\u5b9a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u952e"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Kernel")," \u7c7b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"$routeMiddleware")," \u5c5e\u6027\u5305\u542b Laravel \u5185\u7f6e\u7684\u4e2d\u95f4\u4ef6\u6761\u76ee\u3002\u8981\u52a0\u5165\u81ea\u5b9a\u4e49\u7684\uff0c\u53ea\u9700\u628a\u5b83\u9644\u52a0\u5230\u5217\u8868\u540e\u5e76\u4e3a\u5176\u5206\u914d\u4e00\u4e2a\u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u952e")," \u5373\u53ef\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u5728 App\\Http\\Kernel \u7c7b\u4e2d\n\nprotected $routeMiddleware = [\n    'auth' => \\Illuminate\\Auth\\Middleware\\Authenticate::class,\n    'auth.basic' => \\Illuminate\\Auth\\Middleware\\AuthenticateWithBasicAuth::class,\n    'bindings' => \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n    'can' => \\Illuminate\\Auth\\Middleware\\Authorize::class,\n    'guest' => \\App\\Http\\Middleware\\RedirectIfAuthenticated::class,\n    'throttle' => \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,\n];\n")),(0,l.kt)("p",null,"\u4e00\u65e6\u5728 Kernel \u4e2d\u5b9a\u4e49\u4e86\u4e2d\u95f4\u4ef6\uff0c\u5c31\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"middleware")," \u65b9\u6cd5\u5c06\u4e2d\u95f4\u4ef6\u5206\u914d\u7ed9\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::get('admin/profile', function () {\n    //\n})->middleware('auth');\n")),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4e3a\u8def\u7531\u5206\u914d\u591a\u4e2a\u4e2d\u95f4\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::get('/', function () {\n    //\n})->middleware('first', 'second');\n")),(0,l.kt)("p",null,"\u5206\u914d\u4e2d\u95f4\u4ef6\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f20\u9012\u5b8c\u6574\u7684\u7c7b\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"use App\\Http\\Middleware\\CheckAge;\n\nRoute::get('admin/profile', function () {\n    //\n})->middleware(CheckAge::class);\n")),(0,l.kt)("h3",{id:"\u4e2d\u95f4\u4ef6\u7ec4"},"\u4e2d\u95f4\u4ef6\u7ec4"),(0,l.kt)("p",null,"\u6709\u65f6\u4f60\u53ef\u80fd\u60f3\u7528\u5355\u4e00\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u952e")," \u4e3a\u51e0\u4e2a\u4e2d\u95f4\u4ef6\u5206\u7ec4\uff0c\u4f7f\u5176\u66f4\u5bb9\u6613\u5206\u914d\u5230\u8def\u7531\u3002\u53ef\u4ee5\u4f7f\u7528 Kernel \u7c7b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"$middlewareGroups")," \u5c5e\u6027\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"Laravel \u81ea\u5e26\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"web")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"api")," \u4e2d\u95f4\u4ef6\u7ec4\u5305\u542b\u4e86\u4f60\u53ef\u80fd\u4f1a\u5e94\u7528\u5230 Web UI \u548c API \u8def\u7531\u7684\u5e38\u89c1\u7684\u4e2d\u95f4\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u5e94\u7528\u7a0b\u5e8f\u7684\u8def\u7531\u4e2d\u95f4\u4ef6\u7ec4\n *\n * @var array\n */\nprotected $middlewareGroups = [\n    'web' => [\n        \\App\\Http\\Middleware\\EncryptCookies::class,\n        \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n        \\Illuminate\\Session\\Middleware\\StartSession::class,\n        \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n        \\App\\Http\\Middleware\\VerifyCsrfToken::class,\n        \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n    ],\n\n    'api' => [\n        'throttle:60,1',\n        'auth:api',\n    ],\n];\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4e0e\u5355\u4e2a\u4e2d\u95f4\u4ef6\u76f8\u540c\u7684\u8bed\u6cd5\u5c06\u4e2d\u95f4\u4ef6\u7ec4\u5206\u914d\u7ed9\u8def\u7531\u548c\u63a7\u5236\u5668\u64cd\u4f5c\u3002\u91cd\u7533\u4e00\u904d\uff0c\u4e2d\u95f4\u4ef6\u7ec4\u53ea\u662f\u66f4\u65b9\u4fbf\u5730\u5b9e\u73b0\u4e86\u4e00\u6b21\u4e3a\u8def\u7531\u5206\u914d\u591a\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::get('/', function () {\n    //\n})->middleware('web');\n\nRoute::group(['middleware' => ['web']], function () {\n    //\n});\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{tip} \u65e0\u9700\u4efb\u4f55\u64cd\u4f5c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"RouteServiceProvider")," \u4f1a\u81ea\u52a8\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"web")," \u4e2d\u95f4\u4ef6\u7ec4\u5e94\u7528\u4e8e\u4f60\u7684\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"routes/web.php")," \u6587\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u53c2\u6570"},"\u4e2d\u95f4\u4ef6\u53c2\u6570"),(0,l.kt)("p",null,"\u4e2d\u95f4\u4ef6\u4e5f\u53ef\u4ee5\u63a5\u53d7\u989d\u5916\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5e94\u7528\u9700\u8981\u5728\u8fd0\u884c\u7279\u5b9a\u64cd\u4f5c\u524d\u9a8c\u8bc1\u7ecf\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u7684\u7528\u6237\u662f\u5426\u5177\u5907\u7ed9\u5b9a\u7684\u300c\u89d2\u8272\u300d\uff0c\u4f60\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"CheckRole")," \u4e2d\u95f4\u4ef6\uff0c\u7531\u5b83\u6765\u63a5\u6536\u300c\u89d2\u8272\u300d\u540d\u79f0\u4f5c\u4e3a\u9644\u52a0\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u9644\u52a0\u7684\u4e2d\u95f4\u4ef6\u53c2\u6570\u5e94\u8be5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"$next")," \u53c2\u6570\u4e4b\u540e\u88ab\u4f20\u9012\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\n\nclass CheckRole\n{\n    /**\n     * \u5904\u7406\u4f20\u5165\u7684\u8bf7\u6c42\n     *\n     * @param  \\Illuminate\\Http\\Request  $request\n     * @param  \\Closure  $next\n     * @param  string  $role\n     * @return mixed\n     */\n    public function handle($request, Closure $next, $role)\n    {\n        if (! $request->user()->hasRole($role)) {\n            // \u91cd\u5b9a\u5411...\n        }\n\n        return $next($request);\n    }\n\n}\n")),(0,l.kt)("p",null,"\u5b9a\u4e49\u8def\u7531\u65f6\u901a\u8fc7\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},":")," \u6765\u9694\u5f00\u4e2d\u95f4\u4ef6\u540d\u79f0\u548c\u53c2\u6570\u6765\u6307\u5b9a\u4e2d\u95f4\u4ef6\u53c2\u6570\u3002\u591a\u4e2a\u53c2\u6570\u5c31\u4f7f\u7528\u9017\u53f7\u5206\u9694\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Route::put('post/{id}', function ($id) {\n    //\n})->middleware('role:editor');\n")),(0,l.kt)("h2",{id:"terminable-\u4e2d\u95f4\u4ef6"},"Terminable \u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u6709\u65f6\u4e2d\u95f4\u4ef6\u53ef\u80fd\u9700\u8981\u5728 HTTP \u54cd\u5e94\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u4e4b\u540e\u5904\u7406\u4e00\u4e9b\u5de5\u4f5c\u3002\u6bd4\u5982\uff0cLaravel \u5185\u7f6e\u7684\u300csession\u300d\u4e2d\u95f4\u4ef6\u4f1a\u5728\u54cd\u5e94\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u4e4b\u540e\u5c06\u4f1a\u8bdd\u6570\u636e\u5199\u5165\u5b58\u50a8\u5668\u4e2d\u3002\u5982\u679c\u4f60\u5728\u4e2d\u95f4\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"terminate")," \u65b9\u6cd5\uff0c\u5219\u4f1a\u5728\u54cd\u5e94\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u540e\u81ea\u52a8\u8c03\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace Illuminate\\Session\\Middleware;\n\nuse Closure;\n\nclass StartSession\n{\n    public function handle($request, Closure $next)\n    {\n        return $next($request);\n    }\n\n    public function terminate($request, $response)\n    {\n        // Store the session data...\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"terminate")," \u65b9\u6cd5\u5e94\u8be5\u540c\u65f6\u63a5\u6536\u548c\u54cd\u5e94\u3002\u4e00\u65e6\u5b9a\u4e49\u4e86\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u4f60\u5e94\u8be5\u5c06\u5b83\u6dfb\u52a0\u5230\u8def\u7531\u5217\u8868\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Http/Kernel.php")," \u6587\u4ef6\u7684\u5168\u5c40\u4e2d\u95f4\u4ef6\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728\u4f60\u7684\u4e2d\u95f4\u4ef6\u4e0a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"terminate")," \u8c03\u7528\u65f6\uff0cLaravel \u4f1a\u4ece ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/container"},"\u670d\u52a1\u5bb9\u5668")," \u4e2d\u89e3\u6790\u51fa\u4e00\u4e2a\u65b0\u7684\u4e2d\u95f4\u4ef6\u5b9e\u4f8b\u3002\u5982\u679c\u8981\u5728\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"handle")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"terminate")," \u65b9\u6cd5\u65f6\u4f7f\u7528\u540c\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u5b9e\u4f8b\uff0c\u5c31\u4f7f\u7528\u5bb9\u5668\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"singleton")," \u65b9\u6cd5\u5411\u5bb9\u5668\u6ce8\u518c\u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/6928"},"@\u534a\u590f")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/6928_1479451835.jpeg?imageView2/1/w/100/h/100"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mintgreen1108"},"@\u534a\u590f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/5350"},"@JokerLinly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/5350_1481857380.jpg"})),(0,l.kt)("td",{parentName:"tr",align:null},"Review"),(0,l.kt)("td",{parentName:"tr",align:null},"Stay Hungry. Stay Foolish.")))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}c.isMDXComponent=!0}}]);