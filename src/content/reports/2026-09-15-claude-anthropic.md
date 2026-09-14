---
title: "公式更新なし、焦点は指示ファイルとMCP設定へ"
summary: "本日の Claude / Anthropic 公式アップデートはありません。直近24時間の日本語コミュニティでは、AGENTS.md と CLAUDE.md の役割分担、MCP の設定スコープと接続確認、許可モードの選び方など、設定ファイルまわりの実測レポートが目立ちました。非エンジニア層の業務利用記事も複数出ています。"
importance: 1
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-15

features: []
codex_review: "公式更新なしの日に、運用ファイルやMCPの摩擦が主役になるのは地味だが重要です。派手な機能競争より、現場導入の成熟度が見えて面白い。"
codex_importance: 2
---

## 公式アップデート

**本日の公式アップデートはありません。**

Claude Code の GitHub Releases に新規リリースはなく、最新は 2026-09-12 公開の v2.1.270 のままです (既報)。Anthropic 公式ブログにも本日付の新規エントリは確認できませんでした。

[ソース](https://github.com/anthropics/claude-code/releases)

## コミュニティの反応

公式の新規発表がないため、本日は日本語技術コミュニティ (Zenn / Qiita) で新たに公開された記事から、本日固有の論点を拾います。X/Twitter 検索は対象機能がないためスキップしています。

### 指示ファイルの役割分担 (AGENTS.md / CLAUDE.md / skill)

#### ネガティブ

> Shopify CEO が「AGENTS.md と .agents/skills を読むようになるまで Claude Code を禁止することを考えている」と投稿した件。問題はファイル名の争いではなく、複数の指示ファイルが同じ内容を別々に持つことで生じるドリフトであり、標準ファイルを一つに決めても終わらない — @untactit [出典](https://qiita.com/untactit/items/c503463bd96c18aec651)

#### 中立

> 3名・110日・1,572コミットの記録。守るべき規約は AGENTS.md に集まらなかった。ビルドが落とすもの・AI レビュアーが判定するもの・文章で読ませるものの3か所に分かれ、AGENTS.md 101行が担っているのは索引だけだった — @Iori Oiso [出典](https://zenn.dev/dazoyee/articles/3630fafa22836a)

#### Tips

> 3ヶ月使ってきた skill とカスタマイズ一式を公開。レビュー用 skill は checklist.md に手順と観点を細かく仕込み、「CI が通っているものだけ取得」「指摘は上位3つだけ採用」といった運用ルールをスキル側に閉じ込めている — @たぬきしょ [出典](https://zenn.dev/tatsu_tanu/articles/af627e835f3905)

> 一人で回している事業を Claude Code に手伝わせるための運用ファイル7つ＋スキル構成。「毎回ゼロから始まる」「やめ時が来ない」「完了しましたが完了していない」の3つを防ぐ設計 — @たくやauto [出典](https://zenn.dev/takuyaauto/articles/bc8f5ec9be3249)

### MCP の設定スコープと接続

#### Tips

> MCP が /mcp に出てこない・Failed to connect のままという症状の多くは、「どこに設定を書いたか (local / project / user)」と「どう繋ぐ設定にしたか (HTTP / stdio)」の取り違え。.mcp.json の実 JSON と claude mcp コマンドで3軸に分けて整理し、切り分け早見表まで通す — @エンジニア翔｜Claude Code [出典](https://zenn.dev/stockdev_sho/articles/c3d32e3dbc8dff)

#### 中立

> 管理者が全端末に MCP サーバーを配れる managed settings を手元の 2.1.263 で検証。「組織が配ったので消せません」と表示される設定が、一言足しただけで5回とも消えた。書き方の誤りは357バイト、置き場所の誤りは0バイトという差 — @ぬまーんのZenn記事 [出典](https://zenn.dev/numarn/articles/claude-managed-mcp-servers-policy-handson)

> 自作 SaaS の MCP をトークン方式で公開していたが、繋がるのは Claude Code だけだった。ChatGPT と claude.ai のチャット画面にはトークン欄がなく、OAuth 対応が必要になる — @平城寿の開発ブログ [出典](https://zenn.dev/hirajo/articles/saas-mcp-oauth-chatgpt-claude)

### 許可モードの選び方

#### Tips

> 2026年9月時点で6種類ある許可モードを「実行前に誰が確認するのか」という軸で整理。承認プロンプトの多さと、全スキップ時の事故リスクのバランスを取るダイヤルとして捉え、Plan からの実践手順と Codex の権限設計との比較まで通す — @takuh [出典](https://zenn.dev/takuh/articles/a435533f18c37e)

### 動作確認をどこまで自動化するか

#### ネガティブ

> Playwright MCP でログイン済みの実 Chrome を操作させると、ヘッドレスのテスト用ブラウザとは別の壊れ方をする。「クリックが30秒待って失敗する」「日本語が欠ける」「入力したのに保存されない」など、実際に踏んだ罠12個と対処 — @たくやauto [出典](https://zenn.dev/takuyaauto/articles/dc7d74857273d7)

#### Tips

> エージェントの動作確認は curl のステータスコードに落ち着きがちだが、本番障害の多くは HTTP 200 のままブラウザ層で起きる。ヘッドレスブラウザ・運用手順書・サブエージェント委譲を組み合わせ、トークン消費を抑えつつ「画面の視認」まで拡張した — @刑部 [出典](https://zenn.dev/sprix_it/articles/f292eac98ba400)

### 通知の重複抑止

#### ネガティブ

> エージェント運用の監視シリーズ3本目。難しかったのは検出精度ではなく、検出を人に届ける量だった。同じ警告が32回届き、重複抑止を入れたあとに3回穴を踏んだ (24日・全系統の巡回ログを集計) — @selftAilor [出典](https://zenn.dev/selftailor/articles/8c4968b0f9399f)

### ツールとログの内部挙動の実測

#### 中立

> ToolSearch(select:TodoWrite) を先に呼んでも直らない失敗がある。ツール検索が有効な環境では非コアの組み込みツールは名前だけがリストされる契約だが、無効化されたツールはその経路では救われない — @Clopy [出典](https://zenn.dev/clopy/articles/claude-toolsearch-disabled-tool-boundary)

> 手元のセッションログ 389 ファイル・166 MB を走査。thinking ブロック 6,258 件のうち 6,244 件 (99.8%) は本文が空で暗号署名だけが残り、署名がログ全体の 9.03% (15.0 MB) を占める。本文が残っていたのは1モデルのみ — @saito [出典](https://zenn.dev/tsutomusaito/articles/thinking-log-opacity-ja)

### 非エンジニアによる業務利用

#### ポジティブ

> エンジニアではない法人営業が、コードを書くためではなく自分の仕事のファイルをまとめて扱うために Claude Code を毎日使っている。チャット UI では毎回ファイルを貼り直す必要があったのが主な乗り換え理由 — @現役TOPセールスのAI活用術 [出典](https://zenn.dev/topsalesai/articles/44468d97c13288)

#### Tips

> 非エンジニアの PM が Claude Code × MCP で週次レポートを自動生成する全手順。所要時間は3時間から15分に短縮 — @hikariclaude01 [出典](https://qiita.com/hikariclaude01/items/5d51e298e840e71fa3f1)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
