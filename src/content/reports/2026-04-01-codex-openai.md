---
title: "$122B調達発表、Codex CLI 0.118.0安定版リリース"
summary: "OpenAIが$122Bの大型資金調達を発表。Codex CLI 0.118.0が安定版としてリリースされ、Windows sandbox強化や動的トークンリフレッシュなど多数の新機能を搭載。コミュニティではCodexプラグインによるClaude Code連携記事が急増。"
importance: 4
channel: "Codex / OpenAI"
channelId: "codex-openai"
date: 2026-04-01
features:
  - "OpenAI $122B資金調達"
  - "Codex CLI 0.118.0リリース"
  - "Codex CLI 0.119.0-alpha.1リリース"
codex_review: "大型調達は派手だが、私にはCodex CLIの地味な改善群のほうが本質的に映る。資金ニュースより、現場で使える道具としての信頼性が一段上がった点のほうが業界には効く。"
codex_importance: 4
---

## 公式アップデート

### OpenAI $122B資金調達

OpenAIがフロンティアAIのグローバル展開、次世代コンピュート投資、ChatGPT・Codex・エンタープライズAIの需要拡大に向けて$122Bの新規資金調達を発表。過去最大規模の調達となる。

[ソース](https://openai.com/index/accelerating-the-next-phase-ai)

### Codex CLI 0.118.0 安定版リリース

Codex CLIの新しい安定版v0.118.0がリリースされた。主な変更点:

**新機能:**
- Windows sandboxでOS-levelのegress rulesによるproxy-only networkingを実現（環境変数だけに頼らない方式）
- App-serverクライアントでdevice code flowによるChatGPTサインインに対応（ブラウザコールバックが使えない環境向け）
- `codex exec`でstdinパイプとプロンプトの同時指定が可能に
- カスタムモデルプロバイダーで短期bearerトークンの動的フェッチ・リフレッシュに対応

**バグ修正:**
- プロジェクトローカルの`.codex`ファイルの初回作成時も承認チェックが適用されるよう修正
- Linux sandboxでマルチエントリPATH上の`bwrap`を正しく検出するよう修正
- App-server TUIの複数ワークフロー（hook通知、`/copy`、`/resume`、`/agent`、skillsピッカー）の不具合修正
- MCPサーバーの起動タイムアウト延長とハンドシェイク失敗時の警告表示を改善
- Windows環境での`apply_patch`の冗長なwritable roots問題を修正

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.118.0)

### Codex CLI 0.119.0-alpha.1 プレビュー公開

次期バージョンのアルファプレビューv0.119.0-alpha.1が公開された。詳細な変更内容は未公開。

[ソース](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.1)

## コミュニティの反応

### OpenAI $122B資金調達

#### ポジティブ

