---
title: "Opus 4.8のfast modeが11/30で廃止へ"
summary: "Claude Code v2.1.316で、Opus 4.8のfast modeが非推奨になり、11/30に削除されると告知されました。サブエージェントのeffortを個別に決める環境変数、apps gatewayのグループ共有予算とポリシー重ね合わせなど、組織向けの追加も多く入っています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-01

features:
  - "Opus 4.8のfast mode非推奨化"
  - "`CLAUDE_CODE_SUBAGENT_EFFORT`"
  - "`CLAUDE_CODE_DISABLE_ULTRATHINK`"
  - "サーバー管理設定の承認プロンプト廃止"
  - "VS Codeのultrathinkをxhigh effortで実行"
  - "Claude apps gatewayのpooled group budgets"
  - "Claude apps gatewayの`managed.policy_mode: layered`"
  - "Claude apps gatewayの`guardrail.input_tagging`"
  - "クラウドセッションのMCPフォームカード"
  - "クラウド環境のネットワークシークレットを自分で管理"
  - "`/code-review`の結果をカードで表示"
  - "Code Reviewの重大度別の指摘カード"
  - "Claude Tagの「How Claude participates」設定"
  - "VS Codeからapps gatewayへのサインイン"
  - "`--restricted`のセキュリティ修正"
codex_review: "fast modeの廃止告知より、サブエージェント単位で計算量を調整できる点が実務的に面白い。企業向けの予算・ポリシー管理も着実に整う一方、機能が多く、今回の更新だけで業界の流れが変わるほどではない。"
codex_importance: 2
---

## 公式アップデート

以下はすべてClaude Code v2.1.316(2026-10-31公開)の変更です。

### Opus 4.8のfast mode非推奨化

Opus 4.8のfast modeが2026年10月30日付で非推奨になりました。

- 2026年11月30日に削除されます
- 削除後、Opus 4.8でfast modeを指定したリクエストはエラーになります。通常のOpus 4.8に自動で切り替わることはありません
- 高速化を続けて使いたい場合は、Opus 5.5への移行が案内されています

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### `CLAUDE_CODE_SUBAGENT_EFFORT`

サブエージェントのeffortレベルを決める環境変数`CLAUDE_CODE_SUBAGENT_EFFORT`が追加されました。

- ほかの設定でeffortが指定されていないときに使われます
- これまでのようにセッションのeffortを引き継ぐのではなく、サブエージェント用の値を別に決められます

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### `CLAUDE_CODE_DISABLE_ULTRATHINK`

`ultrathink`キーワードを無効にする環境変数`CLAUDE_CODE_DISABLE_ULTRATHINK`が追加されました。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### サーバー管理設定の承認プロンプト廃止

TeamとEnterpriseのログインで使うサーバー管理設定の扱いが変わりました。

- AnthropicのAPIから取得した設定は、承認プロンプトを出さずにそのまま適用されます
- 保存してある設定のコピーが検証に通らない場合は、使われずに拒否されます

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### VS Codeのultrathinkをxhigh effortで実行

VS Code拡張で`ultrathink`を使うと、そのターンがxhigh effortで動くようになりました。ターミナルと同じく、入力欄では虹色で表示されます。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### Claude apps gatewayのpooled group budgets

Claude apps gatewayで、グループのメンバーが共有する月間予算を設定できるようになりました。

- メンバーそれぞれの上限とは別に、グループ全体で1つの月間予算を持てます
- spend limits admin APIの`pooled_budget`で設定します

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### Claude apps gatewayの`managed.policy_mode: layered`

Claude apps gatewayに`managed.policy_mode: layered`が追加されました。

- これまでは、開発者に当てはまるポリシーのうち最初の1つだけが適用されていました
- `layered`にすると、当てはまるポリシーがすべて適用されます。各ポリシーは、リストでその下にあるポリシーの上に重ねてマージされます

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### Claude apps gatewayの`guardrail.input_tagging`

Claude apps gatewayのBedrockアップストリームに`guardrail.input_tagging`が追加されました。

- プロンプトを入力タグで囲みます。Amazon Bedrockガードレールのプロンプト攻撃フィルタは、このタグがないと働きません
- `all_messages_and_system`を指定すると、システムプロンプトにもタグが付きます

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### クラウドセッションのMCPフォームカード

クラウドセッションにフォームカードが加わりました。MCPサーバーがフォームへの入力を求めたとき、カード上で入力するか断るかを選べます。これまでは、ユーザーに表示されないまま要求がキャンセルされていました(リリースノートでは[Cloud sessions]の項目)。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### クラウド環境のネットワークシークレットを自分で管理

Enterpriseのメンバーが、自分のクラウド環境のネットワークシークレットを追加・削除できるようになりました。これまでは閲覧しかできませんでした(リリースノートでは[Cloud sessions]の項目)。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### `/code-review`の結果をカードで表示

