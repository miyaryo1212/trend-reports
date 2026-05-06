---
title: "レート制限倍増・SpaceX提携・Claude Code v2.1.129の大型更新"
summary: "Claude Codeの5時間あたりレート制限が全プランで即時2倍に。SpaceXから300MW超の計算能力を確保。Claude Code v2.1.129ではプラグインURL取得、skillOverrides、履歴検索改善など多数の新機能。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-07
features:
  - "Claude Codeレート制限倍増"
  - "Claude Opus APIレート制限引き上げ"
  - "SpaceXコンピュート提携"
  - "Claude Code v2.1.129リリース"
  - "Claude Code v2.1.131リリース"
  - "金融サービス向けエージェントテンプレート10種公開"
  - "Microsoft 365向けClaudeアドイン"
  - "金融データコネクタ追加"
codex_review: "今回の本丸は機能追加そのものより、計算資源とレート制限を同時に積み増して“使える開発基盤”へ寄せた点だと思う。派手さはあるが、業界全体ではモデル性能競争より運用体験の勝負が本格化したサインとして地味に重い。"
codex_importance: 4
---

## 公式アップデート

### Claude Codeレート制限倍増

Pro・Max・Team・Enterpriseプランの5時間あたりレート制限を即時2倍に引き上げ。ピーク時間帯の制限削減も撤廃され、時間帯を問わず安定した利用が可能に。

### Claude Opus APIレート制限引き上げ

Claude Opusモデル向けのAPIレート制限を引き上げ。大規模なAPI利用ケースでの制約が緩和。

### SpaceXコンピュート提携

SpaceX Colossus 1データセンターから300MW超・NVIDIA GPU 22万基超の計算能力を確保。上記レート制限の引き上げを支えるインフラ投資。

### Claude Code v2.1.129リリース

5月6日リリース。主な変更点:

- `--plugin-url <url>` フラグ追加: URLからプラグイン`.zip`アーカイブをセッション単位で取得可能に
- `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` 環境変数: Homebrew/WinGetインストール時にバックグラウンドで自動更新・再起動プロンプト
- `skillOverrides` 設定: `off`でモデルと`/`から非表示、`user-invocable-only`でモデルのみ非表示、`name-only`で説明を折りたたみ
- Ctrl+R履歴検索が全プロジェクト横断デフォルトに復帰（Ctrl+Sで現プロジェクト/セッション絞り込み）
- Gateway `/v1/models` ディスカバリーが `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` でオプトイン化
- サードパーティデプロイ（Bedrock, Vertex, Foundry等）でAnthropic固有のスピナーTipsを非表示化
- `claude_code.pull_request.count` OTelメトリクスがMCPツール経由のPR/MR作成もカウント
- ポリシー拒否エラーメッセージにAPI Request IDを追加
- 1時間プロンプトキャッシュTTLが5分にダウングレードされる問題を修正
- `Bash(mkdir *)`, `Bash(touch *)` 等の許可ルールがプロジェクト内パスで適用されない問題を修正
- OAuth refresh後のsleep復帰時ログアウト競合を修正
- `/context` がASCII可視化グリッドを会話に出力し約1.6kトークンを浪費する問題を修正
- その他多数のバグ修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.129)

### Claude Code v2.1.131リリース

5月6日リリース。修正内容:

- VS Code拡張がWindows上でハードコードされたビルドパス（`createRequire`ポリフィルバグ）により起動失敗する問題を修正
- Mantleエンドポイント認証で`x-api-key`ヘッダーが欠落する問題を修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.131)

### 金融サービス向けエージェントテンプレート10種公開（前回から継続）

ピッチブック作成、KYC審査、月次決算等の金融業界向けAIエージェントテンプレートをClaude CoworkやClaude Codeプラグインとして提供。

### Microsoft 365向けClaudeアドイン（前回から継続）

Excel、PowerPoint、Word用のClaudeアドインを提供開始。Outlook対応も予定。

### 金融データコネクタ追加（前回から継続）

Dun & Bradstreet、Fiscal AI、Moody's等の金融データパートナーとの新規コネクタを追加。

## コミュニティの反応

### Claude Codeレート制限倍増

#### ポジティブ

