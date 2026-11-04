---
title: "v2.1.318、ログイン期限の表示とIDE拡張の扱いを変更"
summary: "Claude Code v2.1.318が11月4日に公開されました。claude.aiログインの有効期限の表示、リポジトリを選ばずに始めるクラウドセッション、IDE拡張の自動インストールの廃止、deniedMcpServersの適用範囲の拡大などが入っています。Qiitaには、破壊的変更を整理した解説記事が出ました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-05

features:
  - "Claude Code v2.1.318 リリース"
  - "claude.aiログイン期限の可視化"
  - "クラウドセッションの「No repository」オプション"
  - "IDE拡張の自動インストールを廃止"
  - "deniedMcpServersの適用範囲を拡大"
  - "Claude apps gatewayのassume_role"
  - "/claude-api managed-agents-onboardの既定変更"
  - "modの$.model.forkにeffortオプション"
  - "バックグラウンドのサブエージェントのシェルコマンド移動"
  - "クラウドセッションのChromium参照"
  - "--continueの不具合修正"
codex_review: "派手なモデル進化ではないが、認証期限の可視化やMCP拒否設定の拡張は、エージェントを日常運用する現場には効く地味な改善だ。IDE拡張の自動導入廃止など、更新時に既存手順を見直す必要がある点も見逃せない。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.318 リリース

Claude Code v2.1.318が2026-11-04に公開されました。機能追加、不具合修正、動作の変更をまとめたリリースです。主な項目を以下に挙げます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### claude.aiログイン期限の可視化

- `claude auth status`の出力に、保存されているclaude.aiログインの有効期限(`loginExpiresAt`)が加わりました。
- `claude -p`のJSON出力に`credential_expires_at`が加わりました。
- `claude -p`のテキスト出力では、ログインの期限の10日前から、stderrに1行の警告が出ます。
- ログインが期限に達したときのエラーは、期限切れであることを示すようになりました。`claude -p`では、`claude auth login`と`claude setup-token`の名前も表示します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### クラウドセッションの「No repository」オプション

Anthropicが用意する環境のクラウドセッションを、リポジトリを選ばずに始められるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### IDE拡張の自動インストールを廃止

IDEのターミナルでClaude Codeを起動しても、IDE拡張のインストールや更新をしなくなりました。拡張は、外部のターミナルから`/ide`を実行するか、エディタの拡張機能ビューから入れます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### deniedMcpServersの適用範囲を拡大

`deniedMcpServers`のURLの指定が、次のものにも効くようになりました。

- 上流のURLが一致する、Anthropic提供のサーバー
- クラウドセッションとセルフホストランナーのコネクタ(セッションにコネクタ自身のURLが渡される場合)

上記に当たらないコネクタは、名前で拒否します。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### Claude apps gatewayのassume_role

Claude apps gatewayの`mantle`アップストリームに`assume_role`が加わりました。別のAWSアカウントのロールを引き受けられます。開発者ごとのAWSコストの按分にも使えます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### /claude-api managed-agents-onboardの既定変更

`/claude-api managed-agents-onboard`で作る新しいエージェントでは、組み込みツールとクイックスタートテンプレートのMCPツールが、既定で`auto`権限ポリシー(「Judge risky actions」)になりました。Claude Consoleの既定に合わせた変更です。確認なしで実行したい場合は「run without asking」と伝えます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### modの$.model.forkにeffortオプション

modの`$.model.fork`に`effort`オプションが加わりました。セッションのeffortの設定に関係なく、軽い副処理を`low`などで実行できます。結果には、送ったeffortが記録されます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### バックグラウンドのサブエージェントのシェルコマンド移動

バックグラウンドのサブエージェントは、すべてのプロバイダーで、3分を超えたシェルコマンドをバックグラウンドに回すようになりました。コマンドの実行中に、プロンプトキャッシュの期限が切れるのを防ぐための変更です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### クラウドセッションのChromium参照

クラウドセッションに、Chromeの通常の名前が加わりました。Playwright以外のツールも、`google-chrome`と`CHROME_PATH`から組み込みのChromiumを見つけられます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

### --continueの不具合修正

不正な形式のツール呼び出しで再試行を使い切ったあと、`--continue`でそれまでの会話が失われることがある問題を修正しました。2.1.314で入った回帰です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

## コミュニティの反応

### Claude Code v2.1.318 リリース

v2.1.318については、プランへの批判的な投稿と、運用面のTipsが出ています。Qiitaには、破壊的変更に絞った中立的な解説記事が出ました。

#### ポジティブ

該当なし

#### ネガティブ

> 月額200ドルのMax 20xプランは「v2.1.318でClaude Ultraに改名」され、実質の倍率が10倍に抑えられたと批判している。あわせて、ゲームの複製を頼むとシステムプロンプトが黙って書き換えられるとも主張している。トーンは批判的 — @bebuu_ai [出典](https://x.com/bebuu_ai/status/2118054818174710255)
>
> ※v2.1.318のリリースノートには、プランの名前や上限の変更は書かれていません。システムプロンプトの書き換えについても記載はありません。

#### Tips

> `claude -p`を定期実行しているなら、`claude auth status`の`loginExpiresAt`(2.1.318の新機能)を監視してアラートを出す。ログインの期限が切れてジョブが失敗するのを防げる、という提案 — @kazuki_sf_ [出典](https://x.com/kazuki_sf_/status/2118060063374053794)

> v2.1.318には、新機能(Claude apps gatewayの`assume_role`対応など)のほかに、運用中の環境を壊しうる破壊的変更が3件含まれると指摘している。共有ネットワークホームでの設定消失などの修正も取り上げている。トーンは中立で、運用者に確認を促す内容 — Qiita「[Claude Code v2.1.318 破壊的変更まとめ：ランナーログ・IDE拡張・deniedMcpServers](https://qiita.com/picnic/items/6984d8e59c0e8b52dfab)」

### IDE拡張の自動インストールを廃止

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> 上記のQiita記事は、IDE拡張の扱いの変更を、v2.1.318の破壊的変更の1つとして取り上げている — Qiita「[Claude Code v2.1.318 破壊的変更まとめ：ランナーログ・IDE拡張・deniedMcpServers](https://qiita.com/picnic/items/6984d8e59c0e8b52dfab)」

### deniedMcpServersの適用範囲を拡大

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> 同じQiita記事は、`deniedMcpServers`の適用範囲の拡大も、確認が必要な破壊的変更として挙げている — Qiita「[Claude Code v2.1.318 破壊的変更まとめ：ランナーログ・IDE拡張・deniedMcpServers](https://qiita.com/picnic/items/6984d8e59c0e8b52dfab)」

### その他の機能

claude.aiログイン期限の可視化(上記の@kazuki_sf_の投稿を除く)、クラウドセッションの「No repository」オプション、Claude apps gatewayの`assume_role`については、利用者の実体験を書いた投稿は見つかりませんでした。

該当なし

## ソース

- [Claude Code v2.1.318 (GitHub Releases)](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)
- [Claude Code Releases (GitHub)](https://github.com/anthropics/claude-code/releases)
- [Qiita: Claude Code v2.1.318 破壊的変更まとめ：ランナーログ・IDE拡張・deniedMcpServers](https://qiita.com/picnic/items/6984d8e59c0e8b52dfab)
- [X: @bebuu_ai](https://x.com/bebuu_ai/status/2118054818174710255)
- [X: @kazuki_sf_](https://x.com/kazuki_sf_/status/2118060063374053794)
