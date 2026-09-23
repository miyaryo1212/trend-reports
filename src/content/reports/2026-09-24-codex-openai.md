---
title: "Codex 0.156.1がSol/Luna対応、alpha三系統が並走"
summary: "Codex CLI 0.156.1 がホットフィックスとしてモデルピッカーに GPT-6 Sol / Luna を追加し、レート制限時の切替先に Luna を推奨するようになった。同時に 0.158 系アルファが 1 日で 5 本、0.157 系と旧 0.155 系にも 9/23 付でアルファが出るなど、三系統が並走している。OpenAI 側では Airbnb の GPT-6 Astra 利用拡大と ChatGPT フラッシュカードの提供開始が伝えられた。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-09-24

features:
  - "Codex CLI 0.156.1"
  - "Codex CLI 0.158.0-alpha.1〜alpha.5"
  - "Codex CLI 0.157.0-alpha.11"
  - "Codex CLI 0.155.0-alpha.16.3 / 16.4"
  - "Airbnb への GPT-6 Astra 展開拡大"
  - "ChatGPT フラッシュカード"
---

## 公式アップデート

### Codex CLI 0.156.1

0.156.0 に対するホットフィックス。モデルピッカーから GPT-6 Sol と GPT-6 Luna を選択できるようになり、レート制限に達した際の切替プロンプトが GPT-6 Luna を推奨するようになった。変更は #47405 の 1 件のみで、0.156.0 のモデルカタログ追加 (#47332) の修正にあたる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.156.1)

### Codex CLI 0.158.0-alpha.1〜alpha.5

9/23 の 1 日で 0.158 系のアルファが alpha.1 から alpha.5 まで 5 本公開された。リリースノートはいずれも「Release 0.158.0-alpha.N」という自動生成の表記のみで、変更内容は公開されていない。alpha.1 と alpha.5 は個人アカウント (imac-oai)、alpha.2〜alpha.4 は github-actions[bot] による公開。

[ソース](https://github.com/openai/codex/releases)

### Codex CLI 0.157.0-alpha.11

前回時点で alpha.10 まで公開されていた 0.157 系に、9/23 付で alpha.11 が追加された。以降の新規アルファは 0.158 系に移っており、0.157 系はこの alpha.11 が最後となっている。リリースノートは自動生成表記のみ。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.11)

### Codex CLI 0.155.0-alpha.16.3 / 16.4

0.158 系と並行して、旧 0.155 系ブランチにも 9/23 付で alpha.16.3 と alpha.16.4 が公開された。0.156 系が安定版に到達した後も 0.155 系の保守ブランチが継続していることになる。こちらもリリースノートは自動生成表記のみ。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.16.4)

### Airbnb への GPT-6 Astra 展開拡大

Airbnb が OpenAI API と Amazon Bedrock 経由で、GPT-6 Astra を含むフロンティアモデルへのアクセスを社内で拡大した。既存の Codex 活用とあわせ、機能出荷が前年比で約 80% 増加したと報告されている。

[ソース](https://openai.com/news/)

### ChatGPT フラッシュカード

任意のトピックやアップロードしたノートから、対話型のフラッシュカードを生成して復習できる機能が提供開始された。全プランのモバイル / Web が対象。

[ソース](https://openai.com/news/)

## コミュニティの反応

### Codex CLI 0.156.1

#### ポジティブ

> Codex で GPT-6 Sol を Pro 20x プランで 1 日中使ったが使用量は 10% しか減らず、速度さえ許容できれば十分実用的 — @moritouch_ [出典](https://x.com/moritouch_/status/2102868797766152392)

#### ネガティブ

> GPT-6 Luna Max を軽い Web 開発で使ってみたが非常に遅くて使えず、Codex 全体としてひどい体験だった — @sir_franco_ [出典](https://x.com/sir_franco_/status/2102873340327178367)

#### Tips

該当なし。

モデルピッカーでの Sol / Luna の選び分けについては、日本語圏でも公式発表を読み解く記事が出ている。

- [GPT-6 Lunaなら単価はSolの20分の1。あなたの仕事がLunaで足りるかを公式発表から読み解いた (Zenn)](https://zenn.dev/eques_blog/articles/83f56af3eee81c)
- [GPT-6 Sol と Luna で何が変わったの？公式ドキュメントを読んでまとめたよ（Astra との使い分けも） (Zenn)](https://zenn.dev/norinori_t/articles/a352b7be46d7dd)

### Codex CLI 0.158.0-alpha.1〜alpha.5

該当なし。直近 7 日間の検索では、0.158 系アルファに言及した個人ユーザーの投稿は確認できなかった。

### Codex CLI 0.157.0-alpha.11

該当なし。0.157 系アルファ全般への言及はあるが、alpha.11 を特定した使用体験の投稿は確認できなかった。

### Codex CLI 0.155.0-alpha.16.3 / 16.4

#### ポジティブ

> アルファ更新後、Codex CLI で入力バーを失わずに上へスクロールできるようになった — @MattHProgrammer [出典](https://x.com/MattHProgrammer/status/2102412817840431336)

> 0.155.0-alpha.16 では、新しく起動するヘルパーエージェントが最新のモデル / reasoning 設定を引き継ぎ、画像ファイルもコンテキストとして見落とさなくなった — @My_Ai_Bi [出典](https://x.com/My_Ai_Bi/status/2100651444877840621)

#### ネガティブ

> macOS の Codex デスクトップで 0.155.0-alpha.9.2 に 2 件の不具合。未認識の config 警告と、マルチユーザー環境の権限問題でアプリのツールが使えない — @TomGiant1 [出典](https://x.com/TomGiant1/status/2102285890684932164)

> 0.155 系で実験的に入ったライブ文字起こし付きの `/voice` は、0.156 系アルファで不安定さを理由に静かに差し戻された — @mahdi [出典](https://x.com/mahdi/status/2101358170148905043)

#### Tips

> `npm install -g @openai/codex@alpha` で最新アルファを入れ、Codex を再起動して `/experimental` から `/voice` を有効化するとライブ文字起こしが使える — @DegenOfWallSt [出典](https://x.com/DegenOfWallSt/status/2101061801987502514)

### Airbnb への GPT-6 Astra 展開拡大

#### ポジティブ

> 友人が Airbnb アパートの清掃員スケジュール管理用クロスプラットフォームアプリ (React Native) を、ChatGPT Codex 導入からわずか 2 週間で完成させた。iOS 配布の証明書周りも含めて個人で完遂できた — @_architected [出典](https://x.com/_architected/status/2102544562086690905)

#### ネガティブ

該当なし。

#### Tips

該当なし。

### ChatGPT フラッシュカード

#### ポジティブ

> ChatGPT の新機能フラッシュカードをパートナー関連のクイズ作成に使ったら、遊びながら使えてとても楽しかった — @hikawoai [出典](https://x.com/hikawoai/status/2102730674948202780)

> 「今日覚えたい表現 10 個でフラッシュカードを作って」と頼むだけで想起練習ができ、英語学習と相性が良い — @E_TUTOR_jp [出典](https://x.com/E_TUTOR_jp/status/2102797216314458356)

#### ネガティブ

該当なし。

#### Tips

該当なし。

## ソース

- [Codex CLI Releases (GitHub)](https://github.com/openai/codex/releases)
- [rust-v0.156.1 リリースノート](https://github.com/openai/codex/releases/tag/rust-v0.156.1)
- [OpenAI News](https://openai.com/news/)
- [Zenn: OpenAI タグ](https://zenn.dev/topics/openai)
- [Qiita: OpenAI タグ](https://qiita.com/tags/openai)
