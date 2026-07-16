---
title: "Claude Code v2.1.211公開、権限偽装対策とBedrock課金バグ修正"
summary: "Claude Code v2.1.211がリリースされ、権限プレビューの文字偽装無害化、auto modeでのフックask尊重、「常に許可」ルールのリポジトリルート保存、Bedrock/Vertex等のプロンプトキャッシュ課金リグレッション修正などを追加。X反応はworktreeをまたぐ再承認不要化への好評が中心で、一部にアップデート後のスキル挙動不安定の指摘も。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-17

features:
  - "Claude Code v2.1.211リリース"
  - "--forward-subagent-text フラグ / CLAUDE_CODE_FORWARD_SUBAGENT_TEXT"
  - "権限プレビューのセキュリティ強化（文字偽装無害化）"
  - "auto modeでのPreToolUseフック ask 決定の尊重"
  - "「常に許可」権限ルールのリポジトリルート保存"
  - "/clear によるセッションコストカウンターのリセット"
  - "/usage-credits の組織管理者送信前確認"
  - "Vimモード s / S のNORMALモード対応"
  - "整数系環境変数の科学的記数法・桁区切り対応"
  - "Bedrock/Vertex/Mantle/Foundryのプロンプトキャッシュ課金リグレッション修正"
codex_review: "派手な新機能より、権限表示の偽装対策と課金リグレッション修正を前面に出したのが健全で、いまのAIコーディング市場ではむしろこういう地味な整備のほうが信頼を積む。反面、スキル不安定報告が残るなら評価は一段階保留です。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.211

多数のバグ修正に加え、以下の機能追加・改善が含まれます。前回の v2.1.210 以降の新規分です。

- **`--forward-subagent-text` フラグ / `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` 環境変数**: stream-json 出力にサブエージェントのテキストと思考（thinking）を含められるようになりました。
- **権限プレビューのセキュリティ強化**: チャットチャネルに中継される権限プレビューが、双方向オーバーライド文字・ゼロ幅文字・類似引用符を無害化するよう修正。ツール入力によって承認メッセージの見た目を改ざんできないようにしました。
- **auto mode でのフック `ask` 尊重**: 非サンドボックス Bash について、PreToolUse フックの `ask` 決定を auto mode が上書きせず、最低でもプロンプト表示に固定するよう修正しました。
- **「常に許可」ルールのリポジトリルート保存**: git worktree 内で付与した「always allow」承認がリポジトリルートに保存され、セッションや worktree をまたいで永続化するようになりました。
- **`/clear` がコストカウンターをリセット**: `/clear` 後、ステータスラインのコスト表示が $0 から再開します。
- **`/usage-credits` の送信前確認**: 組織管理者へリクエストを送る前に確認を求めるようになりました。
- **Vim モード `s` / `S` の NORMAL モード対応**: 文字/行の置換が vim 準拠で NORMAL モードでも動作します。
- **整数系環境変数の記法拡張**: タイムアウト・トークン予算・リトライ回数などが `1e6` や `64_000` のような科学的記数法・桁区切り表記を受け付けるようになりました。
- **プロンプトキャッシュ課金リグレッション修正**: Bedrock・Vertex・Mantle・Foundry で、末尾のシステムコンテキストブロックが毎リクエスト新規入力トークンとして課金される不具合を解消しました。
- **Claude in Chrome**: スクリーンショットの `save_to_disk` が画像をディスクに書き込みパスを返すよう修正（従来は何もしていませんでした）。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)

## コミュニティの反応

### Claude Code v2.1.211リリース

#### ポジティブ

