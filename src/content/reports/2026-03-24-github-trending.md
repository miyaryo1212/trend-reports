---
title: "TradingAgentsとObsidian Skills急浮上"
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-03-24
features:
  - "TauricResearch/TradingAgents: マルチエージェントLLM金融取引フレームワーク"
  - "kepano/obsidian-skills: Claude Code/Codex CLI向けObsidianエージェントスキル集"
  - "hsliuping/TradingAgents-CN: TradingAgentsの中国語版"
  - "hesreallyhim/awesome-claude-code: Claude Code向けリソースキュレーションリスト"
  - "supermemoryai/supermemory: AI向け超高速メモリエンジンとAPI"
  - "Crosstalk-Solutions/project-nomad: オフライン対応サバイバルコンピュータ"
---

## 公式アップデート

### TauricResearch/TradingAgents v0.2.2

マルチエージェントLLM金融取引フレームワーク「TradingAgents」がv0.2.2をリリース。GPT-5.4、Gemini 3.1、Claude 4.6のモデルカバレッジを追加し、5段階評価スケール、OpenAI Responses API、Anthropic effort control、クロスプラットフォーム安定性を実装。実際の取引会社のダイナミクスを模倣し、ファンダメンタル分析、センチメント分析、テクニカル分析、ニュース分析を行う専門エージェントを配置。LangGraphで構築され、OpenAI、Google、Anthropic、xAI、OpenRouter、Ollamaの複数LLMプロバイダーをサポート。

