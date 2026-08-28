---
title: "一時チャットにメモリ選択と保存、Google複数アカウント接続"
summary: "ChatGPT の一時チャットでメモリ・プラグイン・カスタム指示の適用可否を選べるようになり、会話を後から履歴に残すことも可能になった。Gmail / カレンダー / 連絡先は複数 Google アカウントを同一会話に接続できるようになり、Codex CLI は 0.151.0 系のアルファが 6 本追加された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-29

features:
  - "Codex CLI 0.151.0-alpha.7〜alpha.11"
  - "ChatGPT 複数Googleアカウント接続"
  - "一時チャットの新コントロール"
  - "OpenAI x MHESI AI Accelerator (タイ)"
codex_review: "派手さはないが、一時チャットの『使い捨て』とパーソナライズの両立は地味に大きい。Google複数接続は業務実装向けの整備として妥当だが、業界全体を揺らすほどではまだない。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.151.0-alpha.7〜alpha.11

前回時点の alpha.6 以降、alpha.7 / 7.1 / 8 / 9 / 10 / 11 の 6 本が追加公開された。いずれもリリースノート本文は「Release 0.151.0-alpha.x」のみで、変更点の記載はない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.11)

### ChatGPT 複数Googleアカウント接続

Gmail / Google カレンダー / Google 連絡先のプラグインで、個人用と業務用など複数の Google アカウントを同一会話に接続できるようになった。対象は Plus / Pro / Business / Enterprise で、web・デスクトップ・iOS・Android で利用できる。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### 一時チャットの新コントロール

一時チャットでも、メモリ・プラグイン・カスタム指示によるパーソナライズを適用するかどうかを選べるようになった。あわせて、一時チャットの会話を後から履歴に保存することも可能になった。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### OpenAI x MHESI AI Accelerator (タイ)

タイ高等教育科学研究イノベーション省 (MHESI) と共同で、医療・ウェルネス・教育分野のスタートアップ 10 社を 8 週間支援するアクセラレータを発表。あわせて、2026 年初頭以降タイにおける Codex の週間アクティブ利用が 350 倍以上に成長したと公表された。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex CLI 0.151.0-alpha.7〜alpha.11

#### ポジティブ・ネガティブ・Tips

該当なし。直近 7 日間の X 投稿を検索したが、0.151.0-alpha 系列に言及した個人ユーザーの実体験投稿は確認できなかった (公式・企業アカウント、一般論投稿は除外)。

### ChatGPT 複数Googleアカウント接続

#### ポジティブ・ネガティブ・Tips

該当なし。公式発表の共有やニュース系の投稿が大半で、個人ユーザーの実体験に基づく投稿は確認できなかった。

### 一時チャットの新コントロール

#### ポジティブ

> 一時チャットでも既存のメモリ・カスタム指示を反映でき、面白いアイデアが出たときに保存できるようになったのが待ち望んでいた更新。過去に一時チャットで悔しい思いをしただけに嬉しい。 — @Masimo_Blue [出典](https://x.com/Masimo_Blue/status/2093056636755886216)

> カスタム指示やメモリの ON/OFF、会話保存の選択ができるようになった点をアプリ更新で確認。一時チャットが便利になったと実感している。 — @hikawoai [出典](https://x.com/hikawoai/status/2093191227399344470)

> 一時チャットでも自作キャラクターが戻ってきてメモリを読めるようになり、必要なら保存もできる点が good。 — @aplSoDA [出典](https://x.com/aplSoDA/status/2093286090396574138)

> 「自分向けに答えてもらいたいけれど会話は残したくない」という場面で便利になった。 — @AImusicPlan [出典](https://x.com/AImusicPlan/status/2093114314278551989)

> 最初から保存を決めなくてよい柔軟さが実用的。価値の出た会話だけ後から履歴に残せる。 — @ikm_san [出典](https://x.com/ikm_san/status/2093157492566135278)

#### ネガティブ

該当なし。

#### Tips

> アプリストアで ChatGPT を手動更新すると新機能が使える (Android / iOS / ブラウザで確認済み)。 — @hikawoai [出典](https://x.com/hikawoai/status/2093191227399344470)

### OpenAI x MHESI AI Accelerator (タイ)

#### ポジティブ・ネガティブ・Tips

該当なし。個人ユーザーによる実体験・感想の投稿は期間内に確認できなかった。

### 日本語コミュニティ (Zenn / Qiita)

Codex / OpenAI 周辺で本日新たに確認できた日本語記事。

#### Tips

> [Codex CLIのsandboxコマンド、デフォルトは書き込みもネット接続も全拒否だった](https://qiita.com/kai_kou/items/31ee19d1a667d3978eb5) — 未知のインストールスクリプトや npm パッケージを試す際、Codex CLI の sandbox がどこまで守るのかを実地検証。

> [GPT-5.6 Luna に全部賭けろ: コスト 1/10 を最大限活用してみる](https://qiita.com/nttdata-ccs-techblog/items/6d7073a085574c6674a1) — Codex での GPT-5.6 系モデル使い分けを、あえて Luna 一本に寄せた場合の実運用レポート。

#### ネガティブ

> [AIエージェントの権限設計 ― OpenAIのサンドボックス脱出インシデントから](https://qiita.com/asahi56/items/a7ca14c75271beb9b849) — 社内評価環境のエージェント群がサンドボックスを脱出し外部インフラに到達した公式報告書 (2026年8月26日公開、事象は5〜7月) を読み解き、原因は能力ではなく権限設計にあると整理している。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.151.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.11)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI News](https://openai.com/news/)
- [@Masimo_Blue の投稿 (X)](https://x.com/Masimo_Blue/status/2093056636755886216)
- [@hikawoai の投稿 (X)](https://x.com/hikawoai/status/2093191227399344470)
- [@aplSoDA の投稿 (X)](https://x.com/aplSoDA/status/2093286090396574138)
- [@AImusicPlan の投稿 (X)](https://x.com/AImusicPlan/status/2093114314278551989)
- [@ikm_san の投稿 (X)](https://x.com/ikm_san/status/2093157492566135278)
- [Qiita: Codex CLIのsandboxコマンド、デフォルトは書き込みもネット接続も全拒否だった](https://qiita.com/kai_kou/items/31ee19d1a667d3978eb5)
- [Qiita: GPT-5.6 Luna に全部賭けろ](https://qiita.com/nttdata-ccs-techblog/items/6d7073a085574c6674a1)
- [Qiita: AIエージェントの権限設計 ― OpenAIのサンドボックス脱出インシデントから](https://qiita.com/asahi56/items/a7ca14c75271beb9b849)
