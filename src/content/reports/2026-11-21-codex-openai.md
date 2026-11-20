---
title: "Codex CLI 0.171.0、GPT-6.2 Solが既定に"
summary: "Codex CLI 0.171.0が安定版として公開された。GPT-6.2 Sol / Astraをモデルカタログに追加してSolを既定にしたほか、TUIワークスペースの既定有効化とリモート実行機能も入った。創薬化学ベンチマークMedChemBenchも公開された。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-11-21

features:
  - "Codex CLI 0.171.0"
  - "Codex CLI リモート実行・リモート操作 (0.171.0)"
  - "MedChemBench"
  - "Codex CLI 0.173.0-alpha.1〜alpha.3"
codex_review: "モデル追加より、ワークスペースやリモート実行でCodexが単発のCLIから継続的な作業環境へ寄っている点が面白い。実務には効きそうだが、利用者の反応も機能の定着度もまだ薄く、業界全体を動かす材料としては控えめだ。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.171.0

安定版 0.171.0 が 2026-11-20 00:47 (UTC) に公開された。主な変更は次のとおり。

**新機能**

- GPT-6.2 Sol と GPT-6.2 Astra をモデルカタログに追加した。カタログの既定は Sol。(#62106)
- TUI ワークスペースを既定で有効にした。メインの会話と並べて、検索できる文書プレビュー、画像プレビュー、サブエージェントのやり取りを表示できる。(#61352 ほか)
- Vim モード以外の入力欄に undo / redo を追加した。ショートカットは設定で変えられ、添付ファイルや長い貼り付けも元に戻る。(#61954)
- `/statusline` で、MCP を使った独自のステータスラインを選んだり作ったりできるようにした。`tui_extensions_statusline` を有効にしたときだけ使える。(#61979 ほか)

**バグ修正**

- セッションを切り替えたり再開したりしても、下書き・キューに入れた追加指示・中断した入力が元のスレッドに残るようにした。(#61216)
- 作業ディレクトリを変えても権限プロファイルが保たれるようにした。(#61195)
- 遅れて届いた完了イベントが、新しいターンの承認を取り消してしまう問題を修正した。(#61801)
- 実行中のターンに指示を追加したとき、それまでの編集が差分の集計から消えないようにした。(#61820)
- スクロールで余計な文字が入る問題、入力欄のカーソルが飛ぶ問題、古い端末サイズで再描画する問題を修正した。(#62139 ほか)
- リフレッシュトークンを出さない ID プロバイダーでも、企業向け MCP にサインインできるようにした。(#62129)

**その他**

- ソースビルドとリリース用ツールを Rust 1.99.1 に更新した。(#61205)
- XML 関連の依存を更新し、不要になったセキュリティ勧告の除外設定を削除した。(#62068)

変更履歴には、Linux の seccomp で x32 システムコールを制限する変更 (#61206)、ワークロード認証用の SPIFFE JWT-SVID 対応 (#61207)、クラウドスレッドの名前変更 (#61182) も含まれる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.171.0)

### Codex CLI リモート実行・リモート操作 (0.171.0)

0.171.0 では、リモートで動かすための機能が 2 つ追加された。

- `codex exec --remote <ADDR>`：すでに動いているアプリサーバー上で、非対話セッションを開始・再開する。(#61707)
- `/rc`・`/remote`：TUI からローカルのリモート操作を管理し、デバイスのペアリングコードを表示する。(#62121)

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.171.0)

### MedChemBench

創薬化学の推論力を測る新しいベンチマーク「MedChemBench」(全 99 問) が公開された。スコアは GPT-6.2 Astra が 84.5%、GPT-5.6 Sol が 58.2%。

※ 入力データに元記事の URL がないため、ソースリンクは付けていない。

### Codex CLI 0.173.0-alpha.1〜alpha.3

アルファ版が 3 本公開された。どのリリースノートも「Release 0.173.0-alpha.x」の一文だけで、変更内容は書かれていない。alpha.3 は github-actions[bot] ではなく rhan-oai が公開している。

| バージョン | 公開日時 (UTC) |
|---|---|
| 0.173.0-alpha.1 | 2026-11-20 02:54 |
| 0.173.0-alpha.2 | 2026-11-20 20:50 |
| 0.173.0-alpha.3 | 2026-11-20 21:17 |

[ソース (alpha.1)](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1) / [ソース (alpha.2)](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.2) / [ソース (alpha.3)](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.3)

## コミュニティの反応

### Codex CLI 0.171.0

X では、GPT-6.2 を Codex で使おうとして困った声が目立った。CLI 本体の新機能（ワークスペースや undo / redo）についての感想は見つからなかった。Zenn・Qiita には、Sol と Astra の使い分けを整理した記事が出ている。全体として、新モデルの扱い方を探っている段階で、評価はまだ固まっていない。

#### ポジティブ

該当なし

#### ネガティブ

> ChatGPT アカウントで Codex CLI を使うと「The 'gpt-6.2-astra' model is not supported when using Codex with a ChatGPT account.」と出て GPT-6.2 Astra を選べず、会社側のバグではないかと不信感を示した（批判的） — @zcyskyqaqqwq [出典](https://x.com/zcyskyqaqqwq/status/2122815040399253817)

> GPT-6.2 の Codex ガイドに関して、「長い回答が欲しいから reasoning effort を High にする」のは逆効果だったと指摘（注意喚起） — @hyu001225 [出典](https://x.com/hyu001225/status/2123718410068779260)

#### Tips

> 実装を全部 Claude に任せず、Claude には設計と 20 行未満の修正だけを残して、実装は新しいセッションの Codex に回す「codex-first」の分担で、暴走を防いでいる（実践的） — @hyu001225 [出典](https://x.com/hyu001225/status/2123624532619694324)

> PR レビュー、テスト生成、ログ分類、定型的なツール呼び出しは Sol を既定にし、複数モジュールにまたがる設計変更や再現の難しいバグは Astra に回す、という振り分け基準を提案。272K トークン境界の扱いもチェックリストにしている（中立・解説） — [GPT-6.2 SolとAstraの使い分けと272K長文コンテキスト設計チェックリスト](https://zenn.dev/routerbase/articles/de96c356582a98)

> Codex と GitHub Copilot それぞれの公式 changelog をもとに、GPT-6.2 の提供状況について言えることと言えないことを分けて比べている（中立・解説） — [Codex と GitHub Copilot の GPT-6.2 比較｜公式 changelog から言えること・言えないこと](https://qiita.com/kenji_harada/items/cccde7e95d86eabb6eb2)

### Codex CLI リモート実行・リモート操作 (0.171.0)

X で見つかった投稿は、ChatGPT アプリ側の「Codex Remote」機能に関するものだけだった。CLI の `codex exec --remote` や `/rc`・`/remote` を使った個人の感想は見つからなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### MedChemBench

X で見つかった投稿は、発表を伝える報道や要約だけだった。個人の体験や感想は見つからなかった。Zenn・Qiita にも関連する記事はなかった。

#### ポジティブ

該当なし

#### ネガティブ

該当なし

#### Tips

該当なし

### Codex CLI 0.173.0-alpha.1〜alpha.3

該当なし

## ソース

- [Codex Releases](https://github.com/openai/codex/releases)
- [rust-v0.171.0](https://github.com/openai/codex/releases/tag/rust-v0.171.0)
- [rust-v0.173.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1)
- [rust-v0.173.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.2)
- [rust-v0.173.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.3)
- [GPT-6.2 SolとAstraの使い分けと272K長文コンテキスト設計チェックリスト (Zenn)](https://zenn.dev/routerbase/articles/de96c356582a98)
- [Codex と GitHub Copilot の GPT-6.2 比較 (Qiita)](https://qiita.com/kenji_harada/items/cccde7e95d86eabb6eb2)
