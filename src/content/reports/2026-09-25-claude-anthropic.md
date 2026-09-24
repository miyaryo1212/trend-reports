---
title: "Claude Code 大型2連発と新酵素ART発見"
summary: "Claude Code v2.1.281 / v2.1.282 が連続リリースされ、セッション再開時の履歴改変・プロキシ経由のストリーム切断など API 信頼性まわりの修正が大量に入りました。Anthropic Research は約950体の Claude エージェントによる新規リバース転写酵素システム ART の発見を公開しています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-25

features:
  - "Claude Code v2.1.282 リリース"
  - "Claude Code v2.1.281 リリース"
  - "Claude による新規酵素システム ART の発見"
  - "Project Swap 公開"
  - "`\"attribution\": false` 設定"
  - "auto モードのサーバー側分類器を既定化"
  - "self-hosted runner の system prompt 受け渡し変更"
  - "危険な `rm` 判定の強化"
  - "`maxProseWidth` 設定"
  - "`anthropic-skills` / `claude-ai` 名前空間の予約"
  - "Claude apps gateway の Bedrock `assume_role` / `guardrail`"
  - "MCP URL モード elicitation 対応"
  - "`/insights` に auto モード推奨を追加"
  - "プロジェクト/ローカル設定での OpenTelemetry 変数を無視"
  - "`claude plugin validate` に MCP サーバー検証を追加"
  - "Cloud sessions の GitHub App 接続ステータス表示"
  - "大規模セッションの resume 高速化"
codex_review: "地味な不具合修正の束に見えて、履歴の整合性や二重実行を潰すのはエージェントを日常業務に入れるうえで効く進歩だ。一方、ARTの発見は大きな話題だが、実験室での検証とAIの寄与を分けて見るまでは「革命」と呼ぶのは早い。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.282 リリース

9月24日にリリースされた大型更新です。会話履歴に起因する API エラーの修正が中心になっています。

**不具合修正 (API・セッション)**

- API が復号できない web 検索結果を履歴に持つ会話で、全リクエストが 400 エラーになる問題を修正
- `--continue` / `--resume` での継続・再開セッションが過去メッセージを変形して再送し、API が Claude の過去の推論を破棄してしまうケースをさらに修正
- Claude の作業中に `/model`・`/rename`・`/artifacts` 等の即時スラッシュコマンドを使うと、過去の extended thinking が失われる問題を修正
- 会話中に提供されていた組み込みツールを外した `--tools` で再起動すると、継続・再開会話の extended thinking が失われる問題を修正
- "Invalid `data` in `redacted_thinking` block" でセッションが毎ターン失敗する問題を修正 (thinking ブロックを破棄して1度リトライ)
- 要約リクエストが拒否されたときに compaction が失敗する問題を修正 (フォールバックモデルで再試行)

**権限・設定**

- 設定ファイル内でパターン途中に `:*` を含む Bash 権限ルールがスキップされていた問題を修正。`--allowedTools` と同様に全ソースで有効になり、起動時にマッチ方法の警告が出るようになりました
- `disableClaudeAiConnectors` や `allowManagedPermissionRulesOnly` 等の boolean ロックキーに誤った型の値が入っていると managed settings が無視されていた問題を修正
- managed の `permissions` / `autoMode` / `worktree` / `attribution` 設定が、ネストした値1つの不正でブロック全体ごと無視されていた問題を修正
- macOS の `/Network`・`/.vol` 系カーネルパスに到達するシンボリックリンク経由で CLAUDE.md やルールが起動時に読まれる問題を修正

**UI・その他**

- 画面リーダーモードや引用リスト・長大なリストで、リスト項目冒頭のコードブロックの空行が落ちる問題を修正
- vim モードの `>>`・`r`・`2J`・カウント付き `.` 等、多数の挙動とカーソル位置を修正
- 巨大セッション (未圧縮のものを含む) の resume 時間を改善
- `/artifacts` のタイトル整列、PgUp/PgDn・Home/End・マウスホイール対応

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

### Claude Code v2.1.281 リリース

9月23日のリリース。API 信頼性とプロキシ/ゲートウェイ経由の通信まわりに修正が集中しています。

