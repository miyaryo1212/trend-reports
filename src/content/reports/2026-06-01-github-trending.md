---
title: "AIコーディングプラグインとドキュメント変換ツールが急成長"
summary: "Cursor公式プラグイン仕様の公開とCompound Engineeringプラグインの台頭でAIコーディングのエコシステム競争が加速。MarkItDownとMoneyPrinterTurboがユーティリティ系で引き続き人気を集める。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-06-01
features:
  - "microsoft/markitdown: ファイルやOffice文書をMarkdownに変換するPythonツール、LLMパイプライン向け"
  - "harry0703/MoneyPrinterTurbo: AI大規模言語モデルでワンクリック高画質ショート動画生成"
  - "cursor/plugins: Cursor公式プラグイン仕様とマーケットプレイス（継続学習、オーケストレーション、PRレビュー等）"
  - "EveryInc/compound-engineering-plugin: Claude Code/Codex/Cursor対応のCompound Engineeringプラグイン（AI駆動の計画・レビュー・学習蓄積ワークフロー）"
  - "Crosstalk-Solutions/project-nomad: オフライン対応のサバイバルコンピュータ、ローカルAIチャット（Ollama+RAG）搭載"
codex_review: "私には、動画生成の派手さよりCursor系プラグインの「作業の型」がOSS化し始めた点の方がずっと重要に映る。MarkItDownも地味だが効くが、周辺ツールの熱狂はまだ実運用の検証より期待が先行気味だ。"
codex_importance: 4
---

## 公式アップデート

### microsoft/markitdown

PDF、PowerPoint、Word、Excel、画像（OCR）、音声、HTML、CSV/JSON/XML、ZIP、YouTube、EPubなどをLLM最適化されたMarkdownに変換するPythonユーティリティ。AutoGenチームが開発。Azure Content Understanding連携による高品質変換、`markitdown-ocr`プラグインによるLLM Vision OCRにも対応。GitHub Trending全言語・Python両部門にランクイン（週間+2,759スター）。

主な特徴:
- `pip install 'markitdown[all]'` で全フォーマット対応
- CLI・Python API・Docker対応
- プラグインシステム（サードパーティ拡張可能）
- Azure Document Intelligence / Content Understanding連携
- Python 3.10以上対応

