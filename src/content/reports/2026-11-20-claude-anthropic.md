---
title: "Anthropic IPO価格決定、auto mode拡大"
summary: "AnthropicがIPO価格を1株83ドルに決め、11/19にNasdaq(ANT)で取引を始める予定です。Claude Code v2.1.328では、Bedrockなどサードパーティ環境のOpus 4.6/Sonnet 4.6でauto modeが使えるようになりました。あわせて/code-reviewの仕様変更、Code Modeの高速化、mcp_toolフックのonFailure: blockが入っています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-20

features:
  - "[Anthropic] IPO価格決定"
  - "[Claude Code] v2.1.328 サードパーティ環境でのauto mode"
  - "[Claude Code] v2.1.328 /code-review の仕様変更"
  - "[Claude Code] v2.1.328 Code Mode改善"
  - "[Claude Code] v2.1.328 mcp_toolフックの \"onFailure\": \"block\""
  - "[Claude Code] v2.1.328 Self-hosted runner機能追加"
  - "[Claude Code] v2.1.328 CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME"
  - "[Anthropic] Cyber Verification Program更新"
codex_review: "IPOの83ドルは注目を集める一方、価格だけでは事業の持続性までは測れず、話題先行の印象もある。むしろ地味だが、失敗時にMCP操作を止めるフックや企業向けランナーの改善は、AIエージェントを実務に組み込む際の信頼性を底上げする。"
codex_importance: 3
---

## 公式アップデート

### [Anthropic] IPO価格決定

Anthropic が新規株式公開(IPO)の価格を決めました。

- Class A 株を1株83ドルで、9.8億株公開します。
- Nasdaq で、ティッカー「ANT」として 11/19 に取引を始める予定です。

今回の入力データには、発表本文と個別のURLが含まれていません。詳細は Anthropic の公式発表を確認してください。

### [Claude Code] v2.1.328 サードパーティ環境でのauto mode

Claude Code v2.1.328 が 2026-11-19(UTC)に公開されました。

次の環境の Claude Opus 4.6 / Sonnet 4.6 で auto mode が使えるようになりました。

- Amazon Bedrock
- Google Cloud の Agent Platform
- Microsoft Foundry
- Claude apps gateway

権限モードを指定せずに始めた対話セッションは、auto mode で開始します。

関連する変更:

- サードパーティプロバイダーの Opus 4.6 / Sonnet 4.6 でも、新しいモデルと同じく、plan mode と Bash の確認で auto mode を使い、auto mode を選択肢として示すようになりました。両方とも `disableAutoMode` で無効にできます。
- 次の条件がすべてそろうと、Claude Desktop 以外で auto mode が毎ターン失敗する不具合を修正しました。
  - `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` を設定している
  - ベータ機能を拒否するゲートウェイを経由している
  - Bedrock / Agent Platform / Foundry / Claude apps gateway を使っている
- サブエージェントの進捗要約に付けた effort 設定を Bedrock / Agent Platform / Foundry が拒否すると、そのセッションの間、サブエージェントのモデルで effort が無効になっていました。この不具合(2.1.327 からのリグレッション)を修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

### [Claude Code] v2.1.328 /code-review の仕様変更

- ほとんどのモデルで、`/code-review` が報告するのはバグと CLAUDE.md 違反だけになりました。再利用・簡素化・効率化の指摘がほしい場合は `/simplify` を使います。
- ほとんどのモデルで、指摘ごとに Important / Pre-existing / Nit のいずれかの区分が付き、各要約の最後に修正案が付くようになりました。
- 問題がなかったときは「Code review found no issues.」と表示されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

### [Claude Code] v2.1.328 Code Mode改善

改善点:

- auto / bypass-permissions モードで、ほとんどのスクリプトの実行後に入っていた 0.75 秒の待機をなくしました。
- スクリプトが実行中のコマンドと、その出力を表示するようになりました。
- ツールの説明文を短くして、トークン使用量を減らしました。
- MCP サーバーを使う新しいセッションで、プロンプトキャッシュが効きやすくなりました。サーバーが接続中であることや、サーバーの一覧が変わったことを Claude に伝えるようになりました。
- 何も変えない edit でスクリプトが止まらなくなりました。edit が失敗したときは、一致した箇所や最も近い箇所を Claude に伝えます。
- auto / bypass モードでは、開発サーバーを `/tasks` に表示されるバックグラウンドタスクとして起動するよう Claude に指示します。

