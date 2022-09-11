# Ajax

## Http

### http 请求

get
post
put
delete

http 请求本身不会进行操作，具体操作油后端服务器实现与响应，请求方法名只是约定

### http 请求状态码

- 200
- 404
- 500

## ajax

按需加载数据，异步数据

数据格式通常为 json(js 对象表示法)

## readyState

- 0 : 请求未初始化
- 1 ：服务器链接已建立
- 2 ：请求已接受
- 3 ：请求处理中
- 4 ：请求已完成，响应已就绪

## axios

方法

```js
axios.get('url').then((res) => {
  console.log(res.data)
})

axios.post('url', { params }).then((res) => {
  console.log(res.data)
})
```

## 跨域

## 同源请求

相同 IP、端口
默认无法使用 ajax

## jsonp 原理

`<script>`标签跨域获取 json 文件
并不是 ajax
get 请求

### 第三方封装 koa

后端：引入 jsonp
前端：jquery:  
`dataType:"jsonp"`

## 设置响应头

后端：// 设置服务器响应头信息
`ctx.set('Access-Control-Allow-Origin', 'url')` `*`运行所有
存在安全问题
开发时允许，部署时不跨域
