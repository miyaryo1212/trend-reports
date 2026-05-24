---
title: "v2.1.147でWorkflowツール追加、Project Deal発表"
summary: "Claude Code v2.1.147で決定論的マルチエージェントオーケストレーション用Workflowツールを追加。/simplifyが/code-reviewに改名しGitHub PRインラインコメント対応。AnthropicからAIエージェント間交渉の実験的マーケットプレイス研究Project Dealを発表。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-22
features:
  - "Claude Code v2.1.147: Workflowツール（決定論的マルチエージェントオーケストレーション）"
  - "Claude Code v2.1.147: /code-reviewコマンド（/simplifyから改名、GitHub PRインラインコメント対応）"
  - "Claude Code v2.1.147: ピン留めバックグラウンドセッション"
  - "Claude Code v2.1.145: claude agents --json"
  - "Claude Code v2.1.145: /plugin Discover画面改善"
  - "Claude Code v2.1.145: Readツール部分表示改善"
  - "Anthropic: Claude Mythos Preview (Project Glasswing)"
  - "Anthropic: Project Deal（AIエージェント間交渉マーケットプレイス研究）"
codex_review: "Workflow追加は派手さより、Claude Codeが単発支援ツールから運用前提の開発基盤へ寄っていく転換点として面白い。対してProject Dealはまだ話題先行気味で、当面は研究デモ以上の意味を持つか慎重に見たい。 ※ このレビューは後日生成されました"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.147

5月21日リリース。v2.1.146の変更を含む統合リリース。マルチエージェント機能とコードレビュー体験を中心に強化。

**新機能:**
- `Workflow`ツールを追加。決定論的マルチエージェントオーケストレーション機能で、`CLAUDE_CODE_WORKFLOWS=1`環境変数で有効化。デフォルトはオフ
- `/simplify`を`/code-review`に改名。努力レベルの指定（例: `/code-review high`）と`--comment`オプションでGitHub PRにインラインコメントを投稿可能に。旧来のクリーンアップ＆修正動作は削除
- ピン留めバックグラウンドセッション（`claude agents`で`Ctrl+T`）を追加。アイドル時も維持され、Claude Codeアップデート適用時はインプレースで再起動。メモリ圧迫時も非ピンセッションより後に回収
- REPL・Workflowツールのサンドボックスをプロトタイプ汚染・thenable脱出に対して強化
- 自動アップデーターが一時的なネットワーク障害をリトライ。失敗時のエラーカテゴリ・OSエラーコード・現行バージョンを表示
- 大きなファイル編集時のdiffレンダリングパフォーマンスを改善
- プロンプト履歴が連続する重複エントリを記録しないように

**バグ修正（主要なもの）:**
- エンタープライズログイン制限（`forceLoginOrgUUID`/`forceLoginMethod`）がサードパーティプロバイダ・APIキーセッションに適用されない問題を修正
- `!`コマンド出力の`&`が`&amp;`と表示されURLコピペが壊れる問題を修正
- ヘッドレス/SDKモードで不明なスラッシュコマンドが無応答になる問題を修正（エラーメッセージを表示するように）
- シェルスナップショットがアンダースコア始まりのユーザー関数を落とす問題を修正
- 複数の`Agent(...)`型を宣言するプラグインエージェントが最後のエントリ以外を落とす問題を修正
- フック`if`条件の`PowerShell(git push*)`等のパターンマッチが機能しない問題を修正
- auto modeが`AskUserQuestion`を抑制する問題を修正（ユーザー回答を意図シグナルとして認識）
- ページネーション付きMCPサーバーのリソース・テンプレート・プロンプトがページ1以降欠落する問題を修正
- Windows Terminal上のバックグラウンドセッションのフルスクリーンストロービングを修正
- GNOME Terminalの右クリック・中クリック貼り付けが機能しない問題を修正
- `CLAUDE_CODE_SUBAGENT_MODEL`がチームメイトプロセスに適用されない問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.147)

### Claude Mythos Preview — Project Glasswing（前回から継続）

サイバーセキュリティ特化のフロンティアモデル。ソフトウェア脆弱性の自律的検出・エクスプロイト開発が可能。12社のテック企業パートナーと連携し防御的に運用。新規情報なし。

### Project Deal — AIエージェント間交渉の実験的マーケットプレイス研究

Anthropicが発表した実験的研究。69名の社員がClaudeエージェントを使い、186件の実取引を実施するAIエージェント間交渉のマーケットプレイスを構築・検証した。

## コミュニティの反応

### Claude Code v2.1.147 Workflowツール

X/Twitterでの反応は該当なし。リリース直後のため、日本語コミュニティでの言及はまだ確認されていない。

### Claude Code v2.1.147 /code-reviewコマンド

X/Twitterでの反応は該当なし。

### Claude Code /plugin Discover画面改善（前回から継続）

#### ポジティブ

> 導入判断が一気にやりやすくなる。インストール前にコマンド・エージェント・スキル・フック・MCP/LSPの中身が一目でわかるDiscover/Browse画面が便利 — @shima0hide

> v2.1.145の`/plugin` Discover画面改善で、プラグインの内容をインストール前にプレビュー可能になった — @oikon48

### Claude Code スキル・ハーネス設計

#### Tips

