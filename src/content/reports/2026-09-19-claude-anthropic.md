---
title: "AGENTS.md対応とAccenture評価提携"
summary: "Claude Code v2.1.277 が公開され、CLAUDE.md が無いプロジェクトでの AGENTS.md 読み込み、TaskOutput ツールの廃止、サブエージェント結果のヘッダー付き受け渡しなど、エージェント周りの仕様変更が入りました。Anthropic は Accenture と組み、社内常駐の独立評価者を置く embedded evaluation 提携 (5年で10億ドル超) を発表しています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-19

features:
  - "Accenture との embedded evaluation 提携"
  - "AGENTS.md サポート"
  - "TaskOutput ツール廃止"
  - "サブエージェント結果のヘッダー付き受け渡し"
  - "プロンプト内の不可視Unicode除去"
  - "CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY"
  - "ゲートウェイ upstream の headers: マップ"
  - "/model への Fable 常時表示"
  - "claude -p 起動高速化"
  - "claude -p / Agent SDK のハング修正"
  - "ヘッドレス実行の Haiku 自動タイトル廃止"
  - "/ultrareview のレビュー対象なし時の改善"
  - "sandbox.excludedCommands の除外条件厳格化"
  - "VS Code 拡張: エージェントマップへのバックグラウンドシェル追加"
  - "VS Code 拡張: Copy response ボタンと /copy"
  - "Claude Code on the web: 環境ピッカーの Personal / Organization 分離"
---

## 公式アップデート

### Anthropic: Accenture との embedded evaluation 提携

Accenture と組み、社内に常駐する独立した評価者を置く体制を構築。5年間で計10億ドル以上を投じ、レッドチーミングとアラインメント評価を実施するとしています。

[ソース](https://www.anthropic.com/news)

### Claude Code v2.1.277

エージェント実行まわりの仕様変更を含む大型リリースです。主な項目は以下の通り。

**プロジェクト指示・エージェント**

- AGENTS.md サポートを追加。CLAUDE.md が無いプロジェクトでは AGENTS.md を読み込む。`/config` の「Project instructions」から変更可能 (Bedrock / Vertex / Foundry は未対応)
- TaskOutput ツールを削除。バックグラウンドタスクの出力は Read で出力ファイルを読む方式に変更され、`taskOutputMaxChars` 設定と `TASK_MAX_OUTPUT_LENGTH` は効果を持たなくなった
- サブエージェントの結果を、サブエージェント出力であることを示すヘッダー付き・結果はインデントの形でメインエージェントへ渡すよう変更。結果内のテキストがセッション自身の指示として通らないようにするため
- プロンプト内の不可視 Unicode の書式・タグ文字を除去し、クリーン後のプロンプトを送信前に確認表示するよう変更

**ヘッドレス / SDK**

- `claude -p` と Agent SDK のセッションが、内部エラー後に結果を返さないまま停止しうる問題を修正。エラーを報告し exit code 1 で終了する
- SDK / ヘッドレス (`-p`) のセッション起動を改善。初回ターンがディレクトリごとの CLAUDE.md 探索を待たなくなった
- SDK / IDE 外から起動した `claude -p` のバックグラウンド Haiku 自動タイトル生成リクエストを削除

**ゲートウェイ / プロキシ**

- `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` を追加。外向き経路がフォワードプロキシのみである Claude apps ゲートウェイ向けに、名前解決をローカルで行わずホスト名をプロキシへ渡す
- Claude apps ゲートウェイの upstream に任意の `headers:` マップを追加。プロバイダ前段に自前で置くプロキシへ静的ヘッダーを送信できる

**権限・レビュー・モデル**

- `sandbox.excludedCommands` のグロブ判定を厳格化。複合 Bash コマンドは全パートが一致した場合のみサンドボックス除外となる (従来は一部一致で全体が除外されていた)
- `/ultrareview` のレビュー対象が無い場合のメッセージを改善。どのケースに該当するかを示し、直近コミットをレビューするコマンドを提示。新規リポジトリの初回コミットは全体をレビューする
- Anthropic API で Fable が常に `/model` に表示されるよう変更。組織の設定で無効化されている場合のみグレーアウト表示となる

**VS Code 拡張 / web**

- [VSCode] エージェントマップにバックグラウンドシェルと実行中タスクを Stop 付きで表示。`/tasks` で開ける
- [VSCode] 応答に Copy response ボタンと `/copy` を追加 (あわせてパネルメニューに Sign out 行と `/logout` も追加)
- [Claude Code on the web] Team / Enterprise プランで環境ピッカーを Personal / Organization セクションに分離。管理者は個人環境を組織へ共有できる

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

## コミュニティの反応

本日の X 検索 (直近7日間) では、上記16項目すべてについて、個人ユーザーによる実体験・感想・Tips の投稿は**該当なし**でした。公式アカウント・changelog 転載 bot・宣伝系の投稿は除外しています。

### プロンプト内の不可視Unicode除去 / サブエージェント結果のヘッダー付き受け渡し

本機能への直接の言及ではありませんが、同じ攻撃面 (Markdown やエージェント出力経由の間接プロンプトインジェクション) を扱う日本語記事が同日に出ています。

- [Markdownは新しい攻撃ベクトルになった — AIエージェント時代の間接プロンプトインジェクション入門](https://zenn.dev/sun_asterisk/articles/e774ec49844c5b) (Zenn / Phung Dinh Son) — README.md や SKILL.md に仕込まれた不可視の命令が実行ファイルでもスクリプトでもないため既存の AV / EDR で検知できない、という問題設定

### sandbox.excludedCommands の除外条件厳格化

こちらも本変更そのものへの反応ではありませんが、Claude Code の Bash 権限指定が想定通りに絞れていないケースの検証記事が出ています。

- [サブエージェントの tools で Bash を絞ったつもりになっていないか](https://qiita.com/yurukusa/items/9466eaccf8e4c26cd137) (Qiita / yurukusa) — サブエージェントに `Bash(git diff:*)` だけを指定しても `node --version` が警告なく通った、という2026年9月時点の実測

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
