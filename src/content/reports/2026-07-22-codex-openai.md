---
title: "Codex CLI 0.145.0安定版 — 音声入力・Bedrock・マルチエージェントV2着地"
summary: "続いていたalpha内部ビルドを経て、Codex CLI 0.145.0が安定版として正式リリース。ページネーション付きスレッド履歴、/importの大幅拡張、Amazon Bedrock対応、音声入力とRealtime V3、マルチエージェントV2の安定化など多数の新機能を同梱した。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-22

features:
  - "Codex CLI 0.145.0 (安定版)"
  - "ページネーション付きスレッド履歴 (実験的)"
  - "/import の拡張"
  - "Amazon Bedrock 対応 (実験的)"
  - "音声入力・ツール出力対応"
  - "マルチエージェントV2の安定化"
  - "インライン可視化リンク"
codex_review: "派手なのは音声とBedrockだが、私には `/import` とマルチエージェントV2安定化のほうが本丸に見える。CLI市場は機能競争が過熱気味な一方、移行コストと運用の滑らかさで勝ちに行く姿勢は地味だが効く。"
codex_importance: 4
---

## 公式アップデート

前回まで alpha 内部ビルド（`rust-v0.145.0-alpha.25` まで）が続いていた Codex CLI 0.145.0 が、本日**安定版として正式リリース**されました（更新: 2026-07-21）。主な新機能は以下の通りです。

### ページネーション付きスレッド履歴 (実験的)

効率的な resume・検索・名前の永続化・サブエージェント対応・メモリを備えた、実験的なページネーション付きスレッド履歴を追加。

### /import の拡張

`/import` が Cursor / Claude Code の設定、MCP サーバー、プラグイン、セッション、コマンド、プロジェクトスコープのメモリの移行に対応。

### Amazon Bedrock 対応 (実験的)

実験的な Amazon Bedrock ログイン、カスタムエンドポイント・認証をサポートし、GPT-5.6 Sol をデフォルトの Bedrock モデルに設定。

### 音声入力・ツール出力対応

一般的なローカル音声フォーマットを含む音声入力・ツール出力に対応し、ストリーミングのリアルタイム V3 会話を導入。

### マルチエージェントV2の安定化

オプトインのマルチエージェント V2 を安定化。サブエージェントのモデル・推論レベル・並行数を設定可能にし、ロール復元とエージェントナビゲーションを改善。

### インライン可視化リンク

ターミナル UI に、セキュアでクリック可能なインライン可視化リンクを追加。

このほか、プロンプト編集/再試行時のコンテキスト分岐、長い会話でのターミナル応答性改善、MCP 起動・認証フローの安定化、Windows での実行・サンドボックス信頼性向上、強制 `rm` 検出などの安全性強化を含むバグ修正、GPT-5.6 向けドキュメント更新、ripgrep 15.2.0 へのバンドル更新などが行われています。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.145.0)

## コミュニティの反応

### Codex CLI 0.145.0 (安定版)

#### ポジティブ

