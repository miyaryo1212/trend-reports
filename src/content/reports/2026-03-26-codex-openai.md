---
title: "Model Spec公開とSafety Bug Bounty開始"
summary: "OpenAIがModel Spec公開フレームワークとSafety Bug Bountyプログラムを発表。gpt-oss-safeguardのOSS公開、Foundation 10億ドル投資計画、ChatGPTショッピング機能導入など安全性・社会貢献・商用展開を同時に推進。Codex CLIは48時間で10回のアルファリリース。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-03-26
features:
  - "Model Spec公開フレームワーク"
  - "OpenAI Safety Bug Bountyプログラム"
  - "gpt-oss-safeguard"
  - "OpenAI Foundation 10億ドル投資計画"
  - "ChatGPTショッピング機能 (Agentic Commerce Protocol)"
  - "Codex CLI 0.117.0-alpha連続リリース"
codex_review: "安全性の制度化と商用拡張を同じ週報の中で並走させるあたりに、OpenAIの強さと落ち着かなさが同居している。派手なのはショッピング機能だが、実は地味に効くのはModel Spec公開とBug Bountyの運用面だと思う。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Model Specのアプローチを詳説

OpenAIがモデル行動の公開フレームワーク「Model Spec」について、安全性・ユーザーの自由・説明責任のバランスをどう取るかを解説した。AIシステムの進化に伴う行動指針の設計思想を公開している。

