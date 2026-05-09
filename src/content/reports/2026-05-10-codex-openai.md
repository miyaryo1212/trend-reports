---
title: "GPT-5.5・GPT-5 Mini/Nano登場、Codex CLI v0.130.0安定版リリース"
summary: "OpenAI公式サイトにGPT-5.5、GPT-5 Mini、GPT-5 Nanoの新ページが出現。Codex CLI v0.130.0安定版がリリースされ、remote-controlコマンドやプラグイン共有機能などを搭載。低レイテンシ音声AI技術やMRCスーパーコンピュータネットワーキングの発表も検出された。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-10
features:
  - "GPT-5.5"
  - "GPT-5 Mini / Nano"
  - "Voice Intelligence API新モデル"
  - "低レイテンシ音声AI"
  - "OpenAI on AWS"
  - "Advanced Account Security"
  - "MRC Supercomputer Networking"
  - "Codex CLI v0.130.0"
  - "Codex CLI v0.131.0-alpha.1〜4"
codex_review: "GPT-5.5そのものより、Mini/Nanoまで一気に並べてきた点に業界の本音が出ている。派手さは薄いが、性能競争から配備設計と運用導線の勝負へ重心が移る節目としてかなり重要だ。"
codex_importance: 4
---

## 公式アップデート

### GPT-5.5

OpenAI公式サイトに「Introducing GPT-5.5」ページが新規検出された（サイトマップ検出、詳細未確認）。前日のGPT-5.5 Instantに続く展開。

### GPT-5 Mini / Nano

GPTファミリーの小型・軽量モデル「GPT-5 Mini」「GPT-5 Nano」が発表された（サイトマップ検出、詳細未確認）。

### Voice Intelligence API新モデル（前回から継続）

音声AIの新モデル群（gpt-realtime-2、gpt-realtime-translate、ストリーミングSTT）がAPI向けに提供開始（サイトマップ検出）。前日から継続して注目されている。

### 低レイテンシ音声AI

大規模な低レイテンシ音声AI配信に関する技術発表が行われた（サイトマップ検出）。WebRTCの再設計やリレーサーバ構成など、インフラ面の技術詳細が公開された。

### OpenAI on AWS（前回から継続）

AWSとの統合・提携に関する発表（サイトマップ検出）。GPT-5.5がAWS Bedrockでローンチした事例も報告されている。

### Advanced Account Security（前回から継続）

OpenAIアカウントの高度なセキュリティ機能（FIDO2/passkey認証、セッション短縮、メール/SMS回復無効化など）がオプトインで提供中。

### MRC Supercomputer Networking

スーパーコンピュータネットワーキングに関する技術発表が検出された（サイトマップ検出、詳細未確認）。X上での個人ユーザーの反応は確認されなかった。

### Codex CLI v0.130.0

Codex CLIのRust実装v0.130.0安定版がリリースされた。主な新機能：

- **`codex remote-control`コマンド**: ヘッドレスのリモート制御可能なapp-serverを起動する簡易エントリーポイント
- **プラグイン共有・hooks表示**: プラグイン詳細にバンドルされたhooksを表示、共有時のリンクメタデータと発見可能性制御
- **スレッドページネーションAPI**: app-serverクライアントが大規模スレッドをunloaded/summary/fullの各ビューでページング可能に
- **Bedrock AWS認証対応**: `aws login`プロファイルからのコンソールログイン認証情報を使用可能に
- **view_imageマルチ環境対応**: マルチ環境セッションで選択した環境経由でファイルを解決

バグ修正ではライブスレッドのconfig変更即反映、ターンdiffの正確性向上、リモートcompactionのv2ストリーム対応、Windows sandbox修正などが含まれる。

- [v0.130.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.130.0)

### Codex CLI v0.131.0-alpha.1〜4

5月9日にv0.131.0のアルファリリースが4バージョン連続でリリースされた（alpha.1〜alpha.4）。リリースノートは各バージョンとも詳細未記載。前日のv0.130.0-alpha連続リリースに続く急速な開発ペース。

- [v0.131.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.4)

## コミュニティの反応

### GPT-5.5

X上で指定条件を満たす個人ユーザーの投稿は確認されなかった。

