---
title: "Codex CLI 0.144.2、Guardian自動レビューを復元"
summary: "本日の実質的な公式更新はCodex CLI 0.144.2の1件。auto-reviewプロンプト改修をリバートし、Guardian自動レビューの従来ポリシー・挙動を復元した。0.144.3は変更なしのバージョンのみ更新、0.145.0系はアルファ継続。個人ユーザーのX反応は確認できず。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-14

features:
  - "Codex CLI 0.144.2 (Guardian自動レビューのロールバック修正)"

codex_review: "こういうロールバック修正は地味だが、開発者向けAIではかなり重要だ。新機能より信頼性回復を優先した判断に見え、熱狂は呼ばなくても足場を固める更新だと思う。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.144.2 — Guardian自動レビューの挙動を復元

`auto review prompting` の改修（#32672 のリバート）により、Guardian 自動レビューの**ポリシー・リクエスト形式・ツール挙動**を、プロンプト改修で生じた回帰の前の状態へ戻した。新機能追加ではなくバグ修正リリース。

なお `0.144.3` は「`rust-v0.144.2` 以降にマージ済みのPR変更を含まないバージョンのみの公開」であり、実質的な変更はない。`0.145.0` 系は依然として `alpha.5〜7` が続いており、正式版は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.144.2)

## コミュニティの反応

### Codex CLI 0.144.2 (Guardian自動レビューのロールバック修正)

該当なし。

X/Twitter 上では、本修正に対する個人ユーザーの実体験・感想投稿は確認できなかった（主な投稿はリリース告知・変更履歴の共有のみ）。Qiita/Zenn でも本修正に直接言及する記事は見当たらなかった。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
