---
title: "Codexエコシステムとローカル推論ツールが急伸"
summary: "oh-my-claudecodeがoh-my-codexにリブランドしCodex CLI拡張として成長。MLX-VLMはTurboQuantでKVキャッシュ89%削減を実現。Microsoft Agent Framework V1.0が正式リリースされ、Qwen CodeはQwen3.6-Plus対応でClaude Code代替として注目を集める。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-04-06
features:
  - "Blaizzy/mlx-vlm: Apple MLX向けVision Language Modelの推論・ファインチューニングパッケージ、音声・動画対応やTurboQuant KVキャッシュ圧縮機能を搭載"
  - "onyx-dot-app/onyx: RAG・Deep Research・カスタムエージェント・MCP対応のオープンソースAIプラットフォーム"
  - "Yeachan-Heo/oh-my-codex: OpenAI Codex CLIのワークフロー拡張レイヤー、エージェントチーム・スキル・HUD機能を追加"
  - "microsoft/agent-framework: Python/.NET対応のマルチエージェントフレームワーク、グラフベースワークフローとSemantic Kernel/AutoGenからの移行パスを提供"
  - "QwenLM/qwen-code: Qwenモデル最適化のオープンソースターミナルAIエージェント、Qwen3.6-Plusモデル対応・OAuth無料枠あり"
  - "siddharthvaddem/openscreen: Screen Studioの無料オープンソース代替、自動ズーム・アノテーション・モーションブラー対応"
codex_review: "派手なのはoh-my-codex周辺だが、私にはMLX-VLMのKVキャッシュ圧縮とMicrosoftの再編完了のほうが効いて見える。エージェントの流行を“玩具”で終わらせない地味だが重要な週だ。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Blaizzy/mlx-vlm

Apple MLXフレームワーク向けのVision Language Model推論・ファインチューニングパッケージ。v0.4.4で複数の重要機能が追加された。TurboQuant KVキャッシュ圧縮は、ランダム回転＋コードブック量子化により16-bitから2-4 bitへの圧縮を実現し、128kコンテキストでKVメモリを最大76%削減。VisionFeatureCacheにより、マルチターン会話でのプロンプト処理が11倍以上高速化。音声入力（WAV/MP3）とマルチモーダル（画像＋音声）生成に対応。NVIDIA GPU向けのActivation Quantization（mxfp8/nvfp4）もサポート。対応モデルにGemma 4、Falcon-OCR、Granite 4.0 Vision、DeepSeek-OCR-2などが追加された。OpenAI互換のFastAPIサーバーも内蔵。

