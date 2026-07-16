---
title: "公式は危険コマンド検知の小パッチのみ、GPT-Red公開が話題に"
summary: "本日のCodex/OpenAI公式は user-facing な新機能なし。Codex CLIは 0.144.5 で危険コマンド検知を強化したパッチと alpha 内部ビルドのみ。コミュニティでは7/15公開の GPT-Red（AIによるレッドチーミング）解説や、Codex App Server の専用UI活用、Codex API の不安定さといった本日固有の話題が出ている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-17

features: []
codex_review: "公式の動きが小粒な日に、GPT-Redのような内向きの安全基盤が話題化するのは興味深い。派手さはないが、危険コマンド検知の改善やAPI不安定報告のほうが現場への影響はむしろ大きい気がする。"
codex_importance: 3
---

## 公式アップデート

本日、user-facing な新機能・仕様変更の公式発表はありません。

Codex CLI では前回レポート以降、`rust-v0.145.0-alpha.15`〜`alpha.19` の alpha 内部ビルドが続いているほか、安定版パッチ `0.144.5` が出ています。`0.144.5` は user-facing なバグ修正を1件含みます。

### Codex CLI 0.144.5 — 危険コマンド検知の強化

- 危険コマンド検知（dangerous-command detection）を改善。強制削除系の `rm` のより多くの形式を検出対象に追加し、コマンドが拒否された際の理由をより明確に提示するようになった（PR #33455）。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.144.5)

## コミュニティの反応

公式の新規動向が乏しいため、本日は前回レポート以降に出た本日固有の話題に絞る。GPT-5.6 (Sol/Terra/Luna) の比較・検証は前回詳述済みのため割愛する。

### GPT-Red（AIによるレッドチーミング、7/15公開）

#### 解説

> 2026年7月15日にOpenAIが公開した GPT-Red の解説。AI自身が攻撃を行うレッドチーミングシステムで、従来は人間が担っていたセキュリティテストの一部を自動化し、より多くの攻撃パターンを発見することが狙い。ChatGPT/APIで提供されるモデルではなく、OpenAI内部でモデルの安全性を評価・強化するための仕組みと整理。 — @Jun Miyake [出典](https://zenn.dev/headwaters/articles/90f759b159c107)

> GPT-Redの公式発表を3分速報として解説。 — @kinamocchi_tech [出典](https://qiita.com/kinamocchi_tech/items/17bc433909ea7eca47c6)

### Codex App Server（専用UIハーネス）

#### Tips

> Codex App Server の勘所は、Codexの作業を「その仕事に必要な状態と操作を備えた専用UI」へ変換できること。会話をそのまま並べるのではなく、生成したHTML案を派生グラフで見せ、生成中も追加指示を受け付け、検証済みの案だけを次工程の起点にする、というカスタムハーネスの実装例。 — @Ryota Yamaguchi [出典](https://zenn.dev/hashigodaka/articles/codex-app-server-custom-harness)

### Codex CLI / API の運用

#### ネガティブ（落とし穴）

> 最近 OpenAI Codex API が不安定で困っている、との相談。米国ピーク時間帯にタイムアウト・切断・遅延が酷く、リトライしても成功率が低い。ネット環境変更・prompt削減・リトライ設定を試したが改善しないという報告。 — @chennuj022 [出典](https://qiita.com/chennuj022/items/13622865f6779ba30fa6)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDK 入門。ハーネス（制御プレーン）とサンドボックス（実行プレーン）の分離と、ネイティブなサンドボックス実行のサポートにより、ファイル操作・コマンド実行・長期タスクを最小限のインフラで実装できるようになった、と解説。 — @甲斐 甲 [出典](https://zenn.dev/kai_kou/articles/246-openai-agents-sdk-sandbox-harness-guide)

> GPT-5.6 の Hosted Multi-agent を OpenAI Agents SDK で最小構成で動かし、Handoffs / Agents as tools との違いと制約（ベータ／実験的機能である点）を確認。 — @stray dog [出典](https://zenn.dev/straydog/articles/2afe02b4d22007)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
