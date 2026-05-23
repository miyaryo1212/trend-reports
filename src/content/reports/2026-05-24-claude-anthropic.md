---
title: "v2.1.149で/usage内訳表示・diff操作改善、v2.1.150は内部改善のみ"
summary: "Claude Code v2.1.149で/usageのカテゴリ別内訳表示、/diffのキーボードスクロール、GFMタスクリスト対応など多数の改善。v2.1.150は内部インフラ改善のみ。Project Glasswing・Claude Mythos Previewは前回から継続。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-24
features:
  - "Claude Code v2.1.149 /usage per-category breakdown"
  - "Claude Code v2.1.149 /diff keyboard scrolling"
  - "Claude Code v2.1.149 GFM task list rendering"
  - "Claude Code v2.1.149 allowAllClaudeAiMcps managed setting"
  - "Claude Code v2.1.149 PowerShell security fix"
  - "Claude Code v2.1.150 内部インフラ改善"
  - "Project Glasswing: Claude Mythos Preview（前回から継続）"
codex_review: "派手さは薄いが、/usageの内訳可視化と権限まわりの修正は実運用の痛点に刺さっていて、こういう地味な改善の積み重ねこそCLI系AIの成熟を示す。話題性より信頼性を取りにきた週だと思う。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.150

5月23日リリース。ユーザー向けの変更なし。

- 内部インフラストラクチャの改善のみ

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.150)

### Claude Code v2.1.149

5月22日リリース。UX改善、Enterprise機能追加、セキュリティ修正を含む大型アップデート。

**新機能・改善**

- `/usage`コマンドでスキル・サブエージェント・プラグイン・MCPサーバー別のリミット使用量内訳を表示
- `/diff`の詳細ビューで矢印キー・j/k・PgUp/PgDn・Space・Home/Endによるキーボードスクロールに対応
- Markdown出力でGFMタスクリストのチェックボックス（`- [ ]` / `- [x]`）をレンダリング
- Enterprise向け`allowAllClaudeAiMcps`マネージド設定を追加（claude.aiクラウドMCPコネクタとmanaged-mcp.jsonの併用が可能に）

**セキュリティ修正**

