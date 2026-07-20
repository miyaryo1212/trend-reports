---
title: "公式更新なし — GPT-5.6モデル選択とCodex実務Tipsが話題"
summary: "本日のCodex/OpenAI公式は安定版リリースがなく、続く alpha 内部ビルドのみ。コミュニティは GPT-5.6 Sol/Terra/Luna のモデル選択、Codex App のディスク消費問題、OpenAI API の新しいツール呼び出し機能など、実務ネタに関心が向いている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-21

features: []
codex_review: "新製品不在の日に、話題の中心がモデルの“使い分け”と運用コストに移るのは健全だ。派手さは薄いが、生成AIが実験期から実務インフラへ移ったことを示す地味に重要な観測だと思う。"
codex_importance: 3
---

## 公式アップデート

**本日の公式アップデートはありません。**

Codex CLI のリリースフィード上では `rust-v0.145.0-alpha.25` までの alpha 内部ビルドが継続していますが、これらはリリースノートを伴わない自動ビルドであり、user-facing な安定版の変更はありません。前回詳述した安定版 0.144.6（GPT-5.6 Sol/Terra/Luna 同梱指示の更新・コンテキストウィンドウ 272,000 トークン修正）以降、新規の事実はありません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

公式の新規アップデートがない一方で、コミュニティでは Codex や OpenAI API を実務でどう使い分けるかという「運用フェーズ」の記事が目立ちました。

### GPT-5.6 のモデル選択（Sol / Terra / Luna）

#### Tips

> 3タスクの QCD 比較で、コスパ最良は最上位 Sol でも最安 Luna でもなく「Terra × high」だった（致命的ミスゼロ、合計122秒、推定 $0.20）。最安の「Luna × low」は10回中10回同じミスを繰り返し、表面スコア約95点でも見えない品質リスクがある、と警告。 — @nnakapa（Nori） [Zenn](https://zenn.dev/nnakapa/articles/lab-28-gpt56-sol-terra-luna-qcd)

### Codex App / CLI の実務知見

#### Tips

> Codex を未使用の人向けに、インストール〜最初のタスク実行、CLI / IDE 拡張 / クラウド / GitHub の使い分け、承認モードとサンドボックス、AGENTS.md、MCP までを手を動かして学ぶハンズオン入門書（2026年6月時点の Codex 対象）。 — @takashi_narita [Zenn](https://zenn.dev/narita1980/books/openai-codex-getting-started)

#### ネガティブ

> 買ったばかりの MacBook Air（256GB）の空きが数百MBに。原因は Codex Desktop が残した Crashpad のクラッシュダンプだった、という調査記録。Codex App のディスク消費に注意を促す内容。 — @hjpotter1 [Zenn](https://zenn.dev/hjpotter1/articles/38802c39ad9919)

### OpenAI API の新しいツール呼び出し／マルチエージェント

#### Tips

> OpenAI の Programmatic Tool Calling を使うと、10商品の在庫APIをモデルのコンテキストに全レスポンスを通さずに JavaScript 側で処理でき、必要な数値だけを扱える。トークンと往復回数の削減に有効。 — @okssusucha [Qiita](https://qiita.com/okssusucha/items/5f26c914bc8d60b382b9)

> Responses API の Multi-Agent 機能（ベータ）は `multi_agent: {"enabled": true}` を付けるだけでモデルがサブエージェントを自動生成し、RAG の不正解原因分析を6観点で並列化できた、という検証。 — @softbank（CHEN） [Zenn](https://zenn.dev/softbank/articles/cd85420502b6dd)

### OpenAI のその他の動き

#### 中立

> 2026年7月15日、OpenAI が AI 自身に攻撃を行わせるレッドチーミングシステム「GPT-Red」を公開。ChatGPT や API のモデルではなく、社内で安全性評価・強化に用いるシステムとして運用される点を解説。 — @headwaters（Jun Miyake） [Zenn](https://zenn.dev/headwaters/articles/90f759b159c107)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [GPT-5.6 は Sol・Terra・Luna のどれを選ぶべきか（QCD比較）](https://zenn.dev/nnakapa/articles/lab-28-gpt56-sol-terra-luna-qcd)
- [OpenAI Codex実践入門](https://zenn.dev/narita1980/books/openai-codex-getting-started)
- [Codex AppでMacの容量が急に減るのはなぜ？Crashpadを調べた](https://zenn.dev/hjpotter1/articles/38802c39ad9919)
- [ツールをJavaScriptから呼ばせるOpenAIのProgrammatic Tool Calling](https://qiita.com/okssusucha/items/5f26c914bc8d60b382b9)
- [OpenAI Responses API の Multi-Agent 機能を試す](https://zenn.dev/softbank/articles/cd85420502b6dd)
- [GPT-Redとは？OpenAIが公開した「AIを攻撃するAI」の仕組みを解説](https://zenn.dev/headwaters/articles/90f759b159c107)
