---
title: "Claude Code v2.1.212公開、/forkがバックグラウンド複製に刷新"
summary: "Claude Code v2.1.212がリリースされ、/forkの会話バックグラウンド複製化と/subtask分離、WebSearch・サブエージェント生成のセッション上限、MCPツールの2分超自動バックグラウンド化、plan modeのファイル改変Bash自動実行バグ修正などを追加。X反応は/forkの使い分けとMCP自動バックグラウンド化への好評が中心で、サブエージェント多用時の使用制限到達への不満も。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-18

features:
  - "Claude Code v2.1.212リリース"
  - "/fork の刷新（会話をバックグラウンドセッションに複製、従来のセッション内サブエージェントは /subtask に分離）"
  - "claude auto-mode reset コマンド"
  - "WebSearch呼び出しのセッション上限（既定200回 / CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION）"
  - "サブエージェント生成のセッション上限（既定200 / CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION）"
  - "MCPツールの自動バックグラウンド化（2分超 / CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS）"
  - "/resume のセッションピッカー"
  - "plan modeのファイル改変Bash自動実行を修正（セキュリティ修正）"
  - "Task toolのmodeパラメータ廃止"
  - "セッショントランスクリプトへのreasoning effort記録"
  - "headless/SDKのset_modelミッドターン適用"
  - "エージェント間メッセージのトークン削減（SendMessage本文の重複回避）"
codex_review: "賢さの誇示より、並列作業の詰まりや権限まわりの事故を潰しにきたのが興味深い。派手さは薄いが、coding agent市場ではこういう運用改善の積み上げが案外いちばん効く。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.212

前回の v2.1.211 以降の新規分として、多数の機能追加・バグ修正が含まれます。

- **`/fork` の刷新**: `/fork` が会話を新しいバックグラウンドセッション（`claude agents` 内の独立した行）へ複製し、作業を続けられるようになりました。従来 `/fork` が起動していたセッション内サブエージェントは `/subtask` として分離されました。
- **`claude auto-mode reset`**: auto-mode 設定を既定に戻すコマンドを追加。確認プロンプト付きで、`--yes` でスキップできます。
- **WebSearch 呼び出しのセッション上限**: WebSearch ツールのセッション上限（既定200回、`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` で調整可能）を追加し、暴走する検索ループを防止します。
- **サブエージェント生成のセッション上限**: サブエージェント生成のセッション上限（既定200、`CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION` で上書き可能）を追加。暴走する委譲ループを防ぎ、`/clear` で予算がリセットされます。
- **MCP ツールの自動バックグラウンド化**: 2分を超えて実行される MCP ツール呼び出しを自動的にバックグラウンドへ移行し、セッションを操作可能に保ちます。閾値は `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` で設定・無効化できます。
- **`/resume` のセッションピッカー**: エージェントビューで `/resume` を入力すると、過去のセッション（リストから削除済みのものを含む）を選ぶピッカーが開き、選択をバックグラウンドセッションとして再開します。
- **plan mode のファイル改変 Bash 自動実行を修正（セキュリティ修正）**: plan mode が `touch`・`rm` などファイルを変更する Bash コマンドを、許可プロンプトや SDK の `canUseTool` コールバックなしに自動実行してしまう不具合を解消しました。
- **Task tool の `mode` パラメータ廃止**: `mode` パラメータは無視されるようになり、サブエージェントは既定で親セッションの権限モードを継承します。
- **セッショントランスクリプトへの reasoning effort 記録**: 各アシスタントメッセージにエフォートレベルを保存するようになりました。
- **headless/SDK の `set_model` ミッドターン適用**: `set_model` 制御リクエストを適用すると、次のモデル往復から新モデルを使用します（次のターンまで待つ必要がなくなりました）。
- **エージェント間メッセージのトークン削減**: `SendMessage` の本文を再生履歴やツール結果へ重複させないよう改善し、トークン使用量を削減しました。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)

## コミュニティの反応

### /fork の刷新

#### ポジティブ

