---
title: "Claude Code v2.1.319、MCPタスクに対応"
summary: "Claude Code v2.1.319が公開されました。MCPタスクのバックグラウンド実行、権限プロンプトを拒否に置き換える設定、Bash権限バイパスなどのセキュリティ修正が入っています。あわせて、claude.aiの利用クレジットの有効期限と、ClaudeがMMORPGをプレイする研究「Project EVE」の情報があります。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-07

features:
  - "Claude Code v2.1.319 MCPタスク対応"
  - "Claude Code v2.1.319 auto modeのLLMゲートウェイ挙動変更"
  - "利用クレジットの有効期限導入(Supplemental Consumer Credit Terms)"
  - "permissions.denyInsteadOfPrompting設定"
  - "/claude-api latency-optimize"
  - "/loopの自己ペース実行の変更"
  - "/tasksの「Earlier in this session」行"
  - "Claude Code v2.1.319 セキュリティ修正"
  - "Claude apps gateway機能追加"
  - "CLAUDE_CODE_DISABLE_FEATURE_FLAGS環境変数"
  - "Project EVE: Claude Plays MMORPGs"
codex_review: "MCPタスクの裏側を整える更新としては堅実だが、目を引く新機能より権限回避の修正が並ぶ点に、コーディングエージェントの信頼性がまだ地道な課題であることが表れている。クレジット失効の導入も、利用者には小さくない変更だ。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.319 MCPタスク対応

2026-11-06に、Claude Code v2.1.319が公開されました。ターミナルでMCPタスクに対応しています。

- MCPサーバーがツール呼び出しをタスクとして実行すると、Claude Codeはそれをすぐにバックグラウンドへ移します。終わったら、結果をClaudeに伝えます。
- 環境変数`CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND`を設定すると、バックグラウンドに移さず、ツール呼び出しの中でタスクの完了を待ちます。
- MCPタスクは、フィーチャーフラグを取得しない環境でも動くようになりました。Bedrock、Vertex、Foundry、LLMゲートウェイ、`DISABLE_TELEMETRY`の環境が対象です。MCPタスクを無効にするには`CLAUDE_CODE_DISABLE_MCP_TASKS=1`を設定します。
- 古いハンドシェイクのMCPサーバーが接続に失敗したり、空の結果を返したりする不具合を修正しました。原因は、新しいサーバーでしか使わない拡張をClaude Codeが宣言していたことです。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### Claude Code v2.1.319 auto modeのLLMゲートウェイ挙動変更

- テレメトリかフィーチャーフラグがオフの環境(LLMゲートウェイの背後を含む)では、サーバーがチェックできない呼び出しを確認するか拒否します。組み込みの分類器への切り替えは行いません。従来の分類器を使い続けるには`CLAUDE_CODE_AUTO_MODE_SERVER=0`を設定します。Bedrock、Vertex、Foundryの挙動は変わりません。
- LLMゲートウェイの背後では、`CLAUDE_CODE_AUTO_MODE_SERVER=1`を設定すると、`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS`が設定されていてもサーバー側のチェックが有効になります。管理設定で後者を設定している場合は、`1`も管理設定で設定する必要があります。
- プロジェクトの設定ファイルやプラグインは、プロジェクト外でオフにしたサーバー側チェックを再びオンにできなくなりました。
- `claude -p`のauto modeで、安全チェックがなく操作が拒否されたのに終了コード0で終わる不具合を修正しました。テキスト出力とJSON出力では終了コード1になります。
- `/status`が、サーバー側のレビューが届いていないのに「Auto mode server: Enabled」と表示する不具合を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### 利用クレジットの有効期限導入(Supplemental Consumer Credit Terms)

claude.aiの利用クレジット(Usage Credits)に有効期限が付きます。条件は「Supplemental Consumer Credit Terms」に定められています。

- 2026-12-07以降に購入したUsage Creditsは、購入から12か月で失効します。
- 日本では、2026-09-10以降に購入した分が6か月で失効します。
- 規約は2026-11-06に発効しました。

この項目のソースURLは、今回の収集データに含まれていません。

### permissions.denyInsteadOfPrompting設定

新しい設定`permissions.denyInsteadOfPrompting`が追加されました。権限プロンプトで止まるはずのツール呼び出しを拒否し、そのままターンを続けます。ターミナルのセッション、サブエージェント、チームメイトで使えます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### /claude-api latency-optimize

`/claude-api latency-optimize`が追加されました。Claude APIを使うコードのどこで利用者を待たせているかを見つけ、より速い設定を手元の評価セットで試します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### /loopの自己ペース実行の変更

自己ペースの`/loop`は、ターンが再スケジュールせずに終わると、ループを終了するようになりました。予備のwakeupは予約しません。従来の挙動に戻すには`CLAUDE_CODE_LOOP_KEEPALIVE=1`を設定します。また、クラウドセッションでは`/loop`の確認メッセージに、タイマーはコンテナと一緒に止まると表示します。止まらないループも提案します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### /tasksの「Earlier in this session」行

