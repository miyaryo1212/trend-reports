---
title: "Claude Code v2.1.161で並列ツール改善・MCPシークレット漏洩修正"
summary: "Claude Code v2.1.161がリリースされ、並列ツール呼び出しの堅牢化、MCPコマンドのシークレット漏洩修正、OTELメトリクスのカスタムラベル対応などが追加された。コミュニティではOpus 4.8のツール呼び出しバグ報告や長時間エージェント設計論、CLAUDE.md設計パターンの深掘りが活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-04
features:
  - "Claude Code v2.1.161 OTEL_RESOURCE_ATTRIBUTESメトリクスラベル対応"
  - "Claude Code v2.1.161 claude agents進捗表示改善"
  - "Claude Code v2.1.161 /mcp未使用コネクタ折りたたみ"
  - "Claude Code v2.1.161 並列ツール呼び出し改善"
  - "Claude Code v2.1.161 Linux Fullscreenクリップボード改善"
  - "Anthropic Services Track & Partner Hub"
  - "Anthropic AI対応サイバー脅威レポート公開"
codex_review: "派手さは薄いが、シークレット漏洩修正と並列実行の堅牢化は、AIコーディングを“お試し”から“業務運用”へ一段進める地味に重い更新だ。むしろ本題は、周辺で蓄積する運用知見の厚みにある。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.161（6月2日リリース）

前日のv2.1.160に続く連続リリース。セキュリティ修正と運用改善が中心。

**メトリクス・可観測性**
- `OTEL_RESOURCE_ATTRIBUTES` の値がメトリクスデータポイントのラベルに含まれるようになり、チームやリポジトリなどカスタムディメンションでUsageメトリクスをスライス可能に

**claude agents改善**
- `claude agents` の行表示に `done/total` が追加。peek表示で最長実行タスクを確認可能に

**MCP改善**
- `/mcp` で未サインインのclaude.aiコネクタを「Show unused connectors」行に折りたたみ表示
- `claude mcp` の list/get/add で `${VAR}` 参照の展開を停止し、認証ヘッダーやURLシークレットを秘匿化。**シークレットがターミナルに表示される問題を修正**

**並列ツール呼び出し改善**
- Bashコマンドの失敗が同一バッチ内の他ツール呼び出しをキャンセルしなくなった。各ツールが独立して結果を返すように変更

**Fullscreenモード改善**
- Linuxで `wl-copy`/`xclip`/`xsel` に対応。クリップボードとPRIMARY selectionの両方にコピーし、ミドルクリックペーストに対応
- 「hold {key} for native selection」ヒントがターミナルごとに正しいキーを表示

**バグ修正**
- `forceLoginOrgUUID`/`forceLoginMethod` がサードパーティプロバイダセッション（Bedrock, Vertex, Foundry, Mantle）をブロックする問題を修正（v2.1.146のリグレッション）
- バックグラウンドサブエージェントの出力が `claude -p` のstdoutを破壊する問題を修正
- `/autofix-pr` がgit worktree内で「cannot run on the default branch」と誤報する問題を修正
- Workflow agentsの `isolation: "worktree"` がバックグラウンドセッションでファイル編集をブロックする問題を修正
- `claude agents` からディスパッチされたバックグラウンドセッションが `settings.json` のモデルではなくデーモン環境の古いモデルで起動する問題を修正
- OpenTelemetryログイベントがテレメトリ初期化前に発行されるとドロップされる問題を修正
- `EADDRINUSE` エラー（`CLAUDE_CODE_TMPDIR` が深いパスの場合）を修正
- ターミナルレンダリングパフォーマンスの改善（レイアウトエンジンのJITプロファイル安定化）
- 大規模ファイル書き込み時のレンダリングパフォーマンス改善

