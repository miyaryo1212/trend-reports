---
title: "GPT-5.5熱狂続く、GPT Rosalind発表で生命科学AI参入"
summary: "GPT-5.5のコミュニティ評価がさらに加速し、3Dモデル生成やMathArenaでの高精度事例が報告される。新モデルGPT Rosalindが生命科学特化AIとして発表。Codex CLI v0.126.0-alpha.3がリリース。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-27
features:
  - "GPT-5.5"
  - "GPT Rosalind"
  - "ChatGPT for Excel"
  - "OpenAI Privacy Filter"
  - "Codex CLI v0.125.0"
  - "Codex CLI v0.126.0-alpha"
codex_review: "GPT-5.5熱狂はやや先走り気味だが、RosalindとPrivacy Filterが同じ週に並ぶ構図は、OpenAIが汎用競争から産業実装へ軸足を移し始めたサインとしてかなり面白い。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.126.0-alpha.3 リリース

4月26日にv0.126.0-alpha.3がリリースされた。リリースノートは「Release 0.126.0-alpha.3」とのみ記載で、詳細な変更内容は未公開。4月24日のalpha.1から3日連続でアルファリリースが続いている。

- [v0.126.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.3)（4月26日）
- [v0.126.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.2)（4月25日）
- [v0.126.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.1)（4月24日）

### GPT Rosalind 発表

OpenAIが生命科学特化の新モデル「GPT Rosalind」を発表した。AlphaFoldに対抗する位置づけで、生物学の複数レイヤーを横断した新薬提案、標的選定、実験計画の支援が可能とされる。

