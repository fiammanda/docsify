# Windows 10 技巧

## 图标位置

- 任务栏图标：
  ```
  %AppData%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar
  ```
- 开始图标：
  ```
  %AppData%\Microsoft\Windows\Start Menu\Programs
  ```
- 系统图标：
  ```
  %SystemRoot%\System32\SHELL32.dll
  ```

## 固定到开始/任务栏

Windows 10 中，`.bat`、`.cmd` 和 `.lnk` 无法固定到开始或任务栏。迂回方案：

- 任选其它文件固定到开始；
- 右键刚固定的图标 > 更多 > 打开文件位置；
- 右键选中快捷方式 > 属性 > 快捷方式，按需更改目标、位置和图标。

## 按列表重命名文件

> https://stackoverflow.com/questions/27822638/

``` bash
@ECHO OFF
SETLOCAL ENABLEDELAYEDEXPANSION

rem Load the list of new filenames
set i=0
for /F "delims=" %%a in (names.txt) do (
   set /A i+=1
   set "newname[!i!]=%%a"
)
rem Do the rename:
set i=0
for /F "delims=" %%a in ('dir /b /o:n *.*') do (
   set /A i+=1
   for %%i in (!i!) do ren "%%a" "!newname[%%i]!"
)
```

## 「网络 2」重命名

> https://www.windows10forums.com/threads/3219/

```
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles
```

## 节约空间

```
powercfg -h off
```

## 任何问题

如文件夹右键无响应等：以管理员模式打开命令提示符，输入命令 `sfc/scannow`。