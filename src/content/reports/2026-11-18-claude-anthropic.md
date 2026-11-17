---
title: "Claude Code v2.1.326、Code Modeがチームに対応"
summary: "Claude Code v2.1.326 が公開されました。エージェントチームを有効にしたまま Code Mode を使えるようになり、Remote Control の返信はスマホやブラウザへ逐次表示されるようになりました。権限チェックとサンドボックスも強化され、/update-config は約93,000トークンから約13,000トークンに軽くなりました。修正項目が非常に多いリリースです。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-18

features:
  - "[Claude Code] v2.1.326 Code Mode × エージェントチーム対応"
  - "[Claude Code] v2.1.326 Remote Control の返信ストリーミング"
  - "[Claude Code] v2.1.326 権限・サンドボックス強化"
  - "[Claude Code] v2.1.326 /update-config の軽量化"
  - "[Claude Code] v2.1.326 max_tokens 超過時の自動リトライ"
  - "[Claude Code] v2.1.326 ツール指定の起動時警告"
  - "[Claude Code] v2.1.326 /status の機能無効化表示"
  - "[Claude Code] v2.1.326 /help <command> 追加"
  - "[Claude Code] v2.1.326 OTEL_RESOURCE_INCLUDE_HOST 追加"
  - "[Claude Code] v2.1.326 Ctrl+O で非表示の起動通知を表示"
codex_review: "派手な新機能より、チーム実行時の権限境界や遠隔操作の手触りを詰めた、現場寄りの更新として面白い。Code Modeの大幅なトークン削減は期待を誘うが、料金差は小さく、業界全体を動かすというより日々の開発体験を着実に整える一歩だ。"
codex_importance: 2
---

## 公式アップデート

Claude Code v2.1.326 が 2026-11-16(UTC)に公開されました。数百件規模の修正・改善を含む大きなリリースです。主な変更は以下のとおりです。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.326)

### [Claude Code] v2.1.326 Code Mode × エージェントチーム対応

- エージェントチームを有効にしたままでも Code Mode を有効にできるようになりました。
- すでに Code Mode を有効にしている場合、チームが有効なセッションは Code Mode で始まります。
- Code Mode まわりのその他の変更:
  - Code Mode の権限チェックを改善し、サンドボックス内のコマンドのうち、確認を求めたり拒否したりするものを増やしました
  - Code Mode を有効にできないときのメッセージで、ユーザーが取れる対処を示すようにしました
  - 次の不具合を修正しました:
    - auto mode でスキルやスラッシュコマンドが読み込めない
    - Code Mode で起動したバックグラウンドのサブエージェントが失敗する
    - mod から `$.tool.call` / `$.tool.check` を使ってツールを呼べない

### [Claude Code] v2.1.326 Remote Control の返信ストリーミング

- `claude remote-control`、Claude Desktop、VS Code のセッションの返信が、書かれていく途中からスマホやブラウザに表示されるようになりました。
- Remote Control まわりのその他の修正:
  - サーバーが一時的に応答しないと、返信の途中で接続が切れる
  - 短いターミナル(80×24 など)で QR コードが切れて表示される
  - バックグラウンドのサブエージェントが動いているのに、スマホ側でアイドルと表示される
- Remote Control やクラウドセッションのプッシュ通知で、シークレットを伏せる処理も改善されました。

### [Claude Code] v2.1.326 権限・サンドボックス強化

- Bash の権限チェックを改善しました。一部のコマンドは事前に確認を求め、確認に答える人がいない場面では拒否します。
- macOS / Linux / WSL で Bash サンドボックスの保護を強化しました。
- セッションの mods フォルダ内の編集は確認を求める回数が増え、サンドボックス内のコマンドが書き込めるフォルダは減りました。
- 主な修正:
  - `Edit` の deny ルールの対象がコピー元だけでも、`cp` が拒否される
  - ファイルを削除・上書きするコマンド(`find -delete`、`cat a > b` など)が、トランスクリプト上で検索や読み込みとして要約される

### [Claude Code] v2.1.326 /update-config の軽量化

ターミナルでの `/update-config` が使うコンテキストを、約93,000トークンから約13,000トークンに減らしました。設定の編集が拒否された場合は、変更した設定だけを引用するようになりました。

### [Claude Code] v2.1.326 max_tokens 超過時の自動リトライ

`max_tokens` にモデルの上限を超える値を指定してもエラーで止まらなくなりました。Anthropic API が報告する上限値で、自動的にリクエストをやり直します。

### [Claude Code] v2.1.326 ツール指定の起動時警告

`--allowedTools`、`--disallowedTools`、`--tools` に、ルールとして不完全に見える値があると、起動時に警告が出るようになりました。

### [Claude Code] v2.1.326 /status の機能無効化表示

プロバイダの設定や、`DISABLE_TELEMETRY` などの環境変数で機能がオフになっている場合、`/status` にその旨を示す行が出るようになりました。同じ理由で使えないコマンドを実行したときも、「Unknown command」ではなく、使えない理由が表示されます。

### [Claude Code] v2.1.326 /help <command> 追加

`/help <command>` が追加されました。また、`/clear --help` のようにヘルプ指定を付けた組み込みコマンドは、アイドル中のプロンプトで実行されず、使い方を表示するようになりました。

### [Claude Code] v2.1.326 OTEL_RESOURCE_INCLUDE_HOST 追加

