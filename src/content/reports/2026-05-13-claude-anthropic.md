---
title: "Project Glasswingに賛否両論、/goalコマンドにCodexユーザーが歓迎"
summary: "Project Glasswing/Claude Mythos Previewに対しX上で実力を評価する声と誤検知を指摘する声が混在。Claude Code v2.1.139の/goalコマンドはCodexからの移行組を中心に好評。コミュニティではContext Engineering、マルチエージェントのトークン最適化、Routinesによる自動Issue対応など実践的な記事が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-13
features:
  - "Project Glasswing / Claude Mythos Preview"
  - "Claude Code v2.1.139 Agent View"
  - "Claude Code v2.1.139 /goalコマンド"
  - "Claude Code v2.1.139 claude plugin details"
  - "Claude Code v2.1.139 Hook continueOnBlock"
  - "Claude Code v2.1.139 Hook argsフィールド"
  - "Claude Code v2.1.139 MCP CLAUDE_PROJECT_DIR環境変数"
  - "Claude Code v2.1.139 Transcript Viewナビゲーション"
  - "Claude Code v2.1.139 サブエージェントagent_id/parent_agent_idヘッダー"
  - "Claude on Mars"
codex_review: "Glasswingは話題先行にも見えるが、誤検知の論点が早めに可視化されたのは健全だ。一方で本当に重要なのは/goal以降の運用知見が厚くなっており、Claude Codeが実験枠から常用ツールへ移りつつある点だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.139（前回から継続）

5月11日リリースの大型アップデート。本日の追加リリースはなし。主な新機能はAgent View、/goalコマンド、Hook強化など。詳細は前回レポート参照。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.139)

### Project Glasswing / Claude Mythos Preview（前回から継続）

12社連携のサイバーセキュリティ構想と防御特化フロンティアモデル。本日の公式新情報なし。

### Claude on Mars

NASAのPerseveranceローバーがClaude＋Claude Codeで自律走行計画を実行し、火星表面約400mを走破したとする記事が公開された。

## コミュニティの反応

### Project Glasswing / Claude Mythos Preview

#### ポジティブ

