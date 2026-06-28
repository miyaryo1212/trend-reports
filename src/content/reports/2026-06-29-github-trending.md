---
title: "Claude Code拡張系リポが席巻 — 投資研究・デザイン・サイトクローン"
summary: "AIコーディングエージェント（特にClaude Code）を専門ツール化するリポジトリが軒並みトレンド入り。四大師の投資研究フレームワークai-berkshire、デザイン仕様design.md、サイトクローンテンプレート、YC CEOの開発構成gstackが並んだ。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-06-29

features:
  - "xbtlin/ai-berkshire: Claude Code/Codex対応の価値投資研究フレームワーク、四大師の方法論を多Agent並行で実行、18スキル構成"
  - "google-labs-code/design.md: コーディングエージェントにデザインシステムを伝えるDESIGN.md仕様、YAML token+Markdown、lint/diff/export CLI"
  - "JCodesMore/ai-website-cloner-template: AIエージェントで任意サイトをNext.jsに再構築、/clone-websiteでgit worktree並列ビルド"
  - "garrytan/gstack: Garry Tan(YC CEO)のClaude Code構成一式、23の専門ロール+8ツールをslashコマンド化、MIT"
codex_review: "Claude Codeを“汎用AI”から職能別の作業場へ押し広げる流れとしてかなり面白いが、現状は再現性より演出が先行している印象もある。その中ではdesign.mdのような地味な規格化が、数カ月後に一番効いてくるタイプだと思う。"
codex_importance: 3
---

## 公式アップデート

本日のトレンドは、AIコーディングエージェント（とりわけClaude Code）を特定領域の「専門チーム」へと仕立てるリポジトリが一斉に上位を占めた。共通項は、slashコマンド／スキル／Markdown仕様でエージェントの振る舞いを構造化し、多Agent並列やgit worktreeで分業させる設計思想。

### xbtlin/ai-berkshire

Claude CodeとCodexの双方に対応した価値投資研究フレームワーク。バフェット・マンガー・段永平・李録の四大師の方法論をスキル化・構造化し、AI Agentによる専門級の投資研究を志向する。

- **多Agent並列**: `/investment-team` が4つの独立Agentを同時起動し、商業モデル・財務estimate・業界競争・リスク管理層を各視点（四大師）で並行リサーチ、Team Leadが統合
- **18スキル構成**: 深度研究／財報分析／行業スクリーニング／持仓管理／思考ツールの5系統。`/investment-research`（四大師総合）、`/earnings-review`（一次資料財報精読）、`/industry-funnel`（全市場→10社→3社の漏斗筛選）など
- **反バイアス機構**: A/B/C情報豊富度評級、マンガー式逆向検証、即時否決チェックリスト、反コンセンサス検査、「留白原則」（不明時は灰色地帯と明記）
- **金融データの厳密性**: 計算はPython `decimal.Decimal` を使用しfloatを避ける、重要データは2つ以上の独立ソースで交差検証
- ライセンス・実盤トラックレコード（2024 +69.29%、2025 +66.38%）をREADMEで提示

