---
title: "エージェントスキル集がトレンドを席巻"
summary: "GitHub Trendingの上位は「エージェントに作法を教える」リポジトリで埋まった。Matt Pocockの実務スキル集、286スキルのECC、Anthropic公式skillsが並び、Nous Researchは自己改善エージェントHermesを公開。Claude Flowはruvnet/rufloへ改称した。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-09-07

features:
  - "mattpocock/skills"
  - "affaan-m/ECC"
  - "NousResearch/hermes-agent"
  - "anomalyco/opencode"
  - "ruvnet/ruflo"
  - "blader/humanizer"
  - "anthropics/skills"
codex_review: "スキル集ブームは派手さより配布・監査・権限設計の成熟が本題に見える。実使用報告が薄い大型ハーネス群は、今はやや期待先行だと思う。"
codex_importance: 3
---

## 公式アップデート

### mattpocock/skills

Matt Pocock が日常業務で使っているエージェントスキル集。「vibe coding ではなく実際のエンジニアリングのため」と位置づけ、GSD / BMAD / Spec-Kit のようにプロセス全体を掌握する手法とは逆に、小さく・改変しやすく・組み合わせ可能なスキルを提供する方針を取る。

- **導入は2経路で思想が異なる**。Claude Code プラグイン (`claude plugins install mattpocock-skills`、公式マーケットプレイス収載) は読み取り専用の管理されたバンドルとして全体を入れ、作者の更新を自動で受け取る「購読型」。[skills.sh](https://skills.sh/mattpocock/skills) 経由 (`npx skills@latest add mattpocock/skills`) は編集可能なファイルとしてプロジェクトにコピーする「フォーク型」。**両方入れると全スキルが二重になる**ため、どちらか一方を選ぶ
- 導入後、リポジトリごとに1回 `/setup-matt-pocock-skills` を実行し、イシュートラッカー (GitHub / Linear / ローカルファイル)、トリアージ時のラベル、ドキュメントの保存先を決める。skills.sh 経由でインストールする場合、このスキルを選択対象に含める必要がある
- **スキルは「誰が呼べるか」で二分される**。User-invoked はユーザーがタイプした時のみ到達可能でオーケストレーションを担当し、Model-invoked はユーザーもエージェントも呼べて再利用可能な規律を保持する。User-invoked から Model-invoked は呼べるが、User-invoked 同士は呼べない
- **Engineering (User-invoked)**: `ask-matt` (どのスキルが合うかのルーター)、`grill-with-docs`、`triage`、`improve-codebase-architecture`、`setup-matt-pocock-skills`、`to-spec`、`to-tickets`、`implement`、`wayfinder`
- **Engineering (Model-invoked)**: `prototype`、`diagnosing-bugs`、`research`、`tdd`、`domain-modeling`、`codebase-design`、`code-review`、`resolving-merge-conflicts`、`wizard`
- **Productivity**: `grill-me`、`handoff`、`teach`、`to-questionnaire`、`wait-what` (User-invoked) / `grilling`、`writing-for-agents` (Model-invoked)
- **設計思想は4つの失敗モードへの対処**として説明されている。(1) 認識のズレ → `grill-me` / `grill-with-docs` による「grilling session」、(2) エージェントが冗長 → `CONTEXT.md` による共有言語の構築、(3) コードが動かない → `tdd` の red-green-refactor と `diagnosing-bugs`、(4) 泥団子化 → `improve-codebase-architecture` による深いモジュールの候補提示。ただし後者は「調査であって救済ではない」と明記され、既存の泥を解きほぐしはしないとされる
- ネイティブ Codex プラグインはロードマップ上 (`.agents/adr/0002-ship-as-a-claude-code-plugin.md`)

[ソース](https://github.com/mattpocock/skills)

### affaan-m/ECC

エージェントハーネスの性能最適化システム。スキル・instincts・記憶・セキュリティ・リサーチ優先の開発を1パッケージにまとめ、`plan → test → implement → review → verify → remember → improve` のループをプロンプトごとに組み直すのではなく一度インストールして常設化する、という位置づけ。MIT。

- **同梱物**: 68エージェント (計画・レビュー・ビルド修復・セキュリティ・アーキテクチャ・ドメイン業務)、286スキル、94のレガシーコマンドシム、フック、ルール、記憶、継続学習、AgentShield セキュリティスキャン (プロンプト・フック・MCP設定・権限・シークレット・エージェントファイルを対象)
- **ECC 2.2 で Claude Code / Codex / Kimi Code 向けのガイド付きパッケージセットアップを追加**。`npx ecc-universal setup` (Claude Code のセットアップ・更新・スコープ変更・フックプロファイル変更)、`npx ecc-universal install --guided` (3ハーネスを1フローで設定)。Node.js 18+、Claude プラグイン設定には Git と Claude Code 2.1+ が `PATH` 上に必要
- ネイティブ経路は `/plugin marketplace add https://github.com/affaan-m/ECC` → `/plugin install ecc@ecc`
- **インストール方法を重ねてはいけない**と繰り返し警告。「Claude Code プラグイン + Codex ネイティブプラグイン」「Claude Code プラグイン + レガシー Codex sync」は可、「Claude Code プラグイン + Claude 手動インストール」「Codex sync + Codex マーケットプレイスプラグイン」は不可。同一ハーネスへの二重インストールはスキル・コマンド・フック・設定を重複させる (複数ハーネスへの1回ずつは問題なし)
- Claude Code のプラグインは `rules` を配布できないため、ルールパックは `git clone` して `~/.claude/rules/ecc/` へ手動コピーする必要がある
- インストール後は `/ecc:configure-ecc` が名前空間付きの再設定スキルになるが、初回インストール時に Claude Code 組み込みの `/plugin` を代替することはできない
- **プラットフォーム対応は非対等**。Claude Code が最も動作し、Codex は sync 経路をサポート、Cursor / OpenCode / Gemini / Zed / GitHub Copilot / Antigravity / Qwen 等には機能制限付きアダプタ。機能同等を前提にせずサポート状況マトリクスを確認するよう明記
- **配布元の注意喚起**: 正規チャネルは GitHub リポジトリ、npm の `ecc-universal` / `ecc-agentshield`、GitHub App、プラグインスラッグ `ecc@ecc`、ecc.tools のみ。サードパーティの再アップロードや非公式ミラーはマルウェアを含む可能性があるとしている
- OSS は MIT で恒久無料、ECC Pro はプライベートリポジトリ向けのホスト型 GitHub App ($19/シート/月〜)。README のスターヒストリーは最初の4万スターを 2026年1月18日〜2月7日と記載

[ソース](https://github.com/affaan-m/ECC)

### NousResearch/hermes-agent

Nous Research による自己改善型 AI エージェント。「学習ループを内蔵した唯一のエージェント」を掲げ、経験からスキルを作り、使用中にそれを改善し、知識の永続化を自分で促し、過去の会話を検索し、セッションを跨いでユーザー像を深めていく。MIT。

- **閉じた学習ループ**: エージェント自身がキュレーションする記憶と定期的なナッジ、複雑タスク後の自律的スキル生成、使用中のスキル自己改善、LLM 要約付き FTS5 セッション検索によるセッション横断の想起、[Honcho](https://github.com/plastic-labs/honcho) による dialectic なユーザーモデリング。[agentskills.io](https://agentskills.io) のオープン標準に準拠
- **どこにでも住む**: Telegram / Discord / Slack / WhatsApp / Signal / Email / CLI を単一のゲートウェイプロセスから扱い、ボイスメモの文字起こしとプラットフォーム跨ぎの会話継続に対応
- **7つのターミナルバックエンド**: local / Docker / SSH / Singularity / Modal / Daytona / Vercel Sandbox。Daytona と Modal はサーバーレス永続化に対応し、アイドル時は環境が休止してほぼ課金されず、要求時に復帰する。月5ドルの VPS でも GPU クラスタでも動く
- **ネイティブ Windows 対応**。PowerShell の `iex (irm https://hermes-agent.nousresearch.com/install.ps1)` で CLI・ゲートウェイ・TUI・ツールが WSL なしに動作。インストーラは uv / Python 3.11 / Node.js / ripgrep / ffmpeg に加え、**ポータブルな Git Bash (MinGit、約45MB) を `%LOCALAPPDATA%\hermes\git` へ展開**する。管理者権限不要でシステムの Git とは完全に分離され、既存の Git があればそちらを検出して使う
- **アンチウイルスの誤検知に関する記載**: `%LOCALAPPDATA%\hermes\bin\uv.exe` が Bitdefender や Windows Defender に隔離される場合があるが、これは Astral の `uv` に対する誤検知。`gh attestation verify` でハッシュを照合する検証手順と、ファイルハッシュではなく**フォルダ**をホワイトリスト登録する (更新のたびハッシュが変わるため) 指示を掲載
- スケジュール自動化 (プラットフォーム配信付きの cron)、独立したサブエージェントの spawn、RPC でツールを呼ぶ Python スクリプトによる多段パイプラインのゼロコンテキスト化、学習用のバッチ軌跡生成と軌跡圧縮
- モデルは Nous Portal / OpenRouter / OpenAI / 自前エンドポイント等から `hermes model` で切り替え。**Nous Portal** を使えば 300以上のモデルと Tool Gateway (Firecrawl のWeb検索、FAL の画像生成、OpenAI の TTS、Browser Use のクラウドブラウザ) が1つのサブスクにまとまる。`hermes setup --portal` で OAuth ログインまで完結
- **OpenClaw からの移行**: `hermes setup` が `~/.openclaw` を自動検出して移行を提案する。`hermes claw migrate` に `--dry-run` / `--preset user-data` (シークレットなし) / `--overwrite` があり、SOUL.md、MEMORY.md / USER.md、ユーザー作成スキル、コマンド許可リスト、メッセージング設定、許可リスト内の API キー、TTS アセット、AGENTS.md を取り込む
- コントリビュータ向けに、**venv をクローンしたソースツリーの外に作る**よう注意書き。エージェントが自分のチェックアウトに対して相対パスのコマンドを実行すると、稼働中のランタイムをセッション中に破壊しうるため

[ソース](https://github.com/NousResearch/hermes-agent)

### anomalyco/opencode

オープンソースの AI コーディングエージェント。今回のトレンド入りでは**デスクトップアプリ (BETA) の公開**が新しい要素。

- デスクトップ版は [リリースページ](https://github.com/anomalyco/opencode/releases) または opencode.ai/download から入手。macOS (Apple Silicon / Intel の `.dmg`)、Windows (`.exe`)、Linux (`.deb` / `.rpm` / `.AppImage`)。パッケージマネージャ経由なら `brew install --cask opencode-desktop`、`scoop bucket add extras; scoop install extras/opencode-desktop`
- CLI は `curl -fsSL https://opencode.ai/install | bash` のほか npm / scoop / choco / brew / pacman / AUR / mise / nix に対応。**0.1.x より古いバージョンは事前に削除するよう注記**
- インストール先の優先順位は `$OPENCODE_INSTALL_DIR` → `$XDG_BIN_DIR` → `$HOME/bin` → `$HOME/.opencode/bin`
- **組み込みエージェントは2つで `Tab` キーで切り替える**。`build` は全権限を持つ開発用のデフォルト、`plan` は読み取り専用で、既定でファイル編集を拒否し bash 実行前に許可を求める。未知のコードベースの探索や変更計画向け。加えて複雑な検索や多段タスク用の `general` サブエージェントがあり、メッセージ中に `@general` で呼び出せる
- 「opencode」を名前に含む派生プロジェクト (opencode-dashboard 等) には、OpenCode チーム製ではない旨を README に明記するよう依頼

[ソース](https://github.com/anomalyco/opencode)

### ruvnet/ruflo

**Claude Flow から Ruflo へ改称**。Claude Code と Codex 向けのエージェント「メタハーネス」で、「Agent = Model + Harness。モデルが書き、ハーネスがツール・記憶・ループ・サンドボックス・制御を与える」という整理のもと、実行層側を担うと位置づける。MIT。

- **2つのインストール経路で提供範囲が大きく異なる**と明示 (#1744)。**Claude Code プラグイン**はスラッシュコマンドと若干のスキル・エージェント定義のみで、ワークスペースにファイルを一切作らず、フックも入らない。MCP サーバーは `ruflo-core` を入れた場合のみ登録され、そのツール名は `mcp__plugin_ruflo-core_ruflo__*` (例: `mcp__plugin_ruflo-core_ruflo__memory_store`) になり、CLI 側の素の `memory_store` / `swarm_init` / `agent_spawn` とは別名になる。**CLI インストール** (`npx ruflo init`) は98エージェント・60以上のコマンド・30スキル・MCPサーバー・フック・デーモンの全ループを入れ、`.claude/`、`.claude-flow/`、`CLAUDE.md` 等を生成する。ドキュメント通りに動かしたいなら CLI 側
- Windows では `curl ... | bash` が POSIX シェル (Git-Bash / WSL / MSYS) を要求するため、PowerShell や cmd では `npx ruflo@latest init wizard` を使うよう案内
- MCP 登録は `claude mcp add claude-flow -- npx ruflo@latest mcp start`
- **プラグインは35本**。Core & Orchestration (core / swarm / autopilot / loop-workers / workflows / federation)、Memory & Knowledge (agentdb / rag-memory / rvf / ruvector / knowledge-graph)、Intelligence & Learning、Code Quality & Testing、Security & Compliance (security-audit / aidefence)、Architecture & Methodology (adr / ddd / sparc / metaharness / arena)、DevOps & Observability、Extensibility、Domain-Specific (iot-cognitum / neural-trader / market-data)
- **ベンチマークの但し書きが具体的**。HNSW インデックス付き AgentDB は総当たりに対して N=20k で約1.9倍、N=5k で約3.2〜4.7倍 (recall@10 は約0.99) と実測値を示しつつ、**ANN が勝つのは交差点より上で、N が小さい領域では同等か負ける**と明記している
- **Web UI ベータ** (flo.ruv.io、セルフホスト可能): 約210ツール (5サーバーグループ + ブラウザ内で完結しオフライン動作する18ツールのギャラリー)、任意の MCP エンドポイント (HTTP / SSE / stdio) を追加可能、1回のモデル応答で4〜6以上のツールを並列実行しカード表示。モデルは OpenRouter 経由の6種 (既定 Qwen 3.6 Max、Claude Sonnet 4.6 / Haiku 4.5、Gemini 2.5 Pro / Flash、OpenAI) に加え、任意の OpenAI 互換エンドポイント (vLLM / Ollama / LM Studio / Together / Groq / 自前) を追加できる。ソースは `ruflo/src/ruvocal/` にあり、`INCLUDE_DB=true` で MongoDB を同梱するマルチステージ Dockerfile と Cloud Run 用 `cloudbuild.yaml` を同梱
- **Goal Planner UI** (goal.ruv.io): 平文の目標を GOAP (Goal-Oriented Action Planning) の A* 探索で前提条件・アクション・状態空間の経路に分解し、`/agents` のライブダッシュボードで役割・現在ステップ・記憶名前空間・トークン予算・状態を確認、暴走ワーカーの停止や再割当ができる。状態変化時は動的に再計画
- **MetaHarness**: 出荷前にエージェント構成を監査し、準備度を1〜100で採点、ツール設定のセキュリティ問題をスキャン、プロジェクト全体をスナップショットして経時的な退行を検出する。`ruflo eject` で ruflo プロジェクトを独自名の単体エージェントツールキットに切り出せる

[ソース](https://github.com/ruvnet/ruflo)

### blader/humanizer

AI が書いたと分かる痕跡を取り除き、内容を変えずに人が書いたように読ませるエージェントスキル。素の Markdown なのでスキルに対応した任意のエージェントで動く。

- **判定基準は Wikipedia の [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)** (WikiProject AI Cleanup がメンテナンス) から取った35パターン
- **2パス構成**。まず元の構造を固定とみなさずに書き直し、次にその草稿を35パターンと元の主張に照らして点検し、残った箇所だけを再度書き直す。ペーストされたテキストに対しては最初の書き直しと「まだ人工的に聞こえる箇所」の批評を提示してから最終版を出す
- **事実は捏造しない**。名前・数値・日付・引用・出典は出典か書き手から来たものでなければならず、欠けていれば作らずに尋ねる。個人的な文章では書き手のスタイルを保ち、技術文書・リファレンスは中立で平易に保つ。文章サンプルを渡せば既定のスタイル規則より**サンプルのリズム・語彙・句読法・意図的な癖**を優先する
- ファイルを指定した場合は散文だけを書き換え、**コード・データ・frontmatter・リンク先には手を触れない**
- パターンの分類は内容 (誇張された重要性、権威の名前列挙、浅い -ing 分析、営業文句、曖昧な出典、定型の「課題と展望」)、言語・文法 (AI頻出語、is/are 回避、"not X but Y"、強引な三つ組、偽の "from X to Y" レンジ、受動態)、スタイル (em ダッシュ、過剰な太字、太字ミニ見出し付きリスト、見出しのタイトルケース、絵文字、カーリークォート、見出しの直下でその見出しを言い直す、作られた punchline、決め台詞めいた格言、「正直に言うと？」型の書き出し、誰も出していない反論への回答)、チャットボット由来 (「お役に立てば幸いです」、知識制限の免責、過剰な同調)、埋め草とヘッジ (`in order to`、`could potentially possibly`、「未来は明るい」型の締め) に分かれる

[ソース](https://github.com/blader/humanizer)

### anthropics/skills

Anthropic による Agent Skills の公開リポジトリ。スキルは Claude が動的に読み込む指示・スクリプト・リソースのフォルダで、社内のブランドガイドラインに沿った文書作成や組織固有のワークフローでのデータ分析といった作業を反復可能な形で教える。なお **Agent Skills 標準そのものについては [agentskills.io](https://agentskills.io) を参照**するよう案内しており、本リポジトリは Anthropic による実装という位置づけ。

- 構成は `./skills` (Creative & Design、Development & Technical、Enterprise & Communication、Document Skills のサンプル)、`./spec` (Agent Skills 仕様)、`./template` (スキルテンプレート)
- **ライセンスが2種類混在する**。多くは Apache 2.0 だが、[Claude の文書機能](https://www.anthropic.com/news/create-files)を実際に支えている `skills/docx`、`skills/pdf`、`skills/pptx`、`skills/xlsx` は **source-available であって open source ではない**。本番の AI アプリケーションで実際に使われている複雑なスキルの参照実装として共有している、と説明される
- Claude Code では `/plugin marketplace add anthropics/skills` でマーケットプレイスとして登録し、`document-skills` または `example-skills` を選択。直接なら `/plugin install document-skills@anthropic-agent-skills` / `/plugin install example-skills@anthropic-agent-skills`。インストール後は言及するだけで使える (例:「PDF スキルで `path/to/some-file.pdf` のフォームフィールドを抽出して」)
- claude.ai では有料プランで既に利用可能。API 経由でも組み込みスキルの利用とカスタムスキルのアップロードができる
- スキルの作成に必要な frontmatter は `name` と `description` の2フィールドのみ
- **免責事項**: これらのスキルはデモンストレーションと教育目的で提供され、Claude から返る実装や挙動はスキルの記述と異なる場合がある。重要な用途に頼る前に自分の環境で十分にテストするよう明記
- パートナースキルとして Notion の [Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0) を紹介

[ソース](https://github.com/anthropics/skills)

## コミュニティの反応

上位7件のうち X 上で実使用報告まで確認できたのは mattpocock/skills、blader/humanizer、anthropics/skills の3件。hermes-agent、opencode、ruflo についてはトレンド通知 bot や宣伝色の強いアカウントの投稿が大半で、実際に使った人の声はほぼ拾えなかった。今回はスキル配布経路そのもの (skills.sh の監査状況、公式スキルのライセンス) への警戒が反応の目立つ軸になっている。

### mattpocock/skills

#### ポジティブ

> Matt Pocock の実務ワークフローをそのままスキル化したリポジトリが注目を集め、Claude Code / Codex 向けの「本物のエンジニアリングプラクティス」として共有されている。 — @santtiagom_ [出典](https://x.com/santtiagom_/status/2095936959197614553)

> `/grill-me` を起点にした agentic planning のプロセスが「完璧」と評価され、複数モデル・スキルとの組み合わせが話題に。 — @mark_a_phelps [出典](https://x.com/mark_a_phelps/status/2096319560974479428)

#### 実際の使用例

> `/grill-me` を Claude Code で多用し思考の生産性が大きく上がったが、Claude Pro の使用上限を12%消費するほどのヘビーユースになった。 — @deepakgupta392 [出典](https://x.com/deepakgupta392/status/2095985219505680589)

> Codex で `/grill-me` を試したところ Claude Code ほど指示に従わず、依然として Claude 派。 — @dracan [出典](https://x.com/dracan/status/2096655197468569980)

> Codex 上で `/grill-me` を動かすと「soothing」に感じられ、Anthropic のモデルとの違いを実感した。 — @mrbavio [出典](https://x.com/mrbavio/status/2095980078979035305)

> `/grill-with-docs` を数日使った結果、自分の技術理解の浅さが露呈し「人間の介入はまだ必要」と実感した。 — @waktunyabremya [出典](https://x.com/waktunyabremya/status/2095549399623664060)

#### ネガティブ

> skills.sh 経由のスキルはインストール数が多い割に GitHub スターが極端に少なく、監査の WARN や外部登録必須のものが目立つため、安全性を疑って避けるようになった。 — @pekimaru11 [出典](https://x.com/pekimaru11/status/2094622021812474243)

### affaan-m/ECC

#### ポジティブ

> Claude Code や Codex 向けの agent harness として GitHub Trending で急上昇中。skills・memory・security を一体化した実用的なフレームワークとして注目されている。 — @PovilasKorop [出典](https://x.com/PovilasKorop/status/2094740305014583583)

> skills + memory + security を harness 化し、Claude Code / Codex 向けに実用的なワークフローを提供する点が急伸の理由だと整理。 — @agenticgirl [出典](https://x.com/agenticgirl/status/2096048167745675710)

#### 実際の使用例

該当なし。

#### ネガティブ

該当なし。

### blader/humanizer

#### ポジティブ

> Wikipedia「Signs of AI writing」の35パターンを基に AI 特有の痕跡を除去する agent skill として GitHub Trending で急上昇していると紹介。 — @github_trendjp [出典](https://x.com/github_trendjp/status/2096726162580058309)

#### 実際の使用例

> AI 生成テンプレート → 初稿 → Humanizer で AI 臭を抜く → 人手修正、というワークフローを実際に試した報告。文案作成には役立つが、最終的には自分で書いた方が良いと結論づけている。 — @Lonely__MH [出典](https://x.com/Lonely__MH/status/2096382368630382726)

#### Tips

> Humanizer を Claude Code や Cursor に組み込んで AI ライターの後処理に使う構成を提案。事実・数字を一切変えず、個人の文体サンプルを反映できる点を評価している。 — @Ryrenz [出典](https://x.com/Ryrenz/status/2096193878915228050)

### anthropics/skills

#### ポジティブ

> Anthropic が「agents ではなく skills」を推す理由を解説。スキルはフォルダ化され、必要な時だけロードされ、繰り返し使える専門知識として保存される点が新しいと評価。 — @oliviscusAI [出典](https://x.com/oliviscusAI/status/2094474980482556332)

> 各スキルはメタデータのみなら100トークン程度で、必要になった時にフルの指示をロードする仕組みだと紹介。 — @rohanpaul_ai [出典](https://x.com/rohanpaul_ai/status/2095158273293099018)

#### 実際の使用例

> 公式 pptx スキルを入れて試したところ「確かにすごい」と実感。docx / pdf / pptx / xlsx など Office 系スキル19本の内訳も確認した。 — @kurikazu56 [出典](https://x.com/kurikazu56/status/2095656038297108694)

> Skills はプロンプトではなく inspect も extend もできるフォルダ単位の capability だと位置づけ、document tooling や skill-creator テンプレートまで含む実用例を詳述。 — @FReza1984 [出典](https://x.com/FReza1984/status/2096123028774252831)

#### ネガティブ

> pptx スキルは技術的には他ツールでも動くが、LICENSE.txt の「Anthropic のサービス外に保持しない」条項に抵触する可能性がある。業務で一番欲しい docx / pdf / pptx / xlsx の4本が制限対象なので法務確認を推奨し、Apache-2.0 の14本の活用を提案。 — @kurikazu56 [出典](https://x.com/kurikazu56/status/2095656038297108694)

### NousResearch/hermes-agent

該当なし (直近1週間の言及は公式アカウント・開発者投稿、GitHub トレンド bot、アフィリエイト寄りの内容が中心で、実際の使用体験や批評はほぼ確認できなかった)。

### anomalyco/opencode

該当なし (2026-08-30〜09-06 の投稿は GitHub trending bot などの自動投稿が大半で、実使用報告・評価は確認できなかった)。

### ruvnet/ruflo

該当なし (投稿の多くはトレンド共有アカウントによるスター数・機能列挙で、ユーザー体験談・実使用報告・批評はいずれも確認されなかった。日本語投稿も GitHub トレンド通知のみ)。

## ソース

- [GitHub Trending 全言語 / Python / TypeScript (RSS)](https://mshibanami.github.io/GitHubTrendingRSS)
- [mattpocock/skills](https://github.com/mattpocock/skills)
- [affaan-m/ECC](https://github.com/affaan-m/ECC)
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- [anomalyco/opencode](https://github.com/anomalyco/opencode)
- [ruvnet/ruflo](https://github.com/ruvnet/ruflo)
- [blader/humanizer](https://github.com/blader/humanizer)
- [anthropics/skills](https://github.com/anthropics/skills)
