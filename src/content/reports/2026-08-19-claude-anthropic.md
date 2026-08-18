---
title: "Claude Code v2.1.235、spellcheck設定を追加"
summary: "Claude Code v2.1.235 が2026年8月18日に公開されました。プロンプト入力の誤字を下線表示する spellcheck 設定が追加され、クラウドセッション実行時のメモリ・CPU使用量と権限ダイアログの表示整合性が改善されています。バグ修正が中心で、X上での実体験投稿はまだ出ていません。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-19

features:
  - "Claude Code v2.1.235"
  - "spellcheck設定"
  - "クラウドセッションの省メモリ・省CPU化"
  - "権限ダイアログの表示整合性改善"
  - "埋め込みgrepの改善"
  - "コンテキスト上限エラーの改善"
  - "Vimモードの状態保持"
  - "SendMessageの事前サイズ拒否"
  - "Agentツールのsubagent_typeエラー明確化"
  - "Shift+Tabの権限コメント欄修正"
  - "Remote Controlの `claude rc` 検証追加"
codex_review: "派手さはないが、こういう地味な磨き込みがCLIエージェントの定着を左右する。とくに権限ダイアログ周りの是正は見過ごされがちだが、過剰自動化への不信を減らす意味でかなり重要だ。"
codex_importance: 2
---

## 公式アップデート

### Claude Code v2.1.235

2026年8月18日に公開されました。新規設定の追加が1件、残りは既存機能の改善とバグ修正です。

[Claude Code Releases - v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)

### spellcheck設定

プロンプト入力中に誤字を下線表示するオプション設定 `spellcheck` が追加されました。判定にはインストール済みの `aspell` / `hunspell` / `ispell` を使用します。既定では無効です。

### クラウドセッションの省メモリ・省CPU化

`/ultrareview` や `/autofix-pr` などのクラウドセッションをバックグラウンド実行している間、イベントストリームを更新のたびに再走査・再描画しなくなりました。メモリとCPUの使用量が改善されます。

### 権限ダイアログの表示整合性改善

権限ダイアログの表示文言と「don't ask again」の対象範囲が、実際に許可される範囲と常に一致するようになりました。内容を完全に表示できない場合は「don't ask again」の選択肢自体を提示しません。

### 埋め込みgrepの改善

macOS / Linux のネイティブビルドに組み込まれた `grep` について、病的なパターンがメモリを枯渇させずに即座に失敗するようになりました。また `-m N` と `-A` / `-C` を併用した際に正しいコンテキストを出力します。

### コンテキスト上限エラーの改善

コンテキスト上限に達した際のエラーメッセージが、auto-compact が無効になっている場合はその旨を伝え、`/config` から再有効化するよう案内するようになりました。

### Vimモードの状態保持

詳細トランスクリプト (`ctrl+o`) の切り替えやパネルを閉じた際に、NORMAL モードとカーソル位置が維持されるようになりました。

### SendMessageの事前サイズ拒否

`SendMessage` が、セッション間配信に大きすぎるメッセージを黙って破棄せず、送信前に拒否するようになりました。

### Agentツールのsubagent_typeエラー明確化

対象のエージェントが利用できないセッションで Agent ツールが general-purpose を既定として案内してしまう問題が修正されました。`subagent_type` を省略した場合は、利用可能なエージェント一覧を含む明確なエラーが返ります。

### Shift+Tabの権限コメント欄修正

権限プロンプトのコメント欄で Shift+Tab を押すと、欄を閉じる代わりに編集を承認しセッション全体の編集権限を付与してしまう挙動が修正されました。

### Remote Controlの `claude rc` 検証追加

`claude rc` に、対話起動時と同じエンタープライズゲートウェイの可用性チェックが適用されるようになりました。

## コミュニティの反応

上記いずれの項目についても、個人ユーザーの実体験・感想にあたる X 投稿は**該当なし**でした。v2.1.235 の公開が8月18日であり、反応が出るまでの時間が経っていないことが主な要因です。リリース告知以外の言及は確認できませんでした。

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
