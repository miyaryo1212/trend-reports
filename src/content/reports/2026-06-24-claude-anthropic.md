---
title: "Claude TagでSlackからタスク委任、Anthropicが熟練研究公開"
summary: "Slackで@Claudeとタグ付けしてタスクを委任できる新コラボ機能「Claude Tag」が2026-06-23に発表。AnthropicはClaude Code約40万セッションを分析し、ドメイン専門性が高いほど指示あたりの作業量が増えると報告した。GitHub Releasesは前回のv2.1.186から新バージョンなし。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-24

features:
  - "Claude Tag"
  - "Claude Code利用実態調査 (約40万セッション)"
codex_review: "Slackでの委任機能は導入が進めば効くが、現時点では“便利そう”止まり。むしろ40万セッション分析のほうが地味に重要で、AIコーディングが結局は熟練者を増幅する現実を示している。"
codex_importance: 3
---

## 公式アップデート

本日、Claude Code の GitHub Releases に前回（v2.1.186）以降の新バージョンはありません。本日固有の動きとして、以下2件を取り上げます。

### Claude Tag（Slack連携の新コラボ機能）

2026-06-23、Slack 上で「@Claude」とタグ付けすることでタスクを委任できる新しいコラボレーション機能 **Claude Tag** が発表されました。チャンネルの文脈を記憶し、将来のタスクを計画できるとされています。

### Claude Code 利用実態調査（約40万セッション）

Anthropic が、2025年10月〜2026年4月にかけての約40万セッションを分析した Claude Code の利用実態調査を公開しました。報告では、ドメイン専門性が高いほど、1つの指示あたりに Claude が行う作業量が増える傾向が示されています（"Agentic coding and persistent returns to expertise"）。

## コミュニティの反応

### Claude Tag

直近1週間（2026-06-16以降）の個人ユーザーによる実使用体験・感想投稿は **該当なし**。発表当日中心に公式引用・概要共有・疑問提起が大半で、実使用レポートはまだ出ていません（参考: 課金面への疑問や、Slack日常ユーザーとしての期待、文脈理解への疑問などの初期反応は見られました）。

### Claude Code 利用実態調査（約40万セッション）

#### ポジティブ

> Anthropicの研究「Agentic coding and persistent returns to expertise」を一次情報で読み直し、「設計と判断は自分でやり、コードはAIに任せる」という自前のルールが約40万セッションの実データと同じ方向を向いていたと整理 — @Pq9u0 [Zenn](https://zenn.dev/pq9u0/articles/claude-code-expertise-report)

> $20/monthのClaudeサブスク＋Codespaces＋Claude Codeだけで、個人で出荷可能なプロダクトが作れた。bells and whistlesは不要で、開発スキルがあれば十分 — @oldmanjohnny_sc [X](https://x.com/oldmanjohnny_sc/status/2069522856959205858)

#### ネガティブ

> シンプルなテキストファイルの読み込み・検証だけでClaude Codeに$20かかった。一方DeepSeekなら1セントで済んだ — @NidhalDerwich [X](https://x.com/NidhalDerwich/status/2069524530226503885)

#### Tips

> 「/goal」と入力するだけでClaudeが自律的にループして目標達成まで動く。実際に4時間連続でAIサポートエージェントの修正を完了させた — @Sabrina_Ramonov [X](https://x.com/Sabrina_Ramonov/status/2069522130551652447)

> Routines機能でバグ検知→原因特定→PR作成までClaudeが自律的に行い、「朝チャンネルを開いたら昨夜のバグ報告が既に直っていた」状態を実現 — @chroniki_ai [X](https://x.com/chroniki_ai/status/2069517366330064978)

> 複雑なベクトルDBやグラフより、markdown＋claude.mdルーター中心の「Level 2」システムが一番実用的。Claudeが全ファイルを上から読む方が見落としが少ない — @fuxps32 [X](https://x.com/fuxps32/status/2069522856959205858)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
