---
title: "Claude in ChromeがGA、Fable 5が全世界再提供"
summary: "ブラウザ操作エージェント Claude in Chrome が Claude Code v2.1.198 で一般提供に。同バージョンではバックグラウンドエージェント通知や自動PR化、Exploreのモデル継承など多数の改善が入った。輸出規制解除を受け Claude Fable 5 が7/1に全プラットフォームで再提供開始。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-02

features:
  - "Claude for Chrome（GA）"
  - "バックグラウンドエージェント通知（Notificationフック）"
  - "/dataviz スキル"
  - "バックグラウンドエージェントの自動PR化"
  - "Claude Platform on AWS（Gateway）"
  - "Exploreエージェントのモデル継承"
  - "サブエージェントの拡張思考継承"
  - "Claude Fable 5 全世界再提供"
codex_review: "Chrome操作のGAそのものより、通知フックや自動PR化で“待たされるAI”を“放置できるAI”へ寄せた点が面白い。Fable 5再提供は騒がれやすいが、業界目線では供給安定の確認というやや地味で重要な一手だ。"
codex_importance: 4
---

## 公式アップデート

### Claude in Chrome が一般提供開始（GA）

ブラウザ操作エージェント **Claude in Chrome** が一般提供（GA）になりました。Claude Code **v2.1.198** で公開されています。

[Claude Code Releases v2.1.198](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### Claude Code v2.1.198 の主な変更

- **バックグラウンドエージェント通知**: `claude agents` のセッションが入力待ち／完了時に `Notification` フック（`agent_needs_input` / `agent_completed`）を発火するようになりました。
- **`/dataviz` スキル追加**: チャート・ダッシュボード設計のガイダンスと、実行可能な配色パレット検証ツールを提供します。
- **バックグラウンドエージェントの自動PR化**: worktree でのコード作業を終えると、停止して確認を求める代わりに自動で commit・push し、ドラフトPRを作成します。
- **Exploreエージェントのモデル継承**: 内蔵の Explore エージェントが haiku ではなくメインセッションのモデル（opus 上限）を継承するようになりました。
- **サブエージェントの拡張思考継承**: サブエージェントとコンテキスト圧縮がセッションの extended thinking 設定を継承し、委任タスクの出力品質が向上します。
- **Gateway に Claude Platform on AWS（anthropicAws）を追加**: 新たなアップストリームプロバイダとして追加され、モデル未検出時のレスポンスはフェイルオーバーチェーンを継続します。

このほか、ネットワーク瞬断でのターン中断のリトライ化、`/diff` パネルのブランチ切替時の更新、markdown テーブルのフルスクリーン表示崩れ修正など、多数の不具合修正・改善が含まれます。

[Claude Code Releases v2.1.198](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### Claude Fable 5 全世界再提供

米国の輸出規制解除（6/30）を受け、一時停止していた **Claude Fable 5** が **7/1** に全プラットフォームで再提供されました。安全分類器を改良し、Pro/Max/Team 向けには **7/7 まで週次上限の最大50%を無償付与**するとされています。あわせて業界横断のジェイルブレイク採点基準の取り組みも始動しています。

[Fable 5 が輸出規制撤回でグローバル再提供（Qiita）](https://qiita.com/picnic/items/8cb0a82ac77dc639f439)

## コミュニティの反応

### バックグラウンドエージェント通知（Notificationフック）

#### ポジティブ

> Claude Code の Notification/Stop フックで「入力待ち／完了時」に自動通知を送る Skill を自作し、iPad などへプッシュ通知が飛ぶようになった。長時間エージェント運用が劇的に快適になった — @kazunori_279 [X](https://x.com/kazunori_279/status/2070256428187791625)

### Exploreエージェントのモデル継承

#### ポジティブ

> Explore エージェントがメインセッションの Opus を継承するよう設定（`model: inherit`）したら、repo 探索も高性能モデルで動くようになり「chatbot っぽさ」がなくなって本格的なエンジニアリングシステムになった — @ZacharyKiefer4 [X](https://x.com/ZacharyKiefer4/status/2071739142921130470)

#### ネガティブ

> repo 探索フェーズが軽量サブエージェント（おそらく Haiku）で動くのはコンテキスト節約になる一方、何が動いているのか透明性に欠ける — @rben_ll [X](https://x.com/rben_ll/status/2072085364030820437)

### Claude Fable 5 全世界再提供

X 上の個人ユーザーによる実利用体験の投稿は確認できませんでしたが、再提供を受けた解説・考察記事が複数出ています。

- [Claude Fable 5復活で見えた、AIモデルを「ただのAPI」として扱えない時代（Qiita）](https://qiita.com/koreangyoseishoshi/items/4a2aa9f073564cfedc95)
- [OpenMythosはFable 5 / Mythos 5を再現できているのか（Zenn）](https://zenn.dev/jamesbob/articles/openmythos-fable5-verification)

### Claude in Chrome（GA） / /dataviz / 自動PR化 / Claude Platform on AWS / 拡張思考継承

いずれも v2.1.198 での新規項目のため、現時点では個人ユーザーによる実体験・感想投稿は確認できませんでした。

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