[GitHub Releases v2.1.161](https://github.com/anthropics/claude-code/releases/tag/v2.1.161)

### Claude Code v2.1.160（前回から継続）

前回レポートで詳報済み。セキュリティ強化（シェル起動ファイル保護、acceptEditsモード改善）、ultracodeキーワード変更などが主な変更点。

### Anthropic Services Track & Partner Hub

Claude Partner Networkに階層型パートナーシップ構造とパートナー管理ポータルを新設。MCP connector経由でClaude連携が可能。

### Anthropic AI対応サイバー脅威レポート

832件の悪意あるアカウントを分析し、MITRE ATT&CKフレームワークにマッピングした調査結果を発表。AIを悪用したサイバー脅威の実態を体系的に整理。

## コミュニティの反応

### v2.1.161 リリース・MCPシークレット修正

#### Tips

> Claude Code v2.1.161のリリースノートを解説。MCPシークレット漏洩の重大修正と並列実行の堅牢化を中心に22件の変更を整理 — @picnic [Qiita](https://qiita.com/picnic/items/59b6a4a9914470e77989)

### Opus 4.8 バグ・障害報告

#### ネガティブ

> Claude Code (Opus 4.8) で全ツール呼び出しが壊れるバグを報告。長時間・常時起動で発生し、function callの開始タグが意味不明なトークンに化ける。日本語環境で踏みやすい未修正バグと回避策を共有 — @yoshi [Zenn](https://zenn.dev/edhiblemeer/articles/claude-code-opus48-tool-corruption)

> Claude Opus 4.7・Claude Code で2件のインシデントが立て続けに発生。Opus 4.7のエラー率上昇（約28分）とClaude Code複数機能の劣化（約3時間）の全記録と教訓 — @picnic [Qiita](https://qiita.com/picnic/items/f00a29d2f314d20a8308)

### 長時間エージェント設計・ハーネス

#### Tips

> Context Anxietyと戦う: Anthropicの長時間エージェント設計。24時間動き続けるエージェントの最大の敵は「記憶喪失」であり、ハーネス設計の急所を実装思想とともに解説 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/anthropic-long-running-agent-harness-design)

> AIコーディングエージェントのための Harness Engineering とは？ セッションごとに同じ説明を繰り返す問題を構造的に解決するアプローチ — @yuuaan [Zenn](https://zenn.dev/yuuaan/articles/c74fcdb62a77ab)

### CLAUDE.md設計・チーム運用

#### Tips

> Claude Code の CLAUDE.md 設計パターン完全ガイド。「CLAUDE.mdに書いたのにClaudeが守ってくれない」問題への対策を網羅 — @K.D [Zenn](https://zenn.dev/tadkud/articles/2026-04-16_claude-md-design-patterns)

> Claude Codeをチームで運用するためのCLAUDE.md設計とカスタムエージェント分担。個人メモからチームの暗黙知へ育てる階層設計の考え方 — @こばゆう [Zenn](https://zenn.dev/siromiya/articles/2026-06-03-01-claudecode-team-agents)

> Claude Code を「補完」ではなく「運用」する。.claude/ 設計と実プロジェクトの落とし穴。設定・hooks・サブエージェントで規約違反を"物理的に"縛る運用設計 — @agotoh [Zenn](https://zenn.dev/agotoh/articles/7cf2239a76b5e7)

> CLAUDE.md と毎回のプロンプトを約670回実行して比較。CLAUDE.mdに置くと固定コスト約85トークンが上乗せされるが、キャッシュ効率で長期的に有利 — @same_shark [Zenn](https://zenn.dev/shark_same_same/articles/1b36f08d535800)

### Skills・Hooks 運用

#### Tips

> Claude Codeのスキルを95個入れていたのに、実際に動いていたのは数個だった。使われないスキルの見つけ方を解説 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/fb434ab7d0cb72bc3af2)

> Skill には生コマンドではなくラッパーを渡す。用途特化のラッパースクリプトで速度と安定性を両立 — @suba [Zenn](https://zenn.dev/suba/articles/5b5a508411488f)

> Claude Code の終了フックから claude を呼び出すとなぜ暴走するのか。SessionEndフックの無限ループ問題と、session_idによる入口側ガードの対策 — @ぐで象 [Zenn](https://zenn.dev/gudezou/articles/7e8235a27f0909)

> ClaudeCodeにCLAUDE.md・SKILL.md・スクリプト作成をブン投げる「initプロンプト」。非プログラム開発用途向け — @Higemal [Qiita](https://qiita.com/Higemal/items/2d7afa6024d2f23b6482)

### マルチAI・マルチエージェント

#### Tips

> ClaudeとCodexを同じスレッドに入れたら今年いちばん実用的なものになった話。ローカル動作のスレッド型マルチAIディスカッションアプリ「Roundtable」を紹介 — @Ash [Zenn](https://zenn.dev/ashwary/articles/2b562785bcb324)

> AIを1体で使うのをやめる。自分を「並列化」するマルチエージェント・オーケストレーション入門 — @あきらパパ [Zenn](https://zenn.dev/akira_papa/articles/22190bcd961a22)

> 4社の道具を並列で動かす運用の手引き。Claude Code・Codex・Gemini・Grokの重複排除と費用整理 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/books/claude-multi-vendor-cost-guide)

### Claude Code 実践活用

#### Tips

> Zenn Bookを多層AIレビューで作ったら、「収束」の先に実バグが残っていた話。AIが「もう直すところはない」と言った後に実レンダリング検証でブロッカーを発見 — @mine_take [Zenn](https://zenn.dev/minewo/articles/multi-agent-book-review-workflow)

> Windows + Claude Code で iOS アプリ「ベビナビ」を App Store にリリース。Windows環境でのiOSアプリ開発手順を共有 — @yukurash [Zenn](https://zenn.dev/yukurash/articles/efcd3b92f2144c)

> Claude Code × Google Sheets APIでBigQueryレポートを自動更新する実装手順 — @ウェブの便利屋 [Zenn](https://zenn.dev/web_benriya/articles/claude-code-sheets-api-bigquery-report)

> 複数端末・複数AIツール（Cursor / Claude Code）を行き来してもコンテキストを失わない作業環境を作る — @uranishi [Qiita](https://qiita.com/uranishi/items/6b38bc4e025139f7a402)

> エラー対応をAIに任せる実践テクニック（後編）。AIの「5つの嘘」を見抜くパターンとセーフティネット — @橋本 直樹 [Zenn](https://zenn.dev/naoki_hashimoto/articles/agentic-pm-02b-error-debug-2)

### Claude API・Managed Agents

#### Tips

> ant CLIでClaude Managed Agentsの定義をGit管理して自動デプロイする。YAMLでリポジトリに定義を置きGitHub Actionsから更新 — @uchunanora [Zenn](https://zenn.dev/uchunanora/articles/claude-managed-agents-versioning)

> スマホのホーム画面からClaude Managed Agentを叩く。スケジュール管理秘書としてのAgent Skillsをモバイルから活用 — @マッサン [Zenn](https://zenn.dev/acntechjp/articles/290e28f9574912)

> Anthropic APIの請求の仕組み解説。入力/出力トークン、キャッシュ、ツール定義、エージェントループなどコストに影響する要素を整理 — @Jenny MET [Zenn](https://zenn.dev/xujfcn/articles/anthropic-api-billing-claude-cost-guide)

### AI開発・学習

#### Tips

> Claude Codeおすすめ設定まとめ【2026年5月】。CLAUDE.md・settings.json・Hooks・カスタムスラッシュコマンド・モデル選択まで網羅 — @アニクマ [Zenn](https://zenn.dev/anikuma/articles/claude-code-settings-2026)

> test first for AI coding。AIにコードを書かせる開発でテストの階層化とコミット前自動監査を仕組みとして埋め込む設計 — @yukineko [Zenn](https://zenn.dev/yukinekonyan/articles/fe8277d7122352)

> Claudeを学ぶな、「仕事の言語化能力」を磨け。モデルが世代交代しても陳腐化しない学習法を提案 — @cnative_tkb [Zenn](https://zenn.dev/cnative_tkb/articles/dcc533aade4312)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
