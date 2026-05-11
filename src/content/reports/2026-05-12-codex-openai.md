---
title: "GPT-5.5/GPT-5.5 Instant発表、Codex CLI alpha.7到達"
summary: "OpenAIがフラッグシップモデルGPT-5.5とその高速版GPT-5.5 Instantを発表。GPT-5.5 InstantはChatGPTのデフォルトモデルとして展開開始。Codex CLIはv0.131.0-alpha.7まで到達し開発が加速している。"
importance: 5
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-12
features:
  - "GPT-5.5"
  - "GPT-5.5 Instant"
  - "Voice API新モデル"
  - "低レイテンシ音声AI"
  - "Advanced Account Security"
  - "Codex CLI v0.131.0-alpha.7"
codex_review: "本命はGPT-5.5より、ChatGPTの肌触りを即変えるInstant既定化だと思う。派手さの裏で、Codex CLIの連続alpha更新も開発者向け基盤づくりとして地味に重要です。"
codex_importance: 5
---

## 公式アップデート

### GPT-5.5

OpenAIの新フラッグシップモデルGPT-5.5が発表された。公式サイトのサイトマップで紹介ページが検出されている。

- [Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)

### GPT-5.5 Instant

GPT-5.5の高速・低コスト版モデルGPT-5.5 Instantが発表された。ChatGPTのデフォルトモデルとしてロールアウトが開始されている。

