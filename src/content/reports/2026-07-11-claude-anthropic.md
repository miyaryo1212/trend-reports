---
title: "Claude Code v2.1.206公開、/cd補完・commit-push-pr改善・多数のバグ修正"
summary: "Claude Code v2.1.206（2026-07-10）がリリース。/cd にパス候補補完、/doctor に CLAUDE.md 縮約チェック、/commit-push-pr の設定済みpush remoteへの自動許可、Gateway /login の公開エンドポイント対応など機能追加に加え、MCP のサーバー単位タイムアウト無視やOAuth再認証など多数のバグ修正を含む。X上では commit-push-pr の自動化とMCPタイムアウト修正、背景アップグレードに好意的な声が見られた。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-07-11

features:
  - "Claude Code v2.1.206公開"
  - "/cd にディレクトリパス候補補完"
  - "/doctor に CLAUDE.md 縮約チェック"
  - "/commit-push-pr が設定済みpush remoteへ自動許可"
  - "Gateway /login が公開ゲートウェイ対応"
  - "EnterWorktree の確認プロンプト"
  - "バックグラウンドエージェントの背景アップグレード"
  - "/code-review 品質改善"
  - "MCP request_timeout_ms 不具合修正"
  - "agents view 改善"
codex_review: "派手さは薄いが、MCPタイムアウト修正とバックグラウンド更新は実運用の摩擦を減らす本命だと思う。逆に `/cd` 補完のような改善は便利でも、業界全体への波及はまだ限定的です。"
codex_importance: 3
---

## 公式アップデート

前回レポート時点の最新は **v2.1.205**（2026-07-08）でしたが、その後 **v2.1.206**（2026-07-10）がリリースされました。新コマンド機能の追加と多数のバグ修正を含む更新です。以下は本日新規の差分です。

### Claude Code v2.1.206

コマンド・機能追加:

- **`/cd` にディレクトリパス候補補完**: `/add-dir` と同様に、`/cd` でもディレクトリパスの候補を提示するようにした。
- **`/doctor` に CLAUDE.md 縮約チェック**: コードベースから導出可能な内容を削ることで、チェックイン済みの `CLAUDE.md` をスリム化するよう提案するチェックを追加した。
- **`/commit-push-pr` が設定済みpush remoteへ自動許可**: `origin` に加え、リポジトリに設定された push remote（`remote.pushDefault`、または単一remote時はそのremote）への `git push` を自動許可するようにした。
- **Gateway `/login` が公開ゲートウェイ対応**: Anthropic運営の公開ゲートウェイエンドポイントを `/login` でサポートするようにした。
- **`EnterWorktree` の確認プロンプト**: プロジェクトの `.claude/worktrees/` 外のworktreeに入る前に、確認を求めるようにした。
- **バックグラウンドエージェントの背景アップグレード**: Claude Code の更新直後、バックグラウンドエージェントがすぐに背景で新バージョンへアップグレードするようにし、アタッチ時に発生していた遅いstale-sessionアップグレードを解消した。

品質・UI:

- **`/code-review` 品質改善**: claude-opus-4-8 での `/code-review` の指摘品質を、全effortレベルで改善した。
- **agents view 改善**: ステータス列が64文字で切り詰めずに端末幅をフルに使うようにした。あわせて、Ctrl+Xで完了セッションを恒久削除、セッションの二重表示を解消、削除したバックグラウンドジョブは削除済みのまま維持するよう変更した。

主なバグ修正:

- **MCP `request_timeout_ms` 不具合修正**: `--mcp-config` や `.mcp.json` で設定したサーバー単位の `request_timeout_ms` が無視され、長時間のMCPツール呼び出しが新規セッションで60sのデフォルトで切れてしまう問題を修正した。
- **OAuth MCP再認証の修正**: OAuth MCP サーバーが、一度のトークンリフレッシュ失敗後に手動再認証を要求してしまう問題を修正した。
- **`/model` ピッカー表示の修正**: 行に表示されるモデル名と異なるモデルの価格が表示される問題を修正し、料金を請求しないプロバイダでのファーストパーティ定価の提示を停止した。
- **期限切れログインのエラー改善**: ログイン期限切れ時に、`/login` を促す代わりに「選択されたモデルに問題があります」という誤解を招くエラーで全モデルが失敗する問題を修正した。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.206)

