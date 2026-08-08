---
title: "v2.1.225/226は認証と保留の穴を塞ぐ回"
summary: "Claude Code v2.1.225 と v2.1.226 が公開。前者はゲートウェイの支出上限表示や `claude agents` のワークスペース信頼プロンプト追加に加え、ヘッドレスを壊していた OAuth トークン差し替えや MCP OAuth の401連発など認証系の修正が中心。後者はバグ修正のみ。X の反応は限定的で、OAuth トークン運用の Tips に集まった。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-09

features:
  - "Claude Code v2.1.226"
  - "Claude Code v2.1.225"
  - "ゲートウェイ spend-limit 対応の利用警告"
  - "`claude agents` のワークスペース信頼プロンプト"
  - "SendMessage で別マシンの Remote Control セッションに名前指定で会話開始"
  - "Remote Control の写真添付改善"
  - "CLAUDE_CODE_OAUTH_TOKEN が401でトークン差し替えされる問題の修正"
  - "macOS keychain タイムアウト後の MCP OAuth 401連発の修正"
  - "auto モードの安全フィルタ拒否が連続ブロック数に計上される問題の修正"
  - "圧縮後の Remote Control セッション再開で会話履歴が壊れる問題の修正"
  - "claude self-hosted-runner の --base-dir 失敗時の起動時エラー化"
  - "Claude Code on the web のスタック誤報告・イベントバックログ再送の修正"
  - "ヘッドレス/起動中のクロスセッションメッセージ保留問題の修正"
  - "別プロジェクトのセッションへのホバーで開始ディレクトリが変わる問題の修正"
  - "SendMessage の Remote Control 宛先が同名ローカルセッションに入れ替わる問題の修正"
  - "[VSCode] Focus view の折り畳み挙動の修正"
codex_review: "派手な新機能より、認証と保留まわりの不具合を潰した点に私は価値を感じる。地味だが、エージェント運用が実務に入る局面ではこういう信頼性改善のほうが効く。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.225 (2026-08-08)

前回レポート時点の最新は v2.1.224 でした。本日時点で v2.1.225 / v2.1.226 が公開されています。

**追加された機能**

- **ゲートウェイ spend-limit 対応の利用警告**: Claude Code の使用量警告がゲートウェイの支出上限に対応。上限到達メッセージが、上限値・リセット時刻・運用者からのメッセージを表示するようになりました（ゲートウェイ側も 2.1.225 が必要）。
- **`claude agents` のワークスペース信頼プロンプト**: 未信頼のディレクトリで `claude` と同じ確認ダイアログを出すようになりました。

**改善**

- **SendMessage で別マシンの Remote Control セッションに名前指定で会話を開始可能に**。これまでは相手から先にメッセージが来た場合の返信しかできませんでしたが、`ListAgents` に `name [ref]` として表示される相手へ、こちらから会話を開始できます。
- **Remote Control の写真添付**: Claude アプリから添付した写真を、ディスクから別のツール呼び出しで読み込むのではなく、直接モデルに渡すようになりました。

**主な修正**

- 一時的な 401 によって長期の `CLAUDE_CODE_OAUTH_TOKEN` が保存済みログインの短命トークンに差し替えられ、再起動までヘッドレスセッションが壊れていた問題。
- macOS で keychain 読み取りがタイムアウトした後、MCP OAuth サーバーが「一度も認証していない」かのように 401 を連発する問題。
- auto モードが、自身の権限チェックに対する安全フィルタの拒否を連続ブロック数に計上していた問題。アクションが拒否される点は変わりませんが、モデルには再試行せず先に進むよう伝えられます。
- 非常に大きな会話が圧縮された後、Remote Control のセッション再開で会話履歴が壊れる問題。
- ヘッドレスセッションや起動中に、クロスセッションメッセージが通知も期限もないまま保留され続ける問題。
- `claude self-hosted-runner` が `--base-dir` を作成・書き込みできない場合、登録は通るのに以降の全セッションが失敗していた問題。起動時に明確なエラーで終了するようになりました。
- Claude Code on the web のセッションがスタック扱いで誤報告され、再接続のたびに肥大化したイベントバックログを再送する問題。
- エージェント一覧で別プロジェクトのセッションにホバーすると、次のエージェントの開始ディレクトリが変わってしまう問題。
- `SendMessage` で、一度確認済みの Remote Control 宛先が、相手側の一覧を確認できなかったときに同名のローカルセッションへ入れ替わる問題。
- **[VSCode]** Focus view が最新の TODO リスト・保留中の質問の文脈・確定した回答まで畳んでしまう問題。thinking のみの折り畳みは "Thought for Ns" と表示され、ターンの完了時に再び折り畳まれます。

