---
title: "v2.1.94でeffortデフォルトhigh化とCJK修正、コミュニティ活発"
summary: "Claude Code v2.1.94でBedrock Mantle対応、デフォルトeffortレベルのhigh化、CJKテキスト破損修正など大型アップデート。v2.1.96でBedrock認証リグレッション修正。コミュニティではeffort変更への反応とharness engineering議論が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-09
features:
  - "Amazon Bedrock Mantle サポート"
  - "デフォルト effort レベルを medium から high に変更"
  - "Slack MCP send-message のコンパクト表示"
  - "プラグイン出力スタイルに keep-coding-instructions フロントマター対応"
  - "UserPromptSubmit フックに sessionTitle 設定機能追加"
  - "プラグインスキル名がフロントマターの name を使用するよう変更"
  - "CJK テキストのストリーム破損修正"
  - "--resume がワークツリー間で直接セッション再開可能に"
  - "Bedrock 認証の 403 エラー修正"
---

## 公式アップデート

### Claude Code v2.1.94（2026-04-07）

大型アップデート。主要な変更点:

- **Amazon Bedrock Mantle サポート**: `CLAUDE_CODE_USE_MANTLE=1` で Mantle 経由の Bedrock 利用が可能に
- **デフォルト effort レベルを medium から high に変更**: API キー・Bedrock/Vertex/Foundry・Team・Enterprise ユーザーが対象。`/effort` で制御可能
- **Slack MCP send-message のコンパクト表示**: クリック可能なチャネルリンク付きヘッダーを追加
- **プラグイン出力スタイルに `keep-coding-instructions` フロントマター対応**
- **UserPromptSubmit フックに `hookSpecificOutput.sessionTitle`** でセッションタイトル設定が可能に
- **プラグインスキル名の安定化**: ディレクトリ名ではなくフロントマターの `name` フィールドを使用するよう変更
- **CJK テキストのストリーム破損修正**: stream-json 入出力で UTF-8 シーケンスがチャンク境界で分割される際に U+FFFD に化ける問題を解決
- **`--resume` がワークツリー間で直接セッション再開可能に**: `cd` コマンドの表示ではなく直接再開
- 429 レート制限で長い Retry-After が返った際にエージェントがスタックする問題を修正
- macOS でコンソールログインが「Not logged in」で失敗する問題を修正、`claude doctor` で診断可能に
- プラグインスキルフックのYAMLフロントマター無視、`CLAUDE_PLUGIN_ROOT` 未設定時のエラーなど複数のプラグイン関連バグ修正
- スクロールバックの重複表示、マルチラインプロンプトのインデント、Shift+Space の入力バグなどUI修正多数
- Bedrock での Sonnet 3.5 v2 呼び出しを `us.` inference profile ID で修正
- VSCode: コールドオープン時のサブプロセス負荷削減、ドロップダウンの選択バグ修正、settings.json パースエラー時の警告バナー追加

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.94)

### Claude Code v2.1.96（2026-04-08）

v2.1.94 で発生したリグレッションの修正リリース。

- `AWS_BEARER_TOKEN_BEDROCK` または `CLAUDE_CODE_SKIP_BEDROCK_AUTH` 使用時に Bedrock リクエストが `403 "Authorization header is missing"` で失敗する問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.96)

### その他の公式アナウンス

本日の公式アナウンスはありません。

## コミュニティの反応

### デフォルト effort レベルの high 化

#### ポジティブ

