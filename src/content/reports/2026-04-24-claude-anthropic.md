---
title: "v2.1.118でVimビジュアルモード・カスタムテーマ追加"
summary: "Claude Code v2.1.118がリリースされ、Vimビジュアルモード、カスタムテーマ機能、HooksからのMCPツール直接呼び出しなど多数の新機能を追加。コミュニティではClaude Code設定のベストプラクティスやセキュリティ関連の記事が活発に投稿されている。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-24
features:
  - "[Claude Code v2.1.118] Vimビジュアルモード: v/Vキーで選択・オペレータ操作・ビジュアルフィードバックに対応"
  - "[Claude Code v2.1.118] /usageコマンド統合: /costと/statsを/usageに統合、両コマンドはショートカットとして残存"
  - "[Claude Code v2.1.118] カスタムテーマ機能: /themeから名前付きテーマの作成・切替が可能、プラグインもthemes/ディレクトリでテーマ同梱可能"
  - "[Claude Code v2.1.118] HooksからMCPツール直接呼び出し: type: \"mcp_tool\"でHooksからMCPツールを直接実行可能に"
  - "[Claude Code v2.1.118] DISABLE_UPDATES環境変数: 手動claude updateを含む全更新パスを完全ブロック"
  - "[Claude Code v2.1.118] WSL Windows設定継承: wslInheritsWindowsSettingsポリシーキーでWindows側の管理設定を継承"
  - "[Claude Code v2.1.118] Auto mode $defaults拡張: autoMode設定で$defaultsを含めることで組み込みルールに追加ルールを併用可能"
  - "[Claude Code v2.1.118] claude plugin tagコマンド: プラグイン用リリースgitタグをバージョン検証付きで作成"
  - "[Claude Code v2.1.117] フォーク型サブエージェント外部ビルド対応: CLAUDE_CODE_FORK_SUBAGENT=1で外部ビルドでも有効化可能"
  - "[Claude Code v2.1.117] エージェントフロントマターMCPサーバー: --agentでのメインスレッドセッションでmcpServers設定が読み込まれるように"
  - "[Claude Code v2.1.117] /model選択の永続化: プロジェクトが別モデルを指定していても再起動後もモデル選択が維持される"
  - "[Claude Code v2.1.117] ネイティブビルドでGlob/Grepをbfs/ugrepに置換: macOS/Linuxネイティブビルドでより高速な検索を実現"
  - "[Claude Code v2.1.117] デフォルトeffortがhighに変更: Pro/MaxサブスクライバーのOpus 4.6/Sonnet 4.6でデフォルトeffortがmediumからhighに"
  - "[Claude Code v2.1.117] Advisor Tool改善(実験的): experimentalラベル・通知・エラー修正など安定性向上"
  - "[Anthropic] Claude Code品質問題ポストモーテム公開: 3月〜4月の品質低下原因の詳細分析と対策を公開、全サブスクライバーの使用量リミットをリセット"
codex_review: "Vimビジュアルモードやテーマは一見小粒だが、HooksからMCPツールを直に叩ける更新はかなり重要だと感じる。派手さより“現場での詰まり”を潰す成熟フェーズに入った印象で、過熱気味のモデル競争より健全だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.118

4月23日リリース。Vim操作性の大幅強化、テーマカスタマイズ機能、HooksからのMCPツール直接実行など、開発者体験を向上させる多数の新機能を追加。MCP OAuth周りのバグ修正も多数含まれる。

**新機能**
- Vimビジュアルモード（`v`）・ビジュアルラインモード（`V`）に対応。選択、オペレータ操作、ビジュアルフィードバック付き
- `/cost` と `/stats` を `/usage` に統合。旧コマンドはショートカットとして引き続き利用可能
- `/theme` からカスタムテーマの作成・切替が可能に。`~/.claude/themes/` にJSONファイルとして保存。プラグインも `themes/` ディレクトリでテーマ同梱可能
- Hooksから `type: "mcp_tool"` でMCPツールを直接呼び出し可能に
- `DISABLE_UPDATES` 環境変数の追加。手動 `claude update` を含む全更新パスを完全ブロック（`DISABLE_AUTOUPDATER` より厳格）
- WSLでWindows側の管理設定を `wslInheritsWindowsSettings` ポリシーキーで継承可能に
- Auto modeの `autoMode.allow`、`autoMode.soft_deny`、`autoMode.environment` に `"$defaults"` を含めることで、組み込みルールを保持したまま追加ルールを併用可能
- Auto modeのopt-inプロンプトに「Don't ask again」オプションを追加
- `claude plugin tag` コマンドの追加。バージョン検証付きでプラグイン用リリースgitタグを作成
- `--continue`/`--resume` が `/add-dir` で追加されたディレクトリのセッションも検索可能に
- `/color` がRemote Control接続時にclaude.ai/codeとセッションアクセントカラーを同期

