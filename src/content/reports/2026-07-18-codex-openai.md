---
title: "Codex SDK が Amazon Bedrock のカスタムトランスポートに対応"
summary: "本日のCodex/OpenAI公式は、Codex SDK python-v0.144.4 で Amazon Bedrock プロバイダのカスタムトランスポート対応（base_url / auth / http_headers の上書き、AWS署名なしの bearer 認証）が入った点が唯一の user-facing 変更。Codex CLI は alpha 内部ビルドが継続中。コミュニティ側は本日、該当する新規反応を取得できなかった。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-18

features:
  - "Codex SDK python-v0.144.4 Amazon Bedrock カスタムトランスポート対応"
codex_review: "派手さはないが、Bedrock接続を現場都合でねじ込める余地が増えたのは実務的にかなり重要だ。とはいえ新市場を動かす話ではなく、評価はやや玄人向けにとどまる。"
codex_importance: 2
---

## 公式アップデート

### Codex SDK python-v0.144.4 — Amazon Bedrock カスタムトランスポート対応

- 組み込みの `amazon-bedrock` プロバイダで、AWS プロファイル・リージョンに加えて `base_url` / `auth` / `http_headers` を上書きできるようになった。
- AWS リクエスト署名を適用せず、コマンドベースの bearer 認証と設定済みエンドポイントを利用可能に。デフォルトの Bedrock 構成では従来どおりリージョン別エンドポイント解決を維持する。
- Bedrock アカウントの `credentialSource` enum を `usesCodexManagedCredentials` 真偽値へ置き換え、コマンド認証やその他の外部管理構成を一貫して報告できるように変更。

[ソース](https://github.com/openai/codex/releases/tag/python-v0.144.4)

なお Codex CLI では前回レポート以降、`rust-v0.145.0-alpha.16`〜`alpha.22` の alpha 内部ビルドが継続しており、user-facing な安定版リリースはありません。

## コミュニティの反応

本日は該当する新規のコミュニティ反応を取得できませんでした（X 検索は該当なし、Zenn / Qiita は取得失敗）。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Codex SDK python-v0.144.4](https://github.com/openai/codex/releases/tag/python-v0.144.4)
