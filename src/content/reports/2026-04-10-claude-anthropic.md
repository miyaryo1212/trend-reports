---
title: "v2.1.98でセキュリティ強化とVertex AIウィザード、Managed Agents議論活発"
summary: "Claude Code v2.1.97-v2.1.98で大量更新。v2.1.98ではGoogle Vertex AIセットアップウィザード、Perforceモード、Monitorツール、Bash toolの複数セキュリティ修正。v2.1.97ではNO_FLICKERモードのフォーカスビューが好評。コミュニティではManaged Agentsへの関心とClaude Code活用パターンの議論が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-10
features:
  - "Google Vertex AI インタラクティブセットアップウィザード"
  - "Perforce モード (CLAUDE_CODE_PERFORCE_MODE)"
  - "Monitor ツール"
  - "サブプロセスサンドボックス強化 (PID 名前空間分離)"
  - "--exclude-dynamic-system-prompt-sections フラグ"
  - "Bash tool セキュリティ修正（複数の脆弱性対応）"
  - "/agents タブレイアウト刷新"
  - "フォーカスビュー (Ctrl+O)"
  - "ステータスライン refreshInterval 設定"
  - "Bridge セッション改善"
  - "MCP HTTP/SSE メモリリーク修正"
  - "Bedrock 認証修正 (v2.1.94 リグレッション)"
codex_review: "派手さは薄いが、Bash周りの脆弱性修正が続いている点に今の競争軸が出ている。Managed Agents論も含め、機能追加より“安全に運用できるエージェント基盤”への重心移動が興味深い。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.98（2026-04-09）

セキュリティ修正を中心とした大型リリース。主要な変更点:

- **Google Vertex AI インタラクティブセットアップウィザード**: ログイン画面の「3rd-party platform」から GCP 認証・プロジェクト・リージョン設定・認証情報検証・モデルピンニングをガイド付きで構成可能に
- **Perforce モード (`CLAUDE_CODE_PERFORCE_MODE`)**: 読み取り専用ファイルへの Edit/Write/NotebookEdit を `p4 edit` ヒント付きで拒否
- **Monitor ツール**: バックグラウンドスクリプトからのイベントストリーミング監視機能を追加
- **サブプロセスサンドボックス強化**: Linux で PID 名前空間分離（`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` 設定時）、`CLAUDE_CODE_SCRIPT_CAPS` でセッションごとのスクリプト実行数を制限
- **`--exclude-dynamic-system-prompt-sections` フラグ**: print モードでクロスユーザープロンプトキャッシュ効率を改善
- **Bash tool セキュリティ修正（複数）**:
  - バックスラッシュエスケープによるパーミッションバイパスで任意コード実行が可能だった脆弱性を修正
  - 複合コマンドが auto/bypass-permissions モードの安全チェックを迂回する問題を修正
  - 環境変数プレフィックス付き読み取り専用コマンドの権限チェック強化
  - `/dev/tcp/...` や `/dev/udp/...` へのリダイレクトが自動許可されていた問題を修正
  - `grep -f FILE` / `rg -f FILE` でワーキングディレクトリ外のパターンファイル読み取りが無許可だった問題を修正
- **/agents タブレイアウト刷新**: 実行中サブエージェント一覧の Running タブと Library タブを追加
- **W3C `TRACEPARENT` 環境変数**: OTEL トレーシング有効時に Bash tool サブプロセスへ伝播
- **LSP**: `clientInfo` で言語サーバーに自己識別
- ストリーミング応答のタイムアウト時に非ストリーミングモードへフォールバック
- 429 リトライで小さな `Retry-After` 値による全リトライ消費を防止（指数バックオフを最低値として適用）
- MCP OAuth `authServerMetadataUrl` のトークンリフレッシュ時の無視を修正
- kitty キーボードプロトコル有効時の大文字小文字変換バグ修正
- `--dangerously-skip-permissions` の保護パスへの書き込み承認後のサイレントダウングレードを修正
- `permissions.additionalDirectories` の中セッション反映、`Bash(cmd:*)` ワイルドカードルールの空白マッチ、JavaScript プロトタイププロパティ名による settings.json 無視など多数のバグ修正
- `/resume` ピッカーの複数改善、`/export` のパス処理修正
- voice モードの push-to-talk キー再ホールド時のスペース文字リーク修正
- バックグラウンドサブエージェントのエラー時部分進捗報告の修正
- ワーカツリーの未追跡ファイル含有時のクリーンアップ保護

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.98)

### Claude Code v2.1.97（2026-04-08）

NO_FLICKER モードの大幅改善とセキュリティ修正。主要な変更点:

