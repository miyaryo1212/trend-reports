---
title: "v2.1.231でMCP OAuthのリダイレクト不一致を修正"
summary: "Claude Code v2.1.231 が公開され、Slack など事前登録済み OAuth クライアントを使う MCP サーバーでのサインイン失敗が修正されました。あわせて Anthropic の Frontier Red Team によるマルチエージェント環境の失敗モード検証が話題に上っています。X 上では MCP OAuth まわりの Tips が 1 件見つかりました。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-14

features:
  - "Claude Code v2.1.231"
  - "MCP OAuthのリダイレクトURI不一致の修正"
  - "Anthropic Frontier Red Team マルチエージェントシステムの研究記事"
codex_review: "修正自体は地味ですが、MCPを実運用する開発者には確実に効く類いで、こういう認証周りの詰まりを潰す更新は過小評価されがちです。Red Teamの研究も、派手さ以上に今後のエージェント設計の足場として重要だと思います。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.231 (2026-08-13)

修正 1 件のみのリリースです。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.231)

#### MCP OAuthのリダイレクトURI不一致の修正

Slack のように事前登録済みの OAuth クライアントを使う MCP サーバーで、リダイレクト URI の不一致により MCP OAuth のサインインが失敗する問題が修正されました。

### Anthropic Frontier Red Team: マルチエージェントシステムの研究記事

Anthropic の Frontier Red Team が、複数の AI エージェントが同一環境を共有する状況で生じる問題を実験で検証した研究記事を公開しました。取り上げられているのは、協調の失敗、同調 (他エージェントの主張への追従)、認識論的な脆弱性、目標の衝突という 4 つの問題です。

## コミュニティの反応

### Claude Code v2.1.231 / MCP OAuthのリダイレクトURI不一致の修正

#### Tips

> Claude Code で MCP の OAuth 認証が弾かれるとき、`localhost` と `127.0.0.1` の違いが原因かもしれない。v2.1.229 で厳格な認可サーバー向けに `127.0.0.1` を使うよう修正されており、繋がらないときに効く。 — @stepillion [出典](https://x.com/stepillion/status/2087679273519992902)

ポジティブ・ネガティブに該当する個人ユーザーの投稿は見つかりませんでした。

### Anthropic Frontier Red Team マルチエージェントシステムの研究記事

該当なし。直近 7 日間 (2026-08-06 以降) の X 投稿を対象に検索したところ、この研究に関する要約・考察の投稿は複数見られましたが、個人ユーザーによる実使用体験・感想に該当するものはありませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
