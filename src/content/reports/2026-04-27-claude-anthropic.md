---
title: "ポストモーテム議論継続、Routines・Skills・マルチエージェント記事が急増"
summary: "公式リリースなし。コミュニティではClaude Code品質低下ポストモーテムの解説記事が続出し、Routinesによるクラウド自動化、Skills設計パターン、マルチエージェント運用の実践知見が一気に厚みを増した。"
importance: 2
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-04-27
features:
  - "本日の新機能抽出なし"
codex_review: "新機能がない日のほうが、RoutinesやSkills、マルチエージェントの運用知が一気に立ち上がるのは面白い。派手さは薄いが、道具そのものより使い方の標準化が進む局面としてはかなり重要だ。"
codex_importance: 3
---

## 公式アップデート

本日の主要な公式アップデートはありません。

直近のリリースはv2.1.120（4月25日）のCHANGELOG更新のみ。

[GitHub Releases](https://github.com/anthropics/claude-code/releases/tag/v2.1.120)

## コミュニティの反応

### Claude Code品質低下ポストモーテム（前回から継続・拡大）

4月23日公開のAnthropic公式ポストモーテムに対する解説・検証記事がさらに増加。3月4日〜4月20日の約7週間にわたる品質低下の原因が製品レイヤーの3つの独立した変更の重なりだったという分析が広く共有されている。

#### Tips

> Claude Code が品質低下してた7週間、Anthropic 公式ポストモーテムを噛み砕いて読むで — 3つの原因が時期をずらして重なった構造を解説。1個のバグなら気づきやすいが複合要因で発見が遅れた経緯を整理 — @まさやん [Zenn](https://zenn.dev/masayan1126/articles/claude-code-april-2026-postmortem)

> Claude Codeが"物忘れ"した1ヶ月 — 体感とAnthropic公式ポストモーテムの答え合わせ（前回から継続） — @サクッとぱんだ [Zenn](https://zenn.dev/sktt_panda/articles/claude-code-quality-decline-postmortem-2026-04)

### Claude Code Routines（クラウド自動化）

スケジュール・API・GitHubイベントをトリガーにClaude Codeをクラウドで自律実行するRoutinesの解説記事が複数登場。自然言語プロンプトで定型作業を自動化する新しいパラダイムとして注目。

#### ポジティブ

> Claude Code Routines — スケジュール・API・GitHub イベントで動く自律型クラウド自動化。GitHub ActionsやcronジョブをRoutinesで置き換え、「何をどう実行するか」ではなく「何を達成したいか」を記述するだけに — @k1t [Zenn](https://zenn.dev/tkou15/articles/claude-code-routines) / @imk1t [Qiita](https://qiita.com/imk1t/items/e1ce3aa10626d8505855)

> LLM Wikiの定期ingestがstream idle timeoutで落ちたので対策した話 — Routinesの実運用で遭遇したタイムアウト問題と解決策 — @biscuit [Zenn](https://zenn.dev/biscuit/articles/claude-routines-ingest-timeout)

### Skills設計パターンとCommands移行

Claude CodeのCustom Skills（旧Commands）の設計ノウハウと移行記事が集中。

#### Tips

> Claude Code の custom skill 設計パターン — 実例で学ぶ SKILL.md の書き方。運用中のskillを解剖し、設計パターンと落とし穴をまとめた — @tetsu [Zenn](https://zenn.dev/gunma/articles/claude-code-custom-skill-patterns)

> .claude/commands/ はもう古い？Commands を Skills へ移行した記録と references/ 設計パターン — references/ディレクトリを使った設計が「なぜ今まで知らなかったのか」と思えるほど便利 — @てん [Zenn](https://zenn.dev/tempeso/articles/8818522685403a)

> Skill が発火しないのは、なぜ？ — descriptionが短すぎるとSkillが発火しない問題。エージェントが判断に必要な情報を削ってしまう落とし穴を解説 — @taka [Zenn](https://zenn.dev/utsutaka/articles/80e375483764d3)

### マルチエージェント運用

Claude Codeの複数エージェント並走・管理に関する実践記事が増加。

#### ポジティブ

> Claude Code を最大30エージェント同時起動 — vibe-editorでマルチエージェント開発を体験。Claude Code専用のマルチエージェント管理デスクトップアプリ — @yusei [Zenn](https://zenn.dev/yusei08/articles/a9bca8914f9760)

> Claude Code マルチエージェント構成の作り方 — 秘書・ライター・リサーチャーを6日で揃えた。朝Slackに3つの通知が来る運用体制 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-04-15-085102)

#### Tips

> 単体エージェントが息切れする現場へ — Anthropic 3エージェントハーネス実装ガイド。Planner / Generator / Evaluatorの責務分割と「いつ使わないか」の判断軸 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/anthropic-3-agent-harness-2026)

> AIへの丸投げと細部の業務設計 — サブセッション自走化で見えた明暗の分岐。サブセッションが自分で完結できる作業の幅を広げた運用進化 — @fixU [Zenn](https://zenn.dev/fixu/articles/subsession-self-drive-guardrails)

#### ネガティブ

> Claude Codeの多重運用OOMをClaude自身と切り分けて、systemd user sliceで止めた記録 — 17セッションまで増やした状態でOOM発生、PID 1まで応答停止。systemd user sliceで囲い込む対策 — @Tom [Zenn](https://zenn.dev/marvelousu/articles/claude-code-oom-systemd-slice)

### Opus 4.7の使い方転換

#### Tips

> Opus 4.7で変わる「AIへの仕事の渡し方」— 4.6ユーザーが問い直すべき6つの思考転換。「4.6までの使い方は、今日でやめろ」という公式メッセージの解説 — @hybrid_masucal [Zenn](https://zenn.dev/hybridworks_10x/articles/e48c062330e9e4)

> Claude Code v2.1.110〜119 の新機能まとめ — tuiとautoScrollEnabled、Ctrl+A/Ctrl+Eのreadline準拠移動など注目機能をピックアップ — @secula [Zenn](https://zenn.dev/secula/articles/846287560cbad2)

### Claude Cowork on Vertex AI

#### 中立

> Claude Cowork on Vertex AI は何が嬉しいのか — Google Cloud Next '26 現地メモ。Vertex AIの文脈でClaude導入を検討する企業向けの情報 — @Kazumasa Iwao [Zenn](https://zenn.dev/mbk_digital/articles/db99a38e334462)

### Anthropic 8.1万人調査

#### 中立

> 若手からの不安、Anthropicの8.1万人調査から読み解く — AIが再編する労働構造と日本企業が直面する組織課題。ソフトウェア開発者の不安が最も強く、キャリア初期の若手ほど不安が強い傾向 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/093aa1cd1d373c)

### Anthropic感情論文の再現

#### Tips

> Anthropicの感情論文をQwen3-4Bで再現した — Claude Sonnet 4.5の内部に感情ベクトル表現が存在することを示した研究を、ローカルモデルで再現。nnsightとGradioで実装 — @ZeroToHero [Zenn](https://zenn.dev/50s_zerotohero/articles/116fc4f3cf9f74)

### Claude Design活用（前回から継続）

#### ポジティブ

> Figma開かんでもデザインできる時代がきたで — Claude Designで初稿まで爆速ガイド。プロトタイプ・ワイヤー・LP・スライド初稿を網羅 — @まさやん [Zenn](https://zenn.dev/masayan1126/books/claude-design)

> Claude Designが変えるデザインワークフロー — Figma AIとの徹底比較（前回から継続） — @zztomcat [Zenn](https://zenn.dev/zztomcat/articles/a840fc4148e334)

### AI駆動開発ワークフロー

#### Tips

> AI を活用した2つの開発フロー — エージェント駆動開発 × ドキュメントファースト開発。0→1と1→Nでリスクの種類が異なるため手法を使い分ける — @m [Zenn](https://zenn.dev/m_525/articles/3556bee089853f)

> AIエージェントのデバッグ skill に「アタリ優先」を仕込んだ話 — 長考型から不完全情報でアタリをつける能力を最大化する方向へskillを再定義 — @こかげ [Zenn](https://zenn.dev/kokagex/articles/65d762a106b513)

> AI駆動開発に「振り返り」を持ち込みたくなった話 — 人間時代のKPTをAI駆動開発に適用する試み — @balista-yu [Zenn](https://zenn.dev/balista/articles/15-article-ai-retrospective)

> DESIGN.mdは「どんなサイトもスキャンして再構築できる」のか — advanced-design-mdによる既存3手段の検証と再設計 — @C [Zenn](https://zenn.dev/marycache/articles/03011f881e36f7)

### MCP認証

#### Tips

> リモートMCPサーバーの推奨認証「CIMD」を解説 — Client ID Metadata Documentsの仕組みと動作を整理 — @tsutsumi389 [Zenn](https://zenn.dev/tsutsumi389/articles/42c62d7011331a)

### Claude Code価格・メモリ

#### 中立

> Claude Codeの価格改定で何が変わったか — ProプランへのClaude Code復活の背景と今後のAI価格について — @doradora_ai_dev [Qiita](https://qiita.com/doradora_ai_dev/items/788893ee5417b0c7de14)

> Claude Codeを使い始めたら最初に知りたい、2つのメモリの使い分け — CLAUDE.mdとMEMORY.mdの違いを整理 — @guidx [Zenn](https://zenn.dev/gui/articles/788fc5b51a23a1)

### Harness Engineering（前回から継続）

#### Tips

> harnessは消えない、ただ移動する — AnthropicとOpenAIが同じ問いに出した違う答え（前回から継続） — @Hongbo.Ding [Zenn](https://zenn.dev/acntechjp/articles/7852387b0a367c)

> harness engineering を 5 層で整理する / agent harnessをPythonで作る（前回から継続） — @luoxi [Zenn](https://zenn.dev/luoxi/articles/harness-engineering-everyday)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
