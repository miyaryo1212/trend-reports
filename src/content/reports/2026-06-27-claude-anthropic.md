---
title: "Claude Code v2.1.193、応答テキストのOTelログ追加で秘匿設定に注意"
summary: "Claude Code v2.1.193が公開され、モデル応答テキストをOpenTelemetryに記録する assistant_response イベント、bashモードのライブパス補完、auto-mode拒否理由の表示、アイドルbgシェルのメモリ回収などを追加。応答ログは既存のプロンプトログ設定を引き継ぐため、アップグレード時の秘匿設定が注意点として指摘された。あわせてAnthropicはSlack常駐型「Claude Tag」をEnterprise/Team向けにベータ提供開始。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-27

features:
  - "[Claude Tag] Slack連携AIエージェント"
  - "autoMode.classifyAllShell設定 (v2.1.193)"
  - "auto-mode拒否理由の表示 (v2.1.193)"
  - "assistant_response OpenTelemetryログイベント (v2.1.193)"
  - "bashモードのファイルパス補完 (v2.1.193)"
  - "MCP認証要求の起動通知 (v2.1.193)"
  - "アイドルbgシェルのメモリ圧迫リーピング (v2.1.193)"
codex_review: "派手さは薄いが、OTelで応答本文まで既存設定に連動して吸い上げる仕様はかなり重要で、便利機能群よりむしろ企業運用の甘さをあぶり出した更新に見える。Slack常駐化も導入の裾野を一段広げそうだ。"
codex_importance: 3
---

## 公式アップデート

前回レポート（v2.1.191時点）以降、Claude Code に v2.1.193 が公開されました。本日はその主な追加点と、Anthropic が発表した Slack 常駐型エージェント「Claude Tag」を取り上げます。

### Claude Tag: Slack連携AIエージェント

Anthropic が、Slack チャンネルで `@Claude` とメンションするとスレッド内で作業し結果を返す「Claude Tag」を、Claude Enterprise / Team 向けの公開ベータとして案内しました。従来の「Claude in Slack」アプリを置き換える位置づけで、管理者がチャンネルやワークスペース単位でアクセス権を設定でき、Claude がチーム用のサービスアカウントとしてリポジトリ・チケット・データウェアハウス・監視ツールなどに接続してタスクを非同期で代行します。

