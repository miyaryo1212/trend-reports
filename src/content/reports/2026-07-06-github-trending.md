---
title: "Codex×Claude Code連携とトークン圧縮が急上昇"
summary: "OpenAI公式のCodex plugin for Claude Codeがトレンド1位を記録し、異なるAI同士の相互レビュー分業が話題に。応答を圧縮するcaveman、自律AIペンテストのstrix、ブラウザ操作系エージェント2種、HarvardのMLシステム教科書も並んだ。"
importance: 3
channel: "GitHub急成長リポ"
channelId: "github-trending"
date: 2026-07-06

features:
  - "openai/codex-plugin-cc"
  - "JuliusBrussee/caveman"
  - "usestrix/strix"
  - "alibaba/page-agent"
  - "ChromeDevTools/chrome-devtools-mcp"
  - "harvard-edge/cs249r_book"
codex_review: "Codex×Claudeの相互レビューは、単なる話題づくりでなく「AIを別のAIで監督する」運用の定着を感じさせて面白い。一方でcaveman的な節約術が同列に伸びるあたり、業界がまだ性能競争よりコスト最適化に強く縛られているのも見える。"
codex_importance: 4
---

## 公式アップデート

本日のトレンドは、AIコーディングエージェント（とりわけClaude Code）を拡張・最適化するツール群が上位を占めた。エージェント間連携・トークン効率・ブラウザ制御という3つの軸が並ぶ。

### openai/codex-plugin-cc

Claude Code内からCodexを呼び出し、コードレビューやタスク委譲を行うOpenAI公式プラグイン。「別プロバイダーのAIによるレビュー」を1ターミナルで実現する。

- **主要スラッシュコマンド**: `/codex:review`（読み取り専用の通常レビュー）、`/codex:adversarial-review`（設計判断・トレードオフに切り込むステアリング可能な批判的レビュー）、`/codex:rescue`（バグ調査・修正をCodexに委譲）、`/codex:transfer`（Claude Codeセッションを永続Codexスレッドへ移送）
- **バックグラウンド実行**: `--background` / `--wait` / `--resume` に対応し、`/codex:status`・`/codex:result`・`/codex:cancel` でジョブ管理
- **動作要件**: ChatGPTサブスク（Freeを含む）またはOpenAI APIキー、Node.js 18.18以降。ローカルのCodex CLI／app serverと認証状態をそのまま利用
- **オプションのレビューゲート**: `Stop` フックでClaudeの応答に基づくCodexレビューを走らせ、問題があれば停止をブロックできる（使用量を急速に消費しうるため注意喚起あり）

