---
title: "Codex CLI 0.144.1、インストールとcode-modeの不具合を修正"
summary: "Codex CLIが0.144.1に更新。GitHubの圧縮・並べ替えメタデータでスタンドアロンインストールが失敗する不具合と、macOSのcode-modeホスト同梱・埋め込みランタイムへのフォールバックを修正したバグ修正リリース。並行して0.145.0-alpha.2のプレリリースも公開された。"
importance: 2
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-07-11

features:
  - "Codex CLI 0.144.1 リリース"
  - "Codex CLI 0.145.0-alpha.2 プレリリース"
codex_review: "典型的な機能追加ではなく保守回だが、導入失敗と実行継続性の修正はCLI普及の足腰を支える類いで、地味ながら重要です。とはいえ業界全体への波及はまだ限定的に見えます。"
codex_importance: 2
---

## 公式アップデート

前回詳述した 0.144.0 に続き、バグ修正版の 0.144.1 と、次期系列のプレリリース 0.145.0-alpha.2 が公開されました。

### Codex CLI 0.144.1 リリース

0.144.0 の不具合を対象としたバグ修正リリースです。

- GitHub が圧縮・並べ替えされたリリースメタデータを返した際にスタンドアロンインストールが失敗する不具合を修正。(#31913)
- macOS のパッケージインストールで、`codex` 実行ファイルとあわせて code-mode ホストが同梱されるように修正。(#31913)
- コンパニオンとなるホストバイナリが利用できない場合でも、埋め込みランタイムにフォールバックして code mode が動作し続けるように修正。(#31913)

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.144.1)

### Codex CLI 0.145.0-alpha.2 プレリリース

0.145 系列の新しいアルファプレリリースが公開されました (alpha.1 に続くもの)。詳細なリリースノートは付与されていません。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.2)

## コミュニティの反応

### Codex CLI 0.144.1 リリース

#### ポジティブ

> Codex CLI を npm で 0.144.1 にアップデートしたら WSL 環境で GPT-5.6 シリーズが選べるようになり、`/model` コマンドで切り替え可能になった。 — @illareya [出典](https://x.com/illareya/status/2075365898341462075)

> Codex CLI だと GPT-5.6 が使えるようになった。 — @zyousisine [出典](https://x.com/zyousisine/status/2075362465551106176)

#### ネガティブ

> Windows 版 Codex CLI は相変わらずパッチ適用に失敗する。 — @kohya_tech [出典](https://x.com/kohya_tech/status/2075360356931903588)

### Codex CLI 0.145.0-alpha.2 プレリリース

該当なし (直近1週間でリリース告知以外に個人ユーザーの実体験投稿は確認できず)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
