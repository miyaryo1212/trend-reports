---
title: "Claude Code v2.1.172リリース＋Anthropic研究・政策の大量発表"
summary: "Claude Code v2.1.172でサブエージェント5階層ネスト対応。Anthropicは研究・政策面でProject Glasswing、Anthropic Institute設立、再帰的自己改善の進捗報告など多数発表。Code with Claude Tokyo開催。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-11
features:
  - "Claude Code v2.1.172"
  - "Project Glasswing"
  - "Anthropic Institute設立"
  - "Claude on Mars"
  - "Project Deal"
  - "Policy on the AI Exponential"
  - "Agents in Biology"
  - "Recursive Self-Improvement"
codex_review: "正直、5階層ネストよりもAnthropicが研究・政策・現場導入を一気に束ねて見せた構図のほうが面白い。派手な新モデル発表ほどの爆発力はないが、業界の主導権をプロダクト外まで広げにきた動きとしては地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.172（6月10日）

主な変更点:
- **サブエージェントが最大5階層までネスト可能に** — サブエージェントが自身のサブエージェントを生成できるようになった
- **プラグインマーケットプレイスに検索バー追加** — `/plugin` でマーケットプレイス閲覧時に検索が可能に
- **1Mコンテキスト使用時の自動コンパクション** — Usage Credits なしで1Mコンテキストを使用しているセッションが永久にスタックする問題を修正。標準コンテキスト制限まで自動的にコンパクトされるように
- Amazon Bedrock が `~/.aws` 設定ファイルからリージョンを読み取るように改善
- OTELメトリクス `claude_code.lines_of_code.count` に `model` 属性を追加
- 長い会話でのパフォーマンス向上（冗長なメッセージ正規化の除去）
- `/goal` ステータスチップのアイドル時CPU使用量を削減
- `availableModels` 制限がサブエージェントモデルオーバーライド等に適用されていなかった問題の修正
- `WebFetch` ワイルドカードドメインルールが動作しなかった問題の修正
- バックグラウンドエージェントが別ディレクトリのプロジェクト設定を読む問題の修正
- その他多数のバグフィックス

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.172)

### Project Glasswing

Claude Mythos Previewを使用して主要OS・ブラウザの未知の脆弱性を大量検出するセキュリティイニシアチブ。$100Mのモデルクレジットを提供。

### Anthropic Institute設立

強力なAIの社会的影響を研究する新部門を設立。経済・雇用、社会的脅威、AIの価値観、自律AI開発ガバナンスの4領域をカバー。

### Claude on Mars

NASAジェット推進研究所（JPL）がClaudeを使用してPerseveranceローバーの400m走行ルートを設計。ルート計画時間を半減させた。

### Project Deal

Claude AIエージェント69人が186件・$4,000超の実取引を実施したマーケットプレイス実験。Opusエージェントは1品あたり約$2.68高く売却した。

### Policy on the AI Exponential

危険なAIデプロイのブロック権限・経済政策フレームワーク等の政策提言。$350Mの新規コミットメントを発表。

### Agents in Biology（Anthropic Research）

gget virusツールを開発。AIエージェントによるウイルス配列データ取得の精度を99.7%まで向上させた。

### Recursive Self-Improvement（Anthropic Research）

AIがAI開発を自動化する再帰的自己改善の進捗報告。エンジニアのコード出荷量が2021-2025年比で8倍に増加したとの分析。

## コミュニティの反応

### Claude Fable 5（継続）

Fable 5は前日一般公開。本日はコミュニティでのレビュー・検証記事が大量に公開された。

#### ポジティブ

