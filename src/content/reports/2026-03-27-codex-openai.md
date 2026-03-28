---
title: "Codex CLI v0.117.0正式リリース"
summary: "Codex CLI v0.117.0が正式リリース。プラグインのファーストクラス昇格、サブエージェントのパスベースアドレス、app-server TUIデフォルト化が主な変更。コミュニティでは3大AIコーディングエージェント比較やOpenAI Agents SDK実践ガイドが話題。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-03-27
features:
  - "Codex CLI v0.117.0: プラグインがファーストクラス機能に昇格、サブエージェントのパスベースアドレス導入、app-server TUIがデフォルト化"
  - "Model Spec公開: OpenAIがモデル行動の公開フレームワーク「Model Spec」のアプローチを詳説"
  - "OpenAI Safety Bug Bountyプログラム: エージェント脆弱性・プロンプトインジェクション・データ流出などAI安全性リスク発見の報奨金プログラムを開始"
---

## 公式アップデート

### Codex CLI v0.117.0を正式リリース

Codex CLIの安定版v0.117.0がリリースされた。主な変更点は以下の通り。

- **プラグインがファーストクラス機能に昇格**: 起動時にプロダクトスコープのプラグインを同期し、`/plugins`コマンドで一覧・インストール・削除が可能に
- **サブエージェントのパスベースアドレス導入**: `/root/agent_a`のような読みやすいパス形式のアドレスを採用。構造化されたエージェント間メッセージングとエージェント一覧機能を追加
- **app-server TUIがデフォルト化**: app-serverベースのTUIがデフォルトで有効に。プラグイン/アプリのロールアウトフラグも通常ビルドで有効化
- **`/title`コマンドの拡張**: クラシックTUIとapp-server TUIの両方でターミナルタイトル変更が可能に
- **画像ワークフロー改善**: `view_image`がコードモードで画像URLを返却、TUIから画像再表示・レジューム時の画像履歴保持に対応
- **レガシーツール廃止**: 旧`read_file`・`grep_files`ハンドラおよびレガシーアーティファクトツールを削除

バグ修正として、TUIでの推論サマリー重複表示の修正、ChatGPTログインのブラウザ連携復旧、Linux旧ディストリでのサンドボックス信頼性向上、Windows制限トークンサンドボックスの対応拡大などが含まれる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.117.0)

### Model Specのアプローチを詳説（前回から継続）

OpenAIがモデル行動の公開フレームワーク「Model Spec」について、安全性・ユーザーの自由・説明責任のバランスをどう取るかを解説した。

