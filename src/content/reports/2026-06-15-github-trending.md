---
title: "AIエージェントのスキル・セキュリティ・統合基盤が同時にトレンド入り"
summary: "Addy Osmaniの24スキルパックagent-skills、NVIDIAのスキルセキュリティスキャナーSkillSpector、Andrew Ngのaisuite+OpenCoworker、LMCacheのKVキャッシュ管理、OpenCodeのOSSコーディングエージェントが急成長。AIエージェント開発の品質・安全性・効率化を支えるインフラ層が一斉に注目を集めた週。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-06-15
features:
  - "addyosmani/agent-skills: AIコーディングエージェント向けプロダクショングレードスキルパック、24スキル・7スラッシュコマンドで開発ライフサイクル全体をカバー"
  - "NVIDIA/SkillSpector: AIエージェントスキル用セキュリティスキャナー、64脆弱性パターン・16カテゴリを静的解析+LLMで検出"
  - "andrewyng/aisuite: マルチLLMプロバイダ統一インターフェース+Agents API+OpenCoworkerデスクトップAIエージェント、MCP対応"
  - "LMCache/LMCache: LLM推論向けKVキャッシュ管理レイヤー、TTFT削減・スループット向上、PyTorch Foundation参加済み"
  - "anomalyco/opencode: オープンソースAIコーディングエージェント、ターミナルUI+デスクトップアプリ、マルチモデル対応"
codex_review: "派手な新モデル競争より、エージェントを使える道具に寄せる基盤整備が一気に前景化した週だと感じる。特にSkillSpectorとLMCacheは地味だが効き目が長く、短期の話題以上に産業実装を押し上げそうだ。"
codex_importance: 4
---

## 公式アップデート

### addyosmani/agent-skills

Addy Osmani（Google）が公開したAIコーディングエージェント向けのスキルパック。24スキル（23ライフサイクル+1メタ）と7つのスラッシュコマンド（`/spec`〜`/ship`）で開発ライフサイクル全体をカバーする。

主な特徴:
- **6段階ワークフロー**: Define → Plan → Build → Verify → Review → Ship の各フェーズに対応するスキルを配置
- **Anti-Rationalization Table**: 各スキルにAIエージェントがステップをスキップする際の「言い訳」と反論を内蔵
- **検証ゲート必須**: 全スキルがテスト通過・ビルド成功等のエビデンスを要求し「正しそう」では完了にならない
- **マルチツール対応**: Claude Code（プラグイン）、Cursor、Gemini CLI、Windsurf、OpenCode、Codex、Kiro IDE等に対応
- **4つの専門ペルソナ**: code-reviewer（Staff Engineer）、test-engineer、security-auditor、web-performance-auditor
- Google社内プラクティス（Hyrum's Law、Beyonce Rule、テストピラミッド、trunk-based development等）を直接ワークフローに組み込み
- MITライセンス

