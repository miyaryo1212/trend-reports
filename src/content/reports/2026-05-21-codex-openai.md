---
title: "Codex CLI v0.132.0正式版とWindows Sandbox解説"
summary: "Codex CLI v0.132.0がPython SDK認証・Turn API改善・TUI高速化など大型アップデート。OpenAIがCodex Windowsサンドボックス構築のエンジニアリング記事を公開し注目を集める。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-21
features:
  - "Codex CLI v0.132.0: Python SDK first-class認証"
  - "Codex CLI v0.132.0 Python Turn API改善"
  - "codex exec resume --output-schema"
  - "Codex TUI起動高速化"
  - "Codex リモートエグゼキュータ登録の認証統合"
  - "Codex CLI v0.133.0-alpha.1/alpha.2"
  - "Work with Codex from anywhere"
  - "Building Codex Windows Sandbox"
  - "ChatGPT Study Mode"
  - "Personal Finance ChatGPT"
  - "Optimizing ChatGPT"
  - "Model Spec更新"
---

## 公式アップデート

### Codex CLI v0.132.0

Rust版Codex CLIの正式安定版（5月20日リリース）。主な新機能:

- **Python SDK first-class認証**: APIキーログイン、ChatGPTブラウザ/デバイスコードフロー、アカウント検査、ログアウトAPIをサポート (#23093)
- **Python Turn API改善**: テキストワークフロー向けにプレーン文字列入力対応、ハンドルベースの実行で`TurnResult`（アイテム・タイミング・使用量データ）を返却 (#23151, #23162)
- **`codex exec resume --output-schema`**: 再開した自動化でセッションコンテキストを保持しつつ構造化JSON出力を強制可能に (#23123)
- **TUI起動高速化**: ターミナル機能プローブをバッチ化し、初回インタラクティブフレーム表示までの待機を短縮 (#23175)
- **リモートエグゼキュータ登録の認証統合**: 別途のレジストリ認証フローではなく標準Codex認証で登録可能に (#22769)
- **App-server画像fidelity保持**: ユーザー入力・画像生成ツール間で要求された画像解像度を維持 (#20693)

バグ修正ではゴール継続のループ停止改善、セッションピッカーのUX向上、マルチセッションTUIの安定化、リモートセッションのWebSocket keepalive・diff表示修正、Windows環境のcodex doctor・MSVC静的CRTリンクなど多数。メモリサマリーのバージョニング・再構築も追加。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.132.0)

### Codex CLI v0.133.0-alpha.1 / alpha.2

v0.132.0の後続アルファ版（5月20日リリース）。リリースノートは「Release 0.133.0-alpha.1」「Release 0.133.0-alpha.2」のみで詳細なし。

[alpha.1ソース](https://github.com/openai/codex/releases/tag/rust-v0.133.0-alpha.1) / [alpha.2ソース](https://github.com/openai/codex/releases/tag/rust-v0.133.0-alpha.2)

### openai.com 新規ページ検出

Step 1の抽出で以下の新規ページが検出された（RSS外、ページ検出のみ）:

- **Work with Codex from anywhere**: Codexをどこからでも利用可能にする新機能の発表
- **Building Codex Windows Sandbox**: CodexのWindowsサンドボックス構築に関するエンジニアリング記事
- **ChatGPT Study Mode**: ChatGPTに学習モード機能を追加
- **Personal Finance ChatGPT**: ChatGPTにパーソナルファイナンス機能を追加
- **Optimizing ChatGPT**: ChatGPTの最適化に関する技術的改善
- **Model Spec更新**: 最新のモデル仕様（Model Spec）を公開

## コミュニティの反応

### codex exec resume --output-schema

#### Tips

> 既存セッションの文脈を保ったまま、最後の返答だけJSON Schemaで縛れる実用的な機能。定期ジョブなどの続きもの自動化で自由回答に戻って壊れる事故を減らせる — @ebisuke20260503

> OpenAI Codex CLI 0.132.0の新機能として紹介。Python SDKログインやTUI安定化と並んで、codex exec resume --output-schemaが刺さるポイント — @ebisuke20260503

### Codex リモートエグゼキュータ登録

#### Tips

> remote executor登録は標準Codex認証を使えるようになった（TUIとリモート実行の文脈で言及） — @haboshiastra

### Building Codex Windows Sandbox

#### ポジティブ

> Codex Windowsサンドボックス構築手法の公開をニュースまとめで紹介。エンタープライズからの問い合わせが発表後3時間で2000社に達した高関心ぶりを報告 — @MLBear2

> OpenAIのsandbox構築（Synthetic SIDs + write-restricted tokens、無管理者権限でWindows Home対応など）を要約し、安全なAI agent実行の重要性を強調 — @so_sthbryan

#### Tips

> Windows sandboxの4層構成（restricted tokensなど）を解説し、プロトタイプ失敗例や「AIエージェントがfilesystemに触れる前のハードルール」を指摘 — @gladius_atmfy

> agent権限をOS境界で絞る設計を指摘。writable roots/network例外/approval logの3点を先に決めるべきと実務Tipsを共有 — @hikariraina

> Windowsセキュリティモデルの制約（AppContainerなど不適合）を整理し、coding agentの安全性は実行境界設計が重要と指摘 — @yutaaaalll

### Codex CLI・Codex App

#### Tips

> ChatGPT Personal Finance入門 — Plaid連携でAI財務アドバイスを実装する手順を解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/d33751c6302f92c902cb)

> Claude CodeからCodexを利用するための初期設定 — Codex CLI 0.131.0とClaude Codeの連携手順 — omi_last_stand [Qiita](https://qiita.com/omi_last_stand/items/15a806ba932d6f2d88b2)

> AIが自分でコードの穴を見つけて直すらしい — Codex Securityの概要紹介 — 多田悠 [Zenn](https://zenn.dev/tadayuu/articles/5835f6f05add90)

> Codex Petsで学ぶSkill設計 — hatch-petスキルでオリジナルPetを作成する方法とSkill設計の考え方を解説（前回から継続） — ruiewo [Zenn](https://zenn.dev/terass_dev/articles/a2423e49ece071)

> Skillが「ソロ開発者の流通単位」になる日 — Agent Skills 1.2M+の意味（前回から継続） — Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

> Codex App Server × GPT-Realtime-2で声で対話しながら動かせるペアプログラマーのプロトタイプを作成（前回から継続） — hiraoku [Zenn](https://zenn.dev/hiraoku/articles/codex-app-server-gpt-realtime-2)

> Codexでエージェント駆動開発プラットフォームを設計する — Harness Engineeringの概念を解説（前回から継続） — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/66547a030c0236)

### その他

#### 分析

> 「3社AIが並列で設計書を審査する」仕組みを作るまでの試行錯誤 — Claude単独の自己評価バイアスを複数社AIで解消する手法 — ArchitectAI [Zenn](https://zenn.dev/architectai/articles/69abd5915233cb)

> GPT-5.5で「ステップ・バイ・ステップで考えて」が効かなくなる場面？ — OpenAI公式の新プロンプト構造を実例で読み解く — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/gpt-5-5-prompting-guide)

> イーロン・マスク、サム・アルトマンとOpenAIに対する訴訟で敗訴 — 陪審員全員一致で消滅時効により棄却 — Quotidia [Zenn](https://zenn.dev/quotidia/articles/79eebc778a67bd) / [Qiita](https://qiita.com/quotidia/items/c9f57003c5e654634512)

> OpenAI vs Anthropic：AI競争の主戦場は「モデル性能」から「ハーネス」へ移った（前回から継続） — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/e8695a0a51706c)

> OpenAIはどうやって低遅延ボイスAIをスケールさせているのか — Realtime APIのWebRTCスタック再設計の技術詳細（前回から継続） — aienthusiast [Zenn](https://zenn.dev/aienthusiast/articles/article-20260515-090000)

> OpenAI APIのreasoning effortパラメータをgpt-5.5で検証（前回から継続） — Pochimu [Zenn](https://zenn.dev/pochimutech/articles/ae2df808f8a27d)

> Responses APIのサーバサイド圧縮（server side compaction）を試す（前回から継続） — yamaday [Zenn](https://zenn.dev/yamaday/articles/responses-api-server-side-compaction)

> OpenAIの音声エージェント gpt-realtime-2 の入門解説 — atm_sakura [Qiita](https://qiita.com/atm_sakura/items/c486d839143ffcd8f223)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