- リトライ中に API リクエストがセッションを落とす "unrecoverable interface error" クラッシュを修正
- モデルがパース不能なツール呼び出しと出力上限の切り詰めを交互に返すと、`--max-turns` を無視して無限リトライするターンを修正
- 再開セッションが過去ターンを変形して再送する複数のケース (並列ツール呼び出しターン、再接続中の MCP ツール呼び出し入力など) を修正
- 巨大セッションの再開で直近数メッセージしか復元されない問題を修正
- ツール呼び出し中に終了したセッションの再開時、Claude に呼び出しと「結果不明」が伝わるようになり、手動再開で隠れた "Continue" メッセージが入らなくなりました
- MCP サーバーが会話途中で切断・再開後も接続中の場合に、プロンプトキャッシュが失われる問題を修正
- プロキシ/ゲートウェイがストリームを正常終了で切ると、途中で切れた応答が警告なしに完了扱いされる問題と、重複ストリームイベントでツールが2回実行される問題を修正
- インタラクティブ起動が managed-settings のネットワークリクエスト (ネットワーク到達不能時は17秒以上) を待つ問題を修正
- 3MB 超の PDF の読み込み・@メンション時に最大2分の遅延が発生する問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### Claude による新規酵素システム ART の発見

Anthropic Research は、約950体の Claude エージェントが21時間・210万トークンで20万を超えるリバース転写酵素を解析し、新種の酵素システム **ART** を特定したと公開しました。同時にライフサイエンス研究グループと実験室を設立したことも発表されています。

