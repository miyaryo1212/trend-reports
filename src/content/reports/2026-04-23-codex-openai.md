---
title: "Codex CLI v0.123.0-alpha.9到達、画像生成の実用報告増加"
summary: "Codex CLI v0.123.0-alphaがalpha.9まで到達し48時間で9リリース。v0.122.0の画像生成デフォルト有効化に対する実用報告がX上で増加。GPT-Image-2のAPI入門記事もQiitaに登場。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-23
features:
  - "Codex CLI v0.122.0"
  - "Codex CLI v0.123.0-alpha連続リリース"
  - "Codex CLI /side会話機能"
  - "Codex CLI Plan Mode改善"
  - "Codex CLI プラグインワークフロー刷新"
  - "Codex CLI ファイルシステム権限強化"
  - "Codex CLI ツール検出・画像生成デフォルト有効化"
codex_review: "画像生成デフォルト有効化より、48時間で9本のalphaを切る開発速度のほうが目を引く。実用面では前進だが、詳細非公開の連発はやや不安も残る。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.123.0-alpha.1〜alpha.9 連続リリース

4月20日〜22日にかけてv0.123.0のアルファリリースが9本連続で公開された。前回報告のalpha.7以降、alpha.8（4/22 12:02 UTC）とalpha.9（4/22 21:15 UTC）が追加され、48時間内に9回のリリースサイクルを回している。各リリースノートは「Release 0.123.0-alpha.X」とのみ記載で、詳細な変更内容は引き続き未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.9)

### Codex CLI v0.122.0（前回から継続）

v0.122.0の正式リリースノートは公開済み。主な新機能は`/side`会話、Plan Mode強化、プラグインマーケットプレイス刷新、ファイルシステム権限強化、画像生成・ツール探索のデフォルト有効化、スタンドアロンインストーラー改善。本日の追加公式情報はなし。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.122.0)

## コミュニティの反応

### Codex CLI v0.122.0（前回から継続）

#### ポジティブ

> Codex CLI 0.122.0を「エージェント基盤へ進化」と高評価。Standaloneインストーラー改善、Windows/Intel Mac対応、TUI/Plan Mode/プラグイン/セキュリティ強化を詳述 — @KoichiNishizuka [X](https://x.com/i/status/2046528113123983680)

> Windows/Intel Mac対応でセットアップ摩擦が減ったと評価しつつ、TUI/Plan Mode/プラグインの進化をポジティブにレビュー — @hir08ma [X](https://x.com/i/status/2046371775156756614)

### Codex CLI /side会話機能（前回から継続）

#### Tips

> TUI /sideコマンドの詳細解説。メイン処理継続中にサイドスレッドで質問可能、Esc/Ctrl+Cで戻り、限定スラッシュコマンド対応。Claude Codeの/btw的な機能と紹介 — @akihiro_genai [X](https://x.com/i/status/2046573421166035286)

### Codex CLI Plan Mode改善（前回から継続）

#### ポジティブ

> Plan Modeの新機能で、fresh contextでの実装開始オプションとコンテキスト使用率表示（例: 89% used）を高く評価し日常活用を推奨 — @akihiro_genai [X](https://x.com/i/status/2046573421166035286)

### Codex CLI プラグインワークフロー刷新（前回から継続）

#### Tips

> プラグインmarketplace刷新の詳細解説。タブ切り替え、インライン有効/無効トグル、remote/cross-repo/local配布元対応など — @akihiro_genai [X](https://x.com/i/status/2046573421166035286)

### Codex CLI ファイルシステム権限強化（前回から継続）

該当なし。過去7日間でこの機能に特化した新規の条件を満たす投稿は見つからなかった。

### Codex CLI ツール検出・画像生成デフォルト有効化

#### ポジティブ

> Codex CLIで画像生成に成功。API契約不要、サブスクリプションのみで`codex → $imagegen`で生成可能と報告 — @_map_universe_ [X](https://x.com/i/status/2046734141878882473)

#### ネガティブ

> Codexアプリ版では画像生成可能だが、CLI版ではまだ対応していないとの報告（v0.122.0以前の情報の可能性あり） — @old_pgmrs_will [X](https://x.com/i/status/2044952173801538008)

#### Tips

> ツール自動検出と画像生成がデフォルト有効化、MCPおよびjs_replの画像出力で高解像度ハンドリングとメタデータサポートが追加 — @CodexLog [X](https://x.com/i/status/2046476243944771605)

> Codex CLIで画像生成をデフォルト有効化するには`.codex/config.toml`に`[features] image_generation=true`を設定。再起動で横長/縦長画像生成可能 — @TK2Works [X](https://x.com/i/status/2045847445603754009)

### Codex CLI v0.123.0-alpha連続リリース（前回から継続）

該当なし。過去7日間でこのバージョンに関する条件を満たす個人ユーザーの投稿は見つからなかった。

### Extreme Harness Engineering（OpenAIの新手法）

#### Tips

> OpenAI Frontierチームが「Extreme Harness Engineering」として、人間の手書きコード0行の制約でAIエージェントに100万行規模のアプリを構築させた実験を解説 — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> OpenAIの「Harness engineering」レポートの手法を、Claude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法を解説（前回から継続） — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

### Codex 日本語出力の改善

#### Tips

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成。英単語混在や1文の長さなど、プロンプトで直らない癖を仕組みで封じるアプローチ — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

### GPT-Image-2 API

#### Tips

> GPT-Image-2の推論モード・2K解像度・マルチ生成をAPIで実装する入門記事。GPT Image 1.5からの進化点を解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/9d5085048be780b78d90)

### OpenAI Agents SDK（前回から継続）

#### Tips

> Agents SDKのサンドボックスとハーネスで長期タスクをPythonで実装する入門記事。ハーネス（制御プレーン）とサンドボックス（実行プレーン）の分離を解説 — kai_kou [Qiita](https://qiita.com/kai_kou/items/450c1f159f23d1e0bf54)

### Codex × Claude Code 連携プラグイン（前回から継続）

#### Tips

> OpenAI公式のcodex-plugin-ccの使い方と競合共存の読み解き — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> Claude CodeからCodexを呼び出す3つの方法（CLIモード vs ASPモード）を整理 — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### AGENTS.md（前回から継続）

#### ポジティブ

> AGENTS.mdを「機械向けの就業規則」と位置づけ、Codex・Cursor 3・Claude Codeが対応する流れを整理 — 横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-2026-04-17)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
