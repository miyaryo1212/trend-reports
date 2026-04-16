---
title: "/team-onboardingとultraplanへの反応拡大、Hooks活用が本格化"
summary: "Claude Code v2.1.101の新機能（/team-onboarding、/ultraplan）への実践レポートがX・Zennで増加。Hooks・Skills・サブエージェントの使い分けやコンテキスト管理など、運用ノウハウの共有が活発化。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-12
features:
  - "/team-onboarding コマンド"
  - "OS CA 証明書ストア信頼のデフォルト化"
  - "/ultraplan 自動クラウド環境作成"
  - "コマンドインジェクション脆弱性修正"
  - "メモリリーク修正"
  - "--resume/--continue セッション復元の改善"
codex_review: "新機能そのものより、HooksやSkillsを含む運用ノウハウが一気に共有フェーズへ入った点が面白い。派手さは薄いが、AIコーディングが個人芸からチーム運用へ移る前触れとしては地味に重要です。 ※ このレビューは後日生成されました"
codex_importance: 3
---

## 公式アップデート

本日の新規公式アップデートはありません。最新リリースは Claude Code v2.1.101（2026-04-10）で、前回レポートで詳述済み。

### Claude Code v2.1.101（前回から継続）

`/team-onboarding` コマンド、OS CA 証明書ストア信頼のデフォルト化、`/ultraplan` 自動クラウド環境作成、セキュリティ修正、メモリリーク修正など。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.101)

## コミュニティの反応

### /team-onboarding コマンド

#### ポジティブ

