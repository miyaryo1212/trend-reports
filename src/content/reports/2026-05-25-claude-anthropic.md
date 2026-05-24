---
title: "v2.1.149で/usageカテゴリ別内訳、セキュリティ修正多数"
summary: "Claude Code v2.1.149で/usageカテゴリ別内訳表示・/diffキーボードスクロール・GFMタスクリストチェックボックス描画を追加。PowerShellセキュリティ修正を含む20件超のバグ修正。Project Glasswing・Project Dealは前回から継続。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-25
features:
  - "Claude Code v2.1.149: /usageカテゴリ別内訳表示"
  - "Claude Code v2.1.149: /diffキーボードスクロール"
  - "Claude Code v2.1.149: GFMタスクリストチェックボックス描画"
  - "Claude Code v2.1.149: Enterprise allowAllClaudeAiMcps設定"
  - "Claude Code v2.1.149: /feedback改善（コンテキスト圧縮前の会話も含むレポート送信）"
  - "Claude Code v2.1.149: PowerShellセキュリティ修正"
  - "Anthropic: Project Glasswing（Claude Mythos Preview）"
  - "Anthropic: Project Deal（AIエージェント間交渉研究）"
codex_review: "派手さは薄いが、usage内訳の可視化とPowerShell周りの修正は、AIコーディングツールが実験段階から運用段階へ移る手触りを示していて地味に重要だ。研究ネタの継続より、今回は足回りの改善のほうを評価したい。"
codex_importance: 3
---

## 公式アップデート

### Claude Code v2.1.149

5月22日リリース。UX改善・セキュリティ修正・エンタープライズ機能の追加が中心。

**新機能:**
- `/usage`がカテゴリ別内訳を表示。スキル・サブエージェント・プラグイン・MCPサーバーごとのリミット使用量を確認可能に
- `/diff`詳細ビューがキーボードスクロールに対応（矢印キー・`j`/`k`・`PgUp`/`PgDn`・`Space`・`Home`/`End`）
- Markdown出力でGFMタスクリストチェックボックス（`- [ ]` / `- [x]`）をプレーンな箇条書きの代わりにチェックボックスとして描画
- Enterprise向け`allowAllClaudeAiMcps`マネージド設定を追加。claude.aiクラウドMCPコネクタを`managed-mcp.json`と併用可能に
- `/feedback`レポートがコンテキスト圧縮前の会話も含むようになり、長いセッションの初期の問題をトリアージしやすく

