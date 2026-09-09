---
title: "Claude Code v2.1.267、キャッシュ修正50件超"
summary: "Claude Code v2.1.267 が公開され、maxEffortLevel と --system-prompt-snapshot off の追加、プロンプトキャッシュ再利用まわりの大規模修正、managed 設定の fail-closed 化など50件超の変更が入りました。前日には v2.1.265 のゲートウェイ回帰を潰す緊急修正 v2.1.266 も出ています。X 上では /diff パネルへの好意的な反応が確認できました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-10

features:
  - "Claude Code v2.1.267 リリース"
  - "maxEffortLevel 設定"
  - "--system-prompt-snapshot off"
  - "Claude Cowork: クラウド定期タスクの起動失敗を修正"
  - "マーケットプレイスパスのバックスラッシュ回避を修正"
  - "読み取り不能な managed 設定の扱いを修正"
  - "-p --resume の再開修正"
  - "5MB超セッション再開の修正"
  - "effort: frontmatter の無視を修正"
  - "プロンプトキャッシュ再利用の大規模修正"
  - "ToolSearch非対応時のMCP/プラグインツールを deferred 定義で配信"
  - "claude remote-control の常駐修正"
  - "Artifact 公開のリトライ"
  - "/diff パネル改善"
  - "Claude Code Gateway: forward_user_identity の429透過"
  - "VS Code 拡張: 拡張ホスト100% CPU ハングを修正"
  - "Claude Code on the web: GitHub連携の修正"
  - "Claude Tag: 管理設定にカスタムコネクタ導線を追加"
  - "Claude Tag: クレジット切れ時のエラーメッセージ改善"
  - "Claude Code v2.1.266 緊急修正リリース"
codex_review: "派手な新機能より、長時間セッションとMCP運用で溜まった実務上の痛みを潰すリリースに見える。地味だが、エージェントIDEの信頼性競争ではかなり重要だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.267

2026-09-10 04:58 (JST) に公開されました。50件を超える変更を含み、プロンプトキャッシュの再利用、セッション再開、managed 設定の安全側への倒し方が中心です。

**新規追加**

- `maxEffortLevel` 設定が追加されました。トップレベル、または `modelSettings` の下でモデルごとに指定でき、Bedrock・Vertex・Foundry を含むすべてのプロバイダで effort レベルの上限を固定します。ユーザーはそれより低いレベルであれば引き続き選択できます。
- `--system-prompt-snapshot off` が追加されました。会話に記録済みのプロンプトを再利用せず、リクエストごとにシステムプロンプトを生成し直します。プロンプト本文を反復して調整する用途向けです。

**セキュリティ・managed 設定**

- マーケットプレイスのエントリパスにバックスラッシュが含まれる場合、macOS / Linux で取得済みマーケットプレイスの封じ込めチェックを回避できたケースを修正しました。
- managed の `allowedHttpHookUrls`、`httpHookAllowedEnvVars`、`allowedChannelPlugins` が読み取り不能なとき、すべてを許可するのではなく、何も許可しないよう修正しました。
- `/login` で、managed 設定が Claude apps gateway でのサインインを必須にしているマシンにおいて、Esc がダイアログを閉じず無反応だった問題を修正しました。

**セッション再開**

- `-p --resume` 経由で `/compact` などのスラッシュコマンドが実行されたセッションを再開すると、余計な「Continue from where you left off.」というターンが挿入されていた問題を修正しました。
- トランスクリプトが 5 MB を超える大きなセッションの再開で、並列ツール呼び出しとその hook 出力が復元後の会話から欠落していた問題を修正しました。

**プロンプトキャッシュ**

今回のリリースで最も件数が多い領域です。

- `/model` でモデルを切り替えるたびにすべてのツール定義が再送されていた (キャッシュミス) 問題を修正しました。コミットや PR の attribution テキストは、モデル変更時に更新される会話ノートとして届くようになりました。
- ToolSearch を持たないセッションで、セッション途中に MCP / プラグインのツールがツール一覧に追加されキャッシュが壊れていた問題を修正しました。対応モデルには deferred 定義として渡されます。
- MCP サーバーの再送信や組み込みツールの再レンダリングにより、モデルが既にロード済みのツールが再度届くと、それ以前の推論が破棄されていた問題を修正しました。
- MCP サーバーの切断やアップグレードで会話途中にツールが消えると、ツール一覧が書き換わり過去の thinking が破棄されていた問題を修正しました。
- 会話からフォークされたバックグラウンドワーカーが、セッション途中で会話のツールブロックに EnterWorktree を追加していた問題を修正しました。
- 再開したセッションが、MCP コネクタの再接続タイミングの違いでインラインのツールセットを書き換える、記録済みのツール説明を再生成する、コネクタ再接続前に過去の MCP ツール告知を書き換える、といった問題群を修正しました。
- claude.ai コネクタのツールがセッションと再開の間で変化した際のキャッシュミスと extended thinking の欠落を修正しました。
- print モード (`-p`) の会話を対話的に再開した際、システムプロンプト接頭辞が変化してキャッシュが切れる問題を修正しました。
- サブエージェント、および `--system-prompt` / `--append-system-prompt` 付きで開始したセッションが、システムプロンプトとツール定義を再生成せず一度だけ記録するようになりました。

