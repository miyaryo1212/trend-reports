---
title: "Claude Code v2.1.218、/code-reviewをバックグラウンド化"
summary: "Claude Code v2.1.218 で /code-review がバックグラウンドのサブエージェント化され、レビュー中も会話が止まらなくなった。あわせて /deep-research と context: fork スキルの自発起動・既定挙動が見直され、auto/plan モードの許可判定を分類器に委ねる改善も入った。コミュニティは会話が散らからない点を歓迎する一方、ネスト生成制限との兼ね合いへの不満も。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-24

features:
  - "/code-review をバックグラウンドのサブエージェント化 (Claude Code v2.1.218)"
  - "/deep-research を手動起動のみに変更 (Claude Code v2.1.218)"
  - "context: fork スキルを既定でバックグラウンド実行 (Claude Code v2.1.218)"
  - "auto モードの許可判定を分類器に委譲 (Claude Code v2.1.218)"
  - "plan モード+auto でBash読み取り専用証明不能コマンドを分類器が判断 (Claude Code v2.1.218)"
  - "frontmatter真偽値に yes/no/on/off/1/0 を追加 (Claude Code v2.1.218)"
  - "モデル切替時のfast mode変更アナウンス (Claude Code v2.1.218)"
  - "サーバー管理設定で無害なトグルは承認プロンプトを抑制 (Claude Code v2.1.218)"
  - "スクリーンリーダーモードで削除テキストを読み上げ (Claude Code v2.1.218)"
codex_review: "/code-reviewのバックグラウンド化は派手さはないが、AIコーディングを日常業務に溶かすうえでかなり本質的だと思う。一方で権限判定の分類器依存は便利さ先行で、運用の癖が強まりそうだ。"
codex_importance: 3
---

## 公式アップデート

Claude Code v2.1.218 (2026-07-22 リリース) は多数のバグ修正に加え、サブエージェント運用とパーミッション判定まわりの挙動変更が中心です。

### /code-review をバックグラウンドのサブエージェント化

`/code-review` がバックグラウンドのサブエージェントとして実行されるようになりました。レビュー作業がメインの会話を埋めなくなり、スタックしたスラッシュコマンドをレビュー対象として保持し続けます。

### /deep-research を手動起動のみに変更

`/deep-research` は手動で呼び出したときのみ開始するようになり、Claude が自発的に起動しなくなりました。

### context: fork スキルを既定でバックグラウンド実行

`context: fork` を持つスキルは既定でバックグラウンド実行されるようになりました。個別に無効化する場合はスキルごとに `background: false` を指定します。

### auto / plan モードの許可判定を分類器に委譲

- **auto モード**: dangerous-rm、バックグラウンドの `&`、不審な Windows パスのチェックが許可ダイアログを開かなくなり、auto モードの分類器が裁定します。
- **plan モード + auto**: 静的解析で読み取り専用と証明できない Bash コマンドについてプロンプトを出さず、分類器が判断するよう変更されました。

### その他の変更

- **frontmatter 真偽値の拡張**: スキル/プラグインの frontmatter ブール値に、従来の `true`/`false` に加え `yes`/`no`/`on`/`off`/`1`/`0` (大文字小文字不問) を追加。
- **fast mode 変更アナウンス**: `/config model=<x>` や Remote Control でモデルを切り替えた結果 fast mode が変わった際にアナウンスを表示。
- **承認プロンプトの抑制**: サーバー管理設定で無害な機能・コストのトグルは設定承認プロンプトを出さないよう変更。
- **スクリーンリーダー対応**: `--ax-screen-reader` モードで、単語・行削除 (`Option+Delete`、`Ctrl+W`、`Cmd+Backspace`、`Ctrl+U`、`Ctrl+K`) 時に削除されたテキストを読み上げ。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

## コミュニティの反応

### /code-review をバックグラウンドのサブエージェント化

#### ポジティブ

> v2.1.218 で /code-review がバックグラウンドのサブエージェント化され、レビュー中もメインの会話が止まらず散らからなくなった。地味に効く改善だと実感 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2080251721062944777)

> /code-review がバックグラウンド subagent で動くようになり会話が埋まらないほか、MCP エラー表示などの改善も実用的 — @rikuminamiyama [出典](https://x.com/rikuminamiyama/status/2080099830098272333)

#### ネガティブ

> /code-review が sub-agent 化された影響でネストしたサブエージェント生成がデフォルトオフになり、`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` を設定しても元に戻らない制限を感じた — @localghost [出典](https://x.com/localghost/status/2080325008807829691)

#### Tips

> 長いビルドやテストを foreground で待つと沈黙で切断される問題に対し、`run_in_background: true` で background で回すことで安定する — @kludgelog [出典](https://x.com/kludgelog/status/2080097671348736311)

> `.subclaude/agents/reviewer.md` に agent 定義を置いて subagent を spawn し、diff レビューをメインスレッドから分離してクリーンに保つ活用例 — @SeijinJung [出典](https://x.com/SeijinJung/status/2078562978082001351)

Qiita でも、サブエージェントを使ったコードレビュー自動化を主題にした記事が公開されています。

- [Claude Codeでサブエージェントを活用してプルリクレビューを自動化する手順](https://qiita.com/kamome_susume/items/9ecf1a9b8f7572229162) — @kamome_susume。設計・可読性・セキュリティといった観点をサブエージェントに分担させる手順を整理。

### context: fork スキルを既定でバックグラウンド実行

#### Tips

> `context: fork` を持つ skill は既定でバックグラウンド実行になり、`background: false` で個別に無効化可能という地味に影響のある変更 — @bowwownko [出典](https://x.com/bowwownko/status/2080293916130398319)

> v2.1.218 の主な変更点として、`context: fork` skill のデフォルト背景実行や MCP 関連の改善を抜粋して共有 — @oikon48 [出典](https://x.com/oikon48/status/2080113547888279969)

### plan モード+auto でBash読み取り専用証明不能コマンドを分類器が判断

#### ポジティブ

> plan mode の読み取り専用コマンド確認が不要になり、作業テンポが止まらなくなったのが地味に効く改善 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2080255701986021809)

#### ネガティブ

> auto mode で Bash の安全性を classifier が判断できず「claude-fable-5 is temporarily unavailable」エラーが発生し、読み取り専用以外がブロックされる — @sunnya97 [出典](https://x.com/sunnya97/status/2078222519291498951)

#### Tips

> plan mode + auto mode の組み合わせで、読み取り専用コマンドの確認をスキップしつつ高リスク操作だけブロックする使い方がおすすめ — @AIlab_of_KOHAKU [出典](https://x.com/AIlab_of_KOHAKU/status/2079665602797461711)

### その他の機能

`/deep-research` の手動起動化、frontmatter 真偽値の拡張、fast mode 変更アナウンス、承認プロンプトの抑制、スクリーンリーダーの削除テキスト読み上げについては、本日時点で個人ユーザーによる実体験ベースの投稿は確認できませんでした。**該当なし。**

## ソース

- [Claude Code Releases - v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
