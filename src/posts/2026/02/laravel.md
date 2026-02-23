---
title: Laravelのメモ 2026年2月編
description: LaravelのURLパラメータを取得 / DBへの直接流し込み
date: '2026-02-21'
categories:
  - php
  - laravel
published: true
---

いまでもLaravelやってます。

<br>

Laravelを触るのも常に業務で触っているわけではないので、細かくメモしていかないとググ率が上がっていく一方なので、メモしていくことにしました。
これを書いているときのLaravelバージョンは12です。

<br>

## 目次  
- [Controllerでurlパラメータを取得](#01)  
- [Bladeテンプレートでパラメータを表示](#02)
- [Laravel Sail環境へのDBをSQLそのまま流し込み](#03)
- [ControllerでPDFのダウンロード](#04)

<br>
<br>

<a id="01"></a>

## アンカーControllerでurlパラメータを取得

```php
// なにかのコントローラー内のアクション
public function index(Request $request)
{
    $getparam = $request->query('キー');
    // $getparam にパラメータの値が入る
}
```

<br>
<br>

<a id="02"></a>

## Bladeテンプレートでパラメータを表示

```php
{{ request()->query('キー') }}

// old値がある場合
{{ old('キー', request()->query('キー’)) }}
```

<br>
<br>

<a id="03"></a>

## Sail環境でDBにSQLを直接流し込み

直接やったけどだめ。  
shellでログインしたらいけた。 

```shell
# shellにログイン
./vendor/bin/sail shell

# 流し込み ※パスワードは別入れ
mysql -h[DBホスト] -u[ユーザ名] -p [データベース名] < [sqlファイル]

# パスワード入力

# 終了したらexit
exit
```

<br>
<br>

<a id="04"></a>

## ControllerでPDFのダウンロード

