---
title: "Claude Code v2.1.203/204公開、ログイン失効警告と⏸バッジ追加"
summary: "Claude Code v2.1.203（約40件の修正を含む大型更新）とv2.1.204がリリース。ログイン期限切れの事前警告、手動許可モードの⏸バッジ、MCP roots/listへの作業ディレクトリ追加、VS CodeのRemote Control全セッション有効化トグル、SessionStartフックのストリーミング修正が入った。X上では失効警告と⏸バッジに実利用の声が出た一方、Manualデフォルト化による夜間ジョブの停止を不便とする反応も残る。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-09

features:
  - "ログイン期限切れ事前警告"
  - "手動許可モードの⏸バッジ"
  - "MCP roots/listへ作業ディレクトリ追加"
  - "Remote Control全セッション有効化トグル"
  - "SessionStartフックのストリーミング修正"
codex_review: "派手さはないが、Claude Codeが“実験道具”から“常用インフラ”へ寄る過程としてはかなり重要だと思う。とくに失効警告や権限表示は地味だが、運用の信用コストを下げる効き方をする。"
codex_importance: 2
---

## 公式アップデート

前回レポート時点の最新は v2.1.202 でしたが、その後 **v2.1.203**（2026-07-07）と **v2.1.204**（2026-07-08）がリリースされました。以下は本日新規の差分です。

### Claude Code v2.1.203

- **ログイン期限切れの事前警告**: ログインが失効しそうになると警告を表示し、バックグラウンドセッションが中断される前に再認証できるようにした。
- **手動許可モードの⏸バッジ**: manual permission mode時にフッターへグレーの ⏸ バッジを表示し、現在のモードを常時可視化するようにした。
- **MCP `roots/list` へ作業ディレクトリを追加**: セッションの追加作業ディレクトリを MCP の `roots/list` に含め、対象が変わったときに `notifications/roots/list_changed` を送信するようにした。
- **[VS Code] Remote Control 全セッション有効化トグル**: VS Code 設定に「Enable Remote Control for all sessions」トグルを追加した。
- そのほか多数の修正（約40件）: シェルでエクスポートした `ANTHROPIC_BASE_URL` がバックグラウンド/エージェントビューのセッションで欠落し、APIキーがデフォルトエンドポイントへ送られて401になる不具合、多数のworktreeを持つリポジトリでの `Bash` の「argument list too long」、バックグラウンドデーモンの自動アップグレード失敗が実行中セッションを黙って全滅させる問題、などを修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.203)

### Claude Code v2.1.204

- **SessionStartフックのストリーミング修正**: headlessセッションで SessionStart フック中にイベントが流れず、リモートワーカーがフック実行中にidle-reapされ得る不具合を修正した。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.204)

## コミュニティの反応

> 本日抽出した新機能について、X検索でヒットした個人ユーザーの反応は「ログイン失効の事前警告」と「⏸バッジ／手動許可モード」に限られます。MCP `roots/list`・Remote Control全セッショントグル・SessionStartフック修正は、直近1週間で個人の実体験投稿を確認できませんでした（公式リリースノートの転載・bot・要約が中心）。

### ログイン期限切れ事前警告

#### ポジティブ

> v2.1.203でログイン期限切れ前に警告が出るようになり、background agentsを裏で走らせっぱなしにしても認証切れで途中停止する事故を防げるようになった。置き竿スタイルの運用がやりやすくなった。 — @shima0hide [X](https://x.com/shima0hide/status/2074639334419153203)

### 手動許可モードの⏸バッジ

#### ポジティブ

> Always Allowをオフにしていると手動で毎回許可を求められるが、「何をどう変えるか」を常に把握できて安心できる。 — @umin27 [X](https://x.com/umin27/status/2074473018726981788)

#### ネガティブ

> v2.1.200以降Manualがデフォルトになったせいで、夜中にスケジュールしたジョブが許可待ちで止まってしまうのが不便。 — @modernmindai [X](https://x.com/modernmindai/status/2074486220483391891)

> 手動許可か完全バイパスしかなく中間的な選択肢がないため、毎回ポチポチするのはやや不便。 — @spgkr [X](https://x.com/spgkr/status/2074348757580497059)

#### Tips

> 信頼できる自分のローカルプロジェクトでは `claude --dangerously-skip-permissions` を使い毎回の承認をスキップしている（不慣れなコードベースでは使わない）。 — @isacciobota [X](https://x.com/isacciobota/status/2072621302041718881)

> v2.1.200以降ステータスバーの表示が「Manual」に統一され、`--permission-mode manual` エイリアスも追加されて迷いが減った。 — @cc_lab_jp [X](https://x.com/cc_lab_jp/status/2074768051816349991)

### MCP roots/listへ作業ディレクトリ追加

該当なし

### Remote Control全セッション有効化トグル

該当なし

### SessionStartフックのストリーミング修正

該当なし

> なお、v2.1.203/204全体を扱う解説記事として、APIキー誤送信バグとバックグラウンド機能の大型修正をまとめたものがQiitaに投稿されています。 — @picnic [Qiita](https://qiita.com/picnic/items/90b07be747c7966124a1)

## ソース

- [GitHub - Claude Code Releases (v2.1.203)](https://github.com/anthropics/claude-code/releases/tag/v2.1.203)
- [GitHub - Claude Code Releases (v2.1.204)](https://github.com/anthropics/claude-code/releases/tag/v2.1.204)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
