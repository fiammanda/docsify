# Docsify

- 移除网址中的 `#`

  ~~反正不行。~~
  
  Glitch 不行 Github [可行](https://github.com/docsifyjs/docsify/issues/238#issuecomment-1065320116)。

- 所有笔记归档特定文件夹但不显示在网址中

  设置 `alias` 反复报错 `too much recursion`，尝试无果，气得直接上手改了源代码，其实成功了但是又被报错信息迷惑！折腾两天发现报错信息来自我设置的无 `href` 链接……目前 `alias` 设置如下：
  
  ``` json
  alias: {
    "/.+/toc.md": "/toc.md",
    "(/([^.]+))$": "notes$1.md",
  }
  ```

- 页面切换效果

  不知何故 ChatGPT 提供的方案之前不行现在行了……神秘。

- 移植 GitBook 主题

  - [x] 加入顶栏
  - [x] 加入右侧边栏
  - [x] 左侧边栏样式
  - [x] TOC

- Terminal File Tree

  ```
  find notes -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
  ```
  