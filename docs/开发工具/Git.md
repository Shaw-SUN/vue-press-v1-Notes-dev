# Git

## 设置代理

```bash
git config --global https.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'

Git代理取消：
git config --global --unset http.proxy
git config --global --unset https.proxy
```
