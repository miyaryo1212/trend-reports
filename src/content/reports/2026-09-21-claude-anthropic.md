---
title: "Claude Code v2.1.277 が AGENTS.md に対応"
summary: "Claude Code v2.1.277 で AGENTS.md サポートが入り、CLAUDE.md が無いプロジェクトでは AGENTS.md が読み込まれるようになりました。TaskOutput ツールの廃止、サブエージェント結果の分離表示、Fable の /model 常時表示なども同時に入り、X では AGENTS.md 対応を歓迎する声と二重管理を懸念する声が出ています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-21

features:
  - "v2.1.277 AGENTS.md サポート"
  - "v2.1.277 TaskOutput ツール廃止"
  - "v2.1.277 サブエージェント結果の分離表示"
  - "v2.1.277 Fable を /model に常時表示"
  - "v2.1.277 claude -p / Agent SDK のハング修正"
  - "v2.1.277 ヘッドレス起動の高速化"
  - "v2.1.277 Claude Code on the web 組織環境の共有"
  - "Anthropic Life Sciences Verification Program"
  - "Anthropic フロンティアラボのAI開発ペース測定指標"
  - "Anthropic × Accenture 組込み評価パートナーシップ"
---

## 公式アップデート

### Claude Code v2.1.277: AGENTS.md サポート

CLAUDE.md が存在しないプロジェクトで、Claude Code が代わりに `AGENTS.md` を読み込むようになりました。読み込み対象は `/config` の「Project instructions」から変更できます。Bedrock・Vertex・Foundry では未対応です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

### Claude Code v2.1.277: TaskOutput ツールの廃止

非推奨だった TaskOutput ツールが削除されました。バックグラウンドタスクの出力は Read ツールで出力ファイルを読む方式に変わります。これに伴い `taskOutputMaxChars` 設定と `TASK_MAX_OUTPUT_LENGTH` 環境変数は効果を持たなくなりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

### Claude Code v2.1.277: サブエージェント結果の分離表示

サブエージェントの実行結果がメインエージェントに渡る際、サブエージェント出力であることを示す専用ヘッダー付き・結果はインデントされた形で届くようになりました。サブエージェントの結果に含まれるテキストが、セッション自身への指示として解釈されることを防ぐ変更です。

あわせて、Bedrock・Vertex・Foundry 上のワークフロースクリプトで計算された `agent()` プロンプトも、スクリプト由来のテキストとしてサブエージェントに渡るよう変更されました (安全性分類器がユーザー発話と誤認しないようにするため)。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

### Claude Code v2.1.277: Fable を /model に常時表示

Anthropic API 利用時、Fable が `/model` に常に表示されるようになりました。組織の設定で無効化されている場合のみグレーアウト表示となります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

### Claude Code v2.1.277: claude -p / Agent SDK のハング修正とヘッドレス起動の高速化

- 内部エラー発生後に結果を返さないままハングする `claude -p` / Agent SDK セッションの問題を修正。エラーを報告した上で exit code 1 で終了するようになりました
- SDK / ヘッドレス (`-p`) 利用時の起動を改善。初回ターンがディレクトリ単位の CLAUDE.md 探索の完了を待たなくなりました

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

### Claude Code on the web: 組織環境の共有 (v2.1.277)

Team / Enterprise プランで、環境ピッカーに Personal / Organization セクションが追加されました。管理者は個人環境を組織に共有できます。組織環境は Code タブからは読み取り専用のサマリーとして開き、編集は Admin settings → Cloud environments で行う形に変更されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

### Anthropic: Life Sciences Verification Program (9/17 発表)

ライフサイエンス分野向けに、信頼済みアクセスを与えるための検証プログラムが開始されました。