[Claude Code Releases v2.1.225](https://github.com/anthropics/claude-code/releases/tag/v2.1.225)

### Claude Code v2.1.226 (2026-08-08)

バグ修正と信頼性改善のみ。個別の変更点は公開されていません。

[Claude Code Releases v2.1.226](https://github.com/anthropics/claude-code/releases/tag/v2.1.226)

## コミュニティの反応

### Claude Code v2.1.226

#### ポジティブ

> Claude Code のバイナリを 2.1.226 に更新したら同じエラーが直った。再ログインは不要だった。 — @pavelrossinsky [X](https://x.com/pavelrossinsky/status/2086055862305489374)

### Claude Code v2.1.225

#### ポジティブ

> workspace trust プロンプトと安全フィルターの改善で、エージェントの権限制御がより信頼できるものになったと感じる。 — @MnFounder [X](https://x.com/MnFounder/status/2086138391129735519)

> リリース直後の修正スピードが素晴らしい。gateway の spend-limit 表示や OAuth 周りの安定化が実運用で安心できる。 — @shima0hide [X](https://x.com/shima0hide/status/2085933853257166980)

#### Tips

> gateway の kill switch を自前で実装して Claude Code を制御し、permission チェックを厳格に運用する方法を試している。 — @ownerswitchai [X](https://x.com/ownerswitchai/status/2086117121470165470)

> Claude Code + gateway + agents を動かすなら 8vCPU / 15GB RAM 以上の VM を推奨。RAM 不足で詰まるので小さめのプランは避けたほうがいい。 — @mben_dev [X](https://x.com/mben_dev/status/2086070110008070579)

### `claude agents` のワークスペース信頼プロンプト

#### ポジティブ

> workspace trust の追加は「prompt 設定ではなく本物の安全対策」。権限制御がフェイルセーフに動くことがエージェント実用化の鍵だと実感した。 — @MnFounder [X](https://x.com/MnFounder/status/2086138391129735519)

### CLAUDE_CODE_OAUTH_TOKEN が401でトークン差し替えされる問題の修正

修正そのものへの言及はまだありませんが、認証切れの実体験と回避策の投稿が目立ちます。

#### ネガティブ

> 使うのをやめざるを得なかった。"Failed to authenticate: OAuth session expired and could not be refreshed" が出て直し方が分からない。 — @npertuset [X](https://x.com/npertuset/status/2085386740211290248)

> Claude Code のセッションが期限切れでログインを求めてくることはない？ CLI がトークンをリフレッシュするはずなのに、自分の環境では10日ほどで切れる。 — @tharshan_09 [X](https://x.com/tharshan_09/status/2085817015403463117)

#### Tips

> `claude setup-token` を実行して `export CLAUDE_CODE_OAUTH_TOKEN=yourtoken` をシェル設定に追加すれば、1年ほどログイン不要になる。 — @aydogandev [X](https://x.com/aydogandev/status/2084974789521784910)

> Claude Code は middleware を読んで認証を検証できない。ログイン→ローテーション→失効→期限切れ→古いトークンのリプレイ、というセッションのライフサイクルを与えて全遷移をテストさせること。 — @akshit_io [X](https://x.com/akshit_io/status/2086007261969957268)

### SendMessage で別マシンの Remote Control セッションに名前指定で会話開始

X 上に個人ユーザーの実体験投稿は見つかりませんでしたが、クロスセッションメッセージング全体を解説する日本語記事が出ています。

> Claude Code のセッション間メッセージング（Cross-session messaging）が並列開発をどう変えるかを整理した記事。 — @zhao-xy [Claude Codeが「セッション同士で会話」できるように。並列開発を変えるCross-session messagingとは？](https://qiita.com/zhao-xy/items/463b310c8a9401a4f2e1)

### その他の項目

以下については、直近の X 投稿および Zenn / Qiita 記事に個人ユーザーの実体験・言及が見つかりませんでした。

- ゲートウェイ spend-limit 対応の利用警告
- Remote Control の写真添付改善
- macOS keychain タイムアウト後の MCP OAuth 401連発の修正
- auto モードの安全フィルタ拒否が連続ブロック数に計上される問題の修正
- 圧縮後の Remote Control セッション再開で会話履歴が壊れる問題の修正
- `claude self-hosted-runner` の `--base-dir` 失敗時の起動時エラー化
- Claude Code on the web のスタック誤報告・イベントバックログ再送の修正
- ヘッドレス/起動中のクロスセッションメッセージ保留問題の修正
- 別プロジェクトのセッションへのホバーで開始ディレクトリが変わる問題の修正
- SendMessage の Remote Control 宛先が同名ローカルセッションに入れ替わる問題の修正
- [VSCode] Focus view の折り畳み挙動の修正

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
