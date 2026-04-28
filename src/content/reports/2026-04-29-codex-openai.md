---
title: "GPT-5正式発表、Symphony OSS公開、OpenAI on AWS展開"
summary: "OpenAIがGPT-5を正式発表し、Codexオーケストレーション「Symphony」をOSS公開。AWS上でのOpenAIサービス提供も発表。Codex CLIはalpha.11まで到達し開発ペース継続。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-29
features:
  - "Codex CLI rust-v0.126.0-alpha.11"
  - "GPT-5発表"
  - "Codex Orchestration Symphony (OSS公開)"
  - "ChatGPT for Excel"
  - "OpenAI on AWS"
  - "Sora 2"
  - "Sora for Android (Codex活用)"
  - "GPT-5による科学研究加速"
codex_review: "GPT-5やAWS展開は順当な大企業路線で、驚きは薄い。一方でSymphonyのOSS公開は地味に効く話で、生成AIが“単体モデル競争”から運用設計の競争へ移ったことをよく示している。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.126.0-alpha.9〜alpha.11

4月28日にalpha.9からalpha.11まで3つのアルファリリースが公開された。前日のalpha.8から引き続き、リリースノートは「Release 0.126.0-alpha.X」のみで詳細な変更内容は未公開。alpha.1から5日間で11版という高頻度イテレーションが継続中。

- [v0.126.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.11)（4月28日）
- [v0.126.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.10)（4月28日）
- [v0.126.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.9)（4月28日）

### GPT-5正式発表

OpenAIがGPT-5を正式発表。「introducing-gpt-5-4」「introducing-gpt-5-5」の2段階で公開された。

### Codex Orchestration Symphony（OSS公開）

CodexオーケストレーションフレームワークをOSS化。LinearなどのIssueトラッカーを起点にCodexエージェントを並列運用し、タスク自動化・PRレビュー自動化を実現する仕組み。

### OpenAI on AWS

AWSプラットフォームでのOpenAIサービス提供を発表。AWS BedrockにOpenAIモデルが数週間内に追加予定。

### Sora 2

次世代動画生成モデルSora 2を発表。

### Sora for Android（Codex活用）

Codexを使ってSoraのAndroid版を開発・リリース。

### ChatGPT for Excel（前回から継続）

ExcelとChatGPTの統合機能。

### GPT-5による科学研究加速

GPT-5の科学研究への応用事例を公開。

## コミュニティの反応

### GPT-5 / GPT-5.5

#### ポジティブ

