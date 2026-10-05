---
title: "テキスト透かしtextGrainとChatGPT広告の拡張"
summary: "OpenAI が EU AI Act 対応のテキスト透かし textGrain を API でオプトイン提供開始し、EU の ChatGPT/Codex 出力にも数週間内に付与する。ChatGPT Ads は画像生成中のビジュアル広告テストと計測連携を拡充。Codex CLI は 0.160.1 で Windows リモート MCP の環境変数修正をバックポート。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-06

features:
  - "テキスト透かし textGrain (EU AI Act 対応)"
  - "ChatGPT Ads 新ビジュアル広告フォーマットと計測拡張"
  - "Codex CLI 0.160.1"
codex_review: "textGrainは万能な真贋判定より、出所を示す地味な足場として見るのが妥当だろう。一方、生成待ち時間への広告と計測強化は、対話の中立性を広告モデルへ寄せる動きで、透かしより業界への波及が大きそうだ。"
codex_importance: 3
---

## 公式アップデート

### テキスト透かし textGrain (EU AI Act 対応)

- API で一部モデルに対し、オプトイン式のテキスト透かし「textGrain」の提供を開始。
- EU 域内の ChatGPT / Codex の出力にも、数週間以内に不可視の透かしを付与する予定。
- 透かしの検出器は研究者向けに利用申請を受け付ける。

[ソース](https://openai.com/news/)

### ChatGPT Ads 新ビジュアル広告フォーマットと計測拡張

- 画像生成の待ち時間に表示する画像広告を、今月後半に米国でテスト開始。
- Hightouch / LiveRamp などとのコンバージョン連携を追加。
- 広告の表示を避けたい語句を指定する「Negative Phrases」を追加。
- DV (DoubleVerify) / IAS (Integral Ad Science) によるブランド適合性評価のパイロットを開始。

[ソース](https://openai.com/news/)

### Codex CLI 0.160.1

- 安定版 0.160 系へのバグ修正バックポート ([#51121](https://github.com/openai/codex/pull/51121))。
- 明示的にリモート環境変数を設定したリモート stdio MCP サーバーを起動する際、`SYSTEMROOT` / `TEMP` / `TMP` を保持するよう修正。Unix ホストから Windows 実行環境を使う構成で、Windows 側の起動時環境が失われなくなる。
- 並行して `0.162.0-alpha.12`〜`alpha.16` (10/04〜10/05) が公開されているが、いずれもリリースノートはない。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.160.1)

## コミュニティの反応

### テキスト透かし textGrain (EU AI Act 対応)

全体の温度感は「透明性は評価するが、実効性は限定的」という冷静なもの。

#### ポジティブ

> ChatGPT と Codex を日常的に多用しているので注目している。透明性が高く、限界についても正直に説明されている点を評価する — @BrillaConElla [出典](https://x.com/BrillaConElla/status/2107221101738610885)

#### ネガティブ

> textGrain は弱い統計的痕跡にすぎず、編集や翻訳で簡単に検出されなくなる。人間の関与が不要になるわけではない — @basuta007 [出典](https://x.com/basuta007/status/2107221879786471556)

#### Tips

該当なし

### ChatGPT Ads 新ビジュアル広告フォーマットと計測拡張

X 上では発表の要約やニュース共有が中心で、個人ユーザーの実体験に基づく反応は見つからなかった。日本語では開発者視点の解説記事が出ている。

#### Tips

- [ChatGPT広告の測定拡充を読む：Pythonで帰属期間と増分効果の違いを確かめる](https://qiita.com/tsukaima_kobo/items/75f59c4b0d2f03a550e0) — 測定拡充を「行動イベントの送信」「帰属の集計」「因果効果の推定」の3つの処理に分けて整理した記事。架空の広告接触・購入データを Python で集計し、帰属期間の設定だけで成果件数が変わることを確かめている。トーンは中立的・実務寄り (Qiita / tsukaima_kobo)

### Codex CLI 0.160.1

#### 該当なし

X 上の投稿はリリース告知の転載が中心で、修正について個人が実体験を語ったものは見つからなかった。

## ソース

- [OpenAI News](https://openai.com/news/)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Codex rust-v0.160.1](https://github.com/openai/codex/releases/tag/rust-v0.160.1)
- [Qiita: ChatGPT広告の測定拡充を読む](https://qiita.com/tsukaima_kobo/items/75f59c4b0d2f03a550e0)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
