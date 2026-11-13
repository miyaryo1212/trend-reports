---
title: "Codex CLI 0.169.0とChatGPT Wallet"
summary: "Codex CLI 0.169.0が公開され、サイドチャットの複数タブ化、TUIからのカスタムプロバイダ追加、codex execの--trustオプションなどが入った。エージェントがユーザーの承認を得て購入を完了するChatGPT Walletも発表された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-14

features:
  - "Codex CLI 0.169.0"
  - "ChatGPT Wallet"
  - "Codex CLI codex exec/review の --trust オプション"
  - "Codex CLI 0.171.0-alpha.2〜alpha.4"
codex_review: "CLIのタブ化やプロバイダ設定は日々の摩擦を減らす堅実な改善だが、業界全体を動かす規模ではない。むしろ承認付き決済は、エージェントを「答える道具」から経済行為の担い手へ近づける点で興味深い。ただ一次情報がなく、実装の実態は慎重に見たい。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.169.0

安定版 0.169.0 が 2026-11-13 08:39 (UTC) に公開された。差分の範囲は `rust-v0.168.0...rust-v0.169.0`。

**新機能**

- オプトインのターミナルワークスペースで、サイドチャットを複数タブで開けるようになった。タブはキーボードでもマウスでも切り替えられ、保存したローカルのサイドチャットは Codex を再起動した後も開き直せる（[#59784](https://github.com/openai/codex/pull/59784)、[#60152](https://github.com/openai/codex/pull/60152)、[#60181](https://github.com/openai/codex/pull/60181)）
- エージェントコマンドセンターで、過去のタスクを名前、プロンプトのプレビュー、作業ディレクトリから検索できるようになった（[#60286](https://github.com/openai/codex/pull/60286)）
- フルスクリーンのトランスクリプトに **Collapse turn details** が加わった。オンにすると、完了したアクティビティを各プロンプトの下に折りたたむ。回答は表示されたままで、ツールの出力も検索できる（[#60554](https://github.com/openai/codex/pull/60554) ほか）
- ターミナルからカスタムモデルプロバイダを追加・編集できるようになった。カスタムゲートウェイのオンボーディングを有効にすると、サインイン中にプロバイダを作成できる。対応するゲートウェイでは、SSH 経由やローカルブラウザがない環境でもデバイスコードで認証できる（[#59779](https://github.com/openai/codex/pull/59779)、[#60009](https://github.com/openai/codex/pull/60009)、[#60186](https://github.com/openai/codex/pull/60186)、[#60486](https://github.com/openai/codex/pull/60486)、[#60662](https://github.com/openai/codex/pull/60662)）
- ターミナルのレポートエディタで `Ctrl+S` を押すと、診断用の ZIP をローカルに保存できる。アップロードを無効にしていても使える（[#60542](https://github.com/openai/codex/pull/60542)）
- macOS と Linux でオプトインの Cloud 接続を使う場合、ターミナルから画像の送信、モデルと推論の強さの選択、Cloud の会話のアーカイブと復元ができるようになった（[#59828](https://github.com/openai/codex/pull/59828)、[#60061](https://github.com/openai/codex/pull/60061)、[#60635](https://github.com/openai/codex/pull/60635)、[#60651](https://github.com/openai/codex/pull/60651)）

**バグ修正**

- `codex exec` / `codex review` の信頼設定の変更（下の「--trust オプション」の節を参照）
- **Yes, clear context and implement** を選ぶと、承認したプランの全文が新しいセッションに渡るようになった。引き継ぎに失敗した場合は、今のセッションが開いたまま残る（[#60763](https://github.com/openai/codex/pull/60763)）
- Windows のサンドボックスで、引用符付きの `cmd.exe` のパスと、作業ディレクトリの親が読み取れない PowerShell セッションの扱いを修正した（[#60624](https://github.com/openai/codex/pull/60624)、[#60647](https://github.com/openai/codex/pull/60647)）
- macOS で貼り付けた画像が本来の向きを保つようになった。クリップボードにネイティブの PNG や JPEG のデータがあれば、それを使う（[#60455](https://github.com/openai/codex/pull/60455)）
- 共有の app server が報告しなかった MCP サーバーを待ち続けて、ターミナルがビジー状態のままになる問題を修正した（[#60280](https://github.com/openai/codex/pull/60280)、[#60622](https://github.com/openai/codex/pull/60622)）
- 中断したターンが正しく閉じるようになった。遅れて届いた中断やファイル承認のキャンセルが、後のターンを中断することもなくなった（[#59910](https://github.com/openai/codex/pull/59910)、[#60700](https://github.com/openai/codex/pull/60700)）

**ドキュメント**

- `openai-docs` スキルを更新した。Codex と ChatGPT Work に関する質問と、初回の API セットアップに重点を置き、チーム全体で Codex を設定するための案内を加えた（[#59944](https://github.com/openai/codex/pull/59944)、[#59949](https://github.com/openai/codex/pull/59949)）
- app-server のクライアントが、既定のプロバイダを変えずに、設定済みプロバイダのモデル一覧の取得やゲートウェイの認可を行う方法を文書化した（[#59776](https://github.com/openai/codex/pull/59776)、[#59819](https://github.com/openai/codex/pull/59819)）

**その他**

- 同梱の SQLite を 3.54 に更新した。WAL（write-ahead log）の修正を取り込むため（[#60432](https://github.com/openai/codex/pull/60432)）
- プラグインマーケットプレイスの更新で、ディスク上にある Git オブジェクトを再利用できるようになった。同じデータを何度もダウンロードせずに済む（[#60528](https://github.com/openai/codex/pull/60528)）

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.169.0)

### ChatGPT Wallet

OpenAI は、ChatGPT Work、Codex、dots で動くエージェントが購入を完了できる決済機能「ChatGPT Wallet」を発表した。購入が実行されるのはユーザーが承認したときだけで、既存のカードの保護機能もそのまま適用される。

※ 今回集めた公式フィードには発表元の一次情報が含まれていない。上の内容は、Qiita の解説記事にある記述をもとにしている。

[ソース](https://qiita.com/picnic/items/1d2524574e7e141d52d5)

### Codex CLI codex exec/review の --trust オプション

0.169.0 から、信頼していないディレクトリで `codex exec` を実行すると、`--sandbox workspace-write` を指定してもプロジェクトの設定と MCP サーバーは無効のままになる。プロジェクトを信頼済みとして明示的に保存するには、`codex exec` または `codex review` に `--trust` を付ける（[#60041](https://github.com/openai/codex/pull/60041)）。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.169.0)

### Codex CLI 0.171.0-alpha.2〜alpha.4

0.171.0 系のアルファ版が 3 版公開された。どの版もリリースノートは「Release 0.171.0-alpha.N」の一文だけで、変更内容は書かれていない。

| バージョン | 公開日時 (UTC) | 公開者 |
|---|---|---|
| 0.171.0-alpha.2 | 2026-11-13 08:04 | github-actions[bot] |
| 0.171.0-alpha.3 | 2026-11-13 04:36 | imac-oai |
| 0.171.0-alpha.4 | 2026-11-13 19:02 | github-actions[bot] |

※ 日時はフィードの更新日時（updated）。alpha.3 の日時は alpha.2 より前になっている。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.4)

## コミュニティの反応

### Codex CLI 0.169.0

X を検索したが、0.169.0 を実際に使った感想は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> Codex CLI でサードパーティのモデルを使うときの手順を、層ごとに確認する方法をまとめた記事。設定ファイルを保存しただけでは接続を確認したことにならないと指摘し、モデル一覧の取得、API が返す本文、Profile の読み込み、ツール呼び出しの順に確かめると、どの層で問題が起きたかを切り分けやすいと解説している。0.169.0 で入った TUI からのプロバイダ編集そのものを扱った記事ではないが、カスタムプロバイダを設定するときの確認手順として参考になる（中立・実務寄り）。 — whitemarshall「[Codex CLIでサードパーティモデルを使う：API確認からProfile起動まで](https://qiita.com/whitemarshall/items/67a6808d2562f256d8b7)」

### ChatGPT Wallet

X を検索したが、該当する投稿は見つからなかった。Qiita には発表内容を紹介する記事が出ている。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

> ChatGPT Work、Codex、dots のエージェントが、承認制で購入まで完了できる決済機能として紹介している。発表内容をそのまま伝えるトーンで、評価は加えていない（中立）。 — picnic「[ChatGPT Wallet発表: エージェントが承認制で購入を完了する決済機能](https://qiita.com/picnic/items/1d2524574e7e141d52d5)」

### Codex CLI codex exec/review の --trust オプション

X を検索したところ 6 件の投稿が見つかったが、`--trust` オプション、信頼ディレクトリの設定、MCP の無効化を実際に使った体験談や感想は含まれていなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.171.0-alpha.2〜alpha.4

X を検索したが、該当する投稿は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.169.0](https://github.com/openai/codex/releases/tag/rust-v0.169.0)
- [rust-v0.171.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.2)
- [rust-v0.171.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.3)
- [rust-v0.171.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.4)
- [PR #60041](https://github.com/openai/codex/pull/60041)
- [ChatGPT Wallet発表: エージェントが承認制で購入を完了する決済機能 (Qiita)](https://qiita.com/picnic/items/1d2524574e7e141d52d5)
- [Codex CLIでサードパーティモデルを使う：API確認からProfile起動まで (Qiita)](https://qiita.com/whitemarshall/items/67a6808d2562f256d8b7)
