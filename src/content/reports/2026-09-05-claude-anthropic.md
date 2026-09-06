---
title: "Claude Code v2.1.260/261 権限修正"
summary: "Claude Code が2バージョン連続でリリース。v2.1.260 は read-only 指定が効かない権限ルールの不具合と zsh 経由の権限バイパスを修正し、/diff パネルを追加。v2.1.261 は未使用スキルを可視化する /skill-doctor と、インライン出力上限を128K文字まで引き上げる設定を追加しました。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-05

features:
  - "Claude Code v2.1.260 /diff パネル"
  - "Claude Code v2.1.260 権限ルールの重大修正 (括弧を含むパス)"
  - "Claude Code v2.1.260 zsh権限バイパス修正"
  - "Claude Code v2.1.260 Fable 5.1 プロンプトキャッシュ修正"
  - "Claude Code v2.1.261 /skill-doctor"
  - "Claude Code v2.1.261 bashOutputMaxChars / taskOutputMaxChars"
  - "Claude Code v2.1.261 Remote Control 修正群"
codex_review: "派手な新機能より、権限バイパスとキャッシュ課金の修正が本体だと感じます。エージェント開発ツールが成熟期に入った象徴的な更新です。"
codex_importance: 3
pipeline_warnings:
  - "このレポートは 2026-09-04〜09-06 に発生した claude -p の OAuth 失効による自動生成停止を、2026-09-06 に後追いで補完したものです。当日の sitemap 差分キャッシュは障害期間中に消費済みのため、公式 news インデックス/RSS を代替ソースとして再構成しています。"
---

## 公式アップデート

### Claude Code v2.1.260

権限まわりの修正を中心としたリリースです。

- **`/diff` パネルの追加**: フルスクリーンモードで会話の横に開き、Claude が編集する様子に合わせて未コミットの変更を表示します。`/diff` でトグルします
- **権限ルールの重大修正**: パスに括弧を含む `Edit`/`Write`/`Read` の権限ルールが「無効」として破棄されたり Bash サンドボックスから無視されたりし、read-only 指定のフォルダが書き込み可能なままになっていた問題を修正しました
- **権限ルールのパターン不正時の挙動を修正**: コンパイル不能なパターン (閉じられていない `[` など) を含むファイル権限ルールが1つあると、すべてのファイル編集が `Invalid regular expression` で失敗していた問題。該当する deny ルールは記述されたリテラルパスを保護する挙動になりました
- **zsh の権限バイパスを修正**: `REPORTTIME` / `REPORTMEMORY` / `DIRSTACKSIZE` への代入にコマンド置換を隠した zsh コマンドが、Bash 権限チェックで自動承認されていた問題。これらは承認プロンプトを出すようになりました
- **Fable 5.1 のプロンプトキャッシュ修正**: ツール結果より後ろに付与されるコンテキストがキャッシュ対象外となり、ツール呼び出しのたびに非キャッシュ入力として再送されていた問題を修正しました
- **`/cost` にキャッシュミスの推定原因を追加**: ツール定義やシステムプロンプトの変更、TTL を超えたアイドルなど、プロンプトキャッシュが外れた理由をステータスラインの `prompt_cache` フィールドとともに表示します

このほか、`model: fable` のエージェントが `ANTHROPIC_DEFAULT_FABLE_MODEL` の `[1m]` タグを無視して 200K コンテキストで動いていた問題、`/model` ピッカーに Fable 5.1 が表示されない問題、Bedrock のモデル探索・トークンカウント・AWS SSO/STS 呼び出しが企業ルート CA を OS 証明書ストアにのみ持つ環境で失敗する問題などが修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.260)

### Claude Code v2.1.261

コンテキストと出力量のコントロール、および Remote Control 系の修正が中心です。

- **`/skill-doctor` の追加**: 読み込まれているスキルのうち使われていないものと、それぞれがコンテキストをどれだけ消費しているかを表示し、整理を支援します
- **`bashOutputMaxChars` / `taskOutputMaxChars` の追加**: コマンド出力とバックグラウンドタスク出力を、ファイルに退避される前に Claude がインラインで受け取れる上限を、最大128K文字まで引き上げられます
- **`--append-subagent-system-prompt-file` の追加**: コマンドラインで渡すには大きすぎるサブエージェント用システムプロンプトをファイルから読み込めます
- **Remote Control の修正群**: 電話・ブラウザ・claude.ai アプリがターミナルセッションに接続した際やターミナル側でモードを変更した際に権限モードの表示が古いままになる問題、接続先から turn を停止した後やローカルの `/clear` などの後にセッションが実行中表示 (スピナーと Stop ボタンが固着) のままになる問題、ネイティブ Windows の TLS 検査プロキシ配下で受信イベントストリームが失敗する問題などを修正しました
- **`/status` と `claude doctor` に「Organization policy」行を追加**: プロキシがエンドポイントを通していないなど、組織ポリシーを読み込めなかった理由を表示します