> Claude Code の `/fork` と `/subtask` の使い分けだけで、文脈の汚れによる迷走がゼロになった。 — @aria_ai_tools [出典](https://x.com/aria_ai_tools/status/2078084912754966549)

> これ欲しかったやつ。`/fork` が background セッション複製に変わり、従来の subagent は `/subtask` へ分離された。 — @muscle_coding [出典](https://x.com/muscle_coding/status/2077945558225035593)

#### ネガティブ

> Claude Code desktop で subagent が background task に移行したとき、UI に ongoing background task が反映されない。 — @winstondu [出典](https://x.com/winstondu/status/2077557821369901094)

#### Tips

> `/fork` は会話を新しい background セッションに複製（claude agents 内の独自行）、`/subtask` はセッション内 subagent 起動に使い分ける。Fork で並列ブランチ、Subtask でその場で回答をもらう。 — @4Ndr3w10000 [出典](https://x.com/4Ndr3w10000/status/2078011318058319888)

Zenn では、自作のマルチエージェント・オーケストレーション基盤において `fork` を既定にするコスト最適性を検証し、「安くなるが悪いことも多い」と論じた記事が公開されています（[yukineko](https://zenn.dev/yukinekonyan/articles/120f98d9f1403b)）。

### サブエージェント生成のセッション上限

#### ネガティブ

> Claude Code で subagent を多用すると即座に使用制限に到達し、1分で上限に達した。 — @SoraiaDev [出典](https://x.com/SoraiaDev/status/2076768122795618608)

> subagent 多用セッションで使用制限に頻繁に当たるようになり、深い作業中に勢いが途切れるのが一番の不満。 — @godofdarkshadow [出典](https://x.com/godofdarkshadow/status/2075847817688752293)

> subagent 委譲でトークン消費が4.2倍に膨らみ、オーバーヘッドが実務で深刻。 — @devdudejeremy [出典](https://x.com/devdudejeremy/status/2078134059251667098)

> subagent が monitor tool でバックグラウンド待ちになった場合、親 agent が完了扱いされて resume されてしまう不具合。 — @tomocrafter [出典](https://x.com/tomocrafter/status/2078027678700224903)

Zenn では、サブエージェントが親と同じ最上位モデルを引き継いでトークンを浪費する問題に対し、タスクに応じてモデルを自動ルーティングする「smart-dispatch」を作った事例が紹介されています（[るぴ](https://zenn.dev/dupi/articles/claude-code-smart-dispatch)）。

### MCPツールの自動バックグラウンド化

#### ポジティブ

> 長い MCP ツール呼び出しが2分超で自動的にバックグラウンドに移行する新機能により、暴走や長時間処理のストレスが減り、マルチエージェント作業が実用的になった。 — @sudomikexe [出典](https://x.com/sudomikexe/status/2077957714559529353)

> Claude Code 2.1.212 の MCP 自動 background 化や `/fork` の background session 化により、運用境界の更新が「賢さ」より実用的で、coding agent の安定性が向上したと感じた。 — @ebisuke20260503 [出典](https://x.com/ebisuke20260503/status/2077964556375081444)

> MCP 呼び出しが2分後に自動 background 化されるなど、長時間・マルチエージェント作業向けのガードレールが実用的アップグレードだと実感。 — @mordiaky [出典](https://x.com/mordiaky/status/2077967944802246716)

### その他の機能（v2.1.212リリース全般 / auto-mode reset / WebSearch上限 / /resume ピッカー / plan mode Bash修正 / Task tool mode廃止 / reasoning effort記録 / set_modelミッドターン適用 / エージェント間トークン削減）

該当なし（直近7日間の X 投稿では、これらの個別機能に関する個人ユーザーの実体験・感想・Tips は確認できませんでした。changelog の共有・拡散は複数見られましたが、個人の実体験投稿は確認できませんでした）

Qiita では、v2.1.212 を「日常的に使う `/fork` の挙動が根本から変わる大型リリース」とし、`/fork` の仕様変更とプランモードの権限モデルを迂回するセキュリティ修正を中心にまとめた解説記事が公開されています（[picnic](https://qiita.com/picnic/items/6cb9f4ff78ccb9661283)）。

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
