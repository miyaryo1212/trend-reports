---
title: "GPT-5.5発表、Codex CLI v0.125.0リリース"
summary: "OpenAIがGPT-5.5を正式発表。エージェント用途を強化した次世代モデル。同時にCodex CLI v0.125.0がリリースされ、Unixソケット通信やプラグインマーケットプレイス強化など大型アップデート。GPT-OSSやGPT Rosalindなど複数の新プロダクトも公開。"
importance: 5
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-25
features:
  - "GPT-5.5"
  - "GPT-5.4"
  - "GPT-5.3 / Codex Spark"
  - "GPT-5 for Developers"
  - "GPT-OSS"
  - "GPT-OSS Safeguard"
  - "GPT Rosalind"
  - "ChatGPT Images 2.0"
  - "Workspace Agents in ChatGPT"
  - "OpenAI Privacy Filter"
  - "Codex CLI v0.125.0 App-server Unixソケット通信・リモートスレッド"
  - "Codex CLI v0.125.0 プラグインマーケットプレイス強化"
  - "Codex CLI v0.125.0 Permission Profiles永続化"
  - "Codex CLI v0.125.0 モデルディスカバリー・Bedrock対応拡充"
  - "codex exec --json reasoning token使用量レポート"
  - "Codex CLI v0.125.0 ロールアウトトレーシング"
codex_review: "GPT-5.5自体より、Codex CLIの権限保持やトレーシング強化のほうに時代の本音が出ていて面白い。派手な新モデル祭りに見えるが、実はエージェント運用の地味で重い基盤整備が本丸だと思う。"
codex_importance: 5
---

## 公式アップデート

### GPT-5.5 発表

OpenAIが4月23日、最新の汎用モデルGPT-5.5を正式発表した。コーディング・知識労働・コンピュータ操作の強化を前面に打ち出し、エージェント型用途に最適化されている。ChatGPTおよびCodexで順次提供開始。

サイトマップからはGPT-5.4、GPT-5.3 / Codex Spark、GPT-5 for Developersなど複数の関連ページも検出されているが、詳細は未公開。

### GPT-OSS

OpenAIのオープンソースモデルGPT-OSSが公開された。MoEアーキテクチャ（50Mアクティブ/1.5Bトータルパラメータ）を採用し、128kコンテキスト対応。Privacy FilterのベースモデルとしてPII検出・マスキングに使用されている。Apache 2.0ライセンス。

### GPT Rosalind

生物学・バイオメディカル特化型モデルGPT Rosalindが発表された。タンパク質・遺伝子・化学反応のデータで訓練され、標的選択・仮説生成・実験計画を支援する。Codex Life Sciences Pluginで50以上の科学データベースと統合。

### ChatGPT Images 2.0

ChatGPTの画像生成機能がバージョン2.0にアップデート。スマホアプリに新しいメニューとプリセットが追加された。

### Workspace Agents in ChatGPT

ChatGPTにワークスペースエージェント機能が追加された。チーム共有のエージェントで、Slack確認→問題解決→システム更新のような複数ツール横断の長時間ワークフローを自動化できる。

### OpenAI Privacy Filter

GPT-OSSベースのPII（個人識別情報）検出・マスキングモデルをオープンソースで公開。1.5Bパラメータでブラウザやラズパイ上でもローカル動作可能。Apache 2.0ライセンス。

### Codex CLI v0.125.0 リリース

v0.124.0に続き、4月24日にv0.125.0がリリースされた。

**新機能:**

