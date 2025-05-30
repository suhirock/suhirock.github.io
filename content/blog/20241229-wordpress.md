+++
title = "WordPressの標準コアブロックのツールバーに機能を追加する"
description = "WordPressの標準コアブロックのツールバーに機能を追加する"
date = 2024-12-29 09:05:00
slug = "wordpress-20241229"
draft = true
+++

コアブロックの"カラム"にリンクをつけたかったのが始まりでした。     

<!--more-->

---

<br>

## いつものようにPerさんに聞いてみる

Perplexityさんに伺ってみました。  

![Perplexityさんへの質問](/img/202412/wordpress.png)  

すると次のような答えが返ってきました。  

![Perplexityさんの答え1](/img/202412/wordpress2.png)  
![Perplexityさんの答え2](/img/202412/wordpress3.png)  

ほう

<br>

## 一旦registerBlockTypeで実装してみる

   

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