[ソース](https://github.com/openai/codex-plugin-cc)

### JuliusBrussee/caveman

エージェントの返答を"原始人語"風に圧縮し、出力トークンを平均65%削減するClaude Code等向けスキル／プラグイン。コード・コマンド・エラーはバイト単位で保持し、言い回しだけを削る設計。

- **6段階のレベル**: `lite` / `full`（既定）/ `ultra` / `wenyan`（古典中国語）などを `/caveman <level>` で切替。言語は保持し「スタイルのみ」を圧縮
- **付随コマンド**: `/caveman-commit`（Conventional Commit）、`/caveman-review`（1行PRコメント）、`/caveman-compress <file>`（CLAUDE.md等のメモリファイルを圧縮し入力トークンを継続削減）、MCP記述を圧縮する `caveman-shrink`
- **正直な但し書き**: 削減対象は出力トークンのみで、スキル自体が毎ターン約1〜1.5kの入力トークンを追加。短いタスクでは差し引きマイナスになりうると明記
- 30以上のエージェント（Claude Code / Codex / Gemini / Cursor / Cline / Copilot 等）に対応

[ソース](https://github.com/JuliusBrussee/caveman)

### usestrix/strix

PoC（概念実証）による検証まで自律的に行うAIペネトレーションテストエージェントのOSS。静的解析の誤検知を避け、実際に脆弱性を突く動的検証を志向する。

- **フルツールキット**: 偵察・エクスプロイト・検証を一式提供。HTTPインターセプトプロキシ（Caido）、ブラウザ攻撃、Pythonサンドボックスによるカスタムエクスプロイト実行
- **マルチエージェント編成**: recon／exploitation／post-exploitationに特化したAIエージェントが協調・並列動作
- **CI/CD統合**: GitHub Actionsでプルリクエストごとにスキャン可能。CIでは変更ファイルへ自動スコープ、脆弱性検出時は非ゼロ終了
- Apache 2.0。「所有または許可を得たアプリのみをテストすること」と明記

[ソース](https://github.com/usestrix/strix)

### alibaba/page-agent

自然言語でWeb UIを操作する、ページ内蔵型JavaScript GUIエージェント。Alibaba発。

- **スクショ不要**: マルチモーダルLLMや特別な権限を必要とせず、テキストベースのDOM操作で完結
- **容易な統合**: ブラウザ拡張／Python／ヘッドレスブラウザ不要。`<script>` 1行、または `npm install page-agent` で導入し、`await agent.execute('Click the login button')` のように実行
- **BYO-LLM**: 任意のLLMを持ち込み可能。複数ページ用のオプションChrome拡張とMCPサーバ（Beta）も提供
- browser-useのDOM処理・プロンプトを基盤とし、クライアント側のWeb強化用途に設計。MITライセンス

[ソース](https://github.com/alibaba/page-agent)

### ChromeDevTools/chrome-devtools-mcp

コーディングエージェントにChrome DevToolsの機能（性能計測・デバッグ・自動化）を提供する公式MCPサーバ。

- **主な機能**: パフォーマンストレースの記録とインサイト抽出、ネットワーク解析・スクショ・コンソールメッセージ（ソースマップ付きスタックトレース）、Puppeteerによる信頼性の高い自動化
- **導入**: `npx chrome-devtools-mcp@latest` をMCP設定に追加。基本操作向けの `--slim` モード、Claude Codeではスキル同梱のプラグイン形式も選択可
- **対応クライアント**: Claude Code / Codex / Cursor / Copilot / Gemini CLI / Antigravity など多数
- 入力自動化・ナビゲーション・エミュレーション・ネットワーク・デバッグ・メモリ・拡張の各カテゴリに多数のツールを収録

[ソース](https://github.com/ChromeDevTools/chrome-devtools-mcp)

### harvard-edge/cs249r_book

「Machine Learning Systems」— MLシステム工学の統合カリキュラム／教科書。2026年にMIT Pressから書籍化予定。

- **単一リポジトリ＝カリキュラム**: 2巻構成の教科書（Vol I: 単一マシン、Vol II: 分散・大規模）に加え、自作MLフレームワーク「TinyTorch」、インタラクティブLabs、ハードウェアキット、インフラ規模を推論するシミュレータ「MLSys·im」、面接演習「StaffML」を同梱
- **狙い**: モデル単体でなく、データ取り込み・実シリコン上の制約・信頼性ある推論までを含む「AIエンジニアリング」を独立分野として確立すること
- **目標**: 本年に10万人、2030年までに100万人の学習者がMLシステムを習得すること。CC-BY-NC-SA 4.0

[ソース](https://github.com/harvard-edge/cs249r_book)

## コミュニティの反応

本日のリポジトリ群の多くはトレンド入り直後で、X上の反応は紹介・共有が中心。実使用に基づく感想・批評が確認できたのは codex-plugin-cc と caveman に限られた。

### openai/codex-plugin-cc

#### ポジティブ

> 異なるAI（Claude vs Codex）で相互レビューできる公式ブリッジが登場し、コンテキストスイッチなしのマルチエージェントワークフローが話題に。自己レビューより信頼性が高い点が評価されている。 — @Voxyz_ai [出典](https://x.com/Voxyz_ai/status/2073785538348278074)

> 「Claudeが計画・Codexが実行/レビュー」という分業が簡単に実現でき、GitHub Trending 1位を記録。Fable 5で上位計画、Codexで実行という役割分担が実用的と評価。 — @wei_wang [出典](https://x.com/wei_wang/status/2073881058177855762)

#### 実際の使用例

> 公式プラグイン導入後、Claude Code内で `/codex:review` を直接実行。「Claudeが計画 → Codexがレビュー・救済」というフローを1ターミナルで実現できたと共有。 — @CJF077 [出典](https://x.com/CJF077/status/2073904876757877082)

> Codexプラグインに触発され、Claude→Cline風の委譲プラグインを自作。トークン節約と委譲の利便性を実際に確認したと報告。 — @durniplot [出典](https://x.com/durniplot/status/2073903454594924885)

### JuliusBrussee/caveman

#### ポジティブ

> GitHub Trending上位常連で1日900★超のペース。コード・エラーはそのままに言い回しだけを削る設計と、正直なトークン制限の明記が、コスト・待ち時間削減ニーズに刺さっている。 — @k_koga555 [出典](https://x.com/k_koga555/status/2073185938562527263)

> 月10,000ルピー超のClaude課金をCaveman導入で約60%削減。「GenAIエンジニアとして2026年最高ROIの発見。技術的内容を保ちつつ75%近く圧縮」。 — @AI_by_yash [出典](https://x.com/AI_by_yash/status/2072747326251372964)

#### 実際の使用例

> `/caveman lite` をレビュー返答や進捗報告に適用し、React error boundary例で3454→456トークンに削減。Graphifyと併用で「巨大なゲームチェンジャー」と評価。 — @ViperMaree [出典](https://x.com/ViperMaree/status/2073895445328277631)

#### ネガティブ

> 出力65%削減は事実だが、短いタスクでは入力トークン増加で逆にコスト増になる場合あり。「~65%は出力のみ。Graphify併用推奨」。 — @ViperMaree [出典](https://x.com/ViperMaree/status/2073851863510982779)

> 「入れると劣化する」という品質懸念がSNSで散見され、lite/full/ultraモードの切替や設定ファイル圧縮との併用が推奨される。丁寧さを求める用途では代替が必要との声。 — @connect24h [出典](https://x.com/connect24h/status/2072887928775377149)

### usestrix/strix

#### ポジティブ

> AIエージェントによる動的PoC検証＋CI/CD統合がセキュリティ界隈で注目。「Open-source AI penetration testing tool to find and fix your app's vulnerabilities」としてTrending入りを紹介。 — @cyb3rops [出典](https://x.com/cyb3rops/status/2071622876436787532)

※実使用レポートや批評は確認されず、ツール紹介・Trending言及が中心。

### alibaba/page-agent

該当なし（直近1週間のX投稿はリポジトリ紹介・機能説明・star数報告が中心で、実使用体験・批評は確認できず）。

### ChromeDevTools/chrome-devtools-mcp

該当なし（直近1週間で、実ユーザーによる使用感想・評価の投稿は確認されず。公式MCPの宣伝・Star数言及・設定手順が中心）。

### harvard-edge/cs249r_book

該当なし（直近7日間のX投稿はリポジトリ紹介・宣伝・トレンド通知系が中心で、実使用体験・感想は確認できず）。

## ソース

- [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)
- [usestrix/strix](https://github.com/usestrix/strix)
- [alibaba/page-agent](https://github.com/alibaba/page-agent)
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)
- [GitHub Trending RSS](http://mshibanami.github.io/GitHubTrendingRSS)
