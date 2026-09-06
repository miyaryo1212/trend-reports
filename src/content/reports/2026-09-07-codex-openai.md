---
title: "Codex Securityが研究プレビュー公開、Codex for OSS始動"
summary: "Aardvark を改称・統合したアプリケーションセキュリティエージェント「Codex Security」が Codex web から研究プレビュー提供開始。OSS メンテナ向けの Codex for OSS も初期コホートのオンボーディングに入った。X では脆弱性検出の実績を評価する声と、コスト・スキャンスコープへの不満が並ぶ。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-07

features:
  - "Codex Security (リサーチプレビュー)"
  - "Codex Security の脅威モデル駆動スキャン"
  - "Codex for OSS"
  - "Why Codex Security Doesn't Include a SAST Report"
  - "Research acceleration: The view inside OpenAI"
  - "An Alien Mind"
codex_review: "SASTを置き換えるというより、脅威モデルと検証付きパッチを標準ワークフローに押し込む動きとして面白い。コストとスコープ問題が残るので、普及は段階的だと思う。"
codex_importance: 4
---

## 公式アップデート

### Codex Security (リサーチプレビュー)

これまで Aardvark の名で公開されていたアプリケーションセキュリティエージェントを改称し、Codex に統合。ChatGPT Pro / Enterprise / Business / Edu 向けに Codex web から提供が始まった。提供開始から 1 か月間は無料で利用できる。

[ソース](https://openai.com/news/)

### Codex Security の脅威モデル駆動スキャン

Codex Security はリポジトリを解析して編集可能な脅威モデルを生成し、それを起点にスキャンする。指摘はサンドボックスでの検証を通したもののみを提示し、パッチもあわせて提案する設計。公表値では直近 30 日で 120 万コミットをスキャンし、critical 判定は 792 件。

[ソース](https://openai.com/news/)

### Codex for OSS

OSS メンテナ向けに ChatGPT Pro / Plus の無料枠、コードレビュー、Codex Security を提供するプログラム。初期コホートのオンボーディングが始まっており、vLLM などが利用している。

[ソース](https://openai.com/news/)

### Why Codex Security Doesn't Include a SAST Report

Codex Security が SAST レポートを起点にしない設計判断を解説したエンジニアリング記事。z3-solver やマイクロファザーの活用に言及している。

[ソース](https://openai.com/news/)

### Research acceleration: The view inside OpenAI

昨秋に公表した「2026 年 9 月までに自動研究インターンを実現する」という目標の達成を宣言した記事。社内の研究組織では人間 1 人日あたり 3.1 エージェント人日を消費し、中央値の研究者が 1 日あたり 600 ドル超の推論を利用しているとする数値を公開している。

[ソース](https://openai.com/news/)

### An Alien Mind

再帰的自己改善 (RSI) の見通しとアラインメントについての、OpenAI 研究責任者による論説。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex Security (リサーチプレビュー)

#### ポジティブ

> 既存プロジェクトで実在する脆弱性を 3 件検出し、false positive でないことを検証したうえで修正案まで提案してくれた。npm install 一発で導入でき、Claude / Bedrock / Fireworks 対応や Docker 一括スキャンも便利。 — @0xNeoArch [出典](https://x.com/0xNeoArch/status/2096623518511141132)

> コードのセキュリティチェックが「個人の腕前」に依存しない時代が来た、という構造的な変化を感じる。Node.js / Python 対応の CLI・SDK でリポジトリ全体のスキャンから脆弱性追跡まで自動化でき、チーム全体の底上げに役立つ。 — @calc_hedgy [出典](https://x.com/calc_hedgy/status/2095641277463490933)

#### ネガティブ

> Threat Modeling だけで典型的な Golang アプリに 2 ドル超のコストがかかった。高額で実用的ではない。 — @liran_tal [出典](https://x.com/liran_tal/status/2095286912499995091)

> クライアントのモバイルアプリで Codex Security を実行済みだったので安心していたが、Postgres の RLS 関数がスコープ外で見逃されており、paywall bypass の脆弱性が残っていた。スコープの狭さが問題。 — @iam_zachi [出典](https://x.com/iam_zachi/status/2094567596649750868)

> 1 か月の無料期間が延長されたのはありがたいが、来月から使えなくなるのは痛い。 — @YuYoshimuta [出典](https://x.com/YuYoshimuta/status/2095353980348231912)

#### Tips

該当なし。

### Codex Security の脅威モデル駆動スキャン

該当なし。脅威モデル駆動スキャンそのものに言及した個人ユーザーの投稿は確認できなかった。

### Codex for OSS

#### ポジティブ

> Codex for OSS を使い始めて 1 か月。そろそろ外に出ないとまずい。 — @satwiksps [出典](https://x.com/satwiksps/status/2096652470579757073)

#### ネガティブ

無料枠の期限切れに関する声が目立つ。

> Codex OSS の grant が期限切れになり Premium Business アカウントへ移行。リセットを 2 回消費し、週次上限の 60% まで減ってしまった。 — @cnakazawa [出典](https://x.com/cnakazawa/status/2096488677287588014)

> OSS 枠の codex / ChatGPT サブスクリプションが切れてしまい、Astra を試せない。 — @samuelcolvin [出典](https://x.com/samuelcolvin/status/2096357375254888875)

> Agentic Awesome Skills の唯一のメンテナだが、Codex for OSS のアクセスがまもなく終了する。 — @sickn33 [出典](https://x.com/sickn33/status/2096563001910313385)

> Codex for OSS が適用されたアカウントには Astra がぜんぜん来ない。 — @kohya_tech [出典](https://x.com/kohya_tech/status/2096382536985579805)

#### Tips

該当なし。

### Why Codex Security Doesn't Include a SAST Report

該当なし。SAST レポート非採用の設計判断や z3-solver / マイクロファザーの活用に触れた個人ユーザーの投稿は確認できなかった。

### Research acceleration: The view inside OpenAI

#### ポジティブ

> OpenAI は自動研究インターンの目標を予定より 3 か月早い 2026 年 6 月に達成している。完全自動化された研究者の実現も 2027 年 12 月頃へ前倒しされる可能性がある。 — @deredleritt3r [出典](https://x.com/deredleritt3r/status/2096239630177759735)

#### ネガティブ / Tips

該当なし。

### An Alien Mind

該当なし。論説の要約・引用・意見表明は複数見られたが、ツール利用の実体験に該当する投稿はなかった。

### 日本語コミュニティ (Zenn / Qiita)

本日の Zenn / Qiita の新着記事は GPT-6 Astra の検証や ChatGPT の課金・広告設定など、上記トピックとは別軸のものが中心で、本日の公式アップデートに対応する記事は該当なし。

## ソース

- [OpenAI News](https://openai.com/news/)
- [X: Codex Security の検出実績 (@0xNeoArch)](https://x.com/0xNeoArch/status/2096623518511141132)
- [X: Threat Modeling のコストへの指摘 (@liran_tal)](https://x.com/liran_tal/status/2095286912499995091)
- [X: スキャンスコープの見落とし (@iam_zachi)](https://x.com/iam_zachi/status/2094567596649750868)
- [X: Codex for OSS の grant 期限切れ (@cnakazawa)](https://x.com/cnakazawa/status/2096488677287588014)
- [X: 自動研究インターン達成時期の分析 (@deredleritt3r)](https://x.com/deredleritt3r/status/2096239630177759735)
