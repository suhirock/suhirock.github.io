+++
title = "SvelteKitからTauriへの通信"
description = "SvelteKitからTauriへの通信"
date = 2024-12-27 08:44:00
slug = "tauri-sveltekit-headless-chrome-20241224"
draft = true
+++

TauriとSvelteKitでアプリを作っています。  
とりあえずひとつずつやってみています。     

<!--more-->

---

<br>

## Crate のインストール

今回はURLを入力してアクセスする必要があったので、headless-chromeのクレートを入れることにしました。  
headless-chrome  
failure  

```sh
cargo add headless-chrome
cargo add failure
```

<br>

## headless-chromeのエラーに対応できず四苦八苦

perplexityさんにいろいろ聞きつづ、headless-chromeの整備をしてみています。  
とりあえず、動作を検証するために、[rust-headless-chromeでブラウザを操作してみる
](https://qiita.com/ochio/items/83162d25326fe92b7be2) のコードを動作させてみようと思いました。    

```rust
use std::error::Error;
use headless_chrome::{Browser, LaunchOptions};
use headless_chrome::protocol::cdp::Page;
use std::fs;

#[tauri::command]
fn browse() -> Result<(), Box<dyn Error>> {
    // ブラウザを立ち上げる
    let browser = Browser::new(LaunchOptions {
        headless:false,
        ..Default::default()
    })?;

    // タブを開く
    let tab = browser.new_tab()?;

    // https://www.google.com/に遷移する
    tab.navigate_to("https://www.google.com/")?;

    // 検索エリアにフォーカスを当てる
    tab.wait_for_element("textarea[title=検索]")?.focus()?;

    // 検索エリアにRustと入力し、エンターキーを押す
    tab.type_str("Rust")?.press_key("Enter")?;
    tab.wait_until_navigated()?;
    assert_eq!(tab.find_element("title")?.get_inner_text()?, "Rust - Google 検索");

    // 遷移後スクリーンショットを保存する
    let jpeg_data = tab.capture_screenshot(
        Page::CaptureScreenshotFormatOption::Jpeg,
        None,
        None,
        true)?;
    fs::write("screenshot.jpg", jpeg_data)?;

    Ok(())
}
```

こちらをやってみたのですが、うまくいかず。  
#[tauri::command] のエラー処理をうまく解釈できないよう。  
内部でanyhowが使われていて、そのエラーが拾えない？というレベルの理解しかしていません。  

その後ググってみると  


<br>

これで一旦立ち上がりまでは完了しました。

<br>

<br>
取り急ぎ、共有まで。   
