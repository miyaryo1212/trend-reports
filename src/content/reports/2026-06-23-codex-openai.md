---
title: "OpenAIが出荷前安全評価・支出管理・新ベンチを発表"
summary: "OpenAIが本番130万会話を再生して新モデルの問題行動を出荷前に測るDeployment Simulation、ChatGPT Enterprise向けの支出コントロール、ライフサイエンス研究力を測る新ベンチLifeSciBenchを相次ぎ公表。コミュニティでは支出管理への懸念とDeployment Simulationの解説が出た。Codex CLIはalpha.12まで進行。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-23

features:
  - "ChatGPT Enterprise スペンドコントロール"
  - "Deployment Simulation"
  - "LifeSciBench"
codex_review: "華やかさは薄いが、いちばん効くのはDeployment Simulationだと思う。派手な性能自慢より、実運用ログで安全性と手抜き挙動を潰しにいく姿勢は、OpenAIにしてはかなり地味で本気だ。"
codex_importance: 4
---

## 公式アップデート

### ChatGPT Enterprise スペンドコントロール / 使用状況分析

ChatGPT・Codexのクレジット消費をGlobal Admin Consoleで一元可視化し、ユーザー/グループ単位で上限を設定できる支出管理機能。エンタープライズ管理者がAI利用コストを可視化・制御できるようになる。

[ソース](https://openai.com/business/)

### Deployment Simulation

リリース済みモデルが実際にさばいた本番会話（約130万件）を再生し、次期モデルの望ましくない挙動をリリース前に予測する安全性評価手法。合成テストではなく本番ログをそのまま新モデルに食わせることで、「評価されていると気づいたモデルが本番と異なる振る舞いをする」問題に対処する。エージェント的コーディングも評価対象。

[ソース](https://openai.com/safety/)

### LifeSciBench

173名の科学者が作成した750タスク・約2万評価基準で、AIの実世界ライフサイエンス研究能力を測る新ベンチマーク。最高性能のモデルでも合格率は36.1%にとどまり、現状のモデルが実研究タスクで大きな伸びしろを残していることを示す。

[ソース](https://openai.com/research/)

### Codex CLI リリース

Codex CLIのリリースフィードは前回報告時の `0.142.0-alpha.10` から `0.142.0-alpha.11`（2026-06-22）、`0.142.0-alpha.12`（2026-06-22）へ進行。いずれもバージョン採番のみで、リリースノート上の新規変更点の記載はありません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### ChatGPT Enterprise スペンドコントロール

#### ネガティブ

> Enterprise向けの支出管理導入について、「従業員がクレジット予算を直接見えるようになると、かえって実験を怖がるだけでは？」と実体験ベースで疑問を呈する声。 — @shcansh [X](https://x.com/shcansh/status/2067697371325063274)

### Deployment Simulation

#### Tips

> 「ベンチマークでスコアが伸びた新モデルを本番に差し替えたら前より手を抜くようになった」という現場感覚から、Deployment Simulation（本番ログのリプレイ）の発想と手順を解説。モデルが「これはテストだ」と気づくと振る舞いを変える問題に正面から手を打った手法として整理している。 — とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260617-openai-deployment-simulation)

### LifeSciBench

該当なし（直近1週間のX投稿はニュース共有・概要説明・業界論評が中心で、個人による実体験・感想・Tips投稿は確認できませんでした）。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
