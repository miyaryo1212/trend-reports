---
title: "Claude Code v2.1.330、easelとループ30日化"
summary: "Claude Code v2.1.330が公開されました。グラフを描く組み込みmod「easel」、Enterprise Admin Console管理の組織へのサインイン、定期タスクと/loopの最大30日化が加わりました。max_tokens自動リトライの廃止は取り消され、安定性の修正も多数入っています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-22

features:
  - "[Claude Code] v2.1.330 Enterprise Admin Console組織へのサインイン"
  - "[Claude Code] v2.1.330 組み込みチャートmod「easel」"
  - "[Claude Code] v2.1.330 定期スケジュールタスク・/loopの実行期間を7日→30日に延長"
  - "[Claude Code] v2.1.330 危険なrmコマンドの承認強化"
  - "[Claude Code] v2.1.330 max_tokens自動リトライ復活"
  - "[Claude Code] v2.1.330 VS Code拡張の新機能"
  - "[Claude Code] v2.1.330 サインインリンク短縮"
  - "[Claude Code] v2.1.330 セルフホストランナー強化"
  - "[Claude Code] v2.1.330 安定性修正"
  - "[Claude Code] v2.1.330 deniedMcpServers・--teleportの挙動変更"
  - "[Claude Code] v2.1.330 モデル選択まわりの変更"
  - "[Claude Code] v2.1.330 Code Mode改善"
codex_review: "easelは見栄えの追加に映るが、エージェントの成果を検証しやすくする点では地味に筋がいい。一方、目玉は新機能より長時間停止や設定消失の修正で、30日化も便利さと運用上の見張り負担が表裏だ。"
codex_importance: 3
---

## 公式アップデート

Claude Code v2.1.330 が 2026-11-20(UTC)に公開されました。

### [Claude Code] v2.1.330 Enterprise Admin Console組織へのサインイン

- Anthropic の Enterprise Admin Console で管理されている組織にサインインできるようになりました。
- `claude auth login` のあと、Claude Code は組織の設定を適用し、組織のクラウドプロバイダーまたはゲートウェイを使います。
- 関連する修正: `forceLoginOrgUUID` を設定していると、一時的なサーバーエラーや接続切れが1回あっただけで起動が拒否される問題を直しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 組み込みチャートmod「easel」

- 組み込み mod「easel」を追加しました。頼まれたときや、MCP のメトリクス結果の下にグラフを描きます。
- 対象は Pro、Max、利用できる地域の Team / Enterprise で、macOS と Linux に対応します。
- 自動でグラフを出す動作は `/config` でオフにできます。
- MCP の許可リストや拒否リストで組み込みのチャートツールが外れていると、起動のたびに「MCP server blocked by enterprise policy: easel」の警告が出ていました。この警告を出ないようにしました。ツールはブロックされたままです。
- Code Mode からチャートツールを呼ぶと失敗する問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 定期スケジュールタスク・/loopの実行期間を7日→30日に延長

- 定期スケジュールタスクと `/loop` は、セッションが動いている間、最大30日まで実行されるようになりました(以前は7日)。終わるときにはそのことを知らせます。
- このリリースより前に作ったタスクは、これまでどおり7日で終わります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 危険なrmコマンドの承認強化

- ルート、ホーム、トップレベルのフォルダ、作業フォルダを対象にした `rm` コマンドのうち、承認を求めるものを増やしました。
- 承認できる人がいない状況では、こうしたコマンドは拒否されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 max_tokens自動リトライ復活

- 2.1.329 で削除した「`max_tokens` がモデルやゲートウェイの上限を超えたときの自動リトライ」を元に戻しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 VS Code拡張の新機能

追加:

