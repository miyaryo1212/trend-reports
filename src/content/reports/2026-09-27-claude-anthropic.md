---
title: "v2.1.283 リリース、auto モードが既定に"
summary: "Claude Code v2.1.283 が公開され、モデル管理設定 (deniedModels / availableModelsMatch)、旧モデル向け記述を監査する /doctor prompt-audit、MCP 画像のファイル保存などが追加されました。サードパーティプロバイダーまたはテレメトリ無効時の対話セッションは auto モードで開始するよう既定が変更され、claude -p の起動も高速化されています。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-09-27

features:
  - "[Claude Code] v2.1.283 リリース"
  - "[Claude Code] /doctor prompt-audit (/checkup prompt-audit)"
  - "[Claude Code] auto モードの既定変更"
  - "[Claude Code] deniedModels / availableModelsMatch 管理設定"
  - "[Claude Code] 起動・初回応答の高速化"
  - "[Claude Code] MCP ツール画像のファイル保存"
  - "[Claude Code] claude-ai 名前空間予約の撤回"
  - "[Claude Code] PowerShell ツールの破壊的削除ガード"
  - "[Claude Code] x-claude-code-prompt-id ゲートウェイヒントヘッダー"
  - "[Claude Code] /tasks と各種ピッカーのリスト改善"
  - "[Claude Tag] Channels Claude can search 管理設定"
  - "[Code Review] 時間切れレビューの課金修正"
  - "[Claude Code] /model ピッカーの Opus 表記変更"
codex_review: "autoモードの既定化は、エージェントを「使う」段階から「任せる」段階へ押す変更で、便利さと誤操作の境界を左右する点が面白い。一方、モデル許可リストや監査機能は企業導入に効く堅実な整備だが、業界全体を揺らす更新ではない。"
codex_importance: 3
---

## 公式アップデート

### [Claude Code] v2.1.283 リリース (2026-09-25)

MCP・プラグイン・vim モード・起動高速化を含む大型更新です。主な変更点を以下に挙げます。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.283)

#### /doctor prompt-audit (/checkup prompt-audit)

CLAUDE.md・スキル・エージェント・コマンドを「旧モデル向けに書かれたプロンプトパターン」の観点で監査するコマンドが追加されました。Claude Code 設定に対する監査では、古いパス・古いコマンド・矛盾する指示ファイルがレポート冒頭に来るよう改善され、Claude Code が公式にドキュメント化している thinking キーワードは保持されます。

#### auto モードの既定変更

サードパーティプロバイダー経由、またはテレメトリ無効の対話セッションで、権限モードが未設定の場合は **auto モードで開始** するようになりました。`permissions.defaultMode` の設定は従来どおり優先されます。

#### deniedModels / availableModelsMatch 管理設定

- `availableModelsMatch` に `"exact"` を指定すると、`availableModels` のエントリがそこに書かれたモデルバージョンのみを許可するため、新リリースはリストに追加されるまでブロックされたままになります
- `deniedModels` 管理設定で、`availableModels` が許可しているモデルでも個別にブロックできます

#### 起動・初回応答の高速化

- `claude -p` と Claude Code Remote が対話 UI を読み込まなくなり、auto モード分類器のルールと Artifact ツールは起動時ではなく初回使用時にロード
- 事前接続済みの API 接続を再利用することで初回リクエストのレイテンシを改善
- セッション初回応答の末尾で走っていたパターンコンパイル処理を、応答のストリーミング中に実行するよう変更

#### MCP ツール画像のファイル保存

MCP ツールが返した画像がファイルにも保存されるようになり、Bash・Read などのツールから開けるようになりました。

#### claude-ai 名前空間予約の撤回

v2.1.282 で入った `claude-ai` 名の予約が撤回され、同名のスキル・コマンド・ワークフロー・MCP サーバーのスキル/プロンプトが再び読み込まれます。`Skill(claude-ai:*)` ルールは通常のプレフィックスルールとして扱われます。

#### PowerShell ツールの破壊的削除ガード (Windows)

PowerShell ツール経由の `cmd /c rd`・`rmdir`・`del`・`erase` が、`Remove-Item` なら拒否するドライブルート・ホームフォルダなどを削除できてしまう問題が修正されました。

#### x-claude-code-prompt-id ゲートウェイヒントヘッダー

1つのユーザープロンプトに紐づくリクエストを LLM ゲートウェイ側でグループ化できる `x-claude-code-prompt-id` ヘッダーが追加されました。`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` でオプトインします。

#### /tasks と各種ピッカーのリスト改善

`/tasks` の各行にステータスアイコンと名称・内容が表示され、タスクが多い場合もタイトルとキーヒントが画面に残ります。`/help`・`/hooks`・`/memory`・`/plugin` など各種ピッカーもページキー・マウスホイール・クリックに対応しました。

#### [Claude Tag] "Channels Claude can search" 管理設定

Claude の Slack 検索対象を「Claude が追加済みのパブリックチャネル」に限定する管理設定が追加され、組織・ワークスペース・チャネル単位で指定できます。

