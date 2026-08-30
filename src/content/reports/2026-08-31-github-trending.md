---
title: "科学スキル集と3D OSINT地球儀が急伸"
summary: "GitHub Trendingは「エージェントに専門領域を与える」リポジトリが上位を占めた。163スキルを束ねるscientific-agent-skillsがClaude限定から標準対応へ改称し、清華大のOpenMAICはv1.0.0でAgent Workbenchを追加。公開OSINTを3D地球儀で見せるgods-eye-viewは実使用報告が最も多い。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-08-31

features:
  - "tt-a1i/archify"
  - "bilawalsidhu/gods-eye-view"
  - "K-Dense-AI/scientific-agent-skills"
  - "K-Dense-AI/k-dense-byok"
  - "THU-MAIC/OpenMAIC"
codex_review: "派手なのは3D地球儀だが、私には scientific-agent-skills の“汎用AIを専門職化する”流れのほうが地味に重要に見える。反面、実使用の厚みが薄い案件も多く、トレンド先行の熱気は少し過剰評価気味だ。"
codex_importance: 3
---

## 公式アップデート

### tt-a1i/archify

コードベースやシステム記述から、検証可能なアーキテクチャ図・ワークフロー図・シーケンス図・データフロー図・ライフサイクル図を生成するエージェントスキル。Cursor / Claude Code / Codex CLI / OpenCode 向けの Node.js 製レンダリング・検証システムで、エージェントが typed JSON IR を生成し、Archify がそれを決定論的に HTML/SVG へコンパイルする。MIT。

- **開発版は v2.16.0-dev.0**。導入は `npx skills add tt-a1i/archify -g`、試用のみなら `npx skills use tt-a1i/archify@archify --agent codex`
- **5つの図種別**: Architecture（構成要素・サービス・ストレージ・境界）、Workflow（CI/CD・承認・ツール呼び出し）、Sequence（API呼び出し・キャッシュフォールバック・認証）、Data Flow（パイプライン・リネージ・PII）、Lifecycle（状態・リトライ・待機・終端）
- **Architecture Delta**: 検証済みの Before / Delta / After スナップショットを比較し、追加・削除・変更・移動・経路変更を機械可読なレシートとして出す。`node archify/bin/archify.mjs compare architecture base.json head.json architecture-delta.html --json`。影響やリスク、マージ安全性の推論は行わないと明記
- **配信前のアトミック検証**: スキーマ、レイアウト、HTML/SVG、ルート、ラベル-ルート間クリアランスの全チェックを通過しないと、直前の正常出力を置き換えない。失敗時は `validate --json` / `deliver --json` が安定したルールコード・対象・実測値・サポートされた修正手段だけを返す
- **`deployment-ownership` プロファイル**: 作成者・リージョン配置・プライベートDBスコープ・境界越えの記載が欠けると fail closed。暗黙適用はせず、稼働中インフラも参照しない
- **Evidence-backed ノード**: 要求時のみ `SRC n` を付与し、単一の公開コミットに固定された Git 検証済みファイル・行範囲を開く。通常の成果物はソース非参照
- **出力は自己完結の HTML 1ファイル** + PNG / SVG / WebM / 1200×630 シェアカード。ルート追跡後の Route Share Card、上流・下流リーチの Reach Share Card もエクスポート可能
- **更新チェック**: 固定の安定版マニフェストを GET するのみでダウンロード・インストールは行わない。バージョン・エージェント・プロジェクトデータ・プロンプト・アカウント/デバイスIDは送信しない。`ARCHIFY_UPDATE_CHECK_DISABLED=1` で無効化
- Mermaid の自動パース、汎用オートレイアウト、ホスト型共有、WYSIWYG 編集は意図的にスコープ外