- **App-server Unixソケット通信・リモートスレッド**: Unixソケットトランスポート、ページネーション対応resume/fork、スティッキー環境、リモートスレッド設定/ストアのプラミングを追加（[#18255](https://github.com/openai/codex/pull/18255), [#18892](https://github.com/openai/codex/pull/18892), [#18897](https://github.com/openai/codex/pull/18897), [#19008](https://github.com/openai/codex/pull/19008), [#19014](https://github.com/openai/codex/pull/19014)）
- **プラグインマーケットプレイス強化**: リモートプラグインのインストールとマーケットプレイスのアップグレード機能を追加（[#18917](https://github.com/openai/codex/pull/18917), [#19074](https://github.com/openai/codex/pull/19074)）
- **Permission Profiles永続化**: TUIセッション・ユーザーターン・MCPサンドボックス・シェルエスカレーション・app-server API間でパーミッションプロファイルがラウンドトリップ維持されるように（[#18284](https://github.com/openai/codex/pull/18284), [#18285](https://github.com/openai/codex/pull/18285), [#18286](https://github.com/openai/codex/pull/18286), [#18287](https://github.com/openai/codex/pull/18287), [#19231](https://github.com/openai/codex/pull/19231)）
- **モデルディスカバリー**: モデルプロバイダーがモデル検出を担当する形に変更。AWS/Bedrockアカウント状態をアプリクライアントに公開（[#18950](https://github.com/openai/codex/pull/18950), [#19048](https://github.com/openai/codex/pull/19048)）
- **`codex exec --json` reasoning token使用量レポート**: プログラマティック利用者向けに推論トークン使用量を出力（[#19308](https://github.com/openai/codex/pull/19308)）
- **ロールアウトトレーシング**: ツール・コードモード・セッション・マルチエージェント関係を記録し、デバッグリデューサーコマンドで検査可能に（[#18878](https://github.com/openai/codex/pull/18878), [#18879](https://github.com/openai/codex/pull/18879), [#18880](https://github.com/openai/codex/pull/18880)）

**バグ修正:**
- `/review`中断・TUI終了時のインターフェースフリーズを修正
- exec-serverのプロセス終了後のバッファ出力欠落を修正
- app-serverが明示的に信頼されていないプロジェクト設定を尊重するように修正
- WebSocketクライアントのバースト通知時の切断を軽減
- Windows sandbox起動の複数CLIバージョン対応を改善
- MultiAgentV2スレッド制限の競合拒否、相対パス解決、無効MIMEタイプ拒否など設定/スキーマ処理を強化

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.125.0)

## コミュニティの反応

### GPT-5.5

#### ポジティブ

> OpenAIが新モデル「GPT-5.5」を発表。コード作成・調査・データ分析などで自律的に高精度実行、性能向上で業務・科学研究に期待 — @itnavi2022 [X](https://x.com/i/status/2047391288241320354)

> 待望の「GPT-5.5」発表。噂の「Spud」が正式公開、ChatGPT/Codexで順次提供開始 — @ctgptlb [X](https://x.com/i/status/2047414412089401583)

> GPT-5.5を技術者目線で分析。ベンチマーク・安全性でClaude Opus上回り、エージェント型に最適化 — @itnavi2022 [X](https://x.com/i/status/2047389008662258045)

#### ネガティブ

> GPT-5.5リリース。エージェント精度向上もコスト倍で大変かも — @mauekusa [X](https://x.com/i/status/2047423016888623373)

> OpenAI「GPT-5.5」発表に疑問。「ほんとに?責任取られるんか?」 — @riochan_org [X](https://x.com/i/status/2047457358260170832)

#### Tips

> GPT-5.5時代にCodexへ何を任せるか。ChatGPT側とCodex側の作業分担を実務寄りに整理。API提供前の作業設計として有用 — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-tasks-2026)

> GPT-5.5公開、DeepSeek V4プレビューなどAI動向まとめ — lavellehatcherjr [Qiita](https://qiita.com/lavellehatcherjr/items/a9d2a44f36905027dce2)

> GPT-5.5公開を読み解き。AIは"会話"から"仕事をやり切る実行レイヤー"へ — hello_giita [Qiita](https://qiita.com/hello_giita/items/0b63e73ff224a370709d)

> GPT-5.5のシステムカード詳細要約、安全評価・セーフガード強化。ハルシネーション減少も言及 — @bioshok3 [X](https://x.com/i/status/2047404339137028418)

### GPT-OSS

#### ポジティブ

> OpenAIがPrivacy Filterをリリース。GPT-OSSベースのPIIマスキングモデル、1.5Bパラメータでブラウザ動作 — @xenovacom [X](https://x.com/i/status/2046979474613268993)

> GPT-OSSアーキテクチャのMoE（50M active/1.5B total）でPIIフィルタ、128kコンテキスト対応。素晴らしいリリース — @eliebakouch [X](https://x.com/i/status/2046979020890198503)

> GPT-OSS最高！OpenAIはもっとモデルをオープンソース予定？ — @GalinaLyamina [X](https://x.com/i/status/2047522724097261949)

#### Tips

> GPT-OSSオープンウェイトモデルのColab実行ガイド。Transformers、量子化、ストリーミング、多ターン対話など — @Marktechpost [X](https://x.com/i/status/2045347353948033311)

> GPT-OSSなどで使われるswiglu clamping（トレーニング中のスパイク軽減）の解説 — @eliebakouch [X](https://x.com/i/status/2047539075255500867)

### GPT Rosalind

#### ポジティブ

> OpenAIがAlphaFoldに対抗する生物学特化AI「GPT-Rosalind」を発表。標的選択や仮説生成、実験計画を支援 — @oki_kosuke [X](https://x.com/i/status/2046876395238981754)

> GPT-Rosalindはタンパク質・遺伝子・化学反応に訓練され、生物層を横断的に読み新薬提案。フロンティアモデル — @itsolelehmann [X](https://x.com/i/status/2046303977864901009)

> OpenAIで科学優先、GPT-Rosalindがバイオメディカル重視を示す。人類最大インパクト — @DeryaTR_ [X](https://x.com/i/status/2045487214696501627)

#### Tips

> GPT-Rosalind発売、Codex Life Sciences Pluginで50+科学DB統合、自然言語インターフェース — @MSaintjour [X](https://x.com/i/status/2045296167840338010)

> GPT RosalindをSydney Brennerアプローチのプロジェクトbrennerbot.orgと組み合わせ、実験計画強化を提案 — @doodlestein [X](https://x.com/i/status/2047293957801996445)

### ChatGPT Images 2.0

#### ポジティブ

> ChatGPT Images 2.0がスマホアプリに実装され、新しいメニューとプリセットが登場し楽しそう — @taya_mama_AI [X](https://x.com/i/status/2046767878326857802)

> 部屋写真からベルサイユ宮殿風やイタリア貴族風インテリアを生成、素敵すぎる — @no15koh [X](https://x.com/i/status/2047070410592887133)

> アプリスクリーンショットを大幅リワーク、$250かかる作業が無料でデザイナー不要 — @anulagarwal [X](https://x.com/i/status/2046865847483039804)

#### Tips

> シンプルなプロンプトで詳細な細胞構造図を生成、一部誤りはあるが実用性高く再挑戦価値あり — @AdamPrabata [X](https://x.com/i/status/2047106930297164091)

> ChatGPTで無制限Images v2生成の方法: codexアプリのimagegenスキル使用で300+画像テスト0使用 — @jasperdevs [X](https://x.com/i/status/2046502908141728034)

### Workspace Agents in ChatGPT

#### ポジティブ

> OpenAIがWorkspace Agentsをリリース。チーム共有エージェントで複数ツール横断の長時間ワークフローを自動化。Slack確認→問題解決→システム更新などの例 — @shota7180 [X](https://x.com/i/status/2047079069586452868)

> Workspace Agentsはチーム業務を変革。マルチステップワークフロー、ツール操作、オフライン実行、共有可能 — @goyalshaliniuk [X](https://x.com/i/status/2047276803434385674)

#### Tips

> ChatGPTのWorkspace AgentsをYouTubeで検証。非エンジニア向けに簡単で優位、Google Meet議事録エージェント構築デモ — @okuyama_ai_ [X](https://x.com/i/status/2047296649526145389)

> Workspace Agentsで5つの実用例: チームフィードバック要約・メールドラフト、Slack質問回答、朝のブリーフィング、バグトリアージ、サポートチケット処理 — @Voxyz_ai [X](https://x.com/i/status/2047011328879956399)

### OpenAI Privacy Filter

#### Tips

> Privacy Filter（PII検出・マスキングモデル、Apache 2.0、1.5B params、ローカル動作可）を紹介。英語以外の性能低下可能性あり — @nukonuko [X](https://x.com/i/status/2046987405669138921)

#### ネガティブ

> Privacy Filterの日本語性能は英語比で劣り、ファインチューニングが必要 — @yuji_amanogawa [X](https://x.com/i/status/2046977631837638719)

> ラズパイCPUで動作するが、日本語の人名検出が不完全 — @mat_m_a_t [X](https://x.com/i/status/2047158468331942076)

> Privacy Filterの利点あるが、ベンチマーク限界・多言語弱く、単独使用不可 — @johnseach [X](https://x.com/i/status/2046998659179663582)

### Codex CLI v0.125.0 App-server Unixソケット通信・リモートスレッド

#### ポジティブ

> Codexのビルトインbrowserでthreadが完全に隔離され、git worktree、DB、dev server、AI chat、browserをトグルで切り替え便利 — @elitasson [X](https://x.com/i/status/2046540713295478951)

> Codex threadのライブステータス表示、bash承認、特定タブジャンプをnotchに実装し、複数AIツールの管理が楽に — @edwardluox [X](https://x.com/i/status/2047426505211609420)

#### Tips

> Codex app-serverのthread/readとthread/resumeに逆順ページネーションオプションが必要との指摘 — @SIGKITTEN [X](https://x.com/i/status/2045364164231589888)

> app-serverのinternal socketアクセスでdesktop app制御をリクエスト、remote threads同期の可能性 — @GregKara6 [X](https://x.com/i/status/2046377510888407151)

### Codex CLI v0.125.0 プラグインマーケットプレイス強化

#### ポジティブ

> Codex CLI v0.122.0の詳細レビュー。プラグインmarketplaceがremote/local対応強化され、安全運用が進化。エージェント基盤として優秀 — @KoichiNishizuka [X](https://x.com/i/status/2046528113123983680)

> KIOKU v0.6.0リリース。Codex CLI対応でplugin marketplace登録、Obsidian dashboard追加 — @megaphone_tokyo [X](https://x.com/i/status/2047605917676626177)

#### Tips

> Codex CLIのプラグインインストール方法を共有。/pluginsコマンドで一覧表示され、ComputerUseやRemotionなどのプラグインが充実（前回から継続） — @suna_gaku [X](https://x.com/i/status/2047096612896542911)

> Claude CodeのMarketplaceリポジトリをCodex CLIで`plugin marketplace add`してプラグイン使用可能（前回から継続） — @fukubaka0825 [X](https://x.com/i/status/2046432723531976917)

### Codex CLI v0.125.0 モデルディスカバリー・Bedrock対応拡充

#### ポジティブ

> Codex CLI 0.123.0アップデートでAmazon Bedrockのmodel providerがbuilt-in対応、AWS profileで外部モデル呼び分け可能（前回から継続） — @KoichiNishizuka [X](https://x.com/i/status/2047135312883994863)

### Codex CLI v0.125.0 Permission Profiles永続化

該当なし。個人ユーザーの品質条件を満たす投稿は見つからなかった。

### codex exec --json reasoning token使用量レポート

該当なし。個人ユーザーの品質条件を満たす投稿は見つからなかった。

### Codex CLI v0.125.0 ロールアウトトレーシング

#### Tips

> CodexセッションをTrace Event Formatに変換するツール作成。多剤セッションの性能を視覚デバッグ — @zats [X](https://x.com/i/status/2045564345195622540)

> 多剤セットアップ: コラボレーター、開発者、オーディターのセッションでコンテキストをクリーンに保ち、プロジェクト管理 — @royjossfolk [X](https://x.com/i/status/2047065615207174451)

> debug-log-skill: エージェントのデバッグログを構造化・検索可能にし、反復改善とコード品質向上 — @satvikxbansal [X](https://x.com/i/status/2046995847167308235)

### Harness Engineering

#### Tips

> OpenAI Frontierチームが「Extreme Harness Engineering」として、人間の手書きコード0行の制約でAIエージェントに100万行規模のアプリを構築させた実験を解説（前回から継続） — いもふけ [Zenn](https://zenn.dev/imohuke/articles/extreme-harness-engineering)

> 「Harness Engineering」の定義と実装パターンを体系的にまとめ（前回から継続） — Nao8 [Zenn](https://zenn.dev/dragon1208/articles/310ec80cf7a189)

> OpenAIの手法をClaude CodeのCLAUDE.md/Skills/Subagents/Hooks/Permissionsで再現する方法を解説（前回から継続） — DPL [Zenn](https://zenn.dev/ytksato/articles/1e4a5e6e033ddb)

### Codex 日本語出力の改善

#### Tips

> Codexのフックだけで日本語の読みやすさを改善するハーネスを作成（前回から継続） — そら [Zenn](https://zenn.dev/sora_biz/articles/ja-output-harness-milestone)

### AI生成コードの品質問題

#### Tips

> AI生成コードの死角：決済API実装における致命的な論理欠陥を検証。AIは構文的に正しいコードを生成するが、ビジネスロジックの整合性に弱点 — Hinaena [Zenn](https://zenn.dev/hinaena/articles/aac0a59fc72e7c)

### gpt-image-2 API

#### Tips

> gpt-image-2 APIの実装レポート。Python/TypeScriptサンプルとハマりどころ — sinporwang1 [Qiita](https://qiita.com/sinporwang1/items/99ad381bad78cf6a2a90)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