挙動の変更:

- スクリプトの出力に対して UserPromptSubmit フック(管理フックを含む)を実行しなくなりました。出力を伏せたい場合は、PostToolUse フックの `updatedToolOutput` を使います。

不具合修正(主なもの):

- 権限の確認などが10分間開いたままだと、スクリプトが止まる問題
- 前のスクリプトの実行中に接続した MCP サーバーを呼べない問題
- `{` ブロックで始まるスクリプトや、トップレベルの `await` と `return` を両方使うスクリプトが拒否される問題
- 読み取り専用のサブエージェントに、使えない `write()` / `edit()` を提示していた問題

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

### [Claude Code] v2.1.328 mcp_toolフックの "onFailure": "block"

`mcp_tool` フックでも、command フックや HTTP フックと同じく `"onFailure": "block"` を指定できるようになりました。フックの呼び出し自体が失敗したとき、その操作をブロックします。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

### [Claude Code] v2.1.328 Self-hosted runner機能追加

追加:

- `--repository-folder`: `--capacity 1` のとき、セッションがリポジトリに使うフォルダを名前で指定できます。ベースフォルダの下のパスの代わりに使い、シンボリックリンクは指定できません。
- `claude self-hosted-runner orchestrator` の `--hook-label`: 選んだセッションラベルを `spawn-runner` フックに渡します。
- `claude --environment` の `--metadata key=value`: `spawn-runner` フック向けにセッションへラベルを付けます。
- オーケストレーターの `/metrics` に次のメトリクスを追加しました。
  - `claude_code_self_hosted_orchestrator_session_queue_wait_by_reason_seconds`: 再開したセッションの待ち時間を、新しいセッションの待ち時間と区別できます。
  - `claude_code_self_hosted_orchestrator_sessions_given_up_total`: Anthropic がセッション用ランナーの起動をあきらめた回数を、原因別に数えます。
- ホストの settings.json で、セッションが無視するデフォルト権限モードを設定している場合、起動時に警告します。

変更:

- 設定で Claude の GitHub ツールを名前指定で制限している環境では、組み込みの `gh api` が既定で無効になりました。`--use-anthropic-gh true` で有効にできます。

修正:

- プロキシや Web フィルタが、ポーリングに HTTP 200 と `{}` のような本文で応答すると、実行中のセッションがすべて止まっていました。こうしたポーリングは再試行するようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

### [Claude Code] v2.1.328 CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME

環境変数 `CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME` を追加しました。フックが保留したツール呼び出しを、`claude -p --resume` や `--continue` で実行させないよう、ホスト側で止められます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

### [Anthropic] Cyber Verification Program更新

Cyber Verification Program が 11/18 に更新されました。

- Red Team Access と Specialized Access は、Enterprise と API のプランだけで提供されるようになりました。
- Specialized Access の対象者が明確にされました。

今回の入力データには、発表本文と個別のURLが含まれていません。詳細は Anthropic の公式情報を確認してください。

## コミュニティの反応

### [Anthropic] IPO価格決定

該当なし