[ソース](https://www.anthropic.com/news)

### Anthropic: フロンティアラボのAI開発ペース測定指標 (9/18)

フロンティアラボが自らのAI開発ペースを外部に示すための公開指標が提案されました。提示された数値は以下の通りです。

- Claude がAI研究タスクの26%を主導
- 同時稼働エージェント数は約3万
- 安全性研究に割り当てる計算資源は全体の6%

[ソース](https://www.anthropic.com/news)

### Anthropic × Accenture: 組込み評価パートナーシップ (9/18)

企業導入時の評価プロセスを組み込む形での Accenture との提携が発表されました。

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### v2.1.277 AGENTS.md サポート

本日の X で反応が確認できたのは、10件の新規トピックのうち AGENTS.md 対応のみでした。

#### ポジティブ

> Claude Code がついに AGENTS.md をサポートしたらしいので、ついに CLAUDE.md を消せる。 — @Regles_ [出典](https://x.com/Regles_/status/2101460785210015905)

> CLAUDE.md が無いときに AGENTS.md を読むようになった。フォールバック限定だが、4,300以上の upvote を集めていた要望がようやく実現した。 — @shaharia [出典](https://x.com/shaharia/status/2101256157608153377)

#### ネガティブ

> AGENTS.md 対応は入ったが、CLAUDE.md に書いてきた設定が二重管理になりそう。Claude 専用ユーザーは書き直しコストを負う側かもしれない。 — @yuto_lab_note [出典](https://x.com/yuto_lab_note/status/2101460704444530887)

#### Tips

> フォールバック限定であること、Bedrock/Vertex/Foundry は未対応であることに注意。共有ファイル1本にするか両方持つかは要検討。 — @kayvanza [出典](https://x.com/kayvanza/status/2101459323285065757)

> AGENTS.md はリポジトリ単位で指示を置く場所を与えてくれるので、ガイダンスがコードベースと一緒に移動する。 — @catmanyau [出典](https://x.com/catmanyau/status/2101048355824472318)

> Claude Code で AGENTS.md が使えるようになった。CLAUDE.md が無ければエージェントは AGENTS.md を使う。 — @byodadev [出典](https://x.com/byodadev/status/2101131986706338031)

日本語コミュニティでは、v2.1.270〜v2.1.278 の変更をまとめた記事が公開されています。AGENTS.md 対応を今回の目玉の一つとして扱っています。

- [Claude Code v2.1.270 - v2.1.278 リリースノートまとめ](https://qiita.com/NaokiIshimura/items/6648411c8caf63c9c40e) (Qiita / NaokiIshimura)
- [Claude Code 開発者が注目している5つのアップデート（v2.1.270 - v2.1.278）](https://qiita.com/NaokiIshimura/items/e1eff3b2b6e23800cdcc) (Qiita / NaokiIshimura) — X の公式アナウンスや GitHub Issue 上の議論を伴った変更を5件に絞って解説

### v2.1.277 TaskOutput ツール廃止 / サブエージェント結果の分離表示 / Fable の /model 常時表示 / claude -p のハング修正 / ヘッドレス起動の高速化 / 組織環境の共有

X 検索 (直近7日間) では、いずれのトピックについても個人ユーザーによる実体験・感想・Tips の投稿は**該当なし**でした。リリース告知 bot や記事リンクの共有が中心です。

### Anthropic Life Sciences Verification Program / Accenture パートナーシップ

個人ユーザーの実体験投稿は**該当なし**でした。Life Sciences Verification Program はチーム/組織向けベータのため、個人利用者の声が出ていない段階です。Accenture 提携についてはニュース反応・業界論が中心でした。

### Anthropic フロンティアラボのAI開発ペース測定指標

指標そのものへの評価ではありませんが、同時期に Claude Code の実運用ペースに関する投稿が見られました。

#### ポジティブ

> Claude Code だけで投稿ネタ探しが2時間から5分に短縮され、週7本だった出力が35本になった。ツール代ゼロで焦燥感もなくなった。 — @sakimura2025 [出典](https://x.com/sakimura2025/status/2101778519588307230)

#### Tips

> Claude でバイブコーディングした26万文字超の LP を STUDIO に流し込む際、埋め込み制限を回避する JSON 一括生成プロンプトの裏ワザを共有。 — @kRJT1Zh59h77337 [出典](https://x.com/kRJT1Zh59h77337/status/2101766562076307565)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
