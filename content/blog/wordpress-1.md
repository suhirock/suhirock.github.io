+++
title = "WordPress1 オプション設定"
description = "WordPressでのオプション設定"
date = 2024-12-04 05:46:00
slug = "wordpress-1"
draft = true
+++

WordPressのオプション設定は至ってシンプル  
add_option()  
update_option()  
get_option()  
のみでやりとりできる。  

<!--more-->

---

## add_option

オプションを生成する。  

```php
add_option(
    string 'オプションのキー', 
    mixed '初期値', 
    string 'ここの項目は使わない', 
    bool 'wordpress起動時にオートロードするか'
);
```