**その他の修正・改善**

- サンドボックスを必須とする managed 設定を持つ組織で、Cowork のクラウド定期タスクが起動時に失敗していた問題を修正しました。
- カスタムコマンド・スキル・サブエージェントの `effort:` frontmatter が、デフォルト effort が固定されているモデル (Opus 4.7、Opus 4.8、Fable 5) で無視されていた問題を修正しました。
- `claude remote-control` が、サーバー認証情報の期限切れ (起動から約30日) で終了し、接続中の全セッションを道連れにしていた問題を修正しました。ホストが再登録して稼働を継続します。
- アップロード途中で接続が切れたアーティファクト公開について、アップロードが完了していないと判断できる場合に限り1回だけ自動で再試行するようになりました。公開が拒否された際のエラーメッセージも、理由と対処を示すようになっています。
- `/diff` パネルが「0 files changed」とスピナーを一瞬表示してから確定する挙動をやめ、空状態がパネル中央に配置されるようになりました。
- `/context` などのローカルコマンドの出力がモバイルクライアントで空欄になる問題、tmux / ssh セッションへの再接続後に shift+enter と option+backspace が効かなくなる問題を修正しました。
- Gateway の `forward_user_identity` について、メールが転送された開発者に対する 429 をそのまま返すようになりました。次の upstream にフェイルオーバーしないため、プロキシのユーザー単位の制限が維持されます。
- Bash ツールの説明ガイダンスを改善し、コマンドをそのまま繰り返すのではなく平易な言葉で動作を説明するようになりました。

**VS Code 拡張**

- 保存されたトランスクリプトに循環する parent リンクが含まれる会話で、fork・過去メッセージの編集・rewind を行うと拡張ホストが CPU 100% でハングする問題を修正しました。
- WSL2 / WSLg でのスクリーンショット貼り付けが生の画像バイト列をチャット入力に挿入する問題、チャットの diff ブロックが常にダークテーマで描画される問題、CRLF 改行のファイルで diff ビューの編集適用が「String not found in file」で失敗する問題、スペースを含むパスの @-mention が落ちる問題などを修正しました。
- 大規模または symlink の多いワークスペースでファイル閲覧時に ripgrep プロセスが暴走する問題を修正しました。

**Claude Code on the web / Claude Tag**

- GitHub Enterprise Server のセッションで、トークン期限切れ後に GitHub アカウントが未接続と表示される問題を修正しました。PR / issue の操作で自動的にリフレッシュされます。
- Claude GitHub App が導入されていない組織で `gh` と GitHub API 呼び出しが失敗する問題を修正しました。接続済みの GitHub アカウントを使用し、未接続の場合はその旨を伝えます。
- Claude Tag の管理設定で、プリセット接続フォームに「Use a custom connector」リンクが追加されました。最初からやり直さずにカスタム接続へ切り替えられます。
- 組織の利用クレジットが尽きた際に「The API rejected the request as invalid」と返答していた問題を修正し、残高不足であることと追加方法を案内するようになりました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.267)

### Claude Code v2.1.266 (緊急修正)

2026-09-09 08:55 (JST) に公開された、v2.1.265 の回帰に対する単一項目の修正リリースです。

未文書化の環境変数 `CLAUDE_CODE_USE_GATEWAY` は、従来 `ANTHROPIC_BASE_URL` と `ANTHROPIC_AUTH_TOKEN` の両方が設定されていない限り無視されていましたが、v2.1.265 でこの変数単独で Cloud gateway サインインを強制するようになっていました。その結果、API キー・`apiKeyHelper`・カスタム認証ヘッダーと併用している構成では全リクエストが「Not signed in to the Cloud gateway」で失敗していました。v2.1.266 でこの変数は単独では再び無視されるようになり、設定変更は不要です。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.266)

## コミュニティの反応

### /diff パネル改善

#### ポジティブ

