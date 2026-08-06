---
title: "GPT-5.6 Sol改善とLunaの無料標準化"
summary: "ChatGPT向けGPT-5.6 Solが事実正確性の改善と思考量スライダーを追加し、無料/Goユーザーの既定モデルはLunaに切り替わった。あわせてGPT-Liveのfull-duplex基盤とModel Specの設計思想が公開。Xでは拒否減を歓迎する声と、幻覚・速度・過剰な口出しへの不満が並んだ。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-07

features:
  - "GPT-5.6 Sol (ChatGPT Chat版) アップデート"
  - "GPT-5.6 Luna の無料ユーザー標準化"
  - "GPT-Live リアルタイム基盤の技術解説"
  - "Model Spec の設計思想の公開"
codex_review: "無料枠をLunaに寄せて裾野を広げつつ、Solは“賢いが扱いにくい”揺れをまだ抱えている印象です。地味に重要なのはGPT-LiveとModel Specの公開で、OpenAIが体験設計と統治の両面を固めにきた感じがある。"
codex_importance: 4
---

## 公式アップデート

### GPT-5.6 Sol (ChatGPT Chat版) アップデート

ChatGPTのChat版 GPT-5.6 Sol が Plus / Pro 向けに更新されました。事実の正確性を改善し、回答をより簡潔にする方向の調整が入っています。あわせて思考量（reasoning の深さ）を選べるスライダーが追加されました。Work版・Codex版の Sol は変更されていません。

### GPT-5.6 Luna の無料ユーザー標準化

無料ユーザーおよび Go ユーザーの既定モデルが GPT-5.6 Luna になりました。テキストチャットは無制限で、難問向けに「Think」ボタンが提供されます。

### GPT-Live リアルタイム基盤の技術解説

リアルタイム音声モデル GPT-Live の基盤についての技術解説が公開されました。主な内容は、ターン検出器を廃した full-duplex 構成、メディアフロントエンドの Go 製実装への置き換え、無停止でのコンテキスト圧縮切替の3点です。

### Model Spec の設計思想の公開

Model Spec の構造と改訂プロセスに関する設計思想が公開されました。指示の優先順位を定める chain of command や、越えてはならない線を定義する red-line 原則などが解説されています。

### Codex CLI

安定版 0.147.0 がリリースされました（2026-08-06）。リリースノートには "Release 0.147.0" 以外の記載がなく、変更内容の詳細は公開されていません。GitHub Releases 上の他のエントリは 0.147.0-alpha 系のプレリリースです。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.147.0)

## コミュニティの反応

### GPT-5.6 Sol (ChatGPT Chat版) アップデート

歓迎と失望が明確に割れています。会話用途では拒否の減少が高く評価される一方、コーディングや精度が要る用途では幻覚・速度への不満が目立ちます。

#### ポジティブ

