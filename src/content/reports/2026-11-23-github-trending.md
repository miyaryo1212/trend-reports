---
title: "Claude向けバグハント集とCursor公式プラグイン"
summary: "認可済みのバグバウンティと外部レッドチーム向けのClaude Codeスキル集「Claude-BugHunter」が全言語とPythonのTrendingで首位に入った。TypeScriptではCursorの公式プラグイン集が首位に入り、SuperpowersとCLI-Anythingも上位に並んだ。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-11-23

features:
  - "elementalsouls/Claude-BugHunter"
  - "cursor/plugins"
  - "obra/superpowers"
  - "HKUDS/CLI-Anything"
codex_review: "Superpowersの承認付き計画やCLI-Anythingの操作面整備は、モデル性能より地味な足回りが普及を左右することを示していて面白い。一方、83スキルのバグハント集は充実して見えるが、実戦での精度や誤検知の評価がなく、Trending首位だけでは実力を測れない。"
codex_importance: 3
---

## 公式アップデート

### elementalsouls/Claude-BugHunter

バグバウンティと外部レッドチーム作業向けのClaude Codeスキル集。全言語とPythonの両方のTrendingで1位に入っている。作者はSachin Sharma (ElementalSoul)。

- **規模**: 83スキル、15のスラッシュコマンド、公開済みのHackerOne報告681件から抽出したパターン (うち433件は個別に出典を記載) を24の脆弱性分類に整理している。リポジトリの短い説明文では「82スキル」と書かれており、README本文の83と食い違っている
- **4つの層**: 方法論と心構え (`bb-methodology`、`redteam-mindset`)、Webアプリの脆弱性分類ごとの `hunt-*` スキル58個、エンタープライズ基盤 (M365/Entra、Okta、vCenter、SSL-VPN機器、SharePoint、クラウドIAM) 向けのスキル、検証と報告 (`triage-validation`、`evidence-hygiene` など) で構成する。スキルは話題に応じて自動で読み込まれ、名前で呼び出す必要はない
- **導入方法**: Claude Codeのプラグインとして `/plugin marketplace add elementalsouls/Claude-BugHunter` → `/plugin install claude-bughunter@elementalsouls` で入れる方法と、クローンしてインストールスクリプトで `~/.claude/` にコピーする方法がある。端末から使う `cbh` CLIは `pipx` で単体でも入る。作業フォルダを作る `hunt` スキャフォルダはクローン版のみ
- **HackerOne MCP**: 公開報告の重複検索とプログラムのスコープ確認ができる。APIのユーザー名とトークンは任意で、非公開プログラムや自分の報告を読む場合にだけ必要
- **他のハーネス対応**: スキルはAgent Skillsの `SKILL.md` 形式で、OpenCode、OpenAI Codex CLI、Hermes Agent、Google AntiGravityにも `--all` でまとめて入れられる。`--burp-mcp` でBurp SuiteのMCPサーバーも各ハーネスに設定する。スラッシュコマンドと `/hunt` エンジンはClaude Code専用
- **対象範囲**: インターネットから到達できる外部の攻撃面に限る。社内のActive Directory攻撃、C2フレームワーク、侵入後の永続化や横展開、AV/EDR回避、バイナリ攻略などは設計上の対象外と明記している
- **認可**: 自分が所有する資産か、書面で診断の許可を得た資産 (バグバウンティの対象範囲、ペネトレーションテストの契約、CTF) が前提。提出前の「7-Question Gate」では対象がスコープ内かを確認する。未承認の標的への0-day悪用、マルウェア開発、大量標的化は除外している
- **Anthropicの安全策への言及**: Anthropicのモデルは攻撃的セキュリティツール開発を既定でブロックするため、認可済みの作業でも拒否されることがあるとして、無料の申請制「Cyber Verification Program (CVP)」への登録を案内している。また、Opus 5ではエクスプロイト生成やペネトレーションテストなど一部のリクエストがOpus 4.8に切り替わると説明し、防御目的の作業を偽装して分類器を回避するのではなくCVPに登録するよう求めている
- **ライセンス**: コードはMIT、スキルの方法論やドキュメントなどのコンテンツはCC BY 4.0。8スキルと15コマンドはshuvonsec/claude-bug-bountyから取り込んでいる
- **スポンサー**: ApiSmartとThreatWatch360