> Project Glasswingに招待されMythosで自社製品をスキャンしたところ、著名企業製品に無数の脆弱性を発見。軽微なものを組み合わせてroot権限奪取まで可能で、マーケティング以上の実力を実感 — @katakoto [X](https://x.com/i/status/2054245710204371168)

#### ネガティブ

> MythosがcURLコードをスキャンし5件の脆弱性を報告したが、実際はLow1件のみで他は誤検知。既存AIツールと有意差なく、成功したマーケティングという評価 — @MalwareBibleJP [X](https://x.com/i/status/2054221617098891565)

> AnthropicがProject Glasswingで防御側限定のMythos提供を発表した直後にOpenAIがDaybreakを即発表したことへの批判 — @hisaju01 [X](https://x.com/i/status/2053978072479895955)

#### Tips

> NHKラジオ出演でClaude Mythos PreviewとProject Glasswingの社会的影響、日本側の対応を紹介 — @inflorescencia [X](https://x.com/i/status/2052521463186669661)

> Mythos PreviewはGlasswing限定提供。AIが脆弱性探索・exploit作成を容易化する中、防御側はパッチ管理強化とAI前提設計が必要 — @t_nihonmatsu [X](https://x.com/i/status/2053834397187744253)

### Claude Code /goalコマンド

#### ポジティブ

> /goalコマンドが追加され、完了条件を指定するとClaudeが自律的に作業を継続。Codexの類似コマンドに近いと評価 — @yoppy0123 [X](https://x.com/i/status/2053975016853967343)

> これまで/loopで代用していたCodexの/goal機能が正式搭載。ポジティブな反応 — @eternityspring [X](https://x.com/i/status/2053986543648555468)

> Codexの/goalに中毒だったユーザーとして歓迎。選択肢が増えて便利 — @AI_with_Eric [X](https://x.com/i/status/2053982081236025525)

> /goalコマンドは便利だが、利用枠の狭さから使い所を選ぶ必要がある — @kgsi [X](https://x.com/i/status/2053979281911628039)

#### Tips

> Claude Code向けのgoal-ccスキルが公開。曖昧な目標を分解・追跡タスクに変換して実行し、Codexの/goalをネイティブで再現 — @AdamJuanPepe [X](https://x.com/i/status/2052985793900388425)

### Claude Code Agent View / その他v2.1.139新機能

X/Twitterでの品質基準を満たす投稿は確認されなかった。リリースから間もないため今後の反応に注目。

### Context Engineering

#### Tips

> Context Engineeringとは何か。プロンプトの次に来る、LLMへの情報設計という技術。ShopifyのCEO Tobi Lutkeの発言を起点に解説 — @karaagedesu [Zenn](https://zenn.dev/karaagedesu/articles/a7d58f2f197aa3)

### Claude Code マルチエージェント・トークン最適化

#### Tips

> Claude Codeのマルチエージェントで削れるトークンと削れないトークンの見分け方。COO中継や権限重複は設計ミスとして削れるが、コンテキスト独立性のコストは構造的要件 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-09-103300)

> C3がClaude Code Conductorから「3C」へ改名。Claude / Codex / Cursor対応のマルチエージェントオーケストレーター — @satoh-y-0323 [Zenn](https://zenn.dev/satoh_y_0323/articles/3ead52ca37f3e5)

### Claude Code Routines・自動化

#### Tips

> Claude Code Routinesで GitHub Issueの自動修正を構築。4人のメンバーでcron設定をずらし、平日15分に1回AIがIssueを拾う状態をExtra Usageなしで実現 — @uji [Zenn](https://zenn.dev/notahotel/articles/claude-routine-auto-fix-issue)

> instinctの設計とハーネスの完全自動改善。Everything Claude Codeのsession情報をinstinctに変換する仕組みの解説 — @artie [Zenn](https://zenn.dev/einperience/articles/cc8d468209c937)

### Claude Code記憶・永続化

#### Tips

> Claude Codeとの会話をSQLiteに永続化。72イベント・204コミットで運用安定。毎朝の「前回までの経緯」説明から解放 — @omochi [Zenn](https://zenn.dev/oasisz369/articles/e9cc9b4936bed7)

> 記憶を持ったAIが次に記憶を整理しはじめた。AnthropicのDreaming機能による記憶の自己改善 — @daishir0 [Zenn](https://zenn.dev/daishiro/articles/claude-dreaming-memory-self-improvement)

### Claude Code MCP連携

#### Tips

> Claude Code MCP総まとめ2026。4カテゴリで覚える主要MCP × 設定例 × ハマりどころ — @Trailfusion AI [Zenn](https://zenn.dev/trailfusionai/articles/ai-news-20260427191318-ee52d5)

> MCP serverの約99%がToolsしか使っていない。Resources / Prompts / Sampling / Roots / Elicitation全実装の実例 — @Michie [Zenn](https://zenn.dev/kanseilink/articles/linksee-memory-mcp-five-blocks-20260507)

### Claude Codeレビュー・品質管理

#### Tips

> コードレビューのボトルネックを「する側」と「される側」の両面から解消する。AIエージェントがPRを作るスピードにレビューが追いつかない問題への取り組み — @yub0n [Zenn](https://zenn.dev/atamaplus/articles/resolve-review-bottleneck)

> AIに書かせたコードは動いた。でもレビューで「なぜこの設計にしたのか」と聞かれて答えられなかった。学習目標の台帳化による対策 — @Kaji [Zenn](https://zenn.dev/kaji_kaji/articles/ai-code-review-explainability)

### Claude Code活用事例

#### Tips

> Claude Codeと会話しながら習慣トラッカーアプリを作った。30分×1週間でGitHub ログイン・DB連携・Vercelデプロイまで完成 — @Zero_vive [Zenn](https://zenn.dev/zero_vive/articles/a5119a4848b95d)

> Claude CodeでCakePHP→Next.jsをフルリライト。動画配信システムの移行判断 — @いけ [Zenn](https://zenn.dev/sprix_it/articles/fa3bfbd45c5cb7)

> 「どんなサイトにしたいか話すだけ」でホームページが公開された。30分で世界中からアクセス可能に — @はゆかたいし [Zenn](https://zenn.dev/cyberdog_ai_lab/articles/20260512-claude-website-generator)

> Claude Codeで戦う離婚交渉。LINE 5万行を解析して慰謝料合意まで — @null婚 [Zenn](https://zenn.dev/nullkon/articles/0de62a077b5d19)

### Claude Code背景実行・パフォーマンス

#### Tips

> Claude Codeのbackground bashでビルド待ちの時間を消す。run_in_backgroundの使い方と注意点 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-background-bash-20260512)

> 30日後にサービスをリリースして不労所得を得る開発者（2日目）。CIが7倍速くなった — @てん [Zenn](https://zenn.dev/tempeso/articles/6e36f89a90af40)

### Claude Platform on AWS

#### Tips

> Claude Platform on AWSが一般提供（GA）。VS CodeのClaude Codeを動かす手順 — @LiteRa [Qiita](https://qiita.com/LiteRa/items/7fc0bd30022497f9e01c)

> Claude Platform on AWS 実装ガイド。運用・セキュリティ視点での解説 — @j-dai [Qiita](https://qiita.com/j-dai/items/d228234f043972e80103)

### ant CLI

#### Tips

> ant CLI入門。Claude APIをターミナルとCI/CDで使いこなす完全ガイド。Anthropic公式コマンドラインツール — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/211-ant-cli-claude-api-terminal-guide)

### Anthropic研究・安全性

#### Tips

> Natural Language Autoencoders。AIの「隠れた思考」を読み解く新技術。LLMの内部状態を自然言語テキストに変換する手法 — @ryok [Zenn](https://zenn.dev/ryok/articles/anthropic-natural-language-autoencoders)

> 再帰的自己改善(RSI)の現実化。OpenAIとAnthropicが警告する分岐点の到来。ジャック・クラーク「2028年末までにRSIが60%以上で発生」と予測 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/7dbfe718b95aa1)

### Opus 4.7

#### Tips

> 「Opus と Opus (1M context)」の3か月後。Opus 4.7リリースとAnthropic公式ポストモーテム。品質劣化の公式認定とトークナイザー変更の経緯 — @きょん [Zenn](https://zenn.dev/kimkiyong/articles/7ba6385803a8f3)

### AIツール間連携・設定共有

#### Tips

> AIツール間でスキルと設定を共有する。AGENTS.mdと.agents/skills/に集約する形式で、Claude Code・Codex・IBM Bob間の管理を効率化 — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/7c68a24a032b4d)

### Personal AI Infrastructure (PAI)

#### Tips

> Personal AI Infrastructure (PAI) 技術調査。Daniel MiesslerがClaude Code上に構築したLife Operating System。v5.0.0で完成形 — @suwa-sh [Zenn](https://zenn.dev/suwash/articles/pai_20260513)

### AI組織導入

#### Tips

> 馬具の話はもういい。馬と乗り手の話をしよう。StoreHeroのAI組織導入4ヶ月。エンジニアだけでなくナレッジワーカーを含む組織へのAI浸透の実践 — @kazukinagata [Zenn](https://zenn.dev/storehero/articles/a04cc7ac1bd8c4)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