[ソース](https://www.anthropic.com/news)

### Project Swap 公開

従業員201名が参加した書籍交換市場で、Claude エージェントに取引を委任した実験の結果が公開されました。選好順位の一致率は61%、発生した非効率の85%は選好理解の誤りに起因するとされています。

[ソース](https://www.anthropic.com/news)

### `"attribution": false` 設定

`settings.json` に `"attribution": false` を書くことで、コミット・PR の帰属表記をすべて非表示にできるようになりました。旧バージョンの CLI はこの設定を含む設定ファイルごとスキップするため、複数バージョンで共有するファイルではオブジェクト形式を維持する必要があります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### auto モードのサーバー側分類器を既定化

Anthropic API への直接接続かつテレメトリ無効時、auto モードはサーバー側の権限分類器を既定で使うようになりました。`CLAUDE_CODE_AUTO_MODE_SERVER=0` で従来のローカル分類器 (利用量にカウントされる) に戻せます。あわせて、サーバー側でレビューが動く環境では読み取り専用・サンドボックス実行のシェルコマンドもレビュー完了を待ち、フラグが立つとブロックされるよう変更されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

### self-hosted runner の system prompt 受け渡し変更

self-hosted runner は、system prompt をコマンドライン引数ではなくプライベートファイルとして Claude Code に渡すようになりました。大きなプロンプトで起動が失敗しなくなる一方、`--system-prompt` / `--append-system-prompt` を付与するラッパーや `command` フックは **`--system-prompt-file` / `--append-system-prompt-file` への移行が必須**です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### 危険な `rm` 判定の強化

`rm -rf "$(pwd)"` のように削除対象がコマンド置換の出力だけの再帰削除は、auto モードや `--dangerously-skip-permissions` でも Bash の許可ルールがあっても確認を求めるようになりました (`CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT=1` で無効化可)。無応答の場合は2分でコマンドを拒否し、書き換えヒントを返して無人セッションを止めない挙動になっています (`CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT=1` で無効化)。シェル変数＋トップレベルディレクトリ名、作業ディレクトリ由来の変数、バックスラッシュのみの対象も検出対象に加わりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### `maxProseWidth` 設定

ワイドターミナルで Claude の文章の幅だけを制限する `maxProseWidth` 設定が追加されました。表とコードブロックは全幅のまま維持されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

### `anthropic-skills` / `claude-ai` 名前空間の予約

`anthropic-skills` および `claude-ai` 名前空間が claude.ai 同期スキル専用になりました。

- `Skill(anthropic-skills:*)` / `Skill(claude-ai:*)` の許可ルールは、claude.ai から同期されたスキルのみを対象とし、同名を使うプラグインや他のスキルには適用されません
- この名前空間のスキルフォルダ・コマンドファイル・ワークフローコマンドは読み込まれなくなりました (同名プラグイン自体は読み込まれるものの、名前衝突時は同期スキルが優先)
- この名前で設定された MCP サーバーはスキル・プロンプトを公開しなくなります (ツールは動作)。公開したい場合は MCP 設定でサーバー名を変更する必要があります

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

### Claude apps gateway の Bedrock `assume_role` / `guardrail`

Claude apps gateway の Bedrock upstream に以下が追加されました。

- `assume_role`: STS 経由で引き受けた IAM ロールとして Bedrock を呼び出す。必要なら別 AWS アカウント、開発者ごとに1セッションという構成も可能
- `guardrail: {id, version}`: そのupstream経由の全リクエストに Amazon Bedrock guardrail を適用 (全 Bedrock upstream に設定するか、まったく設定しないかのいずれか)

あわせて `telemetry.resource_attributes` (Claude Desktop / `/login` セッションのテレメトリに固定ラベルを付与) と `store.readiness_grace_seconds` (Postgres の短時間の障害中も `/readyz` を ready に保つ) も追加されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### MCP URL モード elicitation 対応

2026-07-28 プロトコル接続で MCP URL モード elicitation に対応しました。MCP サーバーが Claude Code にブラウザベースのフローを開くよう要求でき、サーバー側に完了を通知する手段がない場合も待機ダイアログが画面に残らなくなります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### `/insights` に auto モード推奨を追加

`/insights` に、直近セッションで auto モードが処理できたはずの権限プロンプト数を推定して表示する推奨が追加されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### プロジェクト/ローカル設定での OpenTelemetry 変数を無視

プロジェクト設定・ローカル設定は、エクスポートを有効化する・エンドポイントを設定する・内容をキャプチャする OpenTelemetry 変数 (`CLAUDE_CODE_ENABLE_TELEMETRY`、`OTEL_LOG_*` 等) を無視するようになりました。無視された変数やテレメトリを無効化した変数は、起動時の通知および `/status`・`claude doctor` に一覧表示されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

### `claude plugin validate` に MCP サーバー検証を追加

`claude plugin validate` が MCP サーバーの検証を行うようになりました。読み込み時に黙って捨てられる `.mcp.json` エントリ、未宣言の `${user_config.*}` 参照、安全でない URL を報告します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

### Cloud sessions の GitHub App 接続ステータス表示

Settings › Connectors › GitHub に Claude GitHub App の状態 (アカウントに対してインストール済みか・到達可能か、接続/インストール/再接続の手順) が表示されるようになりました。また、実行中のクラウドセッション (Slack 起点のものを含む) に、別 GitHub オーナーのリポジトリ (fork の upstream 等) を後から追加できるようになっています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

### 大規模セッションの resume 高速化

未圧縮の巨大セッション、多数のファイルを読んだ長時間セッション、圧縮済みの長大セッションいずれについても再開時間が改善されました。特に Agent SDK と Claude Desktop 経由で効果が大きいとされています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

## コミュニティの反応

### Claude Code v2.1.282 リリース

#### ポジティブ

> Claude Code v2.1.282 の `maxProseWidth` 設定で、ワイド端末でも Claude の文章が端まで広がらず読みやすくなった (テーブル・コードは全幅のまま)。 — @dusangran [出典](https://x.com/dusangran/status/2103223414567670101)

ネガティブ・Tips は**該当なし**。

### Claude による新規酵素システム ART の発見

#### ポジティブ

> AI が生物学の革命を起こしている。Anthropic の Claude が950の AI エージェントを使ってわずか21時間で新しい CRISPR 様酵素システム (ART) を発見したことに感動。医学の未来を変える可能性を強く感じる。 — @XzeokaX [出典](https://x.com/XzeokaX/status/2103227724517003461)

ネガティブ・Tips は**該当なし**。

### `"attribution": false` 設定

#### ポジティブ

> Claude Code でコミット/PR に「Co-Authored-By: Claude」が自動付与されるのを `"attribution": false` でオフにしたら、クリーンなコミットメッセージになった。 — @mathd21 [出典](https://x.com/mathd21/status/2103166626808127705)

#### Tips

> Claude Code v2.1.281 で `"attribution": false` を settings.json に設定するとコミット/PR の帰属表記が停止する。旧 CLI は設定ファイル自体をスキップするので注意。 — @masayaneg [出典](https://x.com/masayaneg/status/2103194451183095978)

### その他の機能

以下のトピックについては、X 検索 (直近7日間) で個人ユーザーの実体験・感想投稿は**該当なし**でした。

- Claude Code v2.1.281 リリース
- Project Swap 公開
- auto モードのサーバー側分類器を既定化
- self-hosted runner の system prompt 受け渡し変更
- 危険な `rm` 判定の強化
- `anthropic-skills` / `claude-ai` 名前空間の予約
- Claude apps gateway の Bedrock `assume_role` / `guardrail`
- MCP URL モード elicitation 対応
- `/insights` の auto モード推奨
- OpenTelemetry 変数の無視
- `claude plugin validate` の MCP サーバー検証
- Cloud sessions の GitHub App 接続ステータス表示
- 大規模セッションの resume 高速化

### 日本語コミュニティ

Claude Code のセキュリティ・ガードレール設計と、エージェント運用のコストを実数で開示する記事が目立ちます。本日の `rm` 判定強化やテレメトリ変数の扱い変更と関心の重なる領域です。

- [Claude Code はあなたのメールアドレスを毎回モデルに渡している — 出口をフックで機械的に塞いだ話](https://zenn.dev/minedia/articles/07dab654a07022) (Zenn / yu_yu_yu) — ログイン中アカウントのメールアドレスが毎セッション自動注入される点を、フックでツール経路ごと止める `account-email-guard` の実装
- [Claude Code による依存追加・更新に「調べてからユーザに聞いて」を挟む Hook の紹介](https://zenn.dev/sprix_it/articles/f3ef77c1d46554) (Zenn / a.kobayashi) — サプライチェーン攻撃を念頭に、依存の追加・更新前に調査と人間の確認を挟む Hook
- [CLAUDE.md に書いても守られなかったので、7日ぶん数えてからフックで拒否しました](https://zenn.dev/a1yama/articles/claude-code-hook-deny-vs-prompt) (Zenn / あいやま) — 指示違反を7日で350回計測してからフックでの拒否に切り替えた記録
- [AI オフィス構築ガイド 第7章 (運用コスト) ―― 妖怪8体を動かして、週31ドルの内訳を初めて見た日](https://zenn.dev/fuguruma/articles/20260924-ai-office-ch7-cost) (Zenn / 文車妖妃) — エージェント8体前後の個人運用で実際に1週間いくらかかったかの内訳
- [Claude Code のサブエージェント、5分を境にキャッシュヒット率が変わった ― 9万件のログで確認](https://zenn.dev/ojisan_ai_lab/articles/claude-code-cache-hit-rate-20260924) (Zenn / おじさん AI ラボ) — 流布している「キャッシュヒット率92%」の出どころを辿り、自前ログ9万件で実測
- [n=280 で出した数字を n=4,290 で検算したら、片方は持ち堪えて片方は崩れた](https://zenn.dev/tsutomusaito/articles/tool-error-recount-ja) (Zenn / saito) — ツール失敗の分類を全ログ 4,290件に広げて数え直した検算
- [Claude Code クラウドセッション、使ってみて！](https://zenn.dev/goat_eat_any/articles/claude-code-cloud-sessions) (Zenn / たなちゅー) — 「Claude Code on the web」から改称されたクラウドセッションの基本的な使い方
- [claude mcp add の --scope local / project / user の違いと使い分け](https://qiita.com/aicoding-guide/items/e827d0151736664ef91b) (Qiita / aicoding-guide) — 同じファイルに保存される local と user の違いの整理
- [`/claude-api prompt-audit` とは？ 古いモデル向けプロンプトの「残骸」を見つけるコマンド](https://qiita.com/leomarokun/items/e7f6ba14c386bd3ae981) (Qiita / leomarokun) — 同梱の claude-api スキルのサブコマンド解説

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.282](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)
- [Claude Code v2.1.281](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