- **フォーカスビュー (`Ctrl+O`)**: `NO_FLICKER` モードでプロンプト・ツール要約（edit diffstats 付き）・最終応答のみを表示する集中ビュー
- **ステータスライン `refreshInterval` 設定**: N 秒ごとにステータスラインコマンドを再実行可能に
- **`workspace.git_worktree`**: ステータスライン JSON 入力に linked git worktree 情報を追加
- **Bridge セッション改善**: claude.ai セッションカードにローカル git リポ・ブランチ・作業ディレクトリを表示
- **MCP HTTP/SSE メモリリーク修正**: サーバー再接続時に約 50MB/hr のバッファが未解放だった問題を解決
- Bash tool パーミッション強化（v2.1.98 と重複する修正含む）
- `--resume` キャッシュミス修正、作業中入力のトランスクリプト永続化修正
- NO_FLICKER モードの多数の修正: zellij でのスクロールアーティファクト、Windows Terminal のスクロール速度、Warp でのショートカット、韓国語/日本語テキストの文字化けなど
- Accept Edits モードで安全な環境変数やプロセスラッパー付きコマンドの自動承認改善
- CJK 句読点後のスラッシュコマンド・@メンション補完対応
- コンテキスト不足警告をフッター通知に変更
- トランスクリプトのトークン使用量を最終値で記録

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.97)

### Claude Code v2.1.96（2026-04-08）（前回から継続）

v2.1.94 で発生したリグレッションの修正リリース。

- `AWS_BEARER_TOKEN_BEDROCK` または `CLAUDE_CODE_SKIP_BEDROCK_AUTH` 使用時に Bedrock リクエストが `403 "Authorization header is missing"` で失敗する問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.96)

### その他の公式アナウンス

本日の公式アナウンスはありません。

## コミュニティの反応

### フォーカスビュー (Ctrl+O)

#### ポジティブ

