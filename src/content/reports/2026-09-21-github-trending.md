---
title: "エージェントSkill公開ラッシュと極小オンデバイスモデル"
summary: "CloudflareとAnthropicが相次いでエージェント用SkillとプラグインをOSS公開し、addyosmani/agent-skillsと併せてSkill形式が上位を占めた。一方でcactus-compute/needleは8〜29MB・2bitの端末内基盤モデルを提示し、vercel-labs/json-renderはコンポーネント制約型のGenerative UIで実装報告が相次いでいる。"
importance: 4
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-09-21

features:
  - "cloudflare/security-audit-skill"
  - "trycua/cua"
  - "addyosmani/agent-skills"
  - "anthropics/knowledge-work-plugins"
  - "cactus-compute/needle"
  - "docling-project/docling"
  - "NVIDIA/TensorRT-LLM"
  - "vercel-labs/json-render"
  - "virattt/ai-hedge-fund"
  - "anthropics/claude-code"
codex_review: "Skill公開は手順の再利用を広げる一方、配布形式の乱立やコンテキスト肥大化が次の悩みになりそうだ。地味だが、発見役と検証役を分ける監査設計は、エージェントを実務に入れるうえで大事な一歩だと思う。 ※ このレビューは後日生成されました"
codex_importance: 3
---

## 公式アップデート

### cloudflare/security-audit-skill

コーディングエージェントをセキュリティ監査官に変える Skill。Cloudflare の脆弱性探索ハーネスの原型にあたるもので、同社ブログ「Build your own vulnerability harness」で紹介された仕組みの単一リポジトリ版。MIT。

- **6フェーズ構成**: ①偵察 (アーキテクチャ・信頼境界・入力面を `architecture.md` と `coverage-ledger.json` に記録) → ②カバレッジ主導のハンティング (台帳の単位ごとに隔離されたハンターを割り当て、カバレッジ批評役がギャップを探す) → ③候補検証 (各候補を新しい検証役に渡し、**反証を試みさせる**) → ④構造化出力 (`confirmed` / `needs_validation` / `rejected` を `findings.json` へ書き、`report-schema.json` で検証) → ⑤独立したレコード検証 → ⑥ターゲット中立なレポート生成 (`REPORT.md` / `FINDINGS-DETAIL.md` / `NEEDS-VALIDATION.md`)
- **判定は3種で厳密に分離**。`confirmed` は完全なソーストレースと限定された観測結果を持つもの、`needs_validation` は未解決の事実が明示され深刻度を付けないもの、`rejected` は反証済みの候補
- 攻撃クラスは対象別に分冊化されており、メモリ安全性・バイナリ、AI/LLM (プロンプトインジェクション、エージェント/ツール、出力処理)、HTTP プロトコル・認証、クライアントサイド、サプライチェーン・リリース、クラウド・デプロイ、RPC・メッシング、リソース枯渇、データ分離・ライフサイクル、デスクトップ/モバイル/ローカル IPC の各ファイルを持つ
- **設計原則**: 確立された境界の破れのみを confirmed とする / **検証するエージェントは発見したエージェントとは常に別** / 深刻度は「可能性 × 影響」でチェックリストからの逸脱ではない / 多層防御の欠落は脆弱性ではなくハードニング注記 / 複数回実行で網羅性が上がる (自社テストでは**1回の実行は反復実行で見つかる脆弱性の約半分**しか発見できなかった)
- 導入は `npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit` (`--global` でユーザーレベル)。「security audit this codebase」等のリクエストで自動起動し、直接の監査依頼はフルモード、質問や限定的な作業はガイダンスモード
- 要件は並列サブエージェント対応のモデル、Node.js (依存ゼロの検証スクリプト用)、そして**OS が強制するサンドボックス** (外部ネットワーク無効、許可リスト化された環境変数、リソース制限、割り当てられた作業パスのみ書き込み可)。これが無い場合、ワークフローは対象コードを実行せず `needs_validation` のまま残す
- 同一リポジトリへの複数回実行は加算的で、過去の台帳と findings を使ってギャップを狙い、変更されたソースを再検証する

