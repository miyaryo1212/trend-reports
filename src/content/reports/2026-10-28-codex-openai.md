---
title: "Codex CLI 0.165.0、Vertex AI対応"
summary: "Codex CLI 0.165.0 正式版が公開された。Google Cloud Vertex AI プロバイダの内蔵、Memory v2 の既定有効化、会話中の reasoning effort 変更の既定有効化などが入った。マーケットプレイス URL 検証の脆弱性も修正されている。"
importance: 3
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-10-28

features:
  - "Codex CLI 0.165.0 正式版"
  - "Google Cloud Vertex AI プロバイダ"
  - "Memory v2 既定有効化"
  - "会話中の推論エフォート変更"
  - "セッションピッカーのリポジトリフィルタ"
  - "app-server API のアタッチ型スレッドフォーク (実験的)"
  - "マーケットプレイス URL 検証の脆弱性修正"
  - "Codex CLI 0.166.0-alpha.1〜alpha.3"
codex_review: "派手なモデル刷新より、Vertex AI対応や推論エフォートの切り替えなど、現場の選択肢を増やす改善が揃った印象だ。Memory v2の既定化は便利さと記憶の質が問われるため、今後の実利用で評価したい。"
codex_importance: 3
---

## 公式アップデート

### Codex CLI 0.165.0 正式版

