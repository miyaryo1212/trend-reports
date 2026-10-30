---
title: "v2.1.314で作業ディレクトリ外の書き込みを禁止可能に"
summary: "Claude Code v2.1.314で、作業ディレクトリの外への書き込みを拒否する設定と、長く放置した会話を要約するidle compactionが加わりました。apps gatewayのグループ別振り分け、クラウドのスケジュールタスクでのプラグイン読み込みなど、組織向けの改善も入っています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-31

features:
  - "アイドル時の自動要約(idle compaction)"
  - "`permissions.blockWritesOutsideWorkingDirectories`"
  - "Claude apps gatewayのアップストリームに`groups`指定"
  - "Claude apps gatewayの`guardrail_trace`"
  - "管理者によるeffort上限への自動対応"
  - "クラウドのスケジュールタスクでプラグインを読み込み"
  - "セットアップスクリプトが失敗してもクラウドセッションを開始"
  - "拒否されたリクエストを別モデルで再試行"
codex_review: "作業ディレクトリ外への書き込み制限は、派手さはないがエージェントを日常の開発に置くうえで効く改善だ。とはいえ対象は一部ツールに限られ、これだけで注入攻撃への防御が完結するように受け取るのは危うい。"
codex_importance: 3
---

## 公式アップデート

以下はすべてClaude Code v2.1.314(2026-10-30公開)の変更です。

### アイドル時の自動要約(idle compaction)

VS Code拡張とClaude DesktopのCodeタブに、idle compactionが追加されました。

- 20万トークンを超えた会話を放置すると、その会話が要約されます
- 次のメッセージを送った時点でプロンプトキャッシュが切れていれば、元の会話の代わりにこの要約が使われます
- 同じリリースで動く範囲も広がりました。テレメトリをオフにしているサブスクライバーでも動きます。Bedrock、Vertex、Foundry、LLMゲートウェイでは、1時間のプロンプトキャッシュを有効にしていれば動きます

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### `permissions.blockWritesOutsideWorkingDirectories`

`permissions.blockWritesOutsideWorkingDirectories`という設定が追加されました。

- 有効にすると、Write、Edit、NotebookEditの各ツールは、作業ディレクトリの外にあるパスへの書き込みを拒否します
- この制限は、どの権限モードでもかかります

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### Claude apps gatewayのアップストリームに`groups`指定

Claude apps gatewayのアップストリームに、省略できる`groups`リストを書けるようになりました。

- リストに書いたIdPグループに属する開発者だけが、そのアップストリームに振り分けられます
- フェイルオーバーのときも、この条件は変わりません

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### Claude apps gatewayの`guardrail_trace`

Claude apps gatewayのBedrockアップストリームに`guardrail_trace`が追加されました。

- リクエストに対してAmazon Bedrockのどのガードレールフィルタが発動したかを、ログに残せます
- ガードレールに引っかかったテキストそのものはログに含まれません

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### 管理者によるeffort上限への自動対応

組織の管理者がモデルのeffortに上限を設けていると、これまでは「Invalid effort level」エラーでターンごとに失敗し続けていました。この不具合が直りました。

- 今後はClaude Codeがeffortを下げて再試行し、どのレベルを使ったかを表示します

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### クラウドのスケジュールタスクでプラグインを読み込み

Anthropicのクラウドで動くスケジュールタスクが、claude.aiアカウントで有効にしたプラグインを読み込むようになりました(リリースノートでは[Cloud sessions]の項目)。

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### セットアップスクリプトが失敗してもクラウドセッションを開始

Web、デスクトップ、モバイルの各アプリから始めたクラウドセッションは、セットアップスクリプトがエラーで終わっても起動するようになりました。これまでは起動に失敗していました(リリースノートでは[Cloud sessions]の項目)。

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

### 拒否されたリクエストを別モデルで再試行

`ANTHROPIC_DEFAULT_OPUS_MODEL`、`availableModels`、`deniedModels`の設定によっては、使えるOpusが古いモデルだけになったり、1つもなくなったりします。この状況でフラグが立ったリクエストは、これまで拒否で終わっていましたが、今後は別のモデルで再試行されます。

[ソース(GitHub Releases v2.1.314)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)

## コミュニティの反応

