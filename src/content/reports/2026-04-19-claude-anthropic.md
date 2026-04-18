---
title: "v2.1.114 Agent Teams修正、Opus 4.7安全性懸念浮上"
summary: "Claude Code v2.1.114でAgent Teamsのパーミッションダイアログクラッシュを修正。Opus 4.7切替後のauto modeでデータ消失報告が相次ぎ、コミュニティで安全性への懸念が広がる。Claude DesignやOpus 4.7の活用記事が大量に公開。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-19
features:
  - "Claude Code v2.1.114 - Agent Teams修正"
  - "Claude Code v2.1.113 - ネイティブバイナリCLI"
  - "Claude Code v2.1.113 - sandbox.network.deniedDomains設定"
  - "Claude Code v2.1.113 - /ultrareview改善"
  - "Claude Code v2.1.113 - Remote Control拡張"
  - "Claude Code v2.1.113 - サブエージェント停止検知"
  - "Claude Code v2.1.113 - Bashセキュリティ強化"
  - "Claude Code v2.1.113 - フルスクリーンモード改善"
  - "Claude Code v2.1.113 - UI spoofing対策"
codex_review: "Agent Teamsの修正自体は地味だが、実運用の信頼性を支える意味でかなり重要。一方でOpus 4.7の安全性懸念は、性能競争が続く業界に冷や水を浴びせる論点として過小評価しにくい。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.114

2026-04-18リリース。単一バグ修正のホットフィックス。

- **Agent Teams修正**: エージェントチームのメンバーがツール権限を要求した際にパーミッションダイアログがクラッシュする問題を修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.114)

### Claude Code v2.1.113（前回から継続）

2026-04-17リリース。ネイティブバイナリCLI移行、sandbox.network.deniedDomains、Bashセキュリティ強化等の大型パッチ。詳細は前回レポート参照。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.113)

### Claude Opus 4.7（前回から継続）

SWE-bench Verified 87.6%、xhighエフォートレベル、タスク予算機能搭載の新フラッグシップモデル。詳細は前回レポート参照。

### Claude Design（前回から継続）

Anthropic Labsからのデザイン協働ツール。Pro/Max/Team/Enterpriseプランでリサーチプレビュー提供中。詳細は前回レポート参照。

## コミュニティの反応

### Claude Code v2.1.114 Agent Teams修正

#### ポジティブ

