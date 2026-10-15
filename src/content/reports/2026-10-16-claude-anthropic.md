---
title: "Claude Code v2.1.301と外部評価機関アクセス"
summary: "Claude Code v2.1.301が公開され、unattendedリトライの待機上限、vimの%モーション、OTelのclassifier情報、fableエイリアスのフォールバックなどが入りました。Anthropicは独立評価機関METRへの従業員並みアクセス付与と、社内VCS「Scion」も公表しています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-16

features:
  - "[Anthropic] 独立評価機関(METR等)への従業員並みアクセス付与"
  - "[Anthropic Engineering] Scion(社内向け新バージョン管理システム)"
  - "[Claude Code] v2.1.301 リリース"
  - "[Claude Code] fableモデルエイリアスのフォールバック"
  - "[Claude Code] モデル切替時のコンテキスト要約改善"
  - "[Claude Code] mod API拡張"
  - "[Claude Code] [VSCode] LaTeX数式レンダリング"
  - "[Claude Code] claude-apiスキルのOpenTelemetryトレーシング案内"
  - "[Claude Code] Readツールのバイナリファイル修正"
codex_review: "独立評価機関に社内アクセスを認め、拒否権なしで公表できる設計は、AI企業の自己評価に頼りがちな業界では地味だが重要です。一方、リリースの大半は堅実な保守改善で、業界全体を動かすほどの新機軸とは言いにくい。"
codex_importance: 3
---

## 公式アップデート

### [Anthropic] 独立評価機関(METR等)への従業員並みアクセス付与

METRの6名に社内アクセスを与え、Anthropicのリスク水準やインシデントについて独自に公表できるようにしました。Anthropic側に拒否権はなく、SecureBioなども参加しています。

[ソース](https://www.anthropic.com/news)

### [Anthropic Engineering] Scion(社内向け新バージョン管理システム)

モノレポでgitを約5か月で置き換えた社内向けのバージョン管理システムです。マージは1日3万件超、チェックアウトは100倍高速化したとされています。一般公開製品ではありません。

[ソース](https://www.anthropic.com/engineering)

### [Claude Code] v2.1.301 リリース

2026年10月15日公開。主な変更は次のとおりです。

- `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` を追加。unattendedリトライモード(`CLAUDE_CODE_RETRY_WATCHDOG`)で、リセットまで遠い利用上限に当たった場合、待たずにリクエストを終了できる。
- vimモードに `%` モーション(対応する括弧へのジャンプ、d/c/yとも併用可)を追加。
- OpenTelemetryの `tool_decision` イベントに `classifier_verdict` と `permission_mode` を追加し、autoモードの分類器判定と権限ルールを区別可能に。`OTEL_LOG_TOOL_DETAILS=1` 時は `classifier_category` も付く。
- 修正: `WorktreeCreate` フック製のworktreeが未push コミットを持つ可能性があるのに、終了時に確認なく削除される問題。
- 修正: フルディスクで `/login` の更新に失敗した際の誤解を招くエラー表示。
- 修正: GrepとGlobが検索プログラムの異常終了時に「一致なし」と報告していた問題(エラーを返すように)。
- 修正: 複数のスキル・コマンド引数名による遅延とメモリ使用(引数名は先頭64個、各64文字まで)。
- 修正: `/rewind` 後にスキルがモデルへ一覧されなくなる問題。
- 修正: vimモードでEscape後にINSERTのままになる問題と、AskUserQuestionの自由入力でEscが入力を破棄する問題。
- 改善: 長時間実行するサブエージェントの進捗表示の描画性能。
- セルフホストランナー、Windows PowerShell、端末のゴミ文字表示(VTE古版・iTerm2)などの修正も含まれる。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

### [Claude Code] fableモデルエイリアスのフォールバック

`fable`(および `best`)エイリアスで、最新のFableモデルが組織で利用できずAnthropic APIがエラーになる問題を修正しました。1つ前のFableモデルで1回自動リトライします。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

### [Claude Code] モデル切替時のコンテキスト要約改善

コンテキストウィンドウの小さいモデルへ切り替える際、会話が長すぎれば切替前のモデルで先に要約するようになりました。あわせて、事前確認なしに使用クレジットが要約に消費される場合がある問題も修正されています。LLMゲートウェイが要求と異なるモデル名を返す環境で、会話が繰り返しコンパクトされる問題も修正されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

### [Claude Code] mod API拡張

- mockの `Input` に `rows` を追加。複数行テキストフィールドで、Enterで送信、Shift+Enterまたは行末のバックスラッシュ+Enterで改行する。
- modフックの `.catch` ハンドラは、フックが例外を投げるかタイムアウトした場合のみ実行されるように変更。
- `$.env.set` は、設定・解除の完了時に `{}`、書き込まれない場合は理由付きの `{ deny }` で解決するように変更。
- `$.model.fork` が、新しいプロセスの最初の応答完了前に `nothing-to-fork` を返す問題を修正(`claude -p` やクラウドセッション)。
- VS Code・デスクトップ・モバイルでは、質問ダイアログ上のツリーがMarkdownと最大48行に対応(ターミナルは平文12行)。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

### [Claude Code] [VSCode] LaTeX数式レンダリング

Claudeの応答で `$$`、複数行の `\[ … \]`、インライン `$…$`、`\(…\)` の数式を描画します。Pro/Maxの利用上限バナーには「Get more usage」リンクが追加されました(VS CodeとJetBrainsパネル)。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

### [Claude Code] claude-apiスキルのOpenTelemetryトレーシング案内

`claude-api` スキルに、OpenTelemetryトレーシングの案内と、`ant` CLIでのトレース送信先の設定方法が追加されました。同スキルの「CMEK外部鍵エンドポイントがClaude Platform on AWSで使えない」という誤記載も修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

### [Claude Code] Readツールのバイナリファイル修正

`.xlsm`、`.parquet`、`.epub`、`.heic` などのバイナリファイルをテキストとして読み込む問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)

## コミュニティの反応

### [Claude Code] v2.1.301 リリース

#### ポジティブ

> vimモードの `%` モーション(括弧へのジャンプ)がv2.1.301で追加され、実際に便利だと実感 — @talemi [出典](https://x.com/talemi/status/2110816508012380515)

#### Tips

> OTelの `tool_decision` トレースを有効化する環境変数設定例(`CLAUDE_CODE_ENABLE_TELEMETRY=1` など)を共有 — @joshuaday [出典](https://x.com/joshuaday/status/2110539122981093700)

### 反応が見られなかったトピック

- 独立評価機関への従業員並みアクセス付与、Scion、fableエイリアスのフォールバック、モデル切替時の要約改善、mod API拡張: 該当なし(取得した投稿に個人ユーザーの体験・感想は含まれていませんでした)

## ソース

- [Claude Code v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)
- [Anthropic News](https://www.anthropic.com/news)
- [Anthropic Engineering](https://www.anthropic.com/engineering)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
