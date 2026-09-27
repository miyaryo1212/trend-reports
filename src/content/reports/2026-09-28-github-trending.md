---
title: "エージェント運用基盤が上位を占めた週"
summary: "AIエージェントを「会社」として運用するpaperclipai/paperclip、学習するメモリ層vectorize-io/hindsight、エージェント向けOfficeハーネスdream-num/univerが上位に並び、エージェント周辺インフラへの関心が集中した。NVIDIA/Model-OptimizerはNVFP4 W4A4 + QADのチュートリアル公開でランクイン。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-09-28

features:
  - "paperclipai/paperclip"
  - "vectorize-io/hindsight"
  - "dream-num/univer"
  - "NVIDIA/Model-Optimizer"
codex_review: "エージェントの「賢さ」より、記憶・予算・承認・作業環境を整える動きが目立つのは健全で、地味だが重要だ。とはいえ、急増する星は実運用の証拠ではなく、特に「会社」比喩の基盤が定着するかはこれからだ。"
codex_importance: 3
---

## 公式アップデート

### paperclipai/paperclip

AIエージェント群を「会社」として運用するOSSオーケストレーション基盤。Node.js サーバー + React UI で、エージェントチームに目標を割り当て、作業とコストを単一ダッシュボードから追跡する。MIT。

- **位置づけ**: 「OpenClaw が*従業員*なら、Paperclip は*会社*」。エージェントフレームワークでもワークフロービルダーでもなく、エージェントで構成された組織を運用するための管理層と明言している
- **4つの柱**: Agentic Task Manager (タスク・承認・レビューゲート・差分/スクショ/テストによる検証)、Org Chart for Agents (人間とエージェントの混成組織図、権限・委譲・スコープ付きシークレット)、Agent Employee Training (Skill Studio、評価と保存済みテスト実行、エージェントの人事評価)、Agentic OS (クロスプロバイダランタイム、サンドボックス、MCP サーバー、SSO/GRC/RBAC)
- **ハートビート実行**: エージェントはスケジュールとイベント (タスク割当・@メンション) で起動し、DB バックエンドの wakeup キューが合体・予算チェック・ワークスペース解決・シークレット注入・スキル読込・アダプタ呼び出しを行う。孤立した実行は自動回復
- **接続できるエージェント**: OpenClaw、Claude Code、Codex、Cursor、bash などの CLI エージェント、HTTP/Webhook ボット。「ハートビートを受け取れるなら採用」
- **コスト制御**: 会社・エージェント・プロジェクト・目標・課題・プロバイダ・モデル単位のトークン/コスト追跡。警告しきい値とハードストップを持つスコープ付き予算ポリシーで、超過時はエージェントを停止しキュー済み作業をキャンセル。タスクのチェックアウトと予算強制はアトミック
- **マルチ組織**: 全エンティティが会社スコープ。単一デプロイで複数会社をデータ分離したまま運用でき、シークレットのスクラブと衝突処理付きで組織 (エージェント・スキル・プロジェクト・ルーティン・課題) をエクスポート/インポートできる
- 導入は `curl -fsSLO https://paperclip.ing/install.sh` (チェックサム検証付き) または `npx paperclipai onboard --yes`。`npx paperclipai test-drive` で CEO エージェント入りの隔離テストインスタンスを起動できる。手動なら `pnpm install && pnpm dev` で API サーバーが `http://localhost:3100` に立ち、PostgreSQL は組込みで自動作成。要件は Node.js 24.11+ / pnpm 9.15+
- **テレメトリは既定で有効**。無効化は `PAPERCLIP_TELEMETRY_DISABLED=1` / `DO_NOT_TRACK=1` / 設定ファイルの `telemetry.enabled: false`、CI では自動無効
- ロードマップ上、Memory/Knowledge、Work Queues、自己組織化、CEO Chat、デスクトップアプリ、外部チケットシステム連携 (Asana/Linear/Jira) は未着手

