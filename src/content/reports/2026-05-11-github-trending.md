---
title: "金融特化エージェントとAIメモリ基盤が同時トレンド入り"
summary: "Anthropicの金融サービス向けリファレンスエージェント集が全言語・Python両部門1位。ByteDanceのマルチモーダルAgent TARS、AIコーディングエージェント向け永続メモリagentmemoryも急伸し、エージェント実用化の波が業界横断で加速している。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-05-11
features:
  - "anthropics/financial-services: Claude for Financial Services向けリファレンスエージェント・スキル・データコネクタ集。Coworkプラグインまたは Managed Agents APIでデプロイ可能"
  - "bytedance/UI-TARS-desktop: マルチモーダルAIエージェントスタック。Agent TARS CLI v0.3.0でストリーミング対応・サンドボックス実行環境を追加"
  - "datawhalechina/hello-agents: AI Nativeエージェントを基礎理論から実装まで体系的に学ぶ中国語チュートリアル（ReAct, Plan-and-Solve, Agentic RL等）"
  - "rohitg00/agentmemory: AIコーディングエージェント向け永続メモリシステム。Claude Code・Cursor・Gemini CLI等をMCP/フック経由で横断的にサポート"
codex_review: "金融特化の業務テンプレートと、エージェント横断のメモリ基盤が同時に伸びたのはかなり示唆的だ。派手さはUI操作系にあるが、実際に業界を変えるのは地味な接続性と継続記憶の整備だと思う。"
codex_importance: 4
---

## 公式アップデート

### anthropics/financial-services

Anthropicが公開した金融サービス向けリファレンスエージェント・スキル・データコネクタ集。投資銀行、エクイティリサーチ、プライベートエクイティ、ウェルスマネジメントの各業務向けに9つのエージェント（Pitch Agent、Market Researcher、GL Reconciler、Earnings Reviewer、Model Builder、Valuation Reviewer、Month-End Closer、Statement Auditor、KYC Screener）を提供する。

すべてのエージェントはClaude Coworkプラグインとして導入するか、Claude Managed Agents API（`/v1/agents`）経由でデプロイする2つの方式に対応。7つのバーティカルプラグイン（financial-analysis、investment-banking、equity-research、private-equity、wealth-management、fund-admin、operations）と、LSEG・S&P Globalのパートナー製プラグインも含む。

データコネクタはMCP（Model Context Protocol）で11プロバイダ（Daloopa、Morningstar、S&P Global、FactSet、Moody's、MT Newswires、Aiera、LSEG、PitchBook、Chronograph、Egnyte）に接続。ファイルベース（Markdown + JSON）でビルドステップ不要。Claude for Microsoft 365アドインのプロビジョニングツールも同梱。Apache License 2.0。GitHub Trending全言語・Python両部門にランクイン。

