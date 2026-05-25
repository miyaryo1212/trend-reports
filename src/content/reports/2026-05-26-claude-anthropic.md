---
title: "公式更新なし、コミュニティはマルチエージェント運用と非エンジニア活用に注力"
summary: "本日の公式アップデートはなし。Project Glasswing・Claude Mythos Previewは前回から継続。コミュニティではClaude Codeのマルチエージェント運用ガイド、Codex併用、非エンジニアによるAIチーム構築、Workflow機能の発見など実践的な記事が多数投稿された。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-26
features:
  - "Anthropic: Project Glasswing（Claude Mythos Preview）（前回から継続）"
  - "Claude API: Claude Mythos Preview（前回から継続）"
codex_review: "新機能不在でも熱量が落ちず、むしろ運用知の洗練が前に出てきたのは面白い。派手さは薄いが、非エンジニア活用や並列運用の蓄積こそ次の普及局面を決める地味に重要な材料だと思う。"
codex_importance: 3
---

## 公式アップデート

本日の公式アップデートはありません。

### Claude Mythos Preview — Project Glasswing（前回から継続）

サイバーセキュリティ特化のフロンティアモデル。12社の創設パートナーと40以上の組織に提供。$100Mクレジット。新規情報なし。

### Claude Code 最新バージョン

v2.1.150（5月23日リリース、内部インフラ改善のみ）が最新。前回レポート以降の新リリースはなし。

## コミュニティの反応

### Claude Code マルチエージェント・並列運用

#### Tips

