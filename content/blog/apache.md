+++
title = "Apacheでやること"
description = "Apacheでやること"
date = 2024-12-05 17:40:00
slug = "apache-241205"
draft = false
+++

Apache でやること

<!--more-->

### ディレクトリの一覧をださない

```shell
Options -Indexes FollowSymLinks
```

にする。
