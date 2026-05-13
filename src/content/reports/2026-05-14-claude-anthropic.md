---
title: "v2.1.140リリース、Agent Viewに注目集まる"
summary: "Claude Code v2.1.140がsubagent_typeマッチング改善等をリリース。Claude for Small Businessが発表。Agent Viewへの反応がX上で拡大し、エージェント運用レイヤーへの進化として注目。コミュニティではSkill設計・hook活用・セキュリティ隔離の実践記事が活発。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-14
features:
  - "Claude for Small Business"
  - "Project Glasswing / Claude Mythos Preview"
  - "Claude Code v2.1.140 subagent_typeマッチング改善"
  - "Claude Code v2.1.139 Agent View"
  - "Claude Code v2.1.139 /goalコマンド"
  - "Claude Code v2.1.139 hook continueOnBlockオプション"
  - "Claude Code v2.1.139 hook args配列フィールド"
  - "Claude Code v2.1.139 MCP stdio CLAUDE_PROJECT_DIR環境変数"
  - "Claude Code v2.1.139 サブエージェントAPIヘッダー追加"
codex_review: "Agent Viewが騒がれているが、本質は派手なUIよりhookやskill、隔離設計が運用作法として固まり始めた点だと思う。機能追加自体は堅実で、業界全体への波及はまだ中規模だ。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.140

5月12日リリース。主な変更点:

- **Agent toolのsubagent_typeマッチング改善**: 大文字小文字・区切り文字を問わず名前解決が可能に（例: `"Code Reviewer"` → `code-reviewer`）
- エージェントカラーパレットの更新
- `/goal`が`disableAllHooks`/`allowManagedHooksOnly`設定時にハングする問題を修正
- シンボリックリンクされた設定ファイルによる誤ったConfigChangeフック発火の修正
- `claude --bg`がバックグラウンドサービスのアイドル終了直前に失敗する問題の修正
- その他複数のバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.140)

### Claude Code v2.1.139（前回から継続）

5月11日リリースの大型アップデート。Agent View、/goalコマンド、Hook強化（continueOnBlock、args配列）、MCP stdio CLAUDE_PROJECT_DIR環境変数、サブエージェントAPIヘッダーなど多数の新機能。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.139)

### Claude for Small Business

QuickBooks・PayPal・HubSpot等と連携し、小規模事業者向けに15種の業務自動化ワークフローを提供する新パッケージが発表された。

### Project Glasswing / Claude Mythos Preview（前回から継続）

40以上の組織と連携した大規模サイバーセキュリティプロジェクトと、脆弱性発見に特化したフロンティアモデル。本日の公式新情報なし。

## コミュニティの反応

### Claude Code Agent View

#### ポジティブ