[ソース](https://openai.com/index/introducing-gpt-rosalind/)

### GPT-5.5（前回から継続）

4月23日発表の最新汎用モデル。コーディング・知識労働・コンピュータ操作を強化し、エージェント型用途に最適化。ChatGPTおよびCodexで提供中。

### ChatGPT for Excel

ChatGPTのExcel統合機能が公開された。

[ソース](https://openai.com/index/chatgpt-for-excel/)

### OpenAI Privacy Filter（前回から継続）

GPT-OSSベースのPII検出・マスキングモデル。1.5Bパラメータ、128kコンテキスト、Apache 2.0ライセンス。ローカル動作可能。

### Codex CLI v0.125.0（前回から継続）

4月24日リリースの大型アップデート。App-server Unixソケット通信、プラグインマーケットプレイス強化、Permission Profiles永続化、モデルディスカバリー改善、`codex exec --json`のreasoning-tokenレポート、ロールアウトトレーシングなどを含む。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.125.0)

## コミュニティの反応

### GPT-5.5

#### ポジティブ

> GPT-5.5でone-shotで3Dモデルゲームを作成、物理・アニメーション完璧でゲームチェンジャー — @ctatedev [X](https://x.com/i/status/2048188002287882542)

> Sam Altmanの「earnest」コメントに同意、GPT-5.5は本気のバイブチェンジを実感 — @kimmonismus [X](https://x.com/i/status/2048186861953175710)

> MathArenaデータだけでGPT-5.5がparserを1時間10分で98.7%精度作成、速くて優秀 — @j_dekoninck [X](https://x.com/i/status/2048183668800143825)

> GPT-5.5発表で、AGI議論からGPT-100へ1年で加速の可能性を想像 — @anmol01gulati [X](https://x.com/i/status/2048188144496128295)

#### ネガティブ

> 生成AI展示会準備中、GPT-5.5関連ツールで内容が不要になり自己論破。進化速度に追いつけない焦り — @grmchn4ai [X](https://x.com/i/status/2048186305532850628)

#### Tips

> GPT-5.5徹底比較：Claude Opus 4.7・Gemini 3.1 Pro・DeepSeek V4との性能差を検証。Terminal-Bench 2.0で82.7%だがSWE-Bench ProではClaude Opus 4.7に5.7ポイント差 — ohno [Zenn](https://zenn.dev/0h_n0/articles/b18fe46f73041d)

> GPT-5.5のAPIをNode.jsで試す。OpenAI Agents SDK TypeScriptのHello worldの例を利用 — youtoy [Qiita](https://qiita.com/youtoy/items/3098aa2c88975539476f)

> ChatGPT-5.5時代にCodexへ何を任せるか。ChatGPT側とCodex側の作業分担を実務寄りに整理（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-tasks-2026)

### GPT Rosalind

#### ポジティブ

> GPT-Rosalindを「frontier play」と称賛、生物学レイヤーを跨ぎ新薬提案が可能 — @itsolelehmann [X](https://x.com/i/status/2046303977864901009)

#### Tips

> OpenAIがAlphaFoldに対抗する生物学特化AI「GPT-Rosalind」を発表、標的選びや実験計画を支援 — @oki_kosuke [X](https://x.com/i/status/2046876395238981754)

> GPT-Rosalind入門記事。創薬・ゲノム研究特化のOpenAI初生命科学AI — @ma31stm [X](https://x.com/i/status/2047590763119456456)

### ChatGPT for Excel

#### ポジティブ

> ChatGPTのExcel機能に関する過去投稿が注目され、ChatGPT Excelチームから連絡が来た体験談 — @akshen121 [X](https://x.com/i/status/不明)

> GPT-5.5が複雑なスプレッドシートタスクで最高性能を発揮 — @nicochristie [X](https://x.com/i/status/不明)

### OpenAI Privacy Filter

#### ポジティブ

> OpenAIのPrivacy Filterが登場。Apache 2.0で商用OK、1.5Bモデルで高速・長文対応の個人情報検知・マスキングツール — @AiXsatoshi [X](https://x.com/i/status/2046994283602092440)

> OpenAIが新しいオープンソースモデル「Privacy Filter」をリリース。テキスト内のPII検知・マスキング用 — @scaling01 [X](https://x.com/i/status/2046972437422543064)

> OpenAIがHugging Faceにprivacy-filterを公開。テキスト内のPII検知・マスキング用双方向トークン分類モデル — @_akhaliq [X](https://x.com/i/status/2046983329157677085)

#### Tips

> 2026年初のオープンソースモデル「Privacy Filter」をApache 2.0で公開。1.5B paramsでブラウザでもローカル実行可能 — @xenovacom [X](https://x.com/i/status/2046979474613268993)

> OpenMedKitでOpenAIのprivacy-filterをMLXにポートし、iPhone上でPII除去・抽出を実現。クラウド不要 — @MaziyarPanahi [X](https://x.com/i/status/2047662039733071890)

> OpenAI Privacy Filterは日本語PIIに使えるか。Claude Codeプラグインで試した記録（前回から継続） — luoxi [Zenn](https://zenn.dev/luoxi/articles/openai-privacy-filter-claude-code-plugin)

> OpenAI Privacy Filterを使ってテキスト内の個人情報を抽出してみる。Windows WSL2 + Snapdragon X CPUでの動作レポート — suzuki_sh [Qiita](https://qiita.com/suzuki_sh/items/2c3f156ec859f2b2789b)

> 環境構築ゼロ・ブラウザ完結で個人情報をAIマスキング。Privacy Filter × WebGPUの実践 — yumaha [Qiita](https://qiita.com/yumaha/items/41efa2e4a8ef0d16d0ca)

### Codex CLI v0.125.0 / v0.126.0-alpha

該当なし。品質基準を満たすコミュニティ投稿は見つからなかった。

### Harness Engineering

#### Tips

> AnthropicとOpenAIが「harness」で同じ問いに違う答えを出した比較分析。Anthropicはエージェント分離監視、OpenAIはコードベース自体をharnessに（前回から継続） — Hongbo.Ding [Zenn](https://zenn.dev/acntechjp/articles/7852387b0a367c)

> 現時点でのHarness Engineeringのまとめ。AIエージェントの制御メカニズムとアーキテクチャを整理 — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/310ec80cf7a189)

> OpenAIが提唱する「Extreme Harness Engineering」で人間の手書きコード0行の制約、100万行規模のアプリ構築実験を解説（前回から継続） — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> OpenAIの手法をClaude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法（前回から継続） — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成（前回から継続） — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

### AI生成コードの品質問題

#### Tips

> AI生成コードの死角：決済API実装における致命的な論理欠陥を検証。AIは構文的に正しいコードを生成するが、ビジネスロジックの整合性に弱点（前回から継続） — Hinaena [Zenn](https://zenn.dev/hinaena/articles/aac0a59fc72e7c)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
