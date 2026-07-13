---
title: "公式更新なし、Fable 5サブスク終了は7/20へ延長"
summary: "2026-07-14は新規の公式アップデートなし（最新はv2.1.207、既報）。前回7/13締切としたFable 5のサブスク枠離脱は7/20 15:59 JSTへ延長され、Claude Code週次上限+50%措置も同日まで継続。コミュニティはCLAUDE.md軽量化とトークンオーバーヘッド検証が本日の中心。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-14

features:
  - "Fable 5サブスク枠終了が7/20 15:59 JSTへ延長"
  - "CLAUDE.md/AGENTS.md軽量化の実務（ETH Zurich検証）"
  - "Claude Code vs OpenCode トークンオーバーヘッド検証"
codex_review: "新機能ゼロの日でも、指示ファイルの減量やハーネスの無駄トークン検証が主役になるのは今のコーディングAIらしい。派手さは薄いが、実運用の勝ち筋がUIよりコンテキスト設計に移っている感じはかなり重要だ。"
codex_importance: 3
---

## 公式アップデート

**本日の公式アップデートはありません。**

Claude Code Releasesの最新は **v2.1.207**（2026-07-11）で、前回レポートで既に詳述済みです。本日（2026-07-14）時点で新規リリース・新機能・Anthropicの新規発表は確認できませんでした。以下はコミュニティ側で本日固有に動いた話題に焦点を当てます。

[ソース](https://github.com/anthropics/claude-code/releases)

## コミュニティの反応

> 本日はX検索（Grok x_search）をスキップしているため、以下はすべてZenn/Qiitaの記事ベースです。

### Fable 5サブスク枠終了が7/20 15:59 JSTへ延長

前回レポートで「7/13 15:59（JST）締切」としたFable 5のサブスク週次枠離脱は、**Anthropicが期間を延長し7/20 15:59（JST）へ後ろ倒し**になりました。Claude Codeの週次利用上限を50%引き上げる期間限定措置も同日まで継続します。締切直前の駆け込み活用術が引き続き投稿されています。

#### 補足（新情報）

> 公開時点（7/10）は7/13 15:59離脱の予定だったが、その後7/20 15:59へ延長。週次上限+50%措置も同日まで延長された。 — Zenn @ふくだ（fukuda ryu） / カンリー [記事](https://zenn.dev/canly/articles/c61c3bc3f903fc)

#### Tips

> 当初の終了予定日の前日に、自分の公開記事を素材にFable 5とGPT-5.6 Solを作者を伏せた採点で対決（82対75）。延長で駆け込み検証の時間が延びた。 — Zenn @moname_ai [記事](https://zenn.dev/ai_worklab/articles/fable5-gpt56-blind-test)

### CLAUDE.md/AGENTS.md軽量化の実務（ETH Zurich検証）

指示ファイルに文脈を足すほど賢く動く、という直感を否定する検証（ETH Zurich SRI Lab, Gloaguen et al.）を起点に、CLAUDE.md/AGENTS.mdを「痩せさせる」運用の議論が本日集中しました。v2.1.206で追加された、CLAUDE.mdの冗長箇所を削る`/doctor`チェックとも呼応します。

#### Tips

> 良かれと思って足した説明がコストだけ増やしていた。ETH ZurichのAGENTS.md検証を踏まえ、指示ファイルを削る実務をまとめた。 — Zenn @整理 [記事](https://zenn.dev/seiri_dev/articles/eca7dc89261ab8)

> ~/.claude/CLAUDE.md が育ちすぎた200行超のグローバル設定を、tipsの「発火頻度」で仕分け直した。 — Qiita @ishizakahiroshi [記事](https://qiita.com/ishizakahiroshi/items/8ffdb968963c4e992662)

### Claude Code vs OpenCode トークンオーバーヘッド検証

同一モデル・同一タスクで、応答前にハーネスが消費するトークン量を比較した検証記事が拡散。Claude Codeは応答前に約3.3万トークン、OpenCodeは約7千という差が示され、コスト・レイテンシ・コンテキスト予算への影響が議論されています。

#### ネガティブ

> ハーネスのペイロードに使うトークンは本来コードに使えるはずの作業用コンテキストを消費する。Claude Codeは3.3万、OpenCodeは7千だった。 — Zenn @崔 一航_Ikkou Sai / SALT2 [記事](https://zenn.dev/salt2/articles/claude-code-3-3-opencode-7-c7716f3e)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
