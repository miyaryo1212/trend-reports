---
title: "Claude Code v2.1.327、権限チェックを厳格化"
summary: "Claude Code v2.1.327 が公開されました。作業ディレクトリの判定やシンボリックリンクの扱いなど権限チェックが厳しくなり、auto mode の課金分類器フォールバックは次のリリースで廃止されると予告されています。MCP の JSON を標準入力から登録する機能や、/status での設定エラー一覧表示も加わりました。Anthropic Research では、Claude Fable 5.2 がブラックホール物理の未解決問題を解いたという発表もありました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-19

features:
  - "[Claude Code] v2.1.327 権限チェック厳格化"
  - "[Claude Code] v2.1.327 claude mcp add-json <name> -"
  - "[Claude Code] v2.1.327 /status の設定エラー一覧"
  - "[Claude Code] v2.1.327 初回Bash高速化(shell head start)"
  - "[Claude Code] v2.1.327 attributionProject 設定"
  - "[Claude Code] v2.1.327 ExitWorktree の確認追加"
  - "[Claude Code] v2.1.327 VS Code「Add to Chat」"
  - "[Claude Code] v2.1.327 /tui classic"
  - "[Anthropic Research] Claude Fable 5.2 がブラックホール物理の未解決問題2件を解決"
codex_review: "派手な新機能より、権限の境界を細かく締め、設定ミスも見つけやすくする地味な改善に価値を感じる。初回シェルを承認前に動かす高速化は便利な反面、実行順序の説明が要るし、物理の成果は形式検証込みで興味深いが、業界全体への波及はまだ見極めたい。"
codex_importance: 3
---

## 公式アップデート

Claude Code v2.1.327 が 2026-11-17(UTC)に公開されました。前回の v2.1.326 に続き、修正項目が非常に多いリリースです。主な変更は以下のとおりです。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)

### [Claude Code] v2.1.327 権限チェック厳格化

- 作業ディレクトリの内側とみなす範囲を変更しました。これまで確認なしで通っていた一部のパスで、権限の確認が求められるようになります。
- パスのチェックで、一部のシンボリックリンクを拒否するようになりました。
- `permissions.blockReadsOutsideWorkingDirectories` の適用範囲を広げました。
  - bypass / auto モードで確認を求める Bash コマンドが増え、auto モードでは一部を拒否します。
  - Read / Edit の deny ルールの対象パスを指定する Bash コマンドは、これまでの「確認」ではなく「拒否」になるケースが増えました。
- auto mode の変更:
  - 課金対象の分類器リクエストへのフォールバックについて、「次のリリースで廃止する」と通知するようになりました。廃止後は、分類器がチェックしていた操作がすべて確認対象か拒否になります。
  - 任意のパッケージを実行できる allow ルール(`Bash(pnpm dlx *)` など)や、既に無視していたルールのパス付き・バージョン付きの書き方(`/usr/bin/npm run:*` など)も無視するようになりました。これらは安全チェックで判定されます。
- その他の権限まわりの変更:
  - 展開すると非常に長いテキストになる変数を含む Bash コマンドは拒否されます。メッセージで、値を短くするかファイルを使うよう案内します。
  - PowerShell ツールは、ルールで名前を指定したコマンドでも、確認を求める対象が1つ増えました。
  - 兄弟エージェントからのメッセージで再開したサブエージェントは、セッションの権限設定に従うようになりました。
  - Claude in Chrome は、一部の認証情報ファイルのアップロードを拒否するようになりました。
  - コミット時に、シークレットを含む可能性のあるファイルはコミットしないよう Claude に指示するようになりました(新しいモデルと PowerShell)。

### [Claude Code] v2.1.327 claude mcp add-json <name> -

`claude mcp add-json <name> -` で、MCP サーバーの JSON を標準入力から読み込めるようになりました。トークンをコマンドラインに残さずに登録できます。Claude Code のセッション内では使えません。

関連する変更:

- プロジェクトスコープの `claude mcp add` / `claude mcp remove` を実行すると、`.mcp.json` の他のトップレベルキー(`$schema` など)が消える不具合を修正しました。
- `.mcp.json` のトップレベルにサーバーが並んでいて `mcpServers` キーがない場合、`claude mcp add --scope project` はファイルを上書きせずに停止するようになりました。