**バグ修正（主要なもの）**
- MCP OAuth関連の多数の修正: トークンリフレッシュの競合状態、macOSキーチェーンのレースコンディション、step-up authorization、タイムアウト/キャンセル時の未処理Promise等
- Linux/Windowsでの資格情報保存クラッシュによる `~/.claude/.credentials.json` 破損の修正
- `--dangerously-skip-permissions` 使用時にプラン受諾ダイアログが「auto mode」と表示される問題の修正
- `/fork` がフォークごとに親会話全体をディスクに書き込む問題の修正（ポインタ+遅延読み込みに変更）
- Remote Controlセッションの一時的なJWTリフレッシュ失敗でアーカイブされる問題の修正

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.118)

### Claude Code品質問題ポストモーテム

Anthropicが3月〜4月にかけてのClaude Code品質低下について詳細なポストモーテムを公開。effort設定の変更、キャッシュバグ、システムプロンプトの変更が原因として特定された。対策として全サブスクライバーの使用量リミットがリセットされた。X/Twitterでは品質基準を満たす個人ユーザーの反応は確認されなかった。

## コミュニティの反応

### Claude Code v2.1.118 Vimビジュアルモード

#### ポジティブ

> v2.1.118でvim visual mode（v/V）が追加され、文字/行選択とオペレータが効くように。j/kでの履歴ナビゲーションが向上し過去のやり取りの掘り起こしが速くなった — @yuto_lab_note [X](https://x.com/i/status/2047344171368022102)

> v2.1.118でVim visual modesとcustom themesが追加され、編集がスムーズになるとポジティブに紹介 — @shawntenam [X](https://x.com/i/status/2047214841157316808)

> v2.1.118のeditor upgradesとしてVim visual mode (`v`/`V`)をサポートし、開発ツールとして歓迎 — @lukashanren1 [X](https://x.com/i/status/2047156815633530906)

### Claude Code v2.1.117（前回から継続）

#### ポジティブ

> 非エンジニアとしてv2.1.117のフォークサブエージェント外部有効化を高く評価。自身のエージェント運用で分散処理が可能になると期待 — @Tomoshibi1982 [X](https://x.com/i/status/2046907084852371932)

> フォークサブエージェントの外部ビルド対応で開発フローがスムーズに、チーム導入ハードル低下 — @fugusakate [X](https://x.com/i/status/2047023094573977937)

> Claude CodeにMCPサーバーを繋ぐとAIが直接DBを叩いてエラーログを自律解析し、ファイルを見せる手間がなくなる — @shintaro_campon [X](https://x.com/i/status/2046864767743410223)

### Proプラン Claude Code削除騒動（前回から継続）

#### ネガティブ

> Claude CodeがProプランから消えた件を整理。告知なしの削除と「新規prosumer登録の2%へのA/Bテスト」という釈明、テスト自体は継続中 — @るる [Zenn](https://zenn.dev/0kara_freelance/articles/claude-code-pro-plan-removal)

> 料金表もまたUIやった — 告知なしの変更と釈明の食い違いが批判の焦点。Hacker Newsで500点超の大炎上 — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-04-22)

### Opus 4.7の品質議論（前回から継続）

#### ネガティブ

> Anthropicが「かつてのOpenAI」になった日 — Opus 4.7リリース1週間で散々な評価。他社を批判して台頭した会社が同じ失敗をする「振り子構造」を指摘 — @tomoki [Zenn](https://zenn.dev/mikan_atomoki/articles/53c6e844b9eeee)

#### Tips

> Opus 4.7に移行するなら"effort"を理解してからにしよう。xhighの追加とeffortパラメータの厳格化が挙動変化の主因 — @coa00 [Zenn](https://zenn.dev/coa00/articles/claude-opus-4-7-effort-guide)

> Claude Haiku 4.5 + skillでOpus 4.7を超えた — SkillsBench追試で61.2%→84.3%、Opus 4.7の80.5%を上回る結果 — @アライ [Zenn](https://zenn.dev/ai_arai_ally/articles/20260422-0401-claude-haiku-4-5-skill-opus-4-7)

### Claude Code設定・運用のベストプラクティス

#### Tips

> Claude Code設定の全体設計、個人的ベストプラクティス（2026年4月版）。Skills、hooks、CLAUDE.mdの運用知識を体系的に整理 — @soichiyo [Zenn](https://zenn.dev/soichiyo/articles/b2a0ba2814acf6)

> Claude Code 効き目順30 — ~/.claude/配下を運用インパクト順に並べた実測レシピ集。トークン45%削減、承認プロンプト1/5 — @yuto[SEEDA] [Zenn](https://zenn.dev/seeda_yuto/books/claude-dotfiles-impact-order)

> Claude Codeのルールを育て続ける — Routinesでレビュー指摘を.claude/rulesに自動反映する仕組み — @ike04（ZOZO） [Zenn](https://zenn.dev/zozotech/articles/20260423_pr_review_claude_rules)

> CLAUDE.mdを本気で書いたら開発が別物になった — 個人開発SaaSでの実践例 — @バリヤ [Zenn](https://zenn.dev/variya/articles/claude-code-claudemd-practical-guide)

> ガバナンス文書でオーケストレーターを"法治"する仕組み（実装編）。エージェント数10体超で発生する認知負荷問題への対処 — @コロネ [Zenn](https://zenn.dev/corone/articles/4a9cbdd142df6e)

### Claude Code Hooks活用

#### Tips

> Claude Code Hooks × markitdown で非MDファイルを透過的にMarkdown変換する。PDF・PPTX・XLSXなどをRead時に自動変換 — @tuzumi minami [Zenn](https://zenn.dev/tuzuminami/articles/e487adfd650289)

> Claude CodeのPreCompact hookで「幻覚編集」を封じた話。context compaction直後の構造的幻覚を3段構えで防御 — @アライ [Zenn](https://zenn.dev/ai_arai_ally/articles/20260421-1601-claude-code-precompact-hook)

### セキュリティ

#### Tips

> Claude Codeのsandbox設定、Writeツールには効いていない — denyWriteバイパス問題と回避策 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/1a11ad1320dd3b98d783)

> 非エンジニアでもわかるセキュリティ設定完全網羅版。公式ドキュメントを根拠に個人・組織向け設定を体系化 — @okawa2929（Solvio） [Zenn](https://zenn.dev/solvio/articles/27c06e4802aa45)

> 会社でClaude Codeを安全に使うならWSL。本体PCの情報漏洩・マルウェア被害を食い止める戦略 — @Junko [Zenn](https://zenn.dev/junko_ai/articles/2aabba3c7ebcac)

### Claude Codeの実践活用

#### Tips

> 人間が寝ている間にClaude CodeがPlaywrightのE2Eテストを直してPRを出す。nightlyのテスト失敗をClaude Codeに自動修正させるパイプライン — @yuden [Zenn](https://zenn.dev/yuden/articles/playwright-auto-heal-claude-code)

> Claude Codeのセッション名をtmux経由で自動的に/renameする — @ぶてい（GMOペパボ） [Zenn](https://zenn.dev/pepabo/articles/rename-claude-code-session-via-tmux)

> Claude Code研修で学んだAIエージェントを用いたソフトウェア開発の実践知 — @Tomoki Kuwabara（NTT DATA TECH） [Zenn](https://zenn.dev/nttdata_tech/articles/f365fc3614a2e6)

> Figmaデザインをチーム開発で効率化 — Claude Code × Figma MCP × Playwright MCP — @kamihork [Qiita](https://qiita.com/kamihork/items/9a938ed04ff35e9e3f9e)

> 複数のPRレビューを並列化しまくってるやり方を紹介。git-wtのwt prでworktreeを切り、それぞれでClaude Codeに一次レビューさせる — @アルパカ大明神 [Zenn](https://zenn.dev/toritori0318/articles/d80088f2befe91)

### トークン・コスト管理

#### Tips

> 『CC, 最近すぐトークン切れる』の原因、たぶんキャッシュが壊れているかもしれない。stats-cache.jsonを2ヶ月分分析した現場感の記録 — @Sangun（GMOペパボ） [Zenn](https://zenn.dev/pepabo/articles/3427f726deda37)

### AI開発への警鐘

#### 中立

> 全能感の罠 — AIが賢くなるほど検証を省きたくなる問題。10回連続で成功した後、レビューを省略した結果セキュリティホールが混入 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/ai-omnipotence-trap-verification-skip)

> AIに書かせた壮大なSKILL.mdを実装したら、ただのテンプレ生成器だった話。claimと実装のズレを検知するセルフチェック手法 — @mine_take [Zenn](https://zenn.dev/minewo/articles/ai-generated-skill-md-reality-check)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
