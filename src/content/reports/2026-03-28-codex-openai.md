---
title: "Codex CLI v0.118.0アルファ版が連続リリース"
summary: "Codex CLI v0.118.0のアルファ版が2日連続でリリース。公式ブログではSTADLER事例が公開されたが、Codex/OpenAIコア機能の大型発表はなし。コミュニティではエージェント時代の業界動向まとめやAIニュース考察が活発。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-03-28
features:
  - "Codex CLI v0.118.0-alpha: v0.118.0のアルファ版（alpha.1/alpha.2）がリリース"
  - "Codex CLI v0.117.0 プラグイン正式サポート: プラグインがファーストクラスのワークフローに昇格、同期・閲覧・インストールが統合"
  - "Codex CLI v0.117.0 マルチエージェントv2: サブエージェントがパスベースアドレス（/root/agent_a）を使用、構造化メッセージングに対応"
  - "Codex CLI v0.117.0 App Server TUIデフォルト化: app-server TUIがデフォルトで有効化、シェルコマンド・ファイルシステム監視・リモートWebSocket接続に対応"
---

## 公式アップデート

### Codex CLI v0.118.0-alpha.1 / alpha.2をリリース

Codex CLIの次期バージョンv0.118.0のアルファ版が3月27日に2ビルド連続でリリースされた。

- **v0.118.0-alpha.1**: 3月27日 15:46 UTC にリリース（担当: viyatb-oai）
- **v0.118.0-alpha.2**: 3月27日 21:25 UTC にリリース（担当: xl-openai）

いずれもリリースノートは「Release 0.118.0-alpha.X」のみで、詳細な変更内容は記載されていない。正式版で新機能の詳細が明らかになる見込み。

[ソース（alpha.2）](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.2) / [ソース（alpha.1）](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.1)

### STADLER社のChatGPT活用事例を公開

OpenAIブログにて、230年の歴史を持つスイスの鉄道車両メーカーSTADLER社がChatGPTを導入し、650名の従業員のナレッジワーク変革に活用している事例が公開された。

[ソース](https://openai.com/index/stadler)

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

### Codex CLI v0.118.0-alpha

X/Twitter上での反応は該当なし（X検索スキップ）。アルファ版のため、コミュニティでの言及はまだ限定的。

### AIエージェント時代の業界動向（新規）

#### 解説

> AIエージェント時代、業界トップの発言を翻訳・まとめてみた：Qwen元テクニカルリードの林俊旸氏による「推論からエージェントへ」のエッセイを軸に、業界リーダーの最新発言を翻訳・整理 — luoxi [Zenn](https://zenn.dev/luoxi/articles/from-reasoning-to-agents-industry-voices)

### AIニュース考察（新規）

#### 解説

> 今日のAIニュースで気になった3つのこと：OpenAIのIsaraへの$650M投資など、最近の動向への個人的考察 — 葵クロ [Zenn](https://zenn.dev/aoikuro/articles/2026-03-26-ai-topics-and-thoughts)

### AI業界の競争軸シフト（新規）

#### 解説

> 最新AIニュース3選：Model Spec、Safety Bug Bounty、Claude Opus 4.6から読む次の競争軸：モデル性能だけでなく、振る舞い設計・安全運用・長時間エージェント実行へ焦点が移行している分析 — hello_giita [Qiita](https://qiita.com/hello_giita/items/3c3591e672754ecdadb8)

### OpenAI Safety Bug Bountyプログラム（前回から継続）

#### 解説

> OpenAI Safety Bug Bounty入門 — AIエージェントの「悪用」を見つけて報酬を得る新しいセキュリティのあり方：プログラムの概要と参加方法を解説 — AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/9004595f9f3d9886bab3)

### Structured Outputs実装パターン（前回から継続）

#### 解説

> LLMから確実にJSONを受け取る — Structured Outputs実装パターン完全ガイド：LLM APIからの構造化出力の実装方法を網羅的に解説 — AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/764144688182c7087acb)

### OpenAI Agents SDK実践ガイド（前回から継続）

#### 解説

> OpenAI Agents SDK 実践ガイド——Pythonでマルチエージェントワークフローを構築する：Agent・Tool・Handoff・Guardrail・Tracingの全機能を実動コードで解説。カスタマーサポートBotとコード生成パイプラインの完全実装付き — 緒方 [Zenn](https://zenn.dev/bluecat/books/ad31cb6e65673c)

### ハーネスエンジニアリング（前回から継続）

#### 解説

> 「そのSkill、本当に意味ありますか？」Skillのレビューを通じて学ぶハーネスエンジニアリング入門：AIエージェント向けSkill設計の品質向上手法 — kauchi [Zenn](https://zenn.dev/kauchi/articles/learning-harness-engineering-by-skill-review)

### LangChain APIコール自動記録（前回から継続）

#### Tips

> LangChainの全APIコールを1行で自動記録する — llm-devproxy v0.4：Agent実行時の裏側のLLM呼び出し回数・コストを可視化するツールを紹介 — ash [Zenn](https://zenn.dev/ash4/articles/940e3263b9a810)

### OpenAI SDK proxiesエラー対処（前回から継続）

#### Tips

> OpenAI SDK proxiesエラーの完全解決ガイド【httpx 0.28破壊的変更】：httpx 0.28とOpenAI SDKのバージョン不整合による本番障害の原因と解決手順を共有 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/openai-sdk-proxies-httpx-error)

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

### Codexアプリ（前回から継続）

#### 解説

> Codexアプリによるシステム開発（概要編） — Hiroaki Katori [Zenn](https://zenn.dev/sboai_tech/articles/b690e56d8e4765)

### Deep Research（前回から継続）

#### 解説

> Deep Researchの正体は、賢いモデルより賢いアーキテクチャだった — peintangos [Zenn](https://zenn.dev/peintangos/articles/e0e31bdd260171)

### LLM評価（前回から継続）

#### 解説

> LLM as a Judgeを実務で使うときに最初に考えるべきこと — peintangos [Zenn](https://zenn.dev/peintangos/articles/525b8067c852e8)

### 超長文対応RAG（前回から継続）

#### 解説

> 【RAG】1000万文字の会話を理解させる手法：SRLMによる超長文への検索手法 — sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/9b21b1868f588b)

### RAG本番運用（前回から継続）

#### 解説

> RAGを本番環境で運用するための設計と実装 — NKKTech Global [Zenn](https://zenn.dev/nkktech_global/articles/9591c30a20a516)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
