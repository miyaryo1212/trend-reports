---
title: "ChatGPT EnterpriseがAWS Marketplaceで提供開始"
summary: "ChatGPT Enterprise を AWS Marketplace で買えるようになり、既存の AWS の購買・請求契約で調達できる。Codex CLI は 11/9 に 0.169.0-alpha.4〜alpha.7 の 4 版を公開した。X では、サイドチャットへの期待と、秘密情報がログに残る不具合の報告が出ている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-10

features:
  - "ChatGPT Enterprise の AWS Marketplace 提供開始"
  - "Codex CLI 0.169.0-alpha.4〜alpha.7"
codex_review: "AWS Marketplace対応は派手さこそないが、既存の調達経路に乗せることで導入障壁を下げる、企業向けAIの堅実な一手だ。一方、秘密情報がログに残る報告は、機能追加より先に信頼性を問う話で軽視できない。"
codex_importance: 3
---

## 公式アップデート

### ChatGPT Enterprise の AWS Marketplace 提供開始

ChatGPT Enterprise が AWS Marketplace で提供されるようになった。企業はすでに結んでいる AWS の購買・請求契約を使って、ChatGPT Enterprise を調達できる。

※ 今回の入力データには、この発表の公式ソース URL が含まれていない。

### Codex CLI 0.169.0-alpha.4〜alpha.7

Codex CLI の 0.169.0 系アルファ版が、2026-11-09 に 4 本続けて公開された。どの版もリリースノートは「Release 0.169.0-alpha.N」の一文だけで、変更内容は書かれていない。

| バージョン | 公開日時 (UTC) |
|---|---|
| 0.169.0-alpha.4 | 2026-11-09 05:37 |
| 0.169.0-alpha.5 | 2026-11-09 07:29 |
| 0.169.0-alpha.6 | 2026-11-09 19:30 |
| 0.169.0-alpha.7 | 2026-11-09 20:06 |

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.7)

## コミュニティの反応

### ChatGPT Enterprise の AWS Marketplace 提供開始

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.169.0-alpha.4〜alpha.7

公式のリリースノートに変更内容がないため、X に投稿された機能や不具合が今回のどの版のものかは確認できていない。

#### ポジティブ

> 最新のアルファ版に「複数のサイドチャット」機能が入り、メインの会話を離れずに別の質問を試せるようになったと紹介している。まだ試す前の期待を込めた好意的なトーン。 — @andrewxix [出典](https://x.com/andrewxix/status/2119104840257372358)

> Codex の Fast mode は Standard より 1.24〜1.41 倍速く完了したというテレメトリの結果を共有している。具体的な数値で速度向上を伝える好意的なトーン。 — @bebuu_ai [出典](https://x.com/bebuu_ai/status/2119095489861919021)

#### ネガティブ

> Codex CLI が子プロセスを起動するときに、API キーなどの秘密情報が内部ログに平文で残る不具合を見つけたと説明している。セキュリティ上の懸念を指摘する批判的なトーン。 — @tinmoon_label [出典](https://x.com/tinmoon_label/status/2119235965193777570)

#### Tips

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.169.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.7)
- [0.169.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.6)
- [rust-v0.169.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.5)
- [rust-v0.169.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.4)