[ソース](https://github.com/xbtlin/ai-berkshire)

### google-labs-code/design.md

コーディングエージェントに視覚的アイデンティティ（デザインシステム）を伝えるためのフォーマット仕様「DESIGN.md」。Google Labs発。

- **2層構造**: YAML front matterの機械可読design token（colors/typography/rounded/spacing/components）＋ Markdown本文の人間可読なデザイン根拠
- **CLI**: `lint`（構造検証・WCAGコントラスト比チェック、9ルール）、`diff`（token・prose回帰検出）、`export`（Tailwind v3/v4・W3C DTCG形式へ変換）、`spec`（仕様出力）
- **相互運用**: W3C Design Token Formatに着想。`{colors.primary}` 形式のtoken参照、未知のキーは保持/警告で受容
- **ステータス**: バージョン `alpha`。仕様・schema・CLIは活発に開発中

[ソース](https://github.com/google-labs-code/design.md)

### JCodesMore/ai-website-cloner-template

AIコーディングエージェントで任意のWebサイトをクリーンなNext.jsコードベースへ逆再構築する再利用可能テンプレート。

- **`/clone-website` パイプライン**: 偵察（スクショ・design token抽出・操作スイープ）→ 基盤（フォント・色・asset DL）→ コンポーネント仕様書作成 → git worktreeでのbuilder Agent並列ビルド → アセンブリ＆視覚diff QA
- **技術スタック**: Next.js 16（App Router/React 19/TS strict）、shadcn/ui、Tailwind CSS v4（oklch token）、Lucide React
- **対応エージェント**: Claude Code推奨（Opus 4.7）、Codex CLI・Cursor・Copilot・Gemini CLI・Cline等13種をサポート。`AGENTS.md` を単一の真実源とし、sync scriptで各プラットフォーム向けに展開
- **用途の明示**: 自己所有サイトの移行・ソース消失からの復元・学習用。フィッシング/なりすまし/ToS違反は明確に禁止

[ソース](https://github.com/JCodesMore/ai-website-cloner-template)

### garrytan/gstack

Y Combinator社長兼CEOのGarry Tan氏が日常使用するClaude Code構成一式。Claude Codeを仮想エンジニアリングチームに変える。

- **23の専門ロール＋8ツール**: CEO（製品再考）・エンジニアリングマネージャ（アーキテクチャ固定）・デザイナー（AIスロップ検出）・レビュアー（本番バグ発見）・QAリード（実ブラウザ操作）・セキュリティ担当（OWASP+STRIDE監査）・リリースエンジニア（PR発行）等。すべてslashコマンド・Markdown・MIT
- **主要コマンド**: `/office-hours`（構築対象の相談）、`/plan-ceo-review`、`/review`、`/qa`
- READMEでは「2013年比 約810倍の論理コード変更ペース」を主張し、LOC論争への反論ドキュメントも併載

[ソース](https://github.com/garrytan/gstack)

## コミュニティの反応

本日のリポジトリ群はトレンド入りしたばかりで、X上の反応は紹介・共有が中心。実使用に基づく感想・批評は ai-website-cloner-template に限られた。

### xbtlin/ai-berkshire

#### ポジティブ

> GitHub Trending入りで3,000超のスターを獲得。多Agentで四大師の方法論を並行実行する点やClaude Codeとの親和性が、AI駆動開発の文脈で「投資研究のworkflow化」として注目されている。 — @connect24h [出典](https://x.com/connect24h/status/2070791546371547513)

> Claude Codeでバフェットら4大師の思考プロセスをスキル化・多Agent化し、判断基準・否決条件を明確にした点が「ただAIに聞く」の域を超えていると評価。 — @koumei_ai5566 [出典](https://x.com/koumei_ai5566/status/2070640383617622506)

※直近1週間では、実際に「試した」「組み込んだ」という使用報告や、実使用に基づく批評・限界指摘は確認されず（導入予定・共有レベルの投稿が中心）。

### google-labs-code/design.md

該当なし（直近1週間のX投稿はリポジトリ紹介・仕様説明が中心で、実使用体験・批評は確認できず）。

### JCodesMore/ai-website-cloner-template

#### ポジティブ

> AI coding agent（Claude Code/Cursor等）とgit worktree並列ビルドの組み合わせで任意サイトをNext.js実コードに一発変換する流れが「チーム作業みたい」と話題に。詳細デモ動画付き投稿が39いいね・70ブックマークを獲得。 — @seelffff [出典](https://x.com/seelffff/status/2071259582970691661)

#### 実際の使用例

> Webflow Marketplaceページを実際に `/clone-website` で試し、Rawページとクローン結果を並べて公開。品質は「OK not excellent」ながら「one command line is a life saver」と評価。 — @YanXieAI [出典](https://x.com/YanXieAI/status/2071122188795883840)

#### 批評

> 静的サイト中心で動的ロジックは完璧ではない可能性を指摘しつつ、プロトタイプ/競品調査用途では効率が明らかに上がるとの現実的な評価。 — @000_shang [出典](https://x.com/000_shang/status/2071156665702039594)

### garrytan/gstack

該当なし（過去7日間、高エンゲージメント投稿はリポジトリ共有・ハイプ中心で、実使用に基づく感想・評価は確認できず）。

## ソース

- [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire)
- [google-labs-code/design.md](https://github.com/google-labs-code/design.md)
- [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)
- [garrytan/gstack](https://github.com/garrytan/gstack)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
