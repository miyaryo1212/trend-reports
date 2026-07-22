---
title: "OpenAI Presence登場 — 企業向けAIエージェント運用基盤"
summary: "OpenAIが企業向けにAIエージェントを展開・運用する新プラットフォーム「OpenAI Presence」を発表。Codex駆動の改善プロセス、ガードレール、承認済みアクション、シミュレーションを統合した限定GA提供。Codex CLIは前回の0.145.0安定版以降、新たな安定版リリースはなくalphaビルドが継続中。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-23

features:
  - "OpenAI Presence"
codex_review: "企業向けAI導入の本丸はモデル性能より運用統制なので、Presenceは派手さは薄いが筋がいい発表に見える。とはいえ限定GAかつFDE前提では、まだ汎用基盤というより個別導入支援の延長線上だ。"
codex_importance: 4
---

## 公式アップデート

### OpenAI Presence (限定GA)

OpenAI が、企業向けに AI エージェントを展開・運用するための新プラットフォーム **OpenAI Presence** を発表しました。Codex 駆動の改善プロセス、ガードレール、承認済みアクション、シミュレーションを統合し、FDE (Forward Deployed Engineer) 主導で提供される限定 GA として位置づけられています。

Codex を「開発ツール」から「企業の業務プロセスに常駐するエージェント運用基盤」へと広げる動きで、承認フローとガードレールを備えることで、実運用でのエージェント導入における統制・安全性の懸念に対応する狙いがあります。

### Codex CLI

前回レポートで詳述した Codex CLI 0.145.0 安定版以降、GitHub Releases では `rust-v0.146.0-alpha.1〜3` などの alpha 内部ビルドが続いており、**本日時点で新たな安定版リリースはありません**。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### OpenAI Presence

#### 解説記事

> OpenAI Presence とは何か、企業向け AI エージェント運用製品の位置づけを速報解説。 — Qiita [OpenAI Presence とは？企業向けAIエージェント運用製品を3分で速報解説](https://qiita.com/kinamocchi_tech/items/07550f7b4d4409bad61e)

#### X/Twitter

該当なし（直近7日間のX検索では、OpenAI Presence およびそれに紐づく Codex 駆動のエージェント展開・ガードレール・承認アクション・シミュレーションに関する個人ユーザーの実体験・感想投稿は確認できませんでした）

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI Presence とは？企業向けAIエージェント運用製品を3分で速報解説 (Qiita)](https://qiita.com/kinamocchi_tech/items/07550f7b4d4409bad61e)
