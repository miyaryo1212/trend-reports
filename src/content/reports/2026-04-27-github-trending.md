---
title: "Claude Codeエコシステム系ツールがトレンドを席巻"
summary: "Claude Code無料プロキシfree-claude-code、エージェントスキル集mattpocock/skills、VSCode拡張Roo Code、マルチエージェント基盤LobeHubが同時トレンド入り。AIコーディングエージェント周辺ツールの急速な充実が進んでいる。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-04-27
features:
  - "Alishahryar1/free-claude-code: Claude CodeのAPI呼び出しをNVIDIA NIM/OpenRouter/DeepSeek/LM Studio等に無料プロキシするツール"
  - "mattpocock/skills: Claude Code用エージェントスキル集（PRD作成、issue分割、インターフェース設計等）"
  - "RooCodeInc/Roo-Code: VSCode向けAIエージェント開発チーム拡張（GPT-5.5/Claude Opus 4.7対応追加）"
  - "lobehub/lobehub: マルチエージェント協調・MCP対応のAIエージェントプラットフォーム"
codex_review: "盛り上がり方としては少し過熱気味だが、モデル本体より“周辺運用を整える層”が主役になってきたのは面白い。無料化プロキシより、skillsやRooのような作業標準化の流れのほうが地味に長く効くと思う。"
codex_importance: 3
---

## 公式アップデート

### Alishahryar1/free-claude-code

Claude CodeのAnthropic API呼び出しを他プロバイダーに中継する軽量プロキシ。NVIDIA NIM（40 req/min無料）、OpenRouter、DeepSeek、LM Studio（ローカル）、llama.cppの5プロバイダーに対応。環境変数2つの設定でClaude Code CLI・VSCode拡張をそのまま利用可能。Opus/Sonnet/Haikuのリクエストを個別にルーティングするPer-Model Mapping、`<think>`タグの思考トークン変換、5カテゴリのリクエスト最適化（プローブ/タイトル生成等をローカル応答）、Discord/Telegramボットによるリモート操作を搭載。Python 3.14、uv + FastAPI構成。MITライセンス。GitHub Trending全言語・Python両部門にランクイン。

