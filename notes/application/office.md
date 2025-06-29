# Office

## Excel

### 解密

- 右键 > 打开方式 > 任意解压软件
- 进入路径 `\xl\worksheets\`
- 打开需要解密的工作表，删除以下代码：
  ```
  <sheetProtection algorithmName="SHA-512" hashValue="" saltValue="" spinCount="100000" sheet="1" selectLockedCells="1"/>
  ```
