---
title: "Claude Code - 2026-03-24"
channel: "Claude Code"
channelId: "claude-code"
date: 2026-03-24
features:
  - "--bare フラグ"
  - "Channels (Discord/Telegram連携)"
  - "rate_limits フィールド"
---

## 公式アップデート

### v2.1.81 (2026-03-20)

最新リリース。主な変更点:

- **--bare フラグ追加**: スクリプト用 `-p` 呼び出し向け。hooks、LSP、plugin sync をスキップ
- **--channels パーミッションリレー**: permission capability を宣言したチャンネルサーバーがツール承認プロンプトをスマホに転送可能に
- **バグ修正**: 複数セッション同時実行時のOAuthトークン再認証問題ほか多数

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.81)

### v2.1.80 (2026-03-19)

- **rate_limits フィールド追加**: statuslineスクリプト向けレート制限使用状況表示
- **--channels (research preview)**: MCPサーバーがセッションにメッセージをプッシュ可能に
- **パフォーマンス**: 大規模リポジトリでの起動時メモリ使用量を約80MB削減

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.80)

## コミュニティの反応

### Channels機能

#### ポジティブ

> Claude Code Channelsでスマホからコードの修正を指示できるようになった。電車の中からでも使える — @sora_biz [Zenn](https://zenn.dev/sora_biz/articles/claude-code-channels-windows-guide)

#### Tips

> channels機能を使って5プロセス並列でClaude Codeを走らせ、それぞれにDiscordチャンネルを割り当てた実験 — @thyella [Zenn](https://zenn.dev/thyella/articles/0c38675ea0a4b1)

### AIコーディングの実践と課題

#### ポジティブ

> Web開発未経験者がClaude Codeで912商品のブライダルリング診断アプリを3週間で作成。「全部AIに任せればOK」は幻想だが、作れた — @masaru [Zenn](https://zenn.dev/perfect_choice/articles/ed8b650b66e30c)

#### ネガティブ

> AIコーディングで速くなったのに、なぜか前より疲れている。実装は速くなったが別の認知負荷が増えている — @shingoirie [Zenn](https://zenn.dev/shingoirie/articles/210b4f6d73ec6c)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