[ソース](https://github.com/anthropics/financial-services)

### bytedance/UI-TARS-desktop

ByteDanceによるマルチモーダルAIエージェントスタック。Agent TARSとUI-TARS Desktopの2プロジェクトで構成。Agent TARSはCLIとWeb UIを提供し、GUI Agent・Vision機能によるブラウザ・デスクトップ操作、MCPツール統合を実現する。

Agent TARS CLI v0.3.0（2025年11月）では、複数ツールのストリーミング出力、ツール呼び出しのタイミング統計、Event Stream Viewer（データフロー追跡・デバッグ）、AIO agent Sandbox（隔離実行環境）を追加。UI-TARS DesktopはUI-TARSモデルベースのネイティブGUI Agentで、ローカル・リモートのコンピュータ/ブラウザ操作に対応。クロスプラットフォーム（Windows/macOS/ブラウザ）。Apache License 2.0。GitHub Trending全言語・TypeScript両部門にランクイン。

[ソース](https://github.com/bytedance/UI-TARS-desktop)

### datawhalechina/hello-agents

Datawhalaeコミュニティによる、AI Nativeエージェントの基礎理論から実装までを網羅する体系的な中国語チュートリアル。全16章構成で、智能体の定義・歴史・LLM基礎から、ReAct・Plan-and-Solve・Reflectionの経典範式構築、低コードプラットフォーム（Coze/Dify/n8n）活用、AutoGen/AgentScope/LangGraphなどのフレームワーク開発、自作フレームワーク構築へと進む。

高度な知識として記憶と検索（RAG）、上下文工程、智能体通信協議（MCP/A2A/ANP）、Agentic RL（SFTからGRPOまで）、性能評価をカバー。応用プロジェクトとして智能旅行助手、DeepResearch Agent複製、サイバータウン構築を含む。オンライン無料公開。GitHub Trending Python部門にランクイン。

[ソース](https://github.com/datawhalechina/hello-agents)

### rohitg00/agentmemory

AIコーディングエージェント向けの永続メモリシステム。Claude Code、Cursor、Gemini CLI、Codex CLI、Cline、Goose、Windsurf、Roo Code等をMCPサーバー・フック・REST APIで横断的にサポートし、1つのメモリサーバーを全エージェントで共有する。

LongMemEval-S（ICLR 2025、500問）ベンチマークでR@5 95.2%、R@10 98.6%の検索精度を実証。BM25 + Vector + Graph（RRF fusion）によるハイブリッド検索、4階層統合・減衰・自動忘却のメモリライフサイクル管理を搭載。外部DB不要（SQLite + iii-engine）。12のClaude Code向け自動キャプチャフック、51のMCPツール、リアルタイムビューア（ポート3113）を提供。v0.9.0でファイルシステムコネクタ、スタンドアロンMCPプロキシ、監査ポリシー整備を追加。GitHub Trending TypeScript部門にランクイン。

[ソース](https://github.com/rohitg00/agentmemory)

## コミュニティの反応

### anthropics/financial-services

#### ポジティブ

> オープンソースで1日13.9k stars。9エージェントとスキルバンドル、Cowork/Managed Agentsでデプロイ。"agentic skills"が企業AIの単位になりつつある — @drawais_ai [出典](https://x.com/i/status/2052756320495755288)

> 12+エージェントと10+データプロバイダ接続。ファイルベースでカスタム容易、フォークしてすぐ使える設計 — @robert_j_maker [出典](https://x.com/i/status/2053190254321131623)

> Commonwealth Bank of Australiaでunderwritingレビュー時間を5倍短縮、精度75%→90%。Citi/RBCも使用中 — @AfricaisHOME2 [出典](https://x.com/i/status/2053212677858881873)

#### ネガティブ

> 投行のPitch deck・Earnings noteなどを自動化する9エージェントを提供するが、初級アナリストの仕事が直接脅かされる構図。人間承認必須とはいえ影響は大きい — @rwayne [出典](https://x.com/i/status/2053256703001395365)

### bytedance/UI-TARS-desktop

#### ポジティブ

> GitHubで31k stars超え。v0.3.0でストリーミング出力・ツール呼び出し計時・Event Streamデバッグを追加、クロスプラットフォーム対応が強み — @GitTrend0x [出典](https://x.com/i/status/2053035801035121053)

> 100%ローカルで動作するオープンソースのマルチモーダルAIエージェント。自然言語でデスクトップを制御、プライバシー保護に優れる — @Hamidk_12 [出典](https://x.com/i/status/2052412045124067660)

#### Tips

> 画面を視覚認識し、VS Code設定変更・GitHub閲覧・ブラウザ操作など自然言語でデスクトップAppを自動制御。繰り返しタスクの自動化に有効 — @JulianGoldieSEO [出典](https://x.com/i/status/2053095283379364041)

> v0.3.0でサンドボックス対応追加。GUI Agentで繰り返しタスク自動化、MCPツール連携で多ステップ実行。README完備で実用的 — @0xUnite518 [出典](https://x.com/i/status/2053134849343688794)

### datawhalechina/hello-agents

#### ポジティブ

> DatawhaleのAI Agent構築チュートリアル、ReActからAgentic RLまで体系的。中国語で無料、4.5万Star。初心者から上級者向けの実践プロジェクト多数 — @oneruofeng [出典](https://x.com/i/status/2053130767010877589)

> LangChain依存を避けゼロからAgent構築を教える16章コース。低コードからフレームワーク、自作フレームワークへ段階的に進む設計が他教程と差別化 — @FongNb [出典](https://x.com/i/status/2053089359583416681)

#### Tips

> 3ヶ月省けるAgent入門リソース。Python基礎でOK。ReAct/Plan-and-SolveからMCP/A2A、GRPO訓練、旅行助手/DeepResearch/サイバータウンなどのプロジェクトまで網羅 — @Cryptoxorz [出典](https://x.com/i/status/2052926470864183406)

### rohitg00/agentmemory

#### ポジティブ

> GitHub Trending #1。Claude Codeなどに無限メモリを提供、トークン92%削減・200xツールコール増、1週間で1000スター超 — @ghumare64 [出典](https://x.com/i/status/2052313902214476192)

> エージェントが会話跨ぎでコンテキスト・決定・偏好を記憶し、ツールから真の助手へ進化。Trending入りで注目集中 — @iluciddreaming [出典](https://x.com/i/status/2053495545109590360)

#### Tips

> npxでmemory server起動、Claude Code/Codex等にMCP/hookで統合。ブラウザ（localhost:3113）で記憶内容をリアルタイム確認可能 — @saeroyi_ican [出典](https://x.com/i/status/2053073931113013453)

> 複数エージェント間でプロジェクトコンテキストを自動注入・共有。npx demoコマンドでsemantic recallの動作を即確認できる — @Hamburgerai [出典](https://x.com/i/status/2053480682312376786)

## ソース

- [anthropics/financial-services](https://github.com/anthropics/financial-services)
- [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop)
- [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)
- [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
