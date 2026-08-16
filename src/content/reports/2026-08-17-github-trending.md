---
title: "図表スキルと14MB端末モデルが急伸"
summary: "Claude Code向けエディトリアル図表スキル diagram-design が1日で数千スターを積み上げ、14MBバイナリのツール呼び出しモデル Needle 2 とデスクトップ化した Unsloth が続く。Cursor公式プラグイン集も公開され、エージェント周辺ツールの層がさらに厚くなった。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-08-17

features:
  - "cathrynlavery/diagram-design"
  - "cactus-compute/needle"
  - "unslothai/unsloth"
  - "cursor/plugins"
  - "cordiverse/cordis"
  - "lightningpixel/modly"
  - "THU-MAIC/OpenMAIC"
codex_review: "いちばん面白いのは、基盤モデルそのものより“周辺の作法”が一気に洗練されてきた点だ。diagram-designは派手さ以上に重要で、NeedleやCursor系は期待先行だが、道具立ての成熟が次の勝ち筋を示している。"
codex_importance: 4
---

## 公式アップデート

### cathrynlavery/diagram-design

Claude Code / Codex / Pi 向けの図表作成エージェントスキル。「Mermaid-slop」を避けた自己完結型の HTML + SVG を出力する。27種の視覚タイプがそれぞれ minimal light / minimal dark / full-editorial の3バリアントで同梱され、ビルドステップも JavaScript も外部画像依存もない。

- **2.0 の Loop**: 共有メモリハブを持つフライホイール図を追加。破線は書き戻しを表す
- **2.3 の意味論的パターン**: レイアウトとは独立に振る舞いを記述する仕組み。キュー、ポリシートレース、トラストバウンダリなどを、タイプ数を増やさず最寄りの既存タイプで表現できる。ルーティング対象は7パターン（ファンイン・キュー/ボトルネック、反復ステージスロット、非構造入力の変換、対のポリシートレース、セキュアな舗装路、ガバナンスカタログ、補償的セキュリティ層）
- **任意のモーション**: `none` / `reveal` / `step` / `loop` の4モード。既定は `none` で通常出力は静的かつスクリプトなし。reduced-motion では完全な静止フレームを表示し再生コントロールを無効化する。モーションHTMLは `template-motion.html` のレビュー済みコントローラのみ許可し、任意のインラインスクリプト・リモートアセット・CSS import・実行可能属性は拒否
- **ブランド取り込み**: サイトURLを渡すと配色とフォントスタックを抽出し、`paper` / `ink` / `muted` / `accent` / `link` の意味論的ロールにマッピング。書き込み前に `ink` over `paper` の WCAG AA コントラストを検証し、9〜12px で不足する場合は調整値を提案する。サンプリングURL・色ロール・フォント種別と取得元を「fidelity receipt」として出力
- **draw.io / Mermaid の再描画**: `.drawio` / `.drawio.xml` / `.drawio.png` / `.drawio.svg`（圧縮ペイロード含む）と `.mmd` / `.mermaid` / Markdown中の fenced mermaid ブロックに対応。format / size / detail / audience の4ダイヤルで出力先に合わせ、何を統合・圧縮・削除したかを fidelity ledger として提示する。テキスト解析のみでレンダリング・JS実行・ネットワークアクセスは行わない
- **アクセシビリティ**: 各テンプレートがインラインSVGに `role="img"`、解決可能な `aria-labelledby`、先頭子要素の `<title>` / `<desc>` を付与。IDは図・バリアントごとにプレフィックスされ、複数SVGを1ページに埋め込んでも衝突しない
- **配布**: Claude Code は `/plugin marketplace add cathrynlavery/diagram-design`、Codex は `codex plugin marketplace add ...`、Pi は `pi install <repo URL>`。Claude Code はサードパーティマーケットプレイスの自動更新を既定で無効にするため、初回のみ手動で有効化が必要
- CI は Linux / Windows / macOS で、skin lint、意味論的ルーティング、モーション資産、ラベル配置の幾何検証、ドキュメント同期などを検証する

