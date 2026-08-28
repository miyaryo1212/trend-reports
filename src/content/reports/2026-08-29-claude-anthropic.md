---
title: "v2.1.251でモデル切替フック追加、権限バイパス修正"
summary: "Claude Code v2.1.251 が公開され、PreModelSwitch / PostModelSwitch フックイベント、Remote Control へのサブエージェント実況ストリーミング、/usage の Spend limit バーと /cost のプロンプトキャッシュ行が入りました。シンボリックリンク経由で承認外の場所を読み書きできた問題など、セキュリティ修正も多数含まれます。前日の v2.1.248 では --restricted モードとエージェント単位のキャッシュTTLが追加されました。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-08-29

features:
  - "Claude Code v2.1.251"
  - "PreModelSwitch / PostModelSwitch フックイベント"
  - "Remote Control へのサブエージェント実況ストリーミング"
  - "/usage の Spend limit バー"
  - "/cost のプロンプトキャッシュ行"
  - "シンボリックリンク経由の権限バイパス修正"
  - "/effort のモデル別保存"
  - "CLAUDE_CODE_SUBAGENT_MODEL の挙動変更"
  - "Enterprise シート契約の既定モデルを Opus 5 に変更"
  - "Claude Code v2.1.248"
  - "--restricted / CLAUDE_CODE_RESTRICTED=1"
  - "experimental.cacheTtl (エージェント frontmatter)"
  - "Workflow ツールのプロンプト軽量化"
  - "毎時発生していたプロンプトキャッシュミスの修正"
  - "自動化された研究者によるアライメント失敗の緩和"
codex_review: "機能追加より、権限バイパス修正と`--restricted`の整備が本丸に見える。派手さは薄いが、AIコーディング環境が“便利な玩具”から“業務で預けられる道具”へ寄る局面として地味に重要だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.251

2026-08-28 公開。フック・可視化・セキュリティ修正を中心とした大型リリースです。

**追加**

- **PreModelSwitch / PostModelSwitch フックイベント**: モデル切替をブロック・確認・注記できるフックが追加されました。あわせて `SessionStart` の resume フックが、セッションの陳腐化度と再キャッシュの推定コストを受け取るようになりました。
- **Remote Control へのサブエージェント実況ストリーミング**: フォアグラウンドのサブエージェントのツール呼び出しと結果を Remote Control クライアントへライブ配信します。既定であるバックグラウンドのサブエージェントは従来どおりステータスのみの表示です。
- **`/usage` の Spend limit バー**: 支出上限が設定された Claude apps ゲートウェイ配下の開発者向けに、`/usage` へ Spend limit バーを追加。ステータスライン用に `rate_limits.spend_limit` フィールドも提供されます。
- **`/cost` のプロンプトキャッシュ行**: セッション単位でヒット率・ミス・再キャッシュされたトークン数・warm/cold を表示します。ステータスラインスクリプト向けに `prompt_cache` オブジェクトも用意されました。
- `claude --help` に `attach` / `logs` / `stop` / `respawn` / `rm` を追加。実行中のバックグラウンドセッションに対する `--resume` のメッセージが、正確な `claude attach <id>` コマンドを示すようになりました。

**セキュリティ関連の修正**

- **シンボリックリンク経由の権限バイパス修正**: 権限チェックの後に作業ディレクトリ内でシンボリックリンクが差し替えられると、ファイルツール (Read / Write / Edit) が承認外の場所を読み書きできてしまう問題を修正しました。
- マーケットプレイスのエントリで宣言されたプラグインコマンドが、プラグインディレクトリの外を指せた問題を修正。該当パスはパストラバーサルエラーとして拒否されます。
- プロジェクト設定から詳細なベータトレーシングや生の API ボディログを有効化できた問題、および管理設定やホストアプリが固定した OTLP コレクタを低スコープのベータトレーシングエンドポイントが迂回できた問題を修正。
- Workflow ツールが、権限チェックの前にセッションの読み取り許可外の `scriptPath` を読み (かつエラー内で引用し) ていた問題を修正。
- Grep と Glob が、シンボリックリンク経由の検索パスで到達したファイルに `Read(...)` の拒否ルールを適用していなかった問題を修正。
- Bash の権限チェックが、整数シェル変数への算術式の代入 (`OPTIND=1/0`、`RANDOM=2+2` など) を自動承認していた問題を修正。今後は承認を求めます。

**挙動の変更**

