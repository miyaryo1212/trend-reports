---
title: "AWS・NVIDIA・Cloudflareがエージェント基盤を公開"
summary: "AWS公式のエージェント向けツールキット(GA)、NVIDIAのエージェント用安全ランタイムOpenShell、Cloudflareのセキュリティ監査スキルが全言語Trendingの上位に並んだ。大手各社がエージェントの権限管理・隔離・監査に関わるツールを相次いで出している。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-10-26

features:
  - "aws/agent-toolkit-for-aws"
  - "NVIDIA/OpenShell"
  - "cloudflare/security-audit-skill"
  - "google-gemini/gemini-cli"
  - "makecindy/cindy"
  - "Nutlope/hallmark"
  - "luongnv89/claude-howto"
codex_review: "エージェントの能力競争から、権限や実行環境をどう縛るかへ重心が移り始めたのは健全で、特に独立検証と監査ログは地味だが重要。ただしTrendingの熱量は実運用での信頼性を証明せず、各社の囲い込み競争も透けて見える。"
codex_importance: 4
---

## 公式アップデート

### cloudflare/security-audit-skill

Cloudflareが公開した、コーディングエージェントにセキュリティ監査をさせるスキル。全言語Trendingに入っている。MITライセンス。同社のブログ記事「Build your own vulnerability harness」で紹介した脆弱性探索ハーネスは、このスキルを出発点にしている。ハーネスはその後、多段構成で全社規模のシステムに発展しており、このスキルは単一リポジトリ向けの出発点という位置付け。

- **6フェーズの監査**:
  1. 偵察: アーキテクチャ、信頼境界、入力面を `architecture.md` と `coverage-ledger.json` にまとめる
  2. カバレッジ主導の探索: ledgerの単位ごとに隔離した探索役を割り当てる。カバレッジ批評役が抜けを探す
  3. 候補の検証: 候補ごとに新しい検証役を立て、反証を試みさせる
  4. 構造化出力: `findings.json` に記録し、`report-schema.json` で検証する
  5. 独立した記録検証: 新しいエージェントが最終的な主張を確認する。記録を大きく差し替えた場合は、さらに別の検証役を通す
  6. 報告: 検証済みの記録から `REPORT.md`、`FINDINGS-DETAIL.md`、`NEEDS-VALIDATION.md` を生成する
- **判定は3種類**:
  - `confirmed`: ソースの追跡が完全で、観測結果が確認できている
  - `needs_validation`: 未解決の事実が1点特定されている。重大度は付けない
  - `rejected`: 反証された候補
- **攻撃クラス別のガイド**: AI/LLM (プロンプトインジェクション、エージェント/ツール)、メモリ安全性・バイナリ、Web・認証、クライアントサイド、サプライチェーン、クラウド、RPC・メッセージング、リソース枯渇、データ分離、デスクトップ・モバイル・ローカルIPCごとに別ファイルを用意している
- **検証ツール**: 依存ゼロの `validate-findings.cjs` と `validate-coverage-ledger.cjs` を同梱している
- **導入**: `npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit` で入れる。ユーザー単位で入れる場合は `--global` を付ける
- **要件**: ツール使用と並列サブエージェントに対応したモデル、Node.js、OSが強制するサンドボックスが必要。サンドボックスは外部ネットワークの遮断と書き込み先の制限を満たすこと。用意できない場合、対象コードは実行せず、該当する候補は `needs_validation` のまま残す
- **設計方針**: 発見したエージェントには自分の発見を検証させない。多層防御の一部が欠けているだけなら脆弱性ではなく、ハードニングの指摘として扱う。同社のテストでは、1回の実行で見つかったのは、複数回実行して見つかった脆弱性全体の約半分だった。複数回の実行は結果が積み上がる形で、前回の記録を使って未カバー部分を狙う

