---
title: "金融エージェントと科学自動化がTrending席巻"
summary: "自律型金融リサーチエージェントDexter（20K星）とAgentScope（21K星）が急浮上。AI-Scientist-v2は査読通過の完全自動論文生成を実現。Claude Code周辺ではoh-my-claudecode（14.6K星）とclaude-skills（205スキル）がエコシステムを拡大中。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-03-30
features:
  - "virattt/dexter: LLMベースの自律型金融リサーチエージェント、タスク計画・自己検証・リアルタイム市場データ対応"
  - "agentscope-ai/agentscope: プロダクション対応のマルチエージェントフレームワーク、MCP/A2A対応・リアルタイム音声・Agentic RL統合"
  - "SakanaAI/AI-Scientist-v2: エージェント型ツリー探索による完全自動科学論文生成システム、ICLR2025ワークショップ論文が査読通過"
  - "alirezarezvani/claude-skills: Claude Code/Codex/Gemini CLI等11ツール対応の205種エージェントスキル・プラグインライブラリ"
  - "Yeachan-Heo/oh-my-claudecode: Claude Codeのマルチエージェントオーケストレーション、Team/Codex/Gemini CLI連携・自動並列実行"
  - "hacksider/Deep-Live-Cam: リアルタイム顔交換・ディープフェイク映像生成、単一画像からワンクリック処理"
codex_review: "金融と科学が同じ週に跳ねたのは面白いが、本丸は個別プロダクトより“自律実行を業務に埋め込む作法”の普及だと思う。Deepfake勢の伸びも含め、熱狂の裏でガバナンス需要が一段と重くなった印象です。"
codex_importance: 4
---

## 公式アップデート

### virattt/dexter

LLMベースの自律型金融リサーチエージェント「Dexter」がGitHub Trending全言語・TypeScript両部門でランクイン。複雑な金融質問をタスク計画に分解し、リアルタイム市場データ（損益計算書、貸借対照表、キャッシュフロー計算書）を使って自律的に分析を実行。自己検証とループ検出による安全機構を搭載。Bun runtime上で動作し、OpenAI / Anthropic / Google / xAI / Ollamaなど複数LLMプロバイダーに対応。WhatsAppゲートウェイ経由でのチャット利用も可能。20,000超スターを達成。