> Claude Code マルチエージェントを0から作る実践ガイド — 設計から運用まで。10日間動かしているシステムの設計をベースに、権限分離・コンテキスト分割が有効な場面を整理 — @こびと社 [Zenn](https://zenn.dev/m1no/articles/2026-05-15-claude-code-multiagent-guide)

> Claude Code に社長室を作る — AIエージェントのタスクキューをPythonで可視化。Markdownファイルをキューとして使い、FastAPI + HTMLで状態把握 — @こびと社 [Zenn](https://zenn.dev/m1no/articles/2026-05-15-claude-code-task-board)

> コードを書けない私がClaude Codeで「AIチーム」を回すまで。9体のAIエージェント編集部を「作る」から「回す」へ。Playbook・委任プロトコル・三層品質ゲートの設計 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/books/operating-ai-team-without-code)

> Claude Code Agent Viewとgit worktreeで、Issue実装とPRレビューを並列に走らせる。複数Agent並列時の作業ディレクトリ競合問題と解決策 — @shockpan-web [Qiita](https://qiita.com/shockpan-web/items/cfb3c1492bf77c655d5e)

> claudeのAIエージェントチームにCodexを迎えた話 — ステートフル混合チームのオンボーディング作法。実装は完璧でも完遂作法4つが漏れていた教訓 — @いち [Zenn](https://zenn.dev/i_ichi/articles/multiagent-llm-onboarding-handbook)

### Claude Code vs Codex 使い分け

#### Tips

> Codexは骨組みを作り、Claude Codeは育てる — 18日で個人開発アプリをリリースして気づいた使い分け。Codexは曖昧な指示でも全体構造を生成、Claude CodeはPlanモードでUI/UXの作り込みが得意 — @ユイチロ [Zenn](https://zenn.dev/spade3/articles/613a673cdce288)

### Claude Code Workflow機能の発見

#### Tips

> MCPとSkillsに続く第3の革命：Claude Code WorkflowがultraworkでAgentをコードに焼き付ける。ChangeLogから消えたにも関わらずコード本体に残存し動作する未公開機能の解説 — @lumichy [Zenn](https://zenn.dev/lumichy/articles/claude-code-workflow-ultrawork-2026)

### Claude Code スキル設計

#### Tips

> skillは増やすほど強くなるのか — 『More Skills, Worse Agents?』を読む。役に立つskillだけを集めても数が増えるとエージェントはむしろ弱くなる。弱くなる理由が直感と違う — @Haru [Zenn](https://zenn.dev/haru0416/articles/more-skills-worse-agents)

> Claude Code Skills に全部学ばせて壊した話 — 記憶を3階層に分ける設計。共通ナレッジ層スキルを素朴に作った結果、判断基準がブレた失敗と解決策 — @cnative_tkb [Zenn](https://zenn.dev/cnative_tkb/articles/950bd3d7894a60)

> Claude Code から Mac の Music.app を AppleScript で操る /dj スキルを自作。再生回数とlike/skipフィードバックから嗜好モデルを構築し選曲する実装 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-05-22-235707)

> 【Claude Code】打鍵テストスキルのご紹介。VSCode Copilot Chatでの課題を解決するテストケース管理・DB検証SQL・スクリーンショット統一の仕組み — @aya [Zenn](https://zenn.dev/aya/articles/d83bf5e11d964a)

### Claude Code セッション管理・運用

#### Tips

> Claude Codeのセーブ設計、実運用で踏んだ穴。「完了したはずの作業を再着手しそうになった」問題と、.claude_state.mdの設計上の落とし穴 — @月村つかさ [Zenn](https://zenn.dev/tsukasa_art/articles/claude-workflow-2)

> Claude Codeがセッションをまたいで「覚えている」仕組みを自作。毎月1〜2時間の「文脈回復」コストを解消するセッション間情報引き継ぎ — @yamada-ai-dev [Zenn](https://zenn.dev/yamada_ai_dev/articles/claude-code-cross-session-memory)

> ToolブロックをClaudeの自己修正に変えるhooks設定。PreToolUse フック + exit 2でブロック理由を渡し、その場で自己修正させるパターン — @Giana12th [Zenn](https://zenn.dev/giana12th/articles/6df4b4e7265608)

> Claude CodeのAuto Modeは「承認ボタンを減らす機能」ではなく、開発の任せ方を変える話。AIに任せる作業の粒度が一段大きくなる — @剛 [Zenn](https://zenn.dev/taketsuyo/articles/ab209b1d5401c1)

### Claude Code 実務活用事例

#### Tips

> Claude Code で内製する Slack × AWS IAM Identity Center の一時権限付与ワークフロー。申請から権限付与・自動失効までを一気通貫で実行 — @ari（カンリー SRE） [Zenn](https://zenn.dev/canly/articles/00-pub-04-aws-iam-temporary-access)

> AIで加速するプロダクトの変化を、開発チームの外に届ける仕組みづくり。Claude Code ActionsでUI変更を自動通知 — @ryo_kawamata（Nstock） [Zenn](https://zenn.dev/nstock/articles/ui-change-notifier)

> 夜、コードを書いて、自主保育サークルのお母さんたちを救う。LINE・Googleフォーム・スプレッドシートの手作業をClaude Codeで仕組み化 — @しろっぷ村山 [Zenn](https://zenn.dev/syrup/articles/9d1da41438b069)

> 個人開発の麻雀アプリをClaudeと並走して月額課金アプリとしてリリースするまで。Claude Codeをハーネスとした設計判断ログ — @khale [Zenn](https://zenn.dev/khale/articles/oreno-majan-release-decision-log)

> Slackのスタンプ1つでClaudeが改修PRを作るBotを作った。/post → 承認スタンプ → GitHub Issue → Claude Code Action → PR — @Kouki Nakae [Zenn](https://zenn.dev/uguisu_blog/articles/4d42dfe5cd18bd)

> 人事・総務・企画の方へ：Claude Desktopでスライド更新を「チャットに指示するだけ」にした話。非エンジニアでも使える繰り返し作業の仕組み化 — @uekkie（ソニックガーデン） [Zenn](https://zenn.dev/sonicgarden/articles/598cd30fb40ae3)

> ClaudeをAmazon Bedrockで安全に使うためのガードレール設計：Guardrails・IAM・SCP・ログ監査の実践パターン — @ziffy [Qiita](https://qiita.com/ziffy/items/16bcaaf1a2b271c8d3e7)

### Claude Opus 4.7

#### Tips

> Claude Opus 4.7の3つの強化点と2つの新機能を公開情報から整理する。SWE-bench Verified 87.6%、タスクバジェット・xhigh effortの解説 — @Goki602 [Zenn](https://zenn.dev/goki602/articles/2026-05-24-claude-opus-4-7-what-changed)

> Claude Opus 4.7の100万トークン、本当に使い切れるのか — モノレポ丸投げで実測。1M tokenコンテキストの実用性検証 — @kenimo49 [Qiita](https://qiita.com/kenimo49/items/59ace7346579dc9997a9)

> Claude Opus 4.7・GPT-5.5・Gemini 3.5 Flashを実コードで比較。同一タスクでの応答品質比較 — @kairos [Zenn](https://zenn.dev/kairosai/articles/45d48becd6b864)

### Claude Mythos Preview（前回から継続）

#### ネガティブ

> なぜ、AnthropicのMythosはコケおどしであると断言できるのか？ 能力は認めつつも、パラダイムシフトとして語る妥当性に疑問を呈する批判的分析 — @pdfractal [Zenn](https://zenn.dev/pdfractal/articles/b5cb37ea30814c)

### AI開発の学び・リグレッションテスト

#### Tips

> LLMだからこそのリグレッションテストのすすめ — テストが仕様書になる。更新されない「死んだドキュメント」より実装と同期する生きたテストが信頼できる — @m [Zenn](https://zenn.dev/mk668a/articles/8e2bbd38694ebb)

> AI開発のためにMacの蓋を閉じてもスリープしないCLI「awake」を作った。pmset+caffeinateのラッパー — @Yuki Tanabe（CureApp） [Zenn](https://zenn.dev/cureapp/articles/2b09dcc8947af9)

> 親方エージェントと毎日ふりかえりをするワークフロー。Claude Codeで日次ふりかえりとKPT準備を自動化 — @makky（ソニックガーデン） [Zenn](https://zenn.dev/sonicgarden/articles/402096a0f7b0c2)

### Anthropic Partner Basecamp

#### Tips

> Anthropic Partner Basecampに参加してきたお話。サンフランシスコでの2日間ハンズオン、世界各国のパートナーの熱量に感銘 — @伊佐眞皇 [Zenn](https://zenn.dev/shino_i/articles/f7a8f6a949d596)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
