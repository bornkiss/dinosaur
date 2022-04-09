---
sidebar_position: 2
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/markdown-features-tabs-styles.module.css';
```

# 账号切换

**分别介绍在MacOS和Windows的实现方法**

>假设有两个Github账号，已经添加好ssh key公钥至对应账号  
>:health_worker: 个人： `mine.pub`  
>:office: 公司： `company.pub`  

## MacOS
### 个人账号
创建sh命令文件 `github_mine.sh`
```bash
cp -Rf ~/.ssh/mine ~/.ssh/id_ed25519
cp -Rf ~/.ssh/mine.pub ~/.ssh/id_ed25519.pub
```

***

### 公司账号
创建sh命令文件 `github_company.sh`
```bash
cp -Rf ~/.ssh/company ~/.ssh/id_ed25519
cp -Rf ~/.ssh/company.pub ~/.ssh/id_ed25519.pub
```

***

### 切换操作
根据需要使用的账号，在 `~` 或 `.ssh` 目录下，执行上述创建好的命令

<BrowserWindow>
<Tabs>
<TabItem value="个人">

```bash
sh github_mine.sh
```

</TabItem>
<TabItem value="公司">

```bash
sh github_company.sh
```

</TabItem>
</Tabs>
</BrowserWindow>


查看 `id_ed25519.pub` 公钥是否是对应刚执行的sh命令所属公钥
```bash
cat ~/.ssh/id_ed25519.pub
```

验证账号是否切换成功，在终端（Terminal）中执行以下命令。
```bash
ssh -T git@github.com
# Hi ur_name! You've successfully authenticated, but GitHub does not provide shell access.
```
若显示 `Hi ur_name! You've successfully authenticated, but GitHub does not provide shell access.` ，且 `ur_name` 为执行命令对应的账号用户名，则表示切换成功，您可以对该账号仓库进行操作了:confetti_ball:。

## Windows
### 个人账号
创建bat批处理文件 `github_mine.bat` 
```bash
copy C:\Users\Administrator\.ssh\mine C:\Users\Administrator\.ssh\id_ed25519 /Y
copy C:\Users\Administrator\.ssh\mine.pub C:\Users\Administrator\.ssh\id_ed25519.pub /Y
```

***

### 公司账号
创建bat批处理文件 `github_company.bat`
```bash
copy C:\Users\Administrator\.ssh\company C:\Users\Administrator\.ssh\id_ed25519 /Y
copy C:\Users\Administrator\.ssh\company.pub C:\Users\Administrator\.ssh\id_ed25519.pub /Y
```

***

### 环境变量
添加 `C:\Users\Administrator\.ssh` 至系统环境变量Path
:::warning
不要忘记点击保存！
:::
**这样就可以通过bat文件切换公钥**

***

### 切换操作
:::tip
`Win + R`，输入`cmd`打开命令提示符
:::
根据需要使用的账号，执行上述创建好的脚本

<BrowserWindow>
<Tabs>
<TabItem value="个人">

```bash
github_mine
```

</TabItem>
<TabItem value="公司">

```bash
github_company
```

</TabItem>
</Tabs>
</BrowserWindow>


查看 `id_ed25519.pub` 公钥是否是对应刚执行的sh命令所属公钥
```bash
cat ~/.ssh/id_ed25519.pub
```

验证账号是否切换成功，在终端（Terminal）中执行以下命令。
```bash
ssh -T git@github.com
# Hi ur_name! You've successfully authenticated, but GitHub does not provide shell access.
```
若显示 `Hi ur_name! You've successfully authenticated, but GitHub does not provide shell access.` ，且 `ur_name` 为执行命令对应的账号用户名，则表示切换成功，您可以对该账号仓库进行操作了:confetti_ball:。

***
:::warning
如果遇到以下 `无权限` 的问题，可通过ssh-add命令将专用密钥添加到ssh-agent的高速缓存中来解决
:::

```bash
# fatal: Could not read from remote repository.

# Please make sure you have the correct access rights
# and the repository exists.

ssh-add ~/.ssh/id_ed25519
```