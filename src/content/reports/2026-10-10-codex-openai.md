---
title: "Codex CLI 0.162.1とコスト削減事例"
summary: "Codex CLI 0.162.1 で、複数行の非同期質問による TUI クラッシュと、バックグラウンドサーバーとの設定差による起動失敗を修正した。あわせて、LegalOn がモデルの使い分けで Codex のコストを65%削減した事例と、Asana がブラウザエージェントを76倍安く・5倍速くした事例が紹介された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-10

features:
  - "Codex CLI 0.162.1"
  - "LegalOnのCodex導入事例"
  - "Asanaのブラウザエージェント事例"
codex_review: "CLIの細かな安定性修正は日々の開発体験に効く一方、業界全体を動かす話ではない。むしろモデル選択や履歴・キャッシュの工夫で大幅に原価を下げた事例が面白いが、一次ソース不在では数字の一般化には慎重でいたい。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.162.1

0.162.0 のパッチリリース。バグ修正のみ。

**バグ修正**

- 非同期の質問が複数行のとき TUI がクラッシュする問題を修正。改行を保持し、ハイパーリンクのリンク先も途中で切れずに表示する (#51866)。
- 起動中のバックグラウンドサーバーと CLI の既定値で機能設定が異なる場合に起動に失敗する問題を修正。互換性チェックは、コマンドラインで明示した機能の上書きにだけ適用される (#52648)。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.162.1)

### LegalOnのCodex導入事例

LegalOn は Codex で Astra / Sol / Luna をタスクごとに使い分け、開発速度を落とさずに Codex の1日あたり推定コストを65%削減した。

※ 入力データに、この事例の一次ソースの URL は含まれていない。

### Asanaのブラウザエージェント事例

Asana は Codex で GPT-6 Astra を使い、テストにおいてブラウザエージェントを76倍安く、5倍速くした。

※ 入力データに、この事例の一次ソースの URL は含まれていない (X の投稿では OpenAI が公開した事例として言及されている)。

## コミュニティの反応

### Codex CLI 0.162.1

全体のトーン: 反応は少ない。今回修正された TUI のクラッシュを実際に踏んだという報告が出ている。

#### ポジティブ

該当なし

#### ネガティブ

> 多バイト文字 (中国語) を含む長い質問を表示したところ、TUI が byte index エラーでクラッシュした。`codex resume` で復旧できた — @pawalodi123 [出典](https://x.com/pawalodi123/status/2108401004840718698)

※ 同じ内容の投稿が重複している。0.162.1 で修正された「複数行の非同期質問による TUI クラッシュ」と同種の症状とみられるが、投稿は修正版で解消したかには触れていない。

#### Tips

> 0.162.0 の TUI では、managed Git worktree の作成と一覧ができる (信頼済みのローカルプロジェクトのみ、機能を有効にした場合) — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2108332878430163113)

### LegalOnのCodex導入事例

該当なし

### Asanaのブラウザエージェント事例

全体のトーン: 言及は少ないが、コスト管理の観点から肯定的に取り上げられている。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> AI の原価計算が重要だとして、OpenAI が公開した Asana の事例 (Codex 活用でブラウザエージェントのコストを76分の1、速度を5倍に改善) を紹介。モデルの選定だけでなく、キャッシュ、履歴、フローといった「どう使うか」の最適化が鍵だと、自身の経験を交えて解説している — @saito_smallbiz [出典](https://x.com/saito_smallbiz/status/2108671365050171630)

## ソース

- [GitHub: openai/codex rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)
- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [X: @pawalodi123](https://x.com/pawalodi123/status/2108401004840718698)
- [X: @ethereaglehq](https://x.com/ethereaglehq/status/2108332878430163113)
- [X: @saito_smallbiz](https://x.com/saito_smallbiz/status/2108671365050171630)