[ソース](https://github.com/elementalsouls/Claude-BugHunter)

### cursor/plugins

Cursorのプラグイン仕様と公式プラグインを収めるリポジトリ。TypeScriptのTrendingで1位に入っている。各プラグインはリポジトリ直下の独立したディレクトリで、`.cursor-plugin/plugin.json` のマニフェストを持つ。

- **エージェントのワークフロー系 (主なもの)**
  - `orchestrate`: 大きなタスクを並列のクラウドエージェントに分配する。計画役、作業役、検証役を置き、構造化した引き継ぎを行う
  - `advisor`: 大きな判断の前、行き詰まったとき、完了を宣言する前に、より強いモデルに相談させる
  - `thermos`: セキュリティと正確性の深い監査、厳しいコード品質の基準、並列サブエージェントによるブランチレビュー
  - `continual-learning`: 会話記録をもとに `AGENTS.md` を少しずつ更新する
  - `ralph-loop`: 「Ralph Wiggum」手法による反復的な自己参照ループ
  - `agent-compatibility`: リポジトリがエージェントで扱いやすいかをCLIでスキャンし、起動手順や検証手順、ドキュメントが実態と合っているかを監査する
  - `cli-for-agent`: エージェントが確実に実行できるCLIの設計パターン (フラグ、例付きヘルプ、エラー、冪等性、dry-run)
  - `pstack` (Lauren Tan) と、その上に作者の流儀を重ねた `dyl-stack` (Dylan Gattey)
  - そのほか `pr-review-canvas`、`docs-canvas`、`cursor-sdk`、`create-plugin`、`teaching`、`origin-apps` (Cursor Origin API向け) など
- **音声**: `grok-voice` はアプリにGrokの音声機能 (リアルタイムの音声対話、音声入力、読み上げ) を追加する
- **外部サービス連携**: Gmail、Google Drive/Docs/Sheets/Slides/Calendar、GitHub、Playwright、Salesforce、HubSpot、Teams、SharePoint、Power BI、Zoom、X、Interactive Brokers、S&P Globalなど、業務SaaSや金融サービスとの連携プラグインを多数収める

[ソース](https://github.com/cursor/plugins)

### obra/superpowers

コーディングエージェント向けのスキルフレームワーク兼ソフトウェア開発の手法。全言語のTrendingに入っている。

- **流れ**: エージェントはいきなりコードを書かず、まずユーザーが何をしたいのかを質問する。会話から仕様をまとめ、読み切れる長さに分けて提示する。承認後、実装計画を作る。計画は「やる気はあるがセンスも判断力もプロジェクトの文脈もなく、テストを嫌がるジュニアエンジニアでも従える」明確さを目標にし、red/greenのTDD、YAGNI、DRYを重視する。ユーザーが「go」と言うとサブエージェント駆動の開発が始まり、各タスクを処理してレビューしながら進む。数時間にわたり計画から外れず自律的に作業することも珍しくないとしている
- **スキルの起動**: スキルは自動で発動し、特別な操作は要らない
- **対応ハーネス**: Claude Code、Antigravity、Codex App、Codex CLI、Cursor、Devin CLI、Factory Droid、Gemini CLI、GitHub Copilot CLI、Grok Build CLI、Kimi Code、OpenCode、Pi、Qwen Code、Hermes Agent、Muse。ハーネスごとに個別にインストールする
- **Claude Codeでの導入**: Anthropicの公式マーケットプレイスから `/plugin install superpowers@claude-plugins-official` で入れられる。独自の `obra/superpowers-marketplace` も用意する
- **Antigravityでの導入**: `agy plugin install https://github.com/obra/superpowers`
- **商用サポート**: 企業向けの商用サポートやツール、利用額の管理をPrime Radiant (sales@primeradiant.com) が提供する

[ソース](https://github.com/obra/superpowers)

### HKUDS/CLI-Anything

既存のソフトウェアをAIエージェントが扱えるCLIに変換するフレームワーク。PythonのTrendingに入っている。香港大学のHKUDSが開発し、ライセンスはApache 2.0。

- **CLI-Hub**: `pip install cli-anything-hub` の後、`cli-hub install <name>` でコミュニティ製のCLIを検索、導入、管理する。PRがマージされるとHubに即時反映される
- **対象エージェント**: Pi、OpenClaw、nanobot、Cursor、Claude Codeなど
- **デモ**: 生成したCLIとプレビュー、ライブプレビュー、軌跡ループを使い、CAD、3Dシーン、図、ゲームプレイ、字幕などを作るデモを18アプリ分掲載している
- **技術仕様**: Python 3.10以上、Click 8.0以上。出力はJSONと人間向けの両形式。READMEのバッジでは2,461件のテストが通っているとしている
- **技術レポート**: arXiv:2606.03854
- **コミュニティ**: CLIハーネスを作るコントリビューターの登録と、対応してほしいソフトウェアの要望をIssueで受け付けている
- 収集データではREADMEが途中で切れており、最新のニュースや詳細な手順は含まれていない

[ソース](https://github.com/HKUDS/CLI-Anything)

## コミュニティの反応

### elementalsouls/Claude-BugHunter

#### ポジティブ

該当なし

#### Tips

> Claude Codeに83スキルを入れればバグハンティングを効率化できる一方、自分はまだ1件ずつ手作業で学んでいると対比している (中立的) — @XikCJY [出典](https://x.com/XikCJY/status/2124591330164879663)

#### ネガティブ

該当なし

### cursor/plugins

該当なし (検索結果なし)

### obra/superpowers

#### ポジティブ

> 累計32.3万スターでGitHub Trendingの2位 (1日883スター増) だと紹介し、「計画→仕様の承認→TDD」という整ったワークフローが支持されているとしている (好意的) — @KailouisYs [出典](https://x.com/KailouisYs/status/2124444318140449202)

> 最初にインストールすべきものの筆頭にSuperpowersを挙げ、計画、テスト、レビューの手法がClaude Codeユーザーの間で急速に広がっているとしている (好意的) — @danikkk_wqs [出典](https://x.com/danikkk_wqs/status/2123877089971425337)

#### Tips

> コードに着手する前にエージェントが要件を確認し、仕様を区切って見せ、承認後にred/greenのTDD計画を立てる流れは、そのまま自分のやり方に取り入れられると紹介している — @PromptToPR [出典](https://x.com/PromptToPR/status/2124609673391169564)

#### ネガティブ

該当なし

### HKUDS/CLI-Anything

該当なし (取得できた投稿はGitHub Trendingの紹介や概要の説明だけで、実際に使った感想や批評はなかった)

## ソース

- [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)
- [Claude-BugHunter ドキュメント](https://elementalsouls.github.io/Claude-BugHunter)
- [cursor/plugins](https://github.com/cursor/plugins)
- [obra/superpowers](https://github.com/obra/superpowers)
- [Superpowers (Claude公式プラグインマーケットプレイス)](https://claude.com/plugins/superpowers)
- [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)
- [CLI-Hub](https://clianything.cc/)
- [CLI-Anything 技術レポート (arXiv:2606.03854)](https://arxiv.org/abs/2606.03854)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
