---
title: "公式更新なし、日本語圏はCodex実機検証と価格比較"
summary: "本日は内容の公開された公式リリースがなく、GitHub Releases には自動生成表記のアルファタグのみが並んだ。日本語圏では Codex CLI 0.156 系の実機検証記事、GPT-6 Sol/Luna と Claude Opus 5.5 の価格比較、GPT-Live-1 の割り込み挙動検証などが出ている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-25

features: []
codex_review: "公式発表がない日の観測としては、価格比較の条件差や音声割り込み後の処理継続など、実装時に効く論点を拾えているのがいい。とはいえ個別検証の寄せ集めで、業界全体を動かす材料としては小粒だ。"
codex_importance: 2
pipeline_warnings:
  - "Step 1 (機能抽出) で claude -p がfeatures.txtを生成できずフォールバック発動 (max turns到達等)。features=なし扱いとなり、X検索 (Step 2) もスキップされたため、新規アップデートを取りこぼしている可能性があります。"
---

## 公式アップデート

本日の公式アップデートはありません。GitHub Releases に並んでいるのは自動生成表記のみのアルファタグで、変更内容が公開された正式リリースはなかった。

## コミュニティの反応

X/Twitter 検索は本日新規の公式機能がないためスキップしている。以下は Zenn / Qiita で本日までに公開された記事。

### Codex CLI の実機検証・運用

#### Tips

Codex CLI 0.156 系の新機能を一つずつ実機で確認し、どれを使うと得になるかを整理した記事が公開された。フルスクリーン UI、`/usage`、音声会話、worktree までを対象にしている。

- [Codex CLI 0.156を実機で全部試した：フルスクリーン・/usage・音声会話・ワークツリー、GPT-6 Sol/Lunaまで (Qiita)](https://qiita.com/Takuya__/items/d6dc3f876c9516417c4a)

Codex や Claude Code などの既存エージェントハーネスを Responses 形式の単一 API で束ねる自己ホスト型実行レイヤ HarnessRouter CE の構造と Docker での構築手順をまとめた記事も出ている。

- [既存のエージェントハーネスをResponses形式の1つのAPIで束ねる自己ホスト基盤HarnessRouterの構造と使い方 (Zenn)](https://zenn.dev/suwash/articles/harnessrouter_20260923)

### GPT-6 Sol / Luna の価格・性能評価

#### ポジティブ

軽量モデル同士の比較として、gpt-6-luna と gpt-5.6-luna に同じ指示で動画台本を書かせた検証では、単価が約半分になったうえで文章の質は gpt-6-luna の方が明らかに良かったと報告されている。

- [gpt-6-lunaとgpt-5.6-lunaに動画の台本を書かせ比べた (Zenn)](https://zenn.dev/mohhh_ok/articles/2026-09-gpt6-luna-vs-gpt56-luna-script-writing)

#### ネガティブ

公式発表の数字の読み方に注意を促す記事が複数出ている。50% 値下げの比較元が GPT-5.6 のプロモーション価格であって定価ではない点、Claude との比較でモデルと effort の条件が揃っていない点が指摘されている。

- [GPT-6 Lunaなら単価はSolの20分の1。あなたの仕事がLunaで足りるかを公式発表から読み解いた (Zenn)](https://zenn.dev/eques_blog/articles/83f56af3eee81c)

#### Tips

Anthropic の Claude Opus 5.5 と同日発表という構図で、API 定価を並べて整理する記事が複数公開された。いずれも API 定価の比較を Codex CLI / Claude Code のサブスクリプション請求額の比較には使わないよう注意している。

- [Claude Opus 5.5 と GPT-6 Sol/Luna 同時発表、開発者が見るべき点 (Qiita)](https://qiita.com/picnic/items/90c0a42e470a423d3383)
- [Opus 5.5 と GPT-6 で「1タスクのコスト」はどう決まるか (Zenn)](https://zenn.dev/d_date/articles/a992ab10bbb248)

### GPT-Live-1 の割り込み挙動

#### Tips

音声への割り込みがバックエンドの処理を自動キャンセルしないという公式資料の記述を、実際に検証するためのゲームを作った記事。搬送中の箱の色を音声で言い直したとき、どこまで処理が止まりどこは止まらないかを可視化している。

- [GPT-Live-1への言い直しがアプリの動作にどう届くのかをゲームで可視化してみた (Zenn)](https://zenn.dev/yukurash/articles/d119e6ac6e1626)

### ChatGPT / OpenAI API の運用ノウハウ

#### Tips

カスタム指示を「ペルソナ設定」ではなく、処理が長引いたときやエラー時にどう動いてほしいかという「運用ルール」として書く使い方の記事。

- [ChatGPTのカスタム指示を「ペルソナ設定」ではなく「運用ルール」として使ってみた (Zenn)](https://zenn.dev/neko3se/articles/cdbb9c11c8ca54)

API キーの保護について、OCI Vault と Resource Principal を使って Autonomous AI Database の Select AI から OpenAI API を呼ぶ構成の記事も出ている。

- [OpenAI APIキーをOCI VaultとResource PrincipalでセキュアにしてSelect AIしてみてみた (Qiita)](https://qiita.com/shirok/items/a5f34349c0b6ba8f3f62)

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
