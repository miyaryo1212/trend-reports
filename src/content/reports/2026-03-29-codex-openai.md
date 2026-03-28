---
title: "Codex CLI v0.118.0アルファビルド連続リリース"
summary: "Codex CLI v0.118.0のアルファビルドが3本連続でリリース。詳細なリリースノートは未公開。コミュニティではCodex Pluginの完全ガイドや推論モデルのコスト最適化手法が話題。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-03-29
features:
  - "Codex CLI 0.118.0-alpha (alpha.1〜3): 次期バージョンのアルファビルドが3本連続リリース"
---

## 公式アップデート

### Codex CLI v0.118.0-alpha.1〜3をリリース

3月27日にCodex CLIの次期バージョンv0.118.0のアルファビルドが3本連続でリリースされた（alpha.1、alpha.2、alpha.3）。いずれもリリースノートには「Release 0.118.0-alpha.X」とのみ記載されており、詳細な変更内容は未公開。alpha.1はviyatb-oai氏による手動リリース、alpha.2・alpha.3はgithub-actions[bot]による自動リリース。

- [alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.1)
- [alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.2)
- [alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.3)

### STADLERがChatGPTで知識業務を変革（前回から継続）

230年の歴史を持つSTADLER社が650名の従業員にChatGPTを導入し、知識業務の効率化と生産性向上を実現した事例が公開された。

[ソース](https://openai.com/index/stadler)

### Model Specのアプローチを詳説（前回から継続）

OpenAIがモデル行動の公開フレームワーク「Model Spec」について、安全性・ユーザーの自由・説明責任のバランスをどう取るかを解説した。

[ソース](https://openai.com/index/our-approach-to-the-model-spec)

### Safety Bug Bountyプログラムを開始（前回から継続）

エージェント脆弱性、プロンプトインジェクション、データ流出などのAI安全性リスクを対象とした新しいバグバウンティプログラム。

[ソース](https://openai.com/index/safety-bug-bounty)

## コミュニティの反応

### Codex CLI v0.118.0-alpha

X/Twitter上での反応は該当なし。アルファビルドのため、詳細なリリースノートがなく注目度は限定的。

### Codex Pluginガイド（新規）

#### 解説

> Codex Plugin完全ガイド：Skillとの違い・使い方・自作方法【2026年】：v0.117.0で正式リリースされたPlugin機能の役割、Skillとの違い、基本構造、導入手順、自作の最小構成を技術的に整理 — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-plugin-guide)

### 推論モデルのコスト最適化（新規）

#### Tips

> 推論モデルのコスト最適化をdiffで追跡する — llm-devproxy v0.4：o3/o4-miniでプロンプトの書き方によるコスト差（最大約10倍）を実測し、diffで変化を追跡する手法を紹介 — ash [Zenn](https://zenn.dev/ash4/articles/8973f300141afb)

### AIエージェント時代の業界動向（新規）

#### 解説

> AIエージェント時代、業界トップの発言を翻訳・まとめてみた：Qwen元テクニカルリードの林俊旸氏による「推論からエージェントへ」のエッセイを軸に、業界トップの最近の発言を翻訳・整理 — luoxi [Zenn](https://zenn.dev/luoxi/articles/from-reasoning-to-agents-industry-voices)

### GPT-5.3-Codex入門（新規）

#### 解説

> GPT-5.3-Codex入門 — 自己訓練参加・SWE-Bench Pro最高記録のエージェント型コーディングAI：自分自身のトレーニングに参加した初のモデルとしての特徴とエージェント型開発の概要 — kai_kou [Qiita](https://qiita.com/kai_kou/items/30d086285935858de024)

### LLM APIセキュリティ基礎（新規）

#### 注意喚起

> 新人プログラマがLLM APIを使う前に知っておくべきセキュリティの基本：LLM APIを安全に利用するための基本的なセキュリティ知識 — zivuch [Qiita](https://qiita.com/zivuch/items/30b92fbe4eae72f99b69)

### OpenAI Agents SDK実践ガイド（前回から継続）

#### 解説

> OpenAI Agents SDK 実践ガイド——Pythonでマルチエージェントワークフローを構築する：Agent・Tool・Handoff・Guardrail・Tracingの全機能を実動コードで解説 — 緒方 [Zenn](https://zenn.dev/bluecat/books/ad31cb6e65673c)

### ハーネスエンジニアリング（前回から継続）

#### 解説

> 「そのSkill、本当に意味ありますか？」Skillのレビューを通じて学ぶハーネスエンジニアリング入門 — kauchi [Zenn](https://zenn.dev/kauchi/articles/learning-harness-engineering-by-skill-review)

### Sora提供終了と移行先（前回から継続）

#### 解説

> さらばSora。動画生成AIの「産業シフト」を読み解き、次世代APIへ移行するための技術スタック — ケン吉 [Zenn](https://zenn.dev/headwaters/articles/0b232a955c458a)

### LLM APIとプライバシー（前回から継続）

#### 注意喚起

> OpenAIにAPIを送るだけで個人情報保護法違反？LLM開発者が知るべきAPPIリスクと対策 — zivuch [Zenn](https://zenn.dev/zivuch/articles/qiita-appi-llm-article)

### LangChain APIコール自動記録（前回から継続）

#### Tips

> LangChainの全APIコールを1行で自動記録する — llm-devproxy v0.4 — ash [Zenn](https://zenn.dev/ash4/articles/940e3263b9a810)

### OpenAI SDK proxiesエラー対処（前回から継続）

#### Tips

> OpenAI SDK proxiesエラーの完全解決ガイド【httpx 0.28破壊的変更】 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/openai-sdk-proxies-httpx-error)

### 推論トークンの可視化（前回から継続）

#### Tips

> o1/o3/o4の推論トークン、いくら使ってるか見えてますか？llm-devproxy v0.3 — ash [Zenn](https://zenn.dev/ash4/articles/b0af56d3503239)

### Codexアプリ（前回から継続）

#### 解説

> Codexアプリによるシステム開発（概要編） — Hiroaki Katori [Zenn](https://zenn.dev/sboai_tech/articles/b690e56d8e4765)

### Deep Research（前回から継続）

#### 解説

> Deep Researchの正体は、賢いモデルより賢いアーキテクチャだった — peintangos [Zenn](https://zenn.dev/peintangos/articles/e0e31bdd260171)

### LLM評価（前回から継続）

#### 解説

> LLM as a Judgeを実務で使うときに最初に考えるべきこと — peintangos [Zenn](https://zenn.dev/peintangos/articles/525b8067c852e8)

### LLM API料金の整理（前回から継続）

#### 解説

> LLMのAPI料金のしくみを整理してみた — peintangos [Zenn](https://zenn.dev/peintangos/articles/3cd4fe5367a9ae)

### セキュリティ・プライバシー（前回から継続）

#### ツール紹介

> LLMのプロンプトからPIIを自動検出・保護するOSSミドルウェア（マイナンバー対応） — zivuch [Zenn](https://zenn.dev/zivuch/articles/cloakllm-pii-protection-llm-japanese)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
