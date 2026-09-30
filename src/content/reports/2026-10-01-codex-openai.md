---
title: "Codex CLI 0.159.2 と敵対的蒸留の遮断報告"
summary: "本日の動きは小規模。Codex CLI は Windows のコンソールウィンドウ点滅を抑えるバックポート修正のみの安定版 0.159.2 が出た。OpenAI は9月30日、保護された推論過程を復号・転記させて抽出しようとする敵対的蒸留の組織的キャンペーンを特定・遮断したと公開した。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-01

features:
  - "モデル蒸留キャンペーンの遮断"
  - "Codex CLI 0.159.2"
codex_review: "蒸留対策の報告は、モデル防御が性能競争と同じく運用上の課題になった点で興味深い。ただ、単一企業の検知事例だけでは業界全体の転換とは言いにくく、CLI修正も局所的で、今のところ影響は限定的だ。"
codex_importance: 2
---

## 公式アップデート

### モデル蒸留キャンペーンの遮断

OpenAI は9月30日、保護された推論過程 (reasoning) を暗号化状態から復号・転記させることでモデルを抽出しようとする敵対的蒸留の組織的活動を特定し、遮断したと公開しました。7月24〜25日に16,000リクエストの急増が観測されたなど、具体的な検出経緯が示されています。

[ソース](https://openai.com/news/)

### Codex CLI 0.159.2

Windows でバックグラウンドプロセスおよびサンドボックスコマンドを実行する際にコンソールウィンドウが点滅する問題を抑止するバックポート修正のみを含む安定版です ([#49385](https://github.com/openai/codex/pull/49385))。他の変更はありません。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.159.2)

## コミュニティの反応

### モデル蒸留キャンペーンの遮断

#### 該当なし

直近の X 投稿・日本語記事に、この件についての個人ユーザーの反応・実使用体験は確認できませんでした。

### Codex CLI 0.159.2

#### ネガティブ

> Codex CLI を Windows で更新してから問題が続いている。`--no-daemon` を要求するエラーが出たあと、実行中に PowerShell のウィンドウがランダムに開く — @thedip_eth [出典](https://x.com/thedip_eth/status/2105404710626697542)

> Codex CLI が Windows で壊れている。あらゆる操作でターミナルウィンドウが開き、ランサムウェアのように見える — @fabian_bader [出典](https://x.com/fabian_bader/status/2105399561250619683)

#### トーン

0.159.2 が対象としたまさに Windows のコンソールウィンドウ問題について、修正後も同種の症状を訴える投稿が出ています。ポジティブな反応や Tips は該当なしでした。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [OpenAI News](https://openai.com/news/)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
