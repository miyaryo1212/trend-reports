---
title: "v2.1.269でplugin evalと並列上限設定を追加"
summary: "Claude Code v2.1.269 が公開され、プラグインの eval スイートを採点実行する claude plugin eval、Workflow の同時実行エージェント上限を引き上げる環境変数、Bash 編集時の差分表示などが追加されました。権限ルールやプラグインアーカイブ権限のセキュリティ修正、プロンプトキャッシュ再利用の改善も多数含まれます。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-12

features:
  - "Claude Code v2.1.269 リリース"
  - "claude plugin eval"
  - "/output-style [name]"
  - "Bash ツールの編集差分表示 (bashEditDiffEnabled)"
  - "OTEL_METRICS_INCLUDE_REPOSITORY"
  - "CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS"
  - "CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS"
  - "/focus のスピナーヒント"
  - "プロンプトキャッシュの再利用改善"
  - "権限ルール ! 否定の適用範囲修正"
  - "Bash tee の書き込みパス検査"
  - "プラグインアーカイブの権限修正"
  - "/goal のリトライとバックオフ"
  - "/btw の架空ツール呼び出し修正"
  - "日本語・中国語・タイ語のプロンプト候補修正"
  - "/insights のフォールバック"
  - "バックグラウンドエージェント実行中の状態表示修正"
  - "「Prompt is too long」恒久停止の修正"
  - "コミット帰属リマインダの修正"
  - "/ultrareview --post の動作変更"
  - "claude.ai 同期スキルの命名変更"
  - "VS Code拡張: エージェントマップ"
  - "VS Code拡張: Hooks ダイアログ"
  - "VS Code拡張: Permission rules ダイアログ"
  - "Claude Code on the web: キュー済みメッセージの取り消し"
  - "Claude Code on the web: ルーティンの重複実行修正"
  - "Claude Tag: GitHub 一括接続/切断の確認ダイアログ"
  - "Claude Tag: スケジュールルーティンのスレッド返信"
  - "Claude Tag: 未有効モデルへの切替拒否"
codex_review: "派手な新機能というより、エージェント運用を本番に近づける地ならしが多い印象です。plugin evalと権限修正は地味だが、開発者体験の信頼性には効きます。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.269

2026-09-12 04:17 (JST) に公開されました。100件を超える変更を含み、プラグイン評価の仕組み、並列エージェント運用、プロンプトキャッシュの再利用性、権限・ファイル書き込みのセキュリティ修正が中心です。

**新規追加**

- `claude plugin eval` が追加されました。プラグインの eval スイートを Claude Code に対して実行し、採点済みかつ再現可能な結果を JSON と HTML レポートで出力します。詳細は `claude plugin eval --help` を参照します。
- `/output-style [name]` が追加されました。出力スタイルの一覧表示と切り替えが、Remote Control 経由やクラウド・ヘッドレスセッションでも行えます。
- Bash ツールがファイル編集を担った場合に、そのコマンドが変更したファイルの差分がツール結果に含まれるようになりました (設定 `bashEditDiffEnabled`)。
- `OTEL_METRICS_INCLUDE_REPOSITORY` が追加されました。OpenTelemetry のメトリクスとイベントに `vcs.*` のリポジトリ属性が付きます。コミットイベントには `OTEL_LOG_TOOL_DETAILS` と併用することで `vcs.ref.head.*` が付与されます。
- `CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS` (1〜256) が追加されました。推論律速のファンアウト向けに、Workflow ツールの実行単位あたりの同時エージェント数上限を引き上げられます。
- `CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS` が追加されました。LLM ゲートウェイの `/v1/models` 探索タイムアウト (既定3秒) を延長できます。
- スピナーに `/focus` を勧めるヒントが追加されました。プロンプト、1行の作業要約、応答だけを表示するビューに切り替えられます。

**プロンプトキャッシュの再利用改善**

- 出力トークン上限で応答が打ち切られ自動再開された次のターンで、プロンプトキャッシュが部分的に無効化されていた問題を修正しました。
- Claude の思考の途中で中断した後にセッションを再開すると、以前のコンテキストの再送のされ方が変わり、プロンプトキャッシュの再利用を損なうケースを修正しました。
- クラウドセッションで、最初のリクエスト前にサーバー構成の取得を短時間待つことでキャッシュミスを回避するようになりました。

