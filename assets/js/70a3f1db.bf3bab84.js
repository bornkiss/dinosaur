"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3931],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=o(n),m=r,c=k["".concat(p,".").concat(m)]||k[m]||d[m]||l;return n?a.createElement(c,s(s({ref:t},u),{},{components:n})):a.createElement(c,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],i={},p="Laravel \u6d4b\u8bd5\u4e4b\uff1aHTTP \u6d4b\u8bd5",o={unversionedId:"laravel/http-tests",id:"laravel/http-tests",title:"Laravel \u6d4b\u8bd5\u4e4b\uff1aHTTP \u6d4b\u8bd5",description:"\u7b80\u4ecb",source:"@site/docs/laravel/http-tests.md",sourceDirName:"laravel",slug:"/laravel/http-tests",permalink:"/docs/laravel/http-tests",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laravel \u961f\u5217\u76d1\u63a7\u9762\u677f - Horizon",permalink:"/docs/laravel/horizon"},next:{title:"\u8bf7\u6c42\u751f\u547d\u5468\u671f",permalink:"/docs/laravel/lifecycle"}},u={},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Session / \u8ba4\u8bc1",id:"session--\u8ba4\u8bc1",level:2},{value:"Testing JSON APIs",id:"testing-json-apis",level:2},{value:"\u9a8c\u8bc1\u5b8c\u5168\u5339\u914d",id:"\u9a8c\u8bc1\u5b8c\u5168\u5339\u914d",level:3},{value:"\u6d4b\u8bd5\u6587\u4ef6\u4e0a\u4f20",id:"\u6d4b\u8bd5\u6587\u4ef6\u4e0a\u4f20",level:2},{value:"\u81ea\u5b9a\u4e49\u6a21\u62df\u6587\u4ef6",id:"\u81ea\u5b9a\u4e49\u6a21\u62df\u6587\u4ef6",level:4},{value:"\u53ef\u7528\u7684\u65ad\u8a00\u65b9\u6cd5",id:"\u53ef\u7528\u7684\u65ad\u8a00\u65b9\u6cd5",level:2},{value:"\u8bd1\u8005\u7f72\u540d",id:"\u8bd1\u8005\u7f72\u540d",level:2}],k={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"laravel-\u6d4b\u8bd5\u4e4bhttp-\u6d4b\u8bd5"},"Laravel \u6d4b\u8bd5\u4e4b\uff1aHTTP \u6d4b\u8bd5"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Laravel \u4e3a HTTP \u8bf7\u6c42\u7684\u751f\u6210\u548c\u8f93\u51fa\u7684\u68c0\u67e5\u90fd\u63d0\u4f9b\u4e86\u975e\u5e38\u6d41\u7545\u7684 API\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u4e0b\u9762\u7684\u8fd9\u4e2a\u6d4b\u8bd5\u7528\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace Tests\\Feature;\n\nuse Tests\\TestCase;\nuse Illuminate\\Foundation\\Testing\\WithoutMiddleware;\nuse Illuminate\\Foundation\\Testing\\DatabaseMigrations;\nuse Illuminate\\Foundation\\Testing\\DatabaseTransactions;\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * \u4e00\u4e2a\u57fa\u7840\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002\n     *\n     * @return void\n     */\n    public function testBasicTest()\n    {\n        $response = $this->get('/');\n\n        $response->assertStatus(200);\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\u6765\u8bf7\u6c42\u4f60\u7684\u5e94\u7528\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"assertStatus")," \u65b9\u6cd5\u65ad\u8a00\u8fd4\u56de\u7684\u54cd\u5e94\u662f\u6307\u5b9a\u7684 HTTP \u72b6\u6001\u7801\u3002\u9664\u4e86\u8fd9\u4e2a\u7b80\u5355\u7684\u65ad\u8a00\u4e4b\u5916\uff0cLaravel \u4e5f\u5305\u542b\u68c0\u67e5\u54cd\u5e94\u6807\u5934\u3001\u5185\u5bb9\u3001JSON \u7ed3\u6784\u7b49\u5404\u79cd\u65ad\u8a00\u3002"),(0,l.kt)("h2",{id:"session--\u8ba4\u8bc1"},"Session / \u8ba4\u8bc1"),(0,l.kt)("p",null,"Laravel \u63d0\u4f9b\u4e86\u51e0\u4e2a\u53ef\u5728\u6d4b\u8bd5\u65f6\u4f7f\u7528 Session \u7684\u8f85\u52a9\u51fd\u6570\u3002\u9996\u5148\uff0c\u4f60\u9700\u8981\u4f20\u9012\u4e00\u4e2a\u6570\u7ec4\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"withSession")," \u65b9\u6cd5\u6765\u8bbe\u7f6e Seesion \u6570\u636e\u3002\u8fd9\u8ba9\u4f60\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u6d4b\u8bd5\u8bf7\u6c42\u53d1\u9001\u4e4b\u524d\uff0c\u5148\u7ed9\u6570\u636e\u52a0\u8f7d Session \u53d8\u5f97\u7b80\u5355\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nclass ExampleTest extends TestCase\n{\n    public function testApplication()\n    {\n        $response = $this->withSession(['foo' => 'bar'])\n                         ->get('/');\n    }\n}\n")),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u4e00\u822c\u4f7f\u7528 Session \u65f6\u90fd\u662f\u7528\u4e8e\u7ef4\u6301\u7528\u6237\u7684\u72b6\u6001\uff0c\u5982\u8ba4\u8bc1\u7528\u6237\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"actingAs")," \u8f85\u52a9\u51fd\u6570\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u8ba9\u6307\u5b9a\u7684\u7528\u6237\u8ba4\u8bc1\u4e3a\u5f53\u524d\u7684\u7528\u6237\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/laravel/database-testing#writing-factories"},"\u6a21\u578b\u5de5\u5382")," \u6765\u751f\u6210\u5e76\u8ba4\u8bc1\u7528\u6237\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nuse App\\User;\n\nclass ExampleTest extends TestCase\n{\n    public function testApplication()\n    {\n        $user = factory(User::class)->create();\n\n        $response = $this->actingAs($user)\n                         ->withSession(['foo' => 'bar'])\n                         ->get('/');\n    }\n}\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 guard \u540d\u79f0\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"actingAs")," \u7684\u7b2c\u4e8c\u53c2\u6570\u4ee5\u6307\u5b9a\u7528\u6237\u901a\u8fc7\u54ea\u79cd guard \u6765\u8ba4\u8bc1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$this->actingAs($user, 'api')\n")),(0,l.kt)("h2",{id:"testing-json-apis"},"Testing JSON APIs"),(0,l.kt)("p",null,"Laravel \u4e5f\u63d0\u4f9b\u4e86\u51e0\u4e2a\u8f85\u52a9\u51fd\u6570\u6765\u6d4b\u8bd5 JSON APIs \u53ca\u5176\u54cd\u5e94\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"get"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"post"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"put"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"patch")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," \u65b9\u6cd5\u53ef\u4ee5\u7528\u4e8e\u53d1\u51fa\u5404\u79cd HTTP \u52a8\u4f5c\u7684\u8bf7\u6c42\u3002\u4f60\u4e5f\u53ef\u4ee5\u8f7b\u677e\u7684\u4f20\u5165\u6570\u636e\u6216\u6807\u5934\u5230\u8fd9\u4e9b\u65b9\u6cd5\u4e0a\u3002\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u6d4b\u8bd5\uff0c\u5c06\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u53d1\u9001\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/user")," \uff0c\u5e76\u65ad\u8a00\u5176\u4f1a\u8fd4\u56de\u9884\u671f\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * \u4e00\u4e2a\u57fa\u7840\u7684\u529f\u80fd\u6d4b\u8bd5\u7528\u4f8b\u3002\n     *\n     * @return void\n     */\n    public function testBasicExample()\n    {\n        $response = $this->json('POST', '/user', ['name' => 'Sally']);\n\n        $response\n            ->assertStatus(200)\n            ->assertJson([\n                'created' => true,\n            ]);\n    }\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{tip} ",(0,l.kt)("inlineCode",{parentName:"p"},"assertJson")," \u65b9\u6cd5\u4f1a\u5c06\u54cd\u5e94\u8f6c\u6362\u4e3a\u6570\u7ec4\u5e76\u4e14\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"PHPUnit::assertArraySubset")," \u65b9\u6cd5\u6765\u9a8c\u8bc1\u4f20\u5165\u7684\u6570\u7ec4\u662f\u5426\u5728\u5e94\u7528\u8fd4\u56de\u7684 JSON \u4e2d\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5373\u4f7f\u6709\u5176\u5b83\u7684\u5c5e\u6027\u5b58\u5728\u4e8e\u8be5 JSON \u54cd\u5e94\u4e2d\uff0c\u4f46\u662f\u53ea\u8981\u6307\u5b9a\u7684\u7247\u6bb5\u5b58\u5728\uff0c\u6b64\u6d4b\u8bd5\u4ecd\u7136\u4f1a\u901a\u8fc7\u3002")),(0,l.kt)("h3",{id:"\u9a8c\u8bc1\u5b8c\u5168\u5339\u914d"},"\u9a8c\u8bc1\u5b8c\u5168\u5339\u914d"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u9a8c\u8bc1\u4f20\u5165\u7684\u6570\u7ec4\u662f\u5426\u4e0e\u5e94\u7528\u8fd4\u56de\u7684 JSON ",(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u5168")," \u5339\u914d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"assertExactJson")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * \u4e00\u4e2a\u57fa\u7840\u7684\u529f\u80fd\u6d4b\u8bd5\u7528\u4f8b\u3002\n     *\n     * @return void\n     */\n    public function testBasicExample()\n    {\n        $response = $this->json('POST', '/user', ['name' => 'Sally']);\n\n        $response\n            ->assertStatus(200)\n            ->assertExactJson([\n                'created' => true,\n            ]);\n    }\n}\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u6587\u4ef6\u4e0a\u4f20"},"\u6d4b\u8bd5\u6587\u4ef6\u4e0a\u4f20"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Illuminate\\Http\\UploadedFile")," \u7c7b\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"fake")," \u65b9\u6cd5\uff0c\u53ef\u7528\u5176\u751f\u6210\u7528\u4e8e\u6d4b\u8bd5\u7684\u6a21\u62df\u6587\u4ef6\u6216\u56fe\u50cf\u3002\u5c06\u5176\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Storage")," facade \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"fake")," \u65b9\u6cd5\u7ed3\u5408\u4f7f\u7528\uff0c\u53ef\u6781\u5927\u5730\u7b80\u5316\u6587\u4ef6\u4e0a\u4f20\u7684\u6d4b\u8bd5\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u7ed3\u5408\u8fd9\u4e24\u4e2a\u529f\u80fd\u8f7b\u677e\u6d4b\u8bd5\u5934\u50cf\u4e0a\u4f20\u8868\u5355\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<?php\n\nnamespace Tests\\Feature;\n\nuse Tests\\TestCase;\nuse Illuminate\\Http\\UploadedFile;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Illuminate\\Foundation\\Testing\\WithoutMiddleware;\nuse Illuminate\\Foundation\\Testing\\DatabaseMigrations;\nuse Illuminate\\Foundation\\Testing\\DatabaseTransactions;\n\nclass ExampleTest extends TestCase\n{\n    public function testAvatarUpload()\n    {\n        Storage::fake('avatars');\n\n        $response = $this->json('POST', '/avatar', [\n            'avatar' => UploadedFile::fake()->image('avatar.jpg')\n        ]);\n\n        // \u65ad\u8a00\u6587\u4ef6\u5df2\u5b58\u50a8...\n        Storage::disk('avatars')->assertExists('avatar.jpg');\n\n        // \u65ad\u8a00\u6587\u4ef6\u4e0d\u5b58\u5728...\n        Storage::disk('avatars')->assertMissing('missing.jpg');\n    }\n}\n")),(0,l.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u6a21\u62df\u6587\u4ef6"},"\u81ea\u5b9a\u4e49\u6a21\u62df\u6587\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"fake")," \u65b9\u6cd5\u521b\u5efa\u6587\u4ef6\u65f6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u56fe\u7247\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u5927\u5c0f\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u6d4b\u8bd5\u4f60\u7684\u9a8c\u8bc1\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"UploadedFile::fake()->image('avatar.jpg', $width, $height)->size(100);\n")),(0,l.kt)("p",null,"\u9664\u4e86\u521b\u5efa\u56fe\u7247\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," \u65b9\u6cd5\u521b\u5efa\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"UploadedFile::fake()->create('document.pdf', $sizeInKilobytes);\n")),(0,l.kt)("h2",{id:"\u53ef\u7528\u7684\u65ad\u8a00\u65b9\u6cd5"},"\u53ef\u7528\u7684\u65ad\u8a00\u65b9\u6cd5"),(0,l.kt)("p",null,"Laravel \u4e3a\u4f60\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://phpunit.de/"},"PHPUnit")," \u6d4b\u8bd5\u63d0\u4f9b\u4e86\u5404\u79cd\u5404\u6837\u7684\u81ea\u5b9a\u4e49\u65ad\u8a00\u65b9\u6cd5\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"get"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"post"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"put")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," \u8fd9\u4e9b\u6d4b\u8bd5\u65b9\u6cd5\u8fd4\u56de\u7684\u54cd\u5e94\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u65ad\u8a00\u65b9\u6cd5\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertSuccessful();")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5177\u6709\u6210\u529f\u7684\u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertStatus($code);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5177\u6709\u6307\u5b9a\u7684\u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertRedirect($uri);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u88ab\u91cd\u5b9a\u5411\u81f3\u6307\u5b9a\u7684 URI\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertHeader($headerName, $value = null);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5b58\u5728\u6307\u5b9a\u7684\u6807\u5934\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertCookie($cookieName, $value = null);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5305\u542b\u4e86\u6307\u5b9a\u7684 Cookie\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertPlainCookie($cookieName, $value = null);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5305\u542b\u4e86\u6307\u5b9a\u7684 Cookie\uff08\u672a\u52a0\u5bc6\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertSessionHas($key, $value = null);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5 Session \u5305\u542b\u6307\u5b9a\u7684\u6570\u636e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertSessionHasErrors(array $keys, $errorBag = 'default');")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5 Session \u5305\u542b\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u9519\u8bef\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertSessionMissing($key);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5 Session \u4e0d\u5305\u542b\u6307\u5b9a\u7684\u952e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertJson(array $data);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5305\u542b\u6307\u5b9a\u7684 JSON \u6570\u636e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertJsonFragment(array $data);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5305\u542b\u6307\u5b9a\u7684 JSON \u7247\u6bb5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertJsonMissing(array $data);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u4e0d\u5305\u542b\u6307\u5b9a\u7684 JSON \u7247\u6bb5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertExactJson(array $data);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5305\u542b\u5b8c\u5168\u5339\u914d\u6307\u5b9a\u7684 JSON \u6570\u636e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertJsonStructure(array $structure);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u54cd\u5e94\u5b58\u5728\u6307\u5b9a\u7684 JSON \u7ed3\u6784\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertViewIs($value);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u89c6\u56fe\u54cd\u5e94\u7684\u89c6\u56fe\u540d\u79f0\u4e3a\u6307\u5b9a\u7684\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$response->assertViewHas($key, $value = null);")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65ad\u8a00\u8be5\u89c6\u56fe\u54cd\u5e94\u5b58\u5728\u6307\u5b9a\u7684\u6570\u636e\u3002")))),(0,l.kt)("h2",{id:"\u8bd1\u8005\u7f72\u540d"},"\u8bd1\u8005\u7f72\u540d"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5934\u50cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u804c\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b7e\u540d"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://laravel-china.org/users/4550"},"@springjk")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{class:"avatar-66 rm-style",src:"https://dn-phphub.qbox.me/uploads/avatars/4550_1464580958.png?imageView2/1/w/100/h/100"})),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ffb\u8bd1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u518d\u600e\u4e48\u8bf4\u6211\u4e5f\u662f\u6211\u897f\u5317\u4e00\u5339\u72fc")))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"{note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org"},"laravel-china.org")," \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation"},"\u7ffb\u8bd1\u53ec\u96c6\u5e16"),"\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://d.laravel-china.org"},"https://d.laravel-china.org"))))}m.isMDXComponent=!0}}]);