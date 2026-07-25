---
title: "公式は小規模修正のみ、Opus 5移行の実測・プロンプト調整が活発化"
summary: "本日の公式は Claude Code v2.1.220（バグ修正・安定性改善のみ）にとどまる。一方コミュニティでは前日発表の Opus 5 を受けたプロンプト調整・移行ガイド解説、実測ベンチ、新トークナイザ検証、Opus 4.7 fast mode 廃止によるエラー対処など、移行実務の記事が一斉に出ている。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-26

features:
  - "Claude Code v2.1.220 リリース（バグ修正・安定性改善のみ）"
  - "Opus 5 プロンプト調整・移行ガイド（コミュニティ解説）"
  - "Opus 5 実測ベンチ（コミュニティ検証）"
  - "新トークナイザの実測（日本語/英語トークン数）"
  - "Opus 4.7 fast mode 廃止による speed:fast エラー"
codex_review: "公式自体は小粒でも、翌日に移行ノウハウと実測が一気に噴くのは、Claude界隈の実務温度感が高い証拠だと思う。派手さは薄いが、モデル進化が“運用の作法”を書き換える局面として地味に重要です。"
codex_importance: 3
---

## 公式アップデート

本日の大きな公式発表はありません。GitHub Releases 上の新規分は **Claude Code v2.1.220** のみで、内容は「バグ修正と信頼性の改善」に限られます。前日の Opus 5 発表・v2.1.219（機能追加多数）は前回レポートで詳述済みのため再掲しません。

### Claude Code v2.1.220

- Bug fixes and reliability improvements（詳細な項目立てはなし）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.220)

## コミュニティの反応

発表翌日の本日は、前日の **Claude Opus 5** リリースを受けた「移行実務」系の記事が Zenn / Qiita に集中しました。以下は本日新たに出た反応です。

### Opus 5 プロンプト調整・移行ガイド

公式ドキュメント「Prompting Claude Opus 5」を読み解き、既存プロンプトをどう直すかを整理する記事が複数出ています。共通する論点は「指示を足す」より「これまで入れていた指示を消す」で、Opus 5 が自己検証・自己修正を自前でやるため「再確認せよ」系の指示が逆効果になる、という点です。

#### Tips

> 「Prompting Claude Opus 5」のまとめ。指示を足す話より、今まで入れていた指示を消す話が目立つ。Opus 5 は指示しなくても自分で検証・自己修正をやるので「再確認せよ」系はむしろ邪魔になる — @chiba_hiro0514 [Claude Opus 5を使う上で、調整すべきclaude.md](https://qiita.com/chiba_hiro0514/items/eac3c952a7937a6f121c)

> 価格据え置き・移行はモデルID書き換え1行。それでも公式移行ガイドは推奨アクションの過半が「この指示を消せ」。API 側は max_tokens を上げて応答切れを防ぐ — @naokami3 [Claudeに聞いたOpus5で変える方が良いプロンプト等の俺用まとめ](https://qiita.com/naokami3/items/2c192dfb0f0552cda009)

> 公式「Prompting Claude Opus 5」を通読し、順番・粒度を自分が理解しやすい形に組み直した。effort はプロンプトのページだけだと誤解しそうなので Effort のページで補った — @jomo [Claude Opus 5 のプロンプトガイドを読んで、自分のプロンプトをどう直すか考えた](https://zenn.dev/njomote/articles/03303a538b6a0c)

### Opus 5 実測ベンチ

うたい文句ではなく自分の題材で測る、という検証記事が出ています。

#### Tips

> QAエンジニアが指示文・採点基準を固定したままモデルだけ差し替えて測定。Opus 5 は「届く深さ」は1世代で動いたが、「根拠の正確さ」は動かなかった — @りょうさん [Claude Opus 5 が出たので測ってみた](https://zenn.dev/mumihatsu/articles/7294b39953b917)

> 「Fable 5の知性を半額で」の触れ込みを、同じ47万行のレガシーコードで発掘（デバッグ・根本原因分析）させて確かめる検証。$5/$25 据え置きで Claude Max の既定モデルに — @えぐち [「Fable 5の知性を半額で」Claude Opus 5を、同じ47万行の遺跡で発掘させて確かめる](https://zenn.dev/egu777/articles/opus5-mifos-benchmark)

#### 中立

> Fable 5（最高能力層・長時間非同期タスク向け）と Opus 5（近い能力を日常業務へ持ち込む高能力モデル）が同時提供される中で、どちらをデフォルトにするかを整理 — @evolink [Claude Opus 5 と Fable 5、デフォルトにするならどちらか](https://zenn.dev/evolink_ai/articles/4282a7782b1d05)

### 新トークナイザの実測

Opus 4.7 以降で変わったトークナイザについて、count_tokens API を使った実測記事が出ています。

#### Tips

> count_tokens API で同日・同手法の実測比較。4.8 向けのトークン最適化は 5 でも「そのまま使える」。トークナイザの係数の作り直しは不要 — @藤澤勇樹 [Opus 4.8のプロンプト最適化は Opus 5 でもそのまま使えるのか？](https://zenn.dev/yuki_fujisawa/articles/a6f5d1df1b9f53)

> 公式は「最大約35%増、内容による」としか書かないので実測。同じ内容でも日本語は減り、英語は +38% という結果 — @moname_ai [日本語は減り、英語は +38% — Claude 新トークナイザの実測](https://zenn.dev/ai_worklab/articles/claude-tokenizer-ja-en-tokens)

### Opus 4.7 fast mode 廃止による speed:fast エラー

v2.1.219 で告知された「fast mode から Opus 4.7 を除外」の API 側での影響が、開発者に顕在化しています。

#### ネガティブ

> 2026年7月25日の Claude API アップデートで最も注意すべきは Opus 4.7 の fast mode 廃止。これまで claude-opus-4-7 に speed:fast を指定していたコードがエラーになる — @picnic [Claude Opus 4.7のfast mode廃止でspeed:fast指定がエラーになる件と対応法](https://qiita.com/picnic/items/4a7e760243444a174804)

## ソース

- [Claude Code Releases - v2.1.220](https://github.com/anthropics/claude-code/releases/tag/v2.1.220)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