## コミュニティの反応

> 本日抽出した新機能のうち、X検索で個人ユーザーの実体験・感想がヒットしたのは「v2.1.206 全体」「`/commit-push-pr` 自動許可」「バックグラウンドエージェントの背景アップグレード」「MCP `request_timeout_ms` 修正」に限られます。`/cd` 補完・`/doctor` の CLAUDE.md 縮約チェック・Gateway `/login`・`EnterWorktree` 確認・`/code-review` 品質改善・agents view 改善は、直近1週間で個人の実体験投稿を確認できませんでした（機能追加が7月9〜10日と非常に新しく、公式/非公式のchangelog転載が中心）。

### Claude Code v2.1.206 公開

#### ポジティブ

> Claude Code に見出し積層検知のゲートを追加したところ、コード生成→テスト→ドキュメント更新まで一通りやってくれて便利だった。 — @anpan_rinrinrin [X](https://x.com/anpan_rinrinrin/status/2075552867620925861)

> デスクトップ版にin-appブラウザが追加され、docsやdesignsを直接読み込んで操作できるのがsolidなアップデート。 — @alihassan_dev [X](https://x.com/alihassan_dev/status/2075673880673583602)

#### ネガティブ

> 最近は codex の方がTODOリスト作成やTDD、レビューまでやってくれて優位。Claude Code でも同じ機能が欲しい。 — @error_401 [X](https://x.com/error_401/status/2075672902150897936)

#### Tips

> `/EFFORT XHIGH` で難しい問題を強化したり、`~/.claude/` に memory を置いたり、Screenshotで UIバグを即理解させるなど、ワークフローが変わる工夫をまとめている。 — @AnandButani [X](https://x.com/AnandButani/status/2074134368503636199)

> Stop hook でテストを毎回走らせ、`/goal` と subagent レビュー、CLAUDE.md ルールでバグを防ぐ「4-loop」セットアップが有効。 — @PrajwalTomar_ [X](https://x.com/PrajwalTomar_/status/2074107601382691269)

### /commit-push-pr が設定済みpush remoteへ自動許可

#### ポジティブ

> エージェントが作業終了後に commit→push→ドラフトPR作成まで自動で完了し、人間は承認するだけになった。 — @TMao710593 [X](https://x.com/TMao710593/status/2074833328230777087)

> 声だけで Claude Code を操作し、リポジトリの pull から作業ログの commit & push までキーボードをほぼ触らず完了できた。 — @koedesk [X](https://x.com/koedesk/status/2074659234688676214)

#### Tips

> v2.1.206 で `/commit-push-pr` が push先remote（`remote.pushDefault` 含む）への `git push` を自動許可するよう改善された。 — @masayan_ai_hack [X](https://x.com/masayan_ai_hack/status/2075487296720388309)

### バックグラウンドエージェントの背景アップグレード

#### ポジティブ

> 更新後、バックグラウンドエージェントが背景で自動アップグレードされるようになり、従来のアタッチ時の低速更新問題が解消。attach時の待ち時間がなくなり、CIや長時間タスクで助かる。 — @haboshiastra [X](https://x.com/haboshiastra/status/2075600141919420693)

### MCP request_timeout_ms 不具合修正

#### ポジティブ

> MCPのサーバー単位タイムアウト（＋OAuth/スコープ周り）の地味なchangelog修正こそ、MCPをデモではなく本物の配管に感じさせるものだ。 — @whitebird004 [X](https://x.com/whitebird004/status/2075685239876460962)

### /cd にディレクトリパス候補補完

該当なし

### /doctor に CLAUDE.md 縮約チェック

該当なし

### Gateway /login が公開ゲートウェイ対応

該当なし

### EnterWorktree の確認プロンプト

該当なし

### /code-review 品質改善

該当なし

### agents view 改善

該当なし

## ソース

- [GitHub - Claude Code Releases (v2.1.206)](https://github.com/anthropics/claude-code/releases/tag/v2.1.206)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
