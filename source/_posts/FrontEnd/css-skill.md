---
title: CSS小技巧整理
date: 2016-08-18 15:36:09
p: FrontEnd
tags: CSS
---
# CSS小技巧整理
<!-- more -->
1. 某一元素高度等于宽度
示例:
```html
<style type="text/css">
#container {
    width: 80%;
    height: 500px;
}
.attr {
    width: 50%;
    height: 0;
    padding-bottom: 50%;
    background-color: #008b57;
}
</style>
<div id='container'>
    <div class='attr'></div>
</div>
```
来源: [css中如何规定某一元素高度等于其宽度](https://segmentfault.com/q/1010000002629233 'blank')

2. 移动端解决fixed和input获取焦点软键盘弹出影响定位的问题
添加css
```CSS
.fixfixed.navbar-fixed-top {
    position: absolute;
}
```
添加JS
```javascript
$(function () {
    if (Modernizr.touch) {
        $(document).on('focus', 'input', function () {
            $(".navbar-fixed-top").addClass('fixfixed');
        });

        $(document).on('blur', 'input', function () {
            $(".navbar-fixed-top").removeClass('fixfixed');
        });
    }
});
```
参考:[修复position:fixed在ios虚拟键盘弹出时错位的bug](http://www.w3cfuns.com/notes/17861/1e2c8ed08d6216686b1fbae0213ca145.html)
> 仅作参考,不限于bootstrap
