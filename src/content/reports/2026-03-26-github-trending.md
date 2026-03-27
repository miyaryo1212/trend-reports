---
title: "last30days-skillとclaude-code-actionが新規トレンド入り"
summary: "Claude Code用リサーチスキルlast30days-skillがトレンド1位。Anthropic公式のclaude-code-actionがGitHub PR/Issue自動化で注目。MoneyPrinterTurboが52Kスター維持、flow2apiがGemini/Veo互換APIとして急浮上。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-03-26
features:
  - "mvanhorn/last30days-skill: Claude Code用AIエージェントスキル、Reddit/X/YouTube/HN/Polymarketなど横断でトピック調査・要約を生成"
  - "harry0703/MoneyPrinterTurbo: AI大規模モデルでテーマを指定するだけで高画質ショート動画を自動生成するPythonツール"
  - "TheSmallHanCat/flow2api: Gemini画像生成・Veo動画生成のOpenAI互換APIラッパー、負荷分散・トークン自動更新対応"
  - "supermemoryai/supermemory: AI向けメモリ・コンテキストエンジン、会話から事実抽出しユーザープロファイルを自動構築するAPI"
  - "anthropics/claude-code-action: GitHub PR/Issue向けClaude Code Action、コードレビュー・実装・質問応答を自動化"
  - "EveryInc/compound-engineering-plugin: Claude Code/Codex等向けCompound Engineeringプラグイン、計画→実行→レビューの開発ワークフロー支援"
  - "Crosstalk-Solutions/project-nomad: オフライン対応の自己完結型サバイバルコンピュータ、ローカルAIと知識ベースを搭載"
---

## 公式アップデート

### mvanhorn/last30days-skill v2.9.5（新規）

Claude Code用AIエージェントスキル「/last30days」がv2.9.5をリリース。Reddit、X、Bluesky、YouTube、TikTok、Instagram、Hacker News、Polymarket、Web検索を横断し、過去30日間のトピックを調査・要約する。v2.9.5ではBluesky/AT Protocolをソーシャルソースとして追加、「X vs Y」比較モードで3並列リサーチと比較表を生成、プロジェクトごとの`.claude/last30days.env`設定、セッション開始時の設定検証、455以上のテストカバレッジを実装。Claude Code Plugin、Gemini CLI、Codex CLIに対応。ClawHubマーケットプレイスでも配布。

