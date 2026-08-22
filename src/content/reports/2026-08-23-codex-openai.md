---
title: "Codex に Guardian 同期レビューと音声設定"
summary: "Codex 0.150.0-alpha 系で、昇格コマンドを同期的な Guardian レビュー経由で実行する仕組みと Guardian V2 分類のログ出力、browser/computer use 設定、voice-aware configuration、realtime call へのアタッチ、MCP 接続まわりの強化が入った。ChatGPT 側ではプラグイン発見性の改善、時刻を意識した応答、長い会話の分割ロードなどが追加されている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-08-23

features:
  - "プラグイン発見性の改善"
  - "時刻を意識した応答"
  - "長い会話の高速化"
  - "インタラクティブコンテンツの先行表示"
  - "Android サイドバーの最近の会話表示"
  - "Codex の Guardian 同期レビュー"
  - "Codex の Guardian V2 分類"
  - "Codex のブラウザ/コンピュータ利用設定"
  - "Codex の音声対応設定"
  - "Codex のリアルタイム通話への接続"
  - "Codex TUI の権限モード切替キーバインド"
  - "Codex /copy の出力先ピッカー"
  - "Codex の MCP 接続強化"
codex_review: "派手なのは音声や realtime 接続だが、私には Guardian 同期レビューと MCP 接続強化のほうがずっと重要に見える。AIエージェントは機能追加より運用の摩擦低減で一段伸びる局面に入った、という地味だが大きい更新だ。"
codex_importance: 4
---

## 公式アップデート

### プラグイン発見性の改善

Web / モバイルのプラグイン一覧のランキングが変更され、インストール後も継続して使われているプラグインが上位に表示されるようになりました。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### 時刻を意識した応答

会話中のユーザーのローカル時刻を把握し、時間に依存する質問に対して現在時刻を踏まえた回答を返すようになりました。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### 長い会話の高速化

Web 版で会話全体を一括取得せず分割してロードするようになり、長大なチャットの読み込みが軽くなりました。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### インタラクティブコンテンツの先行表示

生成の完了を待たず、作成途中の段階から表示が始まるようになりました。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### Android サイドバーの最近の会話表示

Android 版 1.2026.216 以降で、直近8件の会話がサイドバーに表示されるようになりました。

