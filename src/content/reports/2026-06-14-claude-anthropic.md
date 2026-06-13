---
title: "Fable 5米輸出規制で全面停止＋Claude Corps発表"
summary: "米政府の輸出管理指令によりFable 5/Mythos 5が公開3日で全ユーザー停止。Anthropicが非営利向けAI人材フェローシップ「Claude Corps」を発表。Claude Code v2.1.176/v2.1.177がリリース。"
importance: 4
channel: "Claude / Anthropic"
channelId: "claude-anthropic"
date: 2026-06-14
features:
  - "Claude Code v2.1.176"
  - "Claude Code v2.1.177"
  - "Fable 5 / Mythos 5 アクセス一時停止"
  - "Claude Corps"
codex_review: "Fable 5の停止は派手な事件だが、本当に重いのはモデル供給が地政学で止まる現実が開発運用の前提になったことだ。Claude Corpsは地味だが、AI企業の社会実装競争としては案外筋がいい。"
codex_importance: 4
---

## 公式アップデート

### Fable 5 / Mythos 5 アクセス一時停止

米国政府の輸出管理指令により、Fable 5およびMythos 5への全ユーザーアクセスが停止された。6月9日の一般公開からわずか3日後の措置。指令の内容は「外国籍者（Anthropic社内の外国籍従業員を含む）によるアクセス停止」で、外国籍のみをリアルタイムに判別できないため、全顧客向けに停止する対応が取られた。特定のジェイルブレイク手法の存在が背景にあるとされる。

### Claude Corps

Anthropicが非営利団体にAI人材を配置する12ヶ月のフェローシッププログラム「Claude Corps」を発表。Anthropicが全額出資し、CodePathおよびSocial Financeと連携。18団体が参加予定。

### Claude Code v2.1.176（6月13日）

主な変更点:
- **セッションタイトルの会話言語対応** — セッションタイトルが会話の言語で生成されるように（`language` 設定で言語固定も可能）
- **`footerLinksRegexes` 設定** — 正規表現マッチによるフッター行リンクバッジを追加。ユーザー設定・管理設定から構成可能
- **Bedrock認証キャッシュ改善** — `awsCredentialExport` からの認証情報が固定1時間ではなく `Expiration` までキャッシュされるように
- **`availableModels` 強制の穴塞ぎ** — エイリアスモデル選択が `ANTHROPIC_DEFAULT_*_MODEL` 環境変数でブロック対象モデルにリダイレクトされる問題を修正。`/fast` もallowlist外モデルへの切り替えを拒否
- **auto modeのFable 5フォールバック修正** — Opus 4.8未有効の組織でFable 5利用時に分類器が失敗する問題を修正。利用可能な最適Opusモデルにフォールバック
- **hookの`if`条件修正** — `Edit(src/**)`, `Read(~/.ssh/**)`, `Read(.env)` などのパス指定パターンが正しくマッチするように
- **Linux sandbox修正** — `.claude/settings.json` が絶対パスターゲットのシンボリックリンクの場合に起動失敗する問題を修正
- **tmuxクリップボード修正** — `/copy` やマウス選択コピーがSSH経由tmux内でシステムクリップボードに届かない問題を修正
- **Remote Control修正** — 接続時のモデル切り替え、切断通知のコード表示、アカウント切り替え時の切断など複数の問題を修正
- **`/cd`・worktree修正** — ディレクトリ移動後にgitブランチ表示が古いままになる問題を修正
- **バックグラウンドセッション修正** — `/bg` 実行時の永続Working表示、PR URL検索、Windows関連の複数修正

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.176)

### Claude Code v2.1.177（6月13日）

パッチリリース。詳細な変更内容は未公開。