[ソース](https://github.com/mvanhorn/last30days-skill)

### harry0703/MoneyPrinterTurbo（前回から継続）

AI大規模モデルを活用したワンクリック短動画生成ツール。キーワードまたはテーマを入力するだけで、動画文案、素材、字幕、BGMを自動生成し、高画質ショート動画を合成。縦型9:16と横型16:9に対応。OpenAI、Moonshot、Azure、gpt4free、one-api、通義千問、Google Gemini、Ollama、DeepSeek、文心一言、Pollinations、ModelScopeなど10以上のモデルに対応。52,000超スターを維持しトレンドに継続。

[ソース](https://github.com/harry0703/MoneyPrinterTurbo)

### TheSmallHanCat/flow2api（新規）

Gemini画像生成（gemini-2.5-flash/3.0-pro/3.1-flash、imagen-4.0）およびVeo動画生成（veo 2.0/2.1/3.1、文生・図生・首尾帧・多図・放大）のOpenAI互換APIラッパー。負荷分散、AT/STトークン自動更新、キャッシュ戦略、HTTP/SOCKS5プロキシ、Web管理画面を搭載。Gemini官方リクエストボディ互換（generateContent/streamGenerateContent）にも対応。Docker/WARPモード/有頭打码モードでのデプロイをサポート。2026-03-06にR2V（多画像生成ビデオ）の新版リクエストボディに同期済み。

[ソース](https://github.com/TheSmallHanCat/flow2api)

### supermemoryai/supermemory（前回から継続）

AI向けメモリエンジンがLongMemEval、LoCoMo、ConvoMemの3つの主要AIメモリベンチマークで1位を維持。ASMR（Agentic Search and Memory Retrieval）手法により、ベクトルDB不要でマルチエージェント並列処理を実現。会話から自動的に事実を抽出し、ユーザープロファイルを構築、矛盾処理・期限切れ情報の自動忘却を行う。Claude Code、OpenCode、OpenClaw向けプラグインとMCPサーバーを提供。18,000超スター。

[ソース](https://github.com/supermemoryai/supermemory)

### anthropics/claude-code-action（新規）

Anthropic公式のGitHub PR/Issue向けClaude Code Action。@claudeメンション、Issue割り当て、自動化タスクなどのワークフローコンテキストに基づいてインテリジェントにモード検出。コードレビュー、質問応答、コード実装（修正・リファクタリング・新機能）を自動化。Anthropic直接API、Amazon Bedrock、Google Vertex AI、Microsoft Foundryの複数認証方式に対応。v1.0でunified `prompt`/`claude_args`入力による簡素化設定を導入。チェックボックス付きのプログレストラッキングとJSON構造化出力をサポート。

[ソース](https://github.com/anthropics/claude-code-action)

### EveryInc/compound-engineering-plugin（前回から継続）

Claude Code、Codex、Cursor、OpenCode、Droid、Pi、Gemini CLI、GitHub Copilot、Kiro、Windsurf、OpenClaw、Qwen Code等向けのCompound Engineeringプラグイン。Brainstorm→Plan→Work→Review→Compoundの循環ワークフローを提供。`/ce:ideate`で改善アイデア発見、`/ce:brainstorm`で要件探索、`/ce:plan`で詳細計画、`/ce:work`でworktree実行、`/ce:review`でマルチエージェントレビュー、`/ce:compound`で学習文書化。v3リリースが予定されており、新たにKiro、Windsurf、Qwenへの対応も追加。

[ソース](https://github.com/EveryInc/compound-engineering-plugin)

### Crosstalk-Solutions/project-nomad（前回から継続）

自己完結型オフラインサバイバルコンピュータ「Project N.O.M.A.D.」。Ollama + Qdrantによるローカルチャット、Kiwixによるオフライン版Wikipedia・医療リファレンス・電子書籍、KolibriによるKhan Academyコース、ProtoMapsによるオフラインマップ、CyberChefによるデータツール、FlatNotesによるノート機能を搭載。Debian系OSに対応し、インストール後はインターネット接続不要。16,000超スターに急成長。

[ソース](https://github.com/Crosstalk-Solutions/project-nomad)

## コミュニティの反応

### mvanhorn/last30days-skill

#### ポジティブ

> Claude Codeのリアルタイム研究ツールとして、過去30日のReddit/Xから最新トレンドを抽出・プロンプト生成。コミュニティのアップボート傾向を活用し、陳腐化したプロンプト問題を解決 — @ChrisLaubAI [出典](https://x.com/i/status/2036725043338850327)

> GitHubトレンド1位。広範なソースから信頼性高いトレンド分析・要約でAI業界最先端を追う情報収集ツール — @trend_idea_bit [出典](https://x.com/i/status/2036937329928229338)

#### Tips

> 「highest performing cold email frameworks」を入力し、3Ps/ADAフレームワークを発見・3つのcold emailバリエーションを即生成。研究ワークフローを置き換え — @startupideaspod [出典](https://x.com/i/status/2036896888507818099)

> 多プラットフォーム（Reddit/X/Bluesky/YouTubeなど）から最新トピックを調査・要約し、Claudeで常に最新情報を保持 — @pudgybuzz [出典](https://x.com/i/status/2036833557381788027)

### harry0703/MoneyPrinterTurbo

#### ポジティブ

> GitHubで52k超スターのトレンド入りツール。AIでテーマ入力のみで高画質ショート動画を自動生成、複数モデル対応で横/縦画面・バッチ生成可 — @awesomeJason4 [出典](https://x.com/i/status/2036676996500177060)

> ファンレスコンテンツ自動化。10+ LLM対応、多動画生成、コピー・字幕・ボイス・BGM・HD動画。100%オープンソース — @abhishek__AI [出典](https://x.com/i/status/2037007724605825095)

> GitHub Trendingで登場。LLMで短動画自動生成、オープンAgentエコの一部として注目 — @sitinme [出典](https://x.com/i/status/2036792215003885698)

#### Tips

> 60秒以内でファンレスYouTube動画完生成（脚本・映像・字幕・音楽）。収益化向け — @Juan_Luis_Soria [出典](https://x.com/i/status/2036913948612547046)

> ニッチを選んで毎日動画生成、affiliateで$1-5K/月パッシブインカム。無料GitHubツール活用 — @AIHustleKit [出典](https://x.com/i/status/2036620148170182802)

### TheSmallHanCat/flow2api

#### ポジティブ

> Python Trendingでflow2apiを紹介。無限回のbanana pro逆向账号池、負荷分散・AT自動更新・キャッシュ・プロキシ対応 — @pythontrending [出典](https://x.com/i/status/2036771165146906655)

### supermemoryai/supermemory

#### ポジティブ

> ASMR手法で長期記憶ベンチマークLongMemEval_sにて99%精度達成。ベクトルDB不要でマルチエージェント並列処理を活用 — @ktknd [出典](https://x.com/i/status/2035834878076596466)

> AIメモリ問題解決の神ツールとしてGitHubリポを推奨。スケーラブル設計が業務AIに最適 — @awesomeJason4 [出典](https://x.com/i/status/2036416521891881190)

#### ネガティブ

> ASMRはマルチエージェントで高精度だがベンチマーク最適化でレイテンシ遅く、実用性に懐疑。参考になる構成 — @DarkZafu [出典](https://x.com/i/status/2036224876323975468)

#### Tips

> Zentro（24/7不動産ウェブエージェント）を@browser_use + @convex + @agentmail + @supermemory + @hud_aiで構築。リスティングを自動追跡 — @kavir777 [出典](https://x.com/i/status/2028169851211272676)

> ASMRの詳細検証：Ingestion/Revelation/Answeringの3フェーズでObserver/Searchエージェントが並列動作。Vector DB廃止が革新的だがコスト・レイテンシ課題あり — @eda_u838861 [出典](https://x.com/i/status/2036296516625904053)

### anthropics/claude-code-action

#### ポジティブ

> GitHub PRをスマートプレイグラウンドに変えるClaude Code Action：自動レビュー、回答、コード変更が可能で、コラボコーディングの未来か — @jakub_slys [出典](https://x.com/i/status/2036053719863726099)

> GitHub Actions + claude-code-actionでエージェント指示をYAMLでバージョン管理、CIログで実行履歴検証しやすくMac mini不要 — @BoMiaoFinance [出典](https://x.com/i/status/2035270147964104885)

#### ネガティブ

> claude-code-actionが汚染されたら多くの会社が終わりそう — @ischca_dev [出典](https://x.com/i/status/2036649300995010983)

#### Tips

> Datadog MCP使えずともPup CLI + agent-skillsをGitHub Actionsで組み合わせ、Claude Code ActionとAWS Bedrockでインシデント調査レポート自動生成 — @__su888 [出典](https://x.com/i/status/2036564715212537958)

> GitHub IssueをトリガーにClaude Code Actionでバグ修正自動化、QAチケット後AIがPR生成、人間は承認のみでコンテキストスイッチ削減 — @topickapp_com [出典](https://x.com/i/status/2034620151761346998)

### EveryInc/compound-engineering-plugin

#### ポジティブ

> Compound EngineeringプラグインのIdeateスキルが高く評価され、アイデアを10倍明確にしたという使用感 — @kylelegare [出典](https://x.com/i/status/2036863240656085125)

> バージョン3リリース予定で、新機能追加とライブストリーム開催予定 — @kieranklaassen [出典](https://x.com/i/status/2036525616657494499)

#### Tips

> superpowers-ruby v5.0.6でcompound skillをEveryIncプラグインから適応、修正内容をdocs/solutionsに自動キャプチャ — @lucianghinda [出典](https://x.com/i/status/2036768274634113245)

> Claude Codeの計画→実行を徹底するためCompound Engineeringプラグインを推奨 — @L_go_mrk [出典](https://x.com/i/status/2036404660534387003)

### Crosstalk-Solutions/project-nomad

#### ポジティブ

> オフライン教育サーバーとしてAIチャットとライブラリを搭載、Debianベースで簡単インストール、スター数16k超 — @GitHubGPT [出典](https://x.com/i/status/2036885184642244910)

> アポカリプス対応オフライン知識サーバー：Wikipedia、地図、ローカルAIを古いPCで動作 — @imgeekkk [出典](https://x.com/i/status/2036823591858434374)

> プログラマー向けツール1位：オフラインサバイバル用、10kスター — @GitHub_p2 [出典](https://x.com/i/status/2036816166094848423)

#### Tips

> UniFi全家桶を1行コマンドでDockerデプロイ、MongoDB自動処理で低コストネットワーク自治 — @felix080926 [出典](https://x.com/i/status/2036719598859440516)

## ソース

- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)
- [TheSmallHanCat/flow2api](https://github.com/TheSmallHanCat/flow2api)
- [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)
- [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)
- [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
