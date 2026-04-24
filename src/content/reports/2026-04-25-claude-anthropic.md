---
title: "v2.1.119で設定永続化・マルチプラットフォームPR対応、NEC協業発表"
summary: "Claude Code v2.1.119がリリースされ、/config設定の永続化やGitLab/Bitbucket PR対応を追加。AnthropicとNECが戦略提携し約3万人にClaude導入を発表。品質問題ポストモーテムへのコミュニティ検証記事も活発。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-25
features:
  - "[Claude Code v2.1.119] /config設定の永続化: テーマやエディタモード等の設定がsettings.jsonに保存され、プロジェクト/ローカル/ポリシーの優先順位に従うように"
  - "[Claude Code v2.1.119] --from-pr GitLab/Bitbucket/GitHub Enterprise対応: PRレビュー機能がGitHub以外のプラットフォームにも対応"
  - "[Claude Code v2.1.119] --print モードでエージェントのtools/disallowedToolsフロントマターを尊重: 対話モードと同じツール制限が適用"
  - "[Claude Code v2.1.119] PowerShellツールの自動承認: パーミッションモードでBashと同様に自動承認が可能に"
  - "[Claude Code v2.1.119] Hooks duration_ms追加: PostToolUse/PostToolUseFailureフックにツール実行時間が含まれるように"
  - "[Claude Code v2.1.119] サブエージェント/SDK MCP並列接続: MCP サーバー再構成時に直列ではなく並列で接続"
  - "[Claude Code v2.1.118] Vimビジュアルモード: v/Vキーによる選択・オペレータ・ビジュアルフィードバックを追加"
  - "[Claude Code v2.1.118] /usageコマンド統合: /costと/statsを/usageに統合、両コマンドはショートカットとして残存"
  - "[Claude Code v2.1.118] カスタムテーマ機能: /themeから名前付きテーマの作成・切替が可能、プラグインからもテーマ提供可能"
  - "[Claude Code v2.1.118] HooksからMCPツール直接呼び出し: type: \"mcp_tool\"でフックからMCPツールを実行可能に"
  - "[Claude Code v2.1.118] DISABLE_UPDATES環境変数: 手動updateを含む全アップデート経路を完全ブロック"
  - "[Claude Code v2.1.118] Auto mode $defaults対応: カスタムルールを組み込みリストに追加可能に（置換ではなく追加）"
  - "[Claude Code v2.1.118] claude plugin tagコマンド: プラグインのバージョン検証付きリリースタグ作成"
  - "[Anthropic] NEC協業発表: NECが約3万人にClaude/Claude Code/Claude Coworkを導入、Anthropic初の日本拠点グローバルパートナーに"
  - "[Anthropic] Claude Code品質問題ポストモーテム公開: reasoning effortデフォルト変更・キャッシュバグ・冗長性削減プロンプトの3件のバグを特定・修正"
  - "[Anthropic] 選挙セーフガード更新: 選挙期間中のClaudeの正確性・中立性確保のための対策を公開"
codex_review: "今回の本丸はNEC提携より、Claude Codeが運用の細部を着実に埋めてきた点だと思う。派手さは薄いが、設定永続化やマルチPR対応は“実験ツール”から“職場の標準装備”へ寄る地味に大きな前進だ。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.119

4月23日リリース。設定の永続化、マルチプラットフォームPR対応、MCP並列接続など、エンタープライズ運用を意識した改善が中心。大量のバグ修正も含まれる。

**新機能**
- `/config` 設定（テーマ、エディタモード、verbose等）が `~/.claude/settings.json` に永続化され、プロジェクト/ローカル/ポリシーのオーバーライド優先順位に参加
- `prUrlTemplate` 設定の追加。PRバッジのリンク先をGitHub以外のカスタムコードレビューURLに変更可能
- `CLAUDE_CODE_HIDE_CWD` 環境変数の追加。起動ロゴでの作業ディレクトリ表示を非表示に
- `--from-pr` がGitLabマージリクエスト、Bitbucketプルリクエスト、GitHub Enterprise PR URLに対応
- `--print` モードがエージェントの `tools:` / `disallowedTools:` フロントマターを尊重するように（対話モードと同一動作に）
- `--agent <name>` がビルトインエージェントの `permissionMode` を尊重するように
- PowerShellツールコマンドのパーミッションモードでの自動承認に対応（Bash同等）
- Hooks: `PostToolUse` / `PostToolUseFailure` の入力に `duration_ms`（パーミッションプロンプトやPreToolUseフックを除くツール実行時間）を追加
- サブエージェント/SDK MCP サーバー再構成時の接続が直列から並列に変更
- プラグインのバージョン制約によるピン留め時、最新の適合gitタグへ自動更新
- Vimモード: INSERTでのEscがキューイングされたメッセージを引き戻さないように改善
- スラッシュコマンドのサジェストでマッチした文字をハイライト表示
- `owner/repo#N` リンクがgitリモートのホストを参照するように（github.com固定ではなくなった）

**セキュリティ**
- `blockedMarketplaces` が `hostPattern` / `pathPattern` エントリを正しく強制するように修正

