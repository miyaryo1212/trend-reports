---
title: "GPT-5.6、2設定でARC-AGI-3スコア約3倍に"
summary: "OpenAIが、GPT-5.6 SolでARC-AGI-3ベンチマークのretained reasoningとcompactionの2設定を有効化するだけで、公開タスク得点が13.3%→38.3%へ約3倍に向上し、出力トークンを約6分の1へ削減できると公表した。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-31

features:
  - "ARC-AGI-3ベンチマークの2設定有効化 (retained reasoning + compaction)"
codex_review: "これは派手というより、推論モデルの勝負が“学習量”から“運用設定の妙”へ移っていることを示す話で、かなり示唆的だ。ベンチの伸びは印象的だが、実運用でも再現するなら地味に効く本命改善だと思う。"
codex_importance: 4
---

## 公式アップデート

### ARC-AGI-3ベンチマークの2設定有効化 (retained reasoning + compaction)

OpenAIは、GPT-5.6 SolでARC-AGI-3ベンチマークの2つの設定 —— **retained reasoning**（推論の保持）と **compaction**（圧縮）—— を有効にするだけで、大幅な性能・効率改善が得られると公表した。

- 公開タスクの得点が **13.3% → 38.3%** へ、約3倍に向上。
- 同時に出力トークンを **約6分の1** に削減。

モデル自体を差し替えることなく、API側の設定変更だけでスコアとコスト効率を両立できる点が要旨。前日発表のGPT-5.6一般提供（Sol / Terra / Luna）に続く、既存モデルの運用面での改善提示となる。

[ソース](https://openai.com)

## コミュニティの反応

### ARC-AGI-3ベンチマークの2設定有効化 (retained reasoning + compaction)

直近7日間のX投稿では、本トピックに関する**個人ユーザーの実体験・感想投稿は確認できなかった**（公式発表の引用・解説やメディアアカウントの投稿が中心）。

#### Tips

> 2026年7月30日にOpenAI公式ニュースへ公開されたGPT-5.6関連2件（新モデル発表と、API側2設定でARC-AGI-3スコアが3倍になる件）を整理して解説。 — Qiita @picnic [出典](https://qiita.com/picnic/items/288e4ce9df88ded4c255)

## ソース

- [GPT-5.6登場と、2つの設定でARC-AGI-3スコアが3倍になった話（Qiita）](https://qiita.com/picnic/items/288e4ce9df88ded4c255)
- [OpenAI](https://openai.com)
