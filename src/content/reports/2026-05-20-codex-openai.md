---
title: "OpenAI×Dell提携でCodexがオンプレミスへ"
summary: "OpenAIがDell Technologiesと提携し、Codexをハイブリッド/オンプレミス企業環境に展開すると発表。Codex CLI v0.131.0・v0.132.0-alpha.1は前日からの継続。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-20
features:
  - "OpenAI × Dell Codex エンタープライズ提携"
  - "Codex CLI v0.131.0"
  - "Codex CLI v0.132.0-alpha.1"
---

## 公式アップデート

### OpenAI × Dell Codex エンタープライズ提携

OpenAIがDell Technologiesとのパートナーシップを発表（5月19日）。Codexをハイブリッド/オンプレミス企業環境に展開する。クラウドへのデータ送出が制約となっていた規制産業や大企業向けに、閉じた環境でCodexを動作させる選択肢を提供する。

### Codex CLI v0.131.0（前回から継続）

Rust版Codex CLIの正式安定版（5月18日リリース）。TUIセッション制御強化、@メンション統合ピッカー、プラグインマーケットプレイスCLI、`codex remote-control`のデーモン管理、Python SDK名の`openai-codex`への変更、`codex doctor`診断コマンド追加など大型アップデート。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.131.0)

### Codex CLI v0.132.0-alpha.1（前回から継続）

v0.131.0の後続アルファ版（5月18日リリース）。リリースノートは「Release 0.132.0-alpha.1」のみで詳細なし。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.132.0-alpha.1)

## コミュニティの反応

### OpenAI × Dell Codex エンタープライズ提携

#### ポジティブ

> 規制産業に本気のAI選択肢が生まれると評価。Codexがハイブリッド/オンプレミス企業環境に展開される意義は大きい — @BiggestGoal

> Dellとの提携でCodexをオンプレミス企業環境に持ち込めるのは、データ持ち出しを避けたい企業にとって大きな橋渡しになる — @elsontec

> 「データ持ち出しNGだからAI禁止」の職場で、Codexが閉じた環境でも使えるようになるのは嬉しい。明日上司に相談してみようと思う — @aya_happy_life

#### Tips

> AIエージェントの便利さを実感する一方、企業導入ではセキュリティ・権限管理などの壁を指摘。提携で社内文脈近くで安全に動かせる流れを解説 — @daiwamo_ai

> OpenAIとDellの提携でCodexをハイブリッド/オンプレ環境へ。AIエージェントを「どこで動かすか」が大事と指摘 — @ikumi_shikaku

### Codex CLI v0.131.0

#### ポジティブ

> v0.131.0の主な追加機能（codex doctor一括診断、@mention横断検索、TUI改善、SDK刷新、プラグインマーケットプレイス）をリストアップ — @hir08ma

> v0.128〜0.131までの連続リリースを振り返り、codex doctorやremote-control、TUI進化を高評価。Claude Codeとの使い分けTipsも — @Cryptinflux

#### Tips

> v0.131.0の新機能（TUI強化、@ピッカー統合、codex doctor診断、Python SDK名変更、remote-control改善など）を詳細にまとめ、アップデート推奨 — @ZypherHQ

> remote-controlのセットアップ手順やcodex doctorの活用法を具体的に共有 — @Techmist99

### Codex CLI・Codex App

#### Tips

> Codex Petsで学ぶSkill設計 — hatch-petスキルでオリジナルPetを作成する方法とSkill設計の考え方を解説 — ruiewo [Zenn](https://zenn.dev/terass_dev/articles/a2423e49ece071)

> Skillが「ソロ開発者の流通単位」になる日 — Agent Skills 1.2M+の意味。Anthropicのオープンスタンダード化をOpenAI Codex CLIも採用（前回から継続） — Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

> Codex App Server × GPT-Realtime-2で声で対話しながら動かせるペアプログラマーのプロトタイプを作成（前回から継続） — hiraoku [Zenn](https://zenn.dev/hiraoku/articles/codex-app-server-gpt-realtime-2)

> Codexでエージェント駆動開発プラットフォームを設計する — Harness Engineeringの概念を解説（前回から継続） — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/66547a030c0236)

> CodexモバイルからUbuntuのCodex Appを操作する方法（前回から継続） — 金のニワトリ [Zenn](https://zenn.dev/robustonian/articles/codex_mobile_connect_to_ubuntu)

> WindowsでもCodexのMobileからCodex Appに接続する方法（前回から継続） — kyohei.DoAI [Zenn](https://zenn.dev/acntechjp/articles/4b2af76beb46b3)

> Claude Code派だった僕がCodexに移る前に知りたかったこと（前回から継続） — MJ [Zenn](https://zenn.dev/gemcook/articles/e56eabc7ba2961)

### その他

#### 分析

> OpenAI vs Anthropic：AI競争の主戦場は「モデル性能」から「ハーネス」へ移った（前回から継続） — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/e8695a0a51706c)

> OpenAIはどうやって低遅延ボイスAIをスケールさせているのか — Realtime APIのWebRTCスタック再設計の技術詳細（前回から継続） — aienthusiast [Zenn](https://zenn.dev/aienthusiast/articles/article-20260515-090000)

> Responses APIのサーバサイド圧縮（server side compaction）を試す（前回から継続） — yamaday [Zenn](https://zenn.dev/yamaday/articles/responses-api-server-side-compaction)

> OpenAI APIのreasoning effortパラメータをgpt-5.5で検証（前回から継続） — Pochimu [Zenn](https://zenn.dev/pochimutech/articles/ae2df808f8a27d)

> 今週の海外AIニュース：エンジニアが見落とせない実務影響3点（OpenAI Daybreak等を解説） — AI解読部 [Zenn](https://zenn.dev/aidecodelabjp/articles/weekly-ai-2026-05-17)

> OpenAI Daybreak vs Claude Mythos — AIサイバーセキュリティ戦争の技術的全貌（前回から継続） — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/3b22af7b28920bd26ab8)

> OpenAI Codexとは？ 2026年最新の自律型コーディングエージェントとしての最初の一歩（前回から継続） — HowaPon [Qiita](https://qiita.com/HowaPon/items/37ed3bf8a59567ff4455)

> Anthropic が Stainless を買収 — AI SDK自動生成インフラの行方 — kai_kou [Qiita](https://qiita.com/kai_kou/items/4ef25336afebbd5197b2)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
