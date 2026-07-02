---
title: "Sonnet 5がClaude Code既定モデルに、Claude Science提供開始"
summary: "Claude Sonnet 5がClaude Code v2.1.197で新デフォルトモデルに。ネイティブ1Mトークンコンテキストと8/31までの$2/$10プロモ価格を備える。研究者向けAIワークベンチ Claude Science も全有料契約者へ提供開始。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-03

features:
  - "Claude Sonnet 5（Claude Code既定モデル）"
  - "Claude Science"
codex_review: "Sonnet 5の本筋は性能そのものより、1M文脈を“既定”に落とし込んで開発体験を塗り替えにきた点だと思う。Claude Scienceは派手さ以上に、業界特化AIを収益化するAnthropicの次の一手として地味に重い。"
codex_importance: 4
---

## 公式アップデート

### Claude Sonnet 5 が Claude Code の新デフォルトモデルに

**Claude Sonnet 5** が Claude Code の新しいデフォルトモデルになりました。**v2.1.197** で公開されています。

- **ネイティブ1Mトークンコンテキストウィンドウ**を搭載
- **8/31まで**のプロモーション価格 **$2/$10 per Mtok**
- 利用にはバージョン 2.1.197 以降へのアップデートが必要

[Claude Code Releases v2.1.197](https://github.com/anthropics/claude-code/releases/tag/v2.1.197) / [Claude Sonnet 5（Anthropic）](https://www.anthropic.com/news/claude-sonnet-5)

### Claude Science 提供開始

科学研究者・バイオ製薬向けのAIワークベンチ **Claude Science** が提供開始されました。ゲノミクス／プロテオミクスなど **60超のスキル**を備え、全有料契約者に提供されます。

[毎日AIニュース 0701（Zenn）](https://zenn.dev/qps/articles/f3020f095f1e15)

## コミュニティの反応

### Claude Sonnet 5

#### ポジティブ

> Sonnet 5がデフォルトになった Claude Code で、1Mコンテキストがネイティブ対応になったのを喜び「これは嬉しい！！」と実感を述べている。 — @muscle_coding [X](https://x.com/muscle_coding/status/2072034791105368119)

> Sonnet 5で計画立案・ブラウザ／ターミナル操作が強化され、打合せメモ→議事録→ToDo抽出まで地味な連鎖作業を安価に丸ごと任せられるようになった。 — @hidekun_hidez [X](https://x.com/hidekun_hidez/status/2072784591317020870)

> Sonnet 5の推奨・フィードバック精度、トークン節約、端末UIが優れており、Codexより実務で快適に使えている。 — @delujog [X](https://x.com/delujog/status/2070862245953671462)

> Claude Sonnet 5 がリリース — エージェント能力が大幅強化され、ブラウザ・ターミナルを使った複数ステップのタスクを自律的に完遂できるようになった。Opus 4.8に近い性能をSonnet価格で利用可能。 — [Zenn](https://zenn.dev/shintaroamaike/articles/855ac37fa80096)

#### ネガティブ

> Sonnet 5 の性能検証をしたところ、簡単なタスクの範囲では正答率が4.6とほとんど差がつかず、コストとターン数はむしろ5のほうが重かった。書くだけのタスクでも余計なツール呼び出しを挟みコストが跳ねる、と「期待外れ」と評価。 — [Zenn](https://zenn.dev/marvelousu/articles/claude-sonnet5-vs-sonnet46-benchmark)

#### Tips

> Sonnet 5の新トークナイザーで同じ入力が最大1.35倍トークン化されるため、価格比較ではなく「完了タスクあたりのコスト」で測るべき。 — @tomek_builds [X](https://x.com/tomek_builds/status/2072783673825411525)

> Sonnet 4.6 から Sonnet 5 への移行では、性能比較より先に max_tokens・コスト見積り・リトライ条件・パラメータ禁止（400）・拒否応答の扱いを回帰確認すべき、という運用破断点の棚卸し。 — [Zenn](https://zenn.dev/suwash/articles/claude-sonnet-5-migration_20260701)

### Claude Science

#### ポジティブ

> Claude Scienceのワークフロー（データベース接続→分析実行→レビュワー検証→再現性アーティファクト生成）を紹介し、科学研究のボトルネックを解消する点に強い期待を寄せている。 — @dayvanxd [X](https://x.com/dayvanxd/status/2072244462948942234)

> AnthropicがリリースしたClaude Scienceを「scientists about to relive the cycle」と前置きしつつ、60+ DB接続や自動レビュー機能の利便性を詳述し興奮を表明。 — @MTSlive [X](https://x.com/MTSlive/status/2072126415378743442)

#### Tips

> BioSymphony GeneCluster を Claude Code と組み合わせ、長大な comparative-genomics タスクで入力・制御・ツール実行の追跡を容易にする活用例を共有。 — @razoralign [X](https://x.com/razoralign/status/2072778113000595781)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Sonnet 5（Anthropic）](https://www.anthropic.com/news/claude-sonnet-5)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