> Codex CLI がなければ Codex を完全に捨てていた。モバイル/ウェブ/デスクトップの一貫性の欠如の中で、CLI が最後の砦になっている。 — @tregoudeau [X](https://x.com/tregoudeau/status/2079651006259032130)

> codex cli is getting more smarter and capable day by day! — @ashutosh_270497 [X](https://x.com/ashutosh_270497/status/2079642178301919394)

#### ネガティブ

> 実行中のプロンプト送信が自動でモデルをステアリングしてしまう、再接続の問題、エージェントがファイルをハイライトするがクリックできない、などの不具合を報告。 — @JeffHason [X](https://x.com/JeffHason/status/2078931060147282389)

> Codex ユーザー向けに不具合の根本原因が特定され、OpenAI 側で修正予定との共有。 — @melvindvivas [X](https://x.com/melvindvivas/status/2077633401226739873)

### /import の拡張

#### ポジティブ

> Claude Code ユーザーとして Codex の自動 import 機能を実際に試し、便利だった点を紹介。 — @daniel_mac8 [X](https://x.com/daniel_mac8/status/2077433892718407755)

> Cursor が Claude のスキルやプラグインを自動インポートしてくれて、別エージェントウィンドウで並列タスクが簡単に回せる。 — @kirplatonov [X](https://x.com/kirplatonov/status/2078880328530210996)

#### ネガティブ

> MCP 統合のバグ（Pipedrive 連携など）が複数報告されており、Claude では問題ないのに Codex で使えないという不満。 — @gpolzer [X](https://x.com/gpolzer/status/2078731781348446639)

#### Tips

> Claude Code の設定・スキル・履歴を Codex の `/import` で移行する方法と注意点（MCP キーは手動再設定が必要）。 — @chroniki_ai [X](https://x.com/chroniki_ai/status/2078472123698573413)

### Amazon Bedrock 対応 (実験的)

#### ポジティブ

> Codex CLI で公式に Amazon Bedrock が使えるようになったのが嬉しい。openrouter 経由から公式 Bedrock に移行できて便利。 — @ShawnFumo [X](https://x.com/ShawnFumo/status/2077761511175385539)

#### Tips

> Codex CLI v0.145.0 の Bedrock 対応で、AWS 認証情報だけで GPT-5.6 Sol が使えるようになる設定方法と注意点をまとめた。 — @dtraub [X](https://x.com/dtraub/status/2078132191372931150)

> Bedrock プロバイダーが `base_url` / `auth` / `http_headers` の override をサポートした運用面の変化を追跡。 — @ebisuke20260503 [X](https://x.com/ebisuke20260503/status/2077949979205976313)

### 音声入力・ツール出力対応

#### ポジティブ

> Codex 0.145.0 の Realtime V3 で音声エージェントと Codex エージェントの連携が自然になり、作業委譲や進捗ストリーミングが快適。 — @DevAdventur3s [X](https://x.com/DevAdventur3s/status/2079648536304455865)

> Codex の音声入力が最高の無料オプションで、Wisprflow から乗り換えて大満足。 — @gargdush [X](https://x.com/gargdush/status/2079661287689138184)

#### ネガティブ

> 音声出力が大きすぎるとループが発生する不具合。音量を下げて回避したが設定が面倒。 — @InTheoryTV [X](https://x.com/InTheoryTV/status/2078588310419624203)

#### Tips

> 10ドルの Bluetooth リモコンで「OK ボタン＝音声録音開始/終了」「矢印＝Enter」などを設定し、Codex の音声入力をキーボードレスで快適に。 — @kobe_acc [X](https://x.com/kobe_acc/status/2079627486586171639)

### マルチエージェントV2の安定化

#### ポジティブ

> Multi-agent V2 のロール設定とサブエージェントオーケストレーションが CLI でここまで進化したのは目玉で、実際に使って大いに期待できる。 — @shoriful_dev [X](https://x.com/shoriful_dev/status/2079646834981777443)

#### Tips

> `multi_agent_v2` 用にサブエージェントのモデル指定設定が追加（0.145.0-alpha.7 以降）され、デフォルトオンになった。 — @lfji [X](https://x.com/lfji/status/2077303319496941627)

> サブエージェント5体に敵対レビューさせるプロンプト例で、ループタスクの完成度を高める運用 Tips。 — @piske_cc [X](https://x.com/piske_cc/status/2077892133575708870)

### インライン可視化リンク

#### ポジティブ

> Codex の TUI で inline visualization links がセキュアにクリック可能になったのは小さいが実用的な UX 改善で、別ウィンドウに飛ばずに済むのが便利。 — @repojournal [X](https://x.com/repojournal/status/2079293297151909996)

### ページネーション付きスレッド履歴 (実験的)

該当なし（直近1週間で個人ユーザーによる実体験・感想投稿は確認できませんでした）

## ソース

- [Codex CLI 0.145.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.145.0)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
