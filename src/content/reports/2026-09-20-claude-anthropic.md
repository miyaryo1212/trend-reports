---
title: "auto mode分類器がサーバー側既定に"
summary: "Claude Code v2.1.278 で auto mode の分類器がサーバーサイド実行を既定とするよう変更され、分類器オーバーヘッドの課金が発生しなくなりました。あわせて Anthropic Institute が再帰的自己改善の現状を論じた「When AI builds itself」を公開し、社内マージコードの80%超を Claude が書いているという数字が X で議論を呼んでいます。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-20

features:
  - "v2.1.278 auto modeのサーバーサイド分類器デフォルト化"
  - "/status の「Auto mode server」行"
  - "v2.1.276 リグレッション修正 (ANTHROPIC_BASE_URL プロキシ環境の400エラー)"
  - "Anthropic Institute「When AI builds itself」公開"
---

## 公式アップデート

### Claude Code v2.1.278: auto mode 分類器のサーバーサイド既定化

Claude API / Enterprise ユーザー、および Bedrock・Vertex・Foundry・ゲートウェイ経由の利用において、auto mode の分類器がサーバー側実行を既定とするよう変更されました。サーバー側分類器は分類器オーバーヘッド分を課金しません。課金対象のフォールバックが発生した場合は警告が出ます。

- Bedrock・Vertex・Foundry・ゲートウェイでは `CLAUDE_CODE_AUTO_MODE_SERVER=0` でオプトアウト可能
- 詳細: `https://code.claude.com/docs/en/auto-mode-classifier-billing`

あわせて `/status` に「Auto mode server」行が追加され、そのセッションの auto mode 分類器がサーバー側で動作しているかを確認できるようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.278)

### Claude Code v2.1.276: ANTHROPIC_BASE_URL プロキシ環境の400エラー修正

`ANTHROPIC_BASE_URL` がプロキシまたはゲートウェイを指している環境で、全リクエストが `400 … Input tag 'advisor_20260301'` で失敗する v2.1.275 のリグレッションを修正しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)

### Anthropic Institute: 「When AI builds itself」(9/18 公開)

再帰的自己改善の現状を分析した文書が公開されました。示された数値・論点は以下の通りです。

- 2026年5月時点で、Anthropic 社内でマージされるコードの80%超を Claude が執筆している
- エージェントが遂行可能なタスク長がおよそ4ヶ月で倍増している
- フロンティア開発における協調的なポーズ (一時停止) の枠組みについても検討している

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### v2.1.276 リグレッション修正 (ANTHROPIC_BASE_URL プロキシ環境の400エラー)

#### ネガティブ

> v2.1.275 で `ANTHROPIC_BASE_URL` をプロキシ/ゲートウェイに向けると全リクエストが400「Input tag 'advisor_20260301'」エラーになる不具合を実際に踏んだ。1日で修正されたものの油断できない。 — @illustpentz [出典](https://x.com/illustpentz/status/2101280216127832467)

> `ANTHROPIC_BASE_URL` 経由のプロキシ環境で Claude Code が毎ターン400エラー「Input tag advisor_20260301」になった。v2.1.276 で直ったが、直近の痛みとして共有。 — @does_it_code [出典](https://x.com/does_it_code/status/2100846246973816869)

> v2.1.275 の退行で `ANTHROPIC_BASE_URL` プロキシ利用時に400「advisor_20260301」エラーが発生し、ゲートウェイ利用者が苦しんだ。 — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2100965678400299452)

#### Tips

> `ANTHROPIC_BASE_URL` を設定してプロキシ/ゲートウェイ越しに Claude Code を使い、Meta モデル API などに切り替える簡単なセットアップ例。 — @MdAsifSorder [出典](https://x.com/MdAsifSorder/status/2101311146020208980)

### Anthropic Institute「When AI builds itself」

#### ポジティブ

> Claude が Anthropic 社内のコード80%を書いているという発表を見て「夢が現実になった」と実感した。 — @meravknafo [出典](https://x.com/meravknafo/status/2100747120760291410)

> Claude が自社コードの80%以上を書いている事実を知り、「再帰的自己改善ループがすでに始まっている」と興奮した。 — @am_felixx [出典](https://x.com/am_felixx/status/2100831768257372641)

#### ネガティブ

> Claude がコードを書く速さのせいでテストが10倍、CI ジョブが25倍に増え、パイプラインが追いつかない。 — @delx369 [出典](https://x.com/delx369/status/2100758466990133621)

> 80%という数字より、CI ジョブ量が半年で25倍になった「壊れた部分」の方が問題だ。 — @ozgurural [出典](https://x.com/ozgurural/status/2099923398348439592)

### v2.1.278 auto mode のサーバーサイド分類器デフォルト化 / `/status` の「Auto mode server」行

X 検索 (直近7日間) では、個人ユーザーによる実体験・感想の投稿は**該当なし**でした。公式・企業・ニュース系アカウントの告知・解説投稿が中心です。

日本語コミュニティでは、本変更を解説する記事が1本出ています。

- [Claude Code の auto モード分類器がサーバー実行に、課金対象外になった件を解説](https://qiita.com/picnic/items/37a7f41bee49971c65e7) (Qiita / picnic) — auto モードが入力内容に応じてモデルを選ぶ仕組みと、分類器がサーバー側既定になったことの意味を整理

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
