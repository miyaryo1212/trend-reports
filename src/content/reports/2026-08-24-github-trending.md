---
title: "スキル集とハーネス最適化が上位を占める"
summary: "GitHub Trendingはエージェントの「作法」を配布するリポジトリが席巻。Matt Pocockの実務スキル集、68エージェント/286スキルを束ねるECC、コンテキスト98%削減を謳うcontext-modeが並び、TencentのAIレッドチーミング基盤も伸びた。CLI二強のcodexとclaude-codeはインストール経路の刷新が進む。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-08-24

features:
  - "mattpocock/skills"
  - "affaan-m/ECC"
  - "mksglu/context-mode"
  - "Tencent/AI-Infra-Guard"
  - "openai/codex"
  - "anthropics/claude-code"
codex_review: "作法そのものが配布物として競争力を持ち始めたのは面白いが、熱量の割に玉石混交も強い。私は context 圧縮より、地味でもスキル配布と安全監査の整備のほうが長く効く流れだと見ます。"
codex_importance: 4
---

## 公式アップデート

### mattpocock/skills

Matt Pocock が日常の実務で使っているエージェントスキル集。「vibe coding ではなく real engineering」を掲げ、GSD / BMAD / Spec-Kit のようにプロセス全体を占有する手法と対比して、小さく・改変しやすく・組み合わせ可能な設計を採る。モデル非依存。

- **二系統の配布**: Claude Code 公式マーケットプレイス経由の `claude plugins install mattpocock-skills`（読み取り専用の管理バンドルとして自動更新）と、`npx skills@latest add mattpocock/skills`（編集可能なファイルとしてリポジトリに書き込み、更新は `npx skills update` で任意のタイミング）。両方入れるとスキルが二重になるためどちらか一方を選ぶ。Codex ネイティブプラグインはロードマップ上（ADR 0002）
- **セットアップ**: リポジトリごとに `/setup-matt-pocock-skills` を1回実行し、イシュートラッカー（GitHub / Linear / ローカルファイル）、トリアージ用ラベル、ドキュメントの保存先を決める
- **user-invoked と model-invoked の分離**: ユーザーが打ったときだけ届く user-invoked スキルはオーケストレーション役、モデルが自律的に到達できる model-invoked スキルは再利用可能な規律を保持する。user-invoked から model-invoked は呼べるが、user-invoked 同士は呼べない
- **設計思想は4つの失敗モードに対応**: ①エージェントが意図と違うものを作る → `/grill-me`・`/grill-with-docs` による質問攻め（grilling session）、②冗長すぎる → `CONTEXT.md` による共有言語の構築、③コードが動かない → `/tdd` の red-green-refactor と `/diagnosing-bugs` の段階ゲート付き診断ループ、④泥団子化 → `/to-spec` と `/improve-codebase-architecture` による deep module の探索
- **主なエンジニアリング系スキル**: `ask-matt`（スキルのルーター）、`triage`、`to-tickets`（ブロッキング関係を宣言する tracer-bullet チケット化）、`implement`、`wayfinder`（1セッションに収まらない規模の作業を決定チケットの地図として管理）、`prototype`、`research`、`domain-modeling`、`codebase-design`、`code-review`（Standards 軸と Spec 軸を別サブエージェントで並列実行）、`resolving-merge-conflicts`（`--abort` は使わない）、`wizard`
- **プロダクティビティ系**: `handoff`、`teach`、`to-questionnaire`、`wait-what`（メッセージが刺さらなかった瞬間に `CONTEXT.md` の語彙で再説明させる）、`grilling`、`writing-for-agents`
- `improve-codebase-architecture` は「数日に一度回す調査であってレスキューではない」と明記されている