[ソース](https://github.com/anthropics/claude-code/releases/tag/v2.1.177)

## コミュニティの反応

### Fable 5 / Mythos 5 アクセス一時停止

公開3日での全面停止は衝撃的な出来事として、日本語コミュニティでも大量の記事が一斉に公開された。

#### ネガティブ

> 公開3日で全停止。一次ソースで経緯を整理。外国籍だけ弾けないため全顧客停止に至った — @sa-san [Zenn](https://zenn.dev/satoyoshi/articles/5b81b3b128246d)

> ハイエンドAIが半導体や暗号技術と同じ「国家が流通を管理する戦略技術」になった転換点 — @SØNDER 01 [Zenn](https://zenn.dev/sonder01/articles/claude-fable-ai-geopolitics)

> `claude-fable-5` が一晩で404になった日。モデルID固定をやめて退避ルートを設計する必要性 — @中村 啓 [Zenn](https://zenn.dev/hironakamura_ai/articles/1a6f1ff1157ab5)

> Claude Codeで突然「モデルが存在しないかアクセス権がない」。輸出管理指令による停止の実体験 — @yamadatt [Zenn](https://zenn.dev/yamadatt/articles/20260613-fable5-access-suspended)

> リリース3日で政府ストップ。AIの進化スピードがSFなら止め方までSFになった — @岸本悠佑 [Zenn](https://zenn.dev/acntechjp/articles/082b222ee54977)

> Claude Mythos 5・Fable 5アクセス一時停止の影響と対応策まとめ — @picnic [Qiita](https://qiita.com/picnic/items/1e3c86d0d2adfa24103b)

#### Tips

> Fable 5はどんなコーディング特性だったのか。Opus 4.8と統計的に比較した技術記録。Fable 5は防御的・堅牢設計重視、Opus 4.8は構造・可読性重視 — @Nori [Zenn](https://zenn.dev/nnakapa/articles/lab-26-fable5-opus48-coding-traits)

> Fable 5にローカルLLMで動くコーディングエージェントを作らせていた。停止で試作中の仕組みを供養 — @Yuuki.Y [Zenn](https://zenn.dev/yy7613/articles/173404d60a6150)

> Claude API最新動向まとめ。Fable 5登場・モデル廃止・破壊的変更を完全解説 — @picnic [Qiita](https://qiita.com/picnic/items/ed4312c9a468f9d9e6c7)

### Claude Code v2.1.176

#### Tips

> v2.1.176のモデル制御の抜け穴修正とバグ修正まとめ。availableModelsの強制回避が塞がれた点に注目 — @picnic [Qiita](https://qiita.com/picnic/items/618da2497af1c1bf0f91)

### Claude Code 活用・運用

#### Tips

> ネスト型サブエージェント入門。v2.1.172で追加された最大5階層の設計とトークン設計の勘所 — @kai_kou [Qiita](https://qiita.com/kai_kou/items/618da2497af1c1bf0f91)

> CLAUDE.mdに書いたのに守られない。その正体は「渡す場所」の設計。7つのレイヤーを解剖 — @saitoko [Zenn](https://zenn.dev/tottoko_hamu/articles/2026-06-11-173500)

> 禁止事項はCLAUDE.mdに書いて、settings.jsonで二重ロックする。「お願いレベル」から「機械的ブロック」へ — @shun [Zenn](https://zenn.dev/shunaibuilder/articles/4da9252a4a62a4)

> Claude Codeの/goalで「完了まで自律実行」を実現する。毎ターン「続けて」と打つ問題を解消 — @qumo [Zenn](https://zenn.dev/tatsuqumo/articles/d10494cb4a440e)

> Hooks×Routines×Workflowで開発自動化パイプラインを構築する。3層の使い分け判断基準 — @ohno [Zenn](https://zenn.dev/0h_n0/articles/3a4fdda1d5c743)

> AIに「やるな」と書いても無駄だった。機械で止める3層ガードレールの実践 — @Yuhta Ihara [Zenn](https://zenn.dev/yuhtaihara/articles/ai-guardrails-machine-level)

> PRレビューのワークフローにAI秘書を挟む。Claude Code Routinesで朝昼夕3回自動トリアージ — @たわ [Zenn](https://zenn.dev/pivotmedia/articles/scheduled-ai-pr-review-triage)

> Handover.md「決定ログ」を実際の開発で運用してみた実例編。不採用案と理由を残す効果 — @just2enough [Zenn](https://zenn.dev/just2enough/articles/0d31c9d5bf3f52)

> マルチエージェント組織は何もしなくても腐っていく。CLAUDE.md増殖とPlaybook孤立の2つの腐敗パターン — @saitoko [Qiita](https://qiita.com/saitoko/items/23f6709fc0de71332f91)

> ツール結果に紛れた偽の停止指示を観測。AIエージェントへの指示注入（prompt injection）とその検出 — @fixU [Zenn](https://zenn.dev/fixu/articles/fake-system-reminder-injection)

> 監査駆動フィードバック開発という考え方。AI開発で怖いのは大量のバグではなく少数の整合性崩壊 — @ichikawa [Zenn](https://zenn.dev/ichikawa_y/articles/audit-driven-feedback-development)

## ソース

- [GitHub - Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- [Zenn - Claude Code トピック](https://zenn.dev/topics/claudecode)
- [Zenn - Claude トピック](https://zenn.dev/topics/claude)
- [Zenn - Anthropic トピック](https://zenn.dev/topics/anthropic)
- [Qiita - ClaudeCode タグ](https://qiita.com/tags/claudecode)
- [Qiita - Claude タグ](https://qiita.com/tags/claude)
