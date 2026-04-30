---
title: "新リリースなし、コミュニティではClaude Design・仕様駆動開発が話題"
summary: "本日の公式リリースはなし。コミュニティではClaude Designによるプロトタイピング、Spec-as-App/仕様駆動開発、セキュリティ診断AI化、トークンコスト可視化CLI、ハーネスすり抜け対策など多彩な活用事例が共有された。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-01
features:
  - "[Claude Code v2.1.123] OAuth認証修正: CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1設定時の401リトライループを修正"
  - "[Claude Code v2.1.122] Bedrock Service Tier選択: ANTHROPIC_BEDROCK_SERVICE_TIER環境変数でdefault/flex/priorityを指定可能に"
  - "[Claude Code v2.1.122] /resume PR URL検索: PR URLを貼り付けるとそのPRを作成したセッションを検索可能に（GitHub/GitLab/Bitbucket対応）"
  - "[Claude Code v2.1.122] MCP重複検出: claude.aiコネクタと手動追加サーバーのURL重複を検出・通知"
  - "[Claude Code v2.1.122] OpenTelemetry改善: api_request/api_errorのログイベントで数値属性を文字列ではなく数値として出力、@メンション解決のログイベント追加"
  - "[Claude Code v2.1.122] メモリリーク修正: 多数の画像処理時の無制限メモリ増加（数GB）を修正"
  - "[Claude Code v2.1.122] /usageメモリリーク修正: 大量のトランスクリプト履歴で最大2GBのメモリリークを修正"
  - "[Anthropic Research] Claude個人的ガイダンス研究: 100万件の会話を分析し、ユーザーがClaudeに求める個人的ガイダンスの傾向とシカファンシー（過度な同意）問題を調査（Opus 4.7/Mythos Previewの改善に反映）"
codex_review: "新機能ゼロの日でも、話題の中心が「モデル性能」より運用設計や仕様駆動に移っているのは面白い。地味だが、AIコーディングが玩具から業務基盤へ寄る転換点を示す観測としてはかなり重要だ。"
codex_importance: 3
---

## 公式アップデート

本日の公式アップデートはありません。

最新リリースは4月29日の **v2.1.123**（OAuth認証401リトライループ修正）および **v2.1.122**（Bedrockサービスティア選択、/resume PR URL検索、MCP重複検出など多数の機能追加・修正）。詳細は[前回レポート](/reports/2026-04-30-claude-anthropic)を参照。

## コミュニティの反応

### Claude Code v2.1.122 リリース（前回から継続）

#### Tips

