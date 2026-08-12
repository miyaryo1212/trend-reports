---
title: "v2.1.229公開、プラグイン配布とワークフロー効率化"
summary: "Claude Code v2.1.229 が公開されました。プラグインマーケットプレイスの command ソース、VSCode 拡張のセッショングループ、ワークフロー fan-out のプレフィックススタガーなど 30 件超の追加・修正・改善が含まれます。X 上では今回の各項目に対する個人ユーザーの反応はまだ確認できませんでした。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-13

features:
  - "Claude Code v2.1.229"
  - "プラグインマーケットプレイスのcommandソース"
  - "セッショングループ (VSCode拡張)"
  - "claude remote-control --continue"
  - "ListAgentsのoffline/cloud表示"
  - "セルフホストランナーのサーバー供給フック対応"
  - "ワークフローfan-outのプレフィックススタガー"
  - "/commit-push-prの危険フラグ自動承認を廃止"
  - "ゲートウェイストリーミングのSSEキープアライブping"
  - "ストリーミング中の長文応答の消失・二重出力の修正"
  - "Anthropic Institute 労働者再訓練プログラムの効果検証レポート"
codex_review: "派手な新機能というより、運用の摩擦と事故率を着実に削る更新が並んでいて、玄人好みだと感じます。とくに危険フラグの自動承認廃止とfan-out課金回避は地味だが効く一方、市場全体を揺らす類いではまだない。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.229 (2026-08-12)

追加・修正・改善 30 件超を含むリリースです。主な内容は以下の通りです。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.229)

#### プラグインマーケットプレイスの`command`ソース

プラグインマーケットプレイスに `command` ソースが追加されました。ローカルのコマンド (IDE など) がプラグインディレクトリを出力し、その内容がセッションごとに再解決されて再起動なしで反映されます。`mode: "link"` を指定すると、出力されたディレクトリをその場で (コピーせず) そのまま利用します。

#### セッショングループ (VSCode拡張)

VSCode 拡張のサイドバーにセッショングループが追加されました。右クリックからグループの作成・リネーム・削除ができ、Cmd/Ctrl クリックまたは Shift クリックで複数のセッションをまとめて移動できます。

#### `claude remote-control --continue`

直近の Remote Control セッションを再開する `claude remote-control --continue` がドキュメント化されました。

#### ListAgentsのoffline/cloud表示

`ListAgents` が、切断された Remote Control セッションを `offline` として示すようになりました。また、自分のクラウドセッションには `cloud` というラベルが付きます。

#### セルフホストランナーのサーバー供給フック対応

サーバーから供給される Claude Code フックが、セルフホストランナーのセッションでもサポートされるようになりました。マネージド環境と同じ挙動になります。

#### ワークフローfan-outのプレフィックススタガー

ワークフローの fan-out で、同一プレフィックスを持つ兄弟エージェントの起動をずらすようになりました。後続のエージェントがキャッシュ済みのプロンプトプレフィックスを読むため、同じプレフィックスの再課金を避けられます。`CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS=0` で無効化できます。

#### `/commit-push-pr`の危険フラグ自動承認を廃止

`/commit-push-pr` において、`--force` / `--amend` / `--no-verify` など危険なフラグを含む git / gh コマンドが自動承認されなくなりました。

#### ゲートウェイストリーミングのSSEキープアライブping

ゲートウェイのストリーミング応答に SSE キープアライブ ping が追加されました。長い思考による停止中でも、Vertex および Bedrock の上流でアイドルタイムアウトによる切断が起きないようになります。

#### ストリーミング中の長文応答の消失・二重出力の修正

ストリーミング中に長い応答の一部がターミナル上で消えたり、2 回出力されたりする問題が修正されました。

### Anthropic Institute: 労働者再訓練プログラムの効果検証レポート (2026-08-12)

Anthropic Institute が、労働者の再訓練プログラムに関する効果検証レポートを公開しました。米国で実施された無作為化研究 56 件をレビューした結果、職業訓練の効果は正の方向ではあるものの小さく、業種特化型のプログラムのほうがより有望であると報告されています。

## コミュニティの反応

### Claude Code v2.1.229 / プラグインマーケットプレイスの`command`ソース / セッショングループ (VSCode拡張) / `claude remote-control --continue` / ListAgentsのoffline/cloud表示 / セルフホストランナーのサーバー供給フック対応 / ワークフローfan-outのプレフィックススタガー / `/commit-push-pr`の危険フラグ自動承認を廃止 / ゲートウェイストリーミングのSSEキープアライブping / ストリーミング中の長文応答の消失・二重出力の修正 / Anthropic Institute 労働者再訓練プログラムの効果検証レポート

該当なし。直近 7 日間 (2026-08-05〜08-12) の X 投稿を対象にキーワード検索・セマンティック検索の両方で調べましたが、これらのトピックに関する個人ユーザーの実体験・感想投稿は見つかりませんでした (公式・企業・宣伝系の投稿は除外)。

なお、Remote Control 全般の使い勝手に関する言及や、`self-hosted-runner` 機能自体の告知・紹介は複数見られましたが、いずれも今回の各項目に直接対応する個人の使用体験ではありませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
