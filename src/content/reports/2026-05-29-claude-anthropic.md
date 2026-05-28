---
title: "Opus 4.8登場・Dynamic Workflows・Series H 650億ドル調達"
summary: "Claude Opus 4.8が新フラグシップモデルとしてリリースされ、Claude Code v2.1.154ではDynamic Workflowsによる大規模並列エージェント機能が追加。AnthropicはSeries Hで650億ドルの資金調達を発表し、評価額9650億ドルに到達。"
importance: 5
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-29
features:
  - "Claude Opus 4.8"
  - "Claude Code Dynamic Workflows"
  - "Claude Code Opus 4.8 Fast mode"
  - "Claude Code Effort Control /effort xhigh"
  - "Claude Code Lean system prompt デフォルト化"
  - "Claude Code claude agents バックグラウンドシェル"
  - "Claude Code Chrome ブラウザ選択"
  - "Claude Code Plugin defaultEnabled: false"
  - "Claude Code Streaming tool execution 全環境有効化"
  - "Claude Code /code-review --fix レビュー自動適用"
  - "Claude Code /reload-skills"
  - "Claude Code MessageDisplay hook"
  - "Claude Code --fallback-model 自動切替"
  - "Claude Code Auto mode opt-in不要化"
  - "Anthropic Project Glasswing サイバーセキュリティイニシアチブ"
  - "Anthropic Series H 650億ドル資金調達"
codex_review: "モデル更新自体は順当だが、本当に面白いのはDynamic WorkflowsがCLIエージェントを個人用オーケストレーターに押し上げた点だ。大型調達は勢いの証明として強い一方、やや相場を過熱させる匂いもある。"
codex_importance: 4
---

## 公式アップデート

### Claude Opus 4.8 リリース

Anthropicの新フラグシップモデル。正直さが4倍向上し、エージェント性能が強化。既存のOpus 4.7と同価格で提供開始。Claude Code v2.1.154ではデフォルトモデルとなり、`/effort xhigh`で最高難度タスク向けの計算量調整が可能に。

### Claude Code v2.1.154（5月28日リリース）

Opus 4.8対応を中心とした大型リリース。

#### 主な新機能

- **Dynamic Workflows**: 数十〜数百の並列サブエージェントをorchestrateする新機能。`/workflows`で実行状況を管理。より大規模で複雑なタスクに対応
- **Opus 4.8 Fast mode**: 従来の半額（標準レートの2倍）で2.5倍の速度を実現
- **Effort Control**: `/effort xhigh`で最高難度タスク向けの計算量調整が可能に。スライダーラベルも「Speed」/「Intelligence」から「Faster」/「Smarter」に変更
- **Lean system prompt**: Opus 4.8以降のモデルでデフォルト化（Haiku、Sonnet、Opus 4.7以前は除く）
- **claude agents バックグラウンドシェル**: `! <command>`でシェルコマンドをバックグラウンドセッションとして実行可能。`claude --bg --exec '<command>'`でも利用可
- **Chrome ブラウザ選択**: `/chrome`→「Select browser…」で接続中のブラウザを選択可能に
- **Plugin defaultEnabled: false**: プラグインをデフォルト無効で公開可能に。`/plugin`で有効化
- **Streaming tool execution**: Bedrock/Vertex/Foundry含む全環境で常時有効化（従来はフィーチャーフラグ制御）
- **`/simplify`の変更**: cleanup-onlyレビュー（reuse, simplification, efficiency, altitude）を実行して修正を適用する仕様に変更。従来の`/code-review --fix`のバグハンティングレビューとは分離
- **MCP環境変数**: Stdio MCPサーバーのサブプロセスに`CLAUDE_CODE_SESSION_ID`と`CLAUDECODE=1`が渡されるように
- **`/plugin` Discoverタブ**: 現在のディレクトリに関連性のあるプラグインに「suggested for this directory」を表示
- **Claude API skill更新**: Opus 4.8サポートと4.7→4.8移行ガイダンスを追加
- **Opus 4.6 Fast mode非推奨化**: `CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE`を非推奨化（06/01に削除予定）

#### セキュリティ修正

- auto-modeのデータ持ち出し検出を改善（特にリポジトリコンテンツの一括転送）
- `rm -rf $HOME`が`HOME`末尾にスラッシュがある場合にブロックされない問題を修正
- `$TMPDIR`がサンドボックス内外で異なるディレクトリに解決される問題を修正

#### 主なバグ修正

- バックグラウンドエージェント完了通知で一部の1Mコンテキストモデルで「out of context」が早期発生する問題
- ピン留めバックグラウンドセッションがClaude Code更新後に毎分リスポーンする問題
- バックグラウンドセッションのサブエージェントがworktree分離ガードをバイパスする問題
- macOSでorphanedな`claude --bg-pty-host`プロセスが100% CPUで回る問題
- managed settingsの不正な`allowedMcpServers`/`deniedMcpServers`エントリで全managed-settingsポリシーが無視される問題
- VS Codeでのthinking spinnerの色数制限による描画破損の修正

