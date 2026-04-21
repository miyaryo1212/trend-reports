---
title: "Codex CLI v0.123.0-alpha.7まで急進、開発ペース加速"
summary: "Codex CLI v0.123.0-alphaが1日で7リリースを重ね次期バージョン開発が急加速。v0.122.0の機能群に対するコミュニティ反応が本格化し、/side会話・Plan Mode・プラグイン刷新への評価が出揃った。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-22
features:
  - "Codex CLI v0.122.0"
  - "Codex CLI v0.123.0-alpha連続リリース"
  - "Codex CLI /side会話機能"
  - "Codex CLI Plan Mode改善"
  - "Codex CLI プラグインワークフロー刷新"
  - "Codex CLI ファイルシステム権限強化"
  - "Codex CLI ツール検出・画像生成デフォルト有効化"
codex_review: "連続アルファは勢いのシグナルとして面白いが、変更内容が見えない以上はやや開発実況寄り。むしろ/sideや権限周りの摩擦が、実運用CLIとして成熟段階に入った証拠に見える。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.123.0-alpha.1〜alpha.7 連続リリース

4月20日〜21日にかけてv0.123.0のアルファリリースが7本連続で公開された。alpha.1（4/20 18:47 UTC）からalpha.7（4/21 20:55 UTC）まで約26時間で7回のリリースサイクルを回しており、次期バージョンの開発が極めて活発に進行している。各リリースノートは「Release 0.123.0-alpha.X」とのみ記載で、詳細な変更内容は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.123.0-alpha.7)

### Codex CLI v0.122.0（前回から継続）

前回報告した通り、v0.122.0の正式リリースノートが公開済み。主な新機能は`/side`会話、Plan Mode強化、プラグインマーケットプレイス刷新、ファイルシステム権限強化、画像生成・ツール探索のデフォルト有効化、スタンドアロンインストーラー改善。本日の追加公式情報はなし。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.122.0)

## コミュニティの反応

### Codex CLI v0.122.0

#### ポジティブ

> Codex CLI 0.122.0の新機能を詳細に紹介。/sideコマンド、Plan Mode改善、Plugin/Filesystem強化、Standaloneインストーラー対応など網羅的にカバー — @akihiro_genai [X](https://x.com/i/status/2046573421166035286)

> Codex CLI 0.122.0更新でプラグイン機能向上を興奮気味に紹介。タブブラウジング、インライン有効/無効トグル、多マーケットプレイス対応など — @LLMJunky [X](https://x.com/i/status/2046350440875364564)

#### ネガティブ

> Codex CLI 0.122.0のバイナリサイズが0.98.0の59MBから184MBに急増し、VM実行しにくくなったと指摘 — @xlab_os [X](https://x.com/i/status/2046370795769716856)

#### Tips

> Codex CLI 0.122.0の新機能リスト（TUI /side、Plan Mode fresh-context、Pluginタブ、Filesystem deny-readなど）を簡潔にまとめ — @hir08ma [X](https://x.com/i/status/2046371775156756614)

### Codex CLI /side会話機能

#### Tips

> /sideコマンドの詳細解説。メイン処理継続中にサイドスレッドで質問可能、Esc/Ctrl+Cで戻り、限定スラッシュコマンド対応。作業効率向上に有用 — @akihiro_genai [X](https://x.com/i/status/2046573421166035286)

### Codex CLI Plan Mode改善

#### ポジティブ

> Plan Modeの新機能で、1セッションで計画立案後コンテキストクリアしてfreshなセッションで実行可能。ワークフローの大きな改善と評価 — @fcoury [X](https://x.com/i/status/2046297561523478610)

#### Tips

> Claudeでplan作成後、Codexの公式skill codex:codex-rescueでレビューすると品質向上する手法を紹介 — @about_hiroppy [X](https://x.com/i/status/2045102571766120913)

> ClaudeのPlanモードは出力されるがCodexは内部状態。GitHub Issueで共有して両者参照する開発フロー改善の提案 — @nepinepimate3 [X](https://x.com/i/status/2046126516648755509)

### Codex CLI ファイルシステム権限強化

#### ネガティブ

> Codex CLIのWindowsサンドボックスがファイル編集をランダムにブロックし、モデルがパッチ適用に失敗を繰り返す問題を指摘。Ubuntu移行で解決 — @brainage19 [X](https://x.com/i/status/2046363972644098239)

> Codex CLIのサンドボックス権限がtorch/GPU/CUDA環境で問題を引き起こし、長時間タスクに悪影響 — @Prityush [X](https://x.com/i/status/2044625173748580798)

#### Tips

> Filesystem permissionsのdeny-readグロブポリシー、プラットフォームサンドボックス強制、isolated codex execを新機能として紹介 — @hir08ma [X](https://x.com/i/status/2046371775156756614)

### Codex CLI ツール検出・画像生成デフォルト有効化

#### Tips

> v0.122.0でtool discoveryとimage_generationがデフォルト有効化、画像detail Highデフォルト、MCP/js_replのoriginal-detailメタデータ対応を紹介 — @akihiro_genai [X](https://x.com/i/status/2046573421166035286)

> Codex CLIで画像生成テスト。v0.121.0時はデフォルトfalseのため--enable指定が必要だったが、0.122.0で不要に — @TK2Works [X](https://x.com/i/status/2045234083756912715)

### Codex CLI v0.123.0-alpha連続リリース

該当なし。過去7日間でこのバージョンに関する条件を満たす個人ユーザーの投稿は見つからなかった。

### Harness Engineering（OpenAIの手法をClaude Codeに導入）

#### Tips

> OpenAIが公開した「Harness engineering」レポートの手法を、Claude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法を解説 — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

### Codex CLIのstatusline設定（前回から継続）

#### Tips

> codex-cliを0.121.0に上げた後、Context使用率パーセントが非表示になった問題に対し、`/statusline`コマンドで復元する方法を解説 — hjpotter1 [Zenn](https://zenn.dev/hjpotter1/articles/4092620fa7b21d)

### AGENTS.md（前回から継続）

#### ポジティブ

> AGENTS.mdを「機械向けの就業規則」と位置づけ、Codex・Cursor 3・Claude Codeが対応する流れを整理 — 横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-2026-04-17)

### Codex × Claude Code 連携プラグイン（前回から継続）

#### Tips

> OpenAI公式のcodex-plugin-ccの使い方と競合共存の読み解き — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> Claude CodeからCodexを呼び出す3つの方法（CLIモード vs ASPモード）を整理 — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### Codex 日本語出力の改善（前回から継続）

#### Tips

> AGENTS.mdに「日本語で返してくれ」と書いても直訳調が戻る問題に対し、「ずんだもん」キャラ設定でトーン制御に成功した事例を共有 — そら [Zenn](https://zenn.dev/sora_biz/articles/codex-jp-harness-milestone)

### Claude Code不安定時の代替としてのCodex CLI（前回から継続）

#### Tips

> Claude Codeが不安定な場合の現実的な代替手段としてCodex CLIのWindows完全ガイドを公開 — xujfcn [Qiita](https://qiita.com/xujfcn/items/a23351d56ce276030628)

### OpenAI Agents SDK（前回から継続）

#### Tips

> OpenAI Agents SDKの完全入門ガイド。Agent・Tool・Handoff・Guardrailの基本概念からコード例まで解説 — agdexai [Qiita](https://qiita.com/agdexai/items/67f2c1f06b28410ab8b9)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
