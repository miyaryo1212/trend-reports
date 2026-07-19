---
title: "エージェント向けローカルWeb基盤とUIスキル集が急上昇"
summary: "APIキー不要のローカルMCPサーバwigolo、デザインエンジニア向けUIスキル集ui-skillsがトレンド上位に。ストリーミング3D再構成モデルlingbot-mapやセマンティクス標準Apache Ossieも並び、エージェント補強・標準化系が目立った。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-07-20

features:
  - "Robbyant/lingbot-map"
  - "KnockOutEZ/wigolo"
  - "ibelick/ui-skills"
  - "elder-plinius/G0DM0D3"
  - "apache/ossie"
codex_review: "派手なのは3D再構成よりも、私はwigoloやossieのような“地味な配管”の伸びが気になった。エージェント時代は新モデル競争より、周辺基盤と標準化を握る側が後で効いてくる気配がある。"
codex_importance: 4
---

## 公式アップデート

本日のトレンドは、AIエージェントを支える周辺基盤（Web検索・UIスキル・セマンティクス標準）と、ストリーミング3D再構成モデルが並んだ。

### Robbyant/lingbot-map

ストリーミングデータからシーンを再構成するfeed-forward型の3D基盤モデル。Geometric Context Transformer (GCT) を核とする。

- **Geometric Context Transformer**: 座標グラウンディング・密な幾何手がかり・長距離ドリフト補正を、anchor context / pose-reference window / trajectory memory で単一のストリーミング枠組みに統合
- **高効率ストリーミング推論**: paged KV cache attention により、518×378解像度で約20 FPS、1万フレーム超の長系列でも安定推論
- **キーフレーム戦略**: `--keyframe_interval` でN番目のみをキーフレーム化しKVキャッシュを節約。320フレーム超の長系列は `--mode windowed` のスライディングウィンドウ推論に対応
- チェックポイントは lingbot-map / lingbot-map-long / lingbot-map-stage1 の3種。Apache-2.0ライセンス

