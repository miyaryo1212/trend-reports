---
title: "Codex CLI 0.153.x、Astra周りを微修正"
summary: "本日の OpenAI 公式ブログ新着はなし。Codex CLI は 0.153.1〜0.153.3 のパッチが連続し、GPT-6-Astra の API 設定対応・Amazon Bedrock ピッカー追加・表示文言と非同期質問ガイダンスの修正が入った。次期系列 0.154.0-alpha も連日更新されている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-05

features:
  - "Codex CLI 0.153.1 GPT-6-AstraのAPI設定対応"
  - "Codex CLI 0.153.2 Fast tier表示の訂正"
  - "Codex CLI 0.153.3 Amazon Bedrockモデルピッカー追加"
  - "Codex CLI 0.153.3 非同期質問ガイダンス修正"
  - "Codex CLI 0.154.0-alpha.2 / alpha.3"
codex_review: "CLIの細かな整備に見えるが、Bedrock対応やAstraの露出調整は企業導入の足場固めとして地味に効く。一方、業界全体を動かす材料としてはまだ弱い。"
codex_importance: 2
pipeline_warnings:
  - "このレポートは 2026-09-04〜09-06 に発生した claude -p の OAuth 失効による自動生成停止を、2026-09-06 に後追いで補完したものです。当日の sitemap 差分キャッシュは障害期間中に消費済みのため、公式 news インデックス/RSS を代替ソースとして再構成しています。"
---

## 公式アップデート

OpenAI 公式ニュース (RSS) は本対象ウィンドウ (2026-09-04 06:00〜2026-09-05 06:00 JST) に新着なし。本日の動きは Codex CLI のパッチリリースのみ。

### Codex CLI 0.153.1

