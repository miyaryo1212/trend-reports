---
title: "Claude Code v2.1.271〜273が連続公開"
summary: "Claude Code に v2.1.271 / 272 / 273 が公開されました。Remote セッションの fast mode、auto mode のコマンド単位 allowed_domains、エージェントの omitClaudeMd などが追加された一方、Monitor watch の無期限 persistent 廃止と動的ワークフローのサイズ引き下げには不満の声が出ています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-16

features:
  - "Claude Code v2.1.273"
  - "Claude Code v2.1.271"
  - "Remoteセッションのfast mode"
  - "Claudeアプリからのセッションfork"
  - "auto modeのコマンド単位 allowed_domains"
  - "エージェントfrontmatterの omitClaudeMd"
  - "Monitor watchの締切必須化"
  - "動的ワークフローのサイズ既定変更"
  - "動的ワークフローの使用量上限での一時停止"
  - "/config パネルのマウス対応"
  - "claude plugin install/update --accept-command"
  - "Artifact機能の強化"
  - "LLMゲートウェイ向けヒントヘッダー"
  - "Bedrock/Vertex/Foundryのauto modeがローカル分類器を既定に"
  - "auto-compact誤発火の修正"
  - "Claude Code on the web の Routines ページ刷新"
  - "Claude Tag の関連公開チャネル自動ウォッチ"
  - "/ultrareview --post の投稿修正"
codex_review: "派手な新機能というより、リモート運用と権限制御を現実の利用に寄せる調整が多い印象です。Monitor制限は不満も当然だが、企業利用ではむしろ避けにくい流れでしょう。"
codex_importance: 3
---

## 公式アップデート

前回レポート時点の最新は v2.1.270 でした。以降、v2.1.271 / v2.1.272 / v2.1.273 の3本が公開されています (v2.1.272 は「Bug fixes and reliability improvements」のみ)。

### Claude Code v2.1.273 (2026-09-15公開)

- LLM ゲートウェイ向けのヒントヘッダー (`x-claude-code-request-class`、`x-claude-code-agent-type`、`x-claude-code-prev-tool-durations`、`x-claude-code-compaction`、`x-claude-code-context-compacted`) を追加。`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` でオプトイン
- MCP サーバーがセッション中に切断し自動再接続を諦めた際の通知を追加 (`/mcp` を案内)
- Claude アプリから、`claude --remote-control` または `/remote-control` で開始したセッションを fork 可能に。fork は自分の PC 上のバックグラウンドセッションとして動く
- auto-compact の誤発火を修正。advisor 系ツールのターンをコンテキストメーターが実サイズの約2倍に数えており、実質半分の窓で圧縮が走っていた
- Bedrock / Vertex / Foundry の auto mode を当面ローカル分類器既定に変更。`CLAUDE_CODE_AUTO_MODE_SERVER=1` でプラットフォーム側のサーバー分類器を利用
- Artifact 周辺の改善: Markdown をドキュメント体裁 (タイトルヘッダー・本文タイポグラフィ・シンタックスハイライト) で描画、DB 更新で単一フィールドの削除が可能に、claude.ai 到達後に接続が切れた publish の安全な再送
- [Claude Code on the web] Routines 詳細ページの改善、ルーティン編集時の「変更を破棄しますか」確認の追加
- [Claude Tag] 会話が依存するインシデントチャネルなど、関連する公開チャネルを指示なしで自動ウォッチ開始
- [Code Review] `/ultrareview --post` で、GitHub エラー後のリトライ時に指摘コメントが「1回も投稿されない／2回投稿される」問題を修正。コメントにレビュー対象コミットを明記するように

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.273)

### Claude Code v2.1.271 (2026-09-14公開)

