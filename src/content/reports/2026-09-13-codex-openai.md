---
title: "GPT-Live-1 API公開と自動研究者への進捗開示"
summary: "全二重音声モデル GPT-Live-1 が $0.05/分でAPI提供開始。金融機関向け ChatGPT for Financial Services、Desktop 向けエンタープライズプラグインも追加された。あわせて OpenAI は「2026年9月までに自動研究インターン」目標の達成と RSI 進捗を初めて詳細開示している。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-13

features:
  - "GPT-Live-1 API提供開始"
  - "ChatGPT for Financial Services"
  - "ChatGPT Desktop エンタープライズプラグイン"
  - "Research acceleration: The view inside OpenAI"
  - "An Alien Mind"
  - "Habitat (オンラインストレージ基盤) の技術公開"
codex_review: "GPT-Live-1の実用化は順当だが、自動研究インターン達成の開示の方が本丸に見える。金融・ストレージ発表も含め、基盤化の速度が少し不気味なほど速い。"
codex_importance: 4
---

## 公式アップデート

### GPT-Live-1 API提供開始

全二重 (full-duplex) 音声モデル GPT-Live-1 が API で公開された。価格は $0.05/分。割り込み処理、電話 (テレフォニー) 対応、新音声が追加されている。推論そのものは Astra 等のバックエンドモデルに委譲する構成。

[ソース](https://openai.com/news/)

### ChatGPT for Financial Services

Morgan Stanley・Evercore と設計した金融機関向けの ChatGPT Work。Daloopa、PitchBook、LSEG News といったプレミアムデータを内蔵し、出典追跡 (granular citations) に対応する。

[ソース](https://openai.com/news/)

### ChatGPT Desktop エンタープライズプラグイン

ChatGPT Desktop に Oracle Analytics、Power BI、Navan、Avalara のプラグインが追加された。あわせて、アクセス先のサイト・アプリを制限する新しい管理者コントロールが Astra 向けに提供される。

[ソース](https://openai.com/news/)

### Research acceleration: The view inside OpenAI

昨秋に公表していた「2026年9月までに自動研究インターン (automated research intern)」という目標を達成したと報告。2028年3月の「自動AI研究者」に向けた RSI (再帰的自己改善) の進捗を、初めて詳細に開示した文書。

[ソース](https://openai.com/news/)

### An Alien Mind

機械知能の急拡大と RSI に対して警鐘を鳴らす OpenAI の論考。スケーリングは今後も継続するとしたうえで、「極度の慎重さ」が必要だと主張している。

[ソース](https://openai.com/news/)

### Habitat (オンラインストレージ基盤) の技術公開

週間10億ユーザー、毎秒7,000万リクエスト、500PB 超を支える自社オンラインストレージ基盤「Habitat」のスケーリング手法を解説する技術連載の第1回。

[ソース](https://openai.com/news/)

なお Codex CLI の GitHub Releases には 0.155.0 系のアルファビルドが並ぶのみで、本日時点で新規の安定版リリースはない。

## コミュニティの反応

### GPT-Live-1 API提供開始

本日の X 検索で唯一まとまった実使用報告が集まったトピック。低遅延と多言語対応を評価する声が中心で、ネガティブな報告は確認できなかった。

#### ポジティブ

> OpenAI の新 Realtime voice API で自宅の全エージェントと音声ブリッジを構築中。遅延が非常に低く「Jarvising」体験が実現しつつある — @bilbeny [出典](https://x.com/bilbeny/status/2098762852723241469)

> GPT-Live-1 を不動産検索デモに統合。声だけで物件検索・地図表示・通勤時間計算・ショートリスト追加まで自然に操作でき、会話がスムーズ — @pixelhopio [出典](https://x.com/pixelhopio/status/2098704362738446707)

> #スタックチャン で GPT-Live-1 を使って成功 — @machidento [出典](https://x.com/machidento/status/2098642000971284658)

#### ネガティブ

該当なし。

#### Tips

> GPT-Live-1 ＋ 表情アバターで英語学習チューターを作成。声で話しかけると複数言語に対応し、旅先会話から始められる — @so_ainsight [出典](https://x.com/so_ainsight/status/2098554687394095217)

> Meta AI グラス上で GPT-Live-1 を使い、絵画鑑賞中に AI と対話しながら鑑賞ヒントを得るアプリを自作 — @AR_Ojisan [出典](https://x.com/AR_Ojisan/status/2098349488654164208)

### ChatGPT for Financial Services

該当なし。9月10-11日頃の正式リリース直後であり、かつ金融機関向けエンタープライズ限定のため、個人ユーザーによる実使用報告は確認できなかった。発表そのものを共有する投稿は多いが、公式・企業・ニュース系が中心。

### ChatGPT Desktop エンタープライズプラグイン

該当なし。Oracle Analytics / Power BI / Navan / Avalara プラグインおよび Astra 向け管理者コントロールについて、個人ユーザーの実体験・感想投稿は0件だった。

### Research acceleration: The view inside OpenAI

この文書そのものへの実使用ベースの反応ではないが、Codex を実際の開発ワークフローに組み込んだ報告が同期間に複数集まっている。以下は「研究・開発の自動化がどこまで実務で成立しているか」という観点で参考になるもの。

#### ポジティブ

> Codex エージェント群を1ワークフローで10以上並走させ、反復コーディングの約80%を自動化。マネージャー＋専門エージェントで研究・フロントエンド・テストまで任せ、最終判断だけ人間がする形が生産性を大きく上げた — @de1lymoon [出典](https://x.com/de1lymoon/status/2097306578554626137)

> メール分析や日常タスクで Codex 風ツールを試用したところ、驚くほど高速で実用的。オンボーディングの曖昧さはあったが、使いこなせば即戦力になると実感 — @TylerCLaprade [出典](https://x.com/TylerCLaprade/status/2097770909381587307)

> ChatGPT ＋ Codex で株の自動分析システムをほぼノーコードで構築。株価取得→RSI/MACD 判定→保存まで完全無人テストに成功した — @joumon1114 [出典](https://x.com/joumon1114/status/2098289799534919782)

#### ネガティブ

> Codex API を多用した結果、runaway prompt で700ドル超の請求が発生。トークン最小化を指示しても無関係な長文を連発する挙動に不満 — @Ratio_Disputati [出典](https://x.com/Ratio_Disputati/status/2098426250809528427)

### An Alien Mind

該当なし。論考の要約・引用・議論は多数あるが、いずれも一般論またはメディア・企業寄りの投稿で、実使用体験を伴う個人投稿は確認できなかった。

### Habitat (オンラインストレージ基盤) の技術公開

X 上では規模への驚嘆やニュース共有が中心で、個人による利用体験談は該当なし。一方、日本語コミュニティでは技術内容を読み解く記事が1本出ている。

#### 解説

- [OpenAI は10億人規模のストレージをどう支えたか？「Habitat」に学ぶ Python・分散システム設計](https://qiita.com/zhao-xy/items/eee565a1381bde4df7ed) (@zhao-xy)
  - 派手な新技術よりも、asyncio、1分ごとの設定更新、LIFO 接続プールといった身近な仕組みが高負荷時に遅延を増幅していた点に着目した記事。毎秒7,000万件超のリクエストと500PB 超という公表値を出発点に、分散システム設計上の示唆を整理している。

## ソース

- [OpenAI News](https://openai.com/news/)
- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
