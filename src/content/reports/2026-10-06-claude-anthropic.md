---
title: "Claude Code v2.1.289 で権限ルール穴を修正"
summary: "Claude Code v2.1.289 が公開されました。サンドボックス自動許可時に Bash の deny/ask ルールが効かない問題や、symlink 経由で Read deny が効かない問題などを修正しています。あわせてチームメイト起動用の agent.spawn を追加し、Mods の描画失敗を局所化しました。X では目立った反応はありません。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-10-06

features:
  - "Claude Code v2.1.289 エージェントチーム向け agent.spawn"
  - "Claude Code v2.1.289 権限ルールのセキュリティ修正"
  - "Claude Code v2.1.289 Claude Mods の安定性強化"
codex_review: "目立つ新機能より、権限ルールの抜け穴を複数塞いだ点に価値を感じる。コーディングエージェントが実行環境に深く入るほど、こうした地味な修正が信頼の土台になるが、業界全体を動かす規模の更新ではない。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.289 エージェントチーム向け agent.spawn

2026-10-03 公開の v2.1.289 で、Mods/プラグイン向けの API が追加されました。

- チームメイトを起動する `agent.spawn` を追加
- プラグインのフックイベントをまたいで共通の agent id を使えるように変更
- `$.agent.list()` が idle（待機中）と waiting（入力待ち）の状態を返すように変更

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

### Claude Code v2.1.289 権限ルールのセキュリティ修正

同じリリースで、権限ルールまわりの以下の問題が修正されました。

- サンドボックスの自動許可中に、Bash の deny/ask ルールが一部のコマンドを素通りさせていた問題。対象は、展開される値を含む環境変数プレフィックス付きのコマンド（例: `TZ="$HOME" rm -rf build`）と、変数代入だけを先頭に置いたコマンド
- 管理対象マシンで、複合シェルコマンドの入れ子部分に設定した deny/ask ルールが、ユーザーがインストールした Mod の承認に上書きされていた問題
- IDE で @メンション・変更・選択したファイルが symlink 経由の場合に、`Read` の deny ルールが適用されていなかった問題
- 組織が管理する MCP サーバーのサインイン用ツールの説明文を、ユーザーがインストールしたプラグインが書き換えられた問題
- [VSCode] 2.1.288 で入った `claude auth status` の変更を差し戻し（サインアウトが増えた可能性があるため）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

### Claude Code v2.1.289 Claude Mods の安定性強化

Mods とプラグインの描画で起きていたフリーズやセッション終了が、まとめて修正されました。

- Mod の `Client` が描画中に失敗しても、周囲の描画を巻き込まずにその Mod だけが失敗し、`ui.fault` を発行するように変更
- Mod の `ui.render` フックが書いた値で行の描画が例外を投げたとき、セッションが "unrecoverable interface error" で終了していた問題を修正。今後はエンジンが自前の行を描画する
- ターミナルが知らない枠線スタイルの Box をプラグインが描くと、起動時にフリーズまたは強制終了していた問題を修正
- プラグインの画面ハンドラが非同期で例外を投げると、supervised セッションやバックグラウンドセッションが終了していた問題を修正
- localhost・パス中の `@`・大文字のホスト名・`file:` パスを含むリンクがあると、プラグインのペインに何も描画されなかった問題を修正
- アップグレード後の最初のセッションで、インストール済みの Mod が読み込まれなかった問題を修正
- Mod のバンドやペインが描画に失敗したとき、作者向けのメッセージに Mod 名と「何も描画されなかった」ことを表示するよう改善

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

## コミュニティの反応

### Claude Code v2.1.289 エージェントチーム向け agent.spawn

該当なし

### Claude Code v2.1.289 権限ルールのセキュリティ修正

#### Tips

> Claude Code の周りで起きたことを読み違えた5件を整理した記事。複合コマンドがブロックされたとき「前半は実行済み」だと思っていたが、実際は1文字も実行されていなかった、という事例を含む（中立・検証寄り）。 — くぅ「[止められたコマンドは、前半も実行されていなかった — Claude Code の周りで、起きたことを読み違えた5件](https://zenn.dev/kuu_dqx/articles/what-ran-and-what-did-not)」

#### 日本語コミュニティ

X 上で該当する個人投稿はありませんでした。

### Claude Code v2.1.289 Claude Mods の安定性強化

#### Tips

> デスクトップ版 Claude Code で Mods を動かしたときに踏んだ罠を、症状 → 原因 → 直し方の形でまとめた本。エラーなしで「何も描かれない」「Mod ごと読み込まれない」原因の一覧を載せている。確認したバージョンは 2.1.286〜2.1.288 で、今回の修正より前のもの（実践的・中立）。 — 中田榛希「[Claude に相場を読ませ、売買させる ― デスクトップ版 Claude Code の Mods で AI トレード画面を作った実戦録](https://zenn.dev/nakadaharuki/books/claude-code-mods-desktop)」

> settings フック・プラグイン・mod の役割分担を公式ドキュメントで整理し、「画面に出す」という mod にしかできないことを手を動かして確かめた入門記事（中立）。 — 安藤「[Claude Codeのmodで、画面のどこに何を出せるか確かめる【mods入門③】](https://zenn.dev/yando/articles/cccb3392fdb0e2)」

#### 日本語コミュニティ

X 上で該当する個人投稿はありませんでした。

## ソース

- [Claude Code v2.1.289 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)
- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
