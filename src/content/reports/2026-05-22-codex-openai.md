---
title: "Codex CLI v0.133.0正式版とGPT-5-4/5-3 Codex Spark検出"
summary: "Codex CLI v0.133.0がGoals機能デフォルト有効化・Plugin Marketplace・Permission Profiles強化など大型アップデート。GPT-5-4とGPT-5-3 Codex Sparkがサイトマップで検出され、ChatGPT個人財務機能にも注目が集まる。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-22
features:
  - "Codex CLI v0.133.0: Goals機能がデフォルト有効化、専用ストレージとターン間の進捗追跡に対応"
  - "Codex CLI v0.133.0 remote-control改善: フォアグラウンド実行、readiness待機、マシンステータス表示、start/stopコマンド追加"
  - "Codex CLI v0.133.0 Permission Profiles: リストAPI、継承、requirements.toml管理、ランタイムリフレッシュ、Windowsサンドボックス統合強化"
  - "Codex CLI v0.133.0 Plugin Marketplace: マーケットプレイス対応のリスト出力、インストール済みバージョン表示、リモートコレクション対応"
  - "Codex CLI v0.133.0 Extension Lifecycle: サブエージェント開始/停止、ツール実行、ターンメタデータ、非同期承認のイベント監視対応"
  - "GPT-5-4: 新モデル発表（openai.comサイトマップで検出）"
  - "GPT-5-3 Codex Spark: Codex向け新モデル発表（openai.comサイトマップで検出）"
  - "Building Codex Windows Sandbox"
  - "ChatGPT広告機能"
  - "ChatGPT個人財務機能"
  - "ChatGPTプロダクトディスカバリー"
  - "Model Spec更新"
codex_review: "v0.133.0はGoals機能のデフォルト有効化とPlugin Marketplaceの本格整備が目玉。Permission Profilesの継承・requirements.toml管理やExtension Lifecycleのイベント拡充など、エコシステム基盤の成熟が進んでいる。GPT-5-3 Codex Sparkの登場でコーディング特化モデルのラインナップが拡充され、速度面での評価が高い。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.133.0

Rust版Codex CLIの正式安定版（5月21日リリース）。前日のalpha版から正式版へ昇格。主な新機能:

