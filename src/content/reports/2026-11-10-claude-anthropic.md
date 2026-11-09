---
title: "Fable 5.2登場、セキュリティ修正も多数"
summary: "Claude Code v2.1.321で新モデルClaude Fable 5.2(1Mコンテキスト、$8/$40 per Mtok)が既定のFableモデルになりました。同じリリースでMCP OAuthやBash権限チェックのセキュリティ修正、mods権限仕様の変更、gatewayの改善も入っています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-10

features:
  - "Claude Fable 5.2"
  - "Fable 5.1からの自動移行"
  - "セキュリティ修正群"
  - "remote-control --settings"
  - "fast modeのフォールバック改善"
  - "mods権限仕様の変更"
  - "Claude apps gateway改善"
  - "Ultraプラン表記"
codex_review: "Fable 5.2の評判はまだ初動で、モデル刷新の評価は保留したい。一方、権限チェックの穴を複数塞いだ点は地味だが、エージェントを無人運用する現場にはモデル更新以上に効く。modの確認省略は便利さと引き換えに、管理者が挙動を追いにくくなりそうだ。"
codex_importance: 3
---

## 公式アップデート

Claude Code v2.1.321(2026-11-09公開)の内容です。

### Claude Fable 5.2

- 新モデル `claude-fable-5-2` が追加され、既定のFableモデルになった
- コンテキストは1M。料金は入力$8 / 出力$40 per Mtok、キャッシュ読み込みは$0.20 per Mtok
- Fableを含むプランのEnterpriseシートで、Fableに切り替えると「Draws from usage credits」の注記が出る不具合も修正された

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### Fable 5.1からの自動移行

- 保存済みのFable 5.1指定は `fable` に移る
  - Pro / Maxプランはすぐに移る
  - Team / Enterpriseプランは組織が許可してから移る
- Fable 5.1に戻すには `/model claude-fable-5-1` を使う

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### セキュリティ修正群

- MCP OAuthで、サーバーがリダイレクトしたときにリフレッシュトークンなどの秘密情報を別のホストへ送っていた問題を修正
- 読み取り専用のBashコマンドが、許可プロンプトなしでサンドボックスの外で実行されるケースを修正
- Bashの権限チェックが、ファイル書き込みを間違ったフォルダで判定してプロンプトを出さないケースを修正
- `cp` / `mv` でディレクトリにコピー・移動したとき、書き込まれるファイルにdenyルールと保護ファイルのプロンプトが効かなかった問題を修正
- `/bin/cp` のようにパスで書いた `cp` / `mv` にも、同じパスチェックをかけるよう変更
- 名前に文字方向や制御文字を隠したファイルは送信を拒否するよう変更。Claudeアプリで別の名前に見える問題への対策
- 一部のフォントで空白に見えるバムン文字を含むスキル名・コマンド名を拒否するよう変更

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### remote-control --settings

- `claude remote-control` に `--settings <file>` が追加された。起動するすべてのセッションに設定ファイルを適用する
- 設定ファイルを変更した場合、`claude remote-control` を再起動するまで新しいセッションは始まらない
- Remote Controlのセッションは、起動したフォルダに固定されるよう変更された。接続したクライアントから別のフォルダへは移せない

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### fast modeのフォールバック改善

- fast側でレート制限・過負荷・失敗が起きたとき、返答が失われる、モデルが切り替わる、数分間リトライが続く、といった問題を修正。まず同じモデルの標準速度で試すようになった
- `/fast`、`/config`、`/model` のfast modeの表示は、現在のモデルがfast modeに対応していればそのモデル名を出すよう変更。VS Codeの行からは「(Opus only)」が消えた

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### mods権限仕様の変更

- Claudeが書いたmodは、autoモードとbypassモードでは確認なしで有効になるよう変更。managed設定で `allowUnsandboxedCommands: false` や `allowManagedDomainsOnly` を指定していても同じ。`dontAsk` モードでは読み込まれない
- mod自身のツール呼び出し(`$.tool.call`、`$.mcp.call`)は許可プロンプトを出さないよう変更。ユーザーのaskルールがある場合や、`dontAsk` と `-p` での実行も含む。denyルールと組織ポリシーは引き続き適用される
- ヘッドレスセッションは、`.claude/skills` 内のmodのファイルが変わると再読み込みするよう変更。無効にするには `CLAUDE_CODE_PLUGIN_DIR_WATCH=0` を設定する

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### Claude apps gateway改善

