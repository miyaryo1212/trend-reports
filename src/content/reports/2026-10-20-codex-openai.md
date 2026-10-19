---
title: "0.164.0-alpha.4〜6 が1日で3本、安定版は未着"
summary: "Codex CLI は10月19日に 0.164.0-alpha.4〜alpha.6 を連続公開した。リリースノートは無いが、MCP 接続のエンタープライズ管理認可や GitHub Actions OIDC 認証などがコミットに含まれる。国内では 28日間企画 Day 14 の解説やデバイス認証ログインの Tips が公開された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-20

features:
  - "Codex CLI 0.164.0-alpha.4〜alpha.6 公開"
codex_review: "alpha版の細かな連投は、MCP認可やOIDC対応が実装段階に進んでいる点では気になるが、変更内容を公式が説明しないままでは評価しづらい。目立つ新機能より、企業導入の足回りを固める地味な動きに見える。"
codex_importance: 2
---

## 公式アップデート

### Codex CLI 0.164.0-alpha.4〜alpha.6 公開

10月19日に 0.164.0 系のプレリリースが3本連続で公開されました。alpha.4(10:48 UTC)と alpha.5(14:33 UTC)は GitHub Actions による自動タグ、alpha.6(20:55 UTC)は OpenAI スタッフ(celia-oai)による手動タグです。いずれもリリースノートは「Release 0.164.0-alpha.N」の1行のみで、変更点の記載はありません。

コミットログから確認できる主な変更は次のとおりです。

- MCP 接続に対するエンタープライズ向けの管理認可
- Responses API プロキシでの GitHub Actions OIDC 認証
- サブエージェントへのスレッド環境の継承
- Windows MXC サンドボックスの mxc-sdk への移行
- app-server WebSocket の zstd 圧縮(フィーチャーフラグ付き)

安定版 0.164.0 は本日時点で未公開です。直近の安定版は 10月15日公開の 0.163.0 のままです。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### Codex CLI 0.164.0-alpha.4〜alpha.6 公開

X/Twitter では該当する投稿が見つかりませんでした(該当なし)。alpha 版へのコミュニティの言及は、Zenn / Qiita でも確認できていません。

### Codex 28日間企画 Day 14(デスクトップで過去メッセージ編集)

#### 中立

> 10月18日(米国時間)の Day 14 では、Codex デスクトップで過去のメッセージを編集できる機能が発表された。既存の Steer・Queue・Fork との違いを整理 — sponge841841 [出典](https://qiita.com/sponge841841/items/231f9a54468740f81fee)

### Codex CLI の利用 Tips

#### Tips

> Windows / PowerShell で `codex login` が通らないときは、`--device-auth`(デバイス認証)でログインする手順を解説 — koheip [出典](https://qiita.com/koheip/items/ba1a61073b07bc5e8cad)

> Codex にまとまった仕事を頼むときは「詳しく書く」より、目的・根拠・出力形式など5点を最低限そろえた依頼書を用意した方が出力を確認しやすい。依頼書あり/なしで出力を比較 — takuwan_lab [出典](https://qiita.com/takuwan_lab/items/d34e248910ad2646e7fc)

### その他の OpenAI 関連記事(Decisions API の検証が集中)

パブリックベータの Decisions API を実際に試した記事が3本公開されました。トーンは中立〜実務寄りで、精度・速度・費用を競合サービスと比較する内容が中心です。

#### 中立

> Rails で Decisions API を使った猫判定アプリを作ったところ、指示を1行追加するだけで確率が 100% から 0% に変わった — aya [出典](https://zenn.dev/aya1357/articles/d537003189a21c)

> Decisions API・Jev・Clef の仕様と料金を比較し、Decisions API と Jev を実測。精度に差は見られず、費用は Jev が安く応答もおおむね速いが、時間がかかった数件では Decisions API より遅かった — はせ [出典](https://zenn.dev/bocek/articles/5e1ba6fae7e7d6)

> Jev の画像入力と Decisions API に同じ写真を送り、精度・速度・費用を比較 — Takeshi Kada [出典](https://zenn.dev/tkada/articles/ae2519179679df)

> DevDay 2026 で発表された常時稼働エージェント dots の「許可・要承認・禁止」3段階ルールについて、承認する人間が不在の環境では「要承認」が意味を持たないと考察 — 田前秀樹 [出典](https://zenn.dev/hideki_tamae/articles/dots-approval-gate-requires-presence)

## ソース

- [GitHub: openai/codex Releases](https://github.com/openai/codex/releases)
- [Qiita: Codex Day 14徹底解説：デスクトップで過去のメッセージを編集可能に](https://qiita.com/sponge841841/items/231f9a54468740f81fee)
- [Qiita: Codex CLIのログインが通らないときは --device-auth を使おう](https://qiita.com/koheip/items/ba1a61073b07bc5e8cad)
- [Qiita: 「いい感じにまとめて」と頼む前に：Codex用の依頼書で出力を比べる](https://qiita.com/takuwan_lab/items/d34e248910ad2646e7fc)
- [Zenn: RailsでOpenAI Decisions APIを使った猫判定](https://zenn.dev/aya1357/articles/d537003189a21c)
- [Zenn: 判断特化モデルの比較: Decisions API・Jev・Clef](https://zenn.dev/bocek/articles/5e1ba6fae7e7d6)
- [Zenn: Jevの画像入力とOpenAI Decisions APIを比べてみる](https://zenn.dev/tkada/articles/ae2519179679df)
- [Zenn: OpenAIのdotsが3段階ルールを採用した日](https://zenn.dev/hideki_tamae/articles/dots-approval-gate-requires-presence)
- [Zenn: OpenAI トピック](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
