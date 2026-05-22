---
title: "v2.1.148緊急パッチ、Glasswing初期成果1万件超の脆弱性発見"
summary: "Claude Code v2.1.148でv2.1.147のBashツールexit code 127リグレッションを修正。Project Glasswingが約50パートナーと1ヶ月で重要インフラソフトウェアの1万件超の高/重大脆弱性を発見したと報告。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-23
features:
  - "Claude Code v2.1.148: Bashツールexit code 127リグレッション修正"
  - "Project Glasswing初期成果: 約50パートナーと1万件超の脆弱性発見"
  - "Claude Code v2.1.147: /code-reviewコマンド（前回から継続）"
  - "Claude Code v2.1.147: ピン留めバックグラウンドセッション（前回から継続）"
  - "Claude Code v2.1.147: オートアップデーター改善（前回から継続）"
  - "Claude Code v2.1.147: プロンプト履歴の重複排除（前回から継続）"
  - "Project Glasswing: Claude Mythos Preview（前回から継続）"
codex_review: "緊急パッチ自体はプロダクト運営として当然で、ニュースの芯はむしろGlasswing。1万件超は派手だが精査前の件数先行にも見え、とはいえ防御AIの実装力では一段抜けた。"
codex_importance: 4
---

## 公式アップデート

### Claude Code v2.1.148（緊急パッチ）

5月22日リリース。v2.1.147で導入されたリグレッションの修正のみ。

- Bashツールが一部ユーザーですべてのコマンドに対してexit code 127を返す問題を修正

v2.1.147のリリースからわずか数時間での緊急パッチ。自動化スクリプトやCI/CDパイプラインでClaude Codeを利用しているユーザーに影響があった。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.148)

### Claude Code v2.1.147（前回から継続）

前回レポートで詳報済み。主な新機能は`/code-review`コマンド（`/simplify`から改名）、ピン留めバックグラウンドセッション、オートアップデーター改善など。本日の追加情報なし。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.147)

### Project Glasswing 初期成果報告

5月22日、Anthropicが発表。AIを防御的サイバーセキュリティに活用する共同イニシアチブ「Project Glasswing」の初期成果として、以下を報告。

- 約50のパートナー組織と連携
- 開始から1ヶ月で重要インフラソフトウェアの**10,000件以上の高/重大脆弱性**を発見
- Claude Mythos Previewモデルを40以上の重要インフラ組織に提供
- $100Mのモデル使用クレジットを投資

前回報告のProject Glasswing発表（Claude Mythos Preview提供開始）からの進捗報告。脆弱性発見の具体的な件数が初めて公開された。

## コミュニティの反応

### Claude Code v2.1.148 緊急パッチ

#### ポジティブ

> Claude Code v2.1.148。前バージョンで壊れたBashツールのexit codeが7時間以内に修正された。自動化スクリプトを使っている人には地味に重要な緊急パッチ — @aiskillhack

#### ネガティブ

> Claude Code v2.1.148まで上げたけど、改善せず — @ik11235

### Claude Code スキル・拡張の選別と運用

#### Tips

> Claude Code拡張を47個試して5個に絞った話。3か月運用した結果の絞り込み過程と判定軸を公開 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/claude-code-extensions-47-to-5-narrowing)