[ソース](https://openai.com/index/our-approach-to-the-model-spec)

### Safety Bug Bountyプログラムを開始（前回から継続）

エージェント脆弱性、プロンプトインジェクション、データ流出などのAI安全性リスクを対象とした新しいバグバウンティプログラムを発表。

[ソース](https://openai.com/index/safety-bug-bounty)

### gpt-oss-safeguardによるティーン安全ポリシーを公開（前回から継続）

開発者向けに、年齢に応じたリスクをモデレーションするためのプロンプトベースのティーン安全ポリシーをオープンソースで公開した。

[ソース](https://openai.com/index/teen-safety-policies-gpt-oss-safeguard)

### ChatGPTにショッピング機能を導入（前回から継続）

Agentic Commerce Protocolを基盤とし、製品発見・比較・マーチャント連携を可能にするビジュアルショッピング体験を導入。

[ソース](https://openai.com/index/powering-product-discovery-in-chatgpt)

### OpenAI Foundationが10億ドル以上の投資計画を発表（前回から継続）

疾病治療、経済機会、AIレジリエンス、コミュニティプログラムの4分野に少なくとも10億ドルを投資する計画。

[ソース](https://openai.com/index/update-on-the-openai-foundation)

## コミュニティの反応

### Codex CLI v0.117.0

#### ポジティブ

> プラグインのfirst-classサポートが嬉しい。起動時同期、`/plugins`ブラウザ、インストール/削除の簡素化でワークフローの基盤として位置づけ。 — @hir08ma [X](https://x.com/i/status/2037664175942770888)

> サブエージェントがパスベースアドレス（/root/agent_a）で階層/関係性管理が可能に。メイン↔サブだけでなくサブ↔サブ連携に期待。 — @yoppy0123 [X](https://x.com/i/status/2037316456548082094)

> プラグインでSKILL/MCPサーバー設定を1つにパッケージ化でき、共有・配布しやすくなった。 — @shotaro_311 [X](https://x.com/i/status/2037331463629423099)

> app-server TUIデフォルト有効で常駐型基盤化。シェルコマンド/ファイル監視/リモート接続でCLIから実行ネットワークへ移行。 — @KoichiNishizuka [X](https://x.com/i/status/2037306144704868550)

> 自律ループ（チケット処理、Playwrightテスト、PR自動化）への期待が高く、「危険なほど近い」と興奮の声。 — @euboid [X](https://x.com/i/status/2035118821280006274)

### Model Spec公開フレームワーク（前回から継続）

X/Twitter上での新規反応は該当なし（X検索スキップ）。

### OpenAI Safety Bug Bountyプログラム（前回から継続）

#### 解説（新規）

> OpenAI Safety Bug Bounty入門 — AIエージェントの「悪用」を見つけて報酬を得る新しいセキュリティのあり方：プログラムの概要と参加方法を解説 — AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/9004595f9f3d9886bab3)

### 3大AIコーディングエージェント比較（新規）

#### 解説

> Claude Code vs Gemini CLI vs Codex CLI — 3大AIコーディングエージェントを実際に使い比べてみた【2026年3月版】：各ツールの特徴と使い分けを比較 — AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/c33663c22d7dab418ef3)

### Structured Outputs実装パターン（新規）

#### 解説

> LLMから確実にJSONを受け取る — Structured Outputs実装パターン完全ガイド：LLM APIからの構造化出力の実装方法を網羅的に解説 — AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/764144688182c7087acb)

### OpenAI Agents SDK実践ガイド（新規）

#### 解説

> OpenAI Agents SDK 実践ガイド——Pythonでマルチエージェントワークフローを構築する：Agent・Tool・Handoff・Guardrail・Tracingの全機能を実動コードで解説。カスタマーサポートBotとコード生成パイプラインの完全実装付き — 緒方 [Zenn](https://zenn.dev/bluecat/books/ad31cb6e65673c)

### LangChain APIコール自動記録（新規）

#### Tips

> LangChainの全APIコールを1行で自動記録する — llm-devproxy v0.4：Agent実行時の裏側のLLM呼び出し回数・コストを可視化するツールを紹介 — ash [Zenn](https://zenn.dev/ash4/articles/940e3263b9a810)

### OpenAI SDK proxiesエラー対処（新規）

#### Tips

> OpenAI SDK proxiesエラーの完全解決ガイド【httpx 0.28破壊的変更】：httpx 0.28とOpenAI SDKのバージョン不整合による本番障害の原因と解決手順を共有 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/openai-sdk-proxies-httpx-error)

### ハーネスエンジニアリング（前回から継続）

#### 解説

> 「そのSkill、本当に意味ありますか？」Skillのレビューを通じて学ぶハーネスエンジニアリング入門：AIエージェント向けSkill設計の品質向上手法 — kauchi [Zenn](https://zenn.dev/kauchi/articles/learning-harness-engineering-by-skill-review)

### Sora提供終了と移行先（前回から継続）

#### 解説

> さらばSora。動画生成AIの「産業シフト」を読み解き、次世代APIへ移行するための技術スタック — ケン吉 [Zenn](https://zenn.dev/headwaters/articles/0b232a955c458a)

### LLM APIとプライバシー（前回から継続）

#### 注意喚起

> OpenAIにAPIを送るだけで個人情報保護法違反？LLM開発者が知るべきAPPIリスクと対策 — zivuch [Zenn](https://zenn.dev/zivuch/articles/qiita-appi-llm-article)

### 推論トークンの可視化（前回から継続）

#### Tips

> o1/o3/o4の推論トークン、いくら使ってるか見えてますか？llm-devproxy v0.3で推論トークンの把握方法を紹介 — ash [Zenn](https://zenn.dev/ash4/articles/b0af56d3503239)

### LLMアプリ本番運用（前回から継続）

#### 解説

> LLMアプリを本番運用して気づいた、ログだけでは足りない理由 — FujiTrace [Zenn](https://zenn.dev/fujitrace/articles/d83ee787bab7b7)

### LLM API料金の整理（前回から継続）

#### 解説

> LLMのAPI料金のしくみを整理してみた — peintangos [Zenn](https://zenn.dev/peintangos/articles/3cd4fe5367a9ae)

### セキュリティ・プライバシー（前回から継続）

#### ツール紹介

> LLMのプロンプトからPIIを自動検出・保護するOSSミドルウェア（マイナンバー対応） — zivuch [Zenn](https://zenn.dev/zivuch/articles/cloakllm-pii-protection-llm-japanese)

### GPT-5.4 / GPT-5ファミリー（前回から継続）

#### 解説

> GPT-5.4リリース総まとめ：モデル・API・エージェント機能の全体像 — picnic [Zenn](https://zenn.dev/picnic/articles/openai-changelog)

### Codexアプリ（前回から継続）

#### 解説

> Codexアプリによるシステム開発（概要編） — Hiroaki Katori [Zenn](https://zenn.dev/sboai_tech/articles/b690e56d8e4765)

#### 注意喚起

> OpenAI Codex業務自動化で陥りがちな7つの罠と解決方法 — 原田賢治 [Zenn](https://zenn.dev/kenji_harada/articles/openai-codex-7)

### Deep Research（前回から継続）

#### 解説

> Deep Researchの正体は、賢いモデルより賢いアーキテクチャだった — peintangos [Zenn](https://zenn.dev/peintangos/articles/e0e31bdd260171)

### LLM評価（前回から継続）

#### 解説

> LLM as a Judgeを実務で使うときに最初に考えるべきこと — peintangos [Zenn](https://zenn.dev/peintangos/articles/525b8067c852e8)

### 超長文対応RAG（前回から継続）

#### 解説

> 【RAG】1000万文字の会話を理解させる手法：SRLMによる超長文への検索手法 — sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/9b21b1868f588b)

### AIエージェント開発（前回から継続）

#### 解説

> LLMを使った自律型エージェントの基本：プロンプトからツール連携まで — 株式会社シャイオス [Zenn](https://zenn.dev/shineos/articles/ai-agent-development-basics)

### RAG本番運用（前回から継続）

#### 解説

> RAGを本番環境で運用するための設計と実装 — NKKTech Global [Zenn](https://zenn.dev/nkktech_global/articles/9591c30a20a516)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
