---
title: "Opus 4.7正式リリース、Claude Design発表"
summary: "Claude Opus 4.7が正式リリース。SWE-bench Verified 87.6%、xhighエフォートレベル、タスク予算機能を搭載。新プロダクトClaude Designも発表。Claude Code v2.1.110〜v2.1.113で大量の機能追加。"
importance: 5
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-18
features:
  - "Claude Opus 4.7"
  - "タスク予算機能パブリックベータ"
  - "Claude Design (Anthropic Labs)"
  - "Claude Code v2.1.111 - Opus 4.7 xhighエフォートレベル"
  - "Claude Code v2.1.111 - Auto mode"
  - "Claude Code v2.1.111 - /ultrareview"
  - "Claude Code v2.1.111 - /less-permission-prompts"
  - "Claude Code v2.1.111 - /effortインタラクティブスライダー"
  - "Claude Code v2.1.111 - Auto (match terminal)テーマ"
  - "Claude Code v2.1.111 - PowerShellツール"
  - "Claude Code v2.1.113 - ネイティブバイナリCLI"
  - "Claude Code v2.1.113 - sandbox.network.deniedDomains"
  - "Claude Code v2.1.113 - /ultrareview改善"
  - "Claude Code v2.1.113 - サブエージェント停滞タイムアウト"
codex_review: "性能向上そのものより、task budgetsやCLIの安全性改善まで一気に詰めた点が効いている。派手さはClaude Designに集まるが、実際に業界を動かすのは運用と開発体験の地味だが重い更新だと思う。"
codex_importance: 5
---

## 公式アップデート

### Claude Opus 4.7 正式リリース

前回レポートでリーク報道として伝えていたClaude Opus 4.7が2026-04-16に正式リリースされた。コーディング能力・ビジョン機能を大幅に強化した新フラッグシップモデル。

**主な特徴:**
- **SWE-bench Verified**: 80.8% → 87.6%に大幅向上。GPT-5.4・Gemini 3.1 Proを上回る
- **画像解像度**: 最大2,576pxに対応（3倍以上の改善）
- **価格**: Opus 4.6と同価格を維持
- **instruction following**: 厳密化。プロンプトへの忠実度が向上

### タスク予算機能（パブリックベータ）

Opus 4.7向けのタスク予算（task budgets）機能がパブリックベータとして提供開始。長時間エージェント実行時のコスト制御に使用できる。

### Claude Design（Anthropic Labs）

Anthropic Labsから新プロダクト「Claude Design」が発表された。Pro/Max/Team/Enterpriseプランでリサーチプレビューとして利用可能。

**主な特徴:**
- デザイン・プロトタイプ・スライド・ワンページャーをClaudeと協働制作
- Opus 4.7搭載
- Canva/PDF/PPTX/HTMLエクスポート対応

### Claude Code v2.1.113

2026-04-17リリース。セキュリティ強化とUX改善を含む大型パッチ。

**主な変更点:**
- **ネイティブバイナリCLI**: バンドルJavaScriptからプラットフォーム別ネイティブバイナリへ移行
- **sandbox.network.deniedDomains**: 広い`allowedDomains`ワイルドカード配下でも特定ドメインをブロック可能に
- **フルスクリーンモード**: Shift+↑/↓で選択範囲拡張時にビューポートスクロール
- **/ultrareview改善**: 並列チェックで高速起動、diffstat表示、アニメーション付き起動状態
- **サブエージェント停滞タイムアウト**: ストリーミング停止時に10分後エラーで失敗
- **Bashツールセキュリティ**: `env`/`sudo`/`watch`等のexecラッパー経由コマンドもdeny rule対象に
- **`find -exec`/`-delete`**: `Bash(find:*)`許可ルールで自動承認されなくなった
- **`/extra-usage`**: Remote Controlクライアントから利用可能に
- 多数のバグ修正（マークダウンテーブルのパイプ文字、セッションrecapの自動発火、MCP並行呼び出しタイムアウト等）

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.113)

### Claude Code v2.1.112

2026-04-16リリース。「claude-opus-4-7 is temporarily unavailable」エラーのauto modeでの修正。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.112)

### Claude Code v2.1.111

2026-04-16リリース。Opus 4.7対応を中心とした大型アップデート。

**主な変更点:**
- **Opus 4.7 xhighエフォートレベル**: highとmaxの間の新レベル。`/effort`、`--effort`、モデルピッカーから選択可能
- **Auto mode**: Maxサブスクライバー向けにOpus 4.7で利用可能に。`--enable-auto-mode`フラグ不要化
- **/ultrareview**: クラウド上で並列マルチエージェント分析によるコードレビュー実行
- **/less-permission-prompts**: トランスクリプトから読み取り専用ツール呼び出しをスキャンし許可リスト提案
- **/effortインタラクティブスライダー**: 引数なし呼び出しで矢印キー操作のスライダーUI表示
- **Auto (match terminal)テーマ**: ターミナルのダーク/ライトモードに自動追従
- **PowerShellツール**: Windows向けプログレッシブロールアウト開始。Linux/macOSは`CLAUDE_CODE_USE_POWERSHELL_TOOL=1`で有効化可能
- 読み取り専用bashコマンドのglob（`ls *.ts`）やプロジェクトディレクトリへの`cd &&`で権限プロンプト不要に
- タイポ時のサブコマンド候補提案
- プランファイルの命名がプロンプト由来に

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.111)