**バグ修正（主要なもの）**
- CRLFコンテンツ（Windowsクリップボード、Xcodeコンソール）の貼り付けで余分な空行が挿入される問題
- kittyキーボードプロトコルを使用するターミナルでの複数行ペースト時の改行消失
- Bashツール拒否時にGlob/Grepツールが消失する問題（ネイティブmacOS/Linux）
- フルスクリーンモードでツール完了時にスクロール位置が最下部に戻る問題
- MCP HTTP接続時のOAuth discoveryリクエストで非JSONボディが返された場合のエラー
- auto modeがplan modeを「Execute immediately」指示で上書きする問題
- Agent toolの `isolation: "worktree"` が前セッションのworktreeを再利用する問題
- その他多数のUI・MCP・プラグイン関連の修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.119)

### NEC協業発表

AnthropicとNECが戦略的パートナーシップを発表。NECはAnthropic初の日本拠点グローバルパートナーとなり、約3万人の全社員にClaude Opus 4.7、Claude Code、Claude Coworkを導入する。金融・製造・自治体向けの業種特化AIソリューションの共同開発も開始。

### Claude Code品質問題ポストモーテム（前回から継続）

4月23日公開。3月〜4月のClaude Code品質低下について3つの原因を特定:
1. **推論エフォートのデフォルト変更**（3/4）: high→mediumに引き下げ
2. **キャッシュ最適化のバグ**（3/26）: 毎ターン思考履歴が消去される不具合
3. **冗長抑制プロンプト**（4/16）: 文字数制限の指示がコード品質まで低下

すべてv2.1.116（4/20）で対処済み。

### 選挙セーフガード更新

選挙期間中のClaudeの正確性・中立性確保のための対策を公開。コミュニティからの反応は確認されなかった。

## コミュニティの反応

### Claude Code v2.1.119 MCP並列接続

#### ポジティブ

