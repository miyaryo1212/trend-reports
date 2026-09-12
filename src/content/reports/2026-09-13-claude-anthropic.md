---
title: "v2.1.270はgit権限リグレッションのみ修正"
summary: "Claude Code v2.1.270 が公開されました。変更は1件のみで、v2.1.269 で混入した「長時間稼働セッションで読み取り専用の git コマンドが突然権限を要求する」リグレッションの修正です。本日のX上の反応は確認できませんでした。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-13

features:
  - "Claude Code v2.1.270 リリース"
  - "読み取り専用 git コマンドの権限確認リグレッション修正"
codex_review: "地味だが、長時間セッションでの権限ノイズは開発体験をじわじわ削るので修正は妥当。大型更新直後の安定化パッチとしては重要だが、業界全体への波及は限定的です。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.270

2026-09-13 04:45 (JST) に公開されました。変更は1件のみのパッチリリースです。

- Bash ツールで実行する読み取り専用の git コマンドが、セッションをしばらく稼働させた後に突然権限確認を求めるようになっていた問題を修正しました。これは v2.1.269 で混入したリグレッションです。

前日の v2.1.269 は100件を超える変更を含む大規模リリースでしたが、本日はその後追い修正のみで、新機能の追加はありません。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.270)

## コミュニティの反応

### Claude Code v2.1.270 リリース

**該当なし**

直近7日間のX投稿を対象にキーワード検索・セマンティック検索の双方を行いましたが、v2.1.270 に関する個人ユーザーの実体験・感想の投稿は確認できませんでした。リリースから数時間しか経っていないことが要因と考えられます。

### 読み取り専用 git コマンドの権限確認リグレッション修正

**該当なし**

同じく直近7日間 (2026-09-05以降) を対象に、Claude Code / git / bash / permission の組み合わせで検索しましたが、本トピックに該当する個人ユーザーの投稿は見つかりませんでした。git の脆弱性に関する一般的な議論や bash/git の挙動への言及は見られたものの、本件との関連は確認できません。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.270 リリースノート](https://github.com/anthropics/claude-code/releases/tag/v2.1.270)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
