---
title: セキュリティ 2026年3月編
description: セキュリティ対応をメモする
date: '2026-03-02'
categories:
  - htaccess
  - セキュリティ
published: false
---

セキュリティについてまとめます。

<br>
<br>

## Headerの語句

always ディレクティブについて  
alwaysがつくと、2xxステータスのときだけでなく、4xxや5xxステータスのときにもそのルールが適応されます。  
  
edit ディレクティブ  
editがつくと、正規表現でURLやパスの指定などを行います。  


<br>
<br>

## X-Frame-Options
クリックジャッキングを防ぐためのものです。クリックジャッキングとはWebページに透明なiframeを重ね、ユーザーが意図しないボタンやリンクを無意識にクリックさせ、意図しない操作（購入、退会、情報公開など）を実行させるサイバー攻撃です。

例えば *X-Frame-Options* を *SAMEORIGIN* にすると

ApacheでSAMEORIGINに設定する場合  
```
# 同一のオリジンは許可
<IfModule mod_headers.c>
Header always set X-Frame-Options "SAMEORIGIN"
</IfModule>
```

<br>
<br>

## Content Security Policy

Content Security Policyは指定が難しい。というかパターンがいっぱいある。  
特に、data: や blob: などの指定は微妙に忘れやすい。  

CSPヘッダー
```
# 同一のオリジンは許可
<IfModule mod_headers.c>
Header set Content-Security-Policy "\
default-src 'self';\
script-src 'src'\
script-src 'src'\
"
</IfModule>
```

<br>
<br>

## X-Content-Type-Options
MIMEスニッフィング対応  

```
<IfModule mod_headers.c>
Header set X-Content-Type-Options "nosniff"
</IfModule>
```

## Strict-Transport-Security

httpsを強制するヘッダーです。  

```
<IfModule mod_headers.c>
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```