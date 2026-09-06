---
title: "Codex CLI 0.153.4、Astraを既定モデルに"
summary: "OpenAI 公式ニュースは本対象ウィンドウで新着なし。Codex CLI 0.153.4 が hotfix として、Astra をバンドル版モデルピッカーに表示しモデル未指定時の既定に変更した。X では「ようやく Astra が出た」という声と、capacity エラー・セッション枠消費への不満が同時に上がっている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-06

features:
  - "Codex CLI 0.153.4 Astraをバンドル版モデルピッカーに表示・既定モデル化"
  - "Codex CLI 0.153.4 Astra非同期質問ガイダンスのツール可用性による限定"
  - "Codex CLI 0.154.0-alpha.4"
codex_review: "既定モデル変更そのものは地味だが、Astraを前提にした運用議論が一気に進む合図に見える。性能より容量制約と再現条件の整理が当面の焦点だろう。"
codex_importance: 3
pipeline_warnings:
  - "このレポートは 2026-09-04〜09-06 に発生した claude -p の OAuth 失効による自動生成停止を、2026-09-06 に後追いで補完したものです。当日の sitemap 差分キャッシュは障害期間中に消費済みのため、公式 news インデックス/RSS を代替ソースとして再構成しています。"
---

## 公式アップデート

OpenAI 公式ニュース (RSS) は本対象ウィンドウ (2026-09-05 06:00〜2026-09-06 16:40 JST) に新着なし。本日の動きは Codex CLI のリリースのみ。

### Codex CLI 0.153.4

0.153 系列の hotfix が 2 件。

