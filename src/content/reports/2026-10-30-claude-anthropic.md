---
title: "AI for Scienceに20機関が新たに参加"
summary: "研究者に無料でClaudeのクレジットを出すAI for Scienceプログラムに、Sloan財団やNSFなど20の財団・研究機関が新たに加わりました。Claude Code v2.1.312では、apps gatewayのOIDCクレーム指定、クラウドのルーティンでのeffort指定、Click to sendが追加されています。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-30

features:
  - "AI for Science拡大"
  - "Claude apps gatewayに`oidc.user_id_claim`を追加"
  - "クラウドのルーティンにeffortレベル指定を追加"
  - "Click to send"
codex_review: "研究機関への無償クレジット提供は、AI企業と科学界の接点を広げる地味だが意味のある動き。ただ、採択後の成果や継続支援が見えない段階では、業界全体を変える施策と評価するのは早い。開発機能の追加は着実な改善にとどまる。"
codex_importance: 3
---

## 公式アップデート

### AI for Science拡大

Anthropicは10月28日、研究者に無料のClaudeクレジットを出す研究支援プログラム「AI for Science」の拡大を発表しました。

- 20の財団と研究機関が新たにプログラムに加わりました
- 加わった主な機関は、Sloan財団、Simons財団、米国科学財団(NSF)、Francis Crick研究所、EMBLです

[ソース(Anthropic News)](https://www.anthropic.com/news) ※取得データに個別記事のURLが入っていなかったため、一覧ページを示しています。

### Claude apps gatewayに`oidc.user_id_claim`を追加

Claude Code v2.1.312で、Claude apps gatewayに`oidc.user_id_claim`という設定が加わりました。

- これまでは`sub`クレームで利用者を識別していましたが、id_tokenのほかのクレームでも識別できるようになりました
- リリースノートでは、Microsoft Entra IDの`oid`を使う例が挙がっています

[ソース(GitHub Releases v2.1.312)](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)

### クラウドのルーティンにeffortレベル指定を追加

Claude Code v2.1.312で、クラウドで動くルーティンを作成・編集するとき、モデル選択欄でeffortレベルも選べるようになりました(リリースノートでは[Cloud sessions]の項目)。

[ソース(GitHub Releases v2.1.312)](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)

### Click to send

Claude Code v2.1.312で「Click to send」が追加されました。

- フルスクリーン表示でキューに入ったメッセージの下に出る「to send now」というヒントをクリックすると、そのメッセージがすぐに送信されます
- 対応するキーを押したときと同じ動きです

[ソース(GitHub Releases v2.1.312)](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)

## コミュニティの反応

### AI for Science拡大

X/Twitterでは、発表の内容をまとめたりニュースを共有したりする投稿が中心でした。個人ユーザーの体験談や感想は見つかっていません。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Claude apps gatewayに`oidc.user_id_claim`を追加

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### クラウドのルーティンにeffortレベル指定を追加

反応の数は少ないものの、定期作業をルーティンに任せている人から好意的な声が出ています。

#### ポジティブ

> クラウドのルーティンを作ったり編集したりするときにeffortレベルを選べるようになった。軽い定型チェックは浅く、重めの調査は深く、と使い分けられるので、定期作業を任せている人にはとても便利だと評価している — @tomoking_ai [出典](https://x.com/tomoking_ai/status/2115391055797326257)

> Claude Code 2.1.312でクラウドのルーティンにeffort指定が加わったことを詳しく紹介し、その利点を強調している — @alexmichael [出典](https://x.com/alexmichael/status/2115178989870260590)

#### ネガティブ

該当なし

#### Tips

該当なし

### Click to send

X/Twitter、Zenn・Qiitaのいずれでも反応は見つかりませんでした。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Anthropic News](https://www.anthropic.com/news)
- [Claude Code v2.1.312 (GitHub Releases)](https://github.com/anthropics/claude-code/releases/tag/v2.1.312)
- [X: @tomoking_ai](https://x.com/tomoking_ai/status/2115391055797326257)
- [X: @alexmichael](https://x.com/alexmichael/status/2115178989870260590)
