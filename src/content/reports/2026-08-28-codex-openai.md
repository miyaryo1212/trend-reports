---
title: "CLI 0.150.1修正、iOSアプリにCodex Remote導線"
summary: "Codex CLI 0.150.1 でリモートコンパクションが保持画像をトークン予算に算入するよう修正され、0.151.0系のアルファが4本追加された。ChatGPT for iOS 1.2026.230 はタスク横断検索や Codex Remote ショートカットを追加し、X上では実利用の報告と Remote 接続の不安定さの両方が出ている。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-28

features:
  - "Codex CLI 0.150.1"
  - "Codex CLI 0.151.0-alpha.3〜alpha.6"
  - "ChatGPT for iOS 1.2026.230"
  - "Learning never stops"
  - "Better answers, broader thinking"
  - "Expanding OpenAI's presence in Brazil"
codex_review: "CLI修正自体は地味だが、Remote運用の粗さがようやく実装の優先順位に乗ってきた気配は面白い。とはいえiOS導線強化の華やかさに比べると、業界全体を動かす材料としてはまだ小粒です。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.150.1

0.150.0 に対するパッチリリース。リモートコンパクションが保持している画像をトークン予算に算入するようになり、必要に応じて古い画像から順に切り詰める挙動が既定になった ([#41003](https://github.com/openai/codex/pull/41003))。0.150 系へのバックポートとして入っている。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.150.1)

### Codex CLI 0.151.0-alpha.3〜alpha.6

次期系列のアルファが 4 本追加公開された。いずれもリリースノート本文は「Release 0.151.0-alpha.x」のみで、変更点の記載はない。あわせて 0.150.0-alpha.12.2 も公開されている。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6)

### ChatGPT for iOS 1.2026.230

iOS アプリの更新。接続ホストを横断したタスク検索、推論エフォートを調整するゲージ、長文入力向けのフルスクリーンエディタ、Codex Remote などをホーム画面から直接開けるショートカットが追加された。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### Learning never stops

学習の継続化に関する新レポートが公開された。週あたり最大 7000 万件の知識確認系の会話が発生しており、米国では学期中の授業・宿題関連プロンプトが週 4.6 億件を超えると報告されている。

[ソース](https://openai.com/news/)

### Better answers, broader thinking

Bocconi 大学との共同実験の結果が公開された。ChatGPT を利用したグループは 5 点満点で約 1 点の向上を示し、因果推論トレーニングを受けたグループはアイデアの独自性が向上したとされる。

[ソース](https://openai.com/news/)

### Expanding OpenAI's presence in Brazil

サンパウロ拠点で商業オペレーションを開始したことが発表された。ブラジルは WAU 上位 3 市場に入り、1 日あたり約 2.15 億メッセージが送られているという。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex CLI 0.150.1

#### ポジティブ・ネガティブ・Tips

該当なし。直近1週間の X 投稿を検索したが、本パッチやリモートコンパクションの挙動変更に触れた個人ユーザーの実体験投稿は確認できなかった (告知系・ニュースまとめ系アカウントの投稿は除外)。

### Codex CLI 0.151.0-alpha.3〜alpha.6

#### ポジティブ・ネガティブ・Tips

該当なし。0.151.0-alpha 系列に言及した個人ユーザー投稿は期間内に確認できなかった。

### ChatGPT for iOS 1.2026.230

#### ポジティブ

> ChatGPT iOS アプリの Codex Remote から VPS へ直接 SSH 接続し、iPhone だけでプロジェクト切り替え・PR 作業・テスト実行まで問題なく回せるようになった。 — @andr3barroso [出典](https://x.com/andr3barroso/status/2092709036370321575)

> Codex Remote の改善 (スレッド読み込みの高速化など) が即戦力で「HUGE」。アプリの更新を勧める。 — @PaulSolt [出典](https://x.com/PaulSolt/status/2092362910416719957)

#### ネガティブ

> 長時間の Codex タスクが iOS アプリの UI に反映されない。レスポンスが最初の段落で止まり、進捗表示も終了操作も出てこず、Remote 接続の信頼性が落ちている。 — @kompilat [出典](https://x.com/kompilat/status/2092551409799504114)

#### Tips

> 設定で「常に Remote (Codex) を最初に開く」を有効にすると作業開始がスムーズになる。 — @LukeberryPi [出典](https://x.com/LukeberryPi/status/2092640171720147313)

> VPS 接続時は `.bashrc` に TTY 判定を追加すると Codex の初期ハンドシェイクが正常化する (`__CODEX_REMOTE_POSIX_SHELL_READY__` が正しく返る)。 — @andr3barroso [出典](https://x.com/andr3barroso/status/2092709036370321575)

### Learning never stops

#### ポジティブ

> 資格勉強で ChatGPT に一問一答やひっかけ問題を作らせたら非常に分かりやすく、久々に勉強が楽しくなった。 — @momo_mothimochi [出典](https://x.com/momo_mothimochi/status/2092978785423671756)

> 医療系の学生として、新機能で波動・電気・神経系の学習が実践的かつ関連性の高いものになった。 — @DrPepe08 [出典](https://x.com/DrPepe08/status/2093030433210404894)

> 記憶・パーソナライズ機能により自分の学習スタイルや目標を踏まえた継続的なアドバイスが得られ、日々の学びが深まった。 — @WittyRay2009 [出典](https://x.com/WittyRay2009/status/2091515470075810076)

#### ネガティブ

> Logic Pro の学習中、ChatGPT が我慢しきれずに赤い矢印だらけの指示を出してきた。 — @BLCNYY [出典](https://x.com/BLCNYY/status/2093052229024387311)

#### Tips

> 答えをただ読むのではなく「積極的に練習する」姿勢で、次のステップをガイドさせるのが効果的。 — @Quasilocal [出典](https://x.com/Quasilocal/status/2090668555784036595)

### Better answers, broader thinking

#### ポジティブ

> 分からない部分を詳しく聞けるおかげで学習効率が大きく上がり、日商簿記2級に3ヶ月でほぼ満点合格できた。 — @Momochi_study [出典](https://x.com/Momochi_study/status/2092762980312289621)

> AI を「判断をアウトソースせず補強する道具」として使い、仮定を疑ったり別モデルと比較したりすることで最終出力の質が明確に上がった。 — @luckiebunu [出典](https://x.com/luckiebunu/status/2090804873818525806)

#### ネガティブ

> 子供に批判的思考を教える場面で ChatGPT に答えを出させるのは避けたい。自分の頭で考えさせるべき。 — @UchihaTril_ [出典](https://x.com/UchihaTril_/status/2092731573837672708)

> 思考を AI に委ねた結果、幻覚や誤りに気づかないケースが多い。半分自分で直す必要があるなら意味がない。 — @simp4silver [出典](https://x.com/simp4silver/status/2092671968046874938)

#### Tips

> 創造性が要るタスクは ChatGPT、批判的思考が要るタスクは Claude と振り分けるのが効果的。 — @matthakun05 [出典](https://x.com/matthakun05/status/2092652827953013199)

> 事前定義したフレームワークで評価させる、別モデルと突き合わせるなど「補強する使い方」に徹すると質が上がる。 — @luckiebunu [出典](https://x.com/luckiebunu/status/2090804873818525806)

### Expanding OpenAI's presence in Brazil

#### ポジティブ・ネガティブ・Tips

該当なし。ニュース共有や分析中心の投稿が大半で、個人ユーザーの実体験に基づく投稿は確認できなかった。

### 日本語コミュニティ (Zenn / Qiita)

Codex / OpenAI 周辺で本日確認できた日本語記事。

#### Tips

> [Codexのサブエージェント1つにREADME調査を任せる — メインの会話を散らかさず10分で試す](https://qiita.com/akira_papa_AI/items/3f364121b92da2d38369) — サブエージェントに調査を切り出し、メイン会話のコンテキスト汚染を避ける手順。

> [Codexハーネスを試してみた : Codexを外部アプリのエージェント実行基盤にする](https://zenn.dev/mm_ai/articles/codex-agent-harness-platform) — Codex を汎用エージェント実行基盤として外部アプリに組み込む実践。

#### ネガティブ

> [42日で13回。Codexの使用量リセット頻度がすごい](https://zenn.dev/masayan1126/articles/codex-usage-reset-frequency-timeline) — 2026年7月13日〜8月24日の広域リセット告知13回と banked reset 付与3回を整理し、レート制限が作業速度に直結する実感を述べている。

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [rust-v0.150.1](https://github.com/openai/codex/releases/tag/rust-v0.150.1)
- [rust-v0.151.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI News](https://openai.com/news/)
- [@andr3barroso の投稿 (X)](https://x.com/andr3barroso/status/2092709036370321575)
- [@PaulSolt の投稿 (X)](https://x.com/PaulSolt/status/2092362910416719957)
- [@kompilat の投稿 (X)](https://x.com/kompilat/status/2092551409799504114)
- [@LukeberryPi の投稿 (X)](https://x.com/LukeberryPi/status/2092640171720147313)
- [@momo_mothimochi の投稿 (X)](https://x.com/momo_mothimochi/status/2092978785423671756)
- [@DrPepe08 の投稿 (X)](https://x.com/DrPepe08/status/2093030433210404894)
- [@WittyRay2009 の投稿 (X)](https://x.com/WittyRay2009/status/2091515470075810076)
- [@BLCNYY の投稿 (X)](https://x.com/BLCNYY/status/2093052229024387311)
- [@Quasilocal の投稿 (X)](https://x.com/Quasilocal/status/2090668555784036595)
- [@Momochi_study の投稿 (X)](https://x.com/Momochi_study/status/2092762980312289621)
- [@luckiebunu の投稿 (X)](https://x.com/luckiebunu/status/2090804873818525806)
- [@UchihaTril_ の投稿 (X)](https://x.com/UchihaTril_/status/2092731573837672708)
- [@simp4silver の投稿 (X)](https://x.com/simp4silver/status/2092671968046874938)
- [@matthakun05 の投稿 (X)](https://x.com/matthakun05/status/2092652827953013199)
- [Zenn: Codexハーネスを試してみた](https://zenn.dev/mm_ai/articles/codex-agent-harness-platform)
- [Zenn: 42日で13回。Codexの使用量リセット頻度がすごい](https://zenn.dev/masayan1126/articles/codex-usage-reset-frequency-timeline)
- [Qiita: Codexのサブエージェント1つにREADME調査を任せる](https://qiita.com/akira_papa_AI/items/3f364121b92da2d38369)
