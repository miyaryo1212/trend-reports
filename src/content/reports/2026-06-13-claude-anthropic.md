---
title: "TCS5万人導入＋Anthropic Institute設立＋政策文書2本"
summary: "TCSが5万人規模でClaude導入の複数年提携を締結。Anthropic InstituteがAIの社会的影響を研究する新組織として設立。再帰的自己改善研究とAI規制フレームワーク政策文書も公開。Claude Code v2.1.175/v2.1.174がリリース。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-13
features:
  - "Claude Code v2.1.175"
  - "Claude Code v2.1.174"
  - "TCS提携"
  - "Public Record調査"
  - "Anthropic Institute"
  - "再帰的自己改善研究"
  - "Policy on the AI Exponential"
codex_review: "TCSの5万人導入は派手だが、本当に効いているのは運用管理の細かな改善と政策発信を同時に積んでいる点だと思う。モデル競争だけでなく、企業統治と制度設計まで先回りしているのは地味に強い。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.175（6月12日）

シングルフィーチャーリリース:
- **`enforceAvailableModels` 管理設定の追加** — 有効化すると、`availableModels` 許可リストがDefaultモデルにも制約を適用する。Defaultが許可外モデルに解決される場合、許可リスト先頭のモデルにフォールバック。ユーザー/プロジェクト設定による許可リスト拡大も禁止される

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.175)

### Claude Code v2.1.174（6月12日）

多数のバグ修正と機能追加:
- **[VSCode] 使用量アトリビューション** — `/usage` ダイアログにキャッシュミス、長コンテキスト、サブエージェント、スキル/エージェント/プラグイン/MCP別の24h/7d内訳表示を追加
- **`/model` ピッカー修正** — Defaultが解決するモデルファミリーが非表示になっていた問題を修正。Max/Team Premium/EnterpriseではOpus、Pro/TeamではSonnetが個別行として表示
- **Bedrock GovCloud対応** — `us-gov-*` リージョンで推論プロファイルプレフィックスが `global` になっていた問題を修正
- **スキルhot-reload最適化** — 単一スキル変更時にスキル一覧全体を再送信していた問題を修正
- その他、Fable 5バナー誤表示修正、バックグラウンドセッションの環境変数継承修正、git commit co-author帰属修正など

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.174)

### TCS提携

Tata Consultancy Services（TCS）がAnthropicと複数年パートナーシップを締結。5万人のコンサルタントにClaude導入を推進し、金融・ヘルスケア等の規制産業向けソリューション構築を目指す。

### Anthropic Institute

AIの社会的影響を研究する新組織「Anthropic Institute」の設立を発表。研究領域は雇用への影響、安全保障、AIの行動特性、自律研究の4分野。

### 再帰的自己改善研究

Anthropicが社内コード生成に関する研究を公開。主要ポイント:
- Anthropic社内コードの**80%超がClaude生成**
- エンジニア生産性が**8倍**に向上
- AI自律開発の進展に関する**3つのシナリオ**を提示

### Public Record調査

Anthropicが米国世論のAIに対する意識調査「Public Record」の結果を公開:
- **71%** が政府によるAI規制を支持
- **64%** が雇用喪失を懸念
- AI企業の自主規制を信頼する回答は**15%** にとどまる

### Policy on the AI Exponential

AI規制と経済政策に関する2本立ての政策文書を公開:
- **規制フレームワーク**: 10^25 FLOP超の大規模モデルを対象とした規制提案
- **経済政策**: $350M規模の投資を含む経済対応策の提言

## コミュニティの反応

### Claude Fable 5（継続）

前日から引き続き、Fable 5に関する検証・分析記事が大量に公開。

#### ポジティブ

