---
title: "Claude Code拡張ツールとデザイン→コード変換が上位"
summary: "Claude Code設定CLIのclaude-code-templates、Google StitchのAgent Skills集、ターミナル制御MCPのDesktopCommanderがトレンド上位に。AIエージェントを設定・拡張・実行層で補強するツール群が並んだ。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-07-13

features:
  - "davila7/claude-code-templates"
  - "google-labs-code/stitch-skills"
  - "wonderwhy-er/DesktopCommanderMCP"
codex_review: "設定配布や実行制御も大事だが、私は今回はStitch系の“デザインを可搬なスキルにした”発想がいちばん面白いと見た。逆に端末制御MCPの熱狂はやや先走り気味で、安全設計の詰めが評価を左右しそうだ。"
codex_importance: 3
---

## 公式アップデート

本日のトレンドは、AIコーディングエージェント（とりわけClaude Code）を設定・拡張・実行する周辺ツールが上位を占めた。設定配布・デザイン変換・端末制御という3つの軸が並ぶ。

### davila7/claude-code-templates

Anthropic Claude Codeの設定・監視を行うCLIツール。エージェント、カスタムコマンド、設定、フック、MCP連携、プロジェクトテンプレートをまとめて配布する。

- **カタログ**: 100以上のエージェント/コマンド/設定/フック/MCP/スキルを `npx claude-code-templates@latest` から対話的またはピンポイントで導入
- **付随ツール**: リアルタイムのセッション監視 `--analytics`、会話モニタ `--chats`（Cloudflare Tunnel経由のリモートアクセス対応）、診断 `--health-check`、プラグイン管理 `--plugins`
- **ダッシュボード**（ベータ）: [www.aitmpl.com](https://www.aitmpl.com) でコンポーネント探索・コレクション管理・導入状況の追跡が可能
- MITライセンス。anthropics/skills や obra/superpowers など複数OSSからのコンポーネントを出典明記のうえ収録

[ソース](https://github.com/davila7/claude-code-templates)

### google-labs-code/stitch-skills

Google Stitch MCPサーバ向けのAgent Skillsライブラリ。Agent Skillsオープン標準に準拠し、Codex / Antigravity / Gemini CLI / Claude Code / Cursor など複数のコーディングエージェントで再利用できる。

- **stitch-design**: `code-to-design`（フロントエンドコード→Stitchデザイン変換）、`generate-design`、`manage-design-system`、`extract-design-md`、`extract-static-html`、`upload-to-stitch`
- **stitch-build**: `react-components`、`react-native`、`remotion`（ウォークスルー動画生成）、`shadcn-ui`
- **stitch-utilities**: `design-md`、`enhance-prompt`、`stitch-loop`（単一プロンプトからの複数ページ生成）、`taste-design`
- **導入**: プラグイン一括 (`npx plugins add`) またはスキル個別 (`npx skills add`)。利用には Stitch MCP サーバの設定が前提
- 非公式のGoogleプロダクトである旨を明記

[ソース](https://github.com/google-labs-code/stitch-skills)

### wonderwhy-er/DesktopCommanderMCP

Claude等のAIにターミナル制御・ファイルシステム検索・差分編集を与えるMCPサーバ。APIトークン課金ではなくホストクライアントのサブスクをそのまま使える点が特徴。

- **端末・プロセス制御**: 出力ストリーミング、タイムアウト/バックグラウンド実行、実行中プロセス（SSH・DB・開発サーバ）との対話、プロセス一覧/kill
- **ファイル・文書操作**: テキストに加え Excel(.xlsx/.xls/.xlsm)、PDF、DOCX のネイティブ読み書き。再帰的ディレクトリ列挙、末尾読み（負のオフセット）、コード検索（vscode-ripgrep）
- **インメモリ実行**: Python/Node.js/R をファイル保存なしで実行し、CSV/JSON/Excel を即分析
- **リモートAI制御**: [Remote MCP](https://mcp.desktopcommander.app) で ChatGPT / Claude web などからローカル端末を操作。macOS/Windows向けデスクトップアプリ（ベータ）も提供
- **セキュリティ**: シンボリックリンク越え防止、コマンドブロックリスト、Dockerによるサンドボックス。ただし公式も「terminalコマンドが許可ディレクトリをバイパスしうる」と警告

[ソース](https://github.com/wonderwhy-er/DesktopCommanderMCP)

## コミュニティの反応

本日のリポジトリはいずれもトレンド入り直後で、X上の反応は紹介・解説が中心。実使用に基づく感想・批評が確認できたのは stitch-skills と DesktopCommanderMCP に限られた。

### davila7/claude-code-templates

該当なし（直近1週間で、独立した実ユーザーによる感想・評価投稿は確認されず。作者本人・宣伝寄り・低エンゲージメントの言及が中心）。

### google-labs-code/stitch-skills

#### ポジティブ

> Google Labsがオープンソース化したStitch MCP向けAgent Skills集がTrendingで急上昇。Claude Code / Cursor / Gemini CLI など複数エージェントで再利用できるスキル集として注目。 — @0xProbabillity [出典](https://x.com/0xProbabillity/status/2076408002790191532)

> 設計→コード変換のチェーンを「標準部品化」した点に価値。デザインシステム管理やReactコンポーネント生成をエージェント間で共有できる。 — @Aoyi21 [出典](https://x.com/Aoyi21/status/2076194851608002933)

#### Tips

> `stitch-loop` は「毎回完了後に次のタスクをbatonファイルに書き込む」仕組みでAIの記憶頼みを解消。7スキルすべてでなく2〜3個だけ選んで使うのが実用的。 — @SandboxSlash [出典](https://x.com/SandboxSlash/status/2076158112080486517)

> Stitchデザインの React/RN 変換に加え、静的コンテンツのモック化やデータセットからの新画面生成も可能。Codex CLI や npx で簡単に導入できる。 — @N0V4Dev [出典](https://x.com/N0V4Dev/status/2076109797930279255)

#### ネガティブ

> 各スキルにファイルシステム・ネットワークアクセス権限があり、`stitch::code-to-design` は実行中アプリのHTMLを抽出してStitchへアップロードするためセキュリティ注意が必要。 — @disismohi [出典](https://x.com/disismohi/status/2076022798254801376)

### wonderwhy-er/DesktopCommanderMCP

#### ポジティブ

> MCPがAIエージェントに実質的なデスクトップ制御を与える事実上の標準になりつつあり、API課金なしで既存サブスクだけでファイル/端末操作ができる点が急上昇の主因。 — @0x_Missy22 [出典](https://x.com/0x_Missy22/status/2076080204385280143)

> GitHub Trendingで1日900★超を記録。Claudeを「提案だけ」から「直接実行」へ移行させる実行層として注目。 — @0xProbabillity [出典](https://x.com/0xProbabillity/status/2076022210532106587)

#### 実際の使用例

> Anthropic公式の無制限アクセスオプション削除後に代替として採用し、Claudeにファイル/端末制御を与える実用例として言及。 — @MatheusProl [出典](https://x.com/MatheusProl/status/2074510266574799014)

#### ネガティブ

> デスクトップ制御は便利だが、公式ドキュメントでも「terminalコマンドが許可ディレクトリをバイパス可能」と警告されており、サンドボックス必須と指摘。 — @Christian_Kuri [出典](https://x.com/Christian_Kuri/status/2076088396297183232)

## ソース

- [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)
- [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)
- [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