[ソース](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### Codex の Guardian 同期レビュー

0.150.0-alpha 系で、昇格コマンド (権限を引き上げて実行するコマンド) を同期的な Guardian レビュー経由で実行する仕組みが追加されました。

[ソース](https://github.com/openai/codex/releases)

### Codex の Guardian V2 分類

リスクスコアリングにおいて Guardian レビュー結果を再利用し、V2 分類の結果をログに出力するようになりました。

[ソース](https://github.com/openai/codex/releases)

### Codex のブラウザ/コンピュータ利用設定

browser use・computer use の設定項目が追加され、app-server 経由でそれぞれの要件が公開されるようになりました。

[ソース](https://github.com/openai/codex/releases)

### Codex の音声対応設定

voice-aware configuration と、バージョンスキュー (クライアント/サーバー間のバージョン差) に対応したビルドがサポートされました。

[ソース](https://github.com/openai/codex/releases)

### Codex のリアルタイム通話への接続

すでに開始されている realtime call に対して、後からアタッチできるようになりました。

[ソース](https://github.com/openai/codex/releases)

### Codex TUI の権限モード切替キーバインド

TUI でパーミッションモードを順に切り替えるキーバインドが追加されました。

[ソース](https://github.com/openai/codex/releases)

### Codex /copy の出力先ピッカー

`/copy` コマンドで、コピー対象とするレスポンスを選択できるようになりました。

[ソース](https://github.com/openai/codex/releases)

### Codex の MCP 接続強化

executor からの HTTP MCP サーバー探索、OAuth の issuer バインディング強制、接続状態のランタイム表示が追加されました。

[ソース](https://github.com/openai/codex/releases)

## コミュニティの反応

### プラグイン発見性の改善

#### ポジティブ・ネガティブ・Tips

該当なし

### 時刻を意識した応答

#### ポジティブ

> ChatGPT (iOS) が最近のアップデートで時刻をよく参照するようになり、「今日・昨日・数日前」を正確に識別する。Claude と違って夜遅くに「寝ろ」と言われないのも便利。 — @3mireeee [出典](https://x.com/3mireeee/status/2089249293496381880)

#### ネガティブ

> Codex mac アプリで日時がローカルタイム表示されず、リセットのタイミングを読み違えて banked reset を失った。 — @Gautam_A_k [出典](https://x.com/Gautam_A_k/status/2088960356185960482)

> Codex / GPT が現在時刻やメッセージ間の時間差を完全に無視している。もっと賢く感じられるよう時間感覚を持たせてほしい。 — @dnyanpipasu [出典](https://x.com/dnyanpipasu/status/2089707239665991809)

#### Tips

> LLM に時間感覚を持たせるには、コンテキスト内の各メッセージにタイムスタンプを前置するだけでよい。長期稼働のエージェントで「いつ起こったか」を正しく判断できるようになる。 — @stretchcloud [出典](https://x.com/stretchcloud/status/2089133856821596574)

> Codex チームが `Feature::CurrentTimeReminder` という、定期的にタイムスタンプを注入する機能に取り組んでいる。 — @w0nderfall [出典](https://x.com/w0nderfall/status/2089677799992742005)

### 長い会話の高速化

#### ポジティブ

> 分割ロードによる長大会話の最適化で、741ターン / 231MB のテストで読み込みが27.6秒→1.66秒に短縮された。数か月続くチャットが快適になりそう。 — @TokenGremlin [出典](https://x.com/TokenGremlin/status/2089778377234235449)

#### ネガティブ・Tips

該当なし

### インタラクティブコンテンツの先行表示

#### ポジティブ

> 生成完了を待たずに途中から表示が始まるストリーミングの仕組みは、心理的な待ち時間を大きく縮めて AI の UX を改善する。 — @Rukkssss__ [出典](https://x.com/Rukkssss__/status/2090324196047859920)

#### ネガティブ・Tips

該当なし

### Android サイドバーの最近の会話表示

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex の Guardian 同期レビュー

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex の Guardian V2 分類

#### ネガティブ

> Codex のレビューが guardian-v2 にルーティングされた結果、analytics に表示されなくなった。バージョン変更で可視性が失われている。 — @acsmif [出典](https://x.com/acsmif/status/2090533415040983080)

> codex-auto-review が廃止され guardian-v2 に移行したが、guardian-v2 自体が analytics に出てこない。課金対象なのに確認できないのは問題。 — @acsmif [出典](https://x.com/acsmif/status/2090477764109533376)

#### ポジティブ・Tips

該当なし

### Codex のブラウザ/コンピュータ利用設定

#### ネガティブ

> Codex remote では computer use が制限されており、browser use 自体が使えない。 — @shivek_khurana [出典](https://x.com/shivek_khurana/status/2091256641371128034)

> Codex Desktop の Computer Use で「Any App」設定が実際には機能せず、embedded Codex App Server 側でも要件が正しく適用されない。 — @BenjaminBadejo [出典](https://x.com/BenjaminBadejo/status/2089811666003534049)

#### ポジティブ・Tips

該当なし

### Codex の音声対応設定

#### ポジティブ

> 音声指示で Codex.app の CLI を使ってみたら開発が楽しすぎる。 — @tstudio [出典](https://x.com/tstudio/status/2091202658472546373)

> Codex の新しい高速 voice mode は本当に素晴らしい (ただし不満点もある)。 — @twojewoda [出典](https://x.com/twojewoda/status/2089003254420058343)

#### ネガティブ

> Codex CLI に voice-to-text が欠けているのは奇妙なギャップ。 — @catmanyau [出典](https://x.com/catmanyau/status/2090639014529212793)

> Codex CLI は voice to text がなく、別製品のバックエンド向けのように感じる。 — @Ozdotdotdot [出典](https://x.com/Ozdotdotdot/status/2090607901974945808)

> voice mode の挙動が不揃い。プロジェクト外で開始される、モデル選択が分からない、スマホ非対応など。 — @twojewoda [出典](https://x.com/twojewoda/status/2089003254420058343)

#### Tips

該当なし

### Codex のリアルタイム通話への接続

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex TUI の権限モード切替キーバインド

#### ポジティブ・ネガティブ・Tips

該当なし

なお権限承認まわりの実務 Tips として、`~/.codex/rules/default.rules` にコマンドの prefix を登録して承認ループを抜ける方法を紹介した記事 [【Codex】同じ権限承認を毎回求められて作業が止まる時の対処法 (Zenn)](https://zenn.dev/idealive_kmon/articles/codex-approval-loop-prefix-rules) が公開されています。

### Codex /copy の出力先ピッカー

#### ポジティブ・ネガティブ・Tips

該当なし

### Codex の MCP 接続強化

#### ポジティブ・ネガティブ・Tips

該当なし（MCP 一般への言及は多いものの、今回の強化内容に紐づく個人ユーザーの投稿は確認できていません）

## ソース

- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [【Codex】同じ権限承認を毎回求められて作業が止まる時の対処法 (Zenn)](https://zenn.dev/idealive_kmon/articles/codex-approval-loop-prefix-rules)
- [Codexハーネスを試してみた : Codexを外部アプリのエージェント実行基盤にする (Zenn)](https://zenn.dev/mm_ai/articles/codex-agent-harness-platform)
- [Codexのマルチエージェント機能、config.toml設定は既に不要だった (Qiita)](https://qiita.com/kai_kou/items/e031c7e02c858468d733)