**権限・セキュリティ修正**

- `!` で始まる deny / ask 権限ルールが、それを書いた設定ソースの外にまで適用されていた問題を修正しました。以後そのようなルールは自身のソース内でのみ適用され、`!` 単体の否定は無視されます。
- `Edit()` の deny ルールと書き込みパス検査が、Bash の `tee` コマンドが書き込むファイルに適用されていませんでした。`Bash(tee:*)` の allow ルールは、作業ディレクトリ外の書き込み先をカバーしなくなりました。
- セッション向けに展開されたプラグインアーカイブが他のローカルユーザーから読める状態になっていた問題、展開ファイルがアーカイブ由来の world-writable ビットを保持していた問題、再展開後も古いファイルが残る問題を修正しました。
- プラグインの `headersHelper` の同意プロンプトが、別ホストと誤読され得る URL パスを表示していた問題を修正しました。

**セッション・エージェント運用の修正**

- `/goal` の実行が API エラー、ネットワーク断、トークン上限の後に黙って停止していた問題を修正しました。以後はバックオフ付きで再試行するか、利用上限のリセット待ちを含めて理由を示して一時停止します。
- `/btw` の回答に架空のツール呼び出しとその出力が含まれる問題を修正しました。サイド質問側にそれらを書かないよう指示し、現れた場合は未実行である旨が明示されます。
- 自動圧縮で要約できる完結した過去のやり取りが無い場合に、セッションが「Prompt is too long」で恒久的に詰まる問題を修正しました (主に非常に大きなプロンプトを持つ Agent SDK セッション)。
- リモートおよびヘッドレスセッションが、バックグラウンドエージェントの実行中に「waiting for your input」と報告していた問題を修正しました。従来の挙動に戻す場合は `CLAUDE_CODE_BG_TASKS_REPORT_RUNNING=0` を設定します。
- `/insights` が、既定の Opus モデルに到達できないアカウントの Bedrock / Vertex / Foundry / ゲートウェイ環境で失敗していた問題を、その環境ではセッションのモデルを使うことで修正しました。
- コミット帰属のリマインダが、CLAUDE.md やメモリに書かれたコミット・プルリクエストへの帰属禁止ルールを上書きしていた問題を修正しました。managed settings で設定された行は引き続き適用されます。
- 単語間に空白を置かない日本語・中国語・タイ語などのテキストで、プロンプト候補が破棄されていた問題を修正しました。併せて、日本語・中国語・韓国語テキストの候補フィルタリングが改善され、混在スクリプトや単一語の候補が保持され、メタ的・評価的なテキストは英語と同様に除外されます。

**挙動変更**

- `/ultrareview --post` が、指摘の到着時に直接 PR コメントを投稿してそのリンクを表示するようになりました。従来は投稿のために2つ目のクラウドセッションを起動していました。
- クラウドセッションで claude.ai から同期されたスキルの名前が `anthropic-skills:<name>` 形式になり、Claude Desktop と一致しました。他に同名のものがなければ、素の名前も引き続き使えます。

**VS Code 拡張**

- エージェントマップが追加されました。フッターの「N agents」ピルから、セッションのサブエージェントごとのカード、エージェントの停止、読み取り専用トランスクリプトを開けます。
- Hooks ダイアログがコマンドメニューに追加されました。フックの閲覧と、user / project / local 設定への追加・編集・削除ができます。managed、プラグイン、セッションのフックは読み取り専用のままです。
- Permission rules ダイアログが追加されました。権限ルールの一覧表示と、user / project / local 設定への追加・削除ができます。起動オプション、セッション限定、managed のルールは読み取り専用です。

**Claude Code on the web**

- クラウドセッションで、Claude が読む前のキュー済みメッセージを取り消せるようになりました。キューから削除するか、Esc または上キーを押すと、テキストがメッセージボックスに戻ります。
- 一時的なサーバーエラーの後に単発のスケジュール済みルーティンが2回実行されることがある問題を修正しました。サブエージェントを使うルーティンの実行が早期に完了扱いされ、実際の失敗後の再試行がスキップされたり重複実行が始まったりする問題も修正されています。

