# 项目托管


| 名称        | 情况                                   |
| ----------- | -------------------------------------- |
| Netlify     | 不怎么需要经常编辑的静态网站就丢这     |
| CodeSandbox | 应该是接下来的主力                     |
| Replit      | 似乎用上之后转为 10 个免费额度         |
| Glitch      | 永远怀念……找不到这么方便的开箱即用了   |


## CodeSandbox

``` bash
rm -rf .git
git init -b main
git remote add origin https://github.com/fiammanda/docsify.git
git add .
git commit -m "Initial commit"
git push -f origin main
```

与其它不同，默认分支名为 `master`，需要手动指明 `main`。
被 AI 坑害误以为无法编辑 `.md` 文件受不了了……


## Replit

``` bash
rm -rf .git
git init
git remote add origin https://github.com/<user>/<repo>.git
git add .
git commit -m "Initial commit"
git push -f origin main
```


## Glitch

### Terminal

- 删除空文件夹
  ``` bash
  find . -empty -type d -delete
  ```

- 删除空文件
  ``` bash
  find . -empty -type f -delete
  ```

- 清空记录
  ``` bash
  git rm -r --cached .
  rm -rf .git
  refresh
```

### 404 页面

> [https://support.glitch.com/t/29168](https://support.glitch.com/t/29168)
> [https://gomix.com/#!/404-example](https://gomix.com/#!/404-example)

`package.json`

``` json
{
  "name": "defresh",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "engines": {
    "node": "8.x"
  }
}
```

`server.js`

``` javascript
var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html"); 
});
app.listen(8080);
```

