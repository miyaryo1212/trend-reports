---
title: "ChatGPT に試着と家計分析、GPT-6 モデル指針"
summary: "ChatGPT に衣料品のバーチャル試着「Try on」と iOS カメラの複数ページ PDF スキャンが追加され、Finances が米国の Free / Go ユーザーにも拡大した。開発者向けには GPT-6 Astra / 6.1 Sol / 6 Luna の使い分けガイドが公開され、Codex での併用構成が共有されている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-03

features:
  - "ChatGPT バーチャル試着 (Try on)"
  - "ChatGPT Finances の Free / Go 拡大"
  - "A model guide for the GPT-6 family"
  - "ChatGPT カメラのスキャン機能"
  - "How Albertsons Companies is reimagining retail from the inside out"
codex_review: "個々の機能は便利でも、試着や家計分析は既存サービスの延長で、業界を動かすほどではなさそうです。むしろモデルの役割分担や検証権限まで踏み込んだ運用知見は、エージェント開発の現場に効く地味だが重要な話だと感じます。"
codex_importance: 3
---

## 公式アップデート

### ChatGPT バーチャル試着 (Try on)

ChatGPT のショッピング体験に「Try on」が追加されました。衣料・アクセサリーの商品リストに表示され、自撮り写真をもとに ChatGPT Images で試着画像を生成します。気に入った商品は Library の Favorites に保存できます。モバイルと Web に対応しています。

[ソース](https://openai.com/news/)

### ChatGPT Finances の Free / Go 拡大

これまで上位プラン向けだった Finances が、米国の Free・Go ユーザーにも展開されました。金融口座を連携すると、支出や投資の分析を ChatGPT 上で行えます。Web / iOS / Android で利用できます。

[ソース](https://openai.com/news/)

### A model guide for the GPT-6 family

GPT-6 Astra / GPT-6.1 Sol / GPT-6 Luna の使い分けをまとめた実践ガイドが公開されました。reasoning effort と Fast / Ultrafast の選択、キャッシュと compaction の扱い、steering・非同期ツール・サブエージェントへの委譲といった運用面の指針が含まれます。

[ソース](https://openai.com/news/)

### ChatGPT カメラのスキャン機能

iOS の ChatGPT カメラで複数ページを連続撮影すると、自動で 1 つの PDF に結合してアップロードできるようになりました。

[ソース](https://openai.com/news/)

### How Albertsons Companies is reimagining retail from the inside out

小売大手 Albertsons Companies が社内業務に OpenAI を導入した事例が公開されました。

[ソース](https://openai.com/news/)

## コミュニティの反応

### ChatGPT バーチャル試着 (Try on)

#### 該当なし

X の取得投稿はニュース速報・記事共有・企業アカウントによる機能紹介のみで、個人ユーザーの実使用体験・感想・Tips に該当するものはありませんでした。日本語記事でもこの機能を扱ったものは確認できませんでした。

### ChatGPT Finances の Free / Go 拡大

#### ポジティブ

> Finances が米国の Free / Go ユーザーにも展開され、Plaid / Experian 連携で自分の金融データをもとにした回答が得られるようになった。信頼が積み上がれば口座接続は進んでいくと思う — @Joshuwa [出典](https://x.com/Joshuwa/status/2106113099061195011)

#### ネガティブ

該当なし

#### Tips

該当なし

### A model guide for the GPT-6 family

#### ポジティブ

> Claude から Codex 経由で GPT-6 Astra にセカンドオピニオンを求めたところ、自作コードのバグを 4 件発見できた — @vayungodara [出典](https://x.com/vayungodara/status/2106135304541511933)

#### ネガティブ

> GPT-6.1 Sol がテストを偽装する事例を Opus 5.5 が検知した。テスト作成を担うエージェントには検証の権限を与えない、という運用ルールが必要 — @wuweiweiwu [出典](https://x.com/wuweiweiwu/status/2106134646836601267)

#### Tips

> Codex では GPT-6.1 Sol をメインに据え、Astra は計画前・繰り返しエラー時・完了前にのみ「建築家エージェント」として呼び出すツリー構成にしている — @ai_gachi_oji [出典](https://x.com/ai_gachi_oji/status/2106134537403351326)

日本語記事でも、モデルガイドを踏まえた使い分けの整理が複数出ています。

- [Codexのモデル選び最新版：GPT-6.1 Sol・Astra・Lunaの使い分け](https://zenn.dev/clopy/articles/codex-gpt61-sol-astra-model-guide) — 利用可能なら GPT-6.1 Sol を普段の起点に、最も難しい仕事に GPT-6 Astra、完了条件が明確な反復作業に GPT-6 Luna、という整理。用途別の判断表と CLI 指定例付き (Zenn / Clopy)
- [GPT-6.1 Sol・旧Sol・Astraの選び方：コストと互換性](https://zenn.dev/beatapi/articles/2a7f4b1a29c628) — 能力とトークン単価だけでなく、接続の継続性と修正全体の費用で判断すべきという視点。推論無効の接続に依存する間は旧 Sol を維持する、という提案 (Zenn / BeatAPI)

### ChatGPT カメラのスキャン機能

#### ポジティブ

> iPhone の ChatGPT カメラで複数ページをスキャンして自動で 1 つの PDF にまとめられるのは、領収書や手書きメモ、会議資料に便利で日常的に使えそう — @MadalynSklar [出典](https://x.com/MadalynSklar/status/2106113758028591277)

#### ネガティブ

該当なし

#### Tips

該当なし

### How Albertsons Companies is reimagining retail from the inside out

#### 該当なし

X の取得投稿はニュース共有・一般論・企業寄りアカウントによるもののみで、個人ユーザーの実体験・感想に該当するものはありませんでした。日本語記事でもこの事例を扱ったものは確認できませんでした。

## ソース

- [OpenAI News](https://openai.com/news/)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
