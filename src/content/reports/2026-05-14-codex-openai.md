---
title: "Codex CLI alpha.13到達、連日リリース継続"
summary: "Codex CLI Rust版がv0.131.0-alpha.13まで到達し、1日で3バージョン進行。rusty-v8-v147.4.0もリリース。コミュニティではCodex Automationsへの移行やリモートコントロール活用の記事が増加。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-14
features:
  - "Codex CLI v0.131.0-alpha.13"
  - "rusty-v8-v147.4.0"
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
codex_review: "連日のalpha更新自体は派手だが、業界全体を揺らすニュースというより開発速度の誇示に近い印象です。むしろAutomations移行や運用ノウハウの記事が増えている点のほうが、定着局面を示す地味だが重要なサインに見えます。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI v0.131.0-alpha.13

Rust版Codex CLIがv0.131.0-alpha.13に到達（5月13日）。前日のalpha.10から3バージョン進み（alpha.11、alpha.12、alpha.13）、v0.131.0シリーズの連日高速リリースが計13バージョンに達した。

- [v0.131.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.13)
- [v0.131.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.12)
- [v0.131.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.11)

### rusty-v8-v147.4.0

rusty-v8-v147.4.0がリリース（5月11日）。musl向けアーティファクトのチェックサム検証を修正し、Cargoのmuslビルドジョブが正常動作するよう対応。

- [rusty-v8-v147.4.0](https://github.com/openai/codex/releases/tag/rusty-v8-v147.4.0)

### その他の公式アップデート

本日新たな公式ブログ記事やプロダクト発表は確認されなかった。GPT-5.5 Instant、Voice API新モデル、Advanced Account Securityは前回から継続して提供中。

## コミュニティの反応

### GPT-Realtime-2（前回から継続）

#### Tips

> GPT-Realtime-2入門 — GPT-5クラス推論・128Kコンテキストの新音声APIガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/eefa5a1d5cff6a5740f2)

> 音声AIは「チャットの音声版」ではなくなった：gpt-realtime-2 / translate / whisperの使い分け解説 — haboshi [Zenn](https://zenn.dev/haboshi/articles/gpt-realtime-2-voice-apps)

### Codex Chrome拡張機能（前回から継続）

#### Tips

> Codex Chrome拡張機能入門 — 署名済みセッションでブラウザを自動化する完全ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/3524e497774c592fc3d2)

> OpenAIがCodex Chrome拡張をリリース、AIエージェントがログイン済みセッションに直接アクセス可能に — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/0dafddb51c0d4284dd18)

### GPT-5.5 Instant（前回から継続）

#### Tips

> GPT-5.5 Instant入門 — ハルシネーション52.5%削減とパーソナライズAPIの活用ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/b833d1d6dce9e9dfe25f)

### DeployCo（前回から継続）

#### 分析

> OpenAIのTomoro買収によるDeployCo設立がAIコンサルティング業界に与える影響を考察。初期調達額40億ドル超 — こばやし うきょう [Zenn](https://zenn.dev/headwaters/articles/openai-deployco-consulting)

### Codex CLI・Codex App

#### Tips

> GitHub Actionsの定期実行をやめてCodex Automationsに移行した事例。個人用ランニングメニュー生成の仕組みをCodexに寄せた — yamk [Zenn](https://zenn.dev/yamk/articles/github-actions-to-codex-automation)

> Codex リモートコントロール完全ガイド — iPhoneからMacのCodexを呼び出してAIコーディング — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-remote-control-guide-2026-05)

> Codexのカスタム「ペット」の作り方 — 2ファイルで開発体験に遊び心を追加 — ますみ [Zenn](https://zenn.dev/galirage/articles/codex-custom-pets)

> Codex に大きめの改修を任せた話（会話ログ付き） — UH [Zenn](https://zenn.dev/mfactory_uh/articles/6ff283fc71cb38)

> Codex CLI の Vim mode と日本語 IME を共存させるための常駐ツール codex-ime-guard — nek0 [Zenn](https://zenn.dev/cat_ginuta/articles/5d9cb2c3de9917)

#### 分析

> Codex vs Claude Code 2026 — シニアエンジニア向けにタスク別の判断軸を5つ提示し使い分けを整理 — dtakamiya [Zenn](https://zenn.dev/miyan/articles/ai-code-codex-vs-claude-code-2026)

### OpenAI API・SDK関連

#### Tips

> OpenAI Agents SDKのsandbox agentsを触って現在地を整理。最小構成Agentとの差分に着目 — 松尾淳平 [Zenn](https://zenn.dev/peintangos/articles/82fa63869aa2a2)

> OpenAI Privacy Filterをpre-commitフックに入れて個人情報のコミットを防ぐ — koki [Zenn](https://zenn.dev/kou_pg_0131/articles/opf-pre-commit)

> SDKに頼らないFetch API+SSEでOpenAI / Anthropic / Geminiを統一インターフェースで呼び出す設計 — Kasahara [Zenn](https://zenn.dev/kasaharareo/articles/b9e89b27b51534)

#### ネガティブ

> APIUserAbortError extends APIErrorを知らずにCIを1件落とした話。外部SDKの継承構造への注意喚起 — Iori [Zenn](https://zenn.dev/iori_001/articles/openai-apierror-instanceof-trap)

### その他

#### 分析

> 再帰的自己改善（RSI）の現実化について、OpenAIとAnthropicの研究者の警告を整理（前回から継続） — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/7dbfe718b95aa1)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