[ソース](https://github.com/TauricResearch/TradingAgents)

### kepano/obsidian-skills

ObsidianのCEO kepano氏がClaude Code向けエージェントスキル集「obsidian-skills」を公開。Agent Skills仕様に準拠し、Claude CodeおよびCodex CLIと互換性あり。Obsidian Flavored Markdown、Obsidian Bases、JSON Canvas、Obsidian CLIの4つのスキルを提供。Marketplace経由またはnpxコマンドでインストール可能。

[ソース](https://github.com/kepano/obsidian-skills)

### hsliuping/TradingAgents-CN v1.0.0-preview

TradingAgentsの中国語強化版がv1.0.0-previewをリリース。StreamlitからFastAPIへバックエンドを移行し、Vue 3 + Element Plusでフロントエンドを再構築。MongoDB + Redisのデュアルデータベースアーキテクチャで10倍のパフォーマンス向上を実現。Docker多アーキテクチャ対応（amd64 + arm64）、A株/港股/美股のサポート、技術指標計算の修正、基本面データの修正、死循環問題の修正を含む。

[ソース](https://github.com/hsliuping/TradingAgents-CN)

### hesreallyhim/awesome-claude-code

Claude Code向けのスキル、フック、スラッシュコマンド、エージェントオーケストレーター、プラグインのキュレーションリスト。最新の追加には、Claude Scientific Skills（K-Dense-AI）、parry（プロンプトインジェクションスキャナー）、Dippy（安全なbashコマンド自動承認）、sudocode（軽量エージェントオーケストレーション）、claude-tmux（tmux管理）、claude-esp（隠れた出力ストリーミングTUI）が含まれる。

[ソース](https://github.com/hesreallyhim/awesome-claude-code)

### supermemoryai/supermemory

AI向けメモリエンジン「supermemory」がLongMemEval、LoCoMo、ConvoMemの3つの主要AIメモリベンチマークで1位を獲得。ASMR（Agentic Search and Memory Retrieval）という新手法を導入。会話から自動的に事実を抽出し、ユーザープロファイルを構築、知識の更新や矛盾を処理し、期限切れ情報を自動的に忘却。Claude Code、OpenCode、OpenClaw向けプラグインを提供。MCP経由でClaude Desktop、Cursor、Windsurf、VS Codeと統合可能。

[ソース](https://github.com/supermemoryai/supermemory)

### Crosstalk-Solutions/project-nomad

自己完結型オフラインサバイバルコンピュータ「Project N.O.M.A.D.」がリリース。Ollama + Qdrantによるローカルローカルチャット、Kiwixによるオフライン版Wikipedia・医療リファレンス・電子書籍、KolibriによるKhan Academyコース、ProtoMapsによるオフラインマップ、CyberChefによるデータツール、FlatNotesによるノート機能を搭載。Debian系OSに対応し、インストール後はインターネット接続不要で動作。

[ソース](https://github.com/Crosstalk-Solutions/project-nomad)

## コミュニティの反応

### TauricResearch/TradingAgents

#### ポジティブ

> GitHub Trendingで急上昇（+2,521 stars）、マルチエージェントLLMによる金融取引フレームワークとしてクリプト市場の自動化に最適 — @yieldhunter95 [出典](https://x.com/i/status/2036240830822805577)

> アーキテクチャが秀逸：アナリスト（ファンダメンタル/センチメント/ニュース/テクニカル）、リサーチャー、トレーダー、リスクマネージャー、ファンドマネージャーの組織構造を模倣 — @TimBased [出典](https://x.com/i/status/2035869759628018001)

> GitHubで1,503 stars/24h、PythonベースでエクスチェンジAPIと容易に統合可能、クリプト取引の民主化を促進 — @yieldhunter95 [出典](https://x.com/i/status/2035887251025256763)

#### Tips

> マーケット構造洞察とクリプトフローの理解に活用、AIスタックと組み合わせたスマート戦略構築に有効 — @jolyneshibasol [出典](https://x.com/i/status/2036314906904162480)

#### ネガティブ

> v0.2.1リリースで高度なアーキテクチャだが、実装のギャップが存在（詳細未明） — @AgentEconoemy [出典](https://x.com/i/status/2035046331014594701)

### kepano/obsidian-skills

#### ポジティブ

> Obsidian CEOがClaude Code向けにMarkdown、Canvas、BasesなどのObsidianファイル形式を正しく扱えるskillsをGitHubに公開。統合エラーを解消し、注目度高し — @JBRusselll [出典](https://x.com/i/status/2036140926653850009)

> obsidian-skillsリポジトリでAgentがObsidianのMarkdown、Canvas、Baseを理解・操作可能。第二大脳として便利 — @aias_0 [出典](https://x.com/i/status/2036221010006122792)

> Obsidian CEOのObsidian SkillsがClaude Skillsとして公開。CEOレベルでもAI開発にハマるトレンド — @heyitsgeorg [出典](https://x.com/i/status/2035681505616519534)

#### Tips

> Claude Code + Obsidian skillsのローカルセットアップで、skillsを活用した生産性向上。Hermesとの比較も — @leandronsp [出典](https://x.com/i/status/2036117094207521160)

### hsliuping/TradingAgents-CN

#### ポジティブ

> 中国エンジニアがTradingAgentsをフォークし、A株対応に再構築。FastAPI+Vue3アーキテクチャ、MongoDB+Redis、10x性能向上、Docker多アーキテクチャ対応、A/HK/US株サポート — @NirDiamantAI [出典](https://x.com/i/status/2036174465474674877)

> 中文シーンに実用的。多Agent取引フレームワークで中文データ/表現適配がスムーズ、AI+取引研究の基線に最適 — @aias_0 [出典](https://x.com/i/status/2036220871694819393)

### hesreallyhim/awesome-claude-code

#### ポジティブ

> Claude Codeのガチ勢が使うGitHubリポジトリ9選の2位として、awesome-claude-codeを厳選リソース集として紹介 — @zinedin68783082 [出典](https://x.com/i/status/2036187428176928931)

> Claude Codeを本物のdev teammateにする9つのGitHubリポリストの2番目としてawesome-claude-codeを挙げ、時間を節約せよと推奨 — @DAIEvolutionHub [出典](https://x.com/i/status/2036184029134041208)

> awesome-claude-codeをClaude Code関連のskills/ワークフロー/コマンドなどの大量資源索引として有用と紹介 — @Jalsmida7 [出典](https://x.com/i/status/2036084344843079692)

### supermemoryai/supermemory

#### ポジティブ

> Supermemoryの新手法ASMR（Agentic Search and Memory Retrieval）がLongMemEvalベンチマークで99%を達成、エージェント記憶のフロンティア突破 — @noprogllama [出典](https://x.com/i/status/2036221164675277212)

> SupermemoryがLoCoMoベンチマークで98.6%を記録、OpenAIのネイティブメモリ（33.4%）を圧倒、長期記憶は検索アーキテクチャの問題 — @ifitsmanu [出典](https://x.com/i/status/2035760993331028453)

> ASMRは複数専門エージェント（事実検索、文脈再構築、時系列復元）で並列動作、ベクトル検索を超えるAIメモリ革新の可能性 — @yaelkroy [出典](https://x.com/i/status/2036196984927952974)

#### Tips

> AI研究の繰り返し説明を避けるため、N8NエージェントにSupermemory AIをセットアップ、Geminiの1Mコンテキストでも忘却を補う — @AICEOGiuliano [出典](https://x.com/i/status/2034334248409186730)

#### ネガティブ

> ASMRはマルチエージェントで精度を上げたがベンチマーク特化でレイテンシーが遅く、実用性に懐疑、参考知識として有用 — @DarkZafu [出典](https://x.com/i/status/2036224876323975468)

### Crosstalk-Solutions/project-nomad

#### ポジティブ

> project-nomadの離線AI工作站としての実用性が高く、可移植・低依存・オフライン優先の設計が評価されている — @aias_0 [出典](https://x.com/i/status/2036215215235408086)

> Wikipedia、Khan Academy、オフラインマップ、ローカルAIなどをネット不要で搭載したオフライン生存サーバー — @geeknik [出典](https://x.com/i/status/2035833232017531363)

> GitHubで急上昇中（10.4K stars）、オフライン生存コンピュータとしてAI・知識・ツールを自立的にパック — @ohryansbelt [出典](https://x.com/i/status/2036078091634618374)

#### Tips

> ネット不要でWikipedia、AI、地図、教育ツールをPCに展開し、グリッドダウン時などに活用 — @BuckhornCliffs [出典](https://x.com/i/status/2035877368712045048)

## ソース

- [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)
- [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)
- [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
- [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)
- [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
