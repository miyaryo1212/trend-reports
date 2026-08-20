---
title: "v2.1.238公開とConcise出力スタイル反響"
summary: "Claude Code v2.1.238 が2026年8月20日に公開され、keybindingFlavor 設定、プラグイン/MCP の headersHelper、self-hosted-runner のシャットダウン・プロキシ認証オプション、長時間セッションのメモリ肥大化修正などが入りました。前日の v2.1.237 で追加された Concise 出力スタイルにはXで賛否両方の反応が集まっています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-21

features:
  - "Claude Code v2.1.238"
  - "keybindingFlavor 設定"
  - "プラグインマーケットプレイスの headersHelper"
  - "headersHelper のインストール時確認"
  - "self-hosted-runner --defer-shutdown-max-min"
  - "self-hosted-runner のプロキシ認証オプション"
  - "長時間セッションのメモリ肥大化修正"
  - "出力スタイルのドリフト修正"
  - "セッション間メッセージングの失敗通知"
  - "Remote Control の接続耐性向上"
  - "claude mcp list / get の表示変更"
  - "Ctrl+L / Cmd+K の挙動変更"
  - "MCP headersHelper の信頼要件"
  - "Claude Code v2.1.237"
  - "Concise 出力スタイル"
  - "Claude API Managed Agents 8月19日リリース"
codex_review: "Conciseの賛否が話題先行に見える一方、実は長時間セッションのメモリ修正やheadersHelperの信頼要件のほうが運用現場では効く。派手さは薄いが、Claude Codeが道具として一段まともになった更新だと感じる。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.238

2026年8月20日に公開されました。設定・プラグイン・self-hosted-runner まわりの機能追加に加え、メモリ肥大化や Remote Control、セッション間メッセージングの多数の修正を含みます。

[Claude Code Releases - v2.1.238](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)

### keybindingFlavor 設定

`keybindingFlavor` 設定が追加されました。`"readline"` を指定すると、プロンプト内の Ctrl+W が Bash と同様に直前の空白まで削除する挙動になります。既定値の `"classic"` は従来どおりです。

### プラグインマーケットプレイスの headersHelper

URL 型マーケットプレイスまたはカタログエントリに `headersHelper` を指定できるようになりました。指定したコマンドが HTTP ヘッダー（短命トークンなど）を生成し、カタログおよび同一オリジンのアーカイブ取得に使用されます。

### headersHelper のインストール時確認

カタログエントリの `headersHelper` は、そのプラグインをインストールまたは更新するときにのみ実行されます。実行されるコマンドが表示されたうえで `claude plugin install/update` が `[y/N]` の確認を求めます（`-y` で省略可）。

### self-hosted-runner --defer-shutdown-max-min

`claude self-hosted-runner --defer-shutdown-max-min <minutes>` が追加されました。SIGTERM を受けても接続中のセッションへの提供を継続し、指定した分数の経過後に残りを退避してから終了します。

### self-hosted-runner のプロキシ認証オプション

`--proxy-authorization-command` / `--proxy-authorization-file` が追加されました。接続のたびに新しい `Proxy-Authorization` ヘッダーを要求する egress プロキシ向けのオプションです。

### 長時間セッションのメモリ肥大化修正

長時間の対話セッションにおける際限のないメモリ増加が修正されました。サブエージェントのツール結果が、直近の表示ウィンドウから外れた時点で解放されます。

### 出力スタイルのドリフト修正

カスタム・プロジェクト・プラグインの各出力スタイルが、セッションの途中で既定の文体に戻ってしまう問題が修正されました。

### セッション間メッセージングの失敗通知

同一マシン上の受信拒否設定（`crossSessionInbound: "refuse"`）のセッションへ送信した場合、送信側に「refused」が報告されるようになりました。従来は成功として扱われていました。あわせて、レート制限やキュー溢れで受信側の inbox がメッセージを破棄した場合も、送信側のセッションに通知されます。

### Remote Control の接続耐性向上

ネットワークエッジ・VPN・プロキシからの一時的な HTTP 403 拒否を最大3分間許容するようになりました。遮断が継続する場合は、拒否している主体を明示します。

### claude mcp list / get の表示変更

`claude mcp list` と `claude mcp get` が、無効化済みのサーバーに対してヘルスチェックのための接続を行わず、`⊘ Disabled` と表示するようになりました。

### Ctrl+L / Cmd+K の挙動変更

フルスクリーンでは Ctrl+L と Cmd+K が常に再描画のみを行うよう変更されました。二度押しによる `/clear` ショートカットは廃止され、1行の nvim ターミナルで自動的に `/clear` ループが発生することもなくなりました。

### MCP headersHelper の信頼要件

