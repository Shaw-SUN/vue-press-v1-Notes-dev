const autoRead = require("../../utils/readFileTree")
const sidebarConfig = JSON.parse(`[${JSON.stringify(autoRead())}]`)

module.exports = {
  // 标题
  title: "Shaw'Book",
  description: "Notes written by Shaw",
  // 默认主题全局设置
  themeConfig: {
    logo: null,
    // 顶部导航栏
    // nav: [],
    // 代码仓库
    // repo: "Shaw-SUN/vue-press-v1-Notes-dev",
    // 侧边栏
    sidebar: sidebarConfig,
    sidebarDepth: 2,
    // 最后编辑
    lastUpdated: "更新于",
    // 在线编辑
    editLinks: true,
    editLinkText: "在GitHub上编辑此页",
    docsDir: "docs",
    docsBranch: "work",
    // 平滑滚动
    smoothScroll: true,
  },
  // webpack 路由别名
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "/docs/_resources",
      },
    },
  },
  // 官方插件
  plugins: ["@vuepress/medium-zoom", "@vuepress/back-to-top", "@vuepress/nprogress", "vuepress-plugin-table-of-contents"],
  //markdown设置
  markdown: {
    lineNumbers: true,
  },
}
