---
title: "Codex CLI 0.147.0の中身が判明とAstra一時停止"
summary: "前日は非公開だったCodex CLI 0.147.0のリリースノートが公開され、Agent Plugins・--approve-for-me・MCP 2026-07-28対応など6つの新機能と--full-auto廃止が判明。一方でOpenAIは次期モデルAstraがPreparedness FrameworkのCriticalサイバー閾値を否定できないとして開発の一部を一時停止した。Xでは--approve-for-meのトークン浪費への不満が集中している。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-08

features:
  - "Astra (次期モデル) のCritical サイバー能力評価"
  - "Codex CLI 0.147.0 の詳細リリースノート公開"
  - "Agent Plugins (Codex CLI)"
  - "--approve-for-me フラグ (Codex CLI)"
  - "MCP 2026-07-28 プロトコル対応 (Codex CLI)"
  - "会話のセクション管理機能 (Codex CLI)"
  - "Cursor管理スキルのインポート (Codex CLI)"
  - "codex exec --full-auto の廃止"
  - "Codex CLI 0.148.0-alpha.1〜3"
codex_review: "Codex CLIは便利機能の追加以上に、プラグイン化と他エージェント連携で開発環境そのものを囲い込み始めたのが面白い。一方で`--approve-for-me`の雑な燃費は、いまの自律化ブームの過剰評価を冷やす良い反証にも見える。"
codex_importance: 4
---

## 公式アップデート

### Astra (次期モデル) のCritical サイバー能力評価

OpenAI は、次期モデル Astra の内部評価において、Preparedness Framework の Critical サイバー能力の閾値に達していないと否定できない、と公表しました。これを受けて開発の一部が一時停止されています。モデルは未リリースです。

### Codex CLI 0.147.0 の詳細リリースノート公開

前回時点では "Release 0.147.0" 以外の記載がなかった 0.147.0 のリリースノートが公開され、新機能6件・バグ修正6件などの詳細が判明しました。以下は本日新たに公開された内容です。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.147.0)

### Agent Plugins (Codex CLI)

