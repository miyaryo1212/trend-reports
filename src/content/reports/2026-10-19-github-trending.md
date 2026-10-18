---
title: "公式プラグイン集とエージェント並列実行IDEが急伸"
summary: "Anthropic公式のClaude Codeプラグインディレクトリが全言語・Python両Trendingに入り、Claude Codeで就活を回すai-job-searchが並んだ。TypeScriptでは複数のCLIエージェントをworktree単位で並列実行するorca、rufloやopencodeなどハーネス系が上位を占めた。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-10-19

features:
  - "anthropics/claude-plugins-official"
  - "MadsLorentzen/ai-job-search"
  - "stablyai/orca"
  - "ruvnet/ruflo"
  - "anomalyco/opencode"
  - "anthropics/claude-code"
codex_review: "公式プラグイン集の伸びは、エージェントの差がモデル性能から周辺機能の生態系へ移りつつある兆しで面白い。一方、並列実行は比較を速めても、コストとレビュー負荷まで消すわけではなく、普及の決め手は地味な運用設計にありそうだ。"
codex_importance: 3
---

## 公式アップデート

### anthropics/claude-plugins-official

Anthropicが管理するClaude Code公式プラグインディレクトリ。全言語とPythonの両方のTrendingに入っている。

- **構成**: `/plugins` にAnthropic内製プラグイン、`/external_plugins` にパートナーおよびコミュニティ製プラグインを置く
- **導入**: `/plugin install {plugin-name}@claude-plugins-official` を実行するか、`/plugin > Discover` から探す
- **外部プラグインの提出**: 提出フォーム経由で受け付ける。品質とセキュリティの基準を満たす必要がある
- **プラグイン構造**: `.claude-plugin/plugin.json` (必須) に加え、`.mcp.json`、`commands/`、`agents/`、`skills/`、`README.md` を任意で置く
- **名前は不変**: マーケットプレイス登録時の `name` は変更不可のslugで、変えると既存ユーザー側で `plugin-not-found` エラーになる。UI上の表示名は `displayName` で変える。やむを得ず改名する場合は `marketplace.json` の `renames` マップに旧名と新名を書くと、ユーザーの次回同期時に自動で移行される
- **スキルバンドル**: `plugin.json` を持たず `SKILL.md` だけを配布しているリポジトリは、`strict: false` と `skills` 配列で直接登録できる。`source` は `git-subdir` 形式でURL、パス、ref、コミットSHAを指定する。各スキルは `<plugin-name>:<skill-name>` としてClaude Codeに登録される
- **注意書き**: Anthropicはプラグインに含まれるMCPサーバーやファイルを管理しておらず、動作や将来の変更を保証しないと明記している。導入前に各プラグインのホームページで信頼性を確認するよう求めている