### Claude Code v2.1.110

2026-04-15リリース。TUIモード追加、プッシュ通知、多数の改善。

**主な変更点:**
- **/tuiコマンド**: フリッカーフリーレンダリングのフルスクリーンモードへ同一会話内で切替
- **プッシュ通知ツール**: Remote Controlと「Push when Claude decides」設定有効時にモバイルプッシュ通知送信可能
- **autoScrollEnabled設定**: フルスクリーンモードの自動スクロール無効化オプション
- **Writeツール**: IDE diffで編集後にモデルへフィードバック
- **`--resume`/`--continue`**: 期限切れでないスケジュールタスクを復活
- 多数のバグ修正（MCP接続切断時のハング、フルスクリーンCPU使用率等）

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.110)

### Claude Code v2.1.108（前回から継続）

Recap機能、`ENABLE_PROMPT_CACHING_1H`環境変数等。前回レポート参照。

### Claude Code v2.1.105（前回から継続）

EnterWorktreeの`path`パラメータ、PreCompactフック、plugin monitors等。

## コミュニティの反応

### Claude Opus 4.7

#### Tips

> Claude Opus 4.7 徹底レビュー -- xhigh・/ultrareview・タスク予算で何が変わったか。SWE-bench 87.6%、GPT-5.4・Gemini 3.1 Pro超え — @soushu [Zenn](https://zenn.dev/soushu/articles/2026-04-17-claude-opus-4-7)

> Claude Opus 4.7 新機能の紹介。Office文書直接編集、知識労働・記憶の実用的進化 — @YuyaUshijima [Zenn](https://zenn.dev/nttdushijima/articles/f891609185f401)

> Claude Opus 4.7が来た！変わったポイントを実際に試してみた。xhigh・task budgets・instruction following厳密化 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-opus-47-released-20260417)

> 【Opus 4.7】本家エンジニアBoris Chernyが教える、4.7を最大限活かす6つのヒント — @Na [Zenn](https://zenn.dev/yuche/articles/claude-code-opus-4-7-tips)

> LLM開発者のための「Claude Opus 4.7」アーキテクチャ再考：モデルの進化が変える RAG と Memory の境界線 — @Memorylake AI [Zenn](https://zenn.dev/memorylakeai/articles/200620f8c0314d)

#### ネガティブ

> Opus 4.6→4.7移行で見落とすと課金が最大35%増える話。トークナイザー更新で同じ入力が1.0〜1.35倍のトークン数に。xhigh/maxでは思考量増加、Task budgets必須 — @GeneLab [Zenn](https://zenn.dev/genelab_999/articles/edfd838c0ac983)

### Claude Design

#### Tips

> ざっくりClaude Designを触ってみたので共有する。FigmaともLovableとも異なる独自ポジション — @yoko / Naoki Yokomachi [Zenn](https://zenn.dev/yokomachi/articles/202604_claude_design_chottodake)

> 【Skills配布あり】スライドはClaude Coworkで作ろう。Skillsで自社フォーマットのスライドを自動生成する — @アンドドット広報チーム [Zenn](https://zenn.dev/and_dot/articles/6f9c0b71acca52c1)

### Claude Code v2.1.111 Auto mode・xhigh

#### Tips

> Claude Code モデル別に追加耐性テストをしてみた。機能追加時の既存コード破壊をモデル間で比較 — @aito1234 [Qiita](https://qiita.com/aito1234/items/11c70a0b2a2362a5c913)

### Claude Code Routines（前回から継続）

#### Tips

> 【Claude Code Routines】「常駐しないAIエージェント」の仕組みと何が変わるのかを解説。PCつけっぱなし不要、クラウド上で自律実行 — @isa [Zenn](https://zenn.dev/aiforall/articles/6992c227994c51)

### Claude Code 開発手法・ワークフロー

#### Tips

> Claude Codeの生みの親 Boris Cherny氏による『30分でClaude Codeをマスターする』公式セッション聴講レポート — @しんや [Zenn](https://zenn.dev/truestar/articles/21ddde684eb51b)

> 【Claude Code】コマンドは3つだけ！どんどんClaudeと分かり合えるハーネスエンジニアリング実践編。log → distill → promoteの3コマンド運用 — @ko.+ [Zenn](https://zenn.dev/happy_elements/articles/acb15bb96e7024)

> Claude Codeのスキルファイル分割パターン──「1スキル=1責務」でAIの精度が劇的に変わる — @ふみ_BENTEN WebWorks [Zenn](https://zenn.dev/bentenweb_fumi/articles/twde0igmoklh)

> Claude Code × MCP サーバー自作ガイド｜独自ツールを生やす実践手順 — @まさ＠ClaudeCodeLab [Zenn](https://zenn.dev/masa1990/articles/claude-code-mcp-server-guide)

> Figma MCP でデザイン通りに AI コーディングするためのプラクティス — @サカツ | PeopleX [Zenn](https://zenn.dev/peoplex_blog/articles/2604-figma-ai-coding-practices)

> Roborazzi + Claude Code でスクリーンショットテストを PR フローに組み込んだ話 — @satoyu [Zenn](https://zenn.dev/dely_jp/articles/c1a02f1a9d6412)

> 【Claude Code】Workflowを自分で作ってみた！サブエージェント呼び出し順序を事前定義 — @sika7 [Zenn](https://zenn.dev/sika7/articles/778304406e60e0)

> Claude Code: スラッシュコマンドの `model` 指定が /compact を誤発火させる落とし穴 — @Kento Nishio [Zenn](https://zenn.dev/genda_jp/articles/9228f64c472e98)

> 長期運用プロジェクトで AI 生成テストコードの品質を安定化させる。テストコード規約のagent向け整備 — @choclucy [Zenn](https://zenn.dev/techtrain_blog/articles/f9db307969380e)

> Claude Codeだけで世界地図ゲームを作ってローンチした話。コード100%をClaude Codeが記述 — @LocoCount [Zenn](https://zenn.dev/lococount/articles/f91f3a5a3e6409)

> Claude Codeをまじめにセットアップしてみる(Codexも見据えて)。公式ベストプラクティスを読み解く — @teraco [Zenn](https://zenn.dev/teraco/articles/385bc2beb7f627)

> CLAUDE.mdを「置くだけ」で終わっていないか — 実運用で磨いた設計パターン7選 — @今井政和 [Zenn](https://zenn.dev/orectic/articles/claude-code-claude-md-design-patterns)

> Claude Codeの全機能を「飲食店の厨房」で完全理解する。6つのレイヤーで機能体系を整理 — @Shuhei Fukami [Zenn](https://zenn.dev/blacook/articles/326c50c38e26b5)

> 【Claude Code】アップデートされたDesktop版を触ってわかったCLIとの違い — @okawa_ [Zenn](https://zenn.dev/solvio/articles/901772dcec88cc)

> Claude Desktop 新機能2026｜UI刷新・Routines・使い分け解説 — @とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/claude-desktop-ui-update-2026)

### Claude Code コスト・運用

#### Tips

> Claude API の請求書を見て焦った話：Prompt Caching で月額を 6 割削減。cache_control 1行で$28→$12 — @Pan Jixiao [Zenn](https://zenn.dev/jixiaopan/articles/claude-prompt-caching-cost)

> Claudeに原始人のように喋れ（caveman prompt）と指示してトークン削減する手法の検証と注意点 — @ほーりーふぉっくす [Zenn](https://zenn.dev/holy_fox/articles/e0c0bf75fba9e6)

> Claude Code CLI を API 代わりに使うのを諦めた話。サブスク認証でAPI呼び出しを代替する試みの顛末 — @0xL1C10G [Zenn](https://zenn.dev/0xliclog/articles/ea315228166c56)

#### 中立

> Claudeのレートリミットがきた？喜べよ。レートリミットをソシャゲのスタミナ的に楽しむ提案 — @Sakura [Zenn](https://zenn.dev/sakura7/articles/b41d1a35d50c67)

> AIの素敵なプランに「ズン」とハンコを押したい。AIエージェントのプランを読まずに承認する問題 — @Sangun [Zenn](https://zenn.dev/sangun/articles/159e7676a2e949)

### Claude Code × 外部ツール連携

#### Tips

> OpenAI が Claude Code 向けに公式 Codex プラグインを出した — 使い方と競合共存の読み解き — @zenchaine [Zenn](https://zenn.dev/zenchaine/articles/codex-plugin-for-claude-code)

> 【もうSlackを読むのをやめた】Claude Codeを"AIパートナー化"して朝の情報整理を自動化した話 — @4q_sano [Qiita](https://qiita.com/4q_sano/items/6d2bcfceb4fc2e728204)

### Claude Code 事例

#### Tips

> VBAしか書けなかった会社員が、eラーニング動画制作をPythonで自動化してSaaS公開するまで — @shinomasax [Zenn](https://zenn.dev/shinomasax/articles/cafa1ea93675c3)

> 追放された最弱デバッガのおっさん、AI時代に無双する。デバッグスキルがバイブコーディング時代に最強 — @ゆーの [Zenn](https://zenn.dev/ugu000x/articles/f1bb6f4b9a3e0a)

> Cowork使い始めて1週間、チャットでの4つの悩みが消えた話 — @まじこじま [Zenn](https://zenn.dev/kjmboy/articles/6e3facef2c7b97)

### Claude Mythos Preview（前回から継続）

#### Tips

> Anthropicが発表した新モデル「Claude Mythos」を徹底解説【Project Glasswing】 — @ますみ / 生成AIエンジニア [Zenn](https://zenn.dev/galirage/articles/claude-mythos-preview)

> Project Glasswing入門 — Claude Mythosが全OSでゼロデイを発見する仕組みと防衛戦略 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/193-claude-mythos-glasswing-security-guide)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
