---
title: "Agents API 公開ベータ、GPT-Live-1 も API 提供開始"
summary: "Codex と同じエージェントハーネスを API 化した Agents API が public beta で公開され、ホステッドサンドボックスや自動コンパクションを備える。全二重音声モデル GPT-Live-1 も $0.05/分で API 提供が始まり、Codex CLI は 0.154.0 が安定版としてリリースされた。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-11

features:
  - "Agents API (public beta)"
  - "OpenAI hosted sandbox"
  - "Agents API のマルチエージェント / tool search / programmatic tool calling"
  - "Agents API の自動コンパクション"
  - "GPT-Live-1 API 提供開始"
  - "GPT-Live-1 の推論委譲とベンチマーク"
  - "GPT-Live-1 の新音声オプション"
  - "ChatGPT Work の Data agent"
  - "ChatGPT for Financial Services"
  - "GPT-6 Astra の業務向け展開と新エンタープライズ管理機能"
  - "ChatGPT Desktop のエンタープライズプラグイン"
  - "Codex CLI 0.154.0 安定版リリース"
  - "Codex CLI の codex mcp-server 廃止"
  - "Codex Python SDK 0.154.0"
  - "Codex CLI 0.155.0-alpha.1 〜 alpha.2.2"
  - "Windows 向けネイティブ音声ビルドの Cygwin ソース公開"
codex_review: "Agents APIはエージェント運用の標準部品化としてかなり大きい。一方で自動コンパクションや長時間実行の粗さを見ると、実務普及は信頼性改善待ちという印象です。"
codex_importance: 4
---

## 公式アップデート

### Agents API (public beta)

Codex が使っているものと同じエージェントハーネスとインフラを API として公開する Agents API が public beta で提供開始された。1 回の API 呼び出しで長時間稼働するエージェントを構築できる。

