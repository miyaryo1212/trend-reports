---
title: "AnthropicがIPOロードショー開始、Mythos 5.2も"
summary: "AnthropicがIPOのロードショーを始めました(Nasdaq: ANT、1株70〜78ドル、8.25億株)。Fable 5.2と同じモデルで認定組織向けのMythos 5.2、Fable 5.2のfast mode、全アカウントへのpreserved thinking適用も発表され、Claude CodeはVertexでfast modeに対応しました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-11

features:
  - "IPO roadshow launch"
  - "Claude Mythos 5.2"
  - "Fable 5.2 fast mode"
  - "Fast mode on Vertex (v2.1.322)"
  - "Fable 5.2 launch promotion"
  - "Preserved thinking for all accounts"
  - "Electronics prototype design"
codex_review: "電子機器を設計から試作まで動かした点は、チャットAIのベンチマーク競争より実務への距離を縮める成果で面白い。一方、IPOとモデル更新を並べた発表は派手さが先行し、Mythosの限定提供や思考ブロック保護は業界の現実的な課題を映す。"
codex_importance: 4
---

## 公式アップデート

### IPO roadshow launch

- 2026-11-10、Anthropicが新規株式公開(IPO)のロードショーを開始した
- Class A普通株をNasdaq Global Select Marketに上場申請している。ティッカーは「ANT」
- 想定公開価格は1株70.00〜78.00ドル
- 募集は8億2,500万株。内訳はAnthropicの新株が801,351,354株、既存株主の売出しが23,648,646株
- 引受会社には、30日以内に最大1億2,375万株を追加で購入できるオプションを付与する予定