- [GPT-5.5 Instant](https://openai.com/index/gpt-5-5-instant/)

### Voice API新モデル（前回から継続）

音声インテリジェンス向上のための新モデル群（gpt-realtime-2、gpt-realtime-translate、ストリーミングSTT）がAPIで提供継続中。

- [Advancing Voice Intelligence with New Models in the API](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)

### 低レイテンシ音声AI

大規模環境での低遅延音声AI配信技術に関する技術ブログが公開されている。リレーサーバによるポート隠蔽、UDP負荷分散+Kubernetes活用などのアーキテクチャが解説されている。

- [Delivering Low-Latency Voice AI at Scale](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/)

### Advanced Account Security（前回から継続）

セキュリティキー/パスキー認証、メール/SMS回復無効化、短いセッション管理などのオプトインセキュリティ強化機能が引き続き提供中。

- [Advanced Account Security](https://openai.com/index/advanced-account-security/)

### Codex CLI v0.131.0-alpha.7

Rust版Codex CLIのアルファリリースがv0.131.0-alpha.7に到達（5月11日）。前日のalpha.5から2バージョン進み、v0.131.0-alpha.1（5月9日）から連日で7バージョンを連続リリースしている。また、rusty-v8-v147.4.0でmuslアーティファクトのチェックサム検証修正もリリースされた。

- [v0.131.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.7)
- [rusty-v8-v147.4.0](https://github.com/openai/codex/releases/tag/rusty-v8-v147.4.0)

## コミュニティの反応

### GPT-5.5

X上で個人ユーザーによる高エンゲージメント投稿は確認されなかった。メディアアカウントによるニュース共有が中心で、個人の評価・感想はこれから出てくる段階。

### GPT-5.5 Instant

#### ポジティブ

> GPT-5.5 Instant（左）とGPT-5.3 Instant（右）の比較画像をChatGPT Images 2.0で作成。性能向上を実感 — @shota7180 [X](https://x.com/i/status/2051881244729000289)

> GPT-5.5 Instantのロールアウトを歓迎。簡潔さ・メモリ・パーソナライズ向上を強調。即時テストを呼びかけ — @testingcatalog [X](https://x.com/i/status/2051724235555434503)

> GPT-5.5 Instantデフォルト展開で簡潔回答と専門分野精度向上を評価。少人数チームの生産性向上に寄与と分析 — @takao_meliorra [X](https://x.com/i/status/2053501838310429004)

> OpenAI週間ニュースまとめで、GPT-5.5 InstantのChatGPTデフォルトロールアウトと新機能を紹介 — @btibor91 [X](https://x.com/i/status/2053596997266075721)

#### Tips

> GPT-5.5 Instantは高速だがツールコール非対応。シンプル会話に使い、ツールが必要ならGPT-5.5 + /thinking minimal & /fast on を推奨 — @BenjaminBadejo [X](https://x.com/i/status/2051807707363991858)

### 音声API新モデル（前回から継続）

#### ポジティブ

> 自社サービスでOpenAIのGPT-Realtime voice APIをいち早く実装、ユーザーが絶賛。新モデルへのアップデートを予定 — @jesselyu [X](https://x.com/i/status/2052464763494641993)

> 今週のAIニュース: OpenAIが新voice modelsをリリース — @mreflow [X](https://x.com/i/status/2052833388013166985)

#### ネガティブ

> 新Voice APIの声質は向上せず、従来のGPT-4oより劣る。ターン制で自然さ不足 — @flowersslop [X](https://x.com/i/status/2052498680926613696)

#### Tips

> OpenAIの新realtime voice APIで声オンリーのインターフェース構築、声だけでdino outfitsショッピング可能デモ — @petergostev [X](https://x.com/i/status/2053567491213828594)

> 翻訳用途：OpenAI gpt-realtime-translate vs gpt-realtime-2 完全比較ガイド — shinonome_taku [Qiita](https://qiita.com/shinonome_taku/items/8f23dc317ae357571958)

> 音声AIは「チャットの音声版」ではなくなった：gpt-realtime-2 / translate / whisperの使い分け — haboshi [Zenn](https://zenn.dev/haboshi/articles/gpt-realtime-2-voice-apps)

> 速攻でgpt-realtime-translateを試す方法 — ほんやくコンニャク — マッサン [Zenn](https://zenn.dev/acntechjp/articles/c863907ac0c0ac)

### 低レイテンシ音声AI

#### Tips

> OpenAIの低レイテンシ音声AI配信技術に関するブログ記事を共有 — @about_hiroppy [X](https://x.com/i/status/2051559778842034596)

> 記事読了感想: リレーサーバでポート隠蔽、LB(UDP)+k8s活用の巧みな落とし所、似たもの作ってみたい — @voluntas [X](https://x.com/i/status/2051546761135899079)

> OpenAIの低遅延VoiceAI構築解説: RelayとTransceiver分離でセキュリティ&スケーラビリティ両立 — @keigohtr [X](https://x.com/i/status/2053623558828671378)

### Codex CLI

#### Tips

> Codex App ServerでスマホからCodexを操作しよう — K9i-0 [Qiita](https://qiita.com/K9i-0/items/7c7761623a06c717a6ce)

> GitHub ActionsでのOpenAI API定期実行をやめて、Codex Automationsに寄せた — yamk [Zenn](https://zenn.dev/yamk/articles/github-actions-to-codex-automation)

> Codexの「ペット」の作り方 — ますみ [Zenn](https://zenn.dev/galirage/articles/codex-custom-pets)

> Codex に大きめの改修を任せた話（会話ログ付き） — UH [Zenn](https://zenn.dev/mfactory_uh/articles/6ff283fc71cb38)

> Codex vs Claude Code 2026 ── 判断軸とやらない判断 — dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-code-codex-vs-claude-code-2026)

> Codex リモートコントロール完全ガイド｜スマホからAIコーディングする手順【2026年5月】 — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-remote-control-guide-2026-05)

### OpenAI SDK・API関連

#### Tips

> SDKに頼らないFetch API+SSEでOpenAI / Anthropic / Gemini を統一インターフェースで呼び出す — Kasahara [Zenn](https://zenn.dev/kasaharareo/articles/b9e89b27b51534)

> APIUserAbortError extends APIError を知らずに CI を 1 件落とした話 — Iori [Zenn](https://zenn.dev/iori_001/articles/openai-apierror-instanceof-trap)

> OpenAI Agents SDKのsandbox agentsを触って、現在地を整理する — 松尾淳平 [Zenn](https://zenn.dev/peintangos/articles/82fa63869aa2a2)

> OpenAI Privacy Filter を pre-commit フックに入れて個人情報のコミットを防ぐ — koki [Zenn](https://zenn.dev/kou_pg_0131/articles/opf-pre-commit)

> OpenAI APIコストをiPhoneホーム画面で監視する仕組みを作ってみた（Cloud Run + Scriptable） — Y.H [Zenn](https://zenn.dev/nttdata_tech/articles/bbe0394d1d3cf4)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI Blog](https://openai.com/blog)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