[ソース](https://github.com/virattt/dexter)

### agentscope-ai/agentscope

Alibaba DAMO Academy発のプロダクション対応マルチエージェントフレームワーク「AgentScope」がGitHub Trending全言語部門にランクイン。ReActエージェント、MCP/A2Aプロトコル対応、リアルタイム音声エージェント、human-in-the-loop、メモリ圧縮、Agentic RL（Trinity-RFT統合）を搭載。2026年3月にはCoPaw（Co Personal Agent Workstation）をオープンソース化。K8sデプロイ、OTelによるオブザーバビリティ、サーバーレスクラウドデプロイにも対応。21,000超スターを達成。

[ソース](https://github.com/agentscope-ai/agentscope)

### SakanaAI/AI-Scientist-v2

SakanaAIが開発した完全自動科学研究システム「AI Scientist-v2」がGitHub Trending Python部門にランクイン。仮説生成、実験実行、データ分析、論文執筆を自律的に実行するエンドツーエンドシステム。前身のv1と異なり、人間作成テンプレートへの依存を排除し、プログレッシブなエージェント型ツリー探索（BFTS）を採用。AIが完全に執筆したワークショップ論文がICLR 2025で査読を通過し受理された初の事例。Claude 3.5 Sonnetを実験フェーズに使用した場合の実行コストは約$15-20。

[ソース](https://github.com/SakanaAI/AI-Scientist-v2)

### alirezarezvani/claude-skills

Claude Code / OpenAI Codex / Gemini CLI等11のAIコーディングツールに対応する205種のエージェントスキル・プラグインライブラリがGitHub Trending Python部門にランクイン。エンジニアリング（26コア + 30 POWERFUL）、プロダクト（14）、マーケティング（43）、C-Level Advisory（28）など9ドメインをカバー。268個のPython CLIツール（全て標準ライブラリのみ、pip不要）を同梱。`convert.sh`でCursor / Aider / Windsurf等7ツール向けフォーマットに一括変換可能。5,200超スターを達成。

[ソース](https://github.com/alirezarezvani/claude-skills)

### Yeachan-Heo/oh-my-claudecode

Claude Codeのマルチエージェントオーケストレーション「oh-my-claudecode」がGitHub Trending TypeScript部門にランクイン。v4.4.0でCodex/Gemini MCP Serverを廃止し、tmux CLI Workers方式に移行。Team（ステージドパイプライン）、Autopilot（自律実行）、Ultrawork（最大並列）、Ralph（永続モード）など複数の実行モードを提供。32種の専門エージェント、Haiku/Sonnet/Opus自動ルーティングによるトークン30-50%削減を実現。14,600超スターを達成。

[ソース](https://github.com/Yeachan-Heo/oh-my-claudecode)

### hacksider/Deep-Live-Cam 2.1

リアルタイム顔交換・ディープフェイク映像生成ツール「Deep-Live-Cam」がGitHub Trending全言語部門にランクイン。単一画像からワンクリックでリアルタイム顔交換を実行。Mouth Mask（口元保持）、Face Mapping（複数人同時交換）、映画視聴時のリアルタイム顔置換などの機能を搭載。v2.7 betaではNVIDIA / AMD GPU / CPU / Mac Siliconのプリビルド版を提供。倫理的使用チェック機能を内蔵。85,000超スターを達成。

[ソース](https://github.com/hacksider/Deep-Live-Cam)

## コミュニティの反応

### virattt/dexter

#### ポジティブ

> GitHubスター20k超え、元投資銀行員が200行のコードで作った自律型株リサーチエージェント。「Claude Code for finance」として人気 — @riem_ai [出典](https://x.com/i/status/2038053632625484078)

> 19.5k+ stars到達。SECファイリング解析、競合分析、市場トレンド合成で2週間分のアナリスト業務を20分で。アナリスト生産性10x向上 — @bytecrafter_1 [出典](https://x.com/i/status/2037930425398833332)

> 割安株自動発見、財務諸表・市場データ解析、投資レポート生成を数秒で自動化。100% OSSで無料商用OK — @milbon_ [出典](https://x.com/i/status/2037015501940154746)

#### Tips

> 金融研究Agentとして実用的ニーズ大だが、規制コンプライアンス処理が鍵 — @aa22396584 [出典](https://x.com/i/status/2038093813491916989)

### agentscope-ai/agentscope

#### ポジティブ

> pip install agentscopeで簡単にReActエージェント、memory、planningを起動可能。MCP/A2Aプロトコル、リアルタイム音声、human-in-the-loop、RLによるfine-tuning対応 — [出典](https://x.com/i/status/2038008084585418979)

> Alibaba DAMO Academy製の生産対応マルチエージェントフレームワーク。視覚ビルダー、MCPツール、memory、RAG、reasoningモジュール内蔵で、複雑なマルチエージェントパイプラインを構築 — [出典](https://x.com/i/status/2037840713686347919)

> 21K stars超えのAgentScopeは、生産環境向けにすべて1回のインストールで揃う稀有なフレームワーク — [出典](https://x.com/i/status/2037896031011049489)

#### Tips

> AlibabaのAgentScope（20K stars）はByteDanceのDeerFlowと共に中国製オープンソースエージェントフレームワークで、中国LLM推奨。AIスタックが地政学的に二極化し、別々のエコシステムが生まれている — [出典](https://x.com/i/status/2037948341225668986)

### SakanaAI/AI-Scientist-v2

過去7日間にX上での注目すべき反応は確認できなかった。

### alirezarezvani/claude-skills

#### ポジティブ

> Claude Code向け192+のスキルとプラグインが揃ったリポジトリとして、コミュニティの参考源と紹介 — @yieldhunter95 [出典](https://x.com/i/status/2038003445010198883)

> Claude Codeの無料スキル保存所5選でalirezarezvani/claude-skillsを実務用192スキルとして3位に紹介。OpenAI Codex/Gemini CLIなど複数ツール対応 — @cherryplan2 [出典](https://x.com/i/status/2036237803365998665)

#### Tips

> Claude Codeにalirezarezvani/claude-skillsの205スキルプラグインをインストールして試用。activate_skillコマンドで視点が変わり、Pythonツール268個同梱で実用的 — @knakazono10111 [出典](https://x.com/i/status/2037677050228826623)

### Yeachan-Heo/oh-my-claudecode

#### ポジティブ

> Claude Codeの並列実行問題を解決するOSS、Stars14,600超え。Haiku/Sonnet/Opus自動振り分けでトークン30-50%削減。公式AgentTeamsとの違いも解説 — @morphox_ai [出典](https://x.com/i/status/2038037018752782529)

> 32専門agents、5実行モード(Autopilot/Ultrapilot等)、自動モデルルーティング、レートリミット時自動再開。1コマンドインストールでClaude Code強化 — @shubhraaanshu [出典](https://x.com/i/status/2037998900653789236)

> Claude Codeを数ヶ月使用中、oh-my-claudecodeプラグインで劇変。32agents並列、Ultrapilotで高速化 — @_vmlops [出典](https://x.com/i/status/2036975297116201023)

#### Tips

> Claude Codeをシングルからフルチームへ進化、プロンプト不要でオーケストレーション。コーディングよりAI開発チーム管理感覚 — @GithubProjects [出典](https://x.com/i/status/2036826536658272754)

### hacksider/Deep-Live-Cam

#### ポジティブ

> Deep-Live-Cam 2.1の顔交換・ディープフェイクツール紹介、倫理的・法的使用を強調、85kスター — @GitHubGPT [出典](https://x.com/i/status/2038333319696289813)

> リアルタイム顔交換ツールとしてブックマーク推奨、84kスター超えのPythonリポ — @TeckHacksDaily [出典](https://x.com/i/status/2038256443447452091)

#### ネガティブ

> 単一画像でライブビデオコール顔交換可能、詐欺リスク警告 — @eng_khairallah1 [出典](https://x.com/i/status/2037916152891064414)

> 無料オープンソースでリアルタイム顔スワップ、Zoom等で悪用可能と警鐘、80kスター — @heynavtoor [出典](https://x.com/i/status/2037158617519186144)

#### Tips

> ツールの検証と倫理的ガードレール説明、ハード要件とリスク分析、検知技術の必要性指摘 — @Divine_CashFlow [出典](https://x.com/i/status/2037441032996937908)

## ソース

- [virattt/dexter](https://github.com/virattt/dexter)
- [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope)
- [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2)
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)
- [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
- [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
