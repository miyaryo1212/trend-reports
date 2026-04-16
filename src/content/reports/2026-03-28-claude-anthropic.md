---
title: "ハーネス設計とMEMORY.md活用がコミュニティで急拡散"
summary: "公式リリースは前日のv2.1.85が最新。コミュニティではAnthropicの「ハーネス設計」ブログ記事への反応が複数、MEMORY.md活用術やチーム並列開発、レート制限バグ報告が話題に。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-28
features:
  - "hooks条件フィルタ(ifフィールド)"
  - "MCP headersHelper用環境変数"
  - "スケジュールタスクのタイムスタンプ"
  - "Deep Link 5,000文字拡張"
  - "MCP OAuth RFC 9728対応"
  - "組織ポリシーによるプラグインブロック"
  - "PreToolUse hookでAskUserQuestion応答"
  - "OTELツールパラメータのゲーティング"
  - "PowerShellツール (Windows プレビュー)"
  - "TaskCreatedフック"
  - "WorktreeCreate HTTP hookサポート"
  - "allowedChannelPlugins管理設定"
  - "アイドル復帰プロンプト"
  - "スキル/ルールのpaths:フロントマター拡張"
  - "MCP説明文の2KB制限"
  - "3Pモデルカスタマイズ環境変数"
  - "レスポンスの行単位ストリーミング"
codex_review: "機能追加そのものより、ハーネス設計やMEMORY.md運用みたいな“使いこなしの作法”が一気に共有知になっているのが面白い。派手さは薄いが、AIコーディングが個人芸から組織運用へ移る節目としてはかなり重要だと思う。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

本日の新規リリースはありません。最新は前日の v2.1.85（2026-03-27）です。

### v2.1.85（前回から継続）

hooks の条件フィルタ（`if` フィールド）、MCP OAuth RFC 9728 対応、組織ポリシーによるプラグインブロック、PreToolUse hook の AskUserQuestion 応答など、エンタープライズ・自動化向け機能が中心。詳細は前回レポート参照。

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.85)

### v2.1.84（前回から継続）

PowerShell ツール（Windows プレビュー）、3P モデル設定環境変数、TaskCreated フック、MCP 説明文 2KB 上限など。

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.84)

## コミュニティの反応

### Hooks条件フィルタ（ifフィールド）

#### ポジティブ

