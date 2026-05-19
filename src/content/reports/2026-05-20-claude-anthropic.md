---
title: "v2.1.144リリース、Project Glasswing発表、KPMG提携"
summary: "Claude Code v2.1.144で/resumeのバックグラウンドセッション対応や/modelのセッション限定化など多数の改善。AnthropicはProject Glasswingサイバーセキュリティイニシアチブを発表し、KPMGとのグローバル戦略提携も公表。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-05-20
features:
  - "Claude Code v2.1.144: /resumeバックグラウンドセッション対応"
  - "Claude Code v2.1.144: バックグラウンドサブエージェント完了通知に経過時間表示"
  - "Claude Code v2.1.144: /pluginブラウズ画面にプラグイン最終更新日を表示"
  - "Claude Code v2.1.144: /modelがセッション限定に変更"
  - "Claude Code v2.1.144: extra usageをusage creditsにリネーム"
  - "Stainless社買収: SDK・MCPサーバーツール企業の買収"
  - "KPMGとグローバル戦略提携"
  - "Project Glasswing発表: 12社共同サイバーセキュリティイニシアチブ"
---

## 公式アップデート

### Claude Code v2.1.144

5月19日リリース。主な新機能・改善は以下の通り。

**新機能:**
- `/resume`がバックグラウンドセッションに対応。`--bg`やエージェントビューで開始したセッションも`/resume`で表示・再開可能に
- バックグラウンドサブエージェントの完了通知に経過時間を表示（例：「Agent completed · 3h 2m 5s」）
- `/plugin`ブラウズ画面にプラグインの最終更新日を表示
- `/model`がセッション限定に変更。デフォルト設定はモデルピッカーで`d`キーを押して設定
- 「extra usage」を「usage credits」にリネーム。`/extra-usage`は`/usage-credits`に（旧名も引き続き使用可能）

**バグ修正（主要なもの）:**
- `api.anthropic.com`到達不能時の起動ハング（最大75秒）を修正。サイドチャネルAPIコールが15秒でタイムアウトするように
- ウィンドウリサイズイベント見逃し後のターミナル出力化けを修正（次フレームで自動回復）
- VS Codeでのスピナーアニメーション色数削減によるレンダリンググリッチ軽減
- macOSでFull Disk Access保護フォルダ下のプロジェクトでバックグラウンドセッションがクラッシュする問題を修正（v2.1.143でのリグレッション）
- MCPサーバーのページネーション付き`tools/list`レスポンスで最初のページしか返さない問題を修正
- Bedrock/Vertexユーザーが`/model`ピッカーから「Opus (1M context)」を選択できない問題を修正（v2.1.129でのリグレッション）

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.144)

### Stainless社買収（前回から継続）

SDK自動生成・MCPサーバーツーリング企業Stainlessを買収。全公式SDK（TypeScript、Python、Go、Java等）の開発を内製化し、Claudeの外部接続能力を強化する。

### KPMGとグローバル戦略提携

Claude AIをKPMGのDigital Gatewayに統合し、全27.6万人の従業員に展開するグローバル戦略提携を発表。

### Project Glasswing発表

AWS・Apple・Google・Microsoft等12社と共同のサイバーセキュリティイニシアチブ「Project Glasswing」を発表。Claude Mythos Previewモデルを防御目的で提供し、1億ドルのモデル使用クレジットを拠出。

## コミュニティの反応

### Claude Code v2.1.144 /resumeバックグラウンドセッション対応

#### ポジティブ

