# Node.js 环境

Node.js （简称 Node ） 是一个基于 Chrome V8 引擎构建的 JS 运行时（ JavaScript Runtime ）。

它让 JavaScript 代码不再局限于网页上，还可以跑在客户端、服务端等场景，极大的推动了前端开发的发展，现代的前端开发几乎都离不开 Node 。

> 什么是 Runtime
> Runtime ，可以叫它 “运行时” 或者 “运行时环境” ，这个概念是指，你的代码在哪里运行，哪里就是运行时。
> 传统的 JavaScript 只能跑在浏览器上，每个浏览器都为 JS 提供了一个运行时环境，你可以简单的把浏览器当成一个 Runtime ，明白了这一点，相信你就能明白什么是 Node 。
> Node 就是一个让 JS 可以脱离浏览器运行的环境，当然，这里并不是说 Node 就是浏览器。
>
> Node 和浏览器的区别  
> 虽然 Node 也是基于 Chrome V8 引擎构建，但它并不是一个浏览器，它提供了一个完全不一样的运行时环境，没有 Window 、没有 Document 、没有 DOM 、没有 Web API ，没有 UI 界面…
> 哪怕你仅仅只做 Web 开发，也不再需要顾虑新的语言特性在浏览器上的兼容性（ e.g. ES6 、 ES7 、 ES8 、 ES9 …）， Node 配合构建工具，以及诸如 Babel 这样的代码编译器，可以帮你转换为浏览器兼容性最高的 ES5 。

## npm

### 常用命令

### npm 最新淘宝镜像

修改 npm 至新的淘宝镜像源：  
`npm config set registry http://registry.npmmirror.com`  
需要解除镜像并恢复到官方源：  
`npm config set registry https://registry.npmjs.org`  
查看 npm 源地址有没有换成功：  
`npm config get registry`

### 安装系统开发环境

(_尤其是 `witch` 命令缺少 python_)  
管理员下 `npm install --global --production windows-build-tools`
