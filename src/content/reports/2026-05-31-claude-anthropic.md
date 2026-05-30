---
title: "v2.1.158でAuto Mode対応拡大・プラグインSkills運用記事が充実"
summary: "Claude Code v2.1.158でBedrock/Vertex/FoundryにおけるOpus 4.7/4.8のAuto Modeが利用可能に。コミュニティではSkills設計・セキュリティ・Dynamic Workflowsの実践記事が引き続き活況。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-31
features:
  - "Claude Code v2.1.158 Auto Mode on Bedrock/Vertex/Foundry"
  - "Claude Code プラグイン自動ロード（前回から継続）"
  - "Claude Code claude plugin init（前回から継続）"
  - "Claude Code claude agents agent設定（前回から継続）"
  - "Claude Code EnterWorktreeセッション内切替（前回から継続）"
  - "Claude Code テレメトリ拡張（前回から継続）"
  - "Claude Code Workflowキーワードトリガー設定（前回から継続）"
  - "Project Glasswing（前回から継続）"
codex_review: "機能追加自体は地味だが、Auto Modeの対応先拡大よりも、Skillsやhookの運用知見が一気に厚くなっている点のほうが重要に見える。製品の進化というより、Claude Codeが現場の作法を獲得し始めた週だった。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.158（5月30日リリース）

小規模なリリース。エンタープライズ向けのAuto Mode対応を拡大。

- **Auto Mode対応拡大**: Bedrock、Vertex、FoundryでOpus 4.7およびOpus 4.8のAuto Modeが利用可能に。`CLAUDE_CODE_ENABLE_AUTO_MODE=1`環境変数で有効化

