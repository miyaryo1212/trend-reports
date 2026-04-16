---
title: "v2.1.83: エンタープライズ設定と新Hooksイベント"
summary: "Claude Code v2.1.83がリリース。エンタープライズ向けポリシー管理の強化、CwdChanged/FileChangedフックイベント追加、サンドボックス設定の厳格化など大型アップデート。コミュニティではHooks機能の活用法が注目を集めている。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-25
features:
  - "managed-settings.d/ ドロップインディレクトリ"
  - "CwdChanged/FileChanged フックイベント"
  - "sandbox.failIfUnavailable 設定"
  - "トランスクリプト検索機能"
  - "initialPrompt エージェントフロントマター"
codex_review: "派手に見えるのはHooks周辺だが、実は企業導入を本気で前進させるのはポリシー管理とfailIfUnavailableの厳格化だと思う。コミュニティ熱量に比べると地味だが、運用現場ではこちらのほうが効く。"
codex_importance: 4
---

## 公式アップデート

### v2.1.83 (2026-03-25)

本日リリース。エンタープライズ向けポリシー管理の強化、新しいフックイベント、セキュリティ改善、多数のバグ修正を含む大型アップデート。

#### 新機能

- **managed-settings.d/ ドロップインディレクトリ**: `managed-settings.json` と併用可能。複数チームが独立したポリシーフラグメントをデプロイし、アルファベット順にマージ
- **CwdChanged / FileChanged フックイベント**: direnv等の環境管理ツールとの連携向け
- **sandbox.failIfUnavailable 設定**: サンドボックスが起動できない場合にサンドボックスなしで実行せずエラー終了
- **disableDeepLinkRegistration 設定**: `claude-cli://` プロトコルハンドラ登録を無効化
- **CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1**: サブプロセス環境からAnthropicおよびクラウドプロバイダ認証情報を除去
- **トランスクリプト検索**: トランスクリプトモード (`Ctrl+O`) で `/` を押して検索、`n`/`N` でマッチ間を移動
- **Ctrl+X Ctrl+E**: 外部エディタを開くreadlineネイティブバインディング（`Ctrl+G` も引き続き使用可）
- **画像チップ挿入**: ペーストした画像がカーソル位置に `[Image #N]` チップとして挿入され、プロンプト内で位置参照可能に
- **initialPrompt エージェントフロントマター**: エージェントがフロントマターで最初のターンを自動送信可能に
- **chat:killAgents / chat:fastMode キーバインド**: `~/.claude/keybindings.json` で再バインド可能に

#### バグ修正（主要なもの）

- macOSでの終了時ハング問題を修正
- アイドル時の画面フラッシュを修正
- 巨大ファイルのdiff処理で5秒タイムアウトを追加しハングを回避
- 音声入力有効時の起動フリーズ（1〜8秒）を修正
- claude.ai MCP設定取得で約3秒待機する起動リグレッションを修正
- `--mcp-config` CLIフラグがマネージドポリシーをバイパスする問題を修正
- `caffeinate` プロセスが終了時に残りMacがスリープしない問題を修正
- バックグラウンドサブエージェントがコンテキストコンパクション後に見えなくなる問題を修正
- SDKセッション履歴がフック進捗/添付メッセージでparentUuidチェーンが分岐し失われる問題を修正

#### パフォーマンス改善

- Bedrock SDK コールドスタートレイテンシ改善
- `--resume` のメモリ使用量と起動レイテンシ改善
- プラグイン起動時のディスクキャッシュ活用
- `WebFetch` のピークメモリ使用量削減
- 非ストリーミングフォールバックのトークン上限を21k→64kに、タイムアウトを120s→300sに拡大

#### その他の変更

- `TaskOutput` ツールを非推奨化（バックグラウンドタスクの出力ファイルパスに対する `Read` を推奨）
- 「全バックグラウンドエージェント停止」キーバインドを `Ctrl+F` から `Ctrl+X Ctrl+K` に変更

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.83)

## コミュニティの反応

### Auto Mode / 承認フロー

#### ポジティブ