- Claude Code Remote セッション (クラウド／セルフホストランナー) で fast mode に対応。ホスト側の fast-mode 設定、またはセッション内で打った `/fast` が、組織が許可する範囲で適用される
- auto mode + サンドボックスで、Bash / PowerShell / Monitor にコマンド単位の `allowed_domains` を追加。そのコマンドが必要とするホストだけを当該コマンドに対して開放し、他は拒否
- エージェント frontmatter と `--agents` JSON に `omitClaudeMd` を追加。カスタム／プラグインのサブエージェントを user / project / local の CLAUDE.md なしで実行できる (管理ポリシーファイルは引き続き読み込まれる)
- `claude plugin install` / `claude plugin update` に `--accept-command <sha256>` を追加。`-y` の代わりに、直前の `--json` 実行が表示したコマンドだけを承認する
- `/config` パネルがフルスクリーンモードでマウスに対応 (ホイールでスクロール、値のクリックで変更)
- Monitor watch に締切を必須化 (最大30分、`-p` の単発実行では10分)。無期限の `persistent` オプションは廃止され、再アームの通知が届く方式に
- 動的ワークフローのサイズ既定を変更。Pro プランは small が既定になり、medium の目安が15→10エージェントに引き下げ
- 動的ワークフローが使用量上限に達した際、対象エージェントを破棄せず一時停止し、リセット後に自動継続するよう改善
- Bash の権限チェック修正 (ワイルドカード展開先のファイル、認識できないオプションの後ろのファイル、シェル変数宣言フラグによる偽装など)

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.271)

## コミュニティの反応

### Remoteセッションのfast mode

#### ポジティブ

