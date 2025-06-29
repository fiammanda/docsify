  # CSS




- 悬浮支持

  ``` css
  @media (hover: hover) {
    /* property: value; */
  }
  ```

- CSS 修改图片

  ``` css
  img {
    content: url();
  }
  ```

- ~~`width` 相关会忽略滚动条宽度。~~没有滚动条了好耶~

- 试验下来唯一一个能解决的 FireFox 文本位置和 WebKit 系不一样的做法：`line-height` 比 `height` 高 1 像素。