### [Claude Code] v2.1.327 /status の設定エラー一覧

`/status` に、次のような問題の一覧が表示されるようになりました。

- 壊れたエージェント・スキル・コマンド・出力スタイルの定義ファイル
- キーバインドの誤り
- 使えないサンドボックス
- 無視された権限設定
- 一致することのないフックの matcher

また、`/config` では、他の設定によって上書きされている行に注記が付くようになりました。

### [Claude Code] v2.1.327 初回Bash高速化(shell head start)

セッションで最初に実行する Bash コマンドが速くなりました。コマンドが承認される前に、シェルの起動ファイルを先に実行するようになったためです。コマンドが最終的に拒否された場合でも、起動ファイルは実行されます。無効にするには `CLAUDE_CODE_DISABLE_SHELL_HEAD_START=1` を設定します。

### [Claude Code] v2.1.327 attributionProject 設定

`admin.billing_group_tag` を設定している Claude apps ゲートウェイでは、`attributionProject` 設定でセッションの課金グループ名を指定できるようになりました。あわせて、ゲートウェイのヒントヘッダーに `x-claude-code-managed-settings-checksum` が追加されました。このヘッダーは、管理設定で `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` を指定している環境で送られます。

### [Claude Code] v2.1.327 ExitWorktree の確認追加

`ExitWorktree` は、未保存の作業が残っている可能性のある worktree を削除する前に、確認を求めるようになりました。don't-ask モードや確認に答える人がいない場面では拒否されます。ただし、allow ルールがある場合や、auto / bypass permissions モードでは許可されます。

あわせて、Remote Control の worktree モードでサーバーを止めると、実行中のセッションの git 管理外ファイル(`.env` など)が削除される不具合も修正されました。

### [Claude Code] v2.1.327 VS Code「Add to Chat」

VS Code のエクスプローラーの右クリックメニューに「Claude Code: Add to Chat」が追加されました。選択したファイルやフォルダを、チャットに @メンションできます。

### [Claude Code] v2.1.327 /tui classic

非フルスクリーンのレンダラーに、`/tui classic` という名前が付きました。これまでの `/tui default` も引き続き使えます。

### [Anthropic Research] Claude Fable 5.2 がブラックホール物理の未解決問題2件を解決

Anthropic Research の発表によると、Claude Fable 5.2 がブラックホール物理の未解決問題を2件解きました。1件は Hawking-Page 転移に関する計算、もう1件は3次元重力のモジュラーブートストラップにおける上限です。どちらの結果も Lean で形式検証されています。なお、今回の入力データには発表の本文や個別のURLが含まれていないため、詳細は公式の発表を確認してください。