環境変数 `OTEL_RESOURCE_INCLUDE_HOST` が追加されました。有効にすると、OpenTelemetry のリソース属性に `host.name` と `host.id` が含まれます。既定はオフです。

### [Claude Code] v2.1.326 Ctrl+O で非表示の起動通知を表示

Ctrl+O で、隠れている起動時の通知を表示できるようになりました。

## コミュニティの反応

### [Claude Code] v2.1.326 Code Mode × エージェントチーム対応

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。チーム対応そのものではなく、Code Mode 全般の実測です)Code Mode のオン・オフで同じ依頼を流して比べた記事です。読み込んだトークンは約12万から約5万へ、約6割減りました。一方、料金に換算すると2割前後の減少にとどまったと報告しています。起動方法として `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1 claude` も紹介されています。中立的なトーンの検証です。 — ずんだもんの実験道具箱 [Claude CodeのCode Modeで上限は延びる？ トークン約6割減・料金換算は2割前後の実測](https://zenn.dev/zundamon_tools/articles/claude-code-code-mode-tokens)

X では、この変更に触れた個人の投稿は見つかりませんでした。

### [Claude Code] v2.1.326 Remote Control の返信ストリーミング

#### ポジティブ

該当なし

#### ネガティブ

> Claude Desktop / CLI の Remote Control は分かりにくい点だらけだという不満です。フォルダを選べない、ブラウザ機能を使うには別のパラメータが必要、モバイルアプリの自動・手動モードに制限がある、セッション管理が複雑、といった点を挙げています。ストリーミング対応そのものではなく、Remote Control 全般に対する批判的な投稿です。 — @albertgao [出典](https://x.com/albertgao/status/2122780200907747461)

#### Tips

> Grok Bot を Claude Code の Remote Control につなぐ手順の紹介です。Claude アカウントでサインインし、セッションで Remote Control をオンにしてから、セッション名を指定してメッセージを送ります。コンピュータは起動したままにしておく必要があります。 — @davidellebrecht [出典](https://x.com/davidellebrecht/status/2122782525680697820)

> Claude Code / Claude Desktop / Cursor 向けに、Web UI とストリーミング出力を備えた MCP サーバーの紹介です。uvx を使い、1行でインストールできるとしています。Remote Control の機能そのものではありません。 — @SonoTommy_ [出典](https://x.com/SonoTommy_/status/2122771674282299411)

> (関連記事)スマホから Codex / Claude Code / Antigravity を遠隔操作し、承認もできる OSS コンソールを作った記事です。 — guuguo [スマホから Codex / Claude Code / Antigravity を遠隔操作・承認できる OSS コンソール「Agent Control」を作った（日本語UI対応）](https://qiita.com/guuguo/items/a1b0a6b3e41219379b16)

### [Claude Code] v2.1.326 権限・サンドボックス強化

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の変更には触れていません)AI 向けのメモに書いてあった既知の失敗を、メモで指示する代わりに、フックでコマンドの実行直前に機械的に止めるようにした事例です。 — maruhana [1 行のコマンドが自分を呼び続けて PC が固まった。知っている失敗を、実行の前に機械で止める](https://zenn.dev/maruhana/articles/claude-code-hooks-stop-known-pitfalls)

> (関連記事。今回の変更には触れていません)「push しないで」と指示したサブエージェントが3回 push し、CI に課金された経緯と、その日のうちに入れたフックの紹介です。 — mira [pushしない（はずの）Claude Codeのサブエージェントが3回pushしてCIで0.47ドル課金された話](https://zenn.dev/mirarara/articles/6cd4d241b1f72b)

X では、この変更に触れた個人の実体験・感想は見つかりませんでした。

### [Claude Code] v2.1.326 ツール指定の起動時警告

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> v2.1.326 からは、`--allowedTools` / `--disallowedTools` に不完全なルールがあると起動時に警告が出るので、Ctrl+O で隠れた通知を確認するよう呼びかける投稿です。中立的な注意喚起です。 — @timwork_notes [出典](https://x.com/timwork_notes/status/2122760075848585518)

### [Claude Code] v2.1.326 /update-config の軽量化

該当なし

### [Claude Code] v2.1.326 max_tokens 超過時の自動リトライ

該当なし

### [Claude Code] v2.1.326 /status の機能無効化表示

該当なし

### [Claude Code] v2.1.326 /help <command> 追加

該当なし

### [Claude Code] v2.1.326 OTEL_RESOURCE_INCLUDE_HOST 追加

該当なし

### [Claude Code] v2.1.326 Ctrl+O で非表示の起動通知を表示

該当なし(上の「ツール指定の起動時警告」で紹介した @timwork_notes の投稿が、Ctrl+O での確認に触れています)

## ソース

- [Claude Code v2.1.326 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.326)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn: Claude CodeのCode Modeで上限は延びる？](https://zenn.dev/zundamon_tools/articles/claude-code-code-mode-tokens)
- [Zenn: 知っている失敗を、実行の前に機械で止める](https://zenn.dev/maruhana/articles/claude-code-hooks-stop-known-pitfalls)
- [Zenn: pushしない（はずの）サブエージェントが3回pushした話](https://zenn.dev/mirarara/articles/6cd4d241b1f72b)
- [Qiita: Agent Control](https://qiita.com/guuguo/items/a1b0a6b3e41219379b16)
