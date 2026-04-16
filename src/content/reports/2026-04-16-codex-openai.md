---
title: "Codex CLI v0.121.0安定版リリース、マーケットプレイス機能搭載"
summary: "Codex CLI v0.121.0安定版がリリースされ、プラグインマーケットプレイス、MCP Apps対応拡張、メモリモード管理、TUI履歴検索等を搭載。v0.122.0-alpha.1も公開。Agents SDKの次世代進化も発表された。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-16
features:
  - "Codex CLI v0.121.0"
  - "Codex CLI v0.122.0-alpha.1"
  - "Agents SDK次世代進化"
codex_review: "CLIの改善自体は堅実ですが、本当に効いているのは“単体ツール”から“運用基盤”へ重心が移った点だと思う。派手さは薄い一方、マーケットプレイスとメモリ管理は地味に次の競争軸を決める。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.121.0 安定版リリース（新規）

Codex CLIの安定版v0.121.0がリリースされた。前回報告のalpha段階から正式リリースに到達。主な新機能は以下の通り:

- **プラグインマーケットプレイス**: `codex marketplace add` コマンドでGitHub、git URL、ローカルディレクトリ、`marketplace.json` URLからプラグインマーケットプレイスをインストール可能に（#17087, #17717, #17756）
- **TUI履歴検索**: `Ctrl+R` による逆方向検索と、実行済みスラッシュコマンドのローカルリコール（#17550, #17336）
- **メモリモード管理**: TUIとapp-serverからメモリモードの切替、メモリのリセット・削除、メモリ拡張のクリーンアップが可能に（#17632, #17626, #17913, #17937, #17844）
- **MCP/プラグイン拡張**: MCP Appsツールコール対応、名前空間付きMCP登録、並列呼び出しオプトイン、サンドボックス状態メタデータ（#17364, #17404, #17667, #17763）
- **Realtime/app-server API拡張**: 出力モダリティ制御、トランスクリプト完了イベント、ターンアイテム直接注入、シンボリックリンク対応ファイルシステムメタデータ（#17701, #17703, #17719）
- **セキュアdevcontainerプロファイル**: bubblewrapサポート付きの専用プロファイル、macOSサンドボックスのUnixソケット許可リスト（#10431, #17547, #17654）

バグ修正では、macOSサンドボックスのプライベートDNS対応、Windowsパス問題、`prolite`プラン対応、Guardianタイムアウト処理の改善、app-serverの安定性向上などが含まれる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.121.0)

### Codex CLI v0.122.0-alpha.1（新規）

v0.122.0のアルファプレリリースが4月15日に公開。詳細な変更内容は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.1)

### Agents SDK次世代進化（新規）

OpenAIがAgents SDKの次世代アップデートに関する公式記事を公開。Cloudflareの保護により詳細内容は未取得だが、エージェントの持続的システム化（メモリ、進化機能等）に関する発表と推測される。

[ソース](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)

### Trusted Access for Cyber拡大（新規）

OpenAIが4月14日にTrusted Access for Cyber（TAC）を拡大し、防御用途向けにGPT-5.4-Cyberを投入。認証済みサイバーセキュリティ専門家数千人規模へのアクセス提供を発表。

[ソース](https://openai.com/index/trusted-access-for-the-next-era-of-cyber-defense/)

## コミュニティの反応

### Codex CLI v0.121.0

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### Codex CLI v0.122.0-alpha.1

該当なし。X上でエンゲージメント基準を満たす反応は確認されなかった。

### Agents SDK次世代進化

#### ポジティブ

> Agentsアップデートでメモリ、睡眠（夢による学習）、進化機能が追加され、エージェントが持続的なシステムに進化。状態保持型デジタルオペレーターへの移行を評価 — @Kylechasse [出典](https://x.com/i/status/2042120327686479930)

> 新インターフェースが開発者向けに最適化され、エージェント実行ツールのポテンシャルが大きいと評価 — @dani_avila7 [出典](https://x.com/i/status/2044137566216053062)

#### Tips

> 夢機能でエージェントが自動学習、性格QA、セキュリティ強化などの活用ポイントを解説 — @jordymaui [出典](https://x.com/i/status/2042132320736428476)

> エージェントビルダーはオープンソースへの影響を過小評価。AGI級だが遅い/高価な未来に備え、速いモデルで賢いモデルに委譲する戦略を提案 — @walden_yan [出典](https://x.com/i/status/2042424031144820762)

### Trusted Access for Cyber / GPT-5.4-Cyber（新規）

#### Tips

> OpenAIがGPT-5.4-Cyberを投入　サイバー防御は"人手中心"から次の段階へ — hello_giita [Qiita](https://qiita.com/hello_giita/items/e432444d20721b0b7607)

> OpenAIの「Trusted Access」拡張は、ただの安全対策じゃない。AI開発の勝負が"性能"から"誰にどこまで渡すか"へ移り始めた話 — taketsuyo [Qiita](https://qiita.com/taketsuyo/items/7b59df3e5dc699dadb24)

> OpenAIが本気でサイバー防衛に乗り出した──Trusted Access for Cyberとは何か、何が変わるのか — shioccii [Qiita](https://qiita.com/shioccii/items/ef4024a6cf05b252e004)

### gpt-realtime GA昇格とSIP/MCP対応（前回から継続）

#### Tips

> OpenAI gpt-realtime入門 — SIP・MCP対応の本番音声エージェントをPythonで実装する：プレビュー版は4月30日に非推奨化 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/191-gpt-realtime-sip-mcp-production-guide)

### GPT-5.4 Thinking活用（前回から継続）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

> GPT-5.4 に質問できる Chrome 拡張を作ってみて — opvel [Zenn](https://zenn.dev/opvelll/articles/2e4028b6c16fe5)

### Dify × GPT-5.4ウェブ検索（新規）

#### Tips

> Dify で 外部検索を行うLLMモデル (GPT5.4)を使って、ウェブ検索を実現する方法：Chat Completions APIとResponses APIの違いを踏まえた実装ガイド — kameoncloud [Zenn](https://zenn.dev/kameoncloud/articles/a15ab27f97f632)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング入門：AIエージェントの品質を構造で高める5つの要素 — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/harness-engineering-intro)

> ハーネスエンジニアリング実例集：OpenAI・Vercel・LangChain・Manusは何をやったか — Junko [Zenn](https://zenn.dev/junko_ai/articles/5d02fb0692d866)

> AIコーディングの本質はプロンプトではない─OpenAI・Anthropicの公開事例から読み解く「harness engineering」 — slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

### OpenAI APIコスト最適化（前回から継続）

#### Tips

> OpenAI APIのコスト、Batch APIで半額にできるの知ってますか？ — secobaka [Zenn](https://zenn.dev/dely_jp/articles/e8f130cb1b93e9)

### Whisper API活用（前回から継続）

#### Tips

> Whisper APIはどこまでノイズに耐えられるか？ノイズ除去3手法＋VADで徹底検証した — Kojurin [Zenn](https://zenn.dev/kta805/articles/article_whisper_noise_erxperi)

> whisper-1のハルシネーション地獄をgpt-4o-transcribeで完全解消した話 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-hallucination-gpt4o-transcribe)

### AIエージェント運用（前回から継続）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

### AI運用構造論（新規）

#### Tips

> なぜ私はAIの性能より運用構造を見ているのか：外部記憶、ツール接続、状態持続、再開可能性、監査可能性といったモデル外側の運用構造に注目する視点 — dantarg [Zenn](https://zenn.dev/dantarg/articles/3235e5affbb7c9)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI Blog](https://openai.com/news)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