> /team-onboarding を実際に実行し、プロジェクトの作業タイプ内訳・使用頻度の高いスキル・MCP サーバー・セットアップチェックリストなどを含む ONBOARDING.md が自動生成される便利さを紹介。新メンバーへの引き継ぎが効率化 — @oikon48 [X](https://x.com/i/status/2042796840865927288)

> Valibot プロジェクトで /team-onboarding を実際に試した体験をブログに投稿 — @ysknsid25 [X](https://x.com/i/status/2042931754030501985)

### /ultraplan 自動クラウド環境作成

#### ポジティブ

> /ultraplan は初心者に超おすすめ。設計図を先に作ってくれて導入が3分、副業活用法も共有 — @09pauai [X](https://x.com/i/status/2042785788539322719)

> /ultraplan で workflow が大幅高速化。ターミナルをロックせずクラウドで plan 作成しブラウザで feedback、ステップバイステップの使い方を説明 — @DataChaz [X](https://x.com/i/status/2042901347469860869)

> /ultraplan で planning をクラウドに移行しブラウザで詳細レビュー・編集可能。ターミナルフリーで実行選択肢豊富 — @VibeMarketer_ [X](https://x.com/i/status/2042677842056511896)

> 先週から /ultraplan を試用。Plan を Web で非同期実行可能で便利 — @oikon48 [X](https://x.com/i/status/2042752554342428797)

### OS CA 証明書ストア信頼のデフォルト化

#### 中立

> v2.1.101 のリリースノートから抜粋して紹介。エンタープライズ環境での利便性向上 — @grok48 [X](https://x.com/i/status/2042601431409267004)

### --resume/--continue セッション復元

#### Tips

> `claude --resume` で直前のセッションを再開でき、セッション ID 指定も可能。長いタスク中断時に便利 — @kotaro_ai_lab [X](https://x.com/i/status/2041816698089857113)

> セッション間の記憶リセット問題を解決する失敗学習ループを紹介。レビュー指摘を「状況・失敗・正解」形式で設定ファイルに記録し AI の出力品質を向上 — @kentaro [X](https://x.com/i/status/2042801819236339742)

> Obsidian に保存した知識をセッションスタート時にブリーフし、エージェントの劣化を自律リペアする仕組みを試作 — @enhanced_jp [X](https://x.com/i/status/2041138910185832943)

### Claude Code Hooks・Skills・サブエージェント

#### Tips

> Claude Code Hooks で自動テスト環境を構築する完全ガイド。ファイル保存時に自動でテストを走らせる方法を解説 — @まさ＠ClaudeCodeLab [Zenn](https://zenn.dev/masa1990/articles/claude-code-hooks-auto-test)

> Claude Code の hook、どれを入れればいい？ 5つの質問で最適な安全設定が分かる Hook Selector ツールを作成 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/6fa3ebbb45406547d2ff)

> Claude Code の Skills と Sub-agents の使い分け。コンテキスト共有が必要なら Skills、並列実行・大規模探索なら Sub-agents — @kexi [Zenn](https://zenn.dev/cureapp/articles/claude-code-skills-vs-subagents)

> Agent tool の model パラメータでサブエージェントのモデルを Sonnet に切り替え、トークンコストを下げる実装方法 — @masakazuimai [Qiita](https://qiita.com/masakazuimai/items/4952437e1e5d8c7a8803)

> Claude Code の skill エコシステムの現在地。thought-analyzer と構造的に近い実装が複数見つかり、設計の個性を分析 — @Thought analyzer [Zenn](https://zenn.dev/analysis/articles/thought-analyzer-skill-ecosystem)

### Claude Code 開発手法・設計論

#### Tips

> コードは「使い捨て」でいい。AI 時代の3層設計パターン（Durable Core / Connectors / Disposable Layer）で「書き直す前提」のアーキテクチャを設計 — @あきらパパ [Zenn](https://zenn.dev/akira_papa/articles/becfe25a3c8f6e)

> AI コーディングで「ブレない・ズレない」開発を実現する3層防衛戦略。上流で防ぐ・AI で代替する・役割を再定義する — @CodeBond [Zenn](https://zenn.dev/76hata/articles/ai-coding-no-drift-three-layer-strategy)

> feature 単位で小さく回しつつ、必要な仕様は横断して読む。forge と doc-advisor プラグインの活用 — @k2moons [Zenn](https://zenn.dev/k2moons/articles/05a2a1ac34e9d1)

> CLAUDE.md の書き方完全ガイド。配置場所・優先順位・ベストプラクティス — @まさ＠ClaudeCodeLab [Zenn](https://zenn.dev/masa1990/articles/d4ae86c700e024)

> LLM の最大の弱点は「忘れること」。CLAUDE.md の仕組みを「組織構造」として再設計するアプローチ — @しろ [Zenn](https://zenn.dev/shiro_tools/articles/63e0483e35ec49)

> CoDD（整合性駆動開発）の自律テスト実行ループで SWE-bench スコアが 60% → 93.3% に向上 — @おしお [Zenn](https://zenn.dev/shio_shoppaize/articles/codd-swebench-loop)

### Claude Code 活用事例

#### Tips

> vibe coding 専用のデスクトップシェル vibe-editor を Electron で作成。「エディタの無いエディタ」という設計思想 — @yusei [Zenn](https://zenn.dev/yusei08/articles/420c3e81a1260d)

> Claude Code と朝10分の GTD。対話するだけでタスクが構造化されていく体験 — @はむ～ [Zenn](https://zenn.dev/tottoko_hamu/articles/claude-todo-morning-gtd)

> agent-browser 入門。Claude Code からブラウザを自在に操る導入ガイドと他ツール使い分け — @しんや [Zenn](https://zenn.dev/shinyaa31/articles/082457e115885c)

> DESIGN.md + 壊れたら気づくハーネスで AI 向けデザインシステム melta UI を「維持できる仕組み」に — @tsubotax [Zenn](https://zenn.dev/tsubotax/articles/7f0d3693f70e2f)

> PR を出すだけでスクショ付き動作確認レポートが自動生成される仕組みを作る（Claude × Playwright） — @山口歩夢 [Zenn](https://zenn.dev/datum_studio/articles/ebefce70f39a0d)

> Figma Make のモックアップを Claude が再現してくれない問題を、一発で解決する Chrome 拡張を作成 — @Takuto Tanaka [Zenn](https://zenn.dev/t09tanaka/articles/0822a50701f0e6)

> 非エンジニアが作ったアプリに体験版を追加した話。Claude Code で開発した「長い長いノート」 — @あろか [Zenn](https://zenn.dev/tiaroka/articles/1fe6169a4bf7d7)

> Claude Code で仮想組織を構築する方法。個人開発の視点の偏りを複数エージェントで補う — @binkraft [Zenn](https://zenn.dev/binkraft/articles/4606e4199af3ec)

### Managed Agents（前回から継続）

#### Tips

> Claude Managed Agents を試してみた。実際の入門に必要な情報を手を動かしながら検証 — @Kazumasa KUMAMOTO [Zenn](https://zenn.dev/kumamo_tone/articles/365845d65e6cf4)

> Claude Managed Agents 入門。インフラ不要で AI エージェントを本番運用する方法 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/69bef4fccad0163dca1e)

### ant CLI（前回から継続）

#### Tips

> Anthropic が公式 CLI「ant」を出していたので調べた。curl で JSON を手書きするより全然よかった — @o0-sheeefk-0o [Qiita](https://qiita.com/o0-sheeefk-0o/items/a42f85763b297592e073)

### Claude Mythos Preview（前回から継続）

#### 中立

> Claude Mythos Preview System Card の RSP 評価セクションの日本語訳を公開 — @sol-sun [Zenn](https://zenn.dev/sol_sun/articles/claude-mythos-02-rsp_01)

> Anthropic が「強すぎて公開できない」AI を作ってしまった話。技術知識がない方向けに解説 — @burori [Zenn](https://zenn.dev/burori/articles/42afb887d22037)

### Claude Code 品質・安定性

#### ネガティブ

> Claude Code アップデートで作ったマルチエージェント組織の取締役が暴走した話。エージェント機能の不安定さ — @ratorin [Qiita](https://qiita.com/ratorin/items/2140dcd4633aa32888f9)

#### Tips

> Claude 系の稼働ステータスに問題がある時 Slack に通知する仕組みを作成。障害情報の事前把握 — @miriwo [Qiita](https://qiita.com/miriwo/items/21b1055016850810253e)

> コンテキスト節約から生まれた開発環境・運用。トークン消費量の最適化手法 — @三日月 [Zenn](https://zenn.dev/kzkm/articles/claude-code-devenv-20260408-1355)

> AI 技術スタック現在地（2026/04版）。Claude Code（Opus 4.6 1M）をメイン実装に使用 — @たけたけ [Zenn](https://zenn.dev/littletake/articles/20260317-ai-tech-stack-current)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