[ソース](https://github.com/anthropics/claude-plugins-official)

### MadsLorentzen/ai-job-search

Claude Code上で動く、ローカル完結型の就職活動フレームワーク。全言語とPythonの両方のTrendingに入っている。Anthropicとは無関係の独立プロジェクトで、暗号資産トークンや有償スポンサー制度は存在しないと明記している。

- **作者の実績**: 作者は地球物理学者で、2025年末に職を失った後にこのフレームワークを自身の転職活動に毎週使用した。69件の応募、20件の一次面接を経て1件の契約に至り、2026年6月にAIエンジニアとして就業した
- **コアワークフロー**: `/setup` (プロフィール作成) → `/scrape` (求人ポータル検索) → `/apply <url>` (適合評価とCV・カバーレター生成)。自己プロファイリング、適合評価、ドラフター・レビュワー構成の応募パイプラインは言語・国に依存しない
- **`/apply` の処理**: 求人票を解析し、プロフィールに対する適合を5軸で評価する。LaTeXでCVとカバーレターを下書きし、新しいコンテキストで起動した第2のエージェントが企業を調査して批評する。修正後にlualatex (CV) とxelatex (カバーレター) でコンパイルし、CVが2ページちょうど、カバーレターが1ページちょうどになるまでレンダリング結果を見て反復する。最後にpdftotextでPDFのテキスト層を抽出し、ATS (応募者追跡システム) が読む形で連絡先や読み順、キーワード網羅率を検証する。プロフィールが裏付けないキーワードは詰め込まず、ギャップとして残す
- **追加コマンド**: `/interview` (面接準備と模擬面接)、`/outcome` (結果記録と催促文の下書き)、`/notion-sync` (Notionへの一方向同期)、`/gmail-sync` (Gmailから応募ステータスを検出し承認制で反映)、`/rank` (スクレイプ結果の一括スコアリング)、`/expand` (GitHubやKaggleなど公開情報からスキル補完)、`/upskill` (スキルギャップ分析と学習計画)、`/html-report` (オフラインのHTMLダッシュボード)、`/add-template` (LaTeXやTypstなど独自テンプレート登録)、`/add-portal` (自国の求人サイト向け検索スキルを生成)。`/reset` もある
- **求人ポータル**: 同梱の検索スキルはデンマーク市場向け (Jobindex、Jobnet、Akademikernes Jobbank、Jobdanmark)。国に依存しないものとして、LinkedInの公開エンドポイントを使う `linkedin-search` と、freehire.meのREST APIを使う `freehire-search` を同梱する。いずれもランタイム依存ゼロでBunだけで動く
- **前提**: Claude Code (Pro/Max/Teamサブスクリプションまたは API クレジット)、Python 3.10+、Bun、lualatexとxelatexを含むLaTeX環境。Codex、Antigravity、Gemini CLIなど他のエージェントは `AGENTS.md` から始める
- **注意**: 公開リポジトリのフォークは必ず公開になり、`/setup` は個人情報を追跡対象ファイルに書き込むため、個人利用にはこのリポをupstreamに設定したプライベートリポジトリを推奨している。求人票は信頼できない入力として扱い、埋め込まれた指示には従わない設計だが、サンドボックスではないため送信前に目視確認を求めている

[ソース](https://github.com/MadsLorentzen/ai-job-search)

### stablyai/orca

複数のコーディングエージェントを並列に走らせるためのオーケストレーター兼IDE。MITライセンス。TypeScriptのTrendingに入っている。

- **基本機能**: Codex、Claude Code、OpenCode、Piなどを、それぞれ独立したgit worktreeで並列実行し、1画面で追跡する。1つのプロンプトを5つのエージェントに分配して結果を比較し、勝ったものをマージする使い方を想定している
- **モバイル連携**: iOS App StoreとAndroid APKで配布するコンパニオンアプリから、エージェントの完了通知を受け取り、追加指示を送れる
- **ターミナル**: WebGL描画の分割ターミナルで、スクロールバックは再起動後も残る
- **Design Mode**: 実際のChromiumウィンドウ上でUI要素をクリックすると、そのHTML、CSS、切り抜きスクリーンショットがエージェントのプロンプトに送られる
- **GitHubとLinear**: PR、issue、プロジェクトボードをアプリ内で閲覧し、任意のタスクからworktreeを開ける
- **SSH worktree**: リモートマシン上でエージェントを動かし、ファイル編集、git、ターミナルを扱える。自動再接続とポートフォワーディングに対応
- **AI差分への注釈**: 差分の任意の行にコメントを付けてエージェントに戻せる
- **Orca CLI**: `orca worktree create`、`snapshot`、`click`、`fill` などでエージェント自身がOrcaを操作できる
- **その他**: クイックオープン、ClaudeとCodexの使用量とレート制限リセット時刻の表示、再ログイン不要のアカウント切替、Computer Use、通知と未読管理
- **対応エージェント**: Claude Code、Codex、Grok、Cursor、GitHub Copilot、OpenCode、Pi、Hermes Agent、Devin、Goose、Cline、Kimi、Kiro、Qwen Codeなど30種以上を列挙し、ターミナルで動くCLIエージェントなら何でも動くとしている
- **配布**: onorca.devとGitHub Releases (macOS Apple Silicon/Intel、Windows、Linux AppImage)。Homebrewは `brew install --cask stablyai/orca/orca`、Arch Linuxは AUR の `stably-orca-bin`
- 匿名の利用データを収集しており、オプトアウト方法をドキュメントに記載している。Windowsのコード署名はSignPath.ioの提供

[ソース](https://github.com/stablyai/orca)

### ruvnet/ruflo

旧claude-flowの後継にあたる、Claude CodeとCodex向けのエージェント・メタハーネス。TypeScriptのTrendingに入っている。MITライセンスで、`npx ruflo` で起動する。

- **機能**: マルチエージェントのスワーム展開、自律ワークフローの協調、会話型AIシステムの構築。適応メモリ、自己学習、フェデレーション、ベクターRAG統合を特徴として挙げ、Claude Code、Codex、Hermesとのネイティブ統合を謳う
- **READMEの掲示**: 2025年6月2日の初回コミットを示すバッジと、npmダウンロード数のバッジを掲載している。バッジの説明文によると、検証済みデータセットのダウンロードイベント数は97,022,120件
- 取得したRSSの本文は途中で切れており、これ以上の詳細は含まれていない

[ソース](https://github.com/ruvnet/ruflo)

### anomalyco/opencode

オープンソースのコーディングエージェント。TypeScriptのTrendingに入っている。

- **デスクトップアプリ (BETA)**: macOS (Apple Silicon/Intel)、Windows、Linux (.deb、.rpm、.AppImage) 向けに GitHub Releases と opencode.ai/download で配布する。`brew install --cask opencode-desktop` とScoopの `extras/opencode-desktop` からも導入できる
- **CLIの導入経路**: curlのインストールスクリプト、npm (`@opencode/cli`)、Scoop、Chocolatey、Homebrew (常に最新の `anomalyco/tap/opencode` と更新が遅い公式formula)、pacman、AUR、mise、nix。0.1.xより古いバージョンは先に削除するよう注意している
- **インストール先**: `$OPENCODE_INSTALL_DIR`、`$XDG_BIN_DIR`、`$HOME/bin`、`$HOME/.opencode/bin` の順に優先される
- **エージェント**: フルアクセスの `build` と、読み取り専用の `plan` をTabキーで切り替える。`plan` はファイル編集を拒否し、bash実行前に許可を求める。複雑な検索や多段タスク用の `general` サブエージェントは `@general` で呼べる
- READMEは英語を含む22言語で用意されている。「opencode」を名前に含む派生プロジェクトには、非公式である旨をREADMEに書くよう求めている

[ソース](https://github.com/anomalyco/opencode)

### anthropics/claude-code

Claude Code公式リポジトリがTypeScriptのTrendingに再浮上した。

- **npmインストールの非推奨化**: READMEで `npm install -g @anthropic-ai/claude-code` を非推奨と明記した。推奨する導入方法は次の4つ
  - macOS/Linux: `curl -fsSL https://claude.ai/install.sh | bash`
  - Homebrew: `brew install --cask claude-code`
  - Windows: `irm https://claude.ai/install.ps1 | iex`
  - WinGet: `winget install Anthropic.ClaudeCode`
- リポジトリにはカスタムコマンドとエージェントを追加するプラグインが同梱されている。バグ報告は `/bug` コマンドまたはGitHub issueで受け付ける

[ソース](https://github.com/anthropics/claude-code)

## コミュニティの反応

### anthropics/claude-plugins-official

#### ポジティブ

> GitHub Trendingで急上昇中で、1日で約1,400スターを獲得し累計約4.2万スターに達した。Anthropic公式のプラグイン集として注目されている — @JohnJonesgtai [出典](https://x.com/JohnJonesgtai/status/2111734839171068409)

> 公式ディレクトリが1日で1,397スターを獲得し合計42Kスターに。`/plugin > Discover` で閲覧できると紹介 — @iCleanAI [出典](https://x.com/iCleanAI/status/2111724399611318467)

#### Tips

> `/plugin Discover` で公式・パートナー・コミュニティのプラグインを安全に探し、`/plugin install` で導入する手順を推奨している — @XIjie5 [出典](https://x.com/XIjie5/status/2111749531260051740)

> コードレビュー、フロントエンド設計、機能開発向けのプラグインを挙げ、繰り返し発生するタスクで試す価値があると勧めている — @JohnJonesgtai [出典](https://x.com/JohnJonesgtai/status/2111734839171068409)

#### ネガティブ

該当なし

### MadsLorentzen/ai-job-search

該当なし (取得した投稿はリポジトリ紹介、Trending通知、スター獲得報告のみで、実際に使った感想や評価は含まれていなかった)

### stablyai/orca

#### ポジティブ

> 複数のコーディングエージェントを並列のworktreeで走らせる「艦隊指揮センター」として、Trendingで爆発的に人気のオーケストレーターだと紹介している — @xiaoshan0413 [出典](https://x.com/xiaoshan0413/status/2111943745700802815)

> 同様に、並列worktreeで複数エージェントを管理できる点を評価して紹介している — @conradlotz [出典](https://x.com/conradlotz/status/2111849847892460013)

#### Tips

> 同じプロンプトを3つのコーディングエージェントに投げ、各worktreeの差分を比較して最良のものを採用するワークフローを紹介。brew installからのセットアップ手順も具体的に説明している — @DegenOfWallSt [出典](https://x.com/DegenOfWallSt/status/2111925509320003772)

#### ネガティブ

> 各エージェントがそれぞれ自分のサブスクリプションを消費するため、3つを競わせると使用量も3倍になる。匿名テレメトリーの送信 (オプトアウト可) や、毎日のリリースが977件に達している点も実用上の注意点として挙げている (中立的なトーン) — @DegenOfWallSt [出典](https://x.com/DegenOfWallSt/status/2111925509320003772)

### ruvnet/ruflo

#### ポジティブ

> rufloが76,000スターを突破し、本日だけで502スターを獲得した。AIスワームの連携基盤として「2026年で最も熱いソフトウェア」と評している — @ThePurpleSim [出典](https://x.com/ThePurpleSim/status/2111946927356993788)

#### Tips

> Claude Code上でrufloを導入し、core/console/modsに分かれたプラグイン構成、npxコマンドでのMCP接続、適応メモリ、ベクターRAG統合を検証した。権限管理や状態共有が現場で実用的で、CI/CDやヘッドレス運用も視野に入る設計だと評価している — @aoi_ai_hack [出典](https://x.com/aoi_ai_hack/status/2111940686199337366)

> Claude Code単体でのセッションをまたぐ記憶の喪失や手動でのタスク分割という課題を、rufloの100以上のエージェントによるスワーム、AgentDBによる記憶、自動ルーティングで解決していると報告している — @Zen_with_AI [出典](https://x.com/Zen_with_AI/status/2111873695098732695)

#### ネガティブ

該当なし

### anomalyco/opencode

該当なし (取得した投稿はすべて別プロジェクト「OpenCode Console」のセキュリティ侵害に関する話題で、anomalyco/opencodeのデスクトップアプリや配布経路に関する反応は含まれていなかった)

### anthropics/claude-code

該当なし (Trending再浮上やnpmインストール非推奨化に言及した投稿は取得範囲に存在しなかった)

## ソース

- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)
- [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)
- [stablyai/orca](https://github.com/stablyai/orca)
- [ruvnet/ruflo](https://github.com/ruvnet/ruflo)
- [anomalyco/opencode](https://github.com/anomalyco/opencode)
- [anthropics/claude-code](https://github.com/anthropics/claude-code)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
