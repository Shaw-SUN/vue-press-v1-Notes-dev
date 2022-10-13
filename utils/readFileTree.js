const path = require("path");
const directoryTree = require("directory-tree") // 引入第三方目录tree模块
const fileDir = path.join(__dirname, ".." ,  "/docs/"); // 拼接文档目录

function callback(item) {
  // 统一配置项
  // 添加title字段
  item.title = item.name.split(".md")[0]

  // 路由路径path字段修饰
  if (item.name === "docs") {
    // 排除根目录
    item.title = "首页"
    item.path = "/"
    item.collapsable= false
  } else {
    if (item.type === "directory") {
      // 文件夹
      item.path = `${item.path.split("docs")[1]}/`
      item.collapsable= false
    } else {
      // 文件夹下md
      item.path = item.path.split("docs")[1].replace(/\.md$/, "") // 去头去尾
    }
  }
  // 去除原有多余字段
  delete item.name
  delete item.type
}

function readFileTree() {
  fileObj = directoryTree(
    fileDir,
    {
      exclude: /(.vuepress|_resources|README.md|TODO.md|resume|codeExamples|little-notes.md|bug.md)/, // 排除项
      extensions: /\.md$/, // 匹配文件名
      normalizePath: true, // 路径符转换(\ => /)
      attributes: ['type'], //可选字段
    },
    callback,
    callback
  )
/* console.log(JSON.stringify(fileObj)) */
  return fileObj
}
module.exports = readFileTree
