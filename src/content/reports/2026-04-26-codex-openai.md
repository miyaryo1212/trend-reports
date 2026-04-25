---
title: "GPT-5.5の実用評価続々、Codex CLI v0.126.0-alpha公開"
summary: "GPT-5.5のユーザー評価が本格化し、コーディング・画像生成での高評価が相次ぐ。Codex CLI v0.126.0-alpha.1/alpha.2がリリース。ChatGPT Images 2.0やPrivacy Filterの日本語コミュニティでの活用事例も拡大。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-26
features:
  - "GPT-5.5"
  - "ChatGPT for Excel"
  - "ChatGPT Images 2.0"
  - "OpenAI Privacy Filter"
  - "Agentic Workflows WebSocket対応"
  - "Codex CLI v0.125.0"
  - "Codex CLI v0.126.0-alpha"
codex_review: "GPT-5.5の初日の興奮が落ち着き、実際に手を動かしたユーザーの声が出始めた段階。Eyebenchで1位、one-shotコーディング成功などポジティブ寄りだが、コスト面の懸念も。Privacy FilterのClaude Codeプラグイン化やCodexフック活用など、ツール横断の組み合わせ技が日本語コミュニティで先行しているのが面白い。"
codex_importance: 3
codex_review: "派手なのはGPT-5.5の称賛だが、私にはPrivacy FilterやCodex周辺の地味な実務改善のほうが長く効く話に見える。日本語圏で“組み合わせて使う知恵”が先に育っているのは、やや面白い兆候だ。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.126.0-alpha リリース

v0.125.0に続き、4月24〜25日にかけてv0.126.0-alpha.1およびalpha.2がリリースされた。リリースノートは簡潔で「Release 0.126.0-alpha.1」「Release 0.126.0-alpha.2」とのみ記載されており、詳細な変更内容は未公開。

- [v0.126.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.1)（4月24日）
- [v0.126.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.2)（4月25日）

### Codex CLI v0.125.0（前回から継続）

4月24日にリリースされた大型アップデート。App-server Unixソケット通信、プラグインマーケットプレイス強化、Permission Profiles永続化、モデルディスカバリー改善、`codex exec --json`のreasoning-tokenレポート、ロールアウトトレーシングなどを含む。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.125.0)

### GPT-5.5（前回から継続）

4月23日発表の最新汎用モデル。コーディング・知識労働・コンピュータ操作を強化し、エージェント型用途に最適化。ChatGPTおよびCodexで提供中。

### ChatGPT Images 2.0（前回から継続）

ChatGPTの画像生成機能v2.0。スマホアプリに新メニューとプリセットが追加。

### OpenAI Privacy Filter（前回から継続）

GPT-OSSベースのPII検出・マスキングモデル。1.5Bパラメータ、128kコンテキスト、Apache 2.0ライセンス。ローカル動作可能。

### ChatGPT for Excel

ChatGPTのExcel統合機能が新たに公開された模様。詳細な公式情報は限定的。

### Agentic Workflows WebSocket対応

エージェントワークフロー向けのWebSocketサポートがAPI向けに提供開始。コミュニティでの反応は限定的。

## コミュニティの反応

### GPT-5.5

#### ポジティブ

