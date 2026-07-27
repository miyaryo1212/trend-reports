---
title: "本日の公式更新なし、gpt-5.1-mini系でAPI障害"
summary: "本日のCodex/OpenAI公式アップデートはなし（Codex CLIは0.146.0-alpha系のプレリリース採番を継続）。コミュニティでは、gpt-5.1-mini/gpt-4.1-miniのレイテンシ上昇・タイムアウト障害の報告や、Codexの利用枠リセット運用、エージェント動向の解説記事が話題になっている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-28

features: []
codex_review: "正直、材料としては小粒だが、mini系API障害と利用枠リセット運用の知見が前面に出ているのは今の実務らしくて面白い。派手な新発表より、足回りの不安定さが競争力を削る局面を示した点は地味に重要だ。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLI は `0.146.0-alpha` 系（alpha.5〜alpha.13）のプレリリース採番を継続していますが、内容を伴う変更点の公表はなく、前回から新規の進展はありません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### OpenAI API の障害（gpt-5.1-mini / gpt-4.1-mini）

7月27日、OpenAI のステータスページで障害が公開されたことを受け、コミュニティで注意喚起の記事が出ています。

#### ネガティブ

> 2026年7月27日、gpt-5.1-mini / gpt-4.1-mini を利用した Chat Completions API でレイテンシ上昇・タイムアウト・ストリーミング不調が発生。ChatGPT の画像生成にも障害。 — Qiita @picnic [出典](https://qiita.com/picnic/items/671ae0be2d6998c07b66)

### Codex の利用枠・運用

#### Tips

> weekly quota が6%まで減った状況で大規模障害が発生。手元の Full reset カードを使うか、全体リセットを待つかの判断を実体験ベースで整理。サービスは20:08 JSTに復旧、翌04:17に usage limits のリセットが告知された。 — Zenn @hjpotter1 [出典](https://zenn.dev/hjpotter1/articles/b2e148a4a140b4)

> Codex Desktop が残す Crashpad のダンプで Mac の空き容量が急減する現象を調査。心当たりのないディスク消費の原因特定に。 — Zenn @hjpotter1 [出典](https://zenn.dev/hjpotter1/articles/38802c39ad9919)

### エージェント動向・実践

#### Tips

> OpenAI で Codex のプロダクトリーダーを務める Alexander Embiricos が Lenny's Podcast で語った「2026年はエージェントの年」を、エンジニア視点の論点4つに束ねて要点解説。 — Zenn @talks_tldr_jp [出典](https://zenn.dev/talks_tldr_jp/articles/tldr17-codex-inside-summary)

> Codex をまだ使ったことがない人向けに、インストールから最初のタスク実行、承認モードとサンドボックス、AGENTS.md による制御、MCP 拡張までを手を動かして学べるハンズオン入門書。 — Zenn @narita1980 [出典](https://zenn.dev/narita1980/books/openai-codex-getting-started)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [gpt-5.1-mini/gpt-4.1-miniで遅延・タイムアウト発生（Qiita）](https://qiita.com/picnic/items/671ae0be2d6998c07b66)
- [Codexの全体リセットは予測できる？（Zenn）](https://zenn.dev/hjpotter1/articles/b2e148a4a140b4)
- [「2026年はエージェントの年」を要点で解説（Zenn）](https://zenn.dev/talks_tldr_jp/articles/tldr17-codex-inside-summary)