[ソース](https://github.com/cloudflare/security-audit-skill)

### NVIDIA/OpenShell

自律AIエージェントを安全に動かすための非公開ランタイム。全言語Trendingに入っている。Apache-2.0ライセンス。

- **0.1.x**: リリースが定期化された。新しい隔離プリミティブ、拡張面の拡大、新APIを含み、0.1.0向けのアップグレードガイドが出ている
- **カーネルレベルの強制**: 各エージェントを隔離したサンドボックスで動かす。ファイルアクセス、システムコール、ネットワーク接続のすべてをポリシーと照合する。エージェントは本物の認証情報を見られず、OpenShellが承認済みの宛先への通信にだけ付与する
- **形式検証によるポリシーチェック**: ポリシー変更を適用する前に、新しく許可されるアクセスを形式検証で洗い出す。「認証情報付きで新しいホストに到達できる」といった危険な変更は、人間のレビューが済むまで保留する
- **動作環境**: Linux、Apple SiliconのmacOS、WSL 2上のWindows (実験的)。Docker、Podman、ホスト仮想化のいずれかが必要。KubernetesにはHelmでゲートウェイをデプロイできるが、CNIが `NetworkPolicy` を強制できる必要がある
- **導入**: インストールスクリプトでCLIとローカルゲートウェイを入れ、`openshell sandbox create` を実行する。チュートリアルでは、OpenRouterの無料モデルを使うOpenCodeを動かす
- **SDKとスキル**: SDKはPython、TypeScript、Go、Rust向け。エージェント向けスキルは `npx skills add NVIDIA/OpenShell` で導入できる
- **テレメトリー**: 匿名テレメトリーを収集する。`OPENSHELL_TELEMETRY_ENABLED=false` で無効化でき、ビルド時に除外することもできる

[ソース](https://github.com/NVIDIA/OpenShell)

### aws/agent-toolkit-for-aws

AWSが公式にサポートする、AIエージェント向けのMCPサーバー、スキル、プラグイン集。ステータスはGA。全言語とPythonの両方のTrendingに入っている。Apache-2.0ライセンス。

- **対応エージェント**: Claude Code、Codex、Cursor、Devin、Kiro、fx。AWS CLIからも `aws configure agent-toolkit` で使える
- **Claude Code**: 公式マーケットプレイス `claude-plugins-official` に掲載されている。`/plugin install aws-core@claude-plugins-official` などで導入する
- **プラグイン**:
  - `aws-core`: サービス選定、CDK/CloudFormation、サーバーレス、コンテナ、課金、デプロイなど
  - `aws-agents`: BedrockとAgentCoreでのエージェント構築
  - `aws-data-analytics`: S3 Tables、Glue、Athena
  - `aws-agents-for-devsecops`: AWS DevOps AgentとSecurity Agentを使い、インシデント調査、脆弱性スキャン、ペネトレーションテストを行う
  - `aws-startup-advisor`: スタートアップ向けの構成助言。Azure、GCP、Herokuからの移行や、OpenAI・Geminiのモデル呼び出しをBedrockへ移す作業にも対応する
- **AWS MCP Server**: マネージドのMCPサーバー。1つのエンドポイントから300以上のAWSサービスのAPIを呼べる。隔離環境でPythonスクリプトを実行でき、ドキュメントも検索できる。ドキュメント検索は認証なしで使える
- **AWS Labsとの関係**: 2025年からAWS Labsで公開してきたMCPサーバーやスキルの後継と位置付けている。後継を勧める理由として、AWSは次の3点を挙げている
  - エージェントの操作と人間の操作を区別するIAM条件キー。たとえば、ユーザーのロールに書き込み権限があっても、MCP経由では読み取りだけを許すポリシーを書ける
  - すべてのリクエストを対象にしたCloudWatchメトリクスとCloudTrail監査ログ
  - エンドツーエンドで評価済みのスキル
- AWS Labs側のツールも引き続き動作し、優れたものは順次このツールキットへ移す

[ソース](https://github.com/aws/agent-toolkit-for-aws)

### google-gemini/gemini-cli

Gemini CLIがTypeScriptのTrendingに再び入った。READMEの冒頭に次の注記がある。

- 無料枠とGoogle Oneの利用者向けには、2026年6月18日にAntigravity CLIへ置き換えられた
- Gemini 4 Argonには最適化されていない。Gemini 4 ArgonやGeminiの最新モデルでコーディングするなら、Antigravity CLIを使うよう案内している
- リリースは3系統: preview (毎週火曜UTC 23:59)、stable (毎週火曜UTC 20:00)、nightly (毎日UTC 00:00)

[ソース](https://github.com/google-gemini/gemini-cli)

### makecindy/cindy

オープンソースのAIエージェントのクライアントで、デスクトップ版とモバイル版がある。TypeScriptのTrendingに入っている。Apache-2.0ライセンス。

- **ハーネス**: 最初に対応したのはClaude CodeとCodexで、独自ハーネスも開発中。タスクの途中でハーネスやモデルを切り替えても、ワークスペース、メモリ、スキル、ツールは引き継がれる。1つのタスクの計画、並列実行、レビューを、それぞれ異なるハーネスとモデルの組み合わせで担当させることもできる
- **操作対象**: ブラウザ、PC、スマートフォンを操作できる。IMやスケジュールからも仕事を受け付ける
- **モデルの調達方法**: Cindyの公式サービス (従量課金)、すでに契約しているClaude Code/CodexのCoding Plan、自前のAPIキー、ローカルモデルから選べる
- **構成**: pnpmのモノレポで、Electron製のデスクトップ版 (`apps/desktop`) とExpo製のモバイル版 (`apps/mobile`) を含む。バックエンドは別リポジトリで、公開されていない
- **サインインなしの利用**: 「Skip Sign-In」を選ぶとローカルエージェントだけで使える。この場合、サーバー側の機能は使えない
- **テレメトリー**: 公式ビルドはTapDBで利用統計を取るが、チャット内容やファイル内容は収集しないとしている。ソースからビルドすれば分析を外せる

[ソース](https://github.com/makecindy/cindy)

### Nutlope/hallmark

Together AIが作った、AI生成らしい見た目を避けるためのデザインスキル。Claude Code、Codex、Cursor、OpenCodeで使える。全言語Trendingに入っている。

- **v2の新機能**:
  - テーマが48種類になった。各テーマは紙、書体、色、コンポーネントを含む素材として定義され、完成ページのサンプル画像が付く
  - ページの目的から構成を決める。予約ページなら予約、ショップなら購入が主目的になる
  - 指示文だけからページを設計するカスタムモードを追加した
  - URL、開発サーバー、アプリを指定すると、スクリーンショットを自動で取り込む
  - オープンライセンスの写真755枚を収録し、使った写真のクレジットをページに入れる
  - `/hallmark redesign <path>` は内容と配線を保ったままページを作り直す。`/hallmark audit <path>` は問題を報告するだけで、変更しない
- **lint**: 実ブラウザでページを確認し、機械的に見える特徴を検出する。例として、見出しの上の小見出し、字間を広げた大文字ラベル、見出しの中の1語だけの色付け、ページ末尾の定型的なメール登録欄などを挙げている。最後は、作業履歴を持たない新しいコンテキストのレビュワーが判定する
- **チェックの3段階**:
  - Floor: 違反したら出荷しない (コントラスト、フォーカス、捏造した事実、スマホ表示の崩れなど)
  - Reflex: モデルが陥りがちな既定パターン。理由を記録すれば例外にできる
  - Finish: 仕上げの細部。出荷は止めない

[ソース](https://github.com/Nutlope/hallmark)

### luongnv89/claude-howto

Claude Codeの使い方を図解とコピペ用テンプレートで学ぶガイド。PythonのTrendingに入っている。MITライセンス。

- **内容**: スラッシュコマンド、メモリ、チェックポイント、CLI、スキル、フック、MCP、サブエージェント、高度な機能、プラグインの10モジュール。全部を終えるのに11〜13時間かかる想定
- **バージョン**: v2.1.302で、2026年10月時点のClaude Codeに合わせている
- **自己診断**: `/self-assessment` と `/lesson-quiz [topic]` で理解度を確認できる
- **言語**: 英語、ベトナム語、中国語、ウクライナ語、日本語のREADMEがある。`scripts/build_epub.py` でEPUB版も作れる

[ソース](https://github.com/luongnv89/claude-howto)

## コミュニティの反応

### cloudflare/security-audit-skill

#### ポジティブ

> GitHub Trendingで1位になった。24時間で2,874スターを獲得し、累計は45,815スター。6フェーズの独立した検証と機械可読な出力が注目されている (好意的) — @trending_repos [出典](https://x.com/trending_repos/status/2114328566641082546)

#### Tips

> 社内でこのスキルを使い、任意のコードベースを監査してPDFレポートを出すエージェントアプリを作ったと報告している — @leoliuv [出典](https://x.com/leoliuv/status/2114467088786186636)

> 実在するオンラインストアの決済・ログインのコードに30のエージェントを走らせ、leads (要検証) 15件、confirmed 0件という結果だった。`needs_validation` の出力があると人間が確認しやすいと評価している — @raja_sudireddy [出典](https://x.com/raja_sudireddy/status/2114447152663699550)

#### ネガティブ

> 1回の実行では脆弱性全体の約半分しか見つからないため、複数回の実行と独立した検証が欠かせない。これを「落とし穴」として挙げている (中立的) — @Techboy_Wien [出典](https://x.com/Techboy_Wien/status/2114379292410855750)

> 外部ネットワークを遮断するOSレベルのサンドボックスが必須で、用意できなければ候補が `needs_validation` のまま残る点を制約として指摘している (中立的) — @raja_sudireddy [出典](https://x.com/raja_sudireddy/status/2114447152663699550)

### Nutlope/hallmark

#### ポジティブ

> GitHub Trendingで取り上げられ、AI生成ページのテンプレート臭を消すツールとして紹介されている — @github_trendjp [出典](https://x.com/github_trendjp/status/2114378623339864348)

> AIが作るページがどれも同じに見える問題を解決するデザインスキルとして、「今日のGitHubでの発見」に挙げている (好意的) — @sunmughans [出典](https://x.com/sunmughans/status/2114379459545682285)

#### Tips

> 週報ページにsloplintをかけたところ、紫から青へのグラデーションや小さなラベルなど、AIっぽさの原因を具体的に指摘されて参考になったと報告している — @yhwangl [出典](https://x.com/yhwangl/status/2114484975760253299)

> 典型的なAI風ランディングページに適用し、グラデーション、全大文字のラベル、「Supercharge」という表現など18件の不合格を検出した。静的チェックだけでも役に立ったと詳しく共有している — @DegenOfWallSt [出典](https://x.com/DegenOfWallSt/status/2114463556397850792)

#### ネガティブ

> ブラウザでのチェックにはpuppeteer-coreとChromeが必要で、環境によっては静的チェックしか動かない。Impeccableと機能が重なるので、どちらか一方で足りるとも指摘している (中立的) — @DegenOfWallSt [出典](https://x.com/DegenOfWallSt/status/2114463556397850792)

### aws/agent-toolkit-for-aws

該当なし (取得できた投稿はリポジトリの紹介と機能概要の共有だけで、実際に使った感想や評価はなかった)

### NVIDIA/OpenShell

該当なし (取得できた投稿はニュースの共有と概要説明が中心で、実際に使った感想や評価はなかった)

### google-gemini/gemini-cli

該当なし (Antigravity CLIへの置き換えやGemini 4 Argon非対応に触れた、実際の使用感の投稿はなかった)

### makecindy/cindy

該当なし (取得できた投稿はTrendingの共有とリポジトリ紹介だけだった)

### luongnv89/claude-howto

該当なし

## ソース

- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)
- [Build your own vulnerability harness (Cloudflare Blog)](https://blog.cloudflare.com/build-your-own-vulnerability-harness)
- [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell)
- [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws)
- [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- [makecindy/cindy](https://github.com/makecindy/cindy)
- [Nutlope/hallmark](https://github.com/Nutlope/hallmark)
- [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)
- [GitHub Trending RSS](https://mshibanami.github.io/GitHubTrendingRSS)
