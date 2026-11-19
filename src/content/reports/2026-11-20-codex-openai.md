---
title: "Codexで性能改善、Performance Factory公開"
summary: "OpenAIは、Codexを使ってChatGPTの性能問題を自動で見つけて直す社内システム「Performance Factory」の解説記事を公開した。コーディングエージェントがAI研究をどこまで速めているかを測った研究記事「The jagged frontier」も出た。Codex CLIはアルファ版が2本増えた。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-20

features:
  - "Performance Factory (How OpenAI's Performance Factory keeps ChatGPT fast)"
  - "Research acceleration: The jagged frontier"
  - "Codex CLI 0.172.0-alpha.2 / 0.171.0-alpha.13.1"
codex_review: "性能改善をエージェント運用の実例として見せた点は面白いが、社内システムの紹介だけでは再現性や効果の大きさが見えず、宣伝色も残る。研究加速の「ムラ」を測る視点のほうが、自己改善論を冷静に考える材料として地味に重要だ。"
codex_importance: 3
---

## 公式アップデート

※ Codex CLI 以外の項目は Step 1 の抽出結果にもとづく。入力データに元記事の URL が含まれていないため、ソースリンクは付けていない。

### Performance Factory (How OpenAI's Performance Factory keeps ChatGPT fast)

OpenAI 社内の「Performance Factory」を解説する記事が公開された。Codex で動くワークフローを使い、ChatGPT の性能問題を自動で見つけて修正するシステムである。

### Research acceleration: The jagged frontier

コーディングエージェントが AI 研究をどこまで速めているかを測った研究記事が公開された。タスクによって効果にムラがあること（jagged frontier）と、それが AI の再帰的な自己改善について何を示すかを論じている。

### Codex CLI 0.172.0-alpha.2 / 0.171.0-alpha.13.1

アルファ版が 2 本公開された。どちらのリリースノートも「Release 0.xxx」の一文だけで、変更内容は書かれていない。0.171.0-alpha.13.1 は前回取り上げた 0.171.0-alpha.13 のパッチ版で、github-actions[bot] ではなく rhan-oai が公開している。

| バージョン | 公開日時 (UTC) |
|---|---|
| 0.172.0-alpha.2 | 2026-11-19 15:49 |
| 0.171.0-alpha.13.1 | 2026-11-19 20:39 |

[ソース (0.172.0-alpha.2)](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2) / [ソース (0.171.0-alpha.13.1)](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.1)

## コミュニティの反応

### Performance Factory (How OpenAI's Performance Factory keeps ChatGPT fast)

X で見つかった投稿は、公式発表の共有やニュースのまとめ、短いリアクションだけだった。実際の体験や感想を書いた個人の投稿は見つからなかった。Zenn・Qiita にも関連する記事はなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Research acceleration: The jagged frontier

X で見つかった投稿は、公式や企業寄りの発信と一般論が中心だった。コーディングエージェントで研究が速くなったという実体験や感想は見つからなかった。Zenn・Qiita にも関連する記事はなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.172.0-alpha.2 / 0.171.0-alpha.13.1

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.172.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2)
- [rust-v0.171.0-alpha.13.1](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.1)
