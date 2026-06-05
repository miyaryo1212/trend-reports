---
title: "v0.137.0継続、v0.138.0-alpha進行中。6/5にサービス障害発生"
summary: "Codex CLI v0.137.0以降の新正式リリースなし。v0.138.0-alpha.4まで進行。6月5日にOpenAI認証起点の複数サービス障害が報告された。コミュニティではAIコード監査やCodex運用事例が活発。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-06
features:
  - "Codex CLI v0.137.0: TUI改善（F13-F24キーバインド、検索メニューでのペースト、コンパクト推論ステータス表示）"
  - "Codex CLI v0.137.0 Enterprise機能: 月間クレジット上限表示、クラウド管理Config Bundle適用（EDUワークスペース対応含む）"
  - "Codex CLI v0.137.0 リモートコントロール: app-server v2 RPCによるペアリング開始・コントローラー権限の一覧/取消"
  - "Codex CLI v0.137.0 プラグイン改善: `codex plugin list --json` 出力対応、リモートカタログのキャッシュ付きサジェスト"
  - "Codex CLI v0.137.0 Web/画像ツール拡張: コードモードでのホステッドWeb・画像ツール利用拡大、並列Web検索対応"
  - "Codex CLI v0.137.0 Multi-agent v2: スレッドごとのランタイム選択保持、スポーンエージェントのフォローアップ・メタデータデフォルト改善"
  - "Codex CLI v0.138.0-alpha.1〜4: 次期バージョンのアルファリリース（6月4-5日、4回のイテレーション）"
  - "Codex for Every Role/Tool/Workflow（サイトマップ検出、詳細取得不可）: Codexの各役割・ツール・ワークフロー向け展開に関する公式ページ更新"
codex_review: "機能追加そのものより、認証障害とコミュニティ側の監査運用の話のほうが生々しく、今のCodexの実力をよく映している。過剰に新機能を追う段階ではなく、製品より運用設計とフォールトトレランスが競争力になる局面に入った感じがある。"
codex_importance: 2
---

## 公式アップデート

### 本日の新規正式リリースはなし

Codex CLI v0.137.0（6月4日リリース、前回レポート済み）以降、新たな正式バージョンのリリースはなし。

### Codex CLI v0.138.0-alpha 進行中（前回から継続）

v0.138.0-alpha.1〜4が6月4〜5日に連続リリースされている（前回から継続）。リリースノートはいずれも詳細未公開。6月5日にはrusty-v8-v149.2.0のタグも追加されたが、依存ライブラリの更新であり機能的な変更情報はなし。

- [v0.138.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.4)
- [rusty-v8-v149.2.0](https://github.com/openai/codex/releases/tag/rusty-v8-v149.2.0)

### OpenAIサービス障害（6月5日）

6月5日、OpenAIのLogin（認証）コンポーネントを起点に、Codex APIやVS Code拡張を含む複数サービスでパフォーマンス低下が報告された。

- [OpenAI障害: Codex API・VS Code拡張など6サービスでパフォーマンス低下](https://qiita.com/picnic/items/49f6f49d2e72cf6917dc) — picnic（Qiita）

## コミュニティの反応

### Codex CLI v0.137.0

X/Twitter上で品質基準（いいね10以上またはリポスト3以上）を満たす個人投稿は該当なし。

### OpenAIサービス障害

#### Tips

> OpenAI障害の詳細を解説。起点はLogin（認証）コンポーネントで、Codex API・VS Code拡張など6サービスに波及。認証依存の連鎖障害パターンを分析 — picnic [Qiita](https://qiita.com/picnic/items/49f6f49d2e72cf6917dc)

### AIコード監査とCodex CLI活用

#### Tips

> Claude Codeが書いた15本の自動化スクリプトをCodex CLI（GPT系）とGemini CLIで監査したところ、全15本が同じ3箇所でバグっていた事例を共有。異なるAI間のクロス監査の有効性を実証 — ピクト [Zenn](https://zenn.dev/pikuto/articles/ai-code-correlated-blindspot)

> Amazon Bedrock AgentCore RuntimeのmicroVM内でCodex CLIを動かす方法を解説。agent.pyから`codex exec`を呼び出す構成（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/agentcore-codex-cli-runtime)

> Codex CLIだけAPIキー運用にするためにCODEX_HOMEを分ける方法（前回から継続） — takao2704 [Zenn](https://zenn.dev/takao2704/articles/codex-cli-api-key-auth)

### OpenAI Frontier / Codex開発体制

#### Tips

> OpenAI Frontierの Ryan Lopopolo が3人チームで5ヶ月間「人間はコードを書かない・レビューもしない」を実践した極限harness運用を紹介。「主役はモデルじゃなくharness」の極致 — AIウォッチ [Zenn](https://zenn.dev/aiwatch_jp/articles/openai-frontier-extreme-harness)

### OpenAIのAIスーパーアプリ戦略

#### Tips

> OpenAIがChatGPT・Codex・Atlasを統合した「AIスーパーアプリ」を目指す構造変化を一次情報から分析。ChatGPTを入口に、Codexを実行レイヤー、Atlasをコンテキスト取得面として統合する動き（前回から継続） — 太田和彦 [Zenn](https://zenn.dev/itdo/articles/426d30b2fd82da)

### LLMゲートウェイ・API活用

#### Tips

> 複数LLMプロバイダーをOpenAI互換API 1つに束ねるゲートウェイ「OrcaRouter」の実装解説。200以上のモデルを統一的に扱う — koki-kobayashi-flashlabs [Qiita](https://qiita.com/koki-kobayashi-flashlabs/items/8da9c5182457e34e03fb)

> AIエージェントにhuman-reviewゲートを組み込むMCPスターター（前回から継続） — agentmemories [Qiita](https://qiita.com/agentmemories/items/9f004674bb02c42568da)

### OpenAI全般

#### Tips

> 推論モデルの「推論トークン」で課金が膨らむ話。APIレスポンスのusageで実コストを測る方法（前回から継続） — 浅井めぐみ [Zenn](https://zenn.dev/asayi_megumi/articles/2b4cb35ad92a9f)

> Reasoning Effort「Low」は逆効果 — Opus 4.8とGPT-5.5を720試行で比較（前回から継続） — Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-21-opus48-gpt55-reasoning-effort)

> 大量のスキルでAgentの精度を上げる手法「SkillsInjector」を紹介（前回から継続） — sasakuna [Zenn](https://zenn.dev/knowledgesense/articles/2cfbefa6926f40)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
