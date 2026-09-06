---
title: "GPT-6 Astra 公開、Criticalに初到達"
summary: "OpenAI が新世代フラッグシップ GPT-6 Astra を公開。Preparedness Framework でサイバーセキュリティ能力が初めて Critical レベルに到達し、同時に重要インフラ防衛へ $1B を投じる Daybreak for Frontline Defenders も発表された。Codex CLI は 0.153.0 が安定版としてリリースされ、Vim モードの undo/redo とプラグイン CLI が追加。"
importance: 5
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-04

features:
  - "GPT-6 Astra"
  - "GPT-6 Astra Safety overview"
  - "Daybreak for Frontline Defenders"
  - "Codex CLI 0.153.0 Vimモードundo/redo"
  - "Codex CLI 0.153.0 プラグインCLI"
  - "Codex CLI 0.153.0 tui.auto_recap"
codex_review: "Critical到達を防衛投資とセットで出した点が象徴的です。性能発表というより、AI企業が安全保障インフラ化する節目に見えます。"
codex_importance: 5
pipeline_warnings:
  - "このレポートは 2026-09-04〜09-06 に発生した claude -p の OAuth 失効による自動生成停止を、2026-09-06 に後追いで補完したものです。当日の sitemap 差分キャッシュは障害期間中に消費済みのため、公式 news インデックス/RSS を代替ソースとして再構成しています。"
---

## 公式アップデート

### GPT-6 Astra

OpenAI が新世代のフラッグシップモデル GPT-6 Astra を公開した。同社は「最も知的でアラインされたモデル」と位置づけ、computer use・コーディング・サイバーセキュリティ・科学の各領域で state-of-the-art の性能を主張している。

導入事例も同時に公開された。Playco はグレーボックス1つを土台に3種のテーマ別ゲームプロトタイプを作成し、従来モデル比で手作業の修正が50%減ったと報告。Legora は財務書類レビューのワークフローで41件の文書を数分で処理し、仕込まれた4件のエラーをすべて検出、性能は約40%向上したとしている。