> v2.1.211で git worktree をまたいでも「常に許可」がリポジトリルート単位で永続化され、複数worktreeユーザーの再承認の手間が大幅に減った。 — @ai_hack_dx [出典](https://x.com/ai_hack_dx/status/2077597107763228805)

> v2.1.211で Obsidian 連携がさらに実用的になり、文系でもメモ横断整理・更新の操作役として効果を発揮。 — @ai28hide [出典](https://x.com/ai28hide/status/2077857783987515780)

#### ネガティブ

> v2.1.211更新後に claude-api スキルが勝手に使われたり、claude-code-guide スキルが失敗するなど挙動が不安定になった。 — @minazo86 [出典](https://x.com/minazo86/status/2077622869748859327)

> fable使用時に新セッションでプラン確認→コード更新を繰り返すと5時間制限が10分で尽きるバグが発生し、以前より使いにくくなった。 — @edres_aldailami [出典](https://x.com/edres_aldailami/status/2077824635467710749)

#### Tips

> セッション終了時に CLAUDE.md を更新する習慣で次回起動時の文脈保持が劇的に改善し、作業効率が向上した。 — @hunt3rrdev [出典](https://x.com/hunt3rrdev/status/2077830631845929053)

> Obsidian vault をプロジェクトフォルダに置き MCP 接続後、architecture.md 生成→依存関係リンク化→active_context.md 更新の3プロンプトで長期記憶システムを構築できる。 — @Adea0x [出典](https://x.com/Adea0x/status/2077834003290423334)

Qiita では、v2.1.211を「新機能追加より安全性と正確な課金を守る修正が中心の、地味だが重要度の高いリリース」として、権限確認ダイアログの文字偽装対策と Bedrock 課金バグ修正の3点に絞って解説する記事が公開されています（[picnic](https://qiita.com/picnic/items/fabaa6f75da6cf7c2742)）。

### --forward-subagent-text フラグ / CLAUDE_CODE_FORWARD_SUBAGENT_TEXT

#### Tips

> v2.1.211の `--forward-subagent-text` を使えばサブエージェントの内部思考まで JSON 出力でき、迷走時にプロセスを即座に止める制御ループを組める。 — @aria_ai_tools [出典](https://x.com/aria_ai_tools/status/2077753113088589882)

### 「常に許可」権限ルールのリポジトリルート保存

#### ポジティブ

> v2.1.211で「always allow」の許可ルールがリポジトリルート保存に変わり、worktree やセッションをまたいで引き継がれるようになった。日常使いの足場が固まった良いアップデート。 — @shima0hide [出典](https://x.com/shima0hide/status/2077571281621577779)

#### Tips

> settings.local が v2.1.211以降リポジトリルートに解決されるようになったため、1つの権限ファイルで全 worktree をカバー可能。並行エージェント運用に便利。 — @sudomikexe [出典](https://x.com/sudomikexe/status/2077775282229084434)

### Bedrock/Vertex/Mantle/Foundryのプロンプトキャッシュ課金リグレッション修正

#### ポジティブ

> Anthropic が v2.1.211で、末尾システムコンテキストブロックが毎リクエスト新規入力トークンとして課金される Bedrock/Vertex/Mantle/Foundry 向けのプロンプトキャッシュ課金リグレッションを修正したと共有。 — @mordiaky [出典](https://x.com/mordiaky/status/2077539273834729610)

関連して Zenn では、Claude Code でモデルやエフォートを切り替えるたびに積み上げたプロンプトキャッシュを捨てて会話履歴の再計算費用を払い直している、という「プロンプトキャッシュは通信ではなく計算を省いている」ことに着目した解説記事が公開されています（[ながたく](https://zenn.dev/takna/articles/claude-code-model-switch-cache-cost)）。

### その他の機能（auto modeフック尊重 / 権限プレビュー強化 / /clear コストリセット / /usage-credits 確認 / Vim s・S / 環境変数記法 / Chrome save_to_disk）

該当なし（直近7日間の X 投稿では、これらの個別機能に関する個人ユーザーの実体験・感想・Tips は確認できませんでした。v2.1.211 の該当修正は7月15日頃のリリースのため、個人レベルの反応がまだ広がっていない状況です）

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