- 負荷の高いレプリカでのスペンド上限チェックを改善。スキップするチェックが減り、支出の記録も早くなった
- スペンド上限エラーのリセット時刻を、ローカル時刻で表示するよう変更(例: 「resets 4pm (America/Los_Angeles)」)
- `policy_mode: layered` では、managed MCPサーバーが一致するすべてのポリシー(`match: {}` を含む)から合算されるよう変更。すでにこのモードを使っているgatewayは、アップグレード後に配信するMCPサーバーが増える
- Bedrock / Vertex / Foundryのupstreamは、gatewayの環境にある `ANTHROPIC_*_BASE_URL` 変数を無視するよう変更。別のエンドポイントを使うには、upstreamに `base_url` を設定する
- サインイン制限のメッセージにgatewayの設定名を出さないよう変更(gateway自身のログには引き続き出る)。エラーメッセージのgatewayアドレスからは、ユーザー名とパスワードを除くようになった
- `desktop` 設定にgatewayより新しいフィールド(例: managed MCPサーバーの `oauth.omitResource`)があると、gatewayが起動を拒否していた問題を修正。警告を出したうえで配信するようになった

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

### Ultraプラン表記

- 「Upgrade to Max」の選択肢を「Upgrade to Max or Ultra」に変更
- セッションフィードバックのメッセージと `allowedProviders` 設定の説明に、Pro・Maxと並んでUltraを記載
- `forceLoginMethod` の説明を、すべての有料Claudeプランが対象になる内容に更新

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)

## コミュニティの反応

### Claude Fable 5.2

全体として好意的です。公開直後のため、第一印象を伝える短い投稿が中心でした。

#### ポジティブ

> Fable 5.2をhighで使い始めたところ、最初の手応えはとても良い — @Jacksonnunnyt [出典](https://x.com/Jacksonnunnyt/status/2119897965347139678)

> Opus 5.5で戻ってきたが、Fable 5.2も素晴らしい — @ArkStabler [出典](https://x.com/ArkStabler/status/2119897946653122756)

> 「Happy Fable 5.2 day.」とリリース日を歓迎 — @CodeWithKarma [出典](https://x.com/CodeWithKarma/status/2119897942874370350)

#### Tips

> 自作ツールのUsageページで、Fable 5.2のリクエストごとのAPI換算額を表示できるようにした(Fast modeにも対応) — @ericskavinski [出典](https://x.com/ericskavinski/status/2119897974754979885)

#### ネガティブ

該当なし

### Fable 5.1からの自動移行

該当なし

### セキュリティ修正群

X上では、個人ユーザーの反応は見つかりませんでした。

#### Tips

v2.1.321より前に公開された記事ですが、今回修正されたdenyルールの書き方そのものを扱っています。

- [無人で回す Claude Code の Bash を、settings.json の permissions でコマンドの形ごとに絞る](https://zenn.dev/tasukina/articles/unattended-claude-code-bash-permissions)(Zenn)
  - 無人実行時に、denyルールでコマンドの形ごとにBashを制限する手順をまとめている
  - 同じ `git push` を別の書き方で止めるdeny行が2つ必要になった事例も紹介している

### remote-control --settings

該当なし

### fast modeのフォールバック改善

該当なし

### mods権限仕様の変更

X上では、今回の仕様変更への反応は見つかりませんでした。Zennには、mod機能を使った作例が投稿されています。どちらも今回の変更より前に公開されたもので、トーンは好意的・実践的です。

#### Tips

- [Claude の推奨にそのまま乗る前に、反対意見入りの返事を書いてくれるボタンを作った【三人寄れば文殊の知恵】](https://zenn.dev/yando/articles/bb54e3351c9512)(Zenn)
  - 入力欄の上に「monju」ボタンを置くmodの作例
  - ボタンを押すとOpus 5.5が第三者の目でやり取りを読み、反対意見を軸にした返事の下書きを入力欄に足す
- [Claudeデスクトップアプリの「新しいウィンドウ」に無いボタンを、mod 機能で足してみた](https://zenn.dev/nexta_/articles/claude-desktop-mod-buttons)(Zenn)
  - デスクトップアプリの入力欄の上にボタンを並べ、パネルの開閉や定型文の送信をワンクリックにした
  - 作ってみて分かったmod機能の制約もまとめている

### Claude apps gateway改善

該当なし

### Ultraプラン表記

該当なし

## ソース

- [Claude Code v2.1.321 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.321)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn: 無人で回す Claude Code の Bash を、settings.json の permissions でコマンドの形ごとに絞る](https://zenn.dev/tasukina/articles/unattended-claude-code-bash-permissions)
- [Zenn: Claude の推奨にそのまま乗る前に、反対意見入りの返事を書いてくれるボタンを作った](https://zenn.dev/yando/articles/bb54e3351c9512)
- [Zenn: Claudeデスクトップアプリの「新しいウィンドウ」に無いボタンを、mod 機能で足してみた](https://zenn.dev/nexta_/articles/claude-desktop-mod-buttons)
