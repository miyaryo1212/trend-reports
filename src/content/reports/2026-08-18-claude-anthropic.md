---
title: "Claude Code v2.1.234、使用量リセットで自動継続"
summary: "Claude Code v2.1.234 が公開され、claude.ai の利用上限リセット時にセッションを自動再開する機能、GitLab MR バッジ、NT名前空間パスの全面拒否によるNTLM漏洩経路の封鎖が入りました。claude-api スキルは約200k+トークンから約25kへ削減され、作業中の /permissions・/add-dir 実行も可能になっています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-18

features:
  - "Claude Code v2.1.234"
  - "使用量リセット時の自動セッション継続"
  - "GitLabマージリクエストバッジ"
  - "NT名前空間パス (\\??\\) の全面拒否"
  - "claude-apiスキルのコンテキスト削減"
  - "作業中の /permissions・/add-dir 実行"
  - "/goal の長時間バックグラウンドタスク自動チェックイン"
  - "Remote Controlのeffort同期"
  - "ユーザープロンプトのMarkdownレンダリング"
  - "CLAUDE_CODE_PROJECT_DIR_NAME 環境変数"
codex_review: "自動継続や作業中コマンド解禁は派手さ以上に運用の摩擦を削る改善で、かなり実務寄りだと思う。一方で本当に効いているのはNTLM漏洩経路の封鎖とコンテキスト削減で、こちらは地味だが重要だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.234

2026年8月17日に公開されました。機能追加・セキュリティ強化・多数のバグ修正を含みます。

[Claude Code Releases - v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)

### 使用量リセット時の自動セッション継続

claude.ai の利用上限がリセットされたとき、Claude Code がセッションを自動的に再開します。`/config` の「Continue automatically at usage limit」でオフにできます。

### GitLabマージリクエストバッジ

GitLab リモートを持つリポジトリで `glab` CLI が認証済みの場合、フッターとステータスラインに `MR !N` が draft / pending / green の状態付きで表示されます。

### NT名前空間パス (`\??\`) の全面拒否

リモートファイル読み込み、セッション復元、CLAUDE.md のインクルード、ワークフロースクリプト、ファイルアップロードのすべてで Windows NT 名前空間パス (`\??\`) を拒否するようになりました。事前承認を経ないファイルアクセス経路に残っていた NTLM 認証情報の漏洩ベクタを塞ぐものです。

### claude-apiスキルのコンテキスト削減

ビルトインの `claude-api` スキルが参照ドキュメントをオンデマンド読み込みに変更され、ロード時のコンテキストコストが約200k+トークンから約25kトークンへ削減されました。

### 作業中の /permissions・/add-dir 実行

Claude が応答している最中でも `/permissions` を開けるようになり、ルール変更は現在のターンの残りに即座に適用されます。`/add-dir <path>` も作業中に実行可能になり、`/add-dir`、`/autocompact`、`/theme`、`/help`、`/config`、`/advisor` のダイアログがフルスクリーン TUI でターン途中に開きます。

### /goal の長時間バックグラウンドタスク自動チェックイン

バックグラウンドタスクがゴールを30分以上待たせている場合、Claude が無期限に待つのではなく状況を確認しにいくようになりました。`CLAUDE_CODE_GOAL_CHECKIN_MINUTES=0` で無効化できます。あわせて、回復不能なエラー (認証失効、クレジット残高切れ、コンテキストオーバーフローなど) でターンが終了した際は、`/goal` が armed のまま残らず通知付きで自身をクリアします。

### Remote Controlのeffort同期

スマートフォンや claude.ai/code で選んだ effort が、ターミナル・Desktop・VS Code がホストするセッションにも適用されるようになりました。セッション側も自身の effort レベルを接続中のクライアントへ公開します。

### ユーザープロンプトのMarkdownレンダリング

トランスクリプト上で、自分が入力したプロンプトも返信と同様に Markdown レンダリングされます (シンタックスハイライト付きコードブロック、インラインコード、リスト)。

### CLAUDE_CODE_PROJECT_DIR_NAME 環境変数

セッションごとに独自の設定ディレクトリを与えるホスト向けに、プロジェクト別トランスクリプトディレクトリの短い名前を指定できるオプション環境変数が追加されました。

## コミュニティの反応

### Claude Code v2.1.234

#### ポジティブ

> Claude Code 2.1.234が出た。GitLabのMRステータスがフッターに表示されるようになり、利用制限のリセット後に自動でセッションを再開してくれる機能も追加されている。セキュリティ周りの修正もしっかり入っている — @aria_ai_tools [出典](https://x.com/aria_ai_tools/status/2089456915889971695)

### GitLabマージリクエストバッジ

#### ポジティブ

> Claude Code 2.1.233でGitLab MR URLが `--worktree` に対応し、isolated worktreeでMRレビューがしやすくなった。メイン作業を汚さずdiff確認やチェックが効率的 — @ashutosh_270497 [出典](https://x.com/ashutosh_270497/status/2088620474591056051)

> Claude CodeでGitLab MR URLを `--worktree` に渡すとagents viewに `!N` としてMRが表示され、レビューがスムーズ — @coscosmico [出典](https://x.com/coscosmico/status/2088980188352684138)

### claude-apiスキルのコンテキスト削減

#### ポジティブ

> Claude Codeのトークン使用量を75%削減するGitHubリポジトリを実際に使ってみて、レスポンス圧縮の効果がすごかった (例: 1180トークン→159トークン) — @0x_kaize [出典](https://x.com/0x_kaize/status/2088230059513410040)

#### Tips

> claude-apiスキルのコンテキスト管理で「250kトークンも必要ない」との気づきを共有 — @KyleEasterly [出典](https://x.com/KyleEasterly/status/2087004795274203420)

> claude-api / Claude Codeの文脈で、context windowを明示的にcompactして500kを超えないようにする実践例 — @_anks [出典](https://x.com/_anks/status/2088924065298059572)

### /goal の長時間バックグラウンドタスク自動チェックイン

#### ポジティブ

> Claude Codeに壊れたリポジトリを渡して20分放置したら、47ファイル修正・12バグ修正・PR準備完了。長時間バックグラウンドで自走する体験が「人に仕事を任せる」感覚で最高だった — @magsimich [出典](https://x.com/magsimich/status/2087588528246972418)

> Claude Codeが週末に長時間タスクを承認なしでこなせるよう大幅改善。長時間待機の自動処理が実用的になった — @DannyThorntonAG [出典](https://x.com/DannyThorntonAG/status/2089354201268703706)

#### ネガティブ

> `/goal` が完全に無視されてタスクが途中で止まる。Claudeが積極的に作業を避けているように感じる — @angerman [出典](https://x.com/angerman/status/2087791845510447370)

### その他の機能について

「使用量リセット時の自動セッション継続」「NT名前空間パスの全面拒否」「作業中の /permissions・/add-dir 実行」「Remote Controlのeffort同期」「ユーザープロンプトのMarkdownレンダリング」「CLAUDE_CODE_PROJECT_DIR_NAME 環境変数」については、個人ユーザーの実体験ベースの投稿は該当なしでした。いずれも v2.1.234 で追加されたばかりのため、実運用での言及がまだ出ていない状況です。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
