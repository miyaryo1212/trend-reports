---
title: "Claude Sonnet 5 登場、Claude Codeの新デフォルトに"
summary: "新フラッグシップ Claude Sonnet 5 が全プラン・Claude Code・Claude Platformで即日提供開始。ネイティブ1Mトークン対応で8/31まで促進価格。Claude Code v2.1.197がデフォルトモデルに採用。同時に科学者向けの Claude Science もベータ公開された。"
importance: 5
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-01

features:
  - "Claude Sonnet 5"
  - "Claude Science（AI Workbench）"
  - "組織デフォルトモデル設定 (v2.1.196)"
  - "チャット添付ファイルのクリック操作 (v2.1.196)"
  - "MCPセキュリティ修正 (v2.1.196)"
codex_review: "1M文脈とClaude Codeの新デフォルト化は、Anthropicが“研究向けの高級モデル”から“日常実務の基盤”へ踏み込んだ感じがして面白い。派手さは抑えめでも、運用面の詰めが地味に競争力を押し上げる類いの発表だと思う。"
codex_importance: 4
---

## 公式アップデート

### Claude Sonnet 5 リリース

新フラッグシップ Sonnet モデル **Claude Sonnet 5** が公開されました。全プラン・Claude Code・Claude Platform で即日利用可能です。

- ネイティブ **1Mトークン** のコンテキストウィンドウに対応
- 標準価格は **$3/$15 per Mtok**、ただし **8/31まで $2/$10 per Mtok** の促進価格
- Opus 4.8 に迫る性能で「最もエージェント的な Sonnet」と位置づけ
- Claude Code では **v2.1.197** から新デフォルトモデルに採用。利用には同バージョンへの更新が必要

[Claude Sonnet 5（公式）](https://www.anthropic.com/news/claude-sonnet-5) / [Claude Code Releases v2.1.197](https://github.com/anthropics/claude-code/releases/tag/v2.1.197)

### Claude Science（AI Workbench）ベータ公開

科学者向けの AI ワークベンチ **Claude Science** がベータ公開されました。3D構造・ゲノム・化学構造の描画、HPC/GPU管理の自動化、60超のサイエンス用スキルと多エージェント構成を備え、macOS/Linux に対応します。

### Claude Code v2.1.196 のその他の変更

- **組織デフォルトモデル設定**: 管理者が org コンソールで設定でき、ユーザー未選択時は `/model` に「Org default」（または「Role default」）と表示
- **チャット添付ファイルのクリック操作**: Cmd/Ctrl+クリックで Finder/Explorer にファイルを表示
- **セッション既定名の読みやすさ改善**: 起動時に識別しやすい既定名を付与
- **MCPセキュリティ修正**: `claude mcp list`/`get` がリポジトリ自己承認の `.mcp.json` サーバーを起動しなくなり、未信頼ワークスペースは `⏸ Pending approval` を表示

[Claude Code Releases v2.1.196](https://github.com/anthropics/claude-code/releases/tag/v2.1.196)

## コミュニティの反応

### Claude Sonnet 5

リリース当日（6/30）のため個人ユーザーの実体験投稿はまだ少ないものの、Claude Code でのエージェント動作を中心に早速いくつかの声が上がっています。

#### ポジティブ

> Sonnet 5 を Claude Code の Dynamic Workflows で使ったら、複雑タスクでも自律的にワークフローを回せて「Opus不要」レベルで実用的になった — @daniel_mac8 [X](https://x.com/daniel_mac8/status/2072036584635977819)

> agentic な動作（ターミナルを開く→テスト失敗→自動修正→再実行）がしっかりできて、Sonnet 4.6 より明らかに「仕上げまでやってくれる」ようになった — @levithefirst [X](https://x.com/levithefirst/status/2072035120697987417)

#### ネガティブ

> Opus 4.8 に依然として劣っていて「Sonnet 4.8 と呼ぶべきレベル」。期待した飛躍がなかったのが残念 — @haider1 [X](https://x.com/haider1/status/2072036424652644568)

> プロモ価格でも実質 Opus より高くつくケースがあり「安くなったはずなのに…」という違和感 — @test_tm7873 [X](https://x.com/test_tm7873/status/2072034101037560293)

#### Tips

> Claude Code で Sonnet 5 を使うなら `/model` で Sonnet 5 を指定し、`/effort` を Ultracode にすると動的ワークフローが強く発動する — @daniel_mac8 [X](https://x.com/daniel_mac8/status/2072036584635977819)

### Claude Science（AI Workbench）

発表日（6/30）と重なるため、現時点では公式発表の引用・ニュース共有が中心で、個人ユーザーによる実利用体験の投稿は確認できませんでした。

### 組織デフォルトモデル設定 / チャット添付ファイルのクリック操作 / MCPセキュリティ修正

いずれも v2.1.196 の変更点について、Changelog の言及はあるものの個人ユーザーの実体験投稿はほぼ確認できませんでした。なお添付ファイル操作については、関連して以下のような不満の声がありました。

#### ネガティブ（添付ファイル操作・関連）

> IntelliJ で Claude Code を使ったらファイルリンクのクリックで VSCode が開かれて最悪 — @polyomino_24 [X](https://x.com/polyomino_24/status/2071597187271565314)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Sonnet 5（Anthropic News）](https://www.anthropic.com/news/claude-sonnet-5)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