[ソース](https://www.anthropic.com/news/roadshow-launch)

### Claude Mythos 5.2

- Fable 5.2と同時に発表された。中身はFable 5.2と同じモデルで、サイバー/バイオ領域のセーフガードを緩めている
- 提供先は、Cyber Verification ProgramまたはLife Sciences Verification Programで審査を通った組織に限る

[ソース](https://www.anthropic.com/claude-fable-and-mythos-5-2) / [モデル概要](https://platform.claude.com/docs/en/models/mythos-5-2/overview)

### Fable 5.2 fast mode

- Fable 5.2とMythos 5.2では、オプションでfast modeを使える。トークン生成は最大2.5倍速くなる
- 料金は入力$16 / 出力$80 per Mtok(標準速度は$8 / $40)
- 提供先はClaude Code、Claude Platform、Google Cloud、Microsoft Foundry

[ソース](https://www.anthropic.com/claude-fable-and-mythos-5-2)

### Fast mode on Vertex (v2.1.322)

- Claude Code v2.1.322(2026-11-10公開)で、Vertexのglobal / us / euリージョンでもfast modeを使えるようになった
- Vertexがfast modeを受け付けない場合は、標準速度にフォールバックする

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.322)

### Fable 5.2 launch promotion

- 公開記念として、今週は対象の有料プランにFableの利用上限リセットが1〜3回付与される
- ProプランとTeamプランの標準シートは、2026-11-09から11-16 23:59(PT)まで、週間利用上限の最大50%を追加料金なしでFableに使える
  - Proと標準Teamシートのリセットは1回で、11-16 23:59(PT)に失効する
  - リセットで戻るのはFableで使った分だけ。他モデルで使った分はそのまま残る
- 期間が終わると、Proと標準TeamシートでのFable利用は再びusage creditsから引かれる

[ソース](https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers) / [リセットの説明](https://support.claude.com/en/articles/17007452-what-is-a-limit-reset)

### Preserved thinking for all accounts

- preserved thinkingは、蒸留(distillation)の既知の手法を防ぐためのAPIの仕組み。thinkingブロックを、生成時と同じシステムプロンプト・ツール・メッセージと一緒に送り返したかをAPIが検証し、一致しなければエラーを返す
  - オプトインすると、エラーにする代わりにthinkingブロックを外して処理させることもできる。その場合、モデルはthinkingブロックを見ずに応答する
- Fable 5.1 / Opus 5.5 / Sonnet 5.5 / Haiku 5.5では、2026-08-31以降に作成されたアカウントだけが対象だった。Fable 5.2とMythos 5.2では、すべてのAPIアカウントに適用される
- Fable 5.2 / Mythos 5.2が出力したthinkingブロックは、生成したアカウントか、それに紐づくアカウントでしか使えない

[ソース](https://support.claude.com/en/articles/16761192-preserved-thinking-changing-how-the-messages-api-handles-thinking-blocks-to-protect-against-distillation)

### Electronics prototype design

- Diode Computersとの共同研究で、Fable 5.2が3つの電子機器を一から設計した。スピーカーフォン、音声アシスタントのハブ、携帯型バーチャルペットの3つ
- 仕様書、回路図、PCBの部品配置と配線、3Dプリント用の筐体、ファームウェア、部品表までをClaudeが作った。3台とも、電気的な修正なしで動作した
- PCBの配置・配線を評価するDiodeの社内ベンチマークPCB Gymでは69%(Fable 5は25%)。3D部品や基板を再構築する公開ベンチマークBenchCAD 2.1では83.5%で、Fable 5.1のほぼ2倍
- 前のモデルとの差が最も大きかったのは、部品配置や配線といった幾何的な推論だった

[ソース](https://www.anthropic.com/research/claude-electronics-design)

## コミュニティの反応

### IPO roadshow launch

X上では、個人ユーザーの反応は見つかりませんでした。取得できた投稿は、金融ニュース系アカウントの速報や引用だけです。Zennには、日本の個人投資家の目線で整理した記事と、上場前の評価に慎重な記事が出ています。トーンは中立〜慎重です。

#### Tips

- [【個人向け】AnthropicのIPOは買える？投資前に知りたい価格とリスク](https://zenn.dev/student_blog/articles/anthropic-ipo-claude-money-flow)(Zenn)
  - 想定価格帯(1株70〜78ドル)と、SBI証券が日本の個人向けに取扱いを予定していることを紹介している
  - 最終的な公開価格や申込日程は、確定した案内で確認する必要があると注意している
  - アフィリエイトリンクを含むPR記事

#### ネガティブ

- [Anthropic上場の評価に逆風。AIの値札が揺れている](https://zenn.dev/sugawara_ai/articles/ai-news-20261108)(Zenn)
  - ロードショー開始前の記事
  - IPOの評価に逆風が吹いているという見方を、11/8のAIニュースの筆頭で取り上げている

### Claude Mythos 5.2

X上では、個人ユーザーの反応は見つかりませんでした。

#### Tips

- [Claude Fable 5.2とMythos 5.2を正直にレビューする](https://zenn.dev/systemdesignsim/articles/claude-fable-5-2-honest-review)(Zenn / [Qiita版](https://qiita.com/systemdesignsimple/items/ebe05ebf39cf11f0aab7))
  - 英語記事の日本語版
  - コーディングとエージェントの数字は分野の先頭に立つと評価しつつ、タスク1件あたりのコストに留保を付けている。トーンは中立

### Fable 5.2 fast mode

X上では、個人ユーザーの反応は見つかりませんでした。

#### Tips

- [Claude Fable 5.2に移行してみた。5.1のコードのままでは動かない3つの変更と実費1.8倍](https://zenn.dev/jtcc/articles/claude-fable-5-2-migration)(Zenn)
  - 実際のClaude APIでFable 5.2を動かし、料金・速度・fast modeを計測した(2026-11-10 12:18〜12:30 JST、費用は定価換算で合計約$1.33)
  - 5.1のコードのままでは動かなくなる変更もまとめている

### Fast mode on Vertex (v2.1.322)

#### Tips

> fast modeにはフォールバックを見る指標が必要。v2.1.322ではVertexが拒否すると標準速度に戻るので、各実行を実際にどちらのモードが処理したかを記録しておく。混在したトラフィックでは、フォールバック時の遅延が隠れてしまう — @renandnzsantos [出典](https://x.com/renandnzsantos/status/2120155521458323717)

### Fable 5.2 launch promotion

該当なし

### Preserved thinking for all accounts

該当なし

### Electronics prototype design

該当なし

## ソース

- [Anthropic launches roadshow for proposed initial public offering](https://www.anthropic.com/news/roadshow-launch)
- [Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Claude Mythos 5.2 - Claude Platform Docs](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
- [Claude Code v2.1.322 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.322)
- [Claude Fable 5.2 launch offers](https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers)
- [What is a limit reset?](https://support.claude.com/en/articles/17007452-what-is-a-limit-reset)
- [Preserved thinking: changing how the Messages API handles thinking blocks to protect against distillation](https://support.claude.com/en/articles/16761192-preserved-thinking-changing-how-the-messages-api-handles-thinking-blocks-to-protect-against-distillation)
- [Claude can design electronic prototypes from start to finish](https://www.anthropic.com/research/claude-electronics-design)
- [Zenn: 【個人向け】AnthropicのIPOは買える？投資前に知りたい価格とリスク](https://zenn.dev/student_blog/articles/anthropic-ipo-claude-money-flow)
- [Zenn: Anthropic上場の評価に逆風。AIの値札が揺れている](https://zenn.dev/sugawara_ai/articles/ai-news-20261108)
- [Zenn: Claude Fable 5.2とMythos 5.2を正直にレビューする](https://zenn.dev/systemdesignsim/articles/claude-fable-5-2-honest-review)
- [Zenn: Claude Fable 5.2に移行してみた。5.1のコードのままでは動かない3つの変更と実費1.8倍](https://zenn.dev/jtcc/articles/claude-fable-5-2-migration)
- [X: @renandnzsantos](https://x.com/renandnzsantos/status/2120155521458323717)
