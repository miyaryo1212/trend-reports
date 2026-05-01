---
title: "Codex v0.129.0-alpha連続リリース、OpenAI新記事複数公開とSWE-bench終了宣言"
summary: "Codex CLI v0.129.0-alpha.3まで連続リリース。OpenAIがCodex Harness解説記事・セキュリティ方針記事を公開、SWE-bench Verified評価終了を発表。ChatGPTにWorkspace Agents導入、広告テスト開始、Thinking with Images発表。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-02
features:
  - "Codex CLI v0.129.0-alpha.3"
  - "Codex CLI v0.128.0 /goalワークフロー"
  - "Codex CLI v0.128.0 codex updateコマンド・TUIカスタマイズ"
  - "Codex CLI v0.128.0 権限プロファイル拡張"
  - "Codex CLI v0.128.0 プラグインマーケットプレイス"
  - "Codex CLI v0.128.0 外部エージェントセッションインポート"
  - "Codex CLI v0.128.0 MultiAgentV2設定強化"
  - "Codex CLI v0.128.0 --full-auto非推奨化"
  - "Codex Harness公開記事"
  - "Codexセキュリティ方針（SAST非採用）"
  - "SWE-bench Verified評価終了"
  - "Workspace Agents in ChatGPT"
  - "ChatGPT広告テスト"
  - "Thinking with Images"
codex_review: "Codex周辺の改修ラッシュ自体より、SWE-bench終了とWorkspace Agents導入が象徴的だ。派手さは薄いが、評価軸をベンチから実務運用へ移す転換点としてかなり重要に見える。"
codex_importance: 5
---

## 公式アップデート

### Codex CLI v0.129.0-alpha.3

5月1日にかけてv0.129.0-alpha.1〜alpha.3が連続リリース。Rust版のアルファビルドで、リリースノートは各バージョンとも「Release 0.129.0-alpha.x」のみで詳細は未公開。

- [v0.129.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.3)
- [v0.129.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.2)
- [v0.129.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.1)（前回から継続）

### Codex CLI v0.128.0（前回から継続）

v0.125.0からv0.128.0へのメジャーリリース。/goalワークフロー永続化、プラグインマーケットプレイス、パーミッションプロファイル拡張、MultiAgentV2設定強化、外部エージェントセッションインポート、`--full-auto`非推奨化など多数の変更を含む。

