---
sidebar_position: 1
---

# 安装

## 作者

[maplemei](https://gitee.com/maplemei), 热爱前端的Java程序猿。感谢作者制作的这款插件！^_^ xm-select文档如若侵权烦请告知！



## 简介

:::tip
始于 [layui](https://layui.com) 的一个多选解决方案。<br/>
前身 [formSelects](https://github.com/hnzzmsf/layui-formSelects/), 由于渲染速度慢, 代码冗余, 被放弃了<br/>
[xm-select](https://gitee.com/maplemei/xm-select)使用了新的开发方式, 利用preact进行渲染, 大幅度提高渲染速度, 并且可以灵活拓展
:::

- 唯一依赖库[preactjs](https://preactjs.com/)
- 打包方式[webpack](https://www.webpackjs.com/)
- 文档借鉴于[ElementUI](https://element.eleme.cn/#/zh-CN)的编写方式
- [Fly社区交流贴](https://fly.layui.com/jie/57776/)




## 下载

| star | fork | download |
| -	   | - 	  | - 		 |
| [![star](https://gitee.com/maplemei/xm-select/badge/star.svg?theme=dark)](https://gitee.com/maplemei/xm-select/stargazers) | [![fork](https://gitee.com/maplemei/xm-select/badge/fork.svg?theme=dark)](https://gitee.com/maplemei/xm-select/members) | [码云下载](https://gitee.com/maplemei/xm-select/releases) | 


## 二次开发

有兴趣的小伙伴可以从git上下载源码进行二次开发

```sh
$ git clone https://gitee.com/maplemei/xm-select.git
$ cd xm-select
$ npm install && npm run dev
```


## Hello World

一个简单的小栗子，看看如何使用xm-select.js

```js
第一步: 下载
第二步: 引入 xm-select.js
第三步: 写一个`<div id="demo1"></div>`
第四步: 渲染
	var demo1 = xmSelect.render({
		el: '#demo1',
		language: 'zn',
		data: [
			{name: '张三', value: 1},
			{name: '李四', value: 2},
			{name: '王五', value: 3},
		]
	})
```

只需引入`xm-select.js`
```html
<div id="demo1" class="xm-select-demo"></div>
<button class="btn" id="demo1-getValue">获取选中值</button>
<pre id="demo1-value"></pre>

<script>
var demo1 = xmSelect.render({
	el: '#demo1', 
	language: 'zn',
	data: [
		{name: '张三', value: 1},
		{name: '李四', value: 2},
		{name: '王五', value: 3},
	]
})

document.getElementById('demo1-getValue').onclick = function(){
	//获取当前多选选中的值
	var selectArr = demo1.getValue();
	document.getElementById('demo1-value').innerHTML = JSON.stringify(selectArr, null, 2);
}
</script>

```