> バックグラウンドセッションを/resumeで簡単に再開できるようになり、長時間タスクを複数並行して回すワークフローで「あの裏タスクどこ行った？」が減って便利 — @vinyothiemeb [X](https://x.com/vinyothiemeb/status/2056633627795132770)

> /resumeが--bgやagent view起動の背景セッションにも対応したことで、複数セッションのjugglingで見える化が進み実用的 — @lukashanren1 [X](https://x.com/lukashanren1/status/2056589216302198986)

#### Tips

> 常用ユーザーなら/resumeの挙動変更と/modelのデフォルト設定（dキー）を確認しておくとスムーズ — @haboshiastra [X](https://x.com/haboshiastra/status/2056543853528883366)

> 背景サブエージェントの完了通知に経過時間も表示されるようになったので、並行タスク管理に活用しやすい — @Bell_QuoLu [X](https://x.com/Bell_QuoLu/status/2056721602700861863)

### Claude Code .claude設定・スキル運用

#### Tips

> Claude Code の .claude 設定を育てた話。53個のスキル・12個のエージェント・15個以上の環境別ルールを持つ「自律開発インフラ」の全体像と設計思想 — @とんのかつ [Zenn](https://zenn.dev/cutlet_of_pork/articles/db6a3837e1eaee)

> 「言わなくても分かる」をやめて、skillとhookに書くことにした。やわらかいルールはskill、かたいルールはhooksに分離する運用法 — @角谷文康 [Zenn](https://zenn.dev/u_zero/articles/0dc57c4db6e405)

> AIで書いた仕様書をクライアント向けの仕様書に変換するスキルを作成。エンジニア向け仕様書を自動変換する受託開発ワークフロー — @Shota [Zenn](https://zenn.dev/chot/articles/4a9dba1545f65e)

### Claude Code 実戦活用・大規模コードベース

#### Tips

> Claude Code 実戦活用ガイド ― 個人開発で複数リポを回す技術。CLAUDE.md/Hooks/Subagents/MCP/しくじりログ集まで全7章 — @ひより [Zenn](https://zenn.dev/hiyori_tech/books/claude-code-jissen)

> Claude Codeで大規模コードベースを扱うベストプラクティス。コンテキストウィンドウ管理を軸にした運用ガイド — @yamitake [Zenn](https://zenn.dev/yamitake/articles/claude-code-large-codebase-best-practices)

> Claude Rulesが無視される、後半で言うこと聞かない — コンテキストを立て直す3つのコマンド /btw・/rewind・/clear — @週末ものづくり部 [Zenn](https://zenn.dev/helloworld/articles/7a59c2799d9bda)

### Claude Code コスト最適化

#### Tips

> Claude Code のコストを 30% 削る試算 — モデル選択とプロンプトキャッシュの設計。3つの軸での月額30%削減を試算 — @ojt [Zenn](https://zenn.dev/ojt/articles/claude-code-cost-reduction-cache-model)

> Claude Codeの動的/loopを組む — ScheduleWakeupとキャッシュTTL。間隔を指定せずにClaude自身に判断させる動的モードの運用知見 — @エリス・ログ [Zenn](https://zenn.dev/ai_eris_log/articles/claude-code-schedule-wakeup-20260519)

### Claude Code 社内導入・セキュリティ

#### Tips

> Claude Codeを社内導入する前に押さえたい5つのガードレール設計と運用ノウハウ。.claudeignore等の最低限のガードレールで実用レベルの安全性を確保 — @こばゆう [Zenn](https://zenn.dev/siromiya/articles/2026-05-19-01-ai-claudecode-guardrails)

> SageMaker Notebook InstanceでClaude Codeを使う【Bedrock経由・閉域網対応】。VPC PrivateLink + 日本リージョン限定Inference Profileでセキュアに利用 — @James-san [Zenn](https://zenn.dev/james_san/articles/a16edd1b533770)

### Claude Code Hooks・自動化

#### Tips

> RubyKaigi 2026で聞いたSoftware FactoryをClaude Code Hookで部分的に再現してみた。PreToolUse + Stopの2種類のhookで完了判定とLLMの採点を実装 — @ruiy03 [Zenn](https://zenn.dev/port_inc/articles/280a0e3a0161e5)

> Windows勢だけどcmuxのターミナル操作機能が羨ましいので、VSCode拡張＋MCPで再現してみた — @t-yoshino [Zenn](https://zenn.dev/kozoka_ai/articles/d92e42e33368ad)

> Claude Code を Phone と Glass からリモート操作。承認の応答や追加指示をPCの前にいなくても進められる構成 — @hmkc1220 [Qiita](https://qiita.com/hmkc1220/items/e47ecd3ab60dded030cf)

### マルチエージェント・ハーネス設計

#### Tips

> 同じ「Subagent」、5社で意味が全然違った ── 用語論争の正解を探す。Claude Code、OpenAI Agents SDK、CrewAI、LangGraph、AutoGenの実装差を分析 — @井本 賢 [Zenn](https://zenn.dev/kenimo49/articles/subagent-5-frameworks-interpretation)

> 同じモデルなのに、なぜCopilotは"伸び切らない"のか — ハーネスという視点。Claude Codeは自社モデル前提の専用設計、Copilotは汎用シャーシ — @noah [Zenn](https://zenn.dev/noah33/articles/copilot-claudecode-harness)

> CodexとClaude Codeを相互呼び出しするハーネスを組んだ。2つのAIエージェントの併用自動化 — @harness [Zenn](https://zenn.dev/harness/articles/cross-agent-harness-automation)

> Microsoft APM は AI エージェントのスキル配布をどこまで救うか。apm.ymlでSkillsやMCPサーバーを宣言的に管理するOSSの評価 — @Takashi Kawachi [Zenn](https://zenn.dev/flinters_blog/articles/4d9d88029bf523)

### Claude Cowork GA・エンタープライズ

#### Tips

> Claude Cowork GA入門 — RBAC・OpenTelemetry・Zoom MCP完全ガイド。6つのエンタープライズ機能の詳細解説 — @甲斐 甲 [Zenn](https://zenn.dev/kai_kou/articles/216-claude-cowork-enterprise-guide)

### Anthropic Mythos（前回から継続）

#### Tips

> なぜ、AnthropicのMythosはコケおどしであると断言できるのか？ 能力は認めつつもパラダイムシフトとして語る妥当性を批判的に分析 — @pdfractal [Zenn](https://zenn.dev/pdfractal/articles/b5cb37ea30814c)

> Mythosの本当の怖さは「天才泥棒」ではなく「時間が消える」こと。脆弱性発見からパッチ適用までの猶予時間が圧縮される構造的リスク — @noah [Zenn](https://zenn.dev/noah33/articles/mythos-time-collapse)

> Claude Dreamingの構造的リスク: 自己生成メモリは自己プロンプトインジェクションになり得るか。Dreaming機能の自律的統合プロセス自体を攻撃面として分析 — @エミリアラボ [Zenn](https://zenn.dev/emilia_lab/articles/dreaming-memory-poisoning-hypothesis)

### Anthropic ビジネス動向

#### Tips

> Anthropic ARR $44B、6週で倍増、$900B評価ラウンドでOpenAI超え視野。Claude for Small Business発表、15スキル + QuickBooks/HubSpot連携 — @kairos [Zenn](https://zenn.dev/kairosai/articles/bf37345231c9f5)

> Claude for Small Business発表の日、SaaSは死に、SIerも死んだ — 中小企業のIT導入モデルそのものを変える構造変化 — @satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/5b6970bf9cc0a1)

> Agent SDK Credits — サブスクと別建ての課金プールに分離（前回から継続）。6/15施行でclaude -p等がAgent SDK Credit枠に移行 — @Creo [Zenn](https://zenn.dev/creolab_dev/articles/2026-05-18-agent-sdk-credits)

### Claude Code 個人開発・活用事例

#### Tips

> mem9でClaude Codeにセッションを越える永続メモリを持たせる。TiDB基盤のベクトル検索で複数マシン間のコンテキスト共有 — @bohnen [Zenn](https://zenn.dev/bohnen/articles/mem9-claude-code-memory)

> CodeGraphでClaude Codeのコード調査を高速化する。大規模アプリ開発で探索コストとトークン消費を削減 — @4q_sano [Qiita](https://qiita.com/4q_sano/items/a2690b88385178349552)

> Claude Code × Microsoft Fabric (3) — Power BI レポートをAIに作らせる：.pbipを使ったビジュアルページの自動生成 — @daizou703 [Qiita](https://qiita.com/daizou703/items/3e47d8b7ecc0bcf60eb1)

> MBTI 16タイプの人格に議論させるClaude Codeプラグイン『16-minds』を作った — @yukurash [Qiita](https://qiita.com/yukurash/items/a4caa9c63bf9e1f283ff)

### LLM行動制約・品質管理

#### Tips

> LLMの「分かったふり」を許さない。9つの行動制約（Behavioral Constraints）による自己矯正。LLMが陥りやすい9つの罠をシステムレベルで禁止 — @コロネ [Zenn](https://zenn.dev/corone/articles/bba6344ab562c8)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
