---
title: "v2.1.84: PowerShellツールとMCP改善"
summary: "v2.1.84リリース。Windows向けPowerShellツール、3Pモデル設定環境変数、MCP説明文2KB上限など多数の新機能。コミュニティではRules/Skillsのパスglob対応やCLAUDE_CODE_SUBPROCESS_ENV_SCRUBが注目され、auto modeやChannels活用の実践記事も急増。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-03-26
features:
  - "PowerShell tool for Windows"
  - "3Pモデル設定用環境変数"
  - "ストリーミングアイドルタイムアウト設定"
  - "TaskCreatedフック"
  - "WorktreeCreate HTTPフック"
  - "allowedChannelPluginsマネージド設定"
  - "アイドル復帰プロンプト"
  - "Rules/Skillsパスglob対応"
  - "MCP説明文2KB上限"
  - "MCPサーバー重複排除"
  - "ToolSearch有効時のシステムプロンプトキャッシュ"
  - "IME対応改善"
  - "managed-settings.d/ ドロップインディレクトリ"
  - "CwdChanged/FileChanged フックイベント"
  - "sandbox.failIfUnavailable 設定"
  - "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB"
  - "トランスクリプト検索機能"
  - "エージェントinitialPromptフロントマター"
  - "画像貼り付け[Image #N]チップ"
  - "WebFetch User-Agent改善"
codex_review: "派手さはPowerShell対応に集まるが、実際に効くのはRules/Skillsのglob化や環境変数スクラブのような運用の摩擦を減らす地味な改善だと思う。Claude Codeが実験ツールから組織導入の足場へ寄ってきた印象がある。"
codex_importance: 4
---

## 公式アップデート

### v2.1.84 (2026-03-26)

本日リリース。Windows向けPowerShellツールのプレビュー追加、サードパーティプロバイダ向けモデル設定環境変数、MCP周りの改善、多数のバグ修正を含むアップデート。

#### 新機能

- **PowerShell tool for Windows（opt-inプレビュー）**: Windows環境向けにPowerShellツールを追加。[ドキュメント](https://code.claude.com/docs/en/tools-reference#powershell-tool)
- **3Pモデル設定用環境変数**: `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` でBedrock/Vertex/Foundryの機能検出をオーバーライド。`_MODEL_NAME`/`_DESCRIPTION` で `/model` ピッカーのラベルをカスタマイズ可能
- **CLAUDE_STREAM_IDLE_TIMEOUT_MS**: ストリーミングアイドルウォッチドッグの閾値を設定可能（デフォルト90秒）
- **TaskCreatedフック**: `TaskCreate` でタスク作成時に発火する新フックイベント
- **WorktreeCreate HTTPフック**: `type: "http"` フックで `hookSpecificOutput.worktreePath` を返却可能に
- **allowedChannelPlugins マネージド設定**: チーム/エンタープライズ管理者向けチャネルプラグイン許可リスト
- **x-client-request-id ヘッダー**: APIリクエストにデバッグ用リクエストIDヘッダーを追加
- **アイドル復帰プロンプト**: 75分以上離席後に `/clear` を促すプロンプトを表示し、古いセッションの無駄なトークン再キャッシュを削減
- **ディープリンク改善**: `claude-cli://` リンクが検出リスト順ではなく優先ターミナルで開くように
- **Rules/Skills の paths フロントマター**: YAMLリスト形式のglob指定に対応
- **MCP説明文2KB上限**: OpenAPI生成サーバーによるコンテキスト肥大化を防止
- **MCPサーバー重複排除**: ローカルとclaude.aiコネクター両方で設定されたMCPサーバーをローカル優先で統合
- **グローバルシステムプロンプトキャッシュ**: ToolSearch有効時・MCP設定時もキャッシュが機能するように

#### バグ修正（主要なもの）

- 音声push-to-talk操作時にキャラクターがテキスト入力に漏れる問題を修正
- ワークフローサブエージェントが `--json-schema` 使用時にAPI 400エラーになる問題を修正
- 大きなファイル編集時のアタッチメントスニペット生成でハングする問題を修正
- MCPツール/リソースキャッシュがサーバー再接続時にリークする問題を修正
- Partial cloneリポジトリ（Scalar/GVFS）での起動時の大量blobダウンロードを修正
- ネイティブターミナルカーソルがテキスト入力のキャレットを追従しない問題を修正（CJK入力のIME合成がインラインで表示されるように）
- macOSでの一時的なキーチェーン読み取り失敗による「Not logged in」エラーを修正
- コアツールがバイパスなしにdeferされ、Edit/WriteがInputValidationErrorで失敗する起動レースを修正

#### パフォーマンス改善

- 起動を約30ms改善（`setup()` をスラッシュコマンド/エージェント読み込みと並列化）
- `claude "prompt"` + MCPサーバー時、全サーバー接続を待たずREPLを即時レンダリング
- p90プロンプトキャッシュ率を改善
- 長いセッションでのスクロールリセットを削減
- ツール進捗のアニメーションスクロールによる端末フリッカーを軽減

#### その他の変更

- トークン表示が1M以上で「1.5m」形式に変更（「1512.6k」ではなく）
- Issue/PR参照が `owner/repo#123` 形式のみクリッカブルリンクに（`#123` は非対応に）
- 認証状態で利用不可のスラッシュコマンド（`/voice`, `/mobile` 等）を非表示に
- \[VSCode\] レート制限警告バナーに使用率とリセット時間を表示
- Stats スクリーンショット（`Ctrl+S` in `/stats`）が16倍高速化

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.84)