GPT-6-Astra を API 経由で設定できるようになった。デフォルトモデルは変更されず、モデルピッカーにも表示されない ([#42605](https://github.com/openai/codex/pull/42605))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.153.1)

### Codex CLI 0.153.2

GPT-6-Astra の Fast tier の説明文を「1.5x speed」から「2x speed, increased usage」に訂正。表示テキストのみの変更で、リクエストの動作自体は変わらない ([#42632](https://github.com/openai/codex/pull/42632))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.153.2)

### Codex CLI 0.153.3

2件の hotfix が入った。

- **Amazon Bedrock モデルピッカーに GPT-6-Astra を追加**: Mantle / Runtime の global・US ルートが対象 ([#42805](https://github.com/openai/codex/pull/42805))
- **非同期の確認質問に関するガイダンス修正**: GPT-6-Astra が対応ツールを使うこと、およびテキストのみを受け付ける点を明示するよう修正 ([#42809](https://github.com/openai/codex/pull/42809))

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.153.3)

### Codex CLI 0.154.0-alpha.2 / alpha.3

次期系列のアルファ版が連日リリースされた (09-04 07:01 に alpha.2、09-04 10:01 に alpha.3)。いずれもリリースノートは「Release 0.154.0-alpha.x」のみで、変更内容の記載はない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.3)

## コミュニティの反応

### Codex CLI 0.153.1 GPT-6-AstraのAPI設定対応

該当なし。0.153.1 の API 設定対応そのものに触れた個人ユーザーの実体験投稿は確認できなかった。

### Codex CLI 0.153.2 Fast tier表示の訂正

該当なし。速度に関する一般的な言及はあったが、表示文言の訂正に触れた個人投稿は確認できなかった。リリース告知は非公式 bot アカウント (@CodexReleases、@CodexChanges など) が中心。

### Codex CLI 0.153.3 Amazon Bedrockモデルピッカー追加

#### ポジティブ

> Codex CLI で GPT-6 Astra を使うと一貫性が高く、バグ発見も早くタスク完了が速いと実感した。 — @runsonai [出典](https://x.com/runsonai/status/2096090116989095948)

> Plus プランの Codex CLI に gpt-6-astra が来ていて、リミットリセットも2回増えてありがたい。 — @amariichi1 [出典](https://x.com/amariichi1/status/2096004479313408458)

#### ネガティブ

> gpt-6-astra-max の容量到達時にキュー待ちで `/goal` が一時停止になり、手動再開が必要で不便。 — @han_seoul_ohno [出典](https://x.com/han_seoul_ohno/status/2096276503545647508)

> macOS 12 で、Codex CLI では Astra が使えるのにアプリ起動時に「新しいバージョンにアップグレードせよ」とエラーになる。 — @sysCat64 [出典](https://x.com/sysCat64/status/2096123092666081572)

#### Tips

> Windows ARM で GPT-6 Astra が表示されない場合、最新の ARM64 CLI をインストールし `model="gpt-6-astra"` を設定して再起動すると解決する。 — @ginhiniodev [出典](https://x.com/ginhiniodev/status/2096274871940456517)

> Desktop のモデルピッカーに Astra が出ない時は custom model catalog を作成し、`config.toml` で接続して再起動する。 — @Suheil7020 [出典](https://x.com/Suheil7020/status/2096249390268883287)

> gpt-6-astra が来ない時は Codex CLI の更新に加え、モデル一覧の強制再取得を指示するとよい。 — @Siglume736 [出典](https://x.com/Siglume736/status/2096238349841486048)

### Codex CLI 0.153.3 非同期質問ガイダンス修正

該当なし。

### Codex CLI 0.154.0-alpha.2 / alpha.3

該当なし。バージョン言及は 0.153.x 止まりで、alpha 系列に関する投稿は確認できなかった。

### 日本語コミュニティ (Zenn / Qiita)

Qiita は本期間の新着なし。Zenn では GPT-6 Astra 関連の考察記事が続いている。

> [GPT-6 Astraのサイバー能力Criticalは導入判断をどう変えるか](https://zenn.dev/suwash/articles/openai-gpt-astra-critical-p1_20260904) — Critical は独立規制の認定ではなく社内プロセスによる閾値判定であり、無防備条件での評価値と ChatGPT / API の本番拒否境界は別物だと整理。導入評価は精度と単価だけでは足りず、実行権限などの観点が要るとする。 — @suwash

> [GPT-6 Astraの概要](https://zenn.dev/kotoda_ma/articles/07321e3dc01318) — 公式発表ページの抜粋ベースで API 仕様と提供範囲をまとめた記事。9月5日追記で一般ユーザーへの開放開始に触れている。 — @kotoda_ma

> [GPT-6 Astraがリリース、ARC-AGI-3が99.9パーセント。特化ハーネスとは何か調べた](https://zenn.dev/acntechjp/articles/a302d301eb9cec) — 7月末の「モデルを変えずハーネス設定2つでスコア3倍」というブログの知見が Astra で正式な仕組みとして組み込まれた、という観点からベンチマークとハーネスを解説。 — @acntechjp

## ソース

- [Codex CLI Release 0.153.1](https://github.com/openai/codex/releases/tag/rust-v0.153.1)
- [Codex CLI Release 0.153.2](https://github.com/openai/codex/releases/tag/rust-v0.153.2)
- [Codex CLI Release 0.153.3](https://github.com/openai/codex/releases/tag/rust-v0.153.3)
- [Codex CLI Release 0.154.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.2)
- [Codex CLI Release 0.154.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.3)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn: GPT-6 Astraのサイバー能力Criticalは導入判断をどう変えるか](https://zenn.dev/suwash/articles/openai-gpt-astra-critical-p1_20260904)
- [Zenn: GPT-6 Astraの概要](https://zenn.dev/kotoda_ma/articles/07321e3dc01318)
- [Zenn: GPT-6 Astraがリリース、ARG-AGI-3が99.9パーセント。特化ハーネスとは何か調べた](https://zenn.dev/acntechjp/articles/a302d301eb9cec)
