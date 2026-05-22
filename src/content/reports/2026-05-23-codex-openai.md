---
title: "Codex CLI v0.134.0アルファ進行とGPT-5.5 Instant発表"
summary: "Codex CLI v0.134.0-alpha.2がリリースされ、v0.134.0系の開発が急ピッチで進行。GPT-5.5 Instantの発表やglacier-alphaリーク情報が話題に。X上での個別機能への反応は低調。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-23
features:
  - "Codex CLI v0.134.0-alpha.2: Rustベースの最新アルファリリース（v0.134.0系の2番目のプレリリース）"
  - "Codex CLI v0.134.0-alpha.1: Rustベースのv0.134.0系初回アルファリリース"
  - "Codex CLI v0.133.0 Goals機能デフォルト有効化: Goalsが専用ストレージ付きでデフォルト有効になり、アクティブターン間で進捗を追跡"
  - "Codex CLI v0.133.0 remote-control UX改善: codex remote-controlがフォアグラウンドコマンドとして動作し、readiness待機・マシンステータス報告・start/stopコマンドを提供"
  - "Codex CLI v0.133.0 Permission Profiles強化: リストAPI・継承・managed requirements.tomlサポート・ランタイムリフレッシュ・Windows sandbox統合を追加"
  - "Codex CLI v0.133.0 Plugin Discovery改善: マーケットプレイス対応のリスト出力・インストール済みバージョン表示・リモートコレクションサポート"
  - "Codex CLI v0.133.0 Extension Lifecycle Events拡張: サブエージェントstart/stop・ツール実行・ターンメタデータ・非同期承認/ターン処理のイベント監視が可能に"
codex_review: "CLIの更新自体は地味でも、Goalsや権限管理の磨き込みは実務導入の本丸で、むしろこちらが効く。いまはGPT-5.5 Instantに話題を奪われ気味だが、後から効いてくるタイプの進展だと思う。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.134.0-alpha.2

v0.134.0系の2番目のアルファリリース（5月22日）。リリースノートは「Release 0.134.0-alpha.2」のみで、詳細な変更内容は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.2)

### Codex CLI v0.134.0-alpha.1

v0.134.0系の初回アルファリリース（5月22日）。alpha.2と同日にリリースされており、急速な反復開発が進行中。詳細な変更内容は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.1)

### Codex CLI v0.133.0（前回から継続）

前回レポートで詳報済み。Goals機能デフォルト有効化、remote-control UX改善、Permission Profiles強化、Plugin Marketplace対応、Extension Lifecycle拡充を含む大型リリース。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.133.0)

## コミュニティの反応

### Codex CLI v0.134.0-alpha / v0.133.0

X/Twitter上の個人ユーザーによる反応は該当なし。アルファ版のため注目度は限定的。

### GPT-5.5 Instant

#### 分析

> OpenAI、業務用最高性能モデル「GPT-5.5 Instant」を発表 — ChatGPTの"頭脳"が大きく変わると解説 — quotidia [Qiita](https://qiita.com/quotidia/items/8c0adda0c10477de037a)

> OpenAI APIの reasoning effort パラメータをgpt-5.5で検証 — none/low/medium/high/xhighの5段階で出力がどう変化するか実際に比較（前回から継続） — Pochimu [Zenn](https://zenn.dev/pochimutech/articles/ae2df808f8a27d)

> GPT-5.5で「ステップ・バイ・ステップで考えて」が効かなくなる場面？ — OpenAI公式の新プロンプト構造を実例で読み解く（前回から継続） — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/gpt-5-5-prompting-guide)

### glacier-alpha（OpenAI新モデルリーク）

#### 分析

> 「glacier-alpha」って結局なんなんですか、という話 — AI界隈で盛り上がるOpenAI新モデルリーク情報について、英語・中国語・日本語圏の温度感の違いを整理し、確認済み事実と憶測を分離 — 多田悠 [Zenn](https://zenn.dev/tadayuu/articles/7612983470e8a6)

### OpenAI社内のCodex活用

#### Tips

> OpenAI社内のCodex活用に学ぶ、AIコーディングエージェントの使い方 — 「How OpenAI uses Codex」資料からSecurity・エンジニアリングチームの日常業務への組み込み方を解説 — ootakazuhiko [Qiita](https://qiita.com/ootakazuhiko/items/e52b1316d7be1211c48b)

### Codex エコシステム・ハーネス

#### Tips

> Claude Code・Codex時代に重要になる「ハーネス」という考え方 — LLM単体では不十分な理由とHarness Engineeringの重要性を解説（前回から継続） — Taka [Zenn](https://zenn.dev/taka000/articles/ffe2f97499a151)

> 技術調査 - Codex App Server — JSON-RPC 2.0双方向プロトコルでエージェントループ・スレッド管理・サンドボックス実行をクライアントに統合（前回から継続） — suwa-sh [Zenn](https://zenn.dev/suwash/articles/codex-app-server_20260514)

> Codex Petsで学ぶSkill設計 — hatch-petスキルでオリジナルPetを作成する方法とSkill設計の考え方を解説（前回から継続） — ruiewo [Zenn](https://zenn.dev/terass_dev/articles/a2423e49ece071)

> Skillが「ソロ開発者の流通単位」になる日 — Agent Skills 1.2M+の意味（前回から継続） — Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

> Codex App Server × GPT-Realtime-2で声で対話しながら動かせるペアプログラマーのプロトタイプを作成（前回から継続） — hiraoku [Zenn](https://zenn.dev/hiraoku/articles/codex-app-server-gpt-realtime-2)

### その他

#### 分析

> マルタ共和国がChatGPTを全国民に無償提供、公共インフラとしてのAIになるのか — 国家がAIを基盤インフラとして位置づけた世界初の事例（前回から継続） — syoshida07 [Zenn](https://zenn.dev/syoshida07/articles/8a2449e9338d01)

> AIを型で律する「設計図」の書き方 — note2Zenn開発記でCursorを使ったAI駆動開発の構成を紹介 — hanav1ye [Zenn](https://zenn.dev/hanav1ye/articles/note2zenn-vol3)

> 「3社AIが並列で設計書を審査する」仕組みを作るまでの試行錯誤 — Claude単独の自己評価バイアスを複数社AIで解消する手法（前回から継続） — ArchitectAI [Zenn](https://zenn.dev/architectai/articles/69abd5915233cb)

> Azure ガードレールの先 — PyRIT・Red Teaming Agent・Risk & Safety Evaluatorsで本番ガードレールの実効性をテスト — 毎熊 星湾 [Zenn](https://zenn.dev/headwaters/articles/fb0b48788a914b)

> イーロン・マスク、サム・アルトマンとOpenAIに対する訴訟で敗訴 — 陪審員全員一致で消滅時効により棄却（前回から継続） — Quotidia [Zenn](https://zenn.dev/quotidia/articles/79eebc778a67bd)

> AIが自分でコードの穴を見つけて直すらしい — Codex Securityの概要紹介（前回から継続） — 多田悠 [Zenn](https://zenn.dev/tadayuu/articles/5835f6f05add90)

> なぜ、AnthropicのMythosはコケおどしであると断言できるのか？ — 能力は認めつつパラダイムシフトとしての演出に疑問を呈する — pdfractal [Zenn](https://zenn.dev/pdfractal/articles/b5cb37ea30814c)

> Responses APIのサーバサイド圧縮（server side compaction）を試す（前回から継続） — yamaday [Zenn](https://zenn.dev/yamaday/articles/responses-api-server-side-compaction)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