[GitHub Releases v2.1.154](https://github.com/anthropics/claude-code/releases/tag/v2.1.154)

### Claude Code v2.1.153（5月28日リリース）

v2.1.154と同日の連続リリース。

#### 主な変更

- **`skipLfs`オプション**: プラグインマーケットプレイスのgithub/gitソースでGit LFSダウンロードをスキップ可能に
- **Status line環境変数**: `COLUMNS`と`LINES`が渡され、スクリプトがターミナル幅に合わせた出力を生成可能に
- **`claude agents`オートコンプリート**: ネイティブスラッシュコマンドとバンドルスキルも候補に表示
- **`/model`の動作変更**: 選択がデフォルトとして保存されるように。`s`キーで現在のセッションのみ変更
- **macOS**: バックグラウンドエージェントがPrivacy & Securityで「Claude Code」として表示され、アップグレード間で権限を維持

#### 主なバグ修正

- カスタムAPIゲートウェイにユーザーのAnthropic OAuthクレデンシャルが送信されるリグレッション修正
- サブエージェントのMCPサーバーが`--strict-mcp-config`等のポリシーを無視する問題修正
- セッション再開時に数GBのメモリ使用量が発生する問題修正
- stateful MCPサーバーの`tools/list`での再接続ループ修正（v2.1.147リグレッション）

[GitHub Releases v2.1.153](https://github.com/anthropics/claude-code/releases/tag/v2.1.153)

### Claude Code v2.1.152（5月27日リリース、前回から継続）

`/code-review --fix`、Skills `disallowed-tools`、`/reload-skills`、`MessageDisplay`フック等の新機能を含むリリース。詳細は前回レポート参照。

[GitHub Releases v2.1.152](https://github.com/anthropics/claude-code/releases/tag/v2.1.152)

### Anthropic Series H 資金調達

Anthropicが650億ドルのSeries H資金調達を発表。評価額は9650億ドルに到達。

### Project Glasswing サイバーセキュリティイニシアチブ

AWS、Apple、Google、Microsoft等40社以上と連携するサイバーセキュリティイニシアチブ。未公開モデル「Claude Mythos Preview」を活用した脆弱性検出を推進。

## コミュニティの反応

### Claude Opus 4.8

#### Tips

> 出たてほやほやのClaude Opus 4.8を整理してみた。「また新しいClaude出たけど、結局なにが変わったん？」をサクッと要点キャッチアップ — @kaichan_dot [Qiita](https://qiita.com/kaichan_dot/items/a5234436a61194e24df7)

> Opus4.8 爆誕! 早速全部入れ替えたら人生が2.5倍捗りそうなので30秒でまとめた件。「値段そのまま」で全部強くなったと好意的な反応 — @taiyodayo [Qiita](https://qiita.com/taiyodayo/items/8ae066c29cd37c4bc32e)

### Claude Code Agent View・バックグラウンドセッション

#### Tips

> Claude Agents！機能が多い！でもここだけ抑えたら便利に使える！実際に使ってみて「ここだけ抑えれば十分使える」ポイントを整理 — @Ugo [Zenn](https://zenn.dev/nana/articles/3fd7e9dffeb831)

> iPhoneからMacのClaude Codeを操作する — Tailscale + Agent Viewで複数セッション管理。Remote ControlとAgent Viewを組み合わせた外出先からの運用 — @ヒナーシャ [Zenn](https://zenn.dev/hinapupil/articles/iphone-claude-code-agent-view)

### スキル・コマンド設計

#### Tips

> 開発フローをClaude Codeスキルにしたら、チーム全員のカレーが毎回おいしくなった。レシピを1行直すと全員の開発フローが進化する仕組み — @yamazaki（Spectee） [Zenn](https://zenn.dev/spectee/articles/execute-task-skill)

> Claude CodeとOpenSpecを使った仕様駆動開発フロー。仕様を明確にしてから実装に入る開発スタイルの実践 — @uchunanora [Zenn](https://zenn.dev/uchunanora/articles/ced1027d0a4ab6)

> verbalize作った話。思考を言語化するスキルで「AIの使い方の上手い人と上手くない人の違い」を吸収 — @makotan [Zenn](https://zenn.dev/makotan/articles/9971f23e320678)

> Claude Code ✖ Obsidian — 自分用ルールをskillsを使ってAIに自動読み込み・更新させる仕組み。プロジェクトごとの業務フロー共有を自動化（前回から継続） — @もろ（ARM） [Zenn](https://zenn.dev/arm_techblog/articles/ea4a436c5b80bb)

> スペック文書を「読みたくなるHTML」に変換するClaude Codeスキルを作った話。Anthropicの「The Unreasonable Effectiveness of HTML」に触発 — @jin（スペースマーケット） [Zenn](https://zenn.dev/spacemarket/articles/6c4992227d0b0d)

> 1行渡すとClaude Codeが1時間自走する — E2Eテスト駆動で新機能を作らせた話。`/e2e-dev`スキルで計画から実装・デプロイ・検証まで自走 — @k shima（カンリー） [Zenn](https://zenn.dev/canly/articles/c7da70a520d1b8)

### サブエージェント品質

#### Tips

> Claude Code subagentの呼び出し品質はなぜプロンプト構造で決まるのか。呼び出しプロンプトに必ず含めるべき5つの要素と省略時のトラブル — @YujiNaramoto [Qiita](https://qiita.com/YujiNaramoto/items/634c73b2e401fd82ec2b)

### セキュリティ・安全設計

#### Tips

> AIエージェントに「気をつけて」と頼むのは、もう安全設計ではない。プロンプトではなく実行環境の境界で事故を止めるべき — @heftykoo [Zenn](https://zenn.dev/heftykoo/articles/732661646e8056)

> 「はい」を押す前に止まれ。Claude Codeでやってはいけないこと7選。初心者〜中級者向けの教科書シリーズCh6 — @シュンク堂 [Zenn](https://zenn.dev/shun_producer/articles/5ea67d91ed8f5a)

> MCPのクレデンシャルをconfigから追い出す：OSキーストアで一元管理するmcp-launcher。envに書いても平文問題は残るため、OSキーストアを活用 — @増田 [Zenn](https://zenn.dev/masuda_masuo/articles/2026-05-28-mcp-launcher)

### コスト管理・利用枠

#### Tips

> Claude Max 5x は本当に元が取れているのか？ jsonl 実測データで検証。16日間の実測値はAPI換算$2,894相当（月換算$5,425）で、Max料金の約55倍の価値 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-22-000000)

### AIレビュー運用

#### Tips

> AIレビュー指摘を鵜呑みにしない — 指摘のトリアージと多段レビューゲートの2ヶ月実践記。AIレビューの指摘量に押される状況への対処法 — @Kenshin Tatsumi [Zenn](https://zenn.dev/kenshintatsumi/articles/02c9a468734b9e)

### Claude Code リリースノート分析

#### Tips

> Claude Code v2.1.152の変更点を整理する — コードレビュー自動適用とSkills新フロントマター。「レビューして終わり」から「レビューして直す」への一歩（前回から継続） — @Goki602 [Zenn](https://zenn.dev/goki602/articles/2026-05-27-claude-code-v2-1-152-what-changed)

> Claude Code v2.1.144のrelease notesを読んで、主張と実態の乖離の6件の修正を整理した話。Anthropic自身が「沈黙で脱落」「沈黙で失敗」の言葉を使う構造的問題（前回から継続） — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/cbd573a9787f9e)

### WebFetch・外部ツール連携

#### Tips

> Claude Codeの組込WebFetchは生Markdownを返さない。markitdownに乗り換えた話。MCP不要でfetch MCPと同等の結果 — @かなげん [Zenn](https://zenn.dev/kanagen/articles/claude-code-webfetch-vs-mcp-server-fetch)

> drive9によるエージェントのリモートファイル管理。AI エージェント向けに設計された永続的かつ検索可能なネットワークファイルシステム — @bohnen [Zenn](https://zenn.dev/bohnen/articles/drive9-claude-code-filesystem)

### Claude Code活用事例

#### Tips

> Claude CodeにWebサイトのコーディングをさせる方法 — ドキュメント設計から指示出しまで。独自CSSシステムで期待通りのコードを得るための体系化 — @sarap422 [Zenn](https://zenn.dev/sarap422/articles/3833fd9a7ea15b)

> 双方向syncのbaselineをどこに置くか。MacとWindowsでClaude Code設定を同期する際の3つの失敗パターンと解決策 — @take-lab [Zenn](https://zenn.dev/take_lab/articles/claudecode-bidirectional-sync-pitfalls)

> コードを1行も書かずに確定申告の経理を半自動化した（Claude Code + MCP）。マネーフォワードの仕訳登録を自動化 — @kazun_0909 [Qiita](https://qiita.com/kazun_0909/items/a6c530ec1f71326153cc)

### 要件定義・設計論

#### Tips

> 思想と仕様を分けて要件定義する。概念整理→合意形成→仕様生成の3段階プロセス — @tara is ok（Rehab for JAPAN） [Zenn](https://zenn.dev/rehabforjapan/articles/requirements-engineering)

> AIアプリ設計とは「ドメイン知識をナレッジに置くかロジックに置くか」の振り分けである。法律事務所向けSaaS開発からの設計論 — @弁護士太田垣佳樹 [Zenn](https://zenn.dev/yoshiki_otagaki/articles/e722c731f512ff)

### Anthropicプラットフォーム・Managed Agents

#### Tips

> 新登場Claude Managed Agentsとは何か — CwC2026 Londonで考え方が一段アップデートされた話（前回から継続） — @noah [Zenn](https://zenn.dev/noah33/articles/ship-your-first-managed-agent)

> GAしたClaude Platform on AWSでTerraform PR Botを作った話。Claude Managed Agents（beta）を活用（前回から継続） — @muramura（TOKIUM） [Zenn](https://zenn.dev/tokium_dev/articles/slack-bot-anthropic-managed-agents)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
