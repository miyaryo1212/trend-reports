---
title: "Codex CLI 0.172.0公開、Shirudoも登場"
summary: "Codex CLI 0.172.0 が正式リリースされ、スラッシュコマンド引数のTab補完、Amazon Bedrock Runtime の選択、MCPサーバーの遅延起動などが加わった。OpenAI と Cisco は eBPF ランタイム「Shirudo」をOSSで公開した。GPT-6 のタンパク質設計や、Codex を使った系外惑星探索の事例も発表された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-25

features:
  - "Codex CLI 0.172.0 正式版"
  - "Codex CLI Amazon Bedrock Runtime対応"
  - "Codex CLI MCP/承認設定の改善"
  - "Shirudo (OpenAI × Cisco)"
  - "GPT-6のタンパク質設計能力"
  - "Codex/Astraで系外惑星探索"
codex_review: "CLIの細かな改善は実利用者には効くが、今回いちばん気になるのはShirudoだ。AIの話題に埋もれがちな運用セキュリティを、停止を避ける仕組みとしてOSS化したのは地味に重要。ただ、実環境での有効性はこれから見たい。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.172.0 正式版

2026-11-24 に Codex CLI 0.172.0 がリリースされた。主な変更点は次のとおり。

**新機能**

- 検索結果やトランスクリプトにあるスレッドリンクから、保存済みの会話やネストしたエージェントをターミナル内で開けるようになった（#62332）
- 対応するスラッシュコマンドの引数を `Tab` で補完できるようになった。たとえば `/mcp lo` は `/mcp login` に補完される（#62343）
- エージェントコマンドセンターで、`Shift+Up` / `Shift+Down` を使ってタスクグループ間を移動できるようになった（#62200）

**バグ修正**

- `codex exec resume` が、保存済みのサンドボックス権限・作業ディレクトリ・ワークスペースルートを復元するようになった。明示的に上書きした場合はその値が優先される（#62194）
- クライアントとサーバーのOSが異なるリモートセッションでも、作業ディレクトリ、ワークスペースルート、書き込み可能パスが保持されるようになった（#62375, #62376, #62377）
- レスポンスストリーム中のプロバイダーエラーを受信した時点ですぐに表示し、どのAPI利用上限に達したかも示すようになった（#62329, #62356）
- 親ターンを中断しても、子エージェントからのキュー済み返信が次のターンに引き継がれるようになった（#62348）
- 回答欄より縦に長い選択肢は、`PageUp` / `PageDown` で読んで選べるようになった（#62209）
- 履歴の読み込み後に完了したクラウドの返信は、その場で更新されるようになった。トランスクリプトの順序が崩れない（#62403）

**ドキュメント・その他**

- 同梱の `openai-docs` スキルに、GPT-6.2 Astra / Sol への移行（エンドポイントの選び方、ツール呼び出しの要件）が追加された（#62447）
- Code Mode はすべてのホスト接続で gRPC を使うようになった。`code_mode_host_grpc` 設定は非推奨（#62476）

このほか、0.173.0-alpha.5 と 0.174.0-alpha.1〜alpha.3 のタグも追加された。いずれもリリースノートに変更内容は書かれていない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.172.0)

### Codex CLI Amazon Bedrock Runtime対応

0.172.0 から、App-server クライアントがセットアップ時やサインイン時に Amazon Bedrock Runtime を選べるようになった（#62222）。

[ソース](https://github.com/openai/codex/pull/62222)

### Codex CLI MCP/承認設定の改善

0.172.0 では、MCP と承認設定について次の変更が入った。

- ツール一覧をキャッシュ済みの任意 stdio MCP サーバーは、デフォルトで最初のツール呼び出し時に起動するようになった（#62366）
- 接続アプリのツールごとに、承認レビュアーを `config.toml` で設定できるようになった（#62360）

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.172.0)

### Shirudo (OpenAI × Cisco)

OpenAI と Cisco が、オープンソースの eBPF ランタイム「Shirudo」を公開した。稼働中の Linux に、一時的な署名付き防御（「シールド」）を適用できる。公開日は 2026-11-23 で、リポジトリは shirudo-dev/shirudo。

※ 公式発表ページのURLは入力データに含まれていない。

### GPT-6のタンパク質設計能力

OpenAI はプレプリントを公開した。GPT-6 が専用の生物学モデルを使わず、推論と汎用のコーディングツールだけでタンパク質を設計できることを示している。

※ 公式発表ページのURLは入力データに含まれていない。

### Codex/Astraで系外惑星探索

アマチュア天文家2人が、Codex と Astra を使って Kepler / TESS のデータから系外惑星候補を見つけた事例が紹介された。

※ 公式発表ページのURLは入力データに含まれていない。

## コミュニティの反応

### Codex CLI 0.172.0 正式版

該当なし

### Codex CLI Amazon Bedrock Runtime対応

該当なし

### Codex CLI MCP/承認設定の改善

#### Tips

> 0.172.0 から、ツール一覧をキャッシュ済みの任意 stdio MCP サーバーは最初のツール呼び出し時に起動する。セッション開始時点でサーバーが起動している前提のフックやスクリプトがある場合は、アップデート前に動作を確認したほうがよい（中立・注意喚起） — @clhdev [出典](https://x.com/clhdev/status/2125313321213825048)

### Shirudo (OpenAI × Cisco)

反応は全体的に好意的。ネガティブな投稿は見られなかった。

#### ポジティブ

> オープンソースとして公開されたことを評価し、自分で自分を守るインフラの可能性に期待している — @aiwithsally [出典](https://x.com/aiwithsally/status/2125334894419296733)

> 「一時的なシールド」という考え方を「great idea」と呼び、セキュリティ修正を当てるときのリスクを下げられる点を評価している — @bwhdx [出典](https://x.com/bwhdx/status/2125326087810953579)

> 「Nice」と短く評価している。サービスを止めずに防御できる点に好印象 — @JoeyHodl [出典](https://x.com/JoeyHodl/status/2125326142332637355)

#### Tips

> Qiita の記事「[Shirudo入門 ― OpenAI×CiscoのeBPFライブ保護基盤を、隔離VMで検証するための仕組みと手順](https://qiita.com/realbios/items/9223fc3e428add68b688)」（realbios）は、Shirudo の仕組みと、隔離したVMで検証する手順をまとめている（中立・解説）

### GPT-6のタンパク質設計能力

該当なし

### Codex/Astraで系外惑星探索

該当なし

## ソース

- [Codex CLI 0.172.0 Release](https://github.com/openai/codex/releases/tag/rust-v0.172.0)
- [Codex Releases](https://github.com/openai/codex/releases)
- [Shirudo入門 ― OpenAI×CiscoのeBPFライブ保護基盤を、隔離VMで検証するための仕組みと手順 (Qiita)](https://qiita.com/realbios/items/9223fc3e428add68b688)
