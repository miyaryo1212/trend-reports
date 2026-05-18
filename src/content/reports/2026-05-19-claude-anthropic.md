---
title: "Stainless買収でSDK内製化、コミュニティはスキル安全性・ハーネス設計に注力"
summary: "AnthropicがSDK自動生成企業Stainlessを買収し全公式SDKの開発を内製化。コミュニティではスキルの安全な運用、ハーネス機能詳解、Agent SDK Credits分離の影響分析が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-19
features:
  - "Stainless買収: SDK自動生成・MCPサーバーツーリング企業を買収し全公式SDKを内製化"
codex_review: "Stainless買収そのものは派手ではないが、Anthropicが勝負どころをモデル本体より実運用の足回りに置き始めたサインとして興味深い。周辺議論もプロンプト芸から安全設計へ移っており、業界の成熟を感じる。"
codex_importance: 3
---

## 公式アップデート

### Stainless買収

AnthropicがSDK自動生成・MCPサーバーツーリング企業Stainlessを買収。全公式SDK（TypeScript、Python、Go、Java等）の開発を内製化し、エージェントの外部接続基盤を強化する。

### Claude Code v2.1.143（前回から継続）

5月15日リリース。プラグイン依存関係の強制、コンテキストコスト予測表示、`worktree.bgIsolation: "none"`設定、`claude agents`への各種フラグ追加など。新バージョンのリリースはなし。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)

## コミュニティの反応

### Claude Code スキルの安全性・運用

#### Tips

