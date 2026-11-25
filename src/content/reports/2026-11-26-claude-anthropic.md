---
title: "v2.1.332でMCPサーバーのスキル読み込みに対応"
summary: "Claude Code v2.1.332 で、MCPサーバーが配るスキルを読み込めるようになりました(ベータ)。スキルのシェルコマンドを止める PreSkillShellCommand フック、クラウド各社でのモデルエイリアスと既定モデルの変更も入っています。Messages API を Rust に移したというエンジニアリング記事も話題になりました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-26

features:
  - "[Claude Code] MCPサーバー提供のスキル(ベータ)"
  - "[Claude API] Messages APIのRust移行"
  - "[Claude Code] モデルエイリアスと既定モデルの変更"
  - "[Claude Code] PreSkillShellCommandフック"
  - "[Claude Code] Cyber Verification Programのティア表示"
  - "[Claude Code] Bedrock/Agent Platform/FoundryのSonnet 5系で自動的にauto mode"
  - "[Claude Code] OpenTelemetryのassistant_responseイベントとservice.nameの変更"
  - "[Claude Code] 他セッションからの保留メッセージに「Always deliver」"
  - "[Claude Code] 音声入力の時間延長"
  - "[Claude Code] 「routine」を「cloud scheduled task」に改称"
codex_review: "MCP経由で手順を配れるのは、ツール連携を「使い方」まで含めて標準化する一歩で、地味だが現場には効きそうだ。一方、今回はベータ対応と運用調整が中心で、Rust移行の性能改善も出典の数値が揺れており、業界全体を動かすほどではない。"
codex_importance: 3
---

## 公式アップデート

Claude Code v2.1.332 が 2026-11-25 に GitHub Releases で公開されました。主な変更は次のとおりです。

### [Claude Code] MCPサーバー提供のスキル(ベータ)

MCP サーバーが提供するスキルを読み込めるようになりました(ベータ)。MCP サーバーのスキルは `/` メニューに `server:skill` の形で表示されます。ほかのスキルの名前は変わりません。

関連して、computer use を有効にした Mac では `computer-use` が予約されたスキル名になりました。同じ名前の自作スキルやコマンドは読み込まれなくなり、起動時に名前を変えるよう案内が出ます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] PreSkillShellCommandフック

新しいフックイベント `PreSkillShellCommand` が追加されました。スキルやコマンドを読み込むときに、その中のインラインシェルコマンドを拒否できます。2.1.331 以前のバージョンでは、このイベントを書いた設定ファイルがあると、起動時にダイアログが表示されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] モデルエイリアスと既定モデルの変更

クラウドごとのモデルエイリアスと既定モデルが次のように変わりました。

- Google Cloud の Agent Platform と Microsoft Foundry では、`sonnet` が Sonnet 5.5 を指すようになりました。Foundry では `opus` も Opus 5.5 を指します。Amazon Bedrock の `sonnet` は Sonnet 4.5 のままです
- Bedrock Mantle で `sonnet` が Haiku 4.5 になっていた問題を修正しました。今は Sonnet 5(Sonnet 5.5 ではない)を指します。Sonnet 5 を使えないアカウントではエラーになるので、先に有効にする必要があります
- Microsoft Foundry の既定モデルは Sonnet 5.5 になりました。`claude-sonnet-5-5` をデプロイするか、デプロイ済みのモデルを `ANTHROPIC_DEFAULT_SONNET_MODEL` に設定します
- Agent Platform の `sonnet` とバックグラウンドリクエストは、`VERTEX_REGION_CLAUDE_5_5_SONNET` を読むようになりました。`4_5` の変数だけが設定されている場合は、`CLOUD_ML_REGION` か `us-east5` に送られます
- `--model default` や Default を選んだときにそのモデルが使えない場合、エラーで止まらずに古いモデルに切り替わるようになりました。auto mode では、auto mode が受け付けるモデルにだけ切り替わります
- Microsoft Foundry では、Claude Sonnet 4、Opus 4、Opus 4.1 が提供終了扱いになりました。モデルの切り替えはこれらより上で止まり、これらを固定していると警告が出ます
- Claude apps gateway の組み込みモデル一覧で、2番目のモデルが Sonnet 4.5 から Sonnet 5.5 に替わりました

このほか、Bedrock、Agent Platform、Foundry、ゲートウェイの経由でモデルが拒否されたときに、同じファミリーの古いモデルへ切り替える修正がいくつか入っています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] Bedrock/Agent Platform/FoundryのSonnet 5系で自動的にauto mode

Bedrock Mantle、Agent Platform、Foundry で Sonnet 5 または 5.5 に移ったターミナルと VS Code のセッションは、モードを設定していなければ auto mode で始まるようになりました。止めたい場合は `disableAutoMode` を `"disable"` に設定します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] Cyber Verification Programのティア表示

claude.ai アカウントでサインインしていて、Cyber Verification Program のアクセスティアがそのモデルに適用される場合、起動時のヘッダーでモデル名の横にティアが表示されるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] OpenTelemetryのassistant_responseイベントとservice.nameの変更

