# Obsidian

- 调试：`Ctrl+Shift+I`

- [Better Word Count](https://github.com/lukeleppan/better-word-count/pull/108/commits/a9386b63af70979c9118b3c745b9d6cc009df38c)

  ``` javascript
  const nonSpaceDelimitedWordsOther = 
    /[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u4E00-\u9FD5\u00B7\u2014\u2018\u2019\u201C\u201D\u2026\u3002\u3008-\u301C\uFF08-\uFF0D\uFF1A-\uFF1F\uFF61-\uFF65]{1}/
    .source;
  ```
