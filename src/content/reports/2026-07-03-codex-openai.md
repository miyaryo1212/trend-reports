---
title: "Codex公式は静穏、コミュニティは運用・SDK・モデル選定に関心"
summary: "本日のCodex CLI公式はalpha版とメンテナンスパッチのみで、ユーザー向けの新機能はなし。コミュニティではOpenAI Agents SDKのhandoff、実行時モデルルーティング、Codex実践ノウハウなど、実装・運用に踏み込んだ知見が新たに共有された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-03

features: []
codex_review: "公式の静けさより、現場の関心が運用設計とモデル切替に移っている点が興味深い。派手さはないが、この種の知見の蓄積こそAI開発を流行から実務へ押し進める地味に重要な動きだ。"
codex_importance: 3
---

## 公式アップデート

本日の Codex CLI 利用者向け公式アップデートはありません。直近のリリースは 0.143.0 に向けた alpha 版 (rust-v0.143.0-alpha.33 / alpha.34) と、メンテナンス専用パッチ (0.142.4 / 0.142.5) のみで、いずれも「ユーザー向けの変更なし」または内部向けの修正にとどまります。

なお 0.142.5 の WebSocket トレースログ漏洩修正 ([#30771](https://github.com/openai/codex/pull/30771)) は前回レポートで既報のため詳細は割愛します。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

公式の動きが薄い一方、Zenn/Qiita では OpenAI/Codex を使った実装・運用の新規記事が投稿されました。

### OpenAI Agents SDK

#### Tips

> ChatGPTクローンで1つのエージェントに全てを任せる限界に触れ、OpenAI Agents SDK の handoff で天気・経済・地理など領域ごとに専門エージェントへ引き渡す設計を解説。 — @jungyeounjae [出典](https://qiita.com/jungyeounjae/items/63ea4008d6c0ded3ba0e)

### 実行時モデルルーティング

#### Tips

> モデルをコードにベタ書きした瞬間に負債化する、という問題提起。AIエージェント企業Lindyが性能ではなくコストを理由にClaudeからDeepSeekへ載せ替えた事例や、OpenRouterのエージェント向けMCPサーバを引き、実行時に価格・性能で最適モデルを選ぶ設計を論じる。 — @hironakamura_ai [出典](https://zenn.dev/hironakamura_ai/articles/87dbd647652608)

> デイトレ用ニュース分析エージェントのLLMを「1行」で差し替え、コストと日本語品質を比較。ai& Inference を使った実験レポート。 — @Morimiso_pyt [出典](https://qiita.com/Morimiso_pyt/items/7c51c7ec9c84b56643f3)

### Codex 実践ノウハウ

#### Tips

> Codexアプリ・CLI・IDE拡張・GitHub連携・Chrome操作・AGENTS.md・MCP・承認とサンドボックスの考え方を、実務の流れに沿って整理した実践入門書。 — @soranijimame [出典](https://zenn.dev/soranijimame/books/soraxiom-codex-jissen-guide)

### 開発者向けニュースまとめ

#### 中立

> 2026年7月1日、GitHubがGitHub Modelsの7/30完全終了予告、Kimi K2.7 CodeのCopilot一般提供、Codex CLIのログ漏洩修正など3件を連続発表。開発者向けの動きを整理。 — @YushiYamamoto [出典](https://qiita.com/YushiYamamoto/items/048dd35b7428fed89401)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
