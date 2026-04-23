---
title: "Codex CLI v0.124.0正式リリース、Hooks安定版とBedrock対応"
summary: "Codex CLI v0.124.0が正式リリース。TUIリーズニングショートカット、マルチ環境セッション、Amazon Bedrock対応、Hooks安定版化など6つの新機能を搭載。プラグインマーケットプレイスへの反応が日本語コミュニティで活発。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-24
features:
  - "Codex CLI v0.124.0 TUIリーズニング制御ショートカット"
  - "Codex CLI v0.124.0 マルチ環境セッション"
  - "Codex CLI v0.124.0 Amazon Bedrock対応"
  - "Codex CLI v0.124.0 リモートプラグインマーケットプレイス"
  - "Codex CLI v0.124.0 Hooks安定版"
  - "Codex CLI v0.124.0 Fastサービスティアデフォルト化"
codex_review: "派手なのはプラグイン市場だが、実はHooks安定版とマルチ環境セッションのほうが効く更新に見える。CLIが“単体ツール”から運用基盤へ寄っていく流れとしてはかなり重要だ。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.124.0 正式リリース

v0.123.0-alphaシリーズを経て、v0.124.0が4月23日に正式リリースされた。新機能6件、バグ修正6件を含む大型アップデート。

**新機能:**

- **TUIリーズニング制御ショートカット**: `Alt+,`でリーズニングレベルを下げ、`Alt+.`で上げる。モデルアップグレード時にリーズニング設定が新モデルのデフォルトにリセットされるようになった（[#18866](https://github.com/openai/codex/pull/18866), [#19085](https://github.com/openai/codex/pull/19085)）
- **マルチ環境セッション**: app-serverセッションが複数環境を管理し、ターンごとに環境とワーキングディレクトリを選択可能に（[#18401](https://github.com/openai/codex/pull/18401), [#18416](https://github.com/openai/codex/pull/18416)）
- **Amazon Bedrock対応**: OpenAI互換プロバイダー向けにAWS SigV4署名とAWSクレデンシャル認証をファーストクラスサポート（[#17820](https://github.com/openai/codex/pull/17820)）
- **リモートプラグインマーケットプレイス**: リモートプラグインの一覧表示・詳細閲覧が直接可能に（[#18452](https://github.com/openai/codex/pull/18452), [#19079](https://github.com/openai/codex/pull/19079)）
- **Hooks安定版**: `config.toml`でインライン設定可能になり、MCPツール・`apply_patch`・長時間Bashセッションの監視に対応（[#18893](https://github.com/openai/codex/pull/18893)他）
- **Fastサービスティアデフォルト化**: 対象ChatGPTプランでFastサービスティアがデフォルト有効に（[#19053](https://github.com/openai/codex/pull/19053)）

**バグ修正:**
- Cloudflare cookie保持による認証断絶の改善
- リモートapp-serverのWebSocketイベント処理とシャットダウン時の競合修正
- パーミッションモードのドリフト修正（サイド会話間での整合性確保）
- `wait_agent`のメールボックスキュー即時応答修正
- ローカルstdio MCPの相対パス解決修正
- 管理設定の起動エラー耐性改善

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.124.0)

## コミュニティの反応

### Codex CLI v0.124.0 TUIリーズニング制御ショートカット

#### ポジティブ

> v0.124.0のTUI reasoning levelショートカット（Alt+,で下げ、Alt+.で上げ）を「VERY COOL!」と高評価。他の新機能も合わせて紹介 — @LLMJunky [X](https://x.com/i/status/2047387508544041283)

### Codex CLI v0.124.0 マルチ環境セッション

該当なし。v0.124.0リリース直後のため、個人ユーザーの条件を満たす投稿は見つからなかった。

### Codex CLI v0.124.0 Amazon Bedrock対応

該当なし。過去7日間で条件を満たす投稿は見つからなかった。

### Codex CLI v0.124.0 リモートプラグインマーケットプレイス

#### ポジティブ

> codex plugin marketplace addでClaude Code PluginのMarketplaceから直接取り込めるようになった。「便利でおもろい」 — @fukubaka0825 [X](https://x.com/i/status/2046432723531976917)

> Codex CLI 0.122.0新機能としてPluginのタブ付きブラウズ、inline toggle、リモート/ローカル切替を紹介（前回から継続） — @hir08ma [X](https://x.com/i/status/2046371775156756614)

#### Tips

> Codex CLIのプラグインインストール方法を共有。/pluginsコマンドで一覧表示・インストール可能。ComputerUseやRemotionなど充実 — @suna_gaku [X](https://x.com/i/status/2047096612896542911)

> Codexの/pluginで利用可能な114個のオフィシャルプラグイン一覧を日本語で要約 — @haruki_ai_k [X](https://x.com/i/status/2046215165482545508)

### Codex CLI v0.124.0 Hooks安定版

#### ポジティブ

> Codex CLI v0.124.0でHooksが安定版リリース、APPLY PATCH監視対応でEDIT|WRITE matcher動作。「Hooksの大きな進歩」と高評価 — @LLMJunky [X](https://x.com/i/status/2047387508544041283)

> Codex CLI v0.124.0ライブ！reasoning levelショートカットなど新機能、Hooks安定化含む — @fcoury [X](https://x.com/i/status/2047394720754630784)

### Codex CLI v0.124.0 Fastサービスティアデフォルト化

該当なし。過去7日間で条件を満たす投稿は見つからなかった。

### Harness Engineering

#### Tips

> OpenAI Frontierチームが「Extreme Harness Engineering」として、人間の手書きコード0行の制約でAIエージェントに100万行規模のアプリを構築させた実験を解説（前回から継続） — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> 「Harness Engineering」の定義と実装パターンを体系的にまとめ。AIを「チャットボット」から「自律型エージェント」へ進化させるためのシステム設計を整理 — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/310ec80cf7a189)

> OpenAIの「Harness engineering」レポートの手法を、Claude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法を解説（前回から継続） — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

### Codex 日本語出力の改善

#### Tips

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成。英単語混在や1文の長さなど、プロンプトで直らない癖を仕組みで封じるアプローチ（前回から継続） — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

### Codex × Claude Code 連携プラグイン

#### Tips

> OpenAI公式のcodex-plugin-ccの使い方と競合共存の読み解き（前回から継続） — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> Claude CodeからCodexを呼び出す3つの方法（CLIモード vs ASPモード）を整理（前回から継続） — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDKの「Sandbox Agents」をMacでuvを使って試す手順を解説 — youtoy [Qiita](https://qiita.com/youtoy/items/90d49c1f42642e39260e)

### OpenAI Workspace Agents・WebSockets・Privacy Filter

#### Tips

> OpenAI最新発表3本（Workspace Agents、Responses API WebSocket対応、Privacy Filter）を整理し、実装の次段階を考察 — hello_giita [Qiita](https://qiita.com/hello_giita/items/a069904ff54880c9a509)

### GPT Image 2

#### Tips

> GPT Image 2の完全解説。LM Arenaリークと5大進化、DALL-E廃止前の移行ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/3bc0c4db9adbb8d7cbc7)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
