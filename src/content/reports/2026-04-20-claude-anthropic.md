---
title: "新リリースなし、ハーネス工学とContext Rot議論が加速"
summary: "公式の新リリースはなし。コミュニティではClaude Codeの「ハーネスエンジニアリング」A/Bテスト、Context Rotの構造的理解、Docker隔離環境構築など実践的な知見共有が活発化。AI CLIオーケストレーターやプロンプト自動チューニング手法も登場。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-20
features:
  - "Claude Code v2.1.113 - ネイティブバイナリCLI"
  - "Claude Code v2.1.113 - sandbox.network.deniedDomains設定"
  - "Claude Code v2.1.113 - /ultrareview改善"
  - "Claude Code v2.1.113 - /extra-usage Remote Control対応"
  - "Claude Code v2.1.113 - Remote Control @ファイル補完"
  - "Claude Code v2.1.113 - サブエージェント停止検知"
  - "Claude Code v2.1.113 - /loop改善"
  - "Claude Code v2.1.113 - セキュリティ強化"
  - "Claude Code v2.1.114 - エージェントチームバグ修正"
codex_review: "新機能不在の日に、ハーネス工学やContext Rot対策のような運用知が前景化しているのは健全だ。派手さは薄いが、AIコーディングが玩具から基盤へ移る局面を示す地味に重要な兆候だと思う。"
codex_importance: 3
---

## 公式アップデート

本日の公式アップデートはありません。

最新リリースは2026-04-18のv2.1.114（Agent Teamsパーミッションダイアログクラッシュ修正）。詳細は前回レポート参照。

