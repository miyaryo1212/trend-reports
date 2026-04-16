---
title: "GPT-Rosalind発表、Codex Appと柔軟価格プラン登場"
summary: "OpenAIが生物・薬発見特化の新モデルGPT-Rosalindを発表。Codex Appの提供開始とTeams向け従量課金プランを投入し、CLI側もv0.122.0安定版がリリースされた。Agents SDK次世代版の発表も継続注目。"
importance: 5
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-17
features:
  - "GPT-Rosalind"
  - "GPT-5.3-Codex"
  - "GPT-5.3-Codex-Spark"
  - "Codex App"
  - "Codex flexible pricing for teams"
  - "Codex for almost everything"
  - "Agents SDK 次世代版"
  - "Codex CLI v0.122.0"
codex_review: "いちばん面白いのは新モデルより、Codexがアプリ化と価格再設計で“研究成果”から“常用インフラ”へ寄ってきた点です。Rosalindは華やかだが、業界全体への効き目は地味にTeams課金とSDK刷新のほうが長く残りそうです。"
codex_importance: 4
---

## 公式アップデート

### GPT-Rosalind（新規）

OpenAIが生物・薬発見分野に特化した新モデル「GPT-Rosalind」を発表。モデル名はDNA二重らせん構造の解明に貢献したRosalind Franklinに由来。Dyno Therapeuticsのタンパク質設計課題では、人間専門家の95パーセンタイル超えの予測性能、シーケンス生成で84パーセンタイルを記録したとの評価が共有されている。フロンティアAIラボが生物・創薬専用モデルを投入する流れの中での位置付け。

