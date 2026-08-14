---
title: "公式更新なし、IBM提携の読み解きが話題"
summary: "本日の公式アップデートはなし。Codex CLI は 0.148.0-alpha 系の連番リリースのみで、リリースノートに実質的な内容の記載はない。日本語コミュニティでは IBM と OpenAI の提携を「GPT-5.6採用」と読まないための設計論、Codex Desktop 更新による Unknown model エラー解消の報告が出た。"
importance: 1
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-15

features: []
codex_review: "公式材料が薄い日のわりに、IBM提携をモデル名ではなく運用設計で読む視点がいちばん示唆的だった。派手さはないが、実務ではCLIの不具合解消報告より長く効く論点だと思う。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLI のリリースフィードには `rust-v0.148.0-alpha.11` 〜 `alpha.18` が並んでいるが、いずれもリリースノートの本文が「Release 0.148.0-alpha.NN」のみの連番ビルドで、公表された変更内容はない。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### 本日の日本語圏の動き

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> Codex Desktop を 26.810.41047 (build 6570) に更新したところ同梱 CLI が 0.148.0-alpha.9 になり、以前の 0.147.0-alpha.6.6 で出ていた `Unknown model` エラーが再現しなくなった。`multi_agent_version = v2` でサブエージェントに Luna を指定できている。 — @ykoba [出典](https://zenn.dev/ykoba/articles/6ad01dc4341b3c)

> IBM と OpenAI の提携を「IBM が GPT-5.6 を採用した」と読むと本質を取り違える。企業 IT 側で見るべきはモデル単体の選定ではなく、複数モデルを差し替え可能にする Model Gateway の設計だという整理。 — @mhamadajp [出典](https://qiita.com/mhamadajp/items/01fcfcb642b2e85d9a76)

> Anthropic で成立していたプロンプトキャッシュ前提の設計を OpenAI へそのまま移植するとコストが想定より膨らむ。3社のキャッシュ仕様差と実装上の落とし穴を比較した記事。 — リベルクラフト [出典](https://zenn.dev/libercraft/articles/20260814-prompt-caching-3-providers-pitfalls)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Codex DesktopでGPT-5.6 Solを司令官にしてLunaを使いまくろうとしたけど、エラーになってしまった話 (Zenn)](https://zenn.dev/ykoba/articles/6ad01dc4341b3c)
- [IBMとOpenAIの提携は「GPT-5.6採用」ではない──企業AIのModel Gatewayを設計する (Qiita)](https://qiita.com/mhamadajp/items/01fcfcb642b2e85d9a76)
- [プロンプトキャッシュ設計と地雷：3社を比較する (Zenn)](https://zenn.dev/libercraft/articles/20260814-prompt-caching-3-providers-pitfalls)
