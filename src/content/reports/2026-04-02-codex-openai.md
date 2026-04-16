---
title: "Codex CLI 0.119.0-alpha.2公開、$122B調達への反応続く"
summary: "Codex CLI v0.119.0-alpha.2がリリース。OpenAI $122B資金調達に対するコミュニティの賛否両論が継続。日本語コミュニティではCodexプラグインによるマルチAI連携記事がさらに増加。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-02
features:
  - "OpenAI $122B資金調達"
  - "Codex CLI 0.118.0リリース"
  - "Codex CLI 0.119.0-alpha.1/alpha.2リリース"
codex_review: "資金調達の巨大さは話題先行でやや過剰評価気味だが、私にはむしろCodex周辺で連携・配布の実務知見が日本語圏で厚くなってきた点のほうが地味に重要に映る。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.119.0-alpha.2 プレビュー公開

Codex CLIの次期バージョンのアルファプレビュー第2弾v0.119.0-alpha.2が公開された。詳細な変更内容は未公開。alpha.1（3月31日）に続く短期間でのイテレーション。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.2)

### Gradient Labs事例: GPT-4.1/GPT-5.4 mini・nanoで銀行カスタマーサポートを自動化

Gradient LabsがGPT-4.1とGPT-5.4 mini・nanoを使い、銀行の顧客対応ワークフローを低レイテンシ・高信頼性でAIエージェント化した事例が公式ブログに掲載された。

[ソース](https://openai.com/index/gradient-labs)

### OpenAI $122B資金調達（前回から継続）

フロンティアAIのグローバル展開、次世代コンピュート投資、ChatGPT・Codex・エンタープライズAIの需要拡大に向けた$122Bの新規資金調達。前日に続き詳細情報が拡散中。

[ソース](https://openai.com/index/accelerating-the-next-phase-ai)

### Codex CLI 0.118.0 安定版（前回から継続）

Windows sandboxのOS-levelプロキシ、device code flowログイン、`codex exec`のstdin+プロンプト同時指定、動的ベアラートークン更新などを含む安定版。前日レポートに詳細あり。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.118.0)

## コミュニティの反応

### OpenAI $122B資金調達

#### ポジティブ

> OpenAIの1220億ドル（約19兆円）資金調達を完了、評価額8520億ドル。投資家リスト、収益規模、インフラ多角化、AIスーパーアプリ構想を詳述しAIインフラとしての地位を高評価 — @FABYMETAL4 [X](https://x.com/i/status/2039097059018731546)

> OpenAIが追加調達で総額$120B超え。Soraの継続やモデル公開をTipsとして希望 — @umiyuki_ai [X](https://x.com/i/status/2039226225273831699)

> Amazon/NVIDIA/SoftBank/Microsoftら戦略投資家多数参加、個人投資家30億ドル超参加を共有 — @bioshok3 [X](https://x.com/i/status/2039153149857202522)

#### ネガティブ

> 19兆円資金調達を「人類史上最大規模の投機対象」と評し投機性を指摘 — @knshtyk [X](https://x.com/i/status/2039239088260448632)

> OpenAI史上最大調達直後でも二次市場で株価下落、Anthropicへのシフトの兆しを指摘 — @Biz_zatukora [X](https://x.com/i/status/2039450420985401360)

### Claude Code × Codex プラグイン連携（前回から継続・記事増加）

#### 解説

> OpenAI Codex Plugins & Triggers入門 — GitHub Issue自動修正からPR作成まで：Codexに追加されたPluginsとTriggersの2機能でGitHub Issue駆動の自動修正フローを解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/d18cd5d6e14fa2761740)

> Claude Code × OpenAI Codex プラグイン完全ガイド — セットアップから実践的な使い方まで：openai/codex-plugin-ccのセットアップ手順と実践的な使い方を網羅 — youishikawa0718 [Qiita](https://qiita.com/youishikawa0718/items/cca8cfcb0a5ebdccdba2)

> MCPで異なるAIモデルを連携させる実践ガイド — Claude Code × Codex CLI (GPT-5.4)：MCPプロトコルでClaude CodeとCodex CLIを連携させるワークフローを解説 — tsunamayo7 [Qiita](https://qiita.com/tsunamayo7/items/545a21a13f3b758a7d70)

> Claude CodeにCodexプラグインを入れて、2つのAIに相互レビューさせる：Claude Codeワークフロー内でCodexにレビューや作業委譲を行うアプローチ — Na [Zenn](https://zenn.dev/yuche/articles/codex-plugin-claude-code)

> Claude Codeのプラグインcodex-plugin-ccがOpenAI公式から登場した：3モデル使い分けと公式プラグインで自前連携が不要になった部分を解説 — shiro [Zenn](https://zenn.dev/shiro_coral/articles/99416f51f43d4a)

### Codex アプリ活用（新規）

#### Tips

> Codex アプリで Windows環境＆非エンジニア向けにもいい感じでツールを配布する：CLIツールを非エンジニアに渡すハードルをCodexアプリで解消する方法 — kumewata [Zenn](https://zenn.dev/kumewata/articles/codex-app-windows-tool-distribution)

### Codex Pluginガイド（前回から継続）

#### 解説

> Codex Plugin完全ガイド：Skillとの違い・使い方・自作方法【2026年】：v0.117.0で正式リリースされたPlugin機能の役割、基本構造、導入手順、自作の最小構成を技術的に整理 — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-plugin-guide)

### GPT-5.4 UI生成プロンプト実践（前回から継続）

#### Tips

> 【OpenAI公式】GPT-5.4のUI生成を激変させるプロンプト実践とモダンUI設計ガイド：構造化・再利用・例示・コンテキスト付与など、UI生成に特化したプロンプトエンジニアリング手法を整理 — いもふけ [Zenn](https://zenn.dev/imohuke/articles/openai-ui-upgrade)

### 推論モデルのコスト最適化（前回から継続）

#### Tips

> 推論モデルのコスト最適化をdiffで追跡する — llm-devproxy v0.4：o3/o4-miniでプロンプトの書き方によるコスト差（最大約10倍）を実測 — ash [Zenn](https://zenn.dev/ash4/articles/8973f300141afb)

### AIエージェント時代の業界動向（前回から継続）

#### 解説

> AIエージェント時代、業界トップの発言を翻訳・まとめてみた — luoxi [Zenn](https://zenn.dev/luoxi/articles/from-reasoning-to-agents-industry-voices)

### OpenAI Agents SDK実践ガイド（前回から継続）

#### 解説

> OpenAI Agents SDK 実践ガイド——Pythonでマルチエージェントワークフローを構築する — 緒方 [Zenn](https://zenn.dev/bluecat/books/ad31cb6e65673c)

### ハーネスエンジニアリング（前回から継続）

#### 解説

> 「そのSkill、本当に意味ありますか？」Skillのレビューを通じて学ぶハーネスエンジニアリング入門 — kauchi [Zenn](https://zenn.dev/kauchi/articles/learning-harness-engineering-by-skill-review)

### Sora提供終了と移行先（前回から継続）

#### 解説

> さらばSora。動画生成AIの「産業シフト」を読み解き、次世代APIへ移行するための技術スタック — ケン吉 [Zenn](https://zenn.dev/headwaters/articles/0b232a955c458a)

### OpenAI SDK proxiesエラー対処（前回から継続）

#### Tips

> OpenAI SDK proxiesエラーの完全解決ガイド【httpx 0.28破壊的変更】 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/openai-sdk-proxies-httpx-error)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