[ソース](https://github.com/Alishahryar1/free-claude-code)

### mattpocock/skills

Matt Pocock氏が個人の`.claude`ディレクトリから公開したClaude Code用エージェントスキル集。22スキルを収録し、`to-prd`（会話からPRD生成→GitHub issue化）、`to-issues`（PRDをvertical sliceでissue分割）、`grill-me`（設計の意思決定ツリーを網羅的に検証するインタビュー）、`design-an-interface`（並列で複数のインターフェース設計を生成）、`tdd`（テスト駆動開発ワークフロー）、`git-guardrails`（コミット安全性チェック）等を含む。`npx skills@latest add mattpocock/skills/<スキル名>`で個別インストール可能。GitHub Trending全言語部門にランクイン。

[ソース](https://github.com/mattpocock/skills)

### RooCodeInc/Roo-Code

VSCode向けAIエージェント開発チーム拡張。v3.53.0でGPT-5.5（OpenAI Codexプロバイダー経由）およびClaude Opus 4.7（Vertex AI経由）のサポートを追加。チャット内の過去チェックポイントへのナビゲーションコントロールも新設。Code/Architect/Ask/Debug/Customの5モード構成。3百万インストール到達後、オリジナルチームはRoomoteに注力するが、コミュニティチームが公式引き継ぎを準備中。Apache 2.0ライセンス。GitHub Trending TypeScript部門にランクイン。

[ソース](https://github.com/RooCodeInc/Roo-Code)

### lobehub/lobehub

マルチエージェント協調プラットフォーム。「Agents as the Unit of Work」をコンセプトに、Agent Builder（自然言語からエージェント自動構築）、Agent Groups（複数エージェント並列協調）、Personal Memory（構造化・編集可能なホワイトボックス記憶）を中核機能とする。MCP Marketplace経由で10,000以上のスキル/プラグイン接続に対応。デスクトップアプリ、リアルタイムWeb検索、Chain of Thought可視化、分岐会話、Artifacts対応。v2.1.53でDeepSeek価格設定とエージェント実行チェックを修正。Apache 2.0ライセンス。GitHub Trending TypeScript部門にランクイン。

[ソース](https://github.com/lobehub/lobehub)

## コミュニティの反応

### Alishahryar1/free-claude-code

#### ポジティブ

> Claude Codeを無料化するプロキシ、NVIDIA NIM/OpenRouter/DeepSeek/LM Studio対応、Telegramボット付きで画期的 — @hasantoxr [出典](https://x.com/i/status/2046898117241635240)

> オープンソースプロキシでAnthropic料金不要、複数無料プロバイダ対応、2変数+1コマンドでセットアップ完了、3Kスター — @sentient_agency [出典](https://x.com/i/status/2048010841572958689)

#### Tips

> NVIDIA NIM APIキー取得からgit clone、.env設定、uv runでローカルプロキシ起動の手順を詳述 — @beta_gamma22 [出典](https://x.com/i/status/2048452034450592003)

> 無料NVIDIAキー挿入でlocalhost経由、40req/min、複数モデル対応、思考トークンストリーミング、Telegramボット実装 — @Arindam_1729 [出典](https://x.com/i/status/2047564714818101555)

### mattpocock/skills

#### ポジティブ

> Matt Pocockが個人Claude CodeスキルフォルダをOSS公開。19kスター、22スキル（to-prd, grill-me, design-an-interface, tdd等）。日常アップグレード — @BeauJohnson89 [出典](https://x.com/i/status/2048110404514017356)

> Claude/Codeエージェント用即戦力スキル。PRD変換、grill-meデザイン検証、vertical-slice issue分割、TDD等。.claudeディレクトリ由来の実践的コレクション — @yellowfox_h4xor [出典](https://x.com/i/status/2048100648978378807)

#### Tips

> grill-meスキルに着想。Codex/ClaudeでPRD作成→相互批判→合意形成のOrder of the Agentsツールを構築。単独より優れたPRD生成 — @deepwhitman [出典](https://x.com/i/status/2048128836412510593)

> 17スキルの詳細解説。write-a-prd→PRD→issue、prd-to-issues、grill-me、design-an-interface、tdd、git-guardrails等。npxで個別インストール可能 — @michabbb [出典](https://x.com/i/status/2047774117328564696)

### RooCodeInc/Roo-Code

該当なし。過去7日間のX投稿で関連する反応は確認されなかった。

### lobehub/lobehub

#### ポジティブ

> v2.1.53をリリース、DeepSeekの価格設定とエージェント実行チェックを修正。信頼性向上にシフト — @RazzReport [出典](https://x.com/i/status/2048512043536244982)

> Seedance 2.0がLobeHubで720pから1080p HDにアップグレード、より鮮明で共有しやすくなった — @AudreyLimsAi [出典](https://x.com/i/status/2048483686493179999)

#### Tips

> DeepSeek-V4-Proをロボットのビジョンパイプラインでリアルタイムポーズ推定に使用予定。無料ティアが便利 — @xuwencheng [出典](https://x.com/i/status/2048377656434188753)

#### ネガティブ

> LobeHubのGPT-5.5投稿に対して「嘘」との指摘。画像生成は以前使用しクレカ不要が好評だが情報精度に疑問 — @aikaif7 [出典](https://x.com/i/status/2048484890086351285)

## ソース

- [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)
- [mattpocock/skills](https://github.com/mattpocock/skills)
- [RooCodeInc/Roo-Code](https://github.com/RooCodeInc/Roo-Code)
- [lobehub/lobehub](https://github.com/lobehub/lobehub)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