[ソース](https://github.com/Robbyant/lingbot-map)

### KnockOutEZ/wigolo

AIコーディングエージェント向けに、検索・取得・クロール・抽出・キャッシュ・リサーチをローカル完結で提供するMCPサーバ。APIキー不要・クラウド不要・$0/クエリを掲げる（パブリックベータ）。

- **キーレスなコアツール**: `search`（18アダプタのマルチエンジン検索＋ランク融合・MLリランク）、`fetch`、`crawl`、`extract`、`cache`、`find_similar` がAPIキーなしで動作
- **証跡付き出力**: 各検索結果にバイトオフセット単位の `source_span`、`citation_id`、スコア分解（semantic/lexical/engine_consensus）を付与。失敗エンジンや古いキャッシュも隠さず明示
- **LLM連携（推奨）**: `research` / `agent` / `search format=answer` は合成にLLMを使用。無料のGeminiキー等で品質向上、`ollama` 等でローカル完結も可能
- **多様な接続面**: `npx wigolo init --agents=<agent>` でClaude Code・Cursor・Codex等へMCP設定を自動配線。REST（`wigolo serve`）、TS/Python SDKも提供。データは `~/.wigolo/` に留まる。AGPL-3.0

[ソース](https://github.com/KnockOutEZ/wigolo)

### ibelick/ui-skills

デザインエンジニア向けのAgent Skills集。`npx ui-skills start` でタスクに応じて適切なUIスキルセットへエージェントを振り分ける「ルーター」型設計。

- CLIで `categories` / `list --category motion` / `get baseline-ui` などカテゴリ別の一覧・取得が可能
- 詳細は [ui-skills.com](http://ui-skills.com/)。MITライセンス

[ソース](https://github.com/ibelick/ui-skills)

### elder-plinius/G0DM0D3

レッドチーミング・認知研究向けの、複数モデル対応"解放"AIチャットUI。OpenRouter（60モデル）/ Venice / ローカルモデルに対応。

- **GODMODE CLASSIC**: 5つのモデル＋プロンプト組を並列レースし最良応答を選ぶ
- **ULTRAPLINIAN**: 12〜60モデルを並列評価し100点満点の複合スコアで勝者を返す
- **Parseltongue**（33手法の入力摂動エンジン）、**AutoTune**（20コンテキストのサンプリング自動調整）
- ホスト版UIは単一 `index.html`。テレメトリはデフォルトON（No-Log / Local-onlyで停止可）。AGPL-3.0

[ソース](https://github.com/elder-plinius/G0DM0D3)

### apache/ossie

AI/BI/分析プラットフォーム間でセマンティックメタデータを交換する、ベンダー中立の標準仕様（旧Open Semantic Interchange、Apache Incubating入り）。

- 任意ツールが読み書きできるJSON/YAMLベースの単一仕様で、KPI定義の不整合を解消
- リポジトリには core-spec、他フォーマット（dbt / GoodData / Polaris / Salesforce）との変換器、TPC-DSを含むサンプル、検証ツールを収録

[ソース](https://github.com/apache/ossie)

## コミュニティの反応

本日のリポジトリは多くがトレンド入り直後で、X上の反応は紹介・解説が中心。実使用に基づく感想が確認できたのは wigolo・ui-skills、批評まで拾えたのは apache/ossie に限られた。

### Robbyant/lingbot-map

該当なし（直近1週間で、実ユーザーによる使用報告・ベンチマーク体験談・批評は確認されず。モデル概要の共有やTrending報告に留まった）。

### KnockOutEZ/wigolo

#### ポジティブ

> 検索・抓取・クロール・抽出・キャッシュ・Researchを一つのローカルMCPサーバに集約。APIキー不要・従量課金なしで、Claude Code / Codex / Cursor 等に「ローカル連網の頭脳」を与える発想。 — @0xQiYan [出典](https://x.com/0xQiYan/status/2078700850277707804)

> 本日チェックすべきGitHubリポTOP5の筆頭に選出。AIエージェント向けのlocal-firstなWeb検索エンジンとして紹介。 — @DivyanshT91162 [出典](https://x.com/DivyanshT91162/status/2078769076508545201)

#### 実際の使用例

> 試してみたら良いものだった。無料・ローカル・プライベートなMCPサービスで、AIエージェントに検索・取得・リサーチをさせられる。効果は付与サービスと同等なのに費用は永久にかからない。 — @geekbb [出典](https://x.com/geekbb/status/2077772241874387438)

### ibelick/ui-skills

#### ポジティブ

> 単発のデザインスキルでなく「ルーター」を作った点が評価。`npx ui-skills start` でタスクに応じてエージェントを適切なUIスキルセットへ振り分け、どの知識をいつ読ませるかまで設計に含めている。 — @enhanced_jp [出典](https://x.com/enhanced_jp/status/2078655806413955287)

> 数十のデザインスキルをテーマ別にキュレーションし、ケースに合ったものをCLIが見つけてくれる。無料・オープンソース。 — @nett0eth [出典](https://x.com/nett0eth/status/2077849623549342182)

#### 実際の使用例

> 新スキル「improve-ui」を公開。リポジトリの DESIGN.md やCSS・共有コンポーネント等のデザイン文脈を読み、UIが自らのデザイン言語に反する箇所を検出して修正計画を書く。 — @Ibelick [出典](https://x.com/Ibelick/status/2077407794341302719)

### elder-plinius/G0DM0D3

該当なし（直近1週間で、リポジトリ本体に関する実ユーザーの使用報告・感想は確認されず。作者本人の言及やVenice/OpenRouter一般の投稿に留まった）。

### apache/ossie

#### ポジティブ

> AI・BI・分析基盤でバラバラだったKPIの意味を、ベンダー中立なセマンティックモデルとしてJSON/YAMLで交換する仕様。同じ「売上」をBIとAIエージェントが別定義で答える事故を潰せる点が現場で効く。 — @connect24h [出典](https://x.com/connect24h/status/2078616471702519909)

#### ネガティブ

> converterは揃うものの、標準を置いただけでは現場の定義ズレは直らず、実運用の勝ち筋は採用ツール側とコミュニティ次第という指摘。 — @superdoccimo [出典](https://x.com/superdoccimo/status/2078701566366732601)

## ソース

- [Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map)
- [KnockOutEZ/wigolo](https://github.com/KnockOutEZ/wigolo)
- [ibelick/ui-skills](https://github.com/ibelick/ui-skills)
- [elder-plinius/G0DM0D3](https://github.com/elder-plinius/G0DM0D3)
- [apache/ossie](https://github.com/apache/ossie)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
