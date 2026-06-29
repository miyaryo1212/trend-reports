---
title: "Codexで「GPT-5.6 Sol」サイレント稼働をコミュニティが検出"
summary: "本日の公式アップデートはalpha/メンテナンス系のみで利用者向け変更なし。一方、政府承認前のはずのGPT-5.6 SolがCodex一部ユーザーに密かにルーティングされている兆候を、コミュニティが診断テストで検出。ultraモードの実利用報告やsubagent制限への不満も出ている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-30

features:
  - "GPT-5.6 サイレント先行投入の発覚"
  - "GPT-5.6 ultra モード"
  - "GPT-5.6 Sol max reasoning effort"
codex_review: "サイレント投入の“匂わせ”で熱狂が先行している感じは少し過剰評価気味だが、モデル性能より運用側のルーティングとオーケストレーションが主戦場になってきた点は地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

本日の利用者向け公式アップデートはありません。Codex CLI のリリースは alpha 版 (rust-v0.143.0-alpha.26〜30) とメンテナンス専用パッチ (0.142.3 / 0.142.4) のみで、いずれも「ユーザー向けの変更なし」と明記されています。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### GPT-5.6 サイレント先行投入の発覚

政府承認の公式プレビュー開放前にもかかわらず、Codex の一部ユーザーへ GPT-5.6 (Sol) が密かにルーティングされている兆候が、コミュニティの診断によって検出されたという話題。

#### ポジティブ

> CodexがGPT-5.6-solにルーティングされてるみたいで、すごく賢くて長時間動いてくれる。使用量が増えてるけど直さないでほしい。 — @xxgaku [出典](https://x.com/xxgaku/status/2071396315565883871)

> Codexくん、もしかしてGPT-5.6-solにルーティングされてる？なんだか今日は賢い気がします。 — @urgre [出典](https://x.com/urgre/status/2071175535959695570)

#### Tips

> GPT-5.6-sol検出には「juice」テストが有効 (5.5 xhigh=768 vs 5.6-sol=128)。Codexの一部ユーザーにgrayscaleで回っているらしい。 — @Lentils80 [出典](https://x.com/Lentils80/status/2071343368425406475)

> Codexで毎日同じプロンプトのベンチマークを取っていたら、27日から出力が明らかに変わった (紫のデザインなど)。 — @xxgaku [出典](https://x.com/xxgaku/status/2071453034023162215)

### GPT-5.6 ultra モード

サブエージェントを自前で起動・連携させ、複雑なタスクを長時間こなす旗艦 Sol 向けの新モード。

#### ポジティブ

> GPT-5.6 previewをCodex経由で使ったら、21分かけて計画から実装パッチまで全部やってくれた。$20プランでもほぼ無制限の感覚。 — @alex_heritier [出典](https://x.com/alex_heritier/status/2069723572311077037)

> ultra modeはsubagentsを自前で起動・連携させて長時間タスクをこなす仕様。terminal-benchで91.9%を出し「一人でengチーム並み」の動きを実感。 — @Argona0x [出典](https://x.com/Argona0x/status/2070569225882653025)

#### ネガティブ

> GPT-5.6は5時間制限が厳しくsubagent数も制限されている。Claudeの方が同じ時間で多く処理できる。 — @v4rvl [出典](https://x.com/v4rvl/status/2070481126003482831)

#### Tips

> /ultracodeコマンドでmulti-agentモードを解禁し、/goalで明確な成功基準を渡せば、subagentsがresearch/coding/testingを並行処理してくれる。 — @Oluwaphilemon1 [出典](https://x.com/Oluwaphilemon1/status/2069772193391575111)

> ultra modeのsubagents活用はモデル単体でなくorchestrationが鍵。Planka×HermesでKanban agentic stackを組む実例も。 — @iamsupersocks [出典](https://x.com/iamsupersocks/status/2070630091978084808)

### GPT-5.6 Sol max reasoning effort

Sol 向けに新たな最大推論努力 (max) 設定が追加されたとされるトピック。直近1週間のX投稿に、個人ユーザーによる実体験・感想は見つかりませんでした (該当なし)。政府承認済みパートナー限定プレビューのため、一般ユーザーの利用機会自体がほぼない状況です。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
