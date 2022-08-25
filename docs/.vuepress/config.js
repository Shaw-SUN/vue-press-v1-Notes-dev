const autoRead = require("../../utils/readFileTree")
const sidebarConfig = JSON.parse(`[${JSON.stringify(autoRead())}]`)

module.exports = {
  title: "Shaw'Note",
  description: "Just for Shaw",
  // 默认主题全局设置
  themeConfig: {
    logo: null,
    // 顶部导航栏
    nav: [],
    // 侧边栏
    sidebar: sidebarConfig,
    sidebarDepth: 2,
    lastUpdated: "最后编辑",
    repo: "Shaw-SUN/vue-press-v1-Notes-dev",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "在GitHub上编辑此页",
    smoothScroll: true,
  },
  // webpack 路由别名
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "/_resources",
      },
    },
  },
  // 官方插件
  plugins: ["@vuepress/medium-zoom", "@vuepress/back-to-top", "@vuepress/nprogress"],
  //markdown设置
  markdown: {
    lineNumbers: true
  }
}
