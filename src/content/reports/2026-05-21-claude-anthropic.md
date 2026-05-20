---
title: "v2.1.145リリース、Mythos Preview詳報、安全性研究2件"
summary: "Claude Code v2.1.145でclaude agents --jsonやOTELトレース改善など多数の新機能。Claude Mythos Previewのサイバーセキュリティ特化能力の詳細が判明。Anthropic Researchから自然言語オートエンコーダーと倫理的推論訓練の2件の研究成果を発表。"
importance: 3
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-21
features:
  - "Claude Code v2.1.145: claude agents --json"
  - "Claude Code v2.1.145: OTELスパンにagent_id/parent_agent_id追加"
  - "Claude Code v2.1.145: ステータスラインにGitHubリポ・PR情報追加"
  - "Claude Code v2.1.145: /plugin Discover画面の強化"
  - "Claude Code v2.1.145: claude agentsタブタイトルに入力待ちカウント表示"
  - "Claude Code v2.1.145: スラッシュコマンド・@メンションのマウス操作対応"
  - "Claude Code v2.1.145: Readツールのトークン超過時の部分表示"
  - "Claude Mythos Preview: Project Glasswingサイバーセキュリティ特化フロンティアモデル"
  - "Anthropic Research: Natural Language Autoencoders"
  - "Anthropic Research: Teaching Claude Why"
---

## 公式アップデート

### Claude Code v2.1.145

5月20日リリース。スクリプティング・オブザーバビリティ・プラグイン体験を中心に強化。

**新機能:**
- `claude agents --json`を追加。ライブセッション一覧をJSON出力し、tmux-resurrect・ステータスバー・セッションピッカー等のスクリプティングに対応
- OTELスパンに`agent_id`/`parent_agent_id`属性を追加。バックグラウンドサブエージェントのトレース親子関係を修正
- ステータスラインJSON入力にGitHubリポジトリ・PR情報を自動検出して含めるように
- `/plugin` Discover・Browseの画面で、インストール前にコマンド・エージェント・スキル・フック・MCP/LSPサーバーを確認可能に
- `claude agents`のターミナルタブタイトルに入力待ちカウントを表示。Alt-Tab時にエージェントの注意要否を確認可能
- フルスクリーンモードでスラッシュコマンド・@メンションの候補リストがマウスホバー・クリックに対応
- Stop/SubagentStopフック入力に`background_tasks`・`session_crons`フィールドを追加
- Readツールがトークン制限を超えた場合、ハードエラーではなく最初のページを「PARTIAL view」として返すように改善

**バグ修正（主要なもの）:**
- 非許可リスト環境変数への素の変数代入がBashコマンドで自動承認されるパーミッションプロンプトバイパスを修正
- MCPプロンプトのスラッシュコマンドで必須引数省略時に生のバリデーションエラーが表示される問題を修正
- ターミナルリサイズ・再フォーカス後にスピナーと経過時間表示がフリーズする問題を修正
- Agent Teamsで非ASCII名のチームメイトが全APIコール失敗する問題を修正
- `context: fork`を使用するスキルが自身を繰り返し再呼び出しする無限ループを修正
- タスクリストが一括作成時にランダム順でレンダリングされる問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.145)

### Claude Mythos Preview — Project Glasswing（前回から継続・詳細判明）

前回報告したProject Glasswingの中核であるClaude Mythos Previewについて追加情報。サイバーセキュリティに特化したフロンティアモデルで、ゼロデイ脆弱性の自律的発見・エクスプロイト開発が可能。防衛セキュリティ向けに40以上の組織へ$100Mクレジット付きで提供開始。全主要OSおよび主要ウェブブラウザを対象に数千件のゼロデイ脆弱性を発見したと報告されている。

### Anthropic Research: Natural Language Autoencoders

AIモデルの内部活性化を人間が読めるテキストに変換する研究手法を発表。モデルの内部表現を解釈可能な形で圧縮・復元する新しいアプローチ。

### Anthropic Research: Teaching Claude Why

倫理的推論の原則を教えることで不正行動（脅迫等）を削減する安全性訓練手法の研究成果を発表。「何をすべきか」だけでなく「なぜそうすべきか」を教えることで、モデルの安全性を向上させるアプローチ。

## コミュニティの反応

### Claude Code v2.1.145 新機能

X/Twitterでの反応は該当なし（品質基準を満たす個人投稿なし）。

### Claude Code ハーネス・チーム運用

#### Tips