> 野良スキルは使うな、盗め──Claude Codeスキルの安全な作り方。悪意ある命令を仕込むのにコードは不要、プロンプトインジェクションの危険性を注意喚起した上で安全なスキル自作を解説 — @エミリアラボ [Zenn](https://zenn.dev/emilia_lab/articles/claude-code-skill-safety)

> Skillが「ソロ開発者の流通単位」になる日。Agent Skills 1.2M+がマーケットプレイスに並び、成果物の単位にSkillが加わった — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

> AIコーディングで毎回同じ注意をしているなら、ルールファイルを置いた方がいい。CLAUDE.mdやCursor Rules等のルールファイル活用を横断的に解説 — @でで [Zenn](https://zenn.dev/dedetools/articles/19a6e81dbad453)

> 【保存版】CLAUDE.md 設計パターン集──個人開発・チーム開発・モノレポの3テンプレートを公開 — @hikariclaude01 [Qiita](https://qiita.com/hikariclaude01/items/2daa605542c289090d9e)

### Claude Code ハーネス・Hooks設計

#### Tips

> Claude Codeハーネス機能詳解：CLAUDE.md・SKILLS・HOOKで開発を制御する。ハーネス機能の全体像と長期運用時の注意点を解説 — @FYuki [Zenn](https://zenn.dev/yuki1027/articles/e82bf4b89552ae)

> Claude Code Hooksで「セッション終了時に自動サマリー」を作った話。次のセッション開始時に前回の続きを数秒で把握できる仕組み — @yamada-ai-dev [Zenn](https://zenn.dev/yamada_ai_dev/articles/article02-free)

> Claude Codeの作業完了を音で知らせる（Hooks設定）。macOS標準サウンドでStop/質問/権限要求を鳴らし分ける — @うえすと [Zenn](https://zenn.dev/westhouse_k/articles/6a6fb41ca9409a)

> Coding Agentのド忘れを機械的に捕捉し、非コマンドも強制実行するOSS『markgate』を作った — @k.goto [Zenn](https://zenn.dev/go_to_k/articles/markgate-oss)

### Claude Code 失敗談・多層防御

#### Tips

> Part 3: Claude Codeでやらかした話 (3/3) — どう防ぐのか: 多層防御の設計。3部作の最終回、仕組みで防ぐ対策設計を整理 — @kh923 [Zenn](https://zenn.dev/kashi923/articles/d3b102ef74d848)

> Claude Codeを1ヶ月使って気づいた「指示の改善では解決しない問題」。プロンプト改善の限界とハーネスエンジニアリングの必要性 — @yamada-ai-dev [Zenn](https://zenn.dev/yamada_ai_dev/articles/article01-free)

> AI agentがskill規範を守らなかった実録 — Qiita CI 14回連続失敗と機械ガード設計 — @DevMasatoman [Qiita](https://qiita.com/DevMasatoman/items/b51de2929a11142daab8)

> Claude Code v2.1.141で5月14日に観察された5件の新しい沈黙の失敗の構造。設定や文書の主張と実際のシステム挙動の乖離を分析 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/402300969d36d6)

### Agent SDK Credits分離

#### Tips

> Anthropic Agent SDK Credits — サブスクと別建ての課金プールに分離。5/14発表・6/15施行でclaude -p等がAgent SDK Credit枠に移行 — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-18-agent-sdk-credits)

> claude -pのクレジットが分離されるらしい、うちへの影響メモ。Pro/Max別の専用枠、rolloverなし（前回から継続） — @harnform [Zenn](https://zenn.dev/harnform/articles/claude-sdk-credit-split)

### Claude Code セキュリティ・最小権限

#### Tips

> AIエージェントは最小権限で使う｜Claude Code・MCP・VS Code拡張の安全な設定。OWASP「Excessive Agency」リスクを踏まえた権限設計 — @たきびラボ [Zenn](https://zenn.dev/takibilab/articles/ai-agent-least-privilege)

> Claude Codeを社内に安全に導入する：システムエンジニアのためのセキュリティ実践ガイド。権限制御・サンドボックス・Managed Settings・OTELによる監査設計 — @ノーコードソリューションズ [Zenn](https://zenn.dev/nocodesolutions/articles/f71479fa5711fe)

### Claude Code worktree・並列開発

#### Tips

> DB・ドメインは分離、Claude設定は共通化 ── git worktreeで並列開発環境をセットアップする。複数ブランチでそれぞれClaude Codeに作業させる構成 — @yoshito [Zenn](https://zenn.dev/sonicgarden/articles/4af20794b8a0f7)

### Claude Code AI生成メモ管理

#### Tips

> Claude Codeが生成するAIメモをNotionに逃がすCLIを作った話。cortexというGo製CLIでMarkdownや会話ログをNotionへ冪等に同期 — @sa-san [Zenn](https://zenn.dev/satoyoshi/articles/2fe1c89e825e31)

### Claude API Tips

#### Tips

> Claude APIで初回トークンの待ち時間を短縮するプロンプトキャッシュの事前ウォームアップ術。公式推奨のTime-to-First-Token短縮テクニック — @ty [Zenn](https://zenn.dev/ty2/articles/tweet-claudedevs-2055069548672631218)

> Claude Codeのtokenを節約する5つのコツ（実データで検証）。18日間266セッションのログ集計から見えた節約ポイント — @koji_麹 [Zenn](https://zenn.dev/kojihq/articles/3ef8b697063323)

### Claude Managed Agents

#### Tips

> Claude Managed Agents入門 — インフラ不要でAIエージェントを本番運用する。4つのコアコンセプトとフルマネージドハーネスの解説 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/215-claude-managed-agents-guide)

### Anthropic Mythos（前回から継続）

#### Tips

> Anthropic Mythos、ゼロデイ脆弱性を数千件発見 — AIがサイバーセキュリティを根本から変える。Claude Mythos Previewの全主要OS・ブラウザ対象の脆弱性発見成果を解説 — @Quotidia [Zenn](https://zenn.dev/quotidia/articles/7112cb058304e9)

### Claude Code 個人開発事例

#### Tips

> Claude Codeで無料の育児ツールを高速開発した話。バックエンドなし・静的HTML＋GitHub Pages構成で1ツールを短時間開発 — @jun3 [Zenn](https://zenn.dev/jun3/articles/8af7e01f6fae6e)

> ClaudeがJITコンパイラを書いたその後。jqのJITコンパイラを作らせて9〜17倍速になった2ヶ月後の振り返り — @m5d215 [Qiita](https://qiita.com/m5d215/items/7f4b21c68c2fdebf4b70)

### AI競争・業界動向

#### Tips

> OpenAI vs Anthropic：AI競争の主戦場は「モデル性能」から「ハーネス」へ移った。モデル周辺の実行環境＝ハーネスが差別化の本丸に — @太田和彦 [Zenn](https://zenn.dev/itdo/articles/e8695a0a51706c)

> M365 CopilotとClaudeが生んだ静かな派閥対立化と、組織が取るべきAI共存の道 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/2cf17404da70db)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
