---
title: "v2.1.117でネイティブ検索高速化、Pro削除騒動が波紋"
summary: "Claude Code v2.1.117がリリースされ、macOS/Linuxネイティブビルドでbfs/ugrepによる検索高速化、Pro/Maxのデフォルトeffortがhighに変更。一方、ProプランからClaude Code削除のA/Bテストが発覚しコミュニティが大炎上。Opus 4.7の品質議論も継続中。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-23
features:
  - "[Claude Code v2.1.117] フォーク型サブエージェントの外部ビルド対応: 環境変数 CLAUDE_CODE_FORK_SUBAGENT=1 で有効化可能に"
  - "[Claude Code v2.1.117] エージェントfrontmatter mcpServers対応: --agent経由のメインスレッドセッションでMCPサーバーを読み込み"
  - "[Claude Code v2.1.117] /model選択の永続化: 再起動後もモデル選択が保持され、プロジェクトピンとの関係をヘッダーに表示"
  - "[Claude Code v2.1.117] MCP同時接続によるスタートアップ高速化: ローカルとclaude.ai MCPサーバーの並行接続がデフォルトに"
  - "[Claude Code v2.1.117] プラグイン依存関係の自動解決: インストール済みプラグインの不足依存を自動インストール、マーケットプレイスからの自動解決に対応"
  - "[Claude Code v2.1.117] blockedMarketplaces/strictKnownMarketplaces管理設定: プラグインのインストール・更新・自動更新時に適用"
  - "[Claude Code v2.1.117] Advisor Tool改善(experimental): experimentalラベル・通知・エラー修正"
  - "[Claude Code v2.1.117] ネイティブビルドでGlob/GrepをBash内蔵のbfs/ugrepに置換: ツールラウンドトリップ不要で検索高速化（macOS/Linux）"
  - "[Claude Code v2.1.117] Pro/Maxユーザーのデフォルトeffortをhighに変更: Opus 4.6/Sonnet 4.6対象（旧medium）"
  - "[Claude Code v2.1.117] Opus 4.7コンテキストウィンドウ修正: 200Kではなく本来の1Mで計算するよう修正"
  - "[Claude Code v2.1.117] cleanupPeriodDays対象拡大: tasks/、shell-snapshots/、backups/ディレクトリも保持期間管理の対象に"
  - "[Claude Code v2.1.117] OpenTelemetry拡張: slash commandのcommand_name/source、effort属性の追加"
  - "[Anthropic Research] Anthropic Economic Index: 81,000人のClaudeユーザー調査に基づくAIの経済的影響に関する研究レポートを公開"
codex_review: "検索高速化やMCP並列化は地味だが実務効率に効く。一方でPro削除テストは、開発者向けAIが価格設計で信頼を削り始めた兆候にも見える。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.117

4月22日リリース。ネイティブビルドの検索性能強化と、プラグインエコシステムの管理機能拡充が目立つリリース。

**新機能・改善**
- フォーク型サブエージェントが外部ビルドで有効化可能に（`CLAUDE_CODE_FORK_SUBAGENT=1`）
- エージェントfrontmatterの `mcpServers` が `--agent` 経由のメインスレッドセッションで読み込まれるように
- `/model` のモデル選択が再起動後も保持。プロジェクトピンとの関係をスタートアップヘッダーに表示
- `/resume` コマンドで古い大規模セッションの要約を提案するように（既存の `--resume` 動作と統一）
- ローカルとclaude.ai MCPサーバーの並行接続がデフォルトに（起動高速化）
- `plugin install` がインストール済みプラグインの不足依存を自動インストール。`claude plugin marketplace add` で不足依存をマーケットプレイスから自動解決
- マネージド設定の `blockedMarketplaces`・`strictKnownMarketplaces` がプラグインのインストール・更新・自動更新時に適用
- Advisor Tool（experimental）に「experimental」ラベル、learn-moreリンク、起動時通知を追加。セッション停止するエラーも修正
- `cleanupPeriodDays` の保持期間管理対象に `~/.claude/tasks/`、`~/.claude/shell-snapshots/`、`~/.claude/backups/` を追加

**パフォーマンス**
- macOS/Linuxネイティブビルドで `Glob`・`Grep` ツールをBash内蔵の `bfs`・`ugrep` に置換。ツールラウンドトリップ不要で検索高速化（Windows・npm版は従来通り）
- Windows: プロセスごとに `where.exe` 実行可能ファイル検索をキャッシュし、サブプロセス起動を高速化

**設定変更**
- Pro/MaxサブスクライバーのOpus 4.6・Sonnet 4.6デフォルトeffortが `high` に変更（旧 `medium`）

**テレメトリ**
- OpenTelemetryの `user_prompt` イベントにslash commandの `command_name`・`command_source` を追加。`cost.usage`、`token.usage`、`api_request`、`api_error` に `effort` 属性追加

