---
title: "Claude Code、メール送信前の確認とコストAPIを追加"
summary: "Claude Code v2.1.317で、ツールがアカウントのメールアドレスを外部へ送る前に確認する仕組みや、apps gatewayのコストレポートAPI、Agent SDKフックの`onFailure: \"block\"`が入りました。Anthropic Researchからは、zkSNARKで推論の出所を証明するFlashProveが研究用プロトタイプとして公開されています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-03

features:
  - "FlashProve(証明可能な推論)"
  - "アカウントのメールアドレス送信前の確認"
  - "Claude apps gatewayのコストレポートAPI"
  - "Claude apps gatewayのIdPグループ日次記録"
  - "Agent SDKフックの`onFailure: \"block\"`"
  - "サブエージェントのeffortをモデル別に"
  - "`/schedule`の意図しないコネクタ警告"
  - "SendMessageの到着を早める変更"
  - "Readツールの「前回から変更なし」表示を廃止"
  - "OTelの属性追加"
  - "クラウドセッションのリンクカード"
  - "`CLAUDE_CODE_DISABLE_NESTED_SESSION_ID`"
  - "Claude Desktopのリモート管理設定の読み込み通知"
  - "`claude -p`の書き込み失敗時の終了コード"
  - "Claude TagのSlack成果物リンクカード"
codex_review: "派手な新機能より、メール送信の確認や失敗時に処理を止める仕組みなど、エージェントを業務に入れる際の足回りが着実に整っている点を評価したい。FlashProveは興味深い一方、一次情報も限られ、現時点では実用化の影響を見積もるには早そうだ。"
codex_importance: 3
---

## 公式アップデート

### FlashProve(証明可能な推論)

Anthropic Researchが、FlashProveを研究用プロトタイプとして公開しました。

- zkSNARK証明を使って、ある応答があらかじめ約束したモデルから出力されたことを、モデルの重みを明かさずに示すシステムです
- Apache 2.0ライセンスで公開され、Lean製の検証器が付いています

※今回の入力データには一次ソース(公式ブログ等)のURLが含まれておらず、Web検索でも確認できませんでした。言及している投稿は「コミュニティの反応」に記載しています。

---

以下はすべてClaude Code v2.1.317(2026-11-03公開)の変更です。

### アカウントのメールアドレス送信前の確認

WebツールやシェルツールのTool呼び出しが、アカウントのメールアドレスをネットワークへ送ろうとするとき、実行前に確認を求めるようになりました。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### Claude apps gatewayのコストレポートAPI

Claude apps gatewayの管理APIに、コストレポート`GET /v1/organizations/analytics/cost`が追加されました。

- 指定した期間の過去の支出を読み出せます
- 集計の単位は、合計・開発者別・日別・IdPグループ別から選べます

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### Claude apps gatewayのIdPグループ日次記録

`admin:`を設定したClaude apps gatewayで、各開発者が所属するIdPグループを毎日記録するようになりました。

- 保持期間は`admin.identity_retention_days`で決まります
- 上記のコストレポートは、この記録をもとにIdPグループ別の集計を行います

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### Agent SDKフックの`onFailure: "block"`

Agent SDKのフックコールバックに`onFailure: "block"`が追加されました。コールバック自体が失敗したとき、その操作を実行させずにブロックします。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### サブエージェントのeffortをモデル別に

メインの会話と別のモデルで動くサブエージェントやチームメイトのeffortの決め方が変わりました。セッションのeffortを使うのではなく、そのモデル用に保存されたeffort、なければそのモデルの既定値で動きます。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### `/schedule`の意図しないコネクタ警告

`/schedule`で新しいクラウドスケジュールタスクを作ったとき、頼んでいないコネクタが付いていれば警告が出るようになりました。外し方もあわせて表示されます。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### SendMessageの到着を早める変更

実行中のバックグラウンドエージェントへSendMessageで送ったメッセージが、早く届くようになりました。エージェントが実行中のコマンドは止められず、バックグラウンドへ回されます。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### Readツールの「前回から変更なし」表示を廃止

Readツールが返していた「前回のReadから変更なし(file unchanged since your last Read)」という省略表示がなくなりました。変更のないファイルを読み直しても、内容がそのまま返ります。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### OTelの属性追加

OpenTelemetryのメトリクス・イベント・スパンに、次の属性が追加されました。

- `anthropic.plan`
- `anthropic.seat_type`
- `anthropic.provider`
- `anthropic.custom_base_url`

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### クラウドセッションのリンクカード

クラウドセッションにリンクカードが加わりました。MCPサーバーがユーザーにリンクを開くよう求めたとき、カード上で開くか断るかを選べます。これまでは、その要求がユーザーの目に入らないままでした(リリースノートでは[Cloud sessions]の項目)。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### `CLAUDE_CODE_DISABLE_NESTED_SESSION_ID`

クラウドやセルフホストランナーのセッション内で実行した`claude -p`の扱いが変わり、環境変数`CLAUDE_CODE_DISABLE_NESTED_SESSION_ID`が追加されました。

