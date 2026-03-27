---
title: "v2.1.85: hooks条件フィルタとMCP OAuth強化"
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-27
features:
  - "hooks条件フィルタ(ifフィールド)"
  - "MCP headersHelper用環境変数"
  - "PreToolUse hookでAskUserQuestion応答"
  - "Deep Link 5,000文字拡張"
  - "MCP OAuth RFC 9728対応"
  - "組織ポリシーによるプラグインブロック"
  - "OTELツールパラメータのゲーティング"
---

## 公式アップデート

### v2.1.85 (2026-03-27)

本日リリース。hooks の条件フィルタ機能、MCP OAuth の RFC 9728 準拠、組織ポリシーによるプラグインブロック、ヘッドレス統合向けの PreToolUse hook 拡張など、エンタープライズ・自動化寄りの機能が充実。

#### 新機能

- **hooks 条件フィルタ（`if` フィールド）**: permission rule 構文（例: `Bash(git *)`）で hook の実行条件を指定可能に。プロセス起動のオーバーヘッドを削減
- **MCP headersHelper 用環境変数**: `CLAUDE_CODE_MCP_SERVER_NAME` / `CLAUDE_CODE_MCP_SERVER_URL` をヘッダーヘルパースクリプトに渡し、1つのヘルパーで複数サーバーに対応可能に
- **PreToolUse hook で AskUserQuestion 応答**: `updatedInput` と `permissionDecision: "allow"` を返すことで、ヘッドレス統合から独自UIで回答を注入可能に
- **Deep Link 拡張**: `claude-cli://open?q=…` のクエリ上限を5,000文字に拡大。長いプロンプトには「scroll to review」警告を表示
- **MCP OAuth RFC 9728 対応**: Protected Resource Metadata discovery による認可サーバーの自動検出
- **組織ポリシーによるプラグインブロック**: `managed-settings.json` で禁止されたプラグインのインストール・有効化・マーケットプレイス表示を抑止
- **OTEL ツールパラメータのゲーティング**: `tool_result` イベントの `tool_parameters` を `OTEL_LOG_TOOL_DETAILS=1` で明示的に有効化する方式に変更
- **スケジュールタスクのタイムスタンプ**: `/loop` や `CronCreate` 発火時にトランスクリプトにタイムスタンプマーカーを追加
- **画像貼り付け時の末尾スペース**: `[Image #N]` プレースホルダーの後に空白を自動挿入

#### バグ修正（主要なもの）

- `/compact` がコンテキスト超過で失敗する問題を修正（会話が大きすぎてコンパクト要求自体が収まらない場合）
- `/plugin enable` / `disable` がプラグインのインストール場所と宣言場所が異なる場合に失敗する問題を修正
- `--worktree` が非gitリポジトリで `WorktreeCreate` hook 実行前にエラー終了する問題を修正
- `deniedMcpServers` 設定が claude.ai MCP サーバーをブロックしない問題を修正
- マルチモニター環境での `switch_display` エラーを修正
- OTEL エクスポーターを `none` に設定した場合のクラッシュを修正
- MCP ステップアップ認可がリフレッシュトークン存在時に失敗する問題を修正（`403 insufficient_scope` で再認可フローが正しく起動するように）
- リモートセッションでストリーミング応答中断時のメモリリークを修正
- エッジ接続チャーン時の ECONNRESET エラーをリトライ時に新規 TCP 接続で解消
- Python Agent SDK: `--mcp-config` 経由の `type:'sdk'` MCP サーバーが起動時にドロップされる問題を修正
- SSH や VS Code 統合ターミナルで生キーシーケンスがプロンプトに表示される問題を修正
- Ghostty / Kitty / WezTerm 等で終了後にターミナルが enhanced keyboard mode のまま残る問題を修正（Ctrl+C / Ctrl+D が正常に動作するように）
- Remote Control セッションステータスが権限解決後も「Requires Action」のまま固まる問題を修正
- ストリーミング中のスクロールアップで古いコンテンツが透けて見える問題を修正

#### パフォーマンス改善

