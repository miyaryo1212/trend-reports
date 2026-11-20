---
title: "Anthropic上場完了、Claude Code v2.1.329"
summary: "Anthropicが11/19にNasdaq(ANT)で取引を始め、同時私募と合わせて約1,195億ドルを調達しました。Claude Code v2.1.329では、/code-reviewの対象の決め方、/tasksの表示範囲、スケジュール済みタスクの扱いが変わり、Code Modeとサインインまわりの修正も入りました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-21

features:
  - "[Anthropic] IPO完了"
  - "[Claude Code] v2.1.329 /code-review変更"
  - "[Claude Code] v2.1.329 /tasks拡張"
  - "[Claude Code] v2.1.329 フック信頼ダイアログ警告"
  - "[Claude Code] v2.1.329 Code Mode改善"
  - "[Claude Code] v2.1.329 スケジュール済みタスクの仕様変更"
  - "[Claude Code] v2.1.329 max_tokens自動リトライ廃止"
  - "[Claude Code] v2.1.329 /mcp・/statusの診断強化"
  - "[Claude Code] v2.1.329 ~/.claude.jsonリセット・macOS Keychain起因の繰り返しサインアウトを修正"
codex_review: "上場による巨額調達は業界の資金力を測る節目だが、企業価値への期待が実力を先取りしすぎないかは気になる。Claude Codeの更新は派手さこそないものの、レビューの誤認やタスク管理、認証の不安定さを潰す地道な改善で、日常利用にはこちらが効きそうだ。"
codex_importance: 4
---

## 公式アップデート

### [Anthropic] IPO完了

前回レポートで取り上げた IPO 価格決定(1株83ドル)の続報です。

- 11/19 に Nasdaq(ティッカー「ANT」)で取引が始まりました。
- オーバーアロットメント(追加売出し)の枠がすべて行使され、公開株数は約11.27億株、調達額は約935億ドルになりました。
- AMD、NVIDIA、Google、Microsoft などへの同時私募(約260億ドル)と合わせると、調達総額は約1,195億ドルです。

今回の入力データには、発表本文と個別の URL が含まれていません。詳細は Anthropic の公式発表を確認してください。

### [Claude Code] v2.1.329 /code-review変更

Claude Code v2.1.329 が 2026-11-19(UTC)に公開されました。

- ほとんどのモデルで、対象を指定せずに `/code-review` を実行すると、デフォルトブランチと比べてブランチ全体をレビューするようになりました。複数コミットのブランチで差分を見失う問題も修正しました。
- `/code-review <PR番号>` が、知らせないまま PR ではなくチェックアウト中のブランチをレビューすることがありました。今は `gh pr diff` で PR を読み、読めないときはそう伝えます。
- `/code-review <PR番号> --fix` と、PR の URL を渡した `/code-review` は、`gh pr diff` が拒否されたり失敗したりすると、レビューせずに止まるようになりました。
- 存在しない `~/.claude/CLAUDE.md` を探すために、権限の確認で止まる問題を修正しました(ほとんどのモデル)。
- medium で実行したレビューなのに、指摘カードに「high」と表示されることが多かった問題を修正しました(ほとんどのモデル)。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 /tasks拡張

- `/tasks` に次のものが並ぶようになりました。`x` を押すと、確認のあとで1件ずつ止められます。
  - このセッションのスケジュール済みタスク
  - `/loop` の wakeup
  - goal
  - この会話の fork
- `/tasks` の見出しとフッターのバックグラウンド件数は、シェル、モニター、MCP 呼び出し、エージェント、ワークフロー、スケジュール済みタスクをまとめた1つの数になりました。
- Stop / SubagentStop フックの `background_tasks` では、Monitor のスクリプトを `shell` ではなく `monitor` と表示するようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 フック信頼ダイアログ警告

- 信頼ダイアログで、そのフォルダのフックがどこで宣言されているかを警告するようになりました。
- Claude Desktop などの非対話ホストでは、管理設定のフックが読み込めなかったときに会話の中で警告します。
- [VSCode] 信頼の確認を断ったあと、メッセージ欄の上に1行表示します。そこの「Review trust」から、ウィンドウを再読み込みせずに確認をもう一度出せます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 Code Mode改善

追加・変更:

- OpenTelemetry のイベントとメトリクスを有効にしたままでも Code Mode を使えるようになりました。コードが行う各ツール呼び出しのイベントが送られます。トレーシングを有効にしている場合は、引き続き Code Mode はオフになります。
- テレメトリ、必須でない通信、機能フラグをオフにしていても Code Mode が起動するようになりました。管理者は管理設定で Code Mode をオフのままにできます。
- スクリプトのツール呼び出しに対する PreToolUse フックがエラーになっても、呼び出しは拒否されなくなりました(Code Mode の外と同じ動き)。拒否させたい command / HTTP / MCP ツールのフックには `"onFailure": "block"` を付けます。
- 256 MiB を超える行範囲の読み取りは拒否するようになりました。非常に長い行の読み取りがタイムアウトする問題も修正しました。
- 自分で `log`、`preview`、`sleep` を宣言するスクリプトも実行できるようになりました(以前は拒否)。
- 一部のツールだけを列挙した mod があっても、Code Mode が黙ってオフにならなくなりました。オフにしたい場合は管理設定を使います。

修正(主なもの):

- 暴走したループがマシンのメモリを埋める問題。上限で止めるようになりました。
- コードが読んだ大きなテキストファイルを、すべてメモリに保持し続ける問題
- 2分を超える MCP 呼び出しで、「バックグラウンドに移った」というメッセージがデータとして返る問題。最大10分待ち、それを超えるとエラーを返すようになりました。
- ツールが 4,096 個を超えるセッションで、スクリプトが `tools` からツールを呼べなくなる問題
- Esc のあとにスクリプトの完了済みの編集が隠れ、終了時に失われる問題

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 スケジュール済みタスクの仕様変更

- 以前のバージョンで保存したスケジュール済みタスクの多くは、新しくサインインしたセッションでは登録し直す必要があります。保存したセッションそのものを `--resume` すれば、引き続き実行されます。
- 「Exit and stop tasks」で、このセッションのスケジュール済みタスクも終了するようになりました。再開しても実行されません。ただし、Claude が応答している最中に終了した場合は除きます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 max_tokens自動リトライ廃止

2.1.326 で入った「`max_tokens` エラーに示された上限で自動的に再試行する」動作を削除しました。出力トークンの上限が小さいモデルを使うゲートウェイ経由の場合は、`CLAUDE_CODE_MAX_OUTPUT_TOKENS` にその上限を設定します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 /mcp・/statusの診断強化

- `/mcp` のサーバーのページに「Server message」の行を追加しました。リモート HTTP MCP サーバーが接続を拒否したとき、その JSON-RPC エラーメッセージを表示します。
- `/status` に「Marketplace auto-update」の行を追加しました。自動更新されない管理マーケットプレイスの名前と、その理由を表示します。
- サービスのクライアント登録が廃止された(HTTP 410 Gone)ときに、`claude mcp login` と `/mcp` が「Claude Code からのサインインを受け付けない」と表示していた問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

### [Claude Code] v2.1.329 ~/.claude.jsonリセット・macOS Keychain起因の繰り返しサインアウトを修正

- ネットワークの停止やファイルロックで `~/.claude.json` が読めなくなり、保存の途中で消えると、既定値にリセットされることがありました。これを修正しました。
- macOS で、Keychain を読めても書き込めない場合に、サインアウトが繰り返される問題を修正しました。そのセッションは期限切れの時点で止まって理由を示し、ほかのセッションはサインインしたままになります。
- macOS のログイン更新では、`Claude Code-write-check` という項目で Keychain をテストするようになりました。
- macOS のサンドボックス内では Keychain のロック解除は役に立ちませんが、`claude doctor` がロック解除を勧めていました。この問題を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

## コミュニティの反応