[ソース](https://openai.com/)

### GPT-5.3-Codex / GPT-5.3-Codex-Spark（新規）

OpenAI公式サイトで新モデル「GPT-5.3-Codex」の紹介ページが公開。併せて軽量・高速バリアントの「GPT-5.3-Codex-Spark」も提供開始。SparkはProプランで別枠の利用量が設定されている。

[ソース](https://openai.com/)

### Codex App 提供開始（新規）

専用アプリ版「Codex App」の提供が開始された。CLIベースで多機能、Webアクセスも可能。computer use機能やiPhone Mirror連携など、コード補完以外の一般エージェント用途にも射程を広げる打ち出し。

[ソース](https://openai.com/)

### Codex flexible pricing for teams（新規）

Teams向けに従量課金を含む柔軟な価格プランが導入。固定料金なしで全機能を利用可能とし、最大500ドルのクレジット付与を伴う。既存の$20プランに加え、$100プラン（2xリミット・無限compute相当）などが確認されている。

[ソース](https://openai.com/)

### Codex for almost everything（新規）

Codexの用途拡大を打ち出すアップデートが発表。コード編集だけでなく、長時間の実装タスクや既存アプリ拡張・修正を含む幅広い用途をカバーする方向性が示された。

[ソース](https://openai.com/)

### Agents SDK 次世代版（前回から継続）

Agents SDKの大型アップデートが継続して話題。ネイティブサンドボックスサポートを活用したインボイス照合等の実ユースケースが共有されている。

[ソース](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)

### Codex CLI rust-v0.122.0 安定版リリース（新規）

4月16日にv0.122.0の安定版が公開（2026-04-16T21:17:46Z、won-openaiリリース）。直前にalpha.1〜alpha.4のプレリリースが立て続けに公開されており、短期間で正式リリースへ到達。詳細リリースノートは未公開だが、v0.121.0で導入されたマーケットプレイス/メモリモード/MCP Apps関連の改善を引き継ぐ位置付けと見られる。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.122.0)

### Codex CLI v0.121.0の主要機能（前回から継続）

前回報告済みのv0.121.0には以下が搭載されている。

- `codex marketplace add` コマンド（GitHub / git URL / ローカル / marketplace.json URL対応）
- TUI `Ctrl+R` 逆方向検索と承諾済みスラッシュコマンドのローカルリコール
- メモリモード切替・リセット・削除・拡張クリーンアップ
- MCP Appsツール呼び出し、名前空間化MCP登録、並列呼び出しオプトイン
- Realtime/app-server APIの出力モダリティ、トランスクリプト完了イベント、ターンアイテム注入
- bubblewrap対応セキュアdevcontainerプロファイル

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.121.0)

## コミュニティの反応

### GPT-Rosalind

#### ポジティブ

> GPT-Rosalindにアクセスできないが、動画のタンパク質が馴染み深く凄そう。アクセス待ち — @DeryaTR_ [出典](https://x.com/i/status/2044867733586641138)

> フロンティアAIラボが生物・薬発見専用モデルを出す流れ。GPT-Rosalindが薬発見で何を生むか楽しみ — @BoWang87 [出典](https://x.com/i/status/2044869535191478567)

#### Tips

> Dyno Therapeuticsの課題でGPT-Rosalindは人間専門家の95パーセンタイル超えの予測、84パーセンタイルでシーケンス生成。便利なブラックボックスデザイナー — @samsinai [出典](https://x.com/i/status/2044873000860749863)

> モデル名はDNA構造解明に貢献したRosalind Franklinにちなむ — @Michaelzsguo [出典](https://x.com/i/status/2044872784904376755)

#### ネガティブ

> Opus 4.7の後GPT-5.5を待っていたのにGPT-Rosalindか。失望 — @ritesh_khokhani [出典](https://x.com/i/status/2044865855952244867)

### GPT-5.3-Codex

#### ポジティブ

> GPT-5.3-Codexは優れたパフォーマンスだが、突然停止する問題あり — @0xSero [出典](https://x.com/i/status/2042873203094171748)

#### Tips

> Codex Plusの5時間制限に頻繁に引っかかる人は、GPT-5.3-Codexに戻すことを推奨 — @rezoundous [出典](https://x.com/i/status/2043889925687521595)

> GPT-5.4の制御しやすさはGPT-5.3-Codex時代から改善されている — @izutorishima [出典](https://x.com/i/status/2043138176190185637)

#### ネガティブ

> GPT-5.3-Codexは現在実用に耐えないほど劣化し、Plusプランの制限も厳しくなった — @yklnss [出典](https://x.com/i/status/2042990426286887306)

### GPT-5.3-Codex-Spark

#### ポジティブ

> OpenAIがCodex Sparkを軽量高速モデル、5.4 xhighをAR、5.4 proをスナイパーとして多様なモデルでリードしている — @tokenbender [出典](https://x.com/i/status/2044286005717676304)

#### Tips

> ProプランでGPT-5.3-Codex-Sparkは別枠の利用量が設定されている — @shotaro_311 [出典](https://x.com/i/status/2042919028747047301)

#### ネガティブ

> 通常のCodex使用量が尽きてSparkを使ったら、ループして何も達成できない — @codetaur [出典](https://x.com/i/status/2044813933513781754)

> GPT-5.3-codex-sparkは名前通り非常に短命（コンテキストが短い？） — @daniel_nguyenx [出典](https://x.com/i/status/2043339512584216576)

### Codex App

#### ポジティブ

> Codexの長時間実装能力と高精度が魅力。既存アプリの拡張・修正でClaude Codeより優れている — @suna_gaku [出典](https://x.com/i/status/2043830510787670237)

> Codexのcomputer use機能はClaudeのものよりはるかに優れている — @SIGKITTEN [出典](https://x.com/i/status/2044837025539346503)

> フルアクセスのCodex AppはCLIベースで多機能、Webアクセスも可能 — @TAKE_BK6 [出典](https://x.com/i/status/2043951872420311181)

> Codexがsuper app化し、一般agent機能強化の期待大。UIのシンプルさや複数スレッド活用を評価 — @rileybrown [出典](https://x.com/i/status/2043461299049488414)

#### Tips

> Codexのcomputer useとMacのiPhone Mirrorアプリを組み合わせると、iPhone上の任意のアプリを操作可能（デモあり） — @NickADobos [出典](https://x.com/i/status/2044885440092877028)

### Codex flexible pricing for teams

#### ポジティブ

> OpenAIがCodexに従量課金制を導入。固定料金なしで全機能利用可能、チーム向け最大500ドルクレジット付与 — @pop_ikeda [出典](https://x.com/i/status/2043826573330309374)

> 新しいCodex $100プランで2xリミット、無限computeが可能。12%しか使わず毎日構築中 — @rvm0n_ [出典](https://x.com/i/status/2043226492717367747)

> OpenAIの$20 Codexプランが最もコスト効率良い — @radshaan [出典](https://x.com/i/status/2042785678363365830)

#### Tips

> Codex Businessは$25プラン中心、リミット時は従量課金？ Claude Team Premiumのようなシートが欲しい — @naichilab [出典](https://x.com/i/status/2042919446122287137)

> 新$100プラン導入でユーザーセグメント改善、$20-$100間に$50プラン追加提案で柔軟性向上を望む — @normal_evan [出典](https://x.com/i/status/2042531587519332796)

### Codex for almost everything

#### ポジティブ

> Codexの細かいロジック実装精度が向上し、ユーザーの指摘を論破するケースが増加。設計は未完だが実装の正確さが抜群 — @suna_gaku [出典](https://x.com/i/status/2042392442021036171)

> Codexの強みは長時間実装の持続力と高精度。既存アプリの拡張・修正で考慮漏れも指摘してくれる — @suna_gaku [出典](https://x.com/i/status/2043830510787670237)

> エンジニアは独自ローカルLLMよりClaude CodeやCodexを使いたい。AIエージェントのサブスクは福利厚生の重要要素 — @igz0 [出典](https://x.com/i/status/2043647480974491983)

### Agents SDK 次世代版

#### Tips

> OpenAI Agents SDKの大型アップデートでネイティブサンドボックスサポートを活用したインボイス照合タスクのデモを作成・共有 — @crtr0 [出典](https://x.com/i/status/2044481025905201616)

### codex marketplace add コマンド

#### ポジティブ

> Codex v0.121.0のプラグイン/マーケットプレイス拡張（GitHub/git URL/ローカル/marketplace.json対応）を日々の使い勝手を向上させる重要な更新として高評価 — @ZypherHQ [出典](https://x.com/i/status/2044691022173671658)

> v0.121.0のmarketplace addをCodexをエージェント基盤へ進化させる鍵として詳細に分析・称賛 — @KoichiNishizuka [出典](https://x.com/i/status/2044611024238874943)

#### Tips

> Claude Code上でCodexプラグインをインストールする手順を共有（`/plugin marketplace add openai/codex-plugin-cc`使用） — @ComagerTon79278 [出典](https://x.com/i/status/2044182582049550809)

> v0.121.0のmarketplace addを始めとする新機能まとめを共有し、プラグインインストールの容易さを強調 — @Codex_Changelog [出典](https://x.com/i/status/2044526487119007827)

### TUIプロンプト履歴改善

#### ポジティブ

> Codex v0.121.0のTUI改善（Ctrl+R履歴検索とコマンドリコール）を高く評価、日々の使用が速くなる実用的アップデートと紹介 — @ZypherHQ [出典](https://x.com/i/status/2044691022173671658)

#### Tips

> v0.121.0詳細解説、TUIのCtrl+R逆方向履歴検索と承認済みスラッシュコマンドのセッション内記録・呼び戻しをTipsとして挙げる — @akihiro_genai [出典](https://x.com/i/status/2044564113666543778)

### MCP Apps拡張

#### ポジティブ

> MCP Apps拡張が便利で、MCPサーバー提供側のメリットを検討中 — @asap_jumpei [出典](https://x.com/i/status/2043235942983696507)

> Codex CLI v0.121.0アップデート発表。MCPのdirect app tool calls、namespacing、parallel execution opt-inなど改善 — @LLMJunky [出典](https://x.com/i/status/2044531916959801852)

#### Tips

> MCPサーバーの有効化がUIメニューから設定>APIカタログ内のMCPサーバーメニューに変更された — @yonet77 [出典](https://x.com/i/status/2043851847442870373)

### Realtime/app-server API拡張

#### ポジティブ

> Codex v0.121.0の詳細レビュー。プラグイン追加、TUI改善、メモリ制御、MCP拡張、セキュリティ強化を評価し、日々の使い勝手向上をTipsとして共有 — @ZypherHQ [出典](https://x.com/i/status/2044691022173671658)

#### Tips

> v0.121.0のRealtime強化（テキスト/オーディオ制御、完了シグナル、履歴同期、安全ファイル処理）をTipsとして紹介 — @LLMJunky [出典](https://x.com/i/status/2044531916959801852)

#### ネガティブ

> v0.121.0後のlong-runningタスク失敗増加を指摘、メモリ変更が原因か？と懸念 — @anasibnanwar [出典](https://x.com/i/status/2044605366944841757)

### セキュアdevcontainerプロファイル

#### ポジティブ

> Codex 0.121.0のセキュアdevcontainer（bubblewrapサンドボックス、macOS Unixソケットallowlist）のセキュリティ強化を高く評価。Docker/OpenShell対応やallow-list、pen-testを挙げて過去の懸念を解消したと紹介 — @steipete [出典](https://x.com/i/status/2044482797449150520)

#### Tips

> bubblewrapサンドボックスがDocker隔離と比べて特権昇格問題を解決するかを質問（懸念示唆） — @OneManSaas [出典](https://x.com/i/status/2044816727167336866)

### Claude CodeからCodex呼び出し（新規）

#### Tips

> Claude CodeからCodexを呼び出す3つの方法を整理。codex-plugin-cc（方式2・3）は内部的にApp Server Protocol (ASP)を使っている — ぼくのログ [Zenn](https://zenn.dev/bokuno_log/articles/claude-code-codex-call-methods)

### PineScript × GPT-5.3 Codex活用（新規）

#### Tips

> PineScriptエンジンをゼロから作る ― GPT-5.3 CodexとOpenCodeによるPinescriptionの設計と実装。AGENTS.mdで言語仕様・未実装範囲・Goの公開インターフェースを先に固定 — hansheng [Zenn](https://zenn.dev/woodstock_tech/articles/c3a0d8341a9e9b)

### GPT-5.4-Cyber位置づけ（新規）

#### Tips

> OpenAI GPT-5.4-Cyber完全解説 ─ Claude Mythosとの設計思想比較。社内でAIセキュリティツールの選定に関わる読者向けに整理 — GeneLab_999 [Qiita](https://qiita.com/GeneLab_999/items/f9ced57603adb08dd618)

### gpt-realtime GA昇格（前回から継続）

#### Tips

> OpenAI gpt-realtime入門 — SIP・MCP対応の本番音声エージェントをPythonで実装する：プレビュー版は4月30日に非推奨化 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/191-gpt-realtime-sip-mcp-production-guide)

### GPT-5.4 Thinking活用（前回から継続）

#### Tips

> GPT-5.4 Thinking入門 — reasoning.effortとOSWorld-V 75%の推論AIをAPI活用 — kai_kou [Zenn](https://zenn.dev/kai_kou/articles/189-gpt-54-thinking-reasoning-api-guide)

> GPT-5.4 に質問できる Chrome 拡張を作ってみて — opvel [Zenn](https://zenn.dev/opvelll/articles/2e4028b6c16fe5)

### Dify × GPT-5.4ウェブ検索（前回から継続）

#### Tips

> Dify で 外部検索を行うLLMモデル (GPT5.4)を使って、ウェブ検索を実現する方法：Chat Completions APIとResponses APIの違いを踏まえた実装ガイド — kameoncloud [Zenn](https://zenn.dev/kameoncloud/articles/a15ab27f97f632)

### harness engineering（前回から継続）

#### Tips

> ハーネスエンジニアリング入門：AIエージェントの品質を構造で高める5つの要素 — zenchaine [Zenn](https://zenn.dev/zenchaine/articles/harness-engineering-intro)

> ハーネスエンジニアリング実例集：OpenAI・Vercel・LangChain・Manusは何をやったか — Junko [Zenn](https://zenn.dev/junko_ai/articles/5d02fb0692d866)

> AIコーディングの本質はプロンプトではない─OpenAI・Anthropicの公開事例から読み解く「harness engineering」 — slate-infra [Zenn](https://zenn.dev/slate_infra/articles/466e9f4561659d)

### OpenAI APIコスト最適化（前回から継続）

#### Tips

> OpenAI APIのコスト、Batch APIで半額にできるの知ってますか？ — secobaka [Zenn](https://zenn.dev/dely_jp/articles/e8f130cb1b93e9)

### Whisper API活用（前回から継続）

#### Tips

> Whisper APIはどこまでノイズに耐えられるか？ノイズ除去3手法＋VADで徹底検証した — Kojurin [Zenn](https://zenn.dev/kta805/articles/article_whisper_noise_erxperi)

> whisper-1のハルシネーション地獄をgpt-4o-transcribeで完全解消した話 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/whisper-hallucination-gpt4o-transcribe)

### AIエージェント運用（前回から継続）

#### Tips

> AIエージェントにAPIゲートウェイを挟んでよかったこと11選 — qzira [Zenn](https://zenn.dev/qzira/articles/d54866a48ebb60)

### AI運用構造論（前回から継続）

#### Tips

> なぜ私はAIの性能より運用構造を見ているのか：外部記憶、ツール接続、状態持続、再開可能性、監査可能性といったモデル外側の運用構造に注目する視点 — dantarg [Zenn](https://zenn.dev/dantarg/articles/3235e5affbb7c9)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [OpenAI Blog](https://openai.com/news)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
