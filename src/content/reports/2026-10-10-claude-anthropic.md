---
title: "Claude Code v2.1.296でサブエージェント設定を拡充"
summary: "Claude Code v2.1.296で、サブエージェントごとの自動コンパクト設定（autoCompactWindow）、Workflow用のモデル指定、Read ツールの allow_large が追加されました。Sonnet 5.5 のキャッシュ読み取り単価の引き下げもコスト表示に反映されています。Shift-JIS などの非UTF-8ファイルを Edit で壊す不具合も修正されました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-10

features:
  - "Claude Code v2.1.296 Sonnet 5.5 キャッシュ読み取り単価の引き下げ反映"
  - "Claude Code v2.1.296 サブエージェントの autoCompactWindow"
  - "Claude Code v2.1.296 Read ツールの allow_large オプション"
  - "Claude Code v2.1.296 Claude apps gateway の code ポリシーキー"
  - "Claude Code v2.1.296 CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL"
  - "Claude Code v2.1.296 MCPツール説明・サーバー指示の既定上限を4,096文字に拡大"
  - "Claude Code v2.1.296 Edit/NotebookEdit の非UTF-8ファイル保護"
  - "Claude Tag Activityページでのメモリファイル管理"
  - "VS Code 拡張の Claude in Chrome がブラウザ操作前に必ず確認"
  - "Claude Code v2.1.296 CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS"
codex_review: "派手さはないが、サブエージェント単位のコンテキスト管理やモデル指定は、エージェント運用を現場の細かな制御へ進める地味に重要な改善だ。機能追加と堅実な不具合修正が中心で、業界全体を動かすほどの変化ではない。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.296 Sonnet 5.5 キャッシュ読み取り単価の引き下げ反映

`/cost`、ステータスライン、`--max-budget-usd`、SDK のコスト計算で、Sonnet 5.5 のキャッシュ読み取り単価を 100万トークンあたり $0.20 から $0.10 に更新しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 サブエージェントの autoCompactWindow

サブエージェントの frontmatter と `--agents` の定義で `autoCompactWindow` を指定できるようになりました。サブエージェントだけ、メイン会話より早いタイミングで自動コンパクトをかけられます。

あわせて `--debug` の出力で、カスタムエージェントファイルの frontmatter にある未知のフィールド名を表示するようになりました。タイプミスと思われる場合はヒントも出ます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 Read ツールの allow_large オプション

Read ツールに `allow_large` オプションが加わりました。ファイル全体が必要で、コンテキストにも余裕があるときに、通常のサイズ上限を超えるテキストファイルを1回の呼び出しで読み込めます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 Claude apps gateway の code ポリシーキー

Claude apps gateway の `managed.policies[]` に `code` キーが加わりました。中身は `cli` と同じ設定で、Claude Desktop の Code タブにも適用されます。`desktop` と一緒に指定すると、Claude Desktop の gateway モードが有効になります。

gateway まわりでは、ほかに次の変更があります。

- gateway 配下の Desktop Code タブでセッションを開始できないときに、理由を返信として表示するようにしました（gateway の `code` 設定に未対応のマシンも含む）。
- `allowedProviders` に `"gateway"` を含めて配信する gateway が、ユーザー設定でその gateway を指定しているノートPCを締め出していた問題を修正しました。
- 管理設定で `forceLoginMethod` を `gateway` にしていて `forceLoginGatewayUrl` がないマシンで、保存済みの gateway サインインが無視されていた問題を修正しました（2.1.295 で入ったリグレッション）。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL

環境変数 `CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL` が加わりました。Workflow のエージェントをすべて1つのモデルで動かし、ほかのサブエージェントはそれぞれのモデルのまま使えます。

Workflow まわりでは、CRLF 改行のスクリプトファイル（Windows でチェックアウトしたものなど）を拒否していた問題と、約2万階層より深くネストした値を黙って切り詰めていた問題も修正されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 MCPツール説明・サーバー指示の既定上限を4,096文字に拡大

最初から送る MCP ツールの説明と MCP サーバーの指示について、既定の上限を 2,048 文字から 4,096 文字に引き上げました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 Edit/NotebookEdit の非UTF-8ファイル保護

UTF-8 として正しくないファイル（Windows-1252、Shift-JIS、GBK など）で、Edit と NotebookEdit が非ASCII文字をすべて置き換えてしまう問題を修正しました。今後こうしたファイルへの編集は拒否されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Tag Activityページでのメモリファイル管理

Claude Tag Admin 権限を持つメンバーは、Activity ページの Memory タブで、ワークスペースとチャンネルのメモリファイルを作成・編集・削除できるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### VS Code 拡張の Claude in Chrome がブラウザ操作前に必ず確認

VS Code 拡張の Claude in Chrome は、`@browser` で接続したセッションも含めて、すべてのセッションでブラウザ操作の前に確認するようになりました。ターミナル版と同じ動きです。セッション中にサイトを許可すれば、同じ確認は繰り返されません。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

### Claude Code v2.1.296 CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS

環境変数 `CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS` が加わりました。過負荷（529）になったリクエストを再試行するとき、バックオフの最大待ち時間を長めに設定できます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

## コミュニティの反応

### Claude Code v2.1.296 Sonnet 5.5 キャッシュ読み取り単価の引き下げ反映

X/Twitter: 該当なし（個人ユーザーの体験談は見つかりませんでした）

#### Tips

> `cache_control` を付けても請求が下がらないケースについて、キャッシュが効かない原因6つと、`usage` で確かめる手順をまとめた記事。キャッシュ読み取りの単価が下がった今、ヒット率を確かめるときの参考になります（中立・実践的）。 — Persimmoq AI「[Claude のプロンプトキャッシュが効かない 6 つの原因と、usage で確かめる方法](https://zenn.dev/persimmoq/articles/claude-prompt-cache-not-working)」

### Claude Code v2.1.296 サブエージェントの autoCompactWindow

該当なし

### Claude Code v2.1.296 Read ツールの allow_large オプション

該当なし

### Claude Code v2.1.296 Claude apps gateway の code ポリシーキー

該当なし

### Claude Code v2.1.296 CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL

該当なし

### Claude Code v2.1.296 MCPツール説明・サーバー指示の既定上限を4,096文字に拡大

X/Twitter: 該当なし（個人ユーザーの体験談は見つかりませんでした）

#### Tips

> MCP サーバーをゼロから TypeScript で実装し、Claude Code に登録して呼び出すまでの手順をまとめた記事。「console.log を1行書いただけでサーバーが黙る」というつまずきどころも紹介しています。ツール説明の上限変更には触れていませんが、MCP サーバーを作る人向けの記事です（中立・実践的）。 — Yukito / 郷由稀斗「[30分で作るMCPサーバー入門：Claude Codeに繋がる自作ツールをTypeScriptで実装する](https://zenn.dev/yunisuta/articles/ai1-dedup-ai-2026-08-12-ai-2026-08-12-us-8hg4ha)」

### Claude Code v2.1.296 Edit/NotebookEdit の非UTF-8ファイル保護

該当なし

### Claude Tag Activityページでのメモリファイル管理

該当なし

### VS Code 拡張の Claude in Chrome がブラウザ操作前に必ず確認

該当なし

### Claude Code v2.1.296 CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS

該当なし

## ソース

- [Claude Code v2.1.296 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
