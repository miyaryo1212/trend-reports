---
title: "エージェントのレビュー基盤とWeb標準スキルが上位に"
summary: "コーディングエージェントの計画や差分をブラウザで注釈して返すPlannotatorが全言語とTypeScriptのTrendingで首位に入った。Google Chromeの「Modern Web Guidance」のソースリポと、個人投資家向けのClaude Skills集も上位に入った。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-11-16

features:
  - "backnotprop/plannotator"
  - "GoogleChrome/modern-web-guidance-src"
  - "tradermonty/claude-trading-skills"
codex_review: "エージェントを賢くする話が続くなか、作業中の判断を人が後から返せるレビュー基盤に勢いがあるのは面白い。GoogleのWeb標準スキルも実務的だが、現状はスター数が先行しており、品質改善への効果はこれから見たい。"
codex_importance: 3
---

## 公式アップデート

### backnotprop/plannotator

AIコーディングエージェントの計画、仕様書、HTML、コード差分をブラウザで注釈し、フィードバックをエージェントに返すローカルのレビューツール。全言語とTypeScriptの両方のTrendingで1位に入っている。Apache 2.0とMITのデュアルライセンス。

- **対応エージェント**: Claude Code、Codex、Copilot CLI、Gemini CLI、OpenCode、Kiro、Droid、Amp、DeepSeek Harness、Pi。T3 CodeのClaudeスレッドにも対応する
- **新機能「Plannotator Inbox」**: 複数のエージェントが作業を続けながら、メッセージ、質問、ファイル、ガイド付きレビューを1つのローカルウィンドウに残す仕組み。ユーザーはクリックで質問に答え、ファイルに注釈して、都合のよいときに送信する。待っている間もエージェントのセッションを占有せず、返信は質問したセッションに届く
  - 起動は `plannotator inbox`
  - Claude Code、Pi、OpenCodeはプラグイン経由で接続し、返信が次のターンとして届く。ほかのエージェントは `plannotator inbox mcp` でMCP経由で接続する
  - Grok Bot、Muse、Hermes、OpenClawといった個人アシスタントにも対応するとしている
- **計画レビュー**: エージェントが計画を作ると、各ハーネスのフックからレビュー画面が自動で開く。Claude Codeでは `ExitPlanMode` の `PermissionRequest` フックで起動する。承認するとエージェントが作業を続け、却下すると構造化したフィードバックが送られる。修正後の計画は差分で表示される
- **コードレビュー**: `/plannotator-review` で、コミット前の変更、GitHubのPR、GitLabのMRをレビューする。Git、GitButler、Jujutsu (`jj`)、Perforce (`p4`) に対応する。`--patch-file` で手元のunified diffも読み込める
- **注釈**: `/plannotator-annotate` でローカルのMarkdown、フォルダ、URL、HTML (`--render-html` で描画したまま) に注釈できる。`/plannotator-last` はエージェントの直前の返信を対象にする
- **AI機能**: レビュー中の内容についてAIに質問したり、差分にコメントを投稿するAIレビューを走らせたりできる。`PLANNOTATOR_AI=disabled` で無効にできる
- **ターミナル版**: Herdr向けプラグイン「Herdr Annotate」と、単体で動く「Plannotator TUI」を用意する。注釈は同じデータディレクトリに保存される
- **Claude Codeとの連携**: Claude Code 2.1.287以降では、計画レビュー、コードレビュー、注釈の間もClaudeを待たせず、判断は後からメッセージとして届く。`PLANNOTATOR_CLAUDE_MOD=0` で従来の方式に戻せる
- **連携先**: VS Code拡張、Obsidian、Bear、Notion (承認した計画の保存先)
- **プライバシー**: 利用状況のテレメトリーは収集しない。計画、差分、注釈などは既定でローカルに保存する。画面を開くたびにGitHubへ最新リリースを確認しに行き、これを止める設定は現時点ではない
- **共有**: 小さなMarkdownはURLフラグメントに圧縮して共有する (暗号化はされない)。大きなMarkdownやHTMLはAES-256-GCMで暗号化してから短縮リンクサービスに上げ、7日で失効する。オープンソースのリンク共有は非推奨に移る方針で、チーム共有はホスト型の「Workspaces」が主軸になる
- **リモート環境**: SSHセッションを検出すると固定ポート19432に切り替える。リモートモードでは認証なしで全インターフェースで待ち受けるため、信頼できないネットワークにポートを開けないよう注意書きがある
- **セキュリティ**: リリースごとにSHA256ファイルを付ける。v0.17.2以降はSLSAのビルド来歴証明があり、CycloneDX形式のSBOMとその証明も付ける。インストール時の検証は `--verify-attestation` で有効にする
- **インストール**: `curl -fsSL https://plannotator.ai/install.sh | bash` (WindowsはPowerShell用スクリプト)。インストール済みのエージェントを検出し、フック、スキル、スラッシュコマンドを設定する。`--minimal` ではバイナリだけを入れる

