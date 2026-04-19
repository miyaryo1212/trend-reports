---
title: "Codex CLI alpha.12到達、GPT Rosalind反響続く"
summary: "Codex CLIはv0.122.0-alpha.12まで到達し高速イテレーション継続。GPT Rosalindへの創薬AI関連の反響が引き続き拡大。コミュニティではCodex CLIのstatusline設定Tipsが新たに登場。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-20
features:
  - "GPT Rosalind"
  - "Codex CLI v0.122.0"
codex_review: "Codex CLIの細かな連続改善より、Rosalindが創薬AIを“研究者向けの本気領域”へ押し広げ始めた点のほうが面白い。反面、現時点では熱量先行で、業界全体を揺らすには実運用の実績がまだ薄い。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.122.0 アルファ連続リリース（alpha.11〜alpha.12）

前回報告のalpha.10に加え、alpha.11（4月19日）とalpha.12（4月19日）が同日中に公開された。v0.122.0安定版（4月16日）以降、12本のアルファリリースが出ており、数時間単位の高速イテレーションが継続中。各リリースの詳細なリリースノートは未公開。

[ソース](https://github.com/openai/codex/releases)

### GPT Rosalind（前回から継続）

OpenAIが発表した生命科学・創薬・翻訳医学向けフロンティア推論モデル。本日の新たな公式発表はなし。

[ソース](https://openai.com/index/introducing-gpt-rosalind/)

## コミュニティの反応

### GPT Rosalind（前回から継続）

#### ポジティブ

> 新モデルGPT-Rosalindが生物研究、創薬、翻訳医学向けに登場と紹介 — @AndrewCurran_ [X](https://x.com/i/status/2044860779820990936)

> OpenAIがGPT-Rosalindをリリース。生命科学研究・創薬加速のフロンティアモデルで、これは大きいと評価 — @ai_for_success [X](https://x.com/i/status/2044863407736938911)

> GPT-Rosalind for Biology、これはexciting!! — @NeuroAI_Nexus [X](https://x.com/i/status/2044952721891946885)

#### Tips

> ChatGPT/Codex/APIでリサーチプレビューとして利用可能。アクセス依頼リンクを共有 — @minchoi [X](https://x.com/i/status/2045154294098243928)

### Codex CLI v0.122.0

コミュニティでの反応は該当なし。alpha.11〜alpha.12の個別バージョンに対するX上の言及は見つからなかった。

### Codex CLI statusline設定

#### Tips

> codex-cliを0.121.0に上げた後、Context使用率パーセントが非表示になった問題に対し、`/statusline`コマンドで`context-usage`と`git-branch`にチェックを入れて復元する方法を解説 — hjpotter1 [Zenn](https://zenn.dev/hjpotter1/articles/4092620fa7b21d)

### Codex CLIマルチエージェント設計（前回から継続）

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

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
