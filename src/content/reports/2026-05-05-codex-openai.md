---
title: "v0.129.0-alpha.5公開、SymphonyとCodex App移行が話題"
summary: "Codex CLI rust-v0.129.0-alpha.5/alpha.4が5月4日に連続公開。コミュニティではOpenAI Symphonyのオーケストレーション仕様公開やClaude CodeからCodex Appへの移行ガイド、Subagents解説など実践ナレッジが拡大。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-05
features:
  - "Codex CLI rust-v0.129.0-alpha.5"
  - "Codex CLI rust-v0.129.0-alpha.4"
codex_review: "アルファ版そのものより、Symphonyや移行ガイドの周辺知識が先に厚みを増している点が興味深い。プロダクト本体はまだ過熱気味だが、実務の運用作法が固まり始めたのは地味に重要だ。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI rust-v0.129.0-alpha.5

5月4日公開。0.129.0系の最新アルファビルド。リリースノートは「Release 0.129.0-alpha.5」のみで詳細な変更点は未記載。

- [v0.129.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.5)

### Codex CLI rust-v0.129.0-alpha.4

5月4日公開。alpha.5と同日にリリースされた中間ビルド。

- [v0.129.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.4)

### Codex CLI v0.128.0（前回から継続）

/goalワークフロー永続化、プラグインマーケットプレイス、パーミッションプロファイル拡張、MultiAgentV2設定改善、`--full-auto`の非推奨化等を含むメジャーリリース。

- [v0.128.0](https://github.com/openai/codex/releases/tag/rust-v0.128.0)

## コミュニティの反応

### X/Twitterの反応

v0.129.0-alpha.5およびalpha.4に関するX上の投稿は確認されなかった。公開直後のアルファビルドであり、反応はまだ出ていない段階。

### OpenAI Symphony（オーケストレーション仕様）

#### Tips

> （2026/5/4号）週刊AIニュース：OpenAI SymphonyはCodex向けのオーケストレーション仕様書。Linearのタスク自動検知からエージェント割り当て、PR生成までの自律実行フローを定義 — ほりえ [Zenn](https://zenn.dev/my_vision/articles/e6ae2b9d2cd62c)

### Claude Code → Codex App 移行

#### Tips

> Claude CodeからCodex Appへ移行する実践ガイド。CLAUDE.md、Skills、Slash commands、MCP、Subagents、Hooks、Automationsの移行方針を整理し、自動インポート後の確認チェックリストを提供 — mine_take [Zenn](https://zenn.dev/minewo/articles/claude-code-to-codex-app-migration)

### Codex Subagents

#### Tips

> Codexの「Subagents（サブエージェント）」機能を徹底解説。並列処理の仕組みから設定方法、実践的な活用パターンまでを技術的に解説 — こばやし うきょう [Zenn](https://zenn.dev/headwaters/articles/codex-subagents-parallel-workflow)

### ChatGPT Images 2.0

#### Tips

> Claude Code × ChatGPT Image 2.0 — Chrome MCP経由でAPIキー不要で最新モデルを使う。Codex MCP/Plugin/CLI経由では画像生成不可のため、Chrome MCPで回避する手法を解説 — Alba Luce [Zenn](https://zenn.dev/albaluce/articles/d9fcd30e984a3f)

> ChatGPT Images 2.0の画像生成が本気を出した。テキスト描画能力の飛躍的向上、日本語文字の自然な描画、複雑な構図への対応力を検証 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/ce43088859acc1)

### AIエージェントのメモリ設計

#### Tips

> AIエージェントのメモリ設計アーキテクチャ：Markdownと規律の徹底。Claude CodeとCodexではメモリの規律が異なるため単純コピーでは機能しない点を解説 — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/1abe47b3fa88a9)

### マルチモデルルーティング

#### Tips

> マルチモデルルーティング入門：GPT・Claude・Geminiを使い分ける実装パターン。タスク特性に応じたLLM動的切り替えの設計パターンを解説 — Yukito [Zenn](https://zenn.dev/yunisuta/articles/multi-model-routing-2026-05-04)

> マルチモデルルーティング実装入門：複数LLMを賢く使い分けるアーキテクチャ設計 — GYact [Qiita](https://qiita.com/GYact/items/3f91489b5565d2424d14)

### Codex vs Claude Code 比較（前回から継続）

#### Tips

> Codexゲーム開発バズの正体──Claude Codeとの違いと実務プロンプト集。設計思想の違いを整理し目的別使い分けを提案 — まぁちゃむ [Zenn](https://zenn.dev/machamu/articles/codex-claude-code-game-dev-comparison)

### コーディングエージェント全般（前回から継続）

#### Tips

> コーディングエージェントにおけるプロンプトキャッシュの仕組み — なぜ最初のターンはトークン使用量が多く見えるのか — tsho [Zenn](https://zenn.dev/snowflakejp/articles/4def632fe30a9b)

> ChatGPT 5.5とCodex新機能で何が変わる？実行型AI時代の開発ワークフロー完全ガイド — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-new-features-2026)

### Codex CLI /goal・運用（前回から継続）

#### Tips

> 技術調査 - Codex /goal：Ralph loopパターンの内製化として位置付け、永続化の仕組みと運用方法を解説 — suwa-sh [Zenn](https://zenn.dev/suwash/articles/codex_goal_20260502)

> Codex CLI 実用リファレンス：モデル・認証・料金（2026-05時点） — akatsuki39 [Qiita](https://qiita.com/akatsuki39/items/936806eba6098d830432)

### GPT-5.5（前回から継続）

#### Tips

> GPT-5.5にも『指示の型』を ─ 3モード Agent Skillとコスト最適化ルーティング — shinyay [Zenn](https://zenn.dev/shinyay/articles/gpt-5-5-prompt-optimization-copilot-skill)

> Mythosを上回ったGPT-5.5の実力、英国AISIが明かしたAIサイバー能力と、複数モデルが同時に危険領域へ到達 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/8500be545f59c5)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
