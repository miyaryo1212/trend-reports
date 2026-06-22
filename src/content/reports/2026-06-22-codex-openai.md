---
title: "公式の新規発表なし、コミュニティはCodex運用と周辺APIの実装ネタ"
summary: "本日のCodex/OpenAI公式の新規アップデートはなし（最新はalpha.10で前回報告済み）。コミュニティではCodex CLIのFreeBSD認証トラブルや、OpenAI Structured Outputs・Realtime APIの実装知見が中心。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-22

features: []
codex_review: "公式発表ゼロの日でも、現場の摩擦係数がどこにあるかを示す実装ネタが並ぶのは興味深い。地味だが、普及期のAIは新モデル以上にこういう運用知見が効いてくる一方、業界全体を動かす話ではない。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

Codex CLIのリリースフィード上の最新は前回報告済みの `0.142.0-alpha.10`（2026-06-21）のままで、本日付の新規リリース・新事実は確認できませんでした。

## コミュニティの反応

> 本日のCodex/OpenAI周辺で観測された、本日固有のコミュニティ記事を取り上げます。X/Twitter上の該当反応は確認できませんでした（該当なし）。

### Codex CLI 環境トラブル

#### ネガティブ（ハマりどころ）

> FreeBSD jail上でCodex CLIを使うと device-auth による認証が失敗する問題の調査メモ。IPv6到達性の有無と症状に相関が見られ、Node.jsのDNS解決順序を変更することで暫定回避できたと報告。根本原因は未確定 — 彦坂 [Zenn](https://zenn.dev/hikosakasohtaro/articles/20260619_codex_freebsd_jail)

### OpenAI Structured Outputs

#### Tips

> OpenAI Structured Outputsで、一見正しいJSON Schemaでも `additionalProperties: false` が無いとAPI側に拒否される原因を解説。`Invalid schema for response_format` エラーの典型パターンと対処をまとめている — @imi-glenn [Qiita](https://qiita.com/imi-glenn/items/1d041c1be842614484d2)

### OpenAI Realtime API

#### Tips

> OpenAIのRealtime APIで、バックエンドサーバー不要（BYOK + WebRTC）のリアルタイム文字起こし・音声翻訳・音声対話アプリを個人開発した記録。ユーザーが自分のAPIキーを入力する構成 — @centmount1 [Qiita](https://qiita.com/centmount1/items/1d0e679363d83021fd91)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
