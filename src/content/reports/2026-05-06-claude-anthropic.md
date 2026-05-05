---
title: "金融特化テンプレート・MS365連携・Managed Agentsベータが一斉展開"
summary: "Claude Platformが金融サービス向けエージェントテンプレート10種、Microsoft 365アドイン、新データコネクタ8種を公開。Managed Agentsがパブリックベータに。Claude Code v2.1.128ではプラグインzip対応やMCP改善など多数修正。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-06
features:
  - "Claude Code v2.1.128リリース"
  - "金融サービス向けエージェントテンプレート10種公開"
  - "Microsoft 365連携アドイン"
  - "新データコネクタ8種追加"
  - "Moody's MCPアプリ"
  - "Claude Managed Agentsパブリックベータ公開"
codex_review: "派手なのはManaged Agentsだが、私にはMS365連携と金融向けテンプレートの同時投入のほうが効いて見える。新規性は強くない一方、Claudeを“試す道具”から“社内標準”へ寄せる地味に重い一手だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.128リリース

5月4日リリース。主な変更点:

- `--plugin-dir` が `.zip` プラグインアーカイブに対応
- `--channels` がコンソール（APIキー）認証で動作可能に
- `/mcp` がツール数表示・0ツール接続サーバーの警告に対応
- `/color` 引数なしでランダムカラーを選択
- `EnterWorktree` がローカルHEADからブランチを作成するように修正（unpushed commitsが消える問題を解消）
- 1Mコンテキストモデルで「Prompt is too long」と誤判定される問題を修正
- 並列シェルツール呼び出しで読み取り専用コマンドの失敗が兄弟呼び出しをキャンセルしなくなった
- サブエージェントのプログレスサマリーによるキャッシュ消費を約3倍削減
- MCP: `workspace` が予約サーバー名に。再接続時のツールリスト通知をサマリー化
- その他多数のバグ修正（stdin 10MB超クラッシュ、フルスクリーンURL折り返し、vim Spaceキー動作等）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.128)

### Claude Platform: 金融サービス向けエージェントテンプレート10種公開

ピッチビルダー、決算レビュー、KYCスクリーニング等、すぐに使えるエージェントテンプレートをClaude Cowork/Codeプラグインとして提供。金融業界でのClaude導入障壁を下げる施策。

### Claude Platform: Microsoft 365連携アドイン

Excel、PowerPoint、Word向けのClaudeアドインが利用可能に。Outlook版も近日公開予定。Office内からClaude機能にアクセスでき、アプリ切り替えが不要に。

### Claude Platform: 新データコネクタ8種追加

Dun & Bradstreet、Fiscal AI、Financial Modeling Prep、Guidepoint、IBISWorld、SS&C IntraLinks、Third Bridge、Veriskの8種を追加。金融・リサーチ分野のデータアクセスを強化。

### Moody's MCPアプリ

6億社以上の信用格付け・データにアクセス可能なMCPコネクタを提供。

### Claude Managed Agents: パブリックベータ公開

Claude Platform上でマネージドエージェントがパブリックベータとして利用可能に。メモリ機能もベータで追加され、APIヘッダー指定で過去のやり取りを記憶して長期タスクに活用可能。

## コミュニティの反応

### Microsoft 365連携アドイン

#### ポジティブ