**セキュリティ修正:**
- PowerShellの組み込み`cd`関数（`cd..`・`cd\`・`cd~`・`X:`）がワーキングディレクトリを検知されずに変更し、後続コマンドがワークスペース外を読み取れるバイパスを修正
- gitワークツリーでサンドボックス書き込み許可リストがメインリポジトリルート全体を対象にしていた問題を修正（共有`.git`ディレクトリのみに限定、`hooks/`と`config`は拒否）
- `PWD`/`OLDPWD`/`DIRSTACK`の`cd`/`pushd`/`popd`間での古い値を信頼するパーミッション分析ギャップを修正

**バグ修正（主要なもの）:**
- PowerShellのプレフィックス/ワイルドカード許可ルールがネイティブ実行ファイル・スクリプトを事前承認しない問題を修正
- macOSで`find`コマンドがシステムファイル/vnodeテーブルを枯渇させホストをクラッシュさせる問題を修正
- マネージド設定承認ダイアログが起動時にターミナルをフリーズさせる問題を修正
- `/ultraplan`やリモートセッション作成が実際の変更がないワーキングツリーで失敗する問題を修正
- `otelHeadersHelper`がスペースを含むパスで静かに失敗する問題を修正（`/doctor`とデバッグログに報告）
- Ctrl+Oトランスクリプトビューが開いた瞬間にフリーズする問題を修正（新しいメッセージを追従するように）
- `/config`終了サマリーが無関係な設定変更時にauto-compactとthemeの変更を誤報する問題を修正
- `/insights`がオプションフィールドのないキャッシュ済みセッションメタファイルでクラッシュする問題を修正
- Remote Controlセッションのリネームがローカルセッション名に反映されない問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.149)

### Claude Code v2.1.148

5月22日リリース。v2.1.147で発生したBashツールが全コマンドでexit code 127を返すリグレッションを修正するホットフィックス。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.148)

### Claude Code v2.1.150

5月23日リリース。内部インフラ改善のみ、ユーザー向けの変更なし。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.150)

### Claude Mythos Preview — Project Glasswing（前回から継続）

サイバーセキュリティ特化のフロンティアモデル。12社連携、$100Mクレジット提供。新規情報なし。

### Project Deal（前回から継続）

AIエージェント間交渉の実験的マーケットプレイス研究。新規情報なし。

## コミュニティの反応

### Claude Code v2.1.149 新機能

X/Twitterでの反応は該当なし。リリースから間もないため、コミュニティでの言及はまだ確認されていない。

### Claude Code スキル・エージェント活用

#### Tips

> Claude Codeでスキルはいつ使うのか？ 使う必要がなければ使わなくてOK、繰り返し入力や出力のバラつきが気になったら導入を検討 — @tech-book.net 編集部 [Zenn](https://zenn.dev/tbnet/articles/claude-code-when-to-use-skills)

> Agent Skill作成時の雑なTips 3選。公式ベストプラクティスでAIレビュー、修正のたびの品質劣化を防ぐ実用的手法 — @D.K [Zenn](https://zenn.dev/dk96424/articles/claude-skill-checklist)

> SKILLSのうち静的作業はスクリプトに移譲しよう。固定フォーマット強制など、AIの力が不要な部分を分離してトークン節約 — @misadroid [Zenn](https://zenn.dev/misadroid/articles/13a8bef0af32e7)

> AIオーケストレーションで「一人SIer」は実現できるか？ LangGraphを使わずClaude Code Skillsで設計から実装・テストまで自律化を検証 — @udowan [Zenn](https://zenn.dev/udowan/articles/56e8235f94801c)

> Claude Codeを「コンテンツ工場」にした話。スラッシュコマンド60個＋Agent Teamsで個人メディアを半自動化 — @R｜AI ×個人開発 [Zenn](https://zenn.dev/rkpg/articles/claude-code-content-factory)

> AIチームでゲーム開発（Claude Code Agent Teams + Godot）。Agent Teamsで画像作成とゲーム開発を並列処理 — @ゆーりんちぃ [Zenn](https://zenn.dev/yurinchi/articles/537a7640b59ee8)

### Claude Code 設定・運用パターン

#### Tips

> Claude Codeを使い倒すための設定術：CLAUDE.md・自動メモリ・コンテキスト管理の3本柱。毎回同じ説明をしなくて済む状態を作る方法 — @hideyuki [Zenn](https://zenn.dev/tamai_hideyuki/articles/claude-code-config-best-practices)

> セッションを閉じたら全部消えた — Claude Codeと長期開発するための設計論。CLAUDE.md/backlog.md/MEMORY.mdの3ファイル引き継ぎ設計 — @ゆーいち [Zenn](https://zenn.dev/yuichi1996/articles/2006df87f3209c)

> どのデバイスからでもClaude Codeのスレッドを再開できるようにする。Google Drive経由でWin/Mac間のセッション共有 — @ko [Zenn](https://zenn.dev/oqamura/articles/54d72bf9e7ca9d)

> Claude Code ハーネスエンジニアリング入門 — まず"整える"から始める。トークン枯渇やMCPコンテキスト肥大化の対策 — @Fukutaro Hori [Zenn](https://zenn.dev/uzero_fktrhori/articles/491b1dd1b3e4bc)

> Claude Codeのコスト管理ガイド。プラン選定・爆発防止・実数データで語る最適化戦略 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-cost-real-data-guide-2026)

### Claude Code マルチエージェント・ターミナル

#### Tips

> 複数のAIエージェントを1画面で管理するCLIツールを作った。claude-code・codex・gemini-cliの統合管理 — @Ken [Zenn](https://zenn.dev/k1e1n04/articles/mav-multi-agent-view)

> Linux勢だけどcmuxのターミナル操作機能に興味があったので再現してみた。tmux + Sway環境でのオマージュ実装 — @けい [Zenn](https://zenn.dev/kay1974/articles/6db1b746cfa147)

> ClaudeCodeでの並列化に関する人の介在箇所。サブエージェント活用時の判断ポイント整理 — @nkjmnkdev [Qiita](https://qiita.com/nkjmnkdev/items/2ff276cb7c1010b45f13)

### MCP サーバー開発

#### Tips

> 自作MCPサーバーを書いて公開するまで — Claude × GPT 相互レビューを題材に。uvx経由の一行起動配布まで — @Miharu [Zenn](https://zenn.dev/miharu_tools/articles/f21c642db3fb3d)

> 「そのツール、ありません」とAIが言う本当の理由はDDNSだった。自宅MCP運用でのDNS起因の間欠障害 — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/dns-blindspot)

> AWS MCP ServerでAIエージェントと人間のIAM権限を分離してみた。`aws:ViaAWSMCPServer`コンテキストキーによるアクセス制御 — @kazuyaasawa [Zenn](https://zenn.dev/acntechjp/articles/feb79f5abbe462)

### AI活用・安全性

#### Tips

> 開発AIと監査AIを分離する — 自己申告に頼らないセキュリティパイプラインを自作した話。LINE LIFFアプリ開発での実践 — @しろっぷ村山 [Zenn](https://zenn.dev/syrup/articles/634a285ee5fc88)

> AI同士のhandoffを多層契約チェックリストにした。Codex×Claude Code併用での引き継ぎ漏れ防止設計 — @harness [Zenn](https://zenn.dev/harness/articles/ai-handoff-multi-layer-contract-checklist)

> 仕様駆動開発と2026年のAIコーディングエージェント全景。Cursor・Kiro・Claude Code等の選び方ガイド — @ラメシュ・アランゴット [Zenn](https://zenn.dev/arangott/articles/d000ebb2b38ba1)

### Anthropic Mythos（前回から継続）

#### Tips

> AI時代に「エンジニア不要論」は本当か — Claude Mythosを起点に、正社員エンジニアの価値を考える — @CodeLeaf [Qiita](https://qiita.com/CodeLeaf/items/bb68b11796121ebe638f)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