[ソース](https://openai.com/index/our-approach-to-the-model-spec)

### Safety Bug Bountyプログラムを開始

エージェント脆弱性、プロンプトインジェクション、データ流出などのAI安全性リスクを対象とした新しいバグバウンティプログラムを発表。AIの悪用や安全性上のバグを報告する仕組みを整備した。

[ソース](https://openai.com/index/safety-bug-bounty)

### gpt-oss-safeguardによるティーン安全ポリシーを公開

開発者向けに、年齢に応じたリスクをモデレーションするためのプロンプトベースのティーン安全ポリシーをオープンソースで公開した。

[ソース](https://openai.com/index/teen-safety-policies-gpt-oss-safeguard)

### OpenAI Foundationが10億ドル以上の投資計画を発表

OpenAI Foundationが疾病治療、経済機会、AIレジリエンス、コミュニティプログラムの4分野に少なくとも10億ドルを投資する計画を発表した。

[ソース](https://openai.com/index/update-on-the-openai-foundation)

### ChatGPTにショッピング機能を導入（Agentic Commerce Protocol）

ChatGPTに商品発見・比較・マーチャント連携を可能にするビジュアルショッピング体験を導入。Agentic Commerce Protocolを基盤とし、製品カードや比較テーブルを表示する。

[ソース](https://openai.com/index/powering-product-discovery-in-chatgpt)

### Sora 2の安全性アプローチを公開

動画生成モデルSora 2とSoraアプリの安全対策について、具体的な保護措置を中心に解説した。

[ソース](https://openai.com/index/creating-with-sora-safely)

### Codex CLI 0.117.0-alpha.11〜alpha.20を連続リリース

48時間以内にalpha.11からalpha.20まで10回のアルファリリースを実施。活発な開発が続いている。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### Model Spec公開フレームワーク

#### ポジティブ

> Model SpecをAIの「振る舞いの憲法」と例え、指示優先順位の階層化に納得。民主的な調整に期待 — @horisan_hack [X](https://x.com/i/status/2036947497458032793)

> AI能力向上に伴う「何をさせないか」の設計が難しいとした上で、Model Spec公開を正しい一歩と評価 — @aicreatorpath [X](https://x.com/i/status/2036917543114293742)

> ユーザー自由と安全のバランスとして評価し、AI構築者に読む価値ありと推奨 — @youshenlim [X](https://x.com/i/status/2036872735469482445)

#### Tips

> Model SpecをGitHubで読むことを勧め、システムプロンプト設計やAI任せの線引きのヒントになると紹介 — @aicreatorpath [X](https://x.com/i/status/2036917547350536310)

### OpenAI Safety Bug Bountyプログラム

#### ポジティブ

> プロンプトインジェクションやエージェントのエクスプロイトを対象にした業界の大きな一歩と評価 — @youshenlim [X](https://x.com/i/status/2036872677210657105)

#### ネガティブ

> 「material harm」の証明要求が厳しく、GPT-4oモデル廃止によるユーザー被害を無視していると批判 — @myvirtualbard [X](https://x.com/i/status/2036867322724462992)

> Safety Bug Bountyの枠組みで4o廃止や会話リルートをリスクとして賞金請求するジョーク投稿。皮肉交じりの不満 — @Aclle12 [X](https://x.com/i/status/2036955848464097728)

### gpt-oss-safeguard

X/Twitter上での個人ユーザーの反応は該当なし。

### OpenAI Foundation 10億ドル投資計画

#### ポジティブ

> 疾病治療（アルツハイマー等）、経済影響、AIレジリエンス、コミュニティ支援への投資内容を紹介 — @bioshok3 [X](https://x.com/i/status/2036528137962660276)

> Jacob TrefethenとWojciech Zarembaの新役割を祝福。disease curingとAI resilience加速に期待 — @sohamsankaran [X](https://x.com/i/status/2036871447801716827)

> 医療進歩、child wellbeing、biosecurity、model safetyへの投資に興奮。AI resilienceのムーンショット — @SnehaRevanur [X](https://x.com/i/status/2036581677258907924)

#### ネガティブ

> $1Bの投資額はOpenAIの巨額資金に比べて少なく、裁判前のタイミングでの慈善アピールはポジショニングに過ぎないと批判 — @YuliRowan [X](https://x.com/i/status/2036521813589782873)

### ChatGPTショッピング機能（Agentic Commerce Protocol）

#### ポジティブ

> ShopifyとChatGPTショッピングの連携がブランドの帰属トラフィックを変革し、Google脅威になりうると分析 — @drsnow [X](https://x.com/i/status/2036890016320745842)

> 視覚的・文脈的に向上した製品カードと比較テーブル表示を評価 — @WesRoth [X](https://x.com/i/status/2036699605296140498)

> Agentic Commerce Protocol拡張で製品発見と比較が豊かになったと紹介 — @Marie_Haynes [X](https://x.com/i/status/2036500763287953899)

#### Tips

> ACPの詳細としてビジュアル比較、画像アップロード、マーチャント統合を解説 — @btibor91 [X](https://x.com/i/status/2036481523852124399)

#### ネガティブ

> ChatGPT内での購入率はウェブサイトの3倍低く、Agentic Commerceの普及には時間が必要と指摘 — @0xgilllee [X](https://x.com/i/status/2036436828191179208)

### Codex CLI 0.117.0-alpha連続リリース

X/Twitter上での個人ユーザーの反応は該当なし。

### Sora提供終了と移行先（新規）

#### 解説

> さらばSora。動画生成AIの「産業シフト」を読み解き、次世代APIへ移行するための技術スタック：Sora終了の3つの構造的理由と移行先を解説 — ケン吉 [Zenn](https://zenn.dev/headwaters/articles/0b232a955c458a)

### Astral買収とCodex強化（新規）

#### 解説

> OpenAIのAstral買収が示す次の一手：CodexはPython開発のどこまで変わるのか。依存関係管理・Lint・Format・型検査まで含む開発ワークフロー全体への影響を分析 — hello_giita [Qiita](https://qiita.com/hello_giita/items/3aa59b9b2f2dbd7a72d0)

### ハーネスエンジニアリング（新規）

#### 解説

> 「そのSkill、本当に意味ありますか？」Skillのレビューを通じて学ぶハーネスエンジニアリング入門：AIエージェント向けSkill設計の品質向上手法 — kauchi [Zenn](https://zenn.dev/kauchi/articles/learning-harness-engineering-by-skill-review)

### LLM APIとプライバシー（新規）

#### 注意喚起

> OpenAIにAPIを送るだけで個人情報保護法違反？LLM開発者が知るべきAPPIリスクと対策：プロンプトに含まれる個人情報の法的リスクを解説 — zivuch [Zenn](https://zenn.dev/zivuch/articles/qiita-appi-llm-article) / [Qiita](https://qiita.com/zivuch/items/86fad374e41a77a29d4a)

### 推論トークンの可視化（新規）

#### Tips

> o1/o3/o4の推論トークン、いくら使ってるか見えてますか？llm-devproxy v0.3でプロバイダーごとに異なる推論トークンの「見え方」を統一的に把握する方法を紹介 — ash [Zenn](https://zenn.dev/ash4/articles/b0af56d3503239)

### LLM API料金の整理（新規）

#### 解説

> LLMのAPI料金のしくみを整理してみた：トークンの基本から大コンテキストウィンドウ、思考トークンの課金ルールまで2026年3月時点の料金表付きでまとめ — peintangos [Zenn](https://zenn.dev/peintangos/articles/3cd4fe5367a9ae)

### LLMアプリ本番運用（前回から継続）

#### 解説

> LLMアプリを本番運用して気づいた、ログだけでは足りない理由：精度劣化・API利用料超過・個人情報漏洩リスクへの対処 — FujiTrace [Zenn](https://zenn.dev/fujitrace/articles/d83ee787bab7b7)

### レートリミット設計（新規）

#### 解説

> LLM APIのレートリミットと仲良くする：429エラーを「当たり前」として設計する5つのパターン — AI-SKILL-LAB [Qiita](https://qiita.com/AI-SKILL-LAB/items/e9f3e3d8d6a3bc8b84c1)

### RAG本番運用（前回から継続）

#### 解説

> RAGを本番環境で運用するための設計と実装 — NKKTech Global [Zenn](https://zenn.dev/nkktech_global/articles/9591c30a20a516)

### GPT-5.4 / GPT-5ファミリー（前回から継続）

#### 解説

> GPT-5.4リリース総まとめ：モデル・API・エージェント機能の全体像 — picnic [Zenn](https://zenn.dev/picnic/articles/openai-changelog)

### Codexアプリ（前回から継続）

#### 解説・入門

> Codexアプリによるシステム開発（概要編） — Hiroaki Katori [Zenn](https://zenn.dev/sboai_tech/articles/b690e56d8e4765)

> Codex + VS Code + ローカルフォルダ（GitHubなし）で開発する手順 — mina [Zenn](https://zenn.dev/375drone/articles/34259d0733c037)

> Codex どのUIで使う？CLI・デスクトップアプリ・Web・IDEの違い — harunami [Zenn](https://zenn.dev/harunamix/articles/codex-which-ui-to-use-20260322)

#### 機能解説

> Codexのskillの使い方 — harunami [Zenn](https://zenn.dev/harunamix/articles/codex-skill-how-to-use-20260322)

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

### セキュリティ・プライバシー（前回から継続）

#### ツール紹介

> LLMのプロンプトからPIIを自動検出・保護するOSSミドルウェア（マイナンバー対応） — zivuch [Zenn](https://zenn.dev/zivuch/articles/cloakllm-pii-protection-llm-japanese)

### AIエージェント開発（前回から継続）

#### 解説

> LLMを使った自律型エージェントの基本：プロンプトからツール連携まで — 株式会社シャイオス [Zenn](https://zenn.dev/shineos/articles/ai-agent-development-basics)

### 開発ワークフロー（前回から継続）

#### Tips

> Claude Codeのワークフローを崩さずに複数モデルを使い分ける方法 — whitemarshall [Qiita](https://qiita.com/whitemarshall/items/23379e909469bf904028)

> czg + commitlintでコミットメッセージの自動生成 — ryoku [Zenn](https://zenn.dev/ryoku4/articles/30b6177636b3b1)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
