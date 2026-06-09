---
title: "Codex CLI 0.139.0安定版リリース、Web検索・MCP互換性向上"
summary: "Codex CLI 0.139.0安定版が公開。コードモードでのスタンドアロンWeb検索、oneOf/allOf対応によるMCPツール互換性向上など主要機能を追加。0.140.0-alpha.1の開発も開始。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-10
features:
  - "Codex CLI 0.139.0 (安定版): コードモードでのスタンドアロンWeb検索、oneOf/allOf対応によるMCPツール互換性向上、codex doctorのエディタ/ページャ環境レポート、プラグインマーケットプレイスのソース表示とキャッシュカタログ対応"
  - "Codex CLI 0.138.0 (安定版): /appコマンドでCLIスレッドをCodex Desktop (macOS/Windows)にハンドオフ可能に"
  - "Codex CLI 0.140.0-alpha.1: 次期バージョンのアルファ開発開始（6月9日）"
codex_review: "派手なのはWeb検索だが、本丸はoneOf/allOf対応によるMCP互換性の底上げだと思う。過剰に話題化する類いではないが、CLIが実務の接続ハブへ一段進んだ感じがあり、かなり地味に重要だ。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.139.0

6月9日に安定版がリリースされた。主な新機能は以下の通り。

- **コードモードでスタンドアロンWeb検索**: ネストされたJavaScriptツールコールからも直接Web検索を呼び出し、プレーンテキストの検索結果を受け取れるようになった ([#26719](https://github.com/openai/codex/pull/26719))
- **oneOf/allOf対応**: ツールおよびコネクタの入力スキーマで`oneOf`/`allOf`が保持されるようになり、大規模スキーマのコンパクト化時にもより多くの浅い構造が残るよう改善。MCPツールとの互換性が向上 ([#24118](https://github.com/openai/codex/pull/24118), [#27084](https://github.com/openai/codex/pull/27084))
- **codex doctor改善**: エディタとページャの環境詳細をローカルレポートに含めるようになった。JSON出力では値をレダクト ([#27081](https://github.com/openai/codex/pull/27081))
- **プラグインマーケットプレイス**: `codex plugin marketplace list --json`でマーケットプレイスソースが表示されるようになり、キャッシュ済みリモートカタログからの高速返却に対応 ([#27009](https://github.com/openai/codex/pull/27009), [#26932](https://github.com/openai/codex/pull/26932))

バグ修正では、`resume --last`/`fork --last`の引数解釈、MCPスタートアップ警告のスレッドスコープ化、画像編集時のファイルパス指定、チルダ含みURLのリンク化、スレッドリセット時のクラウド要件保持、サンドボックスのプロキシネットワーク適用など多数。

- [v0.139.0リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.139.0)

### Codex CLI 0.138.0

前回アルファ段階だった0.138.0が安定版として公開された。`/app`コマンドでCLIスレッドをCodex Desktop（macOS/Windows）にハンドオフする機能が目玉。

- [v0.138.0リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.138.0)

### Codex CLI 0.140.0-alpha.1

6月9日に次期バージョンのアルファ開発が開始された。リリースノートは「Release 0.140.0-alpha.1」のみで具体的な変更内容は未公開。

- [v0.140.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.1)

## コミュニティの反応

### Codex vs Claude Code比較

#### Tips

> Claude CodeとCodexを実際に使い比べ、サンドボックス設計やファイル操作の粒度など設計思想の違いを考察。Claude Code (Opus 4.7) とCodex (GPT-5.5) の振る舞いの差はエージェントハーネスとモデル特性の両方に起因すると分析 — ターク [Zenn](https://zenn.dev/tark_ann/articles/e8b09c6db73bfb)

### 複数AIエージェント並行運用

#### Tips

> Rust製ターミナルマルチプレクサ「Herdr」の紹介。Claude CodeやCodexなど複数エージェントの並行実行時に、完了状態や承認待ちを一元管理できる — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/45708cc45a7a7c)

### OpenAI Frontier開発手法

#### Tips

> OpenAI Frontierチームが3人で5ヶ月間「人間はコードを書かない・レビューもしない」を実践した事例を深掘り。モデルではなくハーネス設計が成果を左右するという知見 — AIウォッチ [Zenn](https://zenn.dev/aiwatch_jp/articles/openai-frontier-extreme-harness)

### OpenAIスーパーアプリ戦略

#### Tips

> ChatGPT・Codex・Atlasを統合した「AIスーパーアプリ」構想を一次情報から分析。Codexを実行レイヤーとして位置づける戦略を読み解く — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/426d30b2fd82da)

### Codex CLI × クラウド連携

#### Tips

> Amazon Bedrock AgentCore RuntimeのmicroVM内でCodex CLIを動かす手順を解説。agent.pyからcodex execにリクエストを渡す構成 — takao2704 [Zenn](https://zenn.dev/takao2704/articles/agentcore-codex-cli-runtime)

### AIコード品質

#### Tips

> Claude Codeが書いた15本の自動化スクリプトをCodex CLI (GPT系) とGemini CLIに監査させたところ、全15本が同じ3パターンでバグを持っていたという検証結果 — ピクト [Zenn](https://zenn.dev/pikuto/articles/ai-code-correlated-blindspot)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
