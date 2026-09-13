---
title: "ハーネス直結型プロジェクトが上位を占める"
summary: "GitHub Trendingは、独自フレームワークを捨ててClaude Code/Codexの上にSKILLSで載る設計が目立った。MathModelAgentはHarness層を放棄しSKILLS駆動へ蒸留、awesome-llm-appsはAgent Skills群を新設。DeskcommCRMはWhatsApp営業をAIエージェントに任せるセルフホストCRM、gods-eye-viewは音声エージェントで操作するライブ3D地球儀。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-09-14

features:
  - "jihe520/MathModelAgent"
  - "Shubhamsaboo/awesome-llm-apps"
  - "melgarafael/DeskcommCRM"
  - "bilawalsidhu/gods-eye-view"
codex_review: "SKILLS化の波は面白いが、実需の強さはDeskcommCRMが一段上に見える。MathModelAgentは話題性先行で、完成度の但し書きがかなり重い印象です。"
codex_importance: 3
---

## 公式アップデート

### jihe520/MathModelAgent

数学モデリングコンペ (国賽・華数杯・華為杯・MCM/ICM 等) の作業を自動化し、提出可能な論文まで生成するエージェント。「3日間の競技時間を1時間に」を掲げる。2年前にマルチエージェント実装として公開されたものを、**プロジェクト全体を SKILLS 層へ蒸留し Harness 層を作らない方針へ転換**したのが今回の変更点。

