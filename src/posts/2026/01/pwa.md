---
title: いまさらPWA
description: PWAが必要になったので試してみるページ
date: '2026-01-18'
categories:
  - pwa
  - javascript
published: true
---

はじめてPWAが必要になるケースが発生するかもしれないので、最低限の動作を確認してみたい。

<br>

## まずはHTMLをつくる

HTMLファイルを作成します。

```html title="index.html"
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,nofollow">
    <title>PWAテスト</title>
    <style>
      .wrapper{ width: 60%; margin: 20px auto; background: #eee; padding: 20px; text-align: center; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <h1>PWAテスト</h1>
      <p>リンクをまとめたページをPWAする</p>
      <ul>
        <li><a href="https://www.yahoo.co.jp/">Yahooのリンク</a></li>
        <li><a href="https://www.google.com/">Googleのリンク</a></li>
        <li><a href="https://b.hatena.ne.jp/">はてなブックマーク</a></li>
      </ul>
    </div>
  </body>
</html>
```

<br>

## 次にマニフェストファイルをつくる

manifest.jsonを同じフォルダに作成します。

```json title="manifest.json"
{
  "short_name": "DemoPage",
  "name": "Demo page of PWA",
  "icons": [
    {
      "src":"/demo/pwa/images/icon-512x512.png",
      "sizes":"512x512",
      "type": "image/png"
    },
    {
      "src":"/demo/pwa/images/icon-192x192.png",
      "sizes":"192x192",
      "type": "image/png"
    }
  ],
  "start_url": "./index.html",
  "display": "standalone"
}
```

<br>

## Service Workerをつくる

sw.jsとして同じフォルダに置く想定です。

```js title="sw.js"
// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});
// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
```

<br>

## Service Workerを登録

以下記述をhtmlファイルに行います。

```html title="index.html"
<!doctype html>
<html lang="ja">

〜省略〜

<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('./sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
</script>
</body>
</html>
```

<br>

こちらで動くかチェックしますが、ローカルホストでは無理っぽいので、Webサーバーなどで検証必要のようです。