- **バンドル版モデルピッカーに Astra を表示**: あわせて、モデルが明示的に設定されていない場合のバンドル既定モデルを Astra に変更 ([#42874](https://github.com/openai/codex/pull/42874))
- **非同期質問ガイダンスの限定適用**: Astra に対する「非同期の質問を使え」というガイダンスを、そのツールがセッションで利用可能な場合に限って適用するよう修正 ([#42878](https://github.com/openai/codex/pull/42878))

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.153.4)

### Codex CLI 0.154.0-alpha.4

次期系列のアルファ版が 09-05 09:59 にリリース。リリースノートは「Release 0.154.0-alpha.4」のみで、変更内容の記載はない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.4)

## コミュニティの反応

### Codex CLI 0.153.4 Astraをバンドル版モデルピッカーに表示・既定モデル化

#### ポジティブ

> Astra が Codex CLI で使えるようになり、Windows 環境でも実機で確認できた。 — @via_cyborg59 [出典](https://x.com/via_cyborg59/status/2096500490129559573)

> GPT-6 Astra が CLI で表示・使用できるようになり、以前の制限が解消された実感がある。 — @cpburgess_ [出典](https://x.com/cpburgess_/status/2096468710878072881)

#### ネガティブ

> Astra 使用中に「Selected model is at capacity」エラーが頻発し、タスクが中断される。 — @yappivr [出典](https://x.com/yappivr/status/2096261731643474027)

> CLI のバージョン不一致で Astra が `/model` に表示されない問題が発生した。 — @DevVidhani [出典](https://x.com/DevVidhani/status/2096380263190372798)

#### Tips

> `npm i -g @openai/codex@0.153.4` に上げると Astra へのリクエストが即通るようになる。 — @claudebum [出典](https://x.com/claudebum/status/2096261410015838647)

> `~/.codex/config.toml` の `model_catalog_json` を削除して CLI のバンドル既定に戻すと Astra が表示される。 — @petercopu [出典](https://x.com/petercopu/status/2096215136226709659)

> Astra が見えない場合は Codex CLI とデスクトップアプリを最新版に更新すると表示される。 — @VVTypingghost [出典](https://x.com/VVTypingghost/status/2096222962475053422)

### Codex CLI 0.153.4 Astra非同期質問ガイダンスのツール可用性による限定

該当なし。この修正そのものに触れた個人ユーザーの実体験投稿は確認できず、言及はリリース bot が中心。

### Codex CLI 0.154.0-alpha.4

alpha.4 を直接名指しした個人の実体験投稿はほぼ見当たらず、以下は同時期の Astra 利用に関する周辺の反応。

#### ポジティブ

> Astra を Codex CLI に組み込んで Terminal-Bench で Claude と互角の性能を出し、実際の perf issue 修正も素早く完了した。 — @ko1_agmsg [出典](https://x.com/ko1_agmsg/status/2096348387696329001)

#### ネガティブ

> Astra-middle を使っていたら週間セッション残量が 1% になり、何もできなくなった。 — @sysCat64 [出典](https://x.com/sysCat64/status/2096367315017502739)

> Codex CLI でセッション上限に達したときに「queue message」ボタンが欲しい。 — @pirateirl [出典](https://x.com/pirateirl/status/2096355519955091763)

#### Tips

> 0.153.2 の更新は「2倍速」という表示の修正のみで実際の処理速度は変わらないので、公式リリースノートを確認したほうがよい。 — @room_zero_jp [出典](https://x.com/room_zero_jp/status/2096361682796982561)

### 日本語コミュニティ (Zenn / Qiita)

Qiita は本期間の新着なし。Zenn では Astra を「どう検証・運用するか」に軸足を移した記事が増えている。

> [GPT-6 Astraで作った、は何を意味するのか——モデル名だけでは再現条件にならない](https://zenn.dev/dantarg/articles/astra-one-model-name-is-not-enough) — 「Astra で一発で作れた」という報告が溢れる中、Work / Codex / API のどれか、effort は medium〜max のどれか、人手が入ったか、といった条件が抜けるとモデル名だけでは再現条件にならないと指摘。 — @dantarg

> [GPT-6 Astra は再現性の高いコードを書く——GPT-5.6 Sol との比較 240 試行で見えた事実](https://zenn.dev/nnakapa/articles/lab-38-gpt6-astra-gpt56-sol-qcd) — 同じ Codex CLI・同じ3タスクで 4 effort level × 3 タスク × 10 trial = 240 試行を比較。Astra は品質スコアが 120 試行すべてタスクごとに同値、low・medium では推論用トークンが少なく、楽観ロックの low では全 10 試行で記録上ゼロだったとする。 — @nnakapa

> [GPT-6 Astraを業務に組み込むなら、モデルと実行環境をどう分けて考えるか](https://zenn.dev/kai_ai/articles/6ca25f497a26b5) — モデルが判断すること・ツールが実行すること・結果を確認することの分担という観点から、公式仕様と X の5人の報告を突き合わせて整理した記事。API 呼び出しや成果物の再現は行っていない旨を明示している。 — @kai_ai

> [Codexを「作業者」から「開発チーム」へ ― Symphony + Silent Mode + Cost-Awareで自律開発を進める](https://zenn.dev/volcane/articles/b2ceb1760677ec) — OpenAI が公開した Symphony を導入し、人間がセッションを管理するのではなく Issue Tracker を Codex の仕事場にする運用を試した記録。 — @volcane

## ソース

- [Codex CLI Release 0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4)
- [Codex CLI Release 0.154.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.4)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn: GPT-6 Astraで作った、は何を意味するのか](https://zenn.dev/dantarg/articles/astra-one-model-name-is-not-enough)
- [Zenn: GPT-6 Astra は再現性の高いコードを書く](https://zenn.dev/nnakapa/articles/lab-38-gpt6-astra-gpt56-sol-qcd)
- [Zenn: GPT-6 Astraを業務に組み込むなら、モデルと実行環境をどう分けて考えるか](https://zenn.dev/kai_ai/articles/6ca25f497a26b5)
- [Zenn: Codexを「作業者」から「開発チーム」へ](https://zenn.dev/volcane/articles/b2ceb1760677ec)