- `/fork`: 最後の返答のあとで会話を分岐します。
- `/workflows`: 実行中のワークフローを含むエージェントマップを開きます。
- 設定 `claudeCode.escapeStopsClaude`: オフにすると Escape で Claude が止まりません。
- 設定 `claudeCode.pinPrompt`: 自分のメッセージを上に固定せず、スクロールで流れるようにできます。
- 設定 `claudeCode.contextUsageThreshold`: コンテキストの使用量表示が出るタイミングを決めます。
- 「Open in Side Bar」コマンドに `prompt` 引数を追加しました。キーバインドや拡張機能から使えます。
- セッショングループのメニューに「Move up」「Move down」を追加しました。

主な修正:

- コードブロックをコピーすると末尾に改行が付き、貼り付けた時点でコマンドが実行されていた問題
- `/rewind` で Enter を押し続けたり、削除ボタンをダブルクリックしたりすると、確認なしで実行されていた問題
- advisor の呼び出しが「Unsupported content type」と表示される問題

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 サインインリンク短縮

- `/login`、`claude auth login`、`claude setup-token` で表示する claude.ai のサインインリンクを大幅に短くしました。
- `CLAUDE_CODE_FULL_SIGN_IN_LINK=1` を設定すると、従来の完全なリンクを表示します。短いリンクでエラーが出る場合や、スクリプトがリンクの値を読む場合に使います。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 セルフホストランナー強化

- `--start-dir` / `SELF_HOSTED_RUNNER_START_DIR` を追加しました。リポジトリ内のフォルダから作業を始められます。設定とフックの読み込みは指定しない場合と同じです。
- `spawn-runner` フックは、前のフックが動いている間でも次を起動するようになりました。同時に起動する数の上限は `--hook-concurrency` で決まり、既定はオーケストレーターごとに4です。同時に動かせないフックでは1にします。
- `/metrics` に次の2つを追加しました。
  - `claude_code_self_hosted_runner_order_to_registered_seconds`: 作業指示から登録が受け付けられるまでの秒数
  - `claude_code_self_hosted_runner_order_to_first_session_seconds`: 作業指示から最初のセッションが渡されるまでの秒数
- チェックアウトフックが終了コード 108 で終わった場合は、ほかのランナーを試さずに、その場でセッションの開始を止めます。
- Bash コマンドで必要のないファイル差分は取らないようにしました。このため、トランスクリプトに差分が載らないことがあります。すべての差分が必要な場合は、管理設定で `bashEditDiffEnabled` を true にします。
- 403(IP 許可リストによるものなど)が、シークレットやトークンの誤りとしてログに出ていました。今はほとんどの行がサーバーの示す理由から始まります。古い文言に一致させているログアラートは更新が必要です。
- ほかにも、ディスクがいっぱいの状態での起動、git 認証情報がない場合のエラー表示、`--push-outcome-on-release` を使って再開したときの動作などを修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 安定性修正

主な修正:

- 非常に長い会話をコンパクトにした直後に、最大で数分固まる問題
- WebFetch がページによってはセッションを数分止めたり、空の結果を返したりする問題
- `ExitWorktree` やワークツリー終了ダイアログが、ほかの Claude Code セッションが作業中のワークツリーを削除する問題
- 複数の Claude Code プロセスが同時に保存すると、ユーザー設定の変更が失われる問題
- 最後に保存されたメッセージのタイムスタンプが欠けていたり不正だったりすると、`--continue` / `--resume` が空のセッションを開くか失敗する問題
- Linux / WSL で2分以上スリープしたあと、最初のプロンプトが切れた接続を3分待つ問題
- 多くの MCP ツールの入力スキーマを API が受け付けないとき、ターンが「JSON schema is invalid」で失敗し、セッションファイルが数 MB ずつ膨らむ問題
- 複数の `claude plugin` コマンドやタスクの更新を同時に実行すると、プラグインやタスクの情報が失われる問題
- ディスクがいっぱいのとき、`~/.claude.json` の不完全なバックアップが残り、正常なバックアップと入れ替わる問題

改善:

- Windows で、組み込みの ripgrep 検索のたびにコンソールホストを起動しないようにし、Grep と Glob を速くしました。
- ファイル差分の処理を速くしました。
- `/config` の検索結果の並びを改善しました。
- `/resume` の一覧に、`/model` などの画面を開いただけのセッションを出さないようにしました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 deniedMcpServers・--teleportの挙動変更

