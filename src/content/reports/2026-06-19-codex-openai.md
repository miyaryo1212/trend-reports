---
title: "Codex CLI 0.141.0安定版リリース、0.142.0-alpha開発開始"
summary: "Codex CLI 0.141.0がE2E暗号化リモート実行やMCPプラグイン対応など多数の新機能を含む安定版としてリリース。同日に0.142.0-alpha系列の開発サイクルも開始された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-19
features:
  - "Codex CLI 0.141.0 正式リリース: リモート実行のE2E暗号化Noiseリレー、クロスプラットフォームリモート実行でのネイティブ作業ディレクトリ/シェル保持、エグゼキュータプラグインのstdio MCPサーバー対応+マーケットプレイス発見、TUI入力の自動タイムアウト解決など多数の新機能"
  - "Codex CLI 0.142.0-alpha系列開始: 0.141.0安定版リリースと同日(6/18)にalpha.1・alpha.2を連続リリースし、次期バージョンの開発サイクルに移行"
codex_review: "E2E暗号化やMCP対応は目を引くが、私にはクロスプラットフォームで作業文脈を崩さない改善のほうが重要に映る。CLIが実験道具から業務基盤へ寄っていく、地味だが効くアップデートだ。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.141.0 正式リリース

前日までalpha系列が続いていた0.141.0が、6/18に安定版としてリリースされた。主な新機能は以下の通り。

**新機能:**
- リモート実行が認証済みのE2E暗号化Noiseリレーチャネルに対応（[#26242](https://github.com/openai/codex/pull/26242), [#26245](https://github.com/openai/codex/pull/26245)）
- クロスプラットフォームリモート実行で、エグゼキュータのネイティブ作業ディレクトリとシェルを保持。app-server/exec-server境界を越えたファイルシステム権限パスにも対応（[#27819](https://github.com/openai/codex/pull/27819)ほか）
- エグゼキュータプラグインがstdio MCPサーバーをスレッドごとに起動可能に。マーケットプレイスにcreated-by-meセクションと認証別カタログを追加（[#27870](https://github.com/openai/codex/pull/27870)ほか）
- app-serverクライアントが子スレッド一覧取得、外部エージェントインポートの詳細結果照合、レート制限リセットクレジットの読み取り・利用に対応
- Realtimeクライアントで音声の明示的追加、Codex応答の会話参加方法の制御、起動コンテキストの省略が可能に
- TUI入力プロンプトが無操作時に自動解決するカウントダウン機能を追加

**バグ修正:**
- Hook trust bypassが`codex exec`のスレッド開始・再開で持続するよう修正
- プラグインの認証モード別ルーティングの一貫性向上、App/MCP宣言の重複排除
- Windows sandbox実行で古い資格情報を自動修復、PowerShellのタイムアウト延長
- アイドル状態のexec-serverリレーの接続維持、ユーザー入力による`wait_agent`の即時中断
- バンドルSQLiteをWALリセット破損修正済みバージョンにピン留め
- TLS接続でエンタープライズプロキシのP-521証明書署名をサポート

**パフォーマンス改善:**
- ツール検索のキャッシュ化、リクエスト・履歴のコピー排除により、大規模セッションのレイテンシとメモリ使用量を削減
- プロンプト画像キャッシュを64MiB、フィードバックアップロードを8スレッドに制限

[0.141.0リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.141.0)

### Codex CLI 0.142.0-alpha系列開始

0.141.0安定版と同日の6/18に、次期バージョン0.142.0のalpha.1とalpha.2が連続リリースされた。リリースノートは最小限で、個別の変更点は未公開。

- **0.142.0-alpha.1** — 2026-06-18T05:54 UTC
- **0.142.0-alpha.2** — 2026-06-18T20:52 UTC

[0.142.0-alpha.2リリース](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.2)

## コミュニティの反応

### Codex hooks実践知

#### Tips

> Codex hooksのハマりどころ6つを整理。additionalContextがモデルに届かない、approval_policy="never"でゲート系hookが無効になる、trust単位の直感との乖離など実験結果を報告 — kani@新人SIer勤務 [Zenn](https://zenn.dev/kakecake/articles/20260618-codex-hooks-pitfalls)

> AnthropicのDreamingをCodexのhooksで再現する試み。エージェントがオフライン時に記憶ストアを整理・統合する仕組みをCodex CLIで実装 — kani@新人SIer勤務 [Zenn](https://zenn.dev/kakecake/articles/20260618-codex-hooks-dreaming)

### Codexの進化方向性

#### ポジティブ

> Codexは「コードを書くAI」から「業務を組み立てるAI」へ進化すると分析。6/2発表の役割別プラグイン、Sites、Annotationsの3機能を中心に解説 — mhamadajp [Qiita](https://qiita.com/mhamadajp/items/360c2d5ff716ab6ed623)

### GPT-5廃止と代替モデル

#### Tips

> GPT-5の2026年12月廃止通知を受け、代替モデルの料金比較を実施。DeepSeek V4 ProでStructured Outputsを実現する方法も紹介 — Pochimu [Zenn](https://zenn.dev/pochimutech/articles/49d404b652d8e4)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
