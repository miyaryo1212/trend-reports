---
title: "本日の公式更新は0.145系アルファ継続のみ、GPT-5.6の使い分けが話題"
summary: "本日の実質的な公式アップデートはなく、Codex CLIは0.145.0系のアルファプレリリース（alpha.3/alpha.4）が続くのみ。コミュニティでは07-09公開のGPT-5.6（Sol/Terra/Luna）の使い分けとコスト管理を巡る実体験投稿が活発化している。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-12

features:
  - "Codex CLI 0.145.0 アルファ系列 (alpha.3 / alpha.4)"
  - "GPT-5.6 Sol / Terra / Luna のCodex活用"
codex_review: "公式更新が薄い日に、むしろモデル階層の運用知が前景化しているのは面白い。派手さはないが、性能競争より配賦設計が主戦場になったことを示す地味に重要な兆候だ。"
codex_importance: 3
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

本日の実質的な公式アップデートはありません。

Codex CLI は前回報告した 0.145.0-alpha.2 に続き、`0.145.0-alpha.3` および `0.145.0-alpha.4` のアルファプレリリースが公開されていますが、いずれも詳細なリリースノートは付与されておらず、`Release 0.145.0-alpha.x` の定型記載のみです。安定版（0.144.1）以降に新たな正式リリースはありません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### GPT-5.6 Sol / Terra / Luna のCodex活用

07-09に一般提供された GPT-5.6（Sol / Terra / Luna の3ティア + max / ultra）について、Codex での使い分けとコスト管理を主題にした実体験記事がZenn/Qiitaで相次いでいる。

#### Tips

> GPT-5.6の3ティアは「一番強いモデルはどれか」より「どの段階で計算予算を上げるか」で考える。入口はLunaかTerraで受け、戻せない判断だけSol、必要ならmax/ultraへ上げる。 — @中村 啓｜LLMエンジニア [出典](https://zenn.dev/hironakamura_ai/articles/173d209de4ebc6)

> Sol・Terra・Luna と max・ultra は役割が別物。max は推論量を増やす設定、ultra は複数エージェントの並列実行で、「ベンチが高いからSol一択」ではない。 — @Clopy [出典](https://zenn.dev/clopy/articles/codex-gpt-5-6-model-guide)

> Codex の default を中間グレードの Terra に変更。credits単価がGPT-5.5の半分・GPT-5.4と同じで、日常の実装や通常改修を寄せられ、Solを使う場面を絞れる。 — @hjpotter1 [出典](https://zenn.dev/hjpotter1/articles/59622ac112d0a7)

#### ネガティブ

> Codexの最上位モード（Ultra）に任せたら、5時間の枠を1時間で溶かした。ログを見ると子エージェントが全部いちばん上のモードで走っていた。 — @QuoLu [出典](https://zenn.dev/kitepon/articles/codex-max-mode-quota-drain)

> サブエージェントにGPT-5.6 Lunaを指定したのに、実際はSolが動いていた。安いモデルへ委譲したつもりが上位モデルで消費していた。 — @hayatosc [出典](https://zenn.dev/hayatosc/articles/codex-agent-issue)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
