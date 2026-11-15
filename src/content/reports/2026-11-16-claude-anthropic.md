---
title: "公式更新なし、v2.1.325の検証と障害まとめ"
summary: "本日は新しい公式アップデートがありません。コミュニティでは、v2.1.325の相対パスdeny修正を再現した検証記事、11/15の公式ドキュメント更新の整理、直近の障害をまとめた記事が出ています。"
importance: 1
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-11-16

features: []
codex_review: "公式発表がない日の記事群ながら、deny規則の回避検証やフック暴走の実例は、エージェントを業務に組み込む際の足元の信頼性を考えさせる。派手な進化より、こうした運用上の穴を埋める知見のほうが現場には効く。"
codex_importance: 2
---

## 公式アップデート

本日の公式アップデートはありません。

(取得できた Claude Code のリリースは v2.1.325 と v2.1.323 です。どちらも前回までのレポートで取り上げています。)

## コミュニティの反応

本日、Step 1 で新しく抽出された機能はありません。X 検索もしていません。以下では、既存のリリースについて本日新しく出た Qiita・Zenn の記事を紹介します。

### v2.1.325 の相対パス deny 修正の検証

#### Tips

> `Read(./.env)` のような相対パスの deny 規則が `cd` の後も効くかを、バージョンごとに試した記事。2.1.323 までは `cd` の後に読めてしまい、2.1.324 以降は止まることを確かめている。前回の記事(`cp` で deny 対象に書ける件)の続編。中立的な検証 — おじさんAIラボ「Claude Codeで deny した .env は cd の後も守られる？ 2.1.323までは読めて、2.1.324から止まりました」 [出典](https://zenn.dev/ojisan_ai_lab/articles/claude-code-cd-relative-deny-20261115)

### 11/15 の公式ドキュメント更新

#### Tips

> 11/15 に検知されたドキュメントの追加を整理した記事。Bash フックの `if` 条件は、分割できない入力に対しては必ず起動すること、フックの終了コードの扱い、モデル切り替えの検知、auto モードの対象モデル、未知のモデル ID の扱いをまとめている。中立的な解説 — akihidem「11/15 の公式ドキュメント更新：フックの実行条件・終了コードとモデル関連の記載」 [出典](https://qiita.com/akihidem/items/c1affda2795eb7d78ff6)

### 障害・運用

#### ネガティブ

> 10/7〜11/14 に Anthropic のステータスページへ掲載された障害 20 件を整理した記事。11/13 の同時障害、認証エラー、利用上限の誤判定と、それぞれの対処法を説明している。未解決は iOS アプリの「Appleでサインイン」障害 1 件。業務利用者向けの注意喚起 — picnic「Claude障害まとめ：11/13の同時障害・認証エラー・利用上限誤判定と対処法」 [出典](https://qiita.com/picnic/items/0e7c5295c004f170dcd9)

#### Tips

> `/goal` を使わずに Stop フックを自作したところ、裏で動く作業を待つ仕組みがなかったために Claude Code が止まらず、使用量が増え続けた事例。自作するときの注意点として紹介している — かがり火ラボ「/goalを使わずStopフックを自作したら、Claude Codeが止まらず使用量が増え続けた」 [出典](https://zenn.dev/kagaribilab/articles/claude-code-stop-hook-loop)

> Claude Max 5x で無人の定期実行を回したところ、週の利用枠を主に消費していたのは出力ではなくキャッシュ読み取りだった(7日で約 14,000 リクエスト)という実測。対策として「モデルを既定のままにせず、毎回指定する」決まりを紹介している — crossclub「Claude Max 5x で無人の定期実行を回して分かった、週の利用枠の使われ方とモデル配分の直し方」 [出典](https://zenn.dev/crossclub_lab/articles/claude-max-usage-model-mix-unattended)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn: Claude Codeで deny した .env は cd の後も守られる？](https://zenn.dev/ojisan_ai_lab/articles/claude-code-cd-relative-deny-20261115)
- [Qiita: 11/15 の公式ドキュメント更新：フックの実行条件・終了コードとモデル関連の記載](https://qiita.com/akihidem/items/c1affda2795eb7d78ff6)
- [Qiita: Claude障害まとめ：11/13の同時障害・認証エラー・利用上限誤判定と対処法](https://qiita.com/picnic/items/0e7c5295c004f170dcd9)
- [Zenn: /goalを使わずStopフックを自作したら、Claude Codeが止まらず使用量が増え続けた](https://zenn.dev/kagaribilab/articles/claude-code-stop-hook-loop)
- [Zenn: Claude Max 5x で無人の定期実行を回して分かった、週の利用枠の使われ方とモデル配分の直し方](https://zenn.dev/crossclub_lab/articles/claude-max-usage-model-mix-unattended)
