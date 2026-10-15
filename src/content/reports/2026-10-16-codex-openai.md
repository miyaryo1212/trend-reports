---
title: "Codex CLI 0.163.0正式版、/configと割り込み強化"
summary: "Codex CLI 0.163.0が10月15日に正式リリースされた。/config検索、応答中のステアリング、/keymapリーダーキー、読み取り専用ツールの並列実行などが加わった。Xでは常駐daemonへの不満とその無効化Tipsが目立つ。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-16

features:
  - "Codex CLI 0.163.0 正式版"
  - "/config コマンド"
  - "応答中のフォローアップ送信(ステアリング)"
  - "/keymap のリーダーキー設定"
  - "/daemon からのバックグラウンドサーバー再起動"
  - "読み取り専用ツールの並列実行"
  - "Daybreak 既定有効化"
  - "スレッド再開時の権限・ネットワーク承認の復元"
  - "ネットワークプロキシのセキュリティ強化"
  - "標準シェル実行器への移行"
  - "GPT-6ファミリー移行ガイダンス"
codex_review: "ステアリングや読み取り専用処理の並列化は、CLIを「待つ道具」から作業を調整する環境へ近づける、地味だが効く改善だ。一方、daemonへの反発は自動更新の便利さより、開発者がプロセスと環境を制御できる安心感が大事だと示している。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.163.0 正式版

10月15日に 0.163.0 が正式リリースされた(前回までは alpha 版のみ)。主な内容は以下のとおり。

**新機能**

- `/config`: 設定をカテゴリ横断で検索でき、対応する項目は即時反映される。再起動が必要な変更も表示される。
- 応答中のフォローアップ送信: Codex の応答中に追加指示を送って即座に誘導できる。ターンを中断すると、アクティブな Code Mode セルとその入れ子のツール呼び出しも停止する。
- `/keymap` にリーダーキーを追加: 既定は `Ctrl+X`。ショートカットヒントは選択またはキャンセルまで表示され、音声ミュートは `F9` に移動した。
- `/daemon` からのバックグラウンドサーバー再起動: 中断され得る作業について警告したうえで再起動し、自動で再接続する。
- 読み取り専用ツールの並列実行: skill、memory、会話履歴の検索など、独立した読み取り専用ツールを並列に実行できる。
- Daybreak: 対象アカウントで既定有効。`codex exec` でも、サーバーが提供する場合は OpenAI API キーで選択できる。

**バグ修正**

- 保存したスレッドの再開時に、権限とネットワーク承認を復元する。明示的な上書きと現行の管理ポリシーは尊重される。
- ネットワークプロキシが DNS 検索の前に権限を確認し、重複した `Host` ヘッダーを拒否する。認証情報エイリアスによる検査フックの回避も防止する。
- 切り替え後も `/side` で既存のサイド会話に戻れる。保留中のプロンプトへの回答は、質問したスレッドに返る。
- Windows で `Ctrl+V` と `Shift+Insert` がテキストと画像の両方を貼り付ける。WSL では連続貼り付けでクリップボードリーダーを再利用し、コピーはハングせずタイムアウトする。
- 子プロセスが出力パイプを開いたままでも、ローカルコマンドが速やかに終了する。リモートコマンドは遅れて届く出力を保持する。
- `codex exec` が、無関係なコマンドの後に同じファイル差分を再表示しなくなった。

**ドキュメント / その他**

- 同梱の OpenAI Docs に、GPT-6 ファミリーへの移行ガイダンスを追加した。モデル別の推論、ツール利用、データ所在地の考慮点を含む。
- Linux サンドボックスが、ファイルシステム分離に bubblewrap、システムコール制限に seccomp を使う点を明確化した。
- 標準のシェル実行器を使うようになり、パッチ済み `zsh` の同梱を廃止した。旧シェルフラグを使う設定には移行通知が出る。
- Linux と macOS のリリースパッケージで、バイナリのシンボルを除去してサイズを削減した。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.163.0)

## コミュニティの反応

### /daemon からのバックグラウンドサーバー再起動

0.157.0 以降で既定起動する常駐 daemon への不満が中心で、トーンは批判的。0.163.0 で `/daemon` から再起動できるようになったことへの直接の反応は確認できなかった。

#### ネガティブ

> 0.157.0 以降で既定起動するバックグラウンド daemon が、対話セッション後に PID 1 へ reparent される。毎時の self-update でアクティブなターンを 60 秒 drain した後に kill する挙動に不満 — @tbs142857 [出典](https://x.com/tbs142857/status/2109989950964011126)

> 永続 daemon が端末を閉じた後も残り、毎時の self-update でアクティブなセッションを中断する「同居人」状態を批判。opt-out が既定でない点を問題視 — @shihaodduan [出典](https://x.com/shihaodduan/status/2110363827220930821)

> daemon が初回セッションの環境(proxy / GH_TOKEN)を固定し、後続セッションに意図しない設定が引き継がれるバグ。パッケージマネージャ外での 374MB の自己コピー・更新も不満点 — @AiDevCraft [出典](https://x.com/AiDevCraft/status/2109819111752810958)

#### Tips

> `codex features disable daemon_auto_start` で自動起動を無効化し、`app-server daemon stop`、`pkill`、`~/.codex/packages` の削除で完全停止する方法を紹介 — @hackerlogs [出典](https://x.com/hackerlogs/status/2109761263240696115)

> `ps`、`ls`、`features list` で daemon の有無を確認し、無効化手順を段階的に共有(0.157.0 以降が対象) — @themuscleai [出典](https://x.com/themuscleai/status/2109865100718809143)

### その他の機能

Codex CLI 0.163.0 正式版、`/config`、応答中のステアリング、`/keymap` のリーダーキー、読み取り専用ツールの並列実行について、X で該当する個人ユーザーの反応は確認できなかった(該当なし)。

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [Codex CLI 0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