- これまでは、セッション内の`claude -p`が親セッションのIDを共有し、親のトランスクリプトに書き込んでいました。再起動時に別の会話を再開してしまうことがあり、今回修正されています
- あわせて、セッション内の`claude -p`が自分でタイトルを生成して親セッションに送る不具合も直りました
- セルフホストランナーで`CLAUDE_CODE_DISABLE_NESTED_SESSION_ID=1`を設定すると、従来どおり親セッションのIDとトランスクリプトを使います

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### Claude Desktopのリモート管理設定の読み込み通知

Claude DesktopのCodeタブで、組織のリモート管理設定がセッションにまだ読み込まれていないときに通知が出るようになりました。読み込まれたときにも通知が出ます。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### `claude -p`の書き込み失敗時の終了コード

ディスクやクォータが一杯で、トランスクリプトや`~/.claude.json`への書き込みが失われたとき、`claude -p`が終了コード0で終わっていた不具合が直りました。

- エラーを表示し、textとjsonの出力形式では終了コード1を返します
- 容量が一杯のNFSエクスポートは検出できない場合があります

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

### Claude TagのSlack成果物リンクカード

Slackに新しく貼り付けた成果物(artifact)のリンクが、シンプルなカードで表示されるようになりました。カードのOpenボタンを押すと、Slackのサイドパネルではなく、Claudeで成果物が開きます(リリースノートでは[Claude Tag]の項目)。

[ソース(GitHub Releases v2.1.317)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)

## コミュニティの反応

### FlashProve(証明可能な推論)

X/Twitterでは好意的な投稿が1件見つかりました。性能の数値に注目しています。

#### ポジティブ

> 重みを隠したまま応答の出所を証明できる仕組みを「neat」と評価している。400BのMoEモデルでもH100 1台・毎秒110トークンで証明を生成でき、検証はCPUで17秒という実用性を挙げている(数値は投稿者の記載による) — @i_Am_Snow_Flake [出典](https://x.com/i_Am_Snow_Flake/status/2117528718998671617)

#### ネガティブ

該当なし

#### Tips

該当なし

### アカウントのメールアドレス送信前の確認

X/Twitterでは、個人ユーザーの体験や感想は見つかりませんでした。

Zennでは、この機能には触れていないものの、同じ「エージェントが外部へ何を送ってよいか」というテーマの記事が出ています。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> Web検索の検索語、別のAI CLIへの受け渡し、URLへの埋め込みなど、エージェントがワークスペースのデータを外へ送れてしまう経路を整理し、AGENTS.mdで外部送信の指針を決める方法を提案している(今回の新機能への言及はなし) — Zenn「[エージェントに「どこまで外へ送ってよいか」を決めさせない ― AGENTS.mdで外部送信の指針を考えてみた](https://zenn.dev/kinotex/articles/892bbe31a19cc4)」

### Agent SDKフックの`onFailure: "block"`

X/Twitterでの言及は、リリース告知や変更ログの共有が中心でした。個人ユーザーの体験や感想は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### サブエージェントのeffortをモデル別に

X/Twitterでは反応が見つかりませんでした。

Zennでは、モデルとeffortの組み合わせを実測した記事が出ています。今回の変更には触れていませんが、モデルごとにeffortを決める考え方の参考になります。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> Haiku 5.5・Sonnet 5.5・Opus 5.5とeffort(low〜max)を変えて22の課題を解かせ、精度・時間・費用を比べている。差が出たのは実装よりも、不明点の洗い出しや仕様書づくりといった上流の工程だったとし、工程ごとのモデルとeffortの使い分け表を示している — Zenn「[Claude Code で Haiku・Sonnet・Opus とエフォートを変えて22課題を解かせたら、差が出たのは実装より上流だった](https://zenn.dev/okzaq/articles/claude-code-model-effort-bench)」

### Claude apps gatewayのコストレポートAPI / IdPグループ日次記録

X/Twitterでは反応が見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### その他の機能

次の機能については、コミュニティの反応を確認できませんでした。

- `/schedule`の意図しないコネクタ警告
- SendMessageの到着を早める変更
- Readツールの「前回から変更なし」表示を廃止
- OTelの属性追加
- クラウドセッションのリンクカード
- `CLAUDE_CODE_DISABLE_NESTED_SESSION_ID`
- Claude Desktopのリモート管理設定の読み込み通知
- `claude -p`の書き込み失敗時の終了コード
- Claude TagのSlack成果物リンクカード

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Claude Code v2.1.317 (GitHub Releases)](https://github.com/anthropics/claude-code/releases/tag/v2.1.317)
- [X: @i_Am_Snow_Flake](https://x.com/i_Am_Snow_Flake/status/2117528718998671617)
- [Zenn: エージェントに「どこまで外へ送ってよいか」を決めさせない ― AGENTS.mdで外部送信の指針を考えてみた](https://zenn.dev/kinotex/articles/892bbe31a19cc4)
- [Zenn: Claude Code で Haiku・Sonnet・Opus とエフォートを変えて22課題を解かせたら、差が出たのは実装より上流だった](https://zenn.dev/okzaq/articles/claude-code-model-effort-bench)
