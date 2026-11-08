---
title: "Google・Cloudflare・Vercelのエージェント向けリポが上位に"
summary: "Google製品向けのスキル集、Cloudflareのセキュリティ監査スキル、VercelのRust製ブラウザ操作CLIなど、大手企業が公開したエージェント向けリポジトリがTrending上位に並んだ。MetaはReactのデザインシステムAstryxをOSSとして公開した。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-11-09

features:
  - "cloudflare/security-audit-skill"
  - "vercel-labs/agent-browser"
  - "google/skills"
  - "milind-soni/OpenMausBot"
  - "anthropics/skills"
  - "meta/astryx"
codex_review: "個別のリポジトリより、各社がエージェントの作業手順をスキルやCLIとして配布し始めた流れが面白い。特に監査結果を別エージェントに検証させる設計は地味だが重要で、Trendingの勢いほど業界全体への影響が固まった段階ではない。"
codex_importance: 3
---

## 公式アップデート

### vercel-labs/agent-browser

Vercel Labsが公開した、AIエージェント向けのブラウザ自動化CLI。全言語Trendingの1位に入っている。Apache-2.0ライセンス。

- **仕組み**: Rust製のネイティブCLI。`snapshot` を実行すると、ページをアクセシビリティツリーに基づくコンパクトなテキストとして返し、各要素に `@e1` のような参照を付ける。エージェントは参照を指定して操作し、ページを読み直して結果を確かめる。ブラウザはコマンドをまたいで開いたままなので、1ステップが短いシェル呼び出し1回で済む
- **内部構成**: 最初のコマンドでバックグラウンドのデーモンが起動し、Chrome DevTools Protocolでブラウザを制御する。`--session` ごとに別のデーモンとブラウザが立ち上がる。ヘッドレスのブラウザは、コマンドがないまま1時間経つと閉じる
- **ブラウザの選択肢**: 既定はChrome for Testing。ほかに次の方法を選べる
  - 起動中のChromeへの接続 (`--cdp`、`--auto-connect`)
  - LightpandaまたはObscuraエンジン (`--engine`)
  - iOSシミュレーターのMobile Safari
  - クラウドのブラウザ (Browserbase、Browserless、Browser Use、Kernel、AgentCore)
- **クリックの扱い**: 対象が非表示、無効、ビューポート外、同意バナーなどの下にある場合は、成功を報告せずに失敗を返す
- **エージェント連携**: CLIのバージョンに合ったスキルを同梱する (`agent-browser skills get core` など)。skills.shから入れるスキルは、`skills get core` を読み込むよう指示するだけのスタブで、指示内容が常にインストール済みのCLIと揃う。`agent-browser mcp` でstdioのMCPサーバーとしても動く
- **主なコマンド群**: 移動と読み取り、操作、待機、キャプチャ (スクリーンショット、PDF、録画、差分)、Cookie・ストレージ・ネットワーク、タブとフレーム、デバッグとパフォーマンス (`vitals`、`react`、`a11y` など)、セッションと認証 (`auth`、`confirm`、`deny`)、ストリーミングとダッシュボード
- **インストール**: `npm install -g agent-browser` の後、初回だけ `agent-browser install` でChrome for Testingを取得する。Homebrewや `npx agent-browser open example.com` でも使える
- **対応プラットフォーム**: macOS (ARM64、x64)、Linux (ARM64、x64、glibcとmusl)、Windows (x64) のネイティブバイナリ
- **セキュリティ**: ドキュメントで認証情報の保管庫、ドメインの許可リスト、アクションポリシー、コンテンツ境界を説明している

