---
title: "Claude Opus 4.7リリース、xhigh推論強度と/ultrareview登場"
summary: "最上位モデルClaude Opus 4.7が全製品・APIで提供開始。Claude Code v2.1.111ではxhigh推論レベル、/ultrareview、/less-permission-prompts、MaxプランAuto modeなど大型機能が一挙追加。前日v2.1.110では/tui・/focus・Push通知ツールも投入。"
importance: 5
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-17
features:
  - "Claude Opus 4.7"
  - "Claude Opus 高解像度画像対応"
  - "Cyber Verification Program"
  - "Claude API Task budgets (beta)"
  - "Claude Code /ultrareview"
  - "Claude Code Opus 4.7 xhigh effort"
  - "Claude Code /effort インタラクティブスライダー"
  - "Claude Code Auto mode for Max subscribers"
  - "Claude Code /less-permission-prompts skill"
  - "Claude Code /tui コマンド"
  - "Claude Code /focus コマンド"
  - "Claude Code Push notification tool"
  - "Claude Code Auto (match terminal) theme"
  - "Claude Code PowerShell tool (Windows)"
  - "Claude Code Read-only bash glob/cd許可"
  - "Claude Code OTEL_LOG_RAW_API_BODIES"
  - "Anthropic What 81,000 People Want from AI"
  - "Anthropic Claude on Mars"
codex_review: "モデル本体より、/ultrareviewやtask budgetsのような“運用の詰め”が前に出てきたのが面白い。派手さはあるが本質は開発現場への定着を急ぐ一手で、業界全体でもかなり重要だと思う。"
codex_importance: 4
---

## 公式アップデート

### Claude Opus 4.7 リリース

最上位フラッグシップモデル「Claude Opus 4.7」が全Claude製品・API・Amazon Bedrock・Google Cloud Vertex AI・Microsoft Foundryで提供開始。価格は入力$5/出力$25（per 1Mトークン）。前世代Opus 4.6比でコーディング・視覚理解・長文推論が強化されている。

[Anthropic News](https://www.anthropic.com/news)

### Claude Opus 高解像度画像対応

入力画像の長辺が従来比3倍超となる最大2,576px（約3.75MP）まで拡張。スクリーンショットや図表の細部まで読み取り可能に。

### Cyber Verification Program

高リスクなサイバーセキュリティ要求を自動ブロックする一方、正当な研究者向けに検証プログラムを新設。悪用抑止と研究用途の両立を図る取り組み。

### Claude API Task budgets (beta)

長時間エージェント実行のコスト・トークン上限を制御できるAPI機能をベータ提供開始。暴走コストの抑制に有効。

### Claude Code v2.1.112

2026-04-16リリース。Auto mode時に「claude-opus-4-7 is temporarily unavailable」エラーが出る問題を修正するホットフィックス。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.112)

### Claude Code v2.1.111

2026-04-16リリース。今週最大規模のアップデート。主な新機能:

- **Opus 4.7 xhigh effort**: `high` と `max` の間に位置する新推論強度レベル。`/effort`、`--effort`、モデルピッカーから選択可能
- **`/effort` インタラクティブスライダー**: 引数なしで呼ぶと矢印キー操作のスライダーUIが起動
- **Auto mode for Max subscribers**: Opus 4.7利用時にMaxサブスクライバー向けAuto modeを提供。`--enable-auto-mode` フラグ不要化
- **`/ultrareview`**: クラウド上で並列マルチエージェントによる包括的コードレビューを実行。PR番号指定も可能
- **`/less-permission-prompts` skill**: 読取り専用Bash/MCPツール呼び出しをトランスクリプトから抽出し、`.claude/settings.json` の許可リスト案を提示
- **Auto (match terminal) theme**: 端末のダーク/ライト設定に自動追従する新テーマ
- **PowerShell tool (Windows)**: 段階展開開始。`CLAUDE_CODE_USE_POWERSHELL_TOOL` でopt-in/out
- **Read-only bashのglob/cdプリフィックス許可**: `ls *.ts` や `cd <dir> && ...` が権限プロンプトなしで実行可能に
- **`OTEL_LOG_RAW_API_BODIES`**: APIリクエスト/レスポンス全文をOpenTelemetryログに出力する環境変数

その他多数のバグ修正とUI改善。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.111)

