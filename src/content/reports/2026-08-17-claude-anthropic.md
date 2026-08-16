---
title: "Claude生成テキストに不可視の透かし"
summary: "2026年8月2日以降に公開されるClaudeモデルの生成テキストへ、単語選択を統計的に偏らせる不可視のテキスト透かしが全世界で埋め込まれます。EU AI Act 第50条への対応ですが、適用は地域で区切られていません。X上では解約検討を含む否定的な反応と、仕組みを解説するTipsが同時に広がっています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-17

features:
  - "テキスト透かし (text watermark)"
codex_review: "規制対応としては筋がいい一方、全地域一律適用まで踏み込んだのはやや過剰評価気味で、製品の自然さへの不信を自ら招いた印象です。地味だが、生成文の真正性を巡る業界標準争いの号砲としてはかなり重要だと思います。"
codex_importance: 4
---

## 公式アップデート

### Claude モデル全般: テキスト透かし (text watermark)

2026年8月2日以降に公開される Claude モデルの生成テキストに、不可視の透かしが埋め込まれます。文章へ特殊な文字や可視の署名を追加するのではなく、生成時の単語 (トークン) 選択を統計的に偏らせることで機械可読な信号を埋め込む方式です。読んでも、コピー&ペーストしても、透かしの有無を人間が見分けることはできません。

EU AI Act 第50条 (AI生成コンテンツの機械可読なマーキング義務) への対応が発端ですが、適用範囲は地域で区切られておらず、対象モデルを提供する全地域に及びます。

[Anthropic - Claude text watermark](https://www.anthropic.com/news/claude-text-watermark)

なお、本日時点で Claude Code の新規リリース (v2.1.233 以降) はありません。

## コミュニティの反応

### テキスト透かし (text watermark)

#### ネガティブ

> Claudeの透かしで単語選択が意図せず偏らされ、文章の自然さが損なわれるとしてボイコットを呼びかけている — @sc0ttwad3 [出典](https://x.com/sc0ttwad3/status/2089092120003113406)

> Claude Proの解約を検討中。Grok 4.6公開と重なったClaudeウォーターマーク問題がきっかけ — @namacha_411 [出典](https://x.com/namacha_411/status/2088975198397890866)

> EU法を超えた過剰対応であり、Claude利用者がすでに解約を始めていると指摘 — @MikelEcheve [出典](https://x.com/MikelEcheve/status/2087112109872062724)

#### Tips

> Claude透かしの仕組みを理解するためのインタラクティブデモを共有。軽い編集では透かしが残るが、完全リライトでは消える点を解説 — @50s_ZeroToHero [出典](https://x.com/50s_ZeroToHero/status/2088897456499241120)

> Anthropic公式の技術詳細公開を受け、軽編集耐性・検出API予定・コード部分への影響がほぼない点をまとめて共有 — @guzumania5 [出典](https://x.com/guzumania5/status/2088821411452469705)

#### 解説記事 (Zenn)

- [Claudeの「見えない透かし」はどこに入る？ ― SynthID-TextのSamplingを理解する](https://zenn.dev/50s_zerotohero/articles/e5198b07a3c9f0) — 透かしが「文字」ではなくサンプリング時の確率分布に入ることを、SynthID-Text の仕組みから説明。
- [Claudeのテキスト透かしは、何を守れないのか](https://zenn.dev/coldcola/articles/claude-text-watermark) — 透かしの保護範囲が狭いのは実装の未熟さではなく統計的透かしの情報理論的性質による、と整理。Anthropic は実装詳細を公開していないため、公表された方式名と査読論文からの推論であることを明記している。
- [Claude AI Text Watermarks: How They Work and Their Limits](https://zenn.dev/neotechpark/articles/e7d3937488d84b) — 2026年8月11日の Help Center 更新を起点に、透かしと C2PA メタデータの併用と限界を英語で解説。

## ソース

- [Anthropic - Claude text watermark](https://www.anthropic.com/news/claude-text-watermark)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