> Fable 5に丸投げしたらプログラミング言語「夜（Yoru）」を一晩で作ってきた。Hindley-Milner型推論付き静的型付き関数型言語、テスト98本全グリーン — @pesca [Zenn](https://zenn.dev/zittiandbuoni/articles/ad177c0d676440)

> 高性能モデルの使いどころは「実装者」でなく「レビュアー」。実装側が創作した実在しないAPIフィールドをFable 5が公式仕様取得で潰した事例 — @Shiros [Zenn](https://zenn.dev/znet/articles/2026-stronger-model-as-reviewer)

> 同じ素材でスライド作成させたらFable 5は「編集者」になっていた。ビジネス文書側の能力検証 — @sishikawa40（SOMPO Digital Lab）[Zenn](https://zenn.dev/sompojapan_dx/articles/91523d8b280ff1)

#### ネガティブ

> Fable 5が黙って性能を下げる仕様、Anthropicが2日で撤回。フロンティアLLM開発関連リクエストで回答品質を不可視に低下させる記述がシステムカードに — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260612-claude-fable5-invisible-safeguards-revers)

#### Tips

> Fable 5のAPIでは「拒否」がエラーではなくHTTP 200の正常応答（stop_reason: "refusal"）になる新仕様 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260612-claude-fable-5-refusal-fallback-api)

> Fable 5 on Bedrockを Kiroなどから使えるMCPツールを作成。データ保持設定の制約と運用のコツ — @G2 [Zenn](https://zenn.dev/g2/articles/a178f3b651140f)

> Claude Code の fast モードをQCDで実測。品質そのまま処理時間ほぼ半減（中央値1.9倍速）、対価はコスト約2倍 — @Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-25-opus48-fast-mode-qcd)

> Anthropic初のMythos級モデル「Claude Fable 5」を一般公開。過去最強だがサイバー能力は封印 — @quotidia [Qiita](https://qiita.com/quotidia/items/93d15444372d79d05246)

> Claude Fable 5をエンジニア視点で読み解く。Mythosクラス初の一般公開モデルと安全分類器の実装 — @SmartTec [Qiita](https://qiita.com/SmartTec/items/43ca2f22a5d051e8c9d4)

### Claude Code 活用・運用

#### Tips

> Claude Codeに長期記憶を持たせる4層アーキテクチャ。鮮度と読み手で記憶を分離する設計 — @Lily [Zenn](https://zenn.dev/bokuwalily/articles/f534402187bd07)

> Claude Codeが存在しないファイルを「作成した」と報告し続けた。ツール結果の作話（confabulation）が起きる条件を記録 — @wharfe [Zenn](https://zenn.dev/wharfe/articles/claude-code-tool-result-confabulation)

> Claude Codeが残課題を放置する理由と対策。完了判定・指示設計・タスク依頼方法の3層構造 — @ShintaroAmaike（Accenture）[Zenn](https://zenn.dev/acntechjp/articles/ce83f62acf41c0)

> Claude Code実践運用ガイド。CLAUDE.md設計からマルチエージェント、トークン経済、失敗パターン集まで — @shoebill-dev27 [Zenn](https://zenn.dev/shoebill_dev27/books/claude-code-ops)

> Claude Codeに永続記憶を自作「Tsuzuri for Claude Code」。ローカル完結・無料・日本語対応 — @台東AIラボ [Zenn](https://zenn.dev/rizzai/articles/ac3f930ae252e3)

> AIが書いたコードを追跡するOSS「aidiff」。git blameのAI版で、どのコードがAI生成かを可視化 — @shu35 [Zenn](https://zenn.dev/ino38/articles/oss-aidiff-ai-code-tracker)

> AIエージェントの多段ワークフローを1つのYAMLで宣言的に動かす「flowsmith」の設計 — @KIKAIKAYA [Zenn](https://zenn.dev/kikaikaya/articles/flowsmith-declarative-ai-workflow)

> Claude Code並列作業時にstatuslineでディレクトリ・ブランチ・コンテキスト使用量を表示 — @secula [Zenn](https://zenn.dev/secula/articles/997eb53f1e6a8d)

> Claude Codeで複数リポジトリを扱う方法。起動ディレクトリの選択が意外と重要 — @Nishikawa（アットウェア）[Zenn](https://zenn.dev/atware/articles/0529a14cd261f3)

> Claude Code hooks使ってみた。セッション開始やツール利用をフックに好きなコマンドを実行 — @どらやき [Zenn](https://zenn.dev/michan74/articles/8906dc0e93eddc)

> Claude Codeの事故をゼロにする。IDベースのルール管理設計で禁止事項を機械的にブロック — @yamada-ai-dev [Zenn](https://zenn.dev/yamada_ai_dev/articles/claude-code-rule-id-design)

> Opus 4.8で起きる2つの事故をログで切り分ける。トークン10倍浪費とツール結果捏造 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/cecb7d55f87df3e50f30)

> schema.sqlからER図を生成するClaude Code Skillを作成 — @nos0611（RemitAid）[Zenn](https://zenn.dev/remitaid/articles/db8988cb93d297)

> Claudeのクセと人間の思い込みを突破するスキル作成の重要性 — @北野（アクトビ）[Zenn](https://zenn.dev/actbe_tech/articles/e3f63cd0665aaa)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
