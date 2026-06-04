---
title: "Codex CLI v0.137.0正式版リリース、v0.138.0-alpha突入"
summary: "Codex CLI v0.137.0がTUI改善・Enterprise機能・リモートコントロール・マルチエージェントv2等を含む正式版としてリリース。同日v0.138.0-alpha.1〜4も連続公開。ChatGPTメモリー「Dreaming」機能やAgents SDK次世代版など複数の新発表も検出。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-05
features:
  - "Codex CLI v0.137.0"
  - "Codex CLI v0.137.0 Enterprise機能"
  - "Codex CLI v0.137.0 リモートコントロール"
  - "Codex CLI v0.137.0 プラグイン強化"
  - "Codex CLI v0.137.0 Web/画像ツール拡張"
  - "Codex CLI v0.137.0 マルチエージェントv2"
  - "Codex CLI v0.138.0-alpha"
  - "Codex柔軟な料金プラン(チーム向け)"
  - "Codexをあらゆる役割・ツール・ワークフローに"
  - "Codexアップグレード"
  - "ChatGPTメモリー「Dreaming」機能"
  - "Agents SDK次世代版"
  - "WebSocketによるエージェントワークフロー高速化"
  - "OpenAIフロンティアモデル+CodexがAWSで利用可能に"
codex_review: "正式版の中身は派手なブレークスルーというより、Codexを日常運用に耐える作業基盤へ磨く更新で好感がある。むしろ403越しに見える周辺発表の多さのほうが、OpenAIの囲い込み戦略としては過小評価できない。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI v0.137.0 正式リリース

6月4日、Codex CLI v0.137.0が正式リリースされた。主な新機能は以下の通り。

- **TUI改善**: F13-F24キーバインド対応、検索メニューでのペースト対応、コンパクトな推論専用ステータス表示
- **Enterprise/管理者向け機能**: 月次クレジット上限の表示、クラウド管理設定バンドル（EDUワークスペース含む）の適用
- **リモートコントロール**: app-server v2 RPCによるペアリング開始、コントローラー権限の一覧・取消
- **プラグイン強化**: `codex plugin list --json` の機械可読出力、リモートカタログのキャッシュ提案
- **Web/画像ツール拡張**: コードモードでのホステッドWeb・画像ツール利用範囲拡大、並列Web検索対応
- **マルチエージェントv2**: スレッドごとのランタイム選択保持、スポーンエージェントのフォローアップ・メタデータデフォルト改善

バグ修正ではキャンセル時のドラフト復元、スラッシュコマンドフィルタリング、macOS/Windows起動時の安定性向上、プラグインロード順序の保持などが含まれる。

- [v0.137.0リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.137.0)

### Codex CLI v0.138.0-alpha.1〜4

v0.137.0正式版と同日の6月4日、v0.138.0のアルファ版がalpha.1からalpha.4まで4本連続でリリースされた。リリースノートはいずれも「Release 0.138.0-alpha.X」のみで詳細は未公開。

- [v0.138.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.1)
- [v0.138.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.4)

### OpenAI新発表（サイトマップで検出、詳細未取得）

以下のページがOpenAIサイトマップ上で検出されたが、いずれもアクセス時に403エラーとなり詳細は未確認。

- **Codex柔軟な料金プラン（チーム向け）**: `codex-flexible-pricing-for-teams`
- **Codexをあらゆる役割・ツール・ワークフローに**: `codex-for-every-role-tool-workflow`（前回から継続）
- **Codexアップグレード**: `introducing-upgrades-to-codex`
- **ChatGPTメモリー「Dreaming」機能**: `chatgpt-memory-dreaming`
- **Agents SDK次世代版**: `the-next-evolution-of-the-agents-sdk`
- **WebSocketによるエージェントワークフロー高速化**: `speeding-up-agentic-workflows-with-websockets`
- **OpenAIフロンティアモデル+CodexがAWSで利用可能に**: `openai-frontier-models-and-codex-are-now-available-on-aws`（前回から継続）

## コミュニティの反応