- `deniedMcpServers` に名前で書いたエントリは、その名前の claude.ai コネクタだけを隠すようになりました。同じ URL のほかのコネクタは隠しません。すべてブロックしたい場合は、正確な URL を拒否リストに書きます。
- `claude --teleport` は、一部の環境ではブランチを切り替える git コマンドを実行せず、表示するだけになりました。`-p` 付きの場合は、自分でブランチを切り替えるまで終了コード1で終わります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 モデル選択まわりの変更

- `model` を指定したスキルを Claude が実行しても、サブエージェント、fork、コンパクト、`/recap` はセッションのモデルのままになりました。`context: fork` のスキルは除きます。
- サブエージェントのモデルのフォールバックが引き継がれるようになりました。モデル指定のないエージェントや、そのサブエージェントが起動した fork はフォールバック先のモデルで動き、さらにそこから起動したエージェントは同じ Bedrock リージョンを使います。
- プロンプトフックの `model` フィールドに、`haiku` や `sonnet` などのモデルエイリアスを書けるようになりました。
- 認識できないモデル名のうち「sonnet」や「haiku」を含むものも、ほかの未認識の名前と同じく短いシステムプロンプトを使うようになりました。`CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT=0` を設定すると、すべてのモデルで完全なプロンプトを使います。
- plan モードで `opusplan` または `haiku` を使っているとき、サブエージェントのさらに下のサブエージェントや fork が plan モード用のモデルで動いていた問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

### [Claude Code] v2.1.330 Code Mode改善

改善:

- 画像と PDF の見方を Claude に伝えるようにしました。
- Esc で止めたコマンドの下に、赤いエラーではなく「Interrupted」と表示するようにしました。
- サブエージェントのスクリプトが数千回のツール呼び出しをしたあと、ターミナルが固まる時間を大幅に短くしました。

主な修正:

- パス指定のルールや Read の拒否ルールがあるプロジェクトで、数百のファイルを読むコードのあとに長く止まる問題
- auto / bypass permissions モードで、スクリプトから呼んだ MCP ツールがターンの終了を求めても無視される問題
- Esc と `/compact` のあと、スクリプトが読んだファイルが復元されない問題
- 最初の返答の前に、`/context` がシステムツールを少なく数える問題

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

## コミュニティの反応

### [Claude Code] v2.1.330 Enterprise Admin Console組織へのサインイン

該当なし

### [Claude Code] v2.1.330 組み込みチャートmod「easel」

#### ポジティブ

