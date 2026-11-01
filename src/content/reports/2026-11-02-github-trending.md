---
title: "エージェントのメモリ・スキル・操作UIが上位に"
summary: "Claude Code等のエージェントに永続メモリを付けるclaude-mem、Matt Pocockのスキル集、複数エージェントを一括操作するT3 CodeがTrending上位に並んだ。学習用のDeepTutorはv1.7.1を公開した。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-11-02

features:
  - "thedotmack/claude-mem"
  - "mattpocock/skills"
  - "HKUDS/DeepTutor"
  - "pingdotgg/t3code"
  - "Donchitos/Claude-Code-Game-Studios"
  - "THU-MAIC/OpenMAIC"
  - "a2ui-project/a2ui"
  - "lightpanda-io/browser"
codex_review: "派手なモデル刷新より、記憶や操作性といった「毎日使う不便」を埋める道具が伸びているのは納得感がある。特に永続メモリは便利さと情報管理の責任が表裏一体で、導入の信頼設計まで含めて評価したい。"
codex_importance: 3
---

## 公式アップデート

### thedotmack/claude-mem

コーディングエージェントにセッションをまたぐ永続メモリを付けるツール。全言語とTypeScriptの両方のTrendingで1位に入っている。Apache-2.0ライセンス。READMEのバージョン表記はv15.8.0。

- **仕組み**: セッション中のツール使用を自動で記録し、AIで圧縮・要約して、次のセッションに関連するコンテキストとして注入する。構成要素は次のとおり
  - ライフサイクルフック (SessionStart、UserPromptSubmit、PreToolUse、PostToolUse、Stop、SessionEnd)
  - Bunで管理するローカルのWorkerサービス (HTTP API、Webビューア)
  - SQLite (FTS5) とChromaベクトルDBを組み合わせたハイブリッド検索
- **3段階の検索**: MCPツールの `search` (1件あたり約50〜100トークンの索引)、`timeline` (前後の経緯)、`get_observations` (1件あたり約500〜1,000トークンの詳細) を順に使う。詳細を取得する前に絞り込むことで、トークンを約10分の1に節約できるとしている
- **対応環境**: Claude Code (プラグインマーケットプレイス経由も可)、OpenCode 1.3.4以降、T3 Code (CodexとClaude Codeのプロバイダ)、Antigravity CLI、OMP (Oh My Pi)、Pi、DeepSeek Harness、OpenClawゲートウェイ、Grok Bot
- **Grok Bot**: ホスト側にフックがないため、チャットのログファイルを監視する方式をとる。既定はホスト型メモリのCMEM Proで、ローカル処理は `--provider host` で選ぶ。`decision`、`bugfix`、`security_alert`、`sensitive` に分類された記録を、ボットの `memory/log/YYYY-MM.md` に日付付きで追記する試験機能がある
- **インストール時のサインイン**: `npx claude-mem install` の後、ブラウザでのサインインを求められる。サインインすると、claude-mem側のobserverを30日間無料で使える。メモリ処理をユーザーのAnthropicプランの外で行うので、プランの利用枠を節約できるとしている。試用期間が終わると、購読しない限りAnthropicプランでの処理に戻る。`--provider` の明示、`CLAUDE_MEM_ONLINE_OPTIN=false`、CIなどの非対話環境では、サインインを省略できる
- **その他の機能**: TeamBrain (任意で使えるチーム共有ワークスペース)、`<private>` タグによる保存除外、スクリーンショットの保存 (既定は無効)、Cloud Sync、日本語の観測記録を出す `code--ja` モード
- **注意書き**: `npm install -g claude-mem` で入るのはSDKだけで、フックとWorkerは登録されない
- **トークン**: READMEの末尾に、第三者が発行したトークン「CMEM」を作者が公式に支持していると書かれており、BASEチェーンのコントラクトアドレスが載っている

