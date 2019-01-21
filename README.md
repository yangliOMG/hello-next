# 问题总结
* Next.js快速上手React服务器渲染
https://segmentfault.com/p/1210000010368182/read
https://www.zcfy.cc/article/react-universal-with-next-js-server-side-react-2158.html

* Jquery ajax, Axios, Fetch(https://segmentfault.com/a/1190000012836882?utm_source=tag-newest)
> JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理
> Axios本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范
> fetch是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装
```
fetch的response机制,返回的是一个未处理的方法集合，我们可以通过这些方法得到我们想要的数据类型如果我们想要json格式，就执行response.json(),如果我们想要字符串就response.text()
fetch('xxx').then(res => {
    return res.json()                           //或者res.text()      
}).then( res => {      
    console.log(res)                            //这里就是处理完的后台返回的json数据        
})    
```