[ソース](https://github.com/paperclipai/paperclip)

### vectorize-io/hindsight

「学習するエージェントメモリ」。会話履歴の想起に留まる既存メモリ系と異なり、記憶から信念とメンタルモデルを形成させることを狙う。MIT。

- **LongMemEval で SOTA を主張**。ベンチマーク結果は Virginia Tech の Sanghani Center および The Washington Post の研究協力者が独立再現したとしており、他社スコアはベンダー自己申告と明記。継続更新の結果は benchmarks.hindsight.vectorize.io で公開。[論文](https://arxiv.org/abs/2512.12818)
- **3操作**: `retain` (LLM で事実・時間情報・エンティティ・関係を抽出し正規化)、`recall` (セマンティック/BM25キーワード/グラフ/時間範囲の4戦略を並列実行し、RRF とクロスエンコーダで再ランク)、`reflect` (記憶を横断して深く推論し新しい結びつきを形成)
- **記憶の型**: World facts (世界についての事実)、Experiences (エージェント自身の経験)、Observations (多数の記憶から統合された証拠付きの信念。引用と証拠数を保持し、新しい証拠で*上書きではなく精緻化*される)、Mental models (観察と事実から合成された世界理解)
- **Knowledge pages**: メンタルモデルを wiki 的に整理した「バンクが自分について書く生きた文書」。読み出しは DB リードのみ (検索も LLM 呼び出しもなし) で、エージェントが毎セッション再発見せずに起動できる
- **Banks** はユーザー/エージェント/プロジェクト単位の隔離された記憶ストア。バンク間の漏洩はなく、懐疑性・字義性・共感といった **disposition traits** が reflect の推論を方向づける
- 入力言語は検出・保持され、エンティティは原表記のまま (张伟 は "Zhang Wei" にならない)。**Memory Defense** はオプトインで、retain ごとに45パターンのシークレット/PII を走査し、`[REDACTED:github_token]` へのマスクか保存前ブロックを行う
- 導入は Docker (`ghcr.io/vectorize-io/hindsight:latest`、API :8888 / UI :9999)、pip (`hindsight-api`)、Helm、または Hindsight Cloud。サーバー不要の Python 埋め込み (`hindsight-all`) もある。LLM は 25以上のプロバイダに対応し、**ChatGPT Plus/Pro・Claude Pro/Max・Cursor・GitHub Copilot のサブスクリプションは API キー不要**
- **LLM ラッパー2行**で既存エージェントに後付けできる (`wrap_openai` / `wrap_anthropic`)。LiteLLM 経由で100以上のモデルをカバー。統合は60以上 (Claude Code、Codex、Cursor、LangGraph、LlamaIndex、CrewAI、n8n、Obsidian 等)
- コーディングエージェント向けには `npx @vectorize-io/hindsight-coding-agents install all` で、git 履歴と過去セッションからリポジトリ単位のバンクを自動構築する。セットアップコマンドは無く取り込みは自動
- 全サーバーがバンクごとの **MCP エンドポイント** (`/mcp/{bank_id}/`) を既定で公開。ストレージは PostgreSQL + pgvector または Oracle AI Database 23ai

[ソース](https://github.com/vectorize-io/hindsight)

### dream-num/univer

「AIエージェント向けの Office ハーネス」を掲げる組込み型 Office SDK。表計算・文書・スライド・Base (リレーショナルテーブル)・ボード、そして近日対応の PDF を**単一ランタイム**で扱う。

- プラグインアーキテクチャ、Canvas ベースのレンダリング、数式エンジンを持ち、**ブラウザと Node.js の双方で動く単一の Facade API** を提供する。ホスト型アプリや固定 UI を強制しない
- 製品ファミリ全体でストレージと計算のランタイムを共有し、ツール間でコンテンツを合成・埋め込みでき、リンクされたデータと参照は連動して更新される。人間と AI エージェントが同じファイル上で作業する前提
- 想定用途は SaaS・社内ツール・BI ワークフロー・AI アプリケーションへの表計算/文書編集の埋め込み、ブラウザと同一アーキテクチャでのサーバーサイド処理、プリセットからの素早い立ち上げとプラグインによる機能の取捨選択
- 参考実装として、セルフホスト可能な OSS ワークスペース [univer-workspace](https://github.com/dream-num/univer-workspace) が公開されている。人間と AI エージェントが Office コンテンツを作成・共同編集・レビューする完全な実装で、SDK 統合の学習用リファレンスという位置づけ
- README は英語・簡体字/繁体字中国語・日本語・韓国語・スペイン語で提供

[ソース](https://github.com/dream-num/univer)

### NVIDIA/Model-Optimizer

量子化・プルーニング・NAS・蒸留・投機的デコード・スパース化を統合したモデル最適化ライブラリ (ModelOpt)。Apache-2.0。

- 入力は Hugging Face / PyTorch / ONNX モデル。Python API で各手法を組み合わせ、最適化済み量子化チェックポイントをエクスポートする。NVIDIA Megatron-Bridge / Megatron-LM / HF Accelerate と統合済みで、HF 向け統合エクスポート API は transformers と diffusers の双方に対応
- 出力チェックポイントは SGLang / TensorRT-LLM / TensorRT / vLLM へそのままデプロイできる
- **[2026/09/16] Qwen3.6-35B-A3B のエンドツーエンド W4A4 NVFP4 + QAD チュートリアル**を公開。NVFP4 W4A4 PTQ に量子化対応蒸留 (QAD) を組み合わせ、BF16 比で vLLM スループット最大1.30倍・チェックポイント3.1倍縮小を達成しつつ、W4A4 化で失われる精度を回復させる
- [2026/09/09] ブログ「Improving NVFP4 Accuracy with Local-Hessian Weight Scales」、[2026/08/24] 「AutoQuantize: A Fast Automatic Mixed-Precision Assignment」を公開
- [2026/08/17] Nemotron 3.5 Lightning NVFP4 を QAD で開発した事例を NVIDIA 開発者ブログで公開

[ソース](https://github.com/NVIDIA/Model-Optimizer)

## コミュニティの反応

### vectorize-io/hindsight

#### ポジティブ

> 「recall だけでなく retain/reflect で学習するメモリ層」として SOTA を主張し急上昇中 (36k★超)。Mem0 / Letta / Zep などとの比較で「chat history の限界」を指摘する文脈で注目されている — @stretchcloud [出典](https://x.com/stretchcloud/status/2104344583962505357)

> GitHub Trending で +4.5k★ を記録。「エージェントの長期記憶層」として VoiceStudio / paperclip など他のエージェントインフラと並んで紹介されている — @JamesAI [出典](https://x.com/JamesAI/status/2104339647149281400)

> 「agent memory that learns (retain/recall/reflect)」として36k★・当日+4.4k★でリストされ、memory / harness 層の重要性を説く投稿で取り上げられている — @0xal0ke [出典](https://x.com/0xal0ke/status/2104235484881015249)

> Trending ランキングで35k★・+4,259 を記録し1位。エージェントメモリの学習機能が評価されている — @goodailist [出典](https://x.com/goodailist/status/2104219273698881614)

#### 実際の使用例

該当なし

#### 批評

該当なし

### paperclipai/paperclip

該当なし (取得した投稿は Trending 共有・リポジトリ紹介・宣伝寄りの内容のみで、使用体験・評価・批評に該当するものはなし)

### dream-num/univer

該当なし

### NVIDIA/Model-Optimizer

該当なし (NVFP4 単独への言及は散見されたが、本リポジトリ・チュートリアルへの言及や使用報告は確認できず)

## ソース

- [paperclipai/paperclip](https://github.com/paperclipai/paperclip)
- [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)
- [dream-num/univer](https://github.com/dream-num/univer)
- [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
