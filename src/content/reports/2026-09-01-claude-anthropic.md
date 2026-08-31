---
title: "v2.1.252 はバグ修正のみ、Mac の Bash 失敗を解消"
summary: "Claude Code v2.1.252 が 8/31 にリリース。新機能はなく、一部 Mac での Bash 実行失敗や、巨大な失敗出力によるリクエスト上限超過など 4 件のバグ修正のみです。X では「セッションが止まりにくくなった」と安定化を歓迎する声が出ています。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-01

features:
  - "v2.1.252 リリース (バグ修正のみ)"
  - "Bash コマンドの \"task output swap refused\" 修正"
  - "大容量の失敗出力によるリクエスト上限超過を修正"
codex_review: "派手さはないが、CLI系AIツールは新機能より「止まらないこと」の価値が大きく、この種の安定化は実務導入をじわじわ前進させる。とはいえ業界全体を動かすニュースとしてはやや小粒です。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.252 (2026-08-31)

8/28 の v2.1.251 以来となる新バージョン。新機能の追加はなく、修正は以下の 4 件のみです。

- 一部の Mac で Bash コマンドが `task output swap refused (tasks dir moved or linked)` で失敗する問題を修正
- `.claude/settings.local.json` がまだ存在しないプロジェクトで「always allow」が保存されない問題を修正
- claude.ai への接続が劣化している際、Claude Desktop / VS Code がホストする Remote Control セッションがツール完了後に数分間ストールする問題を修正
- バックグラウンドタスクの通知に非常に大きな失敗出力 (例: ディスクフル時の git エラー) が含まれると、会話が API リクエストサイズ上限を超える問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.252)

## コミュニティの反応

### v2.1.252 リリース (バグ修正のみ)

#### ポジティブ

> Remote Control の安定化、background task の API 制限回避、always allow の保存、Mac の Bash エラー解消といった修正を日常使いで実感でき、セッションが止まりにくくなった — @SamiBizConsult [X](https://x.com/SamiBizConsult/status/2094526245228675409)

### Bash コマンドの "task output swap refused" 修正

該当なし (直近 7 日間の X 投稿に、この不具合・修正に直接言及した個人の実体験は見つかりませんでした)

### 大容量の失敗出力によるリクエスト上限超過を修正

#### ポジティブ

> 「大きな失敗出力で会話が API 要求上限を超える問題」が修正され、地味にストレスだった挙動が解消されて開発に集中しやすくなった — @aria_ai_tools [X](https://x.com/aria_ai_tools/status/2094517208299008251)

> v2.1.252 の更新内容として巨大なエラー出力による API 上限超過を含む複数不具合の修正を挙げ、Mac 環境での安定性が向上した点を紹介 — @haboshiastra [X](https://x.com/haboshiastra/status/2094523905285447779)

### 日本語コミュニティ (Zenn / Qiita) の本日の動き

#### ネガティブ

> `du -sh ~/.claude` が 6.57 GB。内訳は projects 2,788 MB (10,138 ファイル)、jobs 2,780 MB (10,307 ファイル) で、うち 2.78 GB は止まったまま放置されたジョブが握るログの丸ごとコピーだった — saito [Zenn](https://zenn.dev/tsutomusaito/articles/claude-dir-disk-usage-ja)

> v2.1.233 の changelog にある `CLAUDE_CODE_TOOL_MEMORY_LIMIT` (memory cgroup 制限) は macOS/Darwin では効かず、`--debug` でも何も警告が出ない — Clopy [Zenn](https://zenn.dev/clopy/articles/claude-tool-memory-limit-macos-gate)

> MCP サーバーを 16 本まで増やしても応答時間は 0 本のときと同じ (3.72/3.05 秒 → 3.63/3.42 秒、入力増は 1.08%)。ただし応答しない 1 本が混ざると毎回およそ 33 秒止まり、エラーは 1 文字も出ず終了コードは 4 回とも 0 だった — ぬまーん [Zenn](https://zenn.dev/numarn/articles/mcp-many-servers-connect-stall-handson)

#### Tips

> `/code-review` の effort レベルで何が変わるかを v2.1.251 のバイナリからプロンプトを読んで確認。effort は「考える時間の長さ」ではなく、探索の角度数・候補数・検証の有無を変えていた — ながたく [Zenn](https://zenn.dev/takna/articles/claude-code-code-review-effort)

> ccusage と Claude Code のログを紐づけ、「どんなプロンプトがトークン消費を押し上げているか」をセッション単位で調べる手順 — tomoasleep [Qiita](https://qiita.com/tomoasleep/items/e9e66d8ca90fdb5c9af4)

> 「コミットメッセージにセッション URL が既定で付く」が Hacker News で 135pt を集めていたので、自社の実運用 412 コミットを確認したら該当は 0 本だった — Umamon [Qiita](https://qiita.com/Umamon/items/da707792cdbe5e7443f7)

> UI/UX デザイナー 3 人が別々のプロダクトで Claude Team の Premium シート (Desktop / Code / Design) を約 1 ヶ月、実業務で使った検証レポート — BABY JOB 開発部 [Zenn](https://zenn.dev/babyjob/articles/design-team-claude-1month)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
