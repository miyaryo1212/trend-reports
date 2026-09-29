---
title: "claude --desktop 追加、背景コマンドに実行時間上限"
summary: "Claude Code v2.1.285 が公開。claude --desktop、CLAUDE_CODE_DISABLE_WEB_FETCH、allowedProviders 管理設定などを追加し、run_in_background のコマンドに既定30分・最大2時間の上限を設定。カスタム ANTHROPIC_BASE_URL 経由でも 1M コンテキストを使うようになりました。Anthropic Research は GLM-5.3 のサイバー能力拡散と利用者インタビュー調査を公開。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-30

features:
  - "GLM-5.3 と高度なサイバー能力の拡散 (Anthropic Research)"
  - "Anthropic Interviewer による AI 利用者調査"
  - "claude --desktop"
  - "バックグラウンド Bash/PowerShell の実行時間上限"
  - "カスタム ANTHROPIC_BASE_URL 経由セッションの 1M コンテキスト対応"
  - "allowedProviders 管理設定"
  - "CLAUDE_CODE_DISABLE_WEB_FETCH"
  - "claude plugin configure <plugin>"
  - "/resume でバックグラウンド実行中セッションを開けるように"
  - "オンデマンド診断ツール (VS Code)"
  - "claude -p / Python Agent SDK の auto モード既定化"
  - "MCP サーバー名 widgets の予約"
codex_review: "派手なモデル発表はないが、実行時間上限やプロバイダ制御は、エージェントを実務に組み込む際の運用負債を減らす地味な前進だ。研究面のサイバー能力報告は重い論点だが、製品更新と並べたことで焦点が散って見える。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.285

2026-09-29 公開。新モデルの追加はなく、コマンド・管理設定の追加と大量の修正が中心のリリースです。

- **`claude --desktop`** を追加。現在のディレクトリで Claude デスクトップアプリを開く。`--continue` / `--resume <id>` と併用すると、そのセッションを開いた状態で起動する。
- **バックグラウンド Bash/PowerShell の実行時間上限**。`run_in_background` で起動したコマンドは、その `timeout` 設定に従い既定30分・最大2時間で停止する。停止した際は Claude に通知される。
- **カスタム `ANTHROPIC_BASE_URL` 経由セッションの 1M コンテキスト対応**。1M コンテキストを持つモデル (Opus 4.7+ / Sonnet 5+ / Fable) で 1M を使うようになった。ゲートウェイ側が 200K で止まる場合は `/autocompact 200k` を実行する。
- **`allowedProviders` 管理設定**を追加。マシンが利用できる API プロバイダを制限できる (Anthropic API、カスタムエンドポイント、Bedrock、Mantle、Vertex AI、Foundry、AWS 上の Claude Platform、Cloud gateway)。
- **`CLAUDE_CODE_DISABLE_WEB_FETCH`** を追加。環境変数で WebFetch ツールを無効化できる。あわせて `CLAUDE_CODE_NONSTREAMING_TIMEOUT_RETRIES` も追加され、タイムアウトした非ストリーミングのフォールバックリクエストの再送回数に上限を設けられる。
- **`claude plugin configure <plugin>`** を追加。プラグインの設定項目と未設定の項目を一覧表示し、`--values-stdin` を付けると標準入力から読んだ値を保存する。`claude plugin install --config` では `<server>.<key>=<value>` 形式が使えるようになり、同梱 `.mcpb` MCP サーバーの設定をインストール時に渡せる。
- **`/resume` でバックグラウンド実行中のセッションを開けるように**。従来は拒否されていた。`claude --resume <id> "prompt"` とするとそのプロンプトが次のターンとして送られる。
- **`claude -p` / Python Agent SDK の auto モード既定化**。サードパーティプロバイダ利用時やテレメトリ無効時も、権限モードが未設定なら対話セッションと同様に auto モードで起動する (`--permission-mode` の指定が優先)。
- **MCP サーバー名 `widgets` の予約**。クラウドセッションとセルフホストランナーでは、`widgets` および `widgets_` のような近い綴りの独自サーバーが読み込まれなくなる。該当する場合は改名が必要。
- **[VS Code] オンデマンド診断ツール**を追加。パネル内の Claude が、ファイル編集直後に限らず任意のタイミングで Problems パネルの現在のエラー・警告を読めるようになった。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.285)

### GLM-5.3 と高度なサイバー能力の拡散 (Anthropic Research)

GLM-5.3 が安全対策なしで公開され、単純な手法で 64〜100% の回避が可能だったと報告されています。

[ソース](https://www.anthropic.com/research)

### Anthropic Interviewer による AI 利用者調査

Claude 利用者へのインタビューを募集する新しい研究。回答は任意で一般公開できる形式です。

[ソース](https://www.anthropic.com/research)

## コミュニティの反応

X 検索 (Grok x_search) では、本日対象とした機能について個人ユーザーの実体験に基づく投稿は取得できませんでした。

### claude --desktop

該当なし

### バックグラウンド Bash/PowerShell の実行時間上限

該当なし

### カスタム ANTHROPIC_BASE_URL 経由セッションの 1M コンテキスト対応

該当なし

### allowedProviders 管理設定

該当なし

### CLAUDE_CODE_DISABLE_WEB_FETCH

該当なし

### claude -p / Python Agent SDK の auto モード既定化

#### 日本語コミュニティ

auto モードの既定化が進む一方、権限設定とは別レイヤの安全チェックに触れた記事が出ています。

- [Claude Codeに全権限を渡しても止まる操作がある — 権限モードと安全チェックは別物だった](https://zenn.dev/zeroyen_dev/articles/claude-code-permission-still-blocked) (Zenn / ゼロ円開発ログ) — `bypassPermissions` で許可ルールを100件入れても `Blocked by classifier.` で拒否される操作があり、権限モードと auto モードの分類器は別物だと整理したもの

### GLM-5.3 と高度なサイバー能力の拡散 (Anthropic Research)

該当なし

### Anthropic Interviewer による AI 利用者調査

該当なし

### claude plugin configure <plugin>

該当なし

### /resume でバックグラウンド実行中セッションを開けるように

該当なし

### オンデマンド診断ツール (VS Code)

該当なし

### MCP サーバー名 widgets の予約

該当なし

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.285](https://github.com/anthropics/claude-code/releases/tag/v2.1.285)
- [Anthropic Research](https://www.anthropic.com/research)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