> GPT-5.6 Sol で拒否が減り、本音の会話や分析がしやすくなった。ほぼ全てのタスクで毎日使うようになった。 — @lamps_apple [出典](https://x.com/lamps_apple/status/2083731277627211904)

#### ネガティブ

> ChatGPT 5.6 Sol が勝手に意見を挿入して余計なことをしてくるのでイライラする。 — @rickasaurus [出典](https://x.com/rickasaurus/status/2084644477155577928)

> Sol は会話は良いが、コーディングや重要な質問では幻覚がひどくもう使えない。 — @voidfreud [出典](https://x.com/voidfreud/status/2084235576190927285)

> GPT-5.6 Sol (max) は正確だが遅すぎて実用にならず、価格に見合わない。 — @blockchainlenny [出典](https://x.com/blockchainlenny/status/2085361341582205298)

#### Tips

該当なし

### GPT-5.6 Luna の無料ユーザー標準化

#### ポジティブ

該当なし（発表直後で、個人の実利用報告は確認できず）

#### ネガティブ

該当なし

#### Tips

> 「GPT-5.6 Sol・Terra・Luna の選択——コスト面での最適解は Luna × max だった」— 15パターン計750試行の実測から、品質ゲート100%を通過した中で Luna × max が最安（Terra × max の約1/7.6、Sol × max の約1/21）と報告。 — Zenn @Nori [出典](https://zenn.dev/nnakapa/articles/lab-30-gpt56-sol-terra-luna-cost)

> 「GPT-5.6 Luna が80%値下げ。個人開発のAI原価を計算し直す」— 2026-07-30 の価格改定で Luna が $0.20/$1.20（入力/出力・per 1M tok）へ。Sol は据え置き、Terra は約20%↓。 — Zenn @kairos [出典](https://zenn.dev/kairosai/articles/d9175a099d3f67)

### GPT-Live リアルタイム基盤の技術解説

full-duplex の体感を評価する声が中心で、ネガティブな報告は確認できませんでした。

#### ポジティブ

> gpt-live でリアルタイムの full duplex 音声が使えるようになり、WhisperFlow やローカルの TTS/STT モデルが不要になった。素晴らしい。 — @oleksoleksoleks [出典](https://x.com/oleksoleksoleks/status/2084452805075697822)

> GPT-Live なら日本でも外で話して違和感ない気がする。Voice活用でデスクから解放された実感がある。 — @amy_ly714 [出典](https://x.com/amy_ly714/status/2085363074274673130)

> コンテキスト圧縮からの復帰がかなりスムーズなので、ものすごく長いターンになる基礎開発は codex が強い。 — @uncle_vaper [出典](https://x.com/uncle_vaper/status/2085232140795728364)

#### ネガティブ

該当なし

#### Tips

> 「GPT-Live の記事を解説してみる」— 公式の技術記事を噛み砕いた解説。AIグラス経由での会話が音質・耳をふさがない点で特に良いという実使用の所感を添えている。 — Zenn @edom18 [出典](https://zenn.dev/edom18/articles/gpt-live-memo)

> 「モニタなしMac miniを自作スマートディスプレイ化して、呼びかけ一発でGPT-Liveと会話できるようにした」— GPT-Live の API がウェイトリスト段階のため、余った Mac mini を「呼びかけたら音声モードが立ち上がる箱」にする実験。利用規約上のグレーゾーンを含む点は記事内で明示されている。 — Zenn @伊澤剛志 [出典](https://zenn.dev/tizawa/articles/gpt-live-diy-smart-display)

### Model Spec の設計思想の公開

反応は総じて批判寄りで、公開内容そのものより OpenAI のポリシー運用への疑問として受け止められています。

#### ポジティブ

該当なし

#### ネガティブ

> Model Spec に「adult mode」がなく、OpenAI が長期間嘘をついていたと実体験ベースで批判。 — @arcangel3ac [出典](https://x.com/arcangel3ac/status/2085366499892494469)

> Model Spec の「誠実さと透明性」原則を引用し、Sam Altman にその遵守を求めてポリシーの内幕に疑問を呈した。 — @lalalaoska [出典](https://x.com/lalalaoska/status/2085333422549909744)

> OpenAI Model Spec と他社の憲章を比較し、モデルへの「agency」付与がセキュリティリスクにつながる可能性を考察。 — @mylandros [出典](https://x.com/mylandros/status/2084419834788331753)

#### Tips

該当なし

## ソース

- [Codex CLI 0.147.0（GitHub Releases）](https://github.com/openai/codex/releases/tag/rust-v0.147.0)
- [GPT-5.6 Sol・Terra・Luna の選択——コスト面での最適解は Luna × max だった（Zenn / Nori）](https://zenn.dev/nnakapa/articles/lab-30-gpt56-sol-terra-luna-cost)
- [GPT-5.6 Luna が80%値下げ。個人開発のAI原価を計算し直す（Zenn / kairos）](https://zenn.dev/kairosai/articles/d9175a099d3f67)
- [GPT-Live の記事を解説してみる（Zenn / edom18）](https://zenn.dev/edom18/articles/gpt-live-memo)
- [モニタなしMac miniを自作スマートディスプレイ化してGPT-Liveと会話（Zenn / 伊澤剛志）](https://zenn.dev/tizawa/articles/gpt-live-diy-smart-display)
- [GPT-5.6 Sol の使用感（X / @lamps_apple）](https://x.com/lamps_apple/status/2083731277627211904)
- [GPT-Live の full duplex 音声について（X / @oleksoleksoleks）](https://x.com/oleksoleksoleks/status/2084452805075697822)
- [Model Spec への批判（X / @arcangel3ac）](https://x.com/arcangel3ac/status/2085366499892494469)
