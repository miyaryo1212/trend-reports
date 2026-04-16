---
title: "Cloudflare Agent CloudにGPT-5.4・Codex統合、CLI alpha.6まで進行"
summary: "CloudflareがAgent CloudにOpenAIのGPT-5.4とCodexを統合し企業向けAIエージェント基盤を提供。Codex CLI v0.121.0-alpha.6まで連続リリース。gpt-realtimeのGA昇格やDify連携など日本語コミュニティの実践記事も増加。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-14
features:
  - "Cloudflare Agent Cloud with OpenAI"
  - "Codex CLI v0.121.0-alpha"
codex_review: "Cloudflare統合は、モデル競争より配備基盤の主導権争いが本格化してきた感じがあって面白い。一方でCLIの連続alphaは熱量の割にまだ業界全体を動かす段階ではなく、地味に効くのは実装知見の蓄積だと思う。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Cloudflare Agent CloudにGPT-5.4とCodexを統合（新規）

CloudflareがAgent CloudにOpenAIのGPT-5.4とCodexを統合。企業がAIエージェントを構築・デプロイ・スケーリングできるプラットフォームとして提供を開始した。速度とセキュリティを両立したエンタープライズ向けのエージェントワークフロー基盤。

[ソース](https://openai.com/index/cloudflare-openai-agent-cloud)

### Codex CLI v0.121.0-alpha.6リリース（前回から継続・更新）

Codex CLIのRust実装がv0.121.0-alpha.6まで進行（4月13日）。alpha.4〜alpha.6が4月11〜13日に連続リリースされているが、詳細な変更内容は未公開。前回報告のalpha.3から3つのアルファリリースが追加され、次期安定版に向けた開発が加速している。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.6)

### Codex CLI v0.120.0 安定版（前回から継続）

Realtime V2バックグラウンドエージェントの進捗ストリーミング、フォローアップレスポンスのキューイング、Hook TUI表示の改善、MCP `outputSchema`サポート等を含む安定版。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.120.0)

### Axiosサプライチェーン攻撃への対応（前回から継続）

Axiosの開発者ツール侵害を受け、OpenAIがmacOSコード署名証明書をローテーション。ユーザーデータへの影響なし。5月8日以降、旧バージョンのmacOSアプリは動作停止。

[ソース](https://openai.com/index/axios-developer-tool-compromise)

### OpenAI Academy 教育コンテンツ一斉公開（前回から継続）

ChatGPTの使い方を体系的に学べる教育プラットフォーム。プロンプト基礎、データ分析、画像生成、業種別ガイド等20以上のコースを提供。

[ソース](https://openai.com/academy/getting-started)

### CyberAgentがChatGPT EnterpriseとCodexを採用（前回から継続）

広告・メディア・ゲーム事業全体でChatGPT EnterpriseとCodexを活用している事例。

[ソース](https://openai.com/index/cyberagent)

## コミュニティの反応

### Cloudflare Agent Cloud with OpenAI

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### Codex CLI v0.121.0-alpha

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### gpt-realtime GA昇格とSIP/MCP対応（新規）

#### Tips

> OpenAI gpt-realtime入門 — SIP・MCP対応の本番音声エージェントをPythonで実装する：Realtime APIのGA昇格に伴うSIP電話対応、リモートMCPサーバー対応、非同期関数呼び出しの3つの変化点を実装ガイドとして解説。プレビュー版は4月30日に非推奨化 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/191-gpt-realtime-sip-mcp-production-guide)

### DifyとGPT-5.4によるウェブ検索（新規）

#### Tips

> Dify で外部検索を行うLLMモデル (GPT5.4)を使って、ウェブ検索を実現する方法：Chat Completions APIとResponses APIの違いを解説し、DifyのLLMノードでGPT-5.4のWeb検索を使う方法を紹介 — kameoncloud [Zenn](https://zenn.dev/kameoncloud/articles/a15ab27f97f632)

### GPT-5.3 Codexによるコード生成実践（新規）

#### Tips

> PineScriptエンジンをゼロから作る ― GPT-5.3 CodexとOpenCodeによるPinescriptionの設計と実装：AGENTS.mdに言語仕様を先に固定し、エージェントに実装を任せた開発プロセスの知見 — hansheng [Zenn](https://zenn.dev/woodstock_tech/articles/c3a0d8341a9e9b) / [Qiita](https://qiita.com/zenixls2/items/48be7e83f334a9293a88)

### Whisper APIノイズ耐性検証（新規）

#### Tips

> Whisper APIはどこまでノイズに耐えられるか？ノイズ除去3手法＋VADで徹底検証した：スペクトルサブトラクション・Wienerフィルタ・RNNoiseの3手法を段階的ノイズで比較し、ソフトウェア的ノイズ除去の限界を示した — Kojurin [Zenn](https://zenn.dev/kta805/articles/article_whisper_noise_erxperi)

### Vibe Codingによる開発事例（新規）

#### Tips

> Vibe Codingで開発中のMarkdown Editorを使って、Qiita記事のMarkdown記法を実際に試してみた：Windows/macOS/Linux対応のMarkdown EditorをVibe Codingで開発中の事例 — engchina [Qiita](https://qiita.com/engchina/items/b6494a33c98bcebe8c2f)

### GPT-5.4 Thinking活用（前回から継続）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用：推論制御と1Mトークンコンテキストの実践ガイド — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

> GPT-5.4 に質問できる Chrome 拡張を作ってみて：ChatとAgentの違いが腑に落ちた体験記 — opvel [Zenn](https://zenn.dev/opvelll/articles/2e4028b6c16fe5)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング入門：AIエージェントの品質を構造で高める5つの要素 — ルール・スキル・フック・メモリ・フィードバックの5要素で環境設計する手法を体系化 — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/harness-engineering-intro)

> ハーネスエンジニアリング実例集：OpenAI・Vercel・LangChain・Manusは何をやったか — モデルの周りの仕組みを変えた各社事例を横断比較 — Junko [Zenn](https://zenn.dev/junko_ai/articles/5d02fb0692d866)

> AIコーディングの本質はプロンプトではない─OpenAI・Anthropicの公開事例から読み解く「harness engineering」 — slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

### OpenAI APIコスト最適化（前回から継続）

#### Tips

> OpenAI APIのコスト、Batch APIで半額にできるの知ってますか？：レシート解析処理をBatch APIに移行してコスト削減した実例 — secobaka [Zenn](https://zenn.dev/dely_jp/articles/e8f130cb1b93e9)

### Whisperハルシネーション対策（前回から継続）

#### Tips

> whisper-1のハルシネーション地獄をgpt-4o-transcribeで完全解消した話：27分の会議録音で同一フレーズ69回繰り返しが発生、モデル移行で解決 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-hallucination-gpt4o-transcribe)

### AIエージェント運用（前回から継続）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選：コスト暴走防止やログ管理の実践知見 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