> hooksにif条件フィルタが追加。process spawnsが12→3に減りfree perf win。特定のコマンドのみhooks実行でminutesを節約。 — @jarredsumner [X](https://x.com/i/status/2037675111172743184)

> Permission rule syntax is a game-changer。useful when you want a hook on some bash commands but not every single one。 — @lydiahallie [X](https://x.com/i/status/2037641086391533839)

> 不要なプロセス起動を削減、CIも軽くなりそう。hooksガッツリ使ってる人にはかなり嬉しい。 — @hiro8ma [X](https://x.com/i/status/2037818222112833852)

> ワークフロー自動化の精度を一段引き上げる。`Bash(git *)`でgitコマンド時のみ発火可能に。 — @oikon48 [X](https://x.com/i/status/2037664421154378088)

### Anthropic「ハーネス設計」ブログへの反応

#### ポジティブ

> AIエージェントのハーネス設計｜Anthropicが公開した「生成と評価の分離」パターンを読み解く。AIエージェントに自分の仕事を評価させるなという警告 — @たきびラボ [Zenn](https://zenn.dev/takibilab/articles/anthropic-harness-design)

> Anthropicの「ハーネス設計」論文を読んで、Claude Codeの開発環境を全部見直した。CLAUDE.md・スキル・エージェント・フックで「生成と評価の分離」を再現 — @Lovanaut [Zenn](https://zenn.dev/lova_man/articles/99777e473b3c2c)

### hooks 条件フィルタ（v2.1.85 `if` フィールド）

#### Tips

> Claude Code v2.1.85の新機能「hookのifフィールド」で不要なプロセス起動をゼロにする。lsでもgit専用hookが起動していた問題が解消 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/7079866e9dc239fcdd57)

> Claude Codeのhookが動かない——5分で原因を特定する診断ガイド。`npx cc-safe-setup --doctor` で13項目を自動チェック — @yurukusa [Qiita](https://qiita.com/yurukusa/items/62c6a8ac104a2750358f)

### MEMORY.md / CLAUDE.md 活用

#### ポジティブ

> Claude CodeのMEMORY.mdを育てたら開発速度が3倍になった。50機能超のERPで毎朝同じ説明を繰り返していたのがゼロに — @yuya1778 [Zenn](https://zenn.dev/yuay1778/articles/claude-code-memory-md)

#### Tips

> Claude Code: CLAUDE.md と MEMORY.md の正しい使い方。公式ドキュメントを読み直して整理したポイント — @Junko [Zenn](https://zenn.dev/junko_ai/articles/311b69300fde6d)

### チーム並列開発・マルチエージェント

#### ポジティブ

> Claude Codeに「5チーム並列で作って」と言ったら1日で15機能できた。事前のアーキテクチャ整備が前提、準備なしだと盛大に壊れる — @yuya1778 [Zenn](https://zenn.dev/yuay1778/articles/claude-code-parallel-teams)

> ClaudeCode fast mode で AgentTeams回してみた。Opus 4.6 thinkingに高速モードで最強チームを組ませる実験 — @暁 [Zenn](https://zenn.dev/akatuki_me/articles/eae3ece077bb83)

> NanoClawを使ってローカル環境から怪盗団を作成。Discord上で各キャラが独立ユーザーとして発言し議論するマルチエージェント — @うし [Zenn](https://zenn.dev/usshi3560/articles/eff0bedcfd9533)

### レート制限バグ

#### ネガティブ

> 1プロンプトで全部溶けた日。3月23日頃からMax 20xプランで使用量が1プロンプトで21%→100%に跳ね上がる報告が殺到。GitHub Issue #38335, #38345 に集中 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-daily-2026-03-27)

### 複利的エンジニアリング / コンテキストエンジニアリング

#### Tips

> Claude Codeで実践する複利的エンジニアリング。Agentic Coding Trends Reportが示すプロンプトエンジニアリング→コンテキストエンジニアリングへのパラダイムシフト — @ko.+ (Happy Elements) [Zenn](https://zenn.dev/happy_elements/articles/c675ace8e7307b)

### Claude Computer Use

#### ポジティブ

> Claude Computer Use が来た。3月24日にmacOS向けリサーチプレビューとして正式追加。コネクタ→ブラウザ→デスクトップ操作の優先順位設計を解説 — @zenchaine [Zenn](https://zenn.dev/zenchaine/articles/claude-computer-use-dispatch-cowork)

### Permissions / 確認疲れ対策

#### Tips

> Claude Code の Permissions を理解して確認疲れをなくす。モードの使い分けと個別設定のまとめ — @Junko [Zenn](https://zenn.dev/junko_ai/articles/f1b5bec3432dbf)

### ドキュメント構造・コミット設計

#### Tips

> AIエージェント開発のドキュメント構造設計。specs/records分離の失敗と「工程=フォルダ」の原則への転換 — @maki [Zenn](https://zenn.dev/saytooy_arch/articles/05-doc-structure-design)

> 機械的作業とエージェンティック作業のコミットを分けよう。数か月のエージェント開発後のリファクタを見据えた運用 — @sakakibarakiaki [Qiita](https://qiita.com/sakakibarakiaki/items/90296db4a2231b66fdff)

> AIエージェントのためのディレクトリ管理指針。「薄く・隔離・積極的忘却」のモデル中心主義 — @かふか [Zenn](https://zenn.dev/kafka2306/articles/5c21f4d010baeb)

### 定期実行・自動化サーバー構築

#### Tips

> Claude Code専用サーバーを無料で建てて、cron + remote-control で超便利な開発環境を作る方法。Oracle Cloud Free Tier（ARM 4コア/24GB）活用 — @もも [Zenn](https://zenn.dev/momozaki/articles/62d027e36657d6)

> ADR × Claude Code で技術ブログの量産パイプラインを作った話。パイプライン自体で生成された記事 — @tyabu12 [Zenn](https://zenn.dev/tyabu12/articles/0005-adr-claude-code-blog-pipeline)

> Claude CodeでGitHubのIssueを自動作成・PR作成・自己成長させてみた。毎朝6時にAIがIssueを提案、ラベル1個で実装開始 — @umamichi [Zenn](https://zenn.dev/umamichi/articles/77db1fef83fdb7)

### Git worktree 活用（前回から継続）

#### Tips

> Claude Code でファイル変更前に git worktree を自動作成する。CLAUDE.mdにルールを書くだけで実現 — @tdksk [Zenn](https://zenn.dev/tdksk/articles/9c58010148592b)

### AWS / サーバーレス活用

#### Tips

> Claude Code で AWS サーバーレス開発を高速化した話。Lambda 20個以上・Terraform 170ファイル以上の規模で本格導入 — @seigen [Zenn](https://zenn.dev/geneg/articles/claude-code-aws-serverless)

### AIコーディング週間

#### ポジティブ

> 今からでも遅くない。AIコーディング週間をやってみよう（minimo Webチームの実践）。1週間人間が直接コードを書くことを禁止して開発 — @たくのこ (MIXI) [Zenn](https://zenn.dev/mixi/articles/8c9e3923d45b41)

### Hooks による通知

#### Tips

> Claude Code の作業完了を通知する方法。Hooks機能でmacOS通知センターに通知を飛ばす — @shiro_kuma_san [Zenn](https://zenn.dev/shiro_kuma_san/articles/2e89103997efc6)

### 環境変数リファレンス

#### Tips

> Claude Code 環境変数まとめてみた。大量にある環境変数を体系的に整理した完全ガイド — @Tatsuya (Fairtech) [Zenn](https://zenn.dev/fairtech_blog/articles/2b5570d34e49cf)

### Anthropic 8万人調査レポート

#### 中立

> Anthropicが8万人にAIインタビューした調査レポートが面白かった。159カ国・70言語、80,508人対象の「What 81,000 people want from AI」を紹介 — @9mak (エーピーコミュニケーションズ) [Zenn](https://zenn.dev/ap_com/articles/anthropic-81k-ai-survey-20260327)

### AI習熟曲線

#### 中立

> AIとの「習熟曲線」が成果を分ける。Anthropicの「Economic Index: Learning Curves」レポート（約100万件データ）と1年間の実体験を照合 — @m_koshikawa [Qiita](https://qiita.com/m_koshikawa/items/88b6f1e3ff6673738d14)

### howへのこだわり方

#### 中立

> howにこだわらずhowにこだわれ。エージェントが生成するhowを細かくレビューし続けてはいけない。エージェントは進化する — @しもし [Zenn](https://zenn.dev/simossyi/articles/bf813c49c1018b)

### 非エンジニアの活用

#### ポジティブ

> 非エンジニアによるAIエージェント開拓記。「うちの会社には早すぎる」という反応を超えて活用を模索する記録 — @Tetsuro [Zenn](https://zenn.dev/tetsuro_works/articles/ai-agent-frontier-log-01)

### /dream コマンドと長期記憶（前回から継続）

#### ポジティブ

> Claudeが眠るようになった。/dreamコマンド（Auto-Dream）と自作2層メモリの住み分けを検証（前回から継続） — @K.Hirano [Zenn](https://zenn.dev/metamark/articles/eb7ab6fa9bc759)

### セキュリティ（前回から継続）

#### 中立

> Claude × Mozilla Firefox 脆弱性発見。2週間に22件発見（14件が高深刻度）の手法解説（前回から継続） — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/029-claude-firefox-vulnerability-ai-security)

### Claude 障害時のフォールバック（前回から継続）

#### Tips

> Claude障害時でも止まらないTelegramボット。Gemini・OllamaへのLLMフォールバック実装（前回から継続） — @アクロパパ [Zenn](https://zenn.dev/acropapa330/articles/llm_fallback_bot)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