[Changelog: rust-v0.125.0...rust-v0.128.0](https://github.com/openai/codex/compare/rust-v0.125.0...rust-v0.128.0) / [リリースページ](https://github.com/openai/codex/releases/tag/rust-v0.128.0)

### 新規公開記事（サイトマップ検出）

以下の記事がOpenAI公式サイトに新規掲載された（サイトマップから検出）:

- **Unlocking the Codex Harness**: Codex Harnessに関する解説記事
- **Why Codex Security Doesn't Include SAST**: CodexのセキュリティアプローチについてSAST（静的アプリケーションセキュリティテスト）を採用しない理由を解説
- **SWE-bench Verified評価終了**: OpenAIがSWE-bench Verifiedの評価を終了する方針を発表
- **Workspace Agents in ChatGPT**: ChatGPTにワークスペースエージェント機能を導入
- **ChatGPT広告テスト**: ChatGPTで広告表示のテストを開始
- **Thinking with Images**: 画像を使った思考機能を発表

## コミュニティの反応

### /goalワークフロー

#### ポジティブ

> Codex CLI 0.128.0の新機能'/goal'を詳細に紹介。スレッドで目的を永続化し、pause/resume/clear操作可能。config.tomlで有効化。今後の継続作業エージェントとして重要 — @akihiro_genai [X](https://x.com/i/status/2049990531934282050)

> /goal機能で目標設定後、AIが自走継続。人間の停止判断不要に進化 — @LangZhu20213 [X](https://x.com/i/status/2050106116496122102)

#### Tips

> /goal機能を活用した長期タスクの運用Tips：完了条件明確化、検証含め、脱線時goal回帰、pause/resume活用 — @hikariraina [X](https://x.com/i/status/2050116924747747383)

### --full-auto非推奨化

#### ネガティブ

> Codex CLI v0.128.0で--full-autoが効かなくなり、コマンドラインに破壊的変更 — @ingenieur_affai [X](https://x.com/i/status/2050266827637604371)

> v0.128.0で--full-autoがDeprecatedになり、今までの使い方でエラー発生 — @2020_hira [X](https://x.com/i/status/2050112473202848009)

> v0.128.0で--full-autoが効かなくなった — @cgbeginner [X](https://x.com/i/status/2050255179858219392)

#### Tips

> Codex CLI 0.128.0の新機能として、Permission profilesが拡張され、--full-autoが非推奨化 — @hir08ma [X](https://x.com/i/status/2050136878821839202)

> v0.128.0で権限プロファイルなどの改善 — @haboshiastra [X](https://x.com/i/status/2049899550647914547)

### プラグインマーケットプレイス・全体

#### ポジティブ

> v0.128.0の更新をまとめ、プラグイン導入周りの改善を含む新機能を紹介 — @haboshiastra [X](https://x.com/i/status/2049899550647914547)

> リモートCodex活用でLP作成無限可能と興奮 — @ura_okuribito [X](https://x.com/i/status/2049452956328788203)

> Codex Computer Useで権限オフでも実行可能、安全性高くハーネス強い — @knshtyk [X](https://x.com/i/status/2049849942941016182)

### Codex Harness

#### ポジティブ

> OpenClawのグループチャット改善とCodex Harnessへの切り替えを強く推奨、性能向上を強調 — @steipete [X](https://x.com/i/status/2049988836160074022)

> GPT 5.5 + Codex HarnessがOpusを超えたと絶賛 — @thetreygoff [X](https://x.com/i/status/2048435781165875315)

> GPT5.5のgoblin問題をCodex Harness移行で解決とユーモア交じり解説 — @iamBarronRoth [X](https://x.com/i/status/2049123594467475481)

> TV/ライト制御とWhoopデータ連携の実装例を共有、Codex Harness使用 — @nickbaumann_ [X](https://x.com/i/status/2048477720938729942)

#### ネガティブ

> Codex Harnessのデフォルト実践が奇妙、調整例共有 — @jalilwahdat [X](https://x.com/i/status/2048457699818414456)

### SWE-bench Verified評価終了

#### ネガティブ

> OpenAIがSWE-bench Verifiedの報告を停止、59.4%に欠陥テストと訓練汚染判明でSOTA頭打ち — @__su888 [X](https://x.com/i/status/2048888167227372011)

> OpenAIがSWE-bench Verifiedを終了宣言、自社モデルが支配したベンチが死に、新ベンチはScale AIのみ — @FlahertyNoa [X](https://x.com/i/status/2049896617461883145)

> SWE-bench Verified殺した、hard問題の59.4%に壊れたテストでrecall測ってただけ — @JayTL00 [X](https://x.com/i/status/2048538846695202855)

#### Tips

> OpenAIがSWE-bench Verifiedはフロンティア能力測れずと宣言、ベンチ飽和と欠陥で数値は真実語らず — @ai_satoru_chan [X](https://x.com/i/status/2048555786507526322)

> SWE-bench Verifiedはもう使えず、開発者は合成ベンチより実世界メトリクスに頼れ — @devfaizanali [X](https://x.com/i/status/2049460186969202688)

### Workspace Agents in ChatGPT

#### ポジティブ

> OpenAIがChatGPTにworkspace agentsを静かに導入。カスタムエージェント構築、bulk mails送信、メトリクスレポート自動化など。Business/Enterprise/Edu/Teachers限定の研究プレビュー — @athrix_codes [X](https://x.com/i/status/2049789662571725185)

> ChatGPTにワークスペースエージェント登場。Codexベースでレポート/コード/Slack対応/メール下書きなど。管理・承認の重要性も指摘 — @re_a_takaki [X](https://x.com/i/status/2049076678341898278)

> ChatGPT Enterprise向けWorkspace Agents解禁。組織データ活用の自動化で業務加速 — @airiaiai8 [X](https://x.com/i/status/2048210012670157012)

> Workspace Agentsで複数ツール横断の複雑業務自動化。少人数チームの強力ツールとして高評価 — @takao_meliorra [X](https://x.com/i/status/2048167686321135695)

#### Tips

> ChatGPTのWorkspace Agentsはプロンプト単発からチーム共有の作業型へ進化。Google Drive/Slack連携、スケジュール実行、権限管理など。業務分解してエージェント化のTips — @i10kin [X](https://x.com/i/status/2049060516103090452)

### Thinking with Images

#### ポジティブ

> OpenAIの「thinking with images」に対する外部ツール依存を指摘しつつ、MLLMsのネイティブgrounding能力を活用・スケールする方向がDeepSeek V4で検証され進化したことを称賛 — @xwang_lk [X](https://x.com/i/status/2049879685073650085)

### Codex CLI 入門・活用（Zenn/Qiita）

#### Tips

> コーディングエージェントにおけるプロンプトキャッシュの仕組み — なぜ最初のターンはトークン使用量が多く見えるのか（前回から継続） — tsho [Zenn](https://zenn.dev/snowflakejp/articles/4def632fe30a9b)

> OpenAI Codex CLI 入門：ターミナルで完結する次世代AIコーディングエージェント（前回から継続） — AInohogosya [Zenn](https://zenn.dev/ainohogosya/articles/386a02f7d7a32a)

> AIと相談しながら研究案を広げるローカルマインドマップ assisted-mindmapを作った（前回から継続） — Ayato Kaku [Zenn](https://zenn.dev/ayarnte/articles/6a8fc50e6380e3)

> OpenAI版とAnthropic版のskill-creatorをコードから比較（前回から継続） — purple [Zenn](https://zenn.dev/purple_matsu1/articles/20260424-anthropic-skill-creator)

> OpenAI Codex デスクトップ完全ガイド — Skills・Plugins・Automationsを使いこなす（前回から継続） — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/openai-codex-complete-guide)

> Mastra公式動画解説。OpenAIはなぜ「1行も手書きしない開発」を目指すのか（前回から継続） — jun shiromizu [Zenn](https://zenn.dev/shiromizuj/articles/ef991cdc0f844e)

### OpenAI Agents SDK

#### Tips

> OpenAI Agents SDKを使ってマルチエージェントシステムを作ってみた（前回から継続） — ちとせみ [Zenn](https://zenn.dev/titosemi/articles/f6b906d40bee8a) / [Qiita](https://qiita.com/titosemi/items/17fbeed696ae162c614b)

### GPT-5.5 / OpenAI業界動向

#### Tips

> GPT-5.5徹底比較：Claude Opus 4.7・Gemini 3.1 Pro・DeepSeek V4との性能差を検証（前回から継続） — ohno [Zenn](https://zenn.dev/0h_n0/articles/b18fe46f73041d)

> OpenAIがAzure独占を終了、GPT-5.5がAWS Bedrockに来た衝撃（前回から継続） — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/5a7174269d870b694aa0)

> OpenAI Codex Hackathonで優勝。開発プロセスがどう変わったかの振り返り（前回から継続） — Su Yan [Zenn](https://zenn.dev/sboai_tech/articles/655e2e86cba4ae)

### GPT Image 2

#### Tips

> GPT image 2でレポートを作るプロンプト設計（前回から継続） — you [Zenn](https://zenn.dev/you_dev_zenn/articles/gpt-image-2-report-prompts)

> GPT Image 2プロンプト500件をGitHubで公開（前回から継続） — monkeyapp [Zenn](https://zenn.dev/monkeyapp/articles/7f1487217ba843)

> GPT Image 2をAnifunで試してみたら、漫画制作が一気に変わった話（前回から継続） — Mio [Zenn](https://zenn.dev/anifun_ai/articles/793c706d1df5d9)

> GPT-image-2でAIアクションフィギュアを作ろう — 自分だけのフィギュアをAPI一発で生成 — xujfcn [Qiita](https://qiita.com/xujfcn/items/9e252328bac486ab4b25)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