> 頼んだときに自動でグラフが描かれ、MCP のメトリクス結果の下にも図が出るので、手で作る手間が省けたという実体験です。好意的なトーンです。 — @TedCai233 [出典](https://x.com/TedCai233/status/2124055698934001769)

> エージェントの結果を目で見てわかる形で伝えられるようになり、レビューで diff を1行ずつ見なくて済むようになったと評価しています。 — @orangercat [出典](https://x.com/orangercat/status/2124090760937296116)

> 自動グラフでデータの可視化が手軽になり、30日ループのような長期タスクと組み合わせると実用性が上がると述べています。 — @zshjzls [出典](https://x.com/zshjzls/status/2124137968667607115)

#### ネガティブ

該当なし

#### Tips

該当なし

### [Claude Code] v2.1.330 定期スケジュールタスク・/loopの実行期間を7日→30日に延長

#### ポジティブ

> max_tokens リトライの復活や Windows の検索高速化と並べて、`/loop` の30日化を実務で便利になる点に挙げています。 — @shima0hide [出典](https://x.com/shima0hide/status/2124001012101034336)

#### ネガティブ

該当なし

#### Tips

該当なし

### [Claude Code] v2.1.330 危険なrmコマンドの承認強化

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)PreToolUse フックのスクリプト自体が壊れていたときに操作が止まるかを14通り試したところ、11通りで操作が通り、`"onFailure": "block"` の1行を足すとそのうち10通りが止まったという検証記事です。危ない操作をフックで止めている人向けに、淡々と実測しています。 — おじさんAIラボ [Claude Codeのフックが壊れたら操作は止まる？ 14通り中11通りで通り、"block" の1行でそのうち10通りが止まりました](https://zenn.dev/ojisan_ai_lab/articles/claude-code-hook-onfailure-block-20261121)

### [Claude Code] v2.1.330 max_tokens自動リトライ復活

#### ポジティブ

> 2.1.330 で max_tokens 超過時の自動リトライが戻ったことを「うれしい修正」と評価しています。 — @shima0hide [出典](https://x.com/shima0hide/status/2124001012101034336)

> AI ゲーム開発者の立場から 2.1.330 をまとめ、自動リトライの復活や、固まる問題・設定の上書きの修正を好意的に紹介しています。 — @4todl [出典](https://x.com/4todl/status/2124067736217108691)

#### ネガティブ

該当なし

#### Tips

該当なし

### [Claude Code] v2.1.330 VS Code拡張の新機能

該当なし

### [Claude Code] v2.1.330 サインインリンク短縮

該当なし

### [Claude Code] v2.1.330 セルフホストランナー強化

該当なし

### [Claude Code] v2.1.330 安定性修正

#### ポジティブ

> 自動リトライの復活とあわせて、固まる問題や設定の上書きの修正にも好意的に触れています。 — @4todl [出典](https://x.com/4todl/status/2124067736217108691)

#### ネガティブ

該当なし

#### Tips

> (関連記事)11/21 の公式ドキュメント更新を整理した記事です。サンドボックス、フック、ワークツリー、サブエージェントなどが、失敗したとき・再開したとき・同じ名前のものがあったときにどう動くかが書き足されたとまとめています。中立的な解説です。 — akihidem [11/21 の公式ドキュメント更新：サンドボックス・フック・ワークツリーの挙動の明文化](https://qiita.com/akihidem/items/b24ae1952e4e38a94f23)

### [Claude Code] v2.1.330 deniedMcpServers・--teleportの挙動変更

該当なし

### [Claude Code] v2.1.330 モデル選択まわりの変更

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)公式ドキュメント(2026-11-21 取得)をもとに、サブエージェントの frontmatter の読み込み規則、ツール制限、権限モード、フックの効き方を整理した仕様メモです。書き方を誤ってもエラーにならず、意図と違う状態で動き続ける点に注意を促しています。 — akihidem [サブエージェントの frontmatter 仕様整理：ロード規則・ツール制限・権限モード・フックの効き方（2026-11-21 時点）](https://qiita.com/akihidem/items/430b027676351ef13624)

### [Claude Code] v2.1.330 Code Mode改善

該当なし

## ソース

- [Claude Code v2.1.330 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [X: @TedCai233](https://x.com/TedCai233/status/2124055698934001769)
- [X: @orangercat](https://x.com/orangercat/status/2124090760937296116)
- [X: @zshjzls](https://x.com/zshjzls/status/2124137968667607115)
- [X: @shima0hide](https://x.com/shima0hide/status/2124001012101034336)
- [X: @4todl](https://x.com/4todl/status/2124067736217108691)
- [Zenn: Claude Codeのフックが壊れたら操作は止まる？ 14通り中11通りで通り、"block" の1行でそのうち10通りが止まりました](https://zenn.dev/ojisan_ai_lab/articles/claude-code-hook-onfailure-block-20261121)
- [Qiita: 11/21 の公式ドキュメント更新：サンドボックス・フック・ワークツリーの挙動の明文化](https://qiita.com/akihidem/items/b24ae1952e4e38a94f23)
- [Qiita: サブエージェントの frontmatter 仕様整理：ロード規則・ツール制限・権限モード・フックの効き方（2026-11-21 時点）](https://qiita.com/akihidem/items/430b027676351ef13624)
