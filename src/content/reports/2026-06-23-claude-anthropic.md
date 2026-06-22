---
title: "Claude Code v2.1.186公開、MCP認証CLIなど多数追加"
summary: "Claude Code v2.1.186がリリースされ、claude mcp login/logoutによるCLI認証、!bashコマンドの自動応答、バックグラウンドsubagentの権限プロンプト昇格など多数の機能が追加。コミュニティでは新機能への直接反応は薄い一方、Agent Teamsの実用感やworktreeデータ消失バグ、Claude APIの広範囲障害が話題に。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-23

features:
  - "Claude Code v2.1.186"
  - "claude mcp login/logout"
  - "! bashコマンドの自動応答 (respondToBashCommands)"
  - "バックグラウンドsubagentの権限プロンプト"
  - "/review を code-review medium エンジンに統一"
  - "Agent Teams"
  - "worktree データ消失バグ (#70069)"
  - "Claude API 主要モデル障害 (2026-06-22)"
codex_review: "CLI認証や権限昇格は地味だが運用摩擦を確実に減らす改善で、実務寄りの進化としては好感が持てる。一方で障害とworktree不具合が同時に話題化したのは、信頼性面の未成熟さも強く印象づけた。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.186

前回レポート以降、GitHub Releases に **v2.1.186（2026-06-22）** が公開されました。主な新機能・変更は以下のとおりです。

**新機能**

- `claude mcp login <name>` / `claude mcp logout <name>` を追加。対話的な `/mcp` メニューを開かずにCLIからMCPサーバーを認証でき、`--no-browser` のstdinリダイレクトでSSH越しの認証完了にも対応。
- `!` で実行したbashコマンドの出力に対し、Claudeが自動で応答するようになった。従来の「コンテキストとして保持するだけ」の挙動に戻すには settings.json で `"respondToBashCommands": false` を設定。
- バックグラウンドsubagentの権限プロンプトが、自動拒否をやめてメインセッションに昇格表示されるよう変更。どのエージェントの要求かを示し、Escでそのツールだけを拒否できる。
- `/workflows` のエージェント詳細ビューに、`f` キーでのステータスフィルタを追加。
- `/plugin` の Installed タブに「Skills」セクションを追加。
- `teammateMode: "iterm2"` 設定を追加（自動モードで `it2` CLI が見つからない場合は警告）。
- `awsAuthRefresh` 設定時、`/login` に「Claude Platform on AWS - refresh credentials」オプションを追加。

**変更**

- `/review <pr>` を `/code-review medium` と同じレビューエンジンに統一。
- `CLAUDE_CODE_MAX_RETRIES` の上限を15に変更。無人実行では `CLAUDE_CODE_RETRY_WATCHDOG` の利用が推奨に。
- メモリ機能の改善：サイズ上限に近づくと `MEMORY.md` インデックスのコンパクトを促すリマインダーを表示。
- skill frontmatter の `display-name` / `default-enabled` / `fallback` / `metadata.*` が kebab-case・snake_case・camelCase を許容。

このほか、スリープ復帰後のストリーミング失敗、subagent関連の表示不具合、`Agent(type)` の deny ルールが named subagent に効かない問題、Workflow `agent({schema})` のスキーマ検証失敗での無限ループなど、多数の修正を含みます。

[Claude Code Releases (v2.1.186)](https://github.com/anthropics/claude-code/releases/tag/v2.1.186)

## コミュニティの反応

### Claude Code v2.1.186 の新機能

X/Twitter上では、`claude mcp login/logout`、`!` bashコマンドの自動応答、バックグラウンドsubagentの権限プロンプト、`/review` のエンジン統一など v2.1.186 の各機能について、直近1週間の個人ユーザーによる実体験・感想投稿は確認できませんでした（**該当なし**）。リリース直後のため、現場での評価が出てくるのはこれからとみられます。

### Agent Teams

#### Tips

> Claude Code の Agent Teams を使ってみた感想。複数エージェントに順番に意見を聞いたり異なる視点で検討させたりする「総当たり」的な使い方が簡単にできて便利だった、という実用レポート — @todiii [Qiita](https://qiita.com/todiii/items/002152f787abd921fa0e)

### worktree データ消失バグ (#70069)

#### ネガティブ

> worktreeで隔離したはずが、編集が全部mainに着地していた——Claude Codeの静かなデータ消失。`claude -w <名前>` でworktreeに隔離したつもりの作業が本流(main)に書き込まれていたという不具合の報告（起票 #70069）。AIエージェントに作業を任せる際の「隔離していれば安全」という前提に注意を促す内容 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/105542b22c84422aebef)

### Claude API 主要モデル障害 (2026-06-22)

#### ネガティブ

> 2026年6月22日、Claude API で Opus 4.8 / 4.7 / 4.6、Sonnet 4.6、Haiku 4.5 という主要モデルが広範囲にエラー率上昇を起こしたインシデントを整理し、本番運用での対策をまとめた記事 — @picnic [Qiita](https://qiita.com/picnic/items/64d12430e8946cc6d677)

> ClaudeCode の Opus 4.8 で開発中に「2つの人格が現れて言い争いを始めた」という現象を生ログ付きで報告。同時期に複数人がOpus 4.8でツール呼び出し破損・出力汚染を踏んでいる流れの一例 — @tanaka_taro_JP_KYUSYU [Qiita](https://qiita.com/tanaka_taro_JP_KYUSYU/items/3da870e4e784fa1889dd)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