[ソース](https://www.anthropic.com/research)

## コミュニティの反応

### [Claude Code] v2.1.327 権限チェック厳格化

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)`WebFetch(domain:...)` ルールで、Claude が調べ物で使えるドメインを絞る方法の解説です。ワイルドカードが及ぶ範囲、`WebFetch` と `WebFetch(domain:*)` の違い、サンドボックスの通信許可やリダイレクトの注意点を整理しています。中立的な解説記事です。 — AIコーディングガイド [Claude Code の WebFetch を特定ドメインだけ許可する設定](https://zenn.dev/aicoding_guide/articles/acg-claude-code-webfetch-domain-allow)

> (関連記事。今回の変更には触れていません)`rm -rf` や `git reset --hard` を止める PreToolUse フックの作り方を、動くコード付きで紹介する記事です。AI に作らせた安全装置が実際には何も止めていなかった、という失敗談を出発点にしています。権限の仕組みを過信しないよう促す、やや警告寄りのトーンです。 — 見送りの人 [Claude Codeに危ないコマンドを打たせないフック — AIが作った安全装置は何も止めていなかった](https://zenn.dev/miokuri_ai/articles/c8f93358846ac3)

> (関連記事)2026-11-18 の公式ドキュメント更新をまとめた記事です。auto mode の分類器が操作を止めた理由を、フック・テレメトリ・CLI のそれぞれで確認できるようになった、という記述の追加を整理しています。auto mode の判定が厳しくなる流れの中で、拒否された理由を追うのに役立ちます。 — akihidem [11/18 の公式ドキュメント更新：auto mode の判定理由の可視化とスクリプト実行の記述](https://qiita.com/akihidem/items/2b5f003f529d5d29c76f)

X では、この変更に触れた個人の実体験・感想は見つかりませんでした。

### [Claude Code] v2.1.327 claude mcp add-json <name> -

該当なし

### [Claude Code] v2.1.327 /status の設定エラー一覧

#### ポジティブ

該当なし

#### ネガティブ

> (`/status` そのものではなく、設定・環境まわりの不具合の実体験です)macOS のバックグラウンド Daemon や PTY から Claude Code を動かすと、ログインエラーや権限エラー(TCC / Security Session 関連)が起き、環境変数を設定しても解決しなかったという投稿です。原因の切り分けに苦労している様子がうかがえ、困惑気味のトーンです。 — @mylifcc [出典](https://x.com/mylifcc/status/2123159561053868247)

#### Tips

> (`/status` そのものではなく、設定ファイルの活用例です)メインに Sonnet、サブエージェントに Haiku、advisor に Opus を割り当てる階層構成を、`~/.claude/settings.json` と CLAUDE.md で設定する例の共有です。コンテキストを効率よく使い、複数ファイルにまたがるタスクを安定させる狙いです。 — @mirku21 [出典](https://x.com/mirku21/status/2123159395768873094)

### [Claude Code] v2.1.327 初回Bash高速化(shell head start)

該当なし

### [Claude Code] v2.1.327 attributionProject 設定

該当なし(X で見つかったのは変更履歴を要約した投稿のみで、個人の実体験・感想はありませんでした)

### [Claude Code] v2.1.327 ExitWorktree の確認追加

該当なし

### [Claude Code] v2.1.327 VS Code「Add to Chat」

該当なし

### [Claude Code] v2.1.327 /tui classic

該当なし

### [Anthropic Research] Claude Fable 5.2 がブラックホール物理の未解決問題2件を解決

#### ポジティブ

> (研究成果そのものではなく、Fable 5.2 のコーディング性能についての記事です)11月18日時点の Sonar LLM Leaderboard(Java の課題が対象)で、Claude Fable 5.2 Thinking High の Pass 率が 90.26% となり、それまで最高だった Claude Opus 5 Thinking(88.60%)を上回って1位になったと紹介しています。高く評価するトーンです。 — Takuto Kishioka [Claude Fable 5.2 Thinking Highのコーディング性能がすごい！](https://zenn.dev/tkishioka/articles/claude-fable-5-2-leaderboard)

#### ネガティブ

該当なし

#### Tips

> (研究成果そのものではなく、Fable 5.2 の実利用の検証記事です)Fable 5.2 に SVG と Canvas で村の絵を描かせた検証です。HTTP 200 が返ってもファイルが完成していないケースがあったと報告しています。API の応答、生成されたファイル、画面表示をそれぞれ別に確認する手順を紹介しています。中立的な検証です。 — rhythm [Claude Fable 5.2のSVG・Canvas描画を検証：出力切れと実行エラーの見分け方](https://zenn.dev/boluoji/articles/5a222f7a5271a9)

## ソース

- [Claude Code v2.1.327 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic Research](https://www.anthropic.com/research)
- [Zenn: Claude Code の WebFetch を特定ドメインだけ許可する設定](https://zenn.dev/aicoding_guide/articles/acg-claude-code-webfetch-domain-allow)
- [Zenn: Claude Codeに危ないコマンドを打たせないフック](https://zenn.dev/miokuri_ai/articles/c8f93358846ac3)
- [Qiita: 11/18 の公式ドキュメント更新：auto mode の判定理由の可視化](https://qiita.com/akihidem/items/2b5f003f529d5d29c76f)
- [Zenn: Claude Fable 5.2 Thinking Highのコーディング性能がすごい！](https://zenn.dev/tkishioka/articles/claude-fable-5-2-leaderboard)
- [Zenn: Claude Fable 5.2のSVG・Canvas描画を検証](https://zenn.dev/boluoji/articles/5a222f7a5271a9)
