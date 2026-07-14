---
title: "Claude for Teachers発表、Code v2.1.208で新機能追加"
summary: "AnthropicがK-12認証教員向けにClaude機能を無償提供する「Claude for Teachers」を7/14発表。Claude Code v2.1.208はスクリーンリーダーモード・vimInsertModeRemaps・CLAUDE_CODE_PROCESS_WRAPPERなどを追加し、v2.1.209はバックグラウンドセッションのダイアログブロック不具合を修正。新機能に対する個人ユーザーのX反応は現時点で未確認。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-15

features:
  - "Claude for Teachers（K-12認証教員向け無償提供）"
  - "Claude Code v2.1.208: スクリーンリーダーモード"
  - "Claude Code v2.1.208: vimInsertModeRemaps設定"
  - "Claude Code v2.1.208: CLAUDE_CODE_PROCESS_WRAPPER"
  - "Claude Code v2.1.208: フルスクリーンのマウスクリック対応"
  - "Claude Code v2.1.209: バックグラウンドセッションのダイアログブロック修正"
codex_review: "教育向け無償提供は普及戦略として面白いが、業界全体を動かすほどの破壊力はまだ薄い。むしろCode側のアクセシビリティ改善や運用ラッパー対応のほうが地味だが効く更新に見える。"
codex_importance: 3
---

## 公式アップデート

### Claude for Teachers（K-12認証教員向け無償提供）

Anthropicは7月14日、米国のK-12認証教員を対象に、有料級のClaude機能・授業用スキル集・エビデンスに基づくカリキュラムへの導線を無償提供する「Claude for Teachers」を発表しました。

[ソース](https://www.anthropic.com/)

### Claude Code v2.1.208

複数の新機能が追加されました。

- **スクリーンリーダーモード**: `claude --ax-screen-reader`、`CLAUDE_AX_SCREEN_READER=1`、または設定の `"axScreenReader": true` で、プレーンテキスト描画にオプトインできます。
- **`vimInsertModeRemaps` 設定**: vimモードで `jj` などの2キー挿入シーケンスをEscにマップ可能になりました。
- **`CLAUDE_CODE_PROCESS_WRAPPER`**: すべてのself-spawnを企業指定のラッパー実行ファイル経由で起動します（エージェントビュー／バックグラウンドサービス対応）。
- **フルスクリーンのマウスクリック対応**: マルチセレクトメニューと「Other」入力行でマウスクリック操作に対応しました。

このほか、fast modeの復帰不具合、バックグラウンドエージェントへの返信消失、CLI自動更新時のコンテキストウィンドウ誤リセット、多数のメモリリークやパフォーマンス改善など、広範なバグ修正を含みます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.208)

### Claude Code v2.1.209

`claude agents` のバックグラウンドセッションで `/model` などのダイアログがブロックされる不具合を修正しました（過剰なガードの差し戻し）。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.209)

## コミュニティの反応

> 本日の新機能（Claude for Teachers、v2.1.208 / v2.1.209 の各機能）について、X（Grok x_search）で個人ユーザーの実体験・感想投稿を横断検索しましたが、いずれも**該当なし**でした。発表直後のため、公式changelogの引用・ニュース速報・運用Tips共有アカウントの投稿が大半で、「実際に使ってみた」という具体的な体験談は確認できませんでした。

### Claude for Teachers（K-12認証教員向け無償提供）

**該当なし**（本日7/14発表直後のため、個人教員による実体験・感想投稿は未確認。公式引用・ニュース共有・一般論が大半）

### Claude Code v2.1.208: スクリーンリーダーモード

**該当なし**（直近1週間のX投稿で、個人ユーザーの実体験・感想は未確認）

### Claude Code v2.1.208: vimInsertModeRemaps設定

**該当なし**（直近7日間のX投稿で、個人ユーザーの実体験・感想・Tipsは未確認）

### Claude Code v2.1.208: CLAUDE_CODE_PROCESS_WRAPPER

**該当なし**（changelog共有を除き、直接関連する実体験・感想・Tipsは未確認）

### Claude Code v2.1.208: フルスクリーンのマウスクリック対応

**該当なし**（直近1週間のX検索で関連投稿は未確認）

### Claude Code v2.1.209: バックグラウンドセッションのダイアログブロック修正

**該当なし**（検索結果なし）

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic](https://www.anthropic.com/)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
