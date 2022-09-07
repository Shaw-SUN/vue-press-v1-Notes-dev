# Git

## 版本控制

- `git status` 仓库状态信息
- `git add 文件名` 暂存单个文件 `.` 全部文件
- `git commit -m 提交信息` 提交
- `git reset 文件名` 取消暂存
- `git reset commitID` 回退版本

  - `--hard` 不保留当前所有变更
  - `--soft` 保留为(_staged_)暂存
  - `--mixed` 保留为(_Modified_)修改

- `git log` 提交日志
- `git reflog` 所有操作记录

- `git branch` 查看本地分支
- `git checkout -b 新分支名 模板` 从模板分支创建本地新分支
- `git checkout 分支` 切换分支
- `git merge 分支` 合并分支

- `git fetch` 拉取远程分支
- `git pull` 自动 fetch + merge
- `git branch -u origin/分支名` 设置远程分支(简写)
- `git push --set-upstream origin 分支名` 设置远程分支并推送

- `git rebase` 重新排列 commit

  - `git rebase --continue` 继续执行排列

## 设置

### 用户信息

```bash
git config (--global) user.name "用户名"
git config (--global) user.email "邮箱"
```

### ssh 密钥认证

### 代理

```bash
设置代理：
git config (--global) https.proxy http://127.0.0.1:1080
git config (--global) https.proxy https://127.0.0.1:1080
git config (--global) http.proxy 'socks5://127.0.0.1:1080'
git config (--global) https.proxy 'socks5://127.0.0.1:1080'
取消代理：
git config (--global) --unset http.proxy
git config (--global) --unset https.proxy
```
