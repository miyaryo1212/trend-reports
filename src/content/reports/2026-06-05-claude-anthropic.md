---
title: "Project Glasswing・Claude on Mars等Anthropic大型発表が集中"
summary: "Claude Code v2.1.162がリリースされagents改善・多数のバグ修正が行われた。Anthropicは12社連携のAIサイバーセキュリティ「Project Glasswing」、NASAローバーの自律走行をClaudeが計画する「Claude on Mars」、AIエージェント交渉実験「Project Deal」、81,508人規模のユーザー調査、学習プラットフォーム「Anthropic Academy」を相次いで発表。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-05
features:
  - "Claude Code v2.1.162 agents --json waitingFor・Grep/Glob修正・/effort永続化等"
  - "Project Glasswing AIサイバーセキュリティ12社連携イニシアチブ"
  - "Claude on Mars NASAパーサヴィアランス自律走行ルート計画"
  - "Project Deal AIエージェント売買交渉マーケットプレイス実験"
  - "Anthropic 81,508人ユーザー調査 159カ国70言語"
  - "Anthropic Academy Claude活用学習プラットフォーム"
codex_review: "派手なのは火星とサイバーだが、私にはClaude Codeの地味な権限制御修正のほうが効いて見える。Anthropicは誇大な未来図より、現場導入の摩擦を潰して覇権を取りにきた印象です。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.162（6月3日リリース）

前日のv2.1.161に続く連続リリース。agents周りの改善とバグ修正が中心。

**新機能・改善**
- `claude agents --json` に `waitingFor` フィールドが追加。待機中のセッションがブロックされている理由（権限プロンプト等）を確認可能に
- `--tools` でGrep/Globを明示的に指定した場合、ネイティブビルドの組み込み検索ツールが正しく提供されるように修正（従来は名前が無視されていた）
- `/effort` で選択したレベルが新しいセッションのデフォルトとして永続化されることを確認表示
- スラッシュコマンドのオートコンプリートメニューでクリック時に即実行ではなくプロンプトへ挿入する方式に変更
- Remote Controlが起動メッセージではなくセッションリンク付きの永続フッターピルとして表示
- Windsurf → Devin Desktop へ名称変更（`/ide`、`/terminal-setup`、`/scroll-speed`）

**バグ修正**
- 設定ディレクトリが読み取り専用の場合にスタートアップが無応答になる問題を修正。インメモリ設定で起動しエラーを表示するように
- WebFetch権限ルールがプリアプルーブドドメインに適用されない問題を修正
- Windowsでバックスラッシュやケース違いのパスで権限ルールが一致しない問題、Read denyルールがGlob/Grep結果からファイルを隠さない問題を修正
- ターン開始直後のEsc割り込みがstream-json/SDKセッションでドロップされる問題を修正
- API 400 `no low surrogate in string` エラー（絵文字を含むMCPサーバー記述の切り捨て境界）を修正
- MCP per-server `timeout` が1000ms未満の場合に全ツール呼び出しを中断する問題を修正
- LSPツールの `workspaceSymbol` が結果を返さない問題を修正
- `claude agents` のステータステキスト切り詰め（60-120列）、セッション名切り詰め（40列）を端末幅に応じて拡張
- `claude agents` のアタッチ・画像ペースト・セッション復帰など複数の問題を修正
- `SendMessage` が深いTMPDIRパスで壊れる問題を修正

**UI改善**
- 起動時の通知を重要度別にグループ化、セッション情報とアナウンスを1行に集約
- 起動時警告を短く明確に書き直し、具体的な修正方法を付記
- 失敗ターンの表示をコンパクトな警告行に変更
- 「Claude in Chrome enabled」等の起動メッセージを削除

