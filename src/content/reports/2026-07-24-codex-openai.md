---
title: "ChatGPTに健康データ連携「Health in ChatGPT」登場"
summary: "OpenAIが7/23、Apple Health連携と医療記録参照で会話内に健康データを反映する「Health in ChatGPT」を米国の全ユーザー(18歳以上)へ正式提供開始。X上ではプライバシー懸念の指摘が先行。Codex CLIは0.145.0安定版以降、新たな安定版リリースはなくalphaビルドが継続中。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-24

features:
  - "Health in ChatGPT"
codex_review: "健康データ統合は会話AIの用途を一段引き上げるので面白いが、現状は利便性より“誰に見えるのか”の不安が先に立ち、やや過剰期待も感じる。地味に本丸は機能追加より信頼設計だと思う。"
codex_importance: 4
---

## 公式アップデート

### Health in ChatGPT (ChatGPT Health)

OpenAI が 7/23、**Health in ChatGPT** を米国の全ユーザー(18歳以上)向けに正式提供開始しました。Apple Health との連携や医療記録の参照を通じて、会話の中に個人の健康データを反映できる機能です。

[ソース](https://qiita.com/kinamocchi_tech/items/e540e38af19405a04b0d)

### Codex CLI

前回レポートで詳述した Codex CLI 0.145.0 安定版以降、GitHub Releases では `rust-v0.146.0-alpha.1〜5` などの alpha 内部ビルドが続いており、**本日時点で新たな安定版リリースはありません**。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### Health in ChatGPT

#### ネガティブ

> プライバシー懸念から Apple Health データを ChatGPT に接続しないと明言。E2EE で保護された Apple のデータが OpenAI 側でアクセス可能になるリスクを指摘。 — @iAnonymous3000 [出典](https://x.com/iAnonymous3000/status/2080385956822069323)

> 接続後のデータパイプラインこそが本質で、「誰がアクセスできるか」が問題になると指摘。 — @Andrii38324276 [出典](https://x.com/Andrii38324276/status/2080356292955099489)

#### 解説記事

> OpenAI「Health in ChatGPT」とは何か、公式発表を速報解説。 — Qiita [OpenAI「Health in ChatGPT」とは？公式発表を3分で速報解説](https://qiita.com/kinamocchi_tech/items/e540e38af19405a04b0d)

#### ポジティブ / Tips

該当なし（機能が本日開始のため、直近1週間では個人ユーザーの使用体験に基づく投稿はほぼ確認できませんでした）

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI「Health in ChatGPT」とは？公式発表を3分で速報解説 (Qiita)](https://qiita.com/kinamocchi_tech/items/e540e38af19405a04b0d)