### Codex CLI v0.137.0 リモートコントロール

#### ポジティブ

> Remote-control improvements（ペアリング開始・controller grants via app-server v2 RPCs）をパワーユーザー向け強化として紹介 — @nagarjuncreates

> Remote clientsのペアリング・権限管理をapp-server v2 RPCの新機能として詳述し、CLIの進化を評価 — @Mx3Dev

#### Tips

> v0.137.0のremote-control管理RPCをstableとして実用的と指摘 — @ebisuke20260503

> remote-controlの権限一覧/取消追加を確認し、更新後プラグイン棚卸しを推奨 — @AICodingOpsJP

### Codexをあらゆる役割・ツール・ワークフローに

#### Tips

> CodexのDynamic Workflowsを自作事例として紹介。「監督付きワークフロー」のスキル定義で、雛形→検証→成果物投入のライフサイクルを実現 — @suna_gaku

> Codexで作業スレッドの整理・作成・検索・ピン留めを自動化。worktree並行作業も対応し、迷子スレッド防止に活用 — @sora19ai

> Codex内でオーケストレーションスクリプトを動的に組み、サブエージェント群を一気に起動。/dynamicコマンドで「設計→委任→実装」が完結するOSSリポジトリを紹介（326いいね） — @Codestudiopjbk

### ChatGPTメモリー「Dreaming」機能

#### ポジティブ

> ChatGPTメモリーの新「dreaming」システムは過去チャットから文脈を自動合成・更新し、永続的なパートナーに近づく大きな進化 — @mark_k

> 新しいChatGPT memoryシステムがPlus/Proユーザー向けに米国でロールアウト中。2倍のメモリー容量も — @diegocabezas01

> すでに優れたChatGPT memoryが「dreaming」でさらに強化されるのが楽しみ — @ParkerOrtolani

> 新memoryは会話ごとにMDファイルのように更新され、コンテキストを自然に維持 — @JasonBotterill

#### Tips

> 新memoryブログの主要ポイントを8つ抜粋（長期文脈・自動合成・サマリー編集・時間経過更新など） — @nicdunz

### OpenAIフロンティアモデル+CodexがAWSで利用可能に（前回から継続）

#### ポジティブ

> OpenAI frontier models and Codex are now available on AWSと発表を共有 — @nicdunz

#### Tips

> Amazon Bedrock AgentCore RuntimeのmicroVM内でCodex CLIを動かす方法を解説。agent.pyから`codex exec`を呼び出す構成 — takao2704 [Zenn](https://zenn.dev/takao2704/articles/agentcore-codex-cli-runtime)

### OpenAIのAIスーパーアプリ戦略

#### Tips

> OpenAIがChatGPT・Codex・Atlasを統合した「AIスーパーアプリ」を目指す構造変化を一次情報から分析。ChatGPTを入口に、Codexを実行レイヤー、Atlasをコンテキスト取得面として統合する動き — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/426d30b2fd82da)

### Codex CLI利用・開発事例

#### Tips

> Codex CLIだけAPIキー運用にするためにCODEX_HOMEを分ける方法（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/codex-cli-api-key-auth)

> GPT Image 2入門 — DALL-E 3後継モデルのAPI実装と移行ガイド — kai_kou [Qiita](https://qiita.com/kai_kou/items/03da0c018bcbecc72c5e)

> AIエージェントにhuman-reviewゲートを組み込むMCPスターター — agentmemories [Qiita](https://qiita.com/agentmemories/items/9f004674bb02c42568da)

### OpenAI全般

#### Tips

> 推論モデルの「推論トークン」で課金が膨らむ話。APIレスポンスのusageで実コストを測る方法（前回から継続） — 浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/2b4cb35ad92a9f)

> Reasoning Effort「Low」は逆効果 — Opus 4.8とGPT-5.5を720試行で比較（前回から継続） — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-21-opus48-gpt55-reasoning-effort)

> 大量のスキルでAgentの精度を上げる手法「SkillsInjector」を紹介 — sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/2cfbefa6926f40)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
