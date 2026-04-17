---
title: "Codex CLI v0.122.0アルファ続伸、コミュニティはAGENTS.mdと日本語対応に注目"
summary: "Codex CLIはv0.122.0安定版に続きalpha.5〜alpha.8が連日リリース。新機能発表はないが、コミュニティではAGENTS.mdの設計思想やCodex日本語出力の改善手法、Claude Code連携プラグインの解説が活発化。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-18
features: []
codex_review: "派手な新機能より、AGENTS.mdや日本語運用の知見に注目が集まっているのが今のCodexらしい。機能競争が一段落し、現場の作法がプロダクト価値を押し上げ始めた局面として地味だが重要です。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.122.0 アルファ連続リリース（alpha.5〜alpha.8）

v0.122.0安定版（4月16日）に続き、alpha.5（4月16日）からalpha.8（4月17日）まで4本のプレリリースが立て続けに公開された。リリース間隔は数時間単位で、活発な開発が続いている。詳細なリリースノートは未公開で、各リリースの説明は「Release 0.122.0-alpha.X」のみ。

[ソース](https://github.com/openai/codex/releases)

### Codex App v26.415 大型アップデート（前回から継続）

4月16日リリースのv26.415で、Computer Use機能・Memory機能・内蔵ブラウザが追加され、コーディングエージェントからデスクトップ全体を操作できる汎用AIエージェントへ進化したとの解説記事がQiitaに掲載されている。

[ソース](https://qiita.com/kai_kou/items/a40992d18c644e9f5cc1)

### Agents SDK サンドボックス実行対応（前回から継続）

OpenAI Agents SDKにネイティブサンドボックス実行サポートが追加された旨がAI動向まとめ記事で言及されている。

[ソース](https://qiita.com/lavellehatcherjr/items/5fe09c82d244922a55db)

## コミュニティの反応

### AGENTS.md（エージェント向け設定ファイル）

#### ポジティブ

> AGENTS.mdを「機械向けの就業規則」と位置づけ、OpenAIがAgents SDKの新世代ハーネスで正式採用した設定ファイルとして解説。Codex・Cursor 3・Claude Codeが対応する流れを整理 — 横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-2026-04-17)

### Codex × Claude Code 連携プラグイン

#### Tips

> OpenAI公式のcodex-plugin-ccの使い方と競合共存の読み解き。Claude Codeから/codex:reviewや/codex:rescueでCodexを呼び出せる仕組みを解説 — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> Claude CodeからCodexを呼び出す3つの方法を整理。CLIモード（ワンショット）とASPモード（App Server Protocol常駐）の違いを比較 — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### Codex 日本語出力の改善

#### Tips

> AGENTS.mdに「日本語で返してくれ」と書いても直訳調が戻る問題に対し、「ずんだもん」キャラ設定でトーン制御に成功した事例を共有。thinking部分の日本語化の難しさや、コードコメントまで日本語化される副作用も報告 — そら [Zenn](https://zenn.dev/sora_biz/articles/codex-jp-harness-milestone)

### Codex App（前回から継続）

#### Tips

> Codex App入門として、Computer Use・Memory・内蔵ブラウザで広がるデスクトップAIの全貌を解説。v26.415の変更点を網羅 — kai_kou [Qiita](https://qiita.com/kai_kou/items/a40992d18c644e9f5cc1)

### 「作業を任せる」時代の到来

#### ポジティブ

> 2026年4月は「AIがすごい」より「AIをどう使いこなすか」の話が増えた週。ChatGPT for Excelのβ版公開やCodexの用途拡大を含め、業務フロー変革の最前線をまとめ — 佐藤 俊一 [Zenn](https://zenn.dev/syunichisato51/articles/ai-news-20260417-1d6620e3) / [Qiita](https://qiita.com/syunichisato51/items/01a05287f47b69101a29)

### PineScript × GPT-5.3 Codex活用（前回から継続）

#### Tips

> PineScriptエンジンをゼロから作る ― GPT-5.3 CodexとOpenCodeによるPinescriptionの設計と実装。AGENTS.mdで言語仕様・未実装範囲・Goの公開インターフェースを先に固定 — hansheng [Zenn](https://zenn.dev/woodstock_tech/articles/c3a0d8341a9e9b)

### gpt-realtime GA昇格（前回から継続）

#### Tips

> OpenAI gpt-realtime入門 — SIP・MCP対応の本番音声エージェントをPythonで実装する。プレビュー版は4月30日に非推奨化 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/191-gpt-realtime-sip-mcp-production-guide)

### GPT-5.4 Thinking活用（前回から継続）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング入門：AIエージェントの品質を構造で高める5つの要素 — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/harness-engineering-intro)

### AIエージェント運用（前回から継続）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

> なぜ私はAIの性能より運用構造を見ているのか — dantarg [Zenn](https://zenn.dev/dantarg/articles/3235e5affbb7c9)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