> MCPサーバーの接続が直列から並列化され、5つサーバーでも待ち時間がなくなり起動が爆速に。MCPヘビーユーザーには朗報の改善点 — @d_ehara [X](https://x.com/i/status/2046883485030269043)

> v2.1.119アップデートにより設定永続化と並列処理が強化され、自律型エンジニアの基盤が整った。企業環境適応も向上 — @Ren_Lifestyle_ [X](https://x.com/i/status/2045779102876291305)

> v2.1.119でMCPサーバー再設定の並列化が実装され高速化。config永続化やPowerShell auto-approveなど多岐にわたる改善 — @haboshiastra [X](https://x.com/i/status/2047459461351321635)

### Claude Code v2.1.118（前回から継続）

#### ポジティブ

> v2.1.118で/costと/statsが/usageに統合されたほか、Vimのビジュアルモード対応やHooksからのMCPツール直接呼び出しが可能になり、運用が大幅改善 — @yuto_lab_note [X](https://x.com/i/status/2047344171368022102)

#### Tips

> Claude Codeの/usageコマンドでトークン消費の内訳（並列セッション、サブエージェント、キャッシュミスなど）が詳細に表示される。出力精度を落とさず消費を半減する節約プロンプトも紹介 — @Mountain_cb [X](https://x.com/i/status/2045650189625774219)

> Claude Codeの入力欄下にモデル、コンテキスト使用率、コストなどの情報を常時表示させるプロンプトを作成。性能低下の早期察知に有効 — @A7_data [X](https://x.com/i/status/2046500572514353217)

### NEC協業発表

#### ポジティブ

> NECがAnthropicの日本初グローバルパートナーとなり、約3万人の全社員にClaude導入。日本勢がAI活用の主導側へ移行した画期的な発表 — @kiyo_ai_allin [X](https://x.com/i/status/2047670941967352157)

> AnthropicとNECの提携は大規模Claude展開と業界特化プロダクト開発で、AI活用がPoCから組織設計の更新へ移行する大きな一歩 — @re_a_takaki [X](https://x.com/i/status/2047616205633311204)

> NECがAnthropicと戦略提携、日本初グローバルパートナーに。Claude Opus 4.7とCodeを金融・製造・自治体向けに統合し、国内法人市場を変える — @ponkiland [X](https://x.com/i/status/2047528318942220660)

> NEC初の日本グローバルパートナーに就任、3万人規模でClaude展開し金融・製造・自治体向けソリューション開発。高信頼領域でのClaude実装が注目 — @GEN_TECHCAMP [X](https://x.com/i/status/2047474036847034711)

### Claude Code品質問題ポストモーテム（前回から継続・反応拡大）

#### ポジティブ

> AnthropicがClaude Codeの品質低下問題についてポストモーテムを公開し、3つの原因を特定・修正。透明性の高い対応として評価 — @t_wada [X](https://x.com/i/status/2047460470211424755)

> 意図した改善が逆効果となった3つのパターンを正直に数え、その姿勢に共感 — @ai_nikechan [X](https://x.com/i/status/2047560225251553690)

#### ネガティブ

> Claude Codeの1カ月品質低下をAnthropicが認め、推論努力引き下げやセッション管理バグなど3原因を公表したことに「ほらやっぱりね」と納得の反応 — @kyn1235813 [X](https://x.com/i/status/2047581331434136043)

#### Tips

> Claude Code品質低下バグ、本当に直ったか検証してみた — 2.1.98 vs 2.1.119の実測比較。Anthropicの3原因特定を踏まえ、v2.1.116以降で対処済みかを実データで検証 — @mtk [Zenn](https://zenn.dev/mtk0/articles/claude-code-2198-vs-21119-comparison)

> ポストモーテムから速度/コストと賢さのトレードオフミス、セッション最適化バグ、verbosity抑えプロンプトのcoding品質低下という3つの学びを抽出。特にプロンプト変更の影響の大きさにヒヤリ — @_pochi [X](https://x.com/i/status/2047657411717263608)

### Claude Code Hooks・Worktree活用

#### Tips

> Claude Codeのgit worktreeで依存関係が失敗する問題をWorktreeCreateフックで解決する。.gitignore対象ディレクトリがworktreeに含まれない問題への対処 — @kushidam（シャペロン） [Zenn](https://zenn.dev/shaperon/articles/658752f51c88a1)

> HooksからMCPツールを直接呼び出せる機能（type: "mcp_tool"）が追加されたことを紹介 — @masayan_ai_hack [X](https://x.com/i/status/2047221674190512379)

### Claude Code CLAUDE.md設計

#### Tips

> CLAUDE.md、結局なにを書けばいいの？ — ちゃんと書いたら全然違った話。挙動が安定しない原因のほとんどはCLAUDE.mdの書き方 — @Shunya [Zenn](https://zenn.dev/craft_beeer/articles/7aee1830dac8ce)

> AI駆動開発のための CLAUDE.md 設計パターン — 実運用で磨いた5つの型 — @Northern_learner [Qiita](https://qiita.com/Northern_learner/items/8474a40482c72dd09c68)

> Claude Codeに何回言えば覚えるの — CLAUDE.md・auto memory・compact 記憶の生存戦略。公式機能とファイル出力だけでほぼ解決できる — @週末ものづくり部 [Zenn](https://zenn.dev/helloworld/articles/dce7eb8033aac7)

> Claude における .claude ディレクトリ設計。モデルとハーネスの組み合わせとして設計対象を整理 — @awache [Zenn](https://zenn.dev/awache/articles/312d9520b9fa78)

### Claude Code実践活用事例

#### Tips

> Claude Code で20年前の商用ゲームを書き直さずにブラウザ移植するまで。WebAssembly + WebGLで2003年のWindows専用TPSをブラウザ化 — @puppy123 [Zenn](https://zenn.dev/puppy123/articles/d38f98a4e017ea)

> 1週間でパーソナルトレーニングコーチをゼロから作った話。Claude Codeで課金・Garmin同期・ダッシュボードまで7日間で構築 — @ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/stride-mate-dev-journey-2026)

> Claude Code に Issue を投げてPRをもらう — バイブコーディングを卒業する最小構成。Issueファイルを仕様書として使い変更スコープを制御 — @yktsnet [Zenn](https://zenn.dev/yktsnet/articles/202604-issue-driven-workflow)

> Anthropicの3エージェントハーネス（Planner / Generator / Evaluator）をRailsプロジェクトに取り入れる — @kiyokuro（クラシル） [Zenn](https://zenn.dev/dely_jp/articles/a45bc3a9e69ab1)

### セキュリティ・秘密情報管理

#### Tips

> AIコーディングツールが`.env`を読んで秘密鍵が漏れた話。AIツールがプロジェクト内の.envを自動で読み込みLLMコンテキストに含まれていた — @ふみ_BENTEN WebWorks [Zenn](https://zenn.dev/bentenweb_fumi/articles/3xlqkfaezl1j)

> AIツールに気づかず秘密鍵を渡していた — envguardで事前チェック。環境変数に潜む秘密情報を一括検出するツール — @winky [Zenn](https://zenn.dev/winky/articles/envguard-ai-env-secret)

### AI開発プロセスの変化

#### 中立

> レビューから QA へ — AI時代の開発プロセス再設計。AIが書きAIがレビューできる領域が広がる中、人間はQAにシフトすべきと提言 — @eftech [Zenn](https://zenn.dev/eftech/articles/eftech-ai-era-review-to-qa-shift)

> 「AI 使い放題」の終わり — GitHub Copilot停止とToken課金の経済学。トップ2社が同じ結論にたどり着いた3日間を分析 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/ai-2026-04-24)

### Proプラン Claude Code削除騒動（前回から継続）

#### ネガティブ

> Claude CodeがProプランから消えた件を整理。テスト自体は継続中で、将来的なプラン再編はほぼ規定路線 — @るる [Zenn](https://zenn.dev/0kara_freelance/articles/claude-code-pro-plan-removal)

> 個人開発の運用コスト全公開 — Cloudflare Pagesでインフラ0円なのにClaude Maxで月15,000円の大赤字。AI開発ツールへの課金コストの現実 — @サクッとぱんだ [Zenn](https://zenn.dev/sktt_panda/articles/individual-dev-cost-breakdown)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