[ソース](https://github.com/addyosmani/agent-skills)

### NVIDIA/SkillSpector

NVIDIAが公開したAIエージェントスキル用セキュリティスキャナー。Claude Code、Codex CLI、Gemini CLI等のスキルをインストール前にスキャンし、脆弱性や悪意あるパターンを検出する。

主な特徴:
- **64脆弱性パターン・16カテゴリ**: プロンプトインジェクション、データ窃取、権限昇格、サプライチェーン、過剰権限、出力処理、システムプロンプト漏洩、メモリ汚染、ツール悪用、YARA署名、MCP最小権限等
- **2段階解析**: 高速な静的解析 + オプションのLLMセマンティック評価（OpenAI/Anthropic/NVIDIA Build対応）
- **リアルタイムCVE検索**: OSV.devへのライブクエリで既知脆弱性を照合
- **複数出力形式**: ターミナル、JSON、Markdown、SARIF（CI/CD連携用）
- **リスクスコア**: 0-100のスコアとseverityラベルで明確な判定
- 研究結果: 調査対象スキルの26.1%に脆弱性、5.2%に悪意の可能性を検出
- Docker対応、Apache 2.0ライセンス

[ソース](https://github.com/NVIDIA/SkillSpector)

### andrewyng/aisuite

Andrew Ng（deeplearning.ai）が開発する軽量Pythonライブラリ。複数LLMプロバイダへの統一Chat Completions APIと、ツール実行を備えたAgents APIを提供。デスクトップAIエージェント「OpenCoworker」も同梱。

主な特徴:
- **統一Chat API**: `<provider>:<model-name>`形式でOpenAI、Anthropic、Google、Mistral、HuggingFace、AWS、Cohere、Ollama、OpenRouter等を1行で切り替え
- **Agents API**: Python関数をそのままツールとして渡し、スキーマ自動生成・実行・結果フィードバックまで自動化
- **Toolkits**: files、git、shell等のプリビルトツールファミリーをサンドボックス環境で提供
- **MCP対応**: Model Context Protocolサーバーのツールをネイティブに利用可能
- **OpenCoworker**: macOS/Windows対応のデスクトップAIエージェント。深層リサーチ、ファイル操作、Slack/メール送信、PDF/スプレッドシート生成、スケジュール自動化に対応。自前APIキーまたはOllamaでローカル実行可
- **Tool Policies**: RequireApprovalPolicy、許可/拒否リスト等でツール実行を制御
- **State Stores**: in-memory、ファイル、Postgresで実行状態を永続化・再開
- MITライセンス

[ソース](https://github.com/andrewyng/aisuite)

### LMCache/LMCache

LLM推論のKVキャッシュを一時的な状態から再利用可能なリソースへ変換する管理レイヤー。TTFT（Time-to-First-Token）の短縮とスループット向上を実現し、長文脈・エージェント・RAGワークロードに特化。

主な特徴:
- **エンジン独立デプロイ**: 推論エンジンとは別プロセスで動作し、エンジンクラッシュ時もKVキャッシュを保持
- **階層型オフロード**: GPU → CPU → ローカルディスク → Redis/Valkey/Mooncake/InfiniStore/S3/NIXL/GDS等20+のストレージバックエンド
- **非プレフィックスKV再利用**: CacheBlendにより任意の位置のKVブロックを再利用、差分トークンのみ再計算で品質回復
- **PD分離**: NIXL経由でprefillワーカーからdecodeワーカーへNVLink/RDMA/TCPでKV転送
- **本番レベルの可視性**: Kubernetes監視メトリクス、リクエスト/トークンレベルのキャッシュヒット率、ユーザー別使用量
- **ベンダーニュートラル**: vLLM、SGLang、TRT-LLM等の主要推論エンジンに対応
- PyTorch Foundation参加済み、NVIDIA Dynamo統合
- 2026/05: AMD MI300Xでのエージェントワークロードベンチマーク公開
- 2026/04: 新マルチプロセスアーキテクチャでMoE推論性能10倍向上
- Apache 2.0ライセンス

[ソース](https://github.com/LMCache/LMCache)

### anomalyco/opencode

オープンソースのAIコーディングエージェント。ターミナルUIとデスクトップアプリの両方で利用可能。

主な特徴:
- **デュアルインターフェース**: ターミナルTUI + デスクトップアプリ（macOS/Windows/Linux）
- **ビルトインエージェント**: `build`（フルアクセス開発用）と`plan`（読み取り専用分析用）をTabキーで切り替え
- **マルチモデル**: OpenAI、Anthropic、Google、Ollama等に対応
- **サブエージェント**: `@general`で複雑な検索・マルチステップタスクを委任可能
- **多言語対応**: 22言語のREADME翻訳
- npm、Homebrew、Scoop、Chocolatey、pacman、Nix等主要パッケージマネージャに対応
- MITライセンス

[ソース](https://github.com/anomalyco/opencode)

## コミュニティの反応

### addyosmani/agent-skills

#### ポジティブ

> Googleエンジニアが「シニアエンジニアの脳」をオープンソース化。24スキル+/spec〜/shipの6段階フロー、各スキルに「AIの言い訳を反論する表」付き — @SandboxSlash

> AI agentがテストをスキップしたりvibe-coded slopを出さないようanti-rationalization tableを内蔵。Claude Code/Cursor/Gemini CLI/Windsurfなど複数ツール対応 — @Vaishnavi

> repo of the day。AI coding agent向けのproduction-gradeスキルパックで、rookie mistakesを防ぐbattle-tested playbooks。今日+1.5K stars急増中 — @tensor___boy

### NVIDIA/SkillSpector

#### ポジティブ

> NVIDIAがAIエージェントスキル用セキュリティスキャナーをOSS公開。GitHub Python榜1位（+962星）。研究で26.1%のスキルに脆弱性、5.2%に悪意の可能性 — @GenAISpotlight

> AI agentセキュリティの重要性を象徴。GitHub週間トレンド1位 — @JamesAI

#### Tips

> Claude Code/Codex/MCPスキル使用前にNVIDIA SkillSpectorで「Semgrep級」の自動セキュリティチェックを推奨 — @Degenstar210

> macOS/LinuxでSkillSpectorをインストールし、`skillspector scan <skillパス>`でスキャン実行の具体的手順を紹介 — @CryptoStar210

### andrewyng/aisuite

#### ポジティブ

> 複数プロバイダ（Claude/GPT-4o/Gemini/Groq/Mistral/Grok/Cohere/DeepSeek等11種）を1つのインターフェースで切り替え可能。ベンダーロックイン回避に最適 — @arunrajiah

> ユニバーサルアダプターとして「プロバイダ層の上に構築すべき」と評価。モデル変更時のコード修正が不要 — @ValencianaAbel

#### Tips

> 大規模アップデートでOpenCoworker（OSSデスクトップAIアシスタント）が登場。MCP対応により深層リサーチ・ファイル管理・Slack/メール送信・PDF出力などをローカル/クラウドモデルで実行可能 — @BigGGGNiNa

### LMCache/LMCache

#### ポジティブ

> KVキャッシュを再利用可能なリソース層へ変え、長文脈・マルチターンAgentの繰り返し計算を削減。首字応答とコストに直結 — @sidelined_cap

> CacheBlendで非プレフィックス位置も再利用可能。vLLM/SGLang/TRT-LLM対応・20+ストレージバックエンド — @dogquie

#### Tips

> pip install lmcache → vLLM起動に--cache-engine lmcache追加で即利用。同一prompt2回目以降でローカルキャッシュ自動ヒット。TTFT 1.2s→80ms、throughput 3倍の事例 — @ai_xiaomu

> RAG・対話Agent本番運用で同一文脈繰り返し処理を省き、TTFT短縮・GPUコスト低減。Apache 2.0で商用導入容易 — @whytrend_ai

### anomalyco/opencode

#### 批評

> wildcard.tsでfnmatch/glob相当を期待すると`*`が正規表現の`.*`になってしまい裏切られる点を指摘 — @knu

## ソース

- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)
- [andrewyng/aisuite](https://github.com/andrewyng/aisuite)
- [LMCache/LMCache](https://github.com/LMCache/LMCache)
- [anomalyco/opencode](https://github.com/anomalyco/opencode)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