このほか、高速入力時に文字が入れ替わる/欠落する問題、セッション再開時に並列ツール呼び出し周辺の hook 出力やコンテキストが失われる問題、バックグラウンドエージェントを再開できない際のリトライがタイトループになり CPU を占有し続ける問題などが修正されています。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.261)

## コミュニティの反応

### Claude Code v2.1.260 /diff パネル

#### ポジティブ

> フルスクリーンでは turn の合間に git status へ切り替えていたが、2.1.260 の `/diff` でエージェントが喋り続けている横に未コミットの編集が開くようになった — @does_it_code [X](https://x.com/does_it_code/status/2095705760147918998)

> `/diff` パネルは会話の横で編集に合わせて更新される。些細に見えるが、後で見に行くのを覚えておくより「散らかっていく様子が見える」方がずっと楽 — @Liam2307 [X](https://x.com/Liam2307/status/2095756920216854533)

#### ネガティブ / Tips

該当なし

### Claude Code v2.1.260 権限ルールの重大修正 (括弧を含むパス)

該当なし (直近7日間で、この修正に触れた個人ユーザーの実体験投稿は確認できませんでした。言及の大半はメディア/ニュース系アカウントによるリリース告知でした)

### Claude Code v2.1.260 zsh権限バイパス修正

該当なし (直近7日間で、この修正に関する個人ユーザーの実体験・感想投稿は確認できませんでした。v2.1.260 への言及自体は複数ありましたが、公式リリースノートの引用や一般論が中心でした)

### Claude Code v2.1.260 Fable 5.1 プロンプトキャッシュ修正

#### ポジティブ

> v2.1.260 で `/effort` 変更時もキャッシュが保持されるようになり、Fable 5.1 の長時間セッションが快適になった — @does_it_code [X](https://x.com/does_it_code/status/2095854985175347551)

> effort 変更でキャッシュが保持されるよう修正されたのを確認。Fable 5.1 で快適に使えている — @DX5L4RRR [X](https://x.com/DX5L4RRR/status/2096079009742557618)

#### ネガティブ

> Claude Code アプリのキャッシュ TTL がバックグラウンドで短くなり、想定より早く切れる — @RyuGPT [X](https://x.com/RyuGPT/status/2096254551804219444)

> 2.1.259 以前はキャッシュが全く効いておらず、Fable 5.1 リリース直後から毎ターン非キャッシュで課金される状態だった。使用制限が厳しく感じられた — @lllblMA [X](https://x.com/lllblMA/status/2095404805636157576)

#### Tips

> キャッシュ割引の適用週に v2.1.259→260 で複数のキャッシュ修正が入っている。請求が下がらない場合は `/cost` の `prompt_cache` 欄を確認するとよい — @cygnirez [X](https://x.com/cygnirez/status/2096114005190574178)

### Claude Code v2.1.261 /skill-doctor

#### ポジティブ

> `/skill-doctor` で未使用スキルとコンテキスト消費が可視化され、入れたスキルが本当に使われているか判断しやすくなった — @jindo [X](https://x.com/jindo/status/2096461509908214051)

> `/skill-doctor` で6個の未使用スキルを特定して削除した。毎週メンテナンスする習慣がついた — @arb5z [X](https://x.com/arb5z/status/2096390093053591947)

> 未使用スキルが黙ってトークンを食っているのが一目でわかる。確認する価値があった — @ai_hack_dx [X](https://x.com/ai_hack_dx/status/2096397760094175527)

#### ネガティブ

該当なし

#### Tips

> バージョンを確認したうえで、通常タスクを実行した後に `/skill-doctor` を回すとよい。未使用スキルの削除は慎重に (低頻度でも重要なものは残す) — @River_Twain [X](https://x.com/River_Twain/status/2096494430622544298)

> `/skill-doctor` を週次で定期実行し、未使用スキルや高コストスキルをメンテナンスするのがおすすめ — @cu30rry_ [X](https://x.com/cu30rry_/status/2096407282657431920)

### Claude Code v2.1.261 bashOutputMaxChars / taskOutputMaxChars

#### ポジティブ

> `bashOutputMaxChars` / `taskOutputMaxChars` を128K文字まで引き上げると、エージェントがテスト出力をファイルに落としてから読み直すロスを防げて便利 — @4Ndr3w10000 [X](https://x.com/4Ndr3w10000/status/2096493099723952215)

#### ネガティブ

> 128K文字までインラインで読めるのは便利だが、大量のログは結局128K文字のログのまま。エージェントに本当に必要な分だけ見せているか確認してから上げるべき — @Liam2307 [X](https://x.com/Liam2307/status/2096194023564210624)

#### Tips

該当なし

### Claude Code v2.1.261 Remote Control 修正群

該当なし (直近7日間で、権限モードの表示ずれ・停止後のスピナー固着・TLS 検査プロキシ配下の接続断といった個別の修正に触れた個人ユーザーの投稿は確認できませんでした)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
