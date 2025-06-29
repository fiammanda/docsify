# Obsidian

- 调试

  ```
  Ctrl+Shift+I
  ```

- [Better Word Count](https://github.com/lukeleppan/better-word-count/pull/108/commits/a9386b63af70979c9118b3c745b9d6cc009df38c)

  设置 `alias` 反复报错 `too much recursion`，尝试无果，气得直接上手改了源代码，其实成功了但是又被报错信息迷惑！折腾两天发现报错信息来自我设置的无 `href` 链接……目前 `alias` 设置如下：
  
  ``` javascript
  const nonSpaceDelimitedWordsOther = 
    /[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u4E00-\u9FD5\u00B7\u2014\u2018\u2019\u201C\u201D\u2026\u3002\u3008-\u301C\uFF08-\uFF0D\uFF1A-\uFF1F\uFF61-\uFF65]{1}/
    .source;
  ```
