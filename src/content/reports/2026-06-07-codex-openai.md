---
title: "AWS Bedrock提供開始、ChatGPT Dreaming登場"
summary: "OpenAIフロンティアモデルとCodexがAWS Bedrockで一般提供開始。ChatGPTに新メモリ機能「Dreaming」が導入。Codex CLI v0.138.0-alpha.6まで進行、正式リリースなし。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-07
features:
  - "Codex CLI v0.138.0-alpha.6: 最新アルファリリース（2026-06-06公開、v0.137.0ベースの改善継続）"
  - "Codex CLI v0.137.0: TUI F13-F24キーバインド対応、エンタープライズ月額クレジット制限表示、リモートコントロールペアリングRPC、プラグインJSON出力・リモートカタログ、マルチエージェントv2改善、Web/画像ツール拡張"
  - "OpenAI Frontier Models and Codex on AWS: OpenAIのフロンティアモデルとCodexがAWSで利用可能に"
  - "ChatGPT Memory Dreaming: ChatGPTのメモリに「Dreaming」機能を導入"
  - "GPT Rosalind新機能: GPT Rosalindに新たな機能を追加"
  - "次世代オーディオモデル: OpenAIの次世代オーディオモデルの発表"
  - "ChatGPT Health: 医療・ヘルスケア向けChatGPT機能の導入"
  - "ChatGPT for Clinicians: 臨床医向けChatGPT機能の改善"
  - "EVMBench: EVM関連の新ベンチマークの発表"
  - "Project Aardvark: OpenAIの新プロジェクト「Aardvark」の発表"
codex_review: "いちばん効くのはAWS Bedrock対応で、Azure一極から外れたことでOpenAIはようやく本格的なインフラ標準に近づいた印象です。Dreamingは派手だが、実際には地味な記憶運用の改善こそ継続利用を左右する重要点だと思う。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.138.0-alpha.5〜6（前回alpha.4から継続）

v0.138.0-alpha.5（6月5日）とalpha.6（6月6日）がリリースされた。リリースノートはいずれも詳細未公開。v0.137.0以降の新たな正式バージョンのリリースはなし。

- [v0.138.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.6)
- [v0.138.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.5)

### OpenAIフロンティアモデルとCodexがAWS Bedrockで一般提供開始

OpenAIのフロンティアモデル（GPT-5.5等）とCodexコーディングエージェントがAmazon Bedrockで利用可能になった。Azure独占が終了し、マルチクラウド展開が本格化。

### ChatGPT Memory「Dreaming」機能の導入

ChatGPTのメモリシステムに「Dreaming」（V3）が導入された。従来のメモリの蓄積・劣化問題に対し、自動的にメモリを再合成・統合するアプローチを採用。効率が約5倍向上するとされる。

### その他のサイトマップ検出トピック

以下のトピックがOpenAI公式サイトのサイトマップから検出されたが、詳細情報は未取得。

- **GPT Rosalind新機能**: GPT Rosalindへの新機能追加
- **次世代オーディオモデル**: OpenAIの次世代オーディオモデル
- **ChatGPT Health / ChatGPT for Clinicians**: 医療・ヘルスケア向け機能の導入・改善
- **EVMBench**: EVM関連の新ベンチマーク
- **Project Aardvark**: OpenAIの新プロジェクト

## コミュニティの反応

### OpenAIフロンティアモデルとCodex on AWS

#### ポジティブ

> OpenAIモデルとCodexがAWS Bedrockで一般提供開始、マルチクラウド化が加速したとニュースroundupで共有 — @tetumemo

> 「This is enormous for AWS. Bedrock has been pitching model choice from day 1. Adding OpenAI was the final frontier」と高評価 — @BrendanFalk

> 「OpenAI models and Codex are now on AWS Bedrock. Big unlock for enterprise teams already building on AWS」とエンタープライズ視点で評価 — @hqmank

> 「BIG AI MOVES TODAY」のリストに「OpenAI models + Codex on AWS, ending Azure exclusivity」と記載 — @Amank1412

#### Tips

> OpenAI on Amazon Bedrock入門として、GPT-5.5・Codex・Managed Agentsの実装方法を解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/52ede47d75d3976bb2da)