- レスポンスのログを有効にしている場合、Claude が SendUserMessage や Cowork のメッセージツールで送ったテキストを記録する `assistant_response` イベントが出るようになりました
- それ以外の場合、`tool_input` には、これらのツールで送ったテキストの長さだけが記録されます(全文を記録するには `OTEL_LOG_ASSISTANT_RESPONSES=1`)
- デスクトップアプリの Code タブのセッションでは、既定の `service.name` が `claude-code-desktop` になりました。`claude-code` で絞り込んでいるフィルターは更新が必要です。前の名前のままにするには `OTEL_SERVICE_NAME` を設定します

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] 他セッションからの保留メッセージに「Always deliver」

ほかのセッションから届いて保留されたメッセージの確認画面に、「Always deliver」という選択肢が追加されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] 音声入力の時間延長

タップモードの音声入力は、新しい言葉が60秒入らないか、合計10分になるまでマイクがオンのままになりました(以前は15秒と2分)。止まったあとのテキストは送信されずに残り、次にタップすると続きを追加できます。プロンプトを送ったときに止まるほか、プロンプトを編集したとき、パネルで覆われたとき、接続や録音プログラムが失われたときには、理由を表示して止まります。VS Code 拡張の音声入力も同じく60秒・10分に延びました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude Code] 「routine」を「cloud scheduled task」に改称

`/schedule`、権限の確認画面、`/loop` のクラウドの案内で、「routine」や「cloud schedule」という表記が「cloud scheduled task」に変わりました。`/routines` コマンドはそのまま使えます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)

### [Claude API] Messages APIのRust移行

Anthropic のエンジニアリング記事で、Messages API を Python から Rust に移したことが紹介されました。リクエストあたりの CPU は約70%減り、最初のトークンまでの時間(TTFT)の中央値は約20%短くなったとしています。

元の記事の URL は今回の入力データに含まれていないため、リンクは付けていません。

## コミュニティの反応

### [Claude Code] MCPサーバー提供のスキル(ベータ)

X/Twitter では、Anthropic の「Skills over MCP」発表を共有する投稿は見られました。Claude Code での `server:skill` の読み込みを実際に使った感想や Tips は見つかりませんでした。

#### 中立

> Skills over MCP は、エージェント向けの手順書であるスキルを MCP サーバーから配れるようにする MCP の公式拡張だと説明している。社内ポータルに業務マニュアルを置けば各自がコピーせずに最新版を開けるのと同じ発想で、GitHub MCP Server のようにツールと一緒に使い方を配るほか、ツールを持たずチームの業務手順だけを配るサーバーも立てられる。提案文書は SEP-2640 — shogo-h「Skills over MCP：MCPサーバーからスキルを配れるようになりました」 [出典](https://zenn.dev/shogo_h/articles/skills-over-mcp-overview)

> 2026-11-25 の Claude Code ドキュメント更新で、スキルをどこから読み込み、どの実行形態で使えるかの記述が増えたことを整理している — akihidem「11/25 の公式ドキュメント更新：MCP提供スキルの対応範囲と設定の読み込み失敗」 [出典](https://qiita.com/akihidem/items/19fb2e39c8ebccb016f9)

### [Claude API] Messages APIのRust移行

#### ポジティブ

> Messages API を Python から Rust へ移した事例をまとめ、CPU 使用量の削減や TTFT の改善を高く評価している。AI に本番のコードを書かせる可能性についても前向きに論じている — @paulnugent92159 [出典](https://x.com/paulnugent92159/status/2124472987747504315)

この投稿では CPU の削減を40〜50%、TTFT の改善を10〜20%としており、Step 1 で抽出した数値(CPU 約70%減、TTFT 中央値約20%短縮)とは食い違っています。どちらが正しいかは元の記事で確認が必要です。

### [Claude Code] モデルエイリアスと既定モデルの変更

該当なし

### [Claude Code] PreSkillShellCommandフック

該当なし

### [Claude Code] Cyber Verification Programのティア表示

該当なし

### [Claude Code] Bedrock/Agent Platform/FoundryのSonnet 5系で自動的にauto mode

該当なし

### [Claude Code] OpenTelemetryのassistant_responseイベントとservice.nameの変更

該当なし

### [Claude Code] 他セッションからの保留メッセージに「Always deliver」

該当なし

### [Claude Code] 音声入力の時間延長

該当なし

### [Claude Code] 「routine」を「cloud scheduled task」に改称

該当なし

## ソース

- [Claude Code v2.1.332 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.332)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Skills over MCP：MCPサーバーからスキルを配れるようになりました (Zenn)](https://zenn.dev/shogo_h/articles/skills-over-mcp-overview)
- [11/25 の公式ドキュメント更新：MCP提供スキルの対応範囲と設定の読み込み失敗 (Qiita)](https://qiita.com/akihidem/items/19fb2e39c8ebccb016f9)
- [@paulnugent92159 の投稿 (X)](https://x.com/paulnugent92159/status/2124472987747504315)
