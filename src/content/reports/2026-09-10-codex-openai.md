---
title: "Codex Security 公開、OSS支援も始動"
summary: "Aardvark を改称した Codex Security が research preview として Codex web で公開され、脅威モデル生成と検証済み findings によるパッチ提案を行う。あわせて OSS メンテナ向け Codex for OSS の初期コホートが始動し、CLI は 2 日で 7 本の alpha を連投した。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-10

features:
  - "Codex Security (research preview)"
  - "Codex Security の脅威モデル生成と検証済み findings"
  - "Codex for OSS"
  - "Why Codex Security Doesn't Include a SAST Report"
  - "Codex CLI 0.154.0-alpha.8 〜 alpha.11"
  - "Codex Python SDK"
  - "Codex の credential broker"
  - "Amazon Bedrock 向け AWS 資格情報エクスポートコマンド"
  - "エンタープライズ OIDC ログインの段階的コミット"
  - "MXC サンドボックスの権限変換"
  - "Codex TUI の worktree 管理強化"
  - "ストリーミング推論サマリーの TUI 表示"
  - "ChatGPT for iOS 1.2026.244 の Codex 機能"
codex_review: "SASTを足すのではなく脅威モデルから入る設計はかなり面白い。一方で、実利用の声がまだ薄く、現時点では期待先行の研究プレビュー感も強い。"
codex_importance: 4
---

## 公式アップデート

### Codex Security (research preview)

これまで Aardvark と呼ばれていたアプリケーションセキュリティエージェントが Codex Security に改称され、research preview として Codex web 上で提供開始された。対象は ChatGPT Pro / Enterprise / Business / Edu で、1 ヶ月間は無料で利用できる。

[ソース](https://openai.com/index/)

### Codex Security の脅威モデル生成と検証済み findings

Codex Security はリポジトリを解析して、そのプロジェクト固有の脅威モデルを生成する。生成された脅威モデルはユーザーが編集可能。検出した候補はサンドボックス内で再現検証したうえで findings として提示され、あわせて修正パッチを提案する。

[ソース](https://openai.com/index/)

### Codex for OSS

OSS メンテナ向けに ChatGPT Pro / Plus の無料枠、コードレビュー、Codex Security を提供するプログラム。初期コホートが開始され、vLLM などのプロジェクトが利用している。

[ソース](https://openai.com/index/)

### Why Codex Security Doesn't Include a SAST Report

Codex Security の設計判断を解説した技術記事が公開された。既存の SAST レポートを起点とする方式を採らず、リポジトリの構造と信頼境界の把握から始める設計を採った理由を説明している。

[ソース](https://openai.com/index/)

### Codex CLI 0.154.0-alpha.8 〜 alpha.11

9/8 23:19 UTC の 0.154.0-alpha.8 から 9/9 09:17 UTC の alpha.11 まで、2 日間で 7 本のプレリリース (alpha.6.1 / 8 / 8.1 / 9 / 10 / 10.1 / 11) が連投された。安定版は 0.153.4 のまま据え置かれている。

[ソース](https://github.com/openai/codex/releases)

### Codex Python SDK

app-server のスキーマから型を自動生成する仕組みが入り、CLI 実機を使ったテストと PyPI への公開パイプラインが整備された。機能面では履歴選択、ターン単位のオプション指定、untrusted external messages への対応が追加されている。

[ソース](https://github.com/openai/codex/releases)

### Codex の credential broker

ネットワークプロキシに対して設定可能な credential provider が追加された。shell snapshot 経由および plaintext HTTP トンネル越しでの資格情報ブローカリングに対応する。

[ソース](https://github.com/openai/codex/releases)

### Amazon Bedrock 向け AWS 資格情報エクスポートコマンド

Codex から Amazon Bedrock を利用する際の認証情報を書き出すコマンドが追加された。

[ソース](https://github.com/openai/codex/releases)

### エンタープライズ OIDC ログインの段階的コミット

認可 URL の取得と資格情報の保存が分離され、キーリングへ保存する前に再検証を行うようになった。あわせて、プロセスを跨いで有効なログアウトの世代管理が追加されている。

[ソース](https://github.com/openai/codex/releases)

### MXC サンドボックスの権限変換

MxcCommand の権限をネイティブ実行リクエストへ変換する `policy::build_request` が追加された。Windows 向けの deny-read glob 走査はプロトコル側へ分離されている。

[ソース](https://github.com/openai/codex/releases)

### Codex TUI の worktree 管理強化

worktree の所有者情報が表示されるようになり、確認ダイアログ付きの削除操作が追加された。

[ソース](https://github.com/openai/codex/releases)

### ストリーミング推論サマリーの TUI 表示

推論サマリーがステータス行に逐次表示されるようになった。

[ソース](https://github.com/openai/codex/releases)

### ChatGPT for iOS 1.2026.244 の Codex 機能

iOS 版 ChatGPT 1.2026.244 に Codex 関連の機能が入った。`@` メンションによる他タスクの参照、実行中タスクへのライブでの質問回答、新規 worktree の起点ブランチ選択に対応。iOS 26 では worktree のセットアップがバックグラウンドで実行され、Live Activity として表示される。

[ソース](https://openai.com/index/)

## コミュニティの反応

本日取り上げた各トピックについて、直近 1 週間の X 投稿を機能ごとに個別検索したが、いずれも個人ユーザーによる実体験・感想の投稿は確認できなかった。

### Codex Security (research preview) / 脅威モデル生成と検証済み findings

該当なし。Codex Security に言及する個人投稿自体は散見されたが、脅威モデル生成・サンドボックス検証・パッチ提案といった具体的な機能に踏み込んだものはなかった。

### Codex for OSS

該当なし。「申請待ち」「承認が来ない」といった申請段階の投稿が中心で、実際にプログラム適用後の利用体験を共有した投稿は確認できなかった。

### Why Codex Security Doesn't Include a SAST Report

該当なし。

### Codex CLI 0.154.0-alpha.8 〜 alpha.11

該当なし。バージョン確認系の投稿は複数あったが、いずれも安定版 0.153.4 への言及にとどまり、alpha 系や連投ペースに触れたものはなかった。

### Codex Python SDK / credential broker / Bedrock 資格情報エクスポート / エンタープライズ OIDC ログイン / MXC サンドボックスの権限変換

該当なし。いずれも内部実装寄りの変更であり、個人ユーザーの言及は確認できなかった。

### Codex TUI の worktree 管理強化 / ストリーミング推論サマリーの TUI 表示

該当なし。worktree 関連の不具合報告や TUI・status line への言及はあったが、本日の変更内容に紐づくものではなかった。

### ChatGPT for iOS 1.2026.244 の Codex 機能

該当なし。リリースノート的な投稿は公式・企業寄りのため除外しており、`@` メンション・ライブ回答・Live Activity 表示を実際に使った投稿は日本語・英語ともに確認できなかった。

## ソース

- [OpenAI](https://openai.com/index/)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Codex CLI 0.154.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.11)
- [Codex CLI 0.154.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.8)