> AnthropicがClaude Code CLIにAgent Viewをリリースし、並行実行中のエージェントを観察・操作可能。長期目標追求の未来に向けた準備を示唆 — @testingcatalog [X](https://x.com/i/status/2053989783211270621)

> Agent Viewにより全セッションを一つのダッシュボードで管理でき、コーディングツールからエージェント運用レイヤーへ進化 — @namd1nh [X](https://x.com/i/status/2054004059686985969)

> Claude Codeの"agent view"で全セッションを一つのリストにまとめ、エージェント空間で2年間欠けていた重要なUIプリミティブを提供 — @tensor___boy [X](https://x.com/i/status/2054100898834694174)

> Claude CodeのAgent View（研究プレビュー）で全セッションを一箇所で確認可能 — @KayvonJafar [X](https://x.com/i/status/2054211242479251732)

### Claude Code v2.1.140 subagent_typeマッチング改善

#### ポジティブ

> 非エンジニアユーザーにとって、agent toolのcase-insensitiveマッチング改善が特に便利 — @act_0001 [X](https://x.com/i/status/2054501620830875956)

> v2.1.140でAgentツールのsubagent_typeマッチングが大文字小文字・区切り文字を無視するよう改善され、安定性が向上 — @oikon48 [X](https://x.com/i/status/2054380991733772527)

> 実運用での問題を丁寧に修正した点を評価 — @shima0hide [X](https://x.com/i/status/2054406643744727235)

> Claude Code v2.1.140の主な変更としてsubagent_typeマッチング改善を紹介 — @masayan_ai_hack [X](https://x.com/i/status/2054493944164311207)

### Claude Code hook continueOnBlockオプション

#### ポジティブ

> Claude Code v2.1.139でPostToolUseフックにcontinueOnBlockオプションが追加され、拒否理由をClaudeに伝えターンを継続可能になった。この変更が良い — @Suntory_N_Water [X](https://x.com/i/status/2053978646654943397)

### Project Glasswing / Claude Mythos Preview（前回から継続）

#### ポジティブ

> Claude Mythos Previewが人間のセキュリティ研究者レベルの脆弱性発見とエクスプロイトチェイニングが可能で、AWS・Apple・Google・Microsoftなどが活用し防御を強化 — @neil_xbt [X](https://x.com/i/status/2053723025443639590)

### Claude Code /goalコマンド（前回から継続）

X/Twitterで品質基準を満たす新規投稿は確認されなかった。

### Claude for Small Business

X/Twitterで品質基準を満たす投稿は確認されなかった。

### Claude Code Skill設計・活用

#### Tips

> Claude Codeに組織の「規律」をSkillとして与える。設計思想や業務フローに合う形のskillを作って配布し、AIエージェントの活用を一歩進めた事例 — @tano [Zenn](https://zenn.dev/tanoshima/articles/7221e546a1d455)

> Claude CodeのSkillを改善する。autoresearchとevals-skillsを使った実践ガイド。パス率68%→100%に改善 — @kingkazu [Zenn](https://zenn.dev/salt2/articles/af6b15b68e3fbe)

> たった数行でコード品質がグッと上がる、CLAUDE.md / AGENTS.mdにいつも追記してるルール — @peka2 [Zenn](https://zenn.dev/peka2/articles/6dc7d5a87a99dd)

> gh skillでスキルを公開してみた。GitHub CLI拡張でSKILL.mdを公開・インストールする手順 — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/a3f8b2c1d9e047)

### Claude Code hook活用

#### Tips

> Claude Codeのhookの仕組み。JSONとexitコードで作る最小の安全装置。5行のシェルスクリプトから組み立て直す解説 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/be79dbe97e34bb)

> 「気をつける」と書いても意味がない理由と、物理的に書けなくする方法。CLAUDE.mdの曖昧なルールを物理ガードに変換 — @naoya643 [Zenn](https://zenn.dev/naoya643/articles/article-02-soft-language-guard)

### Claude Code トークン最適化

#### Tips

> Sophon-MCPでトークン消費激減。AIに渡すトークン量を最小化するMCPサーバーで、要件定義・設計・実装をひとつのセッションで完走 — @とんこつらーめん [Zenn](https://zenn.dev/tonrakun/articles/a1cb6fc5898ab1)

### Claude Code セキュリティ・隔離

#### Tips

> Claude Codeとサプライチェーン攻撃（npm＆バイナリ）を隔離するdevcontainer.json。AIエージェントの暴走対策とnpmサプライチェーン攻撃の両方を隔離 — @taka [Zenn](https://zenn.dev/isosa/articles/971ab0b2281f53)

> プロンプトインジェクションとAIゼロデイ時代のWebコンテンツ取得防御、隔離環境を添えて — @oubakiou [Zenn](https://zenn.dev/oubakiou/articles/ed98acbf4630b3)

### Claude Code 定期実行・自動化

#### Tips

> Claude Codeの定期実行をまとめてみた。loop / scheduled tasks / Routines / systemd timerの違いを整理 — @長谷川 隼兵 [Zenn](https://zenn.dev/linkedge/articles/claude-code-scheduled-execution)

> 6つのワークフロースキルによる自律化の完成。エージェントに「専門技能」として手順を定着させた事例 — @コロネ [Zenn](https://zenn.dev/corone/articles/8ca1547721d4cf)

### Claude Code 活用事例

#### Tips

> 副業エンジニアがClaude Code×FastAPI×Supabaseで財務分析SaaSをゼロから本番リリース — @edinet-money-dash [Zenn](https://zenn.dev/fire_shitaiman/articles/5071cd821b8dd6)

> Claude Code vs Cursor：3ヶ月使い倒した結論。用途が根本的に違うという話 — @ミント [Zenn](https://zenn.dev/mintototo1/articles/compare-claude-code-vs-cursor)

> コードを書かない人のためのClaude Codeガイド。SE歴26年だがコード1行も書かず日本語指示だけで運用 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-04-22-205144)

> GoでClaude CLIを自作した。Claude Codeが18 Issueを自律実装した記録 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/212-go-claude-cli-claude-code-impl)

> Claude Code × Codex 共存セットアップ。ルール・Skills・hooksを一元管理する — @kirozero [Qiita](https://qiita.com/kirozero/items/aec53be56a5427475969)

### Claude Code ブラウザ操作

#### Tips

> ログイン済みのChromeをそのままClaude Codeから操作する。playwright-cli attachで認証セッション引き継ぎ — @Naosuke [Zenn](https://zenn.dev/optimisuke/articles/40529cd970cbf0)

### Claude Cowork・プラグイン

#### Tips

> Claude Coworkでスキルを作ってマーケットプレイス公開するまで。スキル配布とマーケットプレイス展開の手順 — @wakaaa [Zenn](https://zenn.dev/bltsdc/articles/e4db8a4fdef2d3)

> Claude Plugins in 2026: Practical Guide to Actually Useful Extensions — @NeoTechPark [Zenn](https://zenn.dev/neotechpark/articles/3a806ff8364664)

> pptxスライドをデザイン選択から作成まで自動化するclaude skill — @James-san [Zenn](https://zenn.dev/james_san/articles/e63776c8dd725f)

### Claude Agent SDK

#### Tips

> Claude Agent SDK入門。Python 30行で自分だけのAIエージェントを作る — @横太郎 [Zenn](https://zenn.dev/yokotaro/articles/af304f93110b90)

> Claude Managed Agents Memory入門。セッションを超えて学習するAIエージェントをPythonで実装する — @kai_kou [Qiita](https://qiita.com/kai_kou/items/fd21348d945527d7631c)

### Anthropic研究・安全性（前回から継続）

#### Tips

> 自律化するAgentと「記憶」の壁。Claude Code /goalから考えるMemory Layer — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/02aa812660caa9)

> Claude Codeで仮想会社を運営してわかった、人間がやるべきこと。GitHub・HN・RedditでBANされた経験から — @mapellion [Zenn](https://zenn.dev/mapellion/articles/4abe61fd1c143b)

### ant CLI（前回から継続）

#### Tips

> ant CLI入門。Claude APIをターミナルとCI/CDで使いこなす完全ガイド — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/211-ant-cli-claude-api-terminal-guide)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