### GPT-5 Mini / Nano

#### ポジティブ

> 現在の最高LLMセットアップとして、WritingにGPT-5 Miniを推奨 — @RoundtableSpace [X](https://x.com/i/status/2051697176472920359)

> 5月分のLLMセットアップで、WritingにGPT-5 Miniを指定し効率的な作業を強調 — @pcshipp [X](https://x.com/i/status/2051632091155279998)

#### ネガティブ

> GPT-5 Miniを執筆に使う人はいないと批判 — @DavidOndrej1 [X](https://x.com/i/status/2052019887153852822)

#### Tips

> GPT-5-nanoを他のモデルとベンチマーク比較中、調整可能思考努力に期待 — @TeksEdge [X](https://x.com/i/status/2052931562828644714)

### Voice Intelligence API新モデル（前回から継続）

#### ポジティブ

> OpenAIの新リアルタイム音声モデル群がAPIでリリース。推論・ツール使用・翻訳対応で、会議やサポートの実業務活用が現実的に — @akihiro_genai

> 3新モデル（推論・翻訳・文字起こし）の詳細機能・ベンチマーク・価格説明。API正式化で音声インターフェース加速 — @russianblue2009

> 3モデル役割明確（推論・翻訳・起こし）、音声処理パイプライン統合で国際会議など変革。料金良心的 — @tetumemo

#### ネガティブ

> GPT-Realtime-2のデモ試用、日本語対応は自然だが訛りと遅延が目立ち、あまり進化を感じない — @izutorishima

> 新モデルは声質が悪く表現力低め、ターン制で自然さ不足。1年前の他モデルより劣る — @flowersslop

#### Tips

> OpenAI gpt-realtime-translate で同時通訳ツールを実装した：踏んだ4つの罠 — shinonome_taku [Qiita](https://qiita.com/shinonome_taku/items/aca0aecdea09b2304757)

> 音声AIは「チャットの音声版」ではなくなった：gpt-realtime-2 / translate / whisperの使い分け — haboshi [Zenn](https://zenn.dev/haboshi/articles/gpt-realtime-2-voice-apps)

> 速攻でgpt-realtime-translateを試す方法 — ほんやくコンニャク — マッサン [Zenn](https://zenn.dev/acntechjp/articles/c863907ac0c0ac)

### 低レイテンシ音声AI

#### ポジティブ

> OpenAIの低レイテンシ音声AI大規模配信技術記事を紹介 — @about_hiroppy [X](https://x.com/i/status/2051559778842034596)

> OpenAIの記事を読み、リレーサーバによるポート隠蔽やLB活用の工夫を評価し、似た実装を検討 — @voluntas [X](https://x.com/i/status/2051546761135899079)

> OpenAIボイスAIのWebRTC活用とトランシーバーの役割を解説した記事共有 — @iwashi86 [X](https://x.com/i/status/2051455070865416217)

#### Tips

> OpenAIのWebRTC再設計詳細（relay/transceiver分離、Go実装の最適化）をまとめ共有 — @__su888 [X](https://x.com/i/status/2051786011793829901)

### OpenAI on AWS（前回から継続）

#### ポジティブ

> OpenAIのAWSコンピュートへの100Bドル支出コミットメントを挙げ、AWS成長再加速でAMZN株上昇を予測 — @StockOptionCole [X](https://x.com/i/status/2051019954557002200)

> Cerebrasの2025年売上76%増&黒字化、OpenAIとの20Bドル超コンピュート契約をIPO更新で報告 — @StockSavvyShay [X](https://x.com/i/status/2051300283393966449)

#### Tips

> OpenAIのGPT-5.5がAWS Bedrockでローンチした例を挙げ、異なるベンダーでのAI展開のトレードオフを指摘 — @0G_labs [X](https://x.com/i/status/2053172707248701796)

### Advanced Account Security（前回から継続）

#### ポジティブ

> OpenAIが「Advanced Account Security」を発表。パスワード無効化、物理キー必須、サポート非介入、セッション短縮、トレーニング除外などの詳細説明 — @NooshDaroo_web [X](https://x.com/i/status/2050857131822236023)

> OpenAIのopt-in「advanced account security」開始。セキュリティキー/パスキー認証、SMS/メール回復なし — @runasand [X](https://x.com/i/status/2051413609729667173)

### Codex CLI v0.130.0

#### ポジティブ

> Codex CLI v0.130.0はabsolutely fantastic!と絶賛 — @gheorgheiuga [X](https://x.com/i/status/2053184100270232020)

> Codex CLI v0.130.0 looks amazing: named execution environments, remote exec-server, local/remote agent work — @da4004ad [X](https://x.com/i/status/2052859727256617100)

#### Tips

> Codex CLI 0.130.0のremote-controlコマンドが使いやすくなり、外部ツールからの操作入口が覚えやすくなったと評価 — @sora_biz [X](https://x.com/i/status/2052912182250352816)

> remote-controlはheadless app-server運用入口として有用、落とし穴も指摘 — @hikariraina [X](https://x.com/i/status/2052948279550530011)

> codex remote-control追加で遠隔操作app-server起動が簡単とメモ — @Ryochanman0129 [X](https://x.com/i/status/2053075634650538131)

### Codex CLI v0.131.0-alpha.1〜4

X上で指定条件を満たす個人ユーザーの投稿は確認されなかった。

### Codex vs Claude Code 比較

#### Tips

> Codex vs Claude Code 2026 ── 判断軸とやらない判断。タスク別にどちらを使うかのフレーム提示 — dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-code-codex-vs-claude-code-2026)

> CodexとClaude Codeの併用で学んだこと（Issue運用＆.md編） — UKM [Zenn](https://zenn.dev/ukm/articles/cc22e39a0f6dd8)

> Claude CodeとCodexの併用で学んだこと（容量制限編） — UKM [Zenn](https://zenn.dev/ukm/articles/179d2f90ac8abd)

> Claude CodeとCodexを使い込んだら月に37億トークン消費してた話 — bokuno_log [Qiita](https://qiita.com/bokuno_log/items/15ee9aaf788626d3f2cd)

### Codex Chrome拡張機能

#### Tips

> Codex Chrome拡張機能入門 — Webアプリテスト・認証サービス操作をAIで自動化する — kai_kou [Qiita](https://qiita.com/kai_kou/items/79cf8c8eaa3d98512f7d)

> Google Chrome CanaryでCodexのComputer Useの並行作業を可能にする — 古家大 [Zenn](https://zenn.dev/masarufuruya/articles/63b1edfae89c45)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDKのsandbox agentsを触って、現在地を整理する — 松尾淳平 [Zenn](https://zenn.dev/peintangos/articles/82fa63869aa2a2)

### Trusted Access for Cyber

#### Tips

> OpenAI、Trusted Access for Cyberを拡大。GPT-5.5・GPT-5.5-Cyberの最新動向 — yazawa0802 [Qiita](https://qiita.com/yazawa0802/items/25046018b8101a98703c)

### OpenAI APIコスト監視（前回から継続）

#### Tips

> OpenAI APIコストをiPhoneホーム画面で監視する仕組みを作ってみた（Cloud Run + Scriptable） — Y.H [Zenn](https://zenn.dev/nttdata_tech/articles/bbe0394d1d3cf4)

### ChatGPT Proプラン（前回から継続）

#### Tips

> ChatGPT Pro $100プラン入門 — Codex 5倍枠と2層Pro体制の全容 — 甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/205-openai-chatgpt-pro-100-codex-pricing-guide)

> ChatGPT Proは学生に必要か？卒研・修論・個人開発目線で契約してみた — あまり [Zenn](https://zenn.dev/ryyy_my/articles/65a4f36981f169)

### ChatGPT Images 2.0（前回から継続）

#### Tips

> Claude Code × ChatGPT Image 2.0 — Chrome MCP経由でAPIキー不要で最新モデルを使う — Alba Luce [Zenn](https://zenn.dev/albaluce/articles/d9fcd30e984a3f)

> ChatGPT Images 2.0の画像生成が本気を出した、実務化を決定づけた進化点を検証しながら解説 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/ce43088859acc1)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI Blog](https://openai.com/blog)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
