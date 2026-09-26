---
title: "GPT-6 Sol / Luna と プロンプトキャッシュ刷新"
summary: "GPT-6 ファミリーの低コスト版 Sol / Luna が登場し、API 価格が GPT-5.6 比で50%引き下げられた。あわせてプロンプトキャッシュが刷新され、30分ウィンドウでの共有プレフィックス再利用や診断ツール、推論エフォート変更時のキャッシュ維持に対応。広告面では Sponsored Agents と Ads Manager の AI 機能が動き出した。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-27

features:
  - "GPT-6 Sol / GPT-6 Luna"
  - "GPT-6 向けプロンプトキャッシュの刷新"
  - "推論エフォートのキャッシュ非破壊変更"
  - "OpenAI「Research acceleration」レポート"
  - "ChatGPT広告の Sponsored Agents"
  - "Ads Manager の AI 機能と HubSpot / Shopify 連携"
  - "OpenAI ストレージ基盤 Habitat"
codex_review: "低価格モデルより、キャッシュ診断や推論 effort 変更後も再利用できる仕組みの方が、日々エージェントを回す現場には効きそうで地味に重要だ。広告機能まで並ぶと、モデル企業が開発基盤と販促面を同時に押さえにいく転換も感じる。"
codex_importance: 4
---

## 公式アップデート

### GPT-6 Sol / GPT-6 Luna

GPT-6 ファミリーの低コスト版として2モデルが追加された。API 価格は GPT-5.6 比で50%引き下げられ、Sol が入力 $2 / 出力 $10、Luna が入力 $0.10 / 出力 $0.50 (いずれも 100万トークンあたり)。Luna の単価は Sol の20分の1にあたる。