[ソース](https://openai.com/index/gpt-6-astra)

### GPT-6 Astra Safety overview

セーフティ概要も併せて公開された。GPT-6 Astra は同社が広く展開するモデルとしては最も高性能であり、Preparedness Framework においてサイバーセキュリティ能力が **Critical レベルに到達した初のモデル**であるとされている。

[ソース](https://openai.com/index/safety-overview-gpt-6-astra)

### Daybreak for Frontline Defenders

重要インフラ・エッセンシャルサービスの防衛側に対し、フロンティア級のサイバー AI・トレーニング・サポートへのアクセスを広げるプログラム。総額 $1B のコミットメントとして発表された。

[ソース](https://openai.com/index/daybreak-for-frontline-defenders)

### Codex CLI 0.153.0

安定版 0.153.0 がリリースされた。本日新規の主な追加は以下。

- **Vim モードの undo/redo**: `u` で undo、`Ctrl+R` で redo。貼り付け内容や添付を含むドラフト全体が保持される ([#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140))
- **プラグイン CLI**: リモートマーケットプレイスからのプラグインの list / install / remove に対応 ([#42150](https://github.com/openai/codex/pull/42150))
- **`tui.auto_recap`**: `false` に設定すると自動 recap を無効化し、手動の `/recap` だけを残せる ([#42101](https://github.com/openai/codex/pull/42101))

このほか、TUI 履歴が完全なパッチ・バックグラウンドターミナルへの入力・個々の完了コマンドを表示するようになり、Plus / Team ユーザーには約5時間の利用枠の残りが半分を切った時点で早期警告が出るようになった。なお同日、アルファ版 0.154.0-alpha.1 も公開されている。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.153.0)

## コミュニティの反応

### GPT-6 Astra

#### ポジティブ

> ChatGPT Work (local) の GPT-6 Astra Ultra で Three.js のリアルタイム海岸シミュレーションを2ショットで作り込み、サブエージェントも活用。前回モデルより明らかに良化し、3D 性能の高さを実感したという。 — @hajimetwi3 [出典](https://x.com/hajimetwi3/status/2096387743542911142)

> GPT-6 Astra で資料生成を試し、画像→SVG 化→PPT 化の流れでイラスト編集の自由度が大幅に向上。特に細かい色味の調整がしやすくなったとの評価。 — @shin_yoshimura0 [出典](https://x.com/shin_yoshimura0/status/2096387880696602642)

> Codex で GPT-6 Astra を使ったところ 5.6 Sol から大きなアップグレードで、フロントエンドも指示次第で高品質なコードが出てきて実務で安定しているという報告。 — @EstePrimeWorld [出典](https://x.com/EstePrimeWorld/status/2096294875507441802)

#### ネガティブ

> GPT-6 Astra の Computer Use が効きすぎて使用量がすぐ枯渇。Pro 20x の90%近くを24時間で消費するレベルだという。 — @hajimetwi3 [出典](https://x.com/hajimetwi3/status/2096387743542911142)

> Astra リリース後に Codex の消費が異常。Sol Medium でもプロジェクト更新だけで20%を超え、5時間の制限が10分で尽きるとの不満。 — @modomango [出典](https://x.com/modomango/status/2096174004675416352)

#### Tips

> Codex CLI で GPT-6 Astra を使うと一貫性・バグ発見の速さ・タスク完遂で pi より優位。remotion 連携での動画生成も実践例として挙げている。 — @runsonai [出典](https://x.com/runsonai/status/2096041599230722363)

### GPT-6 Astra Safety overview

該当なし。Preparedness Framework の Critical 到達に触れる投稿は複数あったが、いずれもニュース速報やシステムカードの要約で、個人ユーザーの実使用体験に基づくものは確認できなかった。公開版では高度なサイバー機能がブロックされているため、実体験ベースの反応が出にくい状況とみられる。

### Daybreak for Frontline Defenders

該当なし。発表ニュースの共有や概要まとめが中心で、個人ユーザーの実体験・感想は確認できなかった。

### Codex CLI 0.153.0 Vimモードundo/redo

該当なし。リリース告知や一般的な言及はあったが、個人ユーザーによる「使ってみた」体験談は確認できなかった。

### Codex CLI 0.153.0 プラグインCLI

#### ポジティブ

> 0.153 でリモートマーケットプレイス対応のプラグイン CLI が追加され、`codex plugin marketplace add owner/repo` などで list / install / remove / upgrade がターミナルだけで完結するようになった。チームの内部スキルカタログを Git クローンで管理できる点が実用的だという評価。 — @Marwan_3atef [出典](https://x.com/Marwan_3atef/status/2095449190025322982)

### Codex CLI 0.153.0 tui.auto_recap

該当なし。

### 日本語コミュニティ (Zenn / Qiita)

本日新たに確認できた記事。Qiita は本期間の新着なし。

> [GLM-5.3は「オープンソース化」ではない――Cursor遮断とAnthropic判決も整理](https://zenn.dev/ainewsdaily/articles/20260830_general_t1) — 2026年8月24〜29日の動きを一次ソースベースで整理した週次まとめ。GLM-5.3 のオープンウェイト公開、Cursor と OpenAI の提携解消、Anthropic を政府調達から外した措置への違法判決の3件を、見出しだけでは取り違えやすい論点として扱っている。 — @AIニュース

## ソース

- [OpenAI: GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra)
- [OpenAI: Safety overview: GPT-6 Astra](https://openai.com/index/safety-overview-gpt-6-astra)
- [OpenAI: Daybreak for Frontline Defenders](https://openai.com/index/daybreak-for-frontline-defenders)
- [OpenAI: Playco cut manual fixes 50% prototyping games with GPT-6 Astra](https://openai.com/index/playco-game-prototyping-with-astra)
- [OpenAI: Legora reviewed 41 documents in minutes with GPT-6 Astra](https://openai.com/index/legora-financial-statement-review-with-astra)
- [Codex CLI Release 0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn: GLM-5.3は「オープンソース化」ではない――Cursor遮断とAnthropic判決も整理](https://zenn.dev/ainewsdaily/articles/20260830_general_t1)