[GitHub Releases](https://github.com/anthropics/claude-code/releases)

## コミュニティの反応

### Claude Code v2.1.113 ネイティブバイナリ実行（前回から継続）

#### ポジティブ

> ネイティブバイナリ実行により起動速度とメモリ効率が改善、CLIがより本格的なコマンドとして使いやすくなった — @apps_sou [X](https://x.com/i/status/2045294006083752223)

> コンテナ化やNode不要環境でネイティブバイナリが大きな利点。CLIツールとしての過剰依存を解消した良い更新 — @kerrsee [X](https://x.com/i/status/2045365294953300027)

#### Tips

> Claude Codeの新CLIバイナリをBun-based Linux binariesから抽出し、FreeBSDでNode互換shimを使って継続使用する方法をClaudeが実装した — @DominoTree [X](https://x.com/i/status/2045349237257638032)

### Claude Code v2.1.113 セキュリティ強化（前回から継続）

#### ポジティブ

> v2.1.113でCLIネイティブ化とmacOS危険パス削除、env/sudoラッパーdeny適用、find -exec/delete自動承認廃止などセキュリティ強化が大きい — @sikaku_note_app [X](https://x.com/i/status/2045837682534707233)

> v2.1.113/114でCLI高速化とdeniedDomainsセキュリティ強化が便利。GitHubからpullして試用しチーム開発の快適さが向上 — @act_0001 [X](https://x.com/i/status/2045480851019055358)

#### Tips

> AIに悪意がないわけではなく仕様で危険なので、denyリストにBashのrm, curl, wgetなどを追加して絶対実行させないセキュリティ設定を推奨 — @akaoniudetate [X](https://x.com/i/status/2043888278525669396)

> 大規模組織向けClaude Codeセキュリティ対策として、bypass禁止、危険コマンド確認必須、環境変数制限などを設定しMDMで展開 — @yusaku_0426 [X](https://x.com/i/status/2043484460767993915)

### Claude Code v2.1.113 Remote Control拡張（前回から継続）

#### ポジティブ

> スマホだけでPC上のフォルダにアクセスして作業を進められるため、副業勢や主婦に強くおすすめ — @mojamojaAIdayo [X](https://x.com/i/status/2043524345067430349)

> remote-control機能で家のPCと外出先のPCを繋げてシームレスに使用可能。Claudeエコシステムの便利さが手放せないレベル — @yuto_apps [X](https://x.com/i/status/2044993002788286530)

### Claude Code v2.1.114 エージェントチーム修正（前回から継続）

#### ポジティブ

> チームで使い始めると権限周りで詰まりやすいので、このクラッシュ修正は助かる — @Seriola30089 [X](https://x.com/i/status/2045843367456805264)

> permission dialogのcrash fixによりエージェントチームのtool permissionリクエストが安定 — @act_0001 [X](https://x.com/i/status/2045480851019055358)

### ハーネスエンジニアリング

#### Tips

> Claude Codeハーネスエンジニアリングを最小構成でA/Bテストしてみた。CLAUDE.mdでAIに「お願い」するだけでは出力が安定しない課題に対し、周辺の仕組みでAIを制約するアプローチを検証 — @ぽち [Zenn](https://zenn.dev/yohei_data/articles/3900a223fe9378)

> 漏洩したClaudeのソースコードから見えてきた「エージェント・ハーネス」の重要性。LLMを実用的なエージェントに昇華させる仕組みを解説 — @Nao8 [Zenn](https://zenn.dev/dragon1208/articles/11f23fa46c58d1)

> Cursorは外、Claude Codeは中。Docker Composeで閉じたAI開発端末を作った。Agent Teams本番投入に向けたハーネスのPoC — @やさい [Zenn](https://zenn.dev/moimoi/articles/docker-claude-code-sandbox)

### Context Rot・コンテキスト管理

#### Tips

> Context Rotという静かな劣化——AIは会話が長くなるほど馬鹿になる。トランスフォーマーの構造的な問題として解説 — @Thought analyzer [Zenn](https://zenn.dev/analysis/articles/thought-analyzer-context-rot)

> Claude Codeのトークン消費を減らす方法——800時間の運用で見つけた節約テクニック。CLAUDE.mdの書き方で消費が2倍変わる — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/gvq329nn88wsna)

> AI開発で地味に効く、コンテキスト節約の話。spec/planのようにアクションを分けて/compactなしで1セッションに収める方法 — @H_s [Zenn](https://zenn.dev/h_s_dev/articles/c5f77221f60bf9)

> Claude Codeのセッション、コンテキストサイズとトークン消費量の関係性を分析 — @megmogmog1965 [Qiita](https://qiita.com/megmogmog1965/items/575f7c5cbf16c0928401)

### プロンプト・スキル設計

#### Tips

> プロンプトの再現性をAIに自動チューニングさせる方法。別のAIに実際にやらせて詰まった箇所をレポートさせるTDD的アプローチ。手元8個のskillで初稿50点が80〜90点に — @mizchi [Zenn](https://zenn.dev/mizchi/articles/empirical-prompt-tuning)

> プロンプトを書く前に、リポジトリを「AIが働きやすい形」に整えた。Claude SkillsでプロジェクトをSSOT化したPMの話 — @Yu Kamiya [Zenn](https://zenn.dev/yukamiya/articles/pm-ssot-claude-skills)

> git commit Skillを作る前に、哲学を言語化した話。「なぜそうするか」を先に言語化すると一貫性のあるSkillになる — @sika7 [Zenn](https://zenn.dev/sika7/articles/f5fa39f491d8f2)

> AIに渡す仕様を3段階で変えたら、生成コードの品質が別物になった — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/ai-vague-spec-quality-collapse)

### Claude Code オーケストレーション・マルチエージェント

#### Tips

> 複数のAI CLIを「いい感じにバトンタッチする」ためのAI CLIオーケストレーションツール tasuki を作ってOSS公開。Claude Code / Codex CLI / GitHub Copilot CLIを優先度順に自動で渡り歩く — @0xkohe [Zenn](https://zenn.dev/kooooohe/articles/d47e0dcfe258c0)

> Claude Codeで AI オーケストレーションを自作したい人向けのTIPS。ANTHROPIC_BASE_URLプロキシやセッション管理など — @Yamamoto Yuji [Zenn](https://zenn.dev/hummer/articles/claude-code-agent-team-tips)

> cmux上でVimからClaude Codeにファイル参照を渡すプラグイン cmux.vim を作った — @Yuki Tanabe [Zenn](https://zenn.dev/tanabee/articles/e9652e4dd2a11b)

> Claude Codeを疑似スクラムチームとして動かす。PO・SM・Dev×2・QAの5ロールをClaude Codeに担わせた全記録 — @ささくれ [Zenn](https://zenn.dev/rurihari/articles/a1a3252b8d8f43)

### Claude Code 実践ガイド

#### Tips

> Claude Code 実践ガイド — cron自動化からCI連携まで。毎日自動実行しCI/CDに組み込む体系的解説 — @Tech Quant [Zenn](https://zenn.dev/techquant/books/tq-cc-cron-guide-202604)

> 企業導入前に押さえたいClaude Codeの便利機能12選と現場で活きる3つの組み合わせ例 — @leomarokun [Qiita](https://qiita.com/leomarokun/items/b090ca530c481108278d)

> Claude Codeの許可プロンプトをAIに自動削減させる：/fewer-permission-prompts 完全解説 — @akasara [Zenn](https://zenn.dev/akasara/articles/dac2e93c27557f)

### Claude Opus 4.7（前回から継続）

#### Tips

> 【Opus 4.7】本家エンジニアBoris Chernyが教える、4.7を最大限活かす6つのヒント — @Na [Zenn](https://zenn.dev/yuche/articles/claude-code-opus-4-7-tips)

> Claude Opus 4.7 徹底レビュー — xhigh・/ultrareview・タスク予算で何が変わったか — @soushu [Zenn](https://zenn.dev/soushu/articles/2026-04-17-claude-opus-4-7)

### Claude Design（前回から継続）

#### Tips

> Claude Designを徹底解剖：非デザイナーがプロ級のアウトプットを量産できる時代へ — @takuh [Zenn](https://zenn.dev/takuh/articles/a00db8ea16ab09)

### Claude データポリシー・システムプロンプト

#### 中立

> 「Claude、学習に使われてる？」プランごとのデータ保持・学習ポリシーを公式で確認した — @Hira Norm [Zenn](https://zenn.dev/hiranorm/articles/04fc023fb7894c)

> Claude Opus 4.7のシステムプロンプト（CL4R1T4Sで公開）を6モデルで対照実験。構造・方針レベルは本物っぽいが逐語レベルは捏造混入の可能性 — @orange [Zenn](https://zenn.dev/orangewk/articles/claude-system-prompt-structure-guide)

### Claude API 活用

#### Tips

> Claude APIのFine-Grained Tool Streamingで低遅延エージェントをPythonで実装する — @緒方 [Zenn](https://zenn.dev/bluecat/articles/34684b37d96212)

> Claude APIの請求書を見て焦った話：Prompt Cachingで月額を6割削減 — @Pan Jixiao [Zenn](https://zenn.dev/jixiaopan/articles/claude-prompt-caching-cost)

### Claude Code × 既存ツール連携

#### Tips

> Claude公式のApple Health連携が米国限定なので、MCP Serverを自作して89万レコードを分析した — @at_sushi [Zenn](https://zenn.dev/at_sushi/articles/1a628f17dda8b1)

> Tableau Public MCPの全22ツールを試してみた — Claude Code/Claude Desktop完全比較表付き — @しんや [Zenn](https://zenn.dev/truestar/articles/6a2adc358c0c74)

> 個人開発のバイクサイトにAnthropic APIで2,000車種のAIコンテンツを自動生成してタブUIに載せた話 — @MotoHub [Zenn](https://zenn.dev/ausssxi/articles/85f7fc5c33adbd)

### AI開発の課題と考察

#### 中立

> Coding Agentの課題：人間レビューのボトルネックをどう解消するか — @yCarbon [Zenn](https://zenn.dev/ycarbon/articles/d97038441f391d)

> AIに全部書かせたら、自分には何も残らなかった話 — @kajikaji [Qiita](https://qiita.com/kajikaji/items/d72d48129cd0e4da24dd)

> 「マイクロサービス疲れ」の処方箋 — モジュラーモノリスをClaude Codeで設計・検証する — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/arch-modular-monolith-claude-code-2026)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