[ソース](https://github.com/backnotprop/plannotator)

### GoogleChrome/modern-web-guidance-src

Google Chromeの「Modern Web Guidance」のソースリポジトリ。全言語とTypeScriptのTrendingに入っている。配布用リポジトリ (GoogleChrome/modern-web-guidance) の中身を作成、調整、評価するためのコードとドキュメントを収める。

- **Modern Web Guidanceとは**: Webプラットフォームの専門知識、ベストプラクティス、ブラウザ互換性データをコーディングエージェントに組み込むスキル集。古い書き方を避け、現在のWebプラットフォームの機能を使った解決策にエージェントを誘導することを狙う
- 収集データではREADMEの本文が途中で切れており、収録スキルの詳細は含まれていない

[ソース](https://github.com/GoogleChrome/modern-web-guidance-src)

### tradermonty/claude-trading-skills

株式の個人投資家とトレーダー向けのClaude Skills集。PythonのTrendingで1位に入っている。MITライセンス。作者が自分の売買の手順を改善するために作ったもので、日本語のREADMEもある。

- **位置付け**: 時間の限られた個人投資家が対象。長期投資、ETF、配当株を中核にして、相場の条件がよいときだけスイングトレードを補助的に行う使い方を想定する。売買の判断をAIに任せるのではなく、相場の確認、リスク管理、売買計画、記録、振り返りを構造化することが目的としている。シグナル配信、自動売買、スキャルピングは対象外
- **ワークフロー**: `workflows/` に、使うスキル、判断の関門、成果物を順に定義したマニフェストを置く
  - `market-regime-daily`: 15分の毎日の相場確認 (有料APIなしでも可)
  - `core-portfolio-weekly`: 長期ポートフォリオの週次レビュー (Alpacaが必要)
  - `swing-opportunity-daily`: リスクが許容される場合だけスイングの候補を探す
  - `trade-memory-loop`: 決済したトレードの記録と振り返り
  - `monthly-performance-review`: 月次の成績確認とルールの見直し
- **スキルの分野**: 相場環境、コアポートフォリオ、配当、スイング候補、売買計画、売買記録、戦略研究、上級者向けの8分野。たとえばVCPやCANSLIMのスクリーナー、ポジションサイズの計算、損失が続いた場合に新規の取引を止める「Drawdown Circuit Breaker」、計画のない取引や過大な取引を止める「Pre-Trade Discipline Gate」、Jason Shapiro流の逆張り手法を段階ごとに分けたスキル群がある
- **有料APIなしの始め方**: `market-breadth-analyzer`、`uptrend-analyzer`、`position-sizer`、`trader-memory-core`、`signal-postmortem` の5つは、公開CSV、チャート画像、ローカルファイルで動く。FMP、FINVIZ Elite、Alpacaは特定のワークフロー向けの任意の連携先
- **導入方法**: Claudeのウェブアプリでは、Releasesから `.skill` ファイルをダウンロードし、ハッシュを確かめてからアップロードする。Claude Codeでは、スキルのフォルダを `~/.claude/skills/` またはプロジェクトの `.claude/skills/` にコピーする
- **関連プロジェクト**: これらのスキルをHermesのプロファイルにまとめた「Hermes Trading Research Agent Work Package」も公開している。`/pre-market-routine` などのコマンドで使うが、注文は出さない
- **注意書き**: 教育、研究、手順の改善が目的で、投資助言ではないと明記している

[ソース](https://github.com/tradermonty/claude-trading-skills)

## コミュニティの反応

### GoogleChrome/modern-web-guidance-src

#### ポジティブ

> 1日で1,220スター増え、累計7,016スターになったと紹介している。Chrome、Edge、Firefox、MDNの各チームが共同でメンテナンスしている点と、legacy-scan機能を評価している (好意的) — @xiao_wang24004 [出典](https://x.com/xiao_wang24004/status/2122094806604321151)

> 2026年11月16日のGitHubスター急増トップ10で4日連続の1位だと報告している。AIエージェント関連のプロジェクトが上位を占める中でも目立つとしている (好意的) — @sotongshi [出典](https://x.com/sotongshi/status/2122091817630154907)

> 今週のGitHubトレンドで1,200スター増えたとして、最新のWeb仕様に追従するためのツールとして紹介している (中立的) — @JamesAI [出典](https://x.com/JamesAI/status/2122080955154448541)

#### Tips

> 前週の「Build Log #32」で、エージェント向けのスキルとして実際にインストールして試したと報告している — @themuscleai [出典](https://x.com/themuscleai/status/2122040672999875053)

#### ネガティブ

該当なし

### backnotprop/plannotator

該当なし (取得できた投稿は公式アカウントの機能告知、スター数の集計、ツール説明の共有だけで、実際に使った感想はなかった)

### tradermonty/claude-trading-skills

該当なし (取得できた投稿はリポジトリの言及、Trendingの紹介、概要の共有だけで、実際に使った感想や批評はなかった)

## ソース

- [backnotprop/plannotator](https://github.com/backnotprop/plannotator)
- [plannotator.ai](https://plannotator.ai)
- [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src)
- [Modern Web Guidance (Chrome for Developers)](https://developer.chrome.com/docs/modern-web-guidance)
- [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)
- [Claude Trading Skills ドキュメント](https://tradermonty.github.io/claude-trading-skills/)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
