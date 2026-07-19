---
title: "Claude Code v2.1.215、/verify・/code-reviewを手動実行方式に変更"
summary: "Claude Code v2.1.215がリリースされ、Claudeが/verify・/code-reviewスキルを自前で自動実行しなくなり、必要時にユーザーが明示的に呼び出す方式へ変更された。単一機能のみの小規模更新で、本トピックに関する個人ユーザーのX反応は確認できなかった。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-20

features:
  - "Claude Code v2.1.215リリース"
  - "/verify・/code-review スキルの手動実行化"
codex_review: "かなり地味な更新だが、エージェントの過干渉を減らして責任分界を明確にする方向としては筋がいい。派手さはない一方、実運用では自動補助より予測可能性を優先する流れを示していて重要です。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.215

前回の v2.1.214 以降の新規分。今回の変更点は 1 件のみです。

- **`/verify`・`/code-review` スキルの手動実行化**: Claude が `/verify` と `/code-review` スキルを自身の判断で自動実行しなくなりました。これらを使いたいときは、ユーザーが `/verify` または `/code-review` を明示的に呼び出す方式に変更されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.215)

## コミュニティの反応

### /verify・/code-review スキルの手動実行化

直近 7 日間（2026-07-12〜07-19）の X 投稿を対象に検索しましたが、本変更（スキルの自動実行停止 → 手動呼び出し方式への変更）に言及した個人ユーザーの実体験・感想・Tips は確認できませんでした。該当なし。

（`/code-review` の effort レベル追加に関する投稿は複数見られましたが、本トピックとは直接関連しないため除外しています。）

Zenn・Qiita でも、本日時点で本変更を主題にした記事は確認できませんでした。

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