### Claude Code v2.1.110

2026-04-15リリース。主な新機能:

- **`/tui` コマンド**: 会話を維持したままfullscreenレンダリングモードへ切替
- **`/focus` コマンド**: `Ctrl+O` から分離され、フォーカスビュー切替専用コマンドに
- **Push notification tool**: Remote Control有効時にClaudeがモバイルへPush通知を送信可能
- **`autoScrollEnabled` config**: fullscreen時の会話オートスクロール無効化設定
- **PreCompact hook**: 圧縮をブロックできるhookサポート追加
- **Hardened "Open in editor"**: 信頼できないファイル名からのコマンドインジェクション対策

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.110)

### Anthropic: "What 81,000 People Want from AI"

159か国・80,508人のClaudeユーザへの大規模質的調査レポートを公開。AIに対する一般ユーザの期待と利用実態を可視化。

### Anthropic: Claude on Mars

Claude CodeがNASA Perseveranceローバーの航法経路をAI生成し、Mars上で実走行に成功した事例を公開。

## コミュニティの反応

### Claude Code /ultrareview

#### ポジティブ

> Claude Opus 4.7の新機能として/ultrareviewを挙げ、開発者の監督時代終了と高く評価。Anthropicの強さを称賛 — @kloss_xyz

> Claude Codeの新/ultrareviewコマンドは本物で優秀、変更点をレビューし慎重なレビュアーが見つける問題を指摘すると絶賛 — @shaunralston

> Claude Codeの/ultrareviewコマンドがPRレビューを劇的に変えそうで、long-running taskの扱いも向上し試す価値あり — @mine_take

> 新/ultrareviewは現在のブランチ変更に対して深いマルチエージェントコードレビューを実行し、偽陽性をフィルタリングして確認された問題をランク付け — @robzolkos

> 新/ultrareviewコマンドは変更を読み込み慎重な人間レビュアーが捉えるバグや設計問題をフラグ立て。Pro/Maxユーザー3回無料で試せる — @vits99_

### Claude Code Auto mode for Max subscribers

#### ポジティブ