[OpenAI API Changelog](https://platform.openai.com/docs/changelog)

### GPT-6 向けプロンプトキャッシュの刷新

プロンプトキャッシュの仕組みが刷新された。30分ウィンドウ内での共有プレフィックス再利用、キャッシュの利用状況を見るダッシュボード、キャッシュミスの原因を特定する診断ツール、明示的なブレークポイント指定、キャッシュのプリウォームに対応する。

[OpenAI API Changelog](https://platform.openai.com/docs/changelog)

### 推論エフォートのキャッシュ非破壊変更

GPT-6 系モデルでは `configuration_update` を使うことで、会話の途中で reasoning effort を変更してもキャッシュが破棄されなくなった。長時間のエージェントセッションで、途中から思考の深さを切り替えてもキャッシュヒットを維持できる。

[OpenAI API Changelog](https://platform.openai.com/docs/changelog)

### OpenAI「Research acceleration」レポート

社内での AI 活用状況をまとめたレポートが公開された。自動研究インターン相当の目標を達成したこと、研究者の中央値で1日あたり $600 超のトークンを消費していること、人間1人日あたり3.1エージェント人日が動いていることなどの数値が開示されている。

[OpenAI Blog](https://openai.com/news/)

### ChatGPT広告の Sponsored Agents

ChatGPT 上の広告をクリックした後、その企業が提供するエージェントと会話を続けられる仕組み。米国の一部広告主を対象にテストが始まった。

[OpenAI Blog](https://openai.com/news/)

### Ads Manager の AI 機能と HubSpot / Shopify 連携

Ads Manager に AI 機能が追加され、ChatGPT 上の自然言語プロンプトからキャンペーンの作成と分析ができるようになった。広告文・画像の自動提案、テキストの自動最適化と多言語化にも対応し、HubSpot / Shopify との連携が追加された。

[OpenAI Blog](https://openai.com/news/)

### OpenAI ストレージ基盤 Habitat

自社のオンラインストレージ基盤 Habitat の設計解説が公開された。週10億ユーザー・毎秒7000万リクエスト・500PB 超を支える構成と、3年連続で10倍成長する負荷にどう対応してきたかを説明している。

[OpenAI Blog](https://openai.com/news/)

## コミュニティの反応

### GPT-6 Sol / GPT-6 Luna

#### ポジティブ

> gpt-6 luna は既存コードのリファクタリングが得意 — @PeterOkwara [出典](https://x.com/PeterOkwara/status/2103960470093017546)

> gpt-6 luna で Fallout 1 のモバイル移植を進めている。かなり良い — @Sloedoen10 [出典](https://x.com/Sloedoen10/status/2103959982010228964)

#### ネガティブ

該当なし。

#### Tips

> Opus 5.5 から GPT-6 Sol 上の Codex に computer use タスクを投げる方法が分かった — @YeyCrespo [出典](https://x.com/YeyCrespo/status/2103959724991611184)

> OpenCode で gpt-6-sol を使うなら、`providers.openai.models.gpt-6-sol.limit` に context 1050000 / input 922000 / output 128000 を設定する — @makuchaku [出典](https://x.com/makuchaku/status/2103959629046878381)

#### 日本語記事

- [GPT-6 Lunaなら単価はSolの20分の1。あなたの仕事がLunaで足りるかを公式発表から読み解いた](https://zenn.dev/eques_blog/articles/83f56af3eee81c) — 50%値下げの比較元が GPT-5.6 の「プロモーション価格」であって定価ではない点、Claude との比較でモデルと effort が揃っていない点を指摘し、Astra / Sol / Luna の使い分けを整理している。
- [GPT-6 SolとClaude Opus 5.5が同日登場。価格と性能はどう変わったか](https://zenn.dev/iineineno03k/articles/20260923-gpt6-sol-claude-opus55-same-day) — 両モデルの API 料金を表で比較。月額サブスクリプションの料金とは別物であることを強調している。
- [gpt-6-lunaとgpt-5.6-lunaに動画の台本を書かせ比べた](https://zenn.dev/mohhh_ok/articles/2026-09-gpt6-luna-vs-gpt56-luna-script-writing) — コーディングエージェントのリーダーボードでは gpt-6-luna の正答率が前世代より低く出ていたが、台本執筆では gpt-6-luna の方が明らかに良かったという実測レポート。
- [GPT-6世代のCodexで、Astra／Solを監督役・Lunaを作業役にするサブエージェントの最短設定](https://qiita.com/nogataka/items/6c073b442a6538b23344) — Codex CLI のサブエージェント機能で、設計と最終判断を Astra / Sol、境界が明確な作業を Luna に振り分ける `.codex/config.toml` の書き方。

### GPT-6 向けプロンプトキャッシュの刷新

#### ポジティブ

> GPT-6 Astra で大規模3Dモデル生成プロジェクトを実行したところ、146回のモデル呼び出しのうち98.5%が prompt cache から供給され、処理効率が大幅に上がった — @LukaszTreder [出典](https://x.com/LukaszTreder/status/2103886299811680374)

> prompt caching の改善と cache diagnostics の追加で、巨大なリポジトリ文脈を繰り返し送る coding agent のレイテンシとコストが目に見えて下がると期待 — @alexdotcodes [出典](https://x.com/alexdotcodes/status/2103853500719346056)

#### ネガティブ

該当なし。

#### Tips

該当なし。

### 推論エフォートのキャッシュ非破壊変更

#### ポジティブ

> reasoning effort やツールを変更してもキャッシュが維持されるようになり、長いエージェントセッションのコスト削減に直結する — @JamesSonicemi [出典](https://x.com/JamesSonicemi/status/2103796000603414627)

#### ネガティブ

該当なし。

#### Tips

該当なし。

### OpenAI「Research acceleration」レポート

該当なし。取得した投稿は公式・メディア・アフィリエイト系のものが中心で、レポート内容に触れた個人ユーザーの実体験は見つからなかった。

### ChatGPT広告の Sponsored Agents

該当なし。

### Ads Manager の AI 機能と HubSpot / Shopify 連携

該当なし。

### OpenAI ストレージ基盤 Habitat

該当なし。X 検索の対象外 (上位6件に含まれず)。

## ソース

- [OpenAI News](https://openai.com/news/)
- [OpenAI API Changelog](https://platform.openai.com/docs/changelog)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
