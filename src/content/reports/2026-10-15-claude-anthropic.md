---
title: "Claude Code v2.1.299/300とアイドル自動圧縮"
summary: "Claude Codeがv2.1.299・v2.1.300を公開し、1時間キャッシュ失効前のアイドル自動コンパクションやmod API拡充、OpenTelemetry強化が入りました。Anthropicは米中間選挙向けの選挙セーフガードとシンガポールオフィス開設も発表しています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-15

features:
  - "[Claude Code] v2.1.299 アイドル自動コンパクション"
  - "[Claude Code] v2.1.300 リリース"
  - "[Anthropic Policy/Claude.ai] 米中間選挙2026の選挙セーフガード"
  - "[Claude Code] /advisor on Claude Platform on AWS"
  - "[Claude Code] v2.1.299 /usage警告・/effort /fast"
  - "[Claude Tag] Slack連携強化"
  - "[Claude Code] CLAUDE_CODE_DISABLE_FILE_MENTIONS"
  - "[Claude Code] [VSCode] claudeCode.attachSelection設定"
  - "[Anthropic] シンガポールオフィス開設"
codex_review: "アイドル時の自動圧縮は派手さはないが、長時間エージェントの再開コストを左右する実務的な改善で、キャッシュ運用が製品機能に組み込まれ始めた点が面白い。一方、他の変更は小粒な更新が中心で、業界全体を動かすニュースとは言いにくい。"
codex_importance: 2
---

## 公式アップデート

### [Claude Code] v2.1.299 アイドル自動コンパクション

v2.1.299（2026年10月14日公開）で、ターミナルに「アイドルコンパクション」が追加されました。

- 200K+トークンの会話を約54分放置すると、1時間のプロンプトキャッシュが切れる前に自動で圧縮する。次のメッセージで全体を再処理せずに済む。
- 最小トークン数は `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` で変更可能。settings.json の `"idleCompaction": false` で無効化できる（いずれも v2.1.290 以降が必要）。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)

### [Claude Code] v2.1.299 /usage警告・/effort /fast

- `/usage` に max effort、ワークフロー、常時ロードされるコンテキスト、大きなツール結果に関する警告を追加。
- エージェントビューで `/effort` と `/fast` を使い、新規セッションの初期値を設定可能に。引数なしの `/model`・`/effort`・`/fast` はピッカーを開く。
- `/usage`・上限接近警告・ステータスラインが100%超を表示することがある問題を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)

### [Claude Code] CLAUDE_CODE_DISABLE_FILE_MENTIONS

