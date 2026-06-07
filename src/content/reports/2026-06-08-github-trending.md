---
title: "AIエージェントスキルとパーソナルAI基盤が急成長"
summary: "マルチプラットフォーム横断リサーチスキルlast30days-skillが全言語・Python両部門で1位。CopilotKitのAG-UIプロトコル、MemPalaceのローカルAIメモリ、PAI v5.0.0のLife OSコンセプトがトレンド入り。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-06-08
features:
  - "mvanhorn/last30days-skill: AIエージェントスキル、Reddit/X/YouTube/HN/Polymarket横断でトピックをリサーチし要約を生成"
  - "CopilotKit/CopilotKit: エージェントネイティブアプリのフロントエンドスタック、AG-UIプロトコル提供、React/Angular/Mobile/Slack対応"
  - "MemPalace/mempalace: ローカルファーストのAIメモリシステム、LongMemEvalで96.6% R@5達成、ChromaDB/Qdrant/pgvector対応"
  - "danielmiessler/Personal_AI_Infrastructure: Claude Code上に構築するLife OS、パーソナルAIインフラ v5.0.0リリース、45スキル・171ワークフロー搭載"
codex_review: "派手なのはlast30days-skillだが、本質的には「検索・記憶・UI」がエージェントの標準装備になり始めた週だと感じる。PAIはやや思想先行に見える一方、個人向け基盤の競争が本格化した兆しとしては地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

### mvanhorn/last30days-skill

AIエージェントスキルとして、Reddit、X/Twitter、YouTube、Hacker News、Polymarket、GitHub等を横断検索し、エンゲージメントスコアに基づいた要約を生成するツール。GitHub Trending全言語・Python両部門で1位を獲得。

v3の主な特徴:
- **インテリジェント検索**: トピックから関連する人物・コミュニティ・ハンドルを自動解決してから検索実行
- **クロスソースクラスタリング**: 同一ストーリーがReddit/X/YouTubeに出現した場合、1クラスタに統合
- **共有可能HTMLブリーフ**: ダークモード対応のスタンドアロンHTMLレポート出力
- **Best Takes**: ユーモア・ウィット・バイラル性を考慮した二次スコアリング
- Claude Code、Codex、Cursor、Gemini CLI等50以上のAgent Skillsホストに対応
- MITライセンス、1,012テスト通過
- Python 3.12+、yt-dlp、Node.js、ScrapeCreators API使用

[ソース](https://github.com/mvanhorn/last30days-skill)

### CopilotKit/CopilotKit

エージェントネイティブアプリケーション構築のためのフロントエンドSDK。AG-UI（Agent-User Interaction）プロトコルの開発元で、Google、LangChain、AWS、Microsoft、Mastra、PydanticAI等が採用。GitHub Trending全言語・TypeScript両部門にランクイン。

主な特徴:
- **マルチプラットフォーム**: React/Next.js（GA）、Angular、Vue、React Native対応
- **Generative UI**: エージェントが実行時にUIコンポーネントを動的生成・更新
- **Shared State**: エージェントとUIの双方向リアルタイム状態同期
- **Human-in-the-Loop**: エージェント実行中にユーザー入力・確認・編集を要求可能
- **Slack / Microsoft Teams対応**: 同一エージェントをブラウザ外に展開
- **Self-Learning（早期アクセス）**: CLHF（Continuous Learning from Human Feedback）によるインコンテキスト強化学習
- Claude Codeプラグインとしても利用可能（9スキル搭載）

[ソース](https://github.com/CopilotKit/CopilotKit)

### MemPalace/mempalace

ローカルファーストのAIメモリシステム。会話履歴を要約・抽出せず原文のまま保存し、セマンティック検索で取得する設計。LongMemEval（500問）でRaw 96.6% R@5、Hybrid v4で98.4% R@5を達成。GitHub Trending Python部門にランクイン。v3.4.0。

主な特徴:
- **構造化インデックス**: Wing（人物・プロジェクト）→ Room（トピック）→ Drawer（原文）の階層構造
- **プラガブルバックエンド**: ChromaDB（デフォルト）、sqlite_exact、Qdrant、pgvector対応
- **ゼロAPIコール**: Raw検索モードではLLM不要、完全ローカル動作
- **MCP対応**: Claude Code、Gemini CLI等からstdioサーバーとして接続可能
- **Docker対応**: コンテナイメージでCLI/MCPサーバーを実行可能
- `uv tool install mempalace` または `pipx install mempalace` でインストール
- MITライセンス、Python 3.9+

[ソース](https://github.com/MemPalace/mempalace)

### danielmiessler/Personal_AI_Infrastructure (PAI)

Claude Code上に構築する「Life Operating System」。v5.0.0がリリースされ、パーソナルAIインフラストラクチャの概念を大幅に拡張。GitHub Trending TypeScript部門にランクイン。

v5.0.0の主な特徴:
- **Pulse**: `localhost:31337`で動作するLife Dashboard（統合ダッシュボード）
- **DA（Digital Assistant）**: ユーザーごとのAIアシスタントID・パーソナリティレイヤー
- **Algorithm v6.3.0**: Current State → Ideal Stateの7フェーズループ、科学的方法論ベース
- **ISA（Ideal State Artifact）**: タスク完了状態を定義するユニバーサルプリミティブ
- **45スキル、171ワークフロー、37フック搭載**
- **RAG不使用**: ファイルシステム+ripgrepをインデックスとして活用（2025年6月以降）
- テキストベースメモリ（WORK/KNOWLEDGE/LEARNINGの3階層）
- TypeScript + Bash + Bun構成
- ワンラインインストール対応

[ソース](https://github.com/danielmiessler/Personal_AI_Infrastructure)

## コミュニティの反応

### mvanhorn/last30days-skill

#### ポジティブ

> Claude Codeスキルでトピックをリサーチ、Reddit/X/YouTube/HNの直近30日を横断検索。毎回90分かけていた手動リサーチが不要に — @itsjasonai

> このスキル1つでリサーチワークフロー全体を置き換えた。古いブログ記事ではなく、直近30日の実際の会話を取得できる — @itswilsoncharles

> GitHub Trending上位10リポのうち5つがClaudeツール。1位がmvanhorn/last30days-skill — @yieldhunter95

### CopilotKit/CopilotKit

該当なし

### MemPalace/mempalace

該当なし

### danielmiessler/Personal_AI_Infrastructure

該当なし

## ソース

- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)
- [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)
- [MemPalace/mempalace](https://github.com/MemPalace/mempalace)
- [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
