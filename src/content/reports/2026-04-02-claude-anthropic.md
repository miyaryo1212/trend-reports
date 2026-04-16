---
title: "v2.1.89でフック・権限制御が大幅強化、ソースコード流出事件も波紋"
summary: "Claude Code v2.1.89がリリースされ、PreToolUseフックのdefer決定、PermissionDeniedフック、MCP接続の非ブロッキング化など開発者向け制御機能が大幅に強化。コミュニティではソースコード流出事件への反応とSkills/ハーネスエンジニアリングの実践記事が活況。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-02
features:
  - "PreToolUseフックのdefer permission decision"
  - "CLAUDE_CODE_NO_FLICKER=1環境変数"
  - "PermissionDeniedフック"
  - "名前付きサブエージェントの@メンション候補表示"
  - "MCP_CONNECTION_NONBLOCKING=true"
  - "自動モード拒否コマンド通知"
  - "Editツール改善（Read不要化）"
  - "autocompactスラッシュループ検出"
  - "thinking summariesデフォルト無効化"
  - "フック出力50K超のディスク保存"
  - "/buddy（エイプリルフール限定機能）"
codex_review: "派手なのは流出事件だが、私にはdeferやPermissionDeniedの強化のほうがずっと重要に見える。エージェント運用が“お試し”から実務へ寄る転換点で、/buddyが妙に効いているのもAnthropicらしい。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.89（2026-04-01）

ヘッドレス運用・権限制御・安定性に焦点を当てた大型リリース。主要な新機能は以下の通り。

**新機能・改善:**

- **PreToolUseフックに`"defer"` permission decision を追加**: ヘッドレスセッションでツール呼び出し時に一時停止し、`--resume`で再評価が可能に
- **`CLAUDE_CODE_NO_FLICKER=1`環境変数**: 仮想スクロールバック付きのフリッカーフリー代替スクリーンレンダリングをオプトイン
- **`PermissionDenied`フック**: 自動モード分類器の拒否後に発火し、`{retry: true}`で再試行を指示可能
- **名前付きサブエージェントの`@`メンション候補表示**: タイプアヘッドにサブエージェント名が表示
- **`MCP_CONNECTION_NONBLOCKING=true`**: `-p`モードでMCP接続待ちを完全スキップ。`--mcp-config`の接続上限を5秒に制限
- **自動モード拒否コマンドの通知**: `/permissions` → Recentタブに表示され`r`キーで再試行可能
- **Editツール改善**: `Bash`で`sed -n`や`cat`で閲覧したファイルに対し、`Read`なしで直接編集可能に
- **autocompactスラッシュループ検出**: 3回連続でコンテキスト再充填を検出した場合、APIコール消費を防ぎエラーで停止
- **フック出力50K超のディスク保存**: 大きなフック出力をコンテキストに直接注入せずファイルパス+プレビューで保存
- **`/buddy`**: エイプリルフール限定。コーディング中に小さなASCIIアートの生き物がハッチして見守る

**動作変更:**

- thinking summariesがインタラクティブセッションでデフォルト非生成に変更（`showThinkingSummaries: true`で復元可能）
- `cleanupPeriodDays: 0`がバリデーションエラーで拒否されるように（以前はトランスクリプト永続化が無効化されていた）

**主なバグ修正（30件以上）:**

- `Edit`/`Read`のallow ruleがシンボリックリンクの解決先をチェックするように修正
- `StructuredOutput`スキーマキャッシュバグ（複数スキーマ使用時の約50%失敗率）を修正
- CJK/絵文字を含むプロンプト履歴が4KB境界で消失する問題を修正
- 長時間セッションでの大容量JSONによるメモリリーク、50MB超セッションファイルのクラッシュを修正
- LSPサーバーのクラッシュ後ゾンビ状態を修正（次のリクエストで自動再起動）
- `--resume`の64KB超入力でのハング、プロンプトキャッシュミス、ネストされたCLAUDE.mdの重複注入を修正
- Windows関連: CRLF二重化、Voice mode、Shift+Enter問題、PowerShell進捗のstderr誤検知を修正
- iTerm2+tmux環境でのUIジッター修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.89)