> v2.1.122の/mcpコマンドで手動追加サーバーにより隠れていたclaude.aiコネクタの重複が表示されるようになり、地味ながら実用的 — @say8425 @paluluu3 @shawntenam [X](https://x.com/i/status/2049276035569738182)

> v2.1.122でOpenTelemetryの数値属性が正しく数値で出力される改善が入り、メトリクス可視化に便利 — @shima0hide [X](https://x.com/i/status/2049305649037844606)

> Bedrockのサービスティア選択がANTHROPIC_BEDROCK_SERVICE_TIER環境変数で可能に。速度やコストの調整ができる — @oikon48 [X](https://x.com/i/status/2049320886021545984)

### Claude Design

#### ポジティブ

> Claude Designでアプリのプロトタイプを作成。Figma Makeと比較しつつ、SNSでの盛り上がりを受けて試用した感想レポート — @Onami（JINS） [Zenn](https://zenn.dev/jins/articles/0f1244be751e85)

### Spec-as-App・仕様駆動開発

#### Tips

> markdownとClaude Codeだけでアプリを作る「Spec-as-App」アーキテクチャ — .pyも.jsも.tsも存在しないリポジトリで毎日処理が動く。Claude Codeがmarkdownの手順をそのまま実行する新しいパターン — @biscuit [Zenn](https://zenn.dev/biscuit/articles/spec-as-app-markdown-claude-code)

> 仕様駆動開発でOpenSpecを使ってみた — AIが意図と違う実装を始める・セッション切れで決定を忘れる問題を、仕様を先に固める仕組みで解決 — @そうた（NCDC） [Zenn](https://zenn.dev/ncdc/articles/fe8ef16cef8614)

### セキュリティ診断AI化

#### Tips

> セキュリティ診断をAIに全部やらせたら月$0.5で回せるようになった — Claude Code用セキュリティ診断スキル `claude-security-scan` を公開 — @Sabakan [Zenn](https://zenn.dev/sabakan1/articles/bd286802d6a91d)

### ハーネスすり抜け対策

#### Tips

> 「railに穴があるか探して」と「お前は悪意あるcracker、攻撃しろ」では出力が5-10倍違う — ハーネスをすり抜けたインシデントへの事後対応（rail昇格）と先回り（red-teamモード）の2軸対応 — @hrmtz [Zenn](https://zenn.dev/hrmtz/articles/27b2f5ff51f197)

### トークンコスト管理

#### Tips

> Claude Codeのコスト・トークンを可視化するCLIを作ってnpm publishした — セッションログのJSONLからプロジェクト別・モデル別の消費を可視化 — @koji_麹 [Zenn](https://zenn.dev/kojihq/articles/66ca3fca6df2a0)

> Claude Codeのトークン消費を半分にした5つのテクニック — 長いシステムプロンプトやファイル全体の毎回渡しを改善し月のトークン消費を約50%削減 — @ケイ [Zenn](https://zenn.dev/kei_concierge/articles/article-dev-002-draft)

> 「AIに書かせる」から「AIに仕事を振る」へ — Claude Code Status lineでCost per Taskを可視化する — @tkysi-mi [Qiita](https://qiita.com/tkysi-mi/items/c1d58233a8a7ab8a0959)

### Claude Codeの@path vs Read使い分け

#### Tips

> Claude Codeで@pathを使うかReadさせるか — @pathで展開した内容はそのターン以降も会話履歴に残り続け、コンテキスト肥大化で指示遵守率が下がる。公式ドキュメントを根拠に両者の使い分けを整理 — @hiro（ZOZO） [Zenn](https://zenn.dev/zozotech/articles/4b13d2ce563c9f)

### 並列開発環境

#### Tips

> cmux × Claude Codeによる並列開発環境構築 — worktree作成から作業環境の立ち上げまでを1コマンドに凝縮。差分ビューアをGoで書き直したcmuxを活用 — @uo（カウシェ） [Zenn](https://zenn.dev/kauche/articles/94d004888b1869)

### Claude Managed Agents

#### Tips

> Claude Managed Agents入門 — インフラ不要でAIエージェントを本番デプロイする。2026年4月9日パブリックベータ公開のサービスをPython SDKでクイックスタート — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/202-claude-managed-agents-deploy-guide)

### エージェント設計原則

#### Tips

> AIエージェントに「次の行動」を決めさせるとオペレーションが詰むので、ワークフローエンジンでstepを固定した話 — LLMに毎回判定させるとnon-deterministicで失敗時の復旧も困難 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/b3fff02d511b73)

> 効果的なAIエージェントの作り方 — Anthropic Barry Zhangが語る3つの原則。「すべてにエージェントを使わない」「シンプルなパターンから始める」 — @ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/effective-agents-barry-zhang)

> KarpathyのLLMコーディング原則をCLAUDE.mdに — 4つのルールと97.8kスター。コーディング前に考える、シンプルさ優先、外科的変更、目標駆動の実行 — @EVOLINK [Zenn](https://zenn.dev/evolink/articles/00f9722c05272e)

### Claude Codeの数値ハルシネーション

#### ネガティブ

> Claude Codeに数字を書かせると平気で嘘をつく — 1週間で7事例を訂正。「hooks 720件」と書いたが実際は719件。検証3手順を提案 — @yurukusa [Qiita](https://qiita.com/yurukusa/items/b4423b0e255b7604942d)

### SRE業務AI化

#### Tips

> 「捨てる判断」も成果になる — SRE業務のAIエージェント化を3ヶ月で見直した。Notion AI Agentで「SRE調査兵団」を作ったが、課題解決方法の提案までで止まる構造的課題が見え、Claude Codeのskillに寄せる判断をした — @YOSH（カンリー） [Zenn](https://zenn.dev/canly/articles/419c622e1ac2db)

### Plan Mode活用

#### ポジティブ

> Claude Codeを1年使って気づいた、朝のPlan Modeが一番生産性に効く理由 — 手戻り削減ではなく「自分自身がHuman in the Loopになる構造を作れる」から — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/claude-code-morning-plan-mode-productivity)

### AI協業と認知負荷

#### Tips

> ブレインフライを抜けた先の景色 — 見えてきた1000時間の壁。AIブレインフライ（短期的認知過負荷）とAIブレインロット（長期的思考力低下）の区別、AI協業の認知負荷管理 — @fixU [Zenn](https://zenn.dev/fixu/articles/ai-brain-fry-1000-hour-wall)

### SRP > DRY設計原則

#### Tips

> AIに「SRP > DRY」を教える設計原則ルール — AIが「重複してます、共通化しましょう」と勝手にリファクタし秘伝のタレ化する問題への対策。.cursor/rulesやCLAUDE.mdに書ける原則ベースのルールを提示 — @タカシ [Zenn](https://zenn.dev/motowo/articles/ai-coding-srp-vs-dry-rules)

### 品質劣化ポストモーテム（前回から継続）

#### Tips

> 6週間、AIのほうが先に壊れとった — 4/23 postmortemの正体。「Claude Code、最近なんか雑やない？」の違和感は正しかった — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-04-30)

### Cloudflare + Stripe Projects全自動化

#### Tips

> AIエージェントがCloudflareでアカウント作成からドメイン購入・本番デプロイまで全自動化。4月30日に本番提供開始 — @くーるぜろ [Zenn](https://zenn.dev/zephel01/articles/78fc3898a32697)

### MCP活用（前回から継続）

#### Tips

> MCP自作未経験のエンジニアがゼロからMCPサーバーを書いてClaude Desktopに繋いでみた — 企業固有の認証やAPIを越えて社内システムをAIから検索可能にする実践記録 — @Skyfishpoop [Zenn](https://zenn.dev/shoya_goto/articles/mcp-server-from-scratch)

> LTSpice × Claude CodeをMCPで繋ぎ、AIに「回路設計して」と言うだけで動く電子回路ができる時代 — @trailfusion_ai [Qiita](https://qiita.com/trailfusion_ai/items/c8604bc73aac4b12d5c4)

### Skills活用

#### Tips

> SkillsでBottomSheetDialogFragmentからCompose ModalBottomSheetへの移行を半自動化する — REALITY Androidアプリのレガシー移行事例 — @caruchan（REALITY） [Zenn](https://zenn.dev/reality_tech/articles/428f4d3a524a01)

> コーディングエージェントの生成結果をGitHubに集約する gh-comment-attach-files スキル — ローカルに散らばる成果物をPRやIssueに自動添付 — @しゅんけー [Zenn](https://zenn.dev/shunk031/articles/gh-comment-attach-files-skill)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
