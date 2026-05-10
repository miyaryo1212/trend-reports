---
title: "Codex CLI v0.131.0-alpha.5、remote-control活用が拡大"
summary: "Codex CLI v0.131.0-alpha.5がリリース。v0.130.0のremote-control機能を活用したモバイル操作の事例がコミュニティで広がる。音声API新モデルへの評価は賛否が分かれている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-11
features:
  - "Codex CLI v0.131.0-alpha.5"
  - "Codex CLI v0.130.0"
  - "Advanced Account Security"
  - "Advancing Voice Intelligence with New Models in the API"
codex_review: "remote-controlの広がりは面白いが、まだ熱量先行で業界全体を動かす段階ではない印象です。むしろ設定の煩雑さや音声モデルへの微妙な反応のほうが、今の成熟度を正直に示している。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI v0.131.0-alpha.5

Rust版Codex CLIのアルファリリースv0.131.0-alpha.5が5月10日にリリースされた。5月9日のalpha.1から連日で5バージョンが連続リリースされており、急速な開発ペースが続いている。各リリースノートに詳細な変更内容の記載はない。

- [v0.131.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.5)

### Codex CLI v0.130.0（前回から継続）

v0.130.0安定版は5月8日リリース済み。`codex remote-control`コマンド、プラグイン共有メタデータ、スレッドページネーションAPI、Bedrock AWS認証対応、`view_image`マルチ環境対応などの新機能を搭載。

- [v0.130.0 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.130.0)

### Advanced Account Security（前回から継続）

OpenAI公式サイトで検出されたアカウントセキュリティ強化機能。セキュリティキー/パスキー認証、メール/SMS回復無効化、短いセッション管理、自動トレーニング除外などがオプトインで提供されている。

### Advancing Voice Intelligence with New Models in the API（前回から継続）

音声API向け新モデル群（gpt-realtime-2、gpt-realtime-translate、ストリーミングSTT）の提供が継続中。OpenAI公式サイトで引き続き掲載されている。

## コミュニティの反応

### Codex CLI v0.131.0-alpha.5

該当なし。X上で指定条件を満たす個人ユーザーの投稿は確認されなかった。

### Codex CLI v0.130.0 remote-control

#### ポジティブ

> 新しいCodex remote-control機能が追加され、ヘッドレスでリモート制御可能なアプリサーバーを簡単に起動可能 — @diegocabezas01 [X](https://x.com/i/status/2053097000623538445)

> codex remote-controlを使ってブラウザ経由のOSS Codexアプリを作成、スマホからリモートPC操作が楽しく実現 — @hAru_mAki_ch [X](https://x.com/i/status/2053394102390333486)

> codex remote-control機能でcodex_mobileを作成、Tailscale経由でスマホからCodex操作が可能に — @neromeron1014 [X](https://x.com/i/status/2053381707043352909)

#### ネガティブ

> codex remote-controlをインストールしたが設定が面倒で使いにくく、Claude Codeの方が優れている — @willyzimmm [X](https://x.com/i/status/2053250530701439438)

#### Tips

> Codex リモートコントロール完全ガイド｜スマホからAIコーディングする手順【2026年5月】 — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-remote-control-guide-2026-05)

### Codex活用事例

#### Tips

> Codexの「ペット」の作り方 — カスタムペットをCodex Appに住まわせる方法 — ますみ [Zenn](https://zenn.dev/galirage/articles/codex-custom-pets)

> Codex に大きめの改修を任せた話（会話ログ付き） — UH [Zenn](https://zenn.dev/mfactory_uh/articles/6ff283fc71cb38)

> Codex vs Claude Code 2026 ── 判断軸とやらない判断 — dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-code-codex-vs-claude-code-2026)

> CodexとClaude Codeの併用で学んだこと（Issue運用＆.md編） — UKM [Zenn](https://zenn.dev/ukm/articles/cc22e39a0f6dd8)

### Advanced Account Security（前回から継続）

#### ポジティブ

> OpenAIがopt-inのadvanced account securityを導入。セキュリティキー/パスキー認証、メール/SMS回復なし、短いセッション管理、自動トレーニング除外 — @runasand [X](https://x.com/i/status/2051413609729667173)

### 音声API新モデル（前回から継続）

#### ポジティブ

> OpenAIがGPT-Realtime-2（音声エージェント）、Translate（リアルタイム翻訳）、Whisper（書き起こし）の3モデルをローンチ — @tmiyatake1 [X](https://x.com/i/status/2052540483331662228)

> OpenAIの新音声モデルGPT-Realtime-2発表。GPT-5級推論、128kコンテキスト、ツール並列呼び出しなど。電話CSなどに活用 — @masahirochaen [X](https://x.com/i/status/2052445244692787383)

#### ネガティブ

> 新モデルを試したが、声質や自然さで前モデルより劣り、ターン制で進化を感じない。ハイプに疲れた — @flowersslop [X](https://x.com/i/status/2052498680926613696)

> GPT-Realtime-2のデモを試したが、日本語は自然だが訛りが残り遅延あり、大きな進化を感じない — @izutorishima [X](https://x.com/i/status/2052441694000607465)

#### Tips

> 音声AIは「チャットの音声版」ではなくなった：gpt-realtime-2 / translate / whisperの使い分け — haboshi [Zenn](https://zenn.dev/haboshi/articles/gpt-realtime-2-voice-apps)

> 速攻でgpt-realtime-translateを試す方法 — ほんやくコンニャク — マッサン [Zenn](https://zenn.dev/acntechjp/articles/c863907ac0c0ac)

### OpenAI SDK・API関連

#### Tips

> SDKに頼らないFetch API+SSEでOpenAI / Anthropic / Gemini を統一インターフェースで呼び出す — Kasahara [Zenn](https://zenn.dev/kasaharareo/articles/b9e89b27b51534)

> APIUserAbortError extends APIError を知らずに CI を 1 件落とした話 — Iori [Zenn](https://zenn.dev/iori_001/articles/openai-apierror-instanceof-trap)

> OpenAI Agents SDKのsandbox agentsを触って、現在地を整理する — 松尾淳平 [Zenn](https://zenn.dev/peintangos/articles/82fa63869aa2a2)

### OpenAI APIコスト・プラン（前回から継続）

#### Tips

> OpenAI APIコストをiPhoneホーム画面で監視する仕組みを作ってみた（Cloud Run + Scriptable） — Y.H [Zenn](https://zenn.dev/nttdata_tech/articles/bbe0394d1d3cf4)

> ChatGPT Pro $100プラン入門 — Codex 5倍枠と2層Pro体制の全容 — 甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/205-openai-chatgpt-pro-100-codex-pricing-guide)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI Blog](https://openai.com/blog)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