[ソース](https://github.com/vercel-labs/agent-browser)

### cloudflare/security-audit-skill

コーディングエージェントにセキュリティ監査を行わせるスキル。全言語Trendingの2位に入っている。MITライセンス。Cloudflareのブログ記事「Build your own vulnerability harness」で紹介された脆弱性発見ハーネスの元になったスキルで、単一リポジトリ向けの出発点という位置付け。

- **6つのフェーズ**:
  1. 偵察: アーキテクチャ、信頼境界、入力面などを `architecture.md` と `coverage-ledger.json` にまとめる
  2. カバレッジに基づく調査: 台帳の単位ごとに独立した調査エージェントを割り当て、抜けを批評役のエージェントが探す
  3. 候補の検証: 候補ごとに新しい検証エージェントを用意し、反証を試みさせる
  4. 構造化出力: `confirmed`、`needs_validation`、`rejected` の記録を `findings.json` に書き、`report-schema.json` で検証する
  5. 記録の独立検証: 新しいエージェントが最終的な主張をソースと照合する
  6. レポート作成: `REPORT.md`、`FINDINGS-DETAIL.md`、`NEEDS-VALIDATION.md` を生成する
- **攻撃クラスの資料**: メモリ安全性とバイナリ、AIとLLM (プロンプトインジェクションなど)、Webプロトコルと認証、クライアントサイド、サプライチェーンとリリース、クラウドとデプロイ、RPCとメッセージング、リソース枯渇、データ分離、デスクトップ・モバイル・ローカルIPCの各分野を別ファイルで用意している
- **検証スクリプト**: 依存関係のない `validate-findings.cjs` と `validate-coverage-ledger.cjs` を同梱する
- **設計方針**: 指摘を検証するのは、発見したのとは別のエージェントにする。深刻度は影響の大きさから判断する。別の防御層で攻撃が防がれている場合は、脆弱性ではなく堅牢化の提案として扱う
- **複数回の実行**: 同じリポジトリへの実行結果は積み上がり、前回の台帳を使って抜けを狙う。同社のテストでは、1回の実行で見つかったのは、複数回の実行で見つかった脆弱性の約半分だったとしている
- **要件**: ツール使用と並列サブエージェントに対応したエージェント、Node.js、そして対象のコードを実行するためのOSレベルのサンドボックス (外部ネットワークの遮断、リソース制限、書き込み先の限定)。サンドボックスがない場合は対象コードを実行せず、`needs_validation` として残す
- **インストール**: `npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit`

[ソース](https://github.com/cloudflare/security-audit-skill)

### google/skills

Google製品向けのAgent Skills集。全言語とPythonの両方のTrendingに入っており、Pythonでは1位。Apache 2.0ライセンス。

- **収録分野**: Google Cloudの入門、複数製品を組み合わせるソリューション、AI/ML (Gemini API、Agent Platform、Genkitなど)、インフラ (GKE、Cloud Storage、Compute Engineなど)、データベースと分析 (BigQuery、AlloyDB、Spanner、Managed Airflowなど)、開発ツール (gcloud CLIなど)、監視・ロギング、Well-Architected Framework、セキュリティとID (IAM、SecOpsなど)、ホスティング (Cloud Run、Firebase)、広告 (Google Ads API、Google Mobile Ads SDKなど)、Google Analytics
- **インストール**: `npx skills add google/skills` を実行し、入れるスキル、対象エージェント、スコープ (プロジェクトまたはグローバル) を選ぶ。更新は `npx skills update`
- **プラグイン**: スキルとMCPサーバーをまとめたプラグインも同梱する
  - Claude Code: `claude plugin marketplace add google/skills` の後、`claude plugin install <plugin>@google-plugins`
  - Codex: `codex plugin marketplace add google/skills` の後、`/plugins` から入れる
  - Antigravity CLI: `agy plugin install https://github.com/google/skills/<plugin-path>`
- **関連リポジトリ**: ADK、Android、Dart、Firestore、Flutter、Google Maps Platform向けのスキルは別リポジトリで公開している

[ソース](https://github.com/google/skills)

### anthropics/skills

AnthropicがClaude向けに実装したAgent Skillsの公開リポジトリ。PythonのTrendingに入っている。Agent Skillsの標準仕様についてはagentskills.ioを参照するよう案内している。収集データではREADMEの本文が途中で切れており、収録スキルの詳細は含まれていない。

[ソース](https://github.com/anthropics/skills)

### meta/astryx

Metaが公開したオープンソースのデザインシステム。TypeScriptのTrendingの1位に入っている。現在はベータ版で、React 19以降とStyleXで作られている。MITライセンス。

- **経緯**: Meta社内で8年かけて育ち、同社で最も使われている最大のデザインシステムになったという。13,000以上のアプリで使われているとしている
- **内容**: 150以上のアクセシブルなコンポーネント、ブランド単位のテーマ、ダークモード、テンプレート、CLIをひとまとまりで提供する。テーマはneutral、butter、chocolate、matcha、stone、gothic、y2kの7種類
- **特徴**:
  - 内部の構成部品も直接エクスポートし、`swizzle` でコンポーネントのソースをプロジェクトに取り出して自分で管理できる
  - スタイルはStyleXで書かれているが、利用側はTailwind、CSS Modules、素のCSSで `className` を上書きできる
  - テーマはCSSカスタムプロパティの上書きとして定義される
  - API、ドキュメント、CLIを一体で設計し、人とAIアシスタントが同じ参照で開発できるようにしている。「AIにとって使いやすくした変更は、人にとっても使いやすかった」としている
- **パッケージ**: `@astryxdesign/core`、`@astryxdesign/cli` (コンポーネントのドキュメント、テンプレート、スキャフォールド、テーマ、codemod)、`@astryxdesign/build`、`@astryxdesign/theme-*`。チャート関連の `@astryxdesign/vega` と `@astryxdesign/charts` は `@canary` タグでのみ公開している
- **導入**: CSSのインポートとテーマプロバイダーだけで使え、ビルドプラグインやPostCSS、Babelの設定は不要。CLIはグローバルにも入れられ、プロジェクト内ではそのプロジェクトのバージョンが動く

[ソース](https://github.com/meta/astryx)

### milind-soni/OpenMausBot

複数のAIボットをチャットアプリの連絡先のように扱うデスクトップアプリ。TypeScriptのTrendingに入っている。Apache 2.0ライセンス。xAIのGrok Botに着想を得た独立プロジェクトで、旧名はOpenGrokBot。xAI、Meta、OpenAI、Manusとは無関係としている。

- **仕組み**: 各ボットの中身は、手元にインストールされた `claude`、`codex`、`grok` のCLI。既存のログインと契約をそのまま使う。`127.0.0.1` で動くハーネスサーバーがすべてのエージェントのプロセスを管理し、各CLIのプロトコルを1本のイベントストリームにまとめる。トランスクリプトや鍵は `~/.openmausbot` に保存する
- **ボットのコンピューター**: ボットごとに、クラウドのLinuxデスクトップ (Boat)、隔離されたローカルVM、または自分のPCを使わせられる。自分のPCの操作は、macOSとUbuntuのXorgで明示的にオプトインした場合だけ有効になる。Ubuntu Waylandでは安全上の理由で無効にしている
- **承認**: シェルコマンド、ファイル編集、質問は、チャット内のカードとして表示され、許可・拒否・回答を選べる
- **連携アプリ**: Composio経由でGmail、Slack、GitHub、Notion、Linearなど500以上のアプリをつなげる
- **その他の機能**: チャンネルごとの指示と作業フォルダ、発言するボットを自動で選ぶ判断モデル、Markdownファイル1つでチームを導入する機能、部署単位での共有、読み上げと音声通話 (ElevenLabs、Fish Audio、Grok、macOSの音声、ローカルのChatterbox)
- **外部からの操作**: stdioのMCPサーバーを同梱する。ボットやチャンネルの確認・作成、作業の依頼、完了待ち、モデル切り替え、中断はできるが、承認の付与、削除、認証情報、コンピューターの起動・停止は公開していない。スクリプトやCI向けにヘッドレスCLI `openmausbot` もある
- **配布**: macOS (Apple Silicon、Intel、署名・公証済み)、Windows x64 (未署名)、Ubuntu 24.04 x64 (ベータ、.debとAppImage)
- **位置付け**: 2026年に7週間のうちに公開された4つのクローズドな個人エージェント製品 (Grok Bot、Meta Muse、OpenAI dots、Cue by Manus) に対する、オープンソースの代替としている
- **注意書き**: 同プロジェクトはトークンを発行しておらず、名前を使った暗号資産とは無関係だと明記している

[ソース](https://github.com/milind-soni/OpenMausBot)

## コミュニティの反応

### google/skills

#### ポジティブ

> GitHub Trendingの上位 (9〜10位) に急上昇し、スター数が22kを超えたことが話題になっている。npxひとつで187のスキルを入れられる手軽さと、Gemini、GKE、BigQueryへの対応が評価されている (好意的) — @chinchoukou [出典](https://x.com/chinchoukou/status/2118780506238284282)、@bvsbharat [出典](https://x.com/bvsbharat/status/2118875325585391949)、@TheSoloFactory [出典](https://x.com/TheSoloFactory/status/2119396967126008307)、@lez99999 [出典](https://x.com/lez99999/status/2119150709698429156)

#### ネガティブ

> GCPを使っていない人は、コンテキストを消費するので入れないほうがよい。インストールの前にスキルの中身を確認すべきだと指摘している (中立的・実務的) — @shival [出典](https://x.com/shival/status/2119552294467379419)、@lez99999 [出典](https://x.com/lez99999/status/2119150709698429156)

### anthropics/skills

#### ポジティブ

> Anthropic公式のskillsリポジトリを「Claude Codeのチートコード」と呼び、整った実装例として筆頭に挙げて、すぐブックマークするよう勧めている。508いいねを集めた (好意的) — @rvaniaaaa [出典](https://x.com/rvaniaaaa/status/2118780233021002050)

#### ネガティブ

> 資料作成系のスキルはClaudeに最初から入っていると指摘している。GitHubから追加する場合は、同梱ファイルとCapabilitiesの設定を確認すべきで、プロンプトインジェクションやデータの持ち出しのリスクがあると注意を促している (慎重) — @anciell_x [出典](https://x.com/anciell_x/status/2119557405105389758)

#### Tips

> Frontend Design、Code Review、Code Simplifier、Skill Creator、Document Skillsの5つを優先して入れる候補に挙げ、日常のエージェント開発に直結すると解説している — @Skyer0k [出典](https://x.com/Skyer0k/status/2119510816378818600)

### milind-soni/OpenMausBot

#### ポジティブ

> iOSアプリが気に入らなかったので、OpenMausBotに移行したと報告している (好意的) — @weskcode [出典](https://x.com/weskcode/status/2119560407744762318)

### vercel-labs/agent-browser

該当なし (取得できた投稿はTrendingの通知、公式発表の引用、インストール手順の宣伝だけで、実際に使った感想や評価はなかった)

### cloudflare/security-audit-skill

該当なし

### meta/astryx

該当なし (取得できた投稿はリリースの告知、bot投稿、一般論だけだった)

## ソース

- [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)
- [agent-browser.dev](https://agent-browser.dev)
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)
- [Build your own vulnerability harness (Cloudflare Blog)](https://blog.cloudflare.com/build-your-own-vulnerability-harness)
- [google/skills](https://github.com/google/skills)
- [anthropics/skills](https://github.com/anthropics/skills)
- [meta/astryx](https://github.com/meta/astryx)
- [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
