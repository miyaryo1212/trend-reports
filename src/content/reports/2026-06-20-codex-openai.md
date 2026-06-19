---
title: "Codex CLI 0.142.0-alpha連続リリース、Enterprise支出管理機能発表"
summary: "Codex CLI 0.142.0-alphaが24時間で4本連続リリースされ開発ペースが加速。ChatGPT Enterprise向け利用分析・支出管理機能と健康インテリジェンス強化が6/18に発表された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-20
features:
  - "ChatGPT Enterprise利用分析・支出管理機能: Global Admin Consoleでクレジット消費をユーザー・製品・モデル別に可視化、ワークスペース/グループ/個人レベルの上限設定が可能に（6/18発表）"
  - "ChatGPT健康インテリジェンス強化: GPT-5.5 Instantで緊急性判断・フォローアップ質問・医学用語の平易化を改善、事実性エラー71%削減。262名の医師ネットワークによる検証済み（6/18発表）"
  - "Codex CLI 0.142.0-alpha.3〜alpha.6: 6/18〜6/19に4つのalphaリリースを連続公開し開発が加速（個別の変更点は未公開）"
codex_review: "CLIの連続alphaは勢いよりも足元の粗さを感じさせ、やや過剰に映る。一方で支出管理は派手さはないが、企業導入を本気で広げるならむしろこちらが本丸だ。"
codex_importance: 3
---

## 公式アップデート

### ChatGPT Enterprise利用分析・支出管理機能

6/18発表。Global Admin Consoleにクレジット消費の可視化機能が追加された。ユーザー・製品・モデル別の利用状況を確認でき、ワークスペース・グループ・個人の各レベルで上限設定が可能。

### ChatGPT健康インテリジェンス強化

6/18発表。GPT-5.5 Instantベースで緊急性判断、フォローアップ質問、医学用語の平易化を改善。事実性エラーを71%削減し、262名の医師ネットワークによる検証済み。

### Codex CLI 0.142.0-alpha.3〜alpha.6

前日のalpha.1〜2に続き、6/18〜6/19の約24時間で4つのalphaリリースが連続公開された。リリースノートはいずれも最小限で、個別の変更点は未公開。

- **0.142.0-alpha.3** — 2026-06-19T00:34 UTC
- **0.142.0-alpha.4** — 2026-06-19T09:42 UTC
- **0.142.0-alpha.5** — 2026-06-19T19:43 UTC
- **0.142.0-alpha.6** — 2026-06-19T20:31 UTC

[0.142.0-alpha.6リリース](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.6)

## コミュニティの反応

### Codex CLI実践ガイド

#### Tips

> Codexアプリ・CLI・IDE拡張・GitHub連携・AGENTS.md・スキル・MCPなどを実務の流れに沿って整理した実践入門書を公開。「AIに丸投げするのではなく、人間が判断しCodexに調査・実装・検証を任せる作業設計」がテーマ — まめ [Zenn](https://zenn.dev/soranijimame/books/soraxiom-codex-jissen-guide)

### Codex CLI環境トラブル

#### Tips

> FreeBSD jail上でCodex CLIのdevice-authが失敗する問題を調査。IPv6到達性との相関を発見し、Node.jsのDNS解決順序変更で暫定回避 — 彦坂 [Zenn](https://zenn.dev/hikosakasohtaro/articles/20260619_codex_freebsd_jail)

> Codex v0.141.0で`web_search = "enabled"`の設定が読めず起動できない互換性問題が発生。OAuth/Cloudflare周りではなく設定ファイルの形式変更が原因 — kiwsdiv [Qiita](https://qiita.com/kiwsdiv/items/0b933342a069cdd1272d)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