> OpenAIが追加$10B調達で総額$120B超え、過去最大規模の資金調達 — @Minh_Q_Tran [X](https://x.com/i/status/2037122650418323814)

> OpenAI、a16zなどから追加$10B調達で総額$120B超予定とCFO発言 — @tmiyatake1 [X](https://x.com/i/status/2036958056886542706)

> サム・アルトマンは資金調達の神、投資家を虜に。OpenAI過去最大約1200億ドル調達 — @Hoshino_AISales [X](https://x.com/i/status/2036703244119081443)

> OpenAI総額1200億ドル調達はAIがインフラ産業として評価された証、データセンター・半導体投資へ — @AkinoriKomi [X](https://x.com/i/status/2036698772521243027)

#### ネガティブ

> この時点でOpenAIに出資するのは博打打ち — @ManjiSuzuki [X](https://x.com/i/status/2036757311193248062)

### Claude Code × Codex プラグイン連携（新規）

#### 解説

> Claude Code × OpenAI Codex プラグイン完全ガイド — セットアップから実践的な使い方まで：OpenAI公式リポジトリ openai/codex-plugin-cc のセットアップ手順と実践的な使い方を網羅 — youishikawa0718 [Qiita](https://qiita.com/youishikawa0718/items/cca8cfcb0a5ebdccdba2)

> MCPで異なるAIモデルを連携させる実践ガイド — Claude Code × Codex CLI (GPT-5.4)：MCPプロトコルでClaude Code（Opus 4.6）とCodex CLI（GPT-5.4）を連携させるワークフローを解説 — tsunamayo7 [Qiita](https://qiita.com/tsunamayo7/items/545a21a13f3b758a7d70)

> Claude CodeにCodexプラグインを入れて、2つのAIに相互レビューさせる：Claude Codeのワークフロー内でCodexにレビューや作業委譲を行うアプローチを紹介 — Na [Zenn](https://zenn.dev/yuche/articles/codex-plugin-claude-code)

> Claude Codeのプラグインcodex-plugin-ccがOpenAI公式から登場した：Claude Code・Codex・Geminiの3モデル使い分けと、公式プラグインで自前連携が不要になった部分を解説 — shiro [Zenn](https://zenn.dev/shiro_coral/articles/99416f51f43d4a)

### はじめてのCodex体験記（新規）

#### 解説

> [Codex]情報系大学院生による「はじめてのCodex」：Claude Codeとの違いを踏まえたCodex入門記事、「はじめての〇〇シリーズ」第2弾 — Humanophilic_development [Qiita](https://qiita.com/Humanophilic_development/items/9f3033016218728e0a18)

### GPT-5.4 UI生成プロンプト実践（前回から継続）

#### Tips

> 【OpenAI公式】GPT-5.4のUI生成を激変させるプロンプト実践とモダンUI設計ガイド：構造化・再利用・例示・コンテキスト付与など、UI生成に特化したプロンプトエンジニアリング手法を整理 — いもふけ [Zenn](https://zenn.dev/imohuke/articles/openai-ui-upgrade)

### Codex Pluginガイド（前回から継続）

#### 解説

> Codex Plugin完全ガイド：Skillとの違い・使い方・自作方法【2026年】：v0.117.0で正式リリースされたPlugin機能の役割、基本構造、導入手順、自作の最小構成を技術的に整理 — とつ@AI活用ラボ [Zenn](https://zenn.dev/totsu_ai_lab/articles/codex-plugin-guide)

### 推論モデルのコスト最適化（前回から継続）

#### Tips

> 推論モデルのコスト最適化をdiffで追跡する — llm-devproxy v0.4：o3/o4-miniでプロンプトの書き方によるコスト差（最大約10倍）を実測 — ash [Zenn](https://zenn.dev/ash4/articles/8973f300141afb)

### DevcontainerでのCodex検証（前回から継続）

#### Tips

> VS Code DevcontainerでCodexのapply_patchを検証したら、runArgsを戻しても通った — dapt [Qiita](https://qiita.com/dapt/items/f0561e7e066d6e1de9b4)

### AIエージェント時代の業界動向（前回から継続）

#### 解説

> AIエージェント時代、業界トップの発言を翻訳・まとめてみた — luoxi [Zenn](https://zenn.dev/luoxi/articles/from-reasoning-to-agents-industry-voices)

### OpenAI Agents SDK実践ガイド（前回から継続）

#### 解説

> OpenAI Agents SDK 実践ガイド——Pythonでマルチエージェントワークフローを構築する — 緒方 [Zenn](https://zenn.dev/bluecat/books/ad31cb6e65673c)

### ハーネスエンジニアリング（前回から継続）

#### 解説

> 「そのSkill、本当に意味ありますか？」Skillのレビューを通じて学ぶハーネスエンジニアリング入門 — kauchi [Zenn](https://zenn.dev/kauchi/articles/learning-harness-engineering-by-skill-review)

### Sora提供終了と移行先（前回から継続）

#### 解説

> さらばSora。動画生成AIの「産業シフト」を読み解き、次世代APIへ移行するための技術スタック — ケン吉 [Zenn](https://zenn.dev/headwaters/articles/0b232a955c458a)

### LLM APIとプライバシー（前回から継続）

#### 注意喚起

> OpenAIにAPIを送るだけで個人情報保護法違反？LLM開発者が知るべきAPPIリスクと対策 — zivuch [Zenn](https://zenn.dev/zivuch/articles/qiita-appi-llm-article)

### OpenAI SDK proxiesエラー対処（前回から継続）

#### Tips

> OpenAI SDK proxiesエラーの完全解決ガイド【httpx 0.28破壊的変更】 — daishir0 [Zenn](https://zenn.dev/daishiro/articles/openai-sdk-proxies-httpx-error)

### LLM本番運用の可観測性（前回から継続）

#### 解説

> LLMアプリを本番運用して気づいた、ログだけでは足りない理由 — FujiTrace [Zenn](https://zenn.dev/fujitrace/articles/d83ee787bab7b7)

## ソース

- [OpenAI Blog](https://openai.com/news)
- [Codex CLI Releases](https://github.com/openai/codex/releases)
- [Zenn OpenAIトピック](https://zenn.dev/topics/openai)
- [Qiita OpenAIタグ](https://qiita.com/tags/openai)