> 推測→変更→また壊れる：コーディングエージェントの悪循環に/tddと/diagnoseを差し込む。変更が正しいかを判定する材料をエージェントに与える手法 — @53able [Zenn](https://zenn.dev/53able/articles/71c91cb2ba61fd)

> 情報の信頼性を体系的に評価する2つのClaude Skillを公開。ファクトチェック（20項目×4カテゴリ）とメディアリテラシーチェック（30項目×6カテゴリ） — @shuji [Zenn](https://zenn.dev/shuji_bonji/articles/61492d78166e0f)

> Claude Codeの出力をVSCodeでファイルとして開くSkillsを作成。長文のPlanモード出力などをファイルとして閲覧可能に — @Nishi [Zenn](https://zenn.dev/zaico/articles/3315d720af724c)

> 日々の開発で使っているClaude Code Skills。brainstorming、subagent-driven-development、executing-plansの活用法 — @inari111 [Zenn](https://zenn.dev/remitaid/articles/4f9dc787b6c191)

### Claude Code Hooks実践

#### Tips

> Claude Code hookでAI coding assistantの規律を補強する。Stop/PreToolUse/PostToolUse/PostToolUseFailureのhook機構による個人運用の設計パターン — @Ymori [Zenn](https://zenn.dev/shogaku/articles/claude-code-hook-discipline)

> Claude Code Hooks応用編、個人からチーム展開への本格運用ガイド。仕様駆動開発のドリフト検出、秘匿情報の3段階防御、Git連携、監査ログ、CVE脆弱性対策 — @まさやん [Zenn](https://zenn.dev/masayan1126/books/claude-code-hooks-advanced)

> Claude CodeのHooksとSkillsで「社内展開していいか」を自動チェックする仕組み。プロンプトインジェクション対策の漏れまで指摘された実例 — @Ayaka [Zenn](https://zenn.dev/nexta_/articles/962f0448a37d7a)

### Claude Code CI/CD・レビュー連携

#### Tips

> Claude Code ReviewをGitHub Actionsに5分で導入する。Maxプラン枠内でCIからコードレビューを回す仕組み — @R.A [Zenn](https://zenn.dev/reformas/articles/67e67b05c58591)

### Claude Code 安全性・品質課題

#### Tips

> AIに任せた作業が「成功しました」と返ってきたのに、実は何もしていなかった — 130件集めて気付いた共通の構造。9日間で115件追加、合計130件の同型失敗を分析 — @ゆるくさ [Zenn](https://zenn.dev/yurukusa/articles/09073fe2ee620b)

> Claude Codeのハーネスは下から積め。MCPから入って壊した3ヶ月で学んだ積み上げ順。CLAUDE.md→hooks→skills→sub-agents→MCPの5層 — @daisuke-nagata [Qiita](https://qiita.com/daisuke-nagata/items/8f82bb7e2d51343657fd)

### Claude Code コスト管理

#### Tips

> Claude Codeが高すぎるからコスト管理できるVS Code拡張機能を素人が自作した話「Torii」。Proプランの5時間/1週間制限に対応 — @2dachs [Zenn](https://zenn.dev/2dachs/articles/8b37c3fa916f8d)

> Claude CodeでOpus 4.6を使う方法。`/model claude-opus-4-6[1M]`でモデルIDを直接指定 — @米本 竜馬 [Zenn](https://zenn.dev/shromesh/articles/claude-code-opus-4-6)

> GitHub CopilotでOpus 4.7の消費トークンが15倍に。制限の理由と今後の賢い使い分け方 — @クロダイ [Zenn](https://zenn.dev/mavericks/articles/5c0afc418be18d)

### AI時代の開発手法

#### Tips

> AIが90%のコードを書く時代の開発現場。Anthropic・Palantir・Metaの公開情報から読み解く。132名サーベイ+53名インタビュー+20万本のClaude Code分析 — @ShintaroAmaike [Zenn](https://zenn.dev/shintaroamaike/articles/fd55b47f25a643)

> AI出力をMarkdownではなくHTMLにする流れ。Anthropicエンジニアの提案が公式ブログ記事にもなった — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/ai-output-html-era)

> Claude CodeでHTMLダッシュボードを試したら、19件の事故ログから監査ツールが生まれた — @saitoko [Qiita](https://qiita.com/saitoko/items/f604b342fd4d5811726f)

### Claude for Legal / MCPサーバー活用

#### Tips

> Claude for Legalを触ってみた。契約大臣と連携して契約レビューを自動化。20種類以上のMCPコネクタと12種類のプラグイン — @A.Yasutake [Zenn](https://zenn.dev/teradox_blog/articles/e25178b03748f5)

> Fusion360のClaude MCPサーバーの限界を追究する。ラズパイ5のケース作成やCAD干渉検出が可能 — @のぶ [Zenn](https://zenn.dev/ux_xu/articles/c2bd0151918f66)

### Claude API開発

#### Tips

> Claude API Fine-Grained Tool Streaming入門。ツール呼び出しパラメータをストリーミングで逐次受信する低遅延エージェント実装 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/218-claude-api-fine-grained-tool-streaming-guide)

> Claude ConsoleにPromptキャッシュ診断機能が追加。キャッシュミスの原因を特定可能に — @ty [Zenn](https://zenn.dev/ty2/articles/tweet-claudedevs-2056434422229123106)

### Anthropic Mythos（前回から継続）

#### Tips

> なぜ、AnthropicのMythosはコケおどしであると断言できるのか？ 能力は認めつつもパラダイムシフトとして語る妥当性を批判的に分析 — @pdfractal [Zenn](https://zenn.dev/pdfractal/articles/b5cb37ea30814c)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