> Amazon Bedrock AgentCore RuntimeのmicroVM内でCodex CLIを動かす方法を解説（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/agentcore-codex-cli-runtime)

### ChatGPT Memory Dreaming

#### ポジティブ

> ChatGPTの新メモリ「Dreaming V3」登場。自動合成・5倍効率化で古い記憶問題解決と評価 — @Arslandev97

#### Tips

> 「Dreaming」新メモリで会議議事録作成が劇的に短縮。保存プロンプト付きで実践共有 — @sachiAi_comp

> 「Dreaming」メモリアップデートで基本情報繰り返し入力不要に。3つの変化点を解説 — @sachiAi_comp

> Dreaming V3メモリを活用し、CodexとObsidianの連携で個人記憶を同期する方法を紹介 — @daniel_mac8

> 長期メモリ自作者向けに「Dreaming」の再合成アプローチを解説。忘却ではなく書き直しが優位と指摘 — @AI_masaou

### EVMBench

#### ポジティブ

> Agentic AIがEVMBenchで75%達成した点を「印象的な進展」と評価 — @CoreChrisFlores

> 自身が訓練中のモデルがEVMBenchでDeepseekを上回った結果を共有 — @LuboslavLubeno1

### Codex CLI v0.137.0 / v0.138.0-alpha

X/Twitter上で品質基準を満たす個人投稿は該当なし。

### Claude Code vs Codex 設計思想比較

#### Tips

> Claude Code（Opus 4.7）とCodex（GPT-5.5）を使い比べて見えた設計思想の違いを考察。エージェントフレームワークとモデル差の両面から分析 — ターク [Zenn](https://zenn.dev/tark_ann/articles/e8b09c6db73bfb)

> GitHub Copilotの従量課金を実測し、Claude Code・Codexと同一モデルで比較。Opus 4.8をCopilotで使うとClaude Codeの1.5〜2.0倍コスト高になる結果 — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-22-github-copilot-ai-credits)

### AIエージェントマルチプレクサ「Herdr」

#### Tips

> Claude CodeやCodexなど複数AIエージェントを並行管理するRust製ターミナルマルチプレクサ「Herdr」を紹介。承認待ち状態の可視化やセッション永続化が特徴 — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/45708cc45a7a7c)

### AIコード監査とCodex CLI活用

#### Tips

> Claude Codeが書いた15本の自動化スクリプトをCodex CLI（GPT系）とGemini CLIで監査したところ、全15本が同じ3箇所でバグっていた事例を共有（前回から継続） — ピクト [Zenn](https://zenn.dev/pikuto/articles/ai-code-correlated-blindspot)

> Codex CLIだけAPIキー運用にするためにCODEX_HOMEを分ける方法（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/codex-cli-api-key-auth)

### OpenAI Frontier / AIスーパーアプリ戦略

#### Tips

> OpenAI Frontierの3人チームで5ヶ月間「人間はコードを書かない・レビューもしない」を実践した極限harness運用を紹介（前回から継続） — AIウォッチ [Zenn](https://zenn.dev/aiwatch_jp/articles/openai-frontier-extreme-harness)

> OpenAIがChatGPT・Codex・Atlasを統合した「AIスーパーアプリ」を目指す構造変化を一次情報から分析（前回から継続） — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/426d30b2fd82da)

### LLMゲートウェイ・API活用

#### Tips

> 複数LLMプロバイダーをOpenAI互換API 1つに束ねるゲートウェイ「OrcaRouter」の実装解説（前回から継続） — koki-kobayashi-flashlabs [Qiita](https://qiita.com/koki-kobayashi-flashlabs/items/8da9c5182457e34e03fb)

### OpenAI全般

#### Tips

> Reasoning Effort「Low」は逆効果 — Opus 4.8とGPT-5.5を720試行で比較（前回から継続） — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-21-opus48-gpt55-reasoning-effort)

> ChatGPTアカウントBAN体験記。OpenAIへのデータ送信内容の自己判断の重要性を指摘 — 逆転ちゃん [Zenn](https://zenn.dev/gyaku10chan/articles/627789d92f727c)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