- **デスクトップ版を公開** (Releases 配布、推奨経路)。Claude Code と MathModelAgent SKILLS 一式を内蔵し、Python / Node.js / Redis のインストールも SKILL の手動配置も不要。モデルの API キーを1つ入れるだけで動く。macOS は arm64 / x64 の `.dmg` で Developer ID 署名 + Apple 公証済み、Windows は `.exe` で**現時点で未署名** (SmartScreen 警告が出るため「詳細情報」→「実行」で回避、公式 Releases からのみ入手するよう注記)。自動更新は macOS のみ対応、Windows はコード署名証明書の整備待ち
- **SKILL としての導入**は `npx skills add jihe520/MathModelAgent --all`。実行は Claude Code で `/1start-mathmodel`、Codex で `$start-mathmodel`。ほかに環境診断の `/doctor`、Typst 知識を渡す `/typst-author`
- **同梱要素**: 17種の Typst 論文テンプレート (中英の主要大会に対応し、大会種別を自動判別)、建模知識ベース (モデル選択の決定木 — AHP / TOPSIS / ARIMA / GA 等、頻出の誤りパターン、MCM/ICM 採点基準)、9ステップの自動検収 (テキスト漏れ検出 → 数値整合性チェック → Typst コンパイル → PDF の目視確認)
- 各段階が独立した Skill として切り出されており、「分析だけ」「論文執筆だけ」の単独呼び出しが可能
- **科研図表・フローチャートのテンプレートは別リポジトリ [jihe520/sci-box](https://github.com/jihe520/sci-box) へ分離** (`scibox-figure`: SHAP / ROC / Taylor / 雲雨図 / 和弦図 等の Matplotlib 複製テンプレート、`scibox-diagram`: 編集可能な draw.io テンプレート)。`npx skills add jihe520/sci-box` で単独導入できる
- 従来の Docker / ローカル / コミュニティ製スクリプトによる Web UI 版の手順も残存 (Supabase 不要、Redis 必須)。オプション機能の Web Search (Tavily)、RAG 知識ベース (ChromaDB + Rerank)、HIL 人機協業 (confirm / edit / regenerate / ask / skip / abort の6アクション)、Fallback Hand Off、Evaluator + Feedback はいずれも既定オフで、外部依存が未設定なら自動でスキップされる
- **後期計画のチェックリストに未実装の注記が明示されている**。HIL はデータモデルのみでワークフロー統合が不完全、Feedback は Agent 基底クラスに TODO コメントがあるのみ、RAG は設定項目のみで検索ロジック未実装、A2A hand off は設定・ロジックとも未実装で基本的なリトライのみ、Tavily は未実装で OpenAlex による代替、と個別に記載
- ライセンスは**個人利用のみ無料、商用利用は作者への連絡が必要**。README 自身が「実験的な探索・反復 demo 段階」「AI 生成は参考用途であり、現在の水準で国賽入賞は不可能」と明記

[ソース](https://github.com/jihe520/MathModelAgent)

### Shubhamsaboo/awesome-llm-apps

100以上の AI エージェント / RAG アプリのテンプレート集。Apache-2.0、すべて手作りかつエンドツーエンドでテスト済みとする。今回のトレンド入りでは**「Agent Skills」カテゴリの新設**が新しい要素で、コーディングエージェントに能力を追加する形式のテンプレートが前面に出た。

- 導入は `npx skills add <リポジトリ内のスキルURL>`。Claude Code / Codex / Cursor などのコーディングエージェントに対応し、**各スキルは実コードを同梱してセキュリティ + eval の CI ゲートを通過する**ことを条件にしている
- **公開中の Agent Skills**:
  - `project-graveyard` — 放置した個人プロジェクトを洗い出し、それぞれが頓挫した理由を示し、再開する価値のあるものを完成へ導く
  - `first-reader` — 実在の読者が原稿を読む過程をシミュレートし、どこで興味を失い、どこで読むのをやめ、読後に何を覚えているかを報告する。**本文は一切書き換えない**
  - `scope-creep-detector` — diff が当初の意図を超えて膨らんでいないか検査し、残す / 分割する / 正当化する の判断を提案
  - `commit-archaeologist` — 導入コミット、その後の編集、同時変更ファイル、意図の手がかりから、あるファイルやコード領域がなぜ存在するのかを再構成
  - `dependency-doctor` — 依存マニフェストを検査し、標準ライブラリの pin、不要になった backport、バージョン未固定、制約の重複、yank 済みリリースを指摘
  - `advisor-orchestrator-worker` — Claude Fable 5.1 をアドバイザー、GPT-6 Astra をオーケストレータ、Gemini 3.8 Flash をワーカーに据えたメタループ
  - `self-improving-agent-skills` — Gemini と ADK でエージェントスキルを自動最適化
- Agent Skills 以外は従来通り Starter (API キーのみで動く単一ファイル) と Advanced (ツール・記憶・多段推論を持つ実運用型) に分かれ、`ai_home_renovation_agent` (Nano Banana Pro による写実的リノベーション画像)、`devpulse_ai` (技術シグナルを集約・採点する日次ダイジェスト)、`ai_vc_due_diligence_agent_team` (Gemini 3 によるスタートアップ投資分析)、`always_on_hn_briefing_agent` などが並ぶ
- Claude / Gemini / GPT / DeepSeek / Llama / Qwen ほかオープンモデルで動作、テンプレートは毎週追加

[ソース](https://github.com/Shubhamsaboo/awesome-llm-apps)

### melgarafael/DeskcommCRM

WhatsApp で商談する事業者向けのセルフホスト CRM。Kommo / Octadesk / Intercom のオープンな代替を標榜し、AI エージェントが接客・見込み客の選別・ファネル移動まで行う「営業のオペレーティングシステム」として位置づける。MIT、ブラジル発 (UI・ドキュメントはポルトガル語が主、英語・スペイン語の README あり)。

- **HostGator との提携で VPS へ1コマンド導入**。`bash hostgator-setup-kit/install.sh` がアプリ + WhatsApp + DB を一括構築する。Node も pnpm も入れずアプリイメージは構築済み、Docker が無ければインストーラが導入を提案。**冪等**で、再実行しても cron を二重登録せずユーザーも再作成せず中断地点から再開する
- インストーラは秘密情報を自前生成し、Postgres 拡張作成と `supabase/baseline.sql` の適用、最初の admin 作成、**HTTPS 自動化を含むスタック起動**、自動化用 cron とアップデートエージェントの設置までを行う。回答は入力時点で検証し、誤ったキーはその場で拒否する
- **他社 VPS で独自リバースプロキシが 80/443 を占有している場合を自動検出**してその背後に公開する。Hostinger のように `--network host` のプロキシを使う構成では「推測せず質問する」設計 (誤ったプロキシ配下に公開すると"インストール成功"のまま無言のサイトができるため)
- **アップデートは画面から実行できる**。新バージョンがあるとサイドバー下部に表示され (サーバー所有者にのみ)、設定 → 更新で変更点の提示・**DB の自動バックアップ**・各フェーズ (バックアップ → コード → DB → 稼働) の進捗表示まで完結。実体は `install.sh` が仕込んだエージェントが5分間隔の cron で確認するため、クリックから最大5分で開始する。**新バージョンが壊れていれば自動で前のイメージへ戻し、その差し戻しを `.env` に記録する** (記録しないと次回再起動で壊れたアプリが無言で戻るため)。エージェントが停止していれば画面が「自動更新は利用不可」と表示し、成功したふりをしない
- ターミナル経路は `update.sh`。更新先は `main` の先端ではなく**最新の公開バージョンタグ**で、インストール済みより古いバージョンへの降格は既定で拒否する (`--force` で強制)。`baseline.sql` は冪等かつ自己修復型で、旧バージョンが壊したデータを修正する。他に `backup.sh` / `restore.sh` / `reset-password.sh` / `reset-mfa.sh` / `healthcheck.sh`
- **AI 機能**: テナント別 RAG (pgvector)、接客中にエージェントが自ら実行する skills、組織の記憶、感情分析、監査付きの AI→人間ハンドオフ、AI を一級の担当者として扱う割当、組織単位の支出上限、CRM 全体を **MCP** 経由で公開。解決した会話が新しい知識になり、「AI の進化」画面で改善度・誤りの箇所・不足している教育内容を表示、「提案」は AI が自分向けに出す改善案で**必ず人間のゲートを通して**新バージョンとして適用する
- **WhatsApp は2経路**。QR コード接続 (WAHA、複数番号、throttle + jitter + 時間帯ウィンドウのバン対策) と Meta 公式 Cloud API (承認済みテンプレート同期)
- **キューは `event_log` テーブル + cron ワーカーで、DB トリガーが直接 HTTP を呼ばない**設計。`install.sh` / `update.sh` がこの cron を自動設定し、これが無いと自動化ルールは作成できても実行されない
- スタックは Next.js 16 App Router (Turbopack) + React 19 + TypeScript 6 strict、Supabase (Postgres + RLS + `vector`)、Vercel AI SDK v7 (OpenRouter / Anthropic / OpenAI / Google をインストール時に選択、後から画面で**システムの部位ごとに**変更可)、Upstash Redis、Sentry
- **CI の必須チェックは5本** (`verify` / `build-and-size` / `invariants` / `e2e` / `imagens-ok`)。`invariants` は空の Postgres に `baseline.sql` を install モードと update モードで2回、いずれも `ON_ERROR_STOP=1` で適用し (これが冪等性の証明になる)、RBAC・割当・スコープ・ルーティング・follow-up・webhook・自動化の不変条件を検査する。**RLS 分離テスト**は2組織を作って本番と同じ `auth.uid()` / `fn_user_org_ids()` 経路で JWT クレームを模し、組織 A のユーザーが組織 B の行を**0件**しか見られないことを証明する (テーブルが空でも通ってしまわないよう、B の行が実在することを先に対照ケースで確認する)。`e2e` は Playwright の49 specs 中48本で、残る `vps-fresh-onboarding` は実物の WAHA / Redis / Resend / Nuvemshop を要するため**「e2e 緑 = 新規インストール経路の証明」にはならない**と明記
- **リポジトリ内に導入ガイドが SKILL として同梱** (`.agents/skills/deskcomm-instalar/`)。Claude Code / Codex / Cursor / OpenCode / Antigravity をそのフォルダで開くと自動で読み込まれ、「VPS に CRM をインストールしたい」と言うだけで進行する

[ソース](https://github.com/melgarafael/DeskcommCRM)

### bilawalsidhu/gods-eye-view

ブラウザ上で動く「スパイ衛星シミュレータ」。写実的な3D地球儀に、実在の公開データ (航空機のトランスポンダ、船舶のビーコン、軌道要素、地震計、公開カメラ) を重ねる。YouTube の同名シリーズ (再生500万超) 発の企画で、**2026年8月に GitHub Trending の日次・週次で1位**、Product Hunt では Product of the Day 8位。ローカル実行で、ソースコードは検査・拡張可能。

- **API キー無しで起動できる**。Esri 衛星画像 + キー不要の地形で開始し、Esri に到達できなければ OSM へ自動フォールバック。フライト・軍用機・衛星・地震・公開カメラ・ラジオ・打ち上げはキー無しで利用可能
- 導入は2経路。**Pinokio 8.2 以降**でワンクリック (Windows / macOS / Linux。8.2 がランチャーのインストール不具合を修正)、またはターミナルから `git clone` → `npm ci` → `npm run doctor` → `npm run dev` で `http://localhost:4173`。**Node.js は 24.14.0 以降または 26.x** が必要で、EOL の Node 25 はセットアップドクターが警告する
- **キーはファイルではなくアプリ内で追加する**。右下の POWER UP チップから Provider Settings を開き、貼り付けて保存するとアプリが再起動して機能が有効になる。保存先は Pinokio なら `pinokio/ENVIRONMENT`、ターミナル clone ならリポジトリ直下の `.env` で、いずれも**秘密情報を書き込む前に所有者のみのパーミッションへ変更される**。シェルや macOS Keychain 由来の値は「外部で設定済み」として読み取り専用扱い
- **Pinokio 8.0.40 のネイティブ Configure パネルに認証情報を入力しないよう警告**。同リリースはこのネストしたアプリファイルを正しく保存せず、送信値をログに残す。8.2 の告知はインストールの修正であって、この Configure の問題の解決を示すものではないと明記
- **13レイヤー / マップソースのうち11がキー不要**。ライブフライト (OpenSky + adsb.lol、11,000機以上)、軍用機 (adsb.lol)、船舶 (AISStream、要無料キー)、衛星 (CelesTrak、838オブジェクト、DENSE チップで Starlink シェル全体)、地震 (USGS)、交通 (OSM 道路上のシミュレーション。TomTom キーで実測の流速が反映されるが、**個々の車両位置はライブ観測ではない**と明記)、CCTV メッシュ (Austin / California / London の公開カメラ約800台を3D空間へ投影。位置は公開情報だが**姿勢は推定の事前値で、カメラ上のギズモをドラッグして自分で較正する**)、ラジオ (最大750局のアナログチューナー)、バイクシェア (GBFS)、活火災 (NASA FIRMS)、宇宙ミッション (Launch Library 2、直近30日)、地図されている軍事施設 (OSM、**本質的に不完全であるとラベル表示**)。静的データとしてデータセンター4,351・ダム704・海底ケーブル712を同梱
- **音声操作は OpenAI キーが必要**で、無くてもアプリ全体は動作しマイクボタンが利用不可と表示するだけ。**28ツール**を4分類 (カメラ操作 / 注釈 / ライブレイヤーへの分析クエリ / コンソール操作) で提供。エージェントは回答前にライブのシーン文脈 (座標・通り名・有効レイヤー・表示スケール) を取得し、街路レベルではビューポートのスクリーンショットを読んで看板や建物名を識別する (**ラベルを捏造しないよう指示されている**)。成功した操作のみを報告し、`OPENAI_API_KEY` はブラウザに渡さず短命のセッショントークンのみをクライアントへ配る
- **実際に費用がかかるのは音声のみ**で、アプリ側が計測する。リアルタイム音声は毎分数セント、マイク横にセッション支出のライブ表示、STD / MINI のモデル切替、$2 で警告、**$5 でハードキャップに達しセッションを終了**する
- 写実的3D都市には Cesium ion の無料トークン (個人・非商用の対象利用、クォータあり) か Google Maps キー (従量課金、アプリ内の場所検索も有効化) を追加する
- **実装は「フレームワーク無し」**。Vanilla JavaScript + CesiumJS + Vite に、Google Photorealistic 3D Tiles と OpenAI Realtime API。ライブデータの扱いとして、機体・船舶のアイコンは毎フレームのスクリーン空間コース投影で**あらゆるカメラ角度で実世界の進行方向を向く**、15〜30秒間隔で届くフィードに対して**1区間遅れでレンダリングして既知の位置の間を補間**し隙間を推測航法で埋める、衛星は SGP4 伝播と GMST 再整列で軌道リングを固定する、エンティティ高度は実際のジオイド対応の垂直基準を通して**描画された地形メッシュに対してサンプリング**する、など
- **秘密鍵に触れる API (OpenAI / AISStream / OpenSky OAuth / カメラフレーム) はすべて SSRF 対策・レスポンス上限・サニタイズ済みエラーを備えたサーバー側プロキシ経由**。ブラウザが見るのは Google Maps と Cesium ion のキーのみで、いずれもプロバイダ側で制限をかけるよう `SECURITY.md` が案内する。サーバーは両経路とも localhost にバインドする
- データの性格を随所で明示する姿勢が一貫しており、打ち上げ再現は `RECONSTRUCTED ESTIMATE` ラベル付き (0.25×〜4× でスクラブ可能)、CCTV の姿勢とロケット軌道は粗い推定値、交通は実道路上のシミュレーションと記載。起動性能も「M5/Chrome での時点計測で中央値1.86秒のコールドスタート、比較用のベースラインであって保証ではない」と注記

[ソース](https://github.com/bilawalsidhu/gods-eye-view)

## コミュニティの反応

本日の X/Twitter 検索では、4件すべてについて**実使用報告・評価に該当する投稿は確認できなかった**。

### jihe520/MathModelAgent

該当なし。GitHub Trending の通知系自動投稿 (@github_trendjp、@GitHubGPT 等) のみがヒットし、日本語・英語とも使用報告や批評は見つからなかった。いいね・リポストも0〜1件程度。

### Shubhamsaboo/awesome-llm-apps

該当なし。Trending アカウントの投稿やリスト形式の紹介、`npx skills add` 関連で他リポジトリに言及したものが大半で、当該リポジトリのユーザー体験に絞ると該当が極めて少なかった。反応の多い実ユーザー投稿は0件。

### melgarafael/DeskcommCRM

該当なし。GitHub トレンド紹介とプロジェクト概要の共有投稿は複数あったが、実際に導入・運用した人の感想・評価は確認できなかった。

### bilawalsidhu/gods-eye-view

該当なし。宣伝・Trending 通知・作者本人の投稿が大半で、直近1週間に実際に使ってみた感想・評価・批評は見つからなかった。なお8月の1位獲得時の反応 (Brendan Eich の言及等) は README 側の記載であり、本日時点の新規投稿ではない。

## ソース

- [GitHub Trending 全言語 (RSS)](https://mshibanami.github.io/GitHubTrendingRSS)
- [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent)
- [jihe520/sci-box](https://github.com/jihe520/sci-box)
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM)
- [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)