- **Goals機能デフォルト有効化**: 専用ストレージにバックアップされ、アクティブなターン間で進捗を追跡可能に (#23300, #23685, #23696, #23732)
- **`codex remote-control`改善**: フォアグラウンドコマンドとして実行、readiness待機、マシンステータス表示、明示的な`start`/`stop`コマンドを追加 (#22878)
- **Permission Profiles強化**: リストAPI、プロファイル継承、マネージド`requirements.toml`サポート、ランタイムリフレッシュ、Windowsサンドボックス統合の強化 (#22928, #23412, #22270, #23433, #22931, #23715)
- **Plugin Marketplace対応**: マーケットプレイス対応のリスト出力、インストール済みバージョン表示、マーケットプレイスルートの可視化、リモートコレクションサポート (#23372, #23584, #23727, #23730)
- **Extension Lifecycle拡充**: サブエージェントの開始/停止、ツール実行、ターンメタデータ、非同期承認/ターン処理のイベント監視に対応 (#22782, #22873, #23309, #23688, #23690, #23692)

バグ修正ではTUI起動時のワーキングディレクトリ誤選択、plan-modeでのShift+Enter誤送信、バックグラウンドターミナルのstale poll events、AGENTS指示ファイルの読み込み信頼性、app-serverの起動/シャットダウン競合などを修正。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.133.0)

### openai.com 新規ページ検出

Step 1の抽出で以下の新規ページが検出された（RSS外、サイトマップ検出）:

- **GPT-5-4**: 新モデルの発表ページ
- **GPT-5-3 Codex Spark**: Codex向け新モデルの発表ページ
- **ChatGPT広告機能**: ChatGPTでの新しい広告購入方法の導入
- **ChatGPT個人財務機能**: ChatGPTにパーソナルファイナンス機能を追加（前回から継続）
- **ChatGPTプロダクトディスカバリー**: ChatGPTでの商品発見機能の強化
- **Building Codex Windows Sandbox**: CodexのWindowsサンドボックス構築に関する技術記事（前回から継続）
- **Model Spec更新**: 最新のモデル仕様を公開（前回から継続）

## コミュニティの反応

### GPT-5-3 Codex Spark

#### ポジティブ

> Realtime-2とCodex Sparkの組み合わせで即時フィードバックが魔法のように感じる。EOYまでにトップモデルで実現しそう — @Jaytel

> Android開発ベンチマークでGPT 5.3 Codexが上位ランクイン（GPT 5.5に次ぐ）。実際のモバイルエンジニアリング品質で評価 — @wildmindai

> GPT 5.3 Codex Spark後の高速推論事例として、CerebrasのKimi K2.6（1Tパラメータ超）が~1000 tokens/sで快適 — @shao__meng

#### Tips

> GPT-5.3-Codex公式の新標準「Phased Preamble Prompting」（受領確認→計画提示→承認→実行の4フェーズ）を紹介。AIの暴走防止策として有効 — @MakeAI_CEO

> 5.3 codex sparkは爆速でコード生成するが、既存コード編集時は壊しやすい。用途次第で注意 — @digimaga

### ChatGPT個人財務機能

#### ポジティブ

> 個人財務機能の追加は単なるチャットを超え、支出・収入・投資を把握する「個人CFO」化すると評価。口座連携の是非を議論 — @VraserX

#### ネガティブ

> OpenAIの新機能でフィンテック企業が多数淘汰されると指摘。銀行口座連携で支出ダッシュボードやGPT-5.5による分析が可能になった点を詳述 — @kimmonismus

> 予算管理機能がClaudeを「削除推奨」するようなAI冷戦状態になり、企業同士の排除競争を招いたと皮肉 — @knownresident

#### Tips

> 実際に銀行口座を接続した体験を動画で共有。支出内訳・サブスク分析・アドバイス例を紹介し、「接続して大丈夫か」と実用的考察 — @ChrisCoffee

> ChatGPTの個人財務機能プレビュー（米国Proユーザー向け、Plaid連携）を紹介し、支出把握やAIアドバイスが可能になった点をまとめる — @shodaiiiiii

> ChatGPT Personal Finance入門 — Plaid連携でAI財務アドバイスを実装する手順を解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/d33751c6302f92c902cb)

### Codex CLI v0.133.0

X/Twitter上の個人ユーザーによる反応は該当なし。

### Building Codex Windows Sandbox

X/Twitter上の新規反応は該当なし（前回から継続）。

### Codex エコシステム・ハーネス

#### Tips

> Claude Code・Codex時代に重要になる「ハーネス」という考え方 — LLM単体では不十分な理由とHarness Engineeringの重要性を解説 — Taka [Zenn](https://zenn.dev/taka000/articles/ffe2f97499a151)

> 技術調査 - Codex App Server — JSON-RPC 2.0双方向プロトコルでエージェントループ・スレッド管理・サンドボックス実行をクライアントに統合 — suwa-sh [Zenn](https://zenn.dev/suwash/articles/codex-app-server_20260514)

> Codex Petsで学ぶSkill設計 — hatch-petスキルでオリジナルPetを作成する方法とSkill設計の考え方を解説（前回から継続） — ruiewo [Zenn](https://zenn.dev/terass_dev/articles/a2423e49ece071)

> Skillが「ソロ開発者の流通単位」になる日 — Agent Skills 1.2M+の意味（前回から継続） — Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

> Codex App Server × GPT-Realtime-2で声で対話しながら動かせるペアプログラマーのプロトタイプを作成（前回から継続） — hiraoku [Zenn](https://zenn.dev/hiraoku/articles/codex-app-server-gpt-realtime-2)

> Codexでエージェント駆動開発プラットフォームを設計する — Harness Engineeringの概念を解説（前回から継続） — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/66547a030c0236)

### その他

#### 分析

> マルタ共和国がChatGPTを全国民に無償提供、公共インフラとしてのAIになるのか — 国家がAIを基盤インフラとして位置づけた世界初の事例 — syoshida07 [Zenn](https://zenn.dev/syoshida07/articles/8a2449e9338d01)

> 企業LLM選定の軸：Ramp AI IndexからみるAnthropicとOpenAI — 情シス担当者向けに企業導入状況の比較軸を整理 — drasenas [Qiita](https://qiita.com/drasenas/items/5a9861f7cb8935c33aed)

> 「3社AIが並列で設計書を審査する」仕組みを作るまでの試行錯誤 — Claude単独の自己評価バイアスを複数社AIで解消する手法（前回から継続） — ArchitectAI [Zenn](https://zenn.dev/architectai/articles/69abd5915233cb)

> GPT-5.5で「ステップ・バイ・ステップで考えて」が効かなくなる場面？ — OpenAI公式の新プロンプト構造を実例で読み解く（前回から継続） — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/gpt-5-5-prompting-guide)

> イーロン・マスク、サム・アルトマンとOpenAIに対する訴訟で敗訴 — 陪審員全員一致で消滅時効により棄却（前回から継続） — Quotidia [Zenn](https://zenn.dev/quotidia/articles/79eebc778a67bd)

> AIが自分でコードの穴を見つけて直すらしい — Codex Securityの概要紹介（前回から継続） — 多田悠 [Zenn](https://zenn.dev/tadayuu/articles/5835f6f05add90)

> OpenAIはどうやって低遅延ボイスAIをスケールさせているのか — Realtime APIのWebRTCスタック再設計（前回から継続） — aienthusiast [Zenn](https://zenn.dev/aienthusiast/articles/article-20260515-090000)

> Responses APIのサーバサイド圧縮（server side compaction）を試す（前回から継続） — yamaday [Zenn](https://zenn.dev/yamaday/articles/responses-api-server-side-compaction)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
