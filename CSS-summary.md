# CSS学习总结

## CSS简介

CSS是cascading style sheets即级联样式表的缩写，样式定义如何显示HTML元素，通常放在样式表中，外部样式表通常存储在.css文件中。
一条CSS样式规则由两个主要的部分构成：选择器，以{}包裹的一条或多条声明:
![CSS样式规则](https://www.runoob.com/wp-content/uploads/2013/07/632877C9-2462-41D6-BD0E-F7317E4C42AC.jpg)

## 选择器

一个页面上的元素众多，选择器就用于在页面中找到/选择需要应用这个样式的对象。
除我们前示的元素选择器外，还有id和class选择器。其中class选择器使用非常普遍。

* Id选择器

  id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。
  HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。
  以下的样式规则应用于元素属性 id="para1":

  ```css 
  #para1
  {
      text-align:center;
      color:red;
  }
  ```

* class 选择器
  class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。
  class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示：
  在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。

  ```css
  .center {text-align:center;}
  ```

  你也可以指定特定的HTML元素使用class。
  在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中: 

  ```css
  p.center {text-align:center;}
  ```

## 样式表的使用

在读到一个样式表时，浏览器会根据它来格式化HTML文档。使用样式表有三种方式

1. 外部样式表
   外部样式表写在.css文件中，多个HTML可以使用同一个外部样式表，当多个页面需要使用同一个样式时，外部样式表将是你最好的选择，在后期维护时，也只需要修改一个.css文件的内容即可更改多个页面的外观。
2. 内部样式表
   内部样式表写在HTML文档内，一般使用<style>标签在文档头部定义内部样式表，在某个页面需要特殊的样式时常常使用内部样式表
3. 内联样式表
   当样式仅需要在某一元素内使用一次时使用内联样式表，在需要使用内联样式表内修改style属性。Style属性可以包含任何CSS属性。
   有时候，会使用多个样式表，这时候会根据优先级来使样式表生效：
   内联样式表>内部样式表>外部样式表>浏览器默认样式表。

## CSS作用小结

CSS级联样式表可以为HTML文档添加背景、格式化文本、以及格式化边框，并定义元素的填充和边距。使用CSS还可以定位元素、控制元素的可见性和尺寸、设置元素的形状、将一个元素置于另一个之后，以及向某些选择器添加特殊的效果。具体的实现方法这里不做赘述，如有兴趣可以到[菜鸟教程](https://www.runoob.com/css/css-tutorial.html)学习。  
为之前HTML学习总结中的调差问卷添加简单的内联样式：
```<html>
<html>
    <head>
        <meta charset="utf-8">
        <title>关于人类对噬元兽的态度的调查问卷</title>
    </head>
    <body style="background: url(./images/cat.jpg) no-repeat;
    background-size: 100%;">
        <form action="#" style="width: 50%; margin:50px auto;padding: 20px;
        background-color: white;opacity: 0.7;">
        <h1>关于人类对猫的态度的调查问卷</h1>
            1.你的性别是：<input type="radio" name="sex" value="male" >男
            <input type="radio" name="sex" value="female">女<br>
            2.你喜欢猫吗：<input type="radio" name="like" value="yes">喜欢
            <input type="radio" name="like" value="no">不喜欢<br>
            3.你有在养猫吗：<input type="radio" name="pet" value="yes">是
            <input type="radio" name="pet" value="no">否<br>
            4.你愿意养猫吗：<input type="radio" name="will" value="yes">愿意
            <input type="radio" name="will" value="no">不愿意<br>
            5.你养得起猫吗：<input type="radio" name="money" value="yes">养得起
            <input type="radio" name="money" value="no">养不起<br>
            6.为什么喜欢猫：<input type="checkbox" name="why" value="cute">可爱
            <input type="checkbox" name="why" value="cold">高冷
            <input type="checkbox" name="why" value="clear">干净
            <input type="checkbox" name="why" value="human">粘人<br>
            <input type="submit" value="提交" style="border: 0px;
            background: rgb(10, 169, 243);">
        </form>
    </body>
</html>
```
[点击查看效果](https://ikaros-9527.github.io/exam.html)

