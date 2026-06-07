---
title: "ChatGPTロックダウンモード登場、Codex CLI更新なし"
summary: "ChatGPTにロックダウンモードと高リスクラベル機能が導入されセキュリティ強化。Codex CLIは0.138.0-alpha.6のまま新リリースなし。GPT Rosalind新機能も検出。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-08
features:
  - "Codex CLI 0.138.0-alpha.6: Rust版Codex CLIの最新アルファリリース（0.138.0系の6番目のプレリリース）"
  - "rusty-v8-v149.2.0: Codex内部で使用するV8エンジンバインディングの更新"
  - "ChatGPT Lockdown Mode: ChatGPTにロックダウンモードと高リスクラベル機能を導入、セキュリティ強化"
  - "GPT Rosalind新機能: GPT Rosalindに新しい機能を追加"
codex_review: "ロックダウンモードは派手さはないが、ChatGPTが企業の基盤になるなら避けて通れない地味に重要な一手だと思う。反面、Codex側の動きが薄く、全体としては期待先行でやや過剰評価気味でもある。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI — 新リリースなし（v0.138.0-alpha.6が最新）

前回報告のv0.138.0-alpha.6（6月6日）から新たなリリースはなし。正式版v0.137.0が引き続き最新の安定リリース。

- [v0.138.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.6)
- [v0.137.0](https://github.com/openai/codex/releases/tag/rust-v0.137.0)

### rusty-v8-v149.2.0

Codex内部で使用するV8エンジンバインディングが v149.2.0 に更新された（6月6日）。リリースノートの詳細は未公開。

- [rusty-v8-v149.2.0](https://github.com/openai/codex/releases/tag/rusty-v8-v149.2.0)

### ChatGPT Lockdown Mode

ChatGPTにロックダウンモードと高リスクラベル機能が導入された。セキュリティ強化を目的とした新機能。詳細情報は限定的。

### GPT Rosalind新機能（前回から継続）

GPT Rosalindへの新機能追加が検出されている。詳細情報は引き続き未取得。

## コミュニティの反応

### ChatGPT Lockdown Mode

X/Twitter上で品質基準を満たす個人投稿は該当なし。

### Codex CLI

X/Twitter上で品質基準を満たす個人投稿は該当なし。

### Claude Code vs Codex 設計思想比較

#### Tips

> Claude Code（Opus 4.7）とCodex（GPT-5.5）を使い比べて見えた設計思想の違いを考察。エージェントフレームワークとモデル差の両面から分析（前回から継続） — ターク [Zenn](https://zenn.dev/tark_ann/articles/e8b09c6db73bfb)

### Opus 4.8 vs GPT-5.5 比較検証

#### Tips

> Opus 4.8とGPT-5.5のeffortの効き方を帰納的に検証。Opus 4.8は「思考回数」で、GPT-5.5は「思考量」で性能が増加するという違いを発見 — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-23-opus48-gpt55-effort-effects)

> Reasoning Effort「Low」は逆効果 — Opus 4.8とGPT-5.5を720試行で比較（前回から継続） — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-21-opus48-gpt55-reasoning-effort)

### Codex ChatGPT統合・安全ガイド

#### Tips

> CodexがChatGPTに統合されることを受け、400Mユーザー向けの安全ガイド「10の鉄則」を公開 — lhjjjk4 [Qiita](https://qiita.com/lhjjjk4/items/5b7d70aa34777db13cb9)

### OpenAI on Amazon Bedrock

#### Tips

> OpenAI on Amazon Bedrock入門として、GPT-5.5・Codex・Managed Agentsの実装方法を解説（前回から継続） — kai_kou [Qiita](https://qiita.com/kai_kou/items/52ede47d75d3976bb2da)

> Amazon Bedrock AgentCore RuntimeのmicroVM内でCodex CLIを動かす方法を解説（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/agentcore-codex-cli-runtime)

### AIエージェント運用

#### Tips

> 複数AIエージェント（Claude Code・Codex等）を並行管理するRust製ターミナルマルチプレクサ「Herdr」を紹介（前回から継続） — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/45708cc45a7a7c)

> AIが書いた15本の自動化スクリプトを別のAIに監査させたところ、全15本が同じ3箇所でバグっていた事例を共有（前回から継続） — ピクト [Zenn](https://zenn.dev/pikuto/articles/ai-code-correlated-blindspot)

### OpenAI Frontier / AIスーパーアプリ戦略

#### Tips

> OpenAI Frontierの3人チームで5ヶ月間「人間はコードを書かない・レビューもしない」を実践した極限harness運用を紹介（前回から継続） — AIウォッチ [Zenn](https://zenn.dev/aiwatch_jp/articles/openai-frontier-extreme-harness)

> OpenAIがChatGPT・Codex・Atlasを統合した「AIスーパーアプリ」を目指す構造変化を一次情報から分析（前回から継続） — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/426d30b2fd82da)

### LLM設計・コスト

#### Tips

> LLMが間違ってもユーザーが気づけない領域に汎用モデルを使うべきでないという設計判断を寿司チャットボットの例で解説 — Cosoado [Qiita](https://qiita.com/Cosoado/items/389a51f6db6053d2b1ac)

> 推論モデルの「推論トークン」で課金が膨らむ問題について、usageで実コストを測る方法を解説 — 浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/2b4cb35ad92a9f)

### ChatGPTアカウントBAN

#### Tips

> ChatGPTアカウントBAN体験記。OpenAIへのデータ送信内容の自己判断の重要性を指摘（前回から継続） — 逆転ちゃん [Zenn](https://zenn.dev/gyaku10chan/articles/627789d92f727c)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
