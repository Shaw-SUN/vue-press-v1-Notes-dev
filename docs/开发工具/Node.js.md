# Node.js

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