[ソース](https://openai.com/index/)

### OpenAI hosted sandbox

Agents API 向けに、OpenAI が管理するサンドボックス実行環境が提供される。外部サンドボックスも選択でき、Blaxel / Cloudflare / Daytona / DigitalOcean / E2B / Modal / Oracle / Runloop / Vercel などが対応先として挙げられている。

[ソース](https://openai.com/index/)

### Agents API のマルチエージェント / tool search / programmatic tool calling

サブエージェントによる並列実行、必要なツール定義のみをロードする tool search、コード内でツール呼び出しを連鎖させる programmatic tool calling に対応する。

[ソース](https://openai.com/index/)

### Agents API の自動コンパクション

コンテキスト上限に近づくと過去の文脈を自動的に圧縮し、複数のコンテキストウィンドウをまたぐワークフローを実行できる。

[ソース](https://openai.com/index/)

### GPT-Live-1 API 提供開始

全二重 (full duplex) 音声モデル GPT-Live-1 が API で公開された。価格は $0.05/分。割り込み処理、電話応対、トーンやペースの指定、長時間の会話に対応する。

[ソース](https://openai.com/index/)

### GPT-Live-1 の推論委譲とベンチマーク

推論やツール呼び出しを GPT-6 Astra などのバックエンドモデルへ委譲する構成を取る。ベンチマークでは Full Duplex Bench で GPT-Realtime-2.1 比 +30 ポイント、Tau3 で 1 位とされている。

[ソース](https://openai.com/index/)

### GPT-Live-1 の新音声オプション

アクセント・方言・対応言語を広げた音声セットが追加された。

[ソース](https://openai.com/index/)

### ChatGPT Work の Data agent

Redshift / BigQuery / Snowflake / Databricks / ClickHouse / MongoDB / Datadog などのデータソースに接続し、対話だけで分析とインタラクティブなダッシュボード生成を行う Data agent が追加された。

[ソース](https://openai.com/index/)

### ChatGPT for Financial Services

Daloopa / PitchBook / LSEG News / Crunchbase などのプレミアム金融データを内蔵した ChatGPT Work の業種特化版。Morgan Stanley、Evercore と共同で設計されたとされる。

[ソース](https://openai.com/index/)

### GPT-6 Astra の業務向け展開と新エンタープライズ管理機能

GPT-6 Astra が ChatGPT Work / Codex / API で提供開始された。あわせて、アクセス可能なサイトやアプリの制限、アップロードの管理といった管理者向けコントロールが追加されている。

[ソース](https://openai.com/index/)

### ChatGPT Desktop のエンタープライズプラグイン

ブラウザ操作機能をベースとした Oracle Analytics、Power BI、Navan、Avalara の各プラグインが ChatGPT Desktop 向けに提供される。

[ソース](https://openai.com/index/)

### Codex CLI 0.154.0 安定版リリース

前回時点で alpha が連投されていた 0.154.0 が安定版としてリリースされた。新機能は以下。

- GPT-6 Astra がモデルピッカーおよび Amazon Bedrock のカタログで選択可能に
- 実験的な worktree サポート。`--worktree` / `/worktree` で新規・フォークセッション用の独立チェックアウトを作成し、一覧・再開できる
- Codex の作業を止めずにインラインで質問へ回答できる (候補選択または自由入力、メインのドラフトは保持される)
- Windows でバックグラウンドの Codex サーバーを複数セッションで共有。デーモンのライフサイクルコマンドと managed update に対応
- Vim 編集に `R` 置換モード (undo・ドットリピート対応) を追加。レガシーターミナルでの Escape 処理も改善
- 応答のコピーでリッチテキストアプリ向けの書式が保持され、`/copy` でステータス出力や個別のセッションフィールドをコピー可能に

バグ修正では、外部でのプラグイン更新・ロールバック後に既存セッションがツール・スキル・フックを取り込むようになった点、MCP 接続の OAuth トークン更新の協調とログインチャレンジ提示、ワークスペースの信頼確立前に workspace 由来のヘルパーを実行しない起動処理、macOS サンドボックスでのターミナル入力インジェクション遮断などが挙げられている。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.154.0)

### Codex CLI の codex mcp-server 廃止

非推奨だった `codex mcp-server` エントリポイントが 0.154.0 で削除された。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.154.0)

### Codex Python SDK 0.154.0

`pip install --upgrade openai-codex==0.154.0` (Python 3.10 以降) で導入する。前回時点の SDK 整備から、今回は以下が新規に入った。

- reasoning-effort に `max` と `ultra` を追加 ([#39662](https://github.com/openai/codex/pull/39662))
- 同期・非同期の `run()` / `turn()` で `ExternalMessage` に対応。外部コンテンツはツールレベルの権限でターンを開始・参加できるが、ユーザー権限は付与されない ([#44086](https://github.com/openai/codex/pull/44086))
- resume / fork の `include_turns`、1 ターン限りの `turn_service_tier`、`source` メタデータを追加 ([#44084](https://github.com/openai/codex/pull/44084))

移行時の注意として、`HookMetadata` がハンドラを `.root` でラップするようになった点 (`hook.command` → `hook.root.command`)、一部の未知の通知が型付きペイロードを持つようになった点、遅れてアタッチしたターンハンドルは接続時点以降のイベントしか受け取らない点が挙げられている。カスタム `codex_bin` を指定する場合、`ExternalMessage` と新しい履歴・ターン単位オプションには CLI 0.151.0 以降が必要。

[ソース](https://github.com/openai/codex/releases/tag/python-v0.154.0)

### Codex CLI 0.155.0-alpha.1 〜 alpha.2.2

9/10 に次期バージョンのアルファが 4 本連投された (alpha.1 / alpha.2 / alpha.2.1 / alpha.2.2)。いずれもリリースノートはバージョン表記のみ。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.2)

### Windows 向けネイティブ音声ビルドの Cygwin ソース公開

Windows ネイティブ音声リリース向けの CI 専用ビルドツールとして、ピン留めされた 103 個の Cygwin バイナリパッケージと対応する 83 個のソースアーカイブ、およびソースマッピング JSON が配布された。これらは Codex のユーザー向けパッケージには含まれない。

[ソース](https://github.com/openai/codex/releases/tag/voice-cygwin-108b38cf67cbb731)

## コミュニティの反応

### Agents API (public beta)

#### ポジティブ

> OpenAI の Codex エージェントを 10 以上並行運用し、反復コーディング作業の 80% を自動化。マネージャーエージェントが目標を握り、専門エージェントが研究・フロントエンド・テストを分担するワークフローで、人間は最終レビューだけに集中できるようになった — @de1lymoon [出典](https://x.com/de1lymoon/status/2097306578554626137)

> エージェントスコープのメモリが Codex / Claude と比べてゲームチェンジャー。コンテキストが既に豊富にある状態でレスポンスが速く役立つ — @marcklingen [出典](https://x.com/marcklingen/status/2097482319397327056)

#### ネガティブ

> Codex で Astra Medium 使用中に「現在のマイルストーン完了後に一時停止」と指示したところ、エージェントが 10 秒ごとに数百のメッセージを連投し、週次使用量の 20〜30% を無駄に消費するバグに遭遇した — @Dev__Haz [出典](https://x.com/Dev__Haz/status/2098160606037627175)

#### Tips

> OpenAI エンジニアの 1 時間講義から、Codex エージェントを自走させる 5 つのチェックポイント (深掘りプロンプト、`/goal` による長時間実行、スキル構築、自己改善ループ) を抽出 — @0x_Hyro [出典](https://x.com/0x_Hyro/status/2096732149105795430)

> Codex で 10 時間超の長時間ゴールを実行し、95% の精度で人間並みのドキュメント生成に成功。終了基準を事前に明文化し、画面レンダリング結果を確認させる 1 行プロンプトが鍵 — @itsvlady [出典](https://x.com/itsvlady/status/2097333508226023706)

日本語記事では、public beta の公式発表内容を短時間で解説する記事が出ている。

- [OpenAI「Agents API」とは？public beta の公式発表を3分で速報解説](https://qiita.com/kinamocchi_tech/items/6d3a7390d59389c2475b) (@kinamocchi_tech)

### Agents API の自動コンパクション

#### ポジティブ

> Codex の優れた Compaction のおかげで、`/goal` を設定するだけで長時間ほぼ破綻なく自律的に動いてくれる — @jomatsu_ [出典](https://x.com/jomatsu_/status/2097267815824965823)

#### ネガティブ

> Codex の compaction (実験版有効時) に問題あり。タスク進行中に突然 compaction されて、何をしていたか忘れてしまう — @kr0der [出典](https://x.com/kr0der/status/2097828127833788789)

> Codex の新 compaction 後、単に停止して続行しないバグに困っている — @xMysteryLC [出典](https://x.com/xMysteryLC/status/2097768797104918640)

#### Tips

> Codex の config.toml で `model_context_window` と `model_auto_compact_token_limit` を書き換えて再起動すれば、コンテキストを大幅に拡大し、自動コンパクションの閾値を調整できる — @shupeiman [出典](https://x.com/shupeiman/status/2097289576423325965)

### GPT-Live-1 API 提供開始

#### ポジティブ

> GPT-Live-1 を AITuberKit に導入して実際に使ってみたところ、レスポンスが非常に速くテンポも良く、自然な会話体験が得られた — @tegnike [出典](https://x.com/tegnike/status/2098132070778204431)

> GPT-Live-1 をミーティングに使ってみたら、チームの議論を聞きながら自然に要約し、Kanban ボードにタスクを追加してくれた。AI と実際にミーティングした初めての体験でかなり楽しい — @zicojzc [出典](https://x.com/zicojzc/status/2098142236571832684)

ネガティブ・Tips に該当する投稿は確認できなかった。

### ChatGPT for Financial Services

#### ポジティブ

> ライブデータ連携により、古い CSV に依存する運用から脱却できる点が実務で大きい — @IvesNikiema [出典](https://x.com/IvesNikiema/status/2098147840212045954)

> OpenAI の新ツールで金融リサーチからモデル・資料作成まで一体化できそうで期待大。個人向けの展開も希望 — @momoblog0214 [出典](https://x.com/momoblog0214/status/2098134452732100981)

#### ネガティブ

> AI が junior banker の作業を肩代わりすると、モデル構築や判断力を育てる機会が失われるのではないか — @janstevens [出典](https://x.com/janstevens/status/2098154879894118594)

Tips に該当する投稿は確認できなかった。日本語記事では公式発表の速報解説が出ている。

- [ChatGPT for Financial Services とは？OpenAI 公式発表を3分で速報解説](https://qiita.com/kinamocchi_tech/items/cb5b6ed7f6a42cd7cefa) (@kinamocchi_tech)

### GPT-6 Astra の業務向け展開と新エンタープライズ管理機能

X 上では該当なし。管理者コントロール (サイト・アプリの制限、アップロード管理) に関する個人ユーザーの実体験投稿は確認できなかった。

一方、Astra 自体の検証記事は日本語コミュニティで多数出ている。

- [GPT-6 Astra は何を待ち、いつ指示を取り込むのか — async tool calling と mid-turn steering を実測](https://zenn.dev/peoplex_blog/articles/65768c769de4b0) (@joe_re)
- [GPT-6 Astra の Prompt Cache を実測 — 呼び出し元リージョンを変えても cache hit を確認](https://zenn.dev/nttdata_tech/articles/adf354987dcacd) (NTT DATA TECH / Yutaka Kashiwabara)
- [【godot-llm-gamebench】gpt-6-astra は Effort によってどのように性能が変わるのか](https://zenn.dev/oubakiou/articles/faa33490272980) (@oubakiou) — シリーズ最高スコアと最悪のコスト効率を同じモデルが記録した、との結論
- [GPT-6 Astra に雑なプロンプトを渡すな：Agent Harness 設計完全解説](https://zenn.dev/git_dungeon/articles/gpt6-astra-agent-harness-design) (黒パグ｜攻略本シリーズ)
- [GPT-6 Astra を使いっぱなしにしないために、Codex 自身にモデルを切り替えさせた](https://zenn.dev/toybox19/articles/13c0ca2afaa8e0) (@kai) — 作業に応じてモデルと effort を自律的に切り替えるローカル中継ツール「baton」の実装
- [ループ型 Transformer は推論を隠すのか — GPT-6 Astra を運用者目線で読む](https://zenn.dev/sora_endo/articles/aether-looped-transformer-gpt6-astra) (SoraEndo/遠藤空)
- [GPT-6 Astra x Unity でゲームを作る](https://zenn.dev/tkada/articles/d0c31e6533fb62) (Takeshi Kada)

### その他のトピック

以下のトピックについては、直近 1 週間の X 投稿を機能ごとに個別検索したが、個人ユーザーによる実体験・感想の投稿は確認できなかった。

- **OpenAI hosted sandbox** — 該当なし。公式・企業アカウント (E2B、Cloudflare 等) の発表・宣伝投稿が大半だった
- **Agents API のマルチエージェント / tool search / programmatic tool calling** — 該当なし
- **GPT-Live-1 の推論委譲とベンチマーク** — 該当なし
- **GPT-Live-1 の新音声オプション** — 該当なし。フルデュプレックス・レイテンシ・料金といった概要説明の投稿にとどまった
- **ChatGPT Work の Data agent** — 該当なし
- **ChatGPT Desktop のエンタープライズプラグイン** — 該当なし
- **Codex CLI 0.154.0 安定版リリース** — 該当なし。リリース直後で、モデルピッカー・Bedrock・worktree・インライン質問・Windows 共有の各新機能に触れた個人の使用報告はまだ出ていない
- **Codex CLI の `codex mcp-server` 廃止** — 該当なし
- **Codex Python SDK 0.154.0** — 該当なし。公式・リリース通知系の告知のみ
- **Codex CLI 0.155.0-alpha.1 〜 alpha.2.2** — 該当なし
- **Windows 向けネイティブ音声ビルドの Cygwin ソース公開** — 該当なし

## ソース

- [OpenAI](https://openai.com/index/)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Codex CLI 0.154.0](https://github.com/openai/codex/releases/tag/rust-v0.154.0)
- [Codex Python SDK 0.154.0](https://github.com/openai/codex/releases/tag/python-v0.154.0)
- [Codex CLI 0.155.0-alpha.2.2](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.2)
- [Cygwin build inputs and matching source for Windows voice](https://github.com/openai/codex/releases/tag/voice-cygwin-108b38cf67cbb731)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
