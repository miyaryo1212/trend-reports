---
title: "v2.1.331でCode Modeがクラウド各社に対応"
summary: "Claude Code v2.1.331 が公開され、Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry などのターミナルセッションで Code Mode が使えるようになりました。VS Code 拡張の新しいクイックフィックス、プラグインの任意依存、OIDC や OpenTelemetry の拡張も入っています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-25

features:
  - "[Claude Code] v2.1.331 Code Mode のサードパーティ対応"
  - "[Claude Code] VS Code 拡張の新機能"
  - "[Claude Code] プラグインの optionalDependencies"
  - "[Claude Code] claude doctor の API 接続チェック"
  - "[Claude Code] Claude apps gateway の OIDC 拡張"
  - "[Claude Code] OpenTelemetry の gen_ai 属性"
  - "[Claude Code] CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION"
  - "[Claude Code] マネージドマーケットプレイスの自動更新を予告"
codex_review: "派手なモデル進化ではないが、主要クラウド環境への対応と監視・認証の整備は、企業が既存の基盤にClaude Codeを載せる際の摩擦を減らす。Code Modeの効果が任意の互換APIにも広がるかは、まだ見極めが必要だ。"
codex_importance: 3
---

## 公式アップデート

Claude Code v2.1.331 が 2026-11-23 に GitHub Releases で公開されました。主な変更は次のとおりです。

### [Claude Code] v2.1.331 Code Mode のサードパーティ対応

次の環境のターミナルセッションで、Code Mode を使えるようになりました。

- Amazon Bedrock
- Google Cloud's Agent Platform
- Microsoft Foundry
- Claude Platform on AWS

あわせて、Code Mode まわりで次の修正と改善が入っています。

- 長いスクリプト出力の途中が欠ける問題を修正。Claude には欠けていない全文のパスが渡ります(#111373)
- `--resume` / `--continue` で別の権限モードから再開したとき、thinking とプロンプトキャッシュが失われる問題を修正
- スクリプトの実行中に `!` やスラッシュコマンドを入力すると、約1秒ごとにリクエストが送られる問題を修正
- `--bare` で起動したとき、スクリプトから何を呼べるかが Claude に伝わらない問題を修正
- ツール検索で、MCP ツールの説明(上限、形式、既定値など)をより多く表示するように改善

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] VS Code 拡張の新機能

VS Code 拡張に、次の操作が追加されました。

- **Fix with Claude Code**: エラーや警告のクイックフィックスとして表示されます。テストピークと Test Results ビューの失敗したテストにも表示され、問題の内容をチャット欄に入れます
- **Resolve Merge Conflicts**: マージ競合のあるファイルのエディタタイトルと、ソース管理の Merge Changes グループに追加
- **Add Cell to Chat**: ノートブックのセルメニューに追加。セルを出力やエラーと一緒に添付します
- **Add to Chat**: ソース管理ビューで、変更されたファイルの右クリックメニューに追加

このほか、非常に大きな選択範囲やテキストファイルを送る前に通知を出すようになりました。「Prompt is too long」のときは、大きすぎる部分と次に何をすればよいかを表示します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] プラグインの optionalDependencies

プラグインの manifest に `optionalDependencies` を書けるようになりました。ここに挙げたプラグインは、元のプラグインと一緒にインストールされ、個別に無効化やアンインストールができます。プラグインの自動更新の通知でも、依存として新しくインストールしたプラグインを、更新したプラグインとは分けて表示するようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] claude doctor の API 接続チェック

`claude doctor` に API 接続のセクションが追加されました。API に届くかどうかを HTTP ステータスやエラー内容と一緒に表示し、テストしなかった場合はその理由を表示します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] Claude apps gateway の OIDC 拡張

- `oidc.groups_jsonpath`: オブジェクトのリストのうち条件に合う要素からグループを読み取ります。JSONPath(RFC 9535)の一部の書き方に対応しています
- `CLAUDE_GATEWAY_IDP_CONNECT_BY_HOSTNAME=1`: `oidc.use_proxy: true` のとき、`NO_PROXY` が設定されていても、サインインのリクエストで `https` の IdP のホスト名をプロキシに渡します

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] OpenTelemetry の gen_ai 属性

`claude_code.llm_request` のトレーススパンに、`gen_ai.usage.*`、`gen_ai.response.model`、`gen_ai.operation.name` が追加されました。`gen_ai.usage.input_tokens` にはプロンプトキャッシュのトークンも含まれます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION

圧縮されたレスポンスを途中で切ってしまうプロキシの環境向けに、非圧縮のレスポンスを要求する環境変数 `CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION` が追加されました。リリースノートには、self-hosted runner と Remote Control ではまだ使うことを勧めないと書かれています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

### [Claude Code] マネージドマーケットプレイスの自動更新を予告

2026-11-30 以降のリリースで、managed settings の `extraKnownMarketplaces` に登録したプラグインマーケットプレイスが、既定で自動更新されるようになります。自動更新を止めたいマーケットプレイスには、そのエントリに `"autoUpdate": false` を設定します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)

## コミュニティの反応

### [Claude Code] v2.1.331 Code Mode のサードパーティ対応

X/Twitter では、公式発表を共有する投稿は見られましたが、個人ユーザーの実体験や感想にあたる投稿は見つかりませんでした。

#### 中立

> Claude Code の呼び出し先を DeepSeek の Anthropic 互換 API に替えた環境(v2.1.326)では、Code Mode をオンにしても起動しなかった。そこで考え方だけを手元で再現し、通常のツール呼び出しとトークン数・往復回数を比べた。数字は Code Mode 本体を測ったものではないと断っている — ts「Code ModeをDeepSeekで再現してトークンが減るか試してみた」 [出典](https://zenn.dev/ts/articles/claude-code-code-mode)

今回対応したのは Bedrock や Google Cloud Agent Platform などの指定のプラットフォームです。この記事が試した任意の互換 API は含まれていません。

### [Claude Code] VS Code 拡張の新機能

該当なし

### [Claude Code] プラグインの optionalDependencies

該当なし

### [Claude Code] claude doctor の API 接続チェック

該当なし

### [Claude Code] Claude apps gateway の OIDC 拡張

該当なし

### [Claude Code] OpenTelemetry の gen_ai 属性

該当なし

### [Claude Code] CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION

該当なし

### [Claude Code] マネージドマーケットプレイスの自動更新を予告

該当なし

## ソース

- [Claude Code v2.1.331 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.331)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Code ModeをDeepSeekで再現してトークンが減るか試してみた (Zenn)](https://zenn.dev/ts/articles/claude-code-code-mode)