[GitHub Releases v2.1.162](https://github.com/anthropics/claude-code/releases/tag/v2.1.162)

### Project Glasswing: AIサイバーセキュリティイニシアチブ

Anthropicが12社と連携して立ち上げたAIサイバーセキュリティイニシアチブ。Claude Mythos Previewを使い脆弱性を防御的に検出する。1億ドルのモデル利用クレジットと400万ドルのOSS寄付をコミット。

### Claude on Mars: NASA火星ローバー自律走行

NASAのパーサヴィアランス・ローバーの自律走行ルートをClaudeが初めて計画。400mの岩場コースをRover Markup Languageで指示。AIが宇宙探査の自律走行に直接活用された初の事例。

### Project Deal: AIエージェント交渉マーケットプレイス

AIエージェントが人間の代理で売買交渉を行う実験的マーケットプレイス。Anthropic社員69名で検証し、OpusがHaikuより客観的に良い取引結果を達成した。

### 81,508人ユーザー調査

159カ国・70言語からの大規模定性調査。81%がAIが期待に応えたと回答。Anthropicとして最大規模のユーザー調査。

### Anthropic Academy

Claude AI活用のための学習プラットフォームを公開。API開発・MCP・Claude Codeなどのコースを提供。

## コミュニティの反応

### Claude Code v2.1.162 リリース

#### Tips

> Claude Code v2.1.162の変更点をまとめ。権限制御バグ修正とagents大幅改善を中心に解説 — @picnic [Qiita](https://qiita.com/picnic/items/49ff0025c97ab6ac1430)

### Dynamic Workflows・ultracode

#### Tips

> Claude Code「Dynamic Workflows」完全ガイド。Anthropicエンジニアが実際に使っている6つのパターンと14ステップのロードマップ — @アリヘイ [Zenn](https://zenn.dev/aria3/articles/claude-code-dynamic-workflows-6-patterns)

> Claude Code Dynamic Workflows入門。「ultracode」で何が変わるのか、数十〜数百のサブエージェントを並列実行できる仕組みを解説 — @AI Ops Insider [Zenn](https://zenn.dev/aiops_insider/articles/88dc534517e2b4)

### Opus 4.8 バグ・運用

#### ネガティブ

> Claude Code (Opus 4.8) で全ツール呼び出しが壊れるバグを報告。長時間・常時起動で発生し、日本語環境で踏みやすい未修正バグと回避策を共有（前回から継続） — @yoshi [Zenn](https://zenn.dev/edhiblemeer/articles/claude-code-opus48-tool-corruption)

#### Tips

> Anthropic Drops the Opus 4.8 Bomb — Opus 4.7から41日でリリースされた4.8の実体験レビュー。懐疑から評価変容までの記録 — @NeoTechPark [Zenn](https://zenn.dev/neotechpark/articles/53a535ca8b1586)

> Claude Opus 4.8 vs 4.7 vs Sonnet 4.6を市場分析で比較。Opusは「怪しい統計」を6/6回自発的に指摘、Sonnetは0/3回 — @EBE [Zenn](https://zenn.dev/ebe_ryuki/articles/2356a511cc21d4)

### Skills・Hooks・運用設計

#### Tips

> Claude CodeのSkillsとCommandsの作り方ガイド。よく使う作業の登録方法を整理 — @拓田しろう [Zenn](https://zenn.dev/takuta_shiro/articles/claude-code-skills-commands-guide)

> AIに同じ指示を繰り返すのをやめた。Skillを自己修復させる「再発防止ループ」。KPTによる定期点検と失敗台帳で陳腐化を防止 — @sa-san [Zenn](https://zenn.dev/satoyoshi/articles/2428152fefdd92)

> Claude Code hooks活用まとめ。安全性・ログ・作業時間を全自動化する実用的なフック3選 — @satoshi_061 [Qiita](https://qiita.com/satoshi_061/items/c3a20d437a55e59068c4)

> Claude Codeをチーム全員に安全に配ったら、安心して任せられるようになった。組織で効いた「ガードレールの型」 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/39bafd551b67e120b988)

> Commit前にAIエージェントの監査を入れる。CLAUDE.mdは「お願い」であり強制力がないため、コミット前の機械的検証が必要 — @yukineko [Zenn](https://zenn.dev/yukinekonyan/articles/e1b9bde355ea65)

### Claude Code 実践活用・ペルソナ

#### Tips

> AIに「人格」を書いたら業務連絡が消えた話。CLAUDE.mdとagentファイルに人格を書くことでAIの出力の質が変わる — @ひらの ともか [Zenn](https://zenn.dev/tomoka/articles/claude-code-agent-persona)

> Claude Code が育てる言語化能力。AIへの指示の精度が人間への依頼スキルと相関する「鏡としての効果」 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-14-073200)

> Claude Codeでの壁打ちの振る舞いを自分好みに変えてみよう。性格に合わせた回答をするスラッシュコマンドの作り方 — @a.kobayashi [Zenn](https://zenn.dev/sprix_it/articles/2cfd9e9630934e)

> 学生が Claude Code × Obsidian で「毎朝AIが書く第二の脳」を作った全手順。Daily Briefと週次レビューの自動化 — @しゅうや [Zenn](https://zenn.dev/shuya_tech/articles/c4d09ce75c39ae)

> PR前後でAIレビューを2段構えにしたら、レビュー待ちが約70%減った話。Claude Codeによるコードレビュー自動化の実践 — @rebonire [Zenn](https://zenn.dev/estie/articles/4f06bde08a90d4)

> Claude Managed Agentsで「まずエンジニアに聞こう」を「まずbotに聞こう」に変えた。dev-helpのリードタイムを10日から5時間に短縮した事例 — @まりる [Zenn](https://zenn.dev/dinii/articles/d7be3acc43d868)

### MCP活用

#### Tips

> MCPを実際に繋いでみる。GitHub・Notion・Slack 3つの実例でMCP接続ガイドを解説 — @シュンク堂 [Zenn](https://zenn.dev/shun_producer/articles/fc424bd460dd2f)

> aiterm-mcp をnpmに公開。AIに「1本の永続ターミナル」を握らせてトークン消費を削減するMCPサーバ — @QuoLu [Zenn](https://zenn.dev/kitepon/articles/aiterm-release)

> Claude Code と Datadog MCP で、SRE エージェントの評価から改善まで一気通貫でやってみた — @ishiken [Zenn](https://zenn.dev/layerx/articles/3febbbc24e55a3)

### AI業界動向

#### Tips

> AI業界の勢力図が24時間で変わった。MicrosoftのMAI 7モデル一斉公開、AnthropicのIPO観測、OpenAIの政策提言が同日に重なった分析 — @lingmu [Zenn](https://zenn.dev/lingmu/articles/2026-06-04-microsoft-mai-anthropic-ipo-openai)

> ChatGPTからClaudeに完全移行した理由。1人会社CEO・自動化率98%の環境で「品質差がそのまま収益差になった」実例 — @JOINCLASS [Zenn](https://zenn.dev/joinclass/articles/chatgpt-claude-20260602220005-14179)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