> 何も指定しなくてもClaudeが深く考えて高品質な回答を返すようになった — @MG4Ea1PFWF36731 [X](https://x.com/i/status/2041648801484828691)

> 最近Claude Codeが雑に感じていた原因が以前のmediumデフォルト変更だったが、v2.1.94でhighに戻り精度回復の見込み — @morisapporo2017 [X](https://x.com/i/status/2041648801484828691)

> v2.1.94リリースでデフォルトeffort levelがmedium→highに変更され、--resume機能のworktree跨ぎ改善も含め使い勝手が向上 — @takanashi_lab [X](https://x.com/i/status/2041648801484828691)

#### Tips

> effortLevel: high にしたら実際にマシになるか軽く検証。GitHub issue #42796の23万ツールコール分析を踏まえ、内部thinking budgetのデフォルト変更が品質低下の原因だった可能性を指摘 — @mtk [Zenn](https://zenn.dev/mtk0/articles/claude-code-effort-level-high-benchmark)

### Claude Code品質低下議論（前回から継続）

#### ネガティブ

> 23万ツールコールの定量分析に基づき品質低下の実態を検証。adaptive thinking・effort=85の2設定が原因と指摘し、effort設定変更やCLAUDE.md強化など5つの対処法を提示 — @luoxi [Zenn](https://zenn.dev/luoxi/articles/claude-code-thinking-regression)

### CJK テキストのストリーム破損修正

#### ポジティブ

> CJKテキストのストリーム破損修正に喜びを表現 — @gyakuse [X](https://x.com/i/status/2041648801484828691)

> 日本語テキストの文字化け修正が入り、日本語ユーザー必見のアプデと推奨 — @shima0hide [X](https://x.com/i/status/2041666058201989261)

> Claude Codeの文字化け対策が来た。CJKなどのマルチバイトテキストのstream-json破損（U+FFFD）が修正 — @ManahoHaga [X](https://x.com/i/status/2041634645004185965)

### Amazon Bedrock Mantle サポート

#### ポジティブ

> BedrockのMantle経由でClaude Codeが利用可能になり、ClaudeがBedrockに「生える」ことに驚きと期待 — @moritalous [X](https://x.com/i/status/2041839879647326348)

#### Tips

> CLAUDE_CODE_USE_MANTLE=1 を設定することで有効化可能 — @oikon48 [X](https://x.com/i/status/2041681026037223451)

### Anthropicコード流出事件（前回から継続）

#### 中立

> .npmignoreの1行の記入漏れで51万行が流出した事件から1週間の経緯と、その後「最強のセキュリティAI」発表に至る流れを時系列で整理 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-04-08)

> npmパッケージへのsource map誤同梱はミスではなく設計の問題として、公開プロセスの不備とガードレール設計を考察 — @やちほこ [Zenn](https://zenn.dev/cybernet_itsol/articles/7520539672f1a2)

### harness engineering の台頭

#### 中立

> AIコーディングの本質はプロンプトではなく「AIが働ける環境を設計する」harness engineeringにあるとし、OpenAI・Anthropicの公開事例から読み解く — @slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

> 同じハーネス（NLAHs）でClaude CodeとCodexの品質安定性を比較実験 — @VTeacher [Zenn](https://zenn.dev/rgbkids/articles/82ce351a3223d6)

### Claude Code Skills・Sub-agents 活用

#### Tips

> Skills はメイン会話のコンテキスト内で展開される「マクロ」、Sub-agents は独立コンテキストで動く「ワーカー」。使い分けガイド — @kexi [Zenn](https://zenn.dev/cureapp/articles/claude-code-skills-vs-subagents)

> Claude Codeのエージェントに /todo を持たせたら、1日で記事3本+実装3件が回った — @はむ～ [Zenn](https://zenn.dev/tottoko_hamu/articles/claude-todo-agent-gtd)

> AIチーム6人と過ごした1日。Claude Code マルチエージェントで知的生産ラインを実際に回した時系列レポート — @はむ～ [Zenn](https://zenn.dev/tottoko_hamu/articles/claude-code-multi-agent-day)

> Claude Code -p（ヘッドレス）実践パターン集。--bare・--json-schema・ファンアウトパターンまでCI・スクリプト活用ガイド — @takish [Zenn](https://zenn.dev/takish/articles/claude-code-headless)

### Claude Code 実務活用・開発スタイル

#### Tips

> AIエージェントが増えるほど壊れる問題を、共有Specサーバーで解決。複数エージェント間のAPI仕様不整合対策 — @vance [Zenn](https://zenn.dev/vance/articles/5b9412a5cbf33e)

> 仕様書は"使い捨て"にした方がうまくいった。仕様駆動開発3ヶ月の転換 — @なぐも [Zenn](https://zenn.dev/dely_jp/articles/ef573ae39b9162)

> Claude Code × GitHub ActionsでXcode Metricsの週次パフォーマンスレポートを自動化 — @Dai [Zenn](https://zenn.dev/dely_jp/articles/e1d29da038ef45)

> PMが本来やるべき仕事の時間を取り戻す。Claude Codeで変わった3つのPM業務 — @てら [Zenn](https://zenn.dev/medirom_tech/articles/4a61491a6b5059)

> スマホでClaude Codeの承認待ちを見逃さない方法。承認頻度を減らす設定と通知の仕組み — @konu96 [Zenn](https://zenn.dev/dely_jp/articles/0b78b2b1530878)

> Claude Codeのメモリを3階層にしたら「覚えてる」が「学んでる」に変わった — @まっさん [Zenn](https://zenn.dev/tokium_dev/articles/claude-code-evolutionary-memory)

> Claude Codeに「ここは触るな」を教えるガードレール設計。autoモードでの危険な操作を防ぐ方法 — @o0-sheeefk-0o [Qiita](https://qiita.com/o0-sheeefk-0o/items/f62fad03c2b3c1fece07)

> 並列エージェントオーケストレーターを自作したら調査が5.9倍速くなった — @daisuke-nagata [Qiita](https://qiita.com/daisuke-nagata/items/0ee282b9914c61e5ca28)

### サードパーティツール従量課金制導入（前回から継続）

#### Tips

> OpenClawのDiscord会話がAPIを食い尽くしていた問題をGitHub Copilot連携で解決 — @imudak [Zenn](https://zenn.dev/imudak/articles/anthropic-openclaw-api-migration-part3)

### Microsoft 365コネクター全プラン開放（前回から継続）

#### ポジティブ

> M365コネクター開放によりCopilotのマルチモーダル化が加速。マルチモデル選択時代への移行を指摘 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/11c96e0fbe0a0b)

> M365コネクター全プラン無料開放の詳細解説。セットアップ方法と個人開発者への意味 — @ミケ [Zenn](https://zenn.dev/joemike/articles/claude-m365-connector-all-plans-20260405)

### Claude Mythos Preview 発表

#### 中立

> Anthropicが新型AIモデル Claude Mythos Preview を発表。サイバーセキュリティ特化のProject Glasswinに関連し、性能が高すぎて一般公開を行わない事態に — @miruky [Qiita](https://qiita.com/miruky/items/6b5def7306d78cca4991)

### MCP活用

#### Tips

> AWS MCP (Preview)をread-onlyで安全に始めるためのガードレール設計 — @joe [Zenn](https://zenn.dev/dely_jp/articles/87eb5bada38edd)

> 社内業務をAIに開放。DB Graph含む17個のMCPサーバー群を一挙公開 — @辻 亮佑 [Zenn](https://zenn.dev/aircloset/articles/d9fc317c1336c2)

### トークン節約

#### Tips

> Claudeトークン消費を「原始人」口調で80%削減。日本語最適化版cavemanスキルの紹介 — @mikana0918 [Zenn](https://zenn.dev/mikana0918/articles/7ad57493a04f88)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