#### [Code Review] 時間切れレビューの課金修正

制限時間に達して何も検証できずに終わったレビューが incomplete として扱われ、課金されず1回リトライされるようになりました。

#### [Claude Code] /model ピッカーの Opus 表記変更

`/model` ピッカーの Opus 行と Default モデル名から、既定で 1M コンテキストを持つ Opus について "(1M context)" の表記が外れました。コンテキストウィンドウ自体は変更ありません。

## コミュニティの反応

### [Claude Code] auto モードの既定変更

#### ポジティブ

> Auto mode のデフォルト化で1人でも小チーム並みの開発速度が出せるようになった。ただし安全策として deny ルールをしっかり書くのが肝。 — @r1VeN2k [出典](https://x.com/r1VeN2k/status/2103895005777559851)

#### ネガティブ

> Claude Code の auto mode がブロックしすぎて夜通し動かない。Codex の auto-review の方が実用的。 — @xskobayashi [出典](https://x.com/xskobayashi/status/2103854099863380005)

#### Tips

> 9月のアップデートで API/Enterprise やサードパーティゲートウェイ利用時に分類器がサーバー側デフォルトになり、`/status` で確認できる。許可ルールや無人運用時の挙動変更に注意。 — @aiinfo_x [出典](https://x.com/aiinfo_x/status/2103845043031232699)

### [Claude Code] deniedModels / availableModelsMatch 管理設定

#### ポジティブ

**該当なし**

#### ネガティブ

**該当なし**

#### Tips

> v2.1.283 の新機能として、`availableModelsMatch='exact'` で指定バージョン以外をブロックし、`deniedModels` で特定モデルを拒否できる点と、`/doctor prompt-audit` の使い方を紹介。 — @johnnynelai [出典](https://x.com/johnnynelai/status/2103844035798442233)

> v2.1.283 で `availableModelsMatch` を exact に設定して新リリースを自動許可せず、`deniedModels` でモデルを拒否する方法を解説。 — @hotate_lab [出典](https://x.com/hotate_lab/status/2103806361348018244)

> `availableModels` はファミリー許可ではない。exact 指定や `deniedModels` との違いを理解して使うべき。 — @zemnanet [出典](https://x.com/zemnanet/status/2103681774241104032)

### [Claude Code] MCP ツール画像のファイル保存

#### ポジティブ

> Claude Code でバイナリファイル (Excel など) が読めない問題を MCP Server で解決した。PDF や画像はもともと読めるようになっている。 — @kmrb_works [出典](https://x.com/kmrb_works/status/2101485202556219494)

#### ネガティブ

**該当なし**

#### Tips

> MCP を使って Claude / Codex 両対応のエージェントハーネスを構築し、画像・動画表示やファイル添付、sub-agent 起動を実現するアイデアを共有。 — @BennyKokMusic [出典](https://x.com/BennyKokMusic/status/2101552520154042424)

### [Claude Code] v2.1.283 リリース / /doctor prompt-audit / 起動・初回応答の高速化

X 検索では、これらのトピックに直接言及した個人ユーザーの実体験投稿は**該当なし**でした。

### 日本語コミュニティ

v2.1.283 のリリース直後ということで、変更点の整理記事が集中しています。特に auto モード既定化とモデル管理設定に注目が集まっています。

- [2026-09-26 の公式ドキュメント更新：v2.1.283 で auto モードが全セッションのデフォルトに](https://qiita.com/akihidem/items/7a5c98833b79bd37d33e) (Qiita / akihidem) — auto モードが既定の権限モードになった点、スキルの名前空間と claude.ai 同期ルールの明文化、Windows での削除操作保護の強化
- [Claude Code v2.1.283まとめ:モデル管理強化とPowerShell重大バグ修正に注意](https://qiita.com/picnic/items/2362e6157c1ed56391f0) (Qiita / picnic) — 企業でのモデル運用を厳密に管理する新しい管理設定、`/doctor prompt-audit`、権限モード既定挙動の変更
- [Claude Code 開発者が注目している5つのアップデート（v2.1.280 - v2.1.283）](https://qiita.com/NaokiIshimura/items/6cbf554ecbf81a43e3c5) (Qiita / NaokiIshimura) — 公式アナウンスや GitHub Issue 上の実インシデント報告が確認できた変更を5つ選んで深掘り
- [今週の Claude Code・Codex・Gemini CLI 変更点まとめ(2026年9月27日週)](https://qiita.com/aicoding-guide/items/4f153113509e2730df34) (Qiita / aicoding-guide) — 他 CLI と横並びでの週次変更点整理
- [AIへの指示書に古いルールを残しても、新しい方が16回とも採られた。代わりに毎回8911トークン増えていた](https://zenn.dev/numarn/articles/claude-md-stale-rule-conflict-handson) (Zenn / numarn) — `prompt-audit` が扱う「古い記述」の実害をサンドボックス47回の実測で検証。効いていたのは古い記述の有無ではなく「どちらが現行かの明示」だったという結果

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Anthropic News](https://www.anthropic.com/news)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