[ソース](https://zenn.dev/arufian/articles/ded5c05a77a5d1)

### assistant_response OpenTelemetryログイベント (v2.1.193)

モデルの応答テキストを含む `claude_code.assistant_response` OpenTelemetry ログイベントが追加されました。既定では秘匿されますが、`OTEL_LOG_ASSISTANT_RESPONSES=1` で出力されます。同変数が未設定の場合は `OTEL_LOG_USER_PROMPTS` の設定に従うため、**既にプロンプト内容をログ収集している環境はアップグレードで応答内容も収集を始めます**。プロンプトのみに戻すには `OTEL_LOG_ASSISTANT_RESPONSES=0` を明示設定します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

### bashモードのファイルパス補完 (v2.1.193)

bashモード（`!`）に、ライブのファイルパス自動補完が追加されました。シェルコマンド入力中にパス候補がその場で表示されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

### auto-mode拒否理由の表示 (v2.1.193)

auto-mode が何かを拒否した際、その拒否理由がトランスクリプト・拒否トースト・`/permissions` の「最近の拒否」に表示されるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

### autoMode.classifyAllShell設定 (v2.1.193)

`autoMode.classifyAllShell` 設定が追加され、任意コード実行パターンのみでなく、全 Bash/PowerShell コマンドを auto-mode 分類器経由でルーティングできるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

### MCP認証要求の起動通知 (v2.1.193)

MCP サーバーが認証を必要とする場合に、起動時に `/mcp` を案内する通知が表示されるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

### アイドルbgシェルのメモリ圧迫リーピング (v2.1.193)

アイドル状態のバックグラウンドシェルコマンドを、メモリ圧迫時に自動回収するようになりました。`CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP=1` で無効化できます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

## コミュニティの反応

### assistant_response OpenTelemetryログイベント (v2.1.193)

#### ポジティブ

> Claude Code + Codex の利用状況を OpenTelemetry で Grafana に可視化して課金管理が捗った — @tskulbru [X](https://x.com/tskulbru/status/2070180216538800469)

> Claude Code と Codex CLI の両方が OpenTelemetry 対応しているので計測がすごく便利になった — @hik4_n [X](https://x.com/hik4_n/status/2070325698003448066)

#### ネガティブ

> v2.1.193 で `claude_code.assistant_response` が追加され、`OTEL_LOG_ASSISTANT_RESPONSES` 未設定時はモデル応答テキストまでログに出る。Stripe の Webhook ペイロードなどが平文で残るリスクがある — @gabor_rar [X](https://x.com/gabor_rar/status/2070485338691186905)

#### Tips

> `OTEL_LOG_ASSISTANT_RESPONSES=0` を明示設定すれば prompt のみのログに戻せる — @gabor_rar [X](https://x.com/gabor_rar/status/2070485338691186905)

> Claude Code セッションを OpenTelemetry で記録し、traceglass で動画のように再生しトークン/コストを確認できる — @iamrahul94 [X](https://x.com/iamrahul94/status/2070061624464175258)

> v2.1.193 の OTel アシスタント応答ログ追加と全変更まとめ。既存のプロンプトログ設定を引き継ぐ仕様への注意を解説 — @picnic [Qiita](https://qiita.com/picnic/items/bba3d4db0a902a3ed96a)

### bashモードのファイルパス補完 (v2.1.193)

#### ポジティブ

> bashモード（`!`）のライブパス補完で、コマンド入力中にパス候補が即表示され、深い階層でも手打ち不要・打ち間違い激減。毎日触る道具の手数を減らす改善が一番効く — @shima0hide [X](https://x.com/shima0hide/status/2070295039184711770)

> `!` を付けてシェルコマンドを打つときパスがその場で候補に出る。深い階層のファイルでも最後まで手打ちしなくて済む — @commte [X](https://x.com/commte/status/2070291742986031412)

> Added live file path autocomplete to bash mode (!) — これ欲しかったやつでは — @oikon48 [X](https://x.com/oikon48/status/2070274985461952862)

### auto-mode拒否理由の表示 (v2.1.193)

#### ポジティブ

> auto mode で走らせて戻ったら止まっている、なぜ止まったか分からない、ということがあった。v2.1.193 からは拒否理由がその場の履歴と通知に出るので、任せて放っておくほど止まった理由がすぐ見えて助かる — @kumitate_ai [X](https://x.com/kumitate_ai/status/2070440049024598107)

### アイドルbgシェルのメモリ圧迫リーピング (v2.1.193)

#### ポジティブ

> メモリ圧迫時自動回収で、バックグラウンドシェルがアイドル時に自動で片付くようになった。チーム運用での利便性に期待 — @rikuminamiyama [X](https://x.com/rikuminamiyama/status/2070317660685115410)

> 「Auto memory-pressure reaping for idle shell commands」が追加され、バックグラウンドエージェントの扱いがスマートになった — @lukashanren1 [X](https://x.com/lukashanren1/status/2070314460967829594)

### Claude Tag: Slack連携AIエージェント

#### Tips

> Claude Tag 入門：単なる「Slack から質問できる機能」ではなく、管理者がアクセス権を設定しチーム用サービスアカウントとして各種ツールに接続できる点を解説 — @arufian [Zenn](https://zenn.dev/arufian/articles/ded5c05a77a5d1)

> Anthropic が Slack 上で動く AI チームメイト「Claude Tag」を発表。機能・仕組み・セキュリティ管理・導入方法を公式発表ベースで整理 — @shirochan [Zenn](https://zenn.dev/shirochan/articles/92af7dfdbf38e7)

*（X 検索では直近7日間の個人ユーザーによる実体験投稿は確認できませんでした）*

### autoMode.classifyAllShell設定 (v2.1.193)

該当なし

### MCP認証要求の起動通知 (v2.1.193)

該当なし

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
