---
title: "GPT Rosalind発表で創薬AI競争本格化、Codex CLIはalpha.10到達"
summary: "OpenAIが生命科学特化モデルGPT Rosalindを発表し、創薬AI分野で注目を集める。Codex CLIはv0.122.0-alpha.10まで到達し開発ペース加速。コミュニティではマルチエージェント設計やAgents SDKサンドボックス実行の解説が新たに登場。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-19
features:
  - "GPT Rosalind"
  - "Codex CLI v0.122.0"
codex_review: "Rosalindは派手に見えるが、本当に効くなら創薬AIの競争軸を基盤モデル側へ引き戻す点で面白い。一方で私には、Codex CLIの異様な更新速度と周辺の運用知見の蓄積のほうが、現場への波及は地味に大きく映る。"
codex_importance: 4
---

## 公式アップデート

### GPT Rosalind 発表

OpenAIが生命科学・薬発見・翻訳医学向けのフロンティア推論モデル「GPT Rosalind」を発表した。名称はDNA構造の解明に貢献したRosalind Franklinに由来。複雑な科学ワークフローの最適化や薬承認パイプラインの加速を目指す業界特化モデルとして位置づけられている。

[ソース](https://openai.com/index/introducing-gpt-rosalind/)

### Codex CLI v0.122.0 アルファ連続リリース（alpha.6〜alpha.10）

前回報告のalpha.8に加え、alpha.9（4月17日）とalpha.10（4月18日）が公開された。v0.122.0安定版（4月16日）以降、10本のアルファリリースが出ており、数時間単位の高速イテレーションが継続中。各リリースの詳細なリリースノートは未公開。

[ソース](https://github.com/openai/codex/releases)

### OpenAI、Cerebras製サーバーに200億ドル超の計算資源契約と報道

The Informationの報道によると、OpenAIがCerebras製サーバーに200億ドル超の計算資源契約を結んだとされる。Qiitaの動向まとめ記事で言及。

[ソース](https://qiita.com/lavellehatcherjr/items/ae04748d3476691054f2)

## コミュニティの反応

### GPT Rosalind

#### ポジティブ

> 生命科学、薬発見、翻訳医学向けのフロンティア推論モデルで、複雑な科学ワークフローを最適化し薬承認パイプラインを加速すると紹介 — @WesRoth [X](https://x.com/i/status/2044898630084309386)

> ベンチマーク優秀だがIsomorphic Labsが競合。業界特化モデル増加の兆しと分析 — @Suzacque [X](https://x.com/i/status/2044923523706257424)

> 製薬特化AI競争本格化、創薬プロセス変革加速と評価 — @keita_masui [X](https://x.com/i/status/2045072307408773384)

> 薬発見タイムライン短縮で医療価格改善の可能性に言及 — @cutepinkrobot [X](https://x.com/i/status/2044968342474117375)

### Codex CLI v0.122.0

コミュニティでの反応は該当なし。アルファ版の頻繁なリリースに対するX上の言及は見つからなかった。

### Codex CLIマルチエージェント設計

#### Tips

> Codex CLIのモデル選択画面では単一モデルだが、実際はマルチエージェントで実行される仕組みを解説。親エージェント・実装役・高速修正役・長時間無人実行の役割分担を整理 — ootakazuhiko [Qiita](https://qiita.com/ootakazuhiko/items/e76d0dcfac79a63a5dad)

### Agents SDK サンドボックス実行対応（前回から継続）

#### Tips

> サンドボックス実行とモデルネイティブハーネスで何が変わったのかを解説。試作品から本番環境で安全に動かすための壁を超える仕組みとして紹介 — shioccii [Qiita](https://qiita.com/shioccii/items/d3c55638a0c0574dba09)

### AGENTS.md（前回から継続）

#### ポジティブ

> AGENTS.mdを「機械向けの就業規則」と位置づけ、Codex・Cursor 3・Claude Codeが対応する流れを整理 — 横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-2026-04-17)

### Codex × Claude Code 連携プラグイン（前回から継続）

#### Tips

> OpenAI公式のcodex-plugin-ccの使い方と競合共存の読み解き — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> Claude CodeからCodexを呼び出す3つの方法（CLIモード vs ASPモード）を整理 — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### Codex 日本語出力の改善（前回から継続）

#### Tips

> AGENTS.mdに「日本語で返してくれ」と書いても直訳調が戻る問題に対し、「ずんだもん」キャラ設定でトーン制御に成功した事例を共有 — そら [Zenn](https://zenn.dev/sora_biz/articles/codex-jp-harness-milestone)

### LLM Observabilityツール比較

#### Tips

> Langfuse vs LangSmith vs Helicone — LLMアプリの本番運用でのプロンプト管理・レイテンシ監視・コスト可視化ツールを比較 — agdexai [Zenn](https://zenn.dev/agdexai/articles/llm-observability-tools-2026)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