> C3がC3自身のルールを破った話 — hookで機械的に止めるしかなかった。エージェント本体の軽量化作業中にフルワークフローが暴走した実例 — @satoh-y-0323 [Zenn](https://zenn.dev/satoh_y_0323/articles/7b39dcc426ac5b)

> 実装後の「なんか違う」を、実装前の10分で消す。合意が薄いまま実装が始まるとエージェントが仮定を補完して意図と乖離する問題の解決法 — @53able [Zenn](https://zenn.dev/53able/articles/5bd33e4dc76dab)

> コーディングエージェントの『たぶん大丈夫』を、skillで止める。バージョン指定無視や根拠なき思い込みにブレーキを設置 — @Haru [Zenn](https://zenn.dev/haru0416/articles/quaere-codeing-agent)

> ClaudeCodeで自前スキルを作ってみた — "Grill-me"からの"Self-Grill"。AI自身が自問自答するプロセスを5批判者構成で設計 — @傍流社会科学系研究者 [Zenn](https://zenn.dev/kajungbang/articles/ce67e5a7b8d49e)

> Claude Code用のエージェントをCodexにも対応させる。Nexus ArchitectのSkill・ルール・フックをOpenAI Codexで動かす移植プロセス — @wfukatsu [Zenn](https://zenn.dev/scalar_sol_blog/articles/74374b5ad77607)

> Skill と Agent の境界線 — CULTIBASEでSNS投稿を「誰でも回せる」仕組みにした話。workflow.mdを単一正本にする設計 — @shunn [Zenn](https://zenn.dev/mimiguri/articles/c9e4e38a8dc077)

> コミットメッセージで悩む時間をゼロにする — Claude Code用/commitスキルの設計と全文公開 — @tips4you [Qiita](https://qiita.com/tips4you/items/47d04503c45056712a67)

### Claude Code 運用・設計パターン

#### Tips

> Plan Modeを使わず1ヶ月ハマって学んだClaude Code設計の地図。根本制約から設計の全てが導かれるという理論編 — @cnative_tkb [Zenn](https://zenn.dev/cnative_tkb/articles/630d98a2e3ace6)

> Claude Code・Codex時代に重要になる「ハーネス」という考え方。LLM単体では不十分な理由とHarness Engineeringの重要性 — @Taka [Zenn](https://zenn.dev/taka000/articles/ffe2f97499a151)

> コンテキストエンジニアリング実践ガイド — Claude Codeで学ぶ4つの戦略。Write/Select/Compress/Isolateの判断基準 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-context-engineering-guide-2026)

> 1時間で開発を完了する。Claude CodeのSkillで社内プロジェクトを仕組み化した話 — @Misaki Ito [Zenn](https://zenn.dev/sonicgarden/articles/e5fd7f54433d3d)

> Claude Code × Obsidianで「知識の記録役」を雇う運用をしてみた話。memoryだけでは足りない二層永続化の設計 — @hikacode1 [Zenn](https://zenn.dev/kenya0126/articles/205dc56cf36ee3)

> 月間27億トークンを処理したLLMルーティングの実運用レポート。GLM/MiniMax/Claudeの3層ルーティング1ヶ月の振り返り — @fukukei23 [Zenn](https://zenn.dev/fukukei23/articles/llm-routing-one-month-report)

### Claude Code 安全性・防衛

#### Tips

> Claude Codeに1分で導入する3つの防衛hook、90日間の事故報告のうち85%を予防する組み合わせ。rm -rfやDROP DATABASE等の事故を防止 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/c201e421e7f9582e1eeb)

> LLMが自分の記憶を汚し続けるので、機能ごと諦めた話 — C3 v2.11.0 / v2.12.0。LLM出力による自己記憶汚染問題の実例 — @satoh-y-0323 [Zenn](https://zenn.dev/satoh_y_0323/articles/819b9066461a05)

### Claude Code QA・テスト自動化

#### Tips

> QAボトルネック解消に挑戦 — QAプロセスをqa-orchestratorに任せてみた。テスト設計工数約45%削減を達成 — @miyashita [Zenn](https://zenn.dev/aldagram_tech/articles/4aea4b13671ae3)

### Claude API・SRE活用

#### Tips

> CloudWatch Logsのエラー分類をClaudeに任せる — Bedrock + Lambdaで意味解釈するSRE設計 — @ojt [Zenn](https://zenn.dev/ojt/articles/claude-code-cloudwatch-logs-error-classification)

> GAS×Claude APIで社内問い合わせ分析を全自動化した話。Googleフォーム回答の自動分類・集計パイプライン — @takoeve [Zenn](https://zenn.dev/takoeve/articles/3070409c1fb5a5)

> Chat SDK × Anthropic Managed Agentsで作るSlack AIエージェント — @TKNR [Zenn](https://zenn.dev/titabash/articles/fafa0c3b676625)

### Anthropic ビジネス動向（前回から継続）

#### Tips

> Anthropic Agent SDKクレジットとは？ 6月15日開始、サブスクと別建ての専用クレジット枠。Pro $20/Max 5x $100等の月次枠 — @zenchaine [Zenn](https://zenn.dev/zenchaine/articles/anthropic-agent-sdk-credits-openclaw)

> Anthropic Partner Basecampに参加してきたお話。サンフランシスコでの2日間ハンズオンイネーブルメントプログラムの参加レポート — @伊佐眞皇 [Zenn](https://zenn.dev/shino_i/articles/f7a8f6a949d596)

### Anthropic Mythos（前回から継続）

#### Tips

> なぜ、AnthropicのMythosはコケおどしであると断言できるのか？ 能力は認めつつもパラダイムシフトとして語る妥当性を批判的に分析 — @pdfractal [Zenn](https://zenn.dev/pdfractal/articles/b5cb37ea30814c)

> Mythosの本当の怖さは「天才泥棒」ではなく「時間が消える」こと。脆弱性パッチまでの猶予期間が消失するリスク構造を解説 — @noah [Zenn](https://zenn.dev/noah33/articles/mythos-time-collapse)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