プロジェクトの `.mcp.json` に置かれた MCP `headersHelper`、およびプロジェクトや `--add-dir` のエージェントファイル内のインライン MCP サーバーは、そのフォルダの信頼ダイアログが承認済みであることを必須とするようになりました（`claude -p` でも同様）。またプロジェクト・プラグイン・エージェントファイル由来の helper は、資格情報の環境変数を継承せずに実行されます。ユーザー・管理・claude.ai スコープの helper は Claude の設定ディレクトリから実行されます。

### Claude Code v2.1.237

2026年8月20日に公開されました。LLM ゲートウェイまたはカスタム base URL を利用しているセッションで、プロンプトキャッシュが機能しない問題が修正されています。

[Claude Code Releases - v2.1.237](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)

### Concise 出力スタイル

組み込みの出力スタイル「Concise」が追加されました。前置きや実況を省いて結果から述べる一方、作業自体は従来どおりの丁寧さで行います。`/config` の Output style から選択できます。

### Claude API Managed Agents 8月19日リリース

Managed Agents の8月19日リリースに合わせて、Claude Code に同梱される `claude-api` スキルが更新されました。セルフホストのサンドボックスにおける web search / fetch のドメイン設定と、メモリストアに対応しています。

## コミュニティの反応

### Concise 出力スタイル

#### ポジティブ

> 個人的に Concise Output Style かなり好きです — @oikon48 [出典](https://x.com/oikon48/status/2090426842926985331)

> Claude Code に「Concise」という出力スタイルが追加された。前置きを省いて結果から出す設定で、毎日AIの長い前置きを読み飛ばしている人ほど地味に効く更新だと思う — @potajima_lab [出典](https://x.com/potajima_lab/status/2090456962349822396)

#### ネガティブ

> 新しい concise モードのせいかは分からないが、今日は一日こちらの質問を無視され続けている — @danieljvdm [出典](https://x.com/danieljvdm/status/2090544864807231528)

> Claude Code を concise モードに切り替えたら、今度は ultraconcise モードが欲しくなった — @j_jason_bell [出典](https://x.com/j_jason_bell/status/2090523096029478921)

> concise モードにしてもまだ喋りすぎる — @aaronjmars [出典](https://x.com/aaronjmars/status/2090403925543498238)

#### Tips

> 設定するにはプロジェクト単位なら `/config` の Output style から選択、グローバルなら `~/.claude/settings.json` に `"outputStyle": "Concise"` を記述する — @coder_zeff [出典](https://x.com/coder_zeff/status/2090436595728171202)

> AIの出力を確認せずそのまま採用している人には不向き。普段は Concise、重要な場面だけ詳細を聞く使い分けを — @kitasan_ai [出典](https://x.com/kitasan_ai/status/2090408869956931670)

### Ctrl+L / Cmd+K の挙動変更

#### ネガティブ

> Ctrl-L の二度押しで `/clear` されるショートカットが Unix の画面クリアと被って誤操作しやすく、不満だった。`/resume` で戻せるが不要な変更だと感じた — @shidokamo [出典](https://x.com/shidokamo/status/2090073104642928692)

### プラグインマーケットプレイスの headersHelper

#### ネガティブ

> headersHelper がセッションごとに毎回プロンプトを表示してしまい、1Password などのセキュアな環境変数連携で使いにくい — @theozero [出典](https://x.com/theozero/status/2090530338732945636)

### Claude API Managed Agents 8月19日リリース

#### ポジティブ

> Managed Agents の Self-Hosted Sandbox で作業結果を memory に保存・同期しやすくなり、長時間エージェントを動かしても context を維持できる — @isaka_aipdm [出典](https://x.com/isaka_aipdm/status/2090367508054520047)

> Self-Hosted Sandbox と Memory の統合で、sandbox 内の作業を memory に保存できるようになり、エージェントが前の結果を活用して context を失わずに続けられる — @karthi_tw [出典](https://x.com/karthi_tw/status/2090359760378060841)

### その他の項目

Claude Code v2.1.238 全体、`keybindingFlavor` 設定、`headersHelper` のインストール時確認、self-hosted-runner の `--defer-shutdown-max-min` およびプロキシ認証オプション、長時間セッションのメモリ肥大化修正、出力スタイルのドリフト修正、セッション間メッセージングの失敗通知、Remote Control の接続耐性向上、`claude mcp list / get` の表示変更、MCP `headersHelper` の信頼要件、v2.1.237 のプロンプトキャッシュ修正については、個人ユーザーの実体験にあたる X 投稿は**該当なし**でした。v2.1.238 の公開が8月20日であり、反応が出るまでの時間が経っていないことが主な要因です。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.238](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)
- [Claude Code v2.1.237](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
