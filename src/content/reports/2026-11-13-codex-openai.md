---
title: "Codex CLI 0.168.0安定版と0.170系アルファ"
summary: "Codex CLIの0.168系で最初の安定版0.168.0が公開された。0.167.2にはVertex AI利用時の変更点がリリースノートとして追記された。0.170系アルファもalpha.2〜alpha.4の3版が出たが、変更内容は書かれていない。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-13

features:
  - "Codex CLI 0.168.0"
  - "Codex CLI 0.167.2 リリースノート追記"
  - "Codex CLI 0.170.0-alpha.2〜alpha.4"
codex_review: "派手な新機能は見えないが、Vertex AIでツール更新を逐次送る変更は、連携先ごとの使い勝手を詰める地味な改善として好印象だ。一方、安定版もアルファも変更点が空欄では、利用者が更新の価値を判断しにくい。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.168.0

0.168 系で最初の安定版 0.168.0 が 2026-11-12 21:29 (UTC) に公開された。公開者は imac-oai。リリースノートは「Release 0.168.0」の一文だけで、変更内容は書かれていない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.168.0)

### Codex CLI 0.167.2 リリースノート追記

0.167.2 のリリースノートに変更内容が追記された。リリースの更新日時は 2026-11-11 22:46 (UTC)。

- Google Cloud Vertex AI を使うとき、ツールの更新をインクリメンタルに送る動作が既定になった。オプトアウトするには、`config.toml` の `[features]` に `incremental_tools_legacy_gcp = false` を設定する（[#60617](https://github.com/openai/codex/pull/60617)、[#60848](https://github.com/openai/codex/pull/60848)）

差分の範囲は `rust-v0.167.1...rust-v0.167.2`。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.167.2)

### Codex CLI 0.170.0-alpha.2〜alpha.4

0.170.0 系のアルファ版が 3 版公開された。どの版もリリースノートは「Release 0.170.0-alpha.N」の一文だけで、変更内容は書かれていない。

| バージョン | 公開日時 (UTC) | 公開者 |
|---|---|---|
| 0.170.0-alpha.2 | 2026-11-12 01:34 | github-actions[bot] |
| 0.170.0-alpha.3 | 2026-11-12 19:37 | github-actions[bot] |
| 0.170.0-alpha.4 | 2026-11-12 19:55 | imac-oai |

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4)

## コミュニティの反応

### Codex CLI 0.168.0

直近 7 日間の X の投稿を検索したが、0.168.0 に触れた投稿は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.167.2 リリースノート追記

X を検索したが、Vertex AI でのインクリメンタル送信に触れた投稿は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.170.0-alpha.2〜alpha.4

X を検索したが、該当する投稿は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.168.0](https://github.com/openai/codex/releases/tag/rust-v0.168.0)
- [rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2)
- [rust-v0.170.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.2)
- [rust-v0.170.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.3)
- [rust-v0.170.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4)
- [PR #60617](https://github.com/openai/codex/pull/60617)
- [PR #60848](https://github.com/openai/codex/pull/60848)