> Word、Excel、PowerPointにClaudeアドインを導入し、アプリ切り替え不要で文章簡潔化・グラフ作成・論理確認が可能に。医療現場の業務が大幅に効率化された — @tenso_ai_med [X](https://x.com/i/status/2051041764887409128)

> ClaudeをExcelのアナリスト、Wordのエディタ、PowerPointのストラテジストとして活用すると毎週数時間節約できる — @NatanMohart [X](https://x.com/i/status/2051695630221795547)

#### Tips

> Word・Excel・PowerPoint内でClaudeアドインを追加するだけで、文書レビュー・数式チェック・スライド作成をOffice内で完結できる — @shota7180 [X](https://x.com/i/status/2049778283240423824)

### Claude Managed Agents

#### ポジティブ

> Claude Managed Agentsをfalの開発で活用し、GPT Image 2 + Seedance 2のレビューとプロンプト指示をOpus 4.7で自動化していて大好きだ — @noahsolomon [X](https://x.com/i/status/2050145785891914119)

> Claude Codeに内蔵された/claude-apiスキルでClaude PlatformのManaged Agentsなどを直接扱えるのが便利 — @RoundtableSpace [X](https://x.com/i/status/2051742474880627019)

#### Tips

> Claude Managed Agentsの業務自動化視点から「乗せられる層」と「自前で持つ層」を整理した記事を公開 — @ikenyal [X](https://x.com/i/status/2051565136876642446)

> Claude Managed Agentsにメモリ機能がパブリックベータで追加。APIヘッダー指定で過去やり取りを記憶して長期タスクに活用可能 — @racfe_co [X](https://x.com/i/status/2051164935900836308)

> Claude Managed Agentsで消える層、残る層: 業務自動化エージェントの視点から。p50 TTFT 60%減・p95 90%減というインフラレベルの改善を分析 — @ikenyal [Zenn](https://zenn.dev/genda_jp/articles/8038f227ba9bdf)

### Claude Codeサブエージェント活用

#### Tips

> Claude Codeで調査を並列化したら20分が3分に。Agentツールでサブエージェントを並列起動し、メインコンテキストの汚染を防ぐ手法 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-subagent-parallel-research-20260505)

### Claude Codeの開発手法

#### Tips

> Claude Codeで試すImplementation Driven SDD。brainstorming→plans→実装→仕様出力の順で、実装後に仕様を落とし込む手法 — @ゆらの [Zenn](https://zenn.dev/yur4no/articles/claude-code-implementation-driven-sdd)

> BigQuery × Claude Codeで月次事業報告書を自動作成する仕組み。KPIデータ抽出からMarkdownレポート生成、Slack通知までの自動化 — @ウェブの便利屋 [Zenn](https://zenn.dev/web_benriya/articles/bigquery-claude-code-monthly-business-report)

> Claude Codeで作ったdiffツールにローカルLLMを組み込む。Go未経験からClaude Codeで開発した記録 — @rea9r [Zenn](https://zenn.dev/rea9r/articles/0871464db0d3a7)

> AWS CDK × Claude Codeでチケット管理アプリを作る（構想編・環境構築編） — @pekopugu [Zenn](https://zenn.dev/pekopugu/articles/aws-cdk-ticket-app-01)

### CLAUDE.md設計論（前回から継続）

#### Tips

> CLAUDE.mdを育てる技術｜4プロジェクト運用で学んだメモリ設計。feedbackメモリの実践例と保存すべきものの判断基準 — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-claude-md-multi-project)

> Claude Codeの設定ファイルをGUIで生成するWebアプリをNext.js 16 + Supabaseで作った — @みやた [Zenn](https://zenn.dev/fune/articles/8240544470a0d4)

### CodexとClaude Codeの併用

#### Tips

> CodexとClaude Codeの併用で学んだこと（Issue運用＆.md編）。IssueとCLAUDE.md/AGENTS.mdの役割分担が安定のカギ — @UKM [Zenn](https://zenn.dev/ukm/articles/cc22e39a0f6dd8)

> Claude CodeとCodexの併用で学んだこと（容量制限編）。設計と実装を分離し、Sonnetで事前設計してからOpusに渡す工夫 — @UKM [Zenn](https://zenn.dev/ukm/articles/179d2f90ac8abd)

### Opus 4.7の実践評価（前回から継続）

#### ポジティブ

> Claude Opus 4.7の登場によって驚異のコーディング力を手に入れた話。Opus 4.6でも実用的だったが4.7で「不可逆な変化」を確信 — @こばゆう [Zenn](https://zenn.dev/siromiya/articles/752222ffa855b3)

### エンタープライズ・規制対応

#### Tips

> 規制業界のデータレジデンシー要件下でAIエージェントの推論を日本国内に閉じる。Amazon Bedrock JP Geo Cross-Region InferenceでOpus 4.7/Sonnet 4.6を国内ルーティング — @nemf [Zenn](https://zenn.dev/nemutaizo/articles/afe031ef2310ea)

### Claude Codeセキュリティ実践（前回から継続）

#### Tips

> 【初心者向け】社内PCでClaude Codeを使う前に知っておきたいセキュリティの罠と対策 — @はちみつ [Zenn](https://zenn.dev/shun0326/articles/1a144d73f0f2f0)

### A2Aエージェント間連携

#### Tips

> AIに任せたはずなのに人間がコピペ中継している — A2A AgentCardで解消した。エージェント間で「何ができるか」を共有する仕組み — @いち [Zenn](https://zenn.dev/i_ichi/articles/claude-code-agentcard-role-boundary)

### AI認知バイアスの警鐘

#### ネガティブ

> AIに「最適です」と言われた瞬間に検証が止まる: METRが映した3つの認知バイアス。経験豊富な開発者がAIツールを使うと生産性が主観に反して19%下がったRCT結果を紹介 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/ai-cognitive-bias-3-types-metr-rct)

### Anthropicの動向

#### Tips

> AnthropicのAI Fluency Indexから学ぶ、AIを使いこなすということ。「人々は本当にAIをうまく使えるようになっているのか」を測定した調査を読み解く — @よこやまたく [Zenn](https://zenn.dev/seekseep/articles/anthropic-ai-fluency-index-for-engineers)

### Claude Code運用Tips

#### Tips

> Claude Codeのloopスキルでポーリング監視。一定間隔で同じ指示を繰り返し実行するバンドルスキルの使い方 — @becky [Zenn](https://zenn.dev/rhythmcan/articles/a076d7ca13350c)

> Claude Code CLIにMiniMaxをフォールバックとして組み込んだ話。安いLLMを2段構えで運用する戦略 — @fukukei23 [Zenn](https://zenn.dev/fukukei23/articles/claude-code-minimax-fallback)

> GitHub ActionsでCopilot SDKを使いPRにあがってきたClaude Skillsの効果検証をしてみる — @Rick2200 [Zenn](https://zenn.dev/rick2200/articles/9db3f4e32f9286)

> Claudeに毎朝のSlack棚卸しを任せたら、1日43分浮いた話 — @Ngen [Qiita](https://qiita.com/Ngen/items/7f8b867e455a2eebd8c3)

> Claude Desktopのハードウェアバディ機能でM5 StickC Plusと物理デバイス接続 — @moritalous [Qiita](https://qiita.com/moritalous/items/cd53aec76db1dec20862)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
