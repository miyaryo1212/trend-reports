---
title: "GPT-5.6 Sol限定プレビュー、Codex従量課金・広告テストも始動"
summary: "OpenAIが次世代モデルGPT-5.6 Sol/Terra/Lunaを政府承認の約20社向け限定プレビューで公開。チーム向けCodex従量課金やCodexアプリ、ChatGPT広告テストも動き出した。CodexアプリはCLIからの移行で並列セッションの不安定さに不満も。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-06-27

features:
  - "GPT-5.6 Sol / Terra / Luna"
  - "Codex 従量課金 (チーム向け)"
  - "Codex アプリ"
  - "ChatGPT 広告テスト"
codex_review: "モデルの限定公開そのものより、広告テストとCodex課金の同時始動に、OpenAIが研究機関から総合プラットフォーム企業へ踏み切った感じがある。派手なのは5.6だが、地味に効くのは開発者導線の再設計だ。"
codex_importance: 4
---

## 公式アップデート

### GPT-5.6 Sol / Terra / Luna 限定プレビュー

次世代モデル群 GPT-5.6 Sol / Terra / Luna を限定プレビューで公開。新たに `max` 推論モードと、サブエージェントを活用する `ultra` モードを導入し、コーディング・科学・サイバーセキュリティ領域の能力を強化。米政府承認の約20社向けという限定提供で、公開範囲を発表前に絞る形は前例がないと報じられている。

[ソース](https://qiita.com/picnic/items/26cff9663422145c0226)

### Codex 従量課金 (チーム向け)

ChatGPT Business / Enterprise 向けに、トークン量ベースの従量課金で使える Codex 専用シートを提供。固定席コストなしで導入でき、期間限定で新規メンバーごとに $100 クレジットが付与される。

### Codex アプリ

複数エージェントを並列管理する専用アプリ（macOS / Windows 対応のコマンドセンター）を正式に紹介。

### ChatGPT 広告テスト

ChatGPT 上でのスポンサー広告のテスト導入を発表。広告は回答とは視覚的に分離され回答内容には干渉しないとされ、Plus / Pro では非表示が可能。

なお Codex CLI のリリースフィードは `0.143.0-alpha.26` までの開発版採番と、ユーザー向け変更を含まない保守リリース `0.142.3` が進むのみで、正式版の新機能リリースノートは確認できませんでした。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### GPT-5.6 Sol / Terra / Luna

#### 中立

> 米政府がOpenAIに対し、次期モデルGPT-5.6を顧客ごとに審査する限定プレビューで出すよう要請したと報じられた。発表前に政府が公開範囲を絞る形は前例がないという。 — @AITLND [Zenn](https://zenn.dev/qps/articles/335a1abd9258cd)

> GPT-5.6 Sol は、コーディング・科学・サイバーセキュリティという3つの専門領域における能力強化を柱とし、OpenAI 史上最も高度な安全性スタックを備えるとされる。 — @picnic [Qiita](https://qiita.com/picnic/items/26cff9663422145c0226)

X（直近7日間）では、限定プレビューが約20社向けのため個人ユーザーによる実使用の感想・Tipsは確認できませんでした。

### Codex 従量課金 (チーム向け)

該当なし（X・コミュニティ記事ともに、個人の実体験を伴う投稿は確認できませんでした）

### Codex アプリ

#### ポジティブ

> Codexアプリにcliから完全に切り替えた。ナビゲーションや操作性、Computer & Browser use機能が特に便利。 — @jazzyalex [X](https://x.com/jazzyalex/status/2069156422022201497)

#### ネガティブ

> Codexアプリは10〜20の並列セッションで速度・整理面でCLIに劣り、20並列で著しく遅くなる。 — @mumtor99 [X](https://x.com/mumtor99/status/2069125425167814928)

> GUI版は12セッション＋サブエージェントでロックアップしやすく、WindowsではCLIがほぼ唯一の選択肢。 — @cpjet64 [X](https://x.com/cpjet64/status/2068754895763554501)

> 5つ以上のエージェント＋browser-useでアプリがフリーズする。 — @pashynnyk [X](https://x.com/pashynnyk/status/2070217105375670612)

#### Tips

> Codex App v26.415 の3大新機能（Computer Use・Memory・内蔵ブラウザ）と、複数エージェントをバックグラウンドで並列実行する方法を解説。 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/239-codex-mac-computer-use-memory-guide)

### ChatGPT 広告テスト

#### ネガティブ

> ads in chat gpt 🤦🏼 — @oluwatobil6325 [X](https://x.com/oluwatobil6325/status/2070284937932976513)

> 初めてchatGPTに広告入ってきた。 — @TempemLoid [X](https://x.com/TempemLoid/status/2070294393958154580)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
