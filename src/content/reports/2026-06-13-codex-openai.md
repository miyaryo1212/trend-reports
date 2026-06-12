---
title: "Codex CLI alpha.16到達・Developer mode登場"
summary: "Codex CLIは0.140.0-alpha.16まで到達し、Rust実装の高速イテレーションが継続。Codex app 26.609ではCDP経由のDeveloper modeが追加され、ブラウザデバッグ機能が強化された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-13
features:
  - "Codex CLI 0.140.0-alpha.12〜16: alpha.11以降さらに5リリースが連続公開（6/11〜12）、Rust実装のイテレーションが継続"
codex_review: "高速リリース自体は勢いを感じるが、変更点が見えないalpha連打は熱量のわりに市場シグナルとしては弱い。むしろDeveloper modeのCDP接続のほうが地味に重要で、実運用のデバッグ体験を一段現実寄りにする。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.140.0-alpha.12〜16

前日のalpha.11からさらに5リリースが公開され、alpha.16に到達した。6月11〜12日の2日間で8リリースという高頻度のイテレーションが続いている。リリースノートはいずれも「Release 0.140.0-alpha.X」のみで、個別の変更内容は公開されていない。

- [v0.140.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.16)
- [v0.140.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.12)

## コミュニティの反応

### Codex Developer mode（CDP）

#### Tips

> Codex app 26.609で追加されたDeveloper modeを実測検証。Chrome DevTools Protocol経由でnetwork traffic、console output、runtime errors、performance profilingまで確認可能になった経緯と実用性を解説 — danielvo [Zenn](https://zenn.dev/lnest_knowledge/articles/codex-developer-mode-cdp)

### Codex Pets

#### ポジティブ

> Codex CLIの `/pet` コマンドで表示されるペット機能を、かつてのデスクトップマスコット「伺か」と重ねて紹介。コードの状態に応じてキャラクターが反応する体験に好意的 — JJ yamitake [Zenn](https://zenn.dev/yamitake/articles/codex-pets-ukagaka-nostalgia)

### Ona買収の影響分析

#### Tips

> OpenAIのOna買収がコーディングエージェントの主戦場を実行環境に移す意味を分析。Gitpodの歴史的経緯からCodexの戦略的意図を読み解く — okssusucha [Qiita](https://qiita.com/okssusucha/items/0a5d516ab5dbd42e8835)

> OpenAIとAnthropicの6月11日発表を比較し、AIエージェント本番導入に必要な4要素（実行環境・セキュリティ・評価・運用）を整理 — kenta [Zenn](https://zenn.dev/kenta_kadowaki/articles/6844226ce75bd8)

### Codex.app deeplink検証

#### Tips

> GPT-5.5とopencodeを使い、macOS Tahoe上でCodex.appのASAR patchとdeeplinkを検証。Gatekeeper署名の扱いなど安全機構との衝突を詳細に記録 — hansheng [Zenn](https://zenn.dev/woodstock_tech/articles/2f8af5030fe2f1)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
