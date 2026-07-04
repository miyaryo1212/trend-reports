---
title: "Codex公式は静穏、SSD大量書込み問題とサードパーティ開放が話題"
summary: "本日のCodex CLI公式はalpha版とメンテナンスパッチのみで新機能なし。コミュニティでは、Codex CLIのTRACEログがSSDへ年換算640TBを書き込んでいたという計測報告と、AnthropicのサブスクリプションBan騒動と対照的にCodexがサードパーティOAuth利用を歓迎している点が新たに注目された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-05

features:
  - "Codex CLIのSSD書き込み問題"
  - "Codexのサードパーティ利用 (OAuth)"
codex_review: "新機能不在より、無音でSSDを摩耗させる実装のほうがはるかに本質的で、地味だが信頼を削る論点だと思う。OAuth開放姿勢も好印象だが、現場ではまず足回りの雑さが評価を決める。"
codex_importance: 3
---

## 公式アップデート

本日の Codex CLI 利用者向け公式アップデートはありません。直近のリリースは 0.143.0 に向けた alpha 版 (rust-v0.143.0-alpha.28〜alpha.35) と、メンテナンス専用パッチ (0.142.4 / 0.142.5) のみです。0.142.5 は Responses WebSocket のリクエストペイロード全文がトレースログに書き出されるのを防ぐバグ修正 ([#30771](https://github.com/openai/codex/pull/30771))、0.142.4 は「ユーザー向けの変更なし」にとどまります。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

公式の動きが薄い一方、Zenn では Codex 固有の新しい論点が2件立ち上がりました。

### Codex CLIのSSD書き込み問題

#### ネガティブ

> 常駐させていた Codex CLI のログ機構が、キー入力のない時間帯までSSDを削り続けていたという計測報告。約21日の連続稼働で書き込みが約37TB、年換算でおよそ640TB（1TBのSSDなら年約640回の全面上書き相当）に達し、その大半を Codex の SQLite の TRACE ログが占めていたと分析。エラーも警告も出ない「静かさ」が怖い、と警鐘を鳴らす。 — @とうもろこし茶 [出典](https://zenn.dev/okssusucha/articles/20260701-openai-codex-sqlite-trace-log-ssd-wear)

### Codexのサードパーティ利用 (OAuth)

#### 中立

> Anthropic が Claude Code のサブスク（Pro/Max）をサードパーティ製ツールから締め出したり戻したりと迷走する一方、OpenAI の Codex はサードパーティツールからの OAuth 利用をむしろ歓迎している、という対照を整理。公式ドキュメント・GitHub Issues・コミュニティの反応をもとに、2026年6月末時点での実際の利用状況を調べた記事。 — @梁震 [出典](https://zenn.dev/ryoushin/articles/addd79c36e4e19)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