> Claude CodeのMaxプランにAutoモードがようやく追加され、待ち望んでいた機能が使えるようになった — @A7_data [X](https://x.com/i/status/2044810090453340190)

> Claude CodeにOpus 4.7が実装され、Maxユーザー向けAuto modeが利用可能になり、長時間タスクがスムーズに — @hiragram [X](https://x.com/i/status/2044803710719762753)

> Claude Code CLIのauto mode for Max usersにより、permission promptsなしでfeature specを任せられるのが大きなunlock — @ModernGrindTech [X](https://x.com/i/status/2044808546718535756)

#### ネガティブ

> Claude Codeのauto modeでnpmコマンドが通らず、一度解除すると復帰できないのが困る — @gamemangaanime [X](https://x.com/i/status/2044836412516909199)

> Claude Codeでauto modeがオファーされず、docsではMaxユーザー不可とあり使えない — @EnbyBell [X](https://x.com/i/status/2044796409287766521)

#### Tips

> Claude CodeのAuto modeはツールコールを自動チェックし、安全なものは実行、リスキーなものはブロック。長時間タスクに最適で、isolated environments推奨 — @hyuki [X](https://x.com/i/status/2044880487731314777)

### Claude Code /focus コマンド

#### ポジティブ

> NO_FLICKERモードと最近追加されたFocusモードの組み合わせでClaude Codeの画面チラつきがほぼなくなり、認知負荷が減っている — @oikon48 [X](https://x.com/i/status/2043845119976313026)

> Claude Code 2.1.110で/tui fullscreenモード時に/focusコマンドが有効になり、TUIの表示を切り替えられるようになった — @oikon48 [X](https://x.com/i/status/2044591405243441276)

> Ctrl+OのFocus Viewで画面がプロンプト・ツールサマリ・最終結果だけになり、AIの確認作業が秒単位で終わる革命的な機能 — @MakeAI_CEO [X](https://x.com/i/status/2042542454113443952)

> Claude Codeの新機能Focus View (Ctrl+O)でプロンプト・ツール概要・最終結果だけ表示され、ターミナル情報過多が解消される — @toki_smilax [X](https://x.com/i/status/2042730005285998688)

> Focus View (Ctrl+O)は長い会話でノイズを消して本題だけ表示でき、個人開発の集中力が向上する — @miraijin_shogo [X](https://x.com/i/status/2044755452794486908)

### Claude Code Push notification tool

#### Tips

> Claude Code 2.1.110のアップデートでプッシュ通知ツールが追加され、Remote Control有効時にClaudeがモバイルアプリへプッシュ通知を送れるようになった — @oikon48 [X](https://x.com/i/status/2044580465387213155)

> Claude Code v2.1.110でRemote Control経由のモバイルプッシュ通知ツールが新たに追加され、長時間タスク実行中にスマホへ完了通知が届く運用が現実的に — @shima0hide [X](https://x.com/i/status/2044577938469994653)

> 新しいPushNotificationツールが追加され、Remote Control使用時に端末内およびモバイルへ通知が可能で、agentPushNotifEnabled設定が必要 — @ClaudeCodeLog [X](https://x.com/i/status/2044545476104421624)

> Claude Codeの/remote-control機能を使い、外出先から家PCのセッションをスマホで操作可能で、開発の続きやデプロイをスマホだけで完結でき便利 — @roy_BIRDMAN [X](https://x.com/i/status/2044656394864140421)

> 外出する度にClaude Codeで/remote-controlを実行し、スマホからビルドを継続でき、仕事の仕方が大きく変わった — @joncphillips [X](https://x.com/i/status/2044768459951591671)

### Claude Opus 4.7 比較・検証

#### Tips

> 【検証】Claude Opus 4.7は本当に"世代的進化"なのか？Opus 4.6・Sonnet 4.6・GPT-5.4・Gemini 3.1 Proと徹底比較 — @rikiza1989 [Qiita](https://qiita.com/rikiza1989/items/2889bebbdccf36e95a16)

### Claude Code v2.1.111 / v2.1.112 解説

#### Tips

> 今日のClaude Code v2.1.112 リリース｜毎日Changelog解説。Auto mode + Opus 4.7のホットフィックス — @moha0918_ [Qiita](https://qiita.com/moha0918_/items/6a21a6b76828fc7529af)

> 今日のClaude Code v2.1.111 リリース｜毎日Changelog解説。xhigh推論レベル、/effortスライダーUI、/ultrareview、/less-permission-prompts — @moha0918_ [Qiita](https://qiita.com/moha0918_/items/2c321dfbb6a3b87a4f4e)

### Claude Code Routines（前回から継続）

#### Tips

> Claude Code の Routines で dotfiles の設定を自動改善する。最新情報の収集からPR作成までクラウド上で自動実行 — @WorldDownTown [Zenn](https://zenn.dev/genda_jp/articles/f425cc7354f608)

> dependabot の PR、Claude Code の Routines で自動マージしてみた。CI通過後レビュー付きで自動マージする仕組み — @luoxi [Zenn](https://zenn.dev/luoxi/articles/claude-desktop-routines-deps-automerge)

> AIに"おつかい"を頼む時代──Claude Codeの新機能ルーチンが変える、繰り返し仕事のなくし方 — @ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/8dde5afe010f18)

> Claude Codeの定期実行、結局どれ使えばいいの？ 3機能を整理する（Routines・/loop・Desktop Scheduled Tasks） — @Lark [Zenn](https://zenn.dev/lark1115/articles/064e2e60c47619)

### Claude Code 永続メモリ・長期記憶

#### Tips

> Claude Codeに永続メモリを追加する「claude-mem」を実際に導入してみた — 自作hook版との比較 — @kanta13jp1 [Qiita](https://qiita.com/kanta13jp1/items/d157ccf8a081f14dcd79)

> Claude Codeに長期記憶を持たせたら、開発壁打ちが激変した話 — @FROM_AI _UNIQUE [Zenn](https://zenn.dev/nup/articles/20260326-9a43417f4ffb)

### Claude Code CLAUDE.md設計

#### Tips

> CLAUDE.mdを「置くだけ」で終わっていないか — 実運用で磨いた設計パターン7選 — @今井政和 [Zenn](https://zenn.dev/orectic/articles/claude-code-claude-md-design-patterns)

> Claude Codeを本気で使いこなすための"設計思想"。CLAUDE.md / Skills / Rules / Agents の4つの柱 — @やまと [Zenn](https://zenn.dev/yamato65535/articles/9cd7ff1652130c)

### Claude Code × Codex 連携

#### Tips

> Claude CodeからCodexを呼び出す3つの方法を整理した。CLIモードとASPモードの違い — @ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

> Claude Code + Codex + Devin Review の3者レビューをローカルで回す仕組みを作った — @konu96 [Zenn](https://zenn.dev/dely_jp/articles/3a9a48a242ebcf)

### Claude Code マルチインスタンス・並行開発

#### Tips

> Claude Code マルチインスタンス並行開発で WEB版 を廃止した話 — 3インスタンス制への復帰 — @kanta13jp1 [Qiita](https://qiita.com/kanta13jp1/items/c8ec80b822d5e41897a9)

### Claude Code Hooks × MCP

#### Tips

> Claude Code Hooks × MCPカスタムサーバーで個人開発の完全自動化パイプラインを構築した話 — @ヨコタナオヤ [Zenn](https://zenn.dev/correlate_dev/articles/claude-code-hooks-mcp)

> MCPサーバー開発におけるTool数の上限について考える — @mizuki901 [Zenn](https://zenn.dev/ekispert_api/articles/upper-limit-on-mcp-server-tools)

### Claude Code AWS Bedrock併用

#### Tips

> Claude CodeをAWS Bedrockで使いながら、エイリアスでMaxプランを呼び出す — @安田学 [Zenn](https://zenn.dev/chot/articles/bcc68893a54c38)

> cc-clipでリモートサーバーのClaude Codeに画像を直接ペーストできるようにする — @fukata [Zenn](https://zenn.dev/zaico/articles/45bffcd94b5c68)

### Claude Code トークン節約・コンテキスト管理

#### Tips

> Claude Codeのトークン消費が$40/日から1週間でも余裕になった全手法。MAX x20への切り替えで劇的改善 — @okamyuji [Zenn](https://zenn.dev/okamyuji/articles/claude-code-max-x20-token-savings)

> Claude Max 20xでもトークンが足りない。重度ユーザーが実践する文脈管理と節約の工夫8選 — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/0e0eea6f890bd3)

> Claude Opus 4.6 の 1M コンテキストで 170 ファイルの Terraform リポジトリを読ませてみた — @seigen [Zenn](https://zenn.dev/geneg/articles/claude-opus-4-6-1m-terraform)

### Claude Code 大規模リファクタリング

#### Tips

> Claude Codeで大規模リファクタリングを安全に進める実践手順。7ステップで安全に進める方法 — @まさ [Zenn](https://zenn.dev/masa1990/articles/claude-code-large-refactoring)

### Claude Code PR自動監視

#### Tips

> Claude CodeにPRの見守りを任せたら、次の作業に集中できるようになった。/start-babysit-pr スキルでCI監視と指摘検知を自動化 — @kaikai [Zenn](https://zenn.dev/dely_jp/articles/9eb7a1b4d5bb5d)

### Claude Code Desktop 刷新

#### Tips

> Claude Desktop大幅刷新｜コード機能強化でCursor・VS Code拡張のライバルになるか？ Chat/Cowork/Code 3タブのうちCodeタブが大幅強化 — @Junko [Zenn](https://zenn.dev/junko_ai/articles/99f6eb7958cd30)

### Claude Code 流出コード分析

#### Tips

> 【Claude Code流出に学ぶ】チャットボットを「エージェント」に変えるReActループの正体 — @YASUGUBA [Zenn](https://zenn.dev/guba98/articles/0e98bf54b43960)

> 【Claude Code流出に学ぶ】Reduxは不要？AIエージェントを支える「34行」 — @YASUGUBA [Zenn](https://zenn.dev/guba98/articles/889d141406e46d)

### Claude Haiku 4.5 活用事例

#### Tips

> Claude Haiku 4.5で投稿に自動タグ付けするSNSを作った話 — @mukkimuki [Zenn](https://zenn.dev/mukkimuki/articles/38222e692bf8ba)

### Managed Agents（前回から継続）

#### Tips

> Claude Managed Agentsを触ってみた。APIでClaude Codeみたいなことができる新機能 — @okawa_ [Zenn](https://zenn.dev/solvio/articles/7f8d2008526234)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
