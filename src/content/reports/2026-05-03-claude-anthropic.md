---
title: "NASA火星探査にClaude採用、コミュニティではAgent SDK設計が活発"
summary: "ClaudeがNASA JPLのPerseveranceローバーの火星上ルート計画に使用されたことが話題に。Claude Code v2.1.126の反応が引き続き拡散。コミュニティではAgent SDK実践設計、Memory活用、マルチエージェント可視化など高度な運用知見の共有が加速。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-03
features:
  - "[Claude Code v2.1.126] /modelピッカーがゲートウェイの/v1/modelsエンドポイントからモデル一覧を取得可能に"
  - "[Claude Code v2.1.126] claude project purge コマンド追加: プロジェクトのClaude Code状態（トランスクリプト、タスク、ファイル履歴、設定）を一括削除"
  - "[Claude Code v2.1.126] --dangerously-skip-permissionsが.claude/、.git/、.vscode/、シェル設定ファイル等の保護パスへの書き込みプロンプトもバイパス可能に"
  - "[Claude Code v2.1.126] claude auth loginがブラウザコールバックがlocalhostに到達できない環境（WSL2、SSH、コンテナ）でOAuthコードのターミナル貼り付けに対応"
  - "[Claude Code v2.1.126] OpenTelemetryにclaude_code.skill_activatedイベント追加（invocation_trigger属性付き）"
  - "[Claude Code v2.1.126] Autoモードでパーミッションチェック停滞時にスピナーが赤色表示に変化"
  - "[Claude Code v2.1.126] Windows: PowerShell 7の検出強化とPowerShellをプライマリシェルとして扱う対応"
  - "[Claude Code v2.1.126] Readツールからマルウェア評価リマインダーを削除（レガシーモデルでの誤拒否を防止）"
  - "[Claude Code v2.1.126] セキュリティ修正: allowManagedDomainsOnly/allowManagedReadPathsOnlyが上位設定ソースにsandboxブロックがない場合に無視される問題を修正"
  - "[Claude AI] NASA火星探査: ClaudeがNASA JPLのPerseveranceローバーの火星上ルート計画に使用され、AI計画による初の他惑星走行を実現"
codex_review: "NASA火星探査への採用は象徴的で面白いが、業界全体を動かすのはむしろAgent SDKやMemory運用の知見蓄積のほうだと見る。派手な実績と地味な設計論が同時に進む、いまのAnthropicらしい局面だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.126（前回から継続）

前回レポートで詳報済み。主な新機能は `claude project purge` コマンド、`/model` ピッカーのゲートウェイ対応、OAuth手動入力対応、Windows PowerShell対応強化など。本日時点で新たなリリースはなし。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.126)

### NASA火星探査でのClaude活用

ClaudeがNASA JPL（ジェット推進研究所）のPerseveranceローバーの火星上ルート計画に使用されたことが報じられた。AI計画による初の他惑星走行を実現したとされる。X上での個人ユーザーによる反応は品質基準を満たすものが見つからず、現時点では速報段階。

## コミュニティの反応

### claude project purge コマンド（前回から継続）

#### ポジティブ

