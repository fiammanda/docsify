# Typecho

https://app.infinityfree.net/

- `/hotdocs` 中上传 Typecho 程序
- 输入数据库信息（PDO 驱动）
- Parked Domain (Aliases)
- `/hotdocs` 中新建` .htaccess` 并复制以下代码后，在设置—永久链接中启用地址重写功能

  ```
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.php [L,E=PATH_INFO:$1]
  </IfModule>
  ```
  