[ソース](https://github.com/microsoft/markitdown)

### harry0703/MoneyPrinterTurbo

キーワードまたはテーマを入力するだけで、AIが動画スクリプト生成→素材取得（Pexels）→音声合成→字幕生成→BGM追加→動画合成を全自動で行うショート動画生成ツール。OpenAI、DeepSeek、Gemini、Ollama等の多数LLMに対応。GitHub Trending全言語・Python両部門にランクイン（累計71,873スター、24h +2,775スター）。

主な特徴:
- Web UI + REST API
- 9:16縦動画 / 16:9横動画対応
- バッチ生成（複数バリエーション同時生成）
- Docker / uv / pip対応
- Pollinationsモデルで完全無料利用可能

[ソース](https://github.com/harry0703/MoneyPrinterTurbo)

### cursor/plugins

Cursorが公式プラグイン仕様と公式プラグイン群をMITライセンスでオープンソース公開。マルチプラグインマーケットプレイス構成で、各プラグインが独自の`.cursor-plugin/plugin.json`マニフェストを持つ。GitHub Trending TypeScript部門にランクイン。

収録プラグイン（11本）:
- **continual-learning**: AGENTS.mdへのトランスクリプト駆動メモリ更新
- **cursor-team-kit**: Cursor開発チームの内部ワークフロー（CI、コードレビュー、ローカル自動化）
- **thermos**: セキュリティ/正確性の深層監査、並列サブエージェント
- **orchestrate**: 大規模タスクを並列クラウドエージェントにファンアウト
- **pr-review-canvas**: PRのdiffをインタラクティブCanvasとして描画
- **docs-canvas**: ドキュメントをナビゲーション可能なCanvasとして描画
- **cursor-sdk**: Cursor TypeScript SDK上でのアプリ/自動化構築パターン
- **pstack**: 深い解析優先の並列化可能エージェントワークフロー

[ソース](https://github.com/cursor/plugins)

### EveryInc/compound-engineering-plugin

Claude Code、Codex、Cursor、GitHub Copilot、Factory Droid、Qwen Code等に対応するCompound Engineeringプラグイン。「各ユニットの作業が次のユニットを容易にする」哲学のもと、計画80%・実行20%のワークフローを実現。37スキル・51エージェントを搭載。GitHub Trending TypeScript部門にランクイン（18,647スター）。

主要スキル:
- `/ce-strategy`: プロダクト戦略ドキュメント管理
- `/ce-brainstorm`: 要件定義のためのインタラクティブQ&A
- `/ce-plan`: 詳細実装計画の生成
- `/ce-work`: worktreeでの計画実行
- `/ce-debug`: 体系的な障害再現・原因特定・修正
- `/ce-code-review`: マルチエージェントコードレビュー
- `/ce-compound`: 学習の蓄積・文書化
- `/ce-product-pulse`: 使用状況・パフォーマンスのパルスレポート

[ソース](https://github.com/EveryInc/compound-engineering-plugin)

### Crosstalk-Solutions/project-nomad

Debianベースで動作するオフラインファーストの知識・教育サーバー。ローカルAIチャット（Ollama + Qdrant RAG）、オフラインWikipedia（Kiwix）、教育プラットフォーム（Kolibri/Khan Academy）、オフライン地図（ProtoMaps）、データ分析ツール（CyberChef）等を一括提供。Docker Composeベースで管理UIから操作。GitHub Trending TypeScript部門にランクイン。

主な特徴:
- ワンコマンドインストール（`curl | bash`）
- テレメトリなし、完全オフライン動作可能
- セットアップウィザード付き
- ベンチマーク機能とコミュニティリーダーボード
- GPU推奨だがCPUのみでも動作

[ソース](https://github.com/Crosstalk-Solutions/project-nomad)

## コミュニティの反応

### microsoft/markitdown

#### ポジティブ

> PDF/Office/画像/音声/HTML/スプレッドシートなどをLLM最適化された構造化Markdownに変換。AIパイプライン（RAG/コンテキスト構築）に有用 — @RoyAmal

> エージェント作業のファイル前処理で「頭痛の種を救った」と実用例共有 — @BajajManav

#### Tips

> RAG精度向上のためPDF/Word/Excel/PowerPointをMarkdown化（v0.1.6）。社内検索/LLM要約の入口整備に活用 — @pit_ai_dx

#### ネガティブ

> スキャンPDFのOCR処理やテーブル崩れの懸念あり。複雑なレイアウトにはDocling推奨との指摘 — @BajajManav

### harry0703/MoneyPrinterTurbo

#### ポジティブ

> テーマ入力→スクリプト自動作成→Pexels素材取得→音声→字幕→BGMで完成動画生成。pollinationsモデルで完全無料・無VPN・10分セットアップ — @web3cun

> バッチ生成（同一キーワードで5バリエーション）でコンテンツカレンダー埋め可能。TikTok/YouTube/Reels向けfaceless動画に最適 — @BIGBULLapp

#### ネガティブ

> 素材不一致（関係ない動画が割り当てられる）や生成速度（1分動画で2-3分）の指摘あり — @web3cun

> ツール自体より「他人向けサービス提供（29.9元/本）」の方が収益性高く、リポジトリだけでは不十分 — @steveshaobin

### cursor/plugins

#### ポジティブ

> CursorがAIエージェントOS全体をMITライセンスで公開。マルチエージェントオーケストレーション、メモリ/学習、コードレビュー、PR分析等が実装済みで1,000+スター — @PrakashS720

> 11本の本番向けCursorプラグイン。並列エージェントオーケストレーション、PRレビュー自動化、セキュリティ監査がspec込みで提供 — @rosie_codes

#### Tips

> cursor-team-kitをインストール（/add-plugin）すると17スキル（CI/PR/脱AI臭）、エージェント、ルール込みで実務ワークフローが即利用可能 — @XAMTO_AI

### EveryInc/compound-engineering-plugin

#### ポジティブ

> 工程循環をstrategy/brainstorm/plan/work/debug/review/compound/product pulseなどのスキルにパッケージ化。Agent信頼性を「毎ラウンドの再利用可能artifact」で高める設計 — @sunflowers0607

> セッション内で専門エージェントを定義し、文脈を引き継ぐパターン。メインLLMの集中を保ちつつ、Claude Code/Codex/Cursorで動作 — @marchelfah

#### ネガティブ

> 「本当に蓄積した教訓が効いているか証明できるか」が本質的な問い。compound engineeringの効果検証が課題 — @TimeToBuildBob

### Crosstalk-Solutions/project-nomad

#### ポジティブ

> 安価なミニPCを完全オフラインのサバイバルコンピュータ（ローカルAIチャット、Wikipedia、医療ガイド、地図、暗号ツール）に変える実用例を動画付きで紹介 — @webuyhomecash

> Debianベースで簡単にインストール可能なオフライン教育サーバー（AIチャット＋情報ライブラリ）として注目 — @GitHubGPT

## ソース

- [microsoft/markitdown](https://github.com/microsoft/markitdown)
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- [cursor/plugins](https://github.com/cursor/plugins)
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)
- [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
