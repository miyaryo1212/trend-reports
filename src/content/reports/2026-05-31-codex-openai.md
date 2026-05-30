---
title: "v0.135.0のdoctor診断にコミュニティ反応"
summary: "Codex CLIの新リリースはなし。v0.135.0のcodex doctor強化についてX上で実用性を評価する声が散見。コミュニティではコンテキスト圧縮設計やClaude Codeとの比較記事が引き続き注目されている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-31
features:
  - "Codex CLI v0.135.0（前回から継続）"
  - "Codex CLI v0.136.0-alpha.1（前回から継続）"
  - "codex doctor強化"
  - "/status リモート接続表示"
  - "Vim mode改善"
  - "/permissions named profiles"
  - "Python SDK Sandboxプリセット"
  - "非対話インストールモード"
  - "バンドルzshヘルパー"
codex_review: "派手な新機能よりdoctor強化が先に評価されるのは、Codexが導入競争から運用成熟の局面へ入ったサインで、私はむしろ健全だと見る。比較記事が伸び続ける点も、機能差より現場の作法が競争力になってきた空気を感じる。"
codex_importance: 2
---

## 公式アップデート

本日の新規公式アップデートはありません。

### Codex CLI v0.135.0（前回から継続）

5月28日リリース。codex doctor診断強化、Vimモード改善、名前付き権限プロファイル、Python SDK Sandboxプリセット、非対話インストールモード、バンドルzshヘルパーなど多数の新機能を含む安定版リリース。

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.135.0)

### Codex CLI v0.136.0-alpha.1（前回から継続）

5月28日公開。次期バージョンのアルファ版。詳細は未公開。

[リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.1)

## コミュニティの反応

### Codex CLI v0.135.0

#### ポジティブ

> OpenAIの複数ドロップの一つとして、v0.135.0のdoctor診断強化・Vim編集改善・interrupt設定・named permission profiles追加をポジティブに言及 — @Chrisgpt [X](https://x.com/Chrisgpt/status/2060078423658369359)

### codex doctor強化

#### ポジティブ

> codex doctorは地味だが環境ドリフトやGit状態診断で時間を節約する実用機能と評価 — @sam_wise_

#### Tips

> Codex CLI 0.135.0の新機能としてcodex doctorにenv/Git/terminal/app-server/thread診断追加などを紹介 — @hir08ma

> Codex CLIの運用改善点としてcodex doctorにthread inventory/app-server version追加などを言及 — @ebisuke20260503

### /status リモート接続表示

X/Twitterでのコミュニティ反応は確認されなかった。

### Vim mode改善

X/Twitterでのコミュニティ反応は確認されなかった。

### Codex CLI全般

#### Tips

> Codexのコンテキスト圧縮はなぜ優秀なのか — ソースコードから読み解く設計。コンテキストウィンドウ管理の仕組みをコードレベルで分析（前回から継続） — nogataka [Qiita](https://qiita.com/nogataka/items/9b71285a9dd448e53bb1)

> OpenAI Codex CLI を本番運用するためのセキュリティ初期設定と運用ルール（前回から継続） — サボさん [Zenn](https://zenn.dev/engineer__117/articles/codex-cli-security-best-practices)

> Claude CodeとCodexを2ヶ月使い比べて分かった選び方 — settings.jsonを育てた側が速い（前回から継続） — playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-vs-codex-comparison)

> OpenAI Symphony を git worktree で最小構成で動かしてみる（前回から継続） — Naoto Tanaka [Zenn](https://zenn.dev/sboai_tech/articles/75c746cd79119f)

### OpenAI全般

#### Tips

> 楽しかったコーディングエージェントサブスク時代の終わり。エージェント型への移行に伴う課金体系の複雑化を整理（前回から継続） — 黒ヰ樹 [Zenn](https://zenn.dev/tkithrta/articles/0378bc53599fb3)

> 【MindLab】Multi-Agent フレームワーク、結局どれがいいのか本番で試した。OpenAI Agents SDK含む5フレームワークを4軸で比較（前回から継続） — 浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/4835c1fc5b2b22)

> 毎月のAI API代、減らせるところまだ残ってませんか？ — Prompt Cachingで月額を1/3〜1/10にする実践ガイド（前回から継続） — akira_papa_AI [Qiita](https://qiita.com/akira_papa_AI/items/7206bad9004031c53c15)

> Opus 4.7 と GPT-5.5 のレビュー特性を統計的に明らかにした — 720ケースの統計評価（前回から継続） — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-19-opus47-gpt55-code-review)

> AnthropicとOpenAI、公式プロンプトベストプラクティスを徹底比較してみた（前回から継続） — AI Ops Insider [Zenn](https://zenn.dev/aiops_insider/articles/a6c56302c3e651)

> AIがゴブリンに恋に落ちた理由。GPT-5.1以降に現れた「ゴブリン」頻出現象の背景を解説 — イ・ギョンミン [Zenn](https://zenn.dev/qn_tech/articles/64883e6fdb831c)

> Ruby の Timeout.timeout で OpenAI API のリクエストJSONが途中で切れた話。本番障害の原因調査記録 — kiyokuro [Zenn](https://zenn.dev/dely_jp/articles/1e570a384f4e53)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