- **`/effort` のモデル別保存**: 既定の effort レベルをモデルごとに保存するようになり、モデルを切り替えても各モデルの設定が維持されます。
- **`CLAUDE_CODE_SUBAGENT_MODEL` の挙動変更**: すべてを上書きするのではなく、サブエージェントの既定モデルを指定する変数になりました。エージェント定義の `model:` と spawn 時の明示指定が優先されます。
- **Enterprise シート契約の既定モデルを Opus 5 に変更**: 他のプレミアムプランと同じ扱いに統一されました。
- Claude in Chrome のブラウザ操作を常に Claude Code の権限チェック経由に変更。テレメトリ無効のセッションでも同様で、従来 Chrome 拡張側のプロンプトを使っていた経路が置き換わります。
- `/radio` を Bedrock / Vertex AI / Foundry / Claude Platform on AWS、およびテレメトリ無効時にも利用可能に変更。
- プロジェクトレベルの `.claude/settings.json` の `env` から `CLAUDE_CONFIG_DIR`、`CLAUDE_CODE_TMPDIR`、`TMPDIR`/`TMP`/`TEMP` を設定できないよう変更。シェル・ユーザー設定・管理設定で指定します。
- 使用頻度の低い6言語 (1c, gml, isbl, mathematica, maxima, sqf) のシンタックスハイライトを削除し、バイナリが 2.5MB 縮小。ネイティブバイナリ全体では約5MB 小さくなりました。

[Claude Code Releases — v2.1.251](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)

### Claude Code v2.1.248

2026-08-27 公開。制限モードとキャッシュ制御が中心です。

- **`--restricted` / `CLAUDE_CODE_RESTRICTED=1`**: コマンドやコードを実行する組み込みツールと `WebFetch` を削除し (`--tools` で明示指定した場合を除く)、ファイルツールを作業ディレクトリ内に限定、`bypassPermissions` を拒否、ユーザー・プロジェクト・ローカルの設定ファイルを無視する制限モードです。
- **`experimental.cacheTtl` (エージェント frontmatter)**: サブエージェントの TTL 設定が未構成のときに使われる、エージェント単位のプロンプトキャッシュ TTL (`"5m"` または `"1h"`) を指定できます。
- **Workflow ツールのプロンプト軽量化**: ツール説明を約5.7kトークンから約1kトークンへ削減し、スクリプト記述のリファレンスを同梱の `workflow-authoring` スキルへ分離しました。
- **毎時発生していたプロンプトキャッシュミスの修正**: OAuth トークン更新後にツール定義が再レンダリングされ、長時間セッションでおよそ1時間に1回のキャッシュミス (と拡張思考コンテキストの消失) が起きていた問題を修正しました。`ScheduleWakeup` のツール定義がセッションと `--resume` の間で変化し、使用量オーバレージ状態のアカウントで再開時にフルキャッシュミスとなる問題も修正されています。
- `claude self-hosted-runner --client-label <label>` (または `SELF_HOSTED_RUNNER_CLIENT_LABEL`) でランナーが登録するラベルを上書きできるようになりました (既定はホスト名)。
- Bedrock / Vertex / Foundry、およびテレメトリ無効時にも、同一マシン上のセッション間メッセージング (`SendMessage` / `ListAgents`) が利用可能になりました。

[Claude Code Releases — v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)

### 自動化された研究者によるアライメント失敗の緩和 (Anthropic Research)

2026-08-28 公開。Claude が自律的に手法を開発・改良し、10種類の失敗カテゴリにおいて能力を維持したまま安全性のギャップを縮小できることを実証したとする研究です。

## コミュニティの反応

X/Twitter 検索は Step 1 で抽出した全15トピックについて実施しました。反応が確認できたのは **v2.1.251**、**Remote Control へのサブエージェント実況ストリーミング**、**v2.1.248**、**`--restricted`**、**`experimental.cacheTtl`** の5件で、残りは該当なしです。とくに `/usage` の Spend limit バー、`/cost` のプロンプトキャッシュ行、`/effort` のモデル別保存、`CLAUDE_CODE_SUBAGENT_MODEL` の挙動変更、Enterprise の既定モデル変更、アライメント研究については、個人ユーザーの実体験投稿は0件でした。

### Claude Code v2.1.251

リリース全体としては好意的な受け止めで、ネガティブ・Tips に該当する投稿はありませんでした。

#### ポジティブ