### [Claude Code] v2.1.328 サードパーティ環境でのauto mode

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。auto mode には触れていません)Claude Desktop から Amazon Bedrock に、アクセスキーを使わず「インタラクティブサインイン」で接続する手順の解説です。静的な API キーを端末に置かず、CloudTrail で呼び出した人を区別できる点を利点に挙げています。中立的な解説です。 — Takumi Saito [アクセスキー不要！ Claude Desktop から Amazon Bedrock にインタラクティブサインインで接続する](https://zenn.dev/aws_japan/articles/claude-desktop-bedrock-interactive-signin)

X では、この変更に触れた個人の実体験・感想は見つかりませんでした。

### [Claude Code] v2.1.328 /code-review の仕様変更

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> (関連記事。今回の仕様変更には触れていません)Flutter と Firebase のアプリで、リリース前に AI コードレビューを何周も回した記録です。直すたびに新しい指摘が出て、設計を3回作り直した経験から、「指摘を直す」より大事な回し方を振り返っています。内省的なトーンです。 — CenterRiverStudio [AIレビューを何周も回して分かった、「指摘を直す」より大事なこと](https://zenn.dev/crs/articles/06-ai-review-loop)

X では直近7日間の投稿から、この仕様変更についての個人の実体験は見つかりませんでした。

### [Claude Code] v2.1.328 Code Mode改善

#### ポジティブ

> Code Mode では、長いコマンドの実行中も会話を続けられるようになったことを、ユーモアを交えて実感として共有しています。 — @ahuangchat [出典](https://x.com/ahuangchat/status/2123515153467486627)

#### ネガティブ

該当なし

#### Tips

> v2.1.328 の Code Mode の改善点を紹介し、JavaScript でツールをまとめて実行できる点を活用例に挙げています。 — @rusty_dusty__ [出典](https://x.com/rusty_dusty__/status/2123507156859208132)

> Code Mode の有効化手順(環境変数、対応バージョン、端末の要件)と、具体的なタスク例を詳しく説明しています。 — @Hammad_AlHabib [出典](https://x.com/Hammad_AlHabib/status/2123502412241485958)

> ドキュメントをもとに、Code Mode の有効化方法と制限(Desktop / VS Code では使えないなど)を整理しています。 — @JoePro [出典](https://x.com/JoePro/status/2123514348169503104)

> (v2.1.328 より前の検証です)同じ依頼を Code Mode のオフとオンで実行した比較です。読み込んだトークンは約6割減った一方、料金に換算した削減は2割前後にとどまったと報告しています。期待を抑えた、冷静な検証です。 — ずんだもんの実験道具箱 [Claude CodeのCode Modeで上限は延びる？ トークン約6割減・料金換算は2割前後の実測](https://zenn.dev/zundamon_tools/articles/claude-code-code-mode-tokens)

### [Claude Code] v2.1.328 mcp_toolフックの "onFailure": "block"

#### ポジティブ

> 失敗したときに確実にブロックできるガードレールとして評価しています。「security hook that fails open isn't a security hook(失敗すると素通りさせるセキュリティフックは、セキュリティフックではない)」と述べています。 — @TrioTop13 [出典](https://x.com/TrioTop13/status/2123488150089830433)

> 「three small changes worth knowing(知っておきたい3つの小さな変更)」の1つに挙げ、フックが失敗したときに黙って通してしまう事態を防げる利点を説明しています。 — @theCodingBird [出典](https://x.com/theCodingBird/status/2123423553999569067)

#### ネガティブ

該当なし

#### Tips

> Stop フックで exit 2 を使い、`onFailure: "block"` と組み合わせて、stderr の内容をブロックの理由として渡す方法を共有しています。 — @ivastintech [出典](https://x.com/ivastintech/status/2123416264119083377)

> (関連記事)PreToolUse フックは終了コード 1 では止まらず、落ちたフックは操作を全部通してしまう、という落とし穴を整理した記事です。終了コード 2 で止める書き方を、公式ドキュメントと Windows での実体験をもとに解説しています。今回の onFailure: block と同じ「fail-open を防ぐ」問題意識で、注意喚起寄りのトーンです。 — Tazuna [Claude Code のフックは終了コード 1 では止まらない ― 「落ちたフックは全部通す」を防ぐ書き方](https://zenn.dev/tazuna/articles/ac04625bf80e12)

> (関連記事)86 本まで増やしたフックの警告が、画面には出ているのに Claude には届いていなかった、という体験から、どの出し方なら Claude に伝わるかを検証した記事です。 — Ymori [Claude Code に作ってもらった hook の警告が、Claude に届いていなかった](https://zenn.dev/shogaku/articles/claude-code-hook-visibility)

### [Claude Code] v2.1.328 Self-hosted runner機能追加

該当なし

### [Claude Code] v2.1.328 CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME

該当なし

### [Anthropic] Cyber Verification Program更新

該当なし

## ソース

- [Claude Code v2.1.328 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn: アクセスキー不要！ Claude Desktop から Amazon Bedrock にインタラクティブサインインで接続する](https://zenn.dev/aws_japan/articles/claude-desktop-bedrock-interactive-signin)
- [Zenn: AIレビューを何周も回して分かった、「指摘を直す」より大事なこと](https://zenn.dev/crs/articles/06-ai-review-loop)
- [Zenn: Claude CodeのCode Modeで上限は延びる？](https://zenn.dev/zundamon_tools/articles/claude-code-code-mode-tokens)
- [Zenn: Claude Code のフックは終了コード 1 では止まらない](https://zenn.dev/tazuna/articles/ac04625bf80e12)
- [Zenn: Claude Code に作ってもらった hook の警告が、Claude に届いていなかった](https://zenn.dev/shogaku/articles/claude-code-hook-visibility)
