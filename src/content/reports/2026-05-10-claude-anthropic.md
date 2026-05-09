---
title: "Claude on Mars事例発表・v2.1.138リリース・セキュリティ活用広がる"
summary: "NASA JPLがPerseverance Roverの経路計画にClaudeを使用した事例ページを公開。Claude Code v2.1.137/v2.1.138がリリース。コミュニティではセキュリティ監査やQCD比較、MCPファースト設計など実践的な活用記事が増加。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-10
features:
  - "Project Glasswing / Claude Mythos Preview"
  - "Claude on Mars事例発表"
  - "Claude Code v2.1.138リリース"
  - "Claude Code v2.1.137リリース"
  - "settings.autoMode.hard_deny"
  - "CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL"
  - "WSL2画像ペースト対応"
codex_review: "火星探査の看板は目を引くが、業界的にはセキュリティ監査やMCP前提設計の記事群の増加のほうが重要に見える。派手さより実務の定着が進んだ週だ。"
codex_importance: 3
---

## 公式アップデート

### Claude on Mars事例発表（前回から継続）

NASA JPLがPerseverance Roverの火星表面経路計画にClaudeを初使用した事例ページを公開。

### Project Glasswing / Claude Mythos Preview（前回から継続）

サイバーセキュリティ特化のフロンティアモデルを限定パートナー12社に早期提供。ゼロデイ脆弱性の自律的発見・分析が可能。

### Claude Code v2.1.138リリース

5月9日リリース。内部修正のみ。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.138)

### Claude Code v2.1.137リリース

5月9日リリース。VSCode拡張がWindows上でアクティベーションに失敗する問題を修正。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.137)

### Claude Code v2.1.136（前回から継続）

5月9日リリース。`settings.autoMode.hard_deny`、`CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL`、WSL2画像ペーストPowerShellフォールバック、MCP OAuth修正など多数の変更。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.136)

## コミュニティの反応

### autoMode.hard_denyとAuto Mode運用（前回から継続）

#### Tips