[ソース](https://github.com/cloudflare/security-audit-skill)

### anthropics/knowledge-work-plugins

Anthropic が Claude Cowork 向け (Claude Code とも互換) に**職種別プラグイン11種を OSS 公開**した。Cowork が「ゴールを設定すれば完成した成果物が返る」ものであるのに対し、プラグインは「どう仕事を進めてほしいか、どのツール・データを使うか」を指定するレイヤーと位置づけられる。

- 公開プラグイン: `productivity` (タスク・カレンダー・個人コンテキスト)、`sales` (見込み客調査、商談準備、パイプラインレビュー、バトルカード)、`customer-support` (チケットトリアージ、返信案、エスカレーション、KB 記事化)、`product-management` (仕様書、ロードマップ、ユーザーリサーチ統合)、`marketing`、`legal` (契約レビュー、NDA トリアージ、コンプライアンス、リスク評価)、`finance` (仕訳準備、勘定照合、財務諸表、差異分析、決算・監査対応)、`data` (SQL、統計分析、ダッシュボード)、`enterprise-search`、`bio-research` (PubMed / bioRxiv / ClinicalTrials.gov / ChEMBL / Open Targets / Benchling 等に接続)、`cowork-plugin-management` (プラグイン自体の作成・カスタマイズ)
- **構成は全プラグイン共通**で `.claude-plugin/plugin.json` (マニフェスト)、`.mcp.json` (ツール接続)、`commands/` (明示的に呼ぶスラッシュコマンド)、`skills/` (Claude が自動的に参照するドメイン知識)。**すべて Markdown と JSON のファイルベースで、コードもインフラもビルド手順も無い**
- Claude Code では `claude plugin marketplace add anthropics/knowledge-work-plugins` → `claude plugin install sales@knowledge-work-plugins`。導入後は自動で有効になり、`/sales:call-prep`、`/data:write-query` のようなコマンドが使える
- 公開されているものは汎用の出発点という位置づけで、`.mcp.json` のコネクタ差し替え、スキルファイルへの自社用語・組織構造の追記、ワークフローの書き換えによるカスタマイズを前提としている

[ソース](https://github.com/anthropics/knowledge-work-plugins)

### addyosmani/agent-skills

AI コーディングエージェント向けの本番品質スキル集 (25種)。開発ライフサイクルに対応した**9個のスラッシュコマンド**が入口となる。

- コマンドと原則: `/spec` (コードの前に仕様)、`/plan` (小さく原子的なタスク)、`/build` (一度に1スライス)、`/test` (テストが証明)、`/constraints` (一度決めたら全体で強制)、`/review` (コードの健全性を改善)、`/webperf` (最適化の前に計測)、`/code-simplify` (賢さより明快さ)、`/ship` (速いほうが安全)
- **`/build auto`** は仕様が存在する時点でプランを生成し、承認1回で全タスクを自律実行する。ただし「タスク**間**の人間の介在を無くすもので検証を無くすものではない」と明記され、各タスクは引き続きテスト駆動で個別にコミットされ、失敗や危険な手順では停止する
- スキルは作業内容に応じて自動起動する (API 設計なら `api-and-interface-design`、UI 構築なら `frontend-ui-engineering`)
- 導入は `npx skills add addyosmani/agent-skills` (70以上のエージェントに対応)、`--list` で事前閲覧、`--skill <名前>` で個別導入。Claude Code は `/plugin marketplace add addyosmani/agent-skills`、他に Cursor / Antigravity CLI / Gemini CLI / Windsurf / OpenCode / GitHub Copilot / Kiro / Codex / Command Code 向けの手順を用意
- **既知の移植性の問題**: 個別スキルを `npx` で入れるとリポジトリ直下の `references/` がコピーされないため、共有チェックリストへのパスが解決できない (スキル自体は動作する)。issue #361 で追跡中
- 各スキルは手順・検証ゲート・「合理化を防ぐ表 (anti-rationalization tables)」を持つ構造化ワークフロー。`interview-me` (一問一答で約95%の確信度に達するまで要件を引き出す)、`idea-refine`、`spec-driven-development`、`constraint-driven-development`、`code-review-and-quality`、`test-driven-development` などが含まれる

[ソース](https://github.com/addyosmani/agent-skills)

### cactus-compute/needle

モバイル・ウェアラブル・ロボット・スマートホーム・車載・マイコン向けの基盤モデル「Needle 3」。**モデル全体が 8〜29MB の単一バイナリ**で、汎用チャット能力を犠牲にする代わりに、モバイルのツール呼び出しで10倍規模のモデルを上回り、抽出で2〜3倍規模に並ぶとする。

- **3つの用途**: ツール呼び出し (アプリが公開する関数から適切なものを選び引数を埋める。2つ頼めば順序通りに2回、該当するツールが無ければ推測ではなく空リストを返す)、構造化抽出 (型を宣言して雑なテキストを渡すと型付きフィールドが返る。デコード文法が**パース可能であることを保証**し、分類にも一般化する)、テキスト埋め込み (同一モデルがベクトルを返し、端末内で検索・照合・ルーティングができる)
- **アーキテクチャは Laddered Simple Attention Network**。FFN の代わりに Monarch Hadamard MLP、因果 conv タップ付き GQA アテンション、gather で読む engram n-gram メモリ、マルチレーンの hyper-connections。**2層から20層までのあらゆる深さが配備可能なモデルになるよう訓練**されている。パラメータの大半が engram にあるため、121M モデルが 50M 相当の演算量で動く
- 出力はスキーマからコンパイルしたバイトレベル文法で全トークンを制約し、応答には学習済みヘッドによる**較正済みの confidence** が付く。各ターンは `function_calls` / `reasoning` / `confidence` を含む単一 JSON を返す
- 導入は `pip install cactus-needle`。関数に `@needle.tool` を付けるだけでシグネチャが引数型、docstring がツール説明になり、`run()` が実行までのループを閉じる。`generation=2` で既存デプロイ向けに Needle 2 を継続利用できる
- **カスタマイズ前提の設計**。容量がラダー状になっており、1製品のツールで微調整した2層のサブネットワークでも、フルモデルが必要とするより遥かに小さいデバイスで動く。DroidCall での微調整は全サブネットワークを18〜36ポイント引き上げ、**4層以上・29Mパラメータから DeepSeek V4 Flash を上回る**。ローカル微調整は4bitで訓練・エクスポート (`needle finetune` → `needle build --lora`)、出荷モデルの2bit事後学習・量子化は Cactus Platform 上
- デプロイは各ターゲットに**1MB未満のプリビルドエンジン**が付き、`needle build --platform <folder> [--layers N]` がエンジンを取得して重みを並べる。macOS / Linux / ブラウザ / WASI / C API / エアギャップ環境に対応
- **既定でバイナリのテレメトリが有効**。無効化は `NEEDLE_TELEMETRY=0` と `DO_NOT_TRACK=1` を設定する
- 重みと各プラットフォームエンジンは Hugging Face (`Cactus-Compute/needle3`)。ファイル形式 `.cact` は 2.125 bits/weight の Cactus Quants で、エンジンがマップしてその場で読む

[ソース](https://github.com/cactus-compute/needle)

### vercel-labs/json-render

事前定義したコンポーネントとアクションに制約した Generative UI フレームワーク。プロンプトから動的・パーソナライズされた UI を生成しつつ、出力の予測可能性を保つことを狙う。Apache-2.0。

- **3つの主張**: ガードレール付き (AI はカタログにあるコンポーネントしか使えない)、予測可能 (JSON 出力が常にスキーマに一致)、高速 (モデルの応答に合わせて段階的にストリーム・描画)
- **対応ターゲットが広い**。React (`@json-render/react`)、shadcn/ui 既製コンポーネント (`@json-render/shadcn`)、React Native、動画 (Remotion)、PDF (react-pdf)、HTML メール (react-email)、Vue、Svelte、SolidJS、ターミナル UI (Ink)、Next.js フルアプリ (ルート・レイアウト・SSR・メタデータ)、3Dシーン (react-three-fiber、GaussianSplat コンポーネント経由のガウシアンスプラッティング)

[ソース](https://github.com/vercel-labs/json-render)

### trycua/cua

「Computer-Use 2.0」向けの OSS 一式。エージェントにコンピュータを与えるという方針で、デスクトップ自動化・隔離クラウドデスクトップ・ローカル macOS VM・特化型意思決定モデル・評価ベンチマークを揃える。MIT。

- **Cua Fleets**: `run.cua.ai` で隔離されたクラウドデスクトップを払い出す。Fleet がサンドボックス容量を保持し、コードがプールからデスクトップを確保して Sandbox SDK でコマンド実行・スクリーンショット取得・アプリ操作を行う。**プールは確保終了後も有料の容量を保持しうる**ため、チュートリアルのクリーンアップ手順に従うよう注記がある
- **Cua Driver**: macOS / Windows / Linux のネイティブアプリとブラウザを検査・操作するツール群。CLI・MCP・型付き SDK から接続でき、アプリとプラットフォームが対応していれば**ポインタを動かさずフォーカスも奪わないバックグラウンド配送**が可能。インストールは `curl -fsSL https://cua.ai/driver/install.sh` (Windows は `irm https://cua.ai/driver/install.ps1 | iex`)
- **CUA-S1**: コンピュータ操作向けの小型特化「System 1」モデル群。「System 1」はフィールドにどの値が入るか、要素をそのままにするか、といった高速で範囲の限られた判断を指すエンジニアリング上の比喩であり、モデルアーキテクチャの厳密な分類でも汎用エージェントの計画・推論の代替でもないと明記。最初の研究プロファイルはフォームに焦点を当て、トークンごとの生成ではなく構造化された UI 要素と文書値からの判断をスコアリングする。**GitHub 側はソースのみの早期研究リリース**で、重みは Hugging Face に別途ホスト
- **Lume**: Apple の Virtualization.Framework を使い、Apple Silicon 上でローカルの macOS / Linux VM を作成・管理
- **Cua Bench**: コンピュータ操作タスクの作成、エージェント評価、訓練用トラジェクトリのエクスポート。VM も Docker もモデル API キーも不要なシミュレーションタスクから始められる

[ソース](https://github.com/trycua/cua)

### docling-project/docling

生成 AI 向けの文書変換ライブラリ (LF AI & Data 傘下、IBM Research Zurich 発、MIT)。今回のトレンド入りでは対応フォーマットの拡張が新しい要素。

- **新たに対応**: 動画ファイル (MP4 / AVI / MOV / MKV / WebM) を ASR 書き起こし + 代表キーフレームで解析、ODF (`.odt` / `.ods` / `.odp`)、XBRL (財務報告)、メール (`.eml` / `.msg`)、EPUB、Apple Pages (Pages 5+ と iWork '09 の両コンテナ世代)、プレーンテキストと Markdown スーパーセット (`.qmd` / `.Rmd`)、グラフ理解 (棒・円・折れ線を表やコードへ変換し詳細な説明を付与)
- 近日対応予定として、タイトル・著者・参考文献・言語のメタデータ抽出と、複雑な化学構造 (分子構造) の理解を挙げる
- 既存機能として、PDF のレイアウト・読み順・表構造・コード・数式・画像分類の解析、統一表現 `DoclingDocument`、Markdown / HTML / WebVTT / DocLang / DocTags / 可逆 JSON へのエクスポート、機微データ・エアギャップ環境向けのローカル実行、LangChain / LlamaIndex / Crew AI / Haystack 連携、MCP サーバー、API サーバー (docling-serve)
- **Python 3.9 のサポートは docling 2.70.0 で終了**。3.10 以降が必要

[ソース](https://github.com/docling-project/docling)

### NVIDIA/TensorRT-LLM

LLM および映像生成モデルの推論最適化フレームワーク。直近の技術ブログ更新がトレンド入りの契機。

- 最新記事「Accelerating Video Generation with GEMM Quantization, Attention Quantization and Skip Softmax Attention in TensorRT-LLM」(09/02) が公開され、映像生成推論における GEMM 量子化・Attention 量子化・Skip Softmax Attention を扱う
- 直近ではほかに「Evaluating Agentic Serving with Trace Replay and Job-Level Metrics」(08/20)、「DeepSeek-V4 on NVIDIA Blackwell: Model-Specific and Agentic-Workload Optimizations」(07/17)、「Scaling Video Generation Across NVL72 Rack」(07/01)、「Joint Optimization of Agent Applications and TensorRT-LLM」(05/15) が並ぶ
- 現行リリースは 1.3.0rc28、CUDA 13.2.1 / PyTorch 2.12.0 / Python 3.10・3.12 対応、Apache-2.0

[ソース](https://github.com/NVIDIA/TensorRT-LLM)

### virattt/ai-hedge-fund

AI による投資判断を探る教育目的のプロジェクト。**常時稼働型の AI ヘッジファンドへ再設計する方針**が示され、CLI が刷新された。

- 「ファンド」を第一級のエンティティとして扱い、バックテスト・ペーパートレード・(オプトインでの) ライブ実行を可能にする方向へ再構築中。従来の投資家エージェントはプラグイン可能でバックテスト可能な「アルファモデル」として再構想される (`VISION.md` / `ROADMAP.md`)
- **配布が `pipx install aihf` (または `uv tool install` / `pip install`) に変更**され、どこからでも `aihf` で起動できる。引数なしで対話型ターミナルアプリが立ち上がり、銘柄・戦略・リバランス頻度を選んでファンドを構築、あるいは保存済みファンドをバックテストしてベンチマークに対するエクイティカーブを描画する
- 構築したファンドは `~/.hedge-fund/mandates/` に**マンデートファイル**として保存される。マンデートは戦略・人員・リスク・資本・頻度を定義する「デスク」であり**銘柄は一切含まず**、実行時に `--tickers` で対象を指定する。`--backtest` でリバランス頻度に沿った履歴検証
- API キーは初回に必要になった時点で尋ねられ `~/.hedge-fund/.env` に保存される (事前設定不要)。価格・ファンダメンタル・決算は Financial Datasets、投資家エージェント用のモデルは Anthropic / OpenAI / DeepSeek / Google / xAI / Kimi / TypeSafe (Jev) から1つ。シェルでエクスポートしたキーが保存ファイルより優先される
- **実際の取引は一切行わない**教育・研究目的のプロジェクトであることが繰り返し明記されている

[ソース](https://github.com/virattt/ai-hedge-fund)

### anthropics/claude-code

ターミナル上で動くエージェント型コーディングツール。インストール経路の推奨が変更された。

- **npm 経由のインストールが非推奨化**され、README に注記が入った。推奨は macOS / Linux が `curl -fsSL https://claude.ai/install.sh | bash`、Homebrew は `brew install --cask claude-code`、Windows は `irm https://claude.ai/install.ps1 | iex`、WinGet は `winget install Anthropic.ClaudeCode`。`npm install -g @anthropic-ai/claude-code` は「Deprecated」として残る
- リポジトリには Claude Code のプラグイン (カスタムコマンドとエージェント) が同梱されており、`plugins/` ディレクトリにドキュメントがある

[ソース](https://github.com/anthropics/claude-code)

## コミュニティの反応

### cloudflare/security-audit-skill

#### ポジティブ

> 核心は「発見したエージェントが自分で検証しない」という役割分離のルール。LLM が自分の仮説に固執する弱点をシステム的に防ぐ設計が、AIエージェントの信頼性向上として評価されている — @vigram_void [出典](https://x.com/vigram_void/status/2101661152224661557)

> 同様の観点から、Skill の設計思想を紹介する投稿 — @AICodingJourney [出典](https://x.com/AICodingJourney/status/2100623515397329323)

#### Tips

> `npx skills add` でインストール後、6段階 (探索 → カバレッジ狩り → 別Agentによる検証 → findings.json 出力) で監査を実行できる。Node.js + サンドボックス前提で動く、という導入手順の共有 — @sora19ai [出典](https://x.com/sora19ai/status/2101797126280007925)

#### ネガティブ

> 1回の実行で発見できる脆弱性は全体の半分程度。モデルや実行ごとに結果が変わるため複数回の実行が必要で、単一 Agent に頼らず「誰も自分の宿題を採点しない」仕組みが重要という指摘 — @vigram_void [出典](https://x.com/vigram_void/status/2101661152224661557)

### addyosmani/agent-skills

#### ポジティブ

> AI コーディングエージェントに必要なのはプロンプトではなく再利用可能なエンジニアリングワークフローであり、それを Define→Plan→Build→Test→Review→Ship の25スキル + 9コマンドとして具体化した点が支持されている — @tonysimons_ [出典](https://x.com/tonysimons_/status/2100730315173990543)

> 同じ観点で、ライフサイクル全体をカバーする構成を評価する投稿 — @FReza1984 [出典](https://x.com/FReza1984/status/2101624671687090272)

#### Tips

> Claude Code や Codex に24個の開発 Skill をそのまま渡せる仕組みとして「これが欲しかった」と共有 — @sora19ai [出典](https://x.com/sora19ai/status/2099321189563072654)

> 導入方法とコマンド構成の紹介 — @sumika45379 [出典](https://x.com/sumika45379/status/2099989142319108345)

#### ネガティブ

> `references/` の扱い、コンテキストの肥大化 (context bloat)、アンインストール報告など実運用上の課題を挙げ、「判断の区切り」をどう共有するかが問題だと指摘 — @connect24h [出典](https://x.com/connect24h/status/2101658055218020767)

> 同様に運用面の懸念を挙げる投稿 — @ZenithYeAI [出典](https://x.com/ZenithYeAI/status/2101551213808349253)

### anthropics/knowledge-work-plugins

#### ポジティブ

> Anthropic が Claude をあらゆるオフィス職種のスペシャリストに変える11のプラグインを OSS 公開した、という紹介。Claude Cowork 向けだが Claude Code でも動く点、インストール方法とカスタマイズのしやすさを具体的に説明した投稿が広くシェアされた — @undefinedKi [出典](https://x.com/undefinedKi/status/2100988961669738999)

実使用報告・批評に該当する投稿は確認できなかった。

### vercel-labs/json-render

#### ポジティブ

> json-render と Jev の組み合わせで「ミリ秒単位の即時 Generative UI」が実現可能になった実験が Vercel Labs の Chris Tate 氏により公開され、元投稿だけで7,500超のいいねを集めた — @valuebasedprice [出典](https://x.com/valuebasedprice/status/2101745589545521199)

#### Tips

> json-render と Jev で実際に UI を組み立てたブログを公開。React + Vercel AI SDK と組み合わせ、LLM がコンポーネントを選択・レンダリングする流れを実践している — @azukiazusa9 [出典](https://x.com/azukiazusa9/status/2101611415660621884)

> 無限 FAQ のプロトタイプを json-render + JEV で構築。LLM が回答文を書き、JEV がコンポーネントを選んでダッシュボードをミリ秒で描画する実例 — @valuebasedprice [出典](https://x.com/valuebasedprice/status/2101745589545521199)

> Vercel の json-render を Flutter に移植し、サーバー側で LLM をオーケストレーションしてネイティブ Flutter ウィジェットを即時表示する GenUI 実装を GitHub で公開 — @BetaPundit [出典](https://x.com/BetaPundit/status/2101717948281053694)

> AI アプリ開発スタックとして「Generative UI: json-render」「判断: Jev」を提案し、TanStack Start + Vercel AI SDK との構成例を議論 — @cu30rry_ [出典](https://x.com/cu30rry_/status/2101652206722142589)

懸念・限界の指摘や代替比較に該当する投稿は確認できなかった。

### trycua/cua

該当なし。公式発表の拡散・技術解説・GitHub Trending 共有が中心で、個人による実使用レポート (動作確認、ベンチ結果、限界の体感など) は確認できなかった。

### cactus-compute/needle

該当なし。公式発表、GitHub Trending まとめ、AI ニュース系アカウントの共有が大半で、実際に端末で使ってみた感想・評価を述べた投稿は確認できなかった。

### docling-project/docling

該当なし。リポジトリ紹介・新機能の宣伝・スター数への言及が中心で、動画 ASR + キーフレーム、ODF / XBRL / EPUB / メール解析といった新機能の使用体験に関する投稿はゼロだった。

### NVIDIA/TensorRT-LLM

該当なし。GEMM・Attention 量子化や Skip Softmax Attention に関する実ユーザーの使用報告・批評は見つからず、該当する投稿はいずれも低エンゲージメントの宣伝・一般論・学習リソース紹介に留まった。

### virattt/ai-hedge-fund

該当なし。`aihf` CLI への刷新、マンデートファイル単位のバックテスト、常時稼働型ファンド設計に関する投稿は確認できなかった。一般的な「AI Hedge Fund」への言及は数件あるが、いずれも実使用報告・評価には該当しない。

### anthropics/claude-code

該当なし。npm 配布の非推奨化とインストール経路変更に関する使用報告・評価・批評は見つからなかった (主なヒットは Plugin4Shell 脆弱性、AGENTS.md 対応、Windows サポートの問題など別トピック)。

## ソース

- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)
- [Cloudflare Blog: Build your own vulnerability harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness)
- [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- [cactus-compute/needle](https://github.com/cactus-compute/needle)
- [Needle 3 リリースページ](https://cactuscompute.com/needle)
- [vercel-labs/json-render](https://github.com/vercel-labs/json-render)
- [trycua/cua](https://github.com/trycua/cua)
- [docling-project/docling](https://github.com/docling-project/docling)
- [NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)
- [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)
- [anthropics/claude-code](https://github.com/anthropics/claude-code)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