- 大規模リポジトリでの @メンションファイル補完の性能向上
- WASM yoga-layout を純 TypeScript 実装に置き換え、大きなトランスクリプトのスクロール性能を改善
- 大規模セッションでのコンパクション発動時の UI スタッターを軽減
- PowerShell の危険コマンド検出を改善

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.85)

### v2.1.84 (2026-03-26)（前回から継続）

PowerShell ツール（Windows プレビュー）、3P モデル設定環境変数、TaskCreated フック、MCP 説明文 2KB 上限などを含むアップデート。

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.84)

## コミュニティの反応

### Hooks エコシステム

#### Tips

> cc-safe-setup が 315 hooks に到達。45 CLI コマンド、11 Web ツール、941 テストを含むエコシステム全体を俯瞰 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/16fba4101ab485)

### セッション間通信・マルチエージェント協調

#### ポジティブ

> claude-peers-mcp という MCP サーバーで同一 PC 上の複数 Claude Code セッションが互いを発見しメッセージを送り合える。Windows 環境での実践レポート — @shinya.hara [Zenn](https://zenn.dev/acntechjp/articles/7bb9f418be6e68)

> takt で Codex CLI・Cursor・Claude Code を協調させて新機能を追加。5回 ABORT して気づいた設計の急所 — @Coji Mizoguchi [Zenn](https://zenn.dev/coji/articles/takt-multi-agent-coding-experience)

### /dream コマンドと長期記憶

#### ポジティブ

> Claude が眠るようになった。/dream コマンド（Auto-Dream）と自作2層メモリの住み分けを検証。Sleep-time Compute 論文ベースの4フェーズ記憶整理 — @K.Hirano [Zenn](https://zenn.dev/metamark/articles/eb7ab6fa9bc759)

> Claude Code に長期記憶を持たせたら開発壁打ちが激変した — @FROM_AI_UNIQUE [Zenn](https://zenn.dev/nup/articles/20260326-9a43417f4ffb)

### Spec 駆動開発

#### Tips

> Spec 駆動開発を再現可能にするテンプレートを作った。CLAUDE.md・仕様書・品質ゲート・レビュールールの4ファイル最小セット — @hidetzu [Zenn](https://zenn.dev/hidetzu/articles/spec-driven-dev-template)

> Claude Code × Spec 駆動開発で1日で実用 CLI を作った。AI に開発させたのではなく AI の行動を設計した — @hidetzu [Zenn](https://zenn.dev/hidetzu/articles/claude-code-spec-driven-cli)

> AI に「いい感じに作って」と言うのをやめたら開発が回り出した。Spec-Driven Development 実践ガイド — @akira_papa_AI [Qiita](https://qiita.com/akira_papa_AI/items/5f66b2b289994e4a0256)

### AI 生成コードの品質・技術的負債

#### 中立

> AI が書いたコードを未来のレガシーにしない5つの設計判断。88%の開発者が技術的負債の悪化を実感（SonarSource 2026 調査） — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-code-legacy-prevention-design-2026)

> 全員 Claude Code 体制を3ヶ月やってわかった、AI と人間の "ちょうどいい境界線" — @ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/90040ef0b2a769)

> 4つの AI で2万行級の業務システムはほぼ一撃で作れた。差が出たのは初期ビルドではなく仕様追加だった（前回から継続） — @仕様をこねる人 [Zenn](https://zenn.dev/specs/articles/e9f7922cd33431)

### コスト最適化

#### Tips

> Claude Code の費用を半分にする実践ガイド。モデルルーティング・/compact・.claudeignore で賢くコスト管理 — @biki [Zenn](https://zenn.dev/biki/articles/claude-code-cost-optimization-20260326)

### JSONL トランスクリプトからの復元

#### Tips

> Claude Code が全部消した。でも全部覚えていた。git checkout -- . で消えた変更を JSONL トランスクリプトから Write/Edit 操作を抽出して復元するスクリプト — @ryu1maniwa [Zenn](https://zenn.dev/ryu1maniwa25/articles/claude-code-jsonl-restore-git-checkout)

### Mermaid 図の自律改善

#### Tips

> Claude Code で Mermaid 図を自律的に改善するローカル MCP サーバーを作った。レンダリング→視覚確認→修正のフィードバックループ — @ryu1maniwa [Zenn](https://zenn.dev/ryu1maniwa25/articles/mermaid-local-mcp-feedback-loop)

### Git worktree 活用

#### Tips

> Claude Code の git worktree でポート重複を防ぐ方法。worktree 名のハッシュ値からポート番号を生成する Makefile ベースのアプローチ — @Ikuma Sudo [Zenn](https://zenn.dev/ikumasudo/articles/6ea0e7e6795f9f)

### コーディングエージェント比較

#### 中立

> Claude Code vs Junie CLI（JetBrains ベータ）を個人開発者が本音で比較。「どっちが優れてるか」ではなく「どういう人にどっちが合うか」 — @kenty [Zenn](https://zenn.dev/kenty_vibe/articles/86e7bc09d27a98)

### Obsidian CLI 連携

#### Tips

> Obsidian CLI が全ユーザーに無料開放（v1.12.7）。kepano 公開の Claude Code 用エージェントスキル obsidian-skills と合わせてセットアップ — @かいりん [Zenn](https://zenn.dev/kairininja/articles/zenn-obsidian-cli-agent-skills-setup)

### スマホからの操作

#### Tips

> Tailscale + SSH + Termux でスマホから自宅 PC の Claude Code をフル操作。途中5回詰まって全部解決した記録 — @UKIA [Zenn](https://zenn.dev/ukiajp/articles/smartphone-claude-code-tailscale-ssh)

### 非エンジニアの活用事例

#### ポジティブ

> 不動産鑑定士が Claude Code で本番 AI サービスを作った技術構成。Chrome 拡張・土地査定サービス・バイラルツール群を稼働中 — @鑑定さん [Zenn](https://zenn.dev/kanteisan/articles/7c6d46fdbbd1f7)

> waggle — ナレッジワーカーが AI Agent を使いこなすためのタスク協調プロトコル。エンジニア以外の活用を想定した OSS — @kazukinagata [Zenn](https://zenn.dev/kazukinagata/articles/6097e7d666a2d4)

### MCP 活用（前回から継続）

#### Tips

> 自作 MCP サーバー入門。FastMCP で Claude の手足を作る実装ガイド — @AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/96142820b715d5498165)

> Marionette MCP の call_custom_extension で Flutter の Store 画像撮影や UI 検証を自動化 — @K9i [Zenn](https://zenn.dev/yumemi_inc/articles/20260326_marionette_mcp_call_custom_extension)

### Claude API / SDK

#### Tips

> Bedrock (Claude 4.6) 環境における pre-fill 廃止と代替手段の整理。Sonnet 4.5→4.6 差し替えで 400 エラーが発生するケース — @enumura1 [Qiita](https://qiita.com/enumura1/items/d0f53e82ed6b59668b67)

> Claude 障害時でも止まらない Telegram ボット。Gemini・Ollama への LLM フォールバック実装 — @アクロパパ [Zenn](https://zenn.dev/acropapa330/articles/llm_fallback_bot)

> skill-creator で Zenn 記事スキルを作ったら品質が +85% になった。Anthropic 公式ツールの実践レポート — @JodyCraft [Zenn](https://zenn.dev/jodycraft/articles/skill-creator-zenn-article-craft)

### GitHub Actions 連携（前回から継続）

#### Tips

> Claude Code × GitHub Actions で Issue にラベル貼るだけで自動修正＆PR 作成する仕組み（前回から継続） — @sho_ [Zenn](https://zenn.dev/solvio/articles/63842f1417883a)

### セキュリティ

#### 中立

> Claude × Mozilla Firefox 脆弱性発見。Claude Opus 4.6 で2週間に22件発見（14件が高深刻度）。AI 駆動セキュリティ監査の手法を解説 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/029-claude-firefox-vulnerability-ai-security)

### 定期実行・自動化

#### Tips

> Claude Code の定期実行が毎朝コケるのでサーバーとローカルで役割を分けた話。cron + Claude Code の安定運用ノウハウ — @いなじろう [Zenn](https://zenn.dev/iineineno03k/articles/20260325-claude-code-scheduled-task-architecture)

> superpowers プラグインを試してみた（設計編） — @tasekino [Qiita](https://qiita.com/tasekino/items/ba35498781d48f2e854b)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
