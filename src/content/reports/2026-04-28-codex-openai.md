---
title: "Codex CLI alpha連日8版、v0.125.0にコミュニティ反応集まる"
summary: "Codex CLI v0.126.0-alpha.8まで連日リリースが加速。v0.125.0のリモート接続・プラグイン機能にコミュニティ評価が集まり始めた。GPT-5.5は自律エージェント路線への評価が定着。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-28
features:
  - "Codex CLI v0.126.0-alpha"
  - "Codex CLI v0.125.0"
  - "GPT-5.5"
  - "Codex柔軟な料金プラン for Teams"
  - "Codex機能拡張 (Codex for Almost Everything)"
  - "Codexアップグレード"
  - "ChatGPT for Excel"
  - "Prism"
  - "ペアレンタルコントロール"
  - "Codex Orchestration Symphony"
  - "WebSocket対応アジェンティックワークフロー高速化"
  - "Beyond Rate Limits"
  - "Responses API新ツール・機能"
codex_review: "連日のalpha乱発は勢いとしては面白いが、詳細不在のまま期待だけ先行している印象もある。地味に重要なのはv0.125.0のリモート接続と実行基盤整備で、Codexが“便利な補助”から運用対象へ寄ってきた点だ。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.126.0-alpha.4〜alpha.8 連日リリース

4月27日だけでalpha.4からalpha.8まで5つのアルファリリースが公開された。リリースノートはいずれも「Release 0.126.0-alpha.X」のみで、詳細な変更内容は未公開。alpha.1から数えて4日間で8版という異例のペースで、次期安定版に向けた集中的な開発が進行中。

- [v0.126.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.8)（4月27日）
- [v0.126.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.7)（4月27日）
- [v0.126.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.6)（4月27日）
- [v0.126.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.5)（4月27日）
- [v0.126.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.4)（4月27日）

### サイトマップで検出された新ページ

OpenAIサイトマップから以下の新ページが検出された。いずれも詳細は未確認のため、見出しのみ記載する。

- **Codex柔軟な料金プラン for Teams** — チーム向けCodexの料金体系
- **Codex機能拡張 (Codex for Almost Everything)** — Codexの適用範囲拡大
- **Codexアップグレード** — Codexへの新機能追加
- **Prism** — OpenAIの新ツール
- **ペアレンタルコントロール** — ChatGPTに保護者管理機能
- **Codex Orchestration Symphony** — Codexオーケストレーションのオープンソース化
- **WebSocket対応アジェンティックワークフロー高速化**
- **Beyond Rate Limits** — API利用制限の緩和・改善
- **Responses API新ツール・機能**

### GPT-5.5（前回から継続）

4月23日発表の最新汎用モデル。エージェント型用途に最適化。ChatGPTおよびCodexで提供中。

### Codex CLI v0.125.0（前回から継続）

4月24日リリースの大型アップデート。App-server Unixソケット通信、プラグインマーケットプレイス強化、Permission Profiles永続化、モデルディスカバリー改善、`codex exec --json`のreasoning-tokenレポート、ロールアウトトレーシングなどを含む。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.125.0)

### ChatGPT for Excel（前回から継続）

ChatGPTのExcel統合機能。