> Claude Code v2.1.136の新アップデートで「hard_deny auto rules」が追加され、MCPサーバーの改善やOAuth修正などの変更が紹介されている — @LLMpsycho [X](https://x.com/i/status/2052832751577960751)

> Claude Code 2.1.136でCLIとsyspromptの変更があり、新たにautoMode.hard_denyが無条件ルールとして追加された — @BrunoLM7 [X](https://x.com/i/status/2052837577997070789)

### WSL2画像ペースト対応（前回から継続）

#### ポジティブ

> Claude Code v2.1.136の更新でWSL2画像貼り付けが改善され、日常利用の安定性が向上した — @haboshiastra [X](https://x.com/i/status/2052828550806512105)

> Claude CodeをWSL2上で使い、使い捨てツール作成が容易になり作業効率が大幅に向上した — @snapwith [X](https://x.com/i/status/2052717148813115546)

#### Tips

> Claude Code v2.1.136ではWSL2/SSH/IPv6認証対応やMCP再接続改善が含まれ、長時間セッションの安定化が進んでいる — @masahirochaen [X](https://x.com/i/status/2052886319551197543)

> WSL2上でClaude Codeを使い分け、WindowsではCodexをメインに両刀使いで運用中 — @snapwith [X](https://x.com/i/status/2053121291197284474)

### Project Glasswing / Claude Mythos Preview（前回から継続）

#### Tips

> Claude Mythos徹底解剖：50ドルで27年モノのゼロデイ脆弱性を発見、既存の防壁はなぜ崩壊したか — @lumichy [Qiita](https://qiita.com/lumichy/items/ca08963aa1a7b5e4554c)

### Claude on Mars事例発表

該当なし（品質基準を満たす投稿なし）

### Claude Codeセキュリティ・安全性

#### Tips

> Claude Codeにセキュリティ監査をさせる方法。実際に見つかった脆弱性5つを紹介 — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-claude-code-security-audit)

> 個人用 Claude Code セキュリティポリシー。AIエージェントをどのようなルールのもとで使用しているかを明示 — @kagu3 [Zenn](https://zenn.dev/kagu3/articles/21ba8294b513fa)

> Claude Code・Codex・Gemini-CLIの「Approve Once」問題。信頼永続化と対策を完全整理 — @amu_lab [Zenn](https://zenn.dev/amu_lab/articles/ai-coding-agent-trust-persistence-guide-2026)

> Claude Codeのフック5個で「うっかり事故」を本気で潰した話 — @Ngen [Qiita](https://qiita.com/Ngen/items/dd5090c6d05ec9c7994c)

> 「設定したのになぜ？」Claude Codeのパーミッションが効かない理由と、今すぐできる対策 — @enomoso_pm [Qiita](https://qiita.com/enomoso_pm/items/623bd77ce2bb89569e3d)

### Claude Code活用事例・比較

#### Tips

> Claude Code・Codex CLI・Copilot CLIをQCDで比較。90回解かせた結果、品質はほぼ並び「迷ったらClaude Code、コスト優先ならCopilot CLI」 — @Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-16-rpi4-qcd)

> Kotlin未経験のAIエンジニアが、Claude Codeで3日でギター練習Androidアプリを作った — @ykenk [Zenn](https://zenn.dev/ykenkou001/articles/fret-interval-android-guitar-app)

> Claude Codeで売上が下がった原因をBigQueryから自動で仮説生成させる — @ウェブの便利屋 [Zenn](https://zenn.dev/web_benriya/articles/claude-code-bigquery-revenue-drop-hypothesis)

> LINEで話すだけで見積書PDFが届くSaaSをClaude Codeと2週間で作った — @イウダケ [Zenn](https://zenn.dev/iudake/articles/58d082be9d9175)

> Codexを「コーディングツール」だと思っていたら、全然違った——後編：自動化・マルチタスク・Claude Codeとの使い分け — @みお [Zenn](https://zenn.dev/kenworkflow/articles/474853a25d8507)

> Windows タスクスケジューラ × Claude Code で自分専用新聞を作った話 — @cnative_tkb [Zenn](https://zenn.dev/cnative_tkb/articles/9701bb43ffc74f)

> Claude Code × OCI Always Free 完全構築ガイド。月額0円のリモート開発環境構築 — @Sin9_Ha [Zenn](https://zenn.dev/sin9_ha/books/claude-code-oci)

### Claude Code Skills・開発手法

#### Tips

> Claude Code Skills で /briefing コマンドを5分で実装する — @hinaworks [Qiita](https://qiita.com/hinaworks/items/93ae032d392bdad25655)

> Claude Codeのskill機能を本格的に試す。開発フローを丸ごと任せてPRまで完結させた話 — @atsushi11o7 [Qiita](https://qiita.com/atsushi11o7/items/5cbef4b10f3ec55c75a1)

> イシューベースでアウトプット制作をサポートするClaude Codeプラグイン「cadenza」を作った — @yoko [Zenn](https://zenn.dev/yokomachi/articles/202605_cadenza)

> プロが毎日使ってるClaude Codeの隠しコマンド＆ショートカットキー — @こばゆう [Zenn](https://zenn.dev/siromiya/articles/74b72b2d3d3388)

> Claude Code 初心者が `.claude/` の設定で Zenn 記事執筆をワークフロー化するまで — @かと [Zenn](https://zenn.dev/ykato/articles/20260509_claude_code_zenn_workflow)

### Claude Codeの記憶・コンテキスト管理

#### Tips

> プロンプトより大事なこと。Claude Codeのコンテキスト管理術。「良い指示」より「良い記憶管理」 — @Inaki [Zenn](https://zenn.dev/inaki/articles/e272645736736b)

> Claude Codeのlearning modeを活用して学習目的でRustアプリを構築した過程まとめ — @cafenoctia [Zenn](https://zenn.dev/octabird/articles/d512ef11a5580e)

### MCPファースト設計

#### Tips

> LLMから呼ばれるアプリをMCPファーストで設計するときの3つの原則。画面→API→MCPの順では破綻する — @ykenk [Zenn](https://zenn.dev/ykenkou001/articles/mcp-first-regulatory-saas)

### Anthropicエンタープライズ戦略

#### Tips

> ソフトウェアは流体になる。Anthropic Field CTOが語ったエージェント時代のエンタープライズ戦略【Next'26レポート】 — @Takashi Funato [Zenn](https://zenn.dev/softbank/articles/e5a41700759993)

> The Anthropic Institute: AIの現実世界への影響を研究する新研究機関の研究アジェンダ解説 — @shunxneuro [Zenn](https://zenn.dev/shunxneuro/articles/fcb5528995b1aa)

### Claude Opus 4.7（前回から継続）

#### Tips

> Claude Opus 4.7はAWS経由だと出力速度が速い。Artificial Analysisのベンチマーク比較 — @yoheikikuta [Zenn](https://zenn.dev/aws_japan/articles/2026-05-08-opus4-7-speed)

> Claude × Gemini マルチモデルゲートウェイをCloud Runで構築する — @Yuting Lin [Zenn](https://zenn.dev/google_cloud_jp/articles/dc94019b3d3977)

### Claude Codeレート制限倍増（前回から継続）

#### Tips

> クロード利用可能量倍増。5時間制限緩和、月20ドル以上のプラン対象 — @情報経済新聞 [Zenn](https://zenn.dev/johokeizai/articles/37909039762c3b)

### Claude API・ワークフロー活用

#### Tips

> Claude Haiku 4.5 + n8n で問い合わせ対応ワークフローを作ったら、100%精度・1件0.5円で運用できた — @AI Flow Lab [Zenn](https://zenn.dev/aiflowlab/articles/n8n-claude-haiku-inquiry-workflow)

> AIは仕事を奪うのか？ザッカーバーグ発言から読み解く「コストが下がると雇用が増える」のメカニズム — @ふみ [Zenn](https://zenn.dev/bentenweb_fumi/articles/kaomziwqzgkk)

> 「分」から「秒」へ。AI作業時間見積もりが人間スケールに引きずられる罠のアンラーニング — @fixU [Zenn](https://zenn.dev/fixu/articles/minutes-to-seconds-ai-speedup-matrix)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
