---
title: "Claude Code v2.1.214、権限チェックの脆弱性を多数修正しEndConversation追加"
summary: "Claude Code v2.1.214がリリースされ、Bash権限チェックのセキュリティ強化（PowerShell 5.1バイパス修正、fdリダイレクトのfail-closed化、1万字超コマンドの常時プロンプト化）、単一セグメントdir/**許可ルールのネスト誤承認修正、dockerコマンドの権限プロンプト追加、EndConversationツール追加などを含む。X反応は権限まわりの継続的な穴埋めへの好評とTipsが中心。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-19

features:
  - "Claude Code v2.1.214リリース"
  - "EndConversationツール"
  - "Bash権限チェックのセキュリティ強化"
  - "単一セグメント dir/** 許可ルール修正"
  - "docker コマンドの権限プロンプト追加"
  - "長時間ツール呼び出しの進捗ハートビート"
  - "メモリファイルのISO modifiedタイムスタンプ"
  - "OpenTelemetry拡張"
  - "subagentStatusLineへのreasoning effort追加"
  - "スケジュールタスクのプロンプト修正"
  - "/ultrareview のmerge base無し対応"
codex_review: "これは派手な新機能回ではなく、Claude Codeが実運用フェーズで避けて通れない信頼境界の再設計を続けている回だと見える。地味だが重要で、過剰な期待よりも“ようやく足場が締まってきた”という印象のほうが強い。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.214

前回の v2.1.212 以降の新規分。今回は権限チェック（特に Bash）まわりのセキュリティ修正が多数を占めます。

- **Bash 権限チェックのセキュリティ強化**: Windows PowerShell 5.1 セッションでの権限バイパスを修正。ファイルディスクリプタのリダイレクト形式（権限解析器が bash と異なる解釈をするもの）を fail-closed 化。10,000 字を超えるコマンドは自動実行せず常にプロンプトを表示するよう変更。`[[ ]]` 内の zsh 添字・修飾子を不活性テキストとして扱っていた問題、`help`/`man` の一部が危険なオプションやコマンド置換を伴っても自動許可されていた問題も修正。
- **単一セグメント `dir/**` 許可ルール修正**: `Edit(src/**)` などの許可ルールが、`<cwd>/dir` だけでなくツリー全体のネストした `dir/` への書き込みを誤って自動承認していた不具合を修正。あわせて hook の `if:` 条件も `<cwd>/dir` のみにマッチするよう変更（任意深度は `**/dir/**` と書く）。
- **`docker` コマンドの権限プロンプト追加**: デーモンリダイレクトフラグ（`--url`・`--connection`・`--identity`、Podman の remote モード、Podman の `docker` シム含む）付きコマンドにプロンプトを要求。
- **EndConversation ツール**: 極めて悪質なユーザーやジェイルブレイク試行に対し、Claude がセッションを終了できるツールを追加（claude.ai では 2025 年から提供）。
- **長時間ツール呼び出しの進捗ハートビート**: 従来無音だった長時間ツール実行に、定期的な進捗表示を追加。
- **メモリファイルの ISO `modified` タイムスタンプ**: メモリファイルのフロントマターに更新日時を追加。
- **OpenTelemetry 拡張**: ログイベントに `message.uuid`・`client_request_id`・`tool_source` 属性を追加。`CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH` で OTel コンテンツ属性の 60KB 切り詰め上限を設定可能に。
- **`subagentStatusLine` への reasoning effort 追加**: カスタムエージェント行でモデルとエフォートを表示可能に。
- **スケジュールタスクのプロンプト修正**: スケジュールタスクが自身の設定プロンプトを未信頼入力として拒否する不具合を修正。発火したプロンプトをセッションの割り当てタスクとして配信するように。
- **`/ultrareview` の merge base 無し対応**: マージベースが無いリポでも、全追跡ファイルのレビューを提案するよう修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.214)

## コミュニティの反応

### 単一セグメント dir/** 許可ルール修正

#### ポジティブ

> 権限チェックの穴を塞ぐ修正が続き、毎日使う側として信頼できる土台固めを実感。 — @shima0hide [出典](https://x.com/shima0hide/status/2078299134612972028)

> 自動実行前に止まる場所が増え、作業範囲・承認ログを先に確認する運用がしやすくなった。 — @kapikunAI [出典](https://x.com/kapikunAI/status/2078317163459584161)

#### Tips

> `Edit(src/**)` の許可範囲を cwd 直下のみに修正した点を指摘し、`claude --version` 確認や permission-check ログの活用を推奨。 — @AICodingOpsJP [出典](https://x.com/AICodingOpsJP/status/2078293030621335639)

> v2.1.214 の changelog 抜粋として、`Edit(src/**)` の単一セグメント `dir/**` 許可ルールのネスト誤承認修正など、権限関連の変更点をまとめて共有。 — @oikon48 [出典](https://x.com/oikon48/status/2078344337348276356)

### Bash権限チェックのセキュリティ強化

X 上では、個人ユーザーの実体験・感想投稿は確認できませんでした（changelog の共有・拡散は複数見られたものの、いずれも公式寄り・ニュース系・一般論）。

Qiita では、v2.1.214 を「権限チェック周りの複数のセキュリティ脆弱性を修正した重要なアップデート」とし、`Edit(src/**)` の意図しない範囲までの自動承認や hooks の破壊的変更を中心に解説した記事が公開されています（[picnic「Claude Code v2.1.214の権限脆弱性修正とhooks破壊的変更を解説」](https://qiita.com/picnic/items/bae2dd474405eaa87513)）。また、直近 10 日で v2.1.205〜v2.1.212 の 8 バージョンにまたがる「信頼境界の引き直し」を追った記事もあります（[emi_ndk「『承認しました』と書いたのはモデルだった」](https://qiita.com/emi_ndk/items/73478cc5aa6a9337afad)）。

### OpenTelemetry拡張

X 上では該当なし。Zenn では、Claude Code のテレメトリ（OTel ログ）を導入してトークン消費・コストを可視化する手順を解説した記事が公開されています（[Nakashima「Claude CodeにOTelログを導入して、トークン消費・コストを可視化する」](https://zenn.dev/nakashimaharuto/articles/claude-code-otel-logging-guide)）。

### その他の機能（EndConversationツール / docker権限プロンプト / 進捗ハートビート / メモリのISOタイムスタンプ / subagentStatusLineのeffort / スケジュールタスク修正 / ultrareview merge base対応）

該当なし（直近 7 日間の X 投稿では、これらの個別機能に関する個人ユーザーの実体験・感想・Tips は確認できませんでした）。

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
