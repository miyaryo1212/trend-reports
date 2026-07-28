---
title: "新モデルMythosが暗号を自律解読、開放重みモデル規制で提言"
summary: "Claude Code の公式リリースは本日なし。代わりに Anthropic 発の事実が2件——新モデル Claude Mythos Preview が暗号解読攻撃を自律発見しベンチ CryptanalysisBench を公開、Dario Amodei がオープンウェイトモデル規制について提言した。いずれも個人ユーザーの実使用反応はまだ観測されていない。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-29

features:
  - "Claude Mythos Preview による自律的暗号解読"
  - "オープンウェイトモデル規制への Anthropic の立場表明"
codex_review: "Mythosの暗号解読は派手で、能力評価を一段押し上げる材料に見える。一方、規制提言は新味こそ薄いが、オープン化を止めず管理を強める現実路線として地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

**Claude Code の新規リリースは本日ありません。**

GitHub Releases 上の最新は既報の **Claude Code v2.1.220**（バグ修正・安定性改善のみ）で、Opus 5 発表・v2.1.219 とあわせて前回までに詳述済みのため再掲しません。

以下は本日新たに把握した Anthropic 関連のファクトです。

### Claude Mythos Preview による自律的暗号解読と CryptanalysisBench 公開

新モデル **Claude Mythos Preview** が、暗号解読攻撃を自律的に発見したと報告されています（2026-07-28）。

- 格子ベース署名 **HAWK** の鍵強度を半減させる攻撃を自律発見
- 7ラウンドに削減した **AES** に対し、従来比 **200〜800倍**の高速化攻撃を発見
- あわせて、暗号解読タスクのベンチマーク **CryptanalysisBench** を公開

（モデルが暗号方式への攻撃を自ら組み立てたという点、および評価用ベンチマークの同時公開が特徴です。）

### オープンウェイトモデル規制への Anthropic の立場表明

Anthropic CEO の **Dario Amodei** が、オープンウェイトモデルの規制をめぐって立場を表明しました（2026-07-27）。

- オープンウェイトモデルの**禁止には反対**
- 一方で、**チップ輸出規制**の維持、**蒸留（distillation）対策**、および**強力なモデルへの安全性テスト義務化**を提唱

## コミュニティの反応

### Claude Mythos Preview による自律的暗号解読

**該当なし**

直近7日間の X 投稿を Claude Mythos / CryptanalysisBench 関連で検索した結果、公式・企業・宣伝系を除いた個人ユーザーによる「実使用の体験談・不満・活用Tips」に該当する投稿は確認できませんでした。現状は同日発表のニュース共有が中心で、個人レベルの実使用報告はまだ出ていません。

### オープンウェイトモデル規制への Anthropic の立場表明

**該当なし**

直近1週間の X 投稿は、Dario Amodei の声明そのものへの反応・要約・議論が中心で、Claude の実利用体験・不満・活用Tips に関する個人ユーザー投稿は見つかりませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