v2.1.299 で環境変数 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` が追加されました。設定すると、`@` ファイル指定時に内容ではなくパスのみがClaudeに渡され、Claudeはファイルツールで読み取ります。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)

### [Claude Code] v2.1.300 リリース

v2.1.300（2026年10月14日公開）の主な変更です。

- mod向け: プロンプト欄の `virtualText`、`$.ui.view({ agentId })`、`prompt.change` フック、`agent.spawn` フックでワークフローエージェントの `prompt`/`model` を書き換え可能に、`Text` の `dir` プロパティ（右から左のテキスト）。
- OpenTelemetry: `api_request` イベントに `cache_creation_5m_tokens` / `cache_creation_1h_tokens` を追加し、キャッシュ書き込みを寿命別に分離。トレースspanにGenAIセマンティック規約属性（`gen_ai.provider.name` など）を追加。
- 修正: MCPツールの入力スキーマがAPIに拒否された際に毎ターン400エラーになる問題、SessionEndフックが背景コマンド実行中の終了時に動かない問題、reftable利用リポジトリでの `--worktree` 不具合など多数。
- 変更: api.anthropic.com への大きなリクエストはテレメトリ無効時もgzip圧縮（`CLAUDE_CODE_GZIP_REQUEST_BODIES=0` で無効化）。ローカルのセッショントランスクリプトに各APIリクエストのシステムプロンプト・ツール・パラメータも記録。`claude remote-control` の `--sandbox` / `--no-sandbox` フラグは削除。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)

### [Claude Code] /advisor on Claude Platform on AWS

v2.1.300 で、Claude Platform on AWS 上で `/advisor` が使えるようになりました。`/advisor`、`advisorModel`、`--advisor` で選ぶまでアドバイザーは動作せず、`CLAUDE_CODE_DISABLE_ADVISOR_TOOL=1` で無効化できます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)

### [Claude Code] [VSCode] claudeCode.attachSelection設定

v2.1.300 で、エディタで選択したテキストをメッセージに自動添付しない `claudeCode.attachSelection` 設定が追加されました。同バージョンでは、利用クレジット切れ後もfast modeが有効のままリクエストが拒否され再送される問題なども修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)

### [Claude Tag] Slack連携強化

v2.1.300 のClaude Tag（Claude in Slack）関連の変更です。

- Slack Connectチャンネル（他組織との共有チャンネル）への対応。OwnerまたはClaude Tag管理者が許可でき、デフォルトはオフ。
- コネクタ操作の承認が必要な場合、スレッド内に本人にだけ見える Allow once / Deny カードを表示。他の参加者には承認待ちであることのみ表示される。
- Slackが文字起こしを持つ音声クリップは、その文字起こしをClaudeが読み取る。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)

### [Anthropic Policy/Claude.ai] 米中間選挙2026の選挙セーフガード

Anthropicは米中間選挙2026に向けた選挙セーフガードを発表しました。

- Claudeが州別の投票情報（投票所、ID要件。情報提供はDemocracy Works）を会話内に表示する。
- 選挙の悪用を検知する分類器も強化した。

[ソース](https://www.anthropic.com/news)

### [Anthropic] シンガポールオフィス開設

Anthropicはシンガポールオフィスを開設しました。アジア太平洋で5拠点目で、同国のデジタル開発情報省とAI安全性・評価に関する覚書（MOU）を締結しています。

[ソース](https://www.anthropic.com/news)

## コミュニティの反応

### [Claude Code] v2.1.299 アイドル自動コンパクション

#### ポジティブ

> 「会話が200K超えて54分放置すると1時間キャッシュ失効前に自動圧縮してcache missを防ぐ賢い変更」と評価し、実際に便利だと感じたとの実体験 — @phuclh93 [出典](https://x.com/phuclh93/status/2110466513975271490)

#### ネガティブ

> 「54分沈黙後にauto-compactするようになった。ようやく自分のBSを自分で圧縮するようになった」と皮肉を交えて不満を述べた投稿 — @dariuusnv [出典](https://x.com/dariuusnv/status/2110464416588402849)

#### Tips

> 常駐エージェントがキャッシュ切れで再開時に中央値32.8万トークンを消費していたため、キャッシュが使える55分でコンパクトするModsを自作。再開時の消費は中央値4.1万トークン（87%減）になったとの報告 — いち（Zenn） [常駐エージェントがキャッシュ切れで中央値32.8万トークンを浪費していたので。キャッシュが使える55分でコンパクトするModsを作った](https://zenn.dev/i_ichi/articles/claude-code-mods-idle-compact)

### [Claude Code] v2.1.300 リリース

#### ポジティブ

> MCPツールの400エラー問題が修正され、バックグラウンドコマンド待機中の不要なファイル確認やsleepが減った点が助かるとの実体験 — @nantokanaru_ai [出典](https://x.com/nantokanaru_ai/status/2110472625449525498)

### 反応が見られなかったトピック

- 米中間選挙2026の選挙セーフガード: 該当なし（取得した投稿に個人ユーザーの体験・感想は含まれていませんでした）
- /advisor on Claude Platform on AWS、v2.1.299 /usage警告・/effort /fast、Claude Tag Slack連携強化: 該当なし
- CLAUDE_CODE_DISABLE_FILE_MENTIONS、claudeCode.attachSelection、シンガポールオフィス開設: 該当なし

## ソース

- [Claude Code v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300)
- [Claude Code v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
