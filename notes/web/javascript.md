# Javascript

## Javascript

- `clearInterval` 最好写在 `function` 中。

- `label` 绑定的表单元素会接收其 `click` 事件。

- 非触屏中，`mouseenter` 先于 `mousemove` 触发。

- 移除所有特定类型 `type` 的事件侦听：

  ``` javascript
  window.addEventListener(type, function(event) {
    event.stopImmediatePropagation();
  }, true);
  ```

- Google Analytics 报错

  ``` javascript
  ga("create", "UA-XXXXX-Y", {
    "cookieFlags": "SameSite=None; Secure"
  });
  ```

## User Script

- `GreaseMonkey` 使用原网页变量：`window.wrappedJSObject.variable`。
