---
title: "公式更新なし、Codex CLI実践知の共有が進む"
summary: "本日の公式アップデートはなし。Codex CLIはalpha版のみが更新され、内容を伴う告知はない。一方コミュニティでは --image によるエラー画面共有、長期セッション運用の障害復旧記録、Voiceモードの実像など、実践的な知見の共有が続いている。"
importance: 1
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-18

features: []
codex_review: "公式沈黙の日でも、現場の運用知がプロダクト理解を前に進めるという意味で面白い。派手さは薄いが、Voiceや長期運用の癖が共有され始めた局面は地味に重要だ。"
codex_importance: 2
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLI は 0.148.0-alpha.21 (2026-08-17) までプレリリースが進んでいますが、リリースノートは「Release 0.148.0-alpha.21」の一行のみで、変更内容の記載はありません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### Codex CLI の実践的な使い方

#### Tips

> ターミナルの赤いエラー文字を書き写す代わりに、Codex CLI の `--image` でスクリーンショットを1枚渡して読ませる。 — akira_papa_AI [出典](https://qiita.com/akira_papa_AI/items/839ecf0717f3cf62637b)

> 同一 Codex セッションを128日・838タスク・114億トークン継続した実測記録と、その長期セッションで起きた `/side` 切替障害の診断・復旧手順。Windows 11 / WSL2 環境。 — ootakazuhiko [出典](https://qiita.com/ootakazuhiko/items/537ac4a8d086d3fdd961)

### Codex の Voice モード

#### ポジティブ

> 「普通の Codex タスクを音声で操作する機能」だと思っていたが、実際は曖昧な相談を会話で具体化しながら調査やファイル作成まで進められる。iPhone の Codex Remote で話し始め、最後には Mac 上に Markdown ができていた。 — Shiro [出典](https://zenn.dev/shiroa/articles/a5988ab85a317c)

### OpenAI API を使った実装知見

#### Tips

> Realtime API の server_vad でハンズフリー音声会話を実装。Push-to-Talk との違いを、発話の区切り・応答開始・割り込み・コストの観点で整理している。 — HAL [出典](https://zenn.dev/halhalhal1/articles/server-vad-handsfree-voice)

> 音声AIのシステムプロンプト肥大化を防ぐ「会話カーネル」設計。OpenAI と Gemini を差し替え可能にする構成。 — susie000720 [出典](https://qiita.com/susie000720/items/a40c4ca124910df74421)

> Anthropic / OpenAI / Gemini のプロンプトキャッシュ仕様差の比較。Anthropic 前提の設計をそのまま OpenAI に移植するとコストが想定を超えるケースがある。 — リベルクラフト [出典](https://zenn.dev/libercraft/articles/20260814-prompt-caching-3-providers-pitfalls)

### 週次まとめ・その他

#### Tips

> 8/10-15 の週次まとめ。Ultrafast、GLM-5.3 のウェイト公開延期、Codex デスクトップアプリの Linux 版プレビューを取り上げている。 — AIニュース [出典](https://zenn.dev/ainewsdaily/articles/20260816_general_t1)

#### ネガティブ

> 10万ユーザーの Chrome 拡張「ChatGPT Ctrl+Enter Sender」が OpenAI OpCo, LLC から商標申し立てを受け、7日以内の対応を求められて改名した経緯。 — Masachika Kamada [出典](https://zenn.dev/kmdkmd/articles/chrome-extension-trademark-rename)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Codexの --image でエラー画面をAIに読ませる (Qiita)](https://qiita.com/akira_papa_AI/items/839ecf0717f3cf62637b)
- [128日・838タスク・114億トークンを継続したCodex CLIセッションで`/side`障害を診断・復旧した記録 (Qiita)](https://qiita.com/ootakazuhiko/items/537ac4a8d086d3fdd961)
- [Codexの"Voiceモード"を理解する (Zenn)](https://zenn.dev/shiroa/articles/a5988ab85a317c)
- [OpenAI Realtime APIのserver_vadでハンズフリー音声会話を実装する (Zenn)](https://zenn.dev/halhalhal1/articles/server-vad-handsfree-voice)
- [音声AIのプロンプト肥大化を止める：「会話カーネル」設計 (Qiita)](https://qiita.com/susie000720/items/a40c4ca124910df74421)
- [プロンプトキャッシュ設計と地雷：3社を比較する (Zenn)](https://zenn.dev/libercraft/articles/20260814-prompt-caching-3-providers-pitfalls)
- [GPT-5.6が最大14倍速に、GLM-5.3はウェイト公開延期 週刊AIニュース(8/10-15) (Zenn)](https://zenn.dev/ainewsdaily/articles/20260816_general_t1)
- [OpenAI から商標申し立てがきた！10万ユーザーの Chrome 拡張の名前を泣く泣く変えた話 (Zenn)](https://zenn.dev/kmdkmd/articles/chrome-extension-trademark-rename)
