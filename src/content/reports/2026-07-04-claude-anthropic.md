---
title: "Claude in ChromeがGA、サブエージェント既定バックグラウンド化・/dataviz追加"
summary: "Claude Code v2.1.198でClaude in Chromeが一般提供に。サブエージェントが既定でバックグラウンド実行となり、/datavizスキルも追加。v2.1.200では既定権限モードが\"Manual\"に改称。AnthropicはジェイルブレイクをCJS-0〜4で評価するCJSフレームワークの初期ドラフトを公開。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-04

features:
  - "Claude in Chrome 一般提供(GA)"
  - "サブエージェントの既定バックグラウンド実行"
  - "/dataviz スキル"
  - "Claude Platform on AWS (anthropicAws)"
  - "既定権限モードの\"Manual\"化"
  - "スタックされたスラッシュスキル呼び出し"
  - "Fable 5 サイバーセキュリティ・セーフガード & CJS フレームワーク"
codex_review: "Chrome GAそのものより、サブエージェントの常時バックグラウンド化と権限周りの再整理が効いている。派手さは薄いが、Claude Codeをデモから常用ツールへ押し上げる地味に大きい更新だと思う。"
codex_importance: 4
---

## 公式アップデート

### Claude in Chrome 一般提供 (GA)

**v2.1.198** で **Claude in Chrome** が一般提供 (GA) になりました。これまで段階的に展開されていたChromeブラウザ操作機能が、正式に全ユーザー向けに開放されています。

[Claude Code Releases v2.1.198](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### サブエージェントが既定でバックグラウンド実行に

**v2.1.198** で、サブエージェントが**既定でバックグラウンド実行**になりました。実行中もClaudeがメインの作業を続けられ、完了時に通知が届きます (従来は段階的ロールアウト)。あわせて `claude agents` にバックグラウンドエージェント通知が追加され、入力待ち・完了時に `Notification` フック (`agent_needs_input` / `agent_completed`) が発火します。

[Claude Code Releases v2.1.198](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### /dataviz スキル追加

**v2.1.198** で **`/dataviz`** スキルが追加されました。チャート・ダッシュボード設計のガイドと、実行可能なカラーパレット検証ツールを提供します。

[Claude Code Releases v2.1.198](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### Claude Platform on AWS (anthropicAws) を上流プロバイダに追加

**v2.1.198** で、Gatewayの上流プロバイダとして **Claude Platform on AWS (anthropicAws)** が追加されました。model-not-found 応答時にはフェイルオーバーチェーンが前進します。

[Claude Code Releases v2.1.198](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### 既定権限モードが "Manual" に改称

**v2.1.200** で、CLI・`--help`・VS Code・JetBrains 全体を通じて既定の権限モード名が "default" から **"Manual"** に変更されました。`--permission-mode manual` および `"defaultMode": "manual"` が `default` と並んで受け付けられます。

なお同バージョンでは、`AskUserQuestion` ダイアログが**既定で自動継続しなくなり**、アイドルタイムアウトは `/config` からのオプトイン方式になりました。

[Claude Code Releases v2.1.200](https://github.com/anthropics/claude-code/releases/tag/v2.1.200)

### スタックされたスラッシュスキル呼び出し

**v2.1.199** で、`/skill-a /skill-b do XYZ` のようにスタックしたスラッシュスキル呼び出しが、先頭から**最大5スキルまで一括ロード**されるようになりました (従来は先頭1つのみ)。

[Claude Code Releases v2.1.199](https://github.com/anthropics/claude-code/releases/tag/v2.1.199)

### Fable 5 サイバーセキュリティ・セーフガード & CJS フレームワーク

Anthropicが、ジェイルブレイクの深刻度を **CJS-0〜CJS-4** で評価する **Claude Jailbreak Severity (CJS) フレームワーク**の初期ドラフトを公開しました (7/2)。Fable 5 のサイバーセキュリティ・セーフガードと連動する枠組みです。

## コミュニティの反応

### Claude in Chrome 一般提供 (GA)

#### ポジティブ

> Claude CodeにGoogle Adsアカウントへログインさせ、キーワード分析からキャンペーン設定まで30分で完了。Playwright経由でChromeを自動操作してくれたのが特に便利だった。 — @venelinkochev [X](https://x.com/venelinkochev/status/2072976454837567703)

> Claude CodeにChrome拡張を作らせてAmazon出品作業を自動化。コピペ作業が2〜4分→即時リスト化に短縮された。 — @BowTiedBuildr [X](https://x.com/BowTiedBuildr/status/2073022172491137528)

> Claude in Chrome + Coworkで30分でバックリンク付き無料サイトを作成。ブラウザ操作を任せられるのが実用的。 — @Brinvik_com [X](https://x.com/Brinvik_com/status/2072974198494962063)

> Claude in ChromeのGAでブラウザ操作が本格的に使えるようになり、WP保守業務の自動化が進んだ。PR作成まで自律でやってくれるのが大きい。 — @accell_mo_kun [X](https://x.com/accell_mo_kun/status/2073004827878236284)

#### ネガティブ

> Claude in Chromeで使用量80%超えの際に「追加使用中」と誤表示されるバグが発生。実際には使っていないのに表示される。 — @CommonSenseMars [X](https://x.com/CommonSenseMars/status/2071090957047706023)

### サブエージェントの既定バックグラウンド実行

#### ポジティブ

> サブエージェントがバックグラウンドで動くようになり、長時間タスクがメインのチャットをブロックせず、完了時に通知が来てスムーズに続けられる。 — @kr0der [X](https://x.com/kr0der/status/2072850562450911270)

> v2.1.198以降、サブエージェントに大規模調査や複数ファイルのリファクタリングを任せて並列実行でき、変更計画を確認してから進めてくれるので安心して任せられる。 — @ai_claude_jp [X](https://x.com/ai_claude_jp/status/2072795028921991295)

#### ネガティブ

> バックグラウンドサブエージェント完了時の「wake up」通知がまだ不安定で、確実に通知が来ない場合がある。 — @pankaj [X](https://x.com/pankaj/status/2072859569009893718)

#### Tips

> 「use a subagent to check test coverage」のようにサブタスクをサブエージェントに振るとバックグラウンドで実行され、メインスレッドが散らからない。 — @muan85 [X](https://x.com/muan85/status/2072699440683479407)

### /dataviz スキル

#### ポジティブ

> `/dataviz` がチャート/ダッシュボード設計ガイドと実行可能なカラーパレット検証ツールをコンテキストに直接読み込んでくれるので、AI生成ダッシュボードのデザイン品質が劇的に向上した。 — @dani_avila7 [X](https://x.com/dani_avila7/status/2072460033896419478)

> Claude Codeの `/dataviz` スキルが凄かった。配色もマークの太さも自分では1つも決めず、売上ダッシュボードが完成した。 — @leomarokun ([Qiita](https://qiita.com/leomarokun/items/74212606fbf4f01d82dd))

> v2.1.198で `/dataviz` Skill が追加され、日常のデータビジュアライズ作業が捗るようになった。 — @kuusou_sim [X](https://x.com/kuusou_sim/status/2073103282093056018)

### その他のトピック

Claude Platform on AWS (anthropicAws)・既定権限モードの"Manual"化・スタックされたスラッシュスキル呼び出し・Fable 5 CJS フレームワークについては、直近7日間で個人ユーザーによる実体験・感想・Tipsに該当するX投稿は確認できませんでした (該当なし)。変更告知やchangelog系の言及が中心です。

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Qiita - Claude Codeの dataviz スキルが凄かった](https://qiita.com/leomarokun/items/74212606fbf4f01d82dd)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
