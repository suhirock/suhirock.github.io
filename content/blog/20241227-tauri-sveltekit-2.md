+++
title = "SvelteKitからTauriへの通信"
description = "SvelteKitからTauriへの通信"
date = 2024-12-27 08:45:00
slug = "tauri-sveltekit-2-20241222"
draft = false
+++

TauriとSvelteKitでアプリを作っている。  
公式のquick startをやってみる。    

<!--more-->

---

<br>

## メインプロセスで処理をさせたかったら、tauri::commandでやりたい処理を記述

tauri::commandという属性マクロを追加するとJavascriptと通信できるようになります。  

```rust
// 処理内容
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

<br>

## フロントエンドからの呼び出しをコマンドと紐づけ

フロントのJavascriptからの呼び出しをコマンドへ紐づけるために  
invoke_handler  
generate_handler![] マクロ
を使います  


```rust
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

こちらでメインプロセスのコマンド整備は完了しました。  

<br>

## フロントエンド側

フロントエンド側から通信のやり取りをするには、
@tauri-apps/apiを使うと便利のようです。  

以下でインストールしておきます。  

```sh
pnpm add @tauri-apps/api@1
```

あとはsvelteコンポーネントを作成するだけです。  

src/lib/Greet.svelte
```svelte
<script>
  import { invoke } from '@tauri-apps/api/tauri'

  let name = ''
  let greetMsg = ''

  async function greet() {
    greetMsg = await invoke('greet', { name })
  }
</script>

<div>
  <input id="greet-input" placeholder="Enter a name..." bind:value="{name}" />
  <button on:click="{greet}">Greet</button>
  <p>{greetMsg}</p>
</div>
```

src/routes/+page.svelte
```svelte
<script>
  import Greet from '../lib/Greet.svelte'
</script>

<h1>Welcome to SvelteKit</h1>
<Greet />
```

こちらで公式

<br>

<br>
取り急ぎ、共有まで。   
