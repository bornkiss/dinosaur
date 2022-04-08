"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5229],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(t),s=a,k=m["".concat(i,".").concat(s)]||m[s]||c[s]||l;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4715:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],p={},i=void 0,u={unversionedId:"laravel/errors",id:"laravel/errors",title:"errors",description:"\u7b80\u4ecb",source:"@site/docs/laravel/errors.md",sourceDirName:"laravel",slug:"/laravel/errors",permalink:"/docs/laravel/errors",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"envoy",permalink:"/docs/laravel/envoy"},next:{title:"events",permalink:"/docs/laravel/events"}},d={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u9519\u8bef\u7684\u8be6\u7ec6\u4fe1\u606f",id:"\u9519\u8bef\u7684\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"\u65e5\u5fd7\u5b58\u50a8",id:"\u65e5\u5fd7\u5b58\u50a8",level:3},{value:"\u6700\u5927\u65e5\u5fd7\u6587\u4ef6\u6570",id:"\u6700\u5927\u65e5\u5fd7\u6587\u4ef6\u6570",level:4},{value:"\u65e5\u5fd7\u4e25\u91cd\u7a0b\u5ea6\u7ea7\u522b",id:"\u65e5\u5fd7\u4e25\u91cd\u7a0b\u5ea6\u7ea7\u522b",level:3},{value:"\u81ea\u5b9a\u4e49 Monolog \u914d\u7f6e",id:"\u81ea\u5b9a\u4e49-monolog-\u914d\u7f6e",level:3},{value:"\u81ea\u5b9a\u4e49\u6e20\u9053\u540d\u79f0",id:"\u81ea\u5b9a\u4e49\u6e20\u9053\u540d\u79f0",level:4},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",level:2},{value:"Report \u65b9\u6cd5",id:"report-\u65b9\u6cd5",level:3},{value:"\u8f85\u52a9\u51fd\u6570 <code>report</code>",id:"\u8f85\u52a9\u51fd\u6570-report",level:4},{value:"\u6309\u7c7b\u578b\u5ffd\u7565\u5f02\u5e38",id:"\u6309\u7c7b\u578b\u5ffd\u7565\u5f02\u5e38",level:4},{value:"Render \u65b9\u6cd5",id:"render-\u65b9\u6cd5",level:3},{value:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684 report &amp; render \u65b9\u6cd5",id:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684-report--render-\u65b9\u6cd5",level:3},{value:"HTTP \u5f02\u5e38",id:"http-\u5f02\u5e38",level:2},{value:"\u81ea\u5b9a\u4e49 HTTP \u9519\u8bef\u9875\u9762",id:"\u81ea\u5b9a\u4e49-http-\u9519\u8bef\u9875\u9762",level:3},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2},{value:"\u4e0a\u4e0b\u6587\u4fe1\u606f",id:"\u4e0a\u4e0b\u6587\u4fe1\u606f",level:4},{value:"\u8bbf\u95ee\u5e95\u5c42\u7684 Monolog \u5b9e\u4f8b",id:"\u8bbf\u95ee\u5e95\u5c42\u7684-monolog-\u5b9e\u4f8b",level:4},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],m={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9519\u8bef\u548c\u65e5\u5fd7\u8bb0\u5f55"},"\u9519\u8bef\u548c\u65e5\u5fd7\u8bb0\u5f55"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Laravel \u9ed8\u8ba4\u81ea\u5e26\u9519\u8bef\u548c\u5f02\u5e38\u5904\u7406\u673a\u5236\u3002\u5e94\u7528\u7a0b\u5e8f\u89e6\u53d1\u7684\u6240\u6709\u5f02\u5e38\u90fd\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Exceptions\\Handler")," \u7c7b\u8bb0\u5f55\u4e0b\u6765\uff0c\u7136\u540e\u6e32\u67d3\u7ed9\u7528\u6237\u3002 \u6211\u4eec\u5c06\u5728\u540e\u7eed\u6587\u6863\u4e2d\u6df1\u5165\u4ecb\u7ecd\u6b64\u7c7b\u3002"),(0,l.kt)("p",null,"Laravel \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seldaek/monolog"},"Monolog")," \u5e93\u4e3a\u5404\u79cd\u5f3a\u5927\u7684\u65e5\u5fd7\u5904\u7406\u7a0b\u5e8f\u63d0\u4f9b\u652f\u6301\u3002Laravel \u914d\u7f6e\u4e86\u591a\u79cd\u65e5\u5fd7\u5904\u7406\u7a0b\u5e8f\uff0c\u65b9\u4fbf\u4f60\u5728\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u3001\u591a\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6216\u5c06\u9519\u8bef\u4fe1\u606f\u5199\u5165\u7cfb\u7edf\u65e5\u5fd7\u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u9519\u8bef\u7684\u8be6\u7ec6\u4fe1\u606f"},"\u9519\u8bef\u7684\u8be6\u7ec6\u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"config/app.php")," \u914d\u7f6e\u6587\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"debug")," \u9009\u9879\u51b3\u5b9a\u4e86\u662f\u5426\u5411\u7528\u6237\u663e\u793a\u9519\u8bef\u4fe1\u606f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a\u83b7\u53d6\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," \u73af\u5883\u53d8\u91cf\u7684\u503c\u3002"),(0,l.kt)("p",null," \u5bf9\u4e8e\u672c\u5730\u5f00\u53d1\uff0c\u5e94\u8be5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u3002\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6b64\u503c\u5e94\u59cb\u7ec8\u4fdd\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u3002\u5982\u679c\u4f60\u5728\u751f\u4ea7\u4e2d\u5c06\u8be5\u503c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \uff0c\u5219\u6709\u53ef\u80fd\u4f1a\u5c06\u654f\u611f\u7684\u914d\u7f6e\u4fe1\u606f\u66b4\u9732\u7ed9\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u7ec8\u7528\u6237\u3002"),(0,l.kt)("h3",{id:"\u65e5\u5fd7\u5b58\u50a8"},"\u65e5\u5fd7\u5b58\u50a8"),(0,l.kt)("p",null,"Laravel \u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"single")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"daily")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"syslog")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"errorlog")," \u56db\u79cd\u65e5\u5fd7\u5199\u5165\u6a21\u5f0f\u3002\u901a\u8fc7\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"config/app.php")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"log")," \u9009\u9879\u6765\u914d\u7f6e Laravel \u4f7f\u7528\u7684\u5b58\u50a8\u673a\u5236\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6bcf\u5929\u4ea7\u751f\u65e5\u5fd7\u90fd\u5b58\u653e\u5728\u4e0d\u540c\u7684\u6587\u4ef6\u4e2d\uff0c\u5219\u5e94\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"log")," \u503c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"daily"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'log' => 'daily'\n")),(0,l.kt)("h4",{id:"\u6700\u5927\u65e5\u5fd7\u6587\u4ef6\u6570"},"\u6700\u5927\u65e5\u5fd7\u6587\u4ef6\u6570"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"daily")," \u65e5\u5fd7\u6a21\u5f0f\u65f6\uff0cLaravel \u9ed8\u8ba4\u53ea\u4fdd\u7559\u4e94\u5929\u4efd\u7684\u65e5\u5fd7\u6587\u4ef6\u3002\u5982\u679c\u8981\u8c03\u6574\u4fdd\u7559\u6587\u4ef6\u7684\u6570\u91cf\uff0c\u5c31\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"log_max_files")," \u914d\u7f6e\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'log_max_files' => 30\n")),(0,l.kt)("h3",{id:"\u65e5\u5fd7\u4e25\u91cd\u7a0b\u5ea6\u7ea7\u522b"},"\u65e5\u5fd7\u4e25\u91cd\u7a0b\u5ea6\u7ea7\u522b"),(0,l.kt)("p",null,"\u4f7f\u7528 Monolog \u65f6\uff0c\u65e5\u5fd7\u6d88\u606f\u53ef\u80fd\u5177\u6709\u4e0d\u540c\u7a0b\u5ea6\u7684\u4e25\u91cd\u7ea7\u522b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLaravel \u5c06\u5b58\u50a8\u6240\u6709\u7ea7\u522b\u7684\u65e5\u5fd7\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u901a\u8fc7\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"log_level")," \u9009\u9879\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"app.php")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u6765\u914d\u7f6e\u5e94\u5f53\u8bb0\u5f55\u7684\u4e25\u91cd\u7a0b\u5ea6\u6700\u4f4e\u7684\u65e5\u5fd7\u7ea7\u522b\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u4e4b\u540e\uff0cLaravel \u5c31\u53ea\u4f1a\u8bb0\u5f55\u5927\u4e8e\u6216\u7b49\u4e8e\u6307\u5b9a\u4e25\u91cd\u7ea7\u522b\u7684\u6240\u6709\u7ea7\u522b\u7684\u9519\u8bef\u3002\u4f8b\u5982\uff0c\u9ed8\u8ba4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"log_level")," \u88ab\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"\uff0c\u90a3\u4e48 Laravel \u53ea\u4f1a\u8bb0\u5f55 ",(0,l.kt)("strong",{parentName:"p"},"error"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"critical"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"alert")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"emergency")," \u7ea7\u522b\u7684\u65e5\u5fd7\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'log_level' => env('APP_LOG_LEVEL', 'error'),\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{tip}  Monolog \u8bc6\u522b\u4ee5\u4e0b\u4e25\u91cd\u7a0b\u5ea6\u7684\u7ea7\u522b\uff0c\u4ece\u4f4e\u5230\u9ad8\u4e3a: ",(0,l.kt)("inlineCode",{parentName:"p"},"debug"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"notice"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"warning"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"error"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"critical"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"emergency"),"\u3002")),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49-monolog-\u914d\u7f6e"},"\u81ea\u5b9a\u4e49 Monolog \u914d\u7f6e"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"configureMonologUsing")," \u65b9\u6cd5\u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u5bf9 Monolog \u7684\u5b8c\u5168\u63a7\u5236\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"$app")," \u53d8\u91cf\u8fd4\u56de\u4e4b\u524d\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"bootstrap/app.php")," \u6587\u4ef6\u4e2d\u8c03\u7528\u6b64\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$app->configureMonologUsing(function ($monolog) {\n    $monolog->pushHandler(...);\n});\n\nreturn $app;\n")),(0,l.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u6e20\u9053\u540d\u79f0"},"\u81ea\u5b9a\u4e49\u6e20\u9053\u540d\u79f0"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cMonolog \u7528\u4e0e\u5f53\u524d\u73af\u5883\u5339\u914d\u7684\u540d\u79f0\u8fdb\u884c\u5b9e\u4f8b\u5316\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"production")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"local"),"\u3002\u8981\u66f4\u6539\u6b64\u503c\uff0c\u53ef\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"log_channel")," \u9009\u9879\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"app.php")," \u914d\u7f6e\u6587\u4ef6\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'log_channel' => env('APP_LOG_CHANNEL', 'my-app-name'),\n")),(0,l.kt)("h2",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,l.kt)("h3",{id:"report-\u65b9\u6cd5"},"Report \u65b9\u6cd5"),(0,l.kt)("p",null,"\u6240\u6709\u5f02\u5e38\u90fd\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Exceptions\\Handler")," \u7c7b\u5904\u7406\u3002 \u8fd9\u4e2a\u7c7b\u5305\u542b\u4e24\u4e2a\u65b9\u6cd5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"render"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u65b9\u6cd5\u7528\u4e8e\u8bb0\u5f55\u5f02\u5e38\u6216\u5c06\u5176\u53d1\u9001\u5230\u5916\u90e8\u670d\u52a1\uff0c\u5982 ",(0,l.kt)("a",{parentName:"p",href:"https://bugsnag.com"},"Bugsnag")," \u6216 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/getsentry/sentry-laravel"},"Sentry"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u65b9\u6cd5\u53ea\u662f\u7b80\u5355\u5730\u5c06\u5f02\u5e38\u4f20\u9012\u7ed9\u8bb0\u5f55\u5f02\u5e38\u7684\u57fa\u7c7b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6765\u8bb0\u5f55\u5f02\u5e38\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u9700\u8981\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u62a5\u544a\u4e0d\u540c\u7c7b\u578b\u7684\u5f02\u5e38\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 PHP \u7684\u6bd4\u8f83\u8fd0\u7b97\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"instanceof"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u62a5\u544a\u6216\u8bb0\u5f55\u4e00\u4e2a\u5f02\u5e38\n *\n * \u8fd9\u662f\u4e2a\u7ed9 Bugsnag \u6216 Sentry \u53d1\u9001\u5f02\u5e38\u7684\u597d\u5730\u65b9\n *\n * @param  \\Exception  $exception\n * @return void\n */\npublic function report(Exception $exception)\n{\n    if ($exception instanceof CustomException) {\n        //\n    }\n\n    return parent::report($exception);\n}\n")),(0,l.kt)("h4",{id:"\u8f85\u52a9\u51fd\u6570-report"},"\u8f85\u52a9\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"h4"},"report")),(0,l.kt)("p",null,"\u67d0\u4e9b\u65f6\u5019\u4f60\u53ef\u80fd\u60f3\u8981\u62a5\u544a\u4e00\u4e2a\u5f02\u5e38\uff0c\u4f46\u53c8\u60f3\u7ee7\u7eed\u5904\u7406\u5f53\u524d\u7684\u8bf7\u6c42\u3002\u8f85\u52a9\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u5141\u8bb8\u4f60\u4f7f\u7528\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u65b9\u6cd5\u5feb\u901f\u62a5\u544a\u4e00\u4e2a\u5f02\u5e38\u800c\u4e0d\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u9875\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"public function isValid($value)\n{\n    try {\n        // \u6821\u9a8c\u503c...\n    } catch (Exception $e) {\n        report($e);\n\n        return false;\n    }\n}\n")),(0,l.kt)("h4",{id:"\u6309\u7c7b\u578b\u5ffd\u7565\u5f02\u5e38"},"\u6309\u7c7b\u578b\u5ffd\u7565\u5f02\u5e38"),(0,l.kt)("p",null,"\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"$dontReport")," \u5c5e\u6027\u5305\u542b\u4e0d\u4f1a\u88ab\u8bb0\u5f55\u7684\u5f02\u5e38\u7c7b\u578b\u6570\u7ec4\u3002\u4f8b\u5982\uff0c404\u9519\u8bef\u5bfc\u81f4\u7684\u5f02\u5e38\u4ee5\u53ca\u5176\u4ed6\u7c7b\u578b\u7684\u9519\u8bef\u4e0d\u4f1a\u5199\u5165\u65e5\u5fd7\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5411\u6b64\u6570\u7ec4\u6dfb\u52a0\u5176\u4ed6\u5f02\u5e38\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u4e0d\u5e94\u62a5\u544a\u7684\u5f02\u5e38\u7c7b\u578b\u5217\u8868\u3002\n *\n * @var array\n */\nprotected $dontReport = [\n    \\Illuminate\\Auth\\AuthenticationException::class,\n    \\Illuminate\\Auth\\Access\\AuthorizationException::class,\n    \\Symfony\\Component\\HttpKernel\\Exception\\HttpException::class,\n    \\Illuminate\\Database\\Eloquent\\ModelNotFoundException::class,\n    \\Illuminate\\Validation\\ValidationException::class,\n];\n")),(0,l.kt)("h3",{id:"render-\u65b9\u6cd5"},"Render \u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u8d1f\u8d23\u5c06\u7ed9\u5b9a\u7684\u5f02\u5e38\u8f6c\u6362\u6210\u53d1\u9001\u7ed9\u6d4f\u89c8\u5668\u7684 HTTP \u54cd\u5e94\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f02\u5e38\u4f1a\u4f20\u9012\u4e3a\u4f60\u751f\u6210\u54cd\u5e94\u7684\u57fa\u7c7b\u3002\u4f60\u8fd8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u68c0\u67e5\u5f02\u5e38\u7c7b\u578b\u6216\u8fd4\u56de\u81ea\u5b9a\u4e49\u7684\u54cd\u5e94\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/**\n * \u6e32\u67d3\u5f02\u5e38\u5230 HTTP \u54cd\u5e94\u4e2d.\n *\n * @param  \\Illuminate\\Http\\Request  $request\n * @param  \\Exception  $exception\n * @return \\Illuminate\\Http\\Response\n */\npublic function render($request, Exception $exception)\n{\n    if ($exception instanceof CustomException) {\n        return response()->view('errors.custom', [], 500);\n    }\n\n    return parent::render($request, $exception);\n}\n")),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684-report--render-\u65b9\u6cd5"},"\u81ea\u5b9a\u4e49\u5f02\u5e38\u7684 report & render \u65b9\u6cd5"),(0,l.kt)("p",null,"\u4f60\u5e76\u4e0d\u4e00\u5b9a\u8981\u5728\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u4e2d\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u5f02\u5e38\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\u4e2d\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"report")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u3002\u5982\u679c\u8fd9\u4e9b\u65b9\u6cd5\u5b58\u7684\u5728\u8bdd\uff0c\u6846\u67b6\u4f1a\u81ea\u52a8\u8c03\u7528\u4ed6\u4eec\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Exceptions;\n\nuse Exception;\n\nclass RenderException extends Exception\n{\n    /**\n     * \u62a5\u544a\u5f02\u5e38\n     *\n     * @return void\n     */\n    public function report()\n    {\n        //\n    }\n\n    /**\n     * \u5c06\u5f02\u5e38\u6e32\u67d3\u5230 HTTP \u54cd\u5e94\u4e2d\u3002\n     *\n     * @param  \\Illuminate\\Http\\Request\n     * @return void\n     */\n    public function render($request)\n    {\n        return response(...);\n    }\n}\n")),(0,l.kt)("h2",{id:"http-\u5f02\u5e38"},"HTTP \u5f02\u5e38"),(0,l.kt)("p",null,"\u4e00\u4e9b\u5f02\u5e38\u63cf\u8ff0\u4e86\u6765\u81ea\u670d\u52a1\u5668\u7684 HTTP \u9519\u8bef\u4ee3\u7801\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u662f\u9519\u8bef\u4ee3\u7801 404 \u7684\u300c\u627e\u4e0d\u5230\u9875\u9762\u300d\u3001401 \u7684\u300c\u672a\u6388\u6743\u9519\u8bef\u300d\u751a\u81f3\u53ef\u80fd\u662f\u7531\u5f00\u53d1\u8005\u9020\u6210\u7684 500\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8f85\u52a9\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," \u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\u751f\u6210\u8fd9\u6837\u7684\u54cd\u5e94\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"abort(404);\n")),(0,l.kt)("p",null,"\u8f85\u52a9\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," \u4f1a\u521b\u5efa\u4e00\u4e2a\u7531\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\u6e32\u67d3\u7684\u5f02\u5e38\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u63d0\u4f9b\u54cd\u5e94\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"abort(403, 'Unauthorized action.');\n")),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49-http-\u9519\u8bef\u9875\u9762"},"\u81ea\u5b9a\u4e49 HTTP \u9519\u8bef\u9875\u9762"),(0,l.kt)("p",null,"Laravel \u53ef\u4ee5\u8f7b\u677e\u5730\u663e\u793a\u5404\u79cd HTTP \u72b6\u6001\u4ee3\u7801\u7684\u81ea\u5b9a\u4e49\u9519\u8bef\u9875\u9762\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u8981\u81ea\u5b9a\u4e49 404 HTTP \u72b6\u6001\u4ee3\u7801\u7684\u9519\u8bef\u9875\u9762\uff0c\u5c31\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"resources/views/errors/404.blade.php")," \u3002\u6b64\u6587\u4ef6\u5c06\u4f1a\u7528\u4e8e\u6e32\u67d3\u4f60\u5e94\u7528\u4e2d\u4ea7\u751f\u7684\u6240\u6709 404 \u9519\u8bef\u3002\u6b64\u76ee\u5f55\u4e2d\u7684\u89c6\u56fe\u6587\u4ef6\u7684\u547d\u540d\u5e94\u8be5\u4e0e\u5b83\u4eec\u5bf9\u5e94\u7684 HTTP \u72b6\u6001\u4ee3\u7801\u5339\u914d\u3002\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"abort")," \u51fd\u6570\u5f15\u53d1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpException")," \u5b9e\u4f8b\u5c06\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"$exception")," \u53d8\u91cf\u4f20\u9012\u7ed9\u89c6\u56fe\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<h2>{{ $exception->getMessage() }}</h2>\n")),(0,l.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,l.kt)("p",null,"Laravel \u5728\u5f3a\u5927\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/seldaek/monolog"},"Monolog")," \u5e93\u4e0a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u62bd\u8c61\u5c42\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLaravel \u7684\u65e5\u5fd7\u6587\u4ef6\u7684\u5b58\u50a8\u76ee\u5f55\u88ab\u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"storage/logs")," \u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Log")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/facades"},"facade")," \u5c06\u4fe1\u606f\u5199\u5165\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\User;\nuse Illuminate\\Support\\Facades\\Log;\nuse App\\Http\\Controllers\\Controller;\n\nclass UserController extends Controller\n{\n    /**\n     * \u663e\u793a\u7ed9\u5b9a\u7528\u6237\u7684\u914d\u7f6e\u3002\n     *\n     * @param  int  $id\n     * @return Response\n     */\n    public function showProfile($id)\n    {\n        Log::info('Showing user profile for user: '.$id);\n\n        return view('user.profile', ['user' => User::findOrFail($id)]);\n    }\n}\n")),(0,l.kt)("p",null,"\u8be5\u65e5\u5fd7\u8bb0\u5f55\u5668\u63d0\u4f9b ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"RFC 5424")," \u4e2d\u5b9a\u4e49\u7684\u516b\u79cd\u65e5\u5fd7\u7ea7\u522b\uff1a",(0,l.kt)("strong",{parentName:"p"},"emergency"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"alert"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"critical"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"error"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"warning"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"notice"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"info"),"  \u548c ",(0,l.kt)("strong",{parentName:"p"},"debug"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Log::emergency($message);\nLog::alert($message);\nLog::critical($message);\nLog::error($message);\nLog::warning($message);\nLog::notice($message);\nLog::info($message);\nLog::debug($message);\n")),(0,l.kt)("h4",{id:"\u4e0a\u4e0b\u6587\u4fe1\u606f"},"\u4e0a\u4e0b\u6587\u4fe1\u606f"),(0,l.kt)("p",null,"\u4e0a\u4e0b\u6587\u6570\u636e\u4e5f\u53ef\u4ee5\u7528\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u9012\u7ed9\u65e5\u5fd7\u65b9\u6cd5\u3002\u6b64\u4e0a\u4e0b\u6587\u6570\u636e\u5c06\u88ab\u683c\u5f0f\u5316\u5e76\u4e0e\u65e5\u5fd7\u6d88\u606f\u4e00\u8d77\u663e\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Log::info('User failed to login.', ['id' => $user->id]);\n")),(0,l.kt)("h4",{id:"\u8bbf\u95ee\u5e95\u5c42\u7684-monolog-\u5b9e\u4f8b"},"\u8bbf\u95ee\u5e95\u5c42\u7684 Monolog \u5b9e\u4f8b"),(0,l.kt)("p",null,"Monolog \u8fd8\u63d0\u4f9b\u4e86\u5404\u79cd\u53ef\u7528\u4e8e\u8bb0\u5f55\u7684\u5904\u7406\u7a0b\u5e8f\u3002\u5982\u679c\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee Laravel \u4f7f\u7528\u7684\u5e95\u5c42\u7684 Monolog \u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$monolog = Log::getMonolog();\n")),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ChrisonWang"},"@ChrisonWang")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://avatars0.githubusercontent.com/u/16531947?v=4&s=80"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/ChrisonWang/"},"@\u738b\u6b23")," at LinkedIn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/5350"},"@JokerLinly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/5350_1481857380.jpg"})),(0,l.kt)("td",{parentName:"tr",align:null},"Review"),(0,l.kt)("td",{parentName:"tr",align:null},"Stay Hungry. Stay Foolish.")))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}s.isMDXComponent=!0}}]);