> NO_FLICKERモードにフォーカスビュートグル（Ctrl+O）が追加され、プロンプト・ツール要約・最終応答のみを表示して集中作業が可能 — @oikon48 [X](https://x.com/i/status/2042049351875490238)

> Ctrl+Oの焦点ビューでプロンプト→コード変更→結果が一画面で追え、複数のエージェント状態も一目瞭然で個人開発が加速 — @Ozzzagen [X](https://x.com/i/status/2042011162246590722)

> v2.1.97でNO_FLICKERモードにFocus view（Ctrl+O）が追加され、ちらつきなくプロンプト・ツール・応答に集中できる — @__SatoshiSsSs__ [X](https://x.com/i/status/2042059628641710493)

#### Tips

> settings.jsonでCLAUDE_CODE_NO_FLICKER=1を設定し、スクロールスピードを調整するとNO_FLICKERモードが快適に使える — @Quatrex [X](https://x.com/i/status/2040385899461267876)

### Managed Agents への関心

#### 中立

> Anthropic Managed Agents をさくっと触ってみた。「頭脳（モデル）」「手（サンドボックス）」「記録（セッションログ）」を分離するアーキテクチャを検証 — @いけ [Zenn](https://zenn.dev/sprix_it/articles/3211f5068cec29)

> Claude Managed Agents のパブリックβ版をコンソールから数クリックで試した記録を共有 — @ny7760 [Qiita](https://qiita.com/ny7760/items/07af9d3facaf4af3d9f2)

> エージェント基盤をフルマネージドで運用する新 API として Claude Managed Agents を解説。ハーネス部分の構築コストを解消 — @k1t [Zenn](https://zenn.dev/tkou15/articles/claude-managed-agents)

> AIエージェントの自律性は「安全な箱」が決める。Claude Managed Agents が埋めるランタイム層を分析 — @slate-infra [Zenn](https://zenn.dev/slate_infra/articles/2f4831bf38b740)

> スケーラブルなAIエージェントの設計思想「脳」と「手」の分離。Managed Agents のアーキテクチャを解説 — @Nao8 [Zenn](https://zenn.dev/dragon1208/articles/4c1b5549faadc4)

### Claude Code 品質低下議論（前回から継続）

#### ネガティブ

> Claude Opus 4.6の劣化を一時的に緩和する方法。頻繁にサボるようになり、タスクの丸投げが問題 — @DPBZ [Qiita](https://qiita.com/DPBZ/items/5d4c72507ee905a5acc5)

> Claude Opusは「全部挙げろ」が効かない。件数指定で急に増えた。候補を持っているのに探索を打ち切る挙動を報告 — @Mekarasu [Qiita](https://qiita.com/Mekarasu/items/b800802edfc943b812a9)

### Claude Code 設定・活用ベストプラクティス

#### Tips

> あなたのClaude Code設定は何点？ CLAUDE.md・rules・hooks・skills・memoryの5層を10カテゴリ100点満点で採点するセルフチェック — @木村謙介 [Zenn](https://zenn.dev/aim_kimura/articles/claude-code-scorecard)

> Claude Codeに記憶を持たせたら、セッションをまたいで仕事ができるようになった。auto memory設計パターンと274個のメモリ運用法 — @kimny [Zenn](https://zenn.dev/glasswerks/articles/claude-code-auto-memory-patterns)

> いまさら聞けないClaude Codeの使い方。Skills・Hooks・設定を体系的に解説 — @yamitake [Zenn](https://zenn.dev/yamitake/articles/claude-code-skills-and-settings)

> Claude Code — MCP・CLI・Hooksの使い分け実践ガイド。3つの方式の向き不向きを整理 — @toki_mwc [Zenn](https://zenn.dev/toki_mwc/articles/claude-code-mcp-cli-hooks-comparison)

> Claude Teamプラン完全ガイド【2026/4最新】。管理画面の設定項目を網羅的に解説 — @ふくだ [Zenn](https://zenn.dev/canly/articles/e7300b4d758119)

### Claude Code コスト最適化

#### Tips

> Claude Code CLIをGLM/MiniMaxで代替した話。外部プロバイダーのエンドポイント指定でコスト大幅削減を実測 — @fukukei23 [Zenn](https://zenn.dev/fukukei23/articles/claude-code-cost-optimization)

> RTK（Rust Token Killer）: AIコーディングツールとシェルの間に挟まるCLIプロキシでトークン消費を最大90%削減 — @isa [Zenn](https://zenn.dev/aiforall/articles/e0c28f7748541d)

### Claude Code 実務活用・開発体験

#### Tips

> Claude Codeが書いたコードを、チームのコードにするためにやったこと。「理解負債」への向き合い方 — @mightee [Zenn](https://zenn.dev/dely_jp/articles/b8b41a4202efda)

> なぜClaude Codeを受託開発に投入したのか。2人チームの生産性戦略と並列開発ワークフロー — @YujiNaramoto [Qiita](https://qiita.com/YujiNaramoto/items/64e8ca323195aa0b896e)

> Claude Codeの複数プロジェクト同時開発を左手デバイスで加速する。XPPen ACK05のボタンに定型文入力を割り当て — @ko___o [Zenn](https://zenn.dev/ko___o/articles/a734808835223a)

> Claude Codeの応答、要点だけ音声で聞きたくて最小実装した話 — @Ryosuke Arima [Zenn](https://zenn.dev/ryosuke_arima/articles/aad3d355640229)

> Claude Code同士を会話させるMCPサーバー「cc-to-cc」を作ってみた。プロジェクト間の人間メッセンジャー状態を解消 — @yutake [Zenn](https://zenn.dev/yukitakeshita/articles/8bd5f02bc59201)

> Claude Code を cron で毎朝自動実行して、AIに株式市場を分析させる仕組み — @Tech Quant [Zenn](https://zenn.dev/techquant/articles/claude-code-cron-automation)

#### ネガティブ

> 「AIが全部やってくれる」は幻想だった。Claude Code開発の失敗録。HTML 100ファイル・JS 95ファイルのWebアプリを開発して技術的負債まみれに — @JIRO SAKAMOTO [Zenn](https://zenn.dev/penguingymlinux/articles/bcf7016d6e2ef5)

### harness engineering（前回から継続）

#### 中立

> AIエージェント時代、人間レビューはどこに残るのか。Anthropic Code Reviewの導入でPRの16%→実質的レビュー増加の事例を分析 — @slate-infra [Zenn](https://zenn.dev/slate_infra/articles/37d7d7c8ebf0a3)

### Claude Mythos Preview（前回から継続）

#### 中立

> Claude Mythos Preview System Card の日本語訳 — @sol-sun [Zenn](https://zenn.dev/sol_sun/articles/claude-mythos-01-introduction)

### Claude API 1M コンテキストベータ廃止

#### Tips

> Claude API 1Mコンテキストベータ廃止ガイド。4/30期限の移行チェックリスト — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/187-claude-api-1m-context-migration-guide)

### Anthropic コード流出事件（前回から継続）

#### 中立

> Claude Code流出が示したもの。セキュリティは「守り切る」から「壊れないように分ける」へ。Zero Trust Architecture の観点で考察 — @やちほこ [Zenn](https://zenn.dev/jospeh232/articles/96f26f10ea5cfa)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
