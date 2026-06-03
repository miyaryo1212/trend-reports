---
title: "Codex CLI v0.137.0-alpha.5まで連続リリース、Python SDK b3公開"
summary: "Codex CLI v0.137.0のアルファビルドがalpha.5まで連続リリース。Python SDK 0.1.0b3も公開。AWS Bedrock対応やCodex全職種展開は前回から継続。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-04
features:
  - "Codex CLI 0.137.0-alpha.5"
  - "Codex Python SDK 0.1.0b3"
  - "Codex for Every Role, Tool & Workflow"
  - "Building Self-Improving Tax Agents with Codex"
  - "OpenAI Frontier Models and Codex on AWS"
codex_review: "alpha連打は華やかというより足場固めの慌ただしさが先に立つが、Python SDK b3は地味に重要だ。CLIの話題先行になりがちな中で、開発者接点を増やす布石としては堅実だと思う。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI v0.137.0-alpha.3〜alpha.5

6月2日のalpha.1/alpha.2に続き、6月2〜3日にかけてalpha.3（22:12 UTC）、alpha.4（6/3 01:45 UTC）、alpha.5（6/3 17:52 UTC）が連続リリースされた。リリースノートはいずれも「Release 0.137.0-alpha.X」のみで詳細な変更内容は未公開。加えて、コード署名テスト用のビルド（rust-vsigning-test）も6月3日に公開されている。

- [v0.137.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.3)
- [v0.137.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.4)
- [v0.137.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.5)

### Codex Python SDK 0.1.0b3

Python SDK のベータ3がリリースされた。`pip install openai-codex` でインストール可能。

- [python-v0.1.0b3](https://github.com/openai/codex/releases/tag/python-v0.1.0b3)

### OpenAIフロンティアモデルとCodexがAWS Bedrockで正式提供開始（前回から継続）

OpenAIフロンティアモデル群とCodexがAmazon Bedrockで一般提供中。

### その他の新発表（前回から継続）

- **Codex for Every Role, Tool & Workflow**: Codexの全職種・ワークフロー対応拡大（詳細未確認）
- **Building Self-Improving Tax Agents with Codex**: Codexによる自己改善型税務エージェント構築事例（詳細未確認）

## コミュニティの反応

### OpenAIフロンティアモデルとCodexのAWS Bedrock提供

#### ポジティブ

> 「BIG AI MOVES TODAY」の一つとしてOpenAIモデルとCodexのAWS提供をリストアップ — @Amank1412

> OpenAIフロンティアモデルとCodexがAmazon Bedrock経由でAWSで一般提供開始。企業向けセキュリティ・コンプライアンスの利点を強調 — @WesRoth

#### ネガティブ

> 「Frontier models」とは低品質モデルを指すと皮肉 — @stark4833

#### Tips

> OpenAIフロンティアモデルとCodexがAWSで利用可能になったと簡潔に共有 — @nicdunz

> Amazon Bedrock AgentCore RuntimeのmicroVM内でCodex CLIを動かす方法を解説。agent.pyから`codex exec`を呼び出す構成 — takao2704 [Zenn](https://zenn.dev/takao2704/articles/agentcore-codex-cli-runtime)

> Amazon Bedrock経由で使えるLLMの日本語ベンチマーク性能を比較 — yoheikikuta [Zenn](https://zenn.dev/aws_japan/articles/2026-06-01-bedrock-japanese-eval)

### Codex CLI利用・開発事例

#### Tips

> Hermes DesktopからOpenAI Codexのモデルを使う設定方法。プロバイダタブのサブスクリプション/OAuth設定がポイント — stift2358 [Qiita](https://qiita.com/stift2358/items/8392da1501807e98b994)

> AIコーディングエージェント（Cursor / Claude Code / Codex等）のためのHarness Engineeringとは何か — baskduf [Qiita](https://qiita.com/baskduf/items/3dd7b7bbc349527fb29b)

> Codex CLIだけAPIキー運用にするためにCODEX_HOMEを分ける方法（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/codex-cli-api-key-auth)

### OpenAI全般

#### Tips

> 実運用でReasoning Effortは何に効くのか — Opus 4.8とGPT-5.5を4段階×720試行で徹底比較。GPT-5.5はLowがかえって割高、Opus 4.8のMediumが最もコスパが良いとの結論 — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-21-opus48-gpt55-reasoning-effort)

> 推論モデルの「推論トークン」で課金が膨らむ話。APIレスポンスのusageで実コストを測る方法 — 浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/2b4cb35ad92a9f)

> gpt-oss 120BがGoogle Colabで動作。VRAMが80GBに拡大されたことで大型モデルの実験が容易に — MLBoyだいすけ [Zenn](https://zenn.dev/mlboydaisuke/articles/fc68a5b7f7298f153acf)

> PHPバッチとNotion API、OpenAI APIでMorningレポートを自作 — biahoi [Qiita](https://qiita.com/biahoi/items/f867f42b42e79fceed95)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
