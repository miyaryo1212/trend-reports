---
title: "/goalワークフローに注目集中、GPT-5.4とCodexアップグレード発表"
summary: "Codex CLI v0.128.0の/goalワークフローがコミュニティで大きな反響。GPT-5.4発表、Codexアップグレード・チーム向け柔軟プラン等の新記事が公式サイトに登場。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-05-03
features:
  - "Codex CLI v0.129.0-alpha (Rust rewrite)"
  - "Codex CLI v0.128.0 /goalワークフロー"
  - "Codex CLI v0.128.0 codex updateコマンド"
  - "Codex CLI v0.128.0 権限プロファイル拡張"
  - "Codex CLI v0.128.0 プラグインマーケットプレイス"
  - "Codex CLI v0.128.0 外部エージェントセッションインポート"
  - "Codex CLI v0.128.0 MultiAgentV2設定強化"
  - "Codex flexible pricing for teams"
  - "Codex for almost everything"
  - "Introducing upgrades to Codex"
  - "GPT-5.4発表"
codex_review: "/goalの盛り上がりは、モデル性能そのものより運用の連続性が競争軸に移ったことを示していて興味深い。GPT-5.4発表は話題先行気味だが、地味に効くのはCodexのワークフローと権限設計の改善だと思う。"
codex_importance: 4
---

## 公式アップデート

### Codex CLI v0.129.0-alpha.3（前回から継続）

5月1日にv0.129.0-alpha.1〜alpha.3が連続リリース。Rust版アルファビルドで、リリースノートは「Release 0.129.0-alpha.x」のみ。本日時点での追加リリースはなし。

- [v0.129.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.3)
- [v0.129.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.2)
- [v0.129.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.1)

### Codex CLI v0.128.0（前回から継続）

v0.125.0→v0.128.0のメジャーリリース。/goalワークフロー永続化、プラグインマーケットプレイス、パーミッションプロファイル拡張、MultiAgentV2設定強化、外部エージェントセッションインポート、`--full-auto`非推奨化など多数の変更を含む。