`/tasks`に「Earlier in this session」の行が追加されました。終了したサブエージェントの一覧です。サブエージェントが一覧から消えた後や、Claude Codeを再起動した後でも、開き直してメッセージを送れます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### Claude Code v2.1.319 セキュリティ修正

v2.1.319では、次のセキュリティ関連の不具合を修正しました。

- 細工した環境変数のプレフィックスで、コマンドの一部を権限チェックから隠せるBash権限バイパス
- worktree作成時のサンドボックス脱出
- accept-editsモードとauto modeで、`sed`コマンドが権限チェックを回避できる場合
- 引用符付きの単語で書いたコマンドを、Bashのdenyルールとaskルールが見逃す場合
- `/rewind`が、ディレクトリのシンボリックリンクをたどってファイルを復元・削除できる場合
- セルフホストランナーで、`--trust-workspace false`のときもリポジトリの設定ファイルやスキルのフックが動いていた問題(フックも止めるようにしました)

権限まわりでは、次の変更も入りました。

- `which`をlookup/display以外のフラグ付きで実行する前に、権限を確認します。
- より広いdenyルールがコマンドを含む場合、セッションの完全一致のBash/PowerShell askルールは、確認ではなく拒否になります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### Claude apps gateway機能追加

Claude apps gatewayに次の機能が追加されました。

- `admin.pooled_conflict_rule`と`admin.pooled_priority_order`:開発者が複数のグループに属するとき、どのグループの共有予算から先に支払うかを設定します。
- `login_notice`:運営者が決めたメッセージを、ゲートウェイのブラウザ確認ページと、Claude Codeのサインイン画面に表示します。
- `CLAUDE_GATEWAY_LOG_FORMAT=json`:運用ログを、`severity`・`time`・`message`を持つJSONで出力します。
- `/usage`:支出上限のない開発者に、今日・今週・今月の支出を表示します(ゲートウェイがこのバージョン以降の場合)。
- 起動時の警告:Claude Desktopの11月10日の変更に備えて、`desktopHome`がなく`coworkTabEnabled: false`や`chatSessionRetentionDays`に頼るポリシーを警告します。AWS GovCloudと他のupstreamを混ぜている場合なども警告します。
- 支出上限のエラー:「spend limit reached · resets Dec 1」と表示し、`admin.blocked_message`があれば続けて表示します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### CLAUDE_CODE_DISABLE_FEATURE_FLAGS環境変数

環境変数`CLAUDE_CODE_DISABLE_FEATURE_FLAGS`が追加されました。テレメトリを止めずに、フィーチャーフラグの取得だけを止めます。各フラグは組み込みの既定値を使います。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)

### Project EVE: Claude Plays MMORPGs

Anthropicが研究「Project EVE: Claude Plays MMORPGs」を公開しました。

- EVE Onlineの市場シミュレーションで、Claudeに取引をさせました。Fable 5は、2週間で平均約43%の利益を出しました。
- EVE Frontierでは、4体のClaudeでチームを組ませ、協力のしかたと、チーム内の妨害者を見つけられるかを調べました。

この項目のソースURLは、今回の収集データに含まれていません。

## コミュニティの反応

### Claude Code v2.1.319 MCPタスク対応

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Claude Code v2.1.319 auto modeのLLMゲートウェイ挙動変更

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### 利用クレジットの有効期限導入(Supplemental Consumer Credit Terms)

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### permissions.denyInsteadOfPrompting設定

#### ポジティブ

> 権限プロンプトで止まらずに、headlessやCIでもターンを続けられるのが便利だと評価している。トーンは好意的 — @Khaled865412521 [出典](https://x.com/Khaled865412521/status/2118773769816674393)

#### ネガティブ

該当なし

#### Tips

> denyリストが形だけになっていた場合は、`permissions.denyInsteadOfPrompting`に合わせてリストを見直し、テストし直すよう勧めている。トーンは中立 — @Zeez0321 [出典](https://x.com/Zeez0321/status/2118790554733654258)

### /claude-api latency-optimize

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### /loopの自己ペース実行の変更

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

上記以外の項目(`/tasks`、セキュリティ修正、Claude apps gateway、`CLAUDE_CODE_DISABLE_FEATURE_FLAGS`、Project EVE)についても、X・Zenn・Qiitaで直接取り上げた投稿や記事は、今回集めたデータには見つかりませんでした。

## ソース

- [Claude Code v2.1.319 (GitHub Releases)](https://github.com/anthropics/claude-code/releases/tag/v2.1.319)
- [X: @Khaled865412521](https://x.com/Khaled865412521/status/2118773769816674393)
- [X: @Zeez0321](https://x.com/Zeez0321/status/2118790554733654258)