### v2.1.83 (2026-03-25)（前回から継続）

managed-settings.d/ ドロップインディレクトリ、CwdChanged/FileChangedフック、sandbox.failIfUnavailable設定、CLAUDE_CODE_SUBPROCESS_ENV_SCRUB、トランスクリプト検索、initialPromptフロントマター、画像貼り付けチップ、WebFetch User-Agent改善などを含む大型アップデート。

[ソース: GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.83)

## コミュニティの反応

### Rules/Skillsパスglob対応

#### ポジティブ

> rules/フォルダの各ファイル先頭にpaths:でファイル/フォルダ指定が可能で、Claudeが該当ファイル触る時だけルール読み込み、トークン節約に便利 — @Shuhei_Ohno [X](https://x.com/i/status/2036281788058968421)

> .claude/rules/にcode-style.mdなどのファイルを置き、ルールを関心事ごとに分割管理してClaudeに適用 — @nosuke_moneque [X](https://x.com/i/status/2036804065817247899)

#### Tips

> rules/以下のMarkdownにYAML frontmatterのpathsでglobパターン指定し、特定パス時だけ読み込むスコープ設計が可能で大規模プロジェクトに有効 — @h_a_t_a_r_a_k_e [X](https://x.com/i/status/2035369856250556849)

> .claude/rules/でYAML frontmatterによりパススコープを指定し、巨大CLAUDE.mdをモジュール分割して管理 — @nobel_824 [X](https://x.com/i/status/2035881472910111054)

### CLAUDE_CODE_SUBPROCESS_ENV_SCRUB

#### ポジティブ

> CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1の追加により、Bashツールやhook、MCPサーバーのサブプロセス環境からクラウド認証情報を自動除去し、漏洩リスクを大幅に低減 — @byb_asahi [X](https://x.com/i/status/2036707504219136258)

> CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1により認証情報の流出を気にせず使えるようになり、keychain経由でトークン参照するツール作成が不要になる可能性 — @otani_ai_memo [X](https://x.com/i/status/2036761032589447676)

#### Tips

> CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1を設定すると、サブプロセスに渡す環境変数からAnthropic関連キーやクラウドプロバイダのクレデンシャルを除去し、メインのClaude Codeのみがキーを持つようになる — @DanielCandlless [X](https://x.com/i/status/2036715199902912653)

### managed-settings.d/ ドロップインディレクトリ（前回から継続）

#### ポジティブ

> Claude Code 2.1.83でmanaged-settings.d/が追加され、チームで設定を分割管理可能になり企業導入に超重要な機能 — @hAru_mAki_ch [X](https://x.com/i/status/2036782066382393590)

> ドロップインポリシーディレクトリが追加され、ポリシーフラグメントをアルファベット順にマージしてチーム別デプロイが可能に — @bokubobuson [X](https://x.com/i/status/2036932178060435946)

> v2.1.83でmanaged-settings.d/ドロップインディレクトリが追加され、環境フック追加やサブプロセス認証除去などTips満載のアップデート — @oikon48 [X](https://x.com/i/status/2036703443453374878)

### 画像貼り付け[Image #N]チップ（前回から継続）

#### ネガティブ

> 画像を貼り付けるとコンテキスト上部に加え、入力フィールドに[Image #N]テキストが直接注入されるのは番号参照に便利だが、両方に表示されるのが冗長で煩わしい — @dani_avila7 [X](https://x.com/i/status/2036948371500360147)

#### Tips

> Claude Code v2.1.83では、貼り付け画像に[Image #N]チップが挿入され、プロンプトから位置参照が可能に — @algo_kun [X](https://x.com/i/status/2036949925804859737)

### Auto Mode / 承認フロー

#### ポジティブ

> Claude Code に Auto Mode が登場。「全承認」でも「毎回承認」でもない第三の道 — @akasara [Zenn](https://zenn.dev/akasara/articles/e7b047f018e791)

#### Tips

> Claude Code Auto mode の classifier を実機検証した。classifierがunavailableになるとフォールバック挙動がある。ローカルガード omamori との境界線を整理 — @yottayoshida [Zenn](https://zenn.dev/yottayoshida/articles/claude-code-auto-mode-classifier-omamori)

### Channels機能（前回から継続）

#### ポジティブ

> Pixel Watch から Claude Code を操作してみた。Channels機能でスマートウォッチから音声入力して指示を送り、返信が手首に届く — @luoxi [Zenn](https://zenn.dev/luoxi/articles/claude-code-pixel-watch)

> Claude Code × Discord で非同期ペアプログラミング。インターフェースが変えた開発体験 — @tyabu12 [Zenn](https://zenn.dev/tyabu12/articles/0004-discord-async-pair-programming)

### Hooks活用

#### Tips

> AIエージェントの工程遷移をhookで物理的に制御する。全7工程にゲートを設け、前工程の完了判定チェックリストにレビュー者署名がなければexit 2でブロック — @saytooy_arch [Zenn](https://zenn.dev/saytooy_arch/articles/04-hook-phase-gate)

> Claude Codeの更新情報を作業中に流し読みする仕組み。Spinner Verbsとhooksを組み合わせてリリースノートを表示 — @rakuten_tech [Zenn](https://zenn.dev/rakuten_tech/articles/claude-code-spinnerverbs-hooks)

### TDD・品質管理

#### Tips

> Claude Code × TDDだけでは足りなかった。ユニットテストは通るがビジネスユースケースの観点が漏れる — @kenimo49 [Zenn](https://zenn.dev/kenimo49/articles/claude-code-tdd-beyond-unit-test)

> AI駆動開発の品質崩壊をAIエージェント連携とSDD（仕様駆動開発）で防いだ話 — @good_relax [Zenn](https://zenn.dev/good_relax/articles/6855d0ee4a7d54)

> 4つのAIで2万行級の業務システムはほぼ一撃で作れた。差が出たのは初期ビルドではなく仕様追加だった — @specs [Zenn](https://zenn.dev/specs/articles/e9f7922cd33431)

### GitHub Actionsとの連携

#### Tips

> GitHub Issue を立てるだけで AI が実装から PR 作成まで完了する。Inngest + Claude Code で構築 — @toshipon [Zenn](https://zenn.dev/toshipon/articles/7d4b620aa8fd6c)

> Claude Code × GitHub Actions でIssueにラベル貼るだけで自動修正＆PR作成する仕組み — @solvio [Zenn](https://zenn.dev/solvio/articles/63842f1417883a)

### コーディングエージェントの知識管理

#### Tips

> コーディングエージェントの知識をどこに置き、どう守らせるか。記憶MCPの構造的欠陥、ドキュメントの4役割分離、遵守率の自動計測まで — @shimo4228 [Zenn](https://zenn.dev/shimo4228/articles/coding-agent-memory-architecture)

> AGENTS.mdに何を書くべきか？公式ドキュメントとVercelの比較実験から見える現在地。「百科事典」ではなく「地図・目次」にする方針が有力 — @rai0 [Zenn](https://zenn.dev/rai0/articles/15622bbd1ac823)

### AIコーディングの安全性

#### Tips

> AIコーディングを速くしつつ事故らないための最低限ルール。機密ファイル、危険コマンド、dependency管理のチェックリスト — @seyz [Zenn](https://zenn.dev/seyz/articles/20260316-ai-coding-safety-minimum-rules)

### MCP活用

#### Tips

> Claude Code MCP入門：47体のAIエージェントに「外部ツールの手足」を与えた全記録 — @ti_ai [Zenn](https://zenn.dev/ti_ai/articles/20260325-dzt70)

> Claude Codeから画像生成するMCPを作ってnpmに公開した。Gemini / OpenAI / FLUX対応 — @rimon [Zenn](https://zenn.dev/rimon/articles/11a680c4b530ab)

> 国交省の不動産情報ライブラリMCPサーバを試す — @rescuenow [Zenn](https://zenn.dev/rescuenow/articles/fe5fc6f226cea7)

### Anthropic全般

#### 中立

> AnthropicがAI SREの限界を公式認定。QCon Londonで「相関関係を因果関係と誤認し続ける」という根本的問題を報告 — @tenormusica [Zenn](https://zenn.dev/tenormusica/articles/anthropic-ai-sre-limits-qcon-2026)

#### Tips

> Anthropic Academy③：RAGのre-rankingは「並べ替え」ではなかった。embeddingモデルの仕組みを含む実践的知見 — @yurukusa [Zenn](https://zenn.dev/yurukusa/articles/02f570b746c00f)

> BedrockでClaudeのプロンプトキャッシングを使う際、動的値があってもキャッシュを効かせる方法。システムプロンプトを配列で分割して複数キャッシュポイントを設定 — @tanaka066 [Zenn](https://zenn.dev/tanaka066/articles/38349d0031c809)

### 実践事例

#### ポジティブ

> Claudeを導入したらPR数が1.5倍、コード量は3.5倍になり、開発チームの存在感が劇的に上がった — @sejimhp [Qiita](https://qiita.com/sejimhp/items/a44a11e16e810e7b50ce)

> 設計職がGemini・Claude・Claude Codeを使い分けて、写真ファイラーをリリースした話 — @ena_dri [Zenn](https://zenn.dev/ena_dri/articles/307dc1523c815f)

> 中3が"サーバーを5分で構築できる"AI Discord Botを開発する話。プログラミング知識ほぼ0からClaude Codeで制作 — @mugentaro [Zenn](https://zenn.dev/mugentaro/articles/65faa7c81e3bcc)

> Claude Agent SDKでClaude CodeベースのOpenClawを自作する — @is0383kk [Qiita](https://qiita.com/is0383kk/items/fa49591ef06fd9c1d5f1)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
