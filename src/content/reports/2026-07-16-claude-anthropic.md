---
title: "Claude Code v2.1.210公開、経過時間カウンター追加とセキュリティ強化"
summary: "Claude Code v2.1.210がリリースされ、長時間ツール実行を可視化する経過時間カウンター、権限ルールの起動時警告、auto modeの権限分類器Sonnet 5デフォルト化、間接プロンプトインジェクション耐性強化などを追加。AnthropicはカナダのAI研究に1000万CADを拠出。X反応は経過時間カウンターへの好評と、権限ルール警告への不満が中心。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-16

features:
  - "Claude Code v2.1.210リリース（経過時間カウンター追加）"
  - "Claude Code v2.1.210: 権限ルール起動時警告（Write/NotebookEdit/Glob）"
  - "Claude Code v2.1.210: auto mode改善（権限分類器Sonnet 5デフォルト）"
  - "Claude Code v2.1.210: 間接プロンプトインジェクション耐性強化"
  - "Anthropic: カナダAI研究への1000万CAD拠出"
codex_review: "今回の本丸は派手な新機能より、待ち時間の可視化と権限・注入対策の手当てだと思う。地味だが運用の信頼感を底上げする更新で、研究拠出より現場にはこちらの方が効く。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.210

多数のバグ修正に加え、以下の機能追加・改善が含まれます。

- **経過時間カウンター**: 折りたたまれたツールサマリー行にライブの経過時間カウンターを追加。長時間のツール呼び出しが「固まったように見える」問題を解消し、実際に秒数が進む様子を可視化します。
- **権限ルールの起動時警告**: `Write(path)`・`NotebookEdit(path)`・`Glob(path)` の権限ルールに対し、`Edit(path)` または `Read(path)` の使用を推奨する起動時警告を追加しました。
- **auto mode改善**: 外部セッションの権限分類器がSonnet 5をデフォルトで採用するようになりました（セッションの初回リクエストで検証し、以降はセッション単位で固定）。
- **セキュリティ強化**: Agentツールが、サブエージェントが読み取ったコンテンツ経由の間接プロンプトインジェクションに対して耐性を強化しました。

このほか、`isolation: 'worktree'` サブエージェントがメインリポジトリに対しgit操作を実行できてしまう不具合の修正、`ultracode` キーワードのオプトインが非人間由来の入力（webhookペイロード等）で発火する問題の修正、フックコールバックのタイムアウトがユーザー拒否と誤報告される問題の修正など、広範な修正を含みます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.210)

### Anthropic: カナダAI研究への1000万CAD拠出

Anthropicは7月14日、Mila・Vector・Amiiなどカナダの8機関に対し、AI研究資金として1000万CADを拠出すると発表しました。あわせてカナダ版Economic Indexの国別ブリーフを公開しています。

[ソース](https://www.anthropic.com/)

## コミュニティの反応

### Claude Code v2.1.210リリース（経過時間カウンター）

#### ポジティブ

> v2.1.210の経過時間カウンターが、長時間ツール実行時の「フリーズしたように見える」問題を解消。3回の18秒コマンドで確実にカウントが進むことを確認できた。 — @hensq [出典](https://x.com/hensq/status/2077389302519173419)

> 経過時間カウンターで「あと何秒？」という不安が数字表示で静かに解消。権限警告やエージェント信頼性の改善も好印象。 — @AI_Eris_Log [出典](https://x.com/AI_Eris_Log/status/2077360696690708570)

#### Tips

> 机を離れた時のClaude Code継続方法5つを状況別にまとめた。間違えると1時間後にセッションが切れるリスクを検証。 — @machineFriendly [出典](https://x.com/machineFriendly/status/2077439917550887268)

> v2.1.210で `.claude/CLAUDE.md` 経由のAGENTS.md読み込みが正常に動作することを確認。 — @hyunbinseo97 [出典](https://x.com/hyunbinseo97/status/2077347396926026026)

### Claude Code v2.1.210: 権限ルール起動時警告（Write/NotebookEdit/Glob）

#### ネガティブ

> 権限設定でWrite/NotebookEdit/Glob(path)ルールを使うと起動ごとに警告が出て地獄絵図に。Edit/Readへの移行が推奨される。 — @aria_ai_tools [出典](https://x.com/aria_ai_tools/status/2077340781334135217)

#### Tips

> Write(path)とEdit(path)の違い、Ask/Deny挙動、パス指定の違いを実測＋公式ドキュメントで整理したQiita記事。 — @honda_dev [出典](https://x.com/honda_dev/status/2077431187732373859)

> 起動時警告対策として、denyルールのWrite(path)をEdit(path)に書き換え。v2.1.208からの仕様変更でRead denyもEditに適用されるようになり、.env保護が効かなくなる問題を回避。 — @kirimajiro [出典](https://x.com/kirimajiro/status/2077253908590981379)

Qiitaでは、無人運用中のClaude Codeが誰も拒否していないのに黙って止まる現象（2.1.210）を検証し、自分のhook 58個を全数確認した記録も公開されています（[yurukusa](https://qiita.com/yurukusa/items/fa98b2a84314121ccd02)）。

### Claude Code v2.1.210: auto mode改善（権限分類器Sonnet 5デフォルト）

該当なし（直近7日間のX投稿で、外部セッションの権限分類器Sonnet 5デフォルト採用に関する個人ユーザーの実体験・感想は未確認）

### Claude Code v2.1.210: 間接プロンプトインジェクション耐性強化

X上での個人ユーザーの実体験・感想は未確認。Qiitaでは、間接プロンプトインジェクション対策とworktree分離の修正を「high」重要度の更新として解説する記事が公開されています（[picnic](https://qiita.com/picnic/items/2623cb5a5f81928b4477)）。

### Anthropic: カナダAI研究への1000万CAD拠出

該当なし（直近1週間のX投稿で、発表内容のニュース共有のみ。個人による実体験・具体的なTips・不満は未確認）

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic](https://www.anthropic.com/)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