**バグ修正**
- Opus 4.7セッションで `/context` のパーセンテージが膨張し早期autocompactが発生する問題修正（200Kではなく本来の1Mで計算）
- Plain-CLI OAuthセッションでアクセストークン期限切れ時に「Please run /login」で死ぬ問題修正（401で自動リフレッシュ）
- `WebFetch` が巨大HTMLページでハングする問題修正（変換前にトランケート）
- プロキシがHTTP 204 No Contentを返す際のクラッシュ修正
- `NO_PROXY` がBun環境でリモートAPIリクエストに反映されない問題修正
- サブエージェントが異なるモデルで実行時にファイル読み取りでマルウェア警告が誤発火する問題修正
- バックグラウンドタスク存在時のアイドル再描画ループ修正（Linuxのメモリ増加を軽減）
- Bedrock application-inference-profileリクエストがOpus 4.7（thinking無効時）で400エラーになる問題修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.117)

### Anthropic Economic Index

Anthropicが81,000人のClaudeユーザーの利用データに基づくAIの経済的影響に関する研究レポート「Anthropic Economic Index」を公開。X/Twitter上では品質基準を満たす個人ユーザーの反応は確認されなかった。

## コミュニティの反応

### Claude Code v2.1.117

#### ポジティブ

> macOS/LinuxネイティブビルドでGlob/GrepをBash内蔵のbfs/ugrepに置き換え、ツールラウンドトリップなしで検索を高速化 — @hir08ma [X](https://x.com/i/status/2046838684281184667)

> macOS/Linuxネイティブビルドの検索が高速化され、Pro/Maxユーザーのデフォルトeffortもhighに向上 — @LLMpsycho [X](https://x.com/i/status/2046789260611625206)

> macOS/Linux native buildのGlob/Grepがbfs/ugrep内蔵に置き換わり、課金層向けの磨き込みが進んでいる — @tututtaa [X](https://x.com/i/status/2046780217906417927)

> 非エンジニアでも大型プロジェクトの構築幅が広がる、フォーク型サブエージェントの外部ビルド有効化を歓迎 — @Tomoshibi1982 [X](https://x.com/i/status/2046907084852371632)

#### ネガティブ

> macOS/LinuxネイティブビルドでGlob/Grepをbfs/ugrepに置き換えたが、プラットフォームミスマッチで機能が表示されない可能性がある — @ariccio [X](https://x.com/i/status/2046753160782606841)

#### Tips

> v2.1.117でAdvisor Tool（実験的）にexperimentalラベルと起動時通知を追加し、macOS/Linuxの検索高速化やMCP接続改善など多数の機能強化とバグ修正を実施 — @ClaudeCodeCafe [X](https://x.com/i/status/2046891768356942122)

> v2.1.117アップデートでサブエージェントフォーク有効化、/model永続化、/resume要約機能追加、Advisor Toolにexperimentalラベル・通知を付け、バグ修正多数 — @masayan_ai_hack [X](https://x.com/i/status/2046879319755219092)

### Proプラン Claude Code削除騒動

4月21日、Anthropicが予告なく料金ページからPro（$20）のClaude Codeを削除。数時間で撤回されたが、Head of GrowthのAmol Avasareは「新規prosumer登録の約2%へのA/Bテスト」と釈明。既存Pro/Maxには影響なしと明言されたものの、将来的なプラン再編への懸念が広がっている。

#### ネガティブ

> 「料金表もまたUIやった」— Hacker Newsで462ポイント／446コメント超の大炎上。告知なしの変更と釈明の食い違いが批判の焦点 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-04-22)

> Claude Codeが$20プランから一瞬消えた話。撤回はされたがテスト自体は継続中とされ、将来的な本格プラン再編はほぼ規定路線という見方 — @isa [Zenn](https://zenn.dev/aiforall/articles/33534863994e45)

> 【個人開発者必見】Proプラン剥奪騒動の全容と備え。公式アナウンスなしの削除と、実際のサイト書き換え範囲が食い違ったまま — @サクッとぱんだ [Zenn](https://zenn.dev/sktt_panda/articles/claude-code-pro-plan-removal-2026-04)

### Opus 4.7の品質・コスト議論（前回から継続）

#### ネガティブ

> Anthropicが「かつてのOpenAI」になった日 — Opus 4.7リリース1週間で「legendarily bad」「深刻な劣化」と散々な評価。他社を批判して台頭した会社が同じ失敗をする「振り子構造」を指摘 — @tomoki [Zenn](https://zenn.dev/mikan_atomoki/articles/53c6e844b9eeee)

> Opus 4.7は「価格据え置き」でも実質35%値上げになる可能性がある。新トークナイザーの採用で同じテキストのトークン数が増加 — @ニイジマ [Zenn](https://zenn.dev/nijima/articles/1f5dc267dd212f)

#### Tips

> Opus 4.7に移行するなら"effort"を理解してからにしよう。xhighの追加とeffortパラメータの厳格化が挙動変化の主因。Plan/API/Claude Code別のeffort使い分けガイド — @coa00 [Zenn](https://zenn.dev/purpom/articles/claude-opus-4-7-effort-guide)

### Claude Codeの記憶・コンテキスト管理

#### Tips

> Claude Codeの「記憶喪失」を直すために、ローカルSQLiteに6層の記憶を持たせた話。MCPサーバーとしてlinksee-memoryを構築 — @Michie [Zenn](https://zenn.dev/kanseilink/articles/linksee-memory-claude-code-6-layer-20260422)

> GitHubリポジトリ全体をAIに「読ませる」だけでは足りない。開発者のためのRepo Memoryアーキテクチャ — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/e87a341c571534)

> AIエージェントは毎ターン同じ20,000トークンを読み直している — Prompt Cachingという設計規律 — @Thought analyzer [Zenn](https://zenn.dev/analysis/articles/thought-analyzer-prompt-caching)

### Claude Codeの実践活用

#### Tips

> 足場を組めばClaude Codeが週末に社内ダッシュボードを組んだ。Rails 8 + SQLite + React構成、フロント7,300行・バックエンド3,800行を2日で完成 — @matchy [Zenn](https://zenn.dev/aileron/articles/vibe-coding-rails-dashboard-weekend)

> 優秀なAI専門チームと爆速で仕上げる要件定義 — PMのためのClaude Code × AIエージェント実践ガイド — @てら [Zenn](https://zenn.dev/medirom_tech/articles/c8d422b940fa6d)

> AIレビューをチームに入れる前に、まず自分自身に1次レビュー自動化をかけてみた — @Sangun [Zenn](https://zenn.dev/sangun/articles/6a0b176299434d)

> AIコード生成に「秩序」を。900ファイルのテストを2ヶ月でRSpecへ完全移行した軌跡 — @ENOMOTO0904 [Zenn](https://zenn.dev/gatechnologies/articles/3694b4daf9ea6e)

> AIエージェントに夜間コード巡回させる設計で、一番力を入れたのはブレーキだった。自律スキルnight-patrolの暴走防止設計 — @playpark [Zenn](https://zenn.dev/playpark/articles/ai-agent-night-patrol-autonomous-code-fix)

> Claude Codeで仮想ゲームスタジオを動かす「Claude-Code-Game-Studios」を試す。49体のエージェントと72のスラッシュコマンド — @アリヘイ [Zenn](https://zenn.dev/aria3/articles/claude-code-game-studios-intro)

> Claude Codeをnpmからネイティブインストールへ切り替える際の注意点。PATHの衝突・設定の二重化等のハマりポイント — @daishir0 [Zenn](https://zenn.dev/daishiro/articles/claude-code-npm-to-native-migration)

### セキュリティ

#### Tips

> Rules File Backdoor攻撃とは？ AIコーディングエージェントの設定ファイル汚染リスクと安全な構成管理設計。多層防御アーキテクチャと7つの安全な構成管理チップス — @CodeBond [Zenn](https://zenn.dev/76hata/articles/rules-file-backdoor-ai-agent-secure-config)

### エンジニアの役割変化

#### 中立

> 『AIネイティブ世代』の新卒エンジニアが1年経って直面した、"コードを書かない"開発のリアル。「手書き中心」から「AIを前提に組み立てる」方向への変化 — @yuta [Zenn](https://zenn.dev/moneyforward/articles/cc0f73ed14c4a7)

> 「AIにコードを書かせ続けた結果起こった悲劇」— ガバナンス崩壊と立て直し記録。AIの提案を鵜呑みにして人間レビューを疎かにした失敗談 — @fukukei23 [Zenn](https://zenn.dev/fukukei23/articles/ai-coding-governance-collapse)

> なぜClaude CodeもCodexもエージェントではありえないのか？ 実務上の本質は「自律的代理人」ではなく「檻の中で働く高性能な作業実行器」 — @pdfractal [Zenn](https://zenn.dev/pdfractal/articles/0c533d840396c4)

### その他

#### 中立

> Roo Codeが2026年5月15日に全サービス終了。30個以上のカスタムスキルを使い込んだユーザーの別れの言葉 — @TOSHIz [Zenn](https://zenn.dev/toshiz_t/articles/55c6ce757e91ae)

> 副業のために月2万円の道具を買うか — Claude Max契約までに考えたこと — @takafumi-iwao [Zenn](https://zenn.dev/takafumi_iwao/articles/98a9578110e174)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
