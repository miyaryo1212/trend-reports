---
title: "v2.1.178でパラメータレベル権限構文が登場"
summary: "Claude Code v2.1.178でTool(param:value)権限構文・ネストskills対応・autoモードのサブエージェント事前評価が追加。v2.1.179では接続断時の部分レスポンス保全を修正。コミュニティではLoop Engineeringの設計論やパーミッション最適化の知見共有が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-17
features:
  - "Tool(param:value)パーミッション構文"
  - "ネストされた.claude/skillsディレクトリ対応"
  - "autoモード サブエージェント事前評価"
  - "mid-stream接続断のレスポンス保全"
codex_review: "権限をパラメータ単位まで落としたのは派手さはないが、エージェント運用を実務に寄せる一歩としてかなり重要だ。Loop Engineering周辺の盛り上がりも含め、Claude Codeが「遊べる道具」から「管理できる基盤」へ移りつつある。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.179（2026-06-16）

バグ修正リリース。

- **mid-stream接続断時の部分レスポンス保全**: 通信が途切れた際、部分的なレスポンスを破棄せず保存するよう修正。スピナーが「running tool」で固まる問題も解消
- WSL2上のWindows Terminal / VS Codeでマウスホイールスクロールが効かない問題を修正（v2.1.172のリグレッション）
- sandbox の`denyRead`/`allowRead` globが大規模ディレクトリツリーでBashツールの説明を肥大化させセッション不能になる問題を修正（Linux）
- フィードバック調査がターン完了直後に1桁の入力をセッション評価として即座にキャプチャする問題を修正
- ウェルカム画面で複数のプロモバナーが重なる問題を修正（セッションあたり最大1件に）
- リモートセッションでプラグインの読み込みパフォーマンスを改善

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.179)

### Claude Code v2.1.178（2026-06-15）

権限システムとスキル機能の強化。

- **`Tool(param:value)`パーミッション構文**: ツールの入力パラメータでアクセス制御ルールを指定可能に。ワイルドカード（`*`）対応。例: `Agent(model:opus)`でOpusサブエージェントをブロック
- **ネストされた`.claude/skills`ディレクトリ対応**: サブディレクトリに配置したスキルを自動ロード。名前衝突時は`<dir>:<name>`形式で共存
- **ネストされた`.claude/`ディレクトリの優先順位整理**: ワーキングディレクトリに最も近いエージェント・ワークフロー・出力スタイルが優先
- **autoモード サブエージェント事前評価**: サブエージェント起動前にクラシファイアがレビューし、ブロック対象アクションの抜け穴を解消
- `/doctor`のUI改善、スキル一覧の切り詰め警告の改善
- ワークフロープロンプトキーワードのトリガー条件を厳格化（「run a workflow」等の明示的フレーズのみに）
- Remote Controlのエラーメッセージ改善
- 多数のバグ修正（OOM、OAuth認証ミスマッチ、compactionのフォールバック、vimモードのundo等）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.178)

## コミュニティの反応

### Tool(param:value)パーミッション構文

v2.1.178で追加されたパラメータレベルの権限構文について、早速解説記事が出ている。

#### Tips

> Claude Code v2.1.178: Tool(param:value)権限構文とセキュリティ改善。ツール引数レベルでのマッチング構文の詳細解説 — @picnic [Qiita](https://qiita.com/picnic/items/152a5a72dce27fb1e0d0)

> Claude Code の許可プロンプトを安全網を外さず減らす — 在席と無人で最適解は違う。権限設定の最適化を在席/無人の2軸で整理 — @Koji Sumiyoshi [Zenn](https://zenn.dev/kojisumiyoshi/articles/claude-code-permission-prompts-guide)

> 「とりあえず許可」を卒業する：Claude Codeの実行前に行動説明を表示するHookを作ってみた — @Kohei Matsumoto [Zenn](https://zenn.dev/nttdata_tech/articles/d2edb6a9fe5d7f)

### Loop Engineering — 「プロンプトではなくループを書く」設計論

Claude Code作者Boris Chernyの発言を起点に、エージェントに自走ループを設計させる「Loop Engineering」の解説が複数出現。

#### Tips

> もうプロンプトは書かない、ループを書く — Claude Code作者とOpenClaw作者が辿り着いた /goal と /loop — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/write-loops-not-prompts-goal-loop)

> Loop Engineeringの組み方：Claude Code /goal で「自走するループ」を設計する — @井ノ実 [Zenn](https://zenn.dev/ino_h/articles/2026-06-16-loop-engineering-goal)

### Agent TeamsとDynamic Workflowsの使い分け

マルチエージェント機能の混同を解消する比較記事が公開。Agent Teamsは対等な独立セッション、Dynamic Workflowsはサブエージェントという本質的な違いを整理。

#### Tips

> Agent Teams と Dynamic Workflows は何が違うのか — 『独立セッション』と『サブエージェント』の決定的な差 — @テックエンジニアのひとりごと [Zenn](https://zenn.dev/mdtechknowledge/articles/agent-teams-vs-dynamic-workflows)

### Claude Code 運用・活用ノウハウ

介入操作の正確な使い分け、テレメトリのGrafana可視化、音声通知プラグインなど、日常運用の知見共有が継続。

#### Tips

> 作業中の AI に介入する steer・queue・中断の正確な使い分け — @ながたく [Zenn](https://zenn.dev/takna/articles/claude-code-intervention-keys)

> Claude CodeとCodex CLIのテレメトリーをGrafana Cloudで見る — @Yoshi Yamaguchi [Zenn](https://zenn.dev/ymotongpoo/articles/20260616-ai-cli-otel-grafana)

> Claude Code の結果を喋ってくれるプラグインを作った。完了・権限確認・入力待ちを音声とポップアップで通知 — @qvtec [Zenn](https://zenn.dev/qvtec/articles/b66911e2e9a829)

> tmux内でClaude Codeを動かしてもcmuxのサイドバーに状態を表示する — @mskbhd [Zenn](https://zenn.dev/mskbhd/articles/tmux-cmux-claude-code-sidebar)

> Claudeで、Claude用のTUIを作る。複数セッションの管理ツールを自作 — @zechdz [Zenn](https://zenn.dev/xtm_blog/articles/72eee03dde0450)

> スマホだけで PR 作成からマージまで完結させた話 — Claude Pro の月額上限を毎日少しずつ使い切る — @ぽん [Zenn](https://zenn.dev/tukaponx/articles/249c4384f94442)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
