function displayPage0(){
    var a0 = document.getElementById("page0");
    var a1 = document.getElementById("page1");
    var a2 = document.getElementById("page2");
    var x = document.getElementsByClassName("page0");
    var y = document.getElementsByClassName("page1");
    var z = document.getElementsByClassName("page2");
    a0.setAttribute("class","current");
    a1.setAttribute("class","");
    a2.setAttribute("class","");
    x[0].setAttribute("style","display:''");
    y[0].setAttribute("style","display:none");
    z[0].setAttribute("style","display:none");
    // 无法直接访问.style来修改属性，.className()方法也无效
    // 最终只找到.setAttribute()方法达到预期
    // 只能修改内部样式表，外部样式表不能修改
}

function displayPage1(){
    var a0 = document.getElementById("page0");
    var a1 = document.getElementById("page1");
    var a2 = document.getElementById("page2");
    var x = document.getElementsByClassName("page0");
    var y = document.getElementsByClassName("page1");
    var z = document.getElementsByClassName("page2");
    a0.setAttribute("class","");
    a1.setAttribute("class","current");
    a2.setAttribute("class","");
    x[0].setAttribute("style","display:none");
    y[0].setAttribute("style","display:''");
    z[0].setAttribute("style","display:none");
    //无法直接访问.style来修改属性，.className()方法也无效
}

function displayPage2(){
    var a0 = document.getElementById("page0");
    var a1 = document.getElementById("page1");
    var a2 = document.getElementById("page2");
    var x = document.getElementsByClassName("page0");
    var y = document.getElementsByClassName("page1");
    var z = document.getElementsByClassName("page2");
    a0.setAttribute("class","");
    a1.setAttribute("class","");
    a2.setAttribute("class","current");
    x[0].setAttribute("style","display:none");
    y[0].setAttribute("style","display:none");
    z[0].setAttribute("style","display:''");
    //无法直接访问.style来修改属性，.className()方法也无效
}
// 发现新的问题：用这种方法切换页面，当前页面位置不会改变
// 当切换回当前页面时会回到之前的位置-->在页面顶部跟标签处添加锚点即可
// 当某个页面有视频时，切换到其他页面视频会继续播放