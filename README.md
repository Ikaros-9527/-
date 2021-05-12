# HTML学习总结

## HTML基本结构

HTML是hyper text markup language即超文本标记语言的缩写，是一种标记语言而不是编程语言！HTML文件的后缀为.html或.htm均可，推荐使用vs code编写，大多数HTML文档都具有以下的基本结构：文档主体部分被一个`<html>`标签包围，在`<head>`签中写明页面的标题和页面相关的信息，一般在页面中不可见，在`<body>`标签中编写网页可见的内容。

~~~<html>
<html>
	<head>
		<meta charset="utf-8">
		<tittle>页面标题</tittle>
	</head>
	<body>
		<h1>一级标题</h1>
		<p>这是一个段落</p>
	</body>
</html>
~~~

HTML标签也叫HTML元素，通常成对出现，前一半叫开始标签，后一半叫结束标签，中间是这一个元素的内容，还有一些元素不包含内容，成为空元素，它们的开始标签就是结束标签，比如`<br>`标签就是一个空元素。除了上述的标签外，常用的标签还有`<pre>,<a>,<img>,<div>,<form>,<table>,<ul>,<ol>`等。

## HTML属性

元素可以添加属性来描述一个元素，元素的属性通常是以name="value"的形式出现，比如添加一个百度的超链接：  

```html
<a href="https://www.baidu.com/">百度一下</a>
```

上面href是标签`<a>`的一个属性，属性的值value是`https://www.baidu.com/`这个链接地址，超链接的地址也可以等于一个元素的id属性的值，可以实现在同一个页面中的跳转：

```<html>
<h1 id="top">这是一个定位锚点</h1>
……其他内容……
<a href="#top">点击可以跳转到锚点位置</a>
```

## HTML元素的嵌套

HTML元素可以进行嵌套操作，`<html>`标签便是`<head>`标签和`<body>`标签的父元素，在超链接`<a>`中嵌套一个图片`<img>`即可实现将图片设置为超链接。

大多数HTML元素都被定义为块级元素或内联元素，块级元素在页面中显示时，通常会以新行来开始，而内联元素则不会，合理利用块级元素与内联元素的区别和元素之间的嵌套可以对页面布局进行简单的调整，选用适当的元素在网页中显示你想要展示的东西，例如你想要展示一个调查问卷：

```<html>
<html>
    <head>
        <meta charset="utf-8">
        <title>关于人类对噬元兽的态度的调查问卷</title>
    </head>
    <body>
        <h1>关于人类对猫的态度的调查问卷</h1>
        <form action="#">
            1.你的性别是：<input type="radio" name="sex" value="male">男
            <input type="radio" name="sex" value="female">女<br>
            2.你喜欢猫吗：<input type="radio" name="like" value="sure">非常喜欢
            <input type="radio" name="like" value="yes">喜欢
            <input type="radio" name="like" value="no">不喜欢
            <input type="radio" name="like" value="yet">讨厌<br>
            3.你有在养猫吗：<input type="radio" name="pet" value="yes">是
            <input type="radio" name="pet" value="no">否<br>
            4.你愿意养猫吗：<input type="radio" name="will" value="yes">愿意
            <input type="radio" name="will" value="sure">当然愿意<br>
            5.你养得起猫吗：<input type="radio" name="money" value="yes">养得起
            <input type="radio" name="money" value="no">养不起
            <input type="radio" name="money" value="sure">我愿意为了养猫饿死<br>
            6.为什么喜欢猫：<input type="checkbox" name="why" value="cute">可爱
            <input type="checkbox" name="why" value="cold">高冷
            <input type="checkbox" name="why" value="clear">干净
            <input type="checkbox" name="why" value="human">粘人
            <input type="checkbox" name="why" value="no why">总之就是很喜欢<br>
            <input type="submit" value="提交">
        </form>
    </body>
</html>
```

上面的调查问卷页面很单调，如果你对页面的展示效果不满意，想要对页面进行更多的渲染，那么你需要在HTML的基础上进行CSS的学习。
