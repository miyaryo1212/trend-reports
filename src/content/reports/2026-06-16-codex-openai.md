---
title: "Codex CLI 0.140.0正式リリース・9つの新機能搭載"
summary: "Codex CLIがalpha系列を脱し0.140.0正式版をリリース。/usage・/import・セッション削除・Bedrock認証など9つの主要機能を一挙搭載。コミュニティではpersonal skillやMCP互換性の議論が活発化。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-16
features:
  - "Codex CLI 0.140.0 正式リリース: alpha系列から安定版に移行、多数の新機能を含む（6/15公開）"
  - "/usage コマンド: 日次・週次・累計のアカウントトークン使用量を表示する機能を追加"
  - "/goal 大容量対応: オーバーサイズテキスト・大きな貼り付けブロック・画像添付をリモートセッションでも保持"
  - "セッション完全削除: codex delete / /delete / thread/delete による永久削除機能、サブエージェントクリーンアップ付き"
  - "/import コマンド: Claude Codeからセットアップ・プロジェクト設定・最近のチャットを選択的にインポート"
  - "@メンションメニュー: @入力でファイル・プラグイン・スキルの統合メンションメニューを表示"
  - "Amazon Bedrock認証: マネージドBedrock APIキー認証およびCLI/MCP OAuthクレデンシャルの暗号化ローカル保存"
  - "SQLite自動修復: 破損したSQLiteデータベースをロールアウトデータから自動バックアップ・再構築"
  - "/realtime 音声機能削除: 実験的なリアルタイム音声コントロールと関連オーディオ依存をTUIから除去"
codex_review: "正式版への到達自体より、Claude Codeからの/importとBedrock対応にCodexの勝ち筋が見える。新奇さは控えめだが、削除や復旧まで含めて『毎日使う道具』へ寄せた更新で、業務導入にはかなり効く。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI 0.140.0 正式リリース

前日までalpha.19だった0.140.0が正式版としてリリースされた。alpha系列の変更を統合し、6つの新機能・6つのバグ修正・パフォーマンス改善を含む大型アップデートとなっている。

#### 新機能

- **`/usage` コマンド**: 日次・週次・累計のアカウントトークン使用量をCLI内で確認可能に（[#27925](https://github.com/openai/codex/pull/27925)）
- **`/goal` 大容量対応**: オーバーサイズテキスト、大きな貼り付けブロック、画像添付をリモートapp-serverセッションでも保持（[#27508](https://github.com/openai/codex/pull/27508), [#27509](https://github.com/openai/codex/pull/27509), [#27510](https://github.com/openai/codex/pull/27510)）
- **セッション完全削除**: `codex delete`・`/delete`・app-server `thread/delete` による永久削除。確認プロンプトとサブエージェントクリーンアップ付き（[#25018](https://github.com/openai/codex/pull/25018), [#27476](https://github.com/openai/codex/pull/27476)）
- **`/import` コマンド**: Claude Codeからセットアップ・プロジェクト設定・最近のチャットを選択的にインポート（[#27070](https://github.com/openai/codex/pull/27070), [#27071](https://github.com/openai/codex/pull/27071), [#27703](https://github.com/openai/codex/pull/27703)）
- **`@` メンションメニュー**: `@` 入力でファイル・プラグイン・スキルの統合メニューをデフォルト表示（[#27499](https://github.com/openai/codex/pull/27499)）
- **Amazon Bedrock認証**: マネージドBedrock APIキー認証と、CLI/MCP OAuthクレデンシャルの暗号化ローカル保存（[#27443](https://github.com/openai/codex/pull/27443), [#27689](https://github.com/openai/codex/pull/27689), [#27504](https://github.com/openai/codex/pull/27504), [#27535](https://github.com/openai/codex/pull/27535), [#27539](https://github.com/openai/codex/pull/27539), [#27541](https://github.com/openai/codex/pull/27541)）

#### バグ修正

- **SQLite自動修復**: 破損したSQLiteデータベースをロールアウトデータから自動バックアップ・再構築。ディレクトリとして不正作成されたケースにも対応（[#26859](https://github.com/openai/codex/pull/26859), [#27719](https://github.com/openai/codex/pull/27719)）
- `/review` でEsc押下時のクラッシュを修正、キャンセル時もガイダンスを保持（[#22879](https://github.com/openai/codex/pull/22879)）
- MCP接続の信頼性向上: 起動失敗のリトライ、使用不能なOAuth資格情報のログアウト報告、明示的に無効化されたサーバーの状態保持（[#25147](https://github.com/openai/codex/pull/25147), [#26713](https://github.com/openai/codex/pull/26713), [#27414](https://github.com/openai/codex/pull/27414)）
- リモートプラグインのアンインストール修正、認証が必要なアプリのインストール時表示改善（[#27085](https://github.com/openai/codex/pull/27085), [#27223](https://github.com/openai/codex/pull/27223)）
- Non-TTYバックグラウンドコマンドのCtrl-C割り込みと最終出力の保持（[#26734](https://github.com/openai/codex/pull/26734)）

#### その他

- **`/realtime` 音声機能の削除**: 実験的なリアルタイム音声コントロールと関連オーディオ依存をTUIから除去（[#27801](https://github.com/openai/codex/pull/27801)）
- 大規模リポジトリ・長時間セッションでの応答性改善（fsmonitor保持、履歴重複読み取り回避、アーカイブ検索高速化、turn-diffキャッシュ）

[v0.140.0リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.140.0)

## コミュニティの反応

### Codex personal skill・エコシステム

#### Tips

> Codexのpersonal skillを作成し、配布可能なskill-exportまで整備する手順を解説。Claude Codeの/handoverに相当する仕組みをCodexで構築 — 彦坂 [Zenn](https://zenn.dev/hikosakasohtaro/articles/20260613_codex_personal_skills)

> Codex Fable5 Skillを作成。Fable風のワークフローガイドをCodexに取り入れるためのスキル — baskduf [Qiita](https://qiita.com/baskduf/items/013a91d009c91957595e)

### Codex Pets

#### ポジティブ

> Codex CLIで `/pet` と打つと小さなキャラクターが作業に反応。「伺か」を思い出すノスタルジックな体験として好意的に紹介 — JJ yamitake [Zenn](https://zenn.dev/yamitake/articles/codex-pets-ukagaka-nostalgia)

### MCP互換性の課題

#### Tips

> 同じMCPサーバーでもClaude CodeとCodexで動作が異なるケースを整理。設定ファイル・対応トランスポート・認証情報の渡し方・実行環境の差異が原因と分析 — サボさん [Zenn](https://zenn.dev/engineer__117/articles/claude-code-codex-mcp-compatibility)

### Codexによるニュースキュレーター構築

#### Tips

> Codexを使って自分専用のAIニュースキュレーターを構築し約1か月運用した知見を共有。既存ニュースレターとの差別化として個人の関心に最適化できる点を評価 — ukita [Zenn](https://zenn.dev/mkj/articles/966c62588bd8fc)

### /usage コマンド

#### Tips

> xAIへの提案としてpay-as-you-go使用量をタスクバーにライブ表示してほしいとの声。/usageコマンドやWeb確認の代替手段を求める意見 — @testerlabor

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
