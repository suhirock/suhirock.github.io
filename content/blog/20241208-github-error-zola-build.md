+++
title = "zolaをbuildするときにGitHub Pagesでbuildエラー"
description = "zolaでbuildするときにbuildでエラーが出た件について"
date = 2024-12-08 18:57:00
slug = "github-error-zola-build-20241208"
draft = false
+++

なんだかうまくいかないbuild  
なんのことはない、エラーをよく読めばわかること  

<!--more-->

---

<br>

## zolaをbuildするときにエラー

GitHub Actions で buildエラーが出力された  
アカウントでログインできていない模様  

<br>

なんのことはない  
アクセストークンの期限日を忘れていた  
ただ、それだけのことだった  

<br>

## public repo の権限でアクセストークンを再度作成

zolaのサイトにてGitHub Pagesへデブロイする手順が書いてある。  
<br>
<a href="https://www.getzola.org/documentation/deployment/github-pages/" target="_blank">GitHub Pages | Zola</a>  
1. このページの中に <a href="https://github.com/settings/tokens/new?scopes=public_repo" target="_blank">public repo のアクセストークンをつくる GitHubへのリンク</a> があるのでそこからキーを作成し直し  
2. 作成したTOKENをリポジトリのシークレットとして登録
3. Actionsのコードを差し替え

だけでOK  
わざわざ書くことではありませんでした。  

<br>
取り急ぎ、共有まで。   