> Claude Codeの利用上限が2倍になり、ピーク時間制限も撤廃。AIで稼ぎたい個人ユーザーにとって大きな追い風 — @wad0427 [X](https://x.com/i/status/2052070936866869396)

> レート制限の倍増とピーク制限撤廃に興奮、開発者が本気モードでラップトップを開く準備万端 — @asakura0x [X](https://x.com/i/status/2052092720504771056)

> ピーク時の使用制限が撤廃され、Claude Codeの作業枠が広がることに感謝。SpaceX提携の恩恵を実感 — @joho_no_todai [X](https://x.com/i/status/2052073083515916317)

#### ネガティブ

> 5時間制限は倍増したが週制限据え置きで不満。OpenAIの10倍制限に比べてAnthropicの発表を皮肉る — @flavioAd [X](https://x.com/i/status/2052070674479390875)

> 5時間制限倍増は嬉しいが週制限が変わらず、しかもClaudeがダウンしたことに失望 — @LexnLin [X](https://x.com/i/status/2052068445328392333)

### Claude Codeサブエージェント活用

#### Tips

> Claude Codeサブエージェント完全マスター本。定義、フロントマター15項目、description設計、4設計原則、Skills vs Agentsの判断軸、公式プラグイン3種解読まで — @まさやん [Zenn](https://zenn.dev/masayan1126/books/claude-code-subagents-master)

### Claude Codeが23年もののLinuxカーネルバグを発見

#### ポジティブ

> Linux kernelメンテナーのGreg Kroah-HartmanがKubeCon Europeで「先月、何かが変わった。世界が切り替わった」と発言。AIによるバグ報告の質が突然「本物」になった — @横井のAI日和 [Zenn](https://zenn.dev/yokoi_ai/articles/cc-2026-05-06)

### Claude Code自動化・bypass permissions運用

#### Tips

> Claude Codeに寝てる間に働いてもらう。「bypass permissions」を事故らせない5つのポイント — @やまと [Zenn](https://zenn.dev/yamato_snow/articles/a8fd6f4e0fa39c)

> AI駆動開発の2層ガード設計: PlanGateとRiver Reviewerで実装前後を守る — @mine_take [Zenn](https://zenn.dev/minewo/articles/ai-dev-guardrail-plangate-river-reviewer)

### Claude Codeセキュリティ実践

#### Tips

> Claude Codeでpre-pushフックを作る。APIキー漏洩を防ぐ自動チェック — @REON [Zenn](https://zenn.dev/rcn_article/articles/rc-claude-code-pre-push-secrets)

> 「Claude Codeに全部やらせる時代が来た」のか検証。claude-security-scanをOWASP Juice Shopで再評価 — @okazu [Zenn](https://zenn.dev/okazu_dm/articles/83957f1623ec4d)

### Claude Codeの開発手法（前回から継続）

#### Tips

> Claude Code × MCPでGA4レポートを毎朝Slack通知する仕組みを作った — @ウェブの便利屋 [Zenn](https://zenn.dev/web_benriya/articles/claude-code-mcp-ga4-slack-daily-report)

> AWS CDK × Claude Codeでチケット管理アプリを作る【バックエンド編・完結編】 — @pekopugu [Zenn](https://zenn.dev/pekopugu/articles/aws-cdk-ticket-app-03)

> Claude Codeで /dev-log 作ったら、振り返りがめちゃくちゃ楽になった。Git履歴から自動生成する仕組み — @むね [Zenn](https://zenn.dev/mune_actor_en/articles/44a0373cf2cbdd)

> Claude Code Routinesで週次生成AIトレンド記事を自動生成するパイプライン — @tm_dev [Zenn](https://zenn.dev/tm_dev/articles/2026-05-06-zenn-auto-publish-schedule)

> claude -p で純粋テキストだけ返してもらう方法。ヘッドレス構成で期待した本文が返ってこない問題の解決 — @tech-book.net編集部 [Zenn](https://zenn.dev/tbnet/articles/claude-code-headless-text-output)

### Claude Codeハーネス設計（前回から継続）

#### Tips

> skillsに全振りしてdocs,rules,commandsを削るコスパ重視のハーネス実装案。全プロバイダー対応を意識した構成 — @artie [Zenn](https://zenn.dev/einperience/articles/9d09a83e75694a)

> チーム設定配布戦略: プラグインで機能をパッケージ化する。marketplace経由の配布まで — @yukika [Zenn](https://zenn.dev/yukika/articles/20260506_claudecode_team_distribution_1_plugin)

> 約18万文字の自前ルールを書いたけど、結局ぜんぶ捨てて1000文字弱のCLAUDE.mdに戻した話 — @vppysk [Zenn](https://zenn.dev/yskuue/articles/8466548b4474ae)

### Claude Code Auto Memory運用

#### Tips

> Claude Code Auto Memory運用で踏んだ5つの罠と設計原則。CIが不安定になり、古い情報に引きずられた実体験 — @dtakamiya [Zenn](https://zenn.dev/miyan/articles/claude-code-auto-memory-ops-guide-2026)

### Opus 4.7の実践評価（前回から継続）

#### ポジティブ

> 私がOpus 4.7を「アホになった」とあまり感じなかった理由。要件定義の書き方次第で性能差は出にくいという考察 — @yamk [Zenn](https://zenn.dev/yamk/articles/opus-47-requirements-driven)

### Claude Advisor Tool

#### Tips

> Claude Advisor Tool入門。SonnetとOpusを組み合わせてコスト削減と品質向上を両立する実装方法 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/207-claude-advisor-tool-guide)

### 金融サービス向けエージェント（前回から継続）

#### Tips

> Claude金融サービスエージェント入門。10テンプレートとMicrosoft 365連携の全解説 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/a7ee596517f0520f3cc3)

> Anthropic×Blackstone合弁企業入門。15億ドルで変わるClaudeエンタープライズ展開の全貌 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/5d35749a652bd314d2af)

### Claude Codeスラッシュコマンド活用

#### Tips

> Claude Codeのスラッシュコマンド7個でPR準備を15分短縮した話 — @Ngen [Qiita](https://qiita.com/Ngen/items/7b1d2c3ee313c37c7608)

### AIコーディングエージェントの仕組み

#### Tips

> OpenCodeから学ぶAIコーディングエージェントの仕組み。ツール実行プロセスをオープンソースで解説 — @take0(たけまる) [Zenn](https://zenn.dev/tko_kasai/articles/3dcc584ad61735)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
