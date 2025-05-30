+++
title = "TauriとSvelteKitでアプリをつくっています"
description = "TauriとSvelteKitでアプリをつくっています"
date = 2024-12-22 09:00:00
slug = "tauri-sveltekit-20241222"
draft = false
+++

TauriとSvelteKitでアプリを作っています。  
公式のquick startをやってみています。  

<!--more-->

---

<br>

## SvelteKitのインストール

```shell
mkdir sitemaper
cd sitemaper
npx sv create

┌  Welcome to the Svelte CLI! (v0.6.9)
│
◇  Where would you like your project to be created?
│  ./
│
◇  Which template would you like?
│  SvelteKit minimal
│
◇  Add type checking with Typescript?
│  Yes, using Typescript syntax
│
◆  Project created
│
◇  What would you like to add to your project? (use arrow keys / space bar)
│  prettier, eslint, vitest, playwright, tailwindcss, sveltekit-adapter
│
◇  tailwindcss: Which plugins would you like to add?
│  none
│
◇  sveltekit-adapter: Which SvelteKit adapter would you like to use?
│  node
```


<br>

## SvelteKitのアダプターのインストール

```sh
pnpm add -D @sveltejs/adapter-static
```

svelte.config.jsを以下のように書きかえます。  

```js
import adapter from '@sveltejs/adapter-static' // This was changed from adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
  },
}

export default config
```

<br>

## +layout.tsを設定

src/routes/+layout.tsを作成して以下を記載

```ts
export const prerender = true
export const ssr = false
```

<br>

## tauriコマンドを使えるようにする

```sh
pnpm add -D @tauri-apps/cli@1
```

<br>

## Tauriをセットアップ

```sh
pnpm tauri init

✔ What is your app name? · sitemaper
✔ What should the window title be? · sitemaper
✔ Where are your web assets (HTML/CSS/JS) located, relative to the "<current dir>/src-tauri/tauri.conf.json" file that will be created? · ../build
✔ What is the url of your dev server? · http://localhost:5173
✔ What is your frontend dev command? · npm run dev
✔ What is your frontend build command? · npm run build
```

<br>

## Tauri立ち上げ

```sh
pnpm tauri dev
```

これで一旦立ち上がりまでは完了しました。

<br>

<br>
取り急ぎ、共有まで。   
