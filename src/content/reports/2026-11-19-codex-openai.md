---
title: "Codex CLI 0.170.0、音声通話とサンドボックス修正"
summary: "Codex CLI安定版0.170.0が公開され、TUIのWebRTC音声通話や同名MCPサーバーの環境別運用(実験的)が加わった。サンドボックス解説記事、営業向けChatGPT for Sales、GPT-6 Astraによるチップ設計事例、Le Figaroとの提携も発表された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-19

features:
  - "Codex CLI 0.170.0"
  - "ChatGPT for Sales"
  - "Inside the Codex sandbox"
  - "AIによるチップ設計 (Advancing chip design with OpenAI models)"
  - "Managing frontier AI risk"
  - "Le Figaro との提携"
  - "Codex CLI 0.171.0-alpha.13 / 0.172.0-alpha.1"
codex_review: "派手なモデル発表より、子エージェントにも及ぶサンドボックス修正のほうが実運用では効く。ただ、デスクトップ版で権限回帰が残るなら信頼性の訴求はまだ早く、音声や営業機能も業界全体を変える材料としては小粒だ。"
codex_importance: 2
---

## 公式アップデート

※ Codex CLI 以外の項目は Step 1 の抽出結果にもとづく。入力データに元記事の URL が含まれていないため、ソースリンクは付けていない。

### Codex CLI 0.170.0

安定版 0.170.0 が 2026-11-18 03:45 (UTC) に公開された。

**新機能**

- TUI のリアルタイム音声通話で WebRTC によるネゴシエーションに対応した (#61172)
- OpenTelemetry の HTTP エクスポーターで、認証ヘッダーを自動で更新できるようになった (#61028)
- 同じ名前の MCP サーバーを環境ごとに別々に扱えるようになった。実験的機能 (#60905)

**バグ修正**

- サイズの大きすぎる WebSocket リクエストは、無駄なリトライをせずに HTTP へ切り替わるようになった (#60840, #60841)
- キャンセル・ログイン・ログアウト時に MCP の OAuth 認証情報が競合する問題を修正した (#60849, #60981)
- Cloud の会話の自動再接続を改善し、クライアントが再接続しても進行中の復旧ターンが失われないようにした (#60969, #61014)
- Windows でのファイル置き換え、サンドボックスの権限保持、ランタイム登録の復旧を修正した (#60872, #60943, #60944)
- 権限を更新したときや子スレッドで、既存のサンドボックス制限が失われる問題を修正した (#60936, #61134)
- ファイル検索結果の重複を解消し、空白を含むクエリでスレッド検索のスニペットがおかしくなる問題を修正した (#60845, #60846)

**ドキュメント**

- サンドボックスのドキュメントを更新し、permission profile とファイルシステムルールの説明を追加した (#61133)

このほか Changelog には、Guardian レビュアーの選択処理の一元化 (#60784)、GCP 向けに incremental tool declarations をデフォルトで有効化 (#60848)、Config からレガシーのサンドボックスポリシー設定関数を削除 (#61144) などが含まれる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.170.0)

### Codex CLI 0.171.0-alpha.13 / 0.172.0-alpha.1

アルファ版が 2 本公開された。どちらのリリースノートも「Release 0.xxx」の一文だけで、変更内容は書かれていない。

| バージョン | 公開日時 (UTC) |
|---|---|
| 0.171.0-alpha.13 | 2026-11-18 05:52 |
| 0.172.0-alpha.1 | 2026-11-18 18:01 |

[ソース (0.171.0-alpha.13)](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13) / [ソース (0.172.0-alpha.1)](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.1)

### Inside the Codex sandbox

Codex のサンドボックスの仕組みを解説する記事が公開された。macOS・Linux・Windows で、ファイルシステムとネットワークの制限を守ったままコマンドを実行する方法を説明している。

### ChatGPT for Sales

ChatGPT に営業向けの Sales プラグインと、30 以上のパートナープラグインが追加された。見込み客の調査、提案の準備、CRM の更新を支援する。

### AIによるチップ設計 (Advancing chip design with OpenAI models)

GPT-6 Astra をチップ設計に使った事例が公開された。Jalapeño シリコンの回路最適化や、RISC-V コアの設計改善に使えることを示している。

### Managing frontier AI risk

フロンティア AI のリスクを、学習からデプロイまでどう管理しているかを説明する記事が公開された。アラインメント、サンドボックス、ブロッキング、監視の各手段を取り上げている。

### Le Figaro との提携

フランスの Le Figaro と提携した。同紙の記事の要約と抜粋が、元記事へのリンク付きで ChatGPT に表示される。

## コミュニティの反応

### Codex CLI 0.170.0

X では、新機能（WebRTC 音声通話、OTLP 認証ヘッダー、同名 MCP サーバー）を実際に使った個人の感想は見つからなかった。サンドボックス関連の修正への反応は「Inside the Codex sandbox」の項にまとめた。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.171.0-alpha.13 / 0.172.0-alpha.1

該当なし

### Inside the Codex sandbox

好意的な声と不具合報告の両方がある。0.170.0 の修正を歓迎する声がある一方で、デスクトップ版では permission profile が守られない回帰が報告されている。

#### ポジティブ

> Codex 0.170.0 で、helper agents（子エージェント）がサンドボックスのルールを引き継ぐようになったのが良い — @nobrainer_tech [出典](https://x.com/nobrainer_tech/status/2122938124867383637)

> ChatGPT のプランに付いている無制限のサンドボックスを、Codex アプリ以外でも使える回避策を見つけたという報告 — @JustMicrock [出典](https://x.com/JustMicrock/status/2123081223908229414)

#### ネガティブ

> macOS の ChatGPT デスクトップで、Codex が permission profile を無視して書き込み可能なルートを書き換え、EPERM エラーになる回帰バグが起きているという報告 — @evvvvince [出典](https://x.com/evvvvince/status/2123127559256981917)

#### Tips

該当なし

### ChatGPT for Sales

該当なし

### AIによるチップ設計 (Advancing chip design with OpenAI models)

該当なし

### Managing frontier AI risk

該当なし

### Le Figaro との提携

報道機関側の視点から、慎重な見方が出ている。

#### ポジティブ

該当なし

#### ネガティブ

> 記事が広く届くのは良いが、リンクを付けても実際に訪問されるとは限らず、読者が元記事を読まなくなるおそれがあるという指摘 — @ecatfer [出典](https://x.com/ecatfer/status/2123137015772258405)

#### Tips

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.170.0](https://github.com/openai/codex/releases/tag/rust-v0.170.0)
- [rust-v0.171.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13)
- [rust-v0.172.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.1)
- [@nobrainer_tech の投稿](https://x.com/nobrainer_tech/status/2122938124867383637)
- [@JustMicrock の投稿](https://x.com/JustMicrock/status/2123081223908229414)
- [@evvvvince の投稿](https://x.com/evvvvince/status/2123127559256981917)
- [@ecatfer の投稿](https://x.com/ecatfer/status/2123137015772258405)
