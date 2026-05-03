---
title: "新規リリースなし、コミュニティはCodex活用ノウハウ蓄積フェーズ"
summary: "公式の新規リリースはなし。コミュニティではCodexとClaude Codeの比較記事やプロンプトキャッシュ解説、OpenAI Realtime APIの音声エージェント構築記事など実践的なナレッジ共有が続く。"
importance: 1
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-04
features: []
codex_review: "派手な新発表がない日に、比較記事や運用メモが厚くなるのは市場が“お試し”から実務定着へ移ったサインで、こういう地味な蓄積のほうが後で効く。とはいえ業界全体を動かすほどの材料ではまだない。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

### Codex CLI v0.129.0-alpha.3（前回から継続）

5月1日リリースのRust版アルファビルド。alpha.1〜alpha.3まで。本日時点で追加リリースなし。

- [v0.129.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.3)

### Codex CLI v0.128.0（前回から継続）

/goalワークフロー永続化、プラグインマーケットプレイス、パーミッションプロファイル拡張等を含むメジャーリリース。

[リリースページ](https://github.com/openai/codex/releases/tag/rust-v0.128.0)

## コミュニティの反応

### Codex vs Claude Code 比較・使い分け

#### Tips

> Codexゲーム開発バズの正体──Claude Codeとの違いと実務プロンプト集。設計思想の違いを整理し目的別使い分けを提案 — まぁちゃむ [Zenn](https://zenn.dev/machamu/articles/codex-claude-code-game-dev-comparison)

> OpenAI版とAnthropic版のskill-creatorをコードから読む。Skillを作って育てるならAnthropic版が深く、OpenAI版はscaffoldとして使いやすいと分析 — purple [Zenn](https://zenn.dev/purple_matsu1/articles/20260424-anthropic-skill-creator)

> Claude Code の代替に Goose を週末で動かしてみた実装メモ。OSS代替の動作検証 — 5_years_apart [Qiita](https://qiita.com/5_years_apart/items/50dfbf861eff4d26f1ff)

### コーディングエージェント全般

#### Tips

> コーディングエージェントにおけるプロンプトキャッシュの仕組み — なぜ最初のターンはトークン使用量が多く見えるのか。Codex、Claude Code、Cursor等の内部動作を解説 — tsho [Zenn](https://zenn.dev/snowflakejp/articles/4def632fe30a9b)

> ChatGPT 5.5とCodex新機能で何が変わる？実行型AI時代の開発ワークフロー完全ガイド — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-new-features-2026)

### Codex CLI /goal・運用

#### Tips

> 技術調査 - Codex /goal：Ralph loopパターンの内製化として位置付け、永続化の仕組みと運用方法を解説 — suwa-sh [Zenn](https://zenn.dev/suwash/articles/codex_goal_20260502)

> Codex CLI 実用リファレンス：モデル・認証・料金（2026-05時点） — akatsuki39 [Qiita](https://qiita.com/akatsuki39/items/936806eba6098d830432)

### Codex Pets

#### Tips

> Codexのペット機能を試してみた。デフォルトペットの切り替えや作業ステータス表示機能を紹介 — ヨシダ ヨシヲ [Zenn](https://zenn.dev/is0383kk/articles/3844fd62b68dd1)

> Codex Petsを試してみたら、ぴよちゃんが動き出した — Tadataka_Takahashi [Qiita](https://qiita.com/Tadataka_Takahashi/items/568fdb50617c5d55db14)

### GPT-5.5 / プロンプト最適化

#### Tips

> GPT-5.5にも『指示の型』を ─ 3モード Agent Skillとコスト最適化ルーティング — shinyay [Zenn](https://zenn.dev/shinyay/articles/gpt-5-5-prompt-optimization-copilot-skill)

> Mythosを上回ったGPT-5.5の実力、英国AISIが明かしたAIサイバー能力と、複数モデルが同時に危険領域へ到達 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/8500be545f59c5)

### OpenAI Realtime API / Agents SDK

#### Tips

> Twilio + Patter + OpenAI Realtime で日本語の営業電話AIエージェントを動かすまで。Trial環境での構築手順を解説 — Na [Zenn](https://zenn.dev/yuche/articles/twilio-patter-openai-realtime-japanese-voice-agent)

> OpenAI Agents SDKを使ってマルチエージェントシステムを作ってみた。カスタムツールからハンドオフまでの実装記録 — ちとせみ [Zenn](https://zenn.dev/titosemi/articles/f6b906d40bee8a)

### LLM推論

#### Tips

> 音韻理解タスクにおけるLLMの推論トークンの中身の確認。推論トークン消費による音韻類似性判定の検証 — shimajiroxyz [Qiita](https://qiita.com/shimajiroxyz/items/04d46ee96a5c3862a679)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
