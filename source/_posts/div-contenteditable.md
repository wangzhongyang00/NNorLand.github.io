---
title: div实现高度撑开的输入框
date: 2016-08-01 09:23:22
tags: [CSS,html]
---
使用input或textare时,输入框大小固定,因此采用div,在div上增加`contenteditable="true"`属性.这样的话,没有placeholder属性,通过css样式`:empty:before`,增加content解决.

<!-- more -->

下面是一个示例
```html
<div class="test_box" contenteditable="true" onpaste="return false" data-placeholder="聊聊这组照片" id="test_box" onKeyUp="showLen(this);"></div>
<div style="text-align: right;padding-right: 0.8em">
    <span id="str_length" class="str_length">0</span>
    <span>/200</span>
</div>
```
```stylus
.test_box {
    min-height: 100px;
    max-height: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0.8em;
    padding-bottom: 0;
    outline: 0;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
}
.test_box:empty:before {
    content: attr(data-placeholder);
    color:#d3d3d3;
}
.test_box:focus:before{
    content:none;
}
```
```javascript
<script>
    showLen(document.getElementById("test_box"));
    function showLen(obj) {
        var t = document.getElementById("test_box").innerText;
        var num = document.getElementById('str_length')
        if (t.length > 200) {
            num.innerHTML = obj.innerText.length;
            num.style.color= "red";
            return false;
        }
        else {
            num.innerHTML = obj.innerText.length;
            return true;
        }
    }
</script>
```

> *注意,在获取div的内容时,不能用value,用innerText
