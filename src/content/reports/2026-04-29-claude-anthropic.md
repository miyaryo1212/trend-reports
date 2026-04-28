---
title: "v2.1.121でMCP常時読込・メモリリーク修正、Claude Design登場"
summary: "Claude Code v2.1.121がリリースされMCP alwaysLoadオプションやメモリリーク修正など安定性向上。Anthropic LabsからClaude Designが登場しUIデザイン生成が話題に。コミュニティではPermission自動化OSS、ルーチン活用、品質劣化ポストモーテム解説が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-29
features:
  - "[Claude Code v2.1.121] MCP alwaysLoad オプション"
  - "[Claude Code v2.1.121] claude plugin prune コマンド"
  - "[Claude Code v2.1.121] /skills 検索ボックス"
  - "[Claude Code v2.1.121] PostToolUse フック拡張"
  - "[Claude Code v2.1.121] CLAUDE_CODE_FORK_SUBAGENT=1 非インタラクティブ対応"
  - "[Claude Code v2.1.121] Vertex AI mTLS ADC サポート"
  - "[Claude Code v2.1.121] メモリリーク修正"
  - "[Claude Code v2.1.121] MCP サーバー自動リトライ"
  - "[Claude for Creative Work] クリエイティブツール連携コネクタ"
  - "[Claude Design] Anthropic Labs 新プロダクト"
  - "[Anthropic] シドニーオフィス開設"
  - "[Anthropic] Xero パートナーシップ"
codex_review: "派手なのはClaude Designだが、私には常時MCP読込やメモリリーク修正のほうが本筋に見える。流行り物より“毎日使える道具”へ寄せる局面で、地味だが競争力を底上げする更新だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.121

4月28日リリース。MCP・プラグイン・フックまわりの機能追加と、複数のメモリリーク修正が中心の安定化リリース。

**主な新機能:**

- **MCP `alwaysLoad` オプション**: MCPサーバー設定に `alwaysLoad: true` を追加すると、ツール検索の遅延読み込みをスキップして常時利用可能に
- **`claude plugin prune` コマンド**: 孤立した自動インストール済みプラグイン依存関係を削除。`plugin uninstall --prune` でカスケード削除も可能
- **`/skills` 検索ボックス**: スキル一覧でタイプ入力によるフィルタ検索が可能に
- **PostToolUse フック拡張**: 全ツールで `updatedToolOutput` によるツール出力の置換が可能に（以前はMCPのみ）
- **`CLAUDE_CODE_FORK_SUBAGENT=1` 非インタラクティブ対応**: SDKや `claude -p` でフォークサブエージェントが動作可能に
- **Vertex AI mTLS ADC サポート**: X.509証明書ベースの Workload Identity Federation（mTLS ADC）に対応
- **MCP サーバー自動リトライ**: 起動時の一時的エラーで最大3回自動リトライ

**主なバグ修正:**

- 大量画像処理時の無制限メモリ増加（マルチGB RSS）を修正
- `/usage` で最大約2GBのメモリリークを修正
- 長時間ツール実行時のメモリリークを修正
- Bashツールの起動ディレクトリが削除された場合に永続的に使用不能になる問題を修正
- `--resume` の起動時クラッシュ、破損トランスクリプト行のスキップ対応
- tmux・GNOME Terminal・Windows Terminal・Konsoleでのスクロールバック重複を修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.121)

### Claude Design（Anthropic Labs）

ソフトウェアUIコンセプトを探索し、Canvaへエクスポート可能な新デザインツールがAnthropic Labsからリリース。テキストプロンプトでプロトタイプ・スライド・LP・UIモックアップを生成できる。

### クリエイティブツール連携コネクタ

Claude for Creative Workとして、Ableton、Adobe Creative Cloud、Affinity by Canva、Autodesk Fusion、Blender、Resolume、SketchUp、Spliceとの統合コネクタが発表。

### Anthropic シドニーオフィス開設

オーストラリア・ニュージーランド事業を統括する拠点を開設。GMにTheo Hourmouzisを任命。

### Xero パートナーシップ

複数年契約でClaude AIをXeroプラットフォームに直接統合。

## コミュニティの反応

### Claude Code v2.1.121 リリース

#### ポジティブ

