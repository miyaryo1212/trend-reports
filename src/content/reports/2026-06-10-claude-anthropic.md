---
title: "Claude Fable 5一般公開・Mythos級モデルが誰でも利用可能に"
summary: "AnthropicがOpus超えの新ティア「Claude Fable 5」を一般公開。同時にパートナー限定の「Claude Mythos 5」も発表。Claude Code v2.1.170でFable 5対応、v2.1.169で--safe-modeや/cdコマンドを追加。"
importance: 5
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-10
features:
  - "Claude Fable 5"
  - "Claude Mythos 5"
  - "Claude Code v2.1.170"
  - "Claude Code v2.1.169"
codex_review: "Fable 5の一般公開は確かに目を引くが、私にはClaude Codeのsafe-modeや運用改善のほうが本丸に見える。派手な性能競争より、実務で壊さず回すための整備が一段進んだニュースだ。"
codex_importance: 4
---

## 公式アップデート

### Claude Fable 5 一般公開（6月9日）

Anthropicが第5世代モデル「Claude Fable 5」を一般公開した。Opusのさらに上に位置する新ティア「Mythosクラス」の初の一般提供モデル。ソフトウェア工学・科学研究・ビジョンで最先端性能を達成し、API価格は入力$10/出力$50 per 1M tokens。Pro/Max/Team/Enterpriseプランで利用可能。

[ソース](https://www.anthropic.com/news/claude-fable-5-mythos-5)

### Claude Mythos 5 発表（6月9日）

Fable 5と同一の基盤モデルだが、安全分類器を外した最上位モデル。サイバーセキュリティ・生物学研究に特化し、検証済みパートナー限定で提供開始。

[ソース](https://www.anthropic.com/news/claude-fable-5-mythos-5)

### Claude Code v2.1.170（6月9日）

Fable 5対応リリース。VS Code統合ターミナルから起動したセッションでトランスクリプトが保存されず `--resume` に表示されない問題を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.170)

### Claude Code v2.1.169（6月8日）

主な新機能:
- `--safe-mode` フラグ追加: CLAUDE.md・プラグイン・Skills・Hooks・MCPサーバーをすべて無効化してトラブルシュート可能に
- `/cd` コマンド追加: セッション途中でワーキングディレクトリを変更してもプロンプトキャッシュを壊さない
- `disableBundledSkills` 設定追加: バンドルされたスキル・ワークフロー・ビルトインスラッシュコマンドを非表示に

その他、企業向けMCPポリシーの強制漏れ修正、macOSでの30-50ms UIスタル解消、Windows上の `claude -p` ハング修正、バックグラウンドエージェントの各種修正など多数のバグフィックスを含む。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.169)

## コミュニティの反応

### Claude Fable 5 / Mythos 5

#### Tips

> Anthropic、Opus超えの新ティア「Claude Fable 5」を一般公開 — Mythosクラスモデルの初の一般提供について速報解説。FableとMythosは同一基盤で安全分類器の有無が違い — @akasara [Zenn](https://zenn.dev/akasara/articles/ce6287e39a9a52)

> Claude Fable 5登場 — Hacker Newsで1,102いいねを獲得。既存Claude 4.Xファミリーとの位置づけや開発者向けの対応指針を整理 — @picnic [Qiita](https://qiita.com/picnic/items/337ee23813aaed8ba100)

> Claude Fable 5 & Mythos 5 発表：次世代AIモデルの概要と対応指針。公式アナウンスの詳細解説 — @picnic [Qiita](https://qiita.com/picnic/items/42111f155348f97c74e6)

### Claude Code 運用・ハーネス設計

#### Tips

> Claude Code Routinesを活用したRuboCop TODO解消の仕組み。手動修正やunsafeルールにも対応し、コード修正からRSpec・PR説明文作成まで自動化 — @ちばよしはる [Zenn](https://zenn.dev/tsukulink/articles/4057a83ea2217b)

> Claude Code運用ハーネスを「小さく分けて直せる形」にした理由。編集半径を小さく・発火条件で層を分ける・捨てられる単位で持つ3原則 — @harness [Zenn](https://zenn.dev/harness/articles/claude-code-harness-design-philosophy)

> Claude Code 無人自律編 — ask が無力な世界で機構で守る。無人運用ではallow/deny/hook/sandboxで安全を担保する設計 — @Koji Sumiyoshi [Zenn](https://zenn.dev/kojisumiyoshi/articles/ai-agent-unattended-autonomy)

> 設計の穴を実装前に潰す「疑い屋」エージェントを足したら、初仕事で設計の穴を8個見つけてきた話（C3 v2.33.0〜v2.34.0） — @satoh-y-0323 [Zenn](https://zenn.dev/satoh_y_0323/articles/2204725457d5aa)

> AIエージェント開発チームの「憲法」をどう設計したか — 3層ガバナンスの記録 — @ペンネ株式会社 [Zenn](https://zenn.dev/penne_inc/articles/ai-agent-governance-constitution)

### Claude Code コンテキスト・コスト管理

#### Tips

> コンテキスト管理とコスト最適化——Claudeを長く快適に使うコツ。中級者向け教科書シリーズCh6 — @シュンク堂 [Zenn](https://zenn.dev/shun_producer/articles/ceafc2a23c1b21)

> 症例報告：コンテキスト使用率18%で発症した「AIのせん妄」。容量に余裕があってもLLMは壊れることの観察記録 — @ミミ [Zenn](https://zenn.dev/xei/articles/ai-context-pollution-delirium)

> Claude Codeで固定したはずのモデルが勝手に切り替わる——自分のログで本当に何が動いたか確かめる方法 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/68c10b6026835b78c0b5)

### Managed Agents・プラットフォーム活用

#### Tips

> Claude Managed Agents で社内データ・ログ・コードを横断調査する Slack bot を安定運用する方法。ダイニーでの実装パターン紹介 — @まりる [Zenn](https://zenn.dev/dinii/articles/1cfac1ca8b46c3)

> Claude Managed Agents入門 — セルフホスト不要でAIエージェントを動かすAPIガイド — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/230-claude-managed-agents-api-guide)

> Anthropic Claude Teamプラン完全ガイド——6月15日の変更も含めて整理 — @AI Ops Insider [Zenn](https://zenn.dev/aiops_insider/articles/55bdc86ec844ca)

### Claude Code 活用事例

#### Tips

> 個人開発でもチーム開発と同じようにCIを入れたら、AIとの共同作業がうまくいった — @zaspa [Zenn](https://zenn.dev/zaspa/articles/2ac21ada6445d5)

> freeeの仕訳をClaude Codeに全部やらせてみた。番頭プラグインで10分セットアップ — @Michie [Zenn](https://zenn.dev/kanseilink/articles/bantou-freee-diagnosis)

> Claude Code + freee-mcpで請求書作成してみた — @MOhhh [Zenn](https://zenn.dev/mohhh_ok/articles/freee-mcp-invoice-creation)

> オッカムの剃刀で作るAIソリューションアーキテクト。Agent Toolkit for AWSとSkillsでdraw.io形式のアーキテクチャ図を作成 — @Hiroaki Kojima [Zenn](https://zenn.dev/exwzd/articles/20260603_agent_toolkit_aws_2)

> Claude Code / Cowork のテレメトリ監視基盤を AWS で内製した — @Masahiro Ito [Zenn](https://zenn.dev/incudata/articles/11fdba655abae5)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