> `/cost` でプロンプトキャッシュのヒット率が確認でき、attach/logs などの操作系コマンドが充実して使い勝手が良くなった。サブエージェントの動作がリアルタイムで見えるようになったのが地味に嬉しい — @aria_ai_tools [出典](https://x.com/aria_ai_tools/status/2093408136594149713)

> モデル切替フックの追加や symlink 保護が実用的で、制御されたエージェント展開に役立ちそう — @TechWithSarah [出典](https://x.com/TechWithSarah/status/2093427649087513020)

### Remote Control へのサブエージェント実況ストリーミング

実況ストリーミング自体への言及はなく、Remote Control の導線や運用まわりの投稿が集まっています。

#### ネガティブ

> 手順メモどおり `/rc` と打っても候補に出てこない。正解はコマンドではなく設定で、Claude Code の「新しいセッションをリモートコントロールに接続する」だった — @renkon40 [出典](https://x.com/renkon40/status/2093252443140161890)

#### Tips

> zmx を入れて Claude Code に `/zmx` スキルを作らせ、スマホ・デスクトップアプリから `/zmx claude skip permissions` を実行。Remote Control を既定で有効にしておくとリモートセッションを長時間維持できる — @al3rez [出典](https://x.com/al3rez/status/2093361918404690413)

> 新しいサブエージェントを立てる代わりに `/subtask` を使うとセッションをフォークしてプロンプトキャッシュを共有できる。バックグラウンドで走らせればツール呼び出しは文脈に載らず結果だけ返る。ファイルを編集するフォークには `isolation: "worktree"` を渡して衝突を避ける — @DeRonin_ [出典](https://x.com/DeRonin_/status/2093046790471745935)

> Claude Code のセッションを流れ図としてリアルタイムに描くツール zoetrope。メインエージェントがどのサブエージェントを起動し、それぞれがどのツールを何回叩いて何秒かかったかをターミナル内で眺められる — @L_go_mrk [出典](https://x.com/L_go_mrk/status/2092902186862907820)

日本語コミュニティでも Remote Control の実機検証記事が出ています。

> `claude rc` を打つとそのマシンがデバイスとしてアプリに常駐登録される。セッションを1本ずつ共有する方式とは別で、1デバイスで既定32セッションまでホストするサーバーになる。手持ちの4台 (Windows 2台 / Linux / Mac mini) を全部登録して、公式ドキュメントに書いてあることと書いていないことを実機で確認 — @Tom [Remote Control でスマホから Claude Code を起動できるようになり、自前のリモート運用はどこが置き換わったか](https://zenn.dev/marvelousu/articles/claude-code-rc-device-mode)

### Claude Code v2.1.248

#### ポジティブ

> `--restricted` モードが multi-agent システムで特に有用。ランタイムレベルで capability isolation を実現し、親エージェントが子に過剰な権限を与えずに済む — @null_founder [出典](https://x.com/null_founder/status/2093161863341298168)

### --restricted / CLAUDE_CODE_RESTRICTED=1

今回もっとも反応が多かったトピックです。ネガティブに該当する投稿はありませんでした。

#### ポジティブ

> `--restricted` でスキャナーを安全にロックダウンして実行中。例外なしで、信頼できないデータにも安心して向けられる — @Elenkova_dxb [出典](https://x.com/Elenkova_dxb/status/2093420038598328515)

> 「モデルに頼らず機能を物理的に無効化する」というセキュリティモデルが明確になった — @anilkalm [出典](https://x.com/anilkalm/status/2093387669179138060)

#### Tips

> `--restricted` (または `CLAUDE_CODE_RESTRICTED=1`) で最低権限エージェントを実現する。コマンド実行・WebFetch の除去、作業ディレクトリ内へのファイル限定、`bypassPermissions` の拒否、設定ファイルの無視を活かし、Investigator / Reviewer / Implementer の3層構成でのテストを推奨 — @null_founder [出典](https://x.com/null_founder/status/2093161863341298168)

> 未知のリポジトリ向けに `--restricted` を使い、Read/Glob/Grep のみに絞る実行例と設定ファイル無視の条件を整理。サブエージェントの cacheTtl 設定も併用が有効 — @hyu001225 [出典](https://x.com/hyu001225/status/2093363895713038677)

> `--restricted` でシェル・コード実行・WebFetch を剥奪しつつ、ファイルアクセスは作業ディレクトリ内に限定。リポジトリにエージェントを向ける際の安全策として活用 — @LLMERDOTCOM [出典](https://x.com/LLMERDOTCOM/status/2093401167900647656)

### experimental.cacheTtl (エージェント frontmatter)

サブエージェントのキャッシュ TTL については、先行する `subagentPromptCacheTtl` 設定の検証報告が出ています。ネガティブ・Tips に該当する投稿はありませんでした。

#### ポジティブ

> v2.1.243 の `subagentPromptCacheTtl` 検証で、サブエージェントのキャッシュ TTL を5分固定から `"1h"` へ延長できた点が便利 — @__su888 [出典](https://x.com/__su888/status/2092734834481234204)

> `promptCacheTtl` 設定により、メイン会話は1時間キャッシュ・サブエージェントは5分のまま使い分けられるようになり、`/loop` の暴走発見が楽そう — @kyusuya [出典](https://x.com/kyusuya/status/2092769663738597884)

## ソース

- [Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
