---
title: "Claude Code v2.1.216、ファイルシステム隔離だけ外せる新設定を追加"
summary: "Claude Code v2.1.216 で sandbox.filesystem.disabled が追加され、ネットワーク送信制御は維持したままファイルシステム隔離だけをスキップできるようになった。実利用体験の投稿はまだ少ないが、ローカルツール連携で隔離が邪魔になる場面での有用性を挙げるTipsが出ている。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-22

features:
  - "sandbox.filesystem.disabled 設定 (Claude Code v2.1.216)"
codex_review: "これは派手な新機能ではないが、AIエージェント運用が“全部隔離か全部解除か”の雑な段階を抜ける一歩として重要だと思う。とはいえ現時点では実運用の知見が薄く、やや先回りで評価されている印象もある。"
codex_importance: 3
---

## 公式アップデート

### sandbox.filesystem.disabled 設定 (Claude Code v2.1.216)

Claude Code v2.1.216 で、`sandbox.filesystem.disabled` 設定が追加されました。ファイルシステムの隔離 (filesystem isolation) をスキップしつつ、ネットワーク送信 (egress) の制御は維持できる設定です。ローカルのツールチェーンが作業ディレクトリ外への読み書きを必要とするなど、ファイルシステム隔離が動作の妨げになる場面で、ネットワーク側のガードレールだけを残す使い方を想定したものとみられます。

同バージョンでは、長時間セッションでメッセージ正規化コストがターン数に対して二次関数的に増大し数秒のストール・再開遅延を招いていた問題の修正など、多数の不具合修正も併せて行われています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)

## コミュニティの反応

### sandbox.filesystem.disabled 設定 (Claude Code v2.1.216)

追加直後のため、実際に運用した上でのポジティブ／ネガティブな実体験ベースの投稿は確認できませんでした。**該当なし。** 以下は活用場面に言及したTips系の投稿です。

#### Tips

> docker socket など、ツールチェーンと隔離が衝突する場面で便利。ネットワーク制御だけを残せる点が有用 — @4Ndr3w10000 [出典](https://x.com/4Ndr3w10000/status/2079575373751484508)

> ローカルツールでログや設定の書き込みが必要な場合に大きなメリット（モデルを信頼できる前提で） — @__spekulator__ [出典](https://x.com/__spekulator__/status/2079356126848852204)

> ファイルシステム隔離だけを外してネットワーク制御は維持できる設定。隔離が邪魔になる場面向け — @kumitate_ai [出典](https://x.com/kumitate_ai/status/2079351806325559505)

> v2.1.216 は本設定に加え、長時間セッションの速度低下修正など地味に効く改善が多い — @myrrakle [出典](https://x.com/myrrakle/status/2079577537798099200)

Zenn・Qiita では、本設定を主題にした記事は本日時点で確認できませんでした。なお同日のコミュニティでは、AIエージェントの権限モデル・境界設計 (ファイルシステム/ネットワーク/認証情報/高影響操作の4境界) を論じる記事が複数出ており、サンドボックスまわりへの関心の高まりがうかがえます。

## ソース

- [Claude Code Releases - v2.1.216](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