## コミュニティの反応

### PreToolUseフックのdefer permission decision

#### ポジティブ

> Claude Code v2.1.89でPreToolUseフックにdefer決定が追加され、ヘッドレスセッションでのツール一時停止と--resume再開が可能に。エージェント開発の柔軟性が向上 — @oikon48 [X](https://x.com/i/status/2039211153461514713)

> 個人開発で実際に試して実用的だと高評価。長時間タスクの放置と--resume再開が簡単で便利 — @sora19ai [X](https://x.com/i/status/2039156905718022370)

#### Tips

> PreToolUse Hooksを使ってコマンドの`&&`や`git -C`などの結合を検知・禁止し、approve待ちを防いで安定運用を実現 — @sRagia [X](https://x.com/i/status/2038280840925565044)

### PermissionDeniedフック

#### ポジティブ

> 自動モードの拒否後にリトライが可能で、エージェント開発の幅が広がったと好評 — @sora19ai [X](https://x.com/i/status/2039156905718022370)

> AIを安全に制御する仕組みとしてdefer/PermissionDeniedフックをまとめ記事で紹介 — @tanaami_123 [X](https://x.com/i/status/2039272798779044037)

> 権限周りの強化を指摘し、自動モード拒否のリトライ対応を活用例として評価 — @punyq5 [X](https://x.com/i/status/2039153723369538005)

### CLAUDE_CODE_NO_FLICKER=1環境変数

#### Tips

> 仮想スクロールバックによるフリッカーフリーの代替スクリーンレンダリングをオプトイン可能にした機能として紹介 — @oikon48 [X](https://x.com/i/status/2038770531080745237)

### thinking summariesデフォルト無効化

#### Tips

> `settings.json`に`"showThinkingSummaries": true`を設定することで復元可能。デフォルトで無効化された9種の設定の一つとして紹介 — @kbhero21 [X](https://x.com/i/status/2037437678736810395)

### Claude Codeソースコード流出事件

#### 中立

> 3月31日、v2.1.88のnpmパッケージにソースマップファイルが混入し、約1,900ファイル・50万行以上のTypeScriptコードが流出。リリース工程のヒューマンエラーが原因。問題のv2.1.88はnpmレジストリから削除済み — @Junko [Zenn](https://zenn.dev/junko_ai/articles/3123badb508b5d)

> 流出の経緯・技術的原因・コード解析で判明した未公開機能や内部アーキテクチャについて詳細に分析 — @eri.tech [Zenn](https://zenn.dev/eri_tech404/articles/5e5e921d6ba968)

> ソースコード流出から考える開発者の倫理について考察 — @mosaxiv [Qiita](https://qiita.com/mosaxiv/items/f6fa910cb0c7efe2defc)

> Anthropic1週間で2度目の事故（Mythosリーク + ソースコード流出）として報告 — @tmst [Qiita](https://qiita.com/tmst/items/c405203523c552afddec)

### /buddy（エイプリルフール機能）

#### ポジティブ

> 全18種のBuddyをまとめ。前日のソースコード流出でbuddy/ディレクトリの存在が判明していた。リバースエンジニアリングで仕様を整理 — @hjpotter1 [Zenn](https://zenn.dev/hjpotter1/articles/906d208ca32dce)

> `/buddy`を実行したらASCIIアートのカメが出現。「エンジニアが本気で楽しんで作った、完成度の高いシステム」と評価 — @海老のしっぽ [Zenn](https://zenn.dev/n_tong/articles/983cb83095a289)

### Skills・ハーネスエンジニアリングの実践

#### Tips

> SkillsでAutoHarnessを実装し、プロジェクト解析からルール自動生成・継続改善を自動化。`/autoharness-init`一度の実行で型チェック・lint・命名規則を設定 — @ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/df3ecc0ddee047)

> 60以上のスキルを破綻させない5つの設計原則。Opus/Sonnet使い分けとパイプライン設計の実践知を共有 — @takish [Zenn](https://zenn.dev/takish/articles/skill-philosophy)

> Claude Codeのエージェントスキルで実装計画のレビューループを自動化。Codexにレビュー依頼→人間が判断→修正→再レビューのループ — @keitakn [Zenn](https://zenn.dev/avaintelligence/articles/codex-review-skill-automation)

> CLAUDE.md・Skills・Hooksで自律的な開発環境を作る完全活用ガイド — @devken [Zenn](https://zenn.dev/devken/articles/claude-code-skills-and-claudemd)

> Claude Skills完全ガイド。Skillを「特定分野の職人マニュアル」として体系的に解説 — @Hayate Takeda [Zenn](https://zenn.dev/hayateeeeeee/articles/d0a951b2d5b9cd)

### CLAUDE_CODE_SUBPROCESS_ENV_SCRUB（認証情報漏洩対策）

#### Tips

> v2.1.83で追加された`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1`の動作を実際に検証。Bash・フック・MCP stdioサーバーからAnthropicとクラウドプロバイダーの認証情報を削除する機能 — @Miz [Zenn](https://zenn.dev/miz_1123/articles/claude-code-subprocess-env-scrub)

### 自律開発パイプラインの構築

#### Tips

> 正社員エンジニア0名のスタートアップが21体のAIエージェントによる自律開発パイプラインを構築。GitHub Issueに書いて寝ればPRが上がる体制 — @加藤 [Zenn](https://zenn.dev/aicon_kato/articles/harness-engineering-startup)

> OSSマルチエージェントフレームワーク「multi-agent-shogun」をフォークしてカスタマイズ。Claude Code + tmuxで複数AIエージェントを並列運用 — @鯨骨生物群集 [Zenn](https://zenn.dev/whiterochen/articles/e57ea287fbeb0b)

### Figma MCP × Agent Plugins for AWS

#### Tips

> Figma MCPのuse_figmaツールとAgent Plugins for AWSを組み合わせ、「デザイン→実装→デプロイ」をClaude Codeで一気通貫で実行 — @mkamei [Zenn](https://zenn.dev/virtualcraft/articles/claude-code-figma-mcp-aws-plugins)

### Channels（Discord連携）セットアップ

#### Tips

> Claude Code Channels（v2.1.80+、research preview）のDiscord連携について、セットアップ手順とハマりポイントの解決集を公開 — @takish [Zenn](https://zenn.dev/takish/articles/channels-setup)

### terraform plan × Claude Code

#### Tips

> terraform planの出力をClaudeに解析させる4つのプロンプトパターンを紹介。ECSタスク定義の差分整理まで対応 — @ojt [Zenn](https://zenn.dev/ojt/articles/2026-03-30-terraform-plan-claude-prompt-patterns)

### Everything-claude-code リポジトリ解説

#### 中立

> Claude Code向けのコマンド・エージェント・Skills・Hooksを体系的に管理する運用資産リポジトリの構造をまとめ — @Aliyell [Zenn](https://zenn.dev/aliyell/articles/dc0f91cc96b695)

### レート制限問題（前回から継続）

#### ネガティブ

> Max 5x/20xプランのセッション制限が異常に早く消費される問題が継続。3/28の2倍キャンペーン終了が一因。バージョン管理による回避策を紹介 — @あんどー [Zenn](https://zenn.dev/ryosuke_ando/articles/a1f673d0905a6d)

### Claude Mythosリーク（前回から継続）

#### 中立

> Anthropicの未発表モデル「Mythos」/新ティア「Capybara」のリーク情報への関心が継続。週間まとめ記事で「歴史的な週」として取り上げられる — @ミケ [Zenn](https://zenn.dev/joemike/articles/weekly-ai-2026-0401)

### ハーネス設計パターン（前回から継続）

#### Tips

> AI-DLCとハーネスエンジニアリングの相互補完関係を整理。AWSの開発ライフサイクルとAnthropicの生成・評価分離パターンを統合的に解説 — @keinomur [Zenn](https://zenn.dev/keino/articles/57da9672e8a3fb)

### Anthropic Academyシリーズ（前回から継続）

#### Tips

> 第5回としてWorkflow≠Agentの区別とTemperatureのデフォルト値（1.0）を解説。設計判断に直結する用語理解の重要性を指摘 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/fd2e12d180803b)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