ポータブルな Agent Plugins をインストールできる新機構が追加されました。ローカル・個人・ワークスペース・リモートの各プラグインカタログを横断して検索できます。(#36544, #36409, #36919, #36796)

### --approve-for-me フラグ (Codex CLI)

承認を自動レビューして通す新しい CLI フラグ `--approve-for-me` が追加されました。(#36373)

### MCP 2026-07-28 プロトコル対応 (Codex CLI)

オプトインで MCP 2026-07-28 プロトコルに対応しました。ページング付きの探索、マルチラウンド要求、サーバー起動の非ブロッキング化を含みます。あわせて MCP SDK が 3.0.0 に更新されています。(#35724, #35725, #35590, #35742)

### 会話のセクション管理機能 (Codex CLI)

会話を永続的な、手動で並べ替え可能なセクションに整理できるようになりました。長いトランスクリプトを逐次読み込みで閲覧できます。(#35722, #36007, #36380, #36948, #36950)

### Cursor管理スキルのインポート (Codex CLI)

Cursor が管理するスキルをインポートできるようになりました。インポート済みの Claude / Cursor 会話への変更も、重複を作らずに同期されます。(#36361, #36356, #35623)

### codex exec --full-auto の廃止

非推奨だった `codex exec --full-auto` フラグが削除されました。今後は `--sandbox workspace-write` を使う必要があります。破壊的変更です。(#36054)

### Codex CLI 0.148.0-alpha.1〜3

2026-08-07 に 0.148.0 系のプレリリースが3本連続で公開されました（alpha.1 / alpha.2 / alpha.3）。いずれもリリースノートは "Release 0.148.0-alpha.N" のみで、変更内容の詳細は公開されていません。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### Astra (次期モデル) のCritical サイバー能力評価

モデルが未リリースで開発も一部停止中のため、個人ユーザーによる実利用ベースの投稿は確認できませんでした。X 上の反応は公式発表への解説・論評が中心です。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.147.0 の詳細リリースノート公開

新機能リストへの好意的な反応が中心ですが、内部フォーマット変更による互換性の懸念も出ています。

#### ポジティブ

> Codex CLI 0.147.0 の Agent Plugins サポートや --approve-for-me フラグ、MCP サポートに興味を示し、新機能をリストアップして共有。 — @ftnext [出典](https://x.com/ftnext/status/2085772047968546938)

#### ネガティブ

> 0.147 の変更で rollout JSONL のフォーマットが変わり、AgentMessage への移行で互換性と今後の breaking change を懸念。 — @hghammoud [出典](https://x.com/hghammoud/status/2085685282548961756)

#### Tips

該当なし

### Agent Plugins (Codex CLI)

発表直後のため機能そのものの実体験投稿は少なく、Codex CLI 全般の活用報告が目立ちます。

#### ポジティブ

> Codex CLI で自宅サーバー(x86)から Raspberry Pi 5(ARM) への Immich 移行をインストールから全部任せたら30分で完了。ハードさえ買えば誰でも自宅サーバー運用できるレベル。 — @ongamon0309 [出典](https://x.com/ongamon0309/status/2085825695188730089)

> Codex CLI をカスタムハーネスに組み込んで動画作成の全工程(ドキュメント変換→ストーリーボード生成→レンダリング→レビュー)を自動化。複数モデル切り替えもスムーズで実用性が高い。 — @matijagrcic [出典](https://x.com/matijagrcic/status/2085828896151269423)

#### ネガティブ

該当なし

#### Tips

> Codex CLI で Routera 経由の設定例: `~/.codex/routera.config.toml` に model_provider を追加し、export で API キーを渡して `codex --profile routera` で起動。 — @RouteraOne [出典](https://x.com/RouteraOne/status/2085837914898837722)

> 「Agent Plugins を自作ツールに取り込むか検討して、見送りました。配布モデルが逆向きだった」— Agent Plugins の技術ステアリングコミッティに Amazon / Cursor / Microsoft / OpenAI / Vercel が並ぶ標準としつつ、自作ツールへの取り込みは配布モデルの向きが合わず見送ったという検討記録。 — Qiita @ishizakahiroshi [出典](https://qiita.com/ishizakahiroshi/items/000383ea267490d25886)

### --approve-for-me フラグ (Codex CLI)

本日もっとも反応が集中したトピックで、内容はほぼ全てネガティブです。自動レビューのエージェントが裏で動いてトークンを消費する点が問題視されています。

#### ポジティブ

該当なし

#### ネガティブ

> Codex の「Approve for Me」で自動レビューが大量に走り、6週間で1.17Bトークンを消費したと報告。使用量が減らない原因として指摘。 — @ChanceKelch [出典](https://x.com/ChanceKelch/status/2085829039416393969)

> 「approve for me」に切り替えたらクレジットが一気に減った。削除リスクを避けたつもりが今度はトークン消費で悩むことになった。 — @RijnHartman [出典](https://x.com/RijnHartman/status/2085826576919216519)

> 「Approve for me」が別途 Auto-review エージェントを起動してトークンを静かに食っており、コミュニティでオフにしたら使用量が大幅に下がったと指摘。 — @MikelEcheve [出典](https://x.com/MikelEcheve/status/2085768145701044315)

> approve for me 設定が Codex auto review を対象にして、余計に使用量を消費する問題が発生している。 — @congitive_ [出典](https://x.com/congitive_/status/2085772928835084629)

#### Tips

該当なし

### MCP 2026-07-28 プロトコル対応 (Codex CLI)

#### ポジティブ

> Codex CLI 0.147.0 の MCP 2026-07-28 サポート（オプトイン）や Agent Plugins、自動レビュー機能が興味深く、Cursor スキルインポートも便利そうと評価。 — @ftnext [出典](https://x.com/ftnext/status/2085772047968546938)

#### ネガティブ

> Codex の MCP サーバーがグローバル設定で有効化されていると、タスク／サブエージェントごとに重複起動され、無駄なリソース消費が発生する。 — @Divine_machine [出典](https://x.com/Divine_machine/status/2084273681472094456)

#### Tips

該当なし

### 会話のセクション管理機能 (Codex CLI)

#### ポジティブ

> Codex CLI 0.147.0 で会話を手動で章立て・並べ替えできるようになり、長く使うほど増える「どこまで決めたっけ？」問題が減った。投稿づくりにも役立つ。 — @tomoro19 [出典](https://x.com/tomoro19/status/2085632472314945742)

#### ネガティブ

> history persistence = "none" にしても `~/.codex/sessions/` に全会話が保存され続け、設定が意図通り効かない。 — @lucianghinda [出典](https://x.com/lucianghinda/status/2085301787544985757)

#### Tips

該当なし

### Cursor管理スキルのインポート (Codex CLI)

複数のコーディングエージェント間でスキルや会話履歴を共有したいというニーズが背景にあり、期待の声が中心です。

#### ポジティブ

> Codex CLI 0.147.0 の Cursor skill インポート機能で、Claude / Cursor の会話履歴が重複なく同期できて便利そう。 — @ftnext [出典](https://x.com/ftnext/status/2085772047968546938)

#### ネガティブ

> Claude Code と Cursor 間でセッションが同期せず、リファクタ途中でコンテキストが失われて困る。 — @ashwingupta [出典](https://x.com/ashwingupta/status/2084705420346831057)

#### Tips

> Codex CLI 0.147.0 で Cursor skill の import と Claude / Cursor 会話同期が追加されたので、Agent Plugins や --approve-for-me と合わせて試すとよさそう。 — @nekopy_ai [出典](https://x.com/nekopy_ai/status/2085766022737313984)

> ai-design-skills を Claude Code / Cursor / Codex で共通利用し、ヒアリングから LP 生成まで SKILL.md 一つで完結させている。 — @L_go_mrk [出典](https://x.com/L_go_mrk/status/2085659966380400902)

> Claude Code の会話を Cursor にインポートして IDE で継続作業できる。 — @justmalhar [出典](https://x.com/justmalhar/status/2084716803838931019)

### codex exec --full-auto の廃止

破壊的変更にもかかわらず、`--sandbox workspace-write` への移行に関する個人ユーザーの投稿は確認できませんでした（公式アカウントの告知のみ）。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.148.0-alpha.1〜3

プレリリースに言及した個人ユーザーの投稿は確認できませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Codex CLI 0.147.0（GitHub Releases）](https://github.com/openai/codex/releases/tag/rust-v0.147.0)
- [Codex CLI Releases 一覧（0.148.0-alpha 系を含む）](https://github.com/openai/codex/releases)
- [Agent Plugins を自作ツールに取り込むか検討して、見送りました（Qiita / ishizakahiroshi）](https://qiita.com/ishizakahiroshi/items/000383ea267490d25886)
- [Approve for Me のトークン消費について（X / @ChanceKelch）](https://x.com/ChanceKelch/status/2085829039416393969)
- [Auto-review エージェントによる使用量増加の指摘（X / @MikelEcheve）](https://x.com/MikelEcheve/status/2085768145701044315)
- [0.147.0 の新機能まとめ（X / @ftnext）](https://x.com/ftnext/status/2085772047968546938)
- [会話のセクション管理機能の使用感（X / @tomoro19）](https://x.com/tomoro19/status/2085632472314945742)
- [rollout JSONL フォーマット変更への懸念（X / @hghammoud）](https://x.com/hghammoud/status/2085685282548961756)
