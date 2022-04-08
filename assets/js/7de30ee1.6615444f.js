"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1499],{3905:function(e,o,l){l.d(o,{Zo:function(){return d},kt:function(){return p}});var n=l(7294);function t(e,o,l){return o in e?Object.defineProperty(e,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[o]=l,e}function c(e,o){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var o=1;o<arguments.length;o++){var l=null!=arguments[o]?arguments[o]:{};o%2?c(Object(l),!0).forEach((function(o){t(e,o,l[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(l,o))}))}return e}function r(e,o){if(null==e)return{};var l,n,t=function(e,o){if(null==e)return{};var l,n,t={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],o.indexOf(l)>=0||(t[l]=e[l]);return t}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],o.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var s=n.createContext({}),i=function(e){var o=n.useContext(s),l=o;return e&&(l="function"==typeof e?e(o):a(a({},o),e)),l},d=function(e){var o=i(e.components);return n.createElement(s.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var l=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=i(l),p=t,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||c;return l?n.createElement(h,a(a({ref:o},d),{},{components:l})):n.createElement(h,a({ref:o},d))}));function p(e,o){var l=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var c=l.length,a=new Array(c);a[0]=u;var r={};for(var s in o)hasOwnProperty.call(o,s)&&(r[s]=o[s]);r.originalType=e,r.mdxType="string"==typeof e?e:t,a[1]=r;for(var i=2;i<c;i++)a[i]=l[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},2997:function(e,o,l){l.r(o),l.d(o,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return m}});var n=l(7462),t=l(3366),c=(l(7294),l(3905)),a=["components"],r={},s=void 0,i={unversionedId:"laravel/eloquent-collections",id:"laravel/eloquent-collections",title:"eloquent-collections",description:"\u7b80\u4ecb",source:"@site/docs/laravel/eloquent-collections.md",sourceDirName:"laravel",slug:"/laravel/eloquent-collections",permalink:"/docs/laravel/eloquent-collections",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dusk",permalink:"/docs/laravel/dusk"},next:{title:"eloquent-mutators",permalink:"/docs/laravel/eloquent-mutators"}},d={},m=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u53ef\u7528\u7684\u65b9\u6cd5",id:"\u53ef\u7528\u7684\u65b9\u6cd5",level:2},{value:"\u96c6\u5408\u57fa\u7c7b",id:"\u96c6\u5408\u57fa\u7c7b",level:3}],u={toc:m};function p(e){var o=e.components,l=(0,t.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},u,l,{components:o,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"eloquent\u96c6\u5408"},"Eloquent\uff1a\u96c6\u5408"),(0,c.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,c.kt)("p",null,"Eloquent \u8fd4\u56de\u7684\u6240\u6709\u591a\u7ed3\u679c\u96c6\u90fd\u662f ",(0,c.kt)("inlineCode",{parentName:"p"},"Illuminate\\Database\\Eloquent\\Collection")," \u5bf9\u8c61\u7684\u5b9e\u4f8b\uff0c"),(0,c.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b Eloquent \u8fd4\u56de\u7684\u90fd\u662f\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"p"},"Illuminate\\Database\\Eloquent\\Collection")," \u5bf9\u8c61\u7684\u5b9e\u4f8b\uff0c\u5305\u62ec\u901a\u8fc7 ",(0,c.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\u68c0\u7d22\u6216\u901a\u8fc7\u8bbf\u95ee\u5173\u8054\u5173\u7cfb\u83b7\u53d6\u5230\u7684\u7ed3\u679c\u3002Eloquent \u7684\u96c6\u5408\u5bf9\u8c61\u7ee7\u627f\u4e86 Laravel \u7684 ",(0,c.kt)("a",{parentName:"p",href:"/docs/laravel/collections"},"\u96c6\u5408\u57fa\u7c7b"),"\uff0c\u56e0\u6b64\u5b83\u81ea\u7136\u4e5f\u7ee7\u627f\u4e86\u6570\u5341\u79cd\u80fd\u4f18\u96c5\u5730\u5904\u7406 Eloquent \u6a21\u578b\u5e95\u5c42\u6570\u7ec4\u7684\u65b9\u6cd5\u3002"),(0,c.kt)("p",null,"\u5f53\u7136\uff0c\u6240\u6709\u7684\u96c6\u5408\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u8fed\u4ee3\u5668\uff0c\u53ef\u4ee5\u5c31\u50cf\u7b80\u5355\u7684 PHP \u6570\u7ec4\u4e00\u6837\u6765\u904d\u5386\u5b83\u4eec\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$users = App\\User::where('active', 1)->get();\n\nforeach ($users as $user) {\n    echo $user->name;\n}\n")),(0,c.kt)("p",null,"\u7136\u800c\uff0c\u96c6\u5408\u6bd4\u6570\u7ec4\u66f4\u52a0\u5f3a\u5927\uff0c\u5b83\u901a\u8fc7\u66f4\u76f4\u89c2\u7684\u63a5\u53e3\u66b4\u9732\u51fa\u53ef\u94fe\u5f0f\u8c03\u7528\u7684 map/reduce \u7b49\u64cd\u4f5c\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u8981\u5220\u9664\u6a21\u578b\u4e2d\u6240\u6709\u672a\u6fc0\u6d3b\u7684\u5e76\u6536\u96c6\u5269\u4f59\u7528\u6237\u7684\u540d\u5b57\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"$users = App\\User::where('active', 1)->get();\n\n$names = $users->reject(function ($user) {\n    return $user->active === false;\n})\n->map(function ($user) {\n    return $user->name;\n});\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"{note} \u5927\u591a\u6570 Eloquent \u96c6\u5408\u65b9\u6cd5\u4f1a\u8fd4\u56de\u65b0\u7684 Eloquent \u96c6\u5408\u5b9e\u4f8b\uff0c\u4f46\u662f ",(0,c.kt)("inlineCode",{parentName:"p"},"pluck"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"keys"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"zip"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"collapse"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"flatten")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"flip")," \u65b9\u6cd5\u9664\u5916\uff0c\u5b83\u4eec\u4f1a\u8fd4\u56de ",(0,c.kt)("a",{parentName:"p",href:"/docs/laravel/collections"},"\u96c6\u5408\u57fa\u7c7b")," \u5b9e\u4f8b\u3002\u540c\u6837\uff0c\u5982\u679c ",(0,c.kt)("inlineCode",{parentName:"p"},"map")," \u64cd\u4f5c\u8fd4\u56de\u7684\u96c6\u5408\u4e0d\u5305\u542b\u4efb\u4f55 Eloquent \u6a21\u578b\uff0c\u90a3\u4e48\u5b83\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u6210\u96c6\u5408\u57fa\u7c7b\u3002")),(0,c.kt)("h2",{id:"\u53ef\u7528\u7684\u65b9\u6cd5"},"\u53ef\u7528\u7684\u65b9\u6cd5"),(0,c.kt)("h3",{id:"\u96c6\u5408\u57fa\u7c7b"},"\u96c6\u5408\u57fa\u7c7b"),(0,c.kt)("p",null,"\u6240\u6709 Eloquent \u96c6\u5408\u90fd\u7ee7\u627f\u4e86\u57fa\u7840\u7684 ",(0,c.kt)("a",{parentName:"p",href:"/docs/laravel/collections"},"Laravel \u96c6\u5408")," \u5bf9\u8c61\u3002\u56e0\u6b64\uff0c\u5b83\u4eec\u4e5f\u7ee7\u627f\u4e86\u6240\u6709\u96c6\u5408\u57fa\u7c7b\u63d0\u4f9b\u7684\u5f3a\u5927\u7684\u65b9\u6cd5\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-css"},'<style>\n    #collection-method-list > p {\n        column-count: 3; -moz-column-count: 3; -webkit-column-count: 3;\n        column-gap: 2em; -moz-column-gap: 2em; -webkit-column-gap: 2em;\n    }\n\n    #collection-method-list a {\n        display: block;\n    }\n</style>\n```css\n\n<div id="collection-method-list" markdown="1">\n\n[all](/docs/laravel/collections#method-all)\n[average](/docs/laravel/collections#method-average)\n[avg](/docs/laravel/collections#method-avg)\n[chunk](/docs/laravel/collections#method-chunk)\n[collapse](/docs/laravel/collections#method-collapse)\n[combine](/docs/laravel/collections#method-combine)\n[contains](/docs/laravel/collections#method-contains)\n[containsStrict](/docs/laravel/collections#method-containsstrict)\n[count](/docs/laravel/collections#method-count)\n[diff](/docs/laravel/collections#method-diff)\n[diffKeys](/docs/laravel/collections#method-diffkeys)\n[each](/docs/laravel/collections#method-each)\n[every](/docs/laravel/collections#method-every)\n[except](/docs/laravel/collections#method-except)\n[filter](/docs/laravel/collections#method-filter)\n[first](/docs/laravel/collections#method-first)\n[flatMap](/docs/laravel/collections#method-flatmap)\n[flatten](/docs/laravel/collections#method-flatten)\n[flip](/docs/laravel/collections#method-flip)\n[forget](/docs/laravel/collections#method-forget)\n[forPage](/docs/laravel/collections#method-forpage)\n[get](/docs/laravel/collections#method-get)\n[groupBy](/docs/laravel/collections#method-groupby)\n[has](/docs/laravel/collections#method-has)\n[implode](/docs/laravel/collections#method-implode)\n[intersect](/docs/laravel/collections#method-intersect)\n[isEmpty](/docs/laravel/collections#method-isempty)\n[isNotEmpty](/docs/laravel/collections#method-isnotempty)\n[keyBy](/docs/laravel/collections#method-keyby)\n[keys](/docs/laravel/collections#method-keys)\n[last](/docs/laravel/collections#method-last)\n[map](/docs/laravel/collections#method-map)\n[mapWithKeys](/docs/laravel/collections#method-mapwithkeys)\n[max](/docs/laravel/collections#method-max)\n[median](/docs/laravel/collections#method-median)\n[merge](/docs/laravel/collections#method-merge)\n[min](/docs/laravel/collections#method-min)\n[mode](/docs/laravel/collections#method-mode)\n[nth](/docs/laravel/collections#method-nth)\n[only](/docs/laravel/collections#method-only)\n[partition](/docs/laravel/collections#method-partition)\n[pipe](/docs/laravel/collections#method-pipe)\n[pluck](/docs/laravel/collections#method-pluck)\n[pop](/docs/laravel/collections#method-pop)\n[prepend](/docs/laravel/collections#method-prepend)\n[pull](/docs/laravel/collections#method-pull)\n[push](/docs/laravel/collections#method-push)\n[put](/docs/laravel/collections#method-put)\n[random](/docs/laravel/collections#method-random)\n[reduce](/docs/laravel/collections#method-reduce)\n[reject](/docs/laravel/collections#method-reject)\n[reverse](/docs/laravel/collections#method-reverse)\n[search](/docs/laravel/collections#method-search)\n[shift](/docs/laravel/collections#method-shift)\n[shuffle](/docs/laravel/collections#method-shuffle)\n[slice](/docs/laravel/collections#method-slice)\n[sort](/docs/laravel/collections#method-sort)\n[sortBy](/docs/laravel/collections#method-sortby)\n[sortByDesc](/docs/laravel/collections#method-sortbydesc)\n[splice](/docs/laravel/collections#method-splice)\n[split](/docs/laravel/collections#method-split)\n[sum](/docs/laravel/collections#method-sum)\n[take](/docs/laravel/collections#method-take)\n[tap](/docs/laravel/collections#method-tap)\n[toArray](/docs/laravel/collections#method-toarray)\n[toJson](/docs/laravel/collections#method-tojson)\n[transform](/docs/laravel/collections#method-transform)\n[union](/docs/laravel/collections#method-union)\n[unique](/docs/laravel/collections#method-unique)\n[uniqueStrict](/docs/laravel/collections#method-uniquestrict)\n[values](/docs/laravel/collections#method-values)\n[when](/docs/laravel/collections#method-when)\n[where](/docs/laravel/collections#method-where)\n[whereStrict](/docs/laravel/collections#method-wherestrict)\n[whereIn](/docs/laravel/collections#method-wherein)\n[whereInStrict](/docs/laravel/collections#method-whereinstrict)\n[whereNotIn](/docs/laravel/collections#method-wherenotin)\n[whereNotInStrict](/docs/laravel/collections#method-wherenotinstrict)\n[zip](/docs/laravel/collections#method-zip)\n\n</div>\n\n\n## \u81ea\u5b9a\u4e49\u96c6\u5408\n\n\n\u5982\u679c\u4f60\u9700\u8981\u5728\u81ea\u5df1\u7684\u6269\u5c55\u65b9\u6cd5\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 `Collection` \u5bf9\u8c61\uff0c\u53ef\u4ee5\u5728\u4f60\u81ea\u5df1\u7684\u6a21\u578b\u4e2d\u91cd\u5199 `newCollection` \u65b9\u6cd5\uff1a\n\n    <?php\n\n    namespace App;\n\n    use App\\CustomCollection;\n    use Illuminate\\Database\\Eloquent\\Model;\n\n    class User extends Model\n    {\n        /**\n         * \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Eloquent \u96c6\u5408\u5b9e\u4f8b\u5bf9\u8c61\u3002\n         *\n         * @param  array  $models\n         * @return \\Illuminate\\Database\\Eloquent\\Collection\n         */\n        public function newCollection(array $models = [])\n        {\n            return new CustomCollection($models);\n        }\n    }\n\n\u4e00\u65e6\u4f60\u5b9a\u4e49\u4e86 `newCollection` \u65b9\u6cd5\uff0c\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u5728 Eloquent \u8fd4\u56de\u7684\u6a21\u578b\u7684 `Collection` \u5b9e\u4f8b\u4e2d\u83b7\u53d6\u4f60\u7684\u81ea\u5b9a\u4e49\u96c6\u5408\u5b9e\u4f8b\u3002\u5982\u679c\u4f60\u60f3\u8981\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u6bcf\u4e2a\u6a21\u578b\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u96c6\u5408\uff0c\u5219\u5e94\u8be5\u5728\u6240\u6709\u7684\u6a21\u578b\u7ee7\u627f\u7684\u6a21\u578b\u57fa\u7c7b\u4e2d\u91cd\u5199 `newCollection` \u65b9\u6cd5\u3002\n\n## \u8bd1\u8005\u7f72\u540d\n\n| \u7528\u6237\u540d | \u5934\u50cf | \u804c\u80fd | \u7b7e\u540d |\n| --- | --- | --- | --- |\n| [@springjk](https://laravel-china.org/users/4550) | <img class="avatar-66 rm-style" src="https://dn-phphub.qbox.me/uploads/avatars/4550_1464580958.png?imageView2/1/w/100/h/100" /> | \u7ffb\u8bd1 | \u518d\u600e\u4e48\u8bf4\u6211\u4e5f\u662f\u6211\u897f\u5317\u4e00\u5339\u72fc |\n\n\n--- \n\n> {note} \u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8f6c\u8f7d\uff0c\u4f46\u8bf7\u52a1\u5fc5\u6ce8\u660e\u51fa\u5904\uff0c\u5c0a\u91cd\u4ed6\u4eba\u52b3\u52a8\u5171\u521b\u5f00\u6e90\u793e\u533a\u3002\n> \n> \u8f6c\u8f7d\u8bf7\u6ce8\u660e\uff1a\u672c\u6587\u6863\u7531 Laravel China \u793e\u533a [laravel-china.org](https://laravel-china.org) \u7ec4\u7ec7\u7ffb\u8bd1\uff0c\u8be6\u89c1 [\u7ffb\u8bd1\u53ec\u96c6\u5e16](https://laravel-china.org/topics/5756/laravel-55-document-translation-call-come-and-join-the-translation)\u3002\n> \n> \u6587\u6863\u6c38\u4e45\u5730\u5740\uff1a https://d.laravel-china.org\n')))}p.isMDXComponent=!0}}]);