### アイドル時の自動要約(idle compaction)

X/Twitterでは機能を紹介する投稿が1件だけで、トーンは好意的です。Qiitaには、v2.1.314の変更点をまとめた記事が出ています。

#### ポジティブ

> v2.1.314のidle compactionを紹介する投稿。VS Code/Desktopで20万トークンを超えた会話を放置すると自動で要約され、キャッシュが切れていれば次のメッセージでその要約が使われる、という点を実用的だと伝えている。投稿者は放置時間を「1時間」としているが、リリースノートには時間の記載はない — @resetsin6days [出典](https://x.com/resetsin6days/status/2116160622010507722)

#### ネガティブ

該当なし

#### Tips

> 投稿者によると、`"idleCompaction": false`でこの機能をオフにできる(リリースノートにはこの設定名の記載なし) — @resetsin6days [出典](https://x.com/resetsin6days/status/2116160622010507722)

> Qiita記事「Claude Code v2.1.314の変更点まとめ：書き込み制限設定・idle compaction・挙動変更への対応」。idle compactionを含む新機能のほか、既存の設定の結果が変わる可能性がある挙動変更への対応も整理している — picnic [出典](https://qiita.com/picnic/items/ca04a5b5a7666096fee9)

### `permissions.blockWritesOutsideWorkingDirectories`

今回の機能の中で最も反応が多く、ほとんどが好意的です。プロンプトインジェクション対策として評価する声と、具体的な設定方法を共有する投稿が目立ちます。

#### ポジティブ

> WriteやEditのツールが、意図せずリポジトリの外のファイルに書き込んでしまうリスクを実機で確かめた。新しい設定を入れると、その書き込みが拒否されて安全になったと評価している — @davekiss [出典](https://x.com/davekiss/status/2116223683085705220)

> この設定でClaudeをプロジェクトフォルダ内に閉じ込められる。READMEや外部ページを経由したプロンプトインジェクションを受けても、被害を1つのフォルダにとどめられる点が便利だと実感している — @Bajanpunkw [出典](https://x.com/Bajanpunkw/status/2116174470461198430)

#### ネガティブ

該当なし

#### Tips

> `.claude/settings.json`の`permissions`ブロックに`"blockWritesOutsideWorkingDirectories": true`を追加し、書き込みを許すフォルダは`/add-dir`で増やす、という設定手順を紹介している — @EthanAgentLab [出典](https://x.com/EthanAgentLab/status/2116170030123803097)

> この設定で制限されるのはWrite、Edit、NotebookEditの3ツールだけなので、Bashなどは別途サンドボックスで制御する、という運用例を共有している — @AverageAiBro [出典](https://x.com/AverageAiBro/status/2116241727568892253)

> Qiita記事「Claude Code v2.1.314の変更点まとめ：書き込み制限設定・idle compaction・挙動変更への対応」も、この書き込み制限の設定を主なポイントの1つとして取り上げている — picnic [出典](https://qiita.com/picnic/items/ca04a5b5a7666096fee9)

### Claude apps gatewayのアップストリームに`groups`指定

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Claude apps gatewayの`guardrail_trace`

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### 管理者によるeffort上限への自動対応

X/Twitterで直近7日間の投稿を調べましたが、この修正についての体験談や感想は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### クラウドのスケジュールタスクでプラグインを読み込み

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### セットアップスクリプトが失敗してもクラウドセッションを開始

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### 拒否されたリクエストを別モデルで再試行

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Claude Code v2.1.314 (GitHub Releases)](https://github.com/anthropics/claude-code/releases/tag/v2.1.314)
- [Qiita: Claude Code v2.1.314の変更点まとめ：書き込み制限設定・idle compaction・挙動変更への対応](https://qiita.com/picnic/items/ca04a5b5a7666096fee9)
- [X: @resetsin6days](https://x.com/resetsin6days/status/2116160622010507722)
- [X: @davekiss](https://x.com/davekiss/status/2116223683085705220)
- [X: @Bajanpunkw](https://x.com/Bajanpunkw/status/2116174470461198430)
- [X: @EthanAgentLab](https://x.com/EthanAgentLab/status/2116170030123803097)
- [X: @AverageAiBro](https://x.com/AverageAiBro/status/2116241727568892253)
