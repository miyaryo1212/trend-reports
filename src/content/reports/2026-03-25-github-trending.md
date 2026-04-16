---
title: "Compound Engineeringプラグインとdeer-flow急浮上"
summary: "ByteDanceのdeer-flow 2.0がGitHub Trending 1位を獲得。Compound Engineeringプラグインがv3リリースを予告しClaude Code開発ワークフローの新標準に。TradingAgentsは40K超スター達成。一方、Trivyのサプライチェーン攻撃が発覚しセキュリティ界隈に衝撃。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-03-25
features:
  - "TauricResearch/TradingAgents: マルチエージェントLLM金融取引フレームワーク"
  - "harry0703/MoneyPrinterTurbo: AI大規模モデルでワンクリック短動画生成"
  - "bytedance/deer-flow: ByteDance発のスーパーエージェントハーネス"
  - "EveryInc/compound-engineering-plugin: Claude Code/Codex等向けCompound Engineeringプラグイン"
  - "Crosstalk-Solutions/project-nomad: オフライン対応AI搭載サバイバルコンピュータ"
  - "supermemoryai/supermemory: AIメモリ・コンテキストエンジン"
  - "OWASP/Nettacker: 自動ペネトレーションテスト・脆弱性スキャンフレームワーク"
  - "FujiwaraChoki/MoneyPrinterV2: オンライン収益自動化ツール"
  - "aquasecurity/trivy: コンテナ・K8s・コード向け脆弱性・シークレットスキャナー"
codex_review: "deer-flowやCompound Engineeringの伸びは、単体モデル競争から運用設計競争へ軸が移ったことを示していて面白い。一方でMoney系OSSの過熱とTrivyの件は、熱狂の裏で足元の脆さも露呈した印象です。"
codex_importance: 4
---

## 公式アップデート

### TauricResearch/TradingAgents v0.2.2（前回から継続）

マルチエージェントLLM金融取引フレームワーク「TradingAgents」がv0.2.2をリリース。GPT-5.4、Gemini 3.1、Claude 4.6のモデルカバレッジを追加し、5段階評価スケール、OpenAI Responses API、Anthropic effort control、クロスプラットフォーム安定性を実装。実際の取引会社のダイナミクスを模倣し、ファンダメンタル分析、センチメント分析、テクニカル分析、ニュース分析を行う専門エージェントを配置。LangGraphで構築され、OpenAI、Google、Anthropic、xAI、OpenRouter、Ollamaの複数LLMプロバイダーをサポート。40,000超スターを達成。

