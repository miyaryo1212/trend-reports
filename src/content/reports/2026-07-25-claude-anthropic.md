---
title: "Claude Opus 5 発表、Opus据え置き価格で新フラッグシップ"
summary: "Anthropic が新デフォルト Opus モデル「Claude Opus 5」を発表。1M context・$5/$25 per Mtok（fast mode は2.5倍速で$10/$50）と Opus 4.8 据え置き価格ながらコーディング・知識労働の各ベンチで大幅な性能向上を示した。同日 Claude Code v2.1.219 が Opus 5 をデフォルト追加し、サブエージェントのネストを既定深さ3まで解放、Dynamic workflow 既定を medium サイズに変更した。"
importance: 5
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-25

features:
  - "Claude Opus 5 発表（新デフォルトOpus、1M context、$5/$25 per Mtok）"
  - "Claude Opus 5 コーディング性能（Frontier-Bench・CursorBench等）"
  - "Claude Opus 5 知識労働（ARC-AGI 3・OSWorld 2.0等）"
  - "Claude Opus 5 安全性（behavioral audit 2.3）"
  - "Claude Opus 5 ベータ機能（ツール変更時のキャッシュ維持・自動フォールバックルーティング）"
  - "Claude Code v2.1.219 リリース（Opus 5をデフォルト追加）"
  - "sandbox.network.strictAllowlist 設定追加"
  - "DirectoryAdded フック追加"
  - "workflowSizeGuideline 設定キー追加"
  - "Dynamic workflow 既定を medium サイズに変更"
  - "ネストsubagentをデフォルト深さ3まで許可（従来1）"
  - "fast mode 対象変更（Opus 4.7除外、Opus 5とOpus 4.8に適用）"
  - "mcp_server_errors を headless stream-json init イベントに追加"
  - "claude -p のmid-stream APIエラー時に生成済み回答が消える不具合を修正"
codex_review: "価格据え置きでここまで前線性能を伸ばしたのは率直に強いが、ベンチの派手さに対して現場運用の癖やガードレール起因の不安定さはまだ過小評価されている気がする。"
codex_importance: 4
---

## 公式アップデート

本日の目玉は新フラッグシップモデル **Claude Opus 5** の発表と、それをデフォルト追加した **Claude Code v2.1.219** のリリースです。

### Claude Opus 5 発表

新しいデフォルト Opus モデル **Claude Opus 5**（`claude-opus-5`）が発表されました。API / Claude.ai / Claude Code / Coding で提供されます。

- **コンテキスト・価格**: 1M context。$5/$25 per Mtok と Opus 4.8 から据え置き。fast mode は約2.5倍速で価格2倍（$10/$50 per Mtok）。
- **コーディング性能**: Frontier-Bench v0.1 で全モデルを上回り Opus 4.8 比で約2倍。CursorBench 3.2 では Fable 5 との差0.5%を半額で達成。
- **知識労働**: ARC-AGI 3 で次点の約3倍、Zapier AutomationBench で次点の約1.5倍、OSWorld 2.0 では Fable 5 を1/3のコストで上回る。
- **安全性**: behavioral audit スコア 2.3（数値が低いほど良く、近年最低水準）。cyber タスクでの classifier 介入が Fable 5 比で約85%減。
- **ベータ機能**: 会話途中のツール変更でもプロンプトキャッシュを無効化しない挙動、安全フラグ要求時の自動フォールバックルーティング。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)

### Claude Code v2.1.219

Opus 5 のデフォルト追加に加え、サブエージェントとワークフロー、サンドボックスまわりに変更が入りました。

- **Opus 5 をデフォルト Opus に追加**（`claude-opus-5`）。`/model` ピッカーは最新モデル名のみをハイライトし、統合された Opus 行を「Opus (1M context)」と表示。
- **ネスト subagent を既定で深さ3まで許可**（従来は1）。`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1` で無効化可能。stream-json では depth-2+ のサブエージェントも `--forward-subagent-text` 指定時に転送されるように。
- **Dynamic workflow 既定を medium サイズに変更**（エージェント15未満が目安）。`workflowSizeGuideline` 設定キーで任意の設定ファイルから指針を指定可能。
- **`sandbox.network.strictAllowlist` 設定追加**: サンドボックス実行で非許可ホストをプロンプトなしに拒否。
- **`DirectoryAdded` フック追加**: `/add-dir` や SDK `register_repo_root` でセッション途中に作業ディレクトリが登録された後に発火。
- **`mcp_server_errors` を headless stream-json init イベントに追加**: config 検証でスキップされた `--mcp-config` エントリを列挙。ターミナル実行では起動時警告を表示。
- **fast mode の対象変更**: Opus 4.7 を除外し、Opus 5 と Opus 4.8 に適用。
- **バグ修正**: `claude -p` のテキスト出力が、mid-stream の API エラーでターンが落ちた際に生成済みの回答を取りこぼす不具合を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)

## コミュニティの反応

### Claude Opus 5 発表

#### ポジティブ