> API経由でテストしたらone-shotやコーディングが劇的に向上し、ベンチマークを支配するほど賢いモデルだった — @VictorTaelin [X](https://x.com/i/status/2047818978664268071)

> Codex + GPT 5.5でプロンプトからパノラマ画像生成とガウススプラットワールド作成アプリをone-shot成功、驚異的 — @dreamwieber [X](https://x.com/i/status/2047557969605533982)

> GPT-5.5 ProがEyebench-v3で1位、5.4 Proを僅差で上回りコストも低減 — @adonis_singh [X](https://x.com/i/status/2048100120076411071)

> GPT-5.5はo1/o3級の進化でコードがクリーン。Pro版は長時間タスクで優秀だが遅めで高価、全体的に新基準 — @TheAhmadOsman [X](https://x.com/i/status/2048055733841740279)

#### Tips

> ChatGPT 5.5 + Image 2でインスピレーション画像からアプリのデザイン言語を4時間かけて開発、ムードボード作成のステップバイステップガイド — @AlexFinn [X](https://x.com/i/status/2047854449943826568)

> GPT-5.5時代にCodexへ何を任せるか。ChatGPT側とCodex側の作業分担を実務寄りに整理（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-tasks-2026)

### ChatGPT for Excel

該当なし。品質基準を満たすコミュニティ投稿は見つからなかった。

### ChatGPT Images 2.0

#### ポジティブ

> ChatGPT Images 2.0で日本人カップルのエモい手ブレ思い出写真を16枚グリッド生成。存在しない記憶が蘇るほどリアル — @hibi_ai__ [X](https://x.com/i/status/2047319088809320491)

> リリース24時間でユーザーがクリエイティブに活用、10のワイルド例を紹介 — @minchoi [X](https://x.com/i/status/2047149684611780721)

#### Tips

> ChatGPT Images 2.0がユーザーの手書きを完璧に再現 — @Prathkum [X](https://x.com/i/status/2046951448915976519)

> ChatGPT Images 2.0で沖縄旅行のエモコラージュ生成、それを動画化。1枚からショート動画完成 — @genel_ai [X](https://x.com/i/status/2046855016967975205)

> NotebookLMの要約をChatGPT Images 2.0に貼るだけでプロ級インフォグラフィック自動生成。日本語完璧 — @ai_jitan [X](https://x.com/i/status/2047066348384325765)

### OpenAI Privacy Filter

#### ポジティブ

> OpenAIが新しいオープンソースモデル「Privacy Filter」をリリース、PII検出・マスキング用 — @scaling01 [X](https://x.com/i/status/2046972437422543064)

> OpenAIがHugging Faceにprivacy-filterをリリース、PII検出モデル — @_akhaliq [X](https://x.com/i/status/2046983329157677085)

#### Tips

> OpenAIのprivacy-filterをiPhoneのOpenMedKitで使用、デ識別化パイプライン実装 — @MaziyarPanahi [X](https://x.com/i/status/2047662039733071890)

> Privacy Filterをローカルで使用し、PIIをマスクしてLLMに渡すデモ動画 — @iotcoi [X](https://x.com/i/status/2047017818013511899)

> OpenAI Privacy Filterの詳細スペック説明（1.5B param, 128k context, Apache 2.0） — @nukonuko [X](https://x.com/i/status/2046987405669138921)

> OpenAI Privacy Filterは日本語PIIに使えるか。Claude Codeプラグインで試した記録。日本語PIIの実機テストも実施 — luoxi [Zenn](https://zenn.dev/luoxi/articles/openai-privacy-filter-claude-code-plugin)

> OpenAI Privacy Filterを試す：オンプレでも動かせるPII検出・マスキング用モデル — softbase [Qiita](https://qiita.com/softbase/items/69587314c7d8be40441e)

### Agentic Workflows WebSocket対応

該当なし。品質基準を満たすコミュニティ投稿は見つからなかった。

### Codex CLI v0.125.0 / v0.126.0-alpha

該当なし。v0.126.0-alphaに関する品質基準を満たすコミュニティ投稿は見つからなかった。v0.125.0の反応は前回レポート参照。

### Harness Engineering

#### Tips

> AnthropicとOpenAIが「harness」で同じ問いに違う答えを出した比較分析。Anthropicはエージェント分離監視、OpenAIはコードベース自体をharnessに — Hongbo.Ding [Zenn](https://zenn.dev/acntechjp/articles/7852387b0a367c)

> harnessは消えない、ただ移動する：AnthropicとOpenAIの比較 — Dinn [Qiita](https://qiita.com/Dinn/items/f4fa1dddf087e06a134f)

> OpenAIが提唱する「Extreme Harness Engineering」で人間の手書きコード0行の制約、100万行規模のアプリ構築実験を解説（前回から継続） — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> OpenAIの手法をClaude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法（前回から継続） — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

### AI生成コードの品質問題

#### Tips

> AI生成コードの死角：決済API実装における致命的な論理欠陥を検証。AIは構文的に正しいコードを生成するが、ビジネスロジックの整合性に弱点（前回から継続） — Hinaena [Zenn](https://zenn.dev/hinaena/articles/aac0a59fc72e7c)

### Codex 日本語出力の改善

#### Tips

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成（前回から継続） — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