[ソース](https://github.com/cathrynlavery/diagram-design)

### cactus-compute/needle

Cactus Compute による 45M パラメータのオープンモデル Needle 2。ツール呼び出し・デバイス操作・構造化抽出に特化する。

- **単一14MBバイナリ**: 重みをエンジンに焼き込み、1セッション約28MB RAM で動作。管理すべき別ファイルはなく、推論はネットワークを一切使わない
- **CQ2ビット量子化**: Cactus Quants で圧縮。FunctionGemma 270M、LFM2.5 230M、Apple FM と 5〜70倍小さく2ビット対 f16 でベンチマークを取り合うとしている
- **信頼度ゲート**: 学習済みヘッドによる校正済み信頼度スコアを全応答が持ち、閾値以上は実行、以下はエスカレーションという制御ができる
- **ツール検索**: 大規模なツールカタログを宣言しても、内蔵の検索ヘッドが毎ターン上位5件だけをレンダリングし、文法もその部分集合に制約する
- **境界のあるメモリ**: 256トークンのスライディングウィンドウ、ツールを KV シンクとしてピン留め。会話がどれだけ長くなっても総メモリは約28MBに留まる
- Python パッケージとして `pip install cactus-needle`。`@needle.tool` デコレータ、Pydantic モデルを渡す `extract()`、LoRA ファインチューニング（JAX、CUDA / Metal 対応）、`.cact` へのエクスポートまでを提供
- アーキテクチャは Simple Attention Network（FFN の代わりに Hadamard MLP、GQA アテンション、engram KV メモリ、マルチレーンのハイパーコネクション）。論文は [arXiv:2607.18363](https://arxiv.org/abs/2607.18363)

[ソース](https://github.com/cactus-compute/needle)

### unslothai/unsloth

ローカルで LLM・拡散・埋め込み・音声モデルを実行/学習するデスクトップアプリ化。Tauri ベースの Unsloth Desktop（v0.1.800-beta）、Web UI の Unsloth Studio、コード版の Unsloth Core の3形態で提供される。

- **Unsloth Start**: `unsloth start claude` の1コマンドで Claude Code、Codex、Hermes、OpenClaw、OpenCode をローカルモデルに接続。`--as-subagent --model unsloth/model-GGUF:quant` で既存モデルを維持したままローカルサブエージェントとしても使える
- **対応モデル**: Kimi K3、MiniMax-H3、Qwen3.8、Muse Glimmer、DeepSeek-V4、Gemma 4 など。GLM-5.2（744Bパラメータ・1Mコンテキスト）を Dynamic GGUF でローカル実行できる
- **GGUF バックエンド選択**: Settings > System から CPU / CUDA / ROCm / Vulkan を選択。`UNSLOTH_LLAMA_CPP_BACKEND` を初回インストール前に設定しても指定できる。ROCm PyTorch ホイールがない AMD GPU（Polaris、RDNA 1）では Vulkan 経由で GGUF チャットのみ GPU 動作する
- **リモートアクセス**: 既定は `127.0.0.1` バインド。`--secure` は localhost バインドのまま Cloudflare HTTPS トンネル経由でのみ公開し、トンネルが張れなければ起動しない（fail closed）。自動生成の管理者パスワードのまま公開しようとすると、公開前にターミナルで新パスワードを要求する
- **学習面**: 2倍高速・VRAM 70%削減、RL / LoRA / QLoRA / フルファインチューニング / GRPO / DPO / FP8 に対応。MoE LLM を12倍高速・VRAM 35%削減で学習、埋め込みモデルは1.8〜3.3倍高速、80GB GPU で 20B モデルの 500K コンテキスト学習
- MCP コントロールエンドポイントを追加し、対応クライアントからモデル・学習・レシピ・チェックポイント・エクスポートを管理できる

[ソース](https://github.com/unslothai/unsloth)

### cursor/plugins

Cursor の公式プラグイン仕様とプラグイン集。各プラグインはリポジトリ直下の独立ディレクトリで、`.cursor-plugin/plugin.json` マニフェストを持つ。ルートの `.cursor-plugin/marketplace.json` が全体を列挙するマルチプラグイン・マーケットプレイス構成。MIT。

- **開発者向け**: `thermos`（セキュリティ/正当性の深層監査、厳格なコード品質ルーブリック、並列サブエージェント）、`orchestrate`（プランナー/ワーカー/検証者と構造化ハンドオフで大規模タスクを並列クラウドエージェントに展開）、`continual-learning`（トランスクリプト駆動で AGENTS.md を逐次更新）、`pr-review-canvas`、`docs-canvas`、`cursor-sdk`、`cli-for-agent`、`agent-compatibility`、`create-plugin`、`cursor-team-kit`
- **サードパーティMCP連携**: Gmail、Google Drive、Google Calendar、Gong、Salesforce、Apollo.io、Ashby、HubSpot、Intercom、Circleback、Docusign、X（読み取り専用）、Navan、Profound
- 各プラグインは `skills/`（SKILL.md）、`rules/`（.mdc）、`mcp.json` を持てる

[ソース](https://github.com/cursor/plugins)

### cordiverse/cordis

「時空間合成可能性（Spatiotemporal Composability）」のメタフレームワーク。同名の論文 *A Programming Paradigm for Spatiotemporal Composability* を伴う。API は未安定で予告なく変更されうると明記されている。ドキュメントは DeepSeek Harness 側の cordis-primer に置かれている。

[ソース](https://github.com/cordiverse/cordis)

### lightningpixel/modly

画像やプロンプトから 3D メッシュを生成するローカル実行のデスクトップアプリ。Windows / Linux / Apple Silicon macOS 対応、MIT。

- **拡張機能方式**: `manifest.json` を含む GitHub リポジトリを URL 指定でインストールする。公式拡張は Hunyuan3D 2 Mini / Mini Turbo / Mini Fast、TripoSG、Trellis2 GGUF
- **ワークフロー**: Image → Generate Mesh → Add to Scene のようにノードを接続して実行。実行前に配線が検証され、不正なグラフはインライン/トーストで警告するだけで現在のメッシュ表示を落とさない
- **Modly CLI**: 標準ライブラリのみで動作し、UI を使わずに稼働中のアプリを操作できる。正式コマンドは `health` / `model` / `workflow-run` / `capability` / `process-run`。`generate` は `POST /workflow-runs/from-image` を起動してポーリングし、最終メッシュをエクスポートするうえで復旧用メタデータ（`workflow-run status ...` / `cancel ...`）を JSON に含める。旧 `/generate/*` は `legacy`、ComfyUI 連携は `experimental` として明確に分離されている
- インポート済みメッシュのスムージングとデシメーションをアプリ内で行え、最適化結果はワークスペースに書き戻される

[ソース](https://github.com/lightningpixel/modly)

### THU-MAIC/OpenMAIC

清華大学（THU-MAIC）のマルチエージェント対話型教室。任意のトピックや文書からスライド・クイズ・インタラクティブシミュレーション・PBL を生成し、話す・板書する・議論する AI 教師と AI クラスメイトが授業を行う。Next.js 16 / React 19 / LangGraph 1.1、MIT。

- **v0.3.2（2026-08-14）**: 動画エクスポートの堅牢化（Quiz/PBL カバーの決定論的生成、インタラクティブ HTML のキャプチャ、CPU リソースプロファイル）、サーバー側永続化の完了（ドキュメント全面移行、ワンコマンド Postgres スタック、逐次保存）とアセットレジストリ、`@openmaic/generation` パッケージ、4ロケール追加、Amazon Bedrock / Atlas Cloud / Claude 検索プロバイダ、FunASR による ASR
- 対応プロバイダは OpenAI、Azure OpenAI、Anthropic、Amazon Bedrock、Gemini、DeepSeek、Qwen、Kimi、MiniMax、Grok、OpenRouter、Doubao、Tencent Hunyuan、Xiaomi MiMo、GLM、Ollama、Lemonade、FunASR、および OpenAI 互換 API
- OpenClaw 統合により、Feishu / Slack / Discord / Telegram など20以上のメッセージングアプリから教室を生成できる（`clawhub install openmaic`）
- 出力は編集可能な `.pptx` またはインタラクティブな `.html` としてエクスポート可能

[ソース](https://github.com/THU-MAIC/OpenMAIC)

## コミュニティの反応

図表スキルと 3D 生成アプリに実使用報告が集中した。Needle 2 と cursor/plugins は使ってみた層から具体的な限界指摘が出ている一方、OpenMAIC は公式・関係者の投稿のみで独立ユーザーの評価は確認できなかった。

### cathrynlavery/diagram-design

#### ポジティブ

> GitHub Trending で急上昇（1日で+1,600〜3,600スター、総17k〜19k超）。Mermaid-slop を排した純粋 HTML + SVG の図版と Claude Code へのスキル統合が、AI生成図の「安っぽさ」を解決する新定番として評価されている。 — @trending_repos [出典](https://x.com/trending_repos/status/2088598182024323484)

> Claude Code で生成される図が常に同じ丸角ボックスになる問題に対し、ブランド配色・フォント抽出や Mermaid 再描画を備えた本リポジトリが「AI図の見た目改善」として急速にシェアされている。 — @mr_kozh [出典](https://x.com/mr_kozh/status/2088665865286001036)

#### 実際の使用例

> Hermes Agent Course 執筆中に発見し、git clone と `/learn` でインストール。コンポーネントと接続を記述するだけで高品質な HTML + SVG 図が単一ファイルで完成した。参考URLを指定すれば一貫したテーマも適用でき、Figma 不要でデザイナー向けの出力が得られた。 — @minhng92 [出典](https://x.com/minhng92/status/2088969072063189163)

#### ネガティブ

該当なし（直近1週間で、実使用者による懸念・限界の指摘や代替提案は確認されず）。

### cactus-compute/needle

#### ポジティブ

> GitHub Trending 上位入り。14MB のモデルが端末側 AI の新基準として注目されている。 — @Ian_Codes [出典](https://x.com/Ian_Codes/status/2088809120203772388)

> 45Mパラメータ・14MBバイナリでツール呼び出しに特化し、信頼度ゲートやツール検索を内蔵した設計が話題。 — @MervinPraison [出典](https://x.com/MervinPraison/status/2089072227740209470)

#### ネガティブ

> Needle 2 を試したが、「温度」→「temp」のような微妙な言い換えでツール呼び出しが失敗する。微調整後も頑健性に課題があり、超軽量な関数呼び出しモデルの代替を探している。 — @samkit__ [出典](https://x.com/samkit__/status/2089058906584883384)

### unslothai/unsloth

#### ポジティブ

> Unsloth Desktop の新機能（Claude/Codex 接続 + ローカル訓練UI）が、LM Studio を超える「ローカルAI統合環境」として話題に。プライバシー・コスト・訓練までを一括で扱える点が評価されている。 — @TeksEdge [出典](https://x.com/TeksEdge/status/2087182335678750731)

> 「run AND train」を同時に実現した初のアプリとして爆発的にシェアされ、特に Claude Code / Codex のローカル接続機能が注目を集めている。 — @DataChaz [出典](https://x.com/DataChaz/status/2087353969605853357)

#### 実際の使用例

> 今日 Unsloth Desktop をセットアップし、pi モデルで実際に触ってみた。 — @jwt_bilal [出典](https://x.com/jwt_bilal/status/2088719726650286227)

> M5 Max（128GB）と 5090 の Linux 環境で Qwen 3.8 27B の unsloth 版をテスト。132行で停止する挙動を確認した。 — @atomtanstudio [出典](https://x.com/atomtanstudio/status/2088725120047349966)

> 4090 で Unsloth Desktop を試す予定で、Qwen 系モデルの実運用を検討中。 — @0xRizzio [出典](https://x.com/0xRizzio/status/2088767904116515034)

#### ネガティブ

> Mac（M5 Max / M4 Pro）で unsloth desktop を使う際の GGUF と MLX の性能差が分からず、実運用での最適化に苦戦している。 — @JohnsonThomasMD [出典](https://x.com/JohnsonThomasMD/status/2088733990832226694)

### cursor/plugins

#### ポジティブ

> GitHub トレンドで急上昇。公式プラグイン仕様（manifest 形式、MCP / Orchestrate 含む）が公開され、AIエージェントワークフローの再利用性が評価されている。 — @TrendingAIRepos [出典](https://x.com/TrendingAIRepos/status/2088762673131598242)

> 今日だけで152スター増加（累計2.8k超）。PRレビュー自動化、並列クラウドエージェント、MCP連携プラグインが AI コーディングの新標準として注目されている。 — @YUK_KND [出典](https://x.com/YUK_KND/status/2089011439470002347)

#### 実際の使用例

> `/thermos` スキルを実用中。セキュリティ/コード品質の監査を並列実行し、PR の Bugbot と連携する自動修正ループ（`/thermos-cycle`）まで自作して活用している。 — @s_capatina [出典](https://x.com/s_capatina/status/2089112194692600244)

> 公式 plugins リポジトリの MCP 統合・Orchestrate 系プラグイン群を調査。branch review や docs canvas などを実際に inspect してワークフロー拡張を確認した。 — @zkespresso [出典](https://x.com/zkespresso/status/2088599142704517412)

#### ネガティブ

> MCP の activation が壊れ気味で Agent ビューの切り替えが必須になり、CLI からの直接起動も不安定。Claude Code 連携も意図的に制限されており、VS Code への回帰を検討中。 — @viktorlidholt [出典](https://x.com/viktorlidholt/status/2087516371538047189)

> MCP ツールが増えたことでコンテキストノイズと権限リスクが顕在化。タスクごとにプラグインのスコープを制限したい。 — @rafiistcool [出典](https://x.com/rafiistcool/status/2087531890928480747)

### cordiverse/cordis

#### ポジティブ

> DeepSeek Harness（8/13発表）の基盤として紹介され、GitHub急上昇・114kスターを記録。「Everything is a plugin」の composability が VS Code 的なエコシステム優位性を生む可能性で注目されている。 — @stretchcloud [出典](https://x.com/stretchcloud/status/2089096611158794298)

> 「時間・空間両方の保証を単一プロセス内で実現する動的プラグインシステム」という新パラダイムが、既存の agent harness の限界を超えるとして話題。 — @2abstract4me [出典](https://x.com/2abstract4me/status/2089106563214848481)

#### 実際の使用例

> DeepSeek Harness 内で Cordis を深掘り。プラグインのライフサイクル管理（登録エフェクトの自動破棄）によりメモリリーク防止やホットスワップが容易だと実感した。 — @charles_lukes [出典](https://x.com/charles_lukes/status/2089079817807560843)

#### ネガティブ

> DeepSeek Harness 論文の「Spatiotemporal Composability」概念は過度に形式化されており、カテゴリ理論まで必要か疑問。 — @miroslavlzicar [出典](https://x.com/miroslavlzicar/status/2089066698984882246)

### lightningpixel/modly

#### ポジティブ

> トレンド9位に浮上。ローカルGPU上で完全に動作し、画像やプロンプトから3Dモデルを生成できるオープンソースのデスクトップアプリとして注目。 — @github_trendjp [出典](https://x.com/github_trendjp/status/2088385869640274049)

#### 実際の使用例

> Meshy はすぐポイントがなくなるので Modly を導入。3Dモデルにしたい画像を指定して RUN を押し、朝起きたらできていた。GPU を使うので Mac は厳しく、Windows の RTX 4060 Dual 8GB でなんとかなった。 — @kuma3ism [出典](https://x.com/kuma3ism/status/2087396951067394172)

> AMD 7900 XTX でローカル画像→3D を実行。無料の Hunyuan は粘土状の形状にとどまり、TRELLIS の4ビュー融合が実用的だった。GLB で出力し Blender で正規化すれば任意のエンジンで使える。 — @Bitcopath [出典](https://x.com/Bitcopath/status/2087659200688300407)

#### ネガティブ

> Modly のフォークを拡張していたが、4面図→メッシュ生成（hunyuan3d-2mv）とテクスチャ貼り付け（hunyuan3d-2-1-full）しかしていないと気づき、フォークを捨てて新規リポジトリに再構築した。 — @kuma3ism [出典](https://x.com/kuma3ism/status/2089076302393532597)

> Modly のフォークを色々試したがこれが限界で、ゲーム用途にはまだ使えないかもしれない。一応4面図は入れられるようにした。 — @kuma3ism [出典](https://x.com/kuma3ism/status/2088860142217695330)

> Hunyuan には地域による利用制限がある。Trellis はジオメトリが優秀だが、Mac ではマルチビューとテクスチャが弱点だった。 — @Bingeljell [出典](https://x.com/Bingeljell/status/2087045224145314139)

### THU-MAIC/OpenMAIC

該当なし（直近1週間は公式アカウント・プロジェクト関係者による紹介投稿が中心で、実使用に基づく独立ユーザーの感想・評価は確認されず）。

## ソース

- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
- [cactus-compute/needle](https://github.com/cactus-compute/needle)
- [unslothai/unsloth](https://github.com/unslothai/unsloth)
- [cursor/plugins](https://github.com/cursor/plugins)
- [cordiverse/cordis](https://github.com/cordiverse/cordis)
- [lightningpixel/modly](https://github.com/lightningpixel/modly)
- [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