> Claude Code に Auto Mode が登場。「全承認」でも「毎回承認」でもない第三の道。大規模リファクタリング時の承認疲れから解放される — @akasara [Zenn](https://zenn.dev/akasara/articles/e7b047f018e791)

#### Tips

> shield-harnessで「承認疲れ」なく安全に自律運転する方法。--dangerously-skip-permissionsを使わずに承認フローを最適化 — @sora_biz [Zenn](https://zenn.dev/sora_biz/articles/shield-harness-approval-free-security)

### Channels機能

#### Tips

> Discord駆動開発超入門。Channelsでスマホから指示を送る完全ガイド。tmuxで24時間セッション維持、CI/CD Webhook連携まで — @kobarutosato [Zenn](https://zenn.dev/kobarutosato/articles/94571b885c8caf)

> 72時間で3つの常識が壊れた。Auto Mode / Computer Use / Channels の臨時特集 — @yokoi_ai [Zenn](https://zenn.dev/yokoi_ai/articles/claude-code-special-72hours-202603)

### 長期記憶・コンテキスト管理

#### ポジティブ

> Claude Codeに長期記憶を持たせたら、壁打ちの質が変わった。SQLite 1ファイルでローカル完結、トークン消費ゼロ — @noprogllama [Zenn](https://zenn.dev/noprogllama/articles/7c24b2c2410213)

> Claude Codeとの壁打ちが「積み上げ型」に変わった。長期記憶MCPサーバーの開発記 — @kimmaru [Zenn](https://zenn.dev/kimmaru/articles/3dbd92dea9ede8)

#### Tips

> Claude Codeの長期記憶を複数リポで安全に運用するポリシー設計 — @mtk0x [Zenn](https://zenn.dev/mtk0/articles/sui-memory-multi-project-policy)

> Claude Code がアホになるのはあなたのせいじゃない。オートコンパクティングの罠と完全回避術 — @shintaroamaike [Zenn](https://zenn.dev/shintaroamaike/articles/1a6d4bb199d666)

### マルチエージェント・並列作業

#### Tips

> Claude Codeのサブエージェント、どこで使うと便利でどこで微妙か。Explore・Plan・general-purposeの3種類の使い分け — @nh808 [Zenn](https://zenn.dev/nh808/articles/20260324_claude_code_multi_agent)

> Claude Codeのエージェントで別リポジトリをコンテキスト分離して作業させる。シンボリックリンク活用パターン — @rinomiya_sumoru [Zenn](https://zenn.dev/rinomiya_sumoru/articles/claude-code-agent-separate-repo)

> AIの思考速度に人間はついていけない。マルチセッション議論ツールを作った話 — @mita_hiro [Zenn](https://zenn.dev/mita_hiro/articles/3051b37bc53526)

### Hooks活用

#### Tips

> Claude Code Hooksをやっと使ってみた。公式ドキュメント+α — @Maji3322 [Qiita](https://qiita.com/Maji3322/items/b9a75d12acea8ebaacc0)

> Claude Codeの安全設計、Pythonスクリプト3本を捨ててdeny rulesに一本化した判断 — @playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-hooks-to-permissions)

> cc-safe-setup v2.0。26個のexample hookで守備範囲を5倍にした — @yurukusa [Qiita](https://qiita.com/yurukusa/items/ce9a7c0490a59b6cfc37)

### CLAUDE.md・プロジェクト設定

#### Tips

> CLAUDE.mdが339行に膨張したので「読者は誰か」で49%削減した話。マルチエージェント構成での最適化 — @saytooy_arch [Zenn](https://zenn.dev/saytooy_arch/articles/claude-md-bloat-reduction)

> CLAUDE.md を手書きするのをやめた話。Orbit で AI コンテキストを自動生成する — @s4kura [Zenn](https://zenn.dev/s4kura/articles/orbit-stop-handwriting-claude-md)

### 定期実行・自動化

#### Tips

> Claude Codeの定期実行が毎朝コケるので、サーバーとローカルで役割を分けた話 — @iineineno03k [Zenn](https://zenn.dev/iineineno03k/articles/20260325-claude-code-scheduled-task-architecture)

> 毎朝ターミナルを開き直すのをやめた。tmux + tmuxp で4プロジェクトのClaude Codeを一発起動する — @metamark [Zenn](https://zenn.dev/metamark/articles/c1508627ab8a8f)

### 実践事例

#### ポジティブ

> 30年ハードウェアエンジニアが、AIで1ヶ月で本番システムを2本作った話 — @neural_anvil [Zenn](https://zenn.dev/neural_anvil/articles/4090b390ce0f9f)

> 日本株4,300銘柄をAIエージェントで毎日分析する仕組みを作った。18エージェント・20スキルの設計パターン — @taiki_kishi [Zenn](https://zenn.dev/taiki_kishi/articles/jpss-ai-agent-stock-analysis)

> Claude Codeにロボットを動かさせたら、強化学習まで自走した — @kenimo49 [Zenn](https://zenn.dev/kenimo49/articles/claude-code-physical-ai-lerobot)

#### Tips

> Word→Markdownの品質チェックをClaude Codeに丸投げ。知見ゼロで11件中7件を検出、見落としまで拾った — @ntaka329 [Qiita](https://qiita.com/ntaka329/items/df16d85a84769975d4a0)

### MCPの現状

#### 中立

> MCPって結局のところ何？もうオワコン！？MCPは「外部ソフトウェアを使うための補助輪」だが、存在意義は揺らいできている — @izumi_ren [Zenn](https://zenn.dev/izumi_ren/articles/f1d566ca07a9a7)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
