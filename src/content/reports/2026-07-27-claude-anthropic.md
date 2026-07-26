---
title: "公式は更新なし、Opus 5の“応答が浅い”問題と実測比較が主役に"
summary: "本日の公式アップデートはなし（最新は既報の v2.1.220）。コミュニティは Opus 5 移行の次フェーズへ進み、system prompt 刷新に伴う「応答が浅くなる/長くなる」問題への対処、複数モデルの実測比較、Claude Code の system prompt 80%削減という context engineering の議論が中心になった。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-27

features:
  - "Opus 5 の応答が浅くなる/長くなる問題と rules 見直し"
  - "Opus 5 実測比較（React習熟度ベンチ・QCD比較）"
  - "Claude Code の system prompt 80%削減（context engineering）"
codex_review: "公式発表が止まった日に、むしろ“プロンプトを減らすほど強い”という論点が前景化したのは面白い。派手さはないが、モデル改善が運用作法そのものを更新し始めた兆候として地味に重要だ。"
codex_importance: 3
---

## 公式アップデート

**本日の公式アップデートはありません。**

GitHub Releases 上の最新は既報の **Claude Code v2.1.220**（バグ修正・安定性改善のみ）で、前回レポート（2026-07-26）で詳述済みのため再掲しません。前日の Opus 5 発表・v2.1.219 も同様に既報です。

[Claude Code Releases](https://github.com/anthropics/claude-code/releases)

## コミュニティの反応

本日は前日までの「Opus 5 移行ガイド」から一歩進み、**実際に切り替えた後に出た体感の変化とその原因究明**、**モデル横並びの実測**、**system prompt 側の設計論**へと論点が移っています。以下は本日新たに出た反応です（移行ガイドの基礎的解説は前回詳述済みのため割愛）。

### Opus 5 の応答が浅くなる/長くなる問題と rules 見直し

設定を変えていないのに Opus 5 に切り替えた途端に挙動が変わった、という報告が複数出ています。原因を「モデル劣化」ではなく「Claude 5 世代で配られる本体 system prompt の刷新」に切り分け、旧来の rules を作り直す流れが共通しています。

#### ネガティブ

> Opus 5 に切り替えた直後から応答の散文傾向が強まり、構造化して考えられなくなった。rules は何も変えていないのに——調べると Opus 5 に配られる本体 system prompt が大きく変わり、旧来の rules がその前提で書かれていなかったのが原因だった — @Yuichi Uemura [Opus5が思考が浅いように感じる問題への対策](https://zenn.dev/u1/articles/claude5-rules-collapse-and-fix)

#### Tips

> Opus 5 は放っておくと応答が前より長くなる。「簡潔さの指示」を基本セットとして書く（effort では短くならない）。公式ガイドはプロンプト内の検証指示を「削除せよ」とまで明言し、従来の品質担保の常識が逆効果になる — @little_hands(松岡@Loglass) [Opus 5では今までのプロンプトが逆効果に。「検証して」を消して「簡潔に」と書くべし](https://zenn.dev/little_hand_s/articles/72646a09f49d2a)

### Opus 5 実測比較（React習熟度ベンチ・QCD比較）

うたい文句ではなく自前の題材で Opus 5 / Opus 4.8 / Fable 5 を横並びで測る検証記事が出ています。

#### Tips

> React 習熟度ベンチ第14弾。先日リリースの Opus 5 を effort=high/max の2種で計測し、Fable 5 超えの結果を報告。記事後半はその Opus 5 自身による生レポート — @uhyo [【速報】Opus 5、React習熟度ベンチマークで余裕のFable 5超え](https://zenn.dev/uhyo/articles/react-profession-bench-14)

#### 中立

> 各パターン N=10・12パターン計360試行の実測。Opus 5 だけが全 effort level で品質ゲートを100%通過。Opus 5×low と Fable 5×high は速さを揃えると差はコストだけ（約1.9倍）だった — @Nori [Opus 5 は何が進化したのか——Opus 4.8・Fable 5 との違いを QCD で明らかにした](https://zenn.dev/nnakapa/articles/lab-29-opus5-fable5-qcd)

### Claude Code の system prompt 80%削減（context engineering）

Anthropic の Thariq Shihipar 氏が 2026年7月24日に投稿した「Claude Code の system prompt を80%以上削減（coding eval のスコアは維持）」を、自前の運用環境で検算・考察する記事が出ています。

#### Tips

> 新世代モデル向けに Claude Code の system prompt を80%以上削減、しかも coding eval は落ちていないという投稿を、約1年運用のマルチAIエージェント Vault で検算。モデルが賢くなったぶん、細かいルールや例を与えるより判断に委ねる方がうまくいく、という新原則を読み解く — @K.D [「Claude Codeのsystem prompt 80%削減」を、約1年運用のマルチAIエージェントVaultで検算する](https://zenn.dev/tadkud/articles/claude5-context-engineering-vault-audit)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
