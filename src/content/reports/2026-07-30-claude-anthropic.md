---
title: "公式更新なし、コミュニティはOpus 5移行とMCP新仕様を消化中"
summary: "本日のClaude Code公式リリースはなし（最新は既報のv2.1.220）。代わりにコミュニティでは、Opus 5世代のコンテキストエンジニアリング（ルールを減らす）、7/28公開のMCPステートレス新仕様、Claude Code拡張機能の使い分けが活発に議論されている。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-30

features:
  - "Opus 5世代のコンテキストエンジニアリング（ルール削減）"
  - "MCP 2026-07-28 ステートレス新仕様"
  - "Claude Code拡張機能の使い分けと運用"
  - "claude-security（ベータ）の実測"
codex_review: "公式更新がない日の温度感としてはかなり面白い。とくにMCPのステートレス化は地味に見えて効き目が大きく、モデル競争より運用設計の差が勝敗を分け始めた印象です。"
codex_importance: 3
---

## 公式アップデート

**Claude Code の新規リリースは本日ありません。**

GitHub Releases 上の最新は既報の **Claude Code v2.1.220**（バグ修正・安定性改善のみ）で、Opus 5 の追加（v2.1.219）とあわせて前回までに詳述済みのため再掲しません。本日新たに把握した公式リリース・新事実はありませんでした。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases)

## コミュニティの反応

本日は公式の新規動向がないため、直近のコミュニティ記事（Zenn / Qiita）で活発だったテーマを中心に整理します。

### Opus 5世代のコンテキストエンジニアリング（ルール削減）

Anthropic が示した「新世代モデルではルールや例を細かく与えるより判断に委ねる」方針を受け、既存の `CLAUDE.md` やルール群をどう棚卸しするかの記事が相次いでいます。

#### ポジティブ / 検証

> Opus 5 移行はプロンプトを「足す」より「消す」——検証指示の浪費を実測。1M・価格据え置きで、スペック表の差より運用側の書き換えが効くという整理。 — @井ノ実 [出典](https://zenn.dev/ino_h/articles/2026-07-28-claude-opus-5-migration)

> Claude Code の system prompt 80%削減という主張を、約1年運用のマルチAIエージェントVaultで検算。context engineeringの新原則を自分のケースで確かめる試み。 — @K.D [出典](https://zenn.dev/tadkud/articles/claude5-context-engineering-vault-audit)

> Opus 5 世代で「ルールは減らして判断に任せる」が公式方針に。自作ルールを「残す・直す・退役させる」で判定する手順を提示。 — @Tatsuya Shimomoto [出典](https://zenn.dev/shimo4228/articles/claude5-rules-official-shift-audit)

#### ネガティブ / 注意

> 「8割消えても性能は落ちなかった」を真に受けてルールを削ったが、結果はリバウンド。ルール12ファイル・CLAUDE.md 84行の実環境での率直な振り返り。 — @ganko-c [出典](https://zenn.dev/iroha_labs/articles/fdc172366f8f02)

### MCP 2026-07-28 ステートレス新仕様

7/28 に公開された MCP の大型仕様改定（ステートレスコア化）についての解説が複数出ています。

> API追加ではなく通信モデルそのものの再設計。`initialize` / `Mcp-Session-Id` の廃止と、各リクエストの `params._meta` へのプロトコルバージョン移行が要点で、プロダクション移行の指針を整理。 — @しんいち [出典](https://zenn.dev/xim2jp_tokyo/articles/7accf7506f40d9)

> 常時起動のステートフルなSSE/WebSocket接続が不要になり、Lambda/Netlify等のサーバーレスやIdP連携での接続管理オーバーヘッドが解消される点を解説。 — @buddypia [出典](https://zenn.dev/buddypia/articles/de3f592a4a6529)

### Claude Code拡張機能の使い分けと運用

#### Tips

> CLAUDE.md / Skills / Hooks / Subagents / MCP / Plugins という6つの拡張ポイントの役割の違いを整理。 — @まさぴょん🐱 [出典](https://zenn.dev/m16_llc/articles/claude-code-ecosystem-guide)

> スキルを50個まで増やしたら使われないものが出た。実測すると原因はトークンではなかった、という仮説検証系の記事。 — @KeitoInoue [出典](https://zenn.dev/canly/articles/43bef1eacdae44)

> 記憶を二層に分離し「全部覚えさせて、毎回は読ませない」設計。80ファイル・約16.4万字を、無関係な回では0件読み込みで済ませる仕組みの解説。 — @takotyan00 [出典](https://zenn.dev/takotyan00/articles/claude-code-two-tier-memory)

### claude-security（ベータ）の実測

> Anthropic 公式のセキュリティスキャンプラグイン claude-security（ベータ）を実際に回した実測。189エージェント・2時間のコスト・出力・精度を成果物データつきで検証。 — @Tatsuya Shimomoto [出典](https://zenn.dev/shimo4228/articles/claude-security-harness-self-scan)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