> Claude Code v2.1.271 の Remote セッション fast mode で実装速度が1.5倍に。リモート特有のもっさり感が消え、待ち時間がなくなった — @aria_ai_tools [出典](https://x.com/aria_ai_tools/status/2099818879228985609)

> fast mode で本格的に複雑なコーディングタスクを回してみたが、15時間以上の濃い1日でもクォータを使い切れなかった — @alper_turhan [出典](https://x.com/alper_turhan/status/2099239591848861996)

> CLI が `/fast` ひとつで速度を上げられるのは妙に気持ちがいい。似たショートカットを別ツールで試したときも1回あたり数秒縮んだ。ビルドを何十本も回すときに効いてくる — @jilyannori [出典](https://x.com/jilyannori/status/2099632868339372281)

### Claudeアプリからのセッションfork

#### ネガティブ

> Remote Control で CLI から再開するとアプリ側に新スレッドが生成され、文脈が分断される不具合が9月に入って発生。8月までは問題なかった — @iyzebhel [出典](https://x.com/iyzebhel/status/2099612750917804343)

> Claude Code の remote が全く使えず困っている — @applesorce [出典](https://x.com/applesorce/status/2099808157401047119)

#### Tips

> v2.1.273 で Claude アプリの Remote Control セッションを PC 側のバックグラウンドセッションに fork 可能に。対象は `claude --remote-control` または `/remote-control` で開始したセッション — @abugiza_ [出典](https://x.com/abugiza_/status/2099967326544105501)

> スマホから Remote Control セッションを常時操作できるようにして、Mac で始めた作業を外出先で継続している。ただし複数セッションの整理は課題 — @pivi___ [出典](https://x.com/pivi___/status/2098000673983930544)

### auto modeのコマンド単位 allowed_domains

#### ポジティブ

> v2.1.271 の auto mode + sandbox のコマンド単位 `allowed_domains` が便利。curl などの通信をコマンドごとに最小限へ絞れる — @ethereaglehq [出典](https://x.com/ethereaglehq/status/2099882002623127821)

> 2.1.271 で Bash permission checks のワイルドカード展開漏れが修正された。autonomous agent のセキュリティリスクを埋める、地味だが重要な改善 — @Elenkova_dxb [出典](https://x.com/Elenkova_dxb/status/2099939373819256855)

#### ネガティブ

> Claude Code の ask/deny や sandbox は抜け道が多く無理ゲー。hooks も同様で、外側で制限をかける方が良さそう — @akiwitter_ai [出典](https://x.com/akiwitter_ai/status/2099888178958409906)

### Monitor watchの締切必須化

#### ポジティブ

> Monitor に制限時間を付けたのは良い変更で、以前より安心感がある — @pzkh23 [出典](https://x.com/pzkh23/status/2099792934338236807)

#### ネガティブ

> Monitor watch が最大30分 (`-p` 時は10分) で自動終了するようになり、無期限 persistent の廃止で agmsg が30分ごとに落ちるようになった — @kohji405mi16 [出典](https://x.com/kohji405mi16/status/2099818953241772042)

> 夜通し動かしていた Claude Code Monitor が30分で死ぬようになり、旧 persistent オプションがなくなったのが痛い — @does_it_code [出典](https://x.com/does_it_code/status/2099760402737344730)

### 動的ワークフローの使用量上限での一時停止

#### ポジティブ

> ハーネスのフェイルオーバーで使用量上限時の一時停止を自動回避し、複数エージェントをチェーンしてワークフローを中断なく継続できる — @hey_daniil [出典](https://x.com/hey_daniil/status/2098169678065742094)

#### ネガティブ

> 使用量上限でワークフローが一時停止し、ツールが死ぬと1週間止まるリスクがある — @konig0000 [出典](https://x.com/konig0000/status/2099553221715046661)

> 使用量上限に達したときの自動リセット・切り替え機能が Claude Code にないのが不満 — @UberVero [出典](https://x.com/UberVero/status/2099966941075267944)

#### Tips

> 使用量上限対策として、サブエージェントを安価モデルへルーティングし、同時実行数の制限とセッションごとのトークン監視を組み合わせるチェックリストを共有 — @kumarumt [出典](https://x.com/kumarumt/status/2099840665974710321)

### /config パネルのマウス対応

#### ポジティブ

> 設定を変えるたび settings.json を開いていたが、2.1.271 から `/config` でマウスが効く。ホイールで送って値をクリックすれば切り替わる。条件は `/tui` fullscreen だけ。自分の設定は29項目だった — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2099638524727492692)

### claude plugin install/update --accept-command

#### Tips

> 2.1.271 で plugin install/update に `--accept-command <sha256>` が追加され、`-y` で全許可する代わりに特定コマンドだけを SHA256 で事前承認できる。最小構成の allowedDomains 設定と着手順をまとめた — @hyu001225 [出典](https://x.com/hyu001225/status/2099785981021032488)

> 2.1.271 の新機能として `--accept-command <sha256>` を紹介。plugin install/update で盲目的な `-y` 承認を避けられる (ほかに allowed_domains や omitClaudeMd も) — @Evro_AI [出典](https://x.com/Evro_AI/status/2099763669127028792)

### Artifact機能の強化

#### ポジティブ

> Artifacts DB が Artifact ごとの永続ストアとして使えるようになっていて、マスタやトランザクションも持てて便利 — @shibamasa_dev [出典](https://x.com/shibamasa_dev/status/2099026690597105989)

#### Tips

> Artifact の裏側に read_db / write_db で DB を持たせ、チェックリストや投票状態を保存できる。artifact-capabilities スキルを事前に読み込ませるのがコツ — @AI_Eris_Log [出典](https://x.com/AI_Eris_Log/status/2097519455748362740)

なお、今回追加された監視上限5→10件や Markdown のドキュメント体裁描画に直接触れた個人投稿は、直近1週間では見つかりませんでした。

### 反応が見つからなかった項目

以下は X 検索で個人ユーザーの実体験投稿が確認できませんでした (公式 Changelog の転載・bot 投稿のみ)。

- Claude Code v2.1.273 リリース全体
- エージェント frontmatter の `omitClaudeMd`
- LLM ゲートウェイ向けヒントヘッダー
- Bedrock / Vertex / Foundry の auto mode ローカル分類器既定化
- auto-compact 誤発火の修正
- Claude Code on the web の Routines ページ刷新
- Claude Tag の関連公開チャネル自動ウォッチ
- `/ultrareview --post` の投稿修正 (Claude Code のコードレビュー全般への賛否は複数あるものの、今回の修正内容に言及した投稿はなし)

動的ワークフローのサイズ既定変更 (Pro は small、medium が15→10エージェント) についても、変更自体への個人の評価投稿は確認できませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.273](https://github.com/anthropics/claude-code/releases/tag/v2.1.273)
- [Claude Code v2.1.271](https://github.com/anthropics/claude-code/releases/tag/v2.1.271)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
