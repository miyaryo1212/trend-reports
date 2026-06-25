---
title: "Claude Code v2.1.191、/rewindが/clear前まで復元対応"
summary: "Claude Code v2.1.191が公開され、/clear実行前の会話状態まで遡れる/rewind拡張、バックグラウンドエージェント停止の恒久化、ストリーミング時CPU使用率の約37%削減などを追加。/rewind拡張は「うっかり/clearからの救済」として実ユーザーから好評を集めた。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-26

features:
  - "/rewind の /clear 前復元対応 (v2.1.191)"
  - "バックグラウンドエージェント停止の恒久化 (v2.1.191)"
  - "ストリーミング時CPU使用率を約37%削減 (v2.1.191)"
  - "サンドボックスネットワーク許可の記憶 (v2.1.191)"
  - "MCPサーバー信頼性向上 (v2.1.191)"
codex_review: "派手さはないが、CLI系エージェントが実用品へ進むときに効く改善が揃っている印象です。とくに/rewindとCPU削減は、性能競争より先に日常の離脱要因を潰す堅実な一手だと思う。"
codex_importance: 3
---

## 公式アップデート

前回レポート（v2.1.190時点）以降、Claude Code に新バージョン v2.1.191 が公開されました。本日はその主な追加点を取り上げます。

### /rewind の /clear 前復元対応 (v2.1.191)

`/clear` を実行する前の会話状態から再開できるよう `/rewind` が拡張されました。誤って `/clear` してコンテキストを失った場合でも、直前の状態へ巻き戻して作業を再開できます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

### バックグラウンドエージェント停止の恒久化 (v2.1.191)

tasks パネルから停止したバックグラウンドエージェントが、停止後に復活してしまう問題が修正されました。停止操作が確実に恒久化されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

### ストリーミング時CPU使用率を約37%削減 (v2.1.191)

ストリーミング応答中のテキスト更新を 100ms 単位にまとめることで、CPU 使用率を約 37% 削減しました。あわせて、長時間セッションにおけるターミナル出力キャッシュ由来のメモリ増加も抑制されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

### サンドボックスネットワーク許可の記憶 (v2.1.191)

サンドボックスのネットワーク許可ダイアログが改善され、「Yes」で許可したホストはセッション中、接続のたびに再確認せず記憶されるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

### MCPサーバー信頼性向上 (v2.1.191)

capability discovery（`tools/list`、`prompts/list`、`resources/list`）が一時的なネットワークエラーを短いバックオフでリトライするようになりました。また MCP OAuth でも discovery とトークンリクエストが一時的エラー後に一度リトライし、ヘッドレス環境ではブラウザのポップアップをスキップして URL 貼り付けプロンプトへ直接進むようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

## コミュニティの反応

### /rewind の /clear 前復元対応 (v2.1.191)

#### ポジティブ

> 会話が長くなって /clear した直後に「まだ要ったな」と思うことがあり、/rewind で /clear 前まで巻き戻して消したコンテキストを復元できるのが地味に助かる — @kumitate_ai [X](https://x.com/kumitate_ai/status/2070097821429375468)

> うっかり /clear しても /rewind で会話が戻せるようになり、/clear より前の会話まで遡れるようになった — @commte [X](https://x.com/commte/status/2069979582904881609)

> うっかり /clear して会話ごと吹き飛ばした経験がある人には救われる更新で、消したはずの直前の状態から作業を再開できる — @haruai_kyoto [X](https://x.com/haruai_kyoto/status/2069977729551016371)

#### Tips

> v2.1.191 のリリース概要として、誤って /clear した際に以前の会話状態を復元できる /rewind 強化と、ストリーミング中の CPU 使用率約 37% 削減を解説 — @picnic [Qiita](https://qiita.com/picnic/items/7ebdf55900335ebcf71c)

### ストリーミング時CPU使用率を約37%削減 (v2.1.191)

該当なし（直近のX投稿に、本トピックを扱った個人ユーザーの実体験・感想は確認されませんでした）

### バックグラウンドエージェント停止の恒久化 (v2.1.191)

該当なし

### サンドボックスネットワーク許可の記憶 (v2.1.191)

該当なし

### MCPサーバー信頼性向上 (v2.1.191)

該当なし

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
