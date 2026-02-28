---
title: Laravelのデプロイのメモ 2026年2月編
description: デプロイ
date: '2026-02-27'
categories:
  - htaccess
  - SSH
  - laravel
published: true
---

Laravelでのシンボリックリンクを忘れるのでメモ  
Xserverで利用

<br>
<br>

## 目次  
- [シンボリックリンクを貼る](#01)  
- [シンボリックリンクの削除](#02)

<br>
<br>

<a id="01"></a>

## シンボリックリンクを貼る

```shell
cd $HOME/ドメイン/public_html
ln -s $HOME/ドメイン/プロジェクトフォルダ/public public
```

<br>
<br>

<a id="02"></a>

## シンボリックリンクを外す

```shell
cd $HOME/ドメイン/public_html
unlink public
```

<br>
<br>