Claude DesktopやWebのCodeタブから`/code-review`を実行したときの表示が変わりました。クラウドセッションと`claude remote-control`セッションでも、指摘がテキストの一覧ではなく、結果カードで表示されます。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### Code Reviewの重大度別の指摘カード

Code ReviewのAnalyticsページに、指摘を重大度別に見るカードが追加されました。表示されるのは次の3つです(リリースノートでは[Code Review]の項目)。

- 期間内の指摘の総数
- 重大度ごとに積み上げた日別のグラフ
- 重大度ごとの件数

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### Claude Tagの「How Claude participates」設定

Slackチャンネルの「Respond automatically」スイッチがなくなり、Claudeの参加方法を選ぶ「How Claude participates」に置き換わりました。チャンネルのConfigureページと、Claude Tagの管理設定で選べます(リリースノートでは[Claude Tag]の項目)。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### VS Codeからapps gatewayへのサインイン

VS Code拡張のチャットパネルから、Claude apps gatewayにサインインできるようになりました。ターミナルを使う必要はありません。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

### `--restricted`のセキュリティ修正

`--restricted`で起動したセッションで、作業ディレクトリの外にあるファイルがアップロードされてしまう不具合が直りました。そのファイルがReadのallowルールに当てはまる場合に起きていました。

[ソース(GitHub Releases v2.1.316)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)

## コミュニティの反応

### Opus 4.8のfast mode非推奨化

X/Twitterでは反応が見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### `CLAUDE_CODE_SUBAGENT_EFFORT`

X/Twitterでは、新機能を紹介する投稿と設定例が中心です。一方で、ほかの環境変数との優先順位に注意を促す声もあります。全体のトーンは中立〜やや好意的です。

#### ポジティブ

該当なし

#### ネガティブ

> 1つの難しいバグのためにeffortを上げると、サブエージェントが走らせるファイル検索までeffortが上がってしまう、という問題を指摘している。そのうえで、`CLAUDE_CODE_EFFORT_LEVEL`を設定しているとサブエージェントの設定より優先される、という注意点を挙げている(この優先順位はリリースノートには書かれていない) — @resetsin6days [出典](https://x.com/resetsin6days/status/2116569106665349476)

#### Tips

> `CLAUDE_CODE_SUBAGENT_EFFORT=low`のように指定すれば、サブエージェントの既定のeffortをメインとは別に決められる、という使い方を紹介している — @webtkdev [出典](https://x.com/webtkdev/status/2116613929464176980)

> v2.1.316の新機能として、ほかに指定がないときのサブエージェントのeffortを決められる(セッションの値を引き継がない)ことを紹介している。`CLAUDE_CODE_DISABLE_ULTRATHINK`にも触れている — @livetab_ [出典](https://x.com/livetab_/status/2116593650721329389)

### `CLAUDE_CODE_DISABLE_ULTRATHINK`

X/Twitterでの言及は、公式の要約や変更ログを共有するものだけでした。使ってみた体験や感想は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### サーバー管理設定の承認プロンプト廃止

X/Twitterでは反応が見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### VS Codeのultrathinkをxhigh effortで実行

好意的な投稿が2件ありました。どちらも、サブエージェントのeffortを個別に決められるようになった点とあわせて評価しています。

#### ポジティブ

> VS Codeのultrathinkが、ターミナルと同じxhigh effortと虹色表示にそろったことを報告している。サブエージェントのeffortも個別に設定できるようになり、計算リソースを柔軟に割り振れて便利だと述べている — @RealYDT [出典](https://x.com/RealYDT/status/2116447498483171486)

> VS Code拡張のultrathinkがxhigh effortと虹色表示にそろった更新を紹介している。サブエージェントごとにeffortを決められる点は、重い調査をするときにかなり便利だと評価している — @shima0hide [出典](https://x.com/shima0hide/status/2116428486189654486)

#### ネガティブ

該当なし

#### Tips

該当なし

### Claude apps gatewayのpooled group budgets

X/Twitterでの言及は、更新ログを伝えるものが2件あっただけでした。使ってみた体験や感想は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### その他の機能

次の機能については、コミュニティの反応を確認できませんでした。

- `managed.policy_mode: layered`
- `guardrail.input_tagging`
- MCPフォームカード
- ネットワークシークレットの自己管理
- `/code-review`の結果カード表示
- Code Reviewの重大度別の指摘カード
- Claude Tagの「How Claude participates」設定
- VS Codeからapps gatewayへのサインイン
- `--restricted`のセキュリティ修正

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Claude Code v2.1.316 (GitHub Releases)](https://github.com/anthropics/claude-code/releases/tag/v2.1.316)
- [X: @resetsin6days](https://x.com/resetsin6days/status/2116569106665349476)
- [X: @webtkdev](https://x.com/webtkdev/status/2116613929464176980)
- [X: @livetab_](https://x.com/livetab_/status/2116593650721329389)
- [X: @RealYDT](https://x.com/RealYDT/status/2116447498483171486)
- [X: @shima0hide](https://x.com/shima0hide/status/2116428486189654486)