[Changelog: rust-v0.125.0...rust-v0.128.0](https://github.com/openai/codex/compare/rust-v0.125.0...rust-v0.128.0) / [リリースページ](https://github.com/openai/codex/releases/tag/rust-v0.128.0)

### 新規公開記事（サイトマップ検出）

以下の記事がOpenAI公式サイトに新規掲載（サイトマップから検出、詳細未確認）:

- **Codex flexible pricing for teams**: チーム向け柔軟な価格プランに関する記事
- **Codex for almost everything**: Codexの汎用利用拡大に関する発表
- **Introducing upgrades to Codex**: Codexの機能アップグレード発表
- **GPT-5.4発表**: 新モデルGPT-5.4のリリース

## コミュニティの反応

### /goalワークフロー

#### ポジティブ

> Codex CLI 0.128.0の新機能'/goal'を詳細に紹介。目的設定、pause/resume/clearの使い方と今後の可能性を解説 — @akihiro_genai [X](https://x.com/i/status/2049990531934282050)

> /goalコマンドがCodex App上でも動作確認。config読み込みで永続化可能 — @gota_bara [X](https://x.com/i/status/2050403904785903967)

> 最新Codex CLIの/goal追加を評価。長時間タスク継続に便利で従来手法を変える可能性 — @makaneko_AI [X](https://x.com/i/status/2050076825561555334)

> Codex CLIの/goalがralph loopsを実現。GPTモデルとの相性良く、継続タスクに有効 — @kr0der [X](https://x.com/i/status/2050003302960513491)

> GPT 5.5 Codex CLI /goalでLego Star Warsゲームを1shot構築デモ — @chatgpt21 [X](https://x.com/i/status/2050359808344092732)

#### Tips

> 技術調査 - Codex /goal：Ralph loopパターンの内製化として位置付け、永続化の仕組みと運用方法を解説 — suwa-sh [Zenn](https://zenn.dev/suwash/articles/codex_goal_20260502)

> 【激震】OpenAI Codex CLIに「ゴール永続化」が来た！Claude Codeを脅かすMultiAgentV2の全貌 — emi_ndk [Qiita](https://qiita.com/emi_ndk/items/377f89d24b6ea520e90b)

### codex updateコマンド

#### ポジティブ

> Codex CLI 0.128.0のcodex updateコマンドがサポートされ、/goal機能で目標指向の作業が可能になった点を高く評価 — @mattlam_ [X](https://x.com/i/status/2049907603829121354)

> v0.128.0更新で目標設定・再開機能が強化され、作業範囲設計の重要性が高まる — @KoichiNishizuka [X](https://x.com/i/status/2050013091694579752)

### Introducing upgrades to Codex

#### ポジティブ

> Codexのブラウザ/コンピューター使用機能が驚くほど優秀で、既存ツール比で飛躍的な改善 — @btraut [X](https://x.com/i/status/2048454957469417941)

> Codexの安定性向上に注力したアップデートに好感、機能拡張も活発 — @oyamon_dev [X](https://x.com/i/status/2049239044132139247)

> CodexデスクトップUIが大幅アップデート、ブラウザ操作スムーズ化など — @b0941015 [X](https://x.com/i/status/2050037301011783942)

#### ネガティブ

> Codexは有用だが派手なアップグレードより基本機能の信頼性向上を優先せよ — @t_yonemura [X](https://x.com/i/status/2050030967197495794)

#### Tips

> CodexアプリのTODOリアルタイム更新改善を提案、進捗追跡が向上 — @byteprobe [X](https://x.com/i/status/2048192313390981202)

### GPT-5.4

#### ポジティブ

> GPT-5.4を使って時々ゲームを作り始めた。AIはもっと楽しいことに活用すべき — @akihiro_genai [X]

> GPT-5.5-highがWeirdMLでSOTA、GPT-5.4よりトークン使用少なく安価 — @scaling01 [X]

#### ネガティブ

> DeepSeek-V4がGPT-5.4をプログラミング・数学・推論で上回り、APIが10-50倍安く1Mコンテキスト — @Nona_xai [X]

> ARC-AGI-3でGPT-5.4: 0.20%、低スコアで失敗モード分析 — @chatgpt21 [X]

#### Tips

> DeepSeek v4 proがGPT-5.4より15.5倍安くOpus4.6並み品質、Codexと組み合わせTips — @cjzafir [X]

### 権限プロファイル拡張 / プラグインマーケットプレイス / 外部エージェントセッションインポート / MultiAgentV2設定強化

該当なし。過去7日間で条件を満たすX投稿は見つからなかった。

### Codex flexible pricing for teams

該当なし。

### Codexゲーム開発バズ（Zenn新着）

#### Tips

> Codexゲーム開発バズの正体──Claude Codeとの違いと実務プロンプト集。設計思想の違いを整理し目的別使い分けを提案 — まぁちゃむ [Zenn](https://zenn.dev/machamu/articles/codex-claude-code-game-dev-comparison)

> ChatGPT 5.5とCodex新機能で何が変わる？実行型AI時代の開発ワークフロー完全ガイド — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/chatgpt55-codex-new-features-2026)

> GPT-5.5にも『指示の型』を ─ 3モード Agent Skillとコスト最適化ルーティング — shinyay [Zenn](https://zenn.dev/shinyay/articles/gpt-5-5-prompt-optimization-copilot-skill)

> Codexのペット機能を試してみた — ヨシダ ヨシヲ [Zenn](https://zenn.dev/is0383kk/articles/3844fd62b68dd1)

### GPT-5.5 / セキュリティ（Zenn新着）

#### Tips

> Mythosを上回ったGPT-5.5の実力、英国AISIが明かしたAIサイバー能力と、複数モデルが同時に危険領域へ到達したことへの警鐘 — satoshi yoshida [Zenn](https://zenn.dev/syoshida07/articles/8500be545f59c5)

### Codex CLI リファレンス（Qiita新着）

#### Tips

> Codex CLI 実用リファレンス：モデル・認証・料金（2026-05時点） — akatsuki39 [Qiita](https://qiita.com/akatsuki39/items/936806eba6098d830432)

> Codex Petsを試してみたら、ぴよちゃんが動き出した — Tadataka_Takahashi [Qiita](https://qiita.com/Tadataka_Takahashi/items/568fdb50617c5d55db14)

## ソース

- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
