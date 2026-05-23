---
title: "Codex CLI v0.134.0-alpha.3リリースとGoal Mode反応拡大"
summary: "Codex CLI v0.134.0-alpha.3がリリースされ、v0.134.0系の開発が継続。XではGoals機能の有効化TipsやUIプロトタイプ活用の投稿が出始め、QiitaではCodex v26.519のAppshots・Goal Mode正式版の解説記事が登場。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-24
features:
  - "Codex CLI 0.134.0-alpha.3: Codex CLI (Rust実装) の最新アルファリリース。0.134.0系の3番目のプレリリース版"
  - "Codex CLI 0.133.0 Goals機能デフォルト有効化: Goals機能がデフォルトで有効になり、専用ストレージとターン間の進捗追跡に対応"
  - "Codex CLI 0.133.0 remote-control UX改善: codex remote-controlがフォアグラウンドコマンドとして動作し、start/stopコマンドを明示的にサポート"
  - "Codex CLI 0.133.0 Permission Profiles強化: リストAPI、継承、managed requirements.toml、ランタイムリフレッシュ、Windows sandbox統合を追加"
  - "Codex CLI 0.133.0 Plugin Discovery改善: マーケットプレイス対応のリスト出力、インストール済みバージョン表示、リモートコレクションサポート"
  - "Codex CLI 0.133.0 Extension Lifecycle拡張: サブエージェントの開始/停止、ツール実行、ターンメタデータ、非同期承認などのイベント監視が可能に"
codex_review: "alpha連打そのものはやや話題先行に見えるが、/goalがTips共有から実運用へ移り始めた点はかなり重要だ。派手な新機能より先に作業の型が固まり、Codex単体から周辺エコシステムへ重心が移る感じが面白い。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.134.0-alpha.3

v0.134.0系の3番目のアルファリリース（5月23日）。リリースノートは「Release 0.134.0-alpha.3」のみで、詳細な変更内容は未公開。前日のalpha.1/alpha.2に続き、連日のプレリリースが継続。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.3)

### Codex CLI v0.134.0-alpha.2 / alpha.1（前回から継続）

v0.134.0系の最初の2つのアルファリリース（5月22日）。詳細な変更内容は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.134.0-alpha.2)

### Codex CLI v0.133.0（前回から継続）

Goals機能デフォルト有効化、remote-control UX改善、Permission Profiles強化、Plugin Marketplace対応、Extension Lifecycle拡充を含む大型リリース。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.133.0)

## コミュニティの反応

### Goals機能（/goal）

#### ポジティブ

> Codexの正式機能になった/goalを使ってUIプロトタイプを自律作成。確認しながら進めてくれる点が便利 — @shota7180 [X](https://x.com/shota7180/status/2058022616859029698)

#### Tips

> Codex Appで/goalを使うにはターミナルで`codex features enable goals`を実行後、再起動が必要（Mac/Win共通） — @k_matsumaru [X](https://x.com/k_matsumaru/status/2057651458259251481)

> Codex CLIの/goalワークフローがCodex Appでも利用可能に。`codex features enable goals`またはconfig.tomlで有効化 — @hqmank [X](https://x.com/hqmank/status/2057837634781852120)

### Codex v26.519（Appshots・Goal Mode正式版）

#### Tips

> Codex v26.519 新機能ガイド — Appshots・ロック中Mac操作・Goal Mode正式版の全貌を解説。Mac画面をワンショットでAIに共有できるAppshotsやRemote Computer Useの詳細 — kai_kou [Qiita](https://qiita.com/kai_kou/items/29b28119e4ed78322128)

### Codex CLIの実用活用

#### Tips

> 【2026年度版】Codex CLIをコードレビュー用途で使う方針まとめ — Git差分レビュー、Laravelコードレビュー、セキュリティレビューなどの運用方針を整理 — honda-dev-jp [Qiita](https://qiita.com/honda-dev-jp/items/f27f16583913d9027544)

> 【第一回】2026年5月時点のAIコーディングエージェントまとめ — OpenAI API・Claude API・GitHub Copilotの料金体系を横断比較 — ochtum [Qiita](https://qiita.com/ochtum/items/8fd5952e920da136dd94)

### Codex エコシステム・ハーネス

#### Tips

> Claude Code・Codex時代に重要になる「ハーネス」という考え方 — LLM単体では不十分な理由とHarness Engineeringの重要性を解説（前回から継続） — Taka [Zenn](https://zenn.dev/taka000/articles/ffe2f97499a151)

> 技術調査 - Codex App Server — JSON-RPC 2.0双方向プロトコルでエージェントループ・スレッド管理・サンドボックス実行をクライアントに統合（前回から継続） — suwa-sh [Zenn](https://zenn.dev/suwash/articles/codex-app-server_20260514)

> Codex Petsで学ぶSkill設計 — hatch-petスキルでオリジナルPetを作成する方法とSkill設計の考え方を解説（前回から継続） — ruiewo [Zenn](https://zenn.dev/terass_dev/articles/a2423e49ece071)

> Skillが「ソロ開発者の流通単位」になる日 — Agent Skills 1.2M+の意味（前回から継続） — Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

### OpenAI Image 2

#### Tips

> Image 2でブランドモックアップセットを約10分で生成する手順 — ロゴ1枚からブランド提案用モックアップを生成するワークフローを整理 — xiji2646 [Qiita](https://qiita.com/xiji2646/items/50b8d97e46cdda54a64f)

### GPT-5.5 Instant

#### Tips

> GPT-5.5で「ステップ・バイ・ステップで考えて」が効かなくなる場面？ — OpenAI公式の新プロンプト構造を実例で読み解く（前回から継続） — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/gpt-5-5-prompting-guide)

> OpenAI APIの reasoning effort パラメータをgpt-5.5で検証 — none/low/medium/high/xhighの5段階で出力がどう変化するか実際に比較（前回から継続） — Pochimu [Zenn](https://zenn.dev/pochimutech/articles/ae2df808f8a27d)

### AI御三家オーケストレーション

#### Tips

> Claude Opus 4.7 / GPT-5.5 Instant / Gemini 3.5 Flashを1スクリプトでオーケストレーション — 3モデルを役割分担で動かす最小実装を紹介 — kairos [Zenn](https://zenn.dev/kairosai/articles/7209c85870424d)

### その他

#### 分析

> glacier-alphaって結局なんなんですか、という話 — OpenAI新モデルリーク情報について英語・中国語・日本語圏の温度感の違いを整理（前回から継続） — 多田悠 [Zenn](https://zenn.dev/tadayuu/articles/7612983470e8a6)

> マルタ共和国がChatGPTを全国民に無償提供、公共インフラとしてのAIになるのか（前回から継続） — syoshida07 [Zenn](https://zenn.dev/syoshida07/articles/8a2449e9338d01)

> イーロン・マスク、サム・アルトマンとOpenAIに対する訴訟で敗訴 — 陪審員全員一致で消滅時効により棄却（前回から継続） — Quotidia [Zenn](https://zenn.dev/quotidia/articles/79eebc778a67bd)

> LLMの出力を安定させたい — note2Zenn開発記でLLMの固定ルール適用と出力調整を検証 — hanav1ye [Zenn](https://zenn.dev/hanav1ye/articles/note2zenn-vol4)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