[ソース](https://openai.com/index/chatgpt-for-excel/)

## コミュニティの反応

### Codex CLI v0.125.0

#### ポジティブ

> v0.125.0のapp-server Unix socket transport、resume/fork、sticky environment、remote threadなどの強化により、エージェント実行基盤として進化した点を高く評価 — @KoichiNishizuka [X](https://x.com/i/status/2047837130500768254)

> config.tomlに`[features] remote_connections = true`を追加でSSHリモート接続が可能になり、チャット履歴同期で作業継続が「革命的」 — @matsuge_kyojin [X](https://x.com/i/status/2048449906571145236)

> v0.125.0アップデートを高評価。特にプラグイン/マーケットプレイスのUX向上（リモートインストール、マーケットプレイス削除など）を詳細レビュー — @ParkerRex [X](https://x.com/i/status/2046942077162790971)

#### ネガティブ

> Codex Appでremote_control/remote_connection=true設定でもSSH接続画面が出ず、トラブル報告 — @izutorishima [X](https://x.com/i/status/2047604453633888338)

#### Tips

> v0.125.0の新機能リストをリリースノートからまとめて共有 — @haboshiastra [X](https://x.com/i/status/2047740892002632021)

> リモート接続使用時の注意点（ssh_configのポート転送、同期時のキュー詰まり）を共有 — @KentaMurata [X](https://x.com/i/status/2047516015236354512)

### GPT-5.5

#### ポジティブ

> 曖昧プロンプトでもタスクを自律的に最後まで実行可能。知識労働85%・カスタマー対応98%精度でプロンプトスキル不要に — @usagi_ai123 [X](https://x.com/i/status/2047427456756547766)

> Claude Opus 4.7超え多数指標でコスト1/5。セキュリティ強化でAI民主化推進 — @bioshok3 [X](https://x.com/i/status/2047397839056326849)

> ChatGPTが「答えるAI」から「仕事をやりきるAI」へ進化。デモでルービック解き・Gmail/Slack操作・PPT自動生成など — @tetumemo [X](https://x.com/i/status/2047456617516683515)

> モデル更新ではなく新カテゴリ。エージェントが目標理解・ツール使用・自己検証・タスク完了で開発者時代を変える — @AleiahLock [X](https://x.com/i/status/2047381967927193942)

#### ネガティブ

> Arena ランキングは堅実だが支配的でない。Code Arenaでトップ10の#9、Claude Opus 4.xに後れ — @mark_k [X](https://x.com/i/status/2048802257957728424)

#### Tips

> GPT-5.5徹底比較：Claude Opus 4.7・Gemini 3.1 Pro・DeepSeek V4との性能差を検証。Terminal-Bench 2.0で82.7%だがSWE-Bench ProではClaude Opus 4.7に5.7ポイント差（前回から継続） — ohno [Zenn](https://zenn.dev/0h_n0/articles/b18fe46f73041d)

> ChatGPT-5.5時代にCodexへ何を任せるか。ChatGPT側とCodex側の作業分担を実務寄りに整理（前回から継続） — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-tasks-2026)

### ChatGPT for Excel

#### ポジティブ

> ChatGPTのExcel内での信用リスクモデリングタスクで優位性を示し、ChatGPT Excelチームから連絡があった体験談 — @akshen121 [X](https://x.com/i/status/2047373609237356803)

> GPT-5.5を大規模スプレッドシートタスク（100k-1Mセル）でテストし、精度・速度・効率で最高と評価 — @nicochristie [X](https://x.com/i/status/2047476237464211721)

### ペアレンタルコントロール

#### ネガティブ

> AI責任問題の文脈で、ChatGPTのペアレンタルコントロール機能が既にあることを指摘しつつ、将来的にAIが自動通報するような監視強化を懸念 — @g_matsumaru [X](https://x.com/i/status/2048068797555446206)

### OpenAI Codex Hackathon

#### Tips

> OpenAI主催Global Codex Hackathon [Tokyo]で優勝。Codexは単なるコード生成ツールではなく、計画・実装・レビュー・修正のループ全体を短くする開発環境に近づいていると実感 — Su Yan [Zenn](https://zenn.dev/sboai_tech/articles/655e2e86cba4ae)

### Harness Engineering

#### Tips

> AnthropicとOpenAIが「harness」で同じ問いに違う答えを出した比較分析（前回から継続） — Hongbo.Ding [Zenn](https://zenn.dev/acntechjp/articles/7852387b0a367c)

> 現時点でのHarness Engineeringのまとめ（前回から継続） — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/310ec80cf7a189)

> OpenAIが提唱する「Extreme Harness Engineering」で人間の手書きコード0行の制約、100万行規模のアプリ構築実験を解説（前回から継続） — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> OpenAIの手法をClaude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法（前回から継続） — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成（前回から継続） — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDKの「Sandbox Agents」とLangfuse（Python版）を組み合わせた処理過程の情報取得 — youtoy [Qiita](https://qiita.com/youtoy/items/dc74559d1a6224c56e94)

### AI生成コードの品質問題

#### Tips

> AI生成コードの死角：決済API実装における致命的な論理欠陥を検証（前回から継続） — Hinaena [Zenn](https://zenn.dev/hinaena/articles/aac0a59fc72e7c)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