> v2.1.121のMCPサーバーalwaysLoadオプションによりツールが自動読み込みされ、毎回の手動操作が消滅し開発効率が大幅向上 — @AiAircle34052 [X](https://x.com/i/status/2049043489594433918)

> v2.1.121で`/skills`に検索ボックスが追加され、長いリストをスクロールせずにスキルを検索可能に。日常インフラ化を進めるリリース — @masayan_ai_hack [X](https://x.com/i/status/2049032971601223749)

> 派手ではないが、プラグイン・スキル・MCPの日常インフラ化を進めるリリース — @macdev999 [X](https://x.com/i/status/2049056843888992651)

> Claude Code 2.1.121の変更点まとめ: MCP alwaysLoad、/skills検索、メモリ修正 — @trailfusion_ai [Qiita](https://qiita.com/trailfusion_ai/items/a13be10dea2dd0780f71)

### Claude Design

#### ポジティブ

> テキストプロンプトで高品質なUIデザイン、プロトタイプ、スライドを生成でき、非デザイナーでも実用レベルでビジュアル資料を作成可能 — @hata_AI_master [X](https://x.com/i/status/2047641452306661887)

> 会話しながらLP・スライド・プロトタイプを高速生成でき、デザイン知識不要で15分でアウトプットが出せる。中小企業担当者が外注作業を自社でこなせる — @stonewebstone [X](https://x.com/i/status/2047073588268962180)

> Claude DesignがFigma AIとの徹底比較。発表当日Figma株価が約7%下落し市場の脅威認識が明確に — @zztomcat [Zenn](https://zenn.dev/zztomcat/articles/a840fc4148e334)

> Claude Design × Claude CodeでURLを渡すだけで実装まで走らせた。エージェント同士のURL手渡し体験が地続き — @ゆと [Zenn](https://zenn.dev/citron24ah/articles/claude-design-x-claude-code-yubin-gacha-visual)

#### Tips

> Claude Designの活用ワークフローは、テンプレート生成→サイト要素投入→組み合わせとhandoff bundleでコード化の3ステップ — @yuichisatoeco [X](https://x.com/i/status/2048628470150824280)

### Permission自動化・セキュリティ

#### Tips

> 97%のPermission確認を自動化するCoding Agent用OSS「ccgate」が誕生。1ヶ月約2000件のPermission確認のうち97%近くが自動化された — @tak848（LayerX） [Zenn](https://zenn.dev/layerx/articles/20260428-ccgate)

> pre-commitシークレットスキャナ「keygate」をClaude Codeプラグイン化して公開 — @kanekoyuichi [Qiita](https://qiita.com/kanekoyuichi/items/ec468326c348afbb78ce)

> Claude Code初心者がやってしまいがちなミス5選 — セキュリティ事故を防ぐために最初に知っておきたいこと — @karaagedesu [Zenn](https://zenn.dev/karaagedesu/articles/9a5b690e547f87)

> 任意コード実行可能なClaude Codeの脆弱性（CVE-2026-40068）を発見した話。影響バージョンは2.1.63〜2.1.83、修正済み — @masa42（エーアイセキュリティラボ） [Zenn](https://zenn.dev/aeyesec/articles/31ef896f23babe)

### Routines・自動化活用

#### ポジティブ

> Claude Codeのルーチン機能で定期的にパフォーマンスチューニングをさせている。Repomixで実運用中 — @yamadashy [Zenn](https://zenn.dev/yamadashy/articles/claude-code-routines-perf-tuning)

> Claude Code Skillで毎週の記事執筆、SNS告知、レポート作成を自動化 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-skills-automation-20260428)

### 品質劣化ポストモーテム（前回から継続）

4月23日公開のAnthropic公式ポストモーテム解説が引き続き話題。3月4日〜4月20日の約7週間の品質低下は3つの独立バグの重複が原因。

#### Tips

> Claude Code品質劣化postmortem解説 — 3バグから学んだプロンプト1行の重み。冗長性削減のためのプロンプト1行が評価で3%の性能低下を引き起こしていた — @daisuke-nagata [Qiita](https://qiita.com/daisuke-nagata/items/437f92a3210fbfa99e62)

> Claude Codeが品質低下してた7週間、Anthropic公式ポストモーテムを噛み砕いて読む — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/claude-code-april-2026-postmortem)

### エージェント暴走・安全性（前回から継続）

#### ネガティブ

> 9秒で本番DBが消えた — AIエージェントが引き起こすデータ消失事件と、AIに足りないもの。PocketOS事件の詳細分析 — @CodeBond [Zenn](https://zenn.dev/76hata/articles/ai-agent-db-deletion-incidents-safety)

> エージェントが本番DBを消しちゃった？暴走AIエージェントと「ドラえもんの四次元ポケット」問題 — 構造的な問題として分析 — @ysky24 [Qiita](https://qiita.com/ysky24/items/0256a6dcc59ecdd4074d)

### MCP活用の実践

#### Tips

> OpenAPI specがあればどんなREST APIでもMCP化できる — FutureVulsで試した。REST APIのMCP化で直面した課題と解決策を共有 — @waka9841（GMOメディア） [Zenn](https://zenn.dev/gmomedia/articles/401097e4c680ea)

> Claude CodeにMCPを21個つないで「AI会社」を作った話 — 6部門のAIエージェント構成、自然言語ルールでディスパッチ — @Alba Luce [Zenn](https://zenn.dev/albaluce/articles/55586a0ee449b2)

### 非エンジニア・業務活用（前回から継続）

#### ポジティブ

> Claude Codeに仕事を譲った日 — 残ったのは「判断」と「責任」だった。IS出身でコード未経験のCRE担当がClaude Codeで技術調査を実行 — @Kokoichi（TOKIUM） [Zenn](https://zenn.dev/tokium_dev/articles/ca6f30192f6379)

> 大規模案件のSlackにAI社員3人を常駐させたら、2年目が参画1週間で設計根本に踏み込んだ — @htakasu（NTT DATA） [Zenn](https://zenn.dev/nttdata_tech/articles/bf6b694144e55a)

> 非エンジニアの「作りたい」と「安全に公開したい」を両立するSandbox MCPを作った — @辻 亮佑（エアークローゼット） [Zenn](https://zenn.dev/aircloset/articles/65efe9614f8e73)

### サブエージェント・マルチエージェント（前回から継続）

#### Tips

> Claude Code Agentで4並列subagent運用を1ヶ月試して分かった現実。並列起動するだけでは速度効果がほぼ出ない — @playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-agent-parallel-subagents-recruitment)

> 単体エージェントが息切れする現場へ — Anthropic 3エージェントハーネス実装ガイド — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/anthropic-3-agent-harness-2026)

### ハーネスエンジニアリング（前回から継続）

#### Tips

> CLAUDE.mdを「3層構造」で書くとClaude Codeが一気に賢くなる話 — グローバル/プロジェクト/サブディレクトリの3層分割 — @Alba Luce [Zenn](https://zenn.dev/albaluce/articles/c6b1280ef58aee)

> harnessは消えない、ただ移動する — AnthropicとOpenAIが同じ問いに出した違う答え — @Hongbo.Ding（Accenture Japan） [Zenn](https://zenn.dev/acntechjp/articles/7852387b0a367c)

### Opus 4.7

#### Tips

> Claude Opus 4.7リリース — xhigh新設とClaude Codeのデフォルト変更。SWE-bench Proで+10.9ポイントの伸び — @chimao222 [Zenn](https://zenn.dev/chimao222/articles/ai-dev-opus-4-7-20260428)

### コスト・課金

#### Tips

> もうAI開発のコストに怯えない。Claude Code / Codexを丸ごと可視化する「MAGI Platform」をローンチ — @ケイ [Zenn](https://zenn.dev/kei_concierge/articles/am-magi-platform-launch)

> エージェントコスト対策としてローカルLLMはアリ？— Ollamaで試してみた — @Renly（ヘッドウォーターズ） [Zenn](https://zenn.dev/headwaters/articles/509a1f83c693ce)

> Claude Code サードパーティ制限の全容と移行ガイド — OpenClaw・OpenCodeユーザー必読 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/200-claude-code-third-party-policy-guide)

### エンタープライズ・Google Cloud連携

#### ポジティブ

> Google Cloud Next '26 ブースレポート — AnthropicのClaude Agent SDK and Vertex AIセッション — @Hiromu Ogawa（ソフトバンク） [Zenn](https://zenn.dev/softbank/articles/d815368cf4eb45)

> Claude Cowork on Vertex AIは何が嬉しいのか — Google Cloud Next '26現地メモ — @Kazumasa Iwao（MBK Digital） [Zenn](https://zenn.dev/mbk_digital/articles/db99a38e334462)

### バイブコーディング論

#### 中立

> バイブコーディングは思ったより難しい — AI駆動開発で本当に必要なスキルとは。バイブコーディングで成果を出すには従来以上にエンジニアリングの素養が必要 — @GIANTY [Zenn](https://zenn.dev/gianty_inc/articles/0dc70043876f9d)

### Claude Code作者登壇

#### ポジティブ

> Claude Code作者Boris Chernyが登壇 — コードベース質問・プライバシー・チーム活用を解説。Zero setup、データはローカルに留まるという3つの価値提案 — @ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-boris-anthropic)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