> Claude Code に /diff パネルが追加され、会話の横に未コミットの差分がリアルタイムで表示されるようになった。Claude の編集状況が一目で分かる。地味だが手放せない — @_ko1 [X](https://x.com/_ko1/status/2097655509092606297)

> 新しい /diff パネルがチャット横に表示され、編集時の変化をリアルタイムで確認できる。後から差分を確認する手間が省けて便利 — @Liam2307 [X](https://x.com/Liam2307/status/2095756920216854533)

#### ネガティブ

**該当なし**

### effort: frontmatter の無視を修正

#### Tips

> Claude Code の frontmatter パーサーのバグを発見して修正した OSS 貢献。本文中の `---` が frontmatter として誤認識される問題を sed が原因と特定して修正 — @sagexd_08 [X](https://x.com/sagexd_08/status/2097768923542462624)

### プロンプトキャッシュ再利用の大規模修正

X 上で本修正そのものへの個人ユーザーの実体験投稿は確認できませんでしたが、プロンプトキャッシュのコストを実測した日本語記事が複数出ています。

#### Tips

> Claude Code の利用状況を OpenTelemetry で Cloudflare D1 に3か月半ためたデータで、プロンプトキャッシュの TTL 経過後に同じセッションへ戻ると会話履歴全体を送り直す挙動を自分の環境でも確認した — スイ [Zenn](https://zenn.dev/sui_water/articles/cfe2a86c01b22a)

> CLAUDE.md とプロジェクト memory の索引は7日窓の平均で1日あたり 43,009,096 トークン (キャッシュ読み出し) だが、同じ窓の再送総量 923,932,954 トークン/日 の 4.66% でしかない。残り95%は会話履歴とツール結果 — genkunjc [Zenn](https://zenn.dev/genkunjc/articles/claude-md-cost-per-clause)

### Claude Code v2.1.266 緊急修正リリース

X 上では公式寄りのリリース告知が中心で、個人ユーザーの実体験投稿は確認できませんでした。日本語記事では回帰の内容をまとめたものが出ています。

#### ネガティブ

> v2.1.265 の約50件のアップデートに混入した回帰により、LLM ゲートウェイ / プロキシ経由で API キーや独自認証ヘッダーを使っている構成が全リクエスト失敗する状態になっていた — picnic [Qiita](https://qiita.com/picnic/items/657a4b4e4b0906f0f659)

#### Tips

> Claude Code に調査だけをさせたいとき、プロンプトで「変えないでください」と書いても止まらない。`--disallowed-tools` による外側からの禁止と、変更されていないことの機械的な確認手順を 2.1.266 で動作確認した — ちいさなソフト工房 [Zenn](https://zenn.dev/chiisanasoft/articles/75b6bd6a1cf911)

### Claude Code v2.1.267 リリース

**該当なし**

リリース直後のため、X 上に個人ユーザーの実体験・感想の投稿は確認できませんでした。確認できたのはチェンジログ系アカウントによる告知のみです。

### maxEffortLevel 設定

**該当なし**

### --system-prompt-snapshot off

**該当なし**

### Claude Cowork: クラウド定期タスクの起動失敗を修正

**該当なし**

### マーケットプレイスパスのバックスラッシュ回避を修正

**該当なし**

### 読み取り不能な managed 設定の扱いを修正

**該当なし**

### -p --resume の再開修正

**該当なし**

### 5MB超セッション再開の修正

**該当なし**

### ToolSearch非対応時のMCP/プラグインツールを deferred 定義で配信

本修正そのものへの言及は確認できませんでしたが、近い話題として MCP ツール定義とキャッシュの関係を指摘する投稿がありました。

#### Tips

> Claude Code が MCP ツールのフルスキーマをセッション開始時ではなく使用時に読み込む設計を好意的に評価 — @Ngorovitch [X](https://x.com/Ngorovitch/status/2095481937842278582)

#### ネガティブ

> MCP ツール定義がキャッシュプレフィックスにあるため、追加・削除で会話履歴全体が無効化される — @does_it_code [X](https://x.com/does_it_code/status/2097193713692713141)

### claude remote-control の常駐修正

**該当なし**

### Artifact 公開のリトライ

**該当なし**

### Claude Code Gateway: forward_user_identity の429透過

**該当なし**

### VS Code 拡張: 拡張ホスト100% CPU ハングを修正

**該当なし**

### Claude Code on the web: GitHub連携の修正

**該当なし**

### Claude Tag: 管理設定にカスタムコネクタ導線を追加

**該当なし**

### Claude Tag: クレジット切れ時のエラーメッセージ改善

**該当なし**

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.267 リリースノート](https://github.com/anthropics/claude-code/releases/tag/v2.1.267)
- [Claude Code v2.1.266 リリースノート](https://github.com/anthropics/claude-code/releases/tag/v2.1.266)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