### [Anthropic] IPO完了

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (取引開始前の記事)Anthropic の上場価格が1株83ドルに決まり、想定を上回ったことを、その日のAIニュースの1つとして図解で紹介しています。経営者や個人の学習者向けに、中立的なトーンで解説しています。 — 菅原友和 [Anthropic上場、1株83ドル。GPT-6.2は賛否が割れる](https://zenn.dev/sugawara_ai/articles/ai-news-20261119)

X では、取引開始や調達額に触れた個人の投稿は見つかりませんでした。

### [Claude Code] v2.1.329 /code-review変更

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)OpenAI のハーネスエンジニアリングの記事と、Anthropic の「How the Claude Code team does code review」などを読み比べ、AI がコードを書く時代に人の確認をどこに置くかを整理しています。中立的な解説です。 — tamoco [AI がコードを書く会社の開発術：OpenAI と Anthropic が公開した仕組みを読む](https://zenn.dev/lecto/articles/fe59e629379585)

X では、この変更に触れた個人の投稿は見つかりませんでした。

### [Claude Code] v2.1.329 /tasks拡張

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)普段使う PC とは別に Mac mini を用意し、Claude Code にバグ調査や PR レビューなどの定期的な仕事を任せた3か月の記録です。便利な一方で、止まったループの確認などに手がかかる点も挙げています。実務寄りで率直なトーンです。 — yyamada @ Rimo [Mac mini x Claude Code は実際どうなのか？ 3ヶ月やってみてわかったこと](https://zenn.dev/rimo/articles/59dafa37bbc8af)

> (関連記事)11/20 の公式ドキュメント更新を整理した記事です。サブエージェント、予約タスク、他セッションからのメッセージといったバックグラウンド処理の結果がどこへ戻るか、また承認プロンプトが出る条件が明文化された点をまとめています。 — akihidem [11/20 の公式ドキュメント更新：バックグラウンド処理の戻り先と、承認が出る条件の明文化](https://qiita.com/akihidem/items/dd62f1c9b73067f6fb16)

### [Claude Code] v2.1.329 フック信頼ダイアログ警告

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)過去の設計判断(ADR)を次のセッションに知らせるため、フックで ADR の文脈を自動注入する手法を紹介しています。複数プロジェクトに配る Claude Code プラグインの改修経験がもとになっています。 — chooser [AIが既存決定を無視する本当の理由 — ADR文脈自動注入hookの手法](https://zenn.dev/chooser/articles/cp-009-ai-dev-process)

X では、この変更に触れた個人の投稿は見つかりませんでした。

### [Claude Code] v2.1.329 Code Mode改善

該当なし

### [Claude Code] v2.1.329 スケジュール済みタスクの仕様変更

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更より前の体験です)1台の PC で複数の Claude Code セッションを予約タスクで起こして回す運用で、予約の合図だけでは auto mode が記事の公開操作を止めた体験を書いています。「外向きの操作は人の一言で動かす」という運用ルールに落とし込んでいます。肯定的なトーンです。 — Suisei [Claude Code の auto mode が、予約タスクの合図だけでは記事を公開させなかった — 外向きの操作は人の一言で動かす](https://zenn.dev/suisei498/articles/5e0ba451290313)

X では、この変更に触れた個人の実体験・感想・Tips は見つかりませんでした。

### [Claude Code] v2.1.329 max_tokens自動リトライ廃止

該当なし

### [Claude Code] v2.1.329 /mcp・/statusの診断強化

該当なし

### [Claude Code] v2.1.329 ~/.claude.jsonリセット・macOS Keychain起因の繰り返しサインアウトを修正

該当なし

## ソース

- [Claude Code v2.1.329 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn: Anthropic上場、1株83ドル。GPT-6.2は賛否が割れる](https://zenn.dev/sugawara_ai/articles/ai-news-20261119)
- [Zenn: AI がコードを書く会社の開発術：OpenAI と Anthropic が公開した仕組みを読む](https://zenn.dev/lecto/articles/fe59e629379585)
- [Zenn: Mac mini x Claude Code は実際どうなのか？ 3ヶ月やってみてわかったこと](https://zenn.dev/rimo/articles/59dafa37bbc8af)
- [Qiita: 11/20 の公式ドキュメント更新：バックグラウンド処理の戻り先と、承認が出る条件の明文化](https://qiita.com/akihidem/items/dd62f1c9b73067f6fb16)
- [Zenn: AIが既存決定を無視する本当の理由 — ADR文脈自動注入hookの手法](https://zenn.dev/chooser/articles/cp-009-ai-dev-process)
- [Zenn: Claude Code の auto mode が、予約タスクの合図だけでは記事を公開させなかった](https://zenn.dev/suisei498/articles/5e0ba451290313)