**Claude Tag**

- 管理設定の GitHub インストールにおける Connect all / Disconnect の前に確認ダイアログが追加されました。組織全体に及ぶ誤操作を防ぎます。
- Slack チャネルのスケジュールルーティンが、常に新規のトップレベル投稿を作るのではなく、既存スレッドに返信できるようになりました。
- 組織が有効化していないモデルへの切り替えを Claude が受け入れ、黙ってフォールバックモデルで応答していた問題を修正しました。以後は切り替えを断り、管理者が有効化できる旨を伝えます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.269)

## コミュニティの反応

### Bash ツールの編集差分表示 (bashEditDiffEnabled)

エディタ内での差分確認を歓迎する声と、コンソールに差分が出なくなったことへの不満が混在しています。

#### ポジティブ

> PHPStorm 内で Claude Code を実行すると、ターミナルで変更を確認する代わりにエディタ内で直接 diff が開くのが便利 — @igorbenic [X](https://x.com/igorbenic/status/2097816654004584450)

> 小さな機能だがワークフローを変える。diff をポップアウト表示することで、Claude が何をしたかとレビューの間のコンテキストスイッチが減る — @hey_AndrewUSA [X](https://x.com/hey_AndrewUSA/status/2098091282736242734)

> `/diff` は「エージェントが変更したものをターミナルから離れずに確認したい」という痛みを解決する良い一歩 — @ggdnicolas [X](https://x.com/ggdnicolas/status/2098361159321571621)

#### ネガティブ

> Claude Code がデフォルトでコンソールにコード diff を表示しなくなった。変更内容を直接読めなくなって不便 — @spectragai [X](https://x.com/spectragai/status/2096619028215161128)

> 変更がライブで表示されず、実行したコマンドだけが出て読みにくい。`/diff` を使わないと確認しづらい — @_3morais [X](https://x.com/_3morais/status/2097607109164576976)

### CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS

環境変数そのものへの言及はまだありませんが、並列エージェント運用に関する実体験が集まっています。上限の引き上げが可能になった一方で、利用枠の消費が論点になっています。

#### ポジティブ

> バックログを並列化して10〜11の Claude Code セッションを同時稼働させ、1日で数十タスク・PR を処理してリリース直前まで持っていけた — @AntiCodeGuy [X](https://x.com/AntiCodeGuy/status/2096934758613979499)

#### ネガティブ

> 3つの並列エージェントで5時間ウィンドウを20分で使い切った。マルチエージェントワークフローは単一チャットよりクォータ消費が激しく、制限がその使い方に追いついていない — @kzzy47 [X](https://x.com/kzzy47/status/2096124570994421762)

> Opus 5 を使っていても同じ作業で8つのエージェント/サブエージェントが同時起動し、トークン消費が8倍になった — @Kamsiob [X](https://x.com/Kamsiob/status/2097554779329196156)

#### Tips

> 並列エージェントは便利だが QA がボトルネックになるので、同時4セッションにキャップし、1画面で本番準備チェックを強制してからマージするようにした — @nandanpri [X](https://x.com/nandanpri/status/2096938365492900012)

> リリース直前にタスクを並列化できるものを洗い出し、1タスク1エージェントで最大10〜11セッションまで同時起動して作業を加速させた — @AntiCodeGuy [X](https://x.com/AntiCodeGuy/status/2096934758613979499)

### プロンプトキャッシュの再利用改善

改善を体感したという報告と、レート制限やバージョン依存の問題を挙げる声の双方が出ています。

#### ポジティブ

> prompt caching がかなり改善した。セッション時間が1/3になった — @taroleo [X](https://x.com/taroleo/status/2098471522579165355)

> 再開したセッションが並列ツール呼び出し周辺のコンテキストを失う問題が修正された。チャットは正常に見えるのに結果が微妙に混乱する厄介なバグだった — @Liam2307 [X](https://x.com/Liam2307/status/2096481101359231048)

#### ネガティブ

> Claude Code にプロンプトキャッシュのバグがあり、260 以降で修正されたが、30%ほど使用量が増える可能性がある — @Haoranchg [X](https://x.com/Haoranchg/status/2096305041468719118)

> レート制限に当たるとセッション全体がキャッシュから外れ、再キャッシュが必要になるのが煩わしい — @LeeLeepenkman [X](https://x.com/LeeLeepenkman/status/2096461051185574258)

### /goal のリトライとバックオフ

`/goal` 自体への言及はありませんが、API エラー時の無言停止とリトライ設計についての投稿が見られます。

#### ネガティブ

> レート制限に当たるとセッション全体がキャッシュから落ちて再キャッシュが必要になりイライラする — @LeeLeepenkman [X](https://x.com/LeeLeepenkman/status/2096461051185574258)

#### Tips

> API エラー発生時に try-except だけでは原因不明・無限リトライ・ログなしで詰まるため、3回上限＋指数バックオフ＋全レスポンス JSON 保存＋status_code 別処理で安定化した — @ncyukio [X](https://x.com/ncyukio/status/2096206720943198499)

### コミット帰属リマインダの修正

修正前の挙動に対する不満と、設定による回避策の共有が中心です。

#### ネガティブ

> Claude Code がユーザーの attribution 無効設定を無視してコミットにセッション URL や Co-Authored-By を強制注入し、CLAUDE.md の指示を上書きする — @fluxneuron [X](https://x.com/fluxneuron/status/2097040630799024148)

> グローバル CLAUDE.md で Claude のフッターを禁止していてもシステムレベルの指示で上書きされ、コミットが汚染される — @effygp_ [X](https://x.com/effygp_/status/2096982387519324445)

#### Tips

> attribution を無効化する設定例として、`"attribution": { "commit": "", "pr": "" }` を追加する方法を共有 — @Benjaminliang_1 [X](https://x.com/Benjaminliang_1/status/2098468303878648224)

> CLAUDE.md に「コミットメッセージ以外に変更履歴を残さない」と明記して attribution 問題を回避する — @ProgrammerDude [X](https://x.com/ProgrammerDude/status/2096979180793524451)

> セッション URL の attribution を止める設定 `{ "attribution": { "sessionUrl": false } }` を settings.json に追加する — @alopezari [X](https://x.com/alopezari/status/2097299575853703596)

### Claude Code v2.1.269 リリース

**該当なし**

リリース直後のため、リリース全体に対する個人ユーザーの実体験投稿は確認できませんでした。

### claude plugin eval

**該当なし**

本日リリースされたばかりの機能のため、実使用の感想はまだ確認できていません。

### /output-style [name]

**該当なし**

### OTEL_METRICS_INCLUDE_REPOSITORY

**該当なし**

### CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS

**該当なし**

### /focus のスピナーヒント

**該当なし**

### 権限ルール ! 否定の適用範囲修正

**該当なし**

### Bash tee の書き込みパス検査

**該当なし**

### プラグインアーカイブの権限修正

**該当なし**

### /btw の架空ツール呼び出し修正

**該当なし**

### 日本語・中国語・タイ語のプロンプト候補修正

**該当なし**

### /insights のフォールバック

**該当なし**

### バックグラウンドエージェント実行中の状態表示修正

**該当なし**

### 「Prompt is too long」恒久停止の修正

**該当なし**

### /ultrareview --post の動作変更

**該当なし**

### claude.ai 同期スキルの命名変更

**該当なし**

### VS Code拡張: エージェントマップ

**該当なし**

### VS Code拡張: Hooks ダイアログ

**該当なし**

### VS Code拡張: Permission rules ダイアログ

**該当なし**

### Claude Code on the web: キュー済みメッセージの取り消し

**該当なし**

### Claude Code on the web: ルーティンの重複実行修正

**該当なし**

### Claude Tag: GitHub 一括接続/切断の確認ダイアログ

**該当なし**

### Claude Tag: スケジュールルーティンのスレッド返信

**該当なし**

### Claude Tag: 未有効モデルへの切替拒否

**該当なし**

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.269 リリースノート](https://github.com/anthropics/claude-code/releases/tag/v2.1.269)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