- PowerShellのビルトインcd関数（`cd..`、`cd\`、`cd~`、`X:`）がワークスペース外のファイルを読み取れるパーミッションバイパスを修正
- git worktreeのサンドボックス書き込み許可リストがメインリポジトリのルート全体をカバーしていた問題を修正
- Bash権限分析で`PWD`/`OLDPWD`/`DIRSTACK`のstale値を信頼していたギャップを修正

**その他のバグ修正（主要なもの）**

- `/feedback`レポートにコンテキスト圧縮前の会話を含めるよう改善
- `/ultraplan`やリモートセッション作成で「Could not capture uncommitted changes」エラーが発生する問題を修正
- `find`コマンドがmacOSのシステムファイルテーブルを枯渇させてホストをクラッシュさせる問題を修正
- Ctrl+Oトランスクリプトビューがリアルタイム更新されない問題を修正
- その他多数のUI・UX修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.149)

### Project Glasswing / Claude Mythos Preview（前回から継続）

前回レポートで詳報済み。AWS・Apple・Google・Microsoft等12社と連携し、OSSの脆弱性を発見・修正するイニシアチブ。1ヶ月で1万件超の高/重大脆弱性を発見。本日の追加情報なし。

## コミュニティの反応

### Claude Code 活用パターン・設計

#### Tips

> Claude Codeを「コンテンツ工場」にした話。スラッシュコマンド60個＋Agent Teamsで個人メディアを半自動化する。ブログ400記事・note・アプリ8本を一人で運用 — @R [Zenn](https://zenn.dev/rkpg/articles/claude-code-content-factory)

> 独立コンテキストのsubagentにはgrill-with-docsを渡せ。薄い指示を投げると薄い仕事が返る問題への解決策 — @安並 大智 [Zenn](https://zenn.dev/yasunami_daichi/articles/parallel-agent-context-grill-with-docs)

> worktreeの「バトンタッチ」問題を自前skill・Codex・Augmentで比べて反省した。本当の難所は分離ではなく作業の引き渡し — @安並 大智 [Zenn](https://zenn.dev/yasunami_daichi/articles/worktree-handoff-codex-augment)

> コンテキストエンジニアリングは7要素の組み合わせ。構成図で見る全体像。プロンプトはそのうちの1つに過ぎない — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/context-engineering-7-elements-design)

> Claude Codeのコンテキスト枯渇に立ち向かう。10万行モノリスのリファクタリングで学んだセッション設計プロトコル。70%が手を打つライン、85%で手遅れ — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-context-exhaustion-strategy)

> Plan Modeを使わず1ヶ月ハマって学んだClaude Code設計の地図。根本制約は「たった1つ」から全てが導かれる — @cnative_tkb [Zenn](https://zenn.dev/cnative_tkb/articles/630d98a2e3ace6)

### Claude Code Hooks・自動化

#### Tips

> 「Fact-Forcing Gate」を知っているか。Claude CodeでAIに事実を申告させるHook。思い込みのまま手を動かす問題への対策 — @kobarutosato [Zenn](https://zenn.dev/kobarutosato/articles/claude-code-fact-forcing-gate)

> SessionStartフックでClaude Code CLIを自動構成する実践。11個のSessionStartフック運用の知見 — @fukukei23 [Zenn](https://zenn.dev/fukukei23/articles/claude-code-sessionstart-hooks-automation)

> 自律タスク実行システムの本体は「止まり方」だった。Notion＋cron＋claude -pで自律実行し、正常系ではなく異常系の設計が本質 — @takamasa_aiso [Zenn](https://zenn.dev/takamasa_aiso/articles/20260523_auto-loop-autonomous-task-system)

### Claude Code オートモード・プラン

#### Tips

> Claude CodeのオートモードがProに来た。個人開発の「ひとりチーム化」がまた進む。Sonnet 4.6対応＋Opus 4.7との組み合わせ — @剛 [Zenn](https://zenn.dev/taketsuyo/articles/700336a0b5fdeb)

### Claude Code コスト・レート制限

#### Tips

> Claude Codeのレート制限、頭で算盤やめろ。二段バーが羅針盤になる。時間残量とトークン残量を視覚的に比較する手法 — @船長 [Zenn](https://zenn.dev/generald/articles/claude-code-twin-bar-rate-compass)

### Claude Code 環境構築・ツール

#### Tips

> WindowsでClaude Codeを使う。WSLが頻繁に落ちるためWindows直接インストールに再整備した記録 — @chimamyo [Zenn](https://zenn.dev/micchi55555/articles/6b056cf8049bbc)

> EXWM + claude-code-ide.elでEmacsが固まる問題をghostelバックエンドで回避する — @frenzieddoll [Qiita](https://qiita.com/frenzieddoll/items/f1e802ad05641e639bb9)

> Claude Codeのプロジェクトを一覧表示するCLIツール「ccprojects」を公開 — @mikanmikan11 [Qiita](https://qiita.com/mikanmikan11/items/ef62e0b0f9086404e103)

### Claude Code × 業務活用

#### Tips

> Claude Code × Microsoft Fabric (4)。Power BIレポートとデータ基盤をGitで管理するIssue駆動の開発フロー実践 — @daizou703 [Qiita](https://qiita.com/daizou703/items/c88311149b03db99e694)

> Claude CodeとBLEの闇を20分掘った話。ESP32 BLE HIDの複数PC間切り替えをClaude Codeで実装 — @h_h [Zenn](https://zenn.dev/hiro51282/articles/649d616cb445cf)

> vibe codingで日本株自動売買システムを作ってみた。クオンツ知識ゼロ・Python苦手な状態からの挑戦記録 — @ゆーいち [Zenn](https://zenn.dev/yuichi1996/articles/088835f075a938)

### Claude Code セキュリティ

#### Tips

> AIコーディングエージェントの本当の攻撃面は設定ファイルだった。TrustFallとAWS Kiroの事例から見る対策とOSSツール「Sigil」の紹介 — @Justin [Zenn](https://zenn.dev/ju571n/articles/ai-agent-config-attack-surface)

> AIに絶対触らせてはいけない5つの領域。個人開発者のための実運用ガイド — @sabatora-ayk [Qiita](https://qiita.com/sabatora-ayk/items/f852d07b8aa07b66524c)

### Anthropic モデル・プラットフォーム

#### Tips

> 「正しいモデル」とは何か。Code with Claude London 2026で考え方が一段アップデートされた話 — @noah [Zenn](https://zenn.dev/noah33/articles/picking-the-right-model)

> Karpathy CLAUDE.mdは本当に普遍解か？ Opus 4.7との構造的合致と、モデル依存性の話 — @みーた [Zenn](https://zenn.dev/earlgray_mk/articles/472ef76d9e9d3e)

> Claude Mythos Previewを使っても日本の金融機関は絶対にセキュリティを強化できない。組織・運用面の課題を指摘 — @トンヌラ [Zenn](https://zenn.dev/tonnura/articles/1f5e272d9226db)

> Claude Opus 4.7 / GPT-5.5 Instant / Gemini 3.5 Flashを1スクリプトでオーケストレーション。3モデルの役割分担実装 — @kairos [Zenn](https://zenn.dev/kairosai/articles/7209c85870424d)

> Claude API ドキュメント刷新。GA/Betaエンドポイントと新認証方式まとめ — @picnic [Qiita](https://qiita.com/picnic/items/e1ce8fa78d626dfdcd94)

### AI時代の開発手法・プロンプト設計

#### Tips

> AIエージェントに「説明文」ではなく「想起文」を渡してみる。禁止事項より「私は次に〜をするべきだ」形式の方が効果的という仮説 — @超伝導ババア [Zenn](https://zenn.dev/niahiniahi/articles/7ff976e2723d32)

> AIに「お願い」から「委譲」へ。Goal/Deliverable/Fallbackの3点で委譲すると作業時間が38分から14分に短縮 — @じゅん [Zenn](https://zenn.dev/jun_eng/articles/3e97208f782e7f)

> この春、生成AIへの入力をキーボードから音声に変えた話。思った以上にAIとの付き合い方が変わった — @i.i [Zenn](https://zenn.dev/inoway/articles/voice-input-with-genai-2026spring)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
