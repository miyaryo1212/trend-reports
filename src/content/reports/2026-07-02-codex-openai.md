---
title: "Codex公式は更新なし、コミュニティはOpus比較と運用知に注目"
summary: "本日のCodex CLI公式リリースはalpha版とメンテナンス専用パッチのみで、ユーザー向けの新機能はなし。コミュニティではCodexとOpusの実装『抜け』比較、web検索のセキュリティ既定値、Codex Appの活用術など、実運用に根差した知見が活発に共有された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-02

features: []
codex_review: "公式更新が薄い日に、比較検証や安全な既定値の解説が主役になるのは健全だ。派手さはないが、AIコーディング市場が機能競争から運用知の蓄積へ移りつつある気配を少し感じる。"
codex_importance: 2
---

## 公式アップデート

本日の Codex CLI 利用者向け公式アップデートはありません。直近のリリースは alpha 版 (rust-v0.143.0-alpha.26〜32) とメンテナンス専用パッチ (0.142.3 / 0.142.4 / 0.142.5) のみです。

0.142.5 では「Responses WebSocket のリクエストペイロード全体がトレースログに書き込まれるのを防止」するバグ修正 ([#30771](https://github.com/openai/codex/pull/30771)) が入っていますが、それ以外は「ユーザー向けの変更なし」と明記されています。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

公式の目立った動きがない一方、Zenn/Qiita では Codex の実運用に踏み込んだ検証・解説が本日多く投稿されました。

### Codex と Opus の実装比較 ―「抜け型」の検証

#### 検証

> Codex と Opus に同じ issue を渡すと Opus 15 抜け・Codex 1 抜け。ただし Codex には蒸留済みプロンプト、Opus には実際の開発履歴を渡した交絡があると指摘し、条件を揃えた「案B」で再検証する2部構成の実験記事。 — @penne_inc [出典](https://zenn.dev/penne_inc/articles/codex-vs-opus-implementation-trial-phase-b)

### Codex の web 検索とセキュリティ

#### Tips

> Codex CLI は web 検索を有効にしても既定では生きたページを取りに行かない。プロンプトインジェクション対策として OpenAI が保守的な既定値を選んでいる、という設定リファレンスの読み解き。 — @okssusucha [出典](https://zenn.dev/okssusucha/articles/20260626-codex-web-search-cached-default-security)

### Codex の活用ワークフロー

#### Tips

> Codex App は「チャットでコードを書かせる画面」ではなく技術作業台。リポジトリ接続・thread 分割・ファイル読み込み・レビューまでを作業設計として整理。 — @aiwatch_jp [出典](https://zenn.dev/aiwatch_jp/articles/agent-flow-codex-app-workbench)

> Codex CLI 経由で gpt-image-2 を叩き、画像生成→コード反映→スクショ→差分修正を回す「視覚的開発ループ」の構築手法。 — @libercraft [出典](https://zenn.dev/libercraft/articles/20260627-codex-image-generation)

### サードパーティ利用のスタンス

#### 中立

> Anthropic が Claude Code のサブスク経由サードパーティ利用を締め出す一方、OpenAI の Codex は OAuth 利用を歓迎。2026年6月時点の両者の姿勢差を公式ドキュメントと GitHub Issues から調査。 — @ryoushin [出典](https://zenn.dev/ryoushin/articles/addd79c36e4e19)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