前回レポートで扱ったアルファ版を経て、0.165.0 の正式版が 2026-10-27 20:11 (UTC) に公開されました。主な新機能は以下の各項目のとおりです。ほかに、GPT-6.1 Terra がモデルカタログに追加されました ([#57337](https://github.com/openai/codex/pull/57337))。

バグ修正 (脆弱性修正を除く):

- サーバー側で既定の承認レビュアーが設定されている場合、明示的な指定がない新規 TUI セッションでもその既定値を使うよう修正 ([#56090](https://github.com/openai/codex/pull/56090))
- 実行設定が不正な場合でも TUI の設定を編集でき、変更がすぐに反映されるよう修正 ([#56091](https://github.com/openai/codex/pull/56091))
- ローカル側で応答の Future が破棄されたとき、リモート MCP ツールへのリクエストもキャンセルするよう修正 ([#56132](https://github.com/openai/codex/pull/56132))
- 割り込みや Plan モードへの切り替えの後に、キュー内のエージェントメッセージが作業を再開してしまう問題を修正 ([#56330](https://github.com/openai/codex/pull/56330))
- プロバイダが「モデルが見つからない」と返した場合はリトライせず、そのエラーメッセージを残すよう修正 ([#56445](https://github.com/openai/codex/pull/56445))

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### Google Cloud Vertex AI プロバイダ

Google Cloud Vertex AI プロバイダが組み込まれました。設定ファイルで `model_provider = "gcp"` を指定すると使えます ([#56265](https://github.com/openai/codex/pull/56265))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### Memory v2 既定有効化

新しく作るプロファイルでは Memory v2 が既定で有効になりました。他のエージェントのメモリを Memory v2 に取り込む機能も追加されています ([#56211](https://github.com/openai/codex/pull/56211), [#56414](https://github.com/openai/codex/pull/56414))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### 会話中の推論エフォート変更

対応モデルでは、会話の途中で reasoning effort を変更する機能が既定で有効になりました ([#56163](https://github.com/openai/codex/pull/56163))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### セッションピッカーのリポジトリフィルタ

セッションピッカーにリポジトリで絞り込むフィルタが追加されました。エージェントコマンドセンターではセッションをディレクトリ別にまとめて表示します。リンクされた複数の worktree にまたがるセッションを探しやすくするための変更です ([#56308](https://github.com/openai/codex/pull/56308))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### app-server API のアタッチ型スレッドフォーク (実験的)

app-server API に、実験的機能としてアタッチ型のスレッドフォーク (attached thread forks) が追加されました ([#56351](https://github.com/openai/codex/pull/56351))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### マーケットプレイス URL 検証の脆弱性修正

マーケットプレイス URL の検証に抜けがあり、許可パターンで確認したホストとは別のホストに Git が接続するおそれがありました。この問題が修正されています。具体的には、HTTP(S) のマーケットプレイス URL で、userinfo 部分にバックスラッシュを含むものを拒否するようになりました ([#56263](https://github.com/openai/codex/pull/56263))。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.165.0)

### Codex CLI 0.166.0-alpha.1〜alpha.3

次期版 0.166.0 のプレリリースが 3 本公開されました。どのリリースノートも本文は「Release 0.166.0-alpha.x」だけで、変更内容は書かれていません。

- **0.166.0-alpha.1**: 2026-10-27 01:38 (UTC) 公開
- **0.166.0-alpha.2**: 2026-10-27 12:03 (UTC) 公開
- **0.166.0-alpha.3**: 2026-10-27 19:32 (UTC) 公開

[ソース (alpha.1)](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.1) / [ソース (alpha.2)](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.2) / [ソース (alpha.3)](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.3)

## コミュニティの反応

### Codex CLI 0.165.0 正式版

#### ポジティブ

> Memory v2 の既定化と他エージェントからのメモリインポート、Vertex AI プロバイダの内蔵、会話中の reasoning effort 変更を挙げ、「試す価値がある」と評価している (好意的)。 — @vsaietta [出典](https://x.com/vsaietta/status/2115193986478735717)

> Vertex AI プロバイダの内蔵、GPT-6.1 Terra への対応、複数プロジェクトをまたぐセッション管理によって、エージェント開発のワークフローが柔軟になったと実感している (好意的)。 — @nurhayatdev [出典](https://x.com/nurhayatdev/status/2115192468610183244)

> GPT-6.1 Terra を前世代の Terra や Sol と Codex 上で比べた検証記事 (中立)。 — Qiita「[GPT-6.1 Terra は前の Terra からどれだけ伸びた？ Sol の半額モデルを Codex で比べた](https://qiita.com/Takuya__/items/043e006af3ed3ea09b5e)」

#### ネガティブ

該当なし

#### Tips

> Codex CLI のアカウント切り替えに `codex-auth` コマンドを使い、複数のサブスクリプションを 1 コマンドで切り替えられるツールと組み合わせる実践例 (中立)。 — @bielarusajed [出典](https://x.com/bielarusajed/status/2115190092297806091)

### Google Cloud Vertex AI プロバイダ

#### ポジティブ

> Vertex AI プロバイダが標準で入ったことで、複数のプロバイダを使い分けるワークフローの準備の手間が減り、実用的だという評価 (好意的)。 — @vsaietta [出典](https://x.com/vsaietta/status/2115193986478735717)

> プロバイダやプロジェクトをまたいだエージェント開発がしやすくなったという評価 (好意的)。 — @nurhayatdev [出典](https://x.com/nurhayatdev/status/2115192468610183244)

#### ネガティブ

> GCP プロバイダは Vertex のエンドポイントを自動で組み立てるが、Web 検索、画像生成、推論サマリーが使えなくなるという制限を指摘している (批判的)。 — @RusticStack [出典](https://x.com/RusticStack/status/2115194343736693024)

#### Tips

該当なし

### Memory v2 既定有効化

#### ポジティブ

> 他エージェントからのメモリインポートをまず試してみたいという、実務を意識した期待を述べている (好意的)。 — @vsaietta [出典](https://x.com/vsaietta/status/2115193986478735717)

#### ネガティブ

該当なし

#### Tips

該当なし

### 会話中の推論エフォート変更

#### ポジティブ

> 会話中に reasoning effort を変えられる機能が既定で有効になり、場面に応じて使い分けやすくなった (好意的)。 — @vsaietta [出典](https://x.com/vsaietta/status/2115193986478735717)

> 会話中に reasoning effort を変えてもキャッシュが保持されるようになったので、同じスレッド内で自由に調整できる (好意的)。 — @LimitWatch_ [出典](https://x.com/LimitWatch_/status/2115142140384673875)

#### ネガティブ

> ChatGPT の Web 版で reasoning effort を High にするととても遅くなる、という不満 (批判的)。Codex CLI ではなく ChatGPT Web 版についての投稿。 — @yunliyu9427 [出典](https://x.com/yunliyu9427/status/2115153237779304511)

#### Tips

> Codex CLI で Luna、Sol、Astra の 3 モデルの effort を変えながら同じ 6 課題を解かせ、正答数と出力トークン数を比べた記事。Luna の effort を xhigh まで上げるより、Sol の low のほうが少ない出力トークンで全問正答したと報告している (中立)。 — Zenn「[Codex のモデルと effort を6課題で比較。正答数とトークン数を測った](https://zenn.dev/kaz_hira/articles/codex-model-effort-measured)」

### セッションピッカーのリポジトリフィルタ

該当なし (見つかった投稿はリリースノートや変更履歴の告知だけで、ユーザーが実際に使った感想はありませんでした)

### app-server API のアタッチ型スレッドフォーク (実験的)

#### ポジティブ

該当なし

#### ネガティブ

> Codex の thread tools (fork_thread を含む) で「Allow always」を設定しても、毎回手動での承認を求められる不具合を報告している (批判的)。今回追加された app-server API の機能そのものについての投稿ではない。 — @abhirampro [出典](https://x.com/abhirampro/status/2113864528119435645)

#### Tips

該当なし

### マーケットプレイス URL 検証の脆弱性修正

該当なし

### Codex CLI 0.166.0-alpha.1〜alpha.3

該当なし

## ソース

- [GitHub: openai/codex rust-v0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0)
- [GitHub: openai/codex rust-v0.166.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.1)
- [GitHub: openai/codex rust-v0.166.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.2)
- [GitHub: openai/codex rust-v0.166.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.3)
- [Qiita: GPT-6.1 Terra は前の Terra からどれだけ伸びた？ Sol の半額モデルを Codex で比べた](https://qiita.com/Takuya__/items/043e006af3ed3ea09b5e)
- [Zenn: Codex のモデルと effort を6課題で比較。正答数とトークン数を測った](https://zenn.dev/kaz_hira/articles/codex-model-effort-measured)
