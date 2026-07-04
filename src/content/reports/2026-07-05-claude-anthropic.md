---
title: "公式更新は小幅、話題はFable 5再開とSonnet 5比較に集中"
summary: "本日の公式アップデートはv2.1.201の小幅な修正のみ。コミュニティではFable 5の再開（7/7まで定額枠）とSonnet 5がOpusに肉薄したかの実力検証、モデル使い分けによるコスト最適化の議論が中心となっている。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-05

features:
  - "Claude Code v2.1.201"
  - "Claude Fable 5 再開（定額枠は7/7まで）"
  - "Sonnet 5 vs Opus 実力比較"
  - "モデル使い分け・コスト最適化"
  - "サブエージェント運用"
codex_review: "公式更新自体は軽いのに、論点がFable 5の供給制約とSonnet 5の費用対効果に収束しているのが生々しい。派手さは薄いが、モデル性能より運用設計が競争力を決める局面に入った感じがある。"
codex_importance: 3
---

## 公式アップデート

本日、大きな公式アップデートはありません。前回レポート（v2.1.198〜v2.1.200）以降の新規リリースは、以下の小幅な修正のみです。

### Claude Code v2.1.201

**v2.1.201** がリリースされました。変更点は1件で、**Claude Sonnet 5 セッションが、ハーネスのリマインダーに会話途中の system ロールを使わなくなった**というものです。

[Claude Code Releases v2.1.201](https://github.com/anthropics/claude-code/releases/tag/v2.1.201)

## コミュニティの反応

> 本日は新機能に対するX検索を実施していないため、以下はZenn/Qiitaの記事に基づく反応です。

### Claude Fable 5 再開（定額枠は7/7まで）

7月1日に輸出規制解除で再提供されたFable 5について、利用条件と「短い定額枠で何をすべきか」を論じる記事が続いています。

#### 解説・評価

> 6/9発表→6/12提供停止→6/30規制解除→7/1再提供の経緯を整理。追加課金なしで使えるのは週次上限の範囲で7/7まで、7/8以降は従量課金へ。 — @yun_bow [Zenn](https://zenn.dev/yun_bow/articles/99512afc69bcf8)

> Proでも使えるが「週間50%枠」は追加枠ではなく既存上限からの切り出しなので、すぐ尽きやすいと評価。 — @テックエンジニアのひとりごと [Zenn](https://zenn.dev/mdtechknowledge/articles/claude-fable-5-pro-plan-availability)

> 解禁そのものより「規制が解除された理由」の方が重要だと指摘。LLMが単なるWeb APIから、規制・安全保障が絡むインフラになった現実を論じる。 — @Carapace [Zenn](https://zenn.dev/carapace/articles/fable-5-restored-reason)

#### Tips

> Fable 5は「一問一答を賢くするモデル」ではなく、長く複雑な作業を最後まで進めるモデルとして使うべき。長時間タスク向けのプロンプト設計・サブエージェント運用まで整理。 — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/claude-fable5-long-task-prompting)

> 料金は入力$10/出力$50でOpus 4.8の2倍。デフォルトにすると使用枠が溶けるため、アドバイザー機能などで効率的に使う方法を紹介。 — @リモ [Zenn](https://zenn.dev/kotoda_ma/articles/c3c56c1b7bff26)

### Sonnet 5 vs Opus 実力比較

「Sonnet 5はOpusに肉薄したのか」を実測で確かめる検証記事が複数出ています。評価は割れています。

#### ネガティブ寄り

> 同一プロンプト・同一採点で4.6と5を比較。正答率はほぼ差がつかず、コストとターン数は5の方が重い。書くだけのタスクでも余計なツール呼び出しが挟まり「期待外れ」と結論。 — @Tom [Zenn](https://zenn.dev/marvelousu/articles/claude-sonnet5-vs-sonnet46-benchmark)

#### 中立・検証

> 「もうOpusいらない」論を実際に集めて検証。この手の「新型が前世代を食う」論は毎回出る、と話半分の姿勢で整理。 — @homhom44 [Qiita](https://qiita.com/homhom44/items/a97c82b2fa8025230c74)

> Fable 5を分析し、定額のOpus 4.8でも同じ土俵でベンチマークしたらかなり再現できたと報告。従量課金へ移行してまで払い続ける価値を問う。 — @udowanllc [Qiita](https://qiita.com/udowanllc/items/02f94e77663db04ab1cd)

### モデル使い分け・コスト最適化

「重い役は高性能モデル、軽い作業は安いモデル」という定石を、実測で検証する記事が目立ちます。

#### 実測・注意喚起

> フックでモデルを自動ルーティングする運用と実測コストを公開。単純作業に最上位モデルを使うのは「時給10万円のアーキテクトにコピー取りをさせる」のと同じ、と指摘。 — @oppo [Zenn](https://zenn.dev/oppo2357/articles/0d2babf96a207a)

> Opus + ローカルQwenの「タダ」構成が、3つのコード修復タスク全部で最高額に。ローカル=安いとは限らない実測結果。 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/free-executor-paradox-40-trials)

> コスト削減で一番危ないのは「モデルを落とす」こと。検証役（Critic）を安くしたらバグを見逃した。モデルではなく渡す入力を減らす発想へ。 — @hayua [Zenn](https://zenn.dev/hayua/articles/700aabeba45500)

### サブエージェント運用

サブエージェントの設計・落とし穴に関する実践知が引き続き共有されています。

#### Tips・注意喚起

> サブエージェントはメインの会話を知らない。前提は明示的に渡さないと静かに空振りし、エラーは出ずそれっぽい結果だけ返る。 — @Rapls [Zenn](https://zenn.dev/rapls/articles/9d6a321852ad9e)

> 司令塔（Dispatcher）のトークン消費がボトルネックになるため、指示書執筆やダッシュボード更新をサブエージェントに逃がして消費を削減。 — @h-wata [Zenn](https://zenn.dev/h_wata/articles/squad-dispatcher-token-diet)

> ブログ公開前に「公開可否レビュー」と「ファクトチェック」を別々のサブエージェント2体に分業させると精度が上がる、という関心の分離の設計。 — @みやっち [Zenn](https://zenn.dev/tmiyachi/articles/a6c77df6496fee)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
