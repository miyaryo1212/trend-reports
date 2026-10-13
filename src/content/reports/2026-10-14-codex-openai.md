---
title: "GPT-5.5退役とGPT-6.1 Sol障害、CLI alpha更新"
summary: "GPT-5.5がChatGPT/ChatGPT Work/Codexから退役し、前日にはGPT-6.1 Solの約8時間の性能劣化が発生した。28日連続シップ企画のDay 8は利用枠の全体リセットで、Codex CLIは0.163.0-alpha.8〜10が公開された。コミュニティでは遅延や利用枠への不満が目立つ。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-14

features:
  - "GPT-5.5 が ChatGPT / ChatGPT Work / Codex から退役 (10月14日実施)"
  - "GPT-6.1 Sol の性能劣化インシデント (10月13日)"
  - "「28日連続シップ or リセット」Day 8 はグローバル利用枠リセット (10月13日)"
  - "Codex CLI 0.163.0-alpha.8〜10 プレリリース (10月13日)"
codex_review: "モデル退役と障害が重なるのは、移行先への信頼を削るという意味で地味に重い。連続シップ企画も、利用枠の再配分が新機能の代わりに映るなら、開発者の期待を裏切りかねない。"
codex_importance: 2
---

## 公式アップデート

### GPT-5.5 が ChatGPT / ChatGPT Work / Codex から退役 (10月14日実施)

本日10月14日、GPT-5.5 が ChatGPT・ChatGPT Work・Codex の全プランで提供終了となった。API は対象外。後継として gpt-5.6-sol への切り替えが推奨されている。

(公式ページのURLは入力データに含まれていない)

### GPT-6.1 Sol の性能劣化インシデント (10月13日)

10月13日 08:10〜16:36 UTC の約8時間、ChatGPT Work および Codex の Web / API / CLI / VS Code 拡張で、GPT-6.1 Sol の応答遅延とエラーが発生した。現在は復旧済み。

(公式ステータスページのURLは入力データに含まれていない)

### 「28日連続シップ or リセット」Day 8 はグローバル利用枠リセット (10月13日)

10月13日の Day 8 は新機能の出荷ではなく、Codex / ChatGPT Work の有料ユーザー全体を対象とした使用量のグローバルリセットが実施された。

(公式告知のURLは入力データに含まれていない)

### Codex CLI 0.163.0-alpha.8〜10 プレリリース (10月13日)

10月13日に 0.163.0-alpha.8、alpha.9、alpha.10 が連続で公開された。GitHub Releases 上のリリースノートは「Release 0.163.0-alpha.N」のみで詳細は記載されていない。Step 1 の抽出によれば、インスタント割り込みと Code Mode 中断のデフォルト有効化、サンドボックス整合性チェックの追加、Amazon Bedrock 上の GPT-6.1 Sol Ultrafast 対応が含まれる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10)

## コミュニティの反応

### GPT-5.5 が ChatGPT / ChatGPT Work / Codex から退役 (10月14日実施)

トーンは中立。退役そのものへの賛否はなく、移行準備の実務的な共有が中心。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> ワークフローや設定で GPT-5.5 をピン留めしている場合は今のうちに GPT-6.1 Sol へ手動切り替えを推奨。モデル名はコードではなく config で管理した方がよい — @simond_dev [出典](https://x.com/simond_dev/status/2109623298430837129)

> 今週の Claude モデル更新と並行して Codex は GPT-6.1 Sol を軸に運用し、GPT-5.5 が14日で終了する点を踏まえた軽作業分担を計画 — @tarokaneko1220 [出典](https://x.com/tarokaneko1220/status/2109790533279416768)

### GPT-6.1 Sol の性能劣化インシデント (10月13日)

トーンは批判的。障害時間中の遅さに対する直接的な不満が多く、復旧報告が一部ある。

#### ポジティブ

該当なし

#### ネガティブ

> GPT-6.1 Sol の人気で大量アクセスが発生し Codex / ChatGPT Work で遅延が顕著。「高速化」発表にもかかわらず実感が薄い — @RodrigoESPorto [出典](https://x.com/RodrigoESPorto/status/2110112130527879616)

> Codex が極端に遅いと @OpenAI に修正を要求 — @piccolo_opossum [出典](https://x.com/piccolo_opossum/status/2110091285247705524)

> GPT-6.1 Sol が今日特に遅くてイライラする — @JCCrypto007 [出典](https://x.com/JCCrypto007/status/2110053741906805011)

> 性能劣化に対して緩和策が適用されたと報告しつつ、回復を監視中 — @andrewxix [出典](https://x.com/andrewxix/status/2110079064765780122)

> 性能劣化は約8時間続き、現地時間の午前9時〜午後5時半頃まで影響があったと復旧を報告 — @steveDOTplus [出典](https://x.com/steveDOTplus/status/2110052311015817558)

#### Tips

該当なし

### 「28日連続シップ or リセット」Day 8 はグローバル利用枠リセット (10月13日)

トーンは強く批判的。リセット自体よりも、タイムアウトやモデル品質の低下で枠を使えない状況や、削減された利用上限への不満が噴出している。

#### ポジティブ

該当なし

#### ネガティブ

> 今日のリセットは役に立たない。Codex がタイムアウトし続けるので前回リセット以降の枠を使えておらず、作業は Claude で済ませた。28日企画は今のところ期待外れ — @elshayib_ [出典](https://x.com/elshayib_/status/2109957913288552947)

> こちらではもう10月11日なのに新しい出荷が来ていない。OpenAI が削減した利用上限の50%以上を戻してほしい — @hakmgpt [出典](https://x.com/hakmgpt/status/2109037120304107831)

> 3日連続で Codex のモデル品質が低く、その一方で使用量は急増。昨晩リセットを使ったが数時間で週次上限の15%が消えた — @nicksdot [出典](https://x.com/nicksdot/status/2109161254803951855)

> 約6か月 Codex と ChatGPT を毎日使ってきたが、利用制限の問題で他に選択肢がなくなった。耐えられないレベル — @SimonasLTU1 [出典](https://x.com/SimonasLTU1/status/2109025431802323116)

#### Tips

該当なし

### Codex CLI 0.163.0-alpha.8〜10 プレリリース (10月13日)

トーンは中立〜やや批判的。Ultrafast モードが期待通り有効にならないという報告がある。

#### ポジティブ

該当なし

#### ネガティブ

> Codex CLI 更新後も GPT-6.1 Sol の ultrafast モードが有効にならず、コンテキスト変更の通知も追いつけない — @Jean_Maes_1994 [出典](https://x.com/Jean_Maes_1994/status/2109618835561062753)

#### Tips

> Codex CLI 0.161.0 での GPT-6.1 Sol デフォルト化、Daybreak 有効化フラグ、Bedrock 対応の確認方法を具体的にまとめている — @tom_knockk [出典](https://x.com/tom_knockk/status/2109118078718246929)

> Zenn: [GPT-6.1 SolのUltrafastを評価する前に：最初の表示と生成中の速さを分ける](https://zenn.dev/aipha_euro/articles/d0e8c5469099a5) — Ultrafast の狙いは出力トークン間の時間短縮であり、最初の文字が出るまでの時間と生成中の速さを分けて計測すべきという評価方法の整理。

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [Codex CLI 0.163.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
