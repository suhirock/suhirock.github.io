+++
title = "SquareAPIをPHPで使う"
description = "SquareをPHPのSDKで使う場合の備忘録"
date = 2024-12-05 15:57:00
updated = 2024-12-07T09:24:50Z
slug = "square"
draft = false
+++

Square の API を PHP の SDK で触るまでの果てしない苦悩

<!--more-->

---

<br>

## 公式サイトを見る

公式サイトからインストール手順を見る  
<a href="https://developer.squareup.com/docs/sdks/php/quick-start" target="_blank">Square PHP SDK Quickstart</a>

<br>

## インストール
インストールはcomposerで行う
```shell
composer require square/square
```

<br>

## クライアントとつなぐ
Quick Startにある、そのままのコードでアクセストークンだけ指定すれば、そのまま使えて、クライアントにも接続できた。
```php
<?php
require_once 'vendor/autoload.php';

use Square\SquareClientBuilder;
use Square\Authentication\BearerAuthCredentialBuilder;
use Square\Enviroment;
use Square\Exceptions\ApiException;

$client = SquareClientBuilder::init()
            ->bearerAuthCredentials(
                BearerAuthCredentialsBuilder::init(
                    getenv('SQUARE_ACCESS_TOKEN')
                )
            )
            ->enviroment(Enviroment::SANDBOX)
            ->build();
```

<br>

## あとはエンドポイントに接続するだけ
SquareはAPI Explorerも使いやすく整備されていて、素晴らしいと思いました。  
<a href="https://developer.squareup.com/explorer/square" target="_blank">Square API Explorer</a>
<br>

例えば支払いのリストを取得したい場合は Select API で Payments を選択し、List payments というメソッドを指定の上、ACCESS TOKENを設定して RUN するだけで入力と出力のコードサンプルを出してくれます。  
<br>
<img src="/img/square/square_api_explorer.gif" />

<br>
そうやって生成したものがこちらになります。

```php
<?php

// ここにはクライアントの接続コードがある

$api_response = $client->getPaymentsApi()->listPayments();

if ($api_response->isSuccess()) {
    $result = $api_response->getResult();
} else {
    $errors = $api_response->getErrors();
}
```
めちゃくちゃシンプルですね。  

<br>

## ほしい情報の取得
あとは欲しい情報を取得するのですが、PHPのSDKの使い方を見てみると、  
<a href="https://developer.squareup.com/docs/sdks/php/using-php-sdk" target="_blank">Using the Square PHP SDK</a>  
getキー名みたいな形で取得できるようなので、そちらで取得できます。  
このあたりは別の記事に書こうと思います。  
<br>
取り急ぎ、共有まで。   