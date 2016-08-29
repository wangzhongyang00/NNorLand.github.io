---
title: jQuery插入元素动态绑定事件
date: 2016-08-29 11:53:00
p: FrontEnd
tags: JavaScript
---
> 开发中遇到了一个问题,jQuery事件绑定的时候,只对DOM中存在的元素生效,不能像css选择器那样,不论是插入的元素还是已经加载好的元素,都能生效.  
查阅资料,发现,原来是很简单的问题,jQuery的`on()`方法本身就是动态绑定.只不过是参数设置的问题.

jQuery on()方法描述如下
```
.on( events [, selector ] [, data ], handler(eventObject) )
```

当事件冒泡到document对象时，检测事件的target，如果与传入的选择符（这里是button）匹配，就触发事件，否则不触发。

jquery中绑定事件一般使用bind，或者click，但是这只能是对已经加载好的元素定义事件，那些后来添加插入的元素则需要另行绑定。在1.7版本以前使用live。但是在1.8版本以后推荐使用on。这里介绍jQuery中如何给动态添加的元素绑定事件
在实际开发中会遇到要给动态生成的html元素绑定触发事件的情况
```html
<div id="testdiv">
  <ul></ul>
</div>

```
需要给`<ul>`里面动态添加的`<li>`标签添加click事件  
```JavaScript
$("#testdiv ul").on("click","li", function() {
     //do something here
 });
```
**一个简单的事件绑定如 `$('button').on('click',function(){});` 与`bind()`无二样。**