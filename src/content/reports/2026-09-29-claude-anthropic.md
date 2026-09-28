---
title: "Sonnet 5.5 登場、auto モードが既定に"
summary: "Claude Code v2.1.284 がリリースされ、API 既定 Sonnet に昇格した Claude Sonnet 5.5 (1M コンテキスト・$2/$10 per Mtok) が追加されました。対話セッションの既定が auto モードへ変更、Ultracode は /effort の独立トグルに分離。X では Sonnet 5.5 と Ultracode の実用報告が中心です。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-29

features:
  - "Claude Sonnet 5.5 (claude-sonnet-5-5)"
  - "対話セッションの既定が auto モードに変更"
  - "Ultracode が /effort の独立トグルに"
  - "/usage・ステータスラインに支出上限を金額表示"
  - "/mcp reconnect all"
  - "effortSlider キーバインド追加"
  - "Project Swap (Anthropic Research)"
  - "自動メモリのプロンプトインジェクション対策"
codex_review: "Sonnetの性能向上より、権限モードを既定でautoにする変更のほうが気になる。便利さと引き換えに、エージェントへ何を任せるかという設計が製品側に寄る一歩だ。派手な成功談は多いが、独立検証が乏しく、影響を測るには早い。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.284

2026-09-28 公開。モデル追加を含む大型リリースです。

- **Claude Sonnet 5.5 (`claude-sonnet-5-5`)** を追加。Anthropic API の既定 Sonnet モデルに昇格。1M コンテキスト、$2/$10 per Mtok、キャッシュ読み取り $0.20/Mtok。
- **対話セッションの既定が auto モードに変更**。プラン・プロバイダを問わず、ターミナルと VS Code のセッションは権限モード未設定時に auto モードで起動する (`permissions.defaultMode` の指定が優先)。
- **Ultracode が `/effort` の独立トグルに**。Tab または `/effort ultracode [on|off]` で切替。xhigh エフォートを強制しなくなり、任意のエフォート段階で有効なまま使える。VS Code 側もエフォートスライダー下の on/off スイッチに置き換わり、モデルピルに「· Ultracode」が表示される。
- **`/usage`・ステータスラインに Claude apps gateway の支出上限を金額表示**。「$271.40 / $500.00 spent this month」形式。ステータスラインの `rate_limits.spend_limit` に `used_usd` / `limit_usd` / `period` が追加 (gateway 側が本バージョン以降の場合)。
- **`/mcp reconnect all`** を追加。接続に失敗した、または認証が必要な MCP サーバーを対話ターミナルから一括で再試行できる。
- **effortSlider キーバインド追加**。`effortSlider:decreaseEffort` / `increaseEffort` / `toggleUltracode` を `keybindings.json` で再割り当て可能になり、`/effort` スライダーの矢印キーと Tab を変更できる。
- **自動メモリのプロンプトインジェクション対策**。`MEMORY.md` と recall されたメモリノート内の不可視文字、および Claude Code 自身のマークアップを模倣するタグを、Claude に渡る前に無害化するようになった。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)

### Project Swap (Anthropic Research)

Claude エージェント 201 体に書籍交換の代理交渉をさせた市場実験。選好推定の精度は 61%、モデル性能の差がそのまま市場効率に反映される結果 (Opus 0.88 / Haiku 0.75) が報告されています。

[ソース](https://www.anthropic.com/research)

## コミュニティの反応

### Claude Sonnet 5.5 (claude-sonnet-5-5)

#### ポジティブ

> Sonnet 5.5 を de novo 蛋白質結合剤の設計キャンペーンに使ったところ、Opus 5.5 とほぼ同等の 82.3% 成功率で実用レベルだった — @Junioryu136689 [出典](https://x.com/Junioryu136689/status/2104678006019232200)

> Garmin / Strava のデータを Claude に繋ぐ MCP を構築し、新しい Sonnet 5.5 で無料利用しながらトレーニング分析を試した結果、期待以上の成果が出ている — @DavidOrti [出典](https://x.com/DavidOrti/status/2104677991485685983)

#### ネガティブ

該当なし

#### 日本語コミュニティ

リリース当日の速報記事が上がっています。

- [Claude Sonnet 5.5登場、Sonnet 5比で30%高速・コスト最大30%減](https://qiita.com/picnic/items/e5c402c5dbc88d709235) (Qiita / picnic) — 公式紹介文の「30% faster」を起点に価格・速度面を整理
- [Claude Sonnet 5.5がリリース、Sonnet 5からの5つの破壊的変更まとめ](https://qiita.com/picnic/items/874ab4adee5e33f34bd6) (Qiita / picnic) — Claude API に加え Amazon Bedrock、AWS 上の Claude Platform での提供と、移行時の非互換点をまとめたもの

### Ultracode が /effort の独立トグルに

#### ポジティブ

> Claude Code の Ultracode でノーコードの知識でも 42 分・82K トークンでゲームが作れて驚いた — @OthalaBS [出典](https://x.com/OthalaBS/status/2104674531617173858)

> Opus 5.5 Ultracode で 3D の島やリアルタイム海洋シミュレーションを自然言語プロンプトだけで構築し、60+FPS 動作を確認した — @mdaman010 [出典](https://x.com/mdaman010/status/2104677783855362239)

> 12 台の Opus 5.5 ultracode エージェントを並行稼働させて「ソフトウェア工場」として日常的に運用している — @hraness [出典](https://x.com/hraness/status/2104665655760806122)

> Opus 5.5 Ultracode の Orchestrating と Sonnet 5.5 Extra High の組み合わせが、Claude Code で価値あるペアリングだと実感した — @ImJayBallentine [出典](https://x.com/ImJayBallentine/status/2104649504137883675)

> Ultracode で 258 サブエージェントを夜通し稼働させ、1 アカウントを完全に使い切るまで活用した — @Youssofal_ [出典](https://x.com/Youssofal_/status/2104645573219594594)

#### ネガティブ

該当なし

### 対話セッションの既定が auto モードに変更

該当なし (X 検索で個人の実体験に基づく投稿は確認できませんでした)

### /usage・ステータスラインに支出上限を金額表示

該当なし

### /mcp reconnect all

該当なし (取得できた投稿はリリース情報の共有のみ)

### effortSlider キーバインド追加

該当なし

### Project Swap (Anthropic Research)

該当なし

### 自動メモリのプロンプトインジェクション対策

該当なし

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.284](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)
- [Anthropic Research](https://www.anthropic.com/research)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