[ソース](https://github.com/TauricResearch/TradingAgents)

### harry0703/MoneyPrinterTurbo

AI大規模モデルを活用したワンクリック短動画生成ツール。キーワードまたはテーマを入力するだけで、動画文案、素材、字幕、BGMを自動生成し、高画質ショート動画を合成。縦型9:16（1080x1920）と横型16:9（1920x1080）に対応。OpenAI、Moonshot、Azure、gpt4free、one-api、通義千問、Google Gemini、Ollama、DeepSeek、文心一言、Pollinations、ModelScopeなど10以上のモデルに対応。52,000超スターを獲得。

[ソース](https://github.com/harry0703/MoneyPrinterTurbo)

### bytedance/deer-flow 2.0

ByteDanceがオープンソースで公開したスーパーエージェントハーネス「DeerFlow」2.0。サブエージェント、メモリ、サンドボックスを統合し、拡張可能なスキルで様々なタスクを処理。Claude Code統合、MCP Server対応、Telegram/Slack/Feishuチャネルサポートを搭載。Doubao-Seed-2.0-Code、DeepSeek v3.2、Kimi 2.5での実行を推奨。GitHub Trendingで1位を獲得し、39,000超スターを達成。

[ソース](https://github.com/bytedance/deer-flow)

### EveryInc/compound-engineering-plugin

Claude Code、Codex、Cursor、OpenCode等向けのCompound Engineeringプラグイン。Brainstorm→Plan→Work→Review→Compoundの循環ワークフローを提供。`/ce:ideate`で改善アイデア発見、`/ce:brainstorm`で要件探索、`/ce:plan`で詳細計画、`/ce:work`でworktree実行、`/ce:review`でマルチエージェントレビュー、`/ce:compound`で学習文書化。v3リリースが予定されている。

[ソース](https://github.com/EveryInc/compound-engineering-plugin)

### Crosstalk-Solutions/project-nomad（前回から継続）

自己完結型オフラインサバイバルコンピュータ「Project N.O.M.A.D.」。Ollama + Qdrantによるローカルチャット、Kiwixによるオフライン版Wikipedia・医療リファレンス・電子書籍、KolibriによるKhan Academyコース、ProtoMapsによるオフラインマップ、CyberChefによるデータツール、FlatNotesによるノート機能を搭載。Debian系OSに対応し、インストール後はインターネット接続不要で動作。2,000超スターを獲得。

[ソース](https://github.com/Crosstalk-Solutions/project-nomad)

### supermemoryai/supermemory（前回から継続）

AI向けメモリエンジン「supermemory」がLongMemEval、LoCoMo、ConvoMemの3つの主要AIメモリベンチマークで1位を獲得。ASMR（Agentic Search and Memory Retrieval）という新手法を導入。会話から自動的に事実を抽出し、ユーザープロファイルを構築、知識の更新や矛盾を処理し、期限切れ情報を自動的に忘却。Claude Code、OpenCode、OpenClaw向けプラグインを提供。MCP経由でClaude Desktop、Cursor、Windsurf、VS Codeと統合可能。18,000超スターを達成。

[ソース](https://github.com/supermemoryai/supermemory)

### OWASP/Nettacker

OWASPプロジェクトによるPythonベースの自動ペネトレーションテスト・脆弱性スキャンフレームワーク。ポートスキャン、サービス検出、サブドメイン列挙、ネットワークマッピング、脆弱性スキャン、クレデンシャルブルートフォーステストを自動化。HTTP/HTTPS、FTP、SSH、SMB、SMTP、ICMP、TELNETなど複数プロトコルに対応。モジュラーアーキテクチャでCLI、REST API、Web UIを提供。

[ソース](https://github.com/OWASP/Nettacker)

### FujiwaraChoki/MoneyPrinterV2

オンライン収益自動化アプリケーション。Twitter Bot（CRONジョブ対応）、YouTube Shorts自動化、Amazonアフィリエイトマーケティング、ローカルビジネス検索・コールドアウトリーチ機能を搭載。Python 3.12が必要。MoneyPrinterTurboの中国語版と関連。15,000超スターを獲得。

[ソース](https://github.com/FujiwaraChoki/MoneyPrinterV2)

### aquasecurity/trivy

コンテナイメージ、ファイルシステム、Gitリポジトリ、VMイメージ、Kubernetesを対象とする包括的セキュリティスキャナー。OS・ソフトウェア依存関係（SBOM）、既知の脆弱性（CVE）、IaC設定ミス、機密情報・シークレット、ソフトウェアライセンスを検出。GitHub Actions、Kubernetes operator、VS Code pluginとの統合が可能。

[ソース](https://github.com/aquasecurity/trivy)

## コミュニティの反応

### TauricResearch/TradingAgents

#### ポジティブ

> TradingAgentsが40,367スターを達成。多剤LLMフレームワークで、各エージェントが異なる市場シグナルをカバーし、協調が単独モデルを上回る — @dimzhuk [出典](https://x.com/i/status/2036458468454945269)

> LLM多剤でトレーディング。基本分析+センチメント+テクニカル+リスクプロファイルのトレーダー。Bull vs Bear議論、リスク監視でSharpe/リターン/drawdownでベースライン超え。オープンソース — @culturabuilder [出典](https://x.com/i/status/2036433597981139432)

> 2026年最火のプログラミングツールにTradingAgents（多智能体金融、3.7万星）が選出 — @GitHub_p1 [出典](https://x.com/i/status/2036573991809458232)

#### Tips

> マルチエージェントdesk/committeeとして、FinRobotなど他の金融AIツールと比較活用可能 — @cv3_Wealth_AI [出典](https://x.com/i/status/2036402223249326334)

### harry0703/MoneyPrinterTurbo

#### ポジティブ

> GitHubで52,000スター超えのトレンドリポジトリ。AIでキーワードから一発ショート動画生成、収益化に最適 — @awesomeJason4 [出典](https://x.com/i/status/2036676996500177060)

> キーワード入力で文案・素材・字幕・配音を自動生成。DeepSeek/Qwen/Geminiなど10+モデル対応、51k+スター — @bozhou_ai [出典](https://x.com/i/status/2035961906964639798)

> Facelessコンテンツ自動化ツール。10+LLM対応、多動画生成、コピー/字幕/ボイス/BGM/HD縦横動画、OSS — @abhishek__AI [出典](https://x.com/i/status/2036643794813087849)

#### Tips

> ニッチを選んで毎日動画生成、affiliateで$1-5k/月パッシブインカム。無料GitHubツール活用 — @AIHustleKit [出典](https://x.com/i/status/2036620148170182802)

> 自動短動画/Amazon带货/メール拓客でパッシブインカム。国内版MoneyPrinterTurbo推奨、高頻度注意 — @TaTe168198 [出典](https://x.com/i/status/2036079712460746852)

### bytedance/deer-flow

#### ポジティブ

> ByteDanceのオープンソーススーパーエージェント「deer-flow」、39k超スター獲得中。サブエージェント連携・メモリ・サンドボックスで研究/コーディング/コンテンツ自動化 — @neural_nw_ai [出典](https://x.com/i/status/2036253192963629171)

> TikTok親会社のByteDanceがリリースしたdeer-flow。サブエージェント/メモリ/サンドボックス統合のSuperAgentで、長時間タスクの分業・リカバリに強み。中国系LLM（Kimi/DeepSeek）推奨か — @hfujikawa77 [出典](https://x.com/i/status/2036079974856417311)

> deer-flow SuperAgentフレームワーク、35kスター。サンドボックス・メモリ・サブエージェントで複雑タスク処理 — @neural_nw_ai [出典](https://x.com/i/status/2035890924153430198)

### EveryInc/compound-engineering-plugin

#### ポジティブ

> 新メンバーを迎え、Compound Engineeringプラグインのv3を金曜にライブストリームでリリース予定。クールな新機能多数 — @kieranklaassen [出典](https://x.com/i/status/2036525616657494499)

> Claude Code向けCompound Engineeringプラグインはinsaneで、方法論的にアプローチを強制しロボット奉仕者を最大活用 — @forssto [出典](https://x.com/i/status/2036277846948106598)

> @mvanhornがCompound Engineeringプラグインの#3コントリビューター(21 commits)。voice-pilled and compound-pilled — @every [出典](https://x.com/i/status/2036180279870583259)

#### Tips

> Claude Codeの計画立案と実行を徹底的に行うためのプラグインとして活用。インストールコマンド: /plugin marketplace add EveryInc/compound-engineering-plugin — @L_go_mrk [出典](https://x.com/i/status/2036404660534387003)

> Claudeの究極セットアップ(CLI, VSCode, Desktop, Extension, Max 20x plan)にCompound Engineeringプラグインを推奨。他のAIより優位 — @built_by_b [出典](https://x.com/i/status/2034842079013016043)

### Crosstalk-Solutions/project-nomad

#### ポジティブ

> GitHubで2000+星を集めるProject NOMADを紹介。オフラインAIサーバーとしてOllamaによるローカルLLM、RAGドキュメント検索、Docker一括インストールを強調し、災害時やオフグリッドでのデータ主権をアピール — @PulseTRX [出典](https://x.com/i/status/2035330169158701317)

> 一コマンドでOllama+ローカルRAGをセットアップ。ZIM Wikipedia、Khan Academyを太陽光ミニPCに搭載し、静的プレッパードライブより優位な動的AIを評価 — @Cyberhonk26 [出典](https://x.com/i/status/2034898838906167549)

#### Tips

> GitHubの"Project NOMAD offline survival computer"をRaspberry Pi + SSD + Ollamaでローカル構築可能。インターネット不要で全データをオフライン運用 — @0xCVYH [出典](https://x.com/i/status/2035480753258025431)

### supermemoryai/supermemory

#### ポジティブ

> GitHubで18k超のスター獲得、オープンソースのAIアプリ用メモリエンジン（TypeScript/Postgres/Cloudflare Workers）。永続メモリ追加、自ホスト可能 — @harshdesaiii [出典](https://x.com/i/status/2036540217453068458)

> LongMemEval_sで~99%達成（ASMRシステム、ベクトルDB不要のマルチエージェント）。エージェントメモリ問題解決か？近日OSS予定 — @TeksEdge [出典](https://x.com/i/status/2035937781802004889)

#### Tips

> 会話横断メモリAIとして実験中（⭐18k）、deer-flow等と並べて検証 — @hiroya_ai_log [出典](https://x.com/i/status/2036565559119343728)

#### ネガティブ

> 精度主張が偽りのマーケティング詐欺（prankと笑う）。アカウントミュート — @neural_avb [出典](https://x.com/i/status/2036551304194170976)

### OWASP/Nettacker

#### ポジティブ

> 自動ペネトレーションテストフレームワークとしてOWASP/Nettackerを紹介し、GitHubリンクを共有 — @__ciph3r [出典](https://x.com/i/status/2036065478750171344)

### FujiwaraChoki/MoneyPrinterV2

#### ポジティブ

> 自動印鈞機V2としてオープンソースを紹介。YouTube Shorts生成、Twitter bot、Amazonアフィリエイト、冷メール対応の全自動化ツール — @GitTrend0x [出典](https://x.com/i/status/2035916741444853775)

> オンライン収益自動化ツールとして紹介。YouTube Shorts/Twitter自動化、アフィリエイト、冷メール対応で「code doing the hustle」 — @DiveSarla55137 [出典](https://x.com/i/status/2035726965374849177)

> GitHubリポ共有（15k⭐）。X botスケジュール、YouTube Shorts自動化、アフィ+アウトリーチでソロボルダー向け — @__jaypio__ [出典](https://x.com/i/status/2034781348406100387)

### aquasecurity/trivy

#### ネガティブ

> LiteLLMの侵害はTrivyが原因。サプライチェーン攻撃の連鎖 — @kinyuka [出典](https://x.com/i/status/2036592998327476523)

> Trivyサプライチェーン攻撃の第四弾: PyPI(litellm)へのバックドア混入とK8s横展開の脅威をまとめ — @tomo_mtblog [出典](https://x.com/i/status/2036592648698630161)

> TeamPCPがTrivy CI/CDを侵害しlitellm 1.82.7/1.82.8にバックドア。K8s横展開ツールキット配布。ランタイム分離推奨 — @aviatrixtrc [出典](https://x.com/i/status/2036586400418496750)

#### Tips

> Trivy-operator: K8sワークロードの脆弱性スキャン。デプロイ時+ドリフト検知、ImagePolicyWebhooksで脆弱コンテナブロック — @TheRabbitPy [出典](https://x.com/i/status/2034593376788426996)

## ソース

- [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)
- [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)
- [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)
- [OWASP/Nettacker](https://github.com/OWASP/Nettacker)
- [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)
- [aquasecurity/trivy](https://github.com/aquasecurity/trivy)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
