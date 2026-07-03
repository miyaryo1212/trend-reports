---
title: "Codex公式は静穏、GPT-5.6のゲノミクス新ベンチとCodex実務知見が動く"
summary: "本日のCodex CLI公式はalpha版とメンテナンスパッチのみで新機能なし。話題はGPT-5.6 Solを測るゲノミクス新ベンチGeneBench-Proと、Codexのweb検索セキュリティ・画像生成・作業台化などの実務知見に集まった。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-04

features:
  - "GeneBench-Pro"
codex_review: "公式が静かな日に、評価軸が新機能より『安全に使い倒す知見』へ移っているのが面白い。GeneBench-Proはやや話題先行気味で、むしろCodexの作業台化の蓄積のほうが後で効いてくる気がする。"
codex_importance: 2
---

## 公式アップデート

本日の Codex CLI 利用者向け公式アップデートはありません。直近のリリースは 0.143.0 に向けた alpha 版 (rust-v0.143.0-alpha.32〜alpha.35) と、メンテナンス専用パッチ (0.142.4 / 0.142.5) のみで、いずれも「ユーザー向けの変更なし」または内部向けの修正にとどまります。

[ソース](https://github.com/openai/codex/releases)

### GeneBench-Pro (新ベンチマーク)

計算生物学・ゲノミクス領域のAI推論力を測る研究レベルの新ベンチマーク「GeneBench-Pro」が公開されました。最高設定の GPT-5.6 Sol で正答率 28.7% と、フロンティアモデルでも大きく余地が残る難度です。サンプルとして10問が Hugging Face で公開されています。

なお、直近1週間のX検索（キーワード・セマンティック両方）では、GeneBench-Pro を個人で試した実体験・Tips 投稿は確認できませんでした。GPT-5.6 Sol のスコア言及はあるものの、いずれも公式情報の共有やモデル比較の文脈です。

## コミュニティの反応

公式の動きが薄い一方、Zenn/Qiita では Codex/OpenAI を使った実装・運用の新規記事が投稿されました（前回レポートで既報の記事は除く）。

### GPT-5.6 (Sol / Terra / Luna)

#### Tips

> GPT-5.6 で注目すべきは最高スコアより「同じセキュリティ評価を前世代の約3分の1の出力トークンでこなした」点だと分析。能力競争より推論コストの引き下げと予測しやすさに重心が移り、Sol/Terra/Luna はサイズと価格で用途別に選び分ける前提だと整理。 — @とうもろこし茶 [出典](https://zenn.dev/okssusucha/articles/20260630-gpt-5-6-sol-terra-luna)

### Codex のセキュリティ設計

#### Tips

> Codex CLI は web 検索を有効にしても既定では生きたページを取りに行かない、という保守的な既定値に着目。読み込んだページの中身が「次の指示」として効くプロンプトインジェクションのリスクを、OpenAI がどう抑えているかを設定リファレンスから読み解く。 — @とうもろこし茶 [出典](https://zenn.dev/okssusucha/articles/20260626-codex-web-search-cached-default-security)

### Codex の実務活用

#### Tips

> Codex CLI 経由で gpt-image-2 をプログラム的に呼び、モック・アイコン生成→コード反映→スクショ→差分修正を回す「視覚的開発ループ」の作り方を解説。 — @リベルクラフト [出典](https://zenn.dev/libercraft/articles/20260627-codex-image-generation)

> Codex App を単なるチャット画面ではなく「技術作業台」として使う実践。リポジトリ接続・thread 分割・ファイル読み込み・画面共有・レビュー・次回への引き継ぎ整理まで、CLI との使い分けを具体化。 — @AIウォッチ [出典](https://zenn.dev/aiwatch_jp/articles/agent-flow-codex-app-workbench)

### Codex と Opus の実装比較

#### 中立

> Opus の「機能は動くが要件が漏れる=抜け型」を検証。同じ issue を渡した案Aでは Opus 15抜け・Codex 1抜けだったが、入力プロンプトの整理度という交絡を指摘。まっさらな Opus に蒸留済みプロンプトだけを渡す案Bで切り分けを試みる続編。 — @ペンネ株式会社 [出典](https://zenn.dev/penne_inc/articles/codex-vs-opus-implementation-trial-phase-b)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