[GitHub Releases v2.1.158](https://github.com/anthropics/claude-code/releases/tag/v2.1.158)

### Claude Code v2.1.157〜v2.1.154（前回から継続）

プラグイン自動ロード、`claude plugin init`、Opus 4.8対応、Dynamic Workflows等の大型リリース群。詳細は前回レポート参照。

### Claude Mythos Preview / Project Glasswing（前回から継続）

サイバーセキュリティ防御イニシアチブ。Claude Mythos Previewを用いた脆弱性検出・修正パートナーシップ。

## コミュニティの反応

### Skills設計・プラグイン運用

#### Tips

> Claude Code Skillsでなぜその設計にするのか — 命名・粒度・description設計の判断基準。descriptionを「仕様書」ではなく「発火確率の調整値」として設計する理由を解説 — @YujiNaramoto [Qiita](https://qiita.com/YujiNaramoto/items/93f393418f2da91e2777)

> Claude Code skill のベストプラクティス — 公式仕様とコミュニティ linter で自己レビューする。nameは64文字以内、descriptionは1024文字以内等の具体的な数値制約を整理 — @ぐで象 [Zenn](https://zenn.dev/gudezou/articles/9defb66939bc85)

> Claude Code カスタムサブエージェントの作り方 — プロジェクト専用AIチームを構築する。`.claude/agents/`にMarkdownファイルを1つ置くだけで専門特化したAIチームメイトを定義 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-custom-agents-guide)

> Claude Codeの.claude/の賞味期限がきれてしまう問題を半年運用しながら直し続けた話。log → review → amend → evalの4スキルでルールを自己書き換えする仕組みを構築 — @R｜AI ×個人開発 [Zenn](https://zenn.dev/rkpg/articles/claude-code-self-improving-skill-loop)

### Dynamic Workflows

#### Tips

> Claude Code Dynamic Workflowsとは一体何なのか。「前からsubagent + skillsでやっていたよね？」という疑問に答える形で差分を解説 — @alpha123 [Qiita](https://qiita.com/alpha123/items/bbe84d53a4d95e1cb044)

> Claude Code の Dynamic Workflows を理解する — Subagents / Skills との違いと実務での使い分け（前回から継続） — @akasara [Zenn](https://zenn.dev/akasara/articles/ccfb2f7a5174e0)

### セキュリティ・安全性

#### Tips

> Claude Code と Codex の両方に、機密情報と個人情報を漏らさせない hook を作った話。公開前にコミット履歴内の機密情報を発見した経験から、事前防止の仕組みを構築 — @とだやま.R [Zenn](https://zenn.dev/todayama_r/articles/multi-agent-secret-pii-guard-hooks)

> Claude Code の設定でセキュリティを守る — permission rules / hooks / skills。「気をつけよう」では抜ける問題を設定で機械的に止める層の設計 — @kh923 [Zenn](https://zenn.dev/kashi923/articles/0afb7aab01b55c)

> Mythosで本当に騒ぐべきこと — 攻撃と防御の、時間軸が分かれる。CVE・KEV・ゼロデイの数値を「割合」と「時間軸」に分けて読み解く — @noah [Zenn](https://zenn.dev/noah33/articles/mythos-defenders-clock)

### Opus 4.8

#### Tips

> Opus 4.8 とGPT-5.5 で開発サイクルを1日で回した — AI同士のレビュー応酬と、CIが拾った実バグ。法務SaaSの設計・実装・レビュー・マージを1セッションで完結 — @弁護士太田垣佳樹 [Zenn](https://zenn.dev/yoshiki_otagaki/articles/c2dfe8efe5c5a3)

> 「英語で使えば安い」は本当か? Claude Opus 4.8 のトークン消費を3言語で測ってみた。日本語は英語の約1.23倍の出力トークンを使用 — @LohVin [Qiita](https://qiita.com/LohVin/items/8eee9339b5d817657a5e)

> Claude Opus 4.8 の新機能・4.7との違いを整理｜Fast mode/Dynamic Workflows。Opus 4.7から41日でのリリース、料金据え置き — @Goki602 [Zenn](https://zenn.dev/goki602/articles/2026-05-30-claude-opus-4-8-what-changed)

### Claude Code 運用・ベストプラクティス

#### Tips

> Claude Code の /goal コマンドで AI を自走させる — 完了条件を1行書いて放置する新しい開発スタイル。v2.1.139で追加された機能の実践的な活用法 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-25-105253)

> Claude を止める、任せる、戻す。対話が噛み合っているのに全体として見ると別の場所がずれていく問題への対処法 — @yasu（ソニックガーデン） [Zenn](https://zenn.dev/sonicgarden/articles/9f9813ce5902c8)

> Claude Code のトークンを節約する CLAUDE.md 設計術 — 階層化・rules・auto memory の使い分け。トークン節約という一本の軸で公式機能を整理 — @ジャック [Zenn](https://zenn.dev/jacksen/articles/beb2bf40b3a8b6)

> Claude Codeの実装計画をCodexにレビューさせるカスタムコマンドの構築。plan.mdとfeedback.mdの2枚のMarkdownだけでやり取りするシンプルな設計 — @J niwacis [Zenn](https://zenn.dev/yrd/articles/0a864999b398a5)

> Claude Code のレビューエージェントを実戦で育てる — モバイルUXレビュアー開発記。GA4で読者の6割がスマホと判明し、レビューパイプラインにモバイルUX視点を追加 — @タカシ [Zenn](https://zenn.dev/motowo/articles/claude-code-mobile-ux-reviewer-agent)

### Vertex AI連携

#### Tips

> Claude Code を Vertex AI 経由で最新モデルで使う & settings.json をセキュアに整える。Opus 4.8をVertex AI経由で動かす際のハマりポイントを記録 — @takaha4k [Zenn](https://zenn.dev/takaha4k/articles/claude-code-vertex-ai-secure-settings)

### Anthropic思想・エコシステム

#### Tips

> AIが奪えない仕事は「物理世界と情報世界の翻訳」だ — ヒューマン・イン・ザ・ループの帯域設計。法律事務所向けSaaS開発者の視点からAI時代の人間の役割を考察 — @弁護士太田垣佳樹 [Zenn](https://zenn.dev/yoshiki_otagaki/articles/9186c5a2504b8e)

> AI疲れが加速するので、Claude CodeのRemote Controlを使うのをやめた。便利さの裏で睡眠時間が削られ生活リズムが崩れた体験談 — @karamage [Zenn](https://zenn.dev/karamage/articles/c82e2cb142701a)

> マルチエージェントを 10 時間動かし続けると何が起きるか — Anthropic 訓練手法と Stanford 観察論。長時間連続稼働の現実的な問題を整理 — @Shiros [Zenn](https://zenn.dev/znet/articles/2026-multiagent-long-running-safety)

### Claude Code 無料hook配布

#### Tips

> Claude Code の無料の hook を配り続けて、有料の Zenn の本6冊が累計12件売れた。100時間以上の実機運用で得た知見をhookとして配布する活動報告 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/bdce346006bd34f6a2ce)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
