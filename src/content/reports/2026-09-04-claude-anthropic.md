---
title: "Claude Code v2.1.259 組織向けMCP配布と無人実行"
summary: "本日の公式アップデートは Claude Code v2.1.259 のみ。組織が全ユーザーにHTTP/SSE MCPサーバーを配布できる managedMcpServers、無人headless実行向けの --permission-prompts none、GitLab MR認識が追加され、並行セッションで ~/.claude.json の変更が失われる問題も修正されました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-04

features:
  - "Claude Code v2.1.259 managedMcpServers"
  - "Claude Code v2.1.259 --permission-prompts none"
  - "Claude Code v2.1.259 GitLab MR認識"
  - "Claude Code v2.1.259 同時実行セッションの設定巻き戻し修正"
codex_review: "派手なモデル更新ではないが、企業配布MCPと無人実行の整備はClaude Codeを個人ツールから運用基盤へ寄せる動きで地味に重要だと思う。GitLab対応より設定巻き戻し修正の方が現場価値は大きい。"
codex_importance: 3
pipeline_warnings:
  - "このレポートは 2026-09-04〜09-06 に発生した claude -p の OAuth 失効による自動生成停止を、2026-09-06 に後追いで補完したものです。当日の sitemap 差分キャッシュは障害期間中に消費済みのため、公式 news インデックス/RSS を代替ソースとして再構成しています。"
---

## 公式アップデート

### Claude Code v2.1.259

新機能の追加とバグ修正を含むリリースです。主な内容は以下の通りです。

- **`managedMcpServers` 管理設定の追加**: 組織が HTTP/SSE の MCP サーバーを全ユーザーに配布できます。エントリの形式は `.mcp.json` と同じで、実行コマンドを指定したエントリはスキップされます
- **`--permission-prompts none` の追加**: 無人の headless ホスト向けのフラグ。確認プロンプトが出る操作は自動的に拒否され、アクティブな権限モード (auto モードを含む) の判断はそのまま維持されます
- **GitLab マージリクエストの認識**: `glab mr create/merge/close/reopen/note/update` を認識し、折りたたみツールサマリーに `MR !N` として表示、フッターの MR バッジも更新されます
- **同時実行セッションの設定巻き戻しを修正**: 並行セッションが互いの `~/.claude.json` の変更を無言で戻してしまう問題。多数のセッションを同時実行してもワークスペースの信頼設定がリセットされず、MCP/プロジェクトの状態も失われなくなりました

このほか、`claude plugin validate` への `--json` 追加、Bash の `Read()` 拒否ルールがオプション値・`git diff`/`git grep` のファイル指定・`cd DIR && cat FILE` 形式を素通りしていた問題の修正、OAuth トークン更新時のプロンプトキャッシュ無効化の修正、管理設定ファイルがパース不能な場合に起動を拒否してソースを明示する変更など、多数の修正が含まれます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)

## コミュニティの反応

### Claude Code v2.1.259 managedMcpServers

該当なし (直近7日間で、この機能を実際に使った個人ユーザーの投稿は確認できませんでした。言及の大半は Changelog の転載でした)

### Claude Code v2.1.259 --permission-prompts none

#### ポジティブ

> `--permission-prompts none` で無人ヘッドレス実行時に確認プロンプトで止まらず自動拒否されるようになった。CI やバッチ作業でセッションがタイムアウトする問題が解消されそう — @gzonelee [X](https://x.com/gzonelee/status/2096105563952468260)

> 確認が必要な操作は自動拒否。「止まらないけど勝手に進まない」仕様がヘッドレス用途にちょうどいい — @takeyou_ai [X](https://x.com/takeyou_ai/status/2096010702930448574)

> ようやく無人実行が可能になり、permission が必要なジョブは拒否されるだけ。ヘッドレスエージェントにぴったり — @Liam2307 [X](https://x.com/Liam2307/status/2095394155019006364)

#### ネガティブ

該当なし

#### Tips

該当なし

### Claude Code v2.1.259 GitLab MR認識

該当なし (直近7日間で、この変更に触れた個人ユーザーの実体験投稿は確認できませんでした)

### Claude Code v2.1.259 同時実行セッションの設定巻き戻し修正

#### ポジティブ

> 複数セッション同時運用時の `~/.claude.json` 上書き問題に心当たりがあった。クライアント案件を並行で回す際の MCP サーバー接続トラブルが解消された実感がある — @nao23s [X](https://x.com/nao23s/status/2095680392003002556)

#### ネガティブ / Tips

該当なし

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
