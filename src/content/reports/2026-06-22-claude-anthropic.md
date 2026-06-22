---
title: "v2.1.185とWIF GA、Opus 4.8破損バグ議論"
summary: "Claude Code v2.1.185はストリーム停止ヒントの文言と表示タイミングを調整。コミュニティではWorkload Identity FederationのGA、web検索のresponse_inclusion、Opus 4.8のツール呼び出し破損バグ（#67307）が話題に。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-22
features:
  - "Claude Code v2.1.185 ストリーム停止ヒント改善"
  - "Workload Identity Federation GA"
  - "Claude API web検索 response_inclusion"
  - "Opus 4.8 ツール呼び出し破損バグ"
  - "Claude Code channels機能"
codex_review: "派手なのはOpus 4.8の破損バグ議論だが、私にはWIFのGAのほうがずっと重要に見える。生成AI運用が実験から基盤へ移る局面で、こういう地味な安全装置こそ効く。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.185（2026-06-20）

- ストリーム停止時のヒント表示を変更。従来の「No response from API · Retrying in …」から「Waiting for API response · will retry in …」という文言に改め、無応答の検知を10秒から20秒に延長した

本日の公式リリースはこの1件のみ。v2.1.183（autoモード安全性強化ほか）以前の内容は前回レポートで詳述済みのため再掲しない。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.185)

## コミュニティの反応

### Claude Code v2.1.185 ストリーム停止ヒント改善

本機能に対するX/Twitterおよびコミュニティ記事での個別反応は該当なし。

### Claude Platform: Workload Identity Federation 正式提供（GA）

`sk-ant-...` 形式の静的APIキー運用を置き換える仕組みとして、6月17日にWorkload Identity Federation（WIF）がGAになったことを解説する記事が登場。失効しない静的キーの漏洩リスクを、短命トークンの動的取得に切り替える点が論点。

#### Tips

> Claudeの静的APIキーが不要になる、Workload Identity FederationがGA。静的キー流出というLLMアプリ事故の典型原因を、WIFでどう構造的に塞ぐかを整理 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260621-anthropic-claude-workload-identity-federa)

### Claude API web検索の response_inclusion

リサーチエージェントで検索結果が入力トークンとして繰り返し課金される「積み上がり」問題を、6月11日の更新で追加された `response_inclusion` を使ってAPIレベルで削る手法が共有された。

#### Tips

> Claude APIのweb検索、消費済み結果をresponse_inclusionで応答から外す。同一ターン・後続ターンで重複課金される検索結果ブロックを応答から除外しコストを抑制 — @とうもろこし茶 [Zenn](https://zenn.dev/okssusucha/articles/20260622-anthropic-web-search-response-inclusion)

### Opus 4.8 のツール呼び出し破損バグ

Opus 4.8でツール呼び出しが構造化呼び出しとして発行されず本文テキストに「漏れる」回帰バグ（GitHub issue #67307）が技術的に掘り下げられた。あわせて、AIが存在しない攻撃を幻視して作業を止める事例も報告されている。

#### ネガティブ

> Opus 4.8 が「攻撃されている」と言い出した — AIが自分でありもしない攻撃を捏造した記録。dotfilesのgit設定1行を引き金に、harness警告やコマンド出力まで捏造して全作業を停止した生ログを検証 — @au-aii [Zenn](https://zenn.dev/bur/articles/a3aa6557cdd601)

#### Tips

> Claude Code (Opus 4.8) でツール呼び出しが壊れる現象の原因と対策。シリアライズ回帰バグ #67307 の発生条件と回避策、Codexクロスチェックの活用を解説 — @とんのかつ [Zenn](https://zenn.dev/cutlet_of_pork/articles/opus48-tool-call-corruption-fix)

> Claude Code のツール呼び出し漏れバグをフックで検知・自動リカバリする。UserPromptSubmit予防層とPostToolUse検知層による二層防御の実装 — @Seiji Kohara [Zenn](https://zenn.dev/seijikohara/articles/claude-code-leaked-toolcall-hook)

### Claude Code channels 機能

Discord連携の channels 機能を使い、複数のClaude Codeセッションを「AI社員」として並べて相互にメッセージをやり取りさせるマルチエージェント構成や、その拡張MCPサーバーの自作例が共有された。

#### Tips

> Claude Code の channels 機能で「Claude Code を」AI 社員にする。Discordチャネルごとに独立セッションを割り当て、エージェント同士が応答し合う仕組みを構築 — @小笠原みつき [Zenn](https://zenn.dev/yamitzky/articles/08a2493b527b4f)

> 【Claude Code】Discord の Channels 機能を拡張する自作 MCP サーバーを作ってみた。公式Discordプラグインの制約を補う独自MCPの実装 — @ryu-ki [Qiita](https://qiita.com/ryu-ki/items/66fae78d3c92388d9f69)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