> GPT-5.5を発表。Claude Opus 4.7超えの指標多数、コード/調査/PC操作に強く、ツールで仕事完了、GPT-5.4並み速度でChatGPT/Codex展開 — @masahirochaen [X](https://x.com/i/status/2047458665687658529)

> GPT 5.5登場。GPT-5.4同等レイテンシで賢く、トークン効率向上、ベンチマーク勝利、エージェントタスク強力 — @TemsYanik [X](https://x.com/i/status/2047404233809699108)

#### Tips

> 忙しい人のためのGPT-5.5まとめ — @super_bonochin [X](https://x.com/i/status/2047437222534840822)

> CodexでGPT-5.4記述が「Strong model for everyday coding」に変更、リリース本日示唆 — @BLCNYY [X](https://x.com/i/status/2047304603994128613)

> GPT-5.5徹底比較：Claude Opus 4.7・Gemini 3.1 Pro・DeepSeek V4との性能差を検証。Terminal-Bench 2.0で82.7%だがSWE-Bench ProではClaude Opus 4.7に5.7ポイント差（前回から継続） — ohno [Zenn](https://zenn.dev/0h_n0/articles/b18fe46f73041d)

### Codex Orchestration Symphony

#### ポジティブ

> 未解決IssueごとにCodexエージェントを常駐化し、Linearなどのボードを起点に並列運用をスケール。人はレビューに集中でき、これは欲しかった — @sora19ai [X](https://x.com/i/status/2048872909725368392)

> Linearなどのプロジェクト管理ボードをCodexオーケストレーションしやすくしたOSS。人間はIssue管理、Codexに実装任せ — @suna_gaku [X](https://x.com/i/status/2048894826977063055)

> 公式のSymphony解説。使いやすくて良いオーケストレーションOSS — @about_hiroppy [X](https://x.com/i/status/2048887461032644862)

#### Tips

> OpenAIがCodexオーケストレーション用OSS仕様「Symphony」発表。Issue trackerをagentシステム化し生産性向上。GitHub/Jira連携でタスク自動化、PRレビュー自動化、カスタマイズ可能 — @irodori_hub [X](https://x.com/i/status/2048913336834920930)

### OpenAI on AWS

#### ポジティブ

> OpenAIがMicrosoftの独占を失い、企業顧客向けにAWSやGoogle Cloudで即時展開可能に — @JamiesAct [X](https://x.com/i/status/2048762586058129799)

> AMZN CEOがOpenAI発表を「very interesting」と評価、AWS BedrockにOpenAIモデルを数週間内に追加予定 — @StockSavvyShay [X](https://x.com/i/status/2048807884017082617)

#### ネガティブ

> アマゾンがOpenAIをAWSに導入宣伝するも、一部顧客はコーディングなどでClaudeの方が優れていると満足 — @Goldriver2020 [X](https://x.com/i/status/2048799354870530555)

### Sora 2

#### ポジティブ

> Sora2はプロンプトの遊びの幅を広げ、AIの想像力の可能性を感じさせたツール。ワンコイン映画祭も生まれた — @Limewritelight [X](https://x.com/i/status/2048377011861909881)

> Sora2のおかげでたくさんの楽しいムービーを作れた。長い間ありがとう — @AwajiAqua [X](https://x.com/i/status/2048364667219914942)

> 今日でSora2アプリ終了。この性能は衝撃的だった — @towya_aillust [X](https://x.com/i/status/2048372113514680634)

#### ネガティブ

> OpenAIがSora 2をAPIから早々に撤回したのか？ — @Kyrannio [X](https://x.com/i/status/2049011984558178386)

### GPT-5による科学研究加速

#### ポジティブ

> 23歳の若者がGPT-5.4 Proを使い、60年以上の未解決Erdős問題を1時間20分で解決。新たな数学研究加速事例 — @MLBear2 [X](https://x.com/i/status/2048712497826566229)

> GPT-5.5 Codexを科学的研究でテスト中、遺伝子解析など月単位の作業を短縮可能とJackson Lab研究者が実証 — @alliekmiller [X](https://x.com/i/status/2047406768553128100)

> GPT-5.5が研究者の自律パートナー化、アイデア入力で実験・ダッシュボード自動生成、睡眠中に研究加速 — @airiaiai8 [X](https://x.com/i/status/2047556564861812846)

#### Tips

> GPT-5.5を使って研究計画に基づくデータ抽出Excelシートを作成依頼。変数名行、入力規則付きの完璧シートとマニュアルを出力、修正ほぼ不要 — @ai_biostat [X](https://x.com/i/status/2047828243630485814)

### Codex デスクトップアプリ

#### Tips

> OpenAI Codex デスクトップ完全ガイド — Skills・Plugins・Automationsを使いこなす。約103分の動画内容を日本語でまとめ — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/openai-codex-complete-guide)

> ChatGPT-5.5時代にCodexへ何を任せるか。ChatGPT側とCodex側の作業分担を実務寄りに整理（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-tasks-2026)

### OpenAI Codex Hackathon

#### Tips

> OpenAI主催Global Codex Hackathon [Tokyo]で優勝。Codexは計画・実装・レビュー・修正のループ全体を短くする開発環境に近づいていると実感（前回から継続） — Su Yan [Zenn](https://zenn.dev/sboai_tech/articles/655e2e86cba4ae)

### Harness Engineering

#### Tips

> AnthropicとOpenAIが「harness」で同じ問いに違う答えを出した比較分析（前回から継続） — Hongbo.Ding [Zenn](https://zenn.dev/acntechjp/articles/7852387b0a367c)

> OpenAIが提唱する「Extreme Harness Engineering」で100万行規模のアプリ構築実験を解説（前回から継続） — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成（前回から継続） — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

### AI動向まとめ

#### Tips

> Ineffable Intelligenceが約11億ドルのシード調達、MicrosoftとOpenAIが提携契約を再交渉など：2026-04-28 AI動向まとめ — lavellehatcherjr [Qiita](https://qiita.com/lavellehatcherjr/items/5ac499551c0a73150a4b)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
