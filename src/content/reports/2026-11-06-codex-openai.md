---
title: "GPT-6 CyberとImages 2.6が登場"
summary: "OpenAIは、承認された範囲内だけで脆弱性の発見と修正を行うGPT-6 Cyberと、GIF・SVG出力に対応したImages 2.6を発表した。Linuxカーネルで権限昇格の脆弱性948件を見つけた事例も公開された。Xではセキュリティ自動化を評価する声が出ている。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-06

features:
  - "GPT-6 Cyber"
  - "Images 2.6"
  - "A thousand fewer paths to root"
  - "Codex CLI 0.168.0-alpha.3〜alpha.7 / 0.167.0-alpha.3.2"
  - "National Community Compact / Compute Campus Policy Blueprint"
codex_review: "948件という数字は目を引くが、検証条件や既知脆弱性との切り分けが見えず、成果の大きさはまだ額面通りに受け取りにくい。GIFやSVG対応も実務には便利そうだが、業界を動かすのはサイバーAIの再現性と安全な運用設計だろう。"
codex_importance: 4
---

## 公式アップデート

※ Codex CLI 以外の項目は、今回の収集データに公式発表の URL が含まれていません。

### GPT-6 Cyber

サイバーセキュリティに特化したモデルです。脆弱性の発見と修正を担当し、承認された範囲の中だけで動くように訓練されています。

### Images 2.6

画像生成の新バージョンで、ChatGPT・Codex・API で使えます。主な変更点は次のとおりです。

- 生成の高速化
- GIF の作成
- より精密な編集
- 新しい API 制御

### A thousand fewer paths to root

自律パイプラインで Linux カーネルを調べ、権限昇格の脆弱性 948 件を発見・検証し、パッチまで生成した取り組みです。

### Codex CLI 0.168.0-alpha.3〜alpha.7 / 0.167.0-alpha.3.2

Codex CLI のプレリリース版が新たに公開されました。いずれもリリースノートは「Release x.x.x」の一文だけで、変更点の詳しい説明はありません。

- 0.168.0-alpha.3 (2026-11-05) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3)
- 0.168.0-alpha.4 (2026-11-05) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.4)
- 0.168.0-alpha.5 (2026-11-05) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.5)
- 0.168.0-alpha.6 (2026-11-05) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.6)
- 0.168.0-alpha.7 (2026-11-05) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7)
- 0.167.0-alpha.3.2 (2026-11-05) [ソース](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3.2)

### National Community Compact / Compute Campus Policy Blueprint

AI インフラを責任ある形で整備するための指針です。地域の保護と雇用の創出を柱にしています。

## コミュニティの反応

### GPT-6 Cyber

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

※ GPT-6 Cyber 単独の検索では投稿が見つかりませんでした。GPT-6 Cyber に触れた個人の反応は、次の「A thousand fewer paths to root」の項目にまとめています。

### Images 2.6

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> 公式発表・ドキュメント・初期報道の内容を突き合わせ、開発者向けの新しい API 制御 (アニメーション GIF 出力、SVG 出力、マークアップ編集、complexity 設定) を整理した記事。トーンは中立 — [OpenAI Images 2.6: GIF, SVG and Markup Edit in the API (Zenn / NeoTechPark)](https://zenn.dev/neotechpark/articles/96b9ff9a543b37)

> 2.6 への移行手順と、Batch が使えない点の注意をまとめたガイド。ゲートウェイ事業者の記事で、実機での検証はしていないと明記されている — [GPT Image 2.6 API 移行ガイド：Batch の欠落と /ai/v1 での呼び出し方 (Qiita / AIHubMix)](https://qiita.com/AIHubMix/items/7458a3160cf9690a09f2)

> 2.5 と比べて価格・速度・SVG/GIF 出力がどう変わったかを、ドキュメントに基づいて比較した記事 (実機テストなし) — [GPT Image 2.6 と 2.5 の違い：価格・速度・SVG/GIF 出力を比較 (Qiita / AIHubMix)](https://qiita.com/AIHubMix/items/29a20812c77c0f8c366a)

※ X ではレート制限のため投稿を取得できませんでした。

### A thousand fewer paths to root

#### ポジティブ

> GPT-6 Cyber が Linux カーネルの権限昇格脆弱性 948 件を発見・検証し、パッチ生成まで自動化した点を高く評価。「個人開発者でも、自分のアプリやサーバーの安全性を専門 AI が完璧に点検・修正してくれる未来がすぐそこ」と期待を寄せている (好意的) — @haluxel [出典](https://x.com/haluxel/status/2118456068061949964)

> GPT-6 Cyber が Firefox で新しいバグ 81 件を発見・修正し、Linux カーネルで 948 件の exploit を構築した (前モデルの 5 倍以上) と紹介。「AI がコードを書くだけでなく、穴も見つける時代」と実感を語っている (好意的) — @chaosengineerr [出典](https://x.com/chaosengineerr/status/2118455528578060466)

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.168.0-alpha.3〜alpha.7 / 0.167.0-alpha.3.2

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### National Community Compact / Compute Campus Policy Blueprint

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

※ X で見つかった投稿は、ニュースの共有・投資分析・一般論だけでした。個人の体験や感想は確認できませんでした。

## ソース

- [Codex Releases: 0.168.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7)
- [Codex Releases: 0.168.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.6)
- [Codex Releases: 0.168.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.5)
- [Codex Releases: 0.168.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.4)
- [Codex Releases: 0.168.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3)
- [Codex Releases: 0.167.0-alpha.3.2](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3.2)
- [Zenn: OpenAI Images 2.6: GIF, SVG and Markup Edit in the API](https://zenn.dev/neotechpark/articles/96b9ff9a543b37)
- [Qiita: GPT Image 2.6 API 移行ガイド：Batch の欠落と /ai/v1 での呼び出し方](https://qiita.com/AIHubMix/items/7458a3160cf9690a09f2)
- [Qiita: GPT Image 2.6 と 2.5 の違い：価格・速度・SVG/GIF 出力を比較](https://qiita.com/AIHubMix/items/29a20812c77c0f8c366a)
- [X: @haluxel](https://x.com/haluxel/status/2118456068061949964)
- [X: @chaosengineerr](https://x.com/chaosengineerr/status/2118455528578060466)
