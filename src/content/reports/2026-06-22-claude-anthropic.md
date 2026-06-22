---
title: "公式更新なし、常駐context削減術が話題"
summary: "本日の公式アップデートはなし（GitHub最新は既報のv2.1.185）。コミュニティではClaude Codeの常駐context削減や、ログイン必須サイトをMCPで調査する際のChrome起動回避など、本日固有の実践Tipsが中心。"
importance: 1
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-22

features:
  - "Claude Code 常駐context削減"
  - "MCPブラウザ調査でのChrome起動回避"
codex_review: "公式停滞日に実務ノウハウが前景化するのは、この領域が機能競争から運用最適化へ移りつつある証拠に見える。派手さはないが、常駐context管理や既存セッション活用は現場の生産性を着実に底上げする地味に重要な話だ。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。GitHub Releases の最新は **v2.1.185（2026-06-20）** で、これは前回レポートで詳述済みです。

## コミュニティの反応

### Claude Code 常駐context削減

#### Tips

> Claude Code の常駐 context を 14% 削った話。`/context` で何もしていないのに常駐していた80.7k tokensを棚卸しし、約11.2k tokens（約14%）削減するまでの試行錯誤を記録。`disabledTools` は存在しなかった、という落とし穴にも言及 — @ishizakahiroshi [Zenn](https://zenn.dev/ishizakahiroshi/articles/20260622-claude-code-context-diet)

### MCPブラウザ調査でのChrome起動回避

#### Tips

> 【保存版】Claude Codeでログイン必須サイトをMCPで調査するなら、新しいChromeを起動させてはいけない。chrome-devtools-mcp や Playwright MCP がMCP専用の新規Chromeを立ち上げてしまう挙動を回避し、ログイン済みセッションを活かす方法 — @4q_sano [Qiita](https://qiita.com/4q_sano/items/f160a8d9137f1c7a9d5e)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