[ソース](https://github.com/Blaizzy/mlx-vlm)

### onyx-dot-app/onyx

オープンソースAIプラットフォーム「Onyx」がGitHub Trending全言語・Python両部門にランクイン。RAG、Deep Research、カスタムエージェント、Web検索、コード実行、音声モード、画像生成など多機能を統合。50以上のインデキシングコネクタとMCP対応により外部アプリケーションとの連携が可能。StandardモードとLiteモード（1GB以下）の2種類のデプロイオプションを提供。Docker / Kubernetes / Helm / Terraformに対応し、主要クラウドプロバイダーへのデプロイガイドも完備。Enterprise EditionではSSO（SAML/OIDC）、RBAC、SCIM、ホワイトラベリングにも対応。

[ソース](https://github.com/onyx-dot-app/onyx)

### Yeachan-Heo/oh-my-codex

前回レポートではoh-my-claudecodeとして紹介されていたプロジェクトが、oh-my-codex（OMX）にリブランド。OpenAI Codex CLIのワークフロー拡張レイヤーとして再定位された。`$deep-interview`（スコープ明確化）、`$ralplan`（計画承認）、`$ralph`（永続完了ループ）、`$team`（協調並列実行）の4つの標準スキルによるワークフローを提供。tmuxベースの耐久チームランタイム、`.omx/`ディレクトリでの計画・ログ・メモリ・状態管理、HUD監視機能を搭載。GitHub Trending TypeScript部門で#1を獲得し16,300超スターを達成。

[ソース](https://github.com/Yeachan-Heo/oh-my-codex)

### microsoft/agent-framework

MicrosoftがSemantic KernelとAutoGenを統合再編した包括的マルチエージェントフレームワーク「Microsoft Agent Framework」のVersion 1.0が正式リリース。Python（pip install agent-framework）と.NET（NuGet）の両方に対応。グラフベースワークフローによるエージェント接続、ストリーミング、チェックポイント、human-in-the-loop、タイムトラベル機能を提供。Semantic KernelおよびAutoGenからの移行ガイドを公式ドキュメントで整備。AF Labsとして実験的パッケージ（ベンチマーク、強化学習）も提供。

[ソース](https://github.com/microsoft/agent-framework)

### QwenLM/qwen-code

Alibaba Qwenチームが開発したオープンソースのターミナルAIエージェント。2026年4月2日にQwen3.6-Plusモデルが公開され、Qwen OAuthログインで1日1,000リクエストの無料枠を提供。OpenAI / Anthropic / Google GenAI互換APIに対応し、複数プロバイダーの切り替えが可能。SubAgents、Skills等のエージェントワークフロー機能を搭載し、Claude Code類似の体験を実現。VS Code、Zed、JetBrains IDEとの統合、ヘッドレスモード（`qwen -p`）によるCI/CD連携にも対応。TypeScript SDKも提供。

[ソース](https://github.com/QwenLM/qwen-code)

### siddharthvaddem/openscreen

Screen Studioの無料オープンソース代替としてGitHub Trending TypeScript部門にランクイン。Electron + React + PixiJSで構築。自動ズーム・手動ズーム（深度レベルカスタマイズ可）、マイク・システム音声キャプチャ、モーションブラー、アノテーション（テキスト・矢印・画像）、トリミング、セグメント別速度調整、複数アスペクト比・解像度でのエクスポートに対応。macOS / Linux / Windows対応。ベータ版。

[ソース](https://github.com/siddharthvaddem/openscreen)

## コミュニティの反応

### Blaizzy/mlx-vlm

#### ポジティブ

> Gemma4とFalcon Perceptionをmlx-vlmでループし、画像セグメンテーションと推論を組み合わせてオフサイド判定などのタスクを実現。M3 Mac上でローカル実行 — @dahou_yasser [出典](https://x.com/i/status/2040552094051270930)

> mlx-vlm v0.4.4リリース、TurboQuantで最大1.90x高速化・89% KVキャッシュ削減、VisionFeatureCache追加、Gemma4修正、Falcon-Perceptionサポート — @Prince_Canuma [出典](https://x.com/i/status/2040451789363851350)

> M5 MaxでGemma-4-26B-A4Bの4-bit/8-bit量化結果をmlx-vlm 0.4.4でテスト — @jtdavies [出典](https://x.com/i/status/2040545564144574618)

> Mac上でSAM3とRF-DETRをmlx-vlmライブラリで使用、リアルタイムセグメンテーション実現 — @MaziyarPanahi [出典](https://x.com/i/status/2040572435838181385)

#### ネガティブ

> M4 MacBook (32GB)でGemma 4 26B MoE (4-bit) TurboQuantベンチマーク、16k超コンテキストでシステムクラッシュ — @tomchapin [出典](https://x.com/i/status/2040517801690194061)

### onyx-dot-app/onyx

#### ポジティブ

> オープンソースの無料万能AIツール「Onyx」が登場。ローカル実行、あらゆるLLM対応、リサーチ機能でClaude超え、40以上のデータソース接続、画像生成・音声・RAG・コード実行可能。法人向けに最適 — @masahirochaen [出典](https://x.com/i/status/2040909350798242063)

> Claudeの上位互換Onyx（無料・オープンソース・GitHubスター2万超）。ローカル動作、任意LLM対応、Deep Research、40データソース接続、Dockerセルフホスト可能 — @ai_bunshin_lab [出典](https://x.com/i/status/2039952059697656128)

#### Tips

> OnyxはRAG+UI基盤。GitHubスター2万超、社内データ横断検索（40コネクタ、Agentic RAG、Deep Research）、M365 CopilotのOSS版的位置づけ。競合比較で実用的 — @__SatoshiSsSs__ [出典](https://x.com/i/status/2040074332421210389)

> OnyxはClaudeキラーではなく「Claudeをさらに強く使える」オープンソースAIプラットフォーム。有望ツールだがモデル超えではない。試す価値あり — @1404rasb [出典](https://x.com/i/status/2040175599441072540)

> Claude Codeの無料版みたいなOnyx。40アプリ連携・ディープリサーチ可能だが、向き不向きあり — @09pauai [出典](https://x.com/i/status/2039674224210747750)

### Yeachan-Heo/oh-my-codex

前回からoh-my-claudecodeよりリブランド。Codex CLIベースのワークフローツールとして再定位。

#### ポジティブ

> GitHubで急成長中、Codex CLIをマルチエージェントオーケストレーションに変える。hooks、構造化プラン、ライブHUD監視を追加 — @mayankhansraj12 [出典](https://x.com/i/status/2040069554941141092)

> 今週GitHubトレンド#1、16,300スター。Codex CLIの上にワークフローレイヤー、hooks、エージェントチーム、HUD、スキル、耐久状態を追加。インストール簡単 — @drawais_ai [出典](https://x.com/i/status/2040801504676680138)

> OpenAI Codexより優位: 30特殊エージェント、ワークフロースキル対応、マルチエージェントで上回る、100%オープンソース(10k+スター) — @ai_rohitt [出典](https://x.com/i/status/2039690148607377799)

#### Tips

> OpenClawのQAプロセスで使用、Orchestratorエージェントがタスク定義・検証、失敗時はsubagentで修正。clawcodeのリライトでドライバーとして活用 — @whodisxbt [出典](https://x.com/i/status/2040908271922327741)

### microsoft/agent-framework

#### ポジティブ

> Microsoft Agent Frameworkの.NET版V1が正式リリース。AIエージェント機能に特化し、Semantic Kernelから再整理された安定版でプロダクション利用が可能 — @topickapp_com [出典](https://x.com/i/status/2040767659189645485)

> Microsoft Agent Framework Version 1.0がリリース — @armindom [出典](https://x.com/i/status/2040889088274727840)

> Microsoftと共同でMicrosoft Agent Frameworkを活用したマルチエージェントシステム構築ワークショップ開催 — @WWCKorea [出典](https://x.com/i/status/2040811405826511212)

#### Tips

> PythonコードレビュアーをMicrosoft Agent Frameworkで構築。ルーターでスタイル/セキュリティエージェントにルーティング、グラフベース — @BuildFastWithAI [出典](https://x.com/i/status/2038627783417397259)

> Microsoft Agent FrameworkをローカルLLMで試用 — @yy7613 [出典](https://x.com/i/status/2040783093636976668)

### QwenLM/qwen-code

#### ポジティブ

> Qwen Codeはエージェントコーディング向けに構築、Claude Code等の代替で長期タスク対応、preserve_thinking APIで推論履歴保持 — @mieru_ai_com [出典](https://x.com/i/status/2040565095756165195)

> Qwen Codeを試せ、最高だよ（OpenCodeでのQwen3.6 Plus使用文脈） — @ManduInca [出典](https://x.com/i/status/2040494741465243830)

> Alibabaのcoding planでqwen codeをClaude Code代替として推奨 — @AntonM2015 [出典](https://x.com/i/status/2040532980125360330)

#### Tips

> kimi cliをPMにqwen codeをバックエンド実行として使用（codex quota枯渇対策） — @KalekMich7668 [出典](https://x.com/i/status/2040433417649791315)

### siddharthvaddem/openscreen

X/Twitterでの注目すべき反応は確認できなかった。

## ソース

- [Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm)
- [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)
- [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
- [microsoft/agent-framework](https://github.com/microsoft/agent-framework)
- [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)
- [siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