> Fable 5でRust 3Dゲームエンジンをワンセッションで構築。物理エンジン・GUIエディタ・スクリプトエディタまで完成。Proプラン（$20/月）で実現 — @とんこつらーめん [Zenn](https://zenn.dev/tonrakun/articles/f1d57df4c3e2e8)

> 精度と速度は化け物。進捗の出方がOpusと桁違い。ただしトークン消費が激しく5時間制限に引っかかる — @やまと [Zenn](https://zenn.dev/yamato_snow/articles/d180340730d583)

> 「有意差なし ≠ 差なし」をFable 5は自発的に指摘。Opus 4.8は明示的に聞かれるまで触れなかった — @kento [Zenn](https://zenn.dev/beckento/articles/55fb157f9c242c)

> 解約リスク分析でFable 5 / Opus 4.8 / Sonnet 4.6を比較。数値スコアは大差ないが質的な「性格差」が明確。Fable 5 = 判定透明化、Opus 4.8 = メタ認知 — @shiroqujira [Zenn](https://zenn.dev/shiroqujira/articles/cb037aa83ef042)

#### Tips

> Fable 5のトークン消費問題をT0K3N-MCPで87%削減。Proプランでも実用的に使い倒す方法 — @とんこつらーめん [Zenn](https://zenn.dev/tonrakun/articles/2d0466c52a6ec4)

> Fable 5の安全策は「断る」ではなく「旧モデルに振る」。センシティブな質問への応答をルーティングで制御する設計 — @中村 啓 [Zenn](https://zenn.dev/hironakamura_ai/articles/ca76bb28509d94)

> Claude Fable 5の性能・料金・セーフガードの仕組みまとめ。Fable 5とMythos 5は同一基盤でセーフガードの有無だけが違う — @スナガク [Zenn](https://zenn.dev/sunagaku/articles/claude-fable-5-mythos-5)

> Claude Fable 5 — Opusの上に来た新ティアを実装者目線で整理。refusal/fallbackの実装・移行チェックリスト付き — @Darman [Zenn](https://zenn.dev/yutabeee/articles/claude-fable-5-developer-guide)

> Claude Fable 5を1日使ってみた所感。コーディング・開発作業中心のレビュー — @yo_arai [Qiita](https://qiita.com/yo_arai/items/30ae4581b8a9b3206b15)

> Google Cloud（GEAP）でClaude Fable 5が一般提供開始 — @asayan_mana [Qiita](https://qiita.com/asayan_mana/items/63dbd68350738e6d818e)

### Code with Claude Tokyo（6月10日開催）

#### ポジティブ

> Code with Claude Tokyo参加レポート。AI時代に強い組織とは何かを考えさせられた。「食らった1日」 — @船長 [Zenn](https://zenn.dev/paraponera/articles/2026-06-11-code-with-claude-tokyo)

> Code w/Claude Tokyoに行ってきた。Anthropic開発者カンファレンス日本初開催の会場の空気を記録 — @Junsei.T [Zenn](https://zenn.dev/nasubit/articles/9d6a5591f82f4f)

### Claude Code 運用・セキュリティ

#### Tips

> Claude Codeの worktree 隔離は信用するな — 1週間13件のインシデント。cwd継承問題でworktreeの隔離が破られた実体験とPreToolUseフックによる解決 — @ペンネ株式会社 [Zenn](https://zenn.dev/penne_inc/articles/claude-code-worktree-isolation-bug)

> Claude CodeのPreToolUseフックでAIエージェントの行動を物理的に制御する。設定ファイルで止められないならシェルスクリプトで止める — @ペンネ株式会社 [Zenn](https://zenn.dev/penne_inc/articles/claude-code-pretooluse-hook-permission-control)

> Coding Agentのコマンド実行をBash ASTベースで検査するツール「Vetol」を公開。Prefixベースのパターンマッチでは防げない回避を防止 — @tf63 [Zenn](https://zenn.dev/tf63/articles/vetol-tf63-20260610)

> Claude CodeにMCPサーバーを繋ぐ前に安全診断する「Aster Guard MCP」を公開。リスクスコアと12種類の検査 — @jimiaki7 [Qiita](https://qiita.com/jimiaki7/items/606da73f4ea0045ee696)

> MCPのAPIトークンをmacOS Keychainで安全に保管する方法 — @MOhhh [Zenn](https://zenn.dev/mohhh_ok/articles/mcp-token-macos-keychain)

> Claude CodeのEditが「成功」したのにファイルが変わっていない — 長いセッションで起きる沈黙の食い違いの検知法 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/0a30f73552a7ca5eace4)

> Claude Codeでツール呼び出しが実行されず生テキストとして表示されるときの対策 — @ultimatile [Zenn](https://zenn.dev/ultimatile/articles/claude-code-leaked-tool-call-stop-hook)

### Claude Code 活用・ベストプラクティス

#### Tips

> アーキテクト開発者のためのClaude Code設定10選。6ヶ月間の実運用で到達した設定パターン — @evolink [Zenn](https://zenn.dev/evolink_ai/articles/bd4769b5286c0b)

> Claudeのメモリ機能で試してみた小さな工夫。テスト修正の一貫性を保つ活用法 — @Nishikawa [Zenn](https://zenn.dev/atware/articles/7ea5fcac17bdcb)

> 人間はPlaywrightのトレースを眺めるだけ — Claude Code SkillでE2Eテスト作成を完全自動化 — @zoe [Zenn](https://zenn.dev/zoesan/articles/ff166fc24a9de9)

> Claude Code Desktop版でMCPを使ってコストを抑える方法。GLMやMiniMaxに定型作業を委譲 — @fukukei23 [Zenn](https://zenn.dev/fukukei23/articles/claude-code-desktop-mcp-cost-reduction)

> Codex と Claude Code に同じタスクを2つ投げてみたら、設計判断の「性格」が浮き彫りに。Codexは広く浅く、Claude Codeは深く確実に — @かめ [Zenn](https://zenn.dev/koheikameyama/articles/334549ad830a49)

> Anthropicプロダクト責任者Cat Wu氏のインタビュー抄訳。ソフトウェア開発者の役割についての考察 — @Hiroki Yamazaki [Zenn](https://zenn.dev/yh1iroki/articles/a500309a2bce14)

### Managed Agents

#### Tips

> Claude Managed Agentsがcronスケジュール実行とVaultクレデンシャル注入に対応 — @picnic [Qiita](https://qiita.com/picnic/items/9ab3ee6e9f911a30b26f)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