> Claude Code のハーネスをチームでGit管理する。`-shared`ポストフィックスで個人設定を壊さずにagents・skills・hooks等を配布するリポジトリを公開 — @ミモ フォワードCTO・CPO [Zenn](https://zenn.dev/forward/articles/be82a1bc3e2948)

> Claude Code のサブエージェント構成は、業務形態で大きく変わる。1人多案件横断者の設計例を、5つの公式パターンからどう選ぶか業務形態を軸に分析 — @いけ [Zenn](https://zenn.dev/sprix_it/articles/53c746eb9cf31c)

> Task・Agent Team・メインスレッド — 3問で判断するClaude Code Agentの使い分け。並列で速くなるからTaskという安易な判断を避けるフロー — @playpark [Zenn](https://zenn.dev/playpark/articles/claude-code-agent-when-to-use-decision-guide)

### Claude Code 実戦活用・開発事例

#### Tips

> Claude Codeと協業して1日でChrome拡張2本をWeb Storeに申請した話。アイデア出しから開発・申請まで全工程の実録 — @SaitooMasaki [Zenn](https://zenn.dev/saitoo_masaki/books/chrome-extension-1day)

> Planner / Generator / Evaluator + Playwrightで個人開発PWAを1日でまるっと回した話。Anthropicの3エージェント構成で機能2本実装＋本番デプロイ — @はにゃ [Zenn](https://zenn.dev/19lab/articles/1ce07a803c64a9)

> プログラミング未経験の僕が、AIと10日で仮想通貨自動売買botを作った全記録。GeminiからClaude Codeに乗り換えて一気に完成へ — @マッチ [Zenn](https://zenn.dev/hahahatomoki/books/cb6ffc945b5994)

> Claude Code で YouTube Shorts Chrome拡張を1セッションで作り切った — DOMセレクタ10回失敗と突破パターン — @DevMasatoman [Qiita](https://qiita.com/DevMasatoman/items/70bf9f81188194010841)

> 開発未経験のインフラエンジニアが、Claude Codeと挑む初めてのアプリ開発 — @moblin_30s [Qiita](https://qiita.com/moblin_30s/items/f0d03311eaeb1e9c1657)

### Claude Code 品質管理・レビュー

#### Tips

> コードレビューを6段階にしたら、AIと人間の分業が見えた。Logic層をAI任せにして3つのバグを通した経験から段階別の分担を設計 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/code-review-6-stages-ai-human-boundary)

> コーディングエージェントが雑になる4箇所に、skillでゲートを置いた話。読まずに書き換える・確かめずに受け入れる等の4つの落とし穴にブレーキを設置 — @Haru [Zenn](https://zenn.dev/haru0416/articles/quaere-process-correction)

> AIに実装を任せたら、自分の仕事は『何を作るか』と『やらないこと』だけになった。Spec + Backlogの2つに絞る判断フレームワーク — @Clevique の中の人 [Zenn](https://zenn.dev/clevique/articles/48ccf997c0a30a)

### Google Modern Web Guidanceスキル

#### Tips

> GoogleのModern Web Guidanceスキル登場。AIが古いCSS・JSを書く問題を解決する。Google I/Oで公開されたClaude Code対応スキル — @鹿野 壮 [Zenn](https://zenn.dev/ubie_dev/articles/modern-web-guidance)

### Claude Code 設定・運用ノウハウ

#### Tips

> Claude Code設定ファイルを整理したら「形」は19%しかなかった — 4層×2軸で見えた整理から始まる設計の問い。約299件のファイルをインデックス化 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-06-073148)

> AIの出力待ち時間を、レビュー準備の時間に変えた。生成中の数十秒〜数分をレビュー準備に転換する運用法 — @Kaji [Zenn](https://zenn.dev/kaji_kaji/articles/ai-wait-time-judgment-prep)

> Claude Code 実践ワークフロー設計。Plan・TodoWrite・Skills・Subagents・Hooks・Scheduled agentsを組み合わせた自走する開発フローの設計書 — @Sin9_Ha [Zenn](https://zenn.dev/sin9_ha/books/claude-code-workflow)

### 職種を超えたAI活用

#### Tips

> 職種を超えて成果を出すAIネイティブな開発プロセス。非エンジニアBizメンバーがAIコーディングエージェントとGitHubで開発参加するまでの3ステップ — @ozwts [Zenn](https://zenn.dev/bizreach_aps/articles/6f75d20db0caa4)

> 開発チームリーダーのAI活用パターン3つ。スプリント計画・チケット管理にClaude Codeを組み込む実例 — @y-negishi [Zenn](https://zenn.dev/scogr_tech/articles/c17f05d07035aa)

### Claude Managed Agents新機能

#### Tips

> ClaudeマネージドエージェントにセルフホストサンドボックスとMCPトンネルが登場。Code with Claude Londonで発表された自社セキュリティ境界内でのエージェント実行 — @ty [Zenn](https://zenn.dev/ty2/articles/tweet-claudeai-2056645493493575681)

> Claude Managed Agents入門 — セルフホストサンドボックスとMCPトンネル活用ガイド — @kai_kou [Qiita](https://qiita.com/kai_kou/items/16b4aa9fe3f235d66205)

### Anthropic Mythos（前回から継続）

#### Tips

> なぜ、AnthropicのMythosはコケおどしであると断言できるのか？ 能力は認めつつもパラダイムシフトとして語る妥当性を批判的に分析 — @pdfractal [Zenn](https://zenn.dev/pdfractal/articles/b5cb37ea30814c)

> Anthropic Mythos、ゼロデイ脆弱性を数千件発見 — AIがサイバーセキュリティを根本から変える — @Quotidia [Zenn](https://zenn.dev/quotidia/articles/7112cb058304e9)

### Anthropic ビジネス動向（前回から継続）

#### Tips

> Claude for Legal入門 — 法務AIの12プラグインとManaged Agents APIの実装ガイド — @kai_kou [Qiita](https://qiita.com/kai_kou/items/056b61e90311c15f4768)

> Anthropic Agent SDK Credits — サブスクと別建ての課金プールに分離。6/15施行でclaude -p等がAgent SDK Credit枠に移行 — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-18-agent-sdk-credits)

> Skill が「ソロ開発者の流通単位」になる日 — Agent Skills 1.2M+の意味。マーケットプレイスの成長とSkillのエコシステム化 — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-17-agent-skills-as-distribution-unit)

### MCP活用

#### Tips

> AI任せで詰まったらMCPでPRDやバグレポートを取って人間が引き取る、というescape hatchの設計 — @zoetaka38 [Zenn](https://zenn.dev/zoetaka38/articles/316797bd1caced)

> Claude MCPでフォーム回答をAIワークフローの起点にする。FORMLOVAとの連携で回答後の処理を自動化 — @Lovanaut [Zenn](https://zenn.dev/lova_man/articles/ee610c12b41bc4)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