> v2.1.126で`claude project purge`を使い、不要プロジェクトを1分で整理でき、地味にありがたい更新 — @559hkdt [X](https://x.com/i/status/2050545912926048503)

#### Tips

> これまで手動で.claudeフォルダを削除していたが、`claude project purge`でtranscripts・tasks・履歴・configを一発全消去でき、`--dry-run`で確認可能で時間を大幅節約 — @d_ehara [X](https://x.com/i/status/2050349794493857942)

> Claude Code v2.1.126の新機能として`claude project purge`で使わなくなったプロジェクトの履歴、タスク、設定をコマンド一発で全削除可能で、dry-run対応 — @hir08ma [X](https://x.com/i/status/2050136219997356308)

### /modelピッカーのゲートウェイ対応（前回から継続）

#### Tips

> ANTHROPIC_BASE_URLを設定しているユーザーは即座に恩恵を受けられる。カスタムゲートウェイのモデルを自動検出する機能 — @cc_lab_jp [X](https://x.com/i/status/2050335844590842062)

### --dangerously-skip-permissions の拡張（前回から継続）

#### Tips

> v2.1.126で`--dangerously-skip-permissions`がより危険になり、以前保護されていたパスもバイパス可能になったため、サンドボックス使用やautoモードを推奨 — @dani_avila7 [X](https://x.com/i/status/2050044061344538844)

> Yes確認が面倒なので`--dangerously-skip-permissions`ですべてスキップして満足しているが安全か気になる — @potatobiz1 [X](https://x.com/i/status/2050117604929573122)

### OAuth手動入力対応（前回から継続）

#### ポジティブ

> WSL2、SSHセッション、コンテナなどのヘッドレス環境でブラウザ不要でOAuth認証可能に — @dmshirochenko [X](https://x.com/i/status/2050209078891135244)

> WSL2/SSH/コンテナ環境のlocalhostアクセス不可時にOAuthコード直接貼り付けログインが可能になり、実用度が上がった — @shima0hide [X](https://x.com/i/status/2050059190782280143)

### セキュリティ設計

#### Tips

> Claude Codeの.envファイル読み込みによる秘密漏洩リスクを指摘し、settings.jsonでのdenyルール追加、.env.test使用、pre-commitフック、コンテナ隔離をTipsとして提案 — @op1ionz [X](https://x.com/i/status/2050262038430060859)

> AIエージェントを会社で使いたい→「え、セキュリティどうするの？」 企業導入への技術的アプローチ — @sharu389no [Qiita](https://qiita.com/sharu389no/items/ede7d1c0be4a14024857)

> MCPサーバーを本番に入れる前に確認すべき10項目 — OWASP MCP Top 10が教えること。CVE報告数が60日で30件に達している状況を整理 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/mcp-owasp-top10-production-checklist)

> 使っているMCP、誰が作ってるか知ってますか？ — 不安だったので自作した話。MCP wrapperの信頼性問題を提起 — @tksfjt1024 [Zenn](https://zenn.dev/tksfjt1024/articles/ce256accbd3f81)

### Agent SDK実践設計

#### Tips

> Claude Code Agent SDK 実践設計 — 権限境界と自動化の罠を乗り越える。Headless・SDK・Remote Controlの3実行モードの使い分けと、allowedTools設計やコスト制御の壁を体系的に解説 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-agent-sdk-workflow-design-2026)

> 5サービスでClaude Agent SDKを呼ぶことになって、共通化した部分と意図的に揃えなかった部分 — retry loopやPlaywright連携など、サービス固有のロジックは切り出さない判断 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/409d4c89fc78a5)

> Claude Opus 4.7 x Agent SDK x GitHub Actionsを全部やってみた — 旧バージョンとの差分まとめ。claude_argsへの集約やtemperature/top_pの破壊的変更など — @くーるぜろ [Zenn](https://zenn.dev/zephel01/articles/ef9765424ad875)

### マルチエージェント

#### Tips

> Claude CodeのマルチエージェントをPixelAgentsで見える化してみた — VS Code拡張でサブエージェントの動作を可視化 — @Osamu Sugo [Zenn](https://zenn.dev/91works/articles/283cc5f72b0285)

> Claude Code マルチエージェント実践入門 — 並列処理でAI開発を加速させる方法 — @Osamu Sugo [Zenn](https://zenn.dev/91works/articles/86e2e0cf33f823)

> AIチームに「批評家」を加えたら、自分では気づかなかった誤りが3件出てきた — レビュワー・読者ペルソナ追加の実演 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-01-090000)

### Memory活用

#### Tips

> Claude Code Memory を使いこなす — feedback / project / user で AI の文脈を育てる設計。3種類のメモリを書き分けて初めてAIの提案品質が動く — @ojt [Zenn](https://zenn.dev/ojt/articles/claude-code-memory-context-design)

### Claude Code運用・活用

#### Tips

> Claude Codeを使ったアプリ開発 — SIerが現場で実践するAI活用プロセス。バイブコーディングの落とし穴と、品質を担保するためのプロセス設計 — @DKTech [Zenn](https://zenn.dev/dktech/articles/4dfc31469778c3)

> AI agentへの良いspecの書き方 — 5原則と落とし穴。仕様書を巨大化させるほどモデルはfocusを失い、指示の遵守率が落ちる — @soma [Zenn](https://zenn.dev/aiandao/articles/good-spec-for-ai-agents-20260502)

> 既存コードから仕様書を逆生成するClaude Codeスキル cc-rsg を作ってみた — レガシーシステム保守やオンボーディング向け — @daishir0 [Zenn](https://zenn.dev/daishiro/articles/cc-rsg-reverse-spec-generation)

> Claude Code に code コマンドを実行させるとエディタで直接ファイルを開いてくれる — @becky [Zenn](https://zenn.dev/rhythmcan/articles/ee56e589752f4d)

> Claude CodeのスキルをNotionで一括管理できるようにした話 — 20本超のスキルのメタデータ・バージョン管理 — @たろー [Zenn](https://zenn.dev/taroh_7/articles/2026-04-20-claude-skill-notion-management)

> 連休前に入れたClaude Codeの保険 — Stop hookの予算ゲートとPreCompact hookのgit保存。留守中のトークン消費暴走を防ぐ実践的な設定 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/c48ffc03dae7da)

### Claude Code v2.1.126の不具合報告

#### ネガティブ

> Claude Code 2.1.126で子エージェントが親の会話履歴を漏らす — Issue #55488の整理と当面の4つの回避策。子が親の身分を名乗り、親の会話履歴ごと相手に開示する事案 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/f38a4bd960e932231fe6)

### Opus 4.6 vs 4.7の比較

#### Tips

> 同じプロンプト、同じフレームワーク、違う結末 — Opus 4.6と4.7で起きたこと。Opus 4.6で2時間12分で動く人狼ゲームができたが、4.7への切り替えで問題が発生した記録 — @Belkaの海豚 [Zenn](https://zenn.dev/belka_dolphin/articles/3102b5b005d2e3)

### Anthropicのプロダクト開発

#### Tips

> 6ヶ月roadmapは自殺行為 — Anthropicの超速開発とこれから勝つPDMのやり方。Head of ProductのCat Wuのインタビューをもとに、AI時代のプロダクトマネジメントの変化を考察 — @xiao18 [Zenn](https://zenn.dev/kuma18/articles/b1ac307211d0dd)

### 資格試験

#### Tips

> Claude Certified Architect - Foundations (CCA-F) 完全攻略ガイド — Anthropic初のAI資格試験（$99、720/1000で合格）の対策ロードマップ — @岸本悠佑 [Zenn](https://zenn.dev/acntechjp/articles/40f3ff24064968)

### AI-DLCワークフロー

#### Tips

> AI-DLCのルールファイルを全部読んでみた — awslabs/aidlc-workflowsの仕組みを深掘りする。AWSがre:Invent 2025で発表したAI駆動開発手法の構成・ドキュメントを解説 — @こめっと [Zenn](https://zenn.dev/aecomet/articles/ai-dlc-workflows-deep-dive)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
