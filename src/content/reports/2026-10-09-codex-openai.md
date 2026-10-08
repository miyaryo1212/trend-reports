---
title: "Codex CLI 0.162.0でworktree管理に対応"
summary: "Codex CLI 0.162.0 がリリースされた。管理対象 Git worktree の作成・一覧ツール、Command Center のタスクのピン留め、`/copy` による transcript のコピーを追加し、Retry-After への対応や Linux / Windows サンドボックスの修正も入った。X では Retry-After 対応を歓迎する声がある一方、WSL での入力遅延への不満も出ている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-09

features:
  - "Codex CLI 0.162.0"
codex_review: "worktree管理は並列エージェント運用の足場として実務的に効くが、目玉というより開発体験の堅実な整備だ。Retry-Afterやサンドボックス修正のような地味な信頼性改善も、日々使う人には新機能以上に響くだろう。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.162.0

**新機能**

- worktrees 機能を有効にすると、信頼済みのローカルプロジェクトから管理対象の Git worktree を作成・一覧表示するツールが使える (#50148)。
- エージェントの Command Center で、`p` キーでタスクをピン留めできる。サーバーが対応していれば、ピン留めしたタスクは共有の Pinned グループにまとまる (#51500)。
- `/copy` で transcript のブロック間を移動してコピーできる。選択範囲は `Ctrl+Insert` でもコピーでき、マウスホイールのスクロール速度は `tui.mouse_scroll_speed` で調整できる (#50434, #50215, #50209)。
- 承認ヘッダー、質問、MCP プロンプト、警告、バナー、検証プロンプト内の URL がクリック可能になった。行をまたいで折り返したリンクも対象 (#51439 ほか)。
- Responses 互換のカスタムモデルプロバイダーで、ライブ Web アクセスとリモート compaction を設定できる (#50459)。
- Code Mode に、Promise の結果を確定した順にストリーミングする JavaScript ヘルパーと、オプトインの順位付きツール検索を追加 (#51126, #51209)。

**バグ修正**

- 新しい TUI スレッドで、サーバー側のモデルと推論サマリーの既定値に従うようになった。起動時に明示した上書きは維持される (#50013, #50811, #50913)。
- `apply_patch` による更新で、既存の CRLF 改行をオプトインなしで保持する (#51203)。
- 拒否ファイルが複数ある場合の Linux サンドボックス起動を修正。書き込み可能なサンドボックス構築用実行ファイルを拒否し、ripgrep の設定で deny-glob のマスクが弱まらないようにした (#50059, #51211, #51407, #51527)。
- Windows 10 で通常のドライブレターによるファイルアクセスを復元。Windows サンドボックスの temp 権限を子プロセスの環境に合わせた (#51511, #51512)。
- Responses と WebSocket のリトライ可能なエラーで、サーバーの `Retry-After` 指示に従う (#50418, #51440)。
- PowerShell 7 のモジュールパスがある環境で Windows PowerShell からインストールした際のアーカイブのチェックサム検証を修正 (#51257)。

**その他 (Chores)**

- Windows 向けリリースに署名付き PowerShell インストーラーを同梱 (#51158)。
- 古い安定版やプレリリースが、新しい安定版のダウンロード先やインストーラーのエイリアスを上書きしないようにした (#51186, #51425)。

**Changelog から読み取れる主な変更 (取得できた範囲)**

- Guardian 関連: Decisions のトランスポートを上限付きで追加し、Guardian V2 向けにオプトインの Decisions 比較を追加 (#50066, #50099)。Guardian decisions の API キーが環境変数経由で転送されないよう保護 (#50019)。Guardian への引き継ぎでユーザーの制限を保持 (#50026)。
- V2 サブエージェントを新規に起動したときの動的ツール継承を有効化 (#50082)。
- クラウドスレッドの再開・アタッチ用にネイティブ gRPC クライアントを追加 (#50113)。
- レガシープロトコルモードで MCP ツールのページネーションに対応 (#50035)。リモート MCP サーバーで Windows の環境変数を保持 (#50129)。
- ストリーミング中、確定した Markdown テーブルを順次スクロールバックへ出力 (#50207)。
- `codex doctor` が設定中の TUI モードを表示する (#50200)。`/status` にアカウントのメールアドレスを再表示 (#50199)。

※ 入力データの Changelog は途中で切れているため、上記は取得できた範囲に限る。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.162.0)

## コミュニティの反応

### Codex CLI 0.162.0

全体のトーン: 反応は少ない。リリース直後に Retry-After 対応を歓迎する声がある一方、直前のバージョンでの性能低下を訴える投稿もある。

#### ポジティブ

> リリースから1時間ほどの 0.162.0 で、HTTP レスポンスヘッダーの `Retry-After` にようやく従うようになった — @marcaruel [出典](https://x.com/marcaruel/status/2108290604841173230)

#### ネガティブ

> Codex CLI を 0.155.1 から 0.160.1 に上げたら WSL での作業が崩れた。テキストの貼り付けや Enter で数秒の遅延が出る — @RafaelMCam [出典](https://x.com/RafaelMCam/status/2108310671397929228)

※ 0.162.0 ではなく 0.160.1 についての報告。0.162.0 で改善したかには触れていない。

#### Tips

該当なし

## ソース

- [GitHub: openai/codex rust-v0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0)
- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [X: @marcaruel](https://x.com/marcaruel/status/2108290604841173230)
- [X: @RafaelMCam](https://x.com/RafaelMCam/status/2108310671397929228)