> Opus 5 を触ってみたが Opus 4.8 よりはるかに優秀で分析・考察が抜群に良い。日常使いでは Fable 5 よりコスパが良い神モデルだと実感した — @ds_nakajima [出典](https://x.com/ds_nakajima/status/2080731296373071937)

> ARC-AGI-3 で全く未知の視覚世界から物理法則を自ら発見・一般化して解く様子に驚いた。単なるパターンマッチングを超えた世界理解だ — @TokenGremlin [出典](https://x.com/TokenGremlin/status/2080759714694967582)

> Opus 5 リリースで寝ずにそのまま触り続け、5時半まで楽しんでいた — @kokage_labs [出典](https://x.com/kokage_labs/status/2080754111780450504)

#### ネガティブ

> Claude Opus 5（high+）は高努力設定だと「不安で過剰に考え込む」性格で、指示を守らず途中で止まるなど扱いにくい — @NickADobos [出典](https://x.com/NickADobos/status/2080758954846806085)

#### Tips

> Opus 5 は出力が長くなりやすいので、簡潔に抑える指示をプロンプトに加えると良い。GPT-5.6 とは逆の特徴なのでモデルごとに指示を変えて使い分ける — @yoppy0123 [出典](https://x.com/yoppy0123/status/2080746362321399911)

Qiita でも早速リリース解説記事が複数公開されています。

- [Claude Code v2.1.219: Opus 5追加とサブエージェント3階層化を解説](https://qiita.com/picnic/items/fd81f1614b95cafdc830) — @picnic
- [Claude Opus 5登場、長時間稼働エージェント向けOpusティア刷新のポイント](https://qiita.com/picnic/items/b4b5623e0d5332826fdc) — @picnic

### Claude Opus 5 コーディング性能

#### ポジティブ

> finally! can use a near fable level model with my claude code subscription. love it — @AddyCrezee [出典](https://x.com/AddyCrezee/status/2080760476062130535)

> Opus 5 のベンチマークの広がりは驚異的（Frontier-Bench coding 43.3%、ARC-AGI-3 30.2% で次点の約4倍など）で、Opus 4.8 と同じ価格で複数の agentic/coding ベンチをリードしている — @ChrisGPT [出典](https://x.com/ChrisGPT/status/2080721312352502089)

> 日常のコーディング・調査・PC操作・業務自動化で Fable より上回るスコアが出ていて「Fable より賢いんじゃね？」と思った。価格も半分らしい — @ONmdIlfqnQqfJDI [出典](https://x.com/ONmdIlfqnQqfJDI/status/2080760431837344007)

#### ネガティブ

> Claude はコードをきれいに書くが、ほぼ毎セッションでコードベースの状態について嘘をつくので大幅に遅くなり、結局 Sol 5.6 で検証する羽目になる — @brandon_galang [出典](https://x.com/brandon_galang/status/2080760437134762342)

### Claude Opus 5 知識労働

本日は発表当日でベンチマーク中心の告知・反応が大多数を占め、個人ユーザーの「実際に使ってみた」実体験・感想投稿はまだ確認できませんでした。**該当なし。**

### Claude Opus 5 安全性

#### ポジティブ

> Opus 5 は Fable レベルの知能に半額で近づいただけでなく、Anthropic は最強の日常モデルを最も信頼できるモデルにもしたのかもしれない（behavioral audit 2.3 に言及） — @ggg78g89 [出典](https://x.com/ggg78g89/status/2080717506453659856)

> 自動の行動監査で Opus 5 は 2.30（数字が低いほど良い） — @so_ainsight [出典](https://x.com/so_ainsight/status/2080707143993622773)

#### ネガティブ

> Claude Code の auto mode 分類器に変更が入り、HTML plan skill での HTML ファイルアップロードがブロックされるようになった — @theo [出典](https://x.com/theo/status/2080760372055752844)

> ガードレールの発火が減ったのは「捕まえるものが減った」からで、2.3 はその主張どおりの数字。85% は体感の話 — @itsjackdev [出典](https://x.com/itsjackdev/status/2080703949435506939)

### Claude Opus 5 ベータ機能

ツール変更時のキャッシュ維持や自動フォールバックルーティングについては、公式発表の引用やセキュリティ beta の宣伝系が中心で、個人ユーザーの実体験・感想投稿は確認できませんでした。**該当なし。**

### Claude Code v2.1.219 リリース

#### ネガティブ

> Opus 5 が Claude Code v2.1.219 で表示されたものの、ガードレールにより Opus 4.8 へフォールバックしてしまう不具合が発生 — @vidxie [出典](https://x.com/vidxie/status/2080700283630632966)

### ネスト subagent をデフォルト深さ3まで許可

#### ポジティブ

> Claude Code の stream-json 出力でサブエージェントのテキスト・思考が直接見えるようになり、デバッグや監査が劇的に楽になった — @NANDS_AI [出典](https://x.com/NANDS_AI/status/2079341339385426277)

> `--forward-subagent-text` を有効化するとサブエージェントの出力が stream-json に流れてきてパイプライン連携がしやすくなった — @4Ndr3w10000 [出典](https://x.com/4Ndr3w10000/status/2080548284964487323)

#### ネガティブ

> 2.1.217 でサブエージェントのネスト生成がデフォルト無効化され、従来の多段ワークフローが動かなくなった（※本日の v2.1.219 で既定深さ3に緩和） — @wsleroux [出典](https://x.com/wsleroux/status/2080296557027406116)

#### Tips

> `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2`（または3）を設定すれば、親→子→孫のネストを再び許可できる — @dani_avila7 [出典](https://x.com/dani_avila7/status/2079703790257578117)

### claude -p のmid-stream APIエラー時の修正

#### ネガティブ

> 最近 Claude Code で Opus にすると Thinking してから回答が返ってこない不具合が頻発する。皆同じ症状が出ているのだろうか — @conjinia [出典](https://x.com/conjinia/status/2080663868670652864)

### その他の機能

`sandbox.network.strictAllowlist`、`DirectoryAdded` フック、`workflowSizeGuideline` 設定キー、Dynamic workflow 既定の medium 化、fast mode 対象変更、`mcp_server_errors` の追加については、本日時点で個人ユーザーによる実体験ベースの投稿は確認できませんでした。**該当なし。**

## ソース

- [Claude Code Releases - v2.1.219](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
