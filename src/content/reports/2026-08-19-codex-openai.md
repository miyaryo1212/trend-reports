---
title: "OpenAIがサイバー能力を理由にRL学習を一時停止"
summary: "次期モデルAstraがPreparedness Frameworkのサイバー「Critical」閾値に達する可能性を受け、OpenAIがRL学習を2週間停止したと公表。同日、13〜17歳向けのChatGPT for TeensとCodeAIとの教育パートナーシップも発表された。Codex CLIはalpha版のみでリリースノートの内容記載はない。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-19

features:
  - "Pacing model development in an era of cyber-critical capabilities"
  - "ChatGPT for Teens"
  - "OpenAI × CodeAI パートナーシップ"
  - "The Defender's Window"
  - "Codex Python SDK v0.147.0"
  - "OpenAI joins PORTS-Pike project"
codex_review: "いちばん面白いのは、性能自慢より先にRL学習を止めた点で、業界の安全アピールとしてはかなり踏み込んでいる。Teens施策は話題先行にも見えるが、教育向けの利用規範づくりとしては地味に効きそうです。"
codex_importance: 4
---

## 公式アップデート

### Pacing model development in an era of cyber-critical capabilities

次期モデル Astra が Preparedness Framework のサイバー領域における「Critical」閾値に達する可能性があるとして、OpenAI は RL 学習を2週間停止し、最大規模のフロンティア RL ランを保留中であると公表しました。

[ソース](https://openai.com/index/pacing-model-development/)

### ChatGPT for Teens

13〜17歳のユーザーを自動判定して割り当てる、学習特化の ChatGPT 体験です。Study Hours、宿題の丸投げを検知するリマインダー、保護者通知の拡張などを標準搭載しています。

[ソース](https://openai.com/index/chatgpt-for-teens/)

### OpenAI × CodeAI パートナーシップ

ChatGPT for Teens と同時に発表された署名パートナーシップ。学生・教師向けに AI リテラシー教材とツールを提供します。

[ソース](https://openai.com/index/chatgpt-for-teens/)

### The Defender's Window

OpenAI-Hugging Face インシデントを受けた Greg Brockman による防御側向けの提言。GPT-5.6 Sol が個人サイトの脆弱性13件を15分で発見し、1時間で修正した事例が公開されています。

[ソース](https://openai.com/index/the-defenders-window/)

### Codex Python SDK v0.147.0

Codex の Python SDK ランタイムが 0.147.0 に更新されました。Rust 版は 0.148.0-alpha.23 までプレリリースが進んでいますが、リリースノートは「Release 0.148.0-alpha.23」の一行のみで変更内容の記載はありません。

[ソース](https://github.com/openai/codex/releases)

### OpenAI joins PORTS-Pike project

南オハイオでの地域投資・数千人規模の雇用支援プロジェクトへの参画を発表しました。

[ソース](https://openai.com/index/ports-pike/)

## コミュニティの反応

### The Defender's Window

#### ポジティブ

> Codex を使って DDoS 攻撃対応と Cloudflare の WAF 設定をスムーズに進め、サポートとのやり取りも効率化できた。 — @devbasu [出典](https://x.com/devbasu/status/2088008995600478417)

> Codex がコードのハードニングで40件以上のセキュリティ欠陥・脆弱性・アーキテクチャ問題を発見・修正し、独立レビューでも高評価だった。 — @JohnBendever [出典](https://x.com/JohnBendever/status/2088795794383982701)

> Codex が LinkedIn 経由で届いた怪しい評価用リポジトリをスキャンして隠しバックドアを発見し、被害を防げた。 — @lynscottjr [出典](https://x.com/lynscottjr/status/2087616554586538290)

> Codex のセキュリティスキャン機能が優秀で、各検出項目に攻撃経路・証拠・修正推奨がまとまっていて理解しやすい。 — @mdiestelberg [出典](https://x.com/mdiestelberg/status/2089623703453581683)

#### ネガティブ

該当なし

#### Tips

該当なし

### ChatGPT for Teens / OpenAI × CodeAI パートナーシップ

#### ポジティブ・ネガティブ・Tips

該当なし（本日ローンチのため、個人ユーザーの実体験投稿はまだ確認できていません）

### Pacing model development in an era of cyber-critical capabilities

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex Python SDK v0.147.0

#### ポジティブ・ネガティブ・Tips

該当なし

### OpenAI joins PORTS-Pike project

#### ポジティブ・ネガティブ・Tips

該当なし

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Codexを「Solが監督、Luna Maxがworker」の構成にする (Zenn)](https://zenn.dev/kimkiyong/articles/a853947d33876a)
- [【Codex】同じ権限承認を毎回求められて作業が止まる時の対処法 (Zenn)](https://zenn.dev/idealive_kmon/articles/codex-approval-loop-prefix-rules)
- [文脈は「増やす」から「絞る」へ - OpenAI Computer History の設計転換 (Zenn)](https://zenn.dev/suwash/articles/openai-web-computer-history-p2_20260815)
