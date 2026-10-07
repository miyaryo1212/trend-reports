---
title: "Claude Haiku 5.5登場とCC v2.1.293"
summary: "Claude Haiku 5.5 (claude-haiku-5-5) が加わり、Anthropic API の既定の Haiku モデルになりました。コンテキストは1M、価格は $0.10/$0.50 per Mtok です。Claude Code v2.1.293 では、コンパクション後に作業をやり直す不具合と、HTTP MCP のメモリリークが修正されました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-08

features:
  - "Claude Haiku 5.5"
  - "Claude Code v2.1.293 コンパクション後の作業取り消し・やり直し不具合の修正"
  - "Claude Code v2.1.293 mod の $.tool.register に isDeferred を追加"
  - "Claude Code v2.1.293 subagentStatusLine に agentType を追加"
  - "Claude Code v2.1.293 HTTP MCP のメモリリーク修正"
  - "Claude Code v2.1.293 claude.ai スキル同期間隔の変更"
codex_review: "Haikuの低価格で1Mコンテキストは、要約や調査を大量に回す現場には効きそうで、小型モデル競争の進展として面白い。ただ、ベンチマークの好成績だけでは実務の置き換え幅は読めず、コンパクションの不具合修正もエージェント運用の信頼性を左右する地味だが大事な改善だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Haiku 5.5

新しい小型モデル Claude Haiku 5.5 (`claude-haiku-5-5`) が追加されました。Anthropic API では、これが既定の Haiku モデルになります。Claude Code も v2.1.293 で対応しました。

- コンテキストウィンドウ: 1M トークン
- 価格: 入力 $0.10 / 出力 $0.50 per Mtok
- 100K トークンを超えるプロンプトの価格: 入力 $0.50 / 出力 $2.50 per Mtok

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

### Claude Code v2.1.293 コンパクション後の作業取り消し・やり直し不具合の修正

コンテキストのコンパクション後に、Claude がコンパクション直前に自分で終えた作業を「まだ終わっていない」と扱い、取り消したりやり直したりすることがありました。この問題が修正されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

### Claude Code v2.1.293 mod の $.tool.register に isDeferred を追加

mod 用の `$.tool.register` に `isDeferred` オプションが追加されました。`false` にすると、そのツールのスキーマを tool search の後ろに隠さず、最初からプロンプトに載せます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

### Claude Code v2.1.293 subagentStatusLine に agentType を追加

`subagentStatusLine` のペイロードに `agentType` が追加されました。スクリプトでカスタムサブエージェントの種類を見分けられます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

### Claude Code v2.1.293 HTTP MCP のメモリリーク修正

HTTP MCP 接続が、送ったリクエストを接続が閉じるまですべて保持し続け、メモリリークを起こしていた問題が修正されました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

### Claude Code v2.1.293 claude.ai スキル同期間隔の変更

セッションを使っていない間、claude.ai スキルの同期で変更を確認する間隔が、約10分ごとから約40分ごとに変わりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)

## コミュニティの反応

### Claude Haiku 5.5

#### ポジティブ

> Haiku 5.5 の価格は Haiku 4.5 の1/10〜1/2 になった。2万トークンの文書を1,000回要約するコストは25ドルから2.5ドルに下がる計算で、Terminal-Bench や OSWorld などのベンチマークも大きく伸びた、と詳しく解説している (好意的)。 — @erhanmeydan [出典](https://x.com/erhanmeydan/status/2107930439587430569)

> GPT-6 Luna と同じ $0.10/$0.50 の価格帯で、Terminal-Bench は 39.2% 対 16.4%、FrontierCode は 46.4% 対 42.4% と上回っていると紹介し、小型モデルの競争を高く評価している (好意的)。 — @Prathkum [出典](https://x.com/Prathkum/status/2107930134489809192)

> Fable / Opus / Sonnet / Haiku の 5.5 世代はどれもユーザーの不満が少なく品質が高い、今の Anthropic は絶好調だ、という感想 (好意的)。 — @miroburn [出典](https://x.com/miroburn/status/2107930894035980471)

#### Tips

> Claude Code v2.1.293 以降で、Haiku 5.5 を explorer / researcher 役のサブエージェント (effort: low、Edit / Write ツールなし) に割り当て、Opus / Sonnet と役割を分ける方法を紹介。`~/.claude/` の具体的な設定手順と、CLAUDE.md への追記例も載せている (中立・実践的)。 — @dr_cintas [出典](https://x.com/dr_cintas/status/2107934254865031364)

### Claude Code v2.1.293 コンパクション後の作業取り消し・やり直し不具合の修正

#### ネガティブ

> コンパクションで完了済みの作業が失われたり、やり直されたりする問題を指摘し、過去にタスクが消えた事例を挙げている (批判的)。 — @dm_rusanov [出典](https://x.com/dm_rusanov/status/2107939065706283142)

> コンパクションを使わず「summarize up to here」を使っていたのに、チェックポイント機能の変更でスレッドが消えてしまう、という不満 (批判的)。 — @loss_gobbler [出典](https://x.com/loss_gobbler/status/2107923040575328452)

#### Tips

> コンパクション後のやり直し対策として、CLAUDE.md に短い進捗メモを残しておく回避策を提案している (中立)。 — @gianmauric [出典](https://x.com/gianmauric/status/2107929550374187419)

> Claude Code に長い作業を任せたとき、最初に伝えた「やること」が圧縮のあとで守られなくなる問題に向けて、人と Claude が同じチェックリストを見て更新する機能を macOS アプリに追加したという紹介 (中立)。 — tanashun「[Claude Code に任せた作業の「やること」を圧縮で失わない。tanacode 1.1.0 でチェックリストと予約送信を足しました](https://zenn.dev/tanashun/articles/tanacode-v1-1-release)」

### Claude Code v2.1.293 mod の $.tool.register に isDeferred を追加

該当なし

### Claude Code v2.1.293 subagentStatusLine に agentType を追加

該当なし

### Claude Code v2.1.293 HTTP MCP のメモリリーク修正

該当なし

### Claude Code v2.1.293 claude.ai スキル同期間隔の変更

該当なし

## ソース

- [Claude Code v2.1.293 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