[ソース](https://github.com/tt-a1i/archify)

### bilawalsidhu/gods-eye-view

ブラウザ上で動く「スパイ衛星シミュレータ」。フォトリアルな3D地球儀に、航空機・船舶・衛星・地震・交通・公開カメラのライブデータを重ねる。YouTube で 500万回超再生された God's Eye View シリーズ（旧 WorldView）発の OSS 化。

- **データはすべて公開ソース**: 航空機のトランスポンダ、船舶ビーコン、軌道要素、地震計、公開カメラ。ライブ供給がない箇所は「モデル化されたビュー」として明示ラベルを付ける。キーなしの交通表示はシミュレーションと表示、カメラ姿勢は較正前は推定値、打ち上げ上昇の再生は `RECONSTRUCTED ESTIMATE` と表記
- **主な機能**: コックピットビュー（追跡中の機体に搭乗）、Contacts（半径250kmの一覧から任意のコックピットへ移動）、クリック追跡、音声ホワイトボード（境界ポリゴン・マーク・ルートを音声で描画）、3Dハンガー（787 / ATR-72 / Citation / Bell 206 / MQ-9 の機種別モデル）、GLSL センサールック（CRT / NVG / FLIR / Noir / Snow）、検出オーバーレイ、軍用HUD、シーンディレクター、共有リンク
- **CCTV レイヤー**は webcam の埋め込みではなく3D都市空間へ投影する方式で、VIEWSHED に切り替えると各カメラの推定カバー範囲（届く範囲と死角）を描画
- **必要なキーは Google Maps API キー1つ**。README は 🟢 不要 / 🟡 無料キー / 🔴 従量課金 で色分けされ、🔴 は Google Maps のみ。3Dタイルは月1,000セッション無料（1セッションあたり最大3時間のレンダリング）、音声は $5 のセッション上限が組み込み
- Node.js 24.14.x または 26.x が必要。`npm run dev -- --host localhost --port 4173` で起動し、dev サーバは localhost バインドのためキーはローカルに留まる。コールドスタートは M5/Chrome の実測中央値 1.86秒（ハードウェア要件ではなく比較用ベースライン）
- 非開発者向けに、コーディングエージェントへ貼り付けるセットアップ用プロンプト（課金アラートと使用量クォータの設定まで含む）を README に同梱

[ソース](https://github.com/bilawalsidhu/gods-eye-view)

### K-Dense-AI/scientific-agent-skills

科学研究向けエージェントスキル集。**Claude Scientific Skills から Scientific Agent Skills へ改称**し、Claude 限定ではなく [Agent Skills](https://agentskills.io/) 標準に対応する任意のエージェントで動作するようになった。v2.65.0、MIT。

- **規模**: 163スキル、100以上の科学・金融データベース。README は「19万人以上の科学者が利用」と記載
- **内訳**: 統一 database-lookup スキルが78の公開DB（PubChem、ChEMBL、UniProt、COSMIC、ClinicalTrials.gov、FRED、USPTO 等）へ来歴付きでアクセス。加えて DepMap、Imaging Data Commons、PrimeKG、NCATS ARAX、U.S. Treasury Fiscal Data、Hugging Science、OneKGPd、Genomic Intelligence の専用スキル。70以上の Python パッケージスキル（RDKit、Scanpy、PyTorch Lightning、scikit-learn、PyTDC、PathML、pydicom、NeuroKit2、PufferLib、QuTiP、GeoPandas、pymatgen、Qiskit、OpenMM/MDAnalysis 等）、9つの外部プラットフォーム連携（Benchling、DNAnexus、LatchBio、OMERO、Protocols.io、Ginkgo Cloud Lab、LabArchives、Opentrons 等）
- **リポジトリ自体が Agent Plugins 1.0.0 パッケージ**（ルート `plugin.json` + `skills/`）。Cursor はローカルプラグインディレクトリへの symlink、Codex は `codex plugins install .`
- **導入経路**: `npx skills add K-Dense-AI/scientific-agent-skills`、GitHub CLI v2.90.0+ の `gh skill install`（`--pin v2.65.0` でタグ/SHA固定、`gh skill update --all` で一括更新）、`~/.agents/skills/` への直接 clone、Hermes の skill tap
- **セキュリティ**: 全スキルを [Cisco AI Defense Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) で毎週スキャン（変更のないスキルは前回結果を引き継ぐ増分方式、最低30日ごとと scanner/model 更新時に全体再スキャン）、結果は `docs/security-report.md` に公開。README は「全部まとめて入れるな、必要なスキルだけ入れろ」「163スキルは常駐コンテキストとして重い」と明記し、コミュニティ寄稿分のレビュー深度には限界があると認めている
- docx / pdf / pptx / xlsx の4スキルは Anthropic 製を [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills) から vendor したもの
- リポジトリツーリングは Python 3.13+、依存管理は `uv`。`scripts/` を同梱するスキルには必ずテストスイートが必要で、無い PR は CI がブロックする

[ソース](https://github.com/K-Dense-AI/scientific-agent-skills)

### K-Dense-AI/k-dense-byok

デスクトップで動作する無料・OSS の AI 共同研究者。上記 Scientific Agent Skills を土台とし、BYOK（Bring Your Own Key）方式で自前の API キーを使う。

- 40以上のモデルから選択可能。Web検索、ファイル操作、100以上の科学データベース、163スキル全てにアクセスできる研究ワークスペースを提供
- データは自分のマシンに留まる。重い処理は [Modal](https://modal.com/) 経由でクラウド計算へスケールさせるオプションあり
- 導入ウォークスルーの録画ウェビナー「[Getting Started with K-Dense BYOK](https://youtu.be/Du3BIE48DKc)」が公開されており、技術的な前提知識は不要とされている

[ソース](https://github.com/K-Dense-AI/k-dense-byok)

### THU-MAIC/OpenMAIC

清華大学のマルチエージェント対話型教室（Open Multi-Agent Interactive Classroom）。任意のトピックや資料から、スライド・クイズ・インタラクティブシミュレーション・PBL を含む授業を生成し、AI教師とAIクラスメイトが音声・ホワイトボード・リアルタイム議論で進行する。**2026-08-27 に v1.0.0 を公開**。Next.js 16 / React 19 / LangGraph 1.1、MIT。論文は JCST'26。

- **Pro Agent Workbench**: 従来のワンクリック生成に加え、チャットでカリキュラムを設計し全ページを構築・改訂するエージェント作業台を追加。ホーム画面の Pro コントロールから開き、折りたたみ可能なフォルダ/会話レール + チャットペイン + タブ式の教室ペインで構成される
- **永続セッション**: サーバーバックのセッションが再起動を跨いで生存し、実行中のキャンセル・再開・追加指示による軌道修正が可能。DB管理のリビジョンカウンタにより、変更のあったシーンだけを再取得する
- **セッション素材**: 文書・音声・動画のアップロード、または Web 検索からの取り込みに対応し、エージェントがそれを元に構築する。ローカル ffmpeg/ffprobe による抽出と、クラウド経路の AliDocMind を選択可能
- **20の内蔵スキル**: カリキュラム設計、ディープリサーチ、インタラクティブ／講義／ワークショップ／職業訓練などの授業スタイル、スライド・ステージ制作、`.pptx` インポート、編集、スタイル再利用。ユーザー作成スキルもオーナー単位で保存・編集できる
- **有効化はオプトイン**: `NEXT_PUBLIC_PRO_WORKBENCH_ENABLED=true` と `OPENMAIC_AGENT_RUNTIME_ENABLED=true`、および PostgreSQL の `DATABASE_URL` が必要。`MODEL_ROUTES` で `maic-agent-driver` を `openai-completions` / `openai-responses` 系のモデルへ明示的にルーティングする必要があり、**フォールバックは意図的に用意されていない**。フラグがオフの間 `/api/agent/*` は 404 を返す
- **プロバイダ中立**: OpenAI、Azure OpenAI、Anthropic、Amazon Bedrock、Gemini、DeepSeek、Qwen、Kimi、MiniMax、Grok、OpenRouter、Doubao、Tencent Hunyuan、Xiaomi MiMo、GLM、Ollama、Lemonade（ローカル LLM/画像/TTS/ASR）、FunASR（ローカル ASR）に対応。認証情報はブラウザに渡らず、`<CAP>_<PREFIX>_ENABLED=false` で任意の機能を強制停止できる
- **永続化スタックは差し替え可能**: 既定ではDB不要でブラウザストレージ動作。`server-persistence` プロファイルはアプリ + PostgreSQL の2コンテナのみ（永続化サーバはアプリ内の `/api/persistence` に組み込み）
- **セキュリティ上の重要な注記**: `NEXT_PUBLIC_PERSISTENCE_TOKEN` は公開JSバンドルにコンパイルされるため機密性もユーザー分離も一切なく、ページを開ける者は誰でも `x-learner-key` を選んで全学習者パーティションと全ドキュメントを読み書きできる。localhost または信頼済みネットワークの単一ユーザー環境専用で、本番前に `lib/persistence/server-auth.ts` を実セッション検証へ差し替えるよう明記
- **アセット回収**: 削除されたバイトは既定で有効なオフラインコレクタが回収する。`ASSET_COLLECTION_INTERVAL_MS`（既定15分）ごとに、`ASSET_COLLECTION_GRACE_MS`（既定1時間）以上参照されていないバイトを対象とする。この猶予期間が実質的な保持期間になるため引き上げは慎重に
- **OpenClaw 連携**: `clawhub install openmaic` で Feishu / Slack / Discord / Telegram など20以上のメッセージングアプリから教室を生成できる。ホスト版（open.maic.chat のアクセスコード）とセルフホストの2モード

[ソース](https://github.com/THU-MAIC/OpenMAIC)

## コミュニティの反応

上位5件のうち、X 上で実使用報告が確認できたのは gods-eye-view と k-dense-byok の2件のみ。残りはトレンドまとめアカウントによる紹介投稿が大半を占め、体験談はほぼ見当たらなかった。gods-eye-view は「公開データを繋いだだけ」という点への驚きが反応の中心にある。

### bilawalsidhu/gods-eye-view

#### ポジティブ

> GitHub Trending で急上昇し、Product Hunt 上位入賞も話題に。公開OSINTデータの3D地球儀可視化＋音声AI操作という完成度が評価されている。 — @bilawalsidhu [出典](https://x.com/bilawalsidhu/status/2093693183976759387)

> 月間ベストGitHubプロジェクトとして複数ツールと並んで紹介され、ライブデータ可視化のインパクトが共有されている。 — @vibelancer [出典](https://x.com/vibelancer/status/2093693036689580297)

#### 実際の使用例

> 公開データだけでここまでリアルタイムの「スパイ衛星ビュー」が作れることに驚き、AI音声操作のデモ動画を添えて「週末プロジェクトに最適」と評価。 — @KanikaBK [出典](https://x.com/KanikaBK/status/2093655920735907938)

> 「すでに公開されているデータを繋げただけなのに完成度が高い」と指摘し、具体的な音声コマンド例を挙げて実用性を解説。 — @chaemh7 [出典](https://x.com/chaemh7/status/2093554345703059856)

#### ネガティブ

該当なし（直近1週間で懸念・限界を指摘する投稿は確認されず）。

### K-Dense-AI/scientific-agent-skills

#### ポジティブ

> がんゲノミクス、創薬、臨床研究向けの163ワークフローを揃えたオープンソースの科学エージェントスキルライブラリ。 — @tom_doerr [出典](https://x.com/tom_doerr/status/2093817200842850724)

> 任意のAIエージェントを AI Scientist に変える、科学分野で No.1 の Agent Skills ライブラリ。 — @Dinosn [出典](https://x.com/Dinosn/status/2093551807419007073)

> 163の即用スキルと100以上のデータベースで、どのAIにも無料の博士課程アシスタントが付くようなもの。 — @dogquie [出典](https://x.com/dogquie/status/2093203803248238633)

#### 実際の使用例

> RDKit / Scanpy / BioPython 等との連携を含む163スキルでAIエージェントを研究アシスタント化でき、Claude Code・Cursor・Gemini CLI などで動く、という紹介（個人の試用体験談としての言及はなし）。 — @DivyanshT91162 [出典](https://x.com/DivyanshT91162/status/2093627492301226296)

#### ネガティブ

該当なし。

### K-Dense-AI/k-dense-byok

#### 実際の使用例

> k-dense BYOK を実際に試したところ、ログインやファイル連携に改善要望はあるものの「かなりよく動く」。 — @MayoLior [出典](https://x.com/MayoLior/status/2093302328187138549)

#### ネガティブ

> スキル数の表記が README と食い違っている（163 vs 161 など）点と検証不足を指摘し、必要なスキルだけを選んで使うべきと慎重論。 — @connect24h [出典](https://x.com/connect24h/status/2093966563401666731)

### tt-a1i/archify

該当なし（直近1週間の X 投稿は GitHub Trending 関連の紹介・宣伝が中心で、実ユーザーによる使用感想・評価はほぼ確認できなかった）。

### THU-MAIC/OpenMAIC

該当なし（2026-08-23〜30 の X 投稿は Trending まとめアカウントによる星数・機能紹介が大半で、実際に使った感想・評価、および批評・懸念の指摘はいずれも確認されなかった）。

## ソース

- [GitHub Trending 全言語 / Python / TypeScript (RSS)](https://mshibanami.github.io/GitHubTrendingRSS)
- [tt-a1i/archify](https://github.com/tt-a1i/archify)
- [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)
- [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
- [K-Dense-AI/k-dense-byok](https://github.com/K-Dense-AI/k-dense-byok)
- [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)
