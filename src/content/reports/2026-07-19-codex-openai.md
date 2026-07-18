---
title: "Codex CLI 0.144.6 — GPT-5.6同梱指示と文脈長272kを修正"
summary: "本日のCodex/OpenAI公式は、Codex CLI 0.144.6 で GPT-5.6 Sol/Terra/Luna の同梱指示を更新し、コンテキストウィンドウを272,000トークンへ修正したバグ修正版が唯一の user-facing 変更。コミュニティ側は本トピックに該当する新規反応を取得できなかった。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-19

features:
  - "Codex CLI 0.144.6 GPT-5.6同梱指示更新・コンテキストウィンドウ272,000トークン修正"
codex_review: "正直かなり地味な更新だが、文脈長の表記修正と同梱指示の手当ては、開発者体験の信頼性を支える基礎工事としては重要だ。派手な新機能よりも、こういう足回りの整備を継続できるかがツールの格を分ける。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.144.6 — GPT-5.6 の同梱指示を更新し文脈長を272,000トークンに修正

- GPT-5.6 の Sol / Terra / Luna 向けに同梱している指示（bundled instructions）をリフレッシュ。
- 3モデルのコンテキストウィンドウ表記を **272,000トークン** に修正するバグ修正版。
- 0.144 系へのバックポート（#33972）と、GPT-5.6 のプロンプト・文脈長に絞ったホットフィックス（#34009）で構成される。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.144.6)

なお Codex CLI では `rust-v0.145.0-alpha.23` までの alpha 内部ビルドが継続しており、これ以外に user-facing な安定版リリースはありません。

## コミュニティの反応

本トピック（Codex CLI 0.144.6）に該当する新規のコミュニティ反応は取得できませんでした。X 検索では、個人ユーザーによる同梱指示更新・コンテキストウィンドウ修正に関する実体験投稿は見つかりませんでした（公式・企業アカウントの投稿は除外対象）。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Codex CLI 0.144.6](https://github.com/openai/codex/releases/tag/rust-v0.144.6)
