+++
title = "ChatGPT1 tokenについて"
description = "ChatGPTのtokenについてを勉強"
date = 2024-12-04 06:23:00
slug = "chatgpt-1"
draft = true
+++

ChatGPTのtoken数は取得できるので、ツールなどで限界値を設定することは可能そうだなと思います。  
どのような値でtokenが取得できるかをチェックしています。  

<!--more-->

---

## prompt_tokens

prompt_tokens はAPIへの入力token数です。  
各モデルによってトークンの単価が違います。  
OpenAIのPricingには、input tokensと記載されています。  

## completion_tokens

completion_tokens はAPIからの出力token数です。  
各モデルによってトークンの単価が違います。  
OpenAIのPricingには、output tokensと記載されています。  