[ソース](https://github.com/mattpocock/skills)

### affaan-m/ECC

エージェントハーネスのパフォーマンス最適化システム。「plan → test → implement → review → verify → remember → improve」の工程をプロンプトで毎回組み立て直すのではなく、一度インストールしてエージェントの動作そのものに組み込む。MIT。

- **規模**: 68エージェント、286スキル、94のレガシーコマンドシム。加えてフック、ルール、メモリ、継続学習、AgentShield によるセキュリティスキャン
- **インストール**: Claude Code 内で `/plugin marketplace add https://github.com/affaan-m/ECC` → `/plugin install ecc@ecc`。この経路を選んだ場合、手動インストールを併用しないよう明記されている。ガイド付きパッケージセットアップは `ecc-universal` 2.2.0 で提供予定（npm は 2.1.0 時点）
- **対応ハーネス**: Claude Code が最も手厚く、Codex はサポート済みの同期パス、Cursor / OpenCode / Gemini / Zed / GitHub Copilot / Antigravity / Qwen 等は capability-limited アダプタ。機能パリティは前提にしないよう support status matrix を参照するよう案内
- **AgentShield**: プロンプト、フック、MCP 設定、権限、シークレット、エージェントファイルをスキャン
- **供給元の警告**: 公式チャネル（GitHub リポジトリ、npm の `ecc-universal` / `ecc-agentshield`、GitHub App、プラグインスラグ `ecc@ecc`、ecc.tools）以外の再アップロードやミラーは未レビューでマルウェアの可能性があるとして注意喚起
- OSS 部分は MIT のまま無償、プライベートリポジトリ向けのホスト型 GitHub App「ECC Pro」（1シート $19/月〜）とスポンサーが開発を支える構造

[ソース](https://github.com/affaan-m/ECC)

### mksglu/context-mode

AIコーディングエージェント向けのコンテキストウィンドウ最適化ツール。ツール出力をサンドボックス化して98%削減し、セッションメモリを永続化、MCP + フックで17プラットフォームにルーティングを強制する。「コンテキスト問題のもう半分」を掲げる。

- npm パッケージ `context-mode` として配布。Hacker News で1位・570ポイント超を記録したバッジを掲示
- ライセンスは ELv2（Elastic License v2）

[ソース](https://github.com/mksglu/context-mode)

### Tencent/AI-Infra-Guard

Tencent 朱雀ラボによるフルスタックの AI レッドチーミング基盤（A.I.G）。ClawScan（OpenClaw セキュリティスキャン）、Agent Scan、AI インフラ脆弱性スキャン、MCP Server / Agent Skills スキャン、ジェイルブレイク評価を統合する。

- **v4.5.2（2026-08-17）**: Skill-Scan に `.pyc` バイトコードによる回避の検知と文字コードスマグリング防御を追加、MCP-Scan は動的モードでツールをホワイトリスト化して RCE を防止、SkillJack という研究プロジェクトを新設、脆弱性ライブラリを 2,000件超の CVE ルールに拡張
- **v4.5.1（2026-07-30）**: マルチターンのジェイルブレイク攻撃4種（Many-Shot、PAIR、GOAT、ActorAttack）、Agent-Scan に OWASP 系スキル5種と web-exfiltration 検知を追加して計10スキル、MCP-Scan に4ルール
- **v4.5.0（2026-07-27）**: AI Security Skill Market 公開（公式スキル3種）、フロントエンド全面オープンソース化、Skill スキャンエンジンを9リスクカテゴリに刷新、Skill / MCP / Agent スキャンを単体 CLI 化
- **aig-skill-scan**: `pip install aig-skill-scan` で導入し CI/CD に組み込める Agent Skill セキュリティ監査ツール。SkillTrustBench の T01〜T09 分類（指示ハイジャック、メモリ汚染、リモートペイロード実行、埋め込み悪性コード、権限昇格、永続化、ツールハイジャック、脆弱な依存、安全でないコーディング）に対応
- **SkillTrustBench スコア**: Claude Opus 4.6 が F1 0.9848（Precision 0.9725 / Recall 0.9974）で首位、以下 GLM 5.1 が 0.9836、Gemini 3.5 Flash が 0.9792（FPR 0.0120 で最小）、Kimi 2.6 が 0.9780、DeepSeek v4 Flash が 0.9740
- **AI インフラスキャン**: 100を超える AI フレームワークコンポーネントを識別し、2,000件超の既知 CVE をカバー（Ollama、ComfyUI、vLLM、n8n、Triton Inference Server 等）
- Docker Compose で導入し `http://localhost:8088` で Web UI。認証機構がないため公開ネットワークへのデプロイは想定外と明記されている
- OpenClaw のチャットから `clawhub install aig-scanner` で直接呼び出すこともできる

[ソース](https://github.com/Tencent/AI-Infra-Guard)

### openai/codex

ターミナルで動作する OpenAI の軽量コーディングエージェント CLI。

- **インストーラの配信元変更**: スタンドアロンインストーラは既定で `https://releases.openai.com/codex` からダウンロードし、メタデータやアセットが取得できない場合は GitHub Releases にフォールバックする。GitHub Releases を強制するには `CODEX_INSTALLER_USE_RELEASES_OPENAI_COM` を `false`（`0` / `no` も可）に設定する
- **導入経路**: macOS / Linux は `curl -fsSL https://chatgpt.com/codex/install.sh | sh`、Windows は `irm https://chatgpt.com/codex/install.ps1 | iex`。パッケージマネージャ経由は `npm install -g @openai/codex` と `brew install --cask codex`
- **デスクトップ体験**: `codex app` を実行するか Codex App ページから利用する。IDE（VS Code / Cursor / Windsurf）向けの導入経路とクラウド版 Codex Web は別に案内される
- ChatGPT の Plus / Pro / Business / Edu / Enterprise プランでサインインして使う形が推奨。API キー利用は追加設定が必要
- Apache-2.0

[ソース](https://github.com/openai/codex)

### anthropics/claude-code

ターミナルに常駐する Anthropic のエージェント型コーディングツール。ターミナル、IDE、GitHub 上での `@claude` メンションから利用できる。

- **npm 経由のインストールが非推奨に**: README に「Installation via npm is deprecated」と明記され、推奨経路は macOS / Linux が `curl -fsSL https://claude.ai/install.sh | bash` または `brew install --cask claude-code`、Windows が `irm https://claude.ai/install.ps1 | iex` または `winget install Anthropic.ClaudeCode` に移行した。`npm install -g @anthropic-ai/claude-code` は Deprecated 表記付きで残る
- **プラグイン同梱**: リポジトリにカスタムコマンドとエージェントで機能を拡張する複数の Claude Code プラグインが含まれ、`plugins/` ディレクトリにドキュメントが置かれている
- 動作要件は Node.js 18以上。バグ報告はセッション内の `/bug` コマンドまたは GitHub Issue

[ソース](https://github.com/anthropics/claude-code)

## コミュニティの反応

上位を占めたのはいずれも「エージェントに作法を持ち込む」層のリポジトリで、mattpocock/skills と ECC には早くも置き換え・試用の報告が出た。一方 context-mode は Hacker News での話題性に対し、X 上で実使用者の声を確認できなかった。

### mattpocock/skills

#### ポジティブ

> Matt Pocock の個人スキルセットが「vibe coding」ではなく「real engineering」を強制する仕組みとして注目され、superpowers などと並んで GitHub Trending 上位に入った。 — @alexxubyte [出典](https://x.com/alexxubyte/status/2090833668826951865)

#### 実際の使用例

> mattpocock-skills を superpowers の代替として置き換えた。grilling は質問攻めでもストレスなく、CONTEXT.md の遅延生成が面白い。しばらく使ってみることにした。 — @cocojathe [出典](https://x.com/cocojathe/status/2090800995668578665)

> Reddit で見た Claude Code Skill 系リポジトリの一つとして mattpocock/skills を挙げ、実際にオン/オフを切り替えてテストし効果を検証する予定。 — @RunItFirst [出典](https://x.com/RunItFirst/status/2090606889277288536)

#### ネガティブ

該当なし（直近1週間で、実使用者による具体的な懸念・限界の指摘は確認されず。代替として superpowers が並記される程度）。

### affaan-m/ECC

#### 実際の使用例

> ECC を Claude Code に投入したら harness audit が走り、「instincts」のような人格が急に生まれたような挙動になった。 — @nulldevpi [出典](https://x.com/nulldevpi/status/2091527774892961893)

> スキルが多すぎて散らかる問題を harness 層で整理してくれるので、1人で SaaS を書くときに試してみる。 — @feikeis [出典](https://x.com/feikeis/status/2091119255651750178)

> 毎回エージェントに工程を思い出させる手間を減らせるので、plan→test→review の流れを固定して1〜2プロセスだけ先に回してみる価値がある。 — @Aoyi21 [出典](https://x.com/Aoyi21/status/2091470505693843752)

#### ネガティブ

該当なし（直近1週間で具体的な懸念・限界の指摘は確認されず）。

### mksglu/context-mode

該当なし（2026-08-16〜23 の X 投稿では、リポジトリ名・プロジェクト名を軸にした実ユーザーの使用報告や評価は確認できなかった。npm パッケージ一覧や一般的なコンテキストウィンドウ論は散見されるが、本リポジトリ固有の言及ではない）。

### Tencent/AI-Infra-Guard

#### ポジティブ

> v4.5.2 の Skill-Scan（.pyc バイトコード回避検知＋文字コードスマグリング防御）と MCP-Scan の動的 RCE 対策、2,000件超への CVE ルール拡張が Trending 入りし、AIエージェント/MCP 環境のセキュリティ需要の高まりを反映している。 — @7uanF [出典](https://x.com/7uanF/status/2091171187292254716)

> Python 製のフルスタック AI レッドチーミングツールとして Agent / Skill / MCP / ジェイルブレイクを横断スキャンでき、直近24時間で150スター増と急成長している。 — @connect24h [出典](https://x.com/connect24h/status/2091378613136584903)

#### 実際の使用例

> 多エージェント / MCP / OpenClaw のワークフローでは上線前の安全ゲートとして推奨できる。v4.5.2 の pyc・文字混同・RCE 対策は、事故が起きたときに価値が出る類の機能。 — @Aoyi21 [出典](https://x.com/Aoyi21/status/2091168516883812368)

> ローカルの vLLM / Ollama / n8n などを対象に CVE フィンガープリントを取り、CI でスキルスキャンを回す。商用環境の情報漏洩防止に使える。 — @neneqi2924 [出典](https://x.com/neneqi2924/status/2091060689410425054)

#### ネガティブ

> Tencent 製なのでそのままは使えず、コンセプトだけ取り入れて自環境に移植するのが現実的。個別診断が足りていない現場ニーズは認めるが、出自に懸念がある。 — @connect24h [出典](https://x.com/connect24h/status/2091378613136584903)

### openai/codex

#### 実際の使用例

> CLI の方がアプリより遥かにクレジット消費が少なく、長時間にわたって複数エージェントを回せる。 — @WolfSnap [出典](https://x.com/WolfSnap/status/2091609888875217294)

> Codex アプリと CLI を併用し、レビューエージェントを複数走らせてコミットごとにスレッドを生成・修正提案させるワークフローを構築した。Pro モデルで高品質なコード生成を確認。 — @ivibecode [出典](https://x.com/ivibecode/status/2090283033903669502)

#### Tips

> GitHub Releases から 0.149.0 のバイナリを直接インストールし、brew 版 codex を remove してアプリを再起動。Codex アプリの session resume で動作を確認した。 — @reishoku___ [出典](https://x.com/reishoku___/status/2091172917124190676)

> Codex から外部 CLI（agy）をスキル呼び出しで連携させる実装例。GitHub リポジトリ連携で拡張する。 — @from2001vr [出典](https://x.com/from2001vr/status/2091169822776193340)

#### ネガティブ

> CLI はエージェントコーディングの場としては根本的に不向きで、Codex のデスクトップアプリの方が UX と統合の面で優位。 — @WIscoming56281 [出典](https://x.com/WIscoming56281/status/2091623123619877325)

### anthropics/claude-code

#### ポジティブ

> Claude Code の公式プラグインでワークフローを再利用できるようになり、`/command` で即時アクティベートできる点やコミュニティプラグインがセキュリティレビュー済みで公開される点が、エンジニアリングタスクの効率化として期待されている。 — @suraj_sharma14 [出典](https://x.com/suraj_sharma14/status/2091591299178562023)

#### 実際の使用例

> 実案件の開発中に `npx skills find "design"` を叩いたら78万インストールの公式スキルが即表示された。Laravel 公式手順なども既にスキル化されており、既存スキルの豊富さに驚いた。 — @iwasaki_dev40 [出典](https://x.com/iwasaki_dev40/status/2090000823988167034)

> Anthropic 公式の「ELI5」スキルを Claude Code で即試用。`/eli5` を実行し、難しい内容の要約やマニュアル作成、生成AI研修や振り返りでの実用性を検証した。 — @aistartnavi [出典](https://x.com/aistartnavi/status/2091230277171573178)

#### Tips

> クラウド版 Claude Code を GitHub 非接続で使うワークアラウンドを発見。ダミーリポジトリから即時にセッションを作成でき、使い捨て環境として活用できる。 — @iximiuz [出典](https://x.com/iximiuz/status/2091527653446582408)

> Claude Code の security-review 機能を、手元での差分レビューと GitHub Action による自動化の両面で設定例つきで公開。 — @Joe_Biden_ja [出典](https://x.com/Joe_Biden_ja/status/2091457742674215025)

## ソース

- [GitHub Trending 全言語 / Python / TypeScript (RSS)](https://mshibanami.github.io/GitHubTrendingRSS)
- [mattpocock/skills](https://github.com/mattpocock/skills)
- [affaan-m/ECC](https://github.com/affaan-m/ECC)
- [mksglu/context-mode](https://github.com/mksglu/context-mode)
- [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)
- [openai/codex](https://github.com/openai/codex)
- [anthropics/claude-code](https://github.com/anthropics/claude-code)
