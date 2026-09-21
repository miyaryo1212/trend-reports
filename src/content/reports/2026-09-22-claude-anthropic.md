---
title: "auto mode の分類器がサーバー側既定に"
summary: "Claude Code v2.1.278 で auto mode の分類器がサーバーサイド実行を既定とし、分類器オーバーヘッドの課金が発生しなくなりました。あわせて /status に「Auto mode server」行が追加。Anthropic Institute の「When AI builds itself」も9/18に更新され、社内コードの8割超をClaudeが書いているとする数値が示されています。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-22

features:
  - "v2.1.278 auto mode のサーバーサイド分類器デフォルト化"
  - "v2.1.278 /status に「Auto mode server」行を追加"
  - "Anthropic Institute「When AI builds itself」9/18 更新"
---

## 公式アップデート

### Claude Code v2.1.278: auto mode のサーバーサイド分類器がデフォルトに

Claude API / Enterprise ユーザー、および Bedrock・Vertex・Foundry・ゲートウェイ経由の利用で、auto mode の分類器がサーバー側実行を既定とするよう変更されました。サーバー側分類器は分類器オーバーヘッド分の課金が発生しません。

- Bedrock・Vertex・Foundry・ゲートウェイでは `CLAUDE_CODE_AUTO_MODE_SERVER=0` でオプトアウト可能
- 課金の発生するフォールバックに切り替わった場合は警告が出る

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.278) / [課金ドキュメント](https://code.claude.com/docs/en/auto-mode-classifier-billing)

### Claude Code v2.1.278: `/status` に「Auto mode server」行を追加

そのセッションの auto mode 分類器がサーバー側で動いているかどうかを、`/status` の「Auto mode server」行で確認できるようになりました。上記のデフォルト変更が自分の環境に効いているかを判別するための行です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.278)

### Anthropic Institute「When AI builds itself」9/18 更新

Anthropic Institute の "When AI builds itself" が9月18日に更新され、Claude Code セッションの成功率グラフが9月分まで延長されました。あわせて示されている数値は以下の通りです。

- 社内のコード出力は四半期あたり8倍のペースで増加
- 2026年5月時点で、社内コードの80%超を Claude が執筆
- タスク遂行可能な作業時間は、2024年3月の4分から2026年には12時間へ

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### v2.1.278 auto mode のサーバーサイド分類器デフォルト化

X 検索 (直近7日間) では、個人ユーザーによる実体験・感想・Tips の投稿は**該当なし**でした。リリース情報の共有や `/status` の確認手順といった告知的な投稿が中心です。

### v2.1.278 `/status` の「Auto mode server」行

同じく個人ユーザーの実体験投稿は**該当なし**でした。

### Anthropic Institute「When AI builds itself」9/18 更新

記事そのものへの評価ではありませんが、「AIがどこまでコードを書けるか」という同じ論点をめぐる実体験の投稿が集まっています。

#### ポジティブ

> Claude Code のセッションをメインに使ってファネル作業を自動化し、5x ROAS を達成。画像クリエイティブ以外はほぼ任せきりで実務に直結した。 — @lootmaxxing [出典](https://x.com/lootmaxxing/status/2102140216018399455)

> Claude Code を使い続けると脳が疲弊するので、作業中の ambient loop と使用率表示を行うプラグイン「Stay awhile」を自作した。1つの会話に留まりたい人向け。 — @consumationist [出典](https://x.com/consumationist/status/2102123378240815227)

#### ネガティブ

> Claude Code で Cursor rules を明示的に指示しないと、標準ライブラリの再実装や長時間かかるテストを書くなど、期待以下のコードが出てくる。 — @leingoedbloed [出典](https://x.com/leingoedbloed/status/2099778217783541920)

> Claude Code のエージェント生成コードは手動での再実装や長時間テストに頼りがちで、「神レベル」との宣伝とのギャップが大きい。 — @RoyDelfino [出典](https://x.com/RoyDelfino/status/2100613758091751918)

#### Tips

> Claude Code の Agent view とセッション間通信を活用するとよい。セッション管理の連載も参考に。 — @turusuke [出典](https://x.com/turusuke/status/2102132965761486874)

> AIがAIを育てる時代なので、まず Claude Code に任せる作業を1つ決めて、必ず自分で確認する運用から始めるのがおすすめ。 — @nume0615 [出典](https://x.com/nume0615/status/2102002853384781867)

日本語コミュニティでも、エージェントに任せた結果をどう検証するかという記事が続いています。

- [自分の定期ジョブ28本を点検するスキルを作ったら、自分のバックアップが壊れていた](https://zenn.dev/houchi_unyo/articles/unattended-job-audit-2026-09) (Zenn / かねもちの人) — 無人運用の定期ジョブ28本を点検するスキルを公開したところ、自分の週次バックアップが3週間無通知で失敗していたことが判明
- [AIエージェントの「しました」を信じて2回壊れたので、完了の定義を3つに決めた](https://zenn.dev/akira_books/articles/9e2a9462b72231) (Zenn / akira books) — 「edits applied」と返ったのに何も変わっていない事例など、完了報告と実態のずれの記録
- [AIが書いたコードのレビュー負荷は、生成AI以前の技術で下げる](https://zenn.dev/kagu3/articles/be4014b905bee4) (Zenn / kagu3) — 生成量が増えるほど人間のレビューが形骸化する問題への対処
- [エージェントのBashログを正規表現で割ったら、断片の54%は存在しないコマンドだった](https://zenn.dev/tsutomusaito/articles/bash-log-parsing-ja) (Zenn / saito) — エージェントが実際に何を実行しているかの集計

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