[ソース](https://github.com/thedotmack/claude-mem)

### mattpocock/skills

Matt Pocockが日常的に使っているエージェントスキル集。全言語Trendingに入っている。「バイブコーディングではなく、実際のエンジニアリングのためのスキル」をうたっている。

- **方針**: GSD、BMAD、Spec-Kitのようにプロセス全体を担う手法は、利用者の制御を奪い、プロセス内のバグを直しにくくすると指摘する。そのため、各スキルを小さく、改造しやすく、組み合わせられる形にしている。どのモデルでも動くとしている
- **主なスキル**:
  - `/grill-me`: エージェントに詳しい質問をさせ、作るものについて認識を揃える。コード以外の用途向け
  - `/grill-with-docs`: `/grill-me` の機能に加え、プロジェクト固有の用語集を作り、判断の経緯をADRに残す。用語を共有するとエージェントの冗長な説明が減り、命名が揃い、思考に使うトークンも減るとしている
  - `/tdd`: red-green-refactorのループを回させる
  - `/triage`: ラベルを使ってチケットを振り分ける
- **導入方法**:
  - Claude Code: `claude plugin install mattpocock-skills@claude-plugins-official`
  - Codex、GitHub Copilot (CLIとVS Code): プラグインマーケットプレイスから入れる
  - Gemini CLI: `gemini skills install` で入れる
  - その他のエージェント: `npx skills@latest add mattpocock/skills`
  - プラグイン版は自動で更新され、skills.sh版は編集できるファイルとしてコピーされる。両方を入れるとスキルが重複するため、エージェントごとにどちらか一方を選ぶよう案内している
- **初期設定**: リポジトリごとに一度 `/setup-matt-pocock-skills` を実行する。使うイシュートラッカー、トリアージ用のラベル、ドキュメントの保存先を聞かれる

[ソース](https://github.com/mattpocock/skills)

### HKUDS/DeepTutor

香港大学HKUDSによる、エージェントネイティブな個別学習ワークスペース。PythonのTrendingで1位に入っている。Apache-2.0ライセンス。

- **v1.7.1 (2026年11月1日)**: デスクトップ版のプレビュー、対応言語の拡大、パスワード変更、内容をチェックした動画レッスン、Ankiとカレンダーへのエクスポート、プロバイダの追加、信頼性の幅広い改善
- **v1.7.0 (2026年10月28日)**: モジュール単位のインストール、学習ワークスペースの刷新、Ditoを使うブロック型ノートブック、ナレーション付き動画レッスン、再開できる埋め込み処理のチェックポイント
- **インストール**: `pip install -U "deeptutor[full]"` でWebアプリとCLIの全体が入る。`deeptutor` だけを指定すると、コア部分だけが入る
- **デスクトップ版**: 「Open DeepTutor」はPythonとNode.jsを同梱し、macOS (Apple Silicon、Intel) とWindows x64に対応する。v1.7.0のリリースには含まれず、`dev` ブランチのGitHub Actionsの成果物として配布している。ダウンロードにはGitHubへのサインインが必要で、成果物は7日で失効する。Windows版は署名されていない
- **主な機能**: Chat、Quiz、Research、Visualize、Solve、Mastery Path、Readingなどのモードがセッションのコンテキストを共有する。知識ベースはLlamaIndex、PageIndex、GraphRAG、LightRAGで構築できる。Claude Code、Codex、Grok CLIなどのエージェントに作業途中で相談できる。メモリはL1 (トレース)、L2 (事実)、L3 (統合) の3層構造で、内容を確認・編集できる
- **論文**: arXiv 2604.26962

[ソース](https://github.com/HKUDS/DeepTutor)

### pingdotgg/t3code

手元のマシンで動くコーディングエージェントを操作する「エージェントハーネスのコントロールサーフェス」。TypeScriptのTrendingに入っている。

- **対応エージェント**: Codex、Claude Code、Cursor、Grok Build、OpenCode、Google Antigravity、fx。既存の契約をそのまま使い、各CLIでの認証が済んでいれば操作できる。AntigravityだけはCLIが不要で、設定画面からインストールとGoogleサインインを行う
- **クライアント**: モバイルアプリ (iOS、Android)、Webアプリ、Electron製のデスクトップアプリ
- **導入**: `curl -fsSL https://t3.codes/install.sh | sh` を実行してから、`t3` でサーバーとローカルのWebアプリを起動する。`t3 service install` で常駐させられる。インストールせずに試すなら `npx t3@latest` を使う。デスクトップ版はwinget、scoop、Homebrew、.deb、AUR、nixpkgsで配布している
- **位置付け**: 何かを売るためのものではないと説明している。Codexのデスクトップアプリ、Conductor、Claude Desktop、Cursor Glassに刺激を受けたが、どれも求める水準に届かなかったので作ったという。方向性を誤ったらフォークできるよう、オープンにしているとしている
- **注意書き**: 「非常に初期の段階で、バグがあると思ってほしい」としている。大きな機能のコントリビューションはまだ受け付けていない
- **ドキュメント**: スマートフォンなどからのリモートアクセス、MCP経由でClaude Code・Codex・ChatGPTなどの外部エージェントを接続する方法、CodexとClaudeの複数アカウントの扱いを解説している

[ソース](https://github.com/pingdotgg/t3code)

### Donchitos/Claude-Code-Game-Studios

Claude Codeのサブエージェント群でゲーム開発スタジオを構成するテンプレート。Trendingに入っている。収集データにREADMEの本文は含まれていない (規模などはコミュニティの反応を参照)。

[ソース](https://github.com/Donchitos/Claude-Code-Game-Studios)

### THU-MAIC/OpenMAIC

清華大学による、マルチエージェントで対話型のAI授業を生成するプラットフォーム。Trendingに入っている。収集データにREADMEの本文は含まれていない。

[ソース](https://github.com/THU-MAIC/OpenMAIC)

### a2ui-project/a2ui

エージェントがUIを宣言的に生成・描画するためのオープンプロトコル。Trendingに入っている。収集データにREADMEの本文は含まれていない。

[ソース](https://github.com/a2ui-project/a2ui)

### lightpanda-io/browser

AIエージェントや自動化の用途に向けた軽量のヘッドレスブラウザ。Trendingに入っている。収集データにREADMEの本文は含まれていない。

[ソース](https://github.com/lightpanda-io/browser)

## コミュニティの反応

### mattpocock/skills

#### ポジティブ

> Claudeのスキルをインストール数とGitHubスター数で整理した投稿で、grill-meやimprove-codebase-architectureなど、このリポジトリのスキルが上位に入った。「rules, not hacks」という整理が共感を集め、23いいね・27ブックマークを得ている (好意的) — @Slonski_rt [出典](https://x.com/Slonski_rt/status/2116991981419438242)

> Spec Kitは公開から時間が経っており、すでにこのリポジトリに取って代わられたと指摘している (好意的) — @tomvanzummeren [出典](https://x.com/tomvanzummeren/status/2116977130735308934)

#### Tips

> 新機能の計画を `/grill-me` から始め、その後はエージェントに任せて、自動レビューと修正まで回すワークフローを共有している。週次のアーキテクチャチェックも組み込んでいる — @gabe_ragland [出典](https://x.com/gabe_ragland/status/2116984572877603263)

> Geminiの無料モデル (Flash) と有料モデルに同じ `/grill-me` のプロンプトを与えたところ、grill-meの用途では基本モデルのほうが良かったと報告している (中立的) — @jeanpierre_sh [出典](https://x.com/jeanpierre_sh/status/2117005107606835687)

### Donchitos/Claude-Code-Game-Studios

#### ポジティブ

> 1つのリポジトリでClaude Codeのサブエージェントによるゲームスタジオ全体を動かせると紹介している。49エージェント、74スキル、15フックで構成され、Godot 4、Unity、UE5向けのセットがある。cloneして `claude` を起動し、`/start` と打てば始まる。MITライセンス。作者自身のテストでは、30ドキュメント構成のビルドが最下位だったことにも触れている — @yourtowhid [出典](https://x.com/yourtowhid/status/2117017017178067420)

> 49人規模のゲーム開発チームを1つのClaude Codeセッションに収めたと紹介し、「ハードウェア、ソフトウェアの時代を過ぎ、Thinkwareの時代に入った」と評している (好意的、トルコ語) — @haktanakdag [出典](https://x.com/haktanakdag/status/2117010141711081917)

### thedotmack/claude-mem

該当なし

### HKUDS/DeepTutor

該当なし

### pingdotgg/t3code

該当なし (取得できた投稿はTrendingの共有、リリースの比較、プロジェクトの紹介だけで、実際に使った感想や評価はなかった)

### THU-MAIC/OpenMAIC

該当なし

### a2ui-project/a2ui

該当なし

### lightpanda-io/browser

該当なし

## ソース

- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)
- [mattpocock/skills](https://github.com/mattpocock/skills)
- [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)
- [DeepTutor v1.7.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.7.1)
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code)
- [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios)
- [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)
- [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui)
- [lightpanda-io/browser](https://github.com/lightpanda-io/browser)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