> v2.1.114でAgent Teamsのツール権限要求時のクラッシュ問題が修正され、複数エージェント協力時の権限確認が安定。チーム開発や個人マルチエージェントに重要 — @Ozzzagen [X](https://x.com/i/status/2045322314397392972)

> 自分でGitHubからpullして試用し安定性を確認した — @act_0001 [X](https://x.com/i/status/2045480851019055358)

> Agent Teamsのパーミッションダイアログクラッシュ修正を含むv2.1.113〜v2.1.114のアップデート詳細をまとめ — @masayan_ai_hack [X](https://x.com/i/status/2045410126664966500)

### Claude Code v2.1.113 Bashセキュリティ強化

#### ポジティブ

> env/sudo/watch等のexecラッパー経由のdenyルール適用、find -exec/-deleteの自動承認廃止、macOSの/privateパスを危険削除対象として厳格化。安全性が向上 — @oikon48 [X](https://x.com/i/status/2045274084016366035)

> Bashセキュリティが強化され安全性が大きく向上したと評価 — @algo_kun [X](https://x.com/i/status/2045254772803162483)

> 金融・医療導入を検討するユーザーに有用な-exec自動承認廃止 — @pit_ai_dx [X](https://x.com/i/status/2045386503040446971)

> macOSの/privateパス削除ルール厳格化、Bash拒否ルールのexecラッパー対応でセキュリティ構造が強化 — @tututtaa [X](https://x.com/i/status/2045254380920947136)

### Claude Code v2.1.113 Remote Control拡張

#### ポジティブ

> Claude Codeの/remote-controlが今は本当にうまく動作するようになった — @DataBasedDad [X](https://x.com/i/status/2044804047622873527)

> Claude Codeのremote controlは信じられないほど素晴らしい — @willebrew [X](https://x.com/i/status/2045582469383282792)

#### Tips

> /remote-controlを使えばアプリから/clearコマンドが裏で動作し、通勤電車やリビングからスマホでClaude Codeを操作できて超便利 — @kawasin73 [X](https://x.com/i/status/2045482650815889857)

> v2.1.113で/extra-usageがRemote Controlクライアントから利用可能に、@ファイル補完候補クエリにも対応 — @masayan_ai_hack [X](https://x.com/i/status/2045410126664966500)

#### ネガティブ

> Claudeデスクトップで/remote-controlを実行したら「Remote Control initialization failed」エラーが発生 — @shoma2da [X](https://x.com/i/status/2044295487055114656)

### Opus 4.7 データ消失問題

#### ネガティブ

> Opus 4.7で50GBデータ消失が相次いでいる——auto mode安全分類器の問題と実践的な対策まとめ。3日間で20件以上のデータ損失報告、過去最悪のペース — @yurukusa [Qiita](https://qiita.com/yurukusa/items/1fbe4295f32a4f70a18d)

### Opus 4.7 移行・活用

#### Tips

> Claude Opus 4.7リリース、新機能・ベンチマーク・Claude Codeプラクティスまで徹底解説 — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/261ec6a93317d9)

> Claude Opus 4.6 と 4.7 に FEM を解かせて比べてみた。Web以外の分野でもアップデートの恩恵を検証 — @hanafsky [Zenn](https://zenn.dev/hanafsky/articles/opus-4-6-vs-4-7-fem-benchmark)

> Claude Opus 4.7 登場：Hacker Newsで1475ポイント・1067コメントの異例の反響 — @picnic [Zenn](https://zenn.dev/picnic/articles/hackernews-ai)

#### ネガティブ

> Claude Opus 4.7移行メモ：3つの破壊的変更とトークンコスト増加。拡張思考ペイロード形式変更、サンプリングパラメータ削除で400エラー — @EVOLINK [Zenn](https://zenn.dev/evolink/articles/2c45dfcd5dc3fd)

### Claude Design

#### Tips

> Claude Designは「デザインAI」じゃない。アイデア→試作→共有→実装への受け渡しを一気につなげたのが大きい — @剛 [Zenn](https://zenn.dev/taketsuyo/articles/b8e51ff688383c)

> 続・やってきたVibe Designの波。本命Claude Designが来たのでFigma卒業のタイミング — @VTeacher [Zenn](https://zenn.dev/rgbkids/articles/c65d714ece9b26)

> ざっくりClaude Designを触ってみたので共有する — @yoko [Zenn](https://zenn.dev/yokomachi/articles/202604_claude_design_chottodake)（前回から継続）

#### ネガティブ

> 【速報】FigmaとAdobe株が同時暴落！Claude Designリリースでデザイナーの仕事は消えるのか — @emi_ndk [Qiita](https://qiita.com/emi_ndk/items/e0528d4c714efdbe6571)

> Claude Designが来た日 — Webデザイナーとフロントエンドの仕事はどこまで削られるのか — @akasara [Zenn](https://zenn.dev/akasara/articles/ab24affd00d788)

### Claude Code Hooks・Skills

#### Tips

> Claude Code Hooks入門、CLAUDE.mdだけやと足りひん理由ぜんぶ教えるで。Hooksなら決定論的に確実に実行できる — @まさやん [Zenn](https://zenn.dev/masayan1126/books/claude-code-hooks-intro)

> 仕様駆動開発のドキュメントを自動生成するClaude Codeスキルを2つ作った — @sakamotchi8 [Zenn](https://zenn.dev/third_tech/articles/spec-prompt-spec-driven-skills)

> 「プロンプトを書く時代」は終わった——Claude Code Skillsで「自分の仕事のやり方」をAIに移植する方法 — @TaichiEndoh [Qiita](https://qiita.com/TaichiEndoh/items/b6d296857dcd4b1fde7c)

> --dangerously-skip-permissionsは最強じゃなかった。スキル開発はauto mode一択 — @いなじろう [Zenn](https://zenn.dev/iineineno03k/articles/20260418-claude-code-skills-auto-mode)

### Claude Code コンテキスト管理・トークン節約

#### Tips

> Claude Codeのトークン節約で本当に効いた3つの設定——800時間の運用データから。CLAUDE.mdを100行→35行に凝縮 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/claude-code-token-saving-3tips)

> Throughline を npm に公開した — Claude CodeのツールI/OをSQLiteに退避するhook。コンテキストの大半を占めるツールI/O残骸を3層管理 — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/throughline-release)

> Claude Codeの"続きから"を実装するのに、自動検知を諦めた話 — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/throughline-declare-over-detect)

### Claude Code 活用・ワークフロー

#### Tips

> Claude Codeによる寝不足防止のためのステータスラインナイトモード — @Giana12th [Zenn](https://zenn.dev/giana12th/articles/2ac0609d3c5775)

> Claude Code ネイティブWindows版で3rdパーティーAPIを利用する場合、環境変数にセットしても動かない問題 — @teraco [Zenn](https://zenn.dev/teraco/articles/cbed056056349f)

> Claude Code Learning Mode 完全ガイド — /output-style と TODO(human) の実務運用 — @amu_lab [Zenn](https://zenn.dev/amu_lab/articles/claude-code-learning-mode)

> AIスタッフ8人を雇って個人の知的生産を完全自動化するまで — Claude Codeマルチエージェント組織の全体設計 — @はむ～ [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-04-17-053000)

> Claude Code Routinesで「Xのいいね」を戦略的インテリジェンスに変える自動化パイプライン — @chikupen [Zenn](https://zenn.dev/chikupen2896/articles/e25f1ea981fb86)

> Claude Cowork × 自作 yt-dlp MCP で毎朝 YouTube を要約させる — @hanafsky [Zenn](https://zenn.dev/hanafsky/articles/claude-cowork-youtube-summarizer-mcp)

> Claude Codeのステータスラインをカスタマイズしてみた — @れん [Zenn](https://zenn.dev/ren21/articles/e5eb47c2789b0a)

### AIコーディングツールのセキュリティ

#### 中立

> AIコーディングツールの脆弱性が2ヶ月で6倍になった2026年Q1。AI生成コード起因のCVEが1月6件→3月35件に急増 — @mtmtdack [Zenn](https://zenn.dev/mtmtdack/articles/2026-04-18-ai-tools-config-trust)

### 競合ツール比較

#### 中立

> Gemini CLI サブエージェントとは？3ツールを徹底比較【2026年】。Claude Code・Codex CLIとの違いを実務目線で整理 — @とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/gemini-cli-subagent-vs-claude-code-codex)

> 6つのAIツールを使い比べて辿り着いた、月$40コスパ最強の「Claude + Cursor」構成 — @kekke [Zenn](https://zenn.dev/torakm/articles/1cfa1114c67339)

> Gemma4をローカルで動かしてclaude codeをタダで使い倒したかった — @もおる [Zenn](https://zenn.dev/wtcr_31/articles/abda7b51c859b6)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
