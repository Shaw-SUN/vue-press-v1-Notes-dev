# 其他笔记

## 语义化版本号管理

Node 项目遵循 [语义化版本号 open in new window](https://semver.org/lang/zh-CN/) 的规则，例如 `1.0.0` 、 `1.0.1` 、 `1.1.0` 这样的版本号，本教材的主角 Vue 也是遵循了语义化版本号的发布规则。

建议开发者在入门前端工程化的时候就应该熟悉这套规则，后续的项目开发中，你会使用到很多外部依赖，它们也是使用版本号控制来管理代码的发布，每个版本之间可能会有一些兼容性问题，如果不了解版本号的通用规则，很容易在你的开发中带来困扰。

TIP

现在有很多 CI/CD 流水线作业具备了根据 Git 的 Commit 记录来自动升级版本号，它们也是遵循了语义化版本号规则，版本号的语义化在前端工程里有重大的意义。

### 基本格式与升级规则

版本号的格式为： `Major.Minor.Patch` （简称 `X.Y.Z` ），它们的含义和升级规则如下：

| 英文  | 中文     | 含义                                               |
| ----- | -------- | -------------------------------------------------- |
| Major | 主版本号 | 当项目作了大量的变更，与旧版本存在一定的不兼容问题 |
| Minor | 次版本号 | 做了向下兼容的功能改动或者少量功能更新             |
| Patch | 修订号   | 修复上一个版本的少量 BUG                           |

一般情况下，三者均为正整数，并且从 `0` 开始，遵循这三条注意事项：

- 当主版本号升级时，次版本号和修订号归零
- 当次版本号升级时，修订号归零，主版本号保持不变
- 当修订号升级时，主版本号和次版本号保持不变

下面以一些常见的例子帮助你快速理解版本号的升级规则：

- 如果不打算发布，可以默认为 `0.0.0` ，代表它并不是一个进入发布状态的包
- 在正式发布之前，你可以将其设置为 `0.1.0` 发布第一个测试版本，自此，代表已进入发布状态，但还处于初期开发阶段，这个阶段你可能经常改变 API ，但不需要频繁的更新主版本号
- 在 `0.1.0` 发布后，修复了 BUG ，下一个版本号将设置为 `0.1.1` ，即更新了一个修订号
- 在 `0.1.1` 发布后，有新的功能发布，下一个版本号可以升级为 `0.2.0` ，即更新了一个次版本号
- 当你觉得这个项目已经功能稳定、没有什么 BUG 了，决定正式发布并给用户使用时，那么就可以进入了 `1.0.0` 正式版了

### 版本标识符

以上是一些常规的版本号升级规则，你也可以通过添加 “标识符” 来修饰你的版本更新：

格式为： `Major.Minor.Patch-Identifier.1` ，其中的 `Identifier` 代表 “标识符” ，它和版本号之间使用 `-` 短横线来连接，后面的 `.1` 代表当前标识符的第几个版本，每发布一次，这个数字 +1 。

| 标识符 | 含义                                                               |
| ------ | ------------------------------------------------------------------ |
| alpha  | 内部版本，代表当前可能有很大的变动                                 |
| beta   | 测试版本，代表版本已开始稳定，但可能会有比较多的问题需要测试和修复 |
| rc     | 即将作为正式版本发布，只需做最后的验证即可发布正式版               |