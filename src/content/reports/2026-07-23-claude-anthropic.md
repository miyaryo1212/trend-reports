---
title: "Claude Code v2.1.217、サブエージェントの暴走を止める上限群を追加"
summary: "Claude Code v2.1.217 で、サブエージェントの同時実行数・ネスト生成・予算超過時の停止といった暴走抑止系の設定が一斉に追加された。あわせて claude.ai に Anthropic Economic Index コネクタも登場。コミュニティでは早くもサブエージェント仕様変更を解説する記事が出ている。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-23

features:
  - "Anthropic Economic Index コネクタ (claude.ai)"
  - "emojiショートコード補完 (Claude Code v2.1.217)"
  - "サブエージェント同時実行数の上限 (Claude Code v2.1.217)"
  - "ネストしたサブエージェント生成を既定で禁止 (Claude Code v2.1.217)"
  - "--max-budget-usd がバックグラウンドのサブエージェントも停止 (Claude Code v2.1.217)"
  - "MCPツール出力のメモリリーク修正 (Claude Code v2.1.217)"
codex_review: "派手な新機能というより、エージェント運用の雑な危うさをAnthropic自身が認めて締め直した更新に見える。地味だが重要で、競争が加速するほどこういう安全柵の実装力が効いてくる。"
codex_importance: 3
---

## 公式アップデート

### Anthropic Economic Index コネクタ (claude.ai)

claude.ai 内で、AI 利用の経済データ (Anthropic Economic Index) を会話形式で照会できる新しいコネクタが追加されました。全モデルで利用可能です。

### Claude Code v2.1.217 — サブエージェントの暴走抑止

v2.1.217 では、サブエージェントの制御に関する設定が複数追加されました。

- **同時実行数の上限**: 同時に起動するサブエージェントを既定 20 に制限。`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` で変更可能。1 メッセージがバックグラウンドエージェントを無制限に生成する事態を防ぎます。
- **ネスト生成を既定で禁止**: サブエージェントがさらにサブエージェントを生成する挙動を既定で停止。深い入れ子は `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` で許可できます。
- **`--max-budget-usd` がバックグラウンドも停止**: 予算上限に到達すると新規生成が拒否され、実行中のバックグラウンドエージェントも停止するよう修正。従来は上限到達後もエージェントが止まりませんでした。

### Claude Code v2.1.217 — その他

- **emoji ショートコード補完**: プロンプト入力で `:heart:` などを入力すると絵文字を挿入、`:hea` で候補表示。`emojiCompletionEnabled` 設定で無効化できます。
- **MCP ツール出力のメモリリーク修正**: 切り詰めた MCP ツール出力が、未切詰めの全結果をセッション中ずっとメモリに保持していた問題を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)

## コミュニティの反応

### Anthropic Economic Index コネクタ (claude.ai)

公式発表直後で個人体験の投稿はまだ少数です。

#### ポジティブ

> 実際に試して、AI が仕事に与える影響のインサイトが衝撃的だった。データが透明に公開されているのが素晴らしい — @stupiz [出典](https://x.com/stupiz/status/2080004211664937010)

> Economic Index を Claude 内で 8 つの質問で直接クエリしたら、「AI が仕事を奪う」という物語を崩すような現実的な回答が得られた — @sanjoxbuilds [出典](https://x.com/sanjoxbuilds/status/2080015679596671383)

### ネストしたサブエージェント生成を既定で禁止 (Claude Code v2.1.217)

#### Tips

> v2.1.217 でサブエージェントのネスト生成が既定オフになり、`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` で深度を指定して再有効化可能に。あわせて同時実行上限 20 も言及 — @dani_avila7 [出典](https://x.com/dani_avila7/status/2079703790257578117)

### --max-budget-usd がバックグラウンドのサブエージェントも停止 (Claude Code v2.1.217)

#### ネガティブ

> v2.1.217 でようやく `--max-budget-usd` 到達時に background subagent が実際に停止するようになった。以前は予算上限でも spawn されたエージェントが止まらず超過していた — @akashpersetti [出典](https://x.com/akashpersetti/status/2079915018850537502)

### サブエージェント関連の変更全般 (Claude Code v2.1.217)

Qiita では、v2.1.217 のサブエージェント仕様変更を主題にした解説記事が早くも公開されています。

- [Claude Code v2.1.217 でサブエージェントの挙動が大きく変更された話](https://qiita.com/picnic/items/4d467229dd1d0d4bb96d) — @picnic。合計 20 件の変更のうち、サブエージェント関連の仕様変更に注目して整理。

### emojiショートコード補完 / MCPツール出力のメモリリーク修正 (Claude Code v2.1.217)

いずれも v2.1.217 (7/21 リリース) で追加・修正されたばかりのため、個人ユーザーによる実体験ベースの投稿は本日時点で確認できませんでした。**該当なし。**

## ソース

- [Claude Code Releases - v2.1